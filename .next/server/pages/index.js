module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./assets/images/banner/1.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-3bd6d5f8bc9d2feeca3917b6eef4ee73.jpg";

/***/ }),

/***/ "./assets/images/banner/2.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-7ac6e2944d4c9e010136d67ea1ee7cf2.jpg";

/***/ }),

/***/ "./assets/images/banner/3.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-b9923e4821aa7136607f06f5d605082d.jpg";

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

/***/ "./components/ImageCard/ImageCard.js":
/*!*******************************************!*\
  !*** ./components/ImageCard/ImageCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageCard_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageCard.style */ "./components/ImageCard/ImageCard.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\ImageCard\\ImageCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ImageCardNext = ({
  className,
  imageSrc,
  title,
  link,
  meta
}) => {
  const addAllClasses = ['image_card'];
  const pathLink = title.replace(/\s/g, '-');

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: `${link}`,
      query: {
        country: `${pathLink}`
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: imageSrc,
    alt: title,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, title && __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, title), meta && __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["Meta"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }, meta)))));
};

ImageCardNext.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ImageCardNext.defaultProps = {
  link: '#'
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardNext);

/***/ }),

/***/ "./components/ImageCard/ImageCard.style.js":
/*!*************************************************!*\
  !*** ./components/ImageCard/ImageCard.style.js ***!
  \*************************************************/
/*! exports provided: ContentWrapper, Title, Meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ImageCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__ImageCardWrapper",
  componentId: "autsop-0"
})(["> a{display:block;height:370px;position:relative;border-radius:6px;overflow:hidden;> img{width:100%;height:100%;object-fit:cover;position:absolute;left:0;top:0;}}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__ContentWrapper",
  componentId: "autsop-1"
})(["position:absolute;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.4);z-index:2;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "ImageCardstyle__Title",
  componentId: "autsop-2"
})(["color:", ";font-size:25px;line-height:30px;font-weight:700;text-transform:capitalize;text-align:center;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:20px;line-height:28px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const Meta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__Meta",
  componentId: "autsop-3"
})(["color:", ";font-size:17px;line-height:21px;font-weight:400;text-transform:capitalize;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (ImageCardWrapper);

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

/***/ "./components/Map/MapAutoComplete.js":
/*!*******************************************!*\
  !*** ./components/Map/MapAutoComplete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "react-google-maps/lib/components/places/StandaloneSearchBox");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\MapAutoComplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(props => {
  const {
    getinputvalue
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchedLocation: '',
    searchedPlaceAPIData: []
  });

  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});

  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
    getinputvalue(locationInput);
  };

  return __jsx("div", {
    className: "map_autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MapAutoComplete);

/***/ }),

/***/ "./components/Map/mapDataHelper.js":
/*!*****************************************!*\
  !*** ./components/Map/mapDataHelper.js ***!
  \*****************************************/
/*! exports provided: mapDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDataHelper", function() { return mapDataHelper; });
function mapDataHelper(infoValue) {
  const tempMapObj = {};
  const tempMapArray = [];

  if (infoValue && infoValue.length !== 0) {
    infoValue.map(({
      place_id,
      address_components,
      formatted_address,
      geometry: {
        location
      }
    }) => {
      let id = '';
      let lat = '';
      let lng = '';
      let formattedAddress = '';
      let city = '';
      let state_long = '';
      let state_short = '';
      let zipcode = '';
      let country_long = '';
      let country_short = '';
      id = place_id;
      lat = location.lat();
      lng = location.lng();
      formattedAddress = formatted_address;

      if (address_components) {
        for (let i = 0; i < address_components.length; i++) {
          if (address_components[i].types.length) {
            switch (address_components[i].types[0]) {
              case 'locality':
                city = address_components[i].long_name;
                break;

              case 'administrative_area_level_1':
                state_long = address_components[i].long_name;
                state_short = address_components[i].short_name;
                break;

              case 'country':
                country_long = address_components[i].long_name;
                country_short = address_components[i].short_name;
                break;

              case 'postal_code':
                zipcode = address_components[i].long_name;
                break;

              default:
                break;
            }
          }
        }
      }

      tempMapObj.id = id;
      tempMapObj.lat = lat;
      tempMapObj.lng = lng;
      tempMapObj.formattedAddress = formattedAddress;
      tempMapObj.city = city;
      tempMapObj.state_short = state_short;
      tempMapObj.state_long = state_long;
      tempMapObj.zipcode = zipcode;
      tempMapObj.country_short = country_short;
      tempMapObj.country_long = country_long;
      tempMapArray.push(tempMapObj);
      return tempMapArray;
    });
  }

  return tempMapArray;
}

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

/***/ "./components/SectionTitle/SectionTitle.js":
/*!*************************************************!*\
  !*** ./components/SectionTitle/SectionTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Title/Title */ "./components/UI/Title/Title.js");
/* harmony import */ var _SectionTitle_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionTitle.style */ "./components/SectionTitle/SectionTitle.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\SectionTitle\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SectionTitle = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(_SectionTitle_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(components_UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/SectionTitle/SectionTitle.style.js":
/*!*******************************************************!*\
  !*** ./components/SectionTitle/SectionTitle.style.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SectionTitlestyle__SectionTitleWrapper",
  componentId: "sc-62tmmv-0"
})(["h2,a{margin:0;}h2{color:", ";font-size:25px;line-height:30px;font-weight:700;@media only screen and (max-width:480px){font-size:17px;line-height:21px;}}a{color:", ";font-size:17px;line-height:21px;font-weight:400;@media only screen and (max-width:480px){font-size:15px;line-height:20px;}&:hover{color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (SectionTitleWrapper);

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

/***/ "./components/UI/Container/Container.js":
/*!**********************************************!*\
  !*** ./components/UI/Container/Container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.style */ "./components/UI/Container/Container.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Container\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  fluid
}) => {
  return __jsx(_Container_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    fullWidth: fullWidth,
    noGutter: noGutter,
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);
};

Container.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  noGutter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/UI/Container/Container.style.js":
/*!****************************************************!*\
  !*** ./components/UI/Container/Container.style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Containerstyle__ContainerWrapper",
  componentId: "sc-2xnsly-0"
})(["margin-left:auto;margin-right:auto;", ";", ";", " @media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:1170px;width:100%;}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;@media only screen and (max-width:480px){padding-left:25px;padding-right:25px;}"]), props => props.fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100% !important;max-width:1920px !important;@media only screen and (min-width:1441px){padding-left:75px;padding-right:75px;}"]));
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

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

/***/ "./components/UI/GlideCarousel/GlideCarousel.js":
/*!******************************************************!*\
  !*** ./components/UI/GlideCarousel/GlideCarousel.js ***!
  \******************************************************/
/*! exports provided: GlideSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlide", function() { return GlideSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlideCarousel.style */ "./components/UI/GlideCarousel/GlideCarousel.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\GlideCarousel\\GlideCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector
}) => {
  // Add all classs to an array.
  const addAllClasses = ['glide']; // className prop checking.

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop.


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  }, [carouselSelector, options]);
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "glide__slides",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, children)), controls && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonControlWrapper"], {
    className: "glide__controls",
    "data-glide-el": "controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, prevButton ? prevButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 40
    }
  }, "Prev")), __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, nextButton ? nextButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 40
    }
  }, "Next"))), bullets && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["BulletControlWrapper"], {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, totalBullets.map(index => __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["BulletButton"], {
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })))));
}; // Glide Slide wrapper component.


const GlideSlide = ({
  children
}) => {
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["GlideSlideWrapper"], {
    className: "glide__slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, children);
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. [Note: if "bullets" props is set TRUE, then "numberOfBullets" must be added] */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
};
GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
}; // GlideCarousel default props.

GlideCarousel.defaultProps = {
  controls: true
};

/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "./components/UI/GlideCarousel/GlideCarousel.style.js":
/*!************************************************************!*\
  !*** ./components/UI/GlideCarousel/GlideCarousel.style.js ***!
  \************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // Glide wrapper style

const GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__GlideWrapper",
  componentId: "sc-1kbmqwy-0"
})([".glide__slides{margin-bottom:0;}.glide__controls{.glide__prev--area,.glide__next--area{cursor:pointer;}}"]); // Glide slide wrapper style

const GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "GlideCarouselstyle__GlideSlideWrapper",
  componentId: "sc-1kbmqwy-1"
})(["position:relative;"]); // Button wrapper style

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonWrapper",
  componentId: "sc-1kbmqwy-2"
})(["display:inline-block;"]); // ButtonControlWrapper style

const ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonControlWrapper",
  componentId: "sc-1kbmqwy-3"
})([""]); // BulletControlWrapper style

const BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__BulletControlWrapper",
  componentId: "sc-1kbmqwy-4"
})([""]); // BulletButton style

const BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__BulletButton",
  componentId: "sc-1kbmqwy-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#d6d6d6;&:hover,&.glide__bullet--active{background-color:#869791;}"]); // default button style

const DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__DefaultBtn",
  componentId: "sc-1kbmqwy-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "./components/UI/Heading/Heading.js":
/*!******************************************!*\
  !*** ./components/UI/Heading/Heading.js ***!
  \******************************************/
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
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Heading\\Heading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-121p3m5-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(HeadingWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

Heading.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: 0,
  fontWeight: 700
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

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

/***/ "./components/UI/Title/Title.js":
/*!**************************************!*\
  !*** ./components/UI/Title/Title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.style */ "./components/UI/Title/Title.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Title\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SectionTitle = (_ref) => {
  let {
    className,
    title,
    link
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "link"]);

  // Add all classs to an array
  const addAllClasses = ['section_title']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: addAllClasses.join(' ')
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), title && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["TitleWrapper"], {
    className: "title_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, title), link && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["LinkWrapper"], {
    className: "link_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 16
    }
  }, link));
};

SectionTitle.propTypes = {
  /** ClassName of the SectionTitle. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Add here Heading component from common components. */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,

  /** Add here TextLink component from common components. */
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/UI/Title/Title.style.js":
/*!********************************************!*\
  !*** ./components/UI/Title/Title.style.js ***!
  \********************************************/
/*! exports provided: TitleWrapper, LinkWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWrapper", function() { return LinkWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");


const SectionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__SectionTitleWrapper",
  componentId: "sc-1okeadk-0"
})(["display:flex;justify-content:space-between;align-items:baseline;margin:30px 0;@media only screen and (max-width:480px){margin:15px 0 20px;}", ""], _Base__WEBPACK_IMPORTED_MODULE_1__["base"]);
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__TitleWrapper",
  componentId: "sc-1okeadk-1"
})([""]);
const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__LinkWrapper",
  componentId: "sc-1okeadk-2"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (SectionTitleWrapper);

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

/***/ "./container/Home/Location/Location.js":
/*!*********************************************!*\
  !*** ./container/Home/Location/Location.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SectionTitle/SectionTitle */ "./components/SectionTitle/SectionTitle.js");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var components_ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ImageCard/ImageCard */ "./components/ImageCard/ImageCard.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
/* harmony import */ var _Location_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Location.style */ "./container/Home/Location/Location.style.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Home\\Location\\Location.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import 'react-multi-carousel/lib/styles.css';









const LocationGrid = ({
  data,
  deviceType
}) => {
  return __jsx(_Location_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Explore Destinations",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${_settings_constant__WEBPACK_IMPORTED_MODULE_8__["LISTING_POSTS_PAGE"]}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, "Show all")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_Location_style__WEBPACK_IMPORTED_MODULE_9__["CarouselSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, data.length !== 0 ? __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 5
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 3
      }
    },
    deviceType: deviceType,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, data.map((post, index) => __jsx(components_ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: index,
    imageSrc: post.locationImage.url,
    title: post.city,
    meta: `${post.numberOfPost} Hotels`,
    link: _settings_constant__WEBPACK_IMPORTED_MODULE_8__["LISTING_POSTS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }))) : __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationGrid);

/***/ }),

/***/ "./container/Home/Location/Location.style.js":
/*!***************************************************!*\
  !*** ./container/Home/Location/Location.style.js ***!
  \***************************************************/
/*! exports provided: CarouselSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselSection", function() { return CarouselSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const LocationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Locationstyle__LocationWrapper",
  componentId: "sc-8cwnh4-0"
})(["padding:52px 0;@media only screen and (max-width:480px){padding:30px 0;}"]);
const CarouselSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Locationstyle__CarouselSection",
  componentId: "sc-8cwnh4-1"
})([".react-multi-carousel-list{.react-multi-carousel-item{padding:0 10px;transition:transform 0.3s ease;.image_card{> a{@media only screen and (max-width:1600px){height:310px;}@media only screen and (max-width:991px){height:280px;}}}}.react-multiple-carousel__arrow{opacity:0;visibility:hidden;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";box-shadow:0 3px 6px ", ";transition:background-color 0.2s ease;&::before{color:", ";}&:hover{background-color:", ";&::before{color:", ";}}}&:hover{.react-multiple-carousel__arrow{opacity:1;visibility:visible;}}.react-multiple-carousel__arrow--left{left:30px;}.react-multiple-carousel__arrow--right{right:30px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (LocationWrapper);

/***/ }),

/***/ "./container/Home/Search/Search.js":
/*!*****************************************!*\
  !*** ./container/Home/Search/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/GlideCarousel/GlideCarousel */ "./components/UI/GlideCarousel/GlideCarousel.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchForm */ "./container/Home/Search/SearchForm.js");
/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search.style */ "./container/Home/Search/Search.style.js");
/* harmony import */ var assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/banner/1.jpg */ "./assets/images/banner/1.jpg");
/* harmony import */ var assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/banner/2.jpg */ "./assets/images/banner/2.jpg");
/* harmony import */ var assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/banner/3.jpg */ "./assets/images/banner/3.jpg");
/* harmony import */ var assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Home\\Search\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // slider images





const HomeSearch = ({
  searchTitleStyle,
  searchDescriptionStyle
}) => {
  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    controls: false,
    options: {
      gap: 0,
      autoplay: 5000,
      animationDuration: 1000
    },
    bullets: true,
    numberOfBullets: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))), __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_7__["SearchWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, searchTitleStyle, {
    content: "Latest reviews. Lowest prices.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, searchDescriptionStyle, {
    content: "compares prices from 200+ booking sites to help you find the lowest\r price on the right hotel for you.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
};

HomeSearch.propTypes = {
  searchTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  searchDescriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px'
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    mb: '30px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HomeSearch);

/***/ }),

/***/ "./container/Home/Search/Search.style.js":
/*!***********************************************!*\
  !*** ./container/Home/Search/Search.style.js ***!
  \***********************************************/
/*! exports provided: SearchWrapper, FormWrapper, ComponentWrapper, RoomGuestWrapper, ItemWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWrapper", function() { return ComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__BannerWrapper",
  componentId: "dh2rqj-0"
})(["width:100%;min-height:100vh;position:relative;background-color:", ";@media only screen and (max-width:991px){> div{max-width:100%;}}.glide,.glide__track,.glide__slides{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:all;}.glide__slide{img{width:100%;height:100%;object-fit:cover;}}.glide__bullets{position:absolute;bottom:30px;width:100%;display:flex;align-items:center;justify-content:center;z-index:1;}.glide__bullet{width:7px;height:7px;background-color:", ";transition:width 0.3s ease;}.glide__bullet--active{width:25px;border-radius:8px;background-color:", ";}> div{position:relative;min-height:100vh;}&:after{display:block;content:'';width:100%;height:60%;position:absolute;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,0.5));pointer-events:none;z-index:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "dh2rqj-1"
})(["width:calc(100% - 60px);padding:28px 30px 30px;border-radius:6px;background-color:", ";box-shadow:0 1px 20px rgba(0,0,0,0.08);position:absolute;bottom:81px;z-index:1;@media only screen and (min-width:569px) and (max-width:991px){width:414px;left:30px;}@media only screen and (max-width:480px){width:calc(100% - 30px);padding:15px;left:15px;> p{display:none;}}> div{@media only screen and (min-width:481px){margin-top:30px;}}h2{margin-bottom:10px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__FormWrapper",
  componentId: "dh2rqj-2"
})(["display:flex;align-items:center;justify-content:flex-end;background-color:", ";border-radius:3px 0 0 3px;min-height:60px;@media only screen and (max-width:991px){flex-direction:column;}@media only screen and (max-width:480px){margin-top:10px;}button[type='submit'].ant-btn{min-width:157px;height:60px;color:", ";background-color:", ";border-radius:0 3px 3px 0;border:0;box-shadow:none;font-size:15px;font-weight:700;text-shadow:none;@media only screen and (max-width:991px){min-width:100%;border-radius:0 0 3px 3px;}@media only screen and (max-width:480px){height:47px;}&::after{display:none;}&:hover{opacity:0.85;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const ComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__ComponentWrapper",
  componentId: "dh2rqj-3"
})(["display:flex;width:100%;align-items:center;position:relative;.target{right:10px;left:auto;@media only screen and (max-width:480px){right:25px;}}.map_autocomplete{width:100%;position:relative;&::after{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:auto;background-color:", ";}@media only screen and (max-width:991px){&::after{top:auto;bottom:0;height:1px;width:calc(100% - 40px);left:20px;}}@media only screen and (max-width:480px){&::after{width:calc(100% - 30px);left:15px;}}input{border:0;font-size:15px;font-weight:400;border-radius:0;height:60px;padding:0 30px 0 40px;background:transparent;color:", ";@media only screen and (max-width:480px){height:47px;padding:0 30px 0 36px;}&:hover,&:focus{outline:none;box-shadow:none;}&::placeholder{color:", ";}}}.date_picker{min-width:calc(250px - 14px);width:calc(100% - 14px);margin:0 0 0 14px;display:flex;justify-content:center;align-items:center;@media only screen and (max-width:991px){justify-content:flex-start;height:60px;}@media only screen and (max-width:480px){height:47px;}.DayPicker__withBorder{box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);}.DateRangePicker{display:block;width:100%;.DateRangePickerInput{border:0;padding-right:0;display:flex;align-items:center;justify-content:space-between;background:transparent;.DateRangePickerInput_clearDates,.DateRangePickerInput_clearDates{&.DateRangePickerInput_clearDates__small{display:none;}}.DateInput{width:100%;padding:0 15px 0 30px;background:transparent;@media only screen and (min-width:569px) and (max-width:991px){padding:0 25px 0 30px;}@media only screen and (max-width:568px){padding:0 15px 0 25px;}.DateInput_fang{display:none;}.DateInput_input{padding:0;font-weight:400;color:", ";background:transparent;&.DateInput_input__focused{border-color:transparent;}&::placeholder{color:", ";}}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{margin-top:-12px;z-index:2;@media only screen and (max-width:991px){top:47px !important;}@media only screen and (max-width:320px){left:-29px !important;.DayPicker,.DayPicker > div > div,.DayPicker > div > div .DayPicker_transitionContainer{width:294px !important;}.DayPicker{.DayPicker_weekHeader{padding:0 !important;}.CalendarMonth{padding:0 !important;}}}}}}.view_with__popup{max-width:100%;position:relative;&::before{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:0;z-index:1;background-color:", ";@media only screen and (max-width:991px){top:0;bottom:auto;height:1px;width:calc(100% - 40px);left:20px;}@media only screen and (max-width:480px){width:calc(100% - 30px);left:15px;}}.popup_handler{width:calc(100% - 14px);margin-left:14px;button.ant-btn{min-width:auto;width:100%;height:60px;border:0;padding:0 30px;border-radius:0;box-shadow:none;font-weight:400;font-size:15px;color:", ";background-color:", ";@media only screen and (max-width:991px){text-align:left;padding:0 25px 0 30px;}@media only screen and (max-width:480px){height:47px;padding:0 20px 0 25px;}&::after{display:none;}}}&.room_guest{.popup_handler{button.ant-btn{display:flex;align-items:center;justify-content:space-between;}}}&.active{.popup_container{margin-top:0;padding:22px;box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);@media only screen and (max-width:991px){margin-top:0;}@media only screen and (max-width:480px){min-width:auto;}}}}> svg{position:absolute;z-index:1;top:auto;&.map-marker,&.calendar,&.user-friends{left:15px;right:auto;fill:", ";}&.calendar{@media only screen and (max-width:480px){width:14px;height:14px;}}&.user-friends{width:17px;height:17px;@media only screen and (max-width:480px){width:16px;height:16px;}}&.caret-down{right:12px;left:auto;fill:", ";@media only screen and (max-width:991px){right:20px;}@media only screen and (max-width:991px){right:15px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
const RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__RoomGuestWrapper",
  componentId: "dh2rqj-4"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "dh2rqj-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:5px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "./container/Home/Search/SearchForm.js":
/*!*********************************************!*\
  !*** ./container/Home/Search/SearchForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Map/MapAutoComplete */ "./components/Map/MapAutoComplete.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Map/mapDataHelper */ "./components/Map/mapDataHelper.js");
/* harmony import */ var components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/ViewWithPopup/ViewWithPopup */ "./components/UI/ViewWithPopup/ViewWithPopup.js");
/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search.style */ "./container/Home/Search/Search.style.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
/* harmony import */ var _context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../context/SearchProvider */ "./context/SearchProvider.js");

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Home\\Search\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};

const SearchForm = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__["SearchContext"]);
  const {
    0: searchDate,
    1: setSearchDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    setStartDate: null,
    setEndDate: null
  });
  const {
    0: mapValue,
    1: setMapValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: roomGuest,
    1: setRoomGuest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    room: 0,
    guest: 0
  });

  const updatevalueFunc = event => {
    const {
      searchedPlaceAPIData
    } = event;

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  const handleIncrement = type => {
    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] + 1
    }));
  };

  const handleDecrement = type => {
    if (roomGuest[type] <= 0) {
      return false;
    }

    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: currentValue
    }));
  };

  const goToSearchPage = () => {
    let tempLocation = [],
        dateRange = {},
        location_lat = '',
        location_lng = '';
    const mapData = mapValue ? Object(components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_8__["mapDataHelper"])(mapValue) : [];
    mapData && mapData.map((singleMapData, i) => {
      return tempLocation.push({
        formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
        lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
        lng: singleMapData ? singleMapData.lng.toFixed(3) : null
      });
    });
    const location = tempLocation ? tempLocation[0] : {};
    dateRange.startDate = searchDate ? searchDate.setStartDate : null;
    dateRange.endDate = searchDate ? searchDate.setEndDate : null;

    if (location && location.lat) {
      location_lat = location.lat;
    }

    if (location && location.lng) {
      location_lng = location.lng;
    }

    let query = {
      setStartDate: searchDate.setStartDate,
      setEndDate: searchDate.setEndDate,
      room: roomGuest.room,
      guest: roomGuest.guest,
      location_lat,
      location_lng
    };

    for (const key in query) {
      if (query[key] === '' || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }

    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        setStartDate: searchDate.setStartDate,
        setEndDate: searchDate.setEndDate,
        room: roomGuest.room,
        guest: roomGuest.guest,
        location_lat,
        location_lng
      })
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: `${_settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"]}`,
      query: query
    }, {
      pathname: `${_settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"]}`,
      query: query
    }, {
      shallow: true
    });
  };

  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaMapMarkerAlt"], {
    className: "map-marker",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx(components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    updatevalue: value => updatevalueFunc(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 144.083 144",
    enableBackground: "new 0 0 144.083 144",
    className: "target",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }))), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegCalendar"], {
    className: "calendar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }), __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: calendarItem,
    startDateId: "startDateId-id-home",
    endDateId: "endDateId-id-home",
    updateSearchData: setDateValue => setSearchDate(setDateValue),
    showClearDates: true,
    small: true,
    numberOfMonths: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  })), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUserFriends"], {
    className: "user-friends",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: 200,
    noView: true,
    className: "room_guest",
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    }, "Room ", roomGuest.room > 0 && `: ${roomGuest.room}`), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 15
      }
    }, "-"), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 15
      }
    }, "Guest", roomGuest.guest > 0 && `: ${roomGuest.guest}`)),
    popup: __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["RoomGuestWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "room",
      increment: () => handleIncrement('room'),
      decrement: () => handleDecrement('room'),
      onChange: e => handleIncDecOnChnage(e, 'room'),
      value: roomGuest.room,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    })), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "guest",
      increment: () => handleIncrement('guest'),
      decrement: () => handleDecrement('guest'),
      onChange: e => handleIncDecOnChnage(e, 'guest'),
      value: roomGuest.guest,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    onClick: goToSearchPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, "Find Hotels"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SearchForm));

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SectionTitle/SectionTitle */ "./components/SectionTitle/SectionTitle.js");
/* harmony import */ var container_Home_Search_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! container/Home/Search/Search */ "./container/Home/Search/Search.js");
/* harmony import */ var container_Home_Location_Location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! container/Home/Location/Location */ "./container/Home/Location/Location.js");
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SectionGrid/SectionGrid */ "./components/SectionGrid/SectionGrid.js");
/* harmony import */ var library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! library/helpers/get_api_data */ "./library/helpers/get_api_data.js");
/* harmony import */ var library_helpers_get_device_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! library/helpers/get_device_type */ "./library/helpers/get_device_type.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var settings_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! settings/config */ "./settings/config.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function HomePage({
  deviceType,
  locationData,
  topHotelData,
  luxaryHotelData
}) {
  let limit;

  if (deviceType === 'mobile') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE"];
  }

  if (deviceType === 'tablet') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE"];
  }

  if (deviceType === 'desktop') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE"];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "TripFinder. | A react next listing template")), __jsx(container_Home_Search_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(container_Home_Location_Location__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: locationData,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Travelers\u2019 Choice: Top hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_11__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: topHotelData.slice(0, limit),
    limit: limit,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Best Rated: Luxary hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_11__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: luxaryHotelData.slice(0, limit),
    limit: limit,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  })));
}
async function getServerSideProps(context) {
  const {
    req
  } = context;
  const apiUrl = [{
    endpoint: 'hotel',
    name: 'luxaryHotelData'
  }, {
    endpoint: 'top-hotel',
    name: 'topHotelData'
  }, {
    endpoint: 'location',
    name: 'locationData'
  }];
  const deviceType = Object(library_helpers_get_device_type__WEBPACK_IMPORTED_MODULE_10__["getDeviceType"])(req);
  const pageData = await Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_9__["default"])(apiUrl);
  let locationData = [],
      topHotelData = [],
      luxaryHotelData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      } else if (item.name === 'topHotelData') {
        topHotelData = item.data ? [...item.data] : [];
      } else if (item.name === 'luxaryHotelData') {
        luxaryHotelData = item.data ? [...item.data] : [];
      }
    });
  }

  return {
    props: {
      deviceType,
      locationData,
      topHotelData,
      luxaryHotelData
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

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

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

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-google-maps/lib/components/places/StandaloneSearchBox":
/*!******************************************************************************!*\
  !*** external "react-google-maps/lib/components/places/StandaloneSearchBox" ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzEuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzMuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkQ2FyZC9HcmlkQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlQ2FyZC9JbWFnZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZUNhcmQvSW1hZ2VDYXJkLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQm94L0JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Db250YWluZXIvQ29udGFpbmVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZS5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL3VzZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0SW5jRGVjL0lucHV0SW5jRGVjLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvUmF0aW5nL1JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RleHQvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RpdGxlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVGl0bGUvVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL1NlYXJjaC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0hvbWUvU2VhcmNoL1NlYXJjaC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvSG9tZS9TZWFyY2gvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9nZXRfYXBpX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL2dldF9kZXZpY2VfdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvcnRsLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NldHRpbmdzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWludXNPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9QbHVzT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ2xpZGVqcy9nbGlkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2h1ZmZsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYmlsZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb21wb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJjbGFzc05hbWUiLCJmYXZvcml0ZSIsImxvY2F0aW9uIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImVkaXRCdG4iLCJ2aWV3RGV0YWlsc0J0biIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInRyaW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiR3JpZENhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWVHZXQiLCJJbWFnZVdyYXBwZXIiLCJGYXZvcml0ZUljb24iLCJDb250ZW50V3JhcHBlciIsIkxvY2F0aW9uQXJlYSIsIlRpdGxlQXJlYSIsIlByaWNlQXJlYSIsIlJhdGluZ0FyZWEiLCJNZXRhV3JhcHBlciIsIkJ1dHRvbkdyb3VwIiwiSW1hZ2VDYXJkTmV4dCIsImltYWdlU3JjIiwibGluayIsIm1ldGEiLCJhZGRBbGxDbGFzc2VzIiwicGF0aExpbmsiLCJyZXBsYWNlIiwicHVzaCIsImpvaW4iLCJwYXRobmFtZSIsInF1ZXJ5IiwiY291bnRyeSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJkZWZhdWx0UHJvcHMiLCJJbWFnZUNhcmRXcmFwcGVyIiwiVGl0bGUiLCJoNCIsIk1ldGEiLCJMb2FkZXIiLCJmaWxsIiwiTG9hZGVyV3JhcHBlciIsIlNlYXJjaElucHV0IiwiY29tcG9zZSIsIndpdGhQcm9wcyIsImdvb2dsZU1hcFVSTCIsInByb2Nlc3MiLCJsb2FkaW5nRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJ3aXRoU2NyaXB0anMiLCJwcm9wcyIsImdldGlucHV0dmFsdWUiLCJsb2NhdGlvbklucHV0Iiwic2V0TG9jYXRpb25JbnB1dCIsInVzZVN0YXRlIiwic2VhcmNoZWRMb2NhdGlvbiIsInNlYXJjaGVkUGxhY2VBUElEYXRhIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZnMiLCJ1c2VSZWYiLCJvblBsYWNlc0NoYW5nZWQiLCJwbGFjZXMiLCJjdXJyZW50IiwiZ2V0UGxhY2VzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJoYW5kbGVPblByZXNzRW50ZXIiLCJNYXBBdXRvQ29tcGxldGUiLCJ1cGRhdGV2YWx1ZSIsIm1hcERhdGFIZWxwZXIiLCJpbmZvVmFsdWUiLCJ0ZW1wTWFwT2JqIiwidGVtcE1hcEFycmF5IiwibGVuZ3RoIiwibWFwIiwicGxhY2VfaWQiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJnZW9tZXRyeSIsImlkIiwibGF0IiwibG5nIiwiZm9ybWF0dGVkQWRkcmVzcyIsImNpdHkiLCJzdGF0ZV9sb25nIiwic3RhdGVfc2hvcnQiLCJ6aXBjb2RlIiwiY291bnRyeV9sb25nIiwiY291bnRyeV9zaG9ydCIsImkiLCJ0eXBlcyIsImxvbmdfbmFtZSIsInNob3J0X25hbWUiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInBhcml0aWFsVmlzaWJpbGl0eUd1dHRlciIsIm1vYmlsZSIsInRhYmxldCIsIlByb2R1Y3RDYXJkIiwicmF0aW5nQ291bnQiLCJnYWxsZXJ5Iiwic2x1ZyIsImRldmljZVR5cGUiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiaW5kZXgiLCJvYmplY3RGaXQiLCJMb2FkTW9yZSIsImhhbmRsZUxvYWRNb3JlIiwic2hvd0J1dHRvbiIsImJ1dHRvblRleHQiLCJsb2FkaW5nIiwibG9hZE1vcmVDb21wb25lbnQiLCJsb2FkTW9yZVN0eWxlIiwiU2VjdGlvbkdyaWQiLCJkYXRhIiwidG90YWxJdGVtIiwibGltaXQiLCJjb2x1bW5XaWR0aCIsInBhZ2luYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsInJvd1N0eWxlIiwiY29sdW1uU3R5bGUiLCJuIiwiTnVtYmVyIiwibGltaXRzIiwiQXJyYXkiLCJpdGVtIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJvYmplY3QiLCJmbGV4Qm94IiwiZmxleFdyYXAiLCJtciIsIm1sIiwicHIiLCJwbCIsImp1c3RpZnlDb250ZW50IiwibXQiLCJTZWN0aW9uVGl0bGUiLCJTZWN0aW9uVGl0bGVXcmFwcGVyIiwidGhlbWVkIiwia2V5IiwidGhlbWUiLCJiYXNlIiwiYm94U2l6aW5nIiwic3BhY2UiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImZsZXgiLCJvcmRlciIsImFsaWduU2VsZiIsImJvcmRlcnMiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJCb3hXcmFwcGVyIiwiY3NzIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJCb3giLCJhbnkiLCJhcyIsIm9uZU9mIiwiYXJyYXlPZiIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsIkNvbnRhaW5lciIsImZ1bGxXaWR0aCIsIm5vR3V0dGVyIiwiZmx1aWQiLCJDb250YWluZXJXcmFwcGVyIiwiRGF0ZVJhbmdlUGlja2VyQm94IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZGF0ZUZvcm1hdCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTZWFyY2hEYXRhIiwic2V0U3RhcnREYXRlIiwiZm9ybWF0Iiwic2V0RW5kRGF0ZSIsImZvY3VzZWRJbnB1dCIsInNlcGFyYXRvciIsIm9uRGF0ZUNoYW5nZUZ1bmMiLCJiaW5kIiwib25Gb2N1c0NoYW5nZUZ1bmMiLCJyZW5kZXIiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCIsImVuZERhdGVQbGFjZWhvbGRlclRleHQiLCJkaXNhYmxlZCIsInNob3dDbGVhckRhdGVzIiwiaXNSVEwiLCJvcmllbnRhdGlvbiIsImFuY2hvckRpcmVjdGlvbiIsIndpdGhQb3J0YWwiLCJ3aXRoRnVsbFNjcmVlblBvcnRhbCIsInNtYWxsIiwiYmxvY2siLCJudW1iZXJPZk1vbnRocyIsInJlZ3VsYXIiLCJub0JvcmRlciIsImRlZmF1bHRDYWxlbmRlclByb3BzIiwib25Gb2N1c0NoYW5nZSIsIm9uRGF0ZXNDaGFuZ2UiLCJSZWFjdERhdGVzU3R5bGVXcmFwcGVyIiwiUmVhY3REYXRlV3JhcHBlciIsIkNvbXBvbmVudE5hbWUiLCJSZWFjdERhdGVzV3JhcHBlciIsIldpdGhEaXJlY3Rpb24iLCJGYXZvcml0ZSIsImNvbnRlbnQiLCJvbkNsaWNrIiwidG9nZ2xlVmFsdWUiLCJ0b2dnbGVIYW5kbGVyIiwidXNlVG9nZ2xlIiwiYWRkQWxsQ2xhc3MiLCJoYW5kZWxDbGljayIsImFkZEFuaW1hdGlvbiIsImtleWZyYW1lcyIsInJlbW92ZUFuaW1hdGlvbiIsIkFkZEFuaW1hdGlvbiIsIlJlbW92ZUFuaW1hdGlvbiIsIkZhdm9yaXRlV3JhcHBlciIsImJ1dHRvbiIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwidG9nZ2xlciIsInVzZUNhbGxiYWNrIiwiR2xpZGVDYXJvdXNlbCIsIm9wdGlvbnMiLCJjb250cm9scyIsInByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwiYnVsbGV0cyIsIm51bWJlck9mQnVsbGV0cyIsImNhcm91c2VsU2VsZWN0b3IiLCJ0b3RhbEJ1bGxldHMiLCJ1c2VFZmZlY3QiLCJnbGlkZSIsIkdsaWRlIiwibW91bnQiLCJHbGlkZVNsaWRlIiwiR2xpZGVXcmFwcGVyIiwiR2xpZGVTbGlkZVdyYXBwZXIiLCJsaSIsIkJ1dHRvbldyYXBwZXIiLCJCdXR0b25Db250cm9sV3JhcHBlciIsIkJ1bGxldENvbnRyb2xXcmFwcGVyIiwiQnVsbGV0QnV0dG9uIiwiRGVmYXVsdEJ0biIsIkhlYWRpbmdXcmFwcGVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIkhlYWRpbmciLCJtYiIsIklucHV0SW5jRGVjIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiSW5wdXRJbmNEZWNXcmFwcGVyIiwiUG9ydGFsIiwicmVuZGVyZXJJZCIsImNvbnRhaW5lckVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicG9ydGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsIlJhdGluZyIsInR5cGUiLCJyYXRpbmdGaWVsZE5hbWUiLCJmbG9vclZhbHVlIiwicmF0aW5nVmlldyIsIk1hdGgiLCJmbG9vciIsImxpc3RpbmdDb25kaXRpb24iLCJzaG93UmF0aW5nQ291bnQiLCJUZXh0V3JhcHBlciIsIlRleHQiLCJtIiwiVGl0bGVXcmFwcGVyIiwiTGlua1dyYXBwZXIiLCJWaWV3V2l0aFBvcHVwIiwidmlldyIsInBvcHVwIiwibm9WaWV3Iiwic3R5bGUiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJyZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsInJhZGl1cyIsIldyYXBwZXIiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTG9jYXRpb25HcmlkIiwiTElTVElOR19QT1NUU19QQUdFIiwicG9zdCIsImxvY2F0aW9uSW1hZ2UiLCJudW1iZXJPZlBvc3QiLCJMb2NhdGlvbldyYXBwZXIiLCJDYXJvdXNlbFNlY3Rpb24iLCJIb21lU2VhcmNoIiwic2VhcmNoVGl0bGVTdHlsZSIsInNlYXJjaERlc2NyaXB0aW9uU3R5bGUiLCJnYXAiLCJhdXRvcGxheSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYmFubmVyQmcxIiwiYmFubmVyQmcyIiwiYmFubmVyQmczIiwiQmFubmVyV3JhcHBlciIsIlNlYXJjaFdyYXBwZXIiLCJGb3JtV3JhcHBlciIsIkNvbXBvbmVudFdyYXBwZXIiLCJSb29tR3Vlc3RXcmFwcGVyIiwiSXRlbVdyYXBwZXIiLCJjYWxlbmRhckl0ZW0iLCJsb2NhbGUiLCJTZWFyY2hGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsInNlYXJjaERhdGUiLCJzZXRTZWFyY2hEYXRlIiwibWFwVmFsdWUiLCJzZXRNYXBWYWx1ZSIsInJvb21HdWVzdCIsInNldFJvb21HdWVzdCIsInJvb20iLCJndWVzdCIsInVwZGF0ZXZhbHVlRnVuYyIsImlzRW1wdHkiLCJoYW5kbGVJbmNyZW1lbnQiLCJoYW5kbGVEZWNyZW1lbnQiLCJoYW5kbGVJbmNEZWNPbkNobmFnZSIsImUiLCJjdXJyZW50VmFsdWUiLCJnb1RvU2VhcmNoUGFnZSIsInRlbXBMb2NhdGlvbiIsImRhdGVSYW5nZSIsImxvY2F0aW9uX2xhdCIsImxvY2F0aW9uX2xuZyIsIm1hcERhdGEiLCJzaW5nbGVNYXBEYXRhIiwidG9GaXhlZCIsInBheWxvYWQiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic2V0RGF0ZVZhbHVlIiwid2l0aFJvdXRlciIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJhY3Rpb24iLCJTZWFyY2hQcm92aWRlciIsInVzZVJlZHVjZXIiLCJGZXRjaEFQSURhdGEiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIlByb2Nlc3NBUElEYXRhIiwiYXBpRGF0YSIsImZldGNoRGF0YSIsImZvckVhY2giLCJuYW1lIiwiU2VhcmNoZWREYXRhIiwicHJvY2Vzc2VkRGF0YSIsInJhbmROdW1iZXIiLCJyYW5kb20iLCJzaHVmZmxlIiwic2xpY2UiLCJTZWFyY2hTdGF0ZUtleUNoZWNrIiwiUGFnaW5hdG9yIiwicG9zdHMiLCJHZXRBUElEYXRhIiwiYXBpVXJsIiwicHJvbWlzZXMiLCJyZXBvIiwiYXBpUGF0aCIsImFwaSIsImVuZHBvaW50IiwicmVzcG9uc2UiLCJyZWNldmllZERhdGEiLCJQcm9taXNlIiwiYWxsIiwiZ2V0RGV2aWNlVHlwZSIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJtZCIsIk1vYmlsZURldGVjdCIsImRpcmVjdGlvbiIsIndpdGhEaXJlY3Rpb24iLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJzdWNjZXNzIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsImVsIiwic2V0Q2hpbGRFbG0iLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lUGFnZSIsImxvY2F0aW9uRGF0YSIsInRvcEhvdGVsRGF0YSIsImx1eGFyeUhvdGVsRGF0YSIsIkhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0UiLCJIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UiLCJTSU5HTEVfUE9TVF9QQUdFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0NPTFVNTlNfUkVTUE9OU0lWRV9XSURUSCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYWdlRGF0YSIsIkxJU1RJTkdfUEFHRV9QT1NUX0xJTUlUIiwiTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIT1VUX01BUCIsIkxJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSF9NQVAiLCJIT01FX1BBR0UiLCJBR0VOVFNfUEFHRSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSIsIkFHRU5UX1BST0ZJTEVfRURJVF9QQUdFIiwiQUdFTlRfSU1BR0VfRURJVF9QQUdFIiwiQUdFTlRfUEFTU1dPUkRfQ0hBTkdFX1BBR0UiLCJBR0VOVF9QUk9GSUxFX0RFTEVURSIsIkFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFIiwiQUdFTlRfUFJPRklMRV9DT05UQUNUIiwiQUREX0hPVEVMX1BBR0UiLCJQUklDSU5HX1BMQU5fUEFHRSIsIlBSSVZBQ1lfUEFHRSIsIkxPR0lOX1BBR0UiLCJSRUdJU1RSQVRJT05fUEFHRSIsIkNIQU5HRV9QQVNTV09SRF9QQUdFIiwiRk9SR0VUX1BBU1NXT1JEX1BBR0UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBWUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFDaEJDLFdBRGdCO0FBRWhCQyxVQUZnQjtBQUdoQkMsVUFIZ0I7QUFJaEJDLE9BSmdCO0FBS2hCQyxPQUxnQjtBQU1oQkMsUUFOZ0I7QUFPaEJDLFNBUGdCO0FBUWhCQyxnQkFSZ0I7QUFTaEJDO0FBVGdCLENBQUQsS0FVWDtBQUNKLE1BQUlDLE9BQU8sR0FBR0YsY0FBYyxJQUFJRCxPQUFsQixHQUE2QixXQUFVTixTQUFVLEVBQWpELEdBQXFEQSxTQUFuRTtBQUNBLFNBQ0UsTUFBQyx1REFBRDtBQUFpQixhQUFTLEVBQUcsYUFBWVMsT0FBUSxFQUFyQixDQUF1QkMsSUFBdkIsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBYyxhQUFTLEVBQUMsZUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q0YsUUFBekMsQ0FERixFQUVFLE1BQUMsOERBQUQ7QUFBZ0IsYUFBUyxFQUFDLGlCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFFBQVEsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZUEsUUFBZixDQURmLEVBRUdDLEtBQUssSUFBSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUEsS0FBWixDQUZaLEVBR0UsTUFBQywyREFBRDtBQUFhLGFBQVMsRUFBQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLEtBQUssSUFBSSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEJBLEtBQTlCLENBRFosRUFFR0MsTUFBTSxJQUFJLE1BQUMsMERBQUQ7QUFBWSxhQUFTLEVBQUMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ0EsTUFBaEMsQ0FGYixFQUdHRSxjQUFjLElBQUlELE9BQWxCLEdBQ0MsTUFBQywyREFBRDtBQUFhLGFBQVMsRUFBQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGNBREgsRUFFR0QsT0FGSCxDQURELEdBS0csSUFSTixDQUhGLENBRkYsRUFpQkdMLFFBQVEsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZUEsUUFBZixDQWpCZixDQURGO0FBcUJELENBakNEOztBQW1DQUYsUUFBUSxDQUFDWSxTQUFULEdBQXFCO0FBQ25CWCxXQUFTLEVBQUVZLGlEQUFTLENBQUNDLE1BREY7QUFFbkJWLE9BQUssRUFBRVMsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFDRixpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRyxPQUE3QixDQUFwQixDQUZZO0FBR25CWCxPQUFLLEVBQUVRLGlEQUFTLENBQUNDLE1BSEU7QUFJbkJSLFFBQU0sRUFBRU8saURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFDRixpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDRyxPQUE3QixDQUFwQixDQUpXO0FBS25CYixVQUFRLEVBQUVVLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ0csT0FBN0IsQ0FBcEIsQ0FMUztBQU1uQlQsU0FBTyxFQUFFTSxpREFBUyxDQUFDRyxPQU5BO0FBT25CUixnQkFBYyxFQUFFSyxpREFBUyxDQUFDRztBQVBQLENBQXJCO0FBVWVoQix1RUFBZixFOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNaUIsZUFBZSxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHluQkFxQlFDLHlFQUFRLENBQUMsYUFBRCxFQUFnQixxQkFBaEIsQ0FyQmhCLENBQXJCO0FBeURPLE1BQU1DLFlBQVksR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvdUNBdUZDQyx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBdkZULEVBaUdDQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBakdULENBQWxCO0FBc0dBLE1BQU1FLFlBQVksR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBbEI7QUFPQSxNQUFNSSxjQUFjLEdBQUdMLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOExBT1RDLHlFQUFRLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FQQyxDQUFwQjtBQVdBLE1BQU1JLFlBQVksR0FBR04sd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3SEFDZEMseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQURNLENBQWxCO0FBVUEsTUFBTUssU0FBUyxHQUFHUCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlYQUNYQyx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBREcsRUFlVEEseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQWZDLEVBd0JQQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBeEJELENBQWY7QUE2QkEsTUFBTU0sU0FBUyxHQUFHUix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVJQUNYQyx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBREcsQ0FBZjtBQVdBLE1BQU1PLFVBQVUsR0FBR1Qsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzUEFHWkMseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUhJLEVBaUJWQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBakJFLEVBcUJYQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBckJHLENBQWhCO0FBMENBLE1BQU1RLFdBQVcsR0FBR1Ysd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBakI7QUFLQSxNQUFNVSxXQUFXLEdBQUdYLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlVBY1hDLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FkRyxFQW9CVEEseUVBQVEsQ0FBQyxXQUFELEVBQWMsU0FBZCxDQXBCQyxDQUFqQjtBQStCUUgsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNYSxhQUFhLEdBQUcsQ0FBQztBQUFFN0IsV0FBRjtBQUFhOEIsVUFBYjtBQUF1QjNCLE9BQXZCO0FBQThCNEIsTUFBOUI7QUFBb0NDO0FBQXBDLENBQUQsS0FBZ0Q7QUFDcEUsUUFBTUMsYUFBYSxHQUFHLENBQUMsWUFBRCxDQUF0QjtBQUNBLFFBQU1DLFFBQVEsR0FBRy9CLEtBQUssQ0FBQ2dDLE9BQU4sQ0FBYyxLQUFkLEVBQXFCLEdBQXJCLENBQWpCOztBQUVBLE1BQUluQyxTQUFKLEVBQWU7QUFDYmlDLGlCQUFhLENBQUNHLElBQWQsQ0FBbUJwQyxTQUFuQjtBQUNEOztBQUVELFNBQ0UsTUFBQyx3REFBRDtBQUFrQixhQUFTLEVBQUVpQyxhQUFhLENBQUNJLElBQWQsQ0FBbUIsR0FBbkIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFHLEdBQUVQLElBQUssRUFEZDtBQUVKUSxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFHLEdBQUVOLFFBQVM7QUFBdkI7QUFGSCxLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVKLFFBRFA7QUFFRSxPQUFHLEVBQUUzQixLQUZQO0FBR0UsYUFBUyxFQUFFLEtBSGI7QUFJRSxTQUFLLEVBQUU7QUFBRXNDLFdBQUssRUFBRSxNQUFUO0FBQWlCQyxZQUFNLEVBQUUsTUFBekI7QUFBaUNDLGNBQVEsRUFBRTtBQUEzQyxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHeEMsS0FBSyxJQUFJLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxLQUFSLENBRFosRUFHRzZCLElBQUksSUFBSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0EsSUFBUCxDQUhYLENBUEYsQ0FORixDQURGLENBREY7QUF3QkQsQ0FoQ0Q7O0FBa0NBSCxhQUFhLENBQUNsQixTQUFkLEdBQTBCO0FBQ3hCWCxXQUFTLEVBQUVZLGlEQUFTLENBQUNDLE1BREc7QUFFeEJpQixVQUFRLEVBQUVsQixpREFBUyxDQUFDQyxNQUZJO0FBR3hCVixPQUFLLEVBQUVTLGlEQUFTLENBQUNDLE1BSE87QUFJeEJrQixNQUFJLEVBQUVuQixpREFBUyxDQUFDQyxNQUpRO0FBS3hCbUIsTUFBSSxFQUFFcEIsaURBQVMsQ0FBQ0M7QUFMUSxDQUExQjtBQVFBZ0IsYUFBYSxDQUFDZSxZQUFkLEdBQTZCO0FBQzNCYixNQUFJLEVBQUU7QUFEcUIsQ0FBN0I7QUFJZUYsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTWdCLGdCQUFnQixHQUFHNUIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwS0FBdEI7QUFtQk8sTUFBTUksY0FBYyxHQUFHTCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNMQUFwQjtBQWNBLE1BQU00QixLQUFLLEdBQUc3Qix3REFBTSxDQUFDOEIsRUFBVjtBQUFBO0FBQUE7QUFBQSxpT0FDUDVCLHlFQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FERCxDQUFYO0FBY0EsTUFBTTZCLElBQUksR0FBRy9CLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOExBQ05DLHlFQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FERixDQUFWO0FBWVEwQiwrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRbEQ7QUFBUixDQUFELEtBQXlCO0FBQ3RDO0FBQ0EsUUFBTWlDLGFBQWEsR0FBRyxDQUFDLFFBQUQsQ0FBdEIsQ0FGc0MsQ0FJdEM7O0FBQ0EsTUFBSWpDLFNBQUosRUFBZTtBQUNiaUMsaUJBQWEsQ0FBQ0csSUFBZCxDQUFtQnBDLFNBQW5CO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLHFEQUFEO0FBQWUsYUFBUyxFQUFFaUMsYUFBYSxDQUFDSSxJQUFkLENBQW1CLEdBQW5CLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLG9CQUFnQixFQUFDLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFFBQUksRUFBRWEsSUFBZDtBQUFvQixVQUFNLEVBQUMsTUFBM0I7QUFBa0MsTUFBRSxFQUFDLEdBQXJDO0FBQXlDLE1BQUUsRUFBQyxJQUE1QztBQUFpRCxLQUFDLEVBQUMsR0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsaUJBQWEsRUFBQyxTQURoQjtBQUVFLE9BQUcsRUFBQyxJQUZOO0FBR0UsVUFBTSxFQUFDLE9BSFQ7QUFJRSxlQUFXLEVBQUMsWUFKZDtBQUtFLFNBQUssRUFBQyxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBVUU7QUFBUSxRQUFJLEVBQUVBLElBQWQ7QUFBb0IsVUFBTSxFQUFDLE1BQTNCO0FBQWtDLE1BQUUsRUFBQyxJQUFyQztBQUEwQyxNQUFFLEVBQUMsSUFBN0M7QUFBa0QsS0FBQyxFQUFDLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGlCQUFhLEVBQUMsU0FEaEI7QUFFRSxPQUFHLEVBQUMsSUFGTjtBQUdFLFVBQU0sRUFBQyxPQUhUO0FBSUUsZUFBVyxFQUFDLFlBSmQ7QUFLRSxTQUFLLEVBQUMsS0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FWRixFQW1CRTtBQUFRLFFBQUksRUFBRUEsSUFBZDtBQUFvQixVQUFNLEVBQUMsTUFBM0I7QUFBa0MsTUFBRSxFQUFDLElBQXJDO0FBQTBDLE1BQUUsRUFBQyxJQUE3QztBQUFrRCxLQUFDLEVBQUMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsaUJBQWEsRUFBQyxTQURoQjtBQUVFLE9BQUcsRUFBQyxJQUZOO0FBR0UsVUFBTSxFQUFDLE9BSFQ7QUFJRSxlQUFXLEVBQUMsWUFKZDtBQUtFLFNBQUssRUFBQyxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQW5CRixDQURGLENBREY7QUFpQ0QsQ0ExQ0Q7O0FBNENBRCxNQUFNLENBQUN0QyxTQUFQLEdBQW1CO0FBQ2pCO0FBQ0FYLFdBQVMsRUFBRVksaURBQVMsQ0FBQ0MsTUFGSjs7QUFJakI7QUFDQXFDLE1BQUksRUFBRXRDLGlEQUFTLENBQUNDO0FBTEMsQ0FBbkI7QUFRQW9DLE1BQU0sQ0FBQ0wsWUFBUCxHQUFzQjtBQUNwQk0sTUFBSSxFQUFFO0FBRGMsQ0FBdEI7QUFJZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUUsYUFBYSxHQUFHbEMsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0SEFBbkI7QUFZZWlDLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQyxXQUFXLEdBQUdDLHlEQUFPLENBQ3pCQywyREFBUyxDQUFDO0FBQ1JDLGNBQVksRUFBRUMsK0dBRE47QUFFUkMsZ0JBQWMsRUFBRTtBQUFLLFNBQUssRUFBRTtBQUFFZixZQUFNLEVBQUU7QUFBVixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGUjtBQUdSZ0Isa0JBQWdCLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRWhCLFlBQU0sRUFBRztBQUFYLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhWLENBQUQsQ0FEZ0IsRUFNekJpQiw4REFOeUIsQ0FBUCxDQU9qQkMsS0FBRCxJQUFXO0FBQ1gsUUFBTTtBQUFFQztBQUFGLE1BQW9CRCxLQUExQjtBQUNBLFFBQU07QUFBQSxPQUFDRSxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DQyxzREFBUSxDQUFDO0FBQ2pEQyxvQkFBZ0IsRUFBRSxFQUQrQjtBQUVqREMsd0JBQW9CLEVBQUU7QUFGMkIsR0FBRCxDQUFsRDs7QUFJQSxRQUFNQyxjQUFjLEdBQUlDLEtBQUQsSUFBVztBQUNoQyxRQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJELFdBQUssQ0FBQ0UsY0FBTjtBQUNBRixXQUFLLENBQUNHLGVBQU47QUFDRDs7QUFDRFIsb0JBQWdCLENBQUM7QUFDZkUsc0JBQWdCLEVBQUVHLEtBQUssQ0FBQ0ksTUFBTixDQUFhQztBQURoQixLQUFELENBQWhCO0FBR0QsR0FSRDs7QUFTQSxRQUFNQyxJQUFJLEdBQUdDLG9EQUFNLENBQUMsRUFBRCxDQUFuQjs7QUFDQSxRQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixVQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxTQUFiLEVBQWY7QUFDQWhCLG9CQUFnQixDQUFDO0FBQ2ZFLHNCQUFnQixFQUFFWSxNQUFNLElBQUlBLE1BQU0sQ0FBQyxDQUFELENBQWhCLElBQXVCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLGlCQURwQztBQUVmZCwwQkFBb0IsRUFBRVcsTUFBTSxHQUFHQSxNQUFILEdBQVk7QUFGekIsS0FBRCxDQUFoQjtBQUlBaEIsaUJBQWEsQ0FBQztBQUNaSSxzQkFBZ0IsRUFBRVksTUFBTSxJQUFJQSxNQUFNLENBQUMsQ0FBRCxDQUFoQixJQUF1QkEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxpQkFEdkM7QUFFWmQsMEJBQW9CLEVBQUVXLE1BQU0sR0FBR0EsTUFBSCxHQUFZO0FBRjVCLEtBQUQsQ0FBYjtBQUlELEdBVkQ7O0FBWUEsUUFBTUksa0JBQWtCLEdBQUliLEtBQUQsSUFBVztBQUNwQyxRQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEJELFdBQUssQ0FBQ0UsY0FBTjtBQUNBRixXQUFLLENBQUNHLGVBQU47QUFDRDs7QUFDRFIsb0JBQWdCLENBQUM7QUFBRUUsc0JBQWdCLEVBQUVHLEtBQUssQ0FBQ0ksTUFBTixDQUFhQztBQUFqQyxLQUFELENBQWhCO0FBQ0FaLGlCQUFhLENBQUNDLGFBQUQsQ0FBYjtBQUNELEdBUEQ7O0FBU0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrR0FBRDtBQUFxQixPQUFHLEVBQUVZLElBQTFCO0FBQWdDLG1CQUFlLEVBQUVFLGVBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsZ0JBQVksRUFBQyxFQUZmO0FBR0UsU0FBSyxFQUFFZCxhQUFhLENBQUNHLGdCQUFkLElBQWtDLEVBSDNDO0FBSUUsZUFBVyxFQUFDLG1DQUpkO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFNRSxZQUFRLEVBQUVFLGNBTlo7QUFPRSxnQkFBWSxFQUFFYyxrQkFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERjtBQWVELENBM0RtQixDQUFwQjs7QUE2REEsTUFBTUMsZUFBZSxHQUFJdEIsS0FBRCxJQUFXO0FBQ2pDLFFBQU07QUFBRXVCO0FBQUYsTUFBa0J2QixLQUF4QjtBQUNBLFNBQU8sTUFBQyxXQUFEO0FBQWEsaUJBQWEsRUFBRXVCLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBSEQ7O0FBS2VELDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQU8sU0FBU0UsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M7QUFDdkMsUUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLEVBQXJCOztBQUVBLE1BQUlGLFNBQVMsSUFBSUEsU0FBUyxDQUFDRyxNQUFWLEtBQXFCLENBQXRDLEVBQXlDO0FBQ3ZDSCxhQUFTLENBQUNJLEdBQVYsQ0FDRSxDQUFDO0FBQ0NDLGNBREQ7QUFFQ0Msd0JBRkQ7QUFHQ1gsdUJBSEQ7QUFJQ1ksY0FBUSxFQUFFO0FBQUUxRjtBQUFGO0FBSlgsS0FBRCxLQUtNO0FBQ0osVUFBSTJGLEVBQUUsR0FBRyxFQUFUO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQSxVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBLFVBQUlDLGdCQUFnQixHQUFHLEVBQXZCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxVQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFDQSxVQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBLFVBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUNBLFVBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUVBVCxRQUFFLEdBQUdILFFBQUw7QUFDQUksU0FBRyxHQUFHNUYsUUFBUSxDQUFDNEYsR0FBVCxFQUFOO0FBQ0FDLFNBQUcsR0FBRzdGLFFBQVEsQ0FBQzZGLEdBQVQsRUFBTjtBQUNBQyxzQkFBZ0IsR0FBR2hCLGlCQUFuQjs7QUFDQSxVQUFJVyxrQkFBSixFQUF3QjtBQUN0QixhQUFLLElBQUlZLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdaLGtCQUFrQixDQUFDSCxNQUF2QyxFQUErQ2UsQ0FBQyxFQUFoRCxFQUFvRDtBQUNsRCxjQUFJWixrQkFBa0IsQ0FBQ1ksQ0FBRCxDQUFsQixDQUFzQkMsS0FBdEIsQ0FBNEJoQixNQUFoQyxFQUF3QztBQUN0QyxvQkFBUUcsa0JBQWtCLENBQUNZLENBQUQsQ0FBbEIsQ0FBc0JDLEtBQXRCLENBQTRCLENBQTVCLENBQVI7QUFDRSxtQkFBSyxVQUFMO0FBQ0VQLG9CQUFJLEdBQUdOLGtCQUFrQixDQUFDWSxDQUFELENBQWxCLENBQXNCRSxTQUE3QjtBQUNBOztBQUNGLG1CQUFLLDZCQUFMO0FBQ0VQLDBCQUFVLEdBQUdQLGtCQUFrQixDQUFDWSxDQUFELENBQWxCLENBQXNCRSxTQUFuQztBQUNBTiwyQkFBVyxHQUFHUixrQkFBa0IsQ0FBQ1ksQ0FBRCxDQUFsQixDQUFzQkcsVUFBcEM7QUFDQTs7QUFDRixtQkFBSyxTQUFMO0FBQ0VMLDRCQUFZLEdBQUdWLGtCQUFrQixDQUFDWSxDQUFELENBQWxCLENBQXNCRSxTQUFyQztBQUNBSCw2QkFBYSxHQUFHWCxrQkFBa0IsQ0FBQ1ksQ0FBRCxDQUFsQixDQUFzQkcsVUFBdEM7QUFDQTs7QUFDRixtQkFBSyxhQUFMO0FBQ0VOLHVCQUFPLEdBQUdULGtCQUFrQixDQUFDWSxDQUFELENBQWxCLENBQXNCRSxTQUFoQztBQUNBOztBQUNGO0FBQ0U7QUFoQko7QUFrQkQ7QUFDRjtBQUNGOztBQUVEbkIsZ0JBQVUsQ0FBQ08sRUFBWCxHQUFnQkEsRUFBaEI7QUFDQVAsZ0JBQVUsQ0FBQ1EsR0FBWCxHQUFpQkEsR0FBakI7QUFDQVIsZ0JBQVUsQ0FBQ1MsR0FBWCxHQUFpQkEsR0FBakI7QUFDQVQsZ0JBQVUsQ0FBQ1UsZ0JBQVgsR0FBOEJBLGdCQUE5QjtBQUNBVixnQkFBVSxDQUFDVyxJQUFYLEdBQWtCQSxJQUFsQjtBQUNBWCxnQkFBVSxDQUFDYSxXQUFYLEdBQXlCQSxXQUF6QjtBQUNBYixnQkFBVSxDQUFDWSxVQUFYLEdBQXdCQSxVQUF4QjtBQUNBWixnQkFBVSxDQUFDYyxPQUFYLEdBQXFCQSxPQUFyQjtBQUNBZCxnQkFBVSxDQUFDZ0IsYUFBWCxHQUEyQkEsYUFBM0I7QUFDQWhCLGdCQUFVLENBQUNlLFlBQVgsR0FBMEJBLFlBQTFCO0FBQ0FkLGtCQUFZLENBQUNuRCxJQUFiLENBQWtCa0QsVUFBbEI7QUFDQSxhQUFPQyxZQUFQO0FBQ0QsS0EzREg7QUE2REQ7O0FBRUQsU0FBT0EsWUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1vQixVQUFVLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFDVkMsU0FBRyxFQUFFLElBREs7QUFFVkMsU0FBRyxFQUFFO0FBRkssS0FETDtBQUtQQyxTQUFLLEVBQUUsQ0FMQTtBQU1QQyw0QkFBd0IsRUFBRTtBQU5uQixHQURRO0FBU2pCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQ1ZDLFNBQUcsRUFBRSxHQURLO0FBRVZDLFNBQUcsRUFBRTtBQUZLLEtBRE47QUFLTkMsU0FBSyxFQUFFLENBTEQ7QUFNTkMsNEJBQXdCLEVBQUU7QUFOcEIsR0FUUztBQWlCakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFDVkMsU0FBRyxFQUFFLElBREs7QUFFVkMsU0FBRyxFQUFFO0FBRkssS0FETjtBQUtOQyxTQUFLLEVBQUUsQ0FMRDtBQU1OQyw0QkFBd0IsRUFBRTtBQU5wQjtBQWpCUyxDQUFuQjtBQTBCZSxTQUFTRyxXQUFULENBQXFCO0FBQ2xDakgsT0FEa0M7QUFFbENFLFFBRmtDO0FBR2xDSCxVQUhrQztBQUlsQ0UsT0FKa0M7QUFLbENpSCxhQUxrQztBQU1sQ0MsU0FOa0M7QUFPbENDLE1BUGtDO0FBUWxDeEYsTUFSa0M7QUFTbEN5RjtBQVRrQyxDQUFyQixFQVVaO0FBQ0QsU0FDRSxNQUFDLDBEQUFEO0FBQ0UsWUFBUSxFQUNOLE1BQUMsdUVBQUQ7QUFDRSxhQUFPLEVBQUdwRCxLQUFELElBQVc7QUFDbEJxRCxlQUFPLENBQUNDLEdBQVIsQ0FBWXRELEtBQVo7QUFDRCxPQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSjtBQVFFLFlBQVEsRUFBRWxFLFFBQVEsQ0FBQzhGLGdCQVJyQjtBQVNFLFNBQUssRUFBRTdGLEtBVFQ7QUFVRSxTQUFLLEVBQUcsSUFBR0MsS0FBTSw0QkFWbkI7QUFXRSxVQUFNLEVBQUUsTUFBQyxtRUFBRDtBQUFRLFlBQU0sRUFBRUMsTUFBaEI7QUFBd0IsaUJBQVcsRUFBRWdILFdBQXJDO0FBQWtELFVBQUksRUFBQyxNQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWFY7QUFZRSxrQkFBYyxFQUNaLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUcsR0FBRXRGLElBQUssU0FBcEI7QUFBOEIsUUFBRSxFQUFHLEdBQUVBLElBQUssSUFBR3dGLElBQUssRUFBbEQ7QUFBcUQsY0FBUSxFQUFFLEtBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsa0JBREYsQ0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBb0JFLE1BQUMsMkRBQUQ7QUFDRSxPQUFHLE1BREw7QUFFRSx1QkFBbUIsRUFBRSxDQUZ2QjtBQUdFLFVBQU0sTUFIUjtBQUlFLGlCQUFhLEVBQUUsSUFKakI7QUFLRSxrQkFBYyxFQUFDLFdBTGpCO0FBTUUsZ0JBQVksRUFBQyxFQU5mO0FBT0UsYUFBUyxNQVBYO0FBUUUsaUJBQWEsRUFBRSxLQVJqQjtBQVNFLFlBQVEsTUFUVjtBQVVFLGFBQVMsRUFBQyxFQVZaO0FBV0UscUJBQWlCLEVBQUUsS0FYckI7QUFZRSxjQUFVLEVBQUVaLFVBWmQ7QUFhRSxjQUFVLEVBQUVhLFVBYmQ7QUFjRSxZQUFRLEVBQUUsSUFkWjtBQWVFLGVBQVcsRUFBQyxFQWZkO0FBZ0JFLGlCQUFhLEVBQUUsQ0FoQmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQkdGLE9BQU8sQ0FBQzdCLEdBQVIsQ0FBWSxDQUFDO0FBQUVrQyxPQUFGO0FBQU94SDtBQUFQLEdBQUQsRUFBaUJ5SCxLQUFqQixLQUNYO0FBQ0UsT0FBRyxFQUFFRCxHQURQO0FBRUUsT0FBRyxFQUFFeEgsS0FGUDtBQUdFLE9BQUcsRUFBRXlILEtBSFA7QUFJRSxhQUFTLEVBQUUsS0FKYjtBQUtFLFNBQUssRUFBRTtBQUNMbkYsV0FBSyxFQUFFLE1BREY7QUFFTEMsWUFBTSxFQUFFLE1BRkg7QUFHTG1GLGVBQVMsRUFBRSxPQUhOO0FBSUxsRixjQUFRLEVBQUU7QUFKTCxLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQWxCSCxDQXBCRixDQURGO0FBd0RELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTW1GLFFBQVEsR0FBRyxDQUFDO0FBQ2hCQyxnQkFEZ0I7QUFFaEJDLFlBRmdCO0FBR2hCQyxZQUhnQjtBQUloQkMsU0FKZ0I7QUFLaEJDLG1CQUxnQjtBQU1oQkM7QUFOZ0IsQ0FBRCxLQU9YO0FBQ0osU0FDRSxDQUFDLENBQUNKLFVBQUYsSUFDRSxNQUFDLDZEQUFEO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBc0NJLGFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR0QsaUJBQWlCLEdBQ2hCQSxpQkFEZ0IsR0FHaEI7QUFBUSxXQUFPLEVBQUVELE9BQWpCO0FBQTBCLFdBQU8sRUFBRUgsY0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxVQUFVLElBQUksV0FEakIsQ0FKSixDQUZKO0FBYUQsQ0FyQkQ7O0FBdUJlLFNBQVNJLFdBQVQsQ0FBcUI7QUFDbENDLE1BQUksR0FBRyxFQUQyQjtBQUVsQ0MsV0FGa0M7QUFHbENDLE9BSGtDO0FBSWxDQyxhQUprQztBQUtsQ0MscUJBTGtDO0FBTWxDWCxnQkFOa0M7QUFPbENJLG1CQVBrQztBQVFsQ1EsYUFSa0M7QUFTbENULFNBVGtDO0FBVWxDRCxZQVZrQztBQVdsQ1csVUFYa0M7QUFZbENDLGFBWmtDO0FBYWxDVCxlQWJrQztBQWNsQ3JHO0FBZGtDLENBQXJCLEVBZVo7QUFDRCxRQUFNK0csQ0FBQyxHQUFHTixLQUFLLEdBQUdPLE1BQU0sQ0FBQ1AsS0FBRCxDQUFULEdBQW1CLENBQWxDO0FBQ0EsUUFBTVEsTUFBTSxHQUFHQyxLQUFLLENBQUNILENBQUQsQ0FBTCxDQUFTNUYsSUFBVCxDQUFjLENBQWQsQ0FBZjtBQUVBLE1BQUk4RSxVQUFVLEdBQUdNLElBQUksQ0FBQzlDLE1BQUwsR0FBYytDLFNBQS9CO0FBRUEsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBa0NLLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR04sSUFBSSxJQUFJQSxJQUFJLENBQUM5QyxNQUFiLEdBQ0c4QyxJQUFJLENBQUM3QyxHQUFMLENBQVV5RCxJQUFELElBQVU7QUFDakIsV0FDRSxNQUFDLDZEQUFEO0FBQ0UsZUFBUyxFQUFDLGFBRFo7QUFFRSxXQUFLLEVBQUVULFdBRlQ7QUFHRSxTQUFHLEVBQUVTLElBQUksQ0FBQ3JEO0FBSFosT0FJTWdELFdBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU1FLE1BQUMsZ0VBQUQ7QUFBYSxVQUFJLEVBQUU5RztBQUFuQixPQUE2Qm1ILElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FORixDQURGO0FBVUQsR0FYRCxDQURILEdBYUcsSUFkTixFQWVHaEIsT0FBTyxJQUNOYyxNQUFNLENBQUN2RCxHQUFQLENBQVcsQ0FBQ3lELElBQUQsRUFBTzNDLENBQVAsS0FDVCxNQUFDLDZEQUFEO0FBQ0UsYUFBUyxFQUFDLGFBRFo7QUFFRSxTQUFLLEVBQUVrQyxXQUZUO0FBR0UsT0FBRyxFQUFFbEM7QUFIUCxLQUlNc0MsV0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUdGLFdBQVcsR0FBR0EsV0FBSCxHQUFpQixNQUFDLCtEQUFEO0FBQU0sV0FBTyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU4vQixDQURGLENBaEJKLENBREYsRUE2QkdYLFVBQVUsSUFDVCxNQUFDLFFBQUQ7QUFDRSxjQUFVLEVBQUVBLFVBRGQ7QUFFRSxrQkFBYyxFQUFFRCxjQUZsQjtBQUdFLFdBQU8sRUFBRUcsT0FIWDtBQUlFLGNBQVUsRUFBRUQsVUFKZDtBQUtFLHFCQUFpQixFQUFFRSxpQkFMckI7QUFNRSxpQkFBYSxFQUFFQyxhQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJKLEVBdUNHTSxtQkFBbUIsSUFDbEIsTUFBQyw2REFBRDtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDQSxtQkFBckMsQ0F4Q0osQ0FERjtBQTZDRDtBQUVETCxXQUFXLENBQUMxSCxTQUFaLEdBQXdCO0FBQ3RCMkgsTUFBSSxFQUFFMUgsaURBQVMsQ0FBQ3VJLEtBQVYsQ0FBZ0JDLFVBREE7QUFFdEJiLFdBQVMsRUFBRTNILGlEQUFTLENBQUN5SSxNQUZDO0FBR3RCWixhQUFXLEVBQUU3SCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQy9CRixpREFBUyxDQUFDQyxNQURxQixFQUUvQkQsaURBQVMsQ0FBQ3lJLE1BRnFCLEVBRy9CekksaURBQVMsQ0FBQ3VJLEtBSHFCLENBQXBCLENBSFM7QUFRdEJULHFCQUFtQixFQUFFOUgsaURBQVMsQ0FBQ0csT0FSVDtBQVN0QmdILGdCQUFjLEVBQUVuSCxpREFBUyxDQUFDMEksSUFUSjtBQVV0Qm5CLG1CQUFpQixFQUFFdkgsaURBQVMsQ0FBQ0csT0FWUDtBQVd0QjRILGFBQVcsRUFBRS9ILGlEQUFTLENBQUNHLE9BWEQ7QUFZdEJtSCxTQUFPLEVBQUV0SCxpREFBUyxDQUFDMkksSUFaRztBQWF0QmYsT0FBSyxFQUFFNUgsaURBQVMsQ0FBQ3lJLE1BYks7QUFjdEJwQixZQUFVLEVBQUVySCxpREFBUyxDQUFDQyxNQWRBO0FBZXRCK0gsVUFBUSxFQUFFaEksaURBQVMsQ0FBQzRJLE1BZkU7QUFnQnRCWCxhQUFXLEVBQUVqSSxpREFBUyxDQUFDNEksTUFoQkQ7QUFpQnRCcEIsZUFBYSxFQUFFeEgsaURBQVMsQ0FBQzRJO0FBakJILENBQXhCO0FBb0JBbkIsV0FBVyxDQUFDekYsWUFBWixHQUEyQjtBQUN6QmdHLFVBQVEsRUFBRTtBQUNSYSxXQUFPLEVBQUUsSUFERDtBQUVSQyxZQUFRLEVBQUUsTUFGRjtBQUdSQyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxPQUFyQyxFQUE4QyxPQUE5QyxDQUhJO0FBSVJDLE1BQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLEVBQXFDLE9BQXJDLEVBQThDLE9BQTlDO0FBSkksR0FEZTtBQU96QmYsYUFBVyxFQUFFO0FBQ1hnQixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxDQURPO0FBRVhDLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDO0FBRk8sR0FQWTtBQVd6QjFCLGVBQWEsRUFBRTtBQUNicUIsV0FBTyxFQUFFLElBREk7QUFFYk0sa0JBQWMsRUFBRSxRQUZIO0FBR2JDLE1BQUUsRUFBRTtBQUhTO0FBWFUsQ0FBM0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFVBQWtCO0FBQUEsTUFBWnJHLEtBQVk7QUFDckMsU0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFELGVBQTBCQSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtELENBTkQ7O0FBUWVxRywyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLG1CQUFtQixHQUFHakosd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2VEFPWkMseUVBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQVBJLEVBbUJaQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBbkJJLEVBOEJWQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBOUJFLENBQXpCO0FBbUNlK0ksa0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQW1CTyxNQUFNQyxNQUFNLEdBQUdDLEdBQUcsSUFBSXhHLEtBQUssSUFBSUEsS0FBSyxDQUFDeUcsS0FBTixDQUFZRCxHQUFaLENBQS9CO0FBRUEsTUFBTUUsSUFBSSxHQUFHakgsNkRBQU8sQ0FDekIsT0FBTztBQUFFa0gsV0FBUyxFQUFFO0FBQWIsQ0FBUCxDQUR5QixFQUV6QkMsbURBRnlCLEVBR3pCL0gsbURBSHlCLEVBSXpCZ0ksc0RBSnlCLEVBS3pCQyxzREFMeUIsRUFNekJoSSxvREFOeUIsRUFPekJpSSx1REFQeUIsRUFRekJDLHVEQVJ5QixFQVN6QkMsc0RBVHlCLEVBVXpCQyxtREFWeUIsRUFXekJDLGtEQVh5QixFQVl6QkMsbURBWnlCLEVBYXpCQyx1REFieUIsRUFjekJDLHFEQWR5QixFQWV6QkMseURBZnlCLEVBZ0J6QkMscURBaEJ5QixDQUFwQjtBQW1CUGQsSUFBSSxDQUFDM0osU0FBTCxpS0FDS3lLLHFEQUFPLENBQUN6SyxTQURiLEdBRUs2SixtREFBSyxDQUFDN0osU0FGWCxHQUdLdUsscURBQU8sQ0FBQ3ZLLFNBSGIsR0FJS3dLLHlEQUFXLENBQUN4SyxTQUpqQixHQUtLOEIsbURBQUssQ0FBQzlCLFNBTFgsR0FNSytCLG9EQUFNLENBQUMvQixTQU5aLEdBT0trSyxzREFBUSxDQUFDbEssU0FQZCxHQVFLbUssbURBQUssQ0FBQ25LLFNBUlgsR0FTS29LLGtEQUFJLENBQUNwSyxTQVRWLEdBVUtxSyxtREFBSyxDQUFDckssU0FWWCxHQVdLc0ssdURBQVMsQ0FBQ3RLLFNBWGYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUEsTUFBTTBLLFVBQVUsR0FBR3BLLHdEQUFNLENBQUMsS0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLEdBQ2RxSiwwQ0FEYyxFQUVkSCxvREFBTSxDQUFDLEtBQUQsQ0FGUSxFQUdkdkcsS0FBSyxJQUNIQSxLQUFLLENBQUM2RixPQUFOLElBQ0E2Qiw2REFBRyxDQUNEO0FBQUVGLFNBQU8sRUFBRTtBQUFYLENBREMsRUFFRDFCLHNEQUZDLEVBR0Q2QiwyREFIQyxFQUlEQyx3REFKQyxFQUtEekIsNERBTEMsRUFNREksb0RBQU0sQ0FBQyxTQUFELENBTkwsQ0FMUyxDQUFoQjs7QUFlQSxNQUFNc0IsR0FBRyxHQUFHO0FBQUEsTUFBQztBQUFFakw7QUFBRixHQUFEO0FBQUEsTUFBZ0JvRCxLQUFoQjs7QUFBQSxTQUNWLE1BQUMsVUFBRCxlQUFnQkEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF3QnBELFFBQXhCLENBRFU7QUFBQSxDQUFaOztBQUllaUwsa0VBQWY7QUFFQUEsR0FBRyxDQUFDOUssU0FBSixHQUFnQjtBQUNkSCxVQUFRLEVBQUVJLGlEQUFTLENBQUM4SyxHQUFWLENBQWN0QyxVQURWOztBQUVkO0FBQ0FLLFNBQU8sRUFBRTdJLGlEQUFTLENBQUMySSxJQUhMO0FBSWRvQyxJQUFFLEVBQUUvSyxpREFBUyxDQUFDZ0wsS0FBVixDQUFnQixDQUNsQixLQURrQixFQUVsQixTQUZrQixFQUdsQixTQUhrQixFQUlsQixTQUprQixFQUtsQixRQUxrQixFQU1sQixRQU5rQixFQU9sQixLQVBrQixFQVFsQixNQVJrQixDQUFoQixDQUpVO0FBY2RuSixPQUFLLEVBQUU3QixpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQ3pCRixpREFBUyxDQUFDQyxNQURlLEVBRXpCRCxpREFBUyxDQUFDeUksTUFGZSxFQUd6QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSHlCLENBQXBCLENBZE87QUFxQmQzRyxRQUFNLEVBQUU5QixpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzFCRixpREFBUyxDQUFDQyxNQURnQixFQUUxQkQsaURBQVMsQ0FBQ3lJLE1BRmdCLEVBRzFCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIMEIsQ0FBcEIsQ0FyQk07QUE0QmR3QixVQUFRLEVBQUVqSyxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzVCRixpREFBUyxDQUFDQyxNQURrQixFQUU1QkQsaURBQVMsQ0FBQ3lJLE1BRmtCLEVBRzVCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FINEIsQ0FBcEIsQ0E1Qkk7QUFtQ2R5QixPQUFLLEVBQUVsSyxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQ3pCRixpREFBUyxDQUFDQyxNQURlLEVBRXpCRCxpREFBUyxDQUFDeUksTUFGZSxFQUd6QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSHlCLENBQXBCLENBbkNPO0FBMENkMEIsTUFBSSxFQUFFbkssaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUN4QkYsaURBQVMsQ0FBQ0MsTUFEYyxFQUV4QkQsaURBQVMsQ0FBQ3lJLE1BRmMsRUFHeEJ6SSxpREFBUyxDQUFDaUwsT0FBVixDQUNFakwsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFDRixpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDeUksTUFBN0IsQ0FBcEIsQ0FERixDQUh3QixDQUFwQixDQTFDUTtBQWlEZDJCLE9BQUssRUFBRXBLLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FDekJGLGlEQUFTLENBQUNDLE1BRGUsRUFFekJELGlEQUFTLENBQUN5SSxNQUZlLEVBR3pCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIeUIsQ0FBcEIsQ0FqRE87QUF3RGQ0QixXQUFTLEVBQUVySyxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzdCRixpREFBUyxDQUFDQyxNQURtQixFQUU3QkQsaURBQVMsQ0FBQ3lJLE1BRm1CLEVBRzdCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FINkIsQ0FBcEIsQ0F4REc7QUErRGQrQixTQUFPLEVBQUV4SyxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzNCRixpREFBUyxDQUFDQyxNQURpQixFQUUzQkQsaURBQVMsQ0FBQ3lJLE1BRmlCLEVBRzNCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIMkIsQ0FBcEIsQ0EvREs7QUFzRWR5QyxRQUFNLEVBQUVsTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzFCRixpREFBUyxDQUFDQyxNQURnQixFQUUxQkQsaURBQVMsQ0FBQ3lJLE1BRmdCLEVBRzFCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIMEIsQ0FBcEIsQ0F0RU07QUE2RWQwQyxXQUFTLEVBQUVuTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzdCRixpREFBUyxDQUFDQyxNQURtQixFQUU3QkQsaURBQVMsQ0FBQ3lJLE1BRm1CLEVBRzdCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FINkIsQ0FBcEIsQ0E3RUc7QUFvRmQyQyxhQUFXLEVBQUVwTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQy9CRixpREFBUyxDQUFDQyxNQURxQixFQUUvQkQsaURBQVMsQ0FBQ3lJLE1BRnFCLEVBRy9CekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIK0IsQ0FBcEIsQ0FwRkM7QUEyRmQ0QyxjQUFZLEVBQUVyTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQ2hDRixpREFBUyxDQUFDQyxNQURzQixFQUVoQ0QsaURBQVMsQ0FBQ3lJLE1BRnNCLEVBR2hDekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIZ0MsQ0FBcEIsQ0EzRkE7QUFrR2Q2QyxZQUFVLEVBQUV0TCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQzlCRixpREFBUyxDQUFDQyxNQURvQixFQUU5QkQsaURBQVMsQ0FBQ3lJLE1BRm9CLEVBRzlCekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIOEIsQ0FBcEIsQ0FsR0U7QUF5R2Q4QixhQUFXLEVBQUV2SyxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQy9CRixpREFBUyxDQUFDQyxNQURxQixFQUUvQkQsaURBQVMsQ0FBQ3lJLE1BRnFCLEVBRy9CekksaURBQVMsQ0FBQ2lMLE9BQVYsQ0FDRWpMLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ3lJLE1BQTdCLENBQXBCLENBREYsQ0FIK0IsQ0FBcEI7QUF6R0MsQ0FBaEI7QUFrSEFvQyxHQUFHLENBQUM3SSxZQUFKLEdBQW1CO0FBQ2pCK0ksSUFBRSxFQUFFO0FBRGEsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSkE7QUFDQTtBQUNBOztBQUVBLE1BQU1RLFNBQVMsR0FBRyxDQUFDO0FBQUUzTCxVQUFGO0FBQVlSLFdBQVo7QUFBdUJvTSxXQUF2QjtBQUFrQ0MsVUFBbEM7QUFBNENDO0FBQTVDLENBQUQsS0FBeUQ7QUFDekUsU0FDRSxNQUFDLHdEQUFEO0FBQ0UsYUFBUyxFQUFFdE0sU0FEYjtBQUVFLGFBQVMsRUFBRW9NLFNBRmI7QUFHRSxZQUFRLEVBQUVDLFFBSFo7QUFJRSxTQUFLLEVBQUVDLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HOUwsUUFOSCxDQURGO0FBVUQsQ0FYRDs7QUFhQTJMLFNBQVMsQ0FBQ3hMLFNBQVYsR0FBc0I7QUFDcEJYLFdBQVMsRUFBRVksaURBQVMsQ0FBQ0MsTUFERDtBQUVwQnVMLFdBQVMsRUFBRXhMLGlEQUFTLENBQUMySSxJQUZEO0FBR3BCOEMsVUFBUSxFQUFFekwsaURBQVMsQ0FBQzJJO0FBSEEsQ0FBdEI7QUFNZTRDLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1JLGdCQUFnQixHQUFHdEwsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0TkFHakIwQyxLQUFELElBQ0FBLEtBQUssQ0FBQ3dJLFNBQU4sSUFDQWQsNkRBREEsMkNBSmtCLEVBU2pCMUgsS0FBRCxJQUNDQSxLQUFLLENBQUN5SSxRQUFOLElBQ0NmLDZEQURELHFDQUFELElBS0FBLDZEQUxBLDBIQVZrQixFQXlCakIxSCxLQUFELElBQ0FBLEtBQUssQ0FBQzBJLEtBQU4sSUFDQWhCLDZEQURBLHdJQTFCa0IsQ0FBdEI7QUFvRGVpQiwrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxrQkFBTixTQUFpQ0MsK0NBQWpDLENBQTJDO0FBQ3pDQyxhQUFXLENBQUM5SSxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsOENBeUJBLENBQUM7QUFBRStJLGVBQUY7QUFBYUM7QUFBYixLQUFELEtBQTRCO0FBQzdDLFlBQU07QUFBRUM7QUFBRixVQUFpQixLQUFLQyxLQUE1QjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFSixpQkFBRjtBQUFhQztBQUFiLE9BQWQ7O0FBQ0EsVUFBSUQsU0FBUyxLQUFLLElBQWQsSUFBc0JDLE9BQU8sS0FBSyxJQUF0QyxFQUE0QztBQUMxQyxhQUFLaEosS0FBTCxDQUFXb0osZ0JBQVgsQ0FBNEI7QUFDMUJDLHNCQUFZLEVBQUVOLFNBQVMsQ0FBQ08sTUFBVixDQUFpQkwsVUFBakIsQ0FEWTtBQUUxQk0sb0JBQVUsRUFBRVAsT0FBTyxDQUFDTSxNQUFSLENBQWVMLFVBQWY7QUFGYyxTQUE1QjtBQUlEO0FBQ0YsS0FsQ2tCOztBQUFBLCtDQW9DRU8sWUFBRCxJQUFrQjtBQUNwQyxhQUFPLEtBQUtMLFFBQUwsQ0FBYztBQUFFSztBQUFGLE9BQWQsQ0FBUDtBQUNELEtBdENrQjs7QUFFakIsVUFBTUMsU0FBUyxHQUNiLEtBQUt6SixLQUFMLENBQVdzRixJQUFYLElBQW1CLEtBQUt0RixLQUFMLENBQVdzRixJQUFYLENBQWdCbUUsU0FBbkMsR0FDSSxLQUFLekosS0FBTCxDQUFXc0YsSUFBWCxDQUFnQm1FLFNBRHBCLEdBRUksR0FITjs7QUFJQSxVQUFNUixXQUFVLEdBQ2QsS0FBS2pKLEtBQUwsQ0FBV3NGLElBQVgsSUFBbUIsS0FBS3RGLEtBQUwsQ0FBV3NGLElBQVgsQ0FBZ0JnRSxNQUFuQyxHQUNJLEtBQUt0SixLQUFMLENBQVdzRixJQUFYLENBQWdCZ0UsTUFEcEIsR0FFSSxNQUhOOztBQUlBLFNBQUtKLEtBQUwsR0FBYTtBQUNYTSxrQkFBWSxFQUFFLElBREg7QUFFWFQsZUFBUyxFQUFFLEtBQUsvSSxLQUFMLENBQVcrSSxTQUFYLEdBQXVCLEtBQUsvSSxLQUFMLENBQVcrSSxTQUFsQyxHQUE4QyxJQUY5QztBQUdYQyxhQUFPLEVBQUUsS0FBS2hKLEtBQUwsQ0FBV2dKLE9BQVgsR0FBcUIsS0FBS2hKLEtBQUwsQ0FBV2dKLE9BQWhDLEdBQTBDLElBSHhDO0FBSVhDLGdCQUFVLEVBQVZBLFdBSlc7QUFLWFE7QUFMVyxLQUFiO0FBT0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQXhCO0FBQ0EsU0FBS0MsaUJBQUwsR0FBeUIsS0FBS0EsaUJBQUwsQ0FBdUJELElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0E7QUFDSjtBQUNBO0FBQ0k7QUFDRDs7QUFpQkRFLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUwsa0JBQUY7QUFBZ0JULGVBQWhCO0FBQTJCQztBQUEzQixRQUF1QyxLQUFLRSxLQUFsRCxDQURPLENBRVA7O0FBQ0EsVUFBTTtBQUNKOU0sZUFESTtBQUVKME4saUJBRkk7QUFHSkMsZUFISTtBQUlKQyw4QkFKSTtBQUtKQyw0QkFMSTtBQU1KQyxjQU5JO0FBT0pDLG9CQVBJO0FBUUpDLFdBUkk7QUFTSkMsaUJBVEk7QUFVSkMscUJBVkk7QUFXSkMsZ0JBWEk7QUFZSkMsMEJBWkk7QUFhSkMsV0FiSTtBQWNKQyxXQWRJO0FBZUpDLG9CQWZJO0FBZ0JKQyxhQWhCSTtBQWlCSkM7QUFqQkksUUFrQkYsS0FBSzdLLEtBbEJULENBSE8sQ0F1QlA7O0FBQ0EsVUFBTTNCLGFBQWEsR0FBRyxDQUFDLGFBQUQsQ0FBdEIsQ0F4Qk8sQ0F5QlA7O0FBQ0EsUUFBSWpDLFNBQUosRUFBZTtBQUNiaUMsbUJBQWEsQ0FBQ0csSUFBZCxDQUFtQnBDLFNBQW5CO0FBQ0QsS0E1Qk0sQ0E4QlA7OztBQUNBLFVBQU0wTyxvQkFBb0IsR0FBRztBQUMzQmhCLGlCQUFXLEVBQUVBLFdBQVcsR0FBR0EsV0FBSCxHQUFpQixpQkFEZDtBQUUzQkMsZUFBUyxFQUFFQSxTQUFTLEdBQUdBLFNBQUgsR0FBZSxvQkFGUjtBQUczQmhCLGVBSDJCO0FBSTNCQyxhQUoyQjtBQUszQlEsa0JBTDJCO0FBTTNCdUIsbUJBQWEsRUFBRSxLQUFLbkIsaUJBTk87QUFPM0JvQixtQkFBYSxFQUFFLEtBQUt0QixnQkFQTztBQVEzQk0sOEJBUjJCO0FBUzNCQyw0QkFUMkI7QUFVM0JDLGNBVjJCO0FBVzNCRSxXQVgyQjtBQVkzQkQsb0JBQWMsRUFBRUEsY0FBYyxHQUFHQSxjQUFILEdBQW9CLEtBWnZCO0FBYTNCRSxpQkFiMkI7QUFjM0JDLHFCQWQyQjtBQWUzQkMsZ0JBZjJCO0FBZ0IzQkMsMEJBaEIyQjtBQWlCM0JDLFdBakIyQjtBQWtCM0JFLG9CQUFjLEVBQUVBLGNBQWMsR0FBR0EsY0FBSCxHQUFvQixDQWxCdkI7QUFtQjNCRCxXQW5CMkI7QUFvQjNCRSxhQXBCMkI7QUFxQjNCQztBQXJCMkIsS0FBN0I7QUF3QkEsV0FDRSxNQUFDLHdFQUFEO0FBQXdCLGVBQVMsRUFBRXhNLGFBQWEsQ0FBQ0ksSUFBZCxDQUFtQixHQUFuQixDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyREFBRCxlQUFxQnFNLG9CQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREYsQ0FERjtBQUtEOztBQXJHd0M7O0FBd0czQ2xDLGtCQUFrQixDQUFDN0wsU0FBbkIsR0FBK0I7QUFDN0I7QUFDQStNLGFBQVcsRUFBRTlNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJ1SSxVQUZEOztBQUc3QjtBQUNBdUUsV0FBUyxFQUFFL00saURBQVMsQ0FBQ0MsTUFBVixDQUFpQnVJLFVBSkM7QUFJVzs7QUFDeEM7QUFDQXdFLDBCQUF3QixFQUFFaE4saURBQVMsQ0FBQ0MsTUFOUDs7QUFPN0I7QUFDQWdOLHdCQUFzQixFQUFFak4saURBQVMsQ0FBQ0MsTUFSTDs7QUFTN0I7QUFDQWlOLFVBQVEsRUFBRWxOLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FDNUJGLGlEQUFTLENBQUMySSxJQURrQixFQUU1QjNJLGlEQUFTLENBQUNnTCxLQUFWLENBQWdCLENBQUMsWUFBRCxFQUFlLFVBQWYsQ0FBaEIsQ0FGNEIsQ0FBcEIsQ0FWbUI7O0FBZTdCO0FBQ0FtQyxnQkFBYyxFQUFFbk4saURBQVMsQ0FBQzJJLElBaEJHOztBQWlCN0I7QUFDQXlFLE9BQUssRUFBRXBOLGlEQUFTLENBQUMySSxJQWxCWTs7QUFtQjdCO0FBQ0EwRSxhQUFXLEVBQUVyTixpREFBUyxDQUFDZ0wsS0FBVixDQUFnQixDQUFDLFlBQUQsRUFBZSxVQUFmLENBQWhCLENBcEJnQjs7QUFxQjdCO0FBQ0FzQyxpQkFBZSxFQUFFdE4saURBQVMsQ0FBQ2dMLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQixDQXRCWTs7QUF1QjdCO0FBQ0F1QyxZQUFVLEVBQUV2TixpREFBUyxDQUFDMkksSUF4Qk87O0FBeUI3QjtBQUNBNkUsc0JBQW9CLEVBQUV4TixpREFBUyxDQUFDMkksSUExQkg7O0FBMkI3QjtBQUNBOEUsT0FBSyxFQUFFek4saURBQVMsQ0FBQzJJLElBNUJZOztBQTZCN0I7QUFDQWdGLGdCQUFjLEVBQUUzTixpREFBUyxDQUFDeUksTUE5Qkc7O0FBK0I3QjtBQUNBaUYsT0FBSyxFQUFFMU4saURBQVMsQ0FBQzJJLElBaENZOztBQWlDN0I7QUFDQWlGLFNBQU8sRUFBRTVOLGlEQUFTLENBQUMySSxJQWxDVTs7QUFtQzdCO0FBQ0FrRixVQUFRLEVBQUU3TixpREFBUyxDQUFDMkksSUFwQ1M7O0FBcUM3QjtBQUNBeUQsa0JBQWdCLEVBQUVwTSxpREFBUyxDQUFDMEk7QUF0Q0MsQ0FBL0I7QUF5Q2VrRCxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUM1SkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1xQyxzQkFBc0IsR0FBRzVOLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVBBQTVCOztBQXlCQSxNQUFNNE4sZ0JBQWdCLEdBQUdDLGFBQWEsSUFBSTlOLHdEQUFNLENBQUM4TixhQUFELENBQVY7QUFBQTtBQUFBO0FBQUEsMnFCQWtDUG5MLEtBQUssSUFDeEJBLEtBQUssQ0FBQyxVQUFELENBQUwsS0FBc0IsS0FBdEIsR0FBOEIsZ0JBQTlCLEdBQWlELFNBbkN2QixFQW9DWEEsS0FBSyxJQUNwQkEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxLQUFzQixLQUF0QixHQUE4QixnQkFBOUIsR0FBaUQsU0FyQ3ZCLEVBc0NmQSxLQUFLLElBQ2hCQSxLQUFLLENBQUMsVUFBRCxDQUFMLEtBQXNCLEtBQXRCLEdBQThCLGdCQUE5QixHQUFpRCxTQXZDdkIsRUE4Q1RBLEtBQUssSUFDeEJBLEtBQUssQ0FBQyxVQUFELENBQUwsS0FBc0IsS0FBdEIsR0FBOEIsZ0JBQTlCLEdBQWlELFNBL0NyQixFQWdEYkEsS0FBSyxJQUNwQkEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxLQUFzQixLQUF0QixHQUE4QixnQkFBOUIsR0FBaUQsU0FqRHJCLEVBa0RqQkEsS0FBSyxJQUNoQkEsS0FBSyxDQUFDLFVBQUQsQ0FBTCxLQUFzQixLQUF0QixHQUE4QixnQkFBOUIsR0FBaUQsU0FuRHJCLENBQXRDOztBQXlEQSxNQUFNb0wsaUJBQWlCLEdBQUdDLG1FQUFhLENBQUNILGdCQUFELENBQXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLFFBQVEsR0FBRyxDQUFDO0FBQUVsUCxXQUFGO0FBQWFtUCxTQUFiO0FBQXNCQztBQUF0QixDQUFELEtBQXFDO0FBQ3BEO0FBQ0EsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGFBQWQsSUFBK0JDLDBEQUFTLENBQUMsS0FBRCxDQUE5QyxDQUZvRCxDQUlwRDs7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQyxVQUFELENBQXBCLENBTG9ELENBT3BEOztBQUNBLE1BQUl4UCxTQUFKLEVBQWU7QUFDYndQLGVBQVcsQ0FBQ3BOLElBQVosQ0FBaUJwQyxTQUFqQjtBQUNEOztBQUVELFFBQU15UCxXQUFXLEdBQUdyTCxLQUFLLElBQUk7QUFDM0JrTCxpQkFBYTtBQUNiRixXQUFPLENBQUMsQ0FBQ0MsV0FBRixDQUFQO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsdURBQUQ7QUFDRSxXQUFPLEVBQUVJLFdBRFg7QUFFRSxhQUFTLEVBQUcsR0FBRUQsV0FBVyxDQUFDbk4sSUFBWixDQUFpQixHQUFqQixDQUFzQixJQUFHZ04sV0FBVyxHQUFHLFFBQUgsR0FBYyxFQUFHLEVBRnJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLFNBQUssRUFBQyw0QkFBWDtBQUF3QyxXQUFPLEVBQUMsa0JBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLEtBQUMsRUFBQywyUEFESjtBQUVFLGFBQVMsRUFBQyxvQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0YsT0FBUCxDQVZGLENBREY7QUFjRCxDQS9CRDs7QUFpQ0FELFFBQVEsQ0FBQ3ZPLFNBQVQsR0FBcUI7QUFDbkI7QUFDQVgsV0FBUyxFQUFFWSxpREFBUyxDQUFDQyxNQUZGOztBQUduQjtBQUNBc08sU0FBTyxFQUFFdk8saURBQVMsQ0FBQ0MsTUFKQTs7QUFLbkI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0V1TyxTQUFPLEVBQUV4TyxpREFBUyxDQUFDMEk7QUFYQSxDQUFyQjtBQWNBNEYsUUFBUSxDQUFDdE0sWUFBVCxHQUF3QjtBQUN0QndNLFNBQU8sRUFBRSxNQUFNLENBQUU7QUFESyxDQUF4QjtBQUllRix1RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNUSxZQUFZLEdBQUdDLG1FQUFILG9GQUFsQjtBQVNBLE1BQU1DLGVBQWUsR0FBR0QsbUVBQUgsa0ZBQXJCO0FBU0EsTUFBTUUsWUFBWSxHQUFHdkUsNkRBQUgsMkRBQ0hvRSxZQURHLENBQWxCO0FBSUEsTUFBTUksZUFBZSxHQUFHeEUsNkRBQUgsNERBQ05zRSxlQURNLENBQXJCO0FBSUEsTUFBTUcsZUFBZSxHQUFHOU8sd0RBQU0sQ0FBQytPLE1BQVY7QUFBQTtBQUFBO0FBQUEsaVNBZ0JmRixlQWhCZSxFQWtCUDNPLHlFQUFRLENBQUMsU0FBRCxFQUFZLHFCQUFaLENBbEJELEVBbUJMQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBbkJILEVBMkJiME8sWUEzQmEsRUE2QkwxTyx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBN0JILENBQXJCO0FBbUNlNE8sOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1SLFNBQVMsR0FBR1UsWUFBWSxJQUFJO0FBQ2hDLFFBQU07QUFBQSxPQUFDeEwsS0FBRDtBQUFBLE9BQVF5TDtBQUFSLE1BQW9CbE0sc0RBQVEsQ0FBQ2lNLFlBQUQsQ0FBbEM7QUFDQSxRQUFNRSxPQUFPLEdBQUdDLHlEQUFXLENBQUMsTUFBTUYsUUFBUSxDQUFDekwsS0FBSyxJQUFJLENBQUNBLEtBQVgsQ0FBZixFQUFrQyxFQUFsQyxDQUEzQjtBQUNBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRMEwsT0FBUixDQUFQO0FBQ0QsQ0FKRDs7QUFNZVosd0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTWMsYUFBYSxHQUFHLENBQUM7QUFDckJyUSxXQURxQjtBQUVyQlEsVUFGcUI7QUFHckI4UCxTQUhxQjtBQUlyQkMsVUFKcUI7QUFLckJDLFlBTHFCO0FBTXJCQyxZQU5xQjtBQU9yQkMsU0FQcUI7QUFRckJDLGlCQVJxQjtBQVNyQkM7QUFUcUIsQ0FBRCxLQVVoQjtBQUNKO0FBQ0EsUUFBTTNPLGFBQWEsR0FBRyxDQUFDLE9BQUQsQ0FBdEIsQ0FGSSxDQUlKOztBQUNBLE1BQUlqQyxTQUFKLEVBQWU7QUFDYmlDLGlCQUFhLENBQUNHLElBQWQsQ0FBbUJwQyxTQUFuQjtBQUNELEdBUEcsQ0FTSjs7O0FBQ0EsUUFBTTZRLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxPQUFLLElBQUl0SyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHb0ssZUFBcEIsRUFBcUNwSyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDc0ssZ0JBQVksQ0FBQ3pPLElBQWIsQ0FBa0JtRSxDQUFsQjtBQUNELEdBYkcsQ0FlSjs7O0FBQ0F1Syx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxLQUFLLEdBQUcsSUFBSUMscURBQUosQ0FDWkosZ0JBQWdCLEdBQUksSUFBR0EsZ0JBQWlCLEVBQXhCLEdBQTRCLFFBRGhDLG9CQUdQTixPQUhPLEVBQWQ7QUFNQVMsU0FBSyxDQUFDRSxLQUFOO0FBQ0QsR0FSUSxFQVFOLENBQUNMLGdCQUFELEVBQW1CTixPQUFuQixDQVJNLENBQVQ7QUFVQSxTQUNFLE1BQUMsNERBQUQ7QUFDRSxhQUFTLEVBQUVyTyxhQUFhLENBQUNJLElBQWQsQ0FBbUIsR0FBbkIsQ0FEYjtBQUVFLE1BQUUsRUFBRXVPLGdCQUFnQixJQUFJLE9BRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLHFCQUFjLE9BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JwUSxRQUEvQixDQURGLENBSkYsRUFTRytQLFFBQVEsSUFDUCxNQUFDLHlFQUFEO0FBQ0UsYUFBUyxFQUFDLGlCQURaO0FBRUUscUJBQWMsVUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsa0VBQUQ7QUFBZSxhQUFTLEVBQUMsbUJBQXpCO0FBQTZDLHNCQUFlLEdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsVUFBVSxHQUFHQSxVQUFILEdBQWdCLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUQ3QixDQUpGLEVBT0UsTUFBQyxrRUFBRDtBQUFlLGFBQVMsRUFBQyxtQkFBekI7QUFBNkMsc0JBQWUsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxVQUFVLEdBQUdBLFVBQUgsR0FBZ0IsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRDdCLENBUEYsQ0FWSixFQXdCR0MsT0FBTyxJQUNOLE1BQUMseUVBQUQ7QUFDRSxhQUFTLEVBQUMsZ0JBRFo7QUFFRSxxQkFBYyxlQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFlBQVksQ0FBQ3BMLEdBQWIsQ0FBa0JtQyxLQUFELElBQ2hCLE1BQUMsaUVBQUQ7QUFDRSxPQUFHLEVBQUVBLEtBRFA7QUFFRSxhQUFTLEVBQUMsZUFGWjtBQUdFLHNCQUFpQixJQUFHQSxLQUFNLEVBSDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBSkYsQ0F6QkosQ0FERjtBQTJDRCxDQS9FRCxDLENBaUZBOzs7QUFDQSxNQUFNc0osVUFBVSxHQUFHLENBQUM7QUFBRTFRO0FBQUYsQ0FBRCxLQUFrQjtBQUNuQyxTQUNFLE1BQUMsc0VBQUQ7QUFBbUIsYUFBUyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkNBLFFBQTdDLENBREY7QUFHRCxDQUpEOztBQU1BNlAsYUFBYSxDQUFDMVAsU0FBZCxHQUEwQjtBQUN4QjtBQUNBWCxXQUFTLEVBQUVZLGlEQUFTLENBQUNDLE1BRkc7O0FBSXhCO0FBQ0FMLFVBQVEsRUFBRUksaURBQVMsQ0FBQ0csT0FMSTs7QUFPeEI7QUFDQXVQLFNBQU8sRUFBRTFQLGlEQUFTLENBQUM0SSxNQVJLOztBQVV4QjtBQUNBK0csVUFBUSxFQUFFM1AsaURBQVMsQ0FBQzJJLElBWEk7O0FBYXhCO0FBQ0FtSCxTQUFPLEVBQUU5UCxpREFBUyxDQUFDMkksSUFkSzs7QUFnQnhCO0FBQ0FvSCxpQkFBZSxFQUFFL1AsaURBQVMsQ0FBQ3lJLE1BakJIOztBQW1CeEI7QUFDQW1ILFlBQVUsRUFBRTVQLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQzRJLE1BQTdCLENBQXBCLENBcEJZOztBQXNCeEI7QUFDQWlILFlBQVUsRUFBRTdQLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQzRJLE1BQTdCLENBQXBCO0FBdkJZLENBQTFCO0FBMEJBMEgsVUFBVSxDQUFDdlEsU0FBWCxHQUF1QjtBQUNyQjtBQUNBSCxVQUFRLEVBQUVJLGlEQUFTLENBQUNHO0FBRkMsQ0FBdkIsQyxDQUtBOztBQUNBc1AsYUFBYSxDQUFDek4sWUFBZCxHQUE2QjtBQUMzQjJOLFVBQVEsRUFBRTtBQURpQixDQUE3QjtBQUlBO0FBRWVGLDRFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQSxNQUFNYyxZQUFZLEdBQUdsUSx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdIQUFsQixDLENBWUE7O0FBQ0EsTUFBTWtRLGlCQUFpQixHQUFHblEsd0RBQU0sQ0FBQ29RLEVBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQXZCLEMsQ0FJQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdyUSx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZCQUFuQixDLENBSUE7O0FBQ0EsTUFBTXFRLG9CQUFvQixHQUFHdFEsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUExQixDLENBRUE7O0FBQ0EsTUFBTXNRLG9CQUFvQixHQUFHdlEsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUExQixDLENBRUE7O0FBQ0EsTUFBTXVRLFlBQVksR0FBR3hRLHdEQUFNLENBQUMrTyxNQUFWO0FBQUE7QUFBQTtBQUFBLDhMQUFsQixDLENBaUJBOztBQUNBLE1BQU0wQixVQUFVLEdBQUd6USx3REFBTSxDQUFDK08sTUFBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBaEI7QUFLQTtBQVFlbUIsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUEsTUFBTVEsY0FBYyxHQUFHMVEsd0RBQU0sQ0FBQyxHQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsR0FDbEJxSiwwQ0FEa0IsRUFFbEJzSCx3REFGa0IsRUFHbEJDLHdEQUhrQixFQUlsQkMsdURBSmtCLEVBS2xCQyx3REFMa0IsRUFNbEJDLDJEQU5rQixFQU9sQjdILG9EQUFNLENBQUMsU0FBRCxDQVBZLENBQXBCOztBQVVBLE1BQU04SCxPQUFPLEdBQUc7QUFBQSxNQUFDO0FBQUU5QztBQUFGLEdBQUQ7QUFBQSxNQUFldkwsS0FBZjs7QUFBQSxTQUNkLE1BQUMsY0FBRCxlQUFvQkEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE0QnVMLE9BQTVCLENBRGM7QUFBQSxDQUFoQjs7QUFJQThDLE9BQU8sQ0FBQ3RSLFNBQVI7QUFDRXdPLFNBQU8sRUFBRXZPLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBQ0YsaURBQVMsQ0FBQ0MsTUFBWCxFQUFtQkQsaURBQVMsQ0FBQ0csT0FBN0IsQ0FBcEIsQ0FEWDtBQUVFNEssSUFBRSxFQUFFL0ssaURBQVMsQ0FBQ2dMLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBaEIsQ0FGTjtBQUdFZ0csWUFBVSxFQUFFaFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM5QkYsaURBQVMsQ0FBQ0MsTUFEb0IsRUFFOUJELGlEQUFTLENBQUN5SSxNQUZvQixFQUc5QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDhCLENBQXBCLENBSGQ7QUFVRXdJLFlBQVUsRUFBRWpSLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FDOUJGLGlEQUFTLENBQUNDLE1BRG9CLEVBRTlCRCxpREFBUyxDQUFDeUksTUFGb0IsRUFHOUJ6SSxpREFBUyxDQUFDaUwsT0FBVixDQUNFakwsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFDRixpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDeUksTUFBN0IsQ0FBcEIsQ0FERixDQUg4QixDQUFwQixDQVZkO0FBaUJFeUksV0FBUyxFQUFFbFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM3QkYsaURBQVMsQ0FBQ0MsTUFEbUIsRUFFN0JELGlEQUFTLENBQUN5SSxNQUZtQixFQUc3QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDZCLENBQXBCLENBakJiO0FBd0JFMEksWUFBVSxFQUFFblIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM5QkYsaURBQVMsQ0FBQ0MsTUFEb0IsRUFFOUJELGlEQUFTLENBQUN5SSxNQUZvQixFQUc5QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDhCLENBQXBCLENBeEJkO0FBK0JFMkksZUFBYSxFQUFFcFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUNqQ0YsaURBQVMsQ0FBQ0MsTUFEdUIsRUFFakNELGlEQUFTLENBQUN5SSxNQUZ1QixFQUdqQ3pJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSGlDLENBQXBCO0FBL0JqQixHQXNDS2lCLDBDQUFJLENBQUMzSixTQXRDVjtBQXlDQXNSLE9BQU8sQ0FBQ3JQLFlBQVIsR0FBdUI7QUFDckIrSSxJQUFFLEVBQUUsSUFEaUI7QUFFckIzQixJQUFFLEVBQUUsQ0FGaUI7QUFHckJrSSxJQUFFLEVBQUUsQ0FIaUI7QUFJckJMLFlBQVUsRUFBRTtBQUpTLENBQXZCO0FBT2VJLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFHQTs7QUFFQSxNQUFNRSxXQUFXLEdBQUcsVUFBbUQ7QUFBQSxNQUFsRDtBQUFFblMsYUFBRjtBQUFhb1MsYUFBYjtBQUF3QkM7QUFBeEIsR0FBa0Q7QUFBQSxNQUFaek8sS0FBWTs7QUFDckUsUUFBTTNCLGFBQWEsR0FBRyxDQUFDLFVBQUQsQ0FBdEI7O0FBQ0EsTUFBSWpDLFNBQUosRUFBZTtBQUNiaUMsaUJBQWEsQ0FBQ0csSUFBZCxDQUFtQnBDLFNBQW5CO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLDBEQUFEO0FBQW9CLGFBQVMsRUFBRWlDLGFBQWEsQ0FBQ0ksSUFBZCxDQUFtQixHQUFuQixDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsWUFBbEI7QUFBK0IsUUFBSSxFQUFDLFFBQXBDO0FBQTZDLFdBQU8sRUFBRWdRLFNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQU8sYUFBUyxFQUFDLFdBQWpCO0FBQTZCLFFBQUksRUFBQztBQUFsQyxLQUErQ3pPLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixFQUtFO0FBQVEsYUFBUyxFQUFDLFlBQWxCO0FBQStCLFFBQUksRUFBQyxRQUFwQztBQUE2QyxXQUFPLEVBQUV3TyxTQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FERjtBQVdELENBakJEOztBQW1CZUQsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUcsa0JBQWtCLEdBQUdyUix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNvQkFBeEI7QUEyRGVvUixpRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULENBQWdCO0FBQUUvUixVQUFGO0FBQVlnUztBQUFaLENBQWhCLEVBQTBDO0FBQ3ZELFFBQU07QUFBQSxPQUFDQztBQUFELE1BQWdCek8sc0RBQVEsQ0FBQzBPLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFELENBQTlCO0FBQ0E3Qix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJOEIsVUFBVSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0JMLFVBQXhCLEtBQXVDRSxRQUFRLENBQUNJLElBQWpFO0FBQ0FGLGNBQVUsQ0FBQ0csV0FBWCxDQUF1Qk4sV0FBdkI7QUFDQSxXQUFPLE1BQU1HLFVBQVUsQ0FBQ0ksV0FBWCxDQUF1QlAsV0FBdkIsQ0FBYjtBQUNELEdBSlEsQ0FBVDtBQUtBLHNCQUFPUSxnREFBUSxDQUFDQyxZQUFULENBQXNCMVMsUUFBdEIsRUFBZ0NpUyxXQUFoQyxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNVSxNQUFNLEdBQUd2UCxLQUFLLElBQUk7QUFDdEIsUUFBTTtBQUFFdkQsVUFBRjtBQUFVZ0gsZUFBVjtBQUF1QitMLFFBQXZCO0FBQTZCQztBQUE3QixNQUFpRHpQLEtBQXZEO0FBQ0EsTUFBSTJDLENBQUosRUFBTytNLFVBQVA7QUFDQSxNQUFJQyxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsTUFBSWxULE1BQU0sSUFBSUEsTUFBTSxLQUFLLENBQXpCLEVBQTRCO0FBQzFCaVQsY0FBVSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV3BULE1BQVgsQ0FBYjs7QUFDQSxTQUFLa0csQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHLENBQWhCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQUlBLENBQUMsR0FBRytNLFVBQVIsRUFBb0I7QUFDbEJDLGtCQUFVLENBQUNuUixJQUFYLENBQWdCLE1BQUMsd0RBQUQ7QUFBVyxhQUFHLEVBQUVtRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xnTixrQkFBVSxDQUFDblIsSUFBWCxDQUFnQixNQUFDLCtEQUFEO0FBQWtCLGFBQUcsRUFBRW1FLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBaEI7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsTUFBSW1OLGdCQUFKOztBQUNBLE1BQUlyVCxNQUFNLElBQUlBLE1BQU0sS0FBSyxDQUF6QixFQUE0QjtBQUMxQnFULG9CQUFnQixHQUFHLFNBQW5CO0FBQ0QsR0FGRCxNQUVPLElBQUksS0FBS3JULE1BQUwsSUFBZUEsTUFBTSxHQUFHLENBQTVCLEVBQStCO0FBQ3BDcVQsb0JBQWdCLEdBQUcsTUFBbkI7QUFDRCxHQUZNLE1BRUEsSUFBSSxLQUFLclQsTUFBTCxJQUFlQSxNQUFNLEdBQUcsQ0FBNUIsRUFBK0I7QUFDcENxVCxvQkFBZ0IsR0FBRyxTQUFuQjtBQUNELEdBRk0sTUFFQSxJQUFJLEtBQUtyVCxNQUFMLElBQWVBLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUNwQ3FULG9CQUFnQixHQUFHLEtBQW5CO0FBQ0QsR0FGTSxNQUVBLElBQUlyVCxNQUFNLElBQUksQ0FBZCxFQUFpQjtBQUN0QnFULG9CQUFnQixHQUFHLFVBQW5CO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLG9CQUFnQixHQUFHLEVBQW5CO0FBQ0Q7O0FBRUQsTUFBSUMsZUFBSjs7QUFDQSxNQUFJdE0sV0FBSixFQUFpQjtBQUNmc00sbUJBQWUsR0FBSSxHQUFELEdBQU10TSxXQUFOLEdBQXFCLEdBQXZDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xzTSxtQkFBZSxHQUFHLEVBQWxCO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDR1AsSUFBSSxJQUFJQSxJQUFJLEtBQUssTUFBakIsR0FDQyxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9HLFVBQVAsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxJQUFHRyxnQkFBaUIsRUFEeEIsT0FDNkIsR0FBRUMsZUFBZ0IsRUFEL0MsQ0FGRixDQURELEdBUUMsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTixlQUFQLENBREYsT0FDa0NFLFVBRGxDLENBVEosQ0FERjtBQWdCRCxDQXBERDs7QUFzREFKLE1BQU0sQ0FBQ3hTLFNBQVAsR0FBbUI7QUFDakJ5UyxNQUFJLEVBQUV4UyxpREFBUyxDQUFDQyxNQUFWLENBQWlCdUksVUFETjtBQUVqQi9CLGFBQVcsRUFBRXpHLGlEQUFTLENBQUN5SSxNQUZOO0FBR2pCaEosUUFBTSxFQUFFTyxpREFBUyxDQUFDeUksTUFIRDtBQUlqQmdLLGlCQUFlLEVBQUV6UyxpREFBUyxDQUFDQztBQUpWLENBQW5CO0FBT2VzUyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFQSxNQUFNUyxXQUFXLEdBQUczUyx3REFBTSxDQUFDLEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxHQUNmcUosMENBRGUsRUFFZnNILHdEQUZlLEVBR2ZDLHdEQUhlLEVBSWZDLHVEQUplLEVBS2ZDLHdEQUxlLEVBTWZDLDJEQU5lLEVBT2Y3SCxvREFBTSxDQUFDLE1BQUQsQ0FQUyxDQUFqQjs7QUFVQSxNQUFNMEosSUFBSSxHQUFHO0FBQUEsTUFBQztBQUFFMUU7QUFBRixHQUFEO0FBQUEsTUFBZXZMLEtBQWY7O0FBQUEsU0FDWCxNQUFDLFdBQUQsZUFBaUJBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBeUJ1TCxPQUF6QixDQURXO0FBQUEsQ0FBYjs7QUFJQTBFLElBQUksQ0FBQ2xULFNBQUw7QUFDRXdPLFNBQU8sRUFBRXZPLGlEQUFTLENBQUNDLE1BRHJCO0FBRUU4SyxJQUFFLEVBQUUvSyxpREFBUyxDQUFDQyxNQUZoQjtBQUdFK1EsWUFBVSxFQUFFaFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM5QkYsaURBQVMsQ0FBQ0MsTUFEb0IsRUFFOUJELGlEQUFTLENBQUN5SSxNQUZvQixFQUc5QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDhCLENBQXBCLENBSGQ7QUFVRXdJLFlBQVUsRUFBRWpSLGlEQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FDOUJGLGlEQUFTLENBQUNDLE1BRG9CLEVBRTlCRCxpREFBUyxDQUFDeUksTUFGb0IsRUFHOUJ6SSxpREFBUyxDQUFDaUwsT0FBVixDQUNFakwsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFDRixpREFBUyxDQUFDQyxNQUFYLEVBQW1CRCxpREFBUyxDQUFDeUksTUFBN0IsQ0FBcEIsQ0FERixDQUg4QixDQUFwQixDQVZkO0FBaUJFeUksV0FBUyxFQUFFbFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM3QkYsaURBQVMsQ0FBQ0MsTUFEbUIsRUFFN0JELGlEQUFTLENBQUN5SSxNQUZtQixFQUc3QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDZCLENBQXBCLENBakJiO0FBd0JFMEksWUFBVSxFQUFFblIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUM5QkYsaURBQVMsQ0FBQ0MsTUFEb0IsRUFFOUJELGlEQUFTLENBQUN5SSxNQUZvQixFQUc5QnpJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSDhCLENBQXBCLENBeEJkO0FBK0JFMkksZUFBYSxFQUFFcFIsaURBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUNqQ0YsaURBQVMsQ0FBQ0MsTUFEdUIsRUFFakNELGlEQUFTLENBQUN5SSxNQUZ1QixFQUdqQ3pJLGlEQUFTLENBQUNpTCxPQUFWLENBQ0VqTCxpREFBUyxDQUFDRSxTQUFWLENBQW9CLENBQUNGLGlEQUFTLENBQUNDLE1BQVgsRUFBbUJELGlEQUFTLENBQUN5SSxNQUE3QixDQUFwQixDQURGLENBSGlDLENBQXBCO0FBL0JqQixHQXNDS2lCLDBDQUFJLENBQUMzSixTQXRDVjtBQXlDQWtULElBQUksQ0FBQ2pSLFlBQUwsR0FBb0I7QUFDbEIrSSxJQUFFLEVBQUUsR0FEYztBQUVsQm1JLEdBQUMsRUFBRTtBQUZlLENBQXBCO0FBS2VELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTVKLFlBQVksR0FBRyxVQUEwQztBQUFBLE1BQXpDO0FBQUVqSyxhQUFGO0FBQWFHLFNBQWI7QUFBb0I0QjtBQUFwQixHQUF5QztBQUFBLE1BQVo2QixLQUFZOztBQUM3RDtBQUNBLFFBQU0zQixhQUFhLEdBQUcsQ0FBQyxlQUFELENBQXRCLENBRjZELENBSTdEOztBQUNBLE1BQUlqQyxTQUFKLEVBQWU7QUFDYmlDLGlCQUFhLENBQUNHLElBQWQsQ0FBbUJwQyxTQUFuQjtBQUNEOztBQUVELFNBQ0UsTUFBQyxvREFBRDtBQUFxQixhQUFTLEVBQUVpQyxhQUFhLENBQUNJLElBQWQsQ0FBbUIsR0FBbkI7QUFBaEMsS0FBNkR1QixLQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0d6RCxLQUFLLElBQUksTUFBQyx5REFBRDtBQUFjLGFBQVMsRUFBQyxlQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDQSxLQUF6QyxDQURaLEVBRUc0QixJQUFJLElBQUksTUFBQyx3REFBRDtBQUFhLGFBQVMsRUFBQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDQSxJQUF2QyxDQUZYLENBREY7QUFNRCxDQWZEOztBQWlCQWtJLFlBQVksQ0FBQ3RKLFNBQWIsR0FBeUI7QUFDdkI7QUFDQVgsV0FBUyxFQUFFWSxpREFBUyxDQUFDQyxNQUZFOztBQUd2QjtBQUNBVixPQUFLLEVBQUVTLGlEQUFTLENBQUNHLE9BSk07O0FBS3ZCO0FBQ0FnQixNQUFJLEVBQUVuQixpREFBUyxDQUFDRztBQU5PLENBQXpCO0FBU2VrSiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1DLG1CQUFtQixHQUFHakosd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3SkFVckJvSiwwQ0FWcUIsQ0FBekI7QUFhTyxNQUFNeUosWUFBWSxHQUFHOVMsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFsQjtBQUVBLE1BQU04UyxXQUFXLEdBQUcvUyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWpCO0FBRVFnSixrRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTK0osYUFBVCxDQUF1QjtBQUNwQ0MsTUFEb0M7QUFFcENDLE9BRm9DO0FBR3BDQyxRQUFNLEdBQUcsS0FIMkI7QUFJcENDLE9BSm9DO0FBS3BDclU7QUFMb0MsQ0FBdkIsRUFNWjtBQUNELFFBQU07QUFBQSxPQUFDc1UsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJ2USxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNd1EsR0FBRyxHQUFHN1Asb0RBQU0sRUFBbEI7QUFDQThQLDhFQUFpQixDQUFDRCxHQUFELEVBQU0sTUFBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBeEIsQ0FBakIsQ0FIQyxDQUlEOztBQUNBLFFBQU10UyxhQUFhLEdBQUcsQ0FBQyxrQkFBRCxDQUF0QixDQUxDLENBT0Q7O0FBQ0EsTUFBSWpDLFNBQUosRUFBZTtBQUNiaUMsaUJBQWEsQ0FBQ0csSUFBZCxDQUFtQnBDLFNBQW5CO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLDREQUFEO0FBQ0UsYUFBUyxFQUFHLEdBQUVpQyxhQUFhLENBQUNJLElBQWQsQ0FBbUIsR0FBbkIsQ0FBd0IsSUFBR2lTLFNBQVMsR0FBRyxRQUFILEdBQWMsRUFBRyxFQURyRTtBQUVFLE9BQUcsRUFBRUUsR0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdOLElBQUksSUFBSUUsTUFBUixJQUNDO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBTyxFQUFFLE1BQU1HLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osSUFESCxDQUxKLEVBU0UsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBQyxpQkFEWjtBQUVFLGFBQVMsRUFBRUksU0FGYjtBQUdFLFdBQU8sRUFBRSxNQUFNQyxZQUFZLENBQUMsSUFBRCxDQUg3QjtBQUlFLFNBQUssRUFBRUYsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdILElBQUksSUFBSSxDQUFDRSxNQUFULElBQW1CRixJQU50QixFQU9HSSxTQUFTLElBQ1I7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLGNBQVUsRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCSCxLQUFLLElBQUlBLEtBQXJDLENBREYsQ0FSSixDQVRGLENBREY7QUF5QkQsQzs7Ozs7Ozs7Ozs7O0FDL0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1oSSxTQUFTLEdBQUdsTCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFSQUNIMEMsS0FBSyxJQUFLQSxLQUFLLENBQUM4USxNQUFOLEdBQWU5USxLQUFLLENBQUM4USxNQUFyQixHQUE4QixDQURyQyxFQUVsQjlRLEtBQUssSUFDTEEsS0FBSyxDQUFDMFEsU0FBTixJQUNBaEosNkRBREEsNElBSGtCLENBQWY7QUF1Q0EsTUFBTXFKLE9BQU8sR0FBRzFULHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUNBQWIsQzs7Ozs7Ozs7Ozs7O0FDekNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNPLFNBQVN1VCxpQkFBVCxDQUEyQkQsR0FBM0IsRUFBZ0NJLE9BQWhDLEVBQXlDO0FBQzlDOUQseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTStELFFBQVEsR0FBR3pRLEtBQUssSUFBSTtBQUN4QjtBQUNBLFVBQUksQ0FBQ29RLEdBQUcsQ0FBQzFQLE9BQUwsSUFBZ0IwUCxHQUFHLENBQUMxUCxPQUFKLENBQVlnUSxRQUFaLENBQXFCMVEsS0FBSyxDQUFDSSxNQUEzQixDQUFwQixFQUF3RDtBQUN0RDtBQUNEOztBQUVEb1EsYUFBTyxDQUFDeFEsS0FBRCxDQUFQO0FBQ0QsS0FQRDs7QUFTQXNPLFlBQVEsQ0FBQ3FDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDRixRQUF2QztBQUNBbkMsWUFBUSxDQUFDcUMsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NGLFFBQXhDO0FBRUEsV0FBTyxNQUFNO0FBQ1huQyxjQUFRLENBQUNzQyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ0gsUUFBMUM7QUFDQW5DLGNBQVEsQ0FBQ3NDLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDSCxRQUEzQztBQUNELEtBSEQ7QUFJRCxHQWpCUSxFQWlCTixDQUFDTCxHQUFELEVBQU1JLE9BQU4sQ0FqQk0sQ0FBVCxDQUQ4QyxDQWtCMUI7QUFDckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUssWUFBWSxHQUFHLENBQUM7QUFBRTNNLE1BQUY7QUFBUWQ7QUFBUixDQUFELEtBQTBCO0FBQzdDLFNBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFXLFNBQUssRUFBRSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUNFLFNBQUssRUFBRSxNQUFDLHFFQUFEO0FBQVMsYUFBTyxFQUFDLHNCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFQ7QUFFRSxRQUFJLEVBQ0YsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRyxHQUFFME4scUVBQW1CLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUUsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1TSxJQUFJLENBQUM5QyxNQUFMLEtBQWdCLENBQWhCLEdBQ0MsTUFBQywyREFBRDtBQUNFLE9BQUcsTUFETDtBQUVFLHVCQUFtQixFQUFFLENBRnZCO0FBR0UsVUFBTSxNQUhSO0FBSUUsaUJBQWEsRUFBRSxJQUpqQjtBQUtFLGNBQVUsRUFBRSxLQUxkO0FBTUUsa0JBQWMsRUFBQyxXQU5qQjtBQU9FLGdCQUFZLEVBQUMsRUFQZjtBQVFFLGFBQVMsTUFSWDtBQVNFLGlCQUFhLEVBQUUsS0FUakI7QUFVRSxZQUFRLE1BVlY7QUFXRSxhQUFTLEVBQUMsRUFYWjtBQVlFLHFCQUFpQixFQUFFLEtBWnJCO0FBYUUsY0FBVSxFQUFFO0FBQ1ZvQixhQUFPLEVBQUU7QUFDUEMsa0JBQVUsRUFBRTtBQUNWQyxhQUFHLEVBQUUsSUFESztBQUVWQyxhQUFHLEVBQUU7QUFGSyxTQURMO0FBS1BDLGFBQUssRUFBRTtBQUxBLE9BREM7QUFRVkUsWUFBTSxFQUFFO0FBQ05MLGtCQUFVLEVBQUU7QUFDVkMsYUFBRyxFQUFFLEdBREs7QUFFVkMsYUFBRyxFQUFFO0FBRkssU0FETjtBQUtOQyxhQUFLLEVBQUU7QUFMRCxPQVJFO0FBZVZHLFlBQU0sRUFBRTtBQUNOTixrQkFBVSxFQUFFO0FBQ1ZDLGFBQUcsRUFBRSxJQURLO0FBRVZDLGFBQUcsRUFBRTtBQUZLLFNBRE47QUFLTkMsYUFBSyxFQUFFO0FBTEQ7QUFmRSxLQWJkO0FBb0NFLGNBQVUsRUFBRVEsVUFwQ2Q7QUFxQ0UsWUFBUSxFQUFFLEtBckNaO0FBc0NFLGVBQVcsRUFBQyxFQXRDZDtBQXVDRSxpQkFBYSxFQUFFLENBdkNqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeUNHYyxJQUFJLENBQUM3QyxHQUFMLENBQVMsQ0FBQzBQLElBQUQsRUFBT3ZOLEtBQVAsS0FDUixNQUFDLHNFQUFEO0FBQ0UsT0FBRyxFQUFFQSxLQURQO0FBRUUsWUFBUSxFQUFFdU4sSUFBSSxDQUFDQyxhQUFMLENBQW1Cek4sR0FGL0I7QUFHRSxTQUFLLEVBQUV3TixJQUFJLENBQUNsUCxJQUhkO0FBSUUsUUFBSSxFQUFHLEdBQUVrUCxJQUFJLENBQUNFLFlBQWEsU0FKN0I7QUFLRSxRQUFJLEVBQUVILHFFQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQXpDSCxDQURELEdBcURDLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRESixDQVZGLENBREYsQ0FERjtBQXdFRCxDQXpFRDs7QUEyRWVELDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUssZUFBZSxHQUFHclUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnRkFBckI7QUFPTyxNQUFNcVUsZUFBZSxHQUFHdFUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5dEJBMkJGQyx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBM0JOLEVBNEJFQSx5RUFBUSxDQUFDLGFBQUQsRUFBZ0IscUJBQWhCLENBNUJWLEVBZ0NYQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBaENHLEVBb0NBQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBcENSLEVBc0NUQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBdENDLENBQXJCO0FBNERRbVUsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxrQkFBRjtBQUFvQkM7QUFBcEIsQ0FBRCxLQUFrRDtBQUNuRSxTQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUZBQUQ7QUFDRSxZQUFRLEVBQUUsS0FEWjtBQUVFLFdBQU8sRUFBRTtBQUFFQyxTQUFHLEVBQUUsQ0FBUDtBQUFVQyxjQUFRLEVBQUUsSUFBcEI7QUFBMEJDLHVCQUFpQixFQUFFO0FBQTdDLEtBRlg7QUFHRSxXQUFPLEVBQUUsSUFIWDtBQUlFLG1CQUFlLEVBQUUsQ0FKbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLG1FQUNFLE1BQUMsb0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQyxpRUFBVjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLG9GQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsaUVBQVY7QUFBcUIsT0FBRyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0UsTUFBQyxvRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLGtFQUFWO0FBQXFCLE9BQUcsRUFBQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQU5GLENBREYsRUFvQkUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRCxlQUNNUCxnQkFETjtBQUVFLFdBQU8sRUFBQyxnQ0FGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFLRSxNQUFDLCtEQUFELGVBQ01DLHNCQUROO0FBRUUsV0FBTyxFQUFDLHlHQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRixFQVVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLENBREYsQ0FwQkYsQ0FERjtBQXFDRCxDQXRDRDs7QUF3Q0FGLFVBQVUsQ0FBQzdVLFNBQVgsR0FBdUI7QUFDckI4VSxrQkFBZ0IsRUFBRTdVLGlEQUFTLENBQUM0SSxNQURQO0FBRXJCa00sd0JBQXNCLEVBQUU5VSxpREFBUyxDQUFDNEk7QUFGYixDQUF2QjtBQUtBZ00sVUFBVSxDQUFDNVMsWUFBWCxHQUEwQjtBQUN4QjZTLGtCQUFnQixFQUFFO0FBQ2hCM0ssU0FBSyxFQUFFLFNBRFM7QUFFaEJELFlBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBRk07QUFHaEJrSCxjQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQUhJO0FBSWhCRyxNQUFFLEVBQUU7QUFKWSxHQURNO0FBT3hCd0Qsd0JBQXNCLEVBQUU7QUFDdEI1SyxTQUFLLEVBQUUsU0FEZTtBQUV0QkQsWUFBUSxFQUFFLE1BRlk7QUFHdEJrSCxjQUFVLEVBQUUsTUFIVTtBQUl0QkcsTUFBRSxFQUFFO0FBSmtCO0FBUEEsQ0FBMUI7QUFlZXNELHlFQUFmLEU7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNUyxhQUFhLEdBQUdoVix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHN5QkFJR0MseUVBQVEsQ0FBQyxTQUFELEVBQVksU0FBWixDQUpYLEVBNENLQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBNUNiLEVBbURLQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBbkRiLENBQW5CO0FBd0VPLE1BQU0rVSxhQUFhLEdBQUdqVix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdjQUlKQyx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBSkosQ0FBbkI7QUFvQ0EsTUFBTWdWLFdBQVcsR0FBR2xWLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaW5CQUlGQyx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBSk4sRUFvQlhBLHlFQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FwQkcsRUFxQkFBLHlFQUFRLENBQUMsV0FBRCxFQUFjLFNBQWQsQ0FyQlIsQ0FBakI7QUFnREEsTUFBTWlWLGdCQUFnQixHQUFHblYsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5ekhBNkJIQyx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBN0JMLEVBeURkQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBekRNLEVBdUVaQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBdkVJLEVBeUlSQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBeklBLEVBaUpOQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBakpGLEVBNE1IQSx5RUFBUSxDQUFDLFVBQUQsRUFBYSxTQUFiLENBNU1MLEVBMk9aQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBM09JLEVBNE9EQSx5RUFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBNU9QLEVBbVNmQSx5RUFBUSxDQUFDLFdBQUQsRUFBYyxTQUFkLENBblNPLEVBeVRmQSx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBelRPLENBQXRCO0FBc1VBLE1BQU1rVixnQkFBZ0IsR0FBR3BWLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0VBTWhCQyx5RUFBUSxDQUFDLFFBQUQsRUFBVyxTQUFYLENBTlEsQ0FBdEI7QUFVQSxNQUFNbVYsV0FBVyxHQUFHclYsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2TUFBakI7QUF3QlErVSw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZnQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUEsTUFBTU0sWUFBWSxHQUFHO0FBQ25CbEosV0FBUyxFQUFFLEdBRFE7QUFFbkJILFFBQU0sRUFBRSxZQUZXO0FBR25Cc0osUUFBTSxFQUFFO0FBSFcsQ0FBckI7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFFM0osU0FBRjtBQUFTNEo7QUFBVCxNQUFzQkMsd0RBQVUsQ0FBQ0Msc0VBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEI5UyxzREFBUSxDQUFDO0FBQzNDaUosZ0JBQVksRUFBRSxJQUQ2QjtBQUUzQ0UsY0FBVSxFQUFFO0FBRitCLEdBQUQsQ0FBNUM7QUFJQSxRQUFNO0FBQUEsT0FBQzRKLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCaFQsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpVCxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QmxULHNEQUFRLENBQUM7QUFDekNtVCxRQUFJLEVBQUUsQ0FEbUM7QUFFekNDLFNBQUssRUFBRTtBQUZrQyxHQUFELENBQTFDOztBQUtBLFFBQU1DLGVBQWUsR0FBSWpULEtBQUQsSUFBVztBQUNqQyxVQUFNO0FBQUVGO0FBQUYsUUFBMkJFLEtBQWpDOztBQUNBLFFBQUksQ0FBQ2tULHFEQUFPLENBQUNwVCxvQkFBRCxDQUFaLEVBQW9DO0FBQ2xDOFMsaUJBQVcsQ0FBQzlTLG9CQUFELENBQVg7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsUUFBTXFULGVBQWUsR0FBSW5FLElBQUQsSUFBVTtBQUNoQzhELGdCQUFZLGlDQUNQRCxTQURPO0FBRVYsT0FBQzdELElBQUQsR0FBUTZELFNBQVMsQ0FBQzdELElBQUQsQ0FBVCxHQUFrQjtBQUZoQixPQUFaO0FBSUQsR0FMRDs7QUFPQSxRQUFNb0UsZUFBZSxHQUFJcEUsSUFBRCxJQUFVO0FBQ2hDLFFBQUk2RCxTQUFTLENBQUM3RCxJQUFELENBQVQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0Q4RCxnQkFBWSxpQ0FDUEQsU0FETztBQUVWLE9BQUM3RCxJQUFELEdBQVE2RCxTQUFTLENBQUM3RCxJQUFELENBQVQsR0FBa0I7QUFGaEIsT0FBWjtBQUlELEdBUkQ7O0FBVUEsUUFBTXFFLG9CQUFvQixHQUFHLENBQUNDLENBQUQsRUFBSXRFLElBQUosS0FBYTtBQUN4QyxRQUFJdUUsWUFBWSxHQUFHRCxDQUFDLENBQUNsVCxNQUFGLENBQVNDLEtBQTVCO0FBQ0F5UyxnQkFBWSxpQ0FDUEQsU0FETztBQUVWLE9BQUM3RCxJQUFELEdBQVF1RTtBQUZFLE9BQVo7QUFJRCxHQU5EOztBQVFBLFFBQU1DLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUFBLFFBQ0VDLFNBQVMsR0FBRyxFQURkO0FBQUEsUUFFRUMsWUFBWSxHQUFHLEVBRmpCO0FBQUEsUUFHRUMsWUFBWSxHQUFHLEVBSGpCO0FBSUEsVUFBTUMsT0FBTyxHQUFHbEIsUUFBUSxHQUFHM1Isa0ZBQWEsQ0FBQzJSLFFBQUQsQ0FBaEIsR0FBNkIsRUFBckQ7QUFDQWtCLFdBQU8sSUFDTEEsT0FBTyxDQUFDeFMsR0FBUixDQUFZLENBQUN5UyxhQUFELEVBQWdCM1IsQ0FBaEIsS0FBc0I7QUFDaEMsYUFBT3NSLFlBQVksQ0FBQ3pWLElBQWIsQ0FBa0I7QUFDdkI0RCx3QkFBZ0IsRUFBRWtTLGFBQWEsR0FBR0EsYUFBYSxDQUFDbFMsZ0JBQWpCLEdBQW9DLEVBRDVDO0FBRXZCRixXQUFHLEVBQUVvUyxhQUFhLEdBQUdBLGFBQWEsQ0FBQ3BTLEdBQWQsQ0FBa0JxUyxPQUFsQixDQUEwQixDQUExQixDQUFILEdBQWtDLElBRjdCO0FBR3ZCcFMsV0FBRyxFQUFFbVMsYUFBYSxHQUFHQSxhQUFhLENBQUNuUyxHQUFkLENBQWtCb1MsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBSCxHQUFrQztBQUg3QixPQUFsQixDQUFQO0FBS0QsS0FORCxDQURGO0FBUUEsVUFBTWpZLFFBQVEsR0FBRzJYLFlBQVksR0FBR0EsWUFBWSxDQUFDLENBQUQsQ0FBZixHQUFxQixFQUFsRDtBQUNBQyxhQUFTLENBQUNuTCxTQUFWLEdBQXNCa0ssVUFBVSxHQUFHQSxVQUFVLENBQUM1SixZQUFkLEdBQTZCLElBQTdEO0FBQ0E2SyxhQUFTLENBQUNsTCxPQUFWLEdBQW9CaUssVUFBVSxHQUFHQSxVQUFVLENBQUMxSixVQUFkLEdBQTJCLElBQXpEOztBQUVBLFFBQUlqTixRQUFRLElBQUlBLFFBQVEsQ0FBQzRGLEdBQXpCLEVBQThCO0FBQzVCaVMsa0JBQVksR0FBRzdYLFFBQVEsQ0FBQzRGLEdBQXhCO0FBQ0Q7O0FBRUQsUUFBSTVGLFFBQVEsSUFBSUEsUUFBUSxDQUFDNkYsR0FBekIsRUFBOEI7QUFDNUJpUyxrQkFBWSxHQUFHOVgsUUFBUSxDQUFDNkYsR0FBeEI7QUFDRDs7QUFFRCxRQUFJeEQsS0FBSyxHQUFHO0FBQ1YwSyxrQkFBWSxFQUFFNEosVUFBVSxDQUFDNUosWUFEZjtBQUVWRSxnQkFBVSxFQUFFMEosVUFBVSxDQUFDMUosVUFGYjtBQUdWZ0ssVUFBSSxFQUFFRixTQUFTLENBQUNFLElBSE47QUFJVkMsV0FBSyxFQUFFSCxTQUFTLENBQUNHLEtBSlA7QUFLVlcsa0JBTFU7QUFNVkM7QUFOVSxLQUFaOztBQVNBLFNBQUssTUFBTTVOLEdBQVgsSUFBa0I3SCxLQUFsQixFQUF5QjtBQUN2QixVQUFJQSxLQUFLLENBQUM2SCxHQUFELENBQUwsS0FBZSxFQUFmLElBQXFCN0gsS0FBSyxDQUFDNkgsR0FBRCxDQUFMLEtBQWUsSUFBcEMsSUFBNEM3SCxLQUFLLENBQUM2SCxHQUFELENBQUwsS0FBZSxDQUEvRCxFQUFrRTtBQUNoRSxlQUFPN0gsS0FBSyxDQUFDNkgsR0FBRCxDQUFaO0FBQ0Q7QUFDRjs7QUFFRHNNLFlBQVEsQ0FBQztBQUNQdEQsVUFBSSxFQUFFLFFBREM7QUFFUGdGLGFBQU8sa0NBQ0Z0TCxLQURFO0FBRUxHLG9CQUFZLEVBQUU0SixVQUFVLENBQUM1SixZQUZwQjtBQUdMRSxrQkFBVSxFQUFFMEosVUFBVSxDQUFDMUosVUFIbEI7QUFJTGdLLFlBQUksRUFBRUYsU0FBUyxDQUFDRSxJQUpYO0FBS0xDLGFBQUssRUFBRUgsU0FBUyxDQUFDRyxLQUxaO0FBTUxXLG9CQU5LO0FBT0xDO0FBUEs7QUFGQSxLQUFELENBQVI7QUFhQUssc0RBQU0sQ0FBQ2pXLElBQVAsQ0FDRTtBQUNFRSxjQUFRLEVBQUcsR0FBRTRTLHNFQUFtQixFQURsQztBQUVFM1MsV0FBSyxFQUFFQTtBQUZULEtBREYsRUFLRTtBQUNFRCxjQUFRLEVBQUcsR0FBRTRTLHNFQUFtQixFQURsQztBQUVFM1MsV0FBSyxFQUFFQTtBQUZULEtBTEYsRUFTRTtBQUFFK1YsYUFBTyxFQUFFO0FBQVgsS0FURjtBQVdELEdBakVEOztBQW1FQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBZ0IsYUFBUyxFQUFDLFlBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0VBQUQ7QUFBaUIsZUFBVyxFQUFHN1QsS0FBRCxJQUFXNFMsZUFBZSxDQUFDNVMsS0FBRCxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFNBQUssRUFBQyw0QkFEUjtBQUVFLFdBQU8sRUFBQyxLQUZWO0FBR0UsS0FBQyxFQUFDLEtBSEo7QUFJRSxLQUFDLEVBQUMsS0FKSjtBQUtFLFNBQUssRUFBQyxJQUxSO0FBTUUsVUFBTSxFQUFDLElBTlQ7QUFPRSxXQUFPLEVBQUMsaUJBUFY7QUFRRSxvQkFBZ0IsRUFBQyxxQkFSbkI7QUFTRSxhQUFTLEVBQUMsUUFUWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBTSxLQUFDLEVBQUMsNFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUU7QUFBTSxLQUFDLEVBQUMsd1JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBSEYsQ0FERixFQW9CRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQWUsYUFBUyxFQUFDLFVBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkVBQUQ7QUFDRSxRQUFJLEVBQUU4UixZQURSO0FBRUUsZUFBVyxFQUFDLHFCQUZkO0FBR0UsYUFBUyxFQUFDLG1CQUhaO0FBSUUsb0JBQWdCLEVBQUdnQyxZQUFELElBQWtCekIsYUFBYSxDQUFDeUIsWUFBRCxDQUpuRDtBQUtFLGtCQUFjLEVBQUUsSUFMbEI7QUFNRSxTQUFLLEVBQUUsSUFOVDtBQU9FLGtCQUFjLEVBQUUsQ0FQbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBcEJGLEVBaUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBZSxhQUFTLEVBQUMsY0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRkFBRDtBQUNFLE9BQUcsRUFBRSxHQURQO0FBRUUsVUFBTSxFQUFFLElBRlY7QUFHRSxhQUFTLEVBQUMsWUFIWjtBQUlFLFFBQUksRUFDRjtBQUFRLFVBQUksRUFBQyxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZdEIsU0FBUyxDQUFDRSxJQUFWLEdBQWlCLENBQWpCLElBQXVCLEtBQUlGLFNBQVMsQ0FBQ0UsSUFBSyxFQUF0RCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBWUYsU0FBUyxDQUFDRyxLQUFWLEdBQWtCLENBQWxCLElBQXdCLEtBQUlILFNBQVMsQ0FBQ0csS0FBTSxFQUF4RCxDQUhGLENBTEo7QUFXRSxTQUFLLEVBQ0gsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyw2RUFBRDtBQUNFLFFBQUUsRUFBQyxNQURMO0FBRUUsZUFBUyxFQUFFLE1BQU1HLGVBQWUsQ0FBQyxNQUFELENBRmxDO0FBR0UsZUFBUyxFQUFFLE1BQU1DLGVBQWUsQ0FBQyxNQUFELENBSGxDO0FBSUUsY0FBUSxFQUFHRSxDQUFELElBQU9ELG9CQUFvQixDQUFDQyxDQUFELEVBQUksTUFBSixDQUp2QztBQUtFLFdBQUssRUFBRVQsU0FBUyxDQUFDRSxJQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixFQVdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsNkVBQUQ7QUFDRSxRQUFFLEVBQUMsT0FETDtBQUVFLGVBQVMsRUFBRSxNQUFNSSxlQUFlLENBQUMsT0FBRCxDQUZsQztBQUdFLGVBQVMsRUFBRSxNQUFNQyxlQUFlLENBQUMsT0FBRCxDQUhsQztBQUlFLGNBQVEsRUFBR0UsQ0FBRCxJQUFPRCxvQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFJLE9BQUosQ0FKdkM7QUFLRSxXQUFLLEVBQUVULFNBQVMsQ0FBQ0csS0FMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBWEYsQ0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FqQ0YsRUF5RUU7QUFDRSxRQUFJLEVBQUMsU0FEUDtBQUVFLFlBQVEsRUFBQyxRQUZYO0FBR0UsUUFBSSxFQUFDLE9BSFA7QUFJRSxXQUFPLEVBQUVRLGNBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6RUYsQ0FERjtBQW9GRCxDQW5NRDs7QUFxTWVZLDZIQUFVLENBQUMvQixVQUFELENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU5BO0FBRU8sTUFBTUcsYUFBYSxnQkFBRzZCLDRDQUFLLENBQUNDLGFBQU4sRUFBdEI7O0FBRVAsU0FBU0MsT0FBVCxDQUFpQjdMLEtBQWpCLEVBQXdCOEwsTUFBeEIsRUFBZ0M7QUFDOUIsVUFBUUEsTUFBTSxDQUFDeEYsSUFBZjtBQUNFLFNBQUssUUFBTDtBQUNFLDZDQUFZdEcsS0FBWixHQUFzQjhMLE1BQU0sQ0FBQ1IsT0FBN0I7O0FBQ0Y7QUFDRSxhQUFPdEwsS0FBUDtBQUpKO0FBTUQ7O0FBRU0sTUFBTStMLGNBQWMsR0FBRyxDQUFDO0FBQUVyWSxVQUFGO0FBQVkrQjtBQUFaLENBQUQsS0FBeUI7QUFDckQsUUFBTTtBQUFBLE9BQUN1SyxLQUFEO0FBQUEsT0FBUTRKO0FBQVIsTUFBb0JvQyx3REFBVSxDQUFDSCxPQUFELEVBQVVwVyxLQUFWLENBQXBDO0FBQ0EsU0FDRSxNQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFdUssV0FBRjtBQUFTNEo7QUFBVCxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dsVyxRQURILENBREY7QUFLRCxDQVBNLEM7Ozs7Ozs7Ozs7OztBQ2JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTXVZLFlBQVksR0FBSXBSLEdBQUQsSUFBUztBQUM1QixTQUFPcVIseURBQUssQ0FBQ3JSLEdBQUQsQ0FBTCxDQUNKc1IsSUFESSxDQUNFQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQURSLEVBRUpGLElBRkksQ0FFRTNRLElBQUQsSUFBVTtBQUNkLFdBQU9BLElBQVA7QUFDRCxHQUpJLENBQVA7QUFLRCxDQU5EOztBQVFPLE1BQU04USxjQUFjLEdBQUlDLE9BQUQsSUFBYTtBQUN6QyxNQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBQ0EsTUFBSUQsT0FBSixFQUFhO0FBQ1hBLFdBQU8sQ0FBQ0UsT0FBUixDQUFnQixDQUFDclEsSUFBRCxFQUFPa0IsR0FBUCxLQUFlO0FBQzdCa1AsZUFBUyxDQUFDaFIsSUFBVixHQUFpQlksSUFBSSxDQUFDWixJQUFMLEdBQVksQ0FBQyxHQUFHWSxJQUFJLENBQUNaLElBQVQsQ0FBWixHQUE2QixFQUE5QztBQUNBZ1IsZUFBUyxDQUFDRSxJQUFWLEdBQWlCdFEsSUFBSSxDQUFDc1EsSUFBTCxHQUFZdFEsSUFBSSxDQUFDc1EsSUFBakIsR0FBd0IsRUFBekM7QUFDRCxLQUhEO0FBSUQ7O0FBQ0QsUUFBTWxSLElBQUksR0FBR2dSLFNBQVMsR0FBR0EsU0FBUyxDQUFDaFIsSUFBYixHQUFvQixFQUExQztBQUNBLFNBQU9BLElBQVA7QUFDRCxDQVZNO0FBWUEsTUFBTW1SLFlBQVksR0FBSUMsYUFBRCxJQUFtQjtBQUM3QyxRQUFNQyxVQUFVLEdBQUduRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDb0csTUFBTCxLQUFnQixFQUFoQixHQUFxQixDQUFoQyxDQUFuQjtBQUNBLFFBQU10UixJQUFJLEdBQUd1UixxREFBTyxDQUFDSCxhQUFhLENBQUNJLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJILFVBQXZCLENBQUQsQ0FBcEI7QUFDQSxTQUFPclIsSUFBUDtBQUNELENBSk07QUFNQSxNQUFNeVIsbUJBQW1CLEdBQUlqTixLQUFELElBQVc7QUFDNUMsT0FBSyxJQUFJMUMsR0FBVCxJQUFnQjBDLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQ0VBLEtBQUssQ0FBQzFDLEdBQUQsQ0FBTCxLQUFlLElBQWYsSUFDQTBDLEtBQUssQ0FBQzFDLEdBQUQsQ0FBTCxJQUFjLEVBRGQsSUFFQTBDLEtBQUssQ0FBQzFDLEdBQUQsQ0FBTCxJQUFjLEVBRmQsSUFHQTBDLEtBQUssQ0FBQzFDLEdBQUQsQ0FBTCxJQUFjLENBSGQsSUFJQTBDLEtBQUssQ0FBQzFDLEdBQUQsQ0FBTCxJQUFjLEdBTGhCLEVBTUU7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sS0FBUDtBQUNELENBYk07QUFlQSxNQUFNNFAsU0FBUyxHQUFHLENBQUNDLEtBQUQsRUFBUVAsYUFBUixFQUF1QmxSLEtBQXZCLEtBQWlDO0FBQ3hELFNBQU8sQ0FBQyxHQUFHeVIsS0FBSixFQUFXLEdBQUdQLGFBQWEsQ0FBQ0ksS0FBZCxDQUFvQkcsS0FBSyxDQUFDelUsTUFBMUIsRUFBa0N5VSxLQUFLLENBQUN6VSxNQUFOLEdBQWVnRCxLQUFqRCxDQUFkLENBQVA7QUFDRCxDQUZNOztBQUlQLE1BQU0wUixVQUFVLEdBQUcsTUFBT0MsTUFBUCxJQUFrQjtBQUNuQyxRQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQzFVLEdBQVAsQ0FBVyxNQUFPNFUsSUFBUCxJQUFnQjtBQUMxQyxVQUFNQyxPQUFPLEdBQUksR0FBRTlXLHVCQUF1QixjQUExQyxDQUQwQyxDQUNlOztBQUN6RCxVQUFNK1csR0FBRyxHQUFJLEdBQUVELE9BQVEsSUFBR0QsSUFBSSxDQUFDRyxRQUFTLE9BQXhDO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU0xQixZQUFZLENBQUN3QixHQUFELENBQW5DO0FBQ0EsV0FBTztBQUNMZixVQUFJLEVBQUVhLElBQUksQ0FBQ2IsSUFETjtBQUVMbFIsVUFBSSxFQUFFbVM7QUFGRCxLQUFQO0FBSUQsR0FSZ0IsQ0FBakI7QUFTQSxRQUFNQyxZQUFZLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVosQ0FBM0I7QUFDQSxTQUFPTSxZQUFQO0FBQ0QsQ0FaRDs7QUFjZVIseUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTVyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUNqQyxNQUFJQyxTQUFKO0FBQ0EsTUFBSXZULFVBQUo7O0FBQ0EsTUFBSXNULEdBQUosRUFBUztBQUNQQyxhQUFTLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFlBQVosQ0FBWjtBQUNELEdBRkQsTUFFTztBQUNMRCxhQUFTLEdBQUdFLFNBQVMsQ0FBQ0YsU0FBdEI7QUFDRDs7QUFDRCxRQUFNRyxFQUFFLEdBQUcsSUFBSUMsb0RBQUosQ0FBaUJKLFNBQWpCLENBQVg7O0FBQ0EsTUFBSUcsRUFBRSxDQUFDL1QsTUFBSCxFQUFKLEVBQWlCO0FBQ2ZLLGNBQVUsR0FBRyxRQUFiO0FBQ0QsR0FGRCxNQUVPLElBQUkwVCxFQUFFLENBQUNoVSxNQUFILEVBQUosRUFBaUI7QUFDdEJNLGNBQVUsR0FBRyxRQUFiO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLGNBQVUsR0FBRyxTQUFiO0FBQ0Q7O0FBQ0QsU0FBT0EsVUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUVBLElBQUk0VCxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsV0FBbUMsRUFFbEM7O0FBQ0QsTUFBTUMsYUFBYSxHQUFHNU8sU0FBUyxJQUFJN0ksS0FBSyxJQUFJO0FBQzFDLFNBQU8sTUFBQyxTQUFELGVBQWVBLEtBQWY7QUFBc0IsZ0JBQVV3WCxTQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7QUFDRCxDQUZEOztBQUllQyw0RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFRQTs7QUFzQkE7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FDeEIsUUFBZ0NDLFNBQWhDLEdBREY7QUFFQSxNQUFNQyxVQUEyQyxHQUFqRDs7QUFFQSx1QkFBeUQ7QUFDdkQ7QUFDQSxzQkFBb0I7QUFDbEI7QUFHRixHQU51RCxDQU12RDs7O0FBQ0EsTUFBSSxDQUFKLHNCQUEyQjtBQUN6QjtBQUdGOztBQUFBLFNBQVFDLGNBQWMsR0FBRyx5QkFDdEJDLE9BQUQsSUFBYTtBQUNYQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsVUFBSSxDQUFDTixTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBeEIsTUFBS04sQ0FBTCxFQUFrQztBQUNoQztBQUdGOztBQUFBLFlBQU1PLEVBQUUsR0FBR1AsU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQTlCLE1BQVdOLENBQVg7O0FBQ0EsVUFBSU0sS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTVCLEdBQXlEO0FBQ3ZERixzQkFBYyxDQUFkQSxVQUF5QkUsS0FBSyxDQUE5QkY7QUFDQUosaUJBQVMsQ0FBVEEsT0FBaUJNLEtBQUssQ0FBdEJOO0FBQ0FPLFVBQUU7QUFFTDtBQVhERjtBQUZxQixLQWV2QjtBQUFFRyxjQUFVLEVBZmQ7QUFlRSxHQWZ1QixDQUF6QjtBQW1CRjs7QUFBQSxNQUFNQyxxQkFBcUIsR0FBRyxZQUFpQztBQUM3RCxRQUFNQyxRQUFRLEdBQUdDLFdBQWpCOztBQUNBLE1BQUksQ0FBSixVQUFlO0FBQ2IsV0FBTyxNQUFNLENBQWI7QUFHRkQ7O0FBQUFBLFVBQVEsQ0FBUkE7QUFDQVYsV0FBUyxDQUFUQTtBQUNBLFNBQU8sTUFBTTtBQUNYLFFBQUk7QUFDRlUsY0FBUSxDQUFSQTtBQUNBLEtBRkYsQ0FFRSxZQUFZO0FBQ1p2VSxhQUFPLENBQVBBO0FBRUY2VDs7QUFBQUEsYUFBUyxDQUFUQTtBQU5GO0FBUkY7O0FBa0JBLDZDQUtRO0FBQ04sWUFBbUM7QUFDbkMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBWSxRQUFNLENBQU5BLGtDQUEwQ0MsR0FBRCxJQUFTO0FBQ2hELGNBQTJDO0FBQ3pDO0FBQ0E7QUFFSDtBQUxERCxLQVBNLENBYU47O0FBQ0FULFlBQVUsQ0FBQ1csSUFBSSxHQUFKQSxNQUFYWCxFQUFVLENBQVZBO0FBR0Y7O0FBQUEsZ0NBQWtEO0FBQ2hELFFBQU07QUFBQTtBQUFBLE1BQWFyWCxLQUFLLENBQXhCO0FBQ0EsU0FDR0ksTUFBTSxJQUFJQSxNQUFNLEtBQWpCLE9BQUNBLElBQ0RKLEtBQUssQ0FETCxPQUFDSSxJQUVESixLQUFLLENBRkwsT0FBQ0ksSUFHREosS0FBSyxDQUhMLFFBQUNJLElBSURKLEtBQUssQ0FKTCxNQUFDSSxJQUllO0FBQ2ZKLE9BQUssQ0FBTEEsZUFBcUJBLEtBQUssQ0FBTEEsc0JBTnhCO0FBVUY7O0FBQUEsb0VBUVE7QUFDTixRQUFNO0FBQUE7QUFBQSxNQUFlc1QsQ0FBQyxDQUF0Qjs7QUFFQSxNQUFJMkUsUUFBUSxLQUFSQSxRQUFxQkMsZUFBZSxDQUFmQSxDQUFlLENBQWZBLElBQXNCLENBQUMsd0JBQWhELElBQWdELENBQTVDRCxDQUFKLEVBQW1FO0FBQ2pFO0FBQ0E7QUFHRjNFOztBQUFBQSxHQUFDLENBQURBLGlCQVJNLENBVU47O0FBQ0EsTUFBSTZFLE1BQU0sSUFBVixNQUFvQjtBQUNsQkEsVUFBTSxHQUFHNVEsRUFBRSxDQUFGQSxlQUFUNFE7QUFHRixHQWZNLENBZU47OztBQUNBTCxRQUFNLENBQUMvWixPQUFPLGVBQWQrWixNQUFNLENBQU5BLFdBQStDO0FBQS9DQTtBQUErQyxHQUEvQ0EsT0FDR00sT0FBRCxJQUFzQjtBQUNwQixRQUFJLENBQUosU0FBYzs7QUFDZCxnQkFBWTtBQUNWaEIsWUFBTSxDQUFOQTtBQUNBOUksY0FBUSxDQUFSQTtBQUVIO0FBUEh3SjtBQVdGOztBQUFBLHFCQUF5RDtBQUN2RCxZQUEyQztBQUN6QyxtQ0FJRztBQUNELGFBQU8sVUFDSixnQ0FBK0JPLElBQUksQ0FBQ3JTLEdBQUksZ0JBQWVxUyxJQUFJLENBQUNDLFFBQVMsNkJBQTRCRCxJQUFJLENBQUNFLE1BQXZHLGFBQUMsSUFDRSxvQkFGTCxFQUNHLENBREksQ0FBUDtBQVFGLEtBZHlDLENBY3pDOzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRFIsVUFBSSxFQUROO0FBQTRELEtBQTVEO0FBR0EsVUFBTVMsYUFBa0MsR0FBR0MsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QjFTLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLFFBQW9CO0FBQ2xCLFlBQ0V4RyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFDQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLGlCQUFrQyxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBRnJDLFVBR0U7QUFDQSxnQkFBTW1aLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFL1ksS0FBSyxDQUFMQSxHQUFLLENBQUxBLHFCQUErQixPQUFPQSxLQUFLLENBSHJELEdBR3FEO0FBSC9CLFdBQUQsQ0FBckI7QUFNSDtBQVhELGFBV087QUFDTDtBQUNBO0FBQ0EsY0FBTW9aLENBQVEsR0FBZDtBQUVIO0FBakJELE9BckJ5QyxDQXdDekM7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMUR0UixRQUFFLEVBRHdEO0FBRTFEeEosYUFBTyxFQUZtRDtBQUcxRG9hLFlBQU0sRUFIb0Q7QUFJMURqRSxhQUFPLEVBSm1EO0FBSzFENEUsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5WO0FBQTRELEtBQTVEO0FBUUEsVUFBTUMsYUFBa0MsR0FBR04sTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QjFTLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLE1BQWtCO0FBQ2hCLFlBQ0V4RyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFDQSxPQUFPQSxLQUFLLENBQVosR0FBWSxDQUFaLEtBREFBLFlBRUEsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUhGLFVBSUU7QUFDQSxnQkFBTW1aLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFLE9BQU8vWSxLQUFLLENBSHRCLEdBR3NCO0FBSEEsV0FBRCxDQUFyQjtBQU1IO0FBWkQsYUFZTyxJQUNMd0csR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUl4RyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0IsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUExQixXQUEyRDtBQUN6RCxnQkFBTW1aLGVBQWUsQ0FBQztBQUFBO0FBRXBCTCxvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFLE9BQU8vWSxLQUFLLENBSHRCLEdBR3NCO0FBSEEsV0FBRCxDQUFyQjtBQU1IO0FBZE0sYUFjQTtBQUNMO0FBQ0E7QUFDQSxjQUFNb1osQ0FBUSxHQUFkO0FBRUg7QUFoQ0QsT0FwRHlDLENBc0Z6QztBQUNBOztBQUNBLFVBQU1LLFNBQVMsR0FBRzVFLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSTdVLEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ3laLFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQTVWLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU02VixDQUFDLEdBQUcxWixLQUFLLENBQUxBLGFBQVY7O0FBRUEsUUFBTSwwQkFBMEI2VSxlQUFoQyxRQUFnQ0EsRUFBaEM7O0FBRUEsUUFBTXlELE1BQU0sR0FBRyxhQUFmLFNBQWUsR0FBZjtBQUNBLFFBQU01WixRQUFRLEdBQUk0WixNQUFNLElBQUlBLE1BQU0sQ0FBakIsUUFBQ0EsSUFBbEI7O0FBRUEsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFlekQsdUJBQWMsTUFBTTtBQUN2QyxVQUFNLDZCQUE2QixtQ0FBc0I3VSxLQUFLLENBQTNCLE1BQW5DLElBQW1DLENBQW5DO0FBQ0EsV0FBTztBQUNMd1ksVUFBSSxFQURDO0FBRUx6USxRQUFFLEVBQUUvSCxLQUFLLENBQUxBLEtBQ0EsbUNBQXNCQSxLQUFLLENBRDNCQSxFQUNBLENBREFBLEdBRUEyWixVQUFVLElBSmhCO0FBQU8sS0FBUDtBQUZtQjlFLEtBUWxCLFdBQVc3VSxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0I2VSxDQUFyQjs7QUFVQSwyQkFBZ0IsTUFBTTtBQUNwQixRQUNFNkUsQ0FBQyxJQUFEQSxvQ0FHQUUsUUFBUSxDQUhSRixXQUlBLHdCQUxGLElBS0UsQ0FMRixFQU1FO0FBQ0E7QUFDQSxZQUFNRyxZQUFZLEdBQUdoQyxVQUFVLENBQUNXLElBQUksR0FBSkEsTUFBaEMsRUFBK0IsQ0FBL0I7O0FBQ0EsVUFBSSxDQUFKLGNBQW1CO0FBQ2pCLGVBQU9MLHFCQUFxQixXQUFXLE1BQU07QUFDM0NvQixrQkFBUSxlQUFSQSxFQUFRLENBQVJBO0FBREYsU0FBNEIsQ0FBNUI7QUFJSDtBQUNGO0FBaEJELEtBZ0JHLHdCQWhCSCxNQWdCRyxDQWhCSDs7QUFrQkEsTUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBSixNQXBJdUQsQ0FxSXZEOztBQUNBLE1BQUksb0JBQUosVUFBa0M7QUFDaEMzYyxZQUFRLGdCQUFHLHdDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0ExSXVELENBMEl2RDs7O0FBQ0EsUUFBTWtkLEtBQVUsR0FBR0MscUJBQW5CLFFBQW1CQSxDQUFuQjs7QUFDQSxRQUFNQyxVQUtMLEdBQUc7QUFDRnBKLE9BQUcsRUFBR3FKLEVBQUQsSUFBYTtBQUNoQixjQUFRQyxXQUFXLENBQVhBLEVBQVcsQ0FBWEE7O0FBRVIsVUFBSUosS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxZQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGVBQUssQ0FBTEE7QUFFSDtBQUNGO0FBVkM7QUFXRnRPLFdBQU8sRUFBR3NJLENBQUQsSUFBeUI7QUFDaEMsVUFBSWdHLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsWUFBbkIsWUFBOEQ7QUFDNURBLGFBQUssQ0FBTEE7QUFFRjs7QUFBQSxVQUFJLENBQUNoRyxDQUFDLENBQU4sa0JBQXlCO0FBQ3ZCcUcsbUJBQVcsd0NBQVhBLE1BQVcsQ0FBWEE7QUFFSDtBQXZCSDtBQUtJLEdBTEo7O0FBMEJBLFNBQU87QUFDTEgsY0FBVSxDQUFWQSxlQUEyQmxHLENBQUQsSUFBeUI7QUFDakQsVUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1Qjs7QUFDdkIsVUFBSWdHLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsaUJBQW5CLFlBQW1FO0FBQ2pFQSxhQUFLLENBQUxBO0FBRUZQOztBQUFBQSxjQUFRLG1CQUFtQjtBQUFFYSxnQkFBUSxFQUFyQ2I7QUFBMkIsT0FBbkIsQ0FBUkE7QUFMRlM7QUFTRixHQWhMdUQsQ0FnTHZEO0FBQ0E7OztBQUNBLE1BQUloYSxLQUFLLENBQUxBLFlBQW1COFosS0FBSyxDQUFMQSxnQkFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQTlELEtBQTZDLENBQTdDLEVBQXdFO0FBQ3RFRSxjQUFVLENBQVZBLE9BQWtCLHlCQUNoQiwyQkFBYzFCLE1BQU0sSUFBSUEsTUFBTSxDQUE5QixRQUF1Q0EsTUFBTSxJQUFJQSxNQUFNLENBRHpEMEIsYUFDRSxDQURnQixDQUFsQkE7QUFLRjs7QUFBQSxzQkFBT25GLG1DQUFQLFVBQU9BLENBQVA7OztlQUdhd0YsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFZmOzs7O0FBR08sdUNBQXVEO0FBQzVELFNBQU9DLElBQUksQ0FBSkEsaUJBQXNCQSxJQUFJLEtBQTFCQSxNQUFxQ0EsSUFBSSxDQUFKQSxTQUFjLENBQW5EQSxDQUFxQ0EsQ0FBckNBLEdBQVA7QUFHRjtBQUFBOzs7Ozs7QUFJTyxNQUFNQywwQkFBMEIsR0FBRzNhLFNBQ3JDMGEsU0FEcUMxYSxHQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7O0FBQ0E7Ozs7O0FBQ0E7O0FBc0hBOzs7QUF6SEE7O0FBbUJBLE1BQU00YSxlQUFvQyxHQUFHO0FBQzNDbEMsUUFBTSxFQURxQztBQUM3QjtBQUNkbUMsZ0JBQWMsRUFGNkI7O0FBRzNDQyxPQUFLLEtBQWlCO0FBQ3BCLFFBQUksS0FBSixRQUFpQixPQUFPekMsRUFBUDs7QUFDakIsZUFBbUMsRUFHcEM7QUFSSDs7QUFBNkMsQ0FBN0MsQyxDQVdBOztBQUNBLE1BQU0wQyxpQkFBaUIsR0FBRyxzR0FBMUIsZUFBMEIsQ0FBMUI7QUFZQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBM0IsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0M0QixLQUFHLEdBQUc7QUFDSixXQUFPckcsaUJBQVA7QUFGSnlFOztBQUFpRCxDQUFqREE7QUFNQXlCLGlCQUFpQixDQUFqQkEsUUFBMkJJLEtBQUQsSUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBN0IsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUM0QixPQUFHLEdBQUc7QUFDSixZQUFNeEMsTUFBTSxHQUFHMEMsU0FBZjtBQUNBLGFBQU8xQyxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpZOztBQUE4QyxHQUE5Q0E7QUFMRnlCO0FBYUEsZ0JBQWdCLENBQWhCLFFBQTBCSSxLQUFELElBQVc7QUFDbEM7QUFDQTs7QUFBRVAsaUJBQUQsT0FBQ0EsR0FBaUMsQ0FBQyxHQUFELFNBQW9CO0FBQ3JELFVBQU1sQyxNQUFNLEdBQUcwQyxTQUFmO0FBQ0EsV0FBTzFDLE1BQU0sQ0FBTkEsS0FBTSxDQUFOQSxDQUFjLEdBQXJCLElBQU9BLENBQVA7QUFGRCxHQUFDa0M7QUFGSjtBQVFBSSxZQUFZLENBQVpBLFFBQXNCcGEsS0FBRCxJQUFXO0FBQzlCZ2EsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQi9GLHNDQUF3QixDQUFDLEdBQUQsU0FBYTtBQUNuQyxZQUFNd0csVUFBVSxHQUFJLEtBQUl6YSxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTTBhLGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNaclgsaUJBQU8sQ0FBUEEsTUFBZSx3Q0FBdUNvWCxVQUF0RHBYO0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRTBVLEdBQUcsQ0FBQzRDLE9BQVEsS0FBSTVDLEdBQUcsQ0FBQzZDLEtBQXJDdlg7QUFFSDtBQUNGO0FBYkQ0UTtBQURGK0Y7QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTVcsT0FBTyxHQUNYLGdDQURGO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU9YLGVBQWUsQ0FBdEI7QUFHRixDLENBQUE7OztlQUNlQSxlLEVBRWY7Ozs7QUFHTyxxQkFBaUM7QUFDdEMsU0FBTzNGLDBCQUFpQndHLGVBQXhCLGFBQU94RyxDQUFQO0FBR0YsQyxDQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTXlHLFlBQVksR0FBRyxDQUFDLEdBQUQsU0FBaUM7QUFDM0RkLGlCQUFlLENBQWZBLFNBQXlCLElBQUkvRixTQUFKLFFBQVcsR0FBcEMrRixJQUF5QixDQUF6QkE7QUFDQUEsaUJBQWUsQ0FBZkEsdUJBQXdDdkMsRUFBRCxJQUFRQSxFQUEvQ3VDO0FBQ0FBLGlCQUFlLENBQWZBO0FBRUEsU0FBT0EsZUFBZSxDQUF0QjtBQUxLLEUsQ0FRUDs7Ozs7QUFDTywwQ0FBOEQ7QUFDbkUsUUFBTWUsT0FBTyxHQUFiO0FBQ0EsUUFBTUMsUUFBUSxHQUFkOztBQUVBLE9BQUssTUFBTCwrQkFBMEM7QUFDeEMsUUFBSSxPQUFPRCxPQUFPLENBQWQsUUFBYyxDQUFkLEtBQUosVUFBMkM7QUFDekNDLGNBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQnRDLE1BQU0sQ0FBTkEsT0FDbkI3VCxLQUFLLENBQUxBLFFBQWNrVyxPQUFPLENBQXJCbFcsUUFBcUIsQ0FBckJBLFNBRG1CNlQsSUFFbkJxQyxPQUFPLENBRlRDLFFBRVMsQ0FGWXRDLENBQXJCc0MsQ0FEeUMsQ0FJdkM7O0FBQ0Y7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FoQm1FLENBZ0JuRTs7O0FBQ0FBLFVBQVEsQ0FBUkEsU0FBa0IvRyxpQkFBbEIrRztBQUVBWCxrQkFBZ0IsQ0FBaEJBLFFBQTBCRSxLQUFELElBQVc7QUFDbENTLFlBQVEsQ0FBUkEsS0FBUSxDQUFSQSxHQUFrQixDQUFDLEdBQUQsU0FBb0I7QUFDcEMsYUFBT0QsT0FBTyxDQUFQQSxLQUFPLENBQVBBLENBQWUsR0FBdEIsSUFBT0EsQ0FBUDtBQURGQztBQURGWDtBQU1BO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQXVDO0FBQ3JDLHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NZLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTS9GLElBQUksR0FDUjZGLGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWEvRixJQUE5QytGO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQWlELEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msd09BQXdPLFVBQVUsRUFBRTtBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWkE7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7O0FBVWUsZ0JBQTZCO0FBQzFDLFFBQU0zRSxHQUErQixHQUFHa0MsTUFBTSxDQUFOQSxPQUF4QyxJQUF3Q0EsQ0FBeEM7QUFFQSxTQUFPO0FBQ0wwQyxNQUFFLGdCQUFpQztBQUNqQztBQUFDLE9BQUM1RSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsS0FBY0EsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEdBQWYsRUFBQ0EsQ0FBRDtBQUZFOztBQUtMNkUsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSTdFLEdBQUcsQ0FBUCxJQUFPLENBQVAsRUFBZTtBQUNiQSxXQUFHLENBQUhBLElBQUcsQ0FBSEEsUUFBaUJBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxzQkFBakJBO0FBRUg7QUFUSTs7QUFXTDhFLFFBQUksT0FBZSxHQUFmLE1BQStCO0FBQ2pDO0FBQ0E7QUFBQyxPQUFDOUUsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCaEcsT0FBRCxJQUFzQjtBQUNuREEsZUFBTyxDQUFDLEdBQVJBLElBQU8sQ0FBUEE7QUFERDtBQWJMOztBQUFPLEdBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTNCQTtBQUFBO0FBQ0E7OztBQXdDQSxNQUFNK0ssUUFBUSxHQUFJbmMsVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU9zWixNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakQ4QyxhQUFTLEVBRFg7QUFBbUQsR0FBNUM5QyxDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU8rQyxNQUFNLElBQUkzQixJQUFJLENBQUpBLFdBQVYyQixHQUFVM0IsQ0FBVjJCLEdBQ0gzQixJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFMkIsTUFBTyxHQUFFM0IsSUFIWDJCLEtBQVA7QUFPSzs7QUFBQSxnREFJTDtBQUNBLE1BQUlyYyxLQUFKLEVBQXFDLEVBS3JDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFLckM7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBTzBhLElBQUksS0FBSkEsWUFBcUJBLElBQUksQ0FBSkEsV0FBZ0J5QixRQUFRLEdBQXBELEdBQTRCekIsQ0FBNUI7QUFHSzs7QUFBQSwyQkFBMkM7QUFDaEQ7QUFDQSxTQUFPNEIsYUFBYSxPQUFwQixRQUFvQixDQUFwQjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRCxTQUFPNUIsSUFBSSxDQUFKQSxNQUFXeUIsUUFBUSxDQUFuQnpCLFdBQVA7QUFHRjtBQUFBOzs7OztBQUdPLHlCQUEwQztBQUMvQyxNQUFJdlcsR0FBRyxDQUFIQSxXQUFKLEdBQUlBLENBQUosRUFBeUI7O0FBQ3pCLE1BQUk7QUFDRjtBQUNBLFVBQU1vWSxjQUFjLEdBQUcsV0FBdkIsaUJBQXVCLEdBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLGFBQWpCLGNBQWlCLENBQWpCO0FBQ0EsV0FBT0EsUUFBUSxDQUFSQSw2QkFBc0NDLFdBQVcsQ0FBQ0QsUUFBUSxDQUFqRSxRQUF3RCxDQUF4RDtBQUNBLEdBTEYsQ0FLRSxVQUFVO0FBQ1Y7QUFFSDtBQUlNOztBQUFBLGlEQUlMO0FBQ0EsTUFBSUUsaUJBQWlCLEdBQXJCO0FBRUEsUUFBTUMsWUFBWSxHQUFHLCtCQUFyQixLQUFxQixDQUFyQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0QsWUFBWSxDQUFsQztBQUNBLFFBQU1FLGNBQWMsR0FDbEI7QUFDQSxHQUFDQyxVQUFVLEtBQVZBLFFBQXVCLGlEQUF2QkEsVUFBdUIsQ0FBdkJBLEdBQUQsT0FDQTtBQUNBO0FBSkY7QUFPQUosbUJBQWlCLEdBQWpCQTtBQUNBLFFBQU1LLE1BQU0sR0FBR3pELE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQ3lELE1BQU0sQ0FBTkEsTUFBY0MsS0FBRCxJQUFXO0FBQ3ZCLFFBQUkvYixLQUFLLEdBQUc0YixjQUFjLENBQWRBLEtBQWMsQ0FBZEEsSUFBWjtBQUNBLFVBQU07QUFBQTtBQUFBO0FBQUEsUUFBdUJELGFBQWEsQ0FBMUMsS0FBMEMsQ0FBMUMsQ0FGdUIsQ0FJdkI7QUFDQTs7QUFDQSxRQUFJSyxRQUFRLEdBQUksSUFBR0MsTUFBTSxXQUFXLEVBQUcsR0FBRUYsS0FBekM7O0FBQ0Esa0JBQWM7QUFDWkMsY0FBUSxHQUFJLEdBQUUsZUFBZSxFQUFHLElBQUdBLFFBQW5DQTtBQUVGOztBQUFBLFFBQUlDLE1BQU0sSUFBSSxDQUFDelgsS0FBSyxDQUFMQSxRQUFmLEtBQWVBLENBQWYsRUFBcUN4RSxLQUFLLEdBQUcsQ0FBUkEsS0FBUSxDQUFSQTtBQUVyQyxXQUNFLENBQUNrYyxRQUFRLElBQUlILEtBQUssSUFBbEIscUJBQ0E7QUFDQ04scUJBQWlCLEdBQ2hCQSxpQkFBaUIsQ0FBakJBLGtCQUVFUSxNQUFNLEdBQ0RqYyxLQUFELElBQUNBLENBQXVCbWMsc0JBQXhCLE9BQUNuYyxFQUFELElBQUNBLENBREMsR0FDREEsQ0FEQyxHQUVGLG1DQUpOeWIsS0FJTSxDQUpOQSxLQUpKLEdBQ0UsQ0FERjtBQWJKLEdBQ0dLLENBREgsRUF5QkU7QUFDQUwscUJBQWlCLEdBQWpCQSxHQURBLENBQ3VCO0FBRXZCO0FBQ0E7QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTFcsVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNQyxhQUE2QixHQUFuQztBQUVBaEUsUUFBTSxDQUFOQSxvQkFBNEIxUyxHQUFELElBQVM7QUFDbEMsUUFBSSxDQUFDbVcsTUFBTSxDQUFOQSxTQUFMLEdBQUtBLENBQUwsRUFBMkI7QUFDekJPLG1CQUFhLENBQWJBLEdBQWEsQ0FBYkEsR0FBcUJ2ZSxLQUFLLENBQTFCdWUsR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRGhFO0FBS0E7QUFHRjtBQUFBOzs7Ozs7QUFJTyxtREFJRztBQUNSO0FBQ0EsUUFBTXhTLElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNeVcsV0FBVyxHQUNmLGtDQUFrQyxpQ0FEcEMsSUFDb0MsQ0FEcEM7O0FBRUEsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxxQkFBakIsSUFBaUIsQ0FBakI7QUFDQUEsWUFBUSxDQUFSQSxXQUFvQix3REFBMkJBLFFBQVEsQ0FBdkRBLFFBQW9CLENBQXBCQTtBQUNBLFFBQUlDLGNBQWMsR0FBbEI7O0FBRUEsUUFDRSwrQkFBZUQsUUFBUSxDQUF2QixhQUNBQSxRQUFRLENBRFIsZ0JBREYsV0FJRTtBQUNBLFlBQU16ZSxLQUFLLEdBQUcseUNBQXVCeWUsUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDM2Usa0JBQVEsRUFENEI7QUFFcEM2ZSxjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcEN6ZSxlQUFLLEVBQUU2ZSxrQkFBa0IsUUFIM0JILE1BRzJCO0FBSFcsU0FBckIsQ0FBakJBO0FBTUg7QUFFRCxLQTNCRSxDQTJCRjs7O0FBQ0EsVUFBTUksWUFBWSxHQUNoQkwsUUFBUSxDQUFSQSxXQUFvQjFXLElBQUksQ0FBeEIwVyxTQUNJQSxRQUFRLENBQVJBLFdBQW9CQSxRQUFRLENBQVJBLE9BRHhCQSxNQUNJQSxDQURKQSxHQUVJQSxRQUFRLENBSGQ7QUFLQSxXQUFRTSxTQUFTLEdBQ2IsZUFBZUwsY0FBYyxJQURoQixZQUNiLENBRGEsR0FBakI7QUFHQSxHQXBDRixDQW9DRSxVQUFVO0FBQ1YsV0FBUUssU0FBUyxHQUFHLENBQUgsV0FBRyxDQUFILEdBQWpCO0FBRUg7QUFFRDs7QUFBQSxNQUFNQyxlQUFlLEdBQUdDLE1BQU0sQ0FBOUIsaUJBQThCLENBQTlCOztBQUNPLCtCQUE2QztBQUNsRCxTQUFPMUUsTUFBTSxDQUFOQSxxQ0FBUCxFQUFPQSxDQUFQO0FBR0Y7O0FBQUEsdUNBQTZEO0FBQzNEO0FBQ0E7QUFDQSxTQUFPO0FBQ0xuVixPQUFHLEVBQUU4WixXQUFXLENBQUNDLFdBQVcsQ0FBQ3hGLE1BQU0sQ0FBUCxVQUR2QixHQUN1QixDQUFaLENBRFg7QUFFTHZRLE1BQUUsRUFBRUEsRUFBRSxHQUFHOFYsV0FBVyxDQUFDQyxXQUFXLENBQUN4RixNQUFNLENBQVAsVUFBMUIsRUFBMEIsQ0FBWixDQUFkLEdBRlI7QUFBTyxHQUFQO0FBeURGOztBQUFBLE1BQU15Rix1QkFBdUIsR0FDM0JuZSxVQUVBLEtBSEY7O0FBS0EsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQW9lLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFQyxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSUMsUUFBUSxHQUFSQSxLQUFnQkQsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPRSxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxZQUFNLFVBQU4sNkJBQU0sQ0FBTjtBQUdGOztBQUFBLFdBQU9ELEdBQUcsQ0FBVixJQUFPQSxFQUFQO0FBckJGLEdBQU8sQ0FBUDtBQXlCRjs7QUFBQSxpREFBa0U7QUFDaEUsU0FBTyxVQUFVLFdBQVdHLGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EN0YsR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25COEYsc0JBQWdCLENBQWhCQSxHQUFnQixDQUFoQkE7QUFFRjs7QUFBQTtBQVBGLEdBQU8sQ0FBUDtBQVdhOztBQUFBLE1BQU01SixNQUFOLENBQW1DO0FBT2hEOztBQVBnRDtBQVdoRDtBQWtCQTNMLGFBQVcseUJBSVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBK0JUO0FBQUEsU0EzREZ3VixLQTJERTtBQUFBLFNBMURGNWYsUUEwREU7QUFBQSxTQXpERkMsS0F5REU7QUFBQSxTQXhERjRmLE1Bd0RFO0FBQUEsU0F2REZ4QyxRQXVERTtBQUFBLFNBbERGeUMsVUFrREU7QUFBQSxTQWhERkMsR0FnREUsR0FoRGtDLEVBZ0RsQztBQUFBLFNBL0NGQyxHQStDRTtBQUFBLFNBOUNGQyxHQThDRTtBQUFBLFNBN0NGQyxVQTZDRTtBQUFBLFNBNUNGQyxJQTRDRTtBQUFBLFNBM0NGQyxNQTJDRTtBQUFBLFNBMUNGQyxRQTBDRTtBQUFBLFNBekNGQyxLQXlDRTtBQUFBLFNBeENGQyxVQXdDRTtBQUFBLFNBdkNGQyxjQXVDRTtBQUFBLFNBdENGQyxRQXNDRTtBQUFBLFNBckNGdk0sTUFxQ0U7QUFBQSxTQXBDRndNLE9Bb0NFO0FBQUEsU0FuQ0ZDLGFBbUNFOztBQUFBLHNCQXFHWXZMLENBQUQsSUFBNEI7QUFDdkMsWUFBTTVLLEtBQUssR0FBRzRLLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFcFYsa0JBQVEsRUFBRW1mLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUMzVSxLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0E1QnVDLENBOEJ2QztBQUNBOztBQUNBLFVBQUksY0FBY25CLEVBQUUsS0FBSyxLQUFyQixVQUFvQ3JKLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BcEN1QyxDQW9DdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRXdhLE1BQU0sQ0FBTkEsb0JBQTJCO0FBQ3pCeEUsZUFBTyxFQUFFaEksT0FBTyxDQUFQQSxXQUFtQixLQUxoQztBQUk2QixPQUEzQndNLENBSkY7QUEvSUEsT0FDQTs7O0FBQ0EsaUJBQWEscURBQWIsU0FBYSxDQUFiLENBRkEsQ0FJQTs7QUFDQSx5QkFMQSxDQU1BO0FBQ0E7QUFDQTs7QUFDQSxRQUFJeGEsU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCNGdCLG1CQUFXLEVBRmlCO0FBRzVCdGYsYUFBSyxFQUh1QjtBQUFBO0FBSzVCdWYsZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FMVDtBQU01QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FOdkM7QUFBOEIsT0FBOUI7QUFVRjs7QUFBQSwrQkFBMkI7QUFDekIzVyxlQUFTLEVBRGdCO0FBRXpCeVcsaUJBQVcsRUFBRTtBQUZmO0FBRWU7QUFGWSxLQUEzQixDQXBCQSxDQTJCQTtBQUNBOztBQUNBLGtCQUFjN0ssTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkFqQ0EsQ0FrQ0E7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QmlMLGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkExQ0EsQ0EyQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLFFBQUk5ZixLQUFKLEVBQXFDLEVBTXJDOztBQUFBLGVBQW1DLEVBNENwQztBQXNERCtmOztBQUFBQSxRQUFNLEdBQVM7QUFDYi9ILFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7OztBQUdBZ0ksTUFBSSxHQUFHO0FBQ0xoSSxVQUFNLENBQU5BO0FBR0Y7QUFBQTs7Ozs7Ozs7QUFNQXBaLE1BQUksTUFBV3VKLEVBQU8sR0FBbEIsS0FBMEIyRSxPQUEwQixHQUFwRCxJQUEyRDtBQUM3RDtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBY21ULFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUF0aEIsU0FBTyxNQUFXd0osRUFBTyxHQUFsQixLQUEwQjJFLE9BQTBCLEdBQXBELElBQTJEO0FBQ2hFO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjbVQsWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEseUNBS29CO0FBQ2xCLFFBQUksQ0FBQ0MsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQmxJLFlBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFFBQUksQ0FBRWxMLE9BQUQsQ0FBTCxJQUEwQjtBQUN4QjtBQUVGLEtBVGtCLENBU2xCOzs7QUFDQSxRQUFJcVQsT0FBSixJQUFRO0FBQ05DLGlCQUFXLENBQVhBO0FBR0Y7O0FBQUEsUUFBSSxLQUFKLGdCQUF5QjtBQUN2Qiw4QkFBd0IsS0FBeEI7QUFHRmpZOztBQUFBQSxNQUFFLEdBQUdrWSxTQUFTLEtBQUssS0FBTCxRQUFrQixLQUFoQ2xZLGFBQWMsQ0FBZEE7QUFDQSxVQUFNbVksU0FBUyxHQUFHQyxTQUFTLENBQ3pCOUQsV0FBVyxDQUFYQSxFQUFXLENBQVhBLEdBQWtCK0QsV0FBVyxDQUE3Qi9ELEVBQTZCLENBQTdCQSxHQUR5QixJQUV6QixLQUZGLE1BQTJCLENBQTNCO0FBSUEsNkJBdkJrQixDQXlCbEI7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUUzUCxPQUFELENBQUQsTUFBd0IscUJBQTVCLFNBQTRCLENBQTVCLEVBQTZEO0FBQzNEO0FBQ0ErSCxZQUFNLENBQU5BLG1DQUYyRCxDQUczRDs7QUFDQTtBQUNBO0FBQ0Esa0JBQVksZ0JBQWdCLEtBQTVCLEtBQVksQ0FBWjtBQUNBQSxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQTFDa0IsQ0EwQ2xCO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBTTRMLEtBQUssR0FBRyxNQUFNLGdCQUFwQixXQUFvQixFQUFwQjtBQUNBLFVBQU07QUFBRUMsZ0JBQVUsRUFBWjtBQUFBLFFBQTJCLE1BQU0sZ0JBQXZDO0FBRUEsUUFBSUMsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBO0FBQUEsUUFBSjtBQUVBQSxVQUFNLEdBQUcsMEJBQVRBLEtBQVMsQ0FBVEE7O0FBRUEsUUFBSUEsTUFBTSxDQUFOQSxhQUFKLFVBQWtDO0FBQ2hDN2hCLGNBQVEsR0FBRzZoQixNQUFNLENBQWpCN2hCO0FBQ0FxRixTQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFHRixLQTNEa0IsQ0EyRGxCO0FBQ0E7QUFDQTs7O0FBQ0FyRixZQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0IwaEIsV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5CMWhCLFNBOURrQixDQWtFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUMsY0FBTCxTQUFLLENBQUwsRUFBK0I7QUFDN0I4aEIsWUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQUlsQyxLQUFLLEdBQUcscURBQVosUUFBWSxDQUFaO0FBQ0EsVUFBTTtBQUFFNUosYUFBTyxHQUFUO0FBQUEsUUFBTixRQTVFa0IsQ0E4RWxCO0FBQ0E7O0FBQ0EsUUFBSWlGLFVBQVUsR0FBZDs7QUFFQSxRQUFJL1osSUFBSixFQUFxQztBQUNuQytaLGdCQUFVLEdBQUcsOEJBQ1gsNENBRFcsNENBTVZELENBQUQsSUFBZSxrQkFBa0I7QUFBRWhiLGdCQUFRLEVBQTVCO0FBQWtCLE9BQWxCLFNBTmpCaWIsUUFBYSxDQUFiQTs7QUFTQSxVQUFJQSxVQUFVLEtBQWQsSUFBdUI7QUFDckIsY0FBTThHLGFBQWEsR0FBRyxxREFDcEIsa0JBQ0V2SCxNQUFNLENBQU5BLG1CQUEwQjtBQUFFeGEsa0JBQVEsRUFEdEM7QUFDNEIsU0FBMUJ3YSxDQURGLGdCQURGLFFBQXNCLENBQXRCLENBRHFCLENBU3JCO0FBQ0E7O0FBQ0EsWUFBSW1ILEtBQUssQ0FBTEEsU0FBSixhQUFJQSxDQUFKLEVBQW1DO0FBQ2pDL0IsZUFBSyxHQUFMQTtBQUNBNWYsa0JBQVEsR0FBUkE7QUFDQTZoQixnQkFBTSxDQUFOQTtBQUNBeGMsYUFBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBRUg7QUFDRjtBQUNENFY7O0FBQUFBLGNBQVUsR0FBR3dHLFNBQVMsQ0FBQ0MsV0FBVyxDQUFaLFVBQVksQ0FBWixFQUEwQixLQUFoRHpHLE1BQXNCLENBQXRCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNK0csUUFBUSxHQUFHLHdDQUFqQixVQUFpQixDQUFqQjtBQUNBLFlBQU1oRSxVQUFVLEdBQUdnRSxRQUFRLENBQTNCO0FBRUEsWUFBTUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7QUFDQSxZQUFNQyxpQkFBaUIsR0FBR3ZDLEtBQUssS0FBL0I7QUFDQSxZQUFNakIsY0FBYyxHQUFHd0QsaUJBQWlCLEdBQ3BDdkQsYUFBYSxvQkFEdUIsS0FDdkIsQ0FEdUIsR0FBeEM7O0FBSUEsVUFBSSxlQUFnQnVELGlCQUFpQixJQUFJLENBQUN4RCxjQUFjLENBQXhELFFBQWtFO0FBQ2hFLGNBQU15RCxhQUFhLEdBQUc1SCxNQUFNLENBQU5BLEtBQVl5SCxVQUFVLENBQXRCekgsZUFDbkIwRCxLQUFELElBQVcsQ0FBQ2plLEtBQUssQ0FEbkIsS0FDbUIsQ0FER3VhLENBQXRCOztBQUlBLFlBQUk0SCxhQUFhLENBQWJBLFNBQUosR0FBOEI7QUFDNUIsb0JBQTJDO0FBQ3pDamQsbUJBQU8sQ0FBUEEsS0FDRyxHQUNDZ2QsaUJBQWlCLDBCQUVaLGlDQUhQLDhCQUFDLEdBS0UsZUFBY0MsYUFBYSxDQUFiQSxVQU5uQmpkO0FBWUY7O0FBQUEsZ0JBQU0sVUFDSixDQUFDZ2QsaUJBQWlCLEdBQ2IsMEJBQXlCOWMsR0FBSSxvQ0FBbUMrYyxhQUFhLENBQWJBLFVBRG5ELG9DQUliLDhCQUE2QnBFLFVBQVcsOENBQTZDNEIsS0FKMUYsU0FLRyw0Q0FDQ3VDLGlCQUFpQixpQ0FFYixzQkFUVixFQUFNLENBQU47QUFhSDtBQWhDRCxhQWdDTyx1QkFBdUI7QUFDNUI5WSxVQUFFLEdBQUcsaUNBQ0htUixNQUFNLENBQU5BLHFCQUE0QjtBQUMxQnhhLGtCQUFRLEVBQUUyZSxjQUFjLENBREU7QUFFMUIxZSxlQUFLLEVBQUU2ZSxrQkFBa0IsUUFBUUgsY0FBYyxDQUhuRHRWLE1BRzZCO0FBRkMsU0FBNUJtUixDQURHLENBQUxuUjtBQURLLGFBT0E7QUFDTDtBQUNBbVIsY0FBTSxDQUFOQTtBQUVIO0FBRUR6RTs7QUFBQUEsVUFBTSxDQUFOQTs7QUFFQSxRQUFJO0FBQ0YsWUFBTXNNLFNBQVMsR0FBRyxNQUFNLDhDQUF4QixPQUF3QixDQUF4QjtBQU9BLFVBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUosVUFSRSxDQVVGOztBQUNBLFVBQ0UsQ0FBQ3hCLE9BQU8sSUFBUixxQkFFQ3ZmLEtBQUQsQ0FGQSxhQUdDQSxLQUFELFVBQUNBLENBSkgsY0FLRTtBQUNBLGNBQU1naEIsV0FBVyxHQUFJaGhCLEtBQUQsVUFBQ0EsQ0FBckIsYUFEQSxDQUdBO0FBQ0E7QUFDQTs7QUFDQSxZQUFJZ2hCLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CLGdCQUFNQyxVQUFVLEdBQUcsd0NBQW5CLFdBQW1CLENBQW5COztBQUNBOztBQUVBLGNBQUlaLEtBQUssQ0FBTEEsU0FBZVksVUFBVSxDQUE3QixRQUFJWixDQUFKLEVBQXlDO0FBQ3ZDLG1CQUFPLHNEQUFQLE9BQU8sQ0FBUDtBQU9IO0FBRUR6STs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8sWUFBWSxNQUFNLENBQXpCLENBQU8sQ0FBUDtBQUdGbkQ7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQSxvQ0FHRXdMLFNBQVMsS0FBSyxLQUFMLFFBQWtCLEtBSDdCLGFBR1csQ0FIWDs7QUFPQSxnQkFBMkM7QUFDekMsY0FBTWlCLE9BQVksR0FBRyx5QkFBckI7QUFDRXRKLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBc0osT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVILFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNuSjtBQUtKOztBQUFBLFlBQU0sNkRBQ0g5RCxDQUFELElBQU87QUFDTCxZQUFJQSxDQUFDLENBQUwsV0FBaUJxTixLQUFLLEdBQUdBLEtBQUssSUFBOUIsQ0FBaUJBLENBQWpCLEtBQ0s7QUFIVCxPQUFNLENBQU47O0FBT0EsaUJBQVc7QUFDVDFNLGNBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFVBQUk3VSxLQUFKLEVBQTJDLEVBSzNDNlU7O0FBQUFBLFlBQU0sQ0FBTkE7QUFFQTtBQUNBLEtBM0VGLENBMkVFLFlBQVk7QUFDWixVQUFJOEQsR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBRUY7O0FBQUE7QUFFSDtBQUVENkk7O0FBQUFBLGFBQVcsa0JBSVQxVSxPQUEwQixHQUpqQixJQUtIO0FBQ04sY0FBMkM7QUFDekMsVUFBSSxPQUFPa0wsTUFBTSxDQUFiLFlBQUosYUFBMkM7QUFDekMvVCxlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU8rVCxNQUFNLENBQU5BLFFBQVAsTUFBT0EsQ0FBUCxLQUFKLGFBQW1EO0FBQ2pEL1QsZUFBTyxDQUFQQSxNQUFlLDJCQUEwQjJjLE1BQXpDM2M7QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSTJjLE1BQU0sS0FBTkEsZUFBMEIseUJBQTlCLElBQStDO0FBQzdDLHNCQUFnQjlULE9BQU8sQ0FBdkI7QUFDQSxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFJRTJVLFdBQUcsRUFMUDtBQUNFLE9BREYsRUFPRTtBQUNBO0FBQ0E7QUFURjtBQWNIO0FBRUQ7O0FBQUEsc0VBTTZCO0FBQzNCLFFBQUk5SSxHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFDQTtBQUdGOztBQUFBLFFBQUlvRixlQUFlLElBQWZBLE9BQUosZUFBNkM7QUFDM0NsSixZQUFNLENBQU5BLHlDQUQyQyxDQUczQztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBbUQsWUFBTSxDQUFOQSxtQkFUMkMsQ0FXM0M7QUFDQTs7QUFDQSxZQUFNMEosc0JBQU47QUFHRjs7QUFBQSxRQUFJO0FBQ0YsWUFBTTtBQUFFQyxZQUFJLEVBQU47QUFBQTtBQUFBLFVBQW1DLE1BQU0sb0JBQS9DLFNBQStDLENBQS9DO0FBR0EsWUFBTVIsU0FBMkIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUlsQ0ksYUFBSyxFQUpQO0FBQW9DLE9BQXBDOztBQU9BLFVBQUk7QUFDRkosaUJBQVMsQ0FBVEEsUUFBa0IsTUFBTSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQXhEQTtBQUF3RCxTQUFoQyxDQUF4QkE7QUFLQSxPQU5GLENBTUUsZUFBZTtBQUNmbGQsZUFBTyxDQUFQQTtBQUNBa2QsaUJBQVMsQ0FBVEE7QUFHRjs7QUFBQTtBQUNBLEtBdkJGLENBdUJFLHFCQUFxQjtBQUNyQixhQUFPLDZEQUFQLElBQU8sQ0FBUDtBQUVIO0FBRUQ7O0FBQUEsaURBS0VyTSxPQUFnQixHQUxsQixPQU02QjtBQUMzQixRQUFJO0FBQ0YsWUFBTThNLGVBQWUsR0FBRyxnQkFBeEIsS0FBd0IsQ0FBeEI7O0FBRUEsVUFBSTlNLE9BQU8sSUFBUEEsbUJBQThCLGVBQWxDLE9BQXdEO0FBQ3REO0FBR0Y7O0FBQUEsWUFBTXFNLFNBQTJCLEdBQUdTLGVBQWUscUJBRS9DLE1BQU0sZ0NBQWlDdkQsR0FBRCxLQUFVO0FBQzlDcFYsaUJBQVMsRUFBRW9WLEdBQUcsQ0FEZ0M7QUFFOUNxQixtQkFBVyxFQUFFckIsR0FBRyxDQUY4QjtBQUc5Q3NCLGVBQU8sRUFBRXRCLEdBQUcsQ0FBSEEsSUFIcUM7QUFJOUN3QixlQUFPLEVBQUV4QixHQUFHLENBQUhBLElBTmY7QUFFb0QsT0FBVixDQUFoQyxDQUZWO0FBU0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU07QUFBQTtBQUFBLFlBQXlCd0QsbUJBQU8sQ0FBdEMsMEJBQXNDLENBQXRDOztBQUNBLFlBQUksQ0FBQ0Msa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEaGpCLFFBRDNELEdBQU0sQ0FBTjtBQUlIO0FBRUQ7O0FBQUE7O0FBRUEsVUFBSTZnQixPQUFPLElBQVgsU0FBd0I7QUFDdEJvQyxnQkFBUSxHQUFHLDRCQUNULGlDQUFxQjtBQUFBO0FBRFo7QUFDWSxTQUFyQixDQURTLEVBRVR2QixXQUFXLENBRkYsRUFFRSxDQUZGLFdBSVQsS0FKUyxRQUtULEtBTEZ1QixhQUFXLENBQVhBO0FBU0Y7O0FBQUEsWUFBTTNoQixLQUFLLEdBQUcsTUFBTSxjQUFnQyxNQUNsRHVmLE9BQU8sR0FDSCxvQkFERyxRQUNILENBREcsR0FFSEUsT0FBTyxHQUNQLG9CQURPLFFBQ1AsQ0FETyxHQUVQLGdDQUVFO0FBQ0E7QUFBQTtBQUFBO0FBR0VsQixjQUFNLEVBWGhCO0FBUVEsT0FIRixDQUxjLENBQXBCO0FBZ0JBd0MsZUFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFDQSxLQTFERixDQTBERSxZQUFZO0FBQ1osYUFBTyxnREFBUCxFQUFPLENBQVA7QUFFSDtBQUVEYTs7QUFBQUEsS0FBRyxtQ0FNYztBQUNmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFPLFlBQVAsSUFBTyxDQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSUFDLGdCQUFjLEtBQTZCO0FBQ3pDO0FBR0ZDOztBQUFBQSxpQkFBZSxLQUFzQjtBQUNuQyxRQUFJLENBQUMsS0FBTCxRQUFrQjtBQUNsQixVQUFNLDBCQUEwQixrQkFBaEMsR0FBZ0MsQ0FBaEM7QUFDQSxVQUFNLDBCQUEwQi9aLEVBQUUsQ0FBRkEsTUFBaEMsR0FBZ0NBLENBQWhDLENBSG1DLENBS25DOztBQUNBLFFBQUlnYSxPQUFPLElBQUlDLFlBQVksS0FBdkJELGdCQUE0Q0UsT0FBTyxLQUF2RCxTQUFxRTtBQUNuRTtBQUdGLEtBVm1DLENBVW5DOzs7QUFDQSxRQUFJRCxZQUFZLEtBQWhCLGNBQW1DO0FBQ2pDO0FBR0YsS0FmbUMsQ0FlbkM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9DLE9BQU8sS0FBZDtBQUdGQzs7QUFBQUEsY0FBWSxLQUFtQjtBQUM3QixVQUFNLFdBQVduYSxFQUFFLENBQUZBLE1BQWpCLEdBQWlCQSxDQUFqQixDQUQ2QixDQUU3Qjs7QUFDQSxRQUFJd1YsSUFBSSxLQUFSLElBQWlCO0FBQ2YzRixZQUFNLENBQU5BO0FBQ0E7QUFHRixLQVI2QixDQVE3Qjs7O0FBQ0EsVUFBTXVLLElBQUksR0FBR3JULFFBQVEsQ0FBUkEsZUFBYixJQUFhQSxDQUFiOztBQUNBLGNBQVU7QUFDUnFULFVBQUksQ0FBSkE7QUFDQTtBQUVGLEtBZDZCLENBYzdCO0FBQ0E7OztBQUNBLFVBQU1DLE1BQU0sR0FBR3RULFFBQVEsQ0FBUkEsd0JBQWYsQ0FBZUEsQ0FBZjs7QUFDQSxnQkFBWTtBQUNWc1QsWUFBTSxDQUFOQTtBQUVIO0FBRURDOztBQUFBQSxVQUFRLFNBQTBCO0FBQ2hDLFdBQU8sZ0JBQVA7QUFHRkM7O0FBQUFBLGNBQVksb0JBQXlDQyxhQUFhLEdBQXRELE1BQStEO0FBQ3pFLFVBQU07QUFBQTtBQUFBLFFBQU47QUFDQSxVQUFNQyxhQUFhLEdBQUcscURBQ3BCLDhDQUFvQkQsYUFBYSxHQUFHbkMsV0FBVyxDQUFkLFFBQWMsQ0FBZCxHQURuQyxRQUNFLENBRG9CLENBQXRCOztBQUlBLFFBQUlvQyxhQUFhLEtBQWJBLFVBQTRCQSxhQUFhLEtBQTdDLFdBQTZEO0FBQzNEO0FBR0YsS0FWeUUsQ0FVekU7OztBQUNBLFFBQUksQ0FBQ25DLEtBQUssQ0FBTEEsU0FBTCxhQUFLQSxDQUFMLEVBQXFDO0FBQ25DO0FBQ0FBLFdBQUssQ0FBTEEsS0FBWWtCLElBQUQsSUFBVTtBQUNuQixZQUNFLHdDQUNBLDZDQUZGLGFBRUUsQ0FGRixFQUdFO0FBQ0FOLG9CQUFVLENBQVZBLFdBQXNCc0IsYUFBYSxHQUFHMUUsV0FBVyxDQUFkLElBQWMsQ0FBZCxHQUFuQ29EO0FBQ0E7QUFFSDtBQVJEWjtBQVVGOztBQUFBO0FBR0Y7QUFBQTs7Ozs7Ozs7QUFNQSxzQkFFRTlCLE1BQWMsR0FGaEIsS0FHRTdSLE9BQXdCLEdBSDFCLElBSWlCO0FBQ2YsUUFBSTZULE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQSxRQUFKO0FBRUEsVUFBTUYsS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBRUFFLFVBQU0sR0FBRywwQkFBVEEsS0FBUyxDQUFUQTs7QUFFQSxRQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaEM3aEIsY0FBUSxHQUFHNmhCLE1BQU0sQ0FBakI3aEI7QUFDQXFGLFNBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUdGLEtBZGUsQ0FjZjs7O0FBQ0EsY0FBMkM7QUFDekM7QUFHRjs7QUFBQSxVQUFNdWEsS0FBSyxHQUFHLHFEQUFkLFFBQWMsQ0FBZDtBQUNBLFVBQU12SCxPQUFPLENBQVBBLElBQVksQ0FDaEIsMENBR0UsS0FIRixRQUlFLEtBTGMsYUFDaEIsQ0FEZ0IsRUFPaEIsZ0JBQWdCckssT0FBTyxDQUFQQSx3QkFBaEIsWUFQRixLQU9FLENBUGdCLENBQVpxSyxDQUFOO0FBV0Y7O0FBQUEsOEJBQTREO0FBQzFELFFBQUlpRixTQUFTLEdBQWI7O0FBQ0EsVUFBTXlHLE1BQU0sR0FBSSxXQUFXLE1BQU07QUFDL0J6RyxlQUFTLEdBQVRBO0FBREY7O0FBSUEsVUFBTTBHLGVBQWUsR0FBRyxNQUFNLHlCQUE5QixLQUE4QixDQUE5Qjs7QUFFQSxtQkFBZTtBQUNiLFlBQU12QixLQUFVLEdBQUcsVUFDaEIsd0NBQXVDN0MsS0FEMUMsR0FBbUIsQ0FBbkI7QUFHQTZDLFdBQUssQ0FBTEE7QUFDQTtBQUdGOztBQUFBLFFBQUlzQixNQUFNLEtBQUssS0FBZixLQUF5QjtBQUN2QjtBQUdGOztBQUFBO0FBR0ZFOztBQUFBQSxVQUFRLEtBQXNDO0FBQzVDLFFBQUkzRyxTQUFTLEdBQWI7O0FBQ0EsVUFBTXlHLE1BQU0sR0FBRyxNQUFNO0FBQ25CekcsZUFBUyxHQUFUQTtBQURGOztBQUdBO0FBQ0EsV0FBTzRHLEVBQUUsR0FBRkEsS0FBV2xlLElBQUQsSUFBVTtBQUN6QixVQUFJK2QsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQSxxQkFBZTtBQUNiLGNBQU1sSyxHQUFRLEdBQUcsVUFBakIsaUNBQWlCLENBQWpCO0FBQ0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUdGOztBQUFBO0FBWEYsS0FBT3FLLENBQVA7QUFlRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFVBQU07QUFBRXJLLFVBQUksRUFBTjtBQUFBLFFBQXFCLGtCQUFrQlosTUFBTSxDQUFOQSxTQUE3QyxJQUEyQixDQUEzQjs7QUFDQSxRQUFJaFksS0FBSixFQUFpRSxFQUdqRTs7QUFBQSxXQUFPa2pCLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUEwQ3BlLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT29lLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGcEg7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFN1MsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU1tYSxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdEQzSyxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRjRLOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWnpPLFlBQU0sQ0FBTkEsZ0NBQXVDNk0sc0JBQXZDN007QUFDQTtBQUNBO0FBRUg7QUFFRDBPOztBQUFBQSxRQUFNLE9BQXdDO0FBQzVDLFdBQU8sZUFBZSx5QkFBdEIsU0FBTyxDQUFQO0FBejNCOEM7O0FBQUE7OztBQUE3QjFPLE0sQ0EyQlpxSyxNQTNCWXJLLEdBMkJVLG9CQTNCVkEsQzs7Ozs7Ozs7Ozs7Ozs7O3dDQ2xWckI7O0FBQ2UsdUNBQXVEO0FBQ3BFLFNBQU8yTyxPQUFPLENBQVBBLGtCQUEyQkMsSUFBRCxJQUFrQkMsa0JBQWtCLENBQXJFLElBQXFFLENBQTlERixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4QkEsQyxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUcsZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUkva0IsUUFBUSxHQUFHK2tCLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUlsRyxJQUFJLEdBQUdrRyxNQUFNLENBQU5BLFFBQVg7QUFDQSxNQUFJOWtCLEtBQUssR0FBRzhrQixNQUFNLENBQU5BLFNBQVo7QUFDQSxNQUFJQyxJQUFvQixHQUF4QjtBQUVBQyxNQUFJLEdBQUdBLElBQUksR0FBR0wsa0JBQWtCLENBQWxCQSxJQUFrQixDQUFsQkEsd0JBQUgsTUFBWEs7O0FBRUEsTUFBSUYsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFFBQUksR0FBR0MsSUFBSSxHQUFHRixNQUFNLENBQXBCQztBQURGLFNBRU8sY0FBYztBQUNuQkEsUUFBSSxHQUFHQyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFELEdBQUNBLENBQUQsR0FBMEIsSUFBR0EsUUFBN0IsTUFBZkYsUUFBVyxDQUFYQTs7QUFDQSxRQUFJRCxNQUFNLENBQVYsTUFBaUI7QUFDZkMsVUFBSSxJQUFJLE1BQU1ELE1BQU0sQ0FBcEJDO0FBRUg7QUFFRDs7QUFBQSxNQUFJL2tCLEtBQUssSUFBSSxpQkFBYixVQUF3QztBQUN0Q0EsU0FBSyxHQUFHa2xCLE1BQU0sQ0FBQ0MsV0FBVyxDQUFYQSx1QkFBZm5sQixLQUFlbWxCLENBQUQsQ0FBZG5sQjtBQUdGOztBQUFBLE1BQUlvbEIsTUFBTSxHQUFHTixNQUFNLENBQU5BLFVBQWtCOWtCLEtBQUssSUFBSyxJQUFHQSxLQUEvQjhrQixNQUFiO0FBRUEsTUFBSUQsUUFBUSxJQUFJQSxRQUFRLENBQVJBLE9BQWdCLENBQWhCQSxPQUFoQixLQUE2Q0EsUUFBUSxJQUFSQTs7QUFFN0MsTUFDRUMsTUFBTSxDQUFOQSxXQUNDLENBQUMsYUFBYUYsZ0JBQWdCLENBQWhCQSxLQUFkLFFBQWNBLENBQWQsS0FBa0RHLElBQUksS0FGekQsT0FHRTtBQUNBQSxRQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFuQkEsRUFBTyxDQUFQQTtBQUNBLFFBQUlobEIsUUFBUSxJQUFJQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBaEIsS0FBcUNBLFFBQVEsR0FBRyxNQUFYQTtBQUx2QyxTQU1PLElBQUksQ0FBSixNQUFXO0FBQ2hCZ2xCLFFBQUksR0FBSkE7QUFHRjs7QUFBQSxNQUFJbkcsSUFBSSxJQUFJQSxJQUFJLENBQUpBLENBQUksQ0FBSkEsS0FBWixLQUE2QkEsSUFBSSxHQUFHLE1BQVBBO0FBQzdCLE1BQUl3RyxNQUFNLElBQUlBLE1BQU0sQ0FBTkEsQ0FBTSxDQUFOQSxLQUFkLEtBQWlDQSxNQUFNLEdBQUcsTUFBVEE7QUFFakNybEIsVUFBUSxHQUFHQSxRQUFRLENBQVJBLGlCQUFYQSxrQkFBV0EsQ0FBWEE7QUFDQXFsQixRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsYUFBVEEsS0FBU0EsQ0FBVEE7QUFFQSxTQUFRLEdBQUVQLFFBQVMsR0FBRUUsSUFBSyxHQUFFaGxCLFFBQVMsR0FBRXFsQixNQUFPLEdBQUV4RyxJQUFoRDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozt5Q0N4RUQ7O0FBQ0EsTUFBTXlHLFVBQVUsR0FBaEI7O0FBRU8sK0JBQWdEO0FBQ3JELFNBQU9BLFVBQVUsQ0FBVkEsS0FBUCxLQUFPQSxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBSUE7Ozs7Ozs7QUFNTyxxQ0FBc0Q7QUFDM0QsUUFBTUMsWUFBWSxHQUFHeGQsSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixhQVJKLFlBUUksQ0FSSjs7QUFTQSxNQUNFeWQsTUFBTSxLQUFLRixVQUFVLENBQXJCRSxVQUNDWCxRQUFRLEtBQVJBLFdBQXdCQSxRQUFRLEtBRm5DLFVBR0U7QUFDQSxVQUFNLFVBQU4saUNBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMN2tCLFNBQUssRUFBRSx5Q0FGRixZQUVFLENBRkY7QUFBQTtBQUFBO0FBS0w2WixRQUFJLEVBQUVBLElBQUksQ0FBSkEsTUFBV3lMLFVBQVUsQ0FBVkEsT0FMbkIsTUFLUXpMO0FBTEQsR0FBUDtBQU9ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJTzs7QUFBQSxNQUFNNEwsY0FDYyxHQUFHO0FBQzVCQyxXQUFTLEVBRG1CO0FBRTVCQyxXQUFTLEVBSEo7QUFDdUIsQ0FEdkI7OztBQU1BLE1BQU1DLHlCQUNjLG1DQUFHLGNBQUg7QUFFekJDLFFBQU0sRUFIRDtBQUNvQixFQURwQjs7OztlQU1RLENBQUNDLFdBQVcsR0FBWixVQUF5QjtBQUN0QyxTQUFRbkssSUFBRCxJQUFrQjtBQUN2QixVQUFNb0ssSUFBd0IsR0FBOUI7QUFDQSxVQUFNQyxZQUFZLEdBQUdDLFlBQVksQ0FBWkEseUJBR25CSCxXQUFXLCtCQUhiLGNBQXFCRyxDQUFyQjtBQUtBLFVBQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFaQSwrQkFBaEIsSUFBZ0JBLENBQWhCO0FBRUEsV0FBTyxzQkFBdUQ7QUFDNUQsWUFBTTNHLEdBQUcsR0FBR3ZmLFFBQVEsSUFBUkEsZUFBMkJtbUIsT0FBTyxDQUE5QyxRQUE4QyxDQUE5Qzs7QUFDQSxVQUFJLENBQUosS0FBVTtBQUNSO0FBR0Y7O0FBQUEsdUJBQWlCO0FBQ2YsYUFBSyxNQUFMLGFBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxjQUFJLE9BQU9yZSxHQUFHLENBQVYsU0FBSixVQUFrQztBQUNoQyxtQkFBUXlYLEdBQUcsQ0FBSixNQUFDQSxDQUFtQnpYLEdBQUcsQ0FBOUIsSUFBUXlYLENBQVI7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsNkNBQU8sTUFBUCxHQUF1QkEsR0FBRyxDQUExQjtBQWhCRjtBQVRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUllOztBQUFBLHVGQU1iO0FBQ0EsTUFBSTZHLGlCQUttQyxHQUx2Qzs7QUFPQSxNQUFJOUQsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0I4RCxxQkFBaUIsR0FBRyx3Q0FBcEJBLFdBQW9CLENBQXBCQTtBQURGLFNBRU87QUFDTCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU0YsUUFUSixXQVNJLENBVEo7QUFXQUEscUJBQWlCLEdBQUc7QUFBQTtBQUVsQm5tQixXQUFLLEVBQUUseUNBRlcsWUFFWCxDQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQm1tQjtBQUFvQixLQUFwQkE7QUFZRjs7QUFBQSxRQUFNQyxTQUFTLEdBQUdELGlCQUFpQixDQUFuQztBQUNBLFFBQU1FLFFBQVEsR0FBSSxHQUFFRixpQkFBaUIsQ0FBQ3BtQixRQUFVLEdBQzlDb21CLGlCQUFpQixDQUFqQkEsUUFBMEIsRUFENUI7QUFHQSxRQUFNRyxpQkFBcUMsR0FBM0M7QUFDQUwsY0FBWSxDQUFaQTtBQUVBLFFBQU1NLGNBQWMsR0FBR0QsaUJBQWlCLENBQWpCQSxJQUF1QnplLEdBQUQsSUFBU0EsR0FBRyxDQUF6RCxJQUF1QnllLENBQXZCO0FBRUEsTUFBSUUsbUJBQW1CLEdBQUcsWUFBWSxDQUFaLGtCQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFFQyxZQUFRLEVBUlo7QUFRRSxHQVJ3QixDQUExQjtBQVVBLGFBckRBLENBdURBOztBQUNBLE9BQUssTUFBTSxNQUFYLFVBQVcsQ0FBWCxJQUFnQ2xNLE1BQU0sQ0FBTkEsUUFBaEMsU0FBZ0NBLENBQWhDLEVBQTJEO0FBQ3pELFFBQUlyWSxLQUFLLEdBQUd3RSxLQUFLLENBQUxBLHNCQUE0QmdnQixVQUFVLENBQXRDaGdCLENBQXNDLENBQXRDQSxHQUFaOztBQUNBLGVBQVc7QUFDVDtBQUNBO0FBQ0F4RSxXQUFLLEdBQUksSUFBR0EsS0FBWkE7QUFDQSxZQUFNeWtCLGFBQWEsR0FBR1YsWUFBWSxDQUFaQSxlQUE0QjtBQUFFUSxnQkFBUSxFQUE1RDtBQUFrRCxPQUE1QlIsQ0FBdEI7QUFDQS9qQixXQUFLLEdBQUd5a0IsYUFBYSxDQUFiQSxNQUFhLENBQWJBLFFBQVJ6a0IsQ0FBUXlrQixDQUFSemtCO0FBRUZra0I7O0FBQUFBLGFBQVMsQ0FBVEEsR0FBUyxDQUFUQTtBQUdGLEdBcEVBLENBb0VBO0FBQ0E7OztBQUNBLFFBQU1RLFNBQVMsR0FBR3JNLE1BQU0sQ0FBTkEsS0FBbEIsTUFBa0JBLENBQWxCOztBQUVBLE1BQ0VzTSxtQkFBbUIsSUFDbkIsQ0FBQ0QsU0FBUyxDQUFUQSxLQUFnQi9lLEdBQUQsSUFBUzBlLGNBQWMsQ0FBZEEsU0FGM0IsR0FFMkJBLENBQXhCSyxDQUZILEVBR0U7QUFDQSxTQUFLLE1BQUwsa0JBQTZCO0FBQzNCLFVBQUksRUFBRS9lLEdBQUcsSUFBVCxTQUFJLENBQUosRUFBeUI7QUFDdkJ1ZSxpQkFBUyxDQUFUQSxHQUFTLENBQVRBLEdBQWlCcEksTUFBTSxDQUF2Qm9JLEdBQXVCLENBQXZCQTtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSxRQUFNVSxpQkFBaUIsR0FBR3pFLFdBQVcsQ0FBWEEsbUJBQTFCOztBQUVBLE1BQUk7QUFDRjBFLFVBQU0sR0FBSSxHQUFFRCxpQkFBaUIsY0FBYyxFQUFHLEdBQUVOLG1CQUFtQixRQUFuRU87QUFJQSxVQUFNLG1CQUFtQkEsTUFBTSxDQUFOQSxNQUF6QixHQUF5QkEsQ0FBekI7QUFDQVoscUJBQWlCLENBQWpCQTtBQUNBQSxxQkFBaUIsQ0FBakJBLE9BQTBCLEdBQUV2SCxJQUFJLFNBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBdER1SDtBQUNBLFdBQU9BLGlCQUFpQixDQUF4QjtBQUNBLEdBVEYsQ0FTRSxZQUFZO0FBQ1osUUFBSXZNLEdBQUcsQ0FBSEEsY0FBSiw4Q0FBSUEsQ0FBSixFQUF1RTtBQUNyRSxZQUFNLFVBQU4sd0tBQU0sQ0FBTjtBQUlGOztBQUFBO0FBR0YsR0F2R0EsQ0F1R0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBdU0sbUJBQWlCLENBQWpCQSx3Q0FBMEIsS0FBMUJBLEdBRUtBLGlCQUFpQixDQUZ0QkE7QUFLQSxTQUFPO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hNLDhDQUVXO0FBQ2hCLFFBQU1ubUIsS0FBcUIsR0FBM0I7QUFDQWduQixjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU9obkIsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUFKLGFBQXVDO0FBQ3JDQSxXQUFLLENBQUxBLEdBQUssQ0FBTEE7QUFERixXQUVPLElBQUkwRyxLQUFLLENBQUxBLFFBQWMxRyxLQUFLLENBQXZCLEdBQXVCLENBQW5CMEcsQ0FBSixFQUErQjtBQUNwQztBQUFFMUcsV0FBSyxDQUFOLEdBQU0sQ0FBTEEsQ0FBRCxJQUFDQSxDQUFELEtBQUNBO0FBREcsV0FFQTtBQUNMQSxXQUFLLENBQUxBLEdBQUssQ0FBTEEsR0FBYSxDQUFDQSxLQUFLLENBQU4sR0FBTSxDQUFOLEVBQWJBLEtBQWEsQ0FBYkE7QUFFSDtBQVJEZ25CO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPL0IsTUFBTSxDQUFiLEtBQWEsQ0FBYjtBQUxGLFNBTU87QUFDTDtBQUVIO0FBRU07O0FBQUEsMENBRVk7QUFDakIsUUFBTTVHLE1BQU0sR0FBRyxJQUFmLGVBQWUsRUFBZjtBQUNBL0QsUUFBTSxDQUFOQSwwQkFBaUMsQ0FBQyxNQUFELEtBQUMsQ0FBRCxLQUFrQjtBQUNqRCxRQUFJN1QsS0FBSyxDQUFMQSxRQUFKLEtBQUlBLENBQUosRUFBMEI7QUFDeEJ4RSxXQUFLLENBQUxBLFFBQWV5RSxJQUFELElBQVUyWCxNQUFNLENBQU5BLFlBQW1CNEksc0JBQXNCLENBQWpFaGxCLElBQWlFLENBQXpDb2MsQ0FBeEJwYztBQURGLFdBRU87QUFDTG9jLFlBQU0sQ0FBTkEsU0FBZ0I0SSxzQkFBc0IsQ0FBdEM1SSxLQUFzQyxDQUF0Q0E7QUFFSDtBQU5EL0Q7QUFPQTtBQUdLOztBQUFBLHdCQUVMLEdBRkssa0JBR1k7QUFDakI0TSxrQkFBZ0IsQ0FBaEJBLFFBQTBCSCxZQUFELElBQWtCO0FBQ3pDdGdCLFNBQUssQ0FBTEEsS0FBV3NnQixZQUFZLENBQXZCdGdCLElBQVdzZ0IsRUFBWHRnQixVQUF5Q21CLEdBQUQsSUFBUzVGLE1BQU0sQ0FBTkEsT0FBakR5RSxHQUFpRHpFLENBQWpEeUU7QUFDQXNnQixnQkFBWSxDQUFaQSxRQUFxQixnQkFBZ0Iva0IsTUFBTSxDQUFOQSxZQUFyQytrQixLQUFxQy9rQixDQUFyQytrQjtBQUZGRztBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOztBQUFBLE1BQU1DLGtCQUFrQixHQUFHLHdCQUEzQixJQUEyQixDQUEzQjs7QUFFZSxnRkFPYjtBQUNBLE1BQUksQ0FBQzFGLEtBQUssQ0FBTEEsU0FBTCxNQUFLQSxDQUFMLEVBQTZCO0FBQzNCLFNBQUssTUFBTCxxQkFBZ0M7QUFDOUIsWUFBTXdFLE9BQU8sR0FBR2tCLGtCQUFrQixDQUFDQyxPQUFPLENBQTFDLE1BQWtDLENBQWxDO0FBQ0EsWUFBTXJKLE1BQU0sR0FBR2tJLE9BQU8sQ0FBdEIsTUFBc0IsQ0FBdEI7O0FBRUEsa0JBQVk7QUFDVixZQUFJLENBQUNtQixPQUFPLENBQVosYUFBMEI7QUFDeEI7QUFDQTtBQUVGOztBQUFBLGNBQU1DLE9BQU8sR0FBRyxpQ0FDZEQsT0FBTyxDQURPLGtDQUtkQSxPQUFPLENBQVBBLDBCQUxGLFFBQWdCLENBQWhCO0FBT0F6SCxjQUFNLEdBQUcwSCxPQUFPLENBQVBBLGtCQUFUMUg7QUFDQXJGLGNBQU0sQ0FBTkEsY0FBcUIrTSxPQUFPLENBQVBBLGtCQUFyQi9NOztBQUVBLFlBQUltSCxLQUFLLENBQUxBLFNBQWUscURBQW5CLE1BQW1CLENBQWZBLENBQUosRUFBcUQ7QUFDbkQ7QUFDQTtBQUNBO0FBR0YsU0FyQlUsQ0FxQlY7OztBQUNBLGNBQU01QyxZQUFZLEdBQUdLLFdBQVcsQ0FBaEMsTUFBZ0MsQ0FBaEM7O0FBRUEsWUFBSUwsWUFBWSxLQUFaQSxVQUEyQjRDLEtBQUssQ0FBTEEsU0FBL0IsWUFBK0JBLENBQS9CLEVBQTZEO0FBQzNEO0FBRUg7QUFDRjtBQUNGO0FBQ0Q7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUTNoQixRQUFELElBQXlDO0FBQzlDLFVBQU1raUIsVUFBVSxHQUFHc0YsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUl2SixLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPd0osa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNN04sR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNb0UsTUFBa0QsR0FBeEQ7QUFFQXpELFVBQU0sQ0FBTkEscUJBQTZCbU4sUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNclcsQ0FBQyxHQUFHMFEsVUFBVSxDQUFDMEYsQ0FBQyxDQUF0QixHQUFvQixDQUFwQjs7QUFDQSxVQUFJcFcsQ0FBQyxLQUFMLFdBQXFCO0FBQ25CeU0sY0FBTSxDQUFOQSxRQUFNLENBQU5BLEdBQW1CLENBQUN6TSxDQUFDLENBQURBLFFBQUQsR0FBQ0EsQ0FBRCxHQUNmQSxDQUFDLENBQURBLGVBQWtCOEgsS0FBRCxJQUFXbU8sTUFBTSxDQURuQixLQUNtQixDQUFsQ2pXLENBRGUsR0FFZm9XLENBQUMsQ0FBREEsU0FDQSxDQUFDSCxNQUFNLENBRFBHLENBQ08sQ0FBUCxDQURBQSxHQUVBSCxNQUFNLENBSlZ4SixDQUlVLENBSlZBO0FBTUg7QUFWRHpEO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPc04sR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU16SixRQUFRLEdBQUdILEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFcFcsT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU1pZ0IsUUFBUSxHQUFHLENBQUNDLGVBQWUsQ0FBZkEsc0JBQUQsb0JBQWpCLEdBQWlCLENBQWpCO0FBSUEsUUFBTUgsTUFBc0MsR0FBNUM7QUFDQSxNQUFJSSxVQUFVLEdBQWQ7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0gsUUFBUSxDQUFSQSxJQUNuQnJELE9BQUQsSUFBYTtBQUNoQixRQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQTRCeUQsY0FBYyxDQUFDekQsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRDtBQUNBbUQsWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWM7QUFBRU8sV0FBRyxFQUFFSCxVQUFQO0FBQUE7QUFBZEo7QUFBYyxPQUFkQTtBQUNBLGFBQU96SixNQUFNLEdBQUlDLFFBQVEsbUJBQVosV0FBYjtBQUhGLFdBSU87QUFDTCxhQUFRLElBQUdnSyxXQUFXLFNBQXRCO0FBRUg7QUFUd0JOLFVBQTNCLEVBQTJCQSxDQUEzQixDQVBBLENBbUJBO0FBQ0E7O0FBQ0EsWUFBbUM7QUFDakMsUUFBSU8sZ0JBQWdCLEdBQXBCO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQXRCLEVBRmlDLENBSWpDOztBQUNBLFVBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzVCLFVBQUlDLFFBQVEsR0FBWjs7QUFFQSxXQUFLLElBQUl4a0IsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLG9CQUF3Q0EsQ0FBeEMsSUFBNkM7QUFDM0N3a0IsZ0JBQVEsSUFBSXRELE1BQU0sQ0FBTkEsYUFBWnNELGdCQUFZdEQsQ0FBWnNEO0FBQ0FILHdCQUFnQjs7QUFFaEIsWUFBSUEsZ0JBQWdCLEdBQXBCLEtBQTRCO0FBQzFCQyw0QkFBa0I7QUFDbEJELDBCQUFnQixHQUFoQkE7QUFFSDtBQUNEOztBQUFBO0FBWkY7O0FBZUEsVUFBTUksU0FBc0MsR0FBNUM7QUFFQSxRQUFJQyx1QkFBdUIsR0FBR1osUUFBUSxDQUFSQSxJQUN0QnJELE9BQUQsSUFBYTtBQUNoQixVQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsY0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTRCeUQsY0FBYyxDQUFDekQsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRCxDQURvRCxDQUVwRDtBQUNBOztBQUNBLFlBQUlrRSxVQUFVLEdBQUc5Z0IsR0FBRyxDQUFIQSxlQUFqQixFQUFpQkEsQ0FBakI7QUFDQSxZQUFJK2dCLFVBQVUsR0FBZCxNQUxvRCxDQU9wRDtBQUNBOztBQUNBLFlBQUlELFVBQVUsQ0FBVkEsZ0JBQTJCQSxVQUFVLENBQVZBLFNBQS9CLElBQXVEO0FBQ3JEQyxvQkFBVSxHQUFWQTtBQUVGOztBQUFBLFlBQUksQ0FBQzNCLEtBQUssQ0FBQzRCLFFBQVEsQ0FBQ0YsVUFBVSxDQUFWQSxVQUFwQixDQUFvQkEsQ0FBRCxDQUFULENBQVYsRUFBK0M7QUFDN0NDLG9CQUFVLEdBQVZBO0FBR0Y7O0FBQUEsd0JBQWdCO0FBQ2RELG9CQUFVLEdBQUdKLGVBQWJJO0FBR0ZGOztBQUFBQSxpQkFBUyxDQUFUQSxVQUFTLENBQVRBO0FBQ0EsZUFBT3RLLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVN1SyxVQURKLFlBRUwsT0FBTUEsVUFIQSxVQUlSLE9BQU1BLFVBSlg7QUFyQkYsYUEwQk87QUFDTCxlQUFRLElBQUdQLFdBQVcsU0FBdEI7QUFFSDtBQS9CMkJOLFlBQTlCLEVBQThCQSxDQUE5QjtBQWtDQSxXQUFPO0FBQ0xQLFFBQUUsRUFBRSxXQUFZLElBQUdVLGtCQURkLFNBQ0QsQ0FEQztBQUFBO0FBQUE7QUFJTGEsZ0JBQVUsRUFBRyxJQUFHSix1QkFKbEI7QUFBTyxLQUFQO0FBUUY7O0FBQUEsU0FBTztBQUNMbkIsTUFBRSxFQUFFLFdBQVksSUFBR1Usa0JBRGQsU0FDRCxDQURDO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhEO0FBeVFBOzs7OztBQUdPLHNCQUVGO0FBQ0gsTUFBSWMsSUFBSSxHQUFSO0FBQ0E7QUFFQSxTQUFRLENBQUMsR0FBRCxTQUFvQjtBQUMxQixRQUFJLENBQUosTUFBVztBQUNUQSxVQUFJLEdBQUpBO0FBQ0F6SyxZQUFNLEdBQUcyRixFQUFFLENBQUMsR0FBWjNGLElBQVcsQ0FBWEE7QUFFRjs7QUFBQTtBQUxGO0FBU0s7O0FBQUEsNkJBQTZCO0FBQ2xDLFFBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUErQnJGLE1BQU0sQ0FBM0M7QUFDQSxTQUFRLEdBQUU0TCxRQUFTLEtBQUlJLFFBQVMsR0FBRStELElBQUksR0FBRyxNQUFILE9BQWdCLEVBQXREO0FBR0s7O0FBQUEsa0JBQWtCO0FBQ3ZCLFFBQU07QUFBQTtBQUFBLE1BQVcvUCxNQUFNLENBQXZCO0FBQ0EsUUFBTXVNLE1BQU0sR0FBR3lELGlCQUFmO0FBQ0EsU0FBT3BQLElBQUksQ0FBSkEsVUFBZTJMLE1BQU0sQ0FBNUIsTUFBTzNMLENBQVA7QUFHSzs7QUFBQSxtQ0FBd0Q7QUFDN0QsU0FBTyw0Q0FFSDNQLFNBQVMsQ0FBVEEsZUFBeUJBLFNBQVMsQ0FBbENBLFFBRko7QUFLSzs7QUFBQSx3QkFBd0M7QUFDN0MsU0FBT29WLEdBQUcsQ0FBSEEsWUFBZ0JBLEdBQUcsQ0FBMUI7QUFHSzs7QUFBQSw2Q0FJa0Q7QUFDdkQsWUFBMkM7QUFBQTs7QUFDekMsMEJBQUk0SixHQUFHLENBQVAsOEJBQUlBLGVBQUosaUJBQW9DO0FBQ2xDLFlBQU0xTSxPQUFPLEdBQUksSUFBRzJNLGNBQWMsS0FBbEM7QUFHQSxZQUFNLFVBQU4sT0FBTSxDQUFOO0FBRUg7QUFDRCxHQVR1RCxDQVN2RDs7O0FBQ0EsUUFBTTdKLEdBQUcsR0FBR2dGLEdBQUcsQ0FBSEEsT0FBWUEsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQUhBLElBQW5DOztBQUVBLE1BQUksQ0FBQzRFLEdBQUcsQ0FBUixpQkFBMEI7QUFDeEIsUUFBSTVFLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFsQixXQUE4QjtBQUM1QjtBQUNBLGFBQU87QUFDTDhFLGlCQUFTLEVBQUUsTUFBTUMsbUJBQW1CLENBQUMvRSxHQUFHLENBQUosV0FBZ0JBLEdBQUcsQ0FEekQsR0FDc0M7QUFEL0IsT0FBUDtBQUlGOztBQUFBO0FBR0Y7O0FBQUEsUUFBTWpqQixLQUFLLEdBQUcsTUFBTTZuQixHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSTVKLEdBQUcsSUFBSWdLLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU05TSxPQUFPLEdBQUksSUFBRzJNLGNBQWMsS0FFaEMsK0RBQThEOW5CLEtBRmhFO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUdGOztBQUFBLFlBQTJDO0FBQ3pDLFFBQUlrWixNQUFNLENBQU5BLDRCQUFtQyxDQUFDK0osR0FBRyxDQUEzQyxLQUFpRDtBQUMvQ3BmLGFBQU8sQ0FBUEEsS0FDRyxHQUFFaWtCLGNBQWMsS0FEbkJqa0I7QUFNSDtBQUVEOztBQUFBO0FBR0s7O0FBQUEsTUFBTXFrQixhQUFhLEdBQUcsd0dBQXRCLFNBQXNCLENBQXRCOzs7QUFlQSxtQ0FBc0Q7QUFDM0QsWUFBNEM7QUFDMUMsUUFBSW5rQixHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDbVYsWUFBTSxDQUFOQSxrQkFBMEIxUyxHQUFELElBQVM7QUFDaEMsWUFBSTBoQixhQUFhLENBQWJBLGlCQUErQixDQUFuQyxHQUF1QztBQUNyQ3JrQixpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRDJDLEdBRHZEM0M7QUFJSDtBQU5EcVY7QUFRSDtBQUVEOztBQUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTWlQLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNcEksRUFBRSxHQUNib0ksRUFBRSxJQUNGLE9BQU9uSSxXQUFXLENBQWxCLFNBREFtSSxjQUVBLE9BQU9uSSxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNEZBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNvSSxRQUFULENBQWtCO0FBQy9CeGtCLFlBRCtCO0FBRS9CeWtCLGNBRitCO0FBRy9CQyxjQUgrQjtBQUkvQkM7QUFKK0IsQ0FBbEIsRUFLWjtBQUNELE1BQUkzakIsS0FBSjs7QUFFQSxNQUFJaEIsVUFBVSxLQUFLLFFBQW5CLEVBQTZCO0FBQzNCZ0IsU0FBSyxHQUFHNGpCLGdHQUFSO0FBQ0Q7O0FBQ0QsTUFBSTVrQixVQUFVLEtBQUssUUFBbkIsRUFBNkI7QUFDM0JnQixTQUFLLEdBQUc2akIsZ0dBQVI7QUFDRDs7QUFFRCxNQUFJN2tCLFVBQVUsS0FBSyxTQUFuQixFQUE4QjtBQUM1QmdCLFNBQUssR0FBRzhqQixpR0FBUjtBQUNEOztBQUNELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERixDQURGLEVBSUUsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLHdFQUFEO0FBQWMsUUFBSSxFQUFFTCxZQUFwQjtBQUFrQyxjQUFVLEVBQUV6a0IsVUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUUsTUFBQyx5RUFBRDtBQUFXLFNBQUssRUFBRSxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0RUFBRDtBQUNFLFNBQUssRUFBRSxNQUFDLHFFQUFEO0FBQVMsYUFBTyxFQUFDLG9DQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFQ7QUFFRSxRQUFJLEVBQ0YsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRTBOLHFFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQywwRUFBRDtBQUNFLFFBQUksRUFBRXFYLG1FQURSO0FBRUUsZUFBVyxFQUFFQyw0RkFGZjtBQUdFLFFBQUksRUFBRU4sWUFBWSxDQUFDcFMsS0FBYixDQUFtQixDQUFuQixFQUFzQnRSLEtBQXRCLENBSFI7QUFJRSxTQUFLLEVBQUVBLEtBSlQ7QUFLRSxjQUFVLEVBQUVoQixVQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWdCRSxNQUFDLDRFQUFEO0FBQ0UsU0FBSyxFQUFFLE1BQUMscUVBQUQ7QUFBUyxhQUFPLEVBQUMsMkJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVDtBQUVFLFFBQUksRUFDRixNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFME4scUVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLEVBd0JFLE1BQUMsMEVBQUQ7QUFDRSxRQUFJLEVBQUVxWCxtRUFEUjtBQUVFLGVBQVcsRUFBRUMsNEZBRmY7QUFHRSxRQUFJLEVBQUVMLGVBQWUsQ0FBQ3JTLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCdFIsS0FBekIsQ0FIUjtBQUlFLFNBQUssRUFBRUEsS0FKVDtBQUtFLGNBQVUsRUFBRWhCLFVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixDQU5GLENBREY7QUF5Q0Q7QUFFTSxlQUFlaWxCLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNO0FBQUU1UjtBQUFGLE1BQVU0UixPQUFoQjtBQUNBLFFBQU12UyxNQUFNLEdBQUcsQ0FDYjtBQUNFSyxZQUFRLEVBQUUsT0FEWjtBQUVFaEIsUUFBSSxFQUFFO0FBRlIsR0FEYSxFQUtiO0FBQ0VnQixZQUFRLEVBQUUsV0FEWjtBQUVFaEIsUUFBSSxFQUFFO0FBRlIsR0FMYSxFQVNiO0FBQ0VnQixZQUFRLEVBQUUsVUFEWjtBQUVFaEIsUUFBSSxFQUFFO0FBRlIsR0FUYSxDQUFmO0FBY0EsUUFBTWhTLFVBQVUsR0FBR3FULHNGQUFhLENBQUNDLEdBQUQsQ0FBaEM7QUFDQSxRQUFNNlIsUUFBUSxHQUFHLE1BQU16Uyw0RUFBVSxDQUFDQyxNQUFELENBQWpDO0FBQ0EsTUFBSThSLFlBQVksR0FBRyxFQUFuQjtBQUFBLE1BQ0VDLFlBQVksR0FBRyxFQURqQjtBQUFBLE1BRUVDLGVBQWUsR0FBRyxFQUZwQjs7QUFJQSxNQUFJUSxRQUFKLEVBQWM7QUFDWkEsWUFBUSxDQUFDcFQsT0FBVCxDQUFpQixDQUFDclEsSUFBRCxFQUFPa0IsR0FBUCxLQUFlO0FBQzlCLFVBQUlsQixJQUFJLENBQUNzUSxJQUFMLEtBQWMsY0FBbEIsRUFBa0M7QUFDaEN5UyxvQkFBWSxHQUFHL2lCLElBQUksQ0FBQ1osSUFBTCxHQUFZLENBQUMsR0FBR1ksSUFBSSxDQUFDWixJQUFULENBQVosR0FBNkIsRUFBNUM7QUFDRCxPQUZELE1BRU8sSUFBSVksSUFBSSxDQUFDc1EsSUFBTCxLQUFjLGNBQWxCLEVBQWtDO0FBQ3ZDMFMsb0JBQVksR0FBR2hqQixJQUFJLENBQUNaLElBQUwsR0FBWSxDQUFDLEdBQUdZLElBQUksQ0FBQ1osSUFBVCxDQUFaLEdBQTZCLEVBQTVDO0FBQ0QsT0FGTSxNQUVBLElBQUlZLElBQUksQ0FBQ3NRLElBQUwsS0FBYyxpQkFBbEIsRUFBcUM7QUFDMUMyUyx1QkFBZSxHQUFHampCLElBQUksQ0FBQ1osSUFBTCxHQUFZLENBQUMsR0FBR1ksSUFBSSxDQUFDWixJQUFULENBQVosR0FBNkIsRUFBL0M7QUFDRDtBQUNGLEtBUkQ7QUFTRDs7QUFDRCxTQUFPO0FBQ0wxRSxTQUFLLEVBQUU7QUFBRTRELGdCQUFGO0FBQWN5a0Isa0JBQWQ7QUFBNEJDLGtCQUE1QjtBQUEwQ0M7QUFBMUM7QUFERixHQUFQO0FBR0QsQzs7Ozs7Ozs7Ozs7O0FDbEhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQywrQ0FBK0MsR0FBRyxDQUF4RDtBQUNBLE1BQU1DLCtDQUErQyxHQUFHLENBQXhEO0FBQ0EsTUFBTUMsZ0RBQWdELEdBQUcsQ0FBekQ7QUFDQSxNQUFNRSwyQ0FBMkMsR0FBRyxDQUN6RCxJQUFJLENBRHFELEVBRXpELElBQUksQ0FGcUQsRUFHekQsSUFBSSxDQUhxRCxFQUl6RCxJQUFJLENBSnFELEVBS3pELElBQUksQ0FMcUQsQ0FBcEQ7QUFPQSxNQUFNSSx1QkFBdUIsR0FBRyxFQUFoQztBQUVBLE1BQU1DLHFDQUFxQyxHQUFHLENBQ25ELElBQUksQ0FEK0MsRUFFbkQsSUFBSSxDQUYrQyxFQUduRCxJQUFJLENBSCtDLEVBSW5ELElBQUksQ0FKK0MsRUFLbkQsSUFBSSxDQUwrQyxDQUE5QztBQU9BLE1BQU1DLGtDQUFrQyxHQUFHLENBQ2hELElBQUksQ0FENEMsRUFFaEQsSUFBSSxDQUY0QyxFQUdoRCxJQUFJLENBSDRDLEVBSWhELElBQUksQ0FKNEMsRUFLaEQsSUFBSSxDQUw0QyxDQUEzQyxDOzs7Ozs7Ozs7Ozs7QUNuQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTUMsU0FBUyxHQUFHLEdBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQXBCLEMsQ0FFUDs7QUFDTyxNQUFNOVgsa0JBQWtCLEdBQUcsVUFBM0I7QUFDQSxNQUFNcVgsZ0JBQWdCLEdBQUcsT0FBekIsQyxDQUVQOztBQUNPLE1BQU1VLGtCQUFrQixHQUFHLFVBQTNCO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsbUJBQXBDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsT0FBaEM7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyxlQUE5QjtBQUNBLE1BQU1DLDBCQUEwQixHQUFHLGtCQUFuQztBQUNBLE1BQU1DLG9CQUFvQixHQUFHLFNBQTdCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcsaUJBQWhDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsVUFBOUI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsWUFBdkIsQyxDQUVQOztBQUNPLE1BQU1DLGlCQUFpQixHQUFHLGVBQTFCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFVBQXJCLEMsQ0FFUDs7QUFDTyxNQUFNQyxVQUFVLEdBQUcsVUFBbkI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxVQUExQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLGtCQUE3QjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLGtCQUE3QixDOzs7Ozs7Ozs7OztBQzNCUCxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8xLTNiZDZkNWY4YmM5ZDJmZWVjYTM5MTdiNmVlZjRlZTczLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8yLTdhYzZlMjk0NGQ0YzllMDEwMTM2ZDY3ZWExZWU3Y2YyLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8zLWI5OTIzZTQ4MjFhYTcxMzY2MDdmMDZmNWQ2MDUwODJkLmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBHcmlkQ2FyZFdyYXBwZXIsIHtcclxuICBJbWFnZVdyYXBwZXIsXHJcbiAgRmF2b3JpdGVJY29uLFxyXG4gIENvbnRlbnRXcmFwcGVyLFxyXG4gIExvY2F0aW9uQXJlYSxcclxuICBUaXRsZUFyZWEsXHJcbiAgUHJpY2VBcmVhLFxyXG4gIFJhdGluZ0FyZWEsXHJcbiAgTWV0YVdyYXBwZXIsXHJcbiAgQnV0dG9uR3JvdXAsXHJcbn0gZnJvbSAnLi9HcmlkQ2FyZC5zdHlsZSc7XHJcblxyXG5jb25zdCBHcmlkQ2FyZCA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGZhdm9yaXRlLFxyXG4gIGxvY2F0aW9uLFxyXG4gIHRpdGxlLFxyXG4gIHByaWNlLFxyXG4gIHJhdGluZyxcclxuICBlZGl0QnRuLFxyXG4gIHZpZXdEZXRhaWxzQnRuLFxyXG4gIGNoaWxkcmVuLFxyXG59KSA9PiB7XHJcbiAgbGV0IGNsYXNzZXMgPSB2aWV3RGV0YWlsc0J0biB8fCBlZGl0QnRuID8gYGhhc19idG4gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWRDYXJkV3JhcHBlciBjbGFzc05hbWU9e2BncmlkX2NhcmQgJHtjbGFzc2VzfWAudHJpbSgpfT5cclxuICAgICAgPEltYWdlV3JhcHBlciBjbGFzc05hbWU9XCJtZWRpYV93cmFwcGVyXCI+e2NoaWxkcmVufTwvSW1hZ2VXcmFwcGVyPlxyXG4gICAgICA8Q29udGVudFdyYXBwZXIgY2xhc3NOYW1lPVwiY29udGVudF93cmFwcGVyXCI+XHJcbiAgICAgICAge2xvY2F0aW9uICYmIDxMb2NhdGlvbkFyZWE+e2xvY2F0aW9ufTwvTG9jYXRpb25BcmVhPn1cclxuICAgICAgICB7dGl0bGUgJiYgPFRpdGxlQXJlYT57dGl0bGV9PC9UaXRsZUFyZWE+fVxyXG4gICAgICAgIDxNZXRhV3JhcHBlciBjbGFzc05hbWU9XCJtZXRhX3dyYXBwZXJcIj5cclxuICAgICAgICAgIHtwcmljZSAmJiA8UHJpY2VBcmVhIGNsYXNzTmFtZT1cInByaWNlXCI+e3ByaWNlfTwvUHJpY2VBcmVhPn1cclxuICAgICAgICAgIHtyYXRpbmcgJiYgPFJhdGluZ0FyZWEgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3JhdGluZ308L1JhdGluZ0FyZWE+fVxyXG4gICAgICAgICAge3ZpZXdEZXRhaWxzQnRuIHx8IGVkaXRCdG4gPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJidXR0b25fZ3JvdXBcIj5cclxuICAgICAgICAgICAgICB7dmlld0RldGFpbHNCdG59XHJcbiAgICAgICAgICAgICAge2VkaXRCdG59XHJcbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L01ldGFXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG5cclxuICAgICAge2Zhdm9yaXRlICYmIDxGYXZvcml0ZUljb24+e2Zhdm9yaXRlfTwvRmF2b3JpdGVJY29uPn1cclxuICAgIDwvR3JpZENhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5HcmlkQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxyXG4gIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJhdGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBlZGl0QnRuOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuICB2aWV3RGV0YWlsc0J0bjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IEdyaWRDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmLmhhc19idG4ge1xyXG4gICAgLmJ1dHRvbl9ncm91cCB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4ICR7dGhlbWVHZXQoJ2JveFNoYWRvdy4yJywgJ3JnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcblxyXG4gICAgLmNvbnRlbnRfd3JhcHBlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5oYXNfYnRuIHtcclxuICAgICAgLm1ldGFfd3JhcHBlciB7XHJcbiAgICAgICAgLnJhdGluZyB7XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuICAgICAgICAuYnV0dG9uX2dyb3VwIHtcclxuICAgICAgICAgIHRvcDogMTlweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICA+IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU4ZWM7XHJcbiAgfVxyXG5cclxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjIlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byBsZWZ0LFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byBsZWZ0LFxyXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLFxyXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IC0zMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gYm90dG9tLFxyXG4gICAgICB0cmFuc3BhcmVudCAwJSxcclxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MgZWFzZTtcclxuICB9XHJcblxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3Qge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4zJywgJyNFOUU4RTgnKX07XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogOHB4O1xyXG4gIHotaW5kZXg6IDk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0aW9uQXJlYSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUFyZWEgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbjogNHB4IDAgNXB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDAgNXB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUHJpY2VBcmVhID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSYXRpbmdBcmVhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdFx0bWFyZ2luLXRvcDogN3B4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdH0gKi9cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZpbGw6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gIH1cclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHR9ICovXHJcbiAgfVxyXG5cclxuICAuYW50LXJhdGUge1xyXG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cclxuICAgIC5hbnQtcmF0ZS1zdGFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWV0YVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gID4gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjEnLCAnIzM5OUM5RicpfTtcclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZFdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJbWFnZUNhcmRXcmFwcGVyLCB7XHJcbiAgQ29udGVudFdyYXBwZXIsXHJcbiAgVGl0bGUsXHJcbiAgTWV0YSxcclxufSBmcm9tICcuL0ltYWdlQ2FyZC5zdHlsZSc7XHJcblxyXG5jb25zdCBJbWFnZUNhcmROZXh0ID0gKHsgY2xhc3NOYW1lLCBpbWFnZVNyYywgdGl0bGUsIGxpbmssIG1ldGEgfSkgPT4ge1xyXG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ2ltYWdlX2NhcmQnXTtcclxuICBjb25zdCBwYXRoTGluayA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnLScpO1xyXG5cclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDYXJkV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cclxuICAgICAgPExpbmtcclxuICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICBwYXRobmFtZTogYCR7bGlua31gLFxyXG4gICAgICAgICAgcXVlcnk6IHsgY291bnRyeTogYCR7cGF0aExpbmt9YCB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cclxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgICAgICB7dGl0bGUgJiYgPFRpdGxlPnt0aXRsZX08L1RpdGxlPn1cclxuXHJcbiAgICAgICAgICAgIHttZXRhICYmIDxNZXRhPnttZXRhfTwvTWV0YT59XHJcbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9JbWFnZUNhcmRXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5JbWFnZUNhcmROZXh0LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGluazogUHJvcFR5cGVzLnN0cmluZyxcclxuICBtZXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuSW1hZ2VDYXJkTmV4dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGluazogJyMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkTmV4dDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuXHJcbmNvbnN0IEltYWdlQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gID4gYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgID4gaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogMjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ldGEgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcmRXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTG9hZGVyV3JhcHBlciBmcm9tICcuL0xvYWRlci5zdHlsZSc7XHJcblxyXG5jb25zdCBMb2FkZXIgPSAoeyBmaWxsLCBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIC8vIGRlZmF1bHQgY2xhc3NOYW1lXHJcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnbG9hZGVyJ107XHJcblxyXG4gIC8vIGFkZCBuZXcgY2xhc3MgdXNpbmcgY2xhc3NOYW1lIHByb3BcclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9hZGVyV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cclxuICAgICAgPHN2ZyBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAwIDBcIj5cclxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjZcIiBjeT1cIjUwXCIgcj1cIjZcIj5cclxuICAgICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICB2YWx1ZXM9XCIwOzE7MFwiXHJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgIGJlZ2luPVwiMC4xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9jaXJjbGU+XHJcbiAgICAgICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBzdHJva2U9XCJub25lXCIgY3g9XCIyNlwiIGN5PVwiNTBcIiByPVwiNlwiPlxyXG4gICAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgIHZhbHVlcz1cIjA7MTswXCJcclxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgYmVnaW49XCIwLjJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2NpcmNsZT5cclxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjQ2XCIgY3k9XCI1MFwiIHI9XCI2XCI+XHJcbiAgICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgdmFsdWVzPVwiMDsxOzBcIlxyXG4gICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICBiZWdpbj1cIjAuM1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvTG9hZGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuTG9hZGVyLnByb3BUeXBlcyA9IHtcclxuICAvKiogQ2xhc3NOYW1lIG9mIHRoZSBMb2FkZXIgY29tcG9uZW50LiAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqIEFkZCBMb2FkZXIgY29sb3IgdXNpbmcgZmlsbCBwcm9wLiAqL1xyXG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5Mb2FkZXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGZpbGw6ICcjMDA4NDg5JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBMb2FkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzIH0gZnJvbSAncmVjb21wb3NlJztcclxuaW1wb3J0IHsgd2l0aFNjcmlwdGpzIH0gZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMnO1xyXG5pbXBvcnQgU3RhbmRhbG9uZVNlYXJjaEJveCBmcm9tICdyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9wbGFjZXMvU3RhbmRhbG9uZVNlYXJjaEJveCc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBTZWFyY2hJbnB1dCA9IGNvbXBvc2UoXHJcbiAgd2l0aFByb3BzKHtcclxuICAgIGdvb2dsZU1hcFVSTDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dPT0dMRV9NQVBfQVBJX0tFWSxcclxuICAgIGxvYWRpbmdFbGVtZW50OiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IC8+LFxyXG4gICAgY29udGFpbmVyRWxlbWVudDogPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0MDBweGAgfX0gLz4sXHJcbiAgfSksXHJcbiAgd2l0aFNjcmlwdGpzXHJcbikoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBnZXRpbnB1dHZhbHVlIH0gPSBwcm9wcztcclxuICBjb25zdCBbbG9jYXRpb25JbnB1dCwgc2V0TG9jYXRpb25JbnB1dF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzZWFyY2hlZExvY2F0aW9uOiAnJyxcclxuICAgIHNlYXJjaGVkUGxhY2VBUElEYXRhOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAnMTMnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYXRpb25JbnB1dCh7XHJcbiAgICAgIHNlYXJjaGVkTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgcmVmcyA9IHVzZVJlZih7fSk7XHJcbiAgY29uc3Qgb25QbGFjZXNDaGFuZ2VkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxhY2VzID0gcmVmcy5jdXJyZW50LmdldFBsYWNlcygpO1xyXG4gICAgc2V0TG9jYXRpb25JbnB1dCh7XHJcbiAgICAgIHNlYXJjaGVkTG9jYXRpb246IHBsYWNlcyAmJiBwbGFjZXNbMF0gJiYgcGxhY2VzWzBdLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICBzZWFyY2hlZFBsYWNlQVBJRGF0YTogcGxhY2VzID8gcGxhY2VzIDogW10sXHJcbiAgICB9KTtcclxuICAgIGdldGlucHV0dmFsdWUoe1xyXG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBwbGFjZXMgJiYgcGxhY2VzWzBdICYmIHBsYWNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgc2VhcmNoZWRQbGFjZUFQSURhdGE6IHBsYWNlcyA/IHBsYWNlcyA6IFtdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT25QcmVzc0VudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09ICcxMycpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRMb2NhdGlvbklucHV0KHsgc2VhcmNoZWRMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgZ2V0aW5wdXR2YWx1ZShsb2NhdGlvbklucHV0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXBfYXV0b2NvbXBsZXRlXCI+XHJcbiAgICAgIDxTdGFuZGFsb25lU2VhcmNoQm94IHJlZj17cmVmc30gb25QbGFjZXNDaGFuZ2VkPXtvblBsYWNlc0NoYW5nZWR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbklucHV0LnNlYXJjaGVkTG9jYXRpb24gfHwgJyd9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCDigJxUaGFpbGFuZCwgQXNpYeKAnVwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVPblByZXNzRW50ZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9TdGFuZGFsb25lU2VhcmNoQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBNYXBBdXRvQ29tcGxldGUgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHVwZGF0ZXZhbHVlIH0gPSBwcm9wcztcclxuICByZXR1cm4gPFNlYXJjaElucHV0IGdldGlucHV0dmFsdWU9e3VwZGF0ZXZhbHVlfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcEF1dG9Db21wbGV0ZTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1hcERhdGFIZWxwZXIoaW5mb1ZhbHVlKSB7XHJcbiAgY29uc3QgdGVtcE1hcE9iaiA9IHt9O1xyXG4gIGNvbnN0IHRlbXBNYXBBcnJheSA9IFtdO1xyXG5cclxuICBpZiAoaW5mb1ZhbHVlICYmIGluZm9WYWx1ZS5sZW5ndGggIT09IDApIHtcclxuICAgIGluZm9WYWx1ZS5tYXAoXHJcbiAgICAgICh7XHJcbiAgICAgICAgcGxhY2VfaWQsXHJcbiAgICAgICAgYWRkcmVzc19jb21wb25lbnRzLFxyXG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgIGdlb21ldHJ5OiB7IGxvY2F0aW9uIH0sXHJcbiAgICAgIH0pID0+IHtcclxuICAgICAgICBsZXQgaWQgPSAnJztcclxuICAgICAgICBsZXQgbGF0ID0gJyc7XHJcbiAgICAgICAgbGV0IGxuZyA9ICcnO1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWRBZGRyZXNzID0gJyc7XHJcbiAgICAgICAgbGV0IGNpdHkgPSAnJztcclxuICAgICAgICBsZXQgc3RhdGVfbG9uZyA9ICcnO1xyXG4gICAgICAgIGxldCBzdGF0ZV9zaG9ydCA9ICcnO1xyXG4gICAgICAgIGxldCB6aXBjb2RlID0gJyc7XHJcbiAgICAgICAgbGV0IGNvdW50cnlfbG9uZyA9ICcnO1xyXG4gICAgICAgIGxldCBjb3VudHJ5X3Nob3J0ID0gJyc7XHJcblxyXG4gICAgICAgIGlkID0gcGxhY2VfaWQ7XHJcbiAgICAgICAgbGF0ID0gbG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgbG5nID0gbG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgZm9ybWF0dGVkQWRkcmVzcyA9IGZvcm1hdHRlZF9hZGRyZXNzO1xyXG4gICAgICAgIGlmIChhZGRyZXNzX2NvbXBvbmVudHMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkcmVzc19jb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgc3dpdGNoIChhZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2xvY2FsaXR5JzpcclxuICAgICAgICAgICAgICAgICAgY2l0eSA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xJzpcclxuICAgICAgICAgICAgICAgICAgc3RhdGVfbG9uZyA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgIHN0YXRlX3Nob3J0ID0gYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY291bnRyeSc6XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlfbG9uZyA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlfc2hvcnQgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XHJcbiAgICAgICAgICAgICAgICAgIHppcGNvZGUgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGVtcE1hcE9iai5pZCA9IGlkO1xyXG4gICAgICAgIHRlbXBNYXBPYmoubGF0ID0gbGF0O1xyXG4gICAgICAgIHRlbXBNYXBPYmoubG5nID0gbG5nO1xyXG4gICAgICAgIHRlbXBNYXBPYmouZm9ybWF0dGVkQWRkcmVzcyA9IGZvcm1hdHRlZEFkZHJlc3M7XHJcbiAgICAgICAgdGVtcE1hcE9iai5jaXR5ID0gY2l0eTtcclxuICAgICAgICB0ZW1wTWFwT2JqLnN0YXRlX3Nob3J0ID0gc3RhdGVfc2hvcnQ7XHJcbiAgICAgICAgdGVtcE1hcE9iai5zdGF0ZV9sb25nID0gc3RhdGVfbG9uZztcclxuICAgICAgICB0ZW1wTWFwT2JqLnppcGNvZGUgPSB6aXBjb2RlO1xyXG4gICAgICAgIHRlbXBNYXBPYmouY291bnRyeV9zaG9ydCA9IGNvdW50cnlfc2hvcnQ7XHJcbiAgICAgICAgdGVtcE1hcE9iai5jb3VudHJ5X2xvbmcgPSBjb3VudHJ5X2xvbmc7XHJcbiAgICAgICAgdGVtcE1hcEFycmF5LnB1c2godGVtcE1hcE9iaik7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBNYXBBcnJheTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0ZW1wTWFwQXJyYXk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgRmlFeHRlcm5hbExpbmsgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nJztcclxuaW1wb3J0IEZhdm91cml0ZSBmcm9tICdjb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlJztcclxuXHJcbmltcG9ydCBHcmlkQ2FyZCBmcm9tICcuLi9HcmlkQ2FyZC9HcmlkQ2FyZCc7XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgbWF4OiAzMDAwLFxyXG4gICAgICBtaW46IDEwMjQsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDQwLFxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogNDY0LFxyXG4gICAgICBtaW46IDAsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7XHJcbiAgICAgIG1heDogMTAyNCxcclxuICAgICAgbWluOiA0NjQsXHJcbiAgICB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcclxuICB0aXRsZSxcclxuICByYXRpbmcsXHJcbiAgbG9jYXRpb24sXHJcbiAgcHJpY2UsXHJcbiAgcmF0aW5nQ291bnQsXHJcbiAgZ2FsbGVyeSxcclxuICBzbHVnLFxyXG4gIGxpbmssXHJcbiAgZGV2aWNlVHlwZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZENhcmRcclxuICAgICAgZmF2b3JpdGU9e1xyXG4gICAgICAgIDxGYXZvdXJpdGVcclxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb249e2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3N9XHJcbiAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgcHJpY2U9e2AkJHtwcmljZX0vTmlnaHQgLSBGcmVlIENhbmNlbGxhdGlvbmB9XHJcbiAgICAgIHJhdGluZz17PFJhdGluZyByYXRpbmc9e3JhdGluZ30gcmF0aW5nQ291bnQ9e3JhdGluZ0NvdW50fSB0eXBlPVwiYnVsa1wiIC8+fVxyXG4gICAgICB2aWV3RGV0YWlsc0J0bj17XHJcbiAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua30vW3NsdWddYH0gYXM9e2Ake2xpbmt9LyR7c2x1Z31gfSBwcmVmZXRjaD17ZmFsc2V9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxGaUV4dGVybmFsTGluayAvPiBWaWV3IERldGFpbHNcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIH1cclxuICAgID5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgc3NyXHJcbiAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICBhcnJvd3NcclxuICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxyXG4gICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cclxuICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxyXG4gICAgICAgIHNsaWRlckNsYXNzPVwiXCJcclxuICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICA+XHJcbiAgICAgICAge2dhbGxlcnkubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXt1cmx9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9HcmlkQ2FyZD5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0JztcclxuaW1wb3J0IEJveCBmcm9tICdjb21wb25lbnRzL1VJL0JveC9Cb3gnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkJztcclxuY29uc3QgTG9hZE1vcmUgPSAoe1xyXG4gIGhhbmRsZUxvYWRNb3JlLFxyXG4gIHNob3dCdXR0b24sXHJcbiAgYnV0dG9uVGV4dCxcclxuICBsb2FkaW5nLFxyXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxyXG4gIGxvYWRNb3JlU3R5bGUsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgISFzaG93QnV0dG9uICYmIChcclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJsb2FkbW9yZV93cmFwcGVyXCIgey4uLmxvYWRNb3JlU3R5bGV9PlxyXG4gICAgICAgIHtsb2FkTW9yZUNvbXBvbmVudCA/IChcclxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxyXG4gICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnTG9hZCBNb3JlJ31cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uR3JpZCh7XHJcbiAgZGF0YSA9IFtdLFxyXG4gIHRvdGFsSXRlbSxcclxuICBsaW1pdCxcclxuICBjb2x1bW5XaWR0aCxcclxuICBwYWdpbmF0aW9uQ29tcG9uZW50LFxyXG4gIGhhbmRsZUxvYWRNb3JlLFxyXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGxvYWRpbmcsXHJcbiAgYnV0dG9uVGV4dCxcclxuICByb3dTdHlsZSxcclxuICBjb2x1bW5TdHlsZSxcclxuICBsb2FkTW9yZVN0eWxlLFxyXG4gIGxpbmssXHJcbn0pIHtcclxuICBjb25zdCBuID0gbGltaXQgPyBOdW1iZXIobGltaXQpIDogMTtcclxuICBjb25zdCBsaW1pdHMgPSBBcnJheShuKS5maWxsKDApO1xyXG5cclxuICBsZXQgc2hvd0J1dHRvbiA9IGRhdGEubGVuZ3RoIDwgdG90YWxJdGVtO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJncmlkX3dyYXBwZXJcIiB7Li4ucm93U3R5bGV9PlxyXG4gICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoXHJcbiAgICAgICAgICA/IGRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgbGluaz17bGlua30gey4uLml0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIHtsb2FkaW5nICYmXHJcbiAgICAgICAgICBsaW1pdHMubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX2NvbHVtblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbldpZHRofVxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICB7Li4uY29sdW1uU3R5bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6IDxUZXh0IGNvbnRlbnQ9XCJMb2FkaW5nIC4uLlwiIC8+fVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIHtzaG93QnV0dG9uICYmIChcclxuICAgICAgICA8TG9hZE1vcmVcclxuICAgICAgICAgIHNob3dCdXR0b249e3Nob3dCdXR0b259XHJcbiAgICAgICAgICBoYW5kbGVMb2FkTW9yZT17aGFuZGxlTG9hZE1vcmV9XHJcbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cclxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50PXtsb2FkTW9yZUNvbXBvbmVudH1cclxuICAgICAgICAgIGxvYWRNb3JlU3R5bGU9e2xvYWRNb3JlU3R5bGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3BhZ2luYXRpb25Db21wb25lbnQgJiYgKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFnaW5hdGlvbl93cmFwcGVyXCI+e3BhZ2luYXRpb25Db21wb25lbnR9PC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5TZWN0aW9uR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgdG90YWxJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5LFxyXG4gIF0pLFxyXG4gIHBhZ2luYXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGhhbmRsZUxvYWRNb3JlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsb2FkTW9yZUNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcm93U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY29sdW1uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgbG9hZE1vcmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcblNlY3Rpb25HcmlkLmRlZmF1bHRQcm9wcyA9IHtcclxuICByb3dTdHlsZToge1xyXG4gICAgZmxleEJveDogdHJ1ZSxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBtcjogWyctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTVweCddLFxyXG4gICAgbWw6IFsnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTE1cHgnXSxcclxuICB9LFxyXG4gIGNvbHVtblN0eWxlOiB7XHJcbiAgICBwcjogWycxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTVweCddLFxyXG4gICAgcGw6IFsnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzE1cHgnXSxcclxuICB9LFxyXG4gIGxvYWRNb3JlU3R5bGU6IHtcclxuICAgIGZsZXhCb3g6IHRydWUsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtdDogJzFyZW0nLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGVFeHRlbmRlZCBmcm9tICdjb21wb25lbnRzL1VJL1RpdGxlL1RpdGxlJztcclxuaW1wb3J0IFNlY3Rpb25UaXRsZVdyYXBwZXIgZnJvbSAnLi9TZWN0aW9uVGl0bGUuc3R5bGUnO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvblRpdGxlV3JhcHBlcj5cclxuICAgICAgPFNlY3Rpb25UaXRsZUV4dGVuZGVkIHsuLi5wcm9wc30gLz5cclxuICAgIDwvU2VjdGlvblRpdGxlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgaDIsXHJcbiAgYSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlV3JhcHBlcjtcclxuIiwiLyoqIFRoaXMgaXMgb3VyIGJhc2UgY29tcG9uZW50IGV2ZXJ5IGNvbXBvbmVudHMgbXVzdCBiZSBleHRlbmQgaXQuICovXHJcbmltcG9ydCB7XHJcbiAgc3BhY2UsXHJcbiAgYm9yZGVycyxcclxuICBib3JkZXJDb2xvcixcclxuICB3aWR0aCxcclxuICBtaW5XaWR0aCxcclxuICBtYXhXaWR0aCxcclxuICBoZWlnaHQsXHJcbiAgbWluSGVpZ2h0LFxyXG4gIG1heEhlaWdodCxcclxuICBkaXNwbGF5LFxyXG4gIGZvbnRTaXplLFxyXG4gIGZsZXgsXHJcbiAgb3JkZXIsXHJcbiAgYWxpZ25TZWxmLFxyXG4gIGNvbG9yLFxyXG4gIGNvbXBvc2UsXHJcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVkID0ga2V5ID0+IHByb3BzID0+IHByb3BzLnRoZW1lW2tleV07XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZSA9IGNvbXBvc2UoXHJcbiAgKCkgPT4gKHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSksXHJcbiAgc3BhY2UsXHJcbiAgd2lkdGgsXHJcbiAgbWluV2lkdGgsXHJcbiAgbWF4V2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIG1pbkhlaWdodCxcclxuICBtYXhIZWlnaHQsXHJcbiAgZm9udFNpemUsXHJcbiAgY29sb3IsXHJcbiAgZmxleCxcclxuICBvcmRlcixcclxuICBhbGlnblNlbGYsXHJcbiAgYm9yZGVycyxcclxuICBib3JkZXJDb2xvcixcclxuICBkaXNwbGF5XHJcbik7XHJcblxyXG5iYXNlLnByb3BUeXBlcyA9IHtcclxuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcclxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXHJcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXHJcbiAgLi4uYm9yZGVyQ29sb3IucHJvcFR5cGVzLFxyXG4gIC4uLndpZHRoLnByb3BUeXBlcyxcclxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxyXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcclxuICAuLi5jb2xvci5wcm9wVHlwZXMsXHJcbiAgLi4uZmxleC5wcm9wVHlwZXMsXHJcbiAgLi4ub3JkZXIucHJvcFR5cGVzLFxyXG4gIC4uLmFsaWduU2VsZi5wcm9wVHlwZXMsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIGZsZXhXcmFwLFxyXG4gIGZsZXhEaXJlY3Rpb24sXHJcbiAgYWxpZ25JdGVtcyxcclxuICBqdXN0aWZ5Q29udGVudCxcclxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XHJcblxyXG5jb25zdCBCb3hXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShcclxuICBiYXNlLFxyXG4gIHRoZW1lZCgnQm94JyksXHJcbiAgcHJvcHMgPT5cclxuICAgIHByb3BzLmZsZXhCb3ggJiZcclxuICAgIGNzcyhcclxuICAgICAgeyBkaXNwbGF5OiAnZmxleCcgfSxcclxuICAgICAgZmxleFdyYXAsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb24sXHJcbiAgICAgIGFsaWduSXRlbXMsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50LFxyXG4gICAgICB0aGVtZWQoJ0ZsZXhCb3gnKVxyXG4gICAgKVxyXG4pO1xyXG5cclxuY29uc3QgQm94ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcclxuICA8Qm94V3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0JveFdyYXBwZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3g7XHJcblxyXG5Cb3gucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXHJcbiAgLyoqIFVzaW5nIHRoaXMgcHJvcHMgd2UgY2FuIGNvbnZlcnQgb3VyIEJveCBDb21wb25lbnQgdG8gYSBGbGV4IENvbnRhaW5lciBvciBDb21wb25lbnQgKi9cclxuICBmbGV4Qm94OiBQcm9wVHlwZXMuYm9vbCxcclxuICBhczogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgICdkaXYnLFxyXG4gICAgJ2FydGljbGUnLFxyXG4gICAgJ3NlY3Rpb24nLFxyXG4gICAgJ2FkZHJlc3MnLFxyXG4gICAgJ2hlYWRlcicsXHJcbiAgICAnZm9vdGVyJyxcclxuICAgICduYXYnLFxyXG4gICAgJ21haW4nLFxyXG4gIF0pLFxyXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGZvbnRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgZmxleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGFsaWduU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgYm9yZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBib3JkZXJUb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGJvcmRlclJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBib3JkZXJCb3R0b206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGJvcmRlckxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGJvcmRlckNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxufTtcclxuXHJcbkJveC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYXM6ICdkaXYnLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgQ29udGFpbmVyV3JhcHBlciBmcm9tICcuL0NvbnRhaW5lci5zdHlsZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBmdWxsV2lkdGgsIG5vR3V0dGVyLCBmbHVpZCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXJXcmFwcGVyXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBmdWxsV2lkdGg9e2Z1bGxXaWR0aH1cclxuICAgICAgbm9HdXR0ZXI9e25vR3V0dGVyfVxyXG4gICAgICBmbHVpZD17Zmx1aWR9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcclxuICBub0d1dHRlcjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgcHJvcHMuZnVsbFdpZHRoICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGB9O1xyXG4gICR7KHByb3BzKSA9PlxyXG4gICAgKHByb3BzLm5vR3V0dGVyICYmXHJcbiAgICAgIGNzc2BcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgYCkgfHxcclxuICAgIGNzc2BcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICBgfTtcclxuXHJcbiAgJHsocHJvcHMpID0+XHJcbiAgICBwcm9wcy5mbHVpZCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDE5MjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNzVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xyXG4gICAgICB9XHJcbiAgICBgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgbWF4LXdpZHRoOiA5NzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJXcmFwcGVyO1xyXG4iLCJpbXBvcnQgJ3JlYWN0LWRhdGVzL2luaXRpYWxpemUnO1xyXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgfSBmcm9tICcuL1JlYWN0RGF0ZXMuc3R5bGUnO1xyXG4vKlxyXG4gKiBGb3IgTG9jYWxpemF0aW9uIGVuYWJsZSB0aGlzIGNvZGUgW2V4YW1wbGUgOiBGcmVuY2ggbGFuZ3VhZ2UgYXMgXCJmclwiXVxyXG4gKi9cclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vLyBpbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xyXG5cclxuY2xhc3MgRGF0ZVJhbmdlUGlja2VyQm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yID1cclxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcclxuICAgICAgICA/IHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcclxuICAgICAgICA6ICcvJztcclxuICAgIGNvbnN0IGRhdGVGb3JtYXQgPVxyXG4gICAgICB0aGlzLnByb3BzLml0ZW0gJiYgdGhpcy5wcm9wcy5pdGVtLmZvcm1hdFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5pdGVtLmZvcm1hdFxyXG4gICAgICAgIDogJ2xsbGwnO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZm9jdXNlZElucHV0OiBudWxsLFxyXG4gICAgICBzdGFydERhdGU6IHRoaXMucHJvcHMuc3RhcnREYXRlID8gdGhpcy5wcm9wcy5zdGFydERhdGUgOiBudWxsLFxyXG4gICAgICBlbmREYXRlOiB0aGlzLnByb3BzLmVuZERhdGUgPyB0aGlzLnByb3BzLmVuZERhdGUgOiBudWxsLFxyXG4gICAgICBkYXRlRm9ybWF0LFxyXG4gICAgICBzZXBhcmF0b3IsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5vbkRhdGVDaGFuZ2VGdW5jID0gdGhpcy5vbkRhdGVDaGFuZ2VGdW5jLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jID0gdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYy5iaW5kKHRoaXMpO1xyXG4gICAgLypcclxuICAgICAqIEZvciBMb2NhbGl6YXRpb24gZW5hYmxlIHRoaXMgY29kZSBbZXhhbXBsZSA6IEZyZW5jaCBsYW5ndWFnZSBhcyBcImZyXCJdXHJcbiAgICAgKi9cclxuICAgIC8vIG1vbWVudC5sb2NhbGUoJ2ZyJyk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVDaGFuZ2VGdW5jID0gKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZUZvcm1hdCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XHJcbiAgICBpZiAoc3RhcnREYXRlICE9PSBudWxsICYmIGVuZERhdGUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2hEYXRhKHtcclxuICAgICAgICBzZXRTdGFydERhdGU6IHN0YXJ0RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXHJcbiAgICAgICAgc2V0RW5kRGF0ZTogZW5kRGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uRm9jdXNDaGFuZ2VGdW5jID0gKGZvY3VzZWRJbnB1dCkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5wdXQgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBmb2N1c2VkSW5wdXQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIC8vIERhdGVSYW5nZVBpY2tlckJveCBwcm9wcyBsaXN0XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgc3RhcnREYXRlSWQsXHJcbiAgICAgIGVuZERhdGVJZCxcclxuICAgICAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgc2hvd0NsZWFyRGF0ZXMsXHJcbiAgICAgIGlzUlRMLFxyXG4gICAgICBvcmllbnRhdGlvbixcclxuICAgICAgYW5jaG9yRGlyZWN0aW9uLFxyXG4gICAgICB3aXRoUG9ydGFsLFxyXG4gICAgICB3aXRoRnVsbFNjcmVlblBvcnRhbCxcclxuICAgICAgc21hbGwsXHJcbiAgICAgIGJsb2NrLFxyXG4gICAgICBudW1iZXJPZk1vbnRocyxcclxuICAgICAgcmVndWxhcixcclxuICAgICAgbm9Cb3JkZXIsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheSAqKioqKioqKioqKioqKlxyXG4gICAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZGF0ZV9waWNrZXInXTtcclxuICAgIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nICoqKioqKioqKioqKioqXHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYWN0LURhdGVzIERhdGVSYW5nZVBpY2tlciBQcm9wcyBMaXN0XHJcbiAgICBjb25zdCBkZWZhdWx0Q2FsZW5kZXJQcm9wcyA9IHtcclxuICAgICAgc3RhcnREYXRlSWQ6IHN0YXJ0RGF0ZUlkID8gc3RhcnREYXRlSWQgOiAnc3RhcnRfdW5pcXVlX2lkJyxcclxuICAgICAgZW5kRGF0ZUlkOiBlbmREYXRlSWQgPyBlbmREYXRlSWQgOiAnZW5kX2RhdGVfdW5pcXVlX2lkJyxcclxuICAgICAgc3RhcnREYXRlLFxyXG4gICAgICBlbmREYXRlLFxyXG4gICAgICBmb2N1c2VkSW5wdXQsXHJcbiAgICAgIG9uRm9jdXNDaGFuZ2U6IHRoaXMub25Gb2N1c0NoYW5nZUZ1bmMsXHJcbiAgICAgIG9uRGF0ZXNDaGFuZ2U6IHRoaXMub25EYXRlQ2hhbmdlRnVuYyxcclxuICAgICAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxyXG4gICAgICBkaXNhYmxlZCxcclxuICAgICAgaXNSVEwsXHJcbiAgICAgIHNob3dDbGVhckRhdGVzOiBzaG93Q2xlYXJEYXRlcyA/IHNob3dDbGVhckRhdGVzIDogZmFsc2UsXHJcbiAgICAgIG9yaWVudGF0aW9uLFxyXG4gICAgICBhbmNob3JEaXJlY3Rpb24sXHJcbiAgICAgIHdpdGhQb3J0YWwsXHJcbiAgICAgIHdpdGhGdWxsU2NyZWVuUG9ydGFsLFxyXG4gICAgICBzbWFsbCxcclxuICAgICAgbnVtYmVyT2ZNb250aHM6IG51bWJlck9mTW9udGhzID8gbnVtYmVyT2ZNb250aHMgOiAyLFxyXG4gICAgICBibG9jayxcclxuICAgICAgcmVndWxhcixcclxuICAgICAgbm9Cb3JkZXIsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdERhdGVzU3R5bGVXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxyXG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgey4uLmRlZmF1bHRDYWxlbmRlclByb3BzfSAvPlxyXG4gICAgICA8L1JlYWN0RGF0ZXNTdHlsZVdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRGF0ZVJhbmdlUGlja2VyQm94LnByb3BUeXBlcyA9IHtcclxuICAvKiogc3RhcnREYXRlSWQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgc3RhcnREYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAvKiogZW5kRGF0ZUlkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGVuZERhdGVJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLCAvL1xyXG4gIC8qKiBzdGFydERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBlbmREYXRlUGxhY2Vob2xkZXJUZXh0IG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGVuZERhdGVQbGFjZWhvbGRlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqIGRpc2FibGVkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnU1RBUlRfREFURScsICdFTkRfREFURSddKSxcclxuICBdKSxcclxuXHJcbiAgLyoqIHNob3dDbGVhckRhdGVzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIHNob3dDbGVhckRhdGVzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogaXNSVEwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgaXNSVEw6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKiBvcmllbnRhdGlvbiBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcclxuICAvKiogYW5jaG9yRGlyZWN0aW9uIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIGFuY2hvckRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcclxuICAvKiogd2l0aFBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICB3aXRoUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogd2l0aEZ1bGxTY3JlZW5Qb3J0YWwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWw6IFByb3BUeXBlcy5ib29sLFxyXG4gIC8qKiBzbWFsbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBzbWFsbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIG51bWJlck9mTW9udGhzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIG51bWJlck9mTW9udGhzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIC8qKiBibG9jayBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cclxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIHJlZ3VsYXIgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXHJcbiAgcmVndWxhcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLyoqIG5vQm9yZGVyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xyXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcclxuICAvKiogdXBkYXRlU2VhcmNoRGF0YSBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgdG8gc2VuZCBjb21wb25lbnQgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50ICovXHJcbiAgdXBkYXRlU2VhcmNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRlUmFuZ2VQaWNrZXJCb3g7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvcnRsJztcclxuXHJcbmNvbnN0IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJlYWN0RGF0ZVdyYXBwZXIgPSBDb21wb25lbnROYW1lID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcclxuICAuaXNvUmVhY3REYXRlIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLkRhdGVJbnB1dF9fZGlzcGxheS10ZXh0LS1mb2N1c2VkIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZC1zdGFydCxcclxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtZW5kLFxyXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5DYWxlbmRhckRheS0taG92ZXJlZC1zcGFuLFxyXG4gICAgLkNhbGVuZGFyRGF5LS1hZnRlci1ob3ZlcmVkLXN0YXJ0IHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLkRheVBpY2tlcktleWJvYXJkU2hvcnRjdXRzX19zaG93LS1ib3R0b20tcmlnaHQge1xyXG4gICAgICBib3JkZXItdG9wOiAyNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5EYXlQaWNrZXItLWhvcml6b250YWwge1xyXG4gICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbi0taG9yaXpvbnRhbCB7XHJcbiAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fX3ByZXYsXHJcbiAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fX25leHQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7cHJvcHMgPT5cclxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9fYXJyb3cge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiAke3Byb3BzID0+XHJcbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcclxuICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT5cclxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVhY3REYXRlc1dyYXBwZXIgPSBXaXRoRGlyZWN0aW9uKFJlYWN0RGF0ZVdyYXBwZXIpO1xyXG5cclxuZXhwb3J0IHsgUmVhY3REYXRlc1N0eWxlV3JhcHBlciwgUmVhY3REYXRlc1dyYXBwZXIgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICcuL3VzZVRvZ2dsZSc7XHJcbmltcG9ydCBGYXZvcml0ZVdyYXBwZXIgZnJvbSAnLi9GYXZvcml0ZS5zdHlsZSc7XHJcblxyXG5jb25zdCBGYXZvcml0ZSA9ICh7IGNsYXNzTmFtZSwgY29udGVudCwgb25DbGljayB9KSA9PiB7XHJcbiAgLy8gdXNlIHRvZ2dsZSBob29rc1xyXG4gIGNvbnN0IFt0b2dnbGVWYWx1ZSwgdG9nZ2xlSGFuZGxlcl0gPSB1c2VUb2dnbGUoZmFsc2UpO1xyXG5cclxuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxyXG4gIGNvbnN0IGFkZEFsbENsYXNzID0gWydmYXZvcml0ZSddO1xyXG5cclxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzLnB1c2goY2xhc3NOYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRlbENsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgdG9nZ2xlSGFuZGxlcigpO1xyXG4gICAgb25DbGljayghdG9nZ2xlVmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmF2b3JpdGVXcmFwcGVyXHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRlbENsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzLmpvaW4oJyAnKX0gJHt0b2dnbGVWYWx1ZSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgID5cclxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOC42NCAxOC4yMzJcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk02MC4xNiw1NmgtLjA0YTQuNTUxLDQuNTUxLDAsMCwwLTMuOCwyLjA4QTQuNTUxLDQuNTUxLDAsMCwwLDUyLjUyLDU2aC0uMDRBNC41MjIsNC41MjIsMCwwLDAsNDgsNjAuNTJhOS43MzcsOS43MzcsMCwwLDAsMS45MTIsNS4zMDhBMzMuNTA2LDMzLjUwNiwwLDAsMCw1Ni4zMiw3MmEzMy41MDYsMzMuNTA2LDAsMCwwLDYuNDA4LTYuMTcyQTkuNzM3LDkuNzM3LDAsMCwwLDY0LjY0LDYwLjUyLDQuNTIyLDQuNTIyLDAsMCwwLDYwLjE2LDU2WlwiXHJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3IC01NSlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8c3Bhbj57Y29udGVudH08L3NwYW4+XHJcbiAgICA8L0Zhdm9yaXRlV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuRmF2b3JpdGUucHJvcFR5cGVzID0ge1xyXG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIEZhdm9yaXRlICovXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8qKiBjb250ZW50IG9mIHRoZSBGYXZvcml0ZSAqL1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cclxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxyXG4gICAqL1xyXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRmF2b3JpdGUuZGVmYXVsdFByb3BzID0ge1xyXG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGU7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcclxuY29uc3QgYWRkQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZW1vdmVBbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBZGRBbmltYXRpb24gPSBjc3NgXHJcbiAgYW5pbWF0aW9uOiAke2FkZEFuaW1hdGlvbn0gMC40cyBjdWJpYy1iZXppZXIoMC4zOCwgMC43LCAwLjYsIDAuMjkpO1xyXG5gO1xyXG5cclxuY29uc3QgUmVtb3ZlQW5pbWF0aW9uID0gY3NzYFxyXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVBbmltYXRpb259IDAuNTVzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XHJcbmA7XHJcblxyXG5jb25zdCBGYXZvcml0ZVdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgJHtSZW1vdmVBbmltYXRpb259XHJcbiAgICBwYXRoIHtcclxuICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xyXG4gICAgICBzdHJva2U6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGZpbGwgMXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICR7QWRkQW5pbWF0aW9ufTtcclxuICAgICAgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNCcsICcjRkM1QzYzJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB1c2VUb2dnbGUgPSBpbml0aWFsVmFsdWUgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcclxuICBjb25zdCB0b2dnbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmFsdWUodmFsdWUgPT4gIXZhbHVlKSwgW10pO1xyXG4gIHJldHVybiBbdmFsdWUsIHRvZ2dsZXJdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEdsaWRlIGZyb20gJ0BnbGlkZWpzL2dsaWRlJztcclxuaW1wb3J0IEdsaWRlV3JhcHBlciwge1xyXG4gIEdsaWRlU2xpZGVXcmFwcGVyLFxyXG4gIEJ1dHRvbkNvbnRyb2xXcmFwcGVyLFxyXG4gIEJ1dHRvbldyYXBwZXIsXHJcbiAgQnVsbGV0Q29udHJvbFdyYXBwZXIsXHJcbiAgQnVsbGV0QnV0dG9uLFxyXG4gIERlZmF1bHRCdG4sXHJcbn0gZnJvbSAnLi9HbGlkZUNhcm91c2VsLnN0eWxlJztcclxuXHJcbmNvbnN0IEdsaWRlQ2Fyb3VzZWwgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICBvcHRpb25zLFxyXG4gIGNvbnRyb2xzLFxyXG4gIHByZXZCdXR0b24sXHJcbiAgbmV4dEJ1dHRvbixcclxuICBidWxsZXRzLFxyXG4gIG51bWJlck9mQnVsbGV0cyxcclxuICBjYXJvdXNlbFNlbGVjdG9yLFxyXG59KSA9PiB7XHJcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXkuXHJcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZ2xpZGUnXTtcclxuXHJcbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmcuXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG5cclxuICAvLyBudW1iZXIgb2YgYnVsbGV0cyBsb29wLlxyXG4gIGNvbnN0IHRvdGFsQnVsbGV0cyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpKyspIHtcclxuICAgIHRvdGFsQnVsbGV0cy5wdXNoKGkpO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9hZCBnbGlkZS5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2xpZGUgPSBuZXcgR2xpZGUoXHJcbiAgICAgIGNhcm91c2VsU2VsZWN0b3IgPyBgIyR7Y2Fyb3VzZWxTZWxlY3Rvcn1gIDogJyNnbGlkZScsXHJcbiAgICAgIHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgZ2xpZGUubW91bnQoKTtcclxuICB9LCBbY2Fyb3VzZWxTZWxlY3Rvciwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsaWRlV3JhcHBlclxyXG4gICAgICBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfVxyXG4gICAgICBpZD17Y2Fyb3VzZWxTZWxlY3RvciB8fCAnZ2xpZGUnfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsaWRlX190cmFja1wiIGRhdGEtZ2xpZGUtZWw9XCJ0cmFja1wiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJnbGlkZV9fc2xpZGVzXCI+e2NoaWxkcmVufTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qKiBpZiBjb250cm9scyBwcm9wIHRydWUgdGhlbiBzaG93IGNvbnRyb2xzIG5hdi4gKi99XHJcbiAgICAgIHtjb250cm9scyAmJiAoXHJcbiAgICAgICAgPEJ1dHRvbkNvbnRyb2xXcmFwcGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fY29udHJvbHNcIlxyXG4gICAgICAgICAgZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnV0dG9uV3JhcHBlciBjbGFzc05hbWU9XCJnbGlkZV9fcHJldi0tYXJlYVwiIGRhdGEtZ2xpZGUtZGlyPVwiPFwiPlxyXG4gICAgICAgICAgICB7cHJldkJ1dHRvbiA/IHByZXZCdXR0b24gOiA8RGVmYXVsdEJ0bj5QcmV2PC9EZWZhdWx0QnRuPn1cclxuICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgICAgIDxCdXR0b25XcmFwcGVyIGNsYXNzTmFtZT1cImdsaWRlX19uZXh0LS1hcmVhXCIgZGF0YS1nbGlkZS1kaXI9XCI+XCI+XHJcbiAgICAgICAgICAgIHtuZXh0QnV0dG9uID8gbmV4dEJ1dHRvbiA6IDxEZWZhdWx0QnRuPk5leHQ8L0RlZmF1bHRCdG4+fVxyXG4gICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDwvQnV0dG9uQ29udHJvbFdyYXBwZXI+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyoqIGlmIGJ1bGxldHMgcHJvcCB0cnVlIHRoZW4gc2hvdyBidWxsZXRzIG5hdi4gKi99XHJcbiAgICAgIHtidWxsZXRzICYmIChcclxuICAgICAgICA8QnVsbGV0Q29udHJvbFdyYXBwZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdsaWRlX19idWxsZXRzXCJcclxuICAgICAgICAgIGRhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1tuYXZdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHt0b3RhbEJ1bGxldHMubWFwKChpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCdWxsZXRCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fYnVsbGV0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZ2xpZGUtZGlyPXtgPSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgPC9CdWxsZXRDb250cm9sV3JhcHBlcj5cclxuICAgICAgKX1cclxuICAgIDwvR2xpZGVXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBHbGlkZSBTbGlkZSB3cmFwcGVyIGNvbXBvbmVudC5cclxuY29uc3QgR2xpZGVTbGlkZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdsaWRlU2xpZGVXcmFwcGVyIGNsYXNzTmFtZT1cImdsaWRlX19zbGlkZVwiPntjaGlsZHJlbn08L0dsaWRlU2xpZGVXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5HbGlkZUNhcm91c2VsLnByb3BUeXBlcyA9IHtcclxuICAvKiogY2xhc3NOYW1lIG9mIHRoZSBHbGlkZUNhcm91c2VsLiAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuXHJcbiAgLyoqIENoaWxkcmVuLiAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcclxuXHJcbiAgLyoqIFlvdSBjYW4gYWRkIHlvdXIgY3VzdG9tIGdsaWQgb3B0aW9ucyB1c2luZyB0aGlzIHByb3AuICovXHJcbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcclxuXHJcbiAgLyoqIEhpZGUgfHwgc2hvdyBjb250cm9scyBuYXYuICovXHJcbiAgY29udHJvbHM6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKiogSGlkZSB8fCBzaG93IGJ1bGxldHMgbmF2LiAqL1xyXG4gIGJ1bGxldHM6IFByb3BUeXBlcy5ib29sLFxyXG5cclxuICAvKiogVGhpcyBwcm9wIG9ubHkgdGFrZSB5b3VyIHNsaWRlciAvIGNhcm91c2VsIC8gdGVzdGltb25pYWxzIGRhdGEgbGVuZ3RoLiBbTm90ZTogaWYgXCJidWxsZXRzXCIgcHJvcHMgaXMgc2V0IFRSVUUsIHRoZW4gXCJudW1iZXJPZkJ1bGxldHNcIiBtdXN0IGJlIGFkZGVkXSAqL1xyXG4gIG51bWJlck9mQnVsbGV0czogUHJvcFR5cGVzLm51bWJlcixcclxuXHJcbiAgLyoqIFNldCBwcmV2aW91cyBidXR0b24gZm9yIGdsaWRlIGNhcm91c2VsLiAqL1xyXG4gIHByZXZCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcclxuXHJcbiAgLyoqIFNldCBuZXh0IGJ1dHRvbiBmb3IgZ2xpZGUgY2Fyb3VzZWwuICovXHJcbiAgbmV4dEJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxyXG59O1xyXG5cclxuR2xpZGVTbGlkZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIENoaWxkcmVuLiAqL1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcclxufTtcclxuXHJcbi8vIEdsaWRlQ2Fyb3VzZWwgZGVmYXVsdCBwcm9wcy5cclxuR2xpZGVDYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY29udHJvbHM6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgeyBHbGlkZVNsaWRlIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGlkZUNhcm91c2VsO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbi8vIEdsaWRlIHdyYXBwZXIgc3R5bGVcclxuY29uc3QgR2xpZGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAuZ2xpZGVfX3NsaWRlcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICAuZ2xpZGVfX2NvbnRyb2xzIHtcclxuICAgIC5nbGlkZV9fcHJldi0tYXJlYSxcclxuICAgIC5nbGlkZV9fbmV4dC0tYXJlYSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG4vLyBHbGlkZSBzbGlkZSB3cmFwcGVyIHN0eWxlXHJcbmNvbnN0IEdsaWRlU2xpZGVXcmFwcGVyID0gc3R5bGVkLmxpYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbi8vIEJ1dHRvbiB3cmFwcGVyIHN0eWxlXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuXHJcbi8vIEJ1dHRvbkNvbnRyb2xXcmFwcGVyIHN0eWxlXHJcbmNvbnN0IEJ1dHRvbkNvbnRyb2xXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuLy8gQnVsbGV0Q29udHJvbFdyYXBwZXIgc3R5bGVcclxuY29uc3QgQnVsbGV0Q29udHJvbFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG4vLyBCdWxsZXRCdXR0b24gc3R5bGVcclxuY29uc3QgQnVsbGV0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbjogNHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJi5nbGlkZV9fYnVsbGV0LS1hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OTc5MTtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBkZWZhdWx0IGJ1dHRvbiBzdHlsZVxyXG5jb25zdCBEZWZhdWx0QnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAxMHB4IDNweDtcclxuYDtcclxuXHJcbmV4cG9ydCB7XHJcbiAgR2xpZGVTbGlkZVdyYXBwZXIsXHJcbiAgQnV0dG9uQ29udHJvbFdyYXBwZXIsXHJcbiAgQnV0dG9uV3JhcHBlcixcclxuICBCdWxsZXRDb250cm9sV3JhcHBlcixcclxuICBCdWxsZXRCdXR0b24sXHJcbiAgRGVmYXVsdEJ0bixcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgR2xpZGVXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRXZWlnaHQsXHJcbiAgdGV4dEFsaWduLFxyXG4gIGxpbmVIZWlnaHQsXHJcbiAgbGV0dGVyU3BhY2luZyxcclxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XHJcblxyXG5jb25zdCBIZWFkaW5nV3JhcHBlciA9IHN0eWxlZCgncCcpKFxyXG4gIGJhc2UsXHJcbiAgZm9udEZhbWlseSxcclxuICBmb250V2VpZ2h0LFxyXG4gIHRleHRBbGlnbixcclxuICBsaW5lSGVpZ2h0LFxyXG4gIGxldHRlclNwYWNpbmcsXHJcbiAgdGhlbWVkKCdIZWFkaW5nJylcclxuKTtcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEhlYWRpbmdXcmFwcGVyIHsuLi5wcm9wc30+e2NvbnRlbnR9PC9IZWFkaW5nV3JhcHBlcj5cclxuKTtcclxuXHJcbkhlYWRpbmcucHJvcFR5cGVzID0ge1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pLFxyXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGZvbnRXZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgbGV0dGVyU3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXHJcbn07XHJcblxyXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhczogJ2gyJyxcclxuICBtdDogMCxcclxuICBtYjogMCxcclxuICBmb250V2VpZ2h0OiA3MDAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBQbHVzT3V0bGluZWQsIE1pbnVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCBJbnB1dEluY0RlY1dyYXBwZXIgZnJvbSAnLi9JbnB1dEluY0RlYy5zdHlsZSc7XHJcblxyXG5jb25zdCBJbnB1dEluY0RlYyA9ICh7IGNsYXNzTmFtZSwgaW5jcmVtZW50LCBkZWNyZW1lbnQsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydxdWFudGl0eSddO1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dEluY0RlY1dyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGRlY0J0blwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtkZWNyZW1lbnR9PlxyXG4gICAgICAgIDxNaW51c091dGxpbmVkIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8SW5wdXQgY2xhc3NOYW1lPVwicW50LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHsuLi5wcm9wc30gLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5jQnRuXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2luY3JlbWVudH0+XHJcbiAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvSW5wdXRJbmNEZWNXcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlYztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBJbnB1dEluY0RlY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDRweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTRweCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAmLmRlY0J0biB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAmLmluY0J0biB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlY1dyYXBwZXI7XHJcbiIsIi8vIFRoZSBwb3J0YWwgZWxlbWVudCBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUgYWZ0ZXJcclxuLy8gdGhlIE1vZGFsJ3MgY2hpbGRyZW4gYXJlIG1vdW50ZWQsIG1lYW5pbmcgdGhhdCBjaGlsZHJlblxyXG4vLyB3aWxsIGJlIG1vdW50ZWQgb24gYSBkZXRhY2hlZCBET00gbm9kZS4gSWYgYSBjaGlsZFxyXG4vLyBjb21wb25lbnQgcmVxdWlyZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSB0cmVlXHJcbi8vIGltbWVkaWF0ZWx5IHdoZW4gbW91bnRlZCwgZm9yIGV4YW1wbGUgdG8gbWVhc3VyZSBhXHJcbi8vIERPTSBub2RlLCBvciB1c2VzICdhdXRvRm9jdXMnIGluIGEgZGVzY2VuZGFudCwgYWRkXHJcbi8vIHN0YXRlIHRvIE1vZGFsIGFuZCBvbmx5IHJlbmRlciB0aGUgY2hpbGRyZW4gd2hlbiBNb2RhbFxyXG4vLyBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUuXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRhbCh7IGNoaWxkcmVuLCByZW5kZXJlcklkIH0pIHtcclxuICBjb25zdCBbY29udGFpbmVyRWxdID0gdXNlU3RhdGUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgcG9ydGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbmRlcmVySWQpIHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICBwb3J0YWxSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsKTtcclxuICAgIHJldHVybiAoKSA9PiBwb3J0YWxSb290LnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsKTtcclxuICB9KTtcclxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBjb250YWluZXJFbCk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgSW9Jb3NTdGFyLCBJb0lvc1N0YXJPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5cclxuY29uc3QgUmF0aW5nID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcmF0aW5nLCByYXRpbmdDb3VudCwgdHlwZSwgcmF0aW5nRmllbGROYW1lIH0gPSBwcm9wcztcclxuICBsZXQgaSwgZmxvb3JWYWx1ZTtcclxuICBsZXQgcmF0aW5nVmlldyA9IFtdO1xyXG4gIGlmIChyYXRpbmcgJiYgcmF0aW5nICE9PSAwKSB7XHJcbiAgICBmbG9vclZhbHVlID0gTWF0aC5mbG9vcihyYXRpbmcpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICBpZiAoaSA8IGZsb29yVmFsdWUpIHtcclxuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3RhciBrZXk9e2l9IC8+KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3Rhck91dGxpbmUga2V5PXtpfSAvPik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGxpc3RpbmdDb25kaXRpb247XHJcbiAgaWYgKHJhdGluZyAmJiByYXRpbmcgPT09IDUpIHtcclxuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQXdlc29tZSc7XHJcbiAgfSBlbHNlIGlmICg0IDw9IHJhdGluZyAmJiByYXRpbmcgPCA1KSB7XHJcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0dvb2QnO1xyXG4gIH0gZWxzZSBpZiAoMyA8PSByYXRpbmcgJiYgcmF0aW5nIDwgNCkge1xyXG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBdmVyYWdlJztcclxuICB9IGVsc2UgaWYgKDIgPD0gcmF0aW5nICYmIHJhdGluZyA8IDMpIHtcclxuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQmFkJztcclxuICB9IGVsc2UgaWYgKHJhdGluZyA+PSAxKSB7XHJcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ1RlcnJpYmxlJztcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNob3dSYXRpbmdDb3VudDtcclxuICBpZiAocmF0aW5nQ291bnQpIHtcclxuICAgIHNob3dSYXRpbmdDb3VudCA9IGAoYCArIHJhdGluZ0NvdW50ICsgYClgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaG93UmF0aW5nQ291bnQgPSAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dHlwZSAmJiB0eXBlID09PSAnYnVsaycgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxzcGFuPntyYXRpbmdWaWV3fTwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtgICR7bGlzdGluZ0NvbmRpdGlvbn1gfSB7YCR7c2hvd1JhdGluZ0NvdW50fWB9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPHNwYW4+e3JhdGluZ0ZpZWxkTmFtZX08L3NwYW4+IHtyYXRpbmdWaWV3fVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblJhdGluZy5wcm9wVHlwZXMgPSB7XHJcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHJhdGluZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcclxuICByYXRpbmdGaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1xyXG4gIGZvbnRGYW1pbHksXHJcbiAgZm9udFdlaWdodCxcclxuICB0ZXh0QWxpZ24sXHJcbiAgbGluZUhlaWdodCxcclxuICBsZXR0ZXJTcGFjaW5nLFxyXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcclxuXHJcbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXHJcbiAgYmFzZSxcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRXZWlnaHQsXHJcbiAgdGV4dEFsaWduLFxyXG4gIGxpbmVIZWlnaHQsXHJcbiAgbGV0dGVyU3BhY2luZyxcclxuICB0aGVtZWQoJ1RleHQnKVxyXG4pO1xyXG5cclxuY29uc3QgVGV4dCA9ICh7IGNvbnRlbnQsIC4uLnByb3BzIH0pID0+IChcclxuICA8VGV4dFdyYXBwZXIgey4uLnByb3BzfT57Y29udGVudH08L1RleHRXcmFwcGVyPlxyXG4pO1xyXG5cclxuVGV4dC5wcm9wVHlwZXMgPSB7XHJcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhczogUHJvcFR5cGVzLnN0cmluZyxcclxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxyXG4gICAgKSxcclxuICBdKSxcclxuICB0ZXh0QWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIC4uLmJhc2UucHJvcFR5cGVzLFxyXG59O1xyXG5cclxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgYXM6ICdwJyxcclxuICBtOiAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFNlY3Rpb25UaXRsZVdyYXBwZXIsIHsgVGl0bGVXcmFwcGVyLCBMaW5rV3JhcHBlciB9IGZyb20gJy4vVGl0bGUuc3R5bGUnO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlID0gKHsgY2xhc3NOYW1lLCB0aXRsZSwgbGluaywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XHJcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnc2VjdGlvbl90aXRsZSddO1xyXG5cclxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uVGl0bGVXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9IHsuLi5wcm9wc30+XHJcbiAgICAgIHt0aXRsZSAmJiA8VGl0bGVXcmFwcGVyIGNsYXNzTmFtZT1cInRpdGxlX3dyYXBwZXJcIj57dGl0bGV9PC9UaXRsZVdyYXBwZXI+fVxyXG4gICAgICB7bGluayAmJiA8TGlua1dyYXBwZXIgY2xhc3NOYW1lPVwibGlua193cmFwcGVyXCI+e2xpbmt9PC9MaW5rV3JhcHBlcj59XHJcbiAgICA8L1NlY3Rpb25UaXRsZVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblNlY3Rpb25UaXRsZS5wcm9wVHlwZXMgPSB7XHJcbiAgLyoqIENsYXNzTmFtZSBvZiB0aGUgU2VjdGlvblRpdGxlLiAqL1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvKiogQWRkIGhlcmUgSGVhZGluZyBjb21wb25lbnQgZnJvbSBjb21tb24gY29tcG9uZW50cy4gKi9cclxuICB0aXRsZTogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgLyoqIEFkZCBoZXJlIFRleHRMaW5rIGNvbXBvbmVudCBmcm9tIGNvbW1vbiBjb21wb25lbnRzLiAqL1xyXG4gIGxpbms6IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL0Jhc2UnO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIG1hcmdpbjogMzBweCAwO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJHtiYXNlfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZVdyYXBwZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbC9Qb3J0YWwnO1xyXG5pbXBvcnQgeyBXcmFwcGVyLCBDb250YWluZXIgfSBmcm9tICcuL1ZpZXdXaXRoUG9wdXAuc3R5bGUnO1xyXG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gJy4vdXNlT25DbGlja091dHNpZGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dpdGhQb3B1cCh7XHJcbiAgdmlldyxcclxuICBwb3B1cCxcclxuICBub1ZpZXcgPSBmYWxzZSxcclxuICBzdHlsZSxcclxuICBjbGFzc05hbWUsXHJcbn0pIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xyXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKSk7XHJcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcclxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWyd2aWV3X3dpdGhfX3BvcHVwJ107XHJcblxyXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclxyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzZXMuam9pbignICcpfSAke3Nob3dQb3B1cCA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICA+XHJcbiAgICAgIHt2aWV3ICYmIG5vVmlldyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cF9oYW5kbGVyXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1BvcHVwKCFzaG93UG9wdXApfT5cclxuICAgICAgICAgIHt2aWV3fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9wdXBfY29udGFpbmVyXCJcclxuICAgICAgICBzaG93UG9wdXA9e3Nob3dQb3B1cH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAodHJ1ZSl9XHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3ZpZXcgJiYgIW5vVmlldyAmJiB2aWV3fVxyXG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBpZD1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxQb3J0YWwgcmVuZGVyZXJJZD1cInBvcHVwXCI+e3BvcHVwICYmIHBvcHVwfTwvUG9ydGFsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1dyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLnJhZGl1cyA/IHByb3BzLnJhZGl1cyA6IDMpfXB4O1xyXG4gICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnNob3dQb3B1cCAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGB9XHJcblxyXG4gIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuYW50LWNoZWNrYm94LWdyb3VwLWl0ZW0ge1xyXG4gICAgICBtYXJnaW46IDlweCAwO1xyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhdGVfcGlja2VyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgLkRhdGVSYW5nZVBpY2tlciB7XHJcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuIiwiLy8gSG9va1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgcmVmJ3MgZWxlbWVudCBvciBkZXNjZW5kZW50IGVsZW1lbnRzXHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaGFuZGxlcihldmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG4gICAgfTtcclxuICB9LCBbcmVmLCBoYW5kbGVyXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG4vLyBpbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xyXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VDYXJkL0ltYWdlQ2FyZCc7XHJcbmltcG9ydCB7IExJU1RJTkdfUE9TVFNfUEFHRSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzL2NvbnN0YW50JztcclxuaW1wb3J0IExvY2F0aW9uV3JhcHBlciwgeyBDYXJvdXNlbFNlY3Rpb24gfSBmcm9tICcuL0xvY2F0aW9uLnN0eWxlJztcclxuXHJcbmNvbnN0IExvY2F0aW9uR3JpZCA9ICh7IGRhdGEsIGRldmljZVR5cGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TG9jYXRpb25XcmFwcGVyPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cclxuICAgICAgICA8U2VjdGlvblRpdGxlXHJcbiAgICAgICAgICB0aXRsZT17PEhlYWRpbmcgY29udGVudD1cIkV4cGxvcmUgRGVzdGluYXRpb25zXCIgLz59XHJcbiAgICAgICAgICBsaW5rPXtcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7TElTVElOR19QT1NUU19QQUdFfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlNob3cgYWxsPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPENhcm91c2VsU2VjdGlvbj5cclxuICAgICAgICAgIHtkYXRhLmxlbmd0aCAhPT0gMCA/IChcclxuICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgc3NyXHJcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICAgICAgICBhcnJvd3NcclxuICAgICAgICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxyXG4gICAgICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxyXG4gICAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGluZmluaXRlXHJcbiAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17e1xyXG4gICAgICAgICAgICAgICAgZGVza3RvcDoge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMTAyNCxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgaXRlbXM6IDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDQ2NCxcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRhYmxldDoge1xyXG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMDI0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogNDY0LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBpdGVtczogMyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxyXG4gICAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgICAgICBzbGlkZXJDbGFzcz1cIlwiXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxJbWFnZUNhcmRcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e3Bvc3QubG9jYXRpb25JbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LmNpdHl9XHJcbiAgICAgICAgICAgICAgICAgIG1ldGE9e2Ake3Bvc3QubnVtYmVyT2ZQb3N0fSBIb3RlbHNgfVxyXG4gICAgICAgICAgICAgICAgICBsaW5rPXtMSVNUSU5HX1BPU1RTX1BBR0V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Nhcm91c2VsU2VjdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0xvY2F0aW9uV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25HcmlkO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgTG9jYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiA1MnB4IDA7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgcGFkZGluZzogMzBweCAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcclxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG5cclxuICAgICAgLmltYWdlX2NhcmQge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4ICR7dGhlbWVHZXQoJ2JveFNoYWRvdy4xJywgJ3JnYmEoMCwgMCwgMCwgMC4xNiknKX07XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcclxuICAgICAgbGVmdDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodCB7XHJcbiAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uV3JhcHBlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XHJcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0JztcclxuaW1wb3J0IEdsaWRlQ2Fyb3VzZWwsIHtcclxuICBHbGlkZVNsaWRlLFxyXG59IGZyb20gJ2NvbXBvbmVudHMvVUkvR2xpZGVDYXJvdXNlbC9HbGlkZUNhcm91c2VsJztcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9TZWFyY2hGb3JtJztcclxuaW1wb3J0IEJhbm5lcldyYXBwZXIsIHsgU2VhcmNoV3JhcHBlciB9IGZyb20gJy4vU2VhcmNoLnN0eWxlJztcclxuLy8gc2xpZGVyIGltYWdlc1xyXG5pbXBvcnQgYmFubmVyQmcxIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyLzEuanBnJztcclxuaW1wb3J0IGJhbm5lckJnMiBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci8yLmpwZyc7XHJcbmltcG9ydCBiYW5uZXJCZzMgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvMy5qcGcnO1xyXG5cclxuY29uc3QgSG9tZVNlYXJjaCA9ICh7IHNlYXJjaFRpdGxlU3R5bGUsIHNlYXJjaERlc2NyaXB0aW9uU3R5bGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFubmVyV3JhcHBlcj5cclxuICAgICAgPEdsaWRlQ2Fyb3VzZWxcclxuICAgICAgICBjb250cm9scz17ZmFsc2V9XHJcbiAgICAgICAgb3B0aW9ucz17eyBnYXA6IDAsIGF1dG9wbGF5OiA1MDAwLCBhbmltYXRpb25EdXJhdGlvbjogMTAwMCB9fVxyXG4gICAgICAgIGJ1bGxldHM9e3RydWV9XHJcbiAgICAgICAgbnVtYmVyT2ZCdWxsZXRzPXszfVxyXG4gICAgICA+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxHbGlkZVNsaWRlPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17YmFubmVyQmcxfSBhbHQ9XCJCYW5uZXJcIiAvPlxyXG4gICAgICAgICAgPC9HbGlkZVNsaWRlPlxyXG4gICAgICAgICAgPEdsaWRlU2xpZGU+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5uZXJCZzJ9IGFsdD1cIkJhbm5lclwiIC8+XHJcbiAgICAgICAgICA8L0dsaWRlU2xpZGU+XHJcbiAgICAgICAgICA8R2xpZGVTbGlkZT5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2Jhbm5lckJnM30gYWx0PVwiQmFubmVyXCIgLz5cclxuICAgICAgICAgIDwvR2xpZGVTbGlkZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9HbGlkZUNhcm91c2VsPlxyXG5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VhcmNoV3JhcHBlcj5cclxuICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgIHsuLi5zZWFyY2hUaXRsZVN0eWxlfVxyXG4gICAgICAgICAgICBjb250ZW50PVwiTGF0ZXN0IHJldmlld3MuIExvd2VzdCBwcmljZXMuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICB7Li4uc2VhcmNoRGVzY3JpcHRpb25TdHlsZX1cclxuICAgICAgICAgICAgY29udGVudD1cImNvbXBhcmVzIHByaWNlcyBmcm9tIDIwMCsgYm9va2luZyBzaXRlcyB0byBoZWxwIHlvdSBmaW5kIHRoZSBsb3dlc3RcclxuICAgICAgcHJpY2Ugb24gdGhlIHJpZ2h0IGhvdGVsIGZvciB5b3UuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2VhcmNoRm9ybSAvPlxyXG4gICAgICAgIDwvU2VhcmNoV3JhcHBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0Jhbm5lcldyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkhvbWVTZWFyY2gucHJvcFR5cGVzID0ge1xyXG4gIHNlYXJjaFRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgc2VhcmNoRGVzY3JpcHRpb25TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbkhvbWVTZWFyY2guZGVmYXVsdFByb3BzID0ge1xyXG4gIHNlYXJjaFRpdGxlU3R5bGU6IHtcclxuICAgIGNvbG9yOiAnIzJDMkMyQycsXHJcbiAgICBmb250U2l6ZTogWycyMHB4JywgJzI0cHgnLCAnMjhweCddLFxyXG4gICAgbGluZUhlaWdodDogWycyOHB4JywgJzMwcHgnLCAnMzBweCddLFxyXG4gICAgbWI6ICc5cHgnLFxyXG4gIH0sXHJcbiAgc2VhcmNoRGVzY3JpcHRpb25TdHlsZToge1xyXG4gICAgY29sb3I6ICcjMkMyQzJDJyxcclxuICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMThweCcsXHJcbiAgICBtYjogJzMwcHgnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lU2VhcmNoO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xyXG5cclxuY29uc3QgQmFubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgPiBkaXYge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ2xpZGUsXHJcbiAgLmdsaWRlX190cmFjayxcclxuICAuZ2xpZGVfX3NsaWRlcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIH1cclxuXHJcbiAgLmdsaWRlX19zbGlkZSB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5nbGlkZV9fYnVsbGV0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmdsaWRlX19idWxsZXQge1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gIHBhZGRpbmc6IDI4cHggMzBweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDgxcHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICB3aWR0aDogNDE0cHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcblxyXG4gICAgPiBwIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gZGl2IHtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAvKiBzdWJtaXQgYnV0dG9uIHN0eWxlICovXHJcbiAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddLmFudC1idG4ge1xyXG4gICAgbWluLXdpZHRoOiAxNTdweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAudGFyZ2V0IHtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgbGVmdDogYXV0bztcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogbWFwIGF1dG8gY29tcGxldGUgc3R5bGUgKi9cclxuICAubWFwX2F1dG9jb21wbGV0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgcGFkZGluZzogMCAzMHB4IDAgNDBweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDAgMzZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlcixcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBkYXRlIHBpY2tlciBzdHlsZSAqL1xyXG4gIC5kYXRlX3BpY2tlciB7XHJcbiAgICBtaW4td2lkdGg6IGNhbGMoMjUwcHggLSAxNHB4KTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcclxuICAgIG1hcmdpbjogMCAwIDAgMTRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGhlaWdodDogNDdweDtcclxuICAgIH1cclxuXHJcbiAgICAuRGF5UGlja2VyX193aXRoQm9yZGVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDQ2cHggLTEwcHggcmdiYSgyNiwgMjYsIDI5LCAwLjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5EYXRlUmFuZ2VQaWNrZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9jbGVhckRhdGVzLFxyXG4gICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9jbGVhckRhdGVzIHtcclxuICAgICAgICAgICYuRGF0ZVJhbmdlUGlja2VySW5wdXRfY2xlYXJEYXRlc19fc21hbGwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLkRhdGVJbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDMwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU2OXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4IDAgMzBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDI1cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkRhdGVJbnB1dF9mYW5nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgICAgICYuRGF0ZUlucHV0X2lucHV0X19mb2N1c2VkIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXRfYXJyb3cge1xyXG4gICAgICAgICAgJiArIC5EYXRlSW5wdXQge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJfcGlja2VyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICB0b3A6IDQ3cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgICAgIGxlZnQ6IC0yOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAuRGF5UGlja2VyLFxyXG4gICAgICAgICAgLkRheVBpY2tlciA+IGRpdiA+IGRpdixcclxuICAgICAgICAgIC5EYXlQaWNrZXIgPiBkaXYgPiBkaXYgLkRheVBpY2tlcl90cmFuc2l0aW9uQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI5NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLkRheVBpY2tlciB7XHJcbiAgICAgICAgICAgIC5EYXlQaWNrZXJfd2Vla0hlYWRlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuQ2FsZW5kYXJNb250aCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiB2aWV3IHdpdGggcG9wdXAgY29tcG9uZW50IHN0eWxlICovXHJcbiAgLnZpZXdfd2l0aF9fcG9wdXAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIHBvcHUgaGFuZGxlciBzdHlsZSAqL1xyXG4gICAgLnBvcHVwX2hhbmRsZXIge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG5cclxuICAgICAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjInLCAnI0Y3RjdGNycpfTtcclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMjVweCAwIDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAyNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJvb21fZ3Vlc3Qge1xyXG4gICAgICAucG9wdXBfaGFuZGxlciB7XHJcbiAgICAgICAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAucG9wdXBfY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDQ2cHggLTEwcHggcmdiYSgyNiwgMjYsIDI5LCAwLjMpO1xyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogaWNvbiBzdHlsZSAqL1xyXG4gID4gc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICAmLm1hcC1tYXJrZXIsXHJcbiAgICAmLmNhbGVuZGFyLFxyXG4gICAgJi51c2VyLWZyaWVuZHMge1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICByaWdodDogYXV0bztcclxuICAgICAgZmlsbDogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICB9XHJcblxyXG4gICAgJi5jYWxlbmRhciB7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnVzZXItZnJpZW5kcyB7XHJcbiAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNhcmV0LWRvd24ge1xyXG4gICAgICByaWdodDogMTJweDtcclxuICAgICAgbGVmdDogYXV0bztcclxuICAgICAgZmlsbDogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb29tR3Vlc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAucXVhbnRpdHkge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5idG4gc3ZnIHtcclxuICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJXcmFwcGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xyXG5pbXBvcnQgeyBGYU1hcE1hcmtlckFsdCwgRmFSZWdDYWxlbmRhciwgRmFVc2VyRnJpZW5kcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNYXBBdXRvQ29tcGxldGUgZnJvbSAnY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlJztcclxuaW1wb3J0IElucHV0SW5jRGVjIGZyb20gJ2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMnO1xyXG5pbXBvcnQgRGF0ZVJhbmdlUGlja2VyQm94IGZyb20gJ2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzJztcclxuaW1wb3J0IHsgbWFwRGF0YUhlbHBlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXInO1xyXG5pbXBvcnQgVmlld1dpdGhQb3B1cCBmcm9tICdjb21wb25lbnRzL1VJL1ZpZXdXaXRoUG9wdXAvVmlld1dpdGhQb3B1cCc7XHJcbmltcG9ydCB7XHJcbiAgRm9ybVdyYXBwZXIsXHJcbiAgQ29tcG9uZW50V3JhcHBlcixcclxuICBSb29tR3Vlc3RXcmFwcGVyLFxyXG4gIEl0ZW1XcmFwcGVyLFxyXG59IGZyb20gJy4vU2VhcmNoLnN0eWxlJztcclxuaW1wb3J0IHsgTElTVElOR19QT1NUU19QQUdFIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MvY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TZWFyY2hQcm92aWRlcic7XHJcblxyXG5jb25zdCBjYWxlbmRhckl0ZW0gPSB7XHJcbiAgc2VwYXJhdG9yOiAnLScsXHJcbiAgZm9ybWF0OiAnTU0tREQtWVlZWScsXHJcbiAgbG9jYWxlOiAnZW4nLFxyXG59O1xyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcclxuICBjb25zdCBbc2VhcmNoRGF0ZSwgc2V0U2VhcmNoRGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzZXRTdGFydERhdGU6IG51bGwsXHJcbiAgICBzZXRFbmREYXRlOiBudWxsLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFttYXBWYWx1ZSwgc2V0TWFwVmFsdWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyb29tR3Vlc3QsIHNldFJvb21HdWVzdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICByb29tOiAwLFxyXG4gICAgZ3Vlc3Q6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZXZhbHVlRnVuYyA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBzZWFyY2hlZFBsYWNlQVBJRGF0YSB9ID0gZXZlbnQ7XHJcbiAgICBpZiAoIWlzRW1wdHkoc2VhcmNoZWRQbGFjZUFQSURhdGEpKSB7XHJcbiAgICAgIHNldE1hcFZhbHVlKHNlYXJjaGVkUGxhY2VBUElEYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbmNyZW1lbnQgPSAodHlwZSkgPT4ge1xyXG4gICAgc2V0Um9vbUd1ZXN0KHtcclxuICAgICAgLi4ucm9vbUd1ZXN0LFxyXG4gICAgICBbdHlwZV06IHJvb21HdWVzdFt0eXBlXSArIDEsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWNyZW1lbnQgPSAodHlwZSkgPT4ge1xyXG4gICAgaWYgKHJvb21HdWVzdFt0eXBlXSA8PSAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldFJvb21HdWVzdCh7XHJcbiAgICAgIC4uLnJvb21HdWVzdCxcclxuICAgICAgW3R5cGVdOiByb29tR3Vlc3RbdHlwZV0gLSAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jRGVjT25DaG5hZ2UgPSAoZSwgdHlwZSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Um9vbUd1ZXN0KHtcclxuICAgICAgLi4ucm9vbUd1ZXN0LFxyXG4gICAgICBbdHlwZV06IGN1cnJlbnRWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdvVG9TZWFyY2hQYWdlID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXBMb2NhdGlvbiA9IFtdLFxyXG4gICAgICBkYXRlUmFuZ2UgPSB7fSxcclxuICAgICAgbG9jYXRpb25fbGF0ID0gJycsXHJcbiAgICAgIGxvY2F0aW9uX2xuZyA9ICcnO1xyXG4gICAgY29uc3QgbWFwRGF0YSA9IG1hcFZhbHVlID8gbWFwRGF0YUhlbHBlcihtYXBWYWx1ZSkgOiBbXTtcclxuICAgIG1hcERhdGEgJiZcclxuICAgICAgbWFwRGF0YS5tYXAoKHNpbmdsZU1hcERhdGEsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGVtcExvY2F0aW9uLnB1c2goe1xyXG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogc2luZ2xlTWFwRGF0YSA/IHNpbmdsZU1hcERhdGEuZm9ybWF0dGVkQWRkcmVzcyA6ICcnLFxyXG4gICAgICAgICAgbGF0OiBzaW5nbGVNYXBEYXRhID8gc2luZ2xlTWFwRGF0YS5sYXQudG9GaXhlZCgzKSA6IG51bGwsXHJcbiAgICAgICAgICBsbmc6IHNpbmdsZU1hcERhdGEgPyBzaW5nbGVNYXBEYXRhLmxuZy50b0ZpeGVkKDMpIDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRlbXBMb2NhdGlvbiA/IHRlbXBMb2NhdGlvblswXSA6IHt9O1xyXG4gICAgZGF0ZVJhbmdlLnN0YXJ0RGF0ZSA9IHNlYXJjaERhdGUgPyBzZWFyY2hEYXRlLnNldFN0YXJ0RGF0ZSA6IG51bGw7XHJcbiAgICBkYXRlUmFuZ2UuZW5kRGF0ZSA9IHNlYXJjaERhdGUgPyBzZWFyY2hEYXRlLnNldEVuZERhdGUgOiBudWxsO1xyXG5cclxuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbi5sYXQpIHtcclxuICAgICAgbG9jYXRpb25fbGF0ID0gbG9jYXRpb24ubGF0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbi5sbmcpIHtcclxuICAgICAgbG9jYXRpb25fbG5nID0gbG9jYXRpb24ubG5nO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgc2V0U3RhcnREYXRlOiBzZWFyY2hEYXRlLnNldFN0YXJ0RGF0ZSxcclxuICAgICAgc2V0RW5kRGF0ZTogc2VhcmNoRGF0ZS5zZXRFbmREYXRlLFxyXG4gICAgICByb29tOiByb29tR3Vlc3Qucm9vbSxcclxuICAgICAgZ3Vlc3Q6IHJvb21HdWVzdC5ndWVzdCxcclxuICAgICAgbG9jYXRpb25fbGF0LFxyXG4gICAgICBsb2NhdGlvbl9sbmcsXHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5KSB7XHJcbiAgICAgIGlmIChxdWVyeVtrZXldID09PSAnJyB8fCBxdWVyeVtrZXldID09PSBudWxsIHx8IHF1ZXJ5W2tleV0gPT09IDApIHtcclxuICAgICAgICBkZWxldGUgcXVlcnlba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1VQREFURScsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXRTdGFydERhdGU6IHNlYXJjaERhdGUuc2V0U3RhcnREYXRlLFxyXG4gICAgICAgIHNldEVuZERhdGU6IHNlYXJjaERhdGUuc2V0RW5kRGF0ZSxcclxuICAgICAgICByb29tOiByb29tR3Vlc3Qucm9vbSxcclxuICAgICAgICBndWVzdDogcm9vbUd1ZXN0Lmd1ZXN0LFxyXG4gICAgICAgIGxvY2F0aW9uX2xhdCxcclxuICAgICAgICBsb2NhdGlvbl9sbmcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBSb3V0ZXIucHVzaChcclxuICAgICAge1xyXG4gICAgICAgIHBhdGhuYW1lOiBgJHtMSVNUSU5HX1BPU1RTX1BBR0V9YCxcclxuICAgICAgICBxdWVyeTogcXVlcnksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogYCR7TElTVElOR19QT1NUU19QQUdFfWAsXHJcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxyXG4gICAgICB9LFxyXG4gICAgICB7IHNoYWxsb3c6IHRydWUgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICA8Q29tcG9uZW50V3JhcHBlcj5cclxuICAgICAgICA8RmFNYXBNYXJrZXJBbHQgY2xhc3NOYW1lPVwibWFwLW1hcmtlclwiIC8+XHJcbiAgICAgICAgPE1hcEF1dG9Db21wbGV0ZSB1cGRhdGV2YWx1ZT17KHZhbHVlKSA9PiB1cGRhdGV2YWx1ZUZ1bmModmFsdWUpfSAvPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE0NC4wODMgMTQ0XCJcclxuICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDE0NC4wODMgMTQ0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhcmdldFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xMTcuMjkyLDY5aC0xMy41ODdDMTAyLjI4LDUzLjg1MSw5MC4xOSw0MS43NjEsNzUuMDQyLDQwLjMzN1YyNi41aC02djEzLjgzN0M1My44OTMsNDEuNzYxLDQxLjgwMiw1My44NTEsNDAuMzc4LDY5ICBIMjYuNzkydjZoMTMuNTg3YzEuNDI1LDE1LjE0OCwxMy41MTUsMjcuMjM4LDI4LjY2MywyOC42NjNWMTE3LjVoNnYtMTMuODM3QzkwLjE5LDEwMi4yMzgsMTAyLjI4LDkwLjE0OCwxMDMuNzA1LDc1aDEzLjU4N1Y2OXogICBNNzIuMDQyLDk3LjgwOWMtMTQuMjMsMC0yNS44MDktMTEuNTc4LTI1LjgwOS0yNS44MDljMC0xNC4yMzEsMTEuNTc4LTI1LjgwOSwyNS44MDktMjUuODA5Uzk3Ljg1LDU3Ljc2OSw5Ny44NSw3MiAgQzk3Ljg1LDg2LjIzLDg2LjI3Miw5Ny44MDksNzIuMDQyLDk3LjgwOXpcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk03Mi4wNDIsNTIuNTQxYy0xMC43MjksMC0xOS40NTksOC43MjktMTkuNDU5LDE5LjQ1OXM4LjcyOSwxOS40NTksMTkuNDU5LDE5LjQ1OVM5MS41LDgyLjcyOSw5MS41LDcyICBTODIuNzcxLDUyLjU0MSw3Mi4wNDIsNTIuNTQxeiBNNzIuMDQyLDg1LjQ1OWMtNy40MjEsMC0xMy40NTktNi4wMzctMTMuNDU5LTEzLjQ1OWMwLTcuNDIxLDYuMDM4LTEzLjQ1OSwxMy40NTktMTMuNDU5ICBTODUuNSw2NC41NzksODUuNSw3MkM4NS41LDc5LjQyMiw3OS40NjIsODUuNDU5LDcyLjA0Miw4NS40NTl6XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9Db21wb25lbnRXcmFwcGVyPlxyXG5cclxuICAgICAgPENvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgICAgPEZhUmVnQ2FsZW5kYXIgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIiAvPlxyXG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJCb3hcclxuICAgICAgICAgIGl0ZW09e2NhbGVuZGFySXRlbX1cclxuICAgICAgICAgIHN0YXJ0RGF0ZUlkPVwic3RhcnREYXRlSWQtaWQtaG9tZVwiXHJcbiAgICAgICAgICBlbmREYXRlSWQ9XCJlbmREYXRlSWQtaWQtaG9tZVwiXHJcbiAgICAgICAgICB1cGRhdGVTZWFyY2hEYXRhPXsoc2V0RGF0ZVZhbHVlKSA9PiBzZXRTZWFyY2hEYXRlKHNldERhdGVWYWx1ZSl9XHJcbiAgICAgICAgICBzaG93Q2xlYXJEYXRlcz17dHJ1ZX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db21wb25lbnRXcmFwcGVyPlxyXG5cclxuICAgICAgPENvbXBvbmVudFdyYXBwZXI+XHJcbiAgICAgICAgPEZhVXNlckZyaWVuZHMgY2xhc3NOYW1lPVwidXNlci1mcmllbmRzXCIgLz5cclxuICAgICAgICA8Vmlld1dpdGhQb3B1cFxyXG4gICAgICAgICAga2V5PXsyMDB9XHJcbiAgICAgICAgICBub1ZpZXc9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb29tX2d1ZXN0XCJcclxuICAgICAgICAgIHZpZXc9e1xyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Um9vbSB7cm9vbUd1ZXN0LnJvb20gPiAwICYmIGA6ICR7cm9vbUd1ZXN0LnJvb219YH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj5HdWVzdHtyb29tR3Vlc3QuZ3Vlc3QgPiAwICYmIGA6ICR7cm9vbUd1ZXN0Lmd1ZXN0fWB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHBvcHVwPXtcclxuICAgICAgICAgICAgPFJvb21HdWVzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRJbmNEZWNcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJyb29tXCJcclxuICAgICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBoYW5kbGVJbmNyZW1lbnQoJ3Jvb20nKX1cclxuICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiBoYW5kbGVEZWNyZW1lbnQoJ3Jvb20nKX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbmNEZWNPbkNobmFnZShlLCAncm9vbScpfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbUd1ZXN0LnJvb219XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5HdWVzdDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ3Vlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBpbmNyZW1lbnQ9eygpID0+IGhhbmRsZUluY3JlbWVudCgnZ3Vlc3QnKX1cclxuICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiBoYW5kbGVEZWNyZW1lbnQoJ2d1ZXN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5jRGVjT25DaG5hZ2UoZSwgJ2d1ZXN0Jyl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb29tR3Vlc3QuZ3Vlc3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvUm9vbUd1ZXN0V3JhcHBlcj5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NvbXBvbmVudFdyYXBwZXI+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2dvVG9TZWFyY2hQYWdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgRmluZCBIb3RlbHNcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaEZvcm0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAnVVBEQVRFJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcXVlcnkgfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBxdWVyeSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgc2h1ZmZsZSBmcm9tICdsb2Rhc2gvc2h1ZmZsZSc7XHJcblxyXG5jb25zdCBGZXRjaEFQSURhdGEgPSAodXJsKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKHVybClcclxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FQSURhdGEgPSAoYXBpRGF0YSkgPT4ge1xyXG4gIGxldCBmZXRjaERhdGEgPSB7fTtcclxuICBpZiAoYXBpRGF0YSkge1xyXG4gICAgYXBpRGF0YS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcclxuICAgICAgZmV0Y2hEYXRhLmRhdGEgPSBpdGVtLmRhdGEgPyBbLi4uaXRlbS5kYXRhXSA6IFtdO1xyXG4gICAgICBmZXRjaERhdGEubmFtZSA9IGl0ZW0ubmFtZSA/IGl0ZW0ubmFtZSA6ICcnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBmZXRjaERhdGEgPyBmZXRjaERhdGEuZGF0YSA6IFtdO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaGVkRGF0YSA9IChwcm9jZXNzZWREYXRhKSA9PiB7XHJcbiAgY29uc3QgcmFuZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwICsgMSk7XHJcbiAgY29uc3QgZGF0YSA9IHNodWZmbGUocHJvY2Vzc2VkRGF0YS5zbGljZSgwLCByYW5kTnVtYmVyKSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoU3RhdGVLZXlDaGVjayA9IChzdGF0ZSkgPT4ge1xyXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBzdGF0ZVtrZXldICE9PSBudWxsICYmXHJcbiAgICAgIHN0YXRlW2tleV0gIT0gJycgJiZcclxuICAgICAgc3RhdGVba2V5XSAhPSBbXSAmJlxyXG4gICAgICBzdGF0ZVtrZXldICE9IDAgJiZcclxuICAgICAgc3RhdGVba2V5XSAhPSAxMDBcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2luYXRvciA9IChwb3N0cywgcHJvY2Vzc2VkRGF0YSwgbGltaXQpID0+IHtcclxuICByZXR1cm4gWy4uLnBvc3RzLCAuLi5wcm9jZXNzZWREYXRhLnNsaWNlKHBvc3RzLmxlbmd0aCwgcG9zdHMubGVuZ3RoICsgbGltaXQpXTtcclxufTtcclxuXHJcbmNvbnN0IEdldEFQSURhdGEgPSBhc3luYyAoYXBpVXJsKSA9PiB7XHJcbiAgY29uc3QgcHJvbWlzZXMgPSBhcGlVcmwubWFwKGFzeW5jIChyZXBvKSA9PiB7XHJcbiAgICBjb25zdCBhcGlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX0FQSX0vc3RhdGljL2RhdGFgOyAvLyByZWFkIGl0IGZyb20gZW52IHZhcmlhYmxlXHJcbiAgICBjb25zdCBhcGkgPSBgJHthcGlQYXRofS8ke3JlcG8uZW5kcG9pbnR9Lmpzb25gO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBGZXRjaEFQSURhdGEoYXBpKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHJlcG8ubmFtZSxcclxuICAgICAgZGF0YTogcmVzcG9uc2UsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlY2V2aWVkRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICByZXR1cm4gcmVjZXZpZWREYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2V0QVBJRGF0YTtcclxuIiwiaW1wb3J0IE1vYmlsZURldGVjdCBmcm9tICdtb2JpbGUtZGV0ZWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VUeXBlKHJlcSkge1xyXG4gIGxldCB1c2VyQWdlbnQ7XHJcbiAgbGV0IGRldmljZVR5cGU7XHJcbiAgaWYgKHJlcSkge1xyXG4gICAgdXNlckFnZW50ID0gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICB9XHJcbiAgY29uc3QgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHVzZXJBZ2VudCk7XHJcbiAgaWYgKG1kLnRhYmxldCgpKSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ3RhYmxldCc7XHJcbiAgfSBlbHNlIGlmIChtZC5tb2JpbGUoKSkge1xyXG4gICAgZGV2aWNlVHlwZSA9ICdtb2JpbGUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZXZpY2VUeXBlID0gJ2Rlc2t0b3AnO1xyXG4gIH1cclxuICByZXR1cm4gZGV2aWNlVHlwZTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbiA9ICdsdHInO1xyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmdldEF0dHJpYnV0ZSgnZGlyJyk7XHJcbn1cclxuY29uc3Qgd2l0aERpcmVjdGlvbiA9IENvbXBvbmVudCA9PiBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYXRhLXJ0bD17ZGlyZWN0aW9ufSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXJlY3Rpb247XHJcbmV4cG9ydCB7IGRpcmVjdGlvbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XHJcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJztcclxuaW1wb3J0IFNlYXJjaEFyZWEgZnJvbSAnY29udGFpbmVyL0hvbWUvU2VhcmNoL1NlYXJjaCc7XHJcbmltcG9ydCBMb2NhdGlvbkdyaWQgZnJvbSAnY29udGFpbmVyL0hvbWUvTG9jYXRpb24vTG9jYXRpb24nO1xyXG5pbXBvcnQgU2VjdGlvbkdyaWQgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uR3JpZC9TZWN0aW9uR3JpZCc7XHJcbmltcG9ydCBHZXRBUElEYXRhIGZyb20gJ2xpYnJhcnkvaGVscGVycy9nZXRfYXBpX2RhdGEnO1xyXG5pbXBvcnQgeyBnZXREZXZpY2VUeXBlIH0gZnJvbSAnbGlicmFyeS9oZWxwZXJzL2dldF9kZXZpY2VfdHlwZSc7XHJcbmltcG9ydCB7IExJU1RJTkdfUE9TVFNfUEFHRSwgU0lOR0xFX1BPU1RfUEFHRSB9IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcclxuaW1wb3J0IHtcclxuICBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfTU9CSUxFX0RFVklDRSxcclxuICBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfVEFCTEVUX0RFVklDRSxcclxuICBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UsXHJcbiAgSE9NRV9QQUdFX1NFQ1RJT05TX0NPTFVNTlNfUkVTUE9OU0lWRV9XSURUSCxcclxufSBmcm9tICdzZXR0aW5ncy9jb25maWcnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7XHJcbiAgZGV2aWNlVHlwZSxcclxuICBsb2NhdGlvbkRhdGEsXHJcbiAgdG9wSG90ZWxEYXRhLFxyXG4gIGx1eGFyeUhvdGVsRGF0YSxcclxufSkge1xyXG4gIGxldCBsaW1pdDtcclxuXHJcbiAgaWYgKGRldmljZVR5cGUgPT09ICdtb2JpbGUnKSB7XHJcbiAgICBsaW1pdCA9IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFO1xyXG4gIH1cclxuICBpZiAoZGV2aWNlVHlwZSA9PT0gJ3RhYmxldCcpIHtcclxuICAgIGxpbWl0ID0gSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0U7XHJcbiAgfVxyXG5cclxuICBpZiAoZGV2aWNlVHlwZSA9PT0gJ2Rlc2t0b3AnKSB7XHJcbiAgICBsaW1pdCA9IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9ERVNLVE9QX0RFVklDRTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5UcmlwRmluZGVyLiB8IEEgcmVhY3QgbmV4dCBsaXN0aW5nIHRlbXBsYXRlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2VhcmNoQXJlYSAvPlxyXG4gICAgICA8TG9jYXRpb25HcmlkIGRhdGE9e2xvY2F0aW9uRGF0YX0gZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gLz5cclxuICAgICAgPENvbnRhaW5lciBmbHVpZD17dHJ1ZX0+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZVxyXG4gICAgICAgICAgdGl0bGU9ezxIZWFkaW5nIGNvbnRlbnQ9XCJUcmF2ZWxlcnPigJkgQ2hvaWNlOiBUb3AgaG90ZWxzXCIgLz59XHJcbiAgICAgICAgICBsaW5rPXtcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17TElTVElOR19QT1NUU19QQUdFfT5cclxuICAgICAgICAgICAgICA8YT5TaG93IGFsbDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlY3Rpb25HcmlkXHJcbiAgICAgICAgICBsaW5rPXtTSU5HTEVfUE9TVF9QQUdFfVxyXG4gICAgICAgICAgY29sdW1uV2lkdGg9e0hPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEh9XHJcbiAgICAgICAgICBkYXRhPXt0b3BIb3RlbERhdGEuc2xpY2UoMCwgbGltaXQpfVxyXG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxyXG4gICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZWN0aW9uVGl0bGVcclxuICAgICAgICAgIHRpdGxlPXs8SGVhZGluZyBjb250ZW50PVwiQmVzdCBSYXRlZDogTHV4YXJ5IGhvdGVsc1wiIC8+fVxyXG4gICAgICAgICAgbGluaz17XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e0xJU1RJTkdfUE9TVFNfUEFHRX0+XHJcbiAgICAgICAgICAgICAgPGE+U2hvdyBhbGw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTZWN0aW9uR3JpZFxyXG4gICAgICAgICAgbGluaz17U0lOR0xFX1BPU1RfUEFHRX1cclxuICAgICAgICAgIGNvbHVtbldpZHRoPXtIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIfVxyXG4gICAgICAgICAgZGF0YT17bHV4YXJ5SG90ZWxEYXRhLnNsaWNlKDAsIGxpbWl0KX1cclxuICAgICAgICAgIGxpbWl0PXtsaW1pdH1cclxuICAgICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCBhcGlVcmwgPSBbXHJcbiAgICB7XHJcbiAgICAgIGVuZHBvaW50OiAnaG90ZWwnLFxyXG4gICAgICBuYW1lOiAnbHV4YXJ5SG90ZWxEYXRhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGVuZHBvaW50OiAndG9wLWhvdGVsJyxcclxuICAgICAgbmFtZTogJ3RvcEhvdGVsRGF0YScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBlbmRwb2ludDogJ2xvY2F0aW9uJyxcclxuICAgICAgbmFtZTogJ2xvY2F0aW9uRGF0YScsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgZGV2aWNlVHlwZSA9IGdldERldmljZVR5cGUocmVxKTtcclxuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IEdldEFQSURhdGEoYXBpVXJsKTtcclxuICBsZXQgbG9jYXRpb25EYXRhID0gW10sXHJcbiAgICB0b3BIb3RlbERhdGEgPSBbXSxcclxuICAgIGx1eGFyeUhvdGVsRGF0YSA9IFtdO1xyXG5cclxuICBpZiAocGFnZURhdGEpIHtcclxuICAgIHBhZ2VEYXRhLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5uYW1lID09PSAnbG9jYXRpb25EYXRhJykge1xyXG4gICAgICAgIGxvY2F0aW9uRGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSAndG9wSG90ZWxEYXRhJykge1xyXG4gICAgICAgIHRvcEhvdGVsRGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XHJcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSAnbHV4YXJ5SG90ZWxEYXRhJykge1xyXG4gICAgICAgIGx1eGFyeUhvdGVsRGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGV2aWNlVHlwZSwgbG9jYXRpb25EYXRhLCB0b3BIb3RlbERhdGEsIGx1eGFyeUhvdGVsRGF0YSB9LFxyXG4gIH07XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFID0gNDtcclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFID0gNDtcclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9ERVNLVE9QX0RFVklDRSA9IDU7XHJcbmV4cG9ydCBjb25zdCBIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIID0gW1xyXG4gIDEgLyAxLFxyXG4gIDEgLyAyLFxyXG4gIDEgLyAzLFxyXG4gIDEgLyA0LFxyXG4gIDEgLyA1LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX1BPU1RfTElNSVQgPSAxMDtcclxuXHJcbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhPVVRfTUFQID0gW1xyXG4gIDEgLyAxLFxyXG4gIDEgLyAyLFxyXG4gIDEgLyAzLFxyXG4gIDEgLyA0LFxyXG4gIDEgLyA1LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCA9IFtcclxuICAxIC8gMSxcclxuICAxIC8gMixcclxuICAxIC8gMixcclxuICAxIC8gMixcclxuICAxIC8gMyxcclxuXTtcclxuIiwiLy8gR2VuZXJhbCBQYWdlIFNlY3Rpb25cclxuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRSA9ICcvJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UU19QQUdFID0gJy9hZ2VudHMnO1xyXG5cclxuLy8gTGlzdGluZyBTaW5nbGUgUGFnZSBTZWN0aW9uXHJcbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BPU1RTX1BBR0UgPSAnL2xpc3RpbmcnO1xyXG5leHBvcnQgY29uc3QgU0lOR0xFX1BPU1RfUEFHRSA9ICcvcG9zdCc7XHJcblxyXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxyXG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9QQUdFID0gJy9wcm9maWxlJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSA9ICcvYWNjb3VudC1zZXR0aW5ncyc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9JTUFHRV9FRElUX1BBR0UgPSAnL2NoYW5nZS1pbWFnZSc7XHJcbmV4cG9ydCBjb25zdCBBR0VOVF9QQVNTV09SRF9DSEFOR0VfUEFHRSA9ICcvY2hhbmdlLXBhc3N3b3JkJztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xyXG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9GQVZPVVJJVEUgPSAnL2Zhdm91cml0ZS1wb3N0JztcclxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfQ09OVEFDVCA9ICcvY29udGFjdCc7XHJcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcclxuXHJcbi8vIE90aGVyIFBhZ2VzXHJcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcclxuZXhwb3J0IGNvbnN0IFBSSVZBQ1lfUEFHRSA9ICcvcHJpdmFjeSc7XHJcblxyXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcclxuZXhwb3J0IGNvbnN0IExPR0lOX1BBR0UgPSAnL3NpZ24taW4nO1xyXG5leHBvcnQgY29uc3QgUkVHSVNUUkFUSU9OX1BBR0UgPSAnL3NpZ24tdXAnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XHJcbmV4cG9ydCBjb25zdCBGT1JHRVRfUEFTU1dPUkRfUEFHRSA9ICcvZm9yZ2V0LXBhc3N3b3JkJztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01pbnVzT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1BsdXNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ2xpZGVqcy9nbGlkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvc2h1ZmZsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb2JpbGUtZGV0ZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzL2luaXRpYWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29tcG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=