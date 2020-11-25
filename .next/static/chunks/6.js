(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./components/UI/Heading/Heading.js":
/*!******************************************!*\
  !*** ./components/UI/Heading/Heading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");




var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\UI\\Heading\\Heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var HeadingWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-121p3m5-0"
})(_Base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return __jsx(HeadingWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

_c = Heading;
Heading.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: 0,
  fontWeight: 700
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

var _c;

$RefreshReg$(_c, "Heading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/Listing/Search/MobileSearchView.js":
/*!******************************************************!*\
  !*** ./container/Listing/Search/MobileSearchView.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/slider */ "./node_modules/antd/lib/slider/index.js");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var _SearchParams__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchParams */ "./container/Listing/Search/SearchParams.js");
/* harmony import */ var _MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MobileSearchView.style */ "./container/Listing/Search/MobileSearchView.style.js");






var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Listing\\Search\\MobileSearchView.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var history = true ? Object(history__WEBPACK_IMPORTED_MODULE_7__["createBrowserHistory"])() : undefined;
var location =  true && window.location;

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

    case 'room':
      return _objectSpread(_objectSpread({}, state), {}, {
        room: action.payload.room
      });

    case 'guest':
      return _objectSpread(_objectSpread({}, state), {}, {
        guest: action.payload.guest
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

var FilterDrawer = function FilterDrawer(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__["SearchContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var initialState = {
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
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(serchReducer, initialState),
      current = _useReducer[0],
      dispatchCurrent = _useReducer[1]; // state for drawer


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1]; // Room guest state


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(current.room),
      countRoom = _useState2[0],
      setRoom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(current.guest),
      countGuest = _useState3[0],
      setGuest = _useState3[1]; // Toggle Drawer


  var handleToggleDrawer = function handleToggleDrawer() {
    setToggle(!toggle);
  }; // data handling


  var _onChange = function onChange(value, type) {
    var query = {};
    var modifiedCurrent = current;

    for (var key in modifiedCurrent) {
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
    } else if (type === 'room') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        room: value ? value : 0
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else if (type === 'guest') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        guest: value ? value : 0
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
  };

  var handleApplyFilter = function handleApplyFilter() {
    var params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__["setStateToUrl"])(current);
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread({}, current)
    });
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
    setToggle(false);
  };

  var handleCloseDrawer = function handleCloseDrawer() {
    setRoom(0);
    var query = {
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
    };
    dispatchCurrent({
      type: 'reset',
      payload: query
    });
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, current), query)
    });
    var params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
    setToggle(false);
  };

  return __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["FilterArea"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: toggle ? 'active' : '',
    onClick: handleToggleDrawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "More filters"), __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "filter_drawer",
    height: "100vh",
    placement: "bottom",
    closable: false,
    maskClosable: false,
    onClose: handleCloseDrawer,
    visible: toggle,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["FilterElementsWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Amenities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    options: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["getAmenities"].options,
    value: current.amenities,
    onChange: function onChange(value) {
      return _onChange(value, 'amenities');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Property Type",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    options: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["getPropertyType"].options,
    value: current.property,
    onChange: function onChange(value) {
      return _onChange(value, 'property');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Select Price Range",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }, __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    range: true,
    marks: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["priceInit"],
    min: 0,
    max: 100,
    defaultValue: [current.minPrice, current.maxPrice],
    onAfterChange: function onAfterChange(value) {
      return _onChange(value, 'price');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Choose Date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_10__["default"], {
    startDateId: "startDate-id-mobile",
    endDateId: "endDate-id-mobile",
    startDate: current.setStartDate ? moment__WEBPACK_IMPORTED_MODULE_6___default()(current.setStartDate) : null,
    endDate: current.setEndDate ? moment__WEBPACK_IMPORTED_MODULE_6___default()(current.setEndDate) : null,
    numberOfMonths: 1,
    small: true,
    item: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["calenderItem"],
    updateSearchData: function updateSearchData(value) {
      return _onChange(value, 'date_range');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Choose Room and Guest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["RoomGuestWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ItemWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "room",
    increment: function increment() {
      setRoom(function (countRoom) {
        return countRoom + 1;
      });

      _onChange(countRoom + 1, 'room');
    },
    decrement: function decrement() {
      setRoom(function (countRoom) {
        return countRoom > 0 && countRoom - 1;
      });

      _onChange(function (countRoom) {
        return countRoom > 0 && countRoom - 1;
      }, 'room');
    },
    value: countRoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  })), __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ItemWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "guest",
    increment: function increment() {
      setGuest(function (countGuest) {
        return countGuest + 1;
      });

      _onChange(countGuest + 1, 'guest');
    },
    decrement: function decrement() {
      setGuest(function (countGuest) {
        return countGuest > 0 && countGuest - 1;
      });

      _onChange(function (countGuest) {
        return countGuest > 0 && countGuest - 1;
      }, 'guest');
    },
    value: countGuest,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  })))))), __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCloseDrawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, "Cancel Filter"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleApplyFilter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, "Apply Filter")))));
};

_s(FilterDrawer, "J2UmR5C+mbxzsBQhCs63hPYxovg=");

_c = FilterDrawer;
/* harmony default export */ __webpack_exports__["default"] = (FilterDrawer);

var _c;

$RefreshReg$(_c, "FilterDrawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/Listing/Search/MobileSearchView.style.js":
/*!************************************************************!*\
  !*** ./container/Listing/Search/MobileSearchView.style.js ***!
  \************************************************************/
/*! exports provided: RoomGuestWrapper, ItemWrapper, FilterArea, FilterElementsWrapper, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArea", function() { return FilterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElementsWrapper", function() { return FilterElementsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__RoomGuestWrapper",
  componentId: "snu48q-0"
})(["width:100%;max-width:320px;@media only screen and (max-width:480px){max-width:300px;}strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__ItemWrapper",
  componentId: "snu48q-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
var FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__FilterArea",
  componentId: "snu48q-2"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
var FilterElementsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__FilterElementsWrapper",
  componentId: "snu48q-3"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{width:100%;max-width:320px;border-color:", ";@media only screen and (max-width:480px){max-width:300px;}.DateInput__small{width:calc(50% - 6px);.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}&:last-child{.DateInput_input__small{text-align:right;}}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;@media only screen and (max-width:480px){max-width:280px;margin-left:10px;}@media only screen and (max-width:375px){max-width:240px;}.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{background-color:", ";}}&:hover{.ant-slider-track{background-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__ButtonGroup",
  componentId: "snu48q-4"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:0;&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/drawer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/drawer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDrawer = _interopRequireDefault(__webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js"));

var _getScrollBarSize = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/getScrollBarSize */ "./node_modules/rc-util/lib/getScrollBarSize.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var DrawerContext = /*#__PURE__*/React.createContext(null);
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var defaultPushState = {
  distance: 180
};

var Drawer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Drawer, _React$Component);

  var _super = (0, _createSuper2["default"])(Drawer);

  function Drawer() {
    var _this;

    (0, _classCallCheck2["default"])(this, Drawer);
    _this = _super.apply(this, arguments);
    _this.state = {
      push: false
    };

    _this.push = function () {
      if (_this.props.push) {
        _this.setState({
          push: true
        });
      }
    };

    _this.pull = function () {
      if (_this.props.push) {
        _this.setState({
          push: false
        });
      }
    };

    _this.onDestroyTransitionEnd = function () {
      var isDestroyOnClose = _this.getDestroyOnClose();

      if (!isDestroyOnClose) {
        return;
      }

      if (!_this.props.visible) {
        _this.destroyClose = true;

        _this.forceUpdate();
      }
    };

    _this.getDestroyOnClose = function () {
      return _this.props.destroyOnClose && !_this.props.visible;
    };

    _this.getPushDistance = function () {
      var push = _this.props.push;
      var distance;

      if (typeof push === 'boolean') {
        distance = push ? defaultPushState.distance : 0;
      } else {
        distance = push.distance;
      }

      return parseFloat(String(distance || 0));
    }; // get drawer push width or height


    _this.getPushTransform = function (placement) {
      var distance = _this.getPushDistance();

      if (placement === 'left' || placement === 'right') {
        return "translateX(".concat(placement === 'left' ? distance : -distance, "px)");
      }

      if (placement === 'top' || placement === 'bottom') {
        return "translateY(".concat(placement === 'top' ? distance : -distance, "px)");
      }
    };

    _this.getRcDrawerStyle = function () {
      var _this$props = _this.props,
          zIndex = _this$props.zIndex,
          placement = _this$props.placement,
          mask = _this$props.mask,
          style = _this$props.style;
      var push = _this.state.push; // 当无 mask 时，将 width 应用到外层容器上
      // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题

      var offsetStyle = mask ? {} : _this.getOffsetStyle();
      return (0, _extends2["default"])((0, _extends2["default"])({
        zIndex: zIndex,
        transform: push ? _this.getPushTransform(placement) : undefined
      }, offsetStyle), style);
    }; // render drawer body dom


    _this.renderBody = function () {
      var _this$props2 = _this.props,
          bodyStyle = _this$props2.bodyStyle,
          drawerStyle = _this$props2.drawerStyle,
          prefixCls = _this$props2.prefixCls,
          visible = _this$props2.visible;

      if (_this.destroyClose && !visible) {
        return null;
      }

      _this.destroyClose = false;
      var containerStyle = {};

      var isDestroyOnClose = _this.getDestroyOnClose();

      if (isDestroyOnClose) {
        // Increase the opacity transition, delete children after closing.
        containerStyle.opacity = 0;
        containerStyle.transition = 'opacity .3s';
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-wrapper-body"),
        style: (0, _extends2["default"])((0, _extends2["default"])({}, containerStyle), drawerStyle),
        onTransitionEnd: _this.onDestroyTransitionEnd
      }, _this.renderHeader(), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-body"),
        style: bodyStyle
      }, _this.props.children), _this.renderFooter());
    }; // render Provider for Multi-level drawer


    _this.renderProvider = function (value) {
      _this.parentDrawer = value;

      var _a = _this.props,
          prefixCls = _a.prefixCls,
          placement = _a.placement,
          className = _a.className,
          mask = _a.mask,
          direction = _a.direction,
          visible = _a.visible,
          rest = __rest(_a, ["prefixCls", "placement", "className", "mask", "direction", "visible"]);

      var drawerClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({
        'no-mask': !mask
      }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
      var offsetStyle = mask ? _this.getOffsetStyle() : {};
      return /*#__PURE__*/React.createElement(DrawerContext.Provider, {
        value: (0, _assertThisInitialized2["default"])(_this)
      }, /*#__PURE__*/React.createElement(_rcDrawer["default"], (0, _extends2["default"])({
        handler: false
      }, (0, _omit["default"])(rest, ['zIndex', 'closable', 'closeIcon', 'destroyOnClose', 'drawerStyle', 'headerStyle', 'bodyStyle', 'footerStyle', 'footer', 'title', 'push', 'visible', 'width', 'height']), offsetStyle, {
        prefixCls: prefixCls,
        open: visible,
        showMask: mask,
        placement: placement,
        style: _this.getRcDrawerStyle(),
        className: drawerClassName
      }), _this.renderBody()));
    };

    return _this;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // fix: delete drawer in child and re-render, no push started.
      // <Drawer>{show && <Drawer />}</Drawer>
      var visible = this.props.visible;

      if (visible && this.parentDrawer) {
        this.parentDrawer.push();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      var visible = this.props.visible;

      if (preProps.visible !== visible && this.parentDrawer) {
        if (visible) {
          this.parentDrawer.push();
        } else {
          this.parentDrawer.pull();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // unmount drawer in child, clear push.
      if (this.parentDrawer) {
        this.parentDrawer.pull();
        this.parentDrawer = null;
      }
    }
  }, {
    key: "getOffsetStyle",
    value: function getOffsetStyle() {
      var _this$props3 = this.props,
          placement = _this$props3.placement,
          width = _this$props3.width,
          height = _this$props3.height,
          visible = _this$props3.visible,
          mask = _this$props3.mask; // https://github.com/ant-design/ant-design/issues/24287

      if (!visible && !mask) {
        return {};
      }

      var offsetStyle = {};

      if (placement === 'left' || placement === 'right') {
        offsetStyle.width = width;
      } else {
        offsetStyle.height = height;
      }

      return offsetStyle;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this$props4 = this.props,
          title = _this$props4.title,
          prefixCls = _this$props4.prefixCls,
          closable = _this$props4.closable,
          headerStyle = _this$props4.headerStyle;

      if (!title && !closable) {
        return null;
      }

      var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
      return /*#__PURE__*/React.createElement("div", {
        className: headerClassName,
        style: headerStyle
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), closable && this.renderCloseIcon());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props5 = this.props,
          footer = _this$props5.footer,
          footerStyle = _this$props5.footerStyle,
          prefixCls = _this$props5.prefixCls;

      if (!footer) {
        return null;
      }

      var footerClassName = "".concat(prefixCls, "-footer");
      return /*#__PURE__*/React.createElement("div", {
        className: footerClassName,
        style: footerStyle
      }, footer);
    }
  }, {
    key: "renderCloseIcon",
    value: function renderCloseIcon() {
      var _this$props6 = this.props,
          closable = _this$props6.closable,
          _this$props6$closeIco = _this$props6.closeIcon,
          closeIcon = _this$props6$closeIco === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _this$props6$closeIco,
          prefixCls = _this$props6.prefixCls,
          onClose = _this$props6.onClose;
      return closable && /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: onClose,
        "aria-label": "Close",
        className: "".concat(prefixCls, "-close"),
        style: {
          '--scroll-bar': "".concat((0, _getScrollBarSize["default"])(), "px")
        }
      }, closeIcon);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(DrawerContext.Consumer, null, this.renderProvider);
    }
  }]);
  return Drawer;
}(React.Component);

Drawer.defaultProps = {
  width: 256,
  height: 256,
  closable: true,
  placement: 'right',
  maskClosable: true,
  mask: true,
  level: null,
  keyboard: true,
  push: defaultPushState
};

var DrawerWrapper = function DrawerWrapper(props) {
  var customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  return /*#__PURE__*/React.createElement(Drawer, (0, _extends2["default"])({}, props, {
    prefixCls: prefixCls,
    getContainer: getContainer,
    direction: direction
  }));
};

DrawerWrapper.displayName = 'DrawerWrapper';
var _default = DrawerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-drawer/es/DrawerChild.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-drawer/es/DrawerChild.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-drawer/es/utils.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var currentDrawer = {};

var DrawerChild = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DrawerChild, _React$Component);

  var _super = _createSuper(DrawerChild);

  function DrawerChild(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DrawerChild);

    _this = _super.call(this, props);

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if ((currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getTouchParentScroll"])(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["removeEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_12__["transitionEnd"], _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_10__["default"].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        Object(_utils__WEBPACK_IMPORTED_MODULE_12__["addEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_12__["transitionEnd"], _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["transformArguments"])(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!_utils__WEBPACK_IMPORTED_MODULE_12__["windowIsUndefined"]) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_9__["default"])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getOpenCount = _this$props4.getOpenCount,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer();
      var openCount = getOpenCount && getOpenCount(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          if (openCount === 1) {
            document.body.style.overflow = 'hidden';
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_12__["addEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          // 没有弹框的状态下清除 overflow;
          if (!openCount) {
            document.body.style.overflow = '';
          }

          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_12__["removeEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease,
          getOpenCount = _this$props5.getOpenCount,
          switchScrollingEffect = _this$props5.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (openCount === 1) {
        switchScrollingEffect();
      }

      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease,
          getOpenCount = _this$props6.getOpenCount,
          switchScrollingEffect = _this$props6.switchScrollingEffect;
      var openCount = getOpenCount && getOpenCount();

      if (!openCount) {
        switchScrollingEffect(true);
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_12__["transitionStr"]) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (_utils__WEBPACK_IMPORTED_MODULE_12__["windowIsUndefined"]) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_12__["dataToArray"])(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!_utils__WEBPACK_IMPORTED_MODULE_12__["windowIsUndefined"]) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var _this$props7 = this.props,
          open = _this$props7.open,
          getContainer = _this$props7.getContainer;
      var container = getContainer && getContainer();
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = open;
        } // 默认打开状态时推出 level;


        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props8 = this.props,
          open = _this$props8.open,
          getContainer = _this$props8.getContainer;
      var container = getContainer && getContainer();

      if (open !== prevProps.open) {
        if (open) {
          this.domFocus();
        }

        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = !!open;
        }

        this.openLevelTransition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props9 = this.props,
          getOpenCount = _this$props9.getOpenCount,
          open = _this$props9.open,
          switchScrollingEffect = _this$props9.switchScrollingEffect;
      var openCount = typeof getOpenCount === 'function' && getOpenCount();
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      if (!openCount) {
        document.body.style.overflow = '';
        switchScrollingEffect(true);
      }
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          children = _this$props10.children,
          style = _this$props10.style,
          width = _this$props10.width,
          height = _this$props10.height,
          defaultOpen = _this$props10.defaultOpen,
          $open = _this$props10.open,
          prefixCls = _this$props10.prefixCls,
          placement = _this$props10.placement,
          level = _this$props10.level,
          levelMove = _this$props10.levelMove,
          ease = _this$props10.ease,
          duration = _this$props10.duration,
          getContainer = _this$props10.getContainer,
          handler = _this$props10.handler,
          onChange = _this$props10.onChange,
          afterVisibleChange = _this$props10.afterVisibleChange,
          showMask = _this$props10.showMask,
          maskClosable = _this$props10.maskClosable,
          maskStyle = _this$props10.maskStyle,
          onClose = _this$props10.onClose,
          onHandleClick = _this$props10.onHandleClick,
          keyboard = _this$props10.keyboard,
          getOpenCount = _this$props10.getOpenCount,
          switchScrollingEffect = _this$props10.switchScrollingEffect,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props10, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "switchScrollingEffect"]); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "".concat(prefixCls, "-").concat(placement), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, "".concat(prefixCls, "-open"), open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, className || '', !!className), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && react__WEBPACK_IMPORTED_MODULE_11__["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", Object.assign({}, props, {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: {
          transform: transform,
          msTransform: transform,
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isNumeric"])(width) ? "".concat(width, "px") : width,
          height: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isNumeric"])(height) ? "".concat(height, "px") : height
        },
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, react__WEBPACK_IMPORTED_MODULE_11__["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined
      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

DrawerChild.defaultProps = {
  switchScrollingEffect: function switchScrollingEffect() {}
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerChild);

/***/ }),

/***/ "./node_modules/rc-drawer/es/DrawerWrapper.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-drawer/es/DrawerWrapper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "./node_modules/rc-util/es/PortalWrapper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DrawerChild__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DrawerChild */ "./node_modules/rc-drawer/es/DrawerChild.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawerWrapper, _React$Component);

  var _super = _createSuper(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DrawerWrapper);

    _this = _super.call(this, props);

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(DrawerWrapper, [{
    key: "render",
    // tslint:disable-next-line:member-ordering
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["visible", "afterClose"]);

        return (// react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
    className: "drawer-handle"
  }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerWrapper);

/***/ }),

/***/ "./node_modules/rc-drawer/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerWrapper */ "./node_modules/rc-drawer/es/DrawerWrapper.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-drawer/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/utils.js ***!
  \********************************************/
/*! exports provided: dataToArray, transitionStr, transitionEnd, addEventListener, removeEventListener, transformArguments, isNumeric, windowIsUndefined, getTouchParentScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataToArray", function() { return dataToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionStr", function() { return transitionStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformArguments", function() { return transformArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowIsUndefined", function() { return windowIsUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchParentScroll", function() { return getTouchParentScroll; });
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};

/***/ }),

/***/ "./node_modules/rc-util/es/PortalWrapper.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/PortalWrapper.js ***!
  \**************************************************/
/*! exports provided: getOpenCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenCount", function() { return getOpenCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var _switchScrollingEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switchScrollingEffect */ "./node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-underscore-dangle,react/require-default-props */






var openCount = 0;
var supportDom = Object(_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_5__["default"])();
/** @private Test usage only */

function getOpenCount() {
  return  false ? undefined : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PortalWrapper, _React$Component);

  var _super = _createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    _classCallCheck(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.componentRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren;

      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */


    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Must be set after switchScrollingEffect

        cacheOverflow = Object(_setStyle__WEBPACK_IMPORTED_MODULE_4__["default"])({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        Object(_setStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(cacheOverflow);
        cacheOverflow = {};
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
      }
    };

    var visible = props.visible,
        getContainer = props.getContainer;

    if (supportDom && getParent(getContainer) === document.body) {
      openCount = visible ? openCount + 1 : openCount;
    }

    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.attachToParent()) {
        this.rafId = Object(_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          visible = _this$props.visible,
          getContainer = _this$props.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      _raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          forceRender = _this$props2.forceRender,
          visible = _this$props2.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref) {
      var prevProps = _ref.prevProps,
          _self = _ref._self;
      var visible = props.visible,
          getContainer = props.getContainer;

      if (prevProps) {
        var prevVisible = prevProps.visible,
            prevGetContainer = prevProps.getContainer;

        if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
          openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
        }

        var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

        if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
          _self.removeCurrentContainer();
        }
      }

      return {
        prevProps: props
      };
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortalWrapper);

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "./node_modules/rc-util/es/setStyle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/setStyle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ "./node_modules/rc-util/es/switchScrollingEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/switchScrollingEffect.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (scrollBarSize) {
    cacheStyle = Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});

/***/ }),

/***/ "./node_modules/rc-util/lib/getScrollBarSize.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/getScrollBarSize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollBarSize;
var cached;

function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState, resetNextUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButton", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeading", function() { return AccordionItemHeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemPanel", function() { return AccordionItemPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemState", function() { return AccordionItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextUuid", function() { return resetNextUuid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function () {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Provider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function () {
      // uuid: UUID
      return _this.state.getHeadingAttributes();
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var Accordion = function Accordion(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion' : _ref$className,
      allowMultipleExpanded = _ref.allowMultipleExpanded,
      allowZeroExpanded = _ref.allowZeroExpanded,
      onChange = _ref.onChange,
      preExpanded = _ref.preExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider, {
    preExpanded: preExpanded,
    allowMultipleExpanded: allowMultipleExpanded,
    allowZeroExpanded: allowZeroExpanded,
    onChange: onChange
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    "data-accordion-component": "Accordion",
    className: className
  }, rest)));
};

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
function resetNextUuid() {
  counter = DEFAULT;
} // HTML5 ids allow all unicode characters, except for ASCII whitespaces
// https://infra.spec.whatwg.org/#ascii-whitespace
// eslint-disable-next-line no-control-regex

var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === '' || idRegex.test(htmlId)) {
    console.error("uuid must be a valid HTML5 id but was given \"".concat(htmlId, "\", ASCII whitespaces are forbidden"));
    return false;
  }

  return true;
}

var Context$1 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

var Provider$1 = /*#__PURE__*/function (_React$Component) {
  _inherits(Provider, _React$Component);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function () {
      _this.props.accordionContext.toggleExpanded(_this.props.uuid);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (accordionContext) {
      var _this$props = _this.props,
          uuid = _this$props.uuid,
          dangerouslySetExpanded = _this$props.dangerouslySetExpanded;
      var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext.isItemExpanded(uuid);
      var disabled = accordionContext.isItemDisabled(uuid);
      var panelAttributes = accordionContext.getPanelAttributes(uuid, dangerouslySetExpanded);
      var headingAttributes = accordionContext.getHeadingAttributes(uuid);
      var buttonAttributes = accordionContext.getButtonAttributes(uuid, dangerouslySetExpanded);
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Provider, {
        value: {
          uuid: uuid,
          expanded: expanded,
          disabled: disabled,
          toggleExpanded: _this.toggleExpanded,
          panelAttributes: panelAttributes,
          headingAttributes: headingAttributes,
          buttonAttributes: buttonAttributes
        }
      }, _this.props.children);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, this.renderChildren);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var ProviderWrapper = function ProviderWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (accordionContext) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Consumer, _React$PureComponent);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var defaultProps = {
  className: 'accordion__item'
};

var AccordionItem = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionItem, _React$Component);

  var _super = _createSuper(AccordionItem);

  function AccordionItem() {
    var _this;

    _classCallCheck(this, AccordionItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "instanceUuid", nextUuid());

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (itemContext) {
      var _this$props = _this.props,
          uuid = _this$props.uuid,
          className = _this$props.className,
          activeClassName = _this$props.activeClassName,
          dangerouslySetExpanded = _this$props.dangerouslySetExpanded,
          rest = _objectWithoutProperties(_this$props, ["uuid", "className", "activeClassName", "dangerouslySetExpanded"]);

      var expanded = itemContext.expanded;
      var cx = expanded && activeClassName ? activeClassName : className;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItem",
        className: cx
      }, rest));
    });

    return _this;
  }

  _createClass(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$uuid = _this$props2.uuid,
          uuid = _this$props2$uuid === void 0 ? this.instanceUuid : _this$props2$uuid,
          dangerouslySetExpanded = _this$props2.dangerouslySetExpanded,
          rest = _objectWithoutProperties(_this$props2, ["uuid", "dangerouslySetExpanded"]);

      assertValidHtmlId(uuid);

      if (rest.id) {
        assertValidHtmlId(rest.id);
      }

      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProviderWrapper, {
        uuid: uuid,
        dangerouslySetExpanded: dangerouslySetExpanded
      }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, this.renderChildren));
    }
  }]);

  return AccordionItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(AccordionItem, "defaultProps", defaultProps);

_defineProperty(AccordionItem, "displayName", DisplayName$1.AccordionItem);

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  DOWN: '40',
  END: '35',
  ENTER: '13',
  HOME: '36',
  LEFT: '37',
  RIGHT: '39',
  SPACE: '32',
  UP: '38'
};

var AccordionItemButton = function AccordionItemButton(_ref) {
  var toggleExpanded = _ref.toggleExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__button' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["toggleExpanded", "className"]);

  var handleKeyPress = function handleKeyPress(evt) {
    var keyCode = evt.which.toString();

    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE) {
      evt.preventDefault();
      toggleExpanded();
    }
    /* The following block is ignored from test coverage because at time
     * time of writing Jest/react-testing-library can not assert 'focus'
     * functionality.
     */
    // istanbul ignore next


    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME:
          {
            evt.preventDefault();
            focusFirstSiblingOf(evt.target);
            break;
          }

        case keycodes.END:
          {
            evt.preventDefault();
            focusLastSiblingOf(evt.target);
            break;
          }

        case keycodes.LEFT:
        case keycodes.UP:
          {
            evt.preventDefault();
            focusPreviousSiblingOf(evt.target);
            break;
          }

        case keycodes.RIGHT:
        case keycodes.DOWN:
          {
            evt.preventDefault();
            focusNextSiblingOf(evt.target);
            break;
          }
      }
    }
  };

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    className: className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

var defaultProps$1 = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  var _super = _createSuper(AccordionItemHeading);

  function AccordionItemHeading() {
    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps$1);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;

    if (props.id) {
      assertValidHtmlId(props.id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var AccordionItemPanel = function AccordionItemPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__panel' : _ref$className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "id"]);

  var renderChildren = function renderChildren(_ref2) {
    var panelAttributes = _ref2.panelAttributes;

    if (id) {
      assertValidHtmlId(id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className: className
    }, rest, panelAttributes));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};

var AccordionItemState = function AccordionItemState(_ref) {
  var children = _ref.children;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded,
        disabled = itemContext.disabled;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children({
      expanded: expanded,
      disabled: disabled
    }));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9IZWFkaW5nL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9Nb2JpbGVTZWFyY2hWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXIvTGlzdGluZy9TZWFyY2gvTW9iaWxlU2VhcmNoVmlldy5zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2RyYXdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9lcy9EcmF3ZXJDaGlsZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWRyYXdlci9lcy9EcmF3ZXJXcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtZHJhd2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtZHJhd2VyL2VzL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Qb3J0YWxXcmFwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9nZXRTY3JvbGxCYXJTaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9zZXRTdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvc3dpdGNoU2Nyb2xsaW5nRWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvZ2V0U2Nyb2xsQmFyU2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGluZ1dyYXBwZXIiLCJzdHlsZWQiLCJiYXNlIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRoZW1lZCIsIkhlYWRpbmciLCJjb250ZW50IiwicHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJlbGVtZW50IiwiYXMiLCJvbmVPZiIsIm51bWJlciIsImFycmF5T2YiLCJkZWZhdWx0UHJvcHMiLCJtdCIsIm1iIiwiaGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJzZXJjaFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJhbWVuaXRpZXMiLCJwYXlsb2FkIiwicHJvcGVydHkiLCJzZXRTdGFydERhdGUiLCJzZXRFbmREYXRlIiwibWluUHJpY2UiLCJtYXhQcmljZSIsInJvb20iLCJndWVzdCIsIkZpbHRlckRyYXdlciIsInVzZUNvbnRleHQiLCJTZWFyY2hDb250ZXh0IiwiZGlzcGF0Y2giLCJpbml0aWFsU3RhdGUiLCJwYXJzZUludCIsImxvY2F0aW9uX2xhdCIsImxvY2F0aW9uX2xuZyIsInVzZVJlZHVjZXIiLCJjdXJyZW50IiwiZGlzcGF0Y2hDdXJyZW50IiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJjb3VudFJvb20iLCJzZXRSb29tIiwiY291bnRHdWVzdCIsInNldEd1ZXN0IiwiaGFuZGxlVG9nZ2xlRHJhd2VyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInF1ZXJ5IiwibW9kaWZpZWRDdXJyZW50Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkYXRlX3JhbmdlIiwicHJpY2UiLCJoYW5kbGVBcHBseUZpbHRlciIsInBhcmFtcyIsInNldFN0YXRlVG9VcmwiLCJwdXNoIiwic2VhcmNoIiwiaGFuZGxlQ2xvc2VEcmF3ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBbWVuaXRpZXMiLCJvcHRpb25zIiwiZ2V0UHJvcGVydHlUeXBlIiwicHJpY2VJbml0IiwibW9tZW50IiwiY2FsZW5kZXJJdGVtIiwiZmFkZUluIiwia2V5ZnJhbWVzIiwiUm9vbUd1ZXN0V3JhcHBlciIsImRpdiIsInRoZW1lR2V0IiwiSXRlbVdyYXBwZXIiLCJGaWx0ZXJBcmVhIiwiRmlsdGVyRWxlbWVudHNXcmFwcGVyIiwiQnV0dG9uR3JvdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDLEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxHQUNsQkMsMENBRGtCLEVBRWxCQyx3REFGa0IsRUFHbEJDLHdEQUhrQixFQUlsQkMsdURBSmtCLEVBS2xCQyx3REFMa0IsRUFNbEJDLDJEQU5rQixFQU9sQkMsb0RBQU0sQ0FBQyxTQUFELENBUFksQ0FBcEI7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFlQyxLQUFmOztBQUFBLFNBQ2QsTUFBQyxjQUFELHlGQUFvQkEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE0QkQsT0FBNUIsQ0FEYztBQUFBLENBQWhCOztLQUFNRCxPO0FBSU5BLE9BQU8sQ0FBQ0csU0FBUjtBQUNFRixTQUFPLEVBQUVHLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FBQ0QsaURBQVMsQ0FBQ0UsTUFBWCxFQUFtQkYsaURBQVMsQ0FBQ0csT0FBN0IsQ0FBcEIsQ0FEWDtBQUVFQyxJQUFFLEVBQUVKLGlEQUFTLENBQUNLLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FBaEIsQ0FGTjtBQUdFZixZQUFVLEVBQUVVLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FDOUJELGlEQUFTLENBQUNF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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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LHdCQUF3QiwyREFBYSxDQUFDLDhDQUFRO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVtTSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRXZWlnaHQsXHJcbiAgdGV4dEFsaWduLFxyXG4gIGxpbmVIZWlnaHQsXHJcbiAgbGV0dGVyU3BhY2luZyxcclxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcclxuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XHJcblxyXG5jb25zdCBIZWFkaW5nV3JhcHBlciA9IHN0eWxlZCgncCcpKFxyXG4gIGJhc2UsXHJcbiAgZm9udEZhbWlseSxcclxuICBmb250V2VpZ2h0LFxyXG4gIHRleHRBbGlnbixcclxuICBsaW5lSGVpZ2h0LFxyXG4gIGxldHRlclNwYWNpbmcsXHJcbiAgdGhlbWVkKCdIZWFkaW5nJylcclxuKTtcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPEhlYWRpbmdXcmFwcGVyIHsuLi5wcm9wc30+e2NvbnRlbnR9PC9IZWFkaW5nV3JhcHBlcj5cclxuKTtcclxuXHJcbkhlYWRpbmcucHJvcFR5cGVzID0ge1xyXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXHJcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pLFxyXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIGZvbnRXZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXHJcbiAgICApLFxyXG4gIF0pLFxyXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgbGV0dGVyU3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICksXHJcbiAgXSksXHJcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXHJcbn07XHJcblxyXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICBhczogJ2gyJyxcclxuICBtdDogMCxcclxuICBtYjogMCxcclxuICBmb250V2VpZ2h0OiA3MDAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9IZWFkaW5nL0hlYWRpbmcnO1xyXG5pbXBvcnQgeyBTbGlkZXIsIERyYXdlciwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSW5wdXRJbmNEZWMgZnJvbSAnY29tcG9uZW50cy9VSS9JbnB1dEluY0RlYy9JbnB1dEluY0RlYyc7XHJcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXIgZnJvbSAnY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMnO1xyXG5pbXBvcnQgeyBzZXRTdGF0ZVRvVXJsIH0gZnJvbSAnbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyJztcclxuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvU2VhcmNoUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93RG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb24sXHJcbiAgQWNjb3JkaW9uSXRlbSxcclxuICBBY2NvcmRpb25JdGVtSGVhZGluZyxcclxuICBBY2NvcmRpb25JdGVtQnV0dG9uLFxyXG4gIEFjY29yZGlvbkl0ZW1QYW5lbCxcclxufSBmcm9tICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbic7XHJcblxyXG5pbXBvcnQge1xyXG4gIHByaWNlSW5pdCxcclxuICBjYWxlbmRlckl0ZW0sXHJcbiAgZ2V0QW1lbml0aWVzLFxyXG4gIGdldFByb3BlcnR5VHlwZSxcclxufSBmcm9tICcuL1NlYXJjaFBhcmFtcyc7XHJcbmltcG9ydCB7XHJcbiAgRmlsdGVyQXJlYSxcclxuICBGaWx0ZXJFbGVtZW50c1dyYXBwZXIsXHJcbiAgQnV0dG9uR3JvdXAsXHJcbiAgUm9vbUd1ZXN0V3JhcHBlcixcclxuICBJdGVtV3JhcHBlcixcclxufSBmcm9tICcuL01vYmlsZVNlYXJjaFZpZXcuc3R5bGUnO1xyXG5cclxuY29uc3QgaGlzdG9yeSA9IHByb2Nlc3MuYnJvd3NlciA/IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkgOiBmYWxzZTtcclxuY29uc3QgbG9jYXRpb24gPSBwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uO1xyXG5cclxuZnVuY3Rpb24gc2VyY2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdhbWVuaXRpZXMnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYW1lbml0aWVzOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAncHJvcGVydHknOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvcGVydHk6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdkYXRlX3JhbmdlJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZXRTdGFydERhdGU6IGFjdGlvbi5wYXlsb2FkLnNldFN0YXJ0RGF0ZSxcclxuICAgICAgICBzZXRFbmREYXRlOiBhY3Rpb24ucGF5bG9hZC5zZXRFbmREYXRlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAncHJpY2UnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1pblByaWNlOiBhY3Rpb24ucGF5bG9hZC5taW5QcmljZSxcclxuICAgICAgICBtYXhQcmljZTogYWN0aW9uLnBheWxvYWQubWF4UHJpY2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdyb29tJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByb29tOiBhY3Rpb24ucGF5bG9hZC5yb29tLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnZ3Vlc3QnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGd1ZXN0OiBhY3Rpb24ucGF5bG9hZC5ndWVzdCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ3Jlc2V0JzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBGaWx0ZXJEcmF3ZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcclxuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhbWVuaXRpZXM6IHN0YXRlLmFtZW5pdGllcyB8fCBbXSxcclxuICAgIHByb3BlcnR5OiBzdGF0ZS5wcm9wZXJ0eSB8fCBbXSxcclxuICAgIHNldFN0YXJ0RGF0ZTogc3RhdGUuc2V0U3RhcnREYXRlIHx8IG51bGwsXHJcbiAgICBzZXRFbmREYXRlOiBzdGF0ZS5zZXRFbmREYXRlIHx8IG51bGwsXHJcbiAgICBtaW5QcmljZTogcGFyc2VJbnQoc3RhdGUubWluUHJpY2UpIHx8IDAsXHJcbiAgICBtYXhQcmljZTogcGFyc2VJbnQoc3RhdGUubWF4UHJpY2UpIHx8IDEwMCxcclxuICAgIGxvY2F0aW9uX2xhdDogc3RhdGUubG9jYXRpb25fbGF0IHx8IG51bGwsXHJcbiAgICBsb2NhdGlvbl9sbmc6IHN0YXRlLmxvY2F0aW9uX2xuZyB8fCBudWxsLFxyXG4gICAgcm9vbTogcGFyc2VJbnQoc3RhdGUucm9vbSkgfHwgMCxcclxuICAgIGd1ZXN0OiBwYXJzZUludChzdGF0ZS5ndWVzdCkgfHwgMCxcclxuICB9O1xyXG4gIGNvbnN0IFtjdXJyZW50LCBkaXNwYXRjaEN1cnJlbnRdID0gdXNlUmVkdWNlcihzZXJjaFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgLy8gc3RhdGUgZm9yIGRyYXdlclxyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gUm9vbSBndWVzdCBzdGF0ZVxyXG4gIGNvbnN0IFtjb3VudFJvb20sIHNldFJvb21dID0gdXNlU3RhdGUoY3VycmVudC5yb29tKTtcclxuICBjb25zdCBbY291bnRHdWVzdCwgc2V0R3Vlc3RdID0gdXNlU3RhdGUoY3VycmVudC5ndWVzdCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBEcmF3ZXJcclxuICBjb25zdCBoYW5kbGVUb2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGUoIXRvZ2dsZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gZGF0YSBoYW5kbGluZ1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCB0eXBlKSA9PiB7XHJcbiAgICBsZXQgcXVlcnkgPSB7fTtcclxuICAgIGxldCBtb2RpZmllZEN1cnJlbnQgPSBjdXJyZW50O1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIG1vZGlmaWVkQ3VycmVudCkge1xyXG4gICAgICBpZiAobW9kaWZpZWRDdXJyZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgY2FzZSAnZGF0ZV9yYW5nZSc6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtb2RpZmllZEN1cnJlbnQuZGF0ZV9yYW5nZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdwcmljZSc6XHJcbiAgICAgICAgICAgIGRlbGV0ZSBtb2RpZmllZEN1cnJlbnQucHJpY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZGF0ZV9yYW5nZScpIHtcclxuICAgICAgcXVlcnkgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICBzZXRTdGFydERhdGU6IHZhbHVlLnNldFN0YXJ0RGF0ZSxcclxuICAgICAgICBzZXRFbmREYXRlOiB2YWx1ZS5zZXRFbmREYXRlLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ByaWNlJykge1xyXG4gICAgICBxdWVyeSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgIG1pblByaWNlOiB2YWx1ZSA/IHZhbHVlWzBdIDogMCxcclxuICAgICAgICBtYXhQcmljZTogdmFsdWUgPyB2YWx1ZVsxXSA6IDEwMCxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyb29tJykge1xyXG4gICAgICBxdWVyeSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgIHJvb206IHZhbHVlID8gdmFsdWUgOiAwLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBxdWVyeSB9KTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2d1ZXN0Jykge1xyXG4gICAgICBxdWVyeSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgIGd1ZXN0OiB2YWx1ZSA/IHZhbHVlIDogMCxcclxuICAgICAgfTtcclxuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcclxuICAgICAgc2V0Um9vbSgwKTtcclxuICAgICAgc2V0R3Vlc3QoMCk7XHJcbiAgICAgIHF1ZXJ5ID0ge1xyXG4gICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgc2V0U3RhcnREYXRlOiBudWxsLFxyXG4gICAgICAgIHNldEVuZERhdGU6IG51bGwsXHJcbiAgICAgICAgcm9vbTogMCxcclxuICAgICAgICBndWVzdDogMCxcclxuICAgICAgICBhbWVuaXRpZXM6IFtdLFxyXG4gICAgICAgIHByb3BlcnR5OiBbXSxcclxuICAgICAgICBtaW5QcmljZTogMCxcclxuICAgICAgICBtYXhQcmljZTogMTAwLFxyXG4gICAgICAgIGxvY2F0aW9uX2xhdDogbnVsbCxcclxuICAgICAgICBsb2NhdGlvbl9sbmc6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHF1ZXJ5IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcXVlcnkgPSB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICBbdHlwZV06IHZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiB2YWx1ZSB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseUZpbHRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHNldFN0YXRlVG9VcmwoY3VycmVudCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxyXG4gICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgaGlzdG9yeS5wdXNoKHtcclxuICAgICAgLi4ubG9jYXRpb24sXHJcbiAgICAgIHNlYXJjaDogcGFyYW1zLFxyXG4gICAgfSk7XHJcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0Um9vbSgwKTtcclxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICBzZXRTdGFydERhdGU6IG51bGwsXHJcbiAgICAgIHNldEVuZERhdGU6IG51bGwsXHJcbiAgICAgIHJvb206IDAsXHJcbiAgICAgIGd1ZXN0OiAwLFxyXG4gICAgICBhbWVuaXRpZXM6IFtdLFxyXG4gICAgICBwcm9wZXJ0eTogW10sXHJcbiAgICAgIG1pblByaWNlOiAwLFxyXG4gICAgICBtYXhQcmljZTogMTAwLFxyXG4gICAgICBsb2NhdGlvbl9sYXQ6IG51bGwsXHJcbiAgICAgIGxvY2F0aW9uX2xuZzogbnVsbCxcclxuICAgIH07XHJcbiAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiAncmVzZXQnLCBwYXlsb2FkOiBxdWVyeSB9KTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1VQREFURScsXHJcbiAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKHF1ZXJ5KTtcclxuICAgIGhpc3RvcnkucHVzaCh7XHJcbiAgICAgIC4uLmxvY2F0aW9uLFxyXG4gICAgICBzZWFyY2g6IHBhcmFtcyxcclxuICAgIH0pO1xyXG4gICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZpbHRlckFyZWE+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXt0b2dnbGUgPyAnYWN0aXZlJyA6ICcnfSBvbkNsaWNrPXtoYW5kbGVUb2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgIE1vcmUgZmlsdGVyc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcl9kcmF3ZXJcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMHZoXCJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cclxuICAgICAgICBtYXNrQ2xvc2FibGU9e2ZhbHNlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRHJhd2VyfVxyXG4gICAgICAgIHZpc2libGU9e3RvZ2dsZX1cclxuICAgICAgICBtYXNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnIH19XHJcbiAgICAgID5cclxuICAgICAgICA8RmlsdGVyRWxlbWVudHNXcmFwcGVyPlxyXG4gICAgICAgICAgPEFjY29yZGlvbiBhbGxvd1plcm9FeHBhbmRlZD17dHJ1ZX0+XHJcbiAgICAgICAgICAgIHsvKiBTdGFydCBhbWVuaXRpZXMgZmlsdGVyIGVsZW1lbnQgKi99XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkFtZW5pdGllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtnZXRBbWVuaXRpZXMub3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnQuYW1lbml0aWVzfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZSwgJ2FtZW5pdGllcycpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICB7LyogRW5kIG9mIGFtZW5pdGllcyBmaWx0ZXIgZWxlbWVudCAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiBTdGFydCBwcm9wZXJ0eSB0eXBlIGZpbHRlciBlbGVtZW50ICovfVxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIGNvbnRlbnQ9XCJQcm9wZXJ0eSBUeXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldFByb3BlcnR5VHlwZS5vcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VycmVudC5wcm9wZXJ0eX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdwcm9wZXJ0eScpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICB7LyogRW5kIG9mIHByb3BlcnR5IHR5cGUgZmlsdGVyIGVsZW1lbnQgKi99XHJcblxyXG4gICAgICAgICAgICB7LyogU3RhcnQgcHJpY2UgcmFuZ2UgZmlsdGVyIGVsZW1lbnQgKi99XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIlNlbGVjdCBQcmljZSBSYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgcmFuZ2VcclxuICAgICAgICAgICAgICAgICAgbWFya3M9e3ByaWNlSW5pdH1cclxuICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtbY3VycmVudC5taW5QcmljZSwgY3VycmVudC5tYXhQcmljZV19XHJcbiAgICAgICAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdwcmljZScpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICB7LyogRW5kIG9mIHByaWNlIHJhbmdlIGZpbHRlciBlbGVtZW50ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIFN0YXJ0IGRhdGUgZmlsdGVyIGVsZW1lbnQgKi99XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkNob29zZSBEYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPElvSW9zQXJyb3dEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVBhbmVsPlxyXG4gICAgICAgICAgICAgICAgPERhdGVSYW5nZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGVJZD1cInN0YXJ0RGF0ZS1pZC1tb2JpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBlbmREYXRlSWQ9XCJlbmREYXRlLWlkLW1vYmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5zZXRTdGFydERhdGUgPyBtb21lbnQoY3VycmVudC5zZXRTdGFydERhdGUpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGVuZERhdGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0RW5kRGF0ZSA/IG1vbWVudChjdXJyZW50LnNldEVuZERhdGUpIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG51bWJlck9mTW9udGhzPXsxfVxyXG4gICAgICAgICAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgaXRlbT17Y2FsZW5kZXJJdGVtfVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWFyY2hEYXRhPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLCAnZGF0ZV9yYW5nZScpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICB7LyogRW5kIG9mIGRhdGUgZmlsdGVyIGVsZW1lbnQgKi99XHJcblxyXG4gICAgICAgICAgICB7LyogUm9vbSAmIEd1ZXN0IHR5cGUgZmlsdGVyIGVsZW1lbnQgKi99XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkNob29zZSBSb29tIGFuZCBHdWVzdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxyXG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cclxuICAgICAgICAgICAgICAgIDxSb29tR3Vlc3RXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJvb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJvb20oKGNvdW50Um9vbSkgPT4gY291bnRSb29tICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGNvdW50Um9vbSArIDEsICdyb29tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJvb20oKGNvdW50Um9vbSkgPT4gY291bnRSb29tID4gMCAmJiBjb3VudFJvb20gLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvdW50Um9vbSkgPT4gY291bnRSb29tID4gMCAmJiBjb3VudFJvb20gLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdyb29tJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudFJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9JdGVtV3JhcHBlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxJdGVtV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkd1ZXN0PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImd1ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzdCgoY291bnRHdWVzdCkgPT4gY291bnRHdWVzdCArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShjb3VudEd1ZXN0ICsgMSwgJ2d1ZXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEd1ZXN0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjb3VudEd1ZXN0KSA9PiBjb3VudEd1ZXN0ID4gMCAmJiBjb3VudEd1ZXN0IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY291bnRHdWVzdCkgPT4gY291bnRHdWVzdCA+IDAgJiYgY291bnRHdWVzdCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2d1ZXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudEd1ZXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8L1Jvb21HdWVzdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICAgey8qIEVuZCBvZiBSb29tICYgR3Vlc3QgdHlwZSBmaWx0ZXIgZWxlbWVudCAqL31cclxuICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG5cclxuICAgICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZURyYXdlcn0+Q2FuY2VsIEZpbHRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQXBwbHlGaWx0ZXJ9PlxyXG4gICAgICAgICAgICAgIEFwcGx5IEZpbHRlclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgPC9GaWx0ZXJFbGVtZW50c1dyYXBwZXI+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9GaWx0ZXJBcmVhPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcmF3ZXI7XHJcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XHJcblxyXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSb29tR3Vlc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLnF1YW50aXR5IHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uLmJ0biBzdmcge1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJBcmVhID0gc3R5bGVkLmRpdmBcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBidXR0b24sXHJcbiAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgfVxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyRWxlbWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5hY2NvcmRpb24ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcclxuXHJcbiAgICAvKiBhY2NvcmRpb24gaXRlbSBzdHlsZSAqL1xyXG4gICAgLmFjY29yZGlvbl9faXRlbSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIGFjY29yZGlvbiBoZWFkaW5nIHN0eWxlICovXHJcbiAgICAgIC5hY2NvcmRpb25fX2hlYWRpbmcge1xyXG4gICAgICAgIC5hY2NvcmRpb25fX2J1dHRvbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDI5cHggMDtcclxuICAgICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyYzJjMmMnKX07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogYWNjb3JkaW9uIHBhbmVsIHN0eWxlICovXHJcbiAgICAgIC5hY2NvcmRpb25fX3BhbmVsIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjlweDtcclxuICAgICAgICBhbmltYXRpb246IDAuMjVzICR7ZmFkZUlufSBlYXNlO1xyXG4gICAgICAgICZbaGlkZGVuXSB7XHJcbiAgICAgICAgICBhbmltYXRpb246IDAuMjVzICR7ZmFkZUlufSBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogZGF0ZSBwaWNrZXIgc3R5bGUgKi9cclxuICAgICAgICAuZGF0ZV9waWNrZXIge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXIge1xyXG4gICAgICAgICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xyXG4gICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5EYXRlSW5wdXRfX3NtYWxsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDZweCk7XHJcbiAgICAgICAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLkRhdGVSYW5nZVBpY2tlcl9waWNrZXIge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBjaGVja2JveCBncm91cCBzdHlsZSAqL1xyXG4gICAgICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAuYW50LWNoZWNrYm94IHtcclxuICAgICAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYuYW50LWNoZWNrYm94LWNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gge1xyXG4gICAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBwcmljZSByYW5nZSBjb21wb25lbnQgc3R5bGUgKi9cclxuICAgICAgICAuYW50LXNsaWRlciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LXNsaWRlci1yYWlsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hbnQtc2xpZGVyLXRyYWNrIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LXNsaWRlci1zdGVwIHtcclxuICAgICAgICAgICAgLmFudC1zbGlkZXItZG90IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW50LXNsaWRlci1oYW5kbGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4ICR7dGhlbWVHZXQoJ2NvbG9yLjUnLCAncmdiYSgwLCAwLCAwLCAwLjI1KScpfTtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFudC1zbGlkZXItbWFyayB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLW1hcmstdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgYnV0dG9uLmFudC1idG4ge1xyXG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgJi5hbnQtYnRuLXByaW1hcnkge1xyXG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xyXG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0RyYXdlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWRyYXdlclwiKSk7XG5cbnZhciBfZ2V0U2Nyb2xsQmFyU2l6ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL2dldFNjcm9sbEJhclNpemVcIikpO1xuXG52YXIgX0Nsb3NlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DbG9zZU91dGxpbmVkXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgRHJhd2VyQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFBsYWNlbWVudFR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0Jyk7XG52YXIgZGVmYXVsdFB1c2hTdGF0ZSA9IHtcbiAgZGlzdGFuY2U6IDE4MFxufTtcblxudmFyIERyYXdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKERyYXdlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoRHJhd2VyKTtcblxuICBmdW5jdGlvbiBEcmF3ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBEcmF3ZXIpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwdXNoOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdGhpcy5wdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnB1c2gpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHB1c2g6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnB1bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMucHVzaCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcHVzaDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRGVzdHJveVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaXNEZXN0cm95T25DbG9zZSA9IF90aGlzLmdldERlc3Ryb3lPbkNsb3NlKCk7XG5cbiAgICAgIGlmICghaXNEZXN0cm95T25DbG9zZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICBfdGhpcy5kZXN0cm95Q2xvc2UgPSB0cnVlO1xuXG4gICAgICAgIF90aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldERlc3Ryb3lPbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLmRlc3Ryb3lPbkNsb3NlICYmICFfdGhpcy5wcm9wcy52aXNpYmxlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRQdXNoRGlzdGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHVzaCA9IF90aGlzLnByb3BzLnB1c2g7XG4gICAgICB2YXIgZGlzdGFuY2U7XG5cbiAgICAgIGlmICh0eXBlb2YgcHVzaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGRpc3RhbmNlID0gcHVzaCA/IGRlZmF1bHRQdXNoU3RhdGUuZGlzdGFuY2UgOiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzdGFuY2UgPSBwdXNoLmRpc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChTdHJpbmcoZGlzdGFuY2UgfHwgMCkpO1xuICAgIH07IC8vIGdldCBkcmF3ZXIgcHVzaCB3aWR0aCBvciBoZWlnaHRcblxuXG4gICAgX3RoaXMuZ2V0UHVzaFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9IF90aGlzLmdldFB1c2hEaXN0YW5jZSgpO1xuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHBsYWNlbWVudCA9PT0gJ2xlZnQnID8gZGlzdGFuY2UgOiAtZGlzdGFuY2UsIFwicHgpXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAndG9wJyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIHJldHVybiBcInRyYW5zbGF0ZVkoXCIuY29uY2F0KHBsYWNlbWVudCA9PT0gJ3RvcCcgPyBkaXN0YW5jZSA6IC1kaXN0YW5jZSwgXCJweClcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldFJjRHJhd2VyU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB6SW5kZXggPSBfdGhpcyRwcm9wcy56SW5kZXgsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHMucGxhY2VtZW50LFxuICAgICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wcy5tYXNrLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgcHVzaCA9IF90aGlzLnN0YXRlLnB1c2g7IC8vIOW9k+aXoCBtYXNrIOaXtu+8jOWwhiB3aWR0aCDlupTnlKjliLDlpJblsYLlrrnlmajkuIpcbiAgICAgIC8vIOino+WGsyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xMjQwMSDnmoTpl67pophcblxuICAgICAgdmFyIG9mZnNldFN0eWxlID0gbWFzayA/IHt9IDogX3RoaXMuZ2V0T2Zmc2V0U3R5bGUoKTtcbiAgICAgIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgIHRyYW5zZm9ybTogcHVzaCA/IF90aGlzLmdldFB1c2hUcmFuc2Zvcm0ocGxhY2VtZW50KSA6IHVuZGVmaW5lZFxuICAgICAgfSwgb2Zmc2V0U3R5bGUpLCBzdHlsZSk7XG4gICAgfTsgLy8gcmVuZGVyIGRyYXdlciBib2R5IGRvbVxuXG5cbiAgICBfdGhpcy5yZW5kZXJCb2R5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGJvZHlTdHlsZSA9IF90aGlzJHByb3BzMi5ib2R5U3R5bGUsXG4gICAgICAgICAgZHJhd2VyU3R5bGUgPSBfdGhpcyRwcm9wczIuZHJhd2VyU3R5bGUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMyLnZpc2libGU7XG5cbiAgICAgIGlmIChfdGhpcy5kZXN0cm95Q2xvc2UgJiYgIXZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRlc3Ryb3lDbG9zZSA9IGZhbHNlO1xuICAgICAgdmFyIGNvbnRhaW5lclN0eWxlID0ge307XG5cbiAgICAgIHZhciBpc0Rlc3Ryb3lPbkNsb3NlID0gX3RoaXMuZ2V0RGVzdHJveU9uQ2xvc2UoKTtcblxuICAgICAgaWYgKGlzRGVzdHJveU9uQ2xvc2UpIHtcbiAgICAgICAgLy8gSW5jcmVhc2UgdGhlIG9wYWNpdHkgdHJhbnNpdGlvbiwgZGVsZXRlIGNoaWxkcmVuIGFmdGVyIGNsb3NpbmcuXG4gICAgICAgIGNvbnRhaW5lclN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBjb250YWluZXJTdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgLjNzJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXItYm9keVwiKSxcbiAgICAgICAgc3R5bGU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRhaW5lclN0eWxlKSwgZHJhd2VyU3R5bGUpLFxuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IF90aGlzLm9uRGVzdHJveVRyYW5zaXRpb25FbmRcbiAgICAgIH0sIF90aGlzLnJlbmRlckhlYWRlcigpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib2R5XCIpLFxuICAgICAgICBzdHlsZTogYm9keVN0eWxlXG4gICAgICB9LCBfdGhpcy5wcm9wcy5jaGlsZHJlbiksIF90aGlzLnJlbmRlckZvb3RlcigpKTtcbiAgICB9OyAvLyByZW5kZXIgUHJvdmlkZXIgZm9yIE11bHRpLWxldmVsIGRyYXdlclxuXG5cbiAgICBfdGhpcy5yZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMucGFyZW50RHJhd2VyID0gdmFsdWU7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfYS5wbGFjZW1lbnQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIG1hc2sgPSBfYS5tYXNrLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbixcbiAgICAgICAgICB2aXNpYmxlID0gX2EudmlzaWJsZSxcbiAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJwbGFjZW1lbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJtYXNrXCIsIFwiZGlyZWN0aW9uXCIsIFwidmlzaWJsZVwiXSk7XG5cbiAgICAgIHZhciBkcmF3ZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgJ25vLW1hc2snOiAhbWFza1xuICAgICAgfSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBjbGFzc05hbWUpO1xuICAgICAgdmFyIG9mZnNldFN0eWxlID0gbWFzayA/IF90aGlzLmdldE9mZnNldFN0eWxlKCkgOiB7fTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEcmF3ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcylcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0RyYXdlcltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGhhbmRsZXI6IGZhbHNlXG4gICAgICB9LCAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0LCBbJ3pJbmRleCcsICdjbG9zYWJsZScsICdjbG9zZUljb24nLCAnZGVzdHJveU9uQ2xvc2UnLCAnZHJhd2VyU3R5bGUnLCAnaGVhZGVyU3R5bGUnLCAnYm9keVN0eWxlJywgJ2Zvb3RlclN0eWxlJywgJ2Zvb3RlcicsICd0aXRsZScsICdwdXNoJywgJ3Zpc2libGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10pLCBvZmZzZXRTdHlsZSwge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgb3BlbjogdmlzaWJsZSxcbiAgICAgICAgc2hvd01hc2s6IG1hc2ssXG4gICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBzdHlsZTogX3RoaXMuZ2V0UmNEcmF3ZXJTdHlsZSgpLFxuICAgICAgICBjbGFzc05hbWU6IGRyYXdlckNsYXNzTmFtZVxuICAgICAgfSksIF90aGlzLnJlbmRlckJvZHkoKSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKERyYXdlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBmaXg6IGRlbGV0ZSBkcmF3ZXIgaW4gY2hpbGQgYW5kIHJlLXJlbmRlciwgbm8gcHVzaCBzdGFydGVkLlxuICAgICAgLy8gPERyYXdlcj57c2hvdyAmJiA8RHJhd2VyIC8+fTwvRHJhd2VyPlxuICAgICAgdmFyIHZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XG5cbiAgICAgIGlmICh2aXNpYmxlICYmIHRoaXMucGFyZW50RHJhd2VyKSB7XG4gICAgICAgIHRoaXMucGFyZW50RHJhd2VyLnB1c2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmVQcm9wcykge1xuICAgICAgdmFyIHZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XG5cbiAgICAgIGlmIChwcmVQcm9wcy52aXNpYmxlICE9PSB2aXNpYmxlICYmIHRoaXMucGFyZW50RHJhd2VyKSB7XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5wYXJlbnREcmF3ZXIucHVzaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGFyZW50RHJhd2VyLnB1bGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIC8vIHVubW91bnQgZHJhd2VyIGluIGNoaWxkLCBjbGVhciBwdXNoLlxuICAgICAgaWYgKHRoaXMucGFyZW50RHJhd2VyKSB7XG4gICAgICAgIHRoaXMucGFyZW50RHJhd2VyLnB1bGwoKTtcbiAgICAgICAgdGhpcy5wYXJlbnREcmF3ZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRPZmZzZXRTdHlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRPZmZzZXRTdHlsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzMy5wbGFjZW1lbnQsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMzLmhlaWdodCxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMzLnZpc2libGUsXG4gICAgICAgICAgbWFzayA9IF90aGlzJHByb3BzMy5tYXNrOyAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yNDI4N1xuXG4gICAgICBpZiAoIXZpc2libGUgJiYgIW1hc2spIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICB2YXIgb2Zmc2V0U3R5bGUgPSB7fTtcblxuICAgICAgaWYgKHBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBvZmZzZXRTdHlsZS53aWR0aCA9IHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2Zmc2V0U3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2Zmc2V0U3R5bGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckhlYWRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWFkZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzNC50aXRsZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczQucHJlZml4Q2xzLFxuICAgICAgICAgIGNsb3NhYmxlID0gX3RoaXMkcHJvcHM0LmNsb3NhYmxlLFxuICAgICAgICAgIGhlYWRlclN0eWxlID0gX3RoaXMkcHJvcHM0LmhlYWRlclN0eWxlO1xuXG4gICAgICBpZiAoIXRpdGxlICYmICFjbG9zYWJsZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGhlYWRlckNsYXNzTmFtZSA9IHRpdGxlID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIikgOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlci1uby10aXRsZVwiKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogaGVhZGVyU3R5bGVcbiAgICAgIH0sIHRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRpdGxlXCIpXG4gICAgICB9LCB0aXRsZSksIGNsb3NhYmxlICYmIHRoaXMucmVuZGVyQ2xvc2VJY29uKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJGb290ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9vdGVyID0gX3RoaXMkcHJvcHM1LmZvb3RlcixcbiAgICAgICAgICBmb290ZXJTdHlsZSA9IF90aGlzJHByb3BzNS5mb290ZXJTdHlsZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczUucHJlZml4Q2xzO1xuXG4gICAgICBpZiAoIWZvb3Rlcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvb3RlckNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBmb290ZXJDbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBmb290ZXJTdHlsZVxuICAgICAgfSwgZm9vdGVyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2xvc2VJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNsb3NlSWNvbigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NhYmxlID0gX3RoaXMkcHJvcHM2LmNsb3NhYmxlLFxuICAgICAgICAgIF90aGlzJHByb3BzNiRjbG9zZUljbyA9IF90aGlzJHByb3BzNi5jbG9zZUljb24sXG4gICAgICAgICAgY2xvc2VJY29uID0gX3RoaXMkcHJvcHM2JGNsb3NlSWNvID09PSB2b2lkIDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpIDogX3RoaXMkcHJvcHM2JGNsb3NlSWNvLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNi5wcmVmaXhDbHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzNi5vbkNsb3NlO1xuICAgICAgcmV0dXJuIGNsb3NhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgb25DbGljazogb25DbG9zZSxcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNsb3NlXCIpLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICctLXNjcm9sbC1iYXInOiBcIlwiLmNvbmNhdCgoMCwgX2dldFNjcm9sbEJhclNpemVbXCJkZWZhdWx0XCJdKSgpLCBcInB4XCIpXG4gICAgICAgIH1cbiAgICAgIH0sIGNsb3NlSWNvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhd2VyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJQcm92aWRlcik7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBEcmF3ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAyNTYsXG4gIGhlaWdodDogMjU2LFxuICBjbG9zYWJsZTogdHJ1ZSxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gIG1hc2s6IHRydWUsXG4gIGxldmVsOiBudWxsLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcHVzaDogZGVmYXVsdFB1c2hTdGF0ZVxufTtcblxudmFyIERyYXdlcldyYXBwZXIgPSBmdW5jdGlvbiBEcmF3ZXJXcmFwcGVyKHByb3BzKSB7XG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjdXN0b21pemVHZXRDb250YWluZXIgPSBwcm9wcy5nZXRDb250YWluZXI7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2RyYXdlcicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBnZXRDb250YWluZXIgPSAvLyDmnInlj6/og73kuLogZmFsc2XvvIzmiYDku6XkuI3og73nm7TmjqXliKTmlq1cbiAgY3VzdG9taXplR2V0Q29udGFpbmVyID09PSB1bmRlZmluZWQgJiYgZ2V0UG9wdXBDb250YWluZXIgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFBvcHVwQ29udGFpbmVyKGRvY3VtZW50LmJvZHkpO1xuICB9IDogY3VzdG9taXplR2V0Q29udGFpbmVyO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhd2VyLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgfSkpO1xufTtcblxuRHJhd2VyV3JhcHBlci5kaXNwbGF5TmFtZSA9ICdEcmF3ZXJXcmFwcGVyJztcbnZhciBfZGVmYXVsdCA9IERyYXdlcldyYXBwZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvZXMvZ2V0U2Nyb2xsQmFyU2l6ZVwiO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lciwgZGF0YVRvQXJyYXksIGdldFRvdWNoUGFyZW50U2Nyb2xsLCBpc051bWVyaWMsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIHRyYW5zZm9ybUFyZ3VtZW50cywgdHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvblN0ciwgd2luZG93SXNVbmRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcbnZhciBjdXJyZW50RHJhd2VyID0ge307XG5cbnZhciBEcmF3ZXJDaGlsZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJhd2VyQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhd2VyQ2hpbGQpO1xuXG4gIGZ1bmN0aW9uIERyYXdlckNoaWxkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYXdlckNoaWxkKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMuZG9tRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZG9tKSB7XG4gICAgICAgIF90aGlzLmRvbS5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhcnRQb3MgPSB7XG4gICAgICAgIHg6IGUudG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlTW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGRpZmZlclggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSBfdGhpcy5zdGFydFBvcy54O1xuICAgICAgdmFyIGRpZmZlclkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSBfdGhpcy5zdGFydFBvcy55O1xuXG4gICAgICBpZiAoKGN1cnJlbnRUYXJnZXQgPT09IF90aGlzLm1hc2tEb20gfHwgY3VycmVudFRhcmdldCA9PT0gX3RoaXMuaGFuZGxlckRvbSB8fCBjdXJyZW50VGFyZ2V0ID09PSBfdGhpcy5jb250ZW50RG9tICYmIGdldFRvdWNoUGFyZW50U2Nyb2xsKGN1cnJlbnRUYXJnZXQsIGUudGFyZ2V0LCBkaWZmZXJYLCBkaWZmZXJZKSkgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZG9tID0gZS50YXJnZXQ7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKGRvbSwgdHJhbnNpdGlvbkVuZCwgX3RoaXMudHJhbnNpdGlvbkVuZCk7XG4gICAgICBkb20uc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FU0MpIHtcbiAgICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbldyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wcy5vcGVuLFxuICAgICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IF90aGlzJHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZTtcblxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBfdGhpcy5jb250ZW50V3JhcHBlciAmJiBlLnByb3BlcnR5TmFtZS5tYXRjaCgvdHJhbnNmb3JtJC8pKSB7XG4gICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cbiAgICAgICAgaWYgKCFvcGVuICYmIF90aGlzLmdldEN1cnJlbnREcmF3ZXJTb21lKCkpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICcnO1xuXG4gICAgICAgICAgaWYgKF90aGlzLm1hc2tEb20pIHtcbiAgICAgICAgICAgIF90aGlzLm1hc2tEb20uc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgX3RoaXMubWFza0RvbS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZnRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBhZnRlclZpc2libGVDaGFuZ2UoISFvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vcGVuTGV2ZWxUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczIub3BlbixcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMi53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0O1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0SG9yaXpvbnRhbEJvID0gX3RoaXMuZ2V0SG9yaXpvbnRhbEJvb2xBbmRQbGFjZW1lbnROYW1lKCksXG4gICAgICAgICAgaXNIb3Jpem9udGFsID0gX3RoaXMkZ2V0SG9yaXpvbnRhbEJvLmlzSG9yaXpvbnRhbCxcbiAgICAgICAgICBwbGFjZW1lbnROYW1lID0gX3RoaXMkZ2V0SG9yaXpvbnRhbEJvLnBsYWNlbWVudE5hbWU7XG5cbiAgICAgIHZhciBjb250ZW50VmFsdWUgPSBfdGhpcy5jb250ZW50RG9tID8gX3RoaXMuY29udGVudERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtpc0hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMDtcbiAgICAgIHZhciB2YWx1ZSA9IChpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodCkgfHwgY29udGVudFZhbHVlO1xuXG4gICAgICBfdGhpcy5zZXRMZXZlbEFuZFNjcm9sbGluZyhvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldExldmVsVHJhbnNmb3JtID0gZnVuY3Rpb24gKG9wZW4sIHBsYWNlbWVudE5hbWUsIHZhbHVlLCByaWdodCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzMy5wbGFjZW1lbnQsXG4gICAgICAgICAgbGV2ZWxNb3ZlID0gX3RoaXMkcHJvcHMzLmxldmVsTW92ZSxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHByb3BzMy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHMzLmVhc2UsXG4gICAgICAgICAgc2hvd01hc2sgPSBfdGhpcyRwcm9wczMuc2hvd01hc2s7IC8vIHJvdXRlciDliIfmjaLml7blj6/og73kvJrlr7zoh7PpobXpnaLlpLHljrvmu5rliqjmnaHvvIzmiYDku6XpnIDopoHml7bml7bojrflj5bjgIJcblxuICAgICAgX3RoaXMubGV2ZWxEb20uZm9yRWFjaChmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKGRvbSwgdHJhbnNpdGlvbkVuZCwgX3RoaXMudHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHZhciBsZXZlbFZhbHVlID0gb3BlbiA/IHZhbHVlIDogMDtcblxuICAgICAgICBpZiAobGV2ZWxNb3ZlKSB7XG4gICAgICAgICAgdmFyICRsZXZlbE1vdmUgPSB0cmFuc2Zvcm1Bcmd1bWVudHMobGV2ZWxNb3ZlLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGRvbSxcbiAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXZlbFZhbHVlID0gb3BlbiA/ICRsZXZlbE1vdmVbMF0gOiAkbGV2ZWxNb3ZlWzFdIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHZhbHVlID0gdHlwZW9mIGxldmVsVmFsdWUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQobGV2ZWxWYWx1ZSwgXCJweFwiKSA6IGxldmVsVmFsdWU7XG4gICAgICAgIHZhciBwbGFjZW1lbnRQb3MgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3AnID8gJHZhbHVlIDogXCItXCIuY29uY2F0KCR2YWx1ZSk7XG4gICAgICAgIHBsYWNlbWVudFBvcyA9IHNob3dNYXNrICYmIHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiByaWdodCA/IFwiY2FsYyhcIi5jb25jYXQocGxhY2VtZW50UG9zLCBcIiArIFwiKS5jb25jYXQocmlnaHQsIFwicHgpXCIpIDogcGxhY2VtZW50UG9zO1xuICAgICAgICBkb20uc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxWYWx1ZSA/IFwiXCIuY29uY2F0KHBsYWNlbWVudE5hbWUsIFwiKFwiKS5jb25jYXQocGxhY2VtZW50UG9zLCBcIilcIikgOiAnJztcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRMZXZlbEFuZFNjcm9sbGluZyA9IGZ1bmN0aW9uIChvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmICghd2luZG93SXNVbmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHJpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA/IGdldFNjcm9sbEJhclNpemUodHJ1ZSkgOiAwO1xuXG4gICAgICAgIF90aGlzLnNldExldmVsVHJhbnNmb3JtKG9wZW4sIHBsYWNlbWVudE5hbWUsIHZhbHVlLCByaWdodCk7XG5cbiAgICAgICAgX3RoaXMudG9nZ2xlU2Nyb2xsaW5nVG9EcmF3ZXJBbmRCb2R5KHJpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKG9wZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b2dnbGVTY3JvbGxpbmdUb0RyYXdlckFuZEJvZHkgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBnZXRPcGVuQ291bnQgPSBfdGhpcyRwcm9wczQuZ2V0T3BlbkNvdW50LFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF90aGlzJHByb3BzNC5nZXRDb250YWluZXIsXG4gICAgICAgICAgc2hvd01hc2sgPSBfdGhpcyRwcm9wczQuc2hvd01hc2ssXG4gICAgICAgICAgb3BlbiA9IF90aGlzJHByb3BzNC5vcGVuO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKTtcbiAgICAgIHZhciBvcGVuQ291bnQgPSBnZXRPcGVuQ291bnQgJiYgZ2V0T3BlbkNvdW50KCk7IC8vIOWkhOeQhiBib2R5IOa7muWKqFxuXG4gICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5ICYmIHNob3dNYXNrKSB7XG4gICAgICAgIHZhciBldmVudEFycmF5ID0gWyd0b3VjaHN0YXJ0J107XG4gICAgICAgIHZhciBkb21BcnJheSA9IFtkb2N1bWVudC5ib2R5LCBfdGhpcy5tYXNrRG9tLCBfdGhpcy5oYW5kbGVyRG9tLCBfdGhpcy5jb250ZW50RG9tXTtcblxuICAgICAgICBpZiAob3BlbiAmJiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0KHJpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3BlbkNvdW50ID09PSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJzsgLy8g5omL5py656aB5ruaXG5cbiAgICAgICAgICBkb21BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKGl0ZW0sIGV2ZW50QXJyYXlbaV0gfHwgJ3RvdWNobW92ZScsIGkgPyBfdGhpcy5yZW1vdmVNb3ZlSGFuZGxlciA6IF90aGlzLnJlbW92ZVN0YXJ0SGFuZGxlciwgX3RoaXMucGFzc2l2ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMuZ2V0Q3VycmVudERyYXdlclNvbWUoKSkge1xuICAgICAgICAgIC8vIOayoeacieW8ueahhueahOeKtuaAgeS4i+a4hemZpCBvdmVyZmxvdztcbiAgICAgICAgICBpZiAoIW9wZW5Db3VudCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSAnJztcblxuICAgICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgX3RoaXMucmVtU2Nyb2xsaW5nRWZmZWN0KHJpZ2h0KTtcbiAgICAgICAgICB9IC8vIOaBouWkjeS6i+S7tlxuXG5cbiAgICAgICAgICBkb21BcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKGl0ZW0sIGV2ZW50QXJyYXlbaV0gfHwgJ3RvdWNobW92ZScsIGkgPyBfdGhpcy5yZW1vdmVNb3ZlSGFuZGxlciA6IF90aGlzLnJlbW92ZVN0YXJ0SGFuZGxlciwgX3RoaXMucGFzc2l2ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKHJpZ2h0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHM1LnBsYWNlbWVudCxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHByb3BzNS5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHM1LmVhc2UsXG4gICAgICAgICAgZ2V0T3BlbkNvdW50ID0gX3RoaXMkcHJvcHM1LmdldE9wZW5Db3VudCxcbiAgICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QgPSBfdGhpcyRwcm9wczUuc3dpdGNoU2Nyb2xsaW5nRWZmZWN0O1xuICAgICAgdmFyIG9wZW5Db3VudCA9IGdldE9wZW5Db3VudCAmJiBnZXRPcGVuQ291bnQoKTtcblxuICAgICAgaWYgKG9wZW5Db3VudCA9PT0gMSkge1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHdpZHRoVHJhbnNpdGlvbiA9IFwid2lkdGggXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgdmFyIHRyYW5zZm9ybVRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSBcIi5jb25jYXQoZHVyYXRpb24sIFwiIFwiKS5jb25jYXQoZWFzZSk7XG4gICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcblxuICAgICAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLVwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVaKDApJztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5kb20pIHtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybVRyYW5zaXRpb24sIFwiLFwiKS5jb25jYXQod2lkdGhUcmFuc2l0aW9uKTtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW1TY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wczYucGxhY2VtZW50LFxuICAgICAgICAgIGR1cmF0aW9uID0gX3RoaXMkcHJvcHM2LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2UgPSBfdGhpcyRwcm9wczYuZWFzZSxcbiAgICAgICAgICBnZXRPcGVuQ291bnQgPSBfdGhpcyRwcm9wczYuZ2V0T3BlbkNvdW50LFxuICAgICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdCA9IF90aGlzJHByb3BzNi5zd2l0Y2hTY3JvbGxpbmdFZmZlY3Q7XG4gICAgICB2YXIgb3BlbkNvdW50ID0gZ2V0T3BlbkNvdW50ICYmIGdldE9wZW5Db3VudCgpO1xuXG4gICAgICBpZiAoIW9wZW5Db3VudCkge1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uU3RyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdmFyIGhlaWdodFRyYW5zaXRpb247XG4gICAgICB2YXIgd2lkdGhUcmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQoZHVyYXRpb24sIFwiIFwiKS5jb25jYXQoZWFzZSk7XG4gICAgICB2YXIgdHJhbnNmb3JtVHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIFwiLmNvbmNhdChkdXJhdGlvbiwgXCIgXCIpLmNvbmNhdChlYXNlKTtcblxuICAgICAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgd2lkdGhUcmFuc2l0aW9uID0gXCJ3aWR0aCAwcyBcIi5jb25jYXQoZWFzZSwgXCIgXCIpLmNvbmNhdChkdXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHJpZ2h0LCBcInB4KVwiKTtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIHdpZHRoVHJhbnNpdGlvbiA9IFwid2lkdGggMHMgXCIuY29uY2F0KGVhc2UsIFwiIFwiKS5jb25jYXQoZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMubWFza0RvbSkge1xuICAgICAgICAgICAgICBfdGhpcy5tYXNrRG9tLnN0eWxlLmxlZnQgPSBcIi1cIi5jb25jYXQocmlnaHQsIFwicHhcIik7XG4gICAgICAgICAgICAgIF90aGlzLm1hc2tEb20uc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSArIFwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KHJpZ2h0LCBcInB4KVwiKTtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVooMCknO1xuICAgICAgICAgICAgaGVpZ2h0VHJhbnNpdGlvbiA9IFwiaGVpZ2h0IDBzIFwiLmNvbmNhdChlYXNlLCBcIiBcIikuY29uY2F0KGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5kb20pIHtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybVRyYW5zaXRpb24sIFwiLFwiKS5jb25jYXQoaGVpZ2h0VHJhbnNpdGlvbiA/IFwiXCIuY29uY2F0KGhlaWdodFRyYW5zaXRpb24sIFwiLFwiKSA6ICcnKS5jb25jYXQod2lkdGhUcmFuc2l0aW9uKTtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q3VycmVudERyYXdlclNvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIU9iamVjdC5rZXlzKGN1cnJlbnREcmF3ZXIpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY3VycmVudERyYXdlcltrZXldO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldExldmVsRG9tID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBsZXZlbCA9IF9yZWYubGV2ZWwsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3JlZi5nZXRDb250YWluZXI7XG5cbiAgICAgIGlmICh3aW5kb3dJc1VuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCk7XG4gICAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyID8gY29udGFpbmVyLnBhcmVudE5vZGUgOiBudWxsO1xuICAgICAgX3RoaXMubGV2ZWxEb20gPSBbXTtcblxuICAgICAgaWYgKGxldmVsID09PSAnYWxsJykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pIDogW107XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lICE9PSAnU0NSSVBUJyAmJiBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NUWUxFJyAmJiBjaGlsZC5ub2RlTmFtZSAhPT0gJ0xJTksnICYmIGNoaWxkICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmxldmVsRG9tLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGxldmVsKSB7XG4gICAgICAgIGRhdGFUb0FycmF5KGxldmVsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGtleSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgX3RoaXMubGV2ZWxEb20ucHVzaChpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldEhvcml6b250YWxCb29sQW5kUGxhY2VtZW50TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfdGhpcy5wcm9wcy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnO1xuICAgICAgdmFyIHBsYWNlbWVudE5hbWUgPSBcInRyYW5zbGF0ZVwiLmNvbmNhdChpc0hvcml6b250YWwgPyAnWCcgOiAnWScpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNIb3Jpem9udGFsOiBpc0hvcml6b250YWwsXG4gICAgICAgIHBsYWNlbWVudE5hbWU6IHBsYWNlbWVudE5hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgX3NlbGY6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhd2VyQ2hpbGQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghd2luZG93SXNVbmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAgICAgdGhpcy5wYXNzaXZlID0gcGFzc2l2ZVN1cHBvcnRlZCA/IHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9IDogZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczcub3BlbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczcuZ2V0Q29udGFpbmVyO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuZHJhd2VySWQgPSBcImRyYXdlcl9pZF9cIi5jb25jYXQoTnVtYmVyKChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSkudG9TdHJpbmcoKSkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB0aGlzLmdldExldmVsRG9tKHRoaXMucHJvcHMpO1xuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgY3VycmVudERyYXdlclt0aGlzLmRyYXdlcklkXSA9IG9wZW47XG4gICAgICAgIH0gLy8g6buY6K6k5omT5byA54q25oCB5pe25o6o5Ye6IGxldmVsO1xuXG5cbiAgICAgICAgdGhpcy5vcGVuTGV2ZWxUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5kb21Gb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczgub3BlbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczguZ2V0Q29udGFpbmVyO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKTtcblxuICAgICAgaWYgKG9wZW4gIT09IHByZXZQcm9wcy5vcGVuKSB7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgdGhpcy5kb21Gb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucGFyZW50Tm9kZSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgIGN1cnJlbnREcmF3ZXJbdGhpcy5kcmF3ZXJJZF0gPSAhIW9wZW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wZW5MZXZlbFRyYW5zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBnZXRPcGVuQ291bnQgPSBfdGhpcyRwcm9wczkuZ2V0T3BlbkNvdW50LFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczkub3BlbixcbiAgICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QgPSBfdGhpcyRwcm9wczkuc3dpdGNoU2Nyb2xsaW5nRWZmZWN0O1xuICAgICAgdmFyIG9wZW5Db3VudCA9IHR5cGVvZiBnZXRPcGVuQ291bnQgPT09ICdmdW5jdGlvbicgJiYgZ2V0T3BlbkNvdW50KCk7XG4gICAgICBkZWxldGUgY3VycmVudERyYXdlclt0aGlzLmRyYXdlcklkXTtcblxuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRMZXZlbFRyYW5zZm9ybShmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcGVuQ291bnQpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QodHJ1ZSk7XG4gICAgICB9XG4gICAgfSAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc25hbWVzLFxuICAgICAgICAgIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczEwLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMTAuY2hpbGRyZW4sXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczEwLnN0eWxlLFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMxMC53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczEwLmhlaWdodCxcbiAgICAgICAgICBkZWZhdWx0T3BlbiA9IF90aGlzJHByb3BzMTAuZGVmYXVsdE9wZW4sXG4gICAgICAgICAgJG9wZW4gPSBfdGhpcyRwcm9wczEwLm9wZW4sXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMxMC5wcmVmaXhDbHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHMxMC5wbGFjZW1lbnQsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wczEwLmxldmVsLFxuICAgICAgICAgIGxldmVsTW92ZSA9IF90aGlzJHByb3BzMTAubGV2ZWxNb3ZlLFxuICAgICAgICAgIGVhc2UgPSBfdGhpcyRwcm9wczEwLmVhc2UsXG4gICAgICAgICAgZHVyYXRpb24gPSBfdGhpcyRwcm9wczEwLmR1cmF0aW9uLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF90aGlzJHByb3BzMTAuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIGhhbmRsZXIgPSBfdGhpcyRwcm9wczEwLmhhbmRsZXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wczEwLm9uQ2hhbmdlLFxuICAgICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IF90aGlzJHByb3BzMTAuYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgIHNob3dNYXNrID0gX3RoaXMkcHJvcHMxMC5zaG93TWFzayxcbiAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBfdGhpcyRwcm9wczEwLm1hc2tDbG9zYWJsZSxcbiAgICAgICAgICBtYXNrU3R5bGUgPSBfdGhpcyRwcm9wczEwLm1hc2tTdHlsZSxcbiAgICAgICAgICBvbkNsb3NlID0gX3RoaXMkcHJvcHMxMC5vbkNsb3NlLFxuICAgICAgICAgIG9uSGFuZGxlQ2xpY2sgPSBfdGhpcyRwcm9wczEwLm9uSGFuZGxlQ2xpY2ssXG4gICAgICAgICAga2V5Ym9hcmQgPSBfdGhpcyRwcm9wczEwLmtleWJvYXJkLFxuICAgICAgICAgIGdldE9wZW5Db3VudCA9IF90aGlzJHByb3BzMTAuZ2V0T3BlbkNvdW50LFxuICAgICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdCA9IF90aGlzJHByb3BzMTAuc3dpdGNoU2Nyb2xsaW5nRWZmZWN0LFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMTAsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwic3R5bGVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImRlZmF1bHRPcGVuXCIsIFwib3BlblwiLCBcInByZWZpeENsc1wiLCBcInBsYWNlbWVudFwiLCBcImxldmVsXCIsIFwibGV2ZWxNb3ZlXCIsIFwiZWFzZVwiLCBcImR1cmF0aW9uXCIsIFwiZ2V0Q29udGFpbmVyXCIsIFwiaGFuZGxlclwiLCBcIm9uQ2hhbmdlXCIsIFwiYWZ0ZXJWaXNpYmxlQ2hhbmdlXCIsIFwic2hvd01hc2tcIiwgXCJtYXNrQ2xvc2FibGVcIiwgXCJtYXNrU3R5bGVcIiwgXCJvbkNsb3NlXCIsIFwib25IYW5kbGVDbGlja1wiLCBcImtleWJvYXJkXCIsIFwiZ2V0T3BlbkNvdW50XCIsIFwic3dpdGNoU2Nyb2xsaW5nRWZmZWN0XCJdKTsgLy8g6aaW5qyh5riy5p+T6YO95bCG5piv5YWz6Zet54q25oCB44CCXG5cblxuICAgICAgdmFyIG9wZW4gPSB0aGlzLmRvbSA/ICRvcGVuIDogZmFsc2U7XG4gICAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9IGNsYXNzbmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzbmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpLCBvcGVuKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBjbGFzc05hbWUgfHwgJycsICEhY2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCAnbm8tbWFzaycsICFzaG93TWFzayksIF9jbGFzc25hbWVzKSk7XG5cbiAgICAgIHZhciBfdGhpcyRnZXRIb3Jpem9udGFsQm8yID0gdGhpcy5nZXRIb3Jpem9udGFsQm9vbEFuZFBsYWNlbWVudE5hbWUoKSxcbiAgICAgICAgICBwbGFjZW1lbnROYW1lID0gX3RoaXMkZ2V0SG9yaXpvbnRhbEJvMi5wbGFjZW1lbnROYW1lOyAvLyDnmb7liIbmr5TkuI7lg4/ntKDliqjnlLvkuI3lkIzmraXvvIznrKzkuIDmrKHmiZPnlKjlkI7lhajnlKjlg4/ntKDliqjnlLvjgIJcbiAgICAgIC8vIGNvbnN0IGRlZmF1bHRWYWx1ZSA9ICF0aGlzLmNvbnRlbnREb20gfHwgIWxldmVsID8gJzEwMCUnIDogYCR7dmFsdWV9cHhgO1xuXG5cbiAgICAgIHZhciBwbGFjZW1lbnRQb3MgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3AnID8gJy0xMDAlJyA6ICcxMDAlJztcbiAgICAgIHZhciB0cmFuc2Zvcm0gPSBvcGVuID8gJycgOiBcIlwiLmNvbmNhdChwbGFjZW1lbnROYW1lLCBcIihcIikuY29uY2F0KHBsYWNlbWVudFBvcywgXCIpXCIpO1xuICAgICAgdmFyIGhhbmRsZXJDaGlsZHJlbiA9IGhhbmRsZXIgJiYgUmVhY3QuY2xvbmVFbGVtZW50KGhhbmRsZXIsIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXIucHJvcHMub25DbGljaykge1xuICAgICAgICAgICAgaGFuZGxlci5wcm9wcy5vbkNsaWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9uSGFuZGxlQ2xpY2spIHtcbiAgICAgICAgICAgIG9uSGFuZGxlQ2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmhhbmRsZXJEb20gPSBjO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIHRhYkluZGV4OiAtMSxcbiAgICAgICAgY2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICBfdGhpczMuZG9tID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgb25LZXlEb3duOiBvcGVuICYmIGtleWJvYXJkID8gdGhpcy5vbktleURvd24gOiB1bmRlZmluZWQsXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZDogdGhpcy5vbldyYXBwZXJUcmFuc2l0aW9uRW5kXG4gICAgICB9KSwgc2hvd01hc2sgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tYXNrXCIpLFxuICAgICAgICBvbkNsaWNrOiBtYXNrQ2xvc2FibGUgPyBvbkNsb3NlIDogdW5kZWZpbmVkLFxuICAgICAgICBzdHlsZTogbWFza1N0eWxlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLm1hc2tEb20gPSBjO1xuICAgICAgICB9XG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LXdyYXBwZXJcIiksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgbXNUcmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICB3aWR0aDogaXNOdW1lcmljKHdpZHRoKSA/IFwiXCIuY29uY2F0KHdpZHRoLCBcInB4XCIpIDogd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBpc051bWVyaWMoaGVpZ2h0KSA/IFwiXCIuY29uY2F0KGhlaWdodCwgXCJweFwiKSA6IGhlaWdodFxuICAgICAgICB9LFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmNvbnRlbnRXcmFwcGVyID0gYztcbiAgICAgICAgfVxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmNvbnRlbnREb20gPSBjO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU3RhcnQ6IG9wZW4gJiYgc2hvd01hc2sgPyB0aGlzLnJlbW92ZVN0YXJ0SGFuZGxlciA6IHVuZGVmaW5lZCxcbiAgICAgICAgb25Ub3VjaE1vdmU6IG9wZW4gJiYgc2hvd01hc2sgPyB0aGlzLnJlbW92ZU1vdmVIYW5kbGVyIDogdW5kZWZpbmVkXG4gICAgICB9LCBjaGlsZHJlbiksIGhhbmRsZXJDaGlsZHJlbikpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzLFxuICAgICAgICAgIF9zZWxmID0gX3JlZjIuX3NlbGY7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuXG4gICAgICBpZiAocHJldlByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgIGxldmVsID0gcHJvcHMubGV2ZWw7XG5cbiAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gcHJldlByb3BzLnBsYWNlbWVudCkge1xuICAgICAgICAgIC8vIHRlc3Qg55qEIGJ1Zywg5pyJ5Yqo55S76L+H5Zy677yM5Yig6ZmkIGRvbVxuICAgICAgICAgIF9zZWxmLmNvbnRlbnREb20gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxldmVsICE9PSBwcmV2UHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICBfc2VsZi5nZXRMZXZlbERvbShwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhd2VyQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRyYXdlckNoaWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0OiBmdW5jdGlvbiBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QoKSB7fVxufTtcbmV4cG9ydCBkZWZhdWx0IERyYXdlckNoaWxkOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfZ2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2dldFByb3RvdHlwZU9mXCI7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuaW1wb3J0IFBvcnRhbCBmcm9tIFwicmMtdXRpbC9lcy9Qb3J0YWxXcmFwcGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hpbGQgZnJvbSAnLi9EcmF3ZXJDaGlsZCc7XG5cbnZhciBEcmF3ZXJXcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEcmF3ZXJXcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKERyYXdlcldyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIERyYXdlcldyYXBwZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJhd2VyV3JhcHBlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLm9uSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25IYW5kbGVDbGljayA9IF90aGlzJHByb3BzLm9uSGFuZGxlQ2xpY2ssXG4gICAgICAgICAgJG9wZW4gPSBfdGhpcyRwcm9wcy5vcGVuO1xuXG4gICAgICBpZiAob25IYW5kbGVDbGljaykge1xuICAgICAgICBvbkhhbmRsZUNsaWNrKGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mICRvcGVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgX29wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiAhX29wZW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xvc2UgPSBfdGhpcyRwcm9wczIub25DbG9zZSxcbiAgICAgICAgICBvcGVuID0gX3RoaXMkcHJvcHMyLm9wZW47XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3BlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb3BlbiA9IHR5cGVvZiBwcm9wcy5vcGVuICE9PSAndW5kZWZpbmVkJyA/IHByb3BzLm9wZW4gOiAhIXByb3BzLmRlZmF1bHRPcGVuO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbjogb3BlblxuICAgIH07XG5cbiAgICBpZiAoJ29uTWFza0NsaWNrJyBpbiBwcm9wcykge1xuICAgICAgY29uc29sZS53YXJuKCdgb25NYXNrQ2xpY2tgIGFyZSByZW1vdmVkLCBwbGVhc2UgdXNlIGBvbkNsb3NlYCBpbnN0ZWFkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEcmF3ZXJXcmFwcGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWZhdWx0T3BlbiA9IF90aGlzJHByb3BzMy5kZWZhdWx0T3BlbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWUgPSBfdGhpcyRwcm9wczMud3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICBmb3JjZVJlbmRlciA9IF90aGlzJHByb3BzMy5mb3JjZVJlbmRlcixcbiAgICAgICAgICBoYW5kbGVyID0gX3RoaXMkcHJvcHMzLmhhbmRsZXIsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMzLCBbXCJkZWZhdWx0T3BlblwiLCBcImdldENvbnRhaW5lclwiLCBcIndyYXBwZXJDbGFzc05hbWVcIiwgXCJmb3JjZVJlbmRlclwiLCBcImhhbmRsZXJcIl0pO1xuXG4gICAgICB2YXIgb3BlbiA9IHRoaXMuc3RhdGUub3BlbjsgLy8g5riy5p+T5Zyo5b2T5YmNIGRvbSDph4zvvJtcblxuICAgICAgaWYgKCFnZXRDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICBfdGhpczIuZG9tID0gYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpbGQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgIGdldENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5kb207XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXG4gICAgICAgICAgb25IYW5kbGVDbGljazogdGhpcy5vbkhhbmRsZUNsaWNrXG4gICAgICAgIH0pKSk7XG4gICAgICB9IC8vIOWmguaenOaciSBoYW5kbGVyIOS4uuWGhee9ruW8uuWItua4suafk++8m1xuXG5cbiAgICAgIHZhciAkZm9yY2VSZW5kZXIgPSAhIWhhbmRsZXIgfHwgZm9yY2VSZW5kZXI7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICAgICAgdmlzaWJsZTogb3BlbixcbiAgICAgICAgZm9yY2VSZW5kZXI6ICRmb3JjZVJlbmRlcixcbiAgICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IHdyYXBwZXJDbGFzc05hbWVcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciB2aXNpYmxlID0gX3JlZi52aXNpYmxlLFxuICAgICAgICAgICAgYWZ0ZXJDbG9zZSA9IF9yZWYuYWZ0ZXJDbG9zZSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmlzaWJsZVwiLCBcImFmdGVyQ2xvc2VcIl0pO1xuXG4gICAgICAgIHJldHVybiAoLy8gcmVhY3QgMTXvvIxjb21wb25lbnRXaWxsVW5tb3VudCDml7YgUG9ydGFsIOi/lOWbniBhZnRlckNsb3NlLCB2aXNpYmxlLlxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hpbGQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCByZXN0LCB7XG4gICAgICAgICAgICBvcGVuOiB2aXNpYmxlICE9PSB1bmRlZmluZWQgPyB2aXNpYmxlIDogb3BlbixcbiAgICAgICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZTogYWZ0ZXJDbG9zZSAhPT0gdW5kZWZpbmVkID8gYWZ0ZXJDbG9zZSA6IHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgICBvbkNsb3NlOiBfdGhpczIub25DbG9zZSxcbiAgICAgICAgICAgIG9uSGFuZGxlQ2xpY2s6IF90aGlzMi5vbkhhbmRsZUNsaWNrXG4gICAgICAgICAgfSkpXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmMikge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IF9yZWYyLnByZXZQcm9wcztcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBwcmV2UHJvcHMgIT09ICd1bmRlZmluZWQnICYmIHByb3BzLm9wZW4gIT09IHByZXZQcm9wcy5vcGVuKSB7XG4gICAgICAgIG5ld1N0YXRlLm9wZW4gPSBwcm9wcy5vcGVuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERyYXdlcldyYXBwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRyYXdlcldyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdkcmF3ZXInLFxuICBwbGFjZW1lbnQ6ICdsZWZ0JyxcbiAgZ2V0Q29udGFpbmVyOiAnYm9keScsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgbGV2ZWw6ICdhbGwnLFxuICBkdXJhdGlvbjogJy4zcycsXG4gIGVhc2U6ICdjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44NiknLFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fSxcbiAgYWZ0ZXJWaXNpYmxlQ2hhbmdlOiBmdW5jdGlvbiBhZnRlclZpc2libGVDaGFuZ2UoKSB7fSxcbiAgaGFuZGxlcjogUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImRyYXdlci1oYW5kbGVcIlxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImRyYXdlci1oYW5kbGUtaWNvblwiXG4gIH0pKSxcbiAgc2hvd01hc2s6IHRydWUsXG4gIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgbWFza1N0eWxlOiB7fSxcbiAgd3JhcHBlckNsYXNzTmFtZTogJycsXG4gIGNsYXNzTmFtZTogJycsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJXcmFwcGVyOyIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBEcmF3ZXIgZnJvbSAnLi9EcmF3ZXJXcmFwcGVyJztcbmV4cG9ydCBkZWZhdWx0IERyYXdlcjsiLCJleHBvcnQgZnVuY3Rpb24gZGF0YVRvQXJyYXkodmFycykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiB2YXJzO1xuICB9XG5cbiAgcmV0dXJuIFt2YXJzXTtcbn1cbnZhciB0cmFuc2l0aW9uRW5kT2JqZWN0ID0ge1xuICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgTW96VHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kJ1xufTtcbmV4cG9ydCB2YXIgdHJhbnNpdGlvblN0ciA9IE9iamVjdC5rZXlzKHRyYW5zaXRpb25FbmRPYmplY3QpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICByZXR1cm4ga2V5IGluIChodG1sID8gaHRtbC5zdHlsZSA6IHt9KTtcbn0pWzBdO1xuZXhwb3J0IHZhciB0cmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZE9iamVjdFt0cmFuc2l0aW9uU3RyXTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAodGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgdGFyZ2V0LmF0dGFjaEV2ZW50KFwib25cIi5jb25jYXQoZXZlbnRUeXBlKSwgY2FsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBpZiAodGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0YXJnZXQuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgdGFyZ2V0LmRldGFjaEV2ZW50KFwib25cIi5jb25jYXQoZXZlbnRUeXBlKSwgY2FsbGJhY2spOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Bcmd1bWVudHMoYXJnLCBjYikge1xuICB2YXIgcmVzdWx0ID0gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZyhjYikgOiBhcmc7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAyKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBbcmVzdWx0WzBdLCByZXN1bHRbMV1dO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHRdO1xufVxuZXhwb3J0IHZhciBpc051bWVyaWMgPSBmdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSkgJiYgaXNGaW5pdGUodmFsdWUpO1xufTtcbmV4cG9ydCB2YXIgd2luZG93SXNVbmRlZmluZWQgPSAhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5leHBvcnQgdmFyIGdldFRvdWNoUGFyZW50U2Nyb2xsID0gZnVuY3Rpb24gZ2V0VG91Y2hQYXJlbnRTY3JvbGwocm9vdCwgY3VycmVudFRhcmdldCwgZGlmZmVyWCwgZGlmZmVyWSkge1xuICBpZiAoIWN1cnJlbnRUYXJnZXQgfHwgY3VycmVudFRhcmdldCA9PT0gZG9jdW1lbnQgfHwgY3VycmVudFRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IC8vIHJvb3Qg5Li6IGRyYXdlci1jb250ZW50IOiuvuWumuS6hiBvdmVyZmxvdywg5Yik5pat5Li6IHJvb3Qg55qEIHBhcmVudCDml7bnu5PmnZ/mu5rliqjvvJtcblxuXG4gIGlmIChjdXJyZW50VGFyZ2V0ID09PSByb290LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc1kgPSBNYXRoLm1heChNYXRoLmFicyhkaWZmZXJYKSwgTWF0aC5hYnMoZGlmZmVyWSkpID09PSBNYXRoLmFicyhkaWZmZXJZKTtcbiAgdmFyIGlzWCA9IE1hdGgubWF4KE1hdGguYWJzKGRpZmZlclgpLCBNYXRoLmFicyhkaWZmZXJZKSkgPT09IE1hdGguYWJzKGRpZmZlclgpO1xuICB2YXIgc2Nyb2xsWSA9IGN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0IC0gY3VycmVudFRhcmdldC5jbGllbnRIZWlnaHQ7XG4gIHZhciBzY3JvbGxYID0gY3VycmVudFRhcmdldC5zY3JvbGxXaWR0aCAtIGN1cnJlbnRUYXJnZXQuY2xpZW50V2lkdGg7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoY3VycmVudFRhcmdldCk7XG4gIHZhciBvdmVyZmxvd1kgPSBzdHlsZS5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBzdHlsZS5vdmVyZmxvd1kgPT09ICdzY3JvbGwnO1xuICB2YXIgb3ZlcmZsb3dYID0gc3R5bGUub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgc3R5bGUub3ZlcmZsb3dYID09PSAnc2Nyb2xsJztcbiAgdmFyIHkgPSBzY3JvbGxZICYmIG92ZXJmbG93WTtcbiAgdmFyIHggPSBzY3JvbGxYICYmIG92ZXJmbG93WDtcblxuICBpZiAoaXNZICYmICgheSB8fCB5ICYmIChjdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA+PSBzY3JvbGxZICYmIGRpZmZlclkgPCAwIHx8IGN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wIDw9IDAgJiYgZGlmZmVyWSA+IDApKSB8fCBpc1ggJiYgKCF4IHx8IHggJiYgKGN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdCA+PSBzY3JvbGxYICYmIGRpZmZlclggPCAwIHx8IGN1cnJlbnRUYXJnZXQuc2Nyb2xsTGVmdCA8PSAwICYmIGRpZmZlclggPiAwKSkpIHtcbiAgICByZXR1cm4gZ2V0VG91Y2hQYXJlbnRTY3JvbGwocm9vdCwgY3VycmVudFRhcmdldC5wYXJlbnROb2RlLCBkaWZmZXJYLCBkaWZmZXJZKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSxyZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByYWYgZnJvbSAnLi9yYWYnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL1BvcnRhbCc7XG5pbXBvcnQgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0IGZyb20gJy4vc3dpdGNoU2Nyb2xsaW5nRWZmZWN0JztcbmltcG9ydCBzZXRTdHlsZSBmcm9tICcuL3NldFN0eWxlJztcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnLi9Eb20vY2FuVXNlRG9tJztcbnZhciBvcGVuQ291bnQgPSAwO1xudmFyIHN1cHBvcnREb20gPSBjYW5Vc2VEb20oKTtcbi8qKiBAcHJpdmF0ZSBUZXN0IHVzYWdlIG9ubHkgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wZW5Db3VudCgpIHtcbiAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcgPyBvcGVuQ291bnQgOiAwO1xufSAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xOTM0MFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTkzMzJcblxudmFyIGNhY2hlT3ZlcmZsb3cgPSB7fTtcblxudmFyIGdldFBhcmVudCA9IGZ1bmN0aW9uIGdldFBhcmVudChnZXRDb250YWluZXIpIHtcbiAgaWYgKCFzdXBwb3J0RG9tKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZ2V0Q29udGFpbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBnZXRDb250YWluZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChnZXRDb250YWluZXIpWzBdO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZ2V0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZ2V0Q29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2YoZ2V0Q29udGFpbmVyKSA9PT0gJ29iamVjdCcgJiYgZ2V0Q29udGFpbmVyIGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZ2V0Q29udGFpbmVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkb2N1bWVudC5ib2R5O1xufTtcblxudmFyIFBvcnRhbFdyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcnRhbFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUG9ydGFsV3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gUG9ydGFsV3JhcHBlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3J0YWxXcmFwcGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuICAgIF90aGlzLmNvbXBvbmVudFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMuYXR0YWNoVG9QYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgICBpZiAoZm9yY2UgfHwgX3RoaXMuY29udGFpbmVyICYmICFfdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KF90aGlzLnByb3BzLmdldENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGhpcy5jb250YWluZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzdXBwb3J0RG9tKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBfdGhpcy5hdHRhY2hUb1BhcmVudCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0V3JhcHBlckNsYXNzTmFtZSgpO1xuXG4gICAgICByZXR1cm4gX3RoaXMuY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRXcmFwcGVyQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSBfdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lO1xuXG4gICAgICBpZiAoX3RoaXMuY29udGFpbmVyICYmIHdyYXBwZXJDbGFzc05hbWUgJiYgd3JhcHBlckNsYXNzTmFtZSAhPT0gX3RoaXMuY29udGFpbmVyLmNsYXNzTmFtZSkge1xuICAgICAgICBfdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gd3JhcHBlckNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlQ3VycmVudENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRjb250YWluZXIsIF90aGlzJGNvbnRhaW5lciRwYXJlbjtcblxuICAgICAgLy8gUG9ydGFsIHdpbGwgcmVtb3ZlIGZyb20gYHBhcmVudE5vZGVgLlxuICAgICAgLy8gTGV0J3MgaGFuZGxlIHRoaXMgYWdhaW4gdG8gYXZvaWQgcmVmYWN0b3IgaXNzdWUuXG4gICAgICAoX3RoaXMkY29udGFpbmVyID0gX3RoaXMuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfdGhpcyRjb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdGhpcyRjb250YWluZXIkcGFyZW4gPSBfdGhpcyRjb250YWluZXIucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX3RoaXMkY29udGFpbmVyJHBhcmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjb250YWluZXIkcGFyZW4ucmVtb3ZlQ2hpbGQoX3RoaXMuY29udGFpbmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuaGFuY2UgLi9zd2l0Y2hTY3JvbGxpbmdFZmZlY3RcbiAgICAgKiAxLiBTaW11bGF0ZSBkb2N1bWVudCBib2R5IHNjcm9sbCBiYXIgd2l0aFxuICAgICAqIDIuIFJlY29yZCBib2R5IGhhcyBvdmVyZmxvdyBzdHlsZSBhbmQgcmVjb3ZlciB3aGVuIGFsbCBvZiBQb3J0YWxXcmFwcGVyIGludmlzaWJsZVxuICAgICAqIDMuIERpc2FibGUgYm9keSBzY3JvbGwgd2hlbiBQb3J0YWxXcmFwcGVyIGhhcyBvcGVuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUG9ydGFsV3JhcHBlclxuICAgICAqL1xuXG5cbiAgICBfdGhpcy5zd2l0Y2hTY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3BlbkNvdW50ID09PSAxICYmICFPYmplY3Qua2V5cyhjYWNoZU92ZXJmbG93KS5sZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KCk7IC8vIE11c3QgYmUgc2V0IGFmdGVyIHN3aXRjaFNjcm9sbGluZ0VmZmVjdFxuXG4gICAgICAgIGNhY2hlT3ZlcmZsb3cgPSBzZXRTdHlsZSh7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wZW5Db3VudCkge1xuICAgICAgICBzZXRTdHlsZShjYWNoZU92ZXJmbG93KTtcbiAgICAgICAgY2FjaGVPdmVyZmxvdyA9IHt9O1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgZ2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0Q29udGFpbmVyO1xuXG4gICAgaWYgKHN1cHBvcnREb20gJiYgZ2V0UGFyZW50KGdldENvbnRhaW5lcikgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIG9wZW5Db3VudCA9IHZpc2libGUgPyBvcGVuQ291bnQgKyAxIDogb3BlbkNvdW50O1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgX3NlbGY6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9ydGFsV3JhcHBlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLmF0dGFjaFRvUGFyZW50KCkpIHtcbiAgICAgICAgdGhpcy5yYWZJZCA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5zZXRXcmFwcGVyQ2xhc3NOYW1lKCk7XG4gICAgICB0aGlzLmF0dGFjaFRvUGFyZW50KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2aXNpYmxlID0gX3RoaXMkcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wcy5nZXRDb250YWluZXI7XG5cbiAgICAgIGlmIChzdXBwb3J0RG9tICYmIGdldFBhcmVudChnZXRDb250YWluZXIpID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIC8vIOemu+W8gOaXtuS4jeS8miByZW5kZXLvvIwg5a+85Yiw56a75byA5pe25pWw5YC85LiN5Y+Y77yM5pS555SoIGZ1bmMg44CC44CCXG4gICAgICAgIG9wZW5Db3VudCA9IHZpc2libGUgJiYgb3BlbkNvdW50ID8gb3BlbkNvdW50IC0gMSA6IG9wZW5Db3VudDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q29udGFpbmVyKCk7XG4gICAgICByYWYuY2FuY2VsKHRoaXMucmFmSWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgZm9yY2VSZW5kZXIgPSBfdGhpcyRwcm9wczIuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMi52aXNpYmxlO1xuICAgICAgdmFyIHBvcnRhbCA9IG51bGw7XG4gICAgICB2YXIgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgZ2V0T3BlbkNvdW50OiBmdW5jdGlvbiBnZXRPcGVuQ291bnQoKSB7XG4gICAgICAgICAgcmV0dXJuIG9wZW5Db3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lcixcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0OiB0aGlzLnN3aXRjaFNjcm9sbGluZ0VmZmVjdFxuICAgICAgfTtcblxuICAgICAgaWYgKGZvcmNlUmVuZGVyIHx8IHZpc2libGUgfHwgdGhpcy5jb21wb25lbnRSZWYuY3VycmVudCkge1xuICAgICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwge1xuICAgICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgICAgcmVmOiB0aGlzLmNvbXBvbmVudFJlZlxuICAgICAgICB9LCBjaGlsZHJlbihjaGlsZFByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwb3J0YWw7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgX3JlZikge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IF9yZWYucHJldlByb3BzLFxuICAgICAgICAgIF9zZWxmID0gX3JlZi5fc2VsZjtcbiAgICAgIHZhciB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBwcm9wcy5nZXRDb250YWluZXI7XG5cbiAgICAgIGlmIChwcmV2UHJvcHMpIHtcbiAgICAgICAgdmFyIHByZXZWaXNpYmxlID0gcHJldlByb3BzLnZpc2libGUsXG4gICAgICAgICAgICBwcmV2R2V0Q29udGFpbmVyID0gcHJldlByb3BzLmdldENvbnRhaW5lcjtcblxuICAgICAgICBpZiAodmlzaWJsZSAhPT0gcHJldlZpc2libGUgJiYgc3VwcG9ydERvbSAmJiBnZXRQYXJlbnQoZ2V0Q29udGFpbmVyKSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgIG9wZW5Db3VudCA9IHZpc2libGUgJiYgIXByZXZWaXNpYmxlID8gb3BlbkNvdW50ICsgMSA6IG9wZW5Db3VudCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZ2V0Q29udGFpbmVySXNGdW5jID0gdHlwZW9mIGdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJldkdldENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJztcblxuICAgICAgICBpZiAoZ2V0Q29udGFpbmVySXNGdW5jID8gZ2V0Q29udGFpbmVyLnRvU3RyaW5nKCkgIT09IHByZXZHZXRDb250YWluZXIudG9TdHJpbmcoKSA6IGdldENvbnRhaW5lciAhPT0gcHJldkdldENvbnRhaW5lcikge1xuICAgICAgICAgIF9zZWxmLnJlbW92ZUN1cnJlbnRDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3J0YWxXcmFwcGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQb3J0YWxXcmFwcGVyOyIsInZhciBjYWNoZWQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoZnJlc2ggfHwgY2FjaGVkID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuICAgIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBvdXRlclN0eWxlID0gb3V0ZXIuc3R5bGU7XG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuICAgIGNhY2hlZCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkO1xufSIsIi8qKlxuICogRWFzeSB0byBzZXQgZWxlbWVudCBzdHlsZSwgcmV0dXJuIHByZXZpb3VzIHN0eWxlXG4gKiBJRSBicm93c2VyIGNvbXBhdGlibGUoSUUgYnJvd3NlciBkb2Vzbid0IG1lcmdlIG92ZXJmbG93IHN0eWxlLCBuZWVkIHRvIHNldCBpdCBzZXBhcmF0ZWx5KVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTkzOTNcbiAqXG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBlbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gZG9jdW1lbnQuYm9keSA6IF9vcHRpb25zJGVsZW1lbnQ7XG4gIHZhciBvbGRTdHlsZSA9IHt9O1xuICB2YXIgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpOyAvLyBJRSBicm93c2VyIGNvbXBhdGlibGVcblxuICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgb2xkU3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgfSk7XG4gIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIG9sZFN0eWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRTdHlsZTsiLCJpbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tICcuL2dldFNjcm9sbEJhclNpemUnO1xuaW1wb3J0IHNldFN0eWxlIGZyb20gJy4vc2V0U3R5bGUnO1xuXG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG59XG5cbnZhciBjYWNoZVN0eWxlID0ge307XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNsb3NlKSB7XG4gIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcoKSAmJiAhY2xvc2UpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTk3MjlcblxuXG4gIHZhciBzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUgPSAnYW50LXNjcm9sbGluZy1lZmZlY3QnO1xuICB2YXIgc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpLCAnZycpO1xuICB2YXIgYm9keUNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lO1xuXG4gIGlmIChjbG9zZSkge1xuICAgIGlmICghc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLnRlc3QoYm9keUNsYXNzTmFtZSkpIHJldHVybjtcbiAgICBzZXRTdHlsZShjYWNoZVN0eWxlKTtcbiAgICBjYWNoZVN0eWxlID0ge307XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NOYW1lLnJlcGxhY2Uoc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLCAnJykudHJpbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzY3JvbGxCYXJTaXplID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpO1xuXG4gIGlmIChzY3JvbGxCYXJTaXplKSB7XG4gICAgY2FjaGVTdHlsZSA9IHNldFN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhclNpemUsIFwicHgpXCIpXG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZVJlZy50ZXN0KGJvZHlDbGFzc05hbWUpKSB7XG4gICAgICB2YXIgYWRkQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQoYm9keUNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBhZGRDbGFzc05hbWUudHJpbSgpO1xuICAgIH1cbiAgfVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTY3JvbGxCYXJTaXplO1xudmFyIGNhY2hlZDtcblxuZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyU2l6ZShmcmVzaCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGZyZXNoIHx8IGNhY2hlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5uZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gJzIwMHB4JztcbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyLnN0eWxlO1xuICAgIG91dGVyU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG91dGVyU3R5bGUudG9wID0gMDtcbiAgICBvdXRlclN0eWxlLmxlZnQgPSAwO1xuICAgIG91dGVyU3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBvdXRlclN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICBvdXRlclN0eWxlLndpZHRoID0gJzIwMHB4JztcbiAgICBvdXRlclN0eWxlLmhlaWdodCA9ICcxNTBweCc7XG4gICAgb3V0ZXJTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG91dGVyLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgICB2YXIgd2lkdGhDb250YWluZWQgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHZhciB3aWR0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gICAgaWYgKHdpZHRoQ29udGFpbmVkID09PSB3aWR0aFNjcm9sbCkge1xuICAgICAgd2lkdGhTY3JvbGwgPSBvdXRlci5jbGllbnRXaWR0aDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgICBjYWNoZWQgPSB3aWR0aENvbnRhaW5lZCAtIHdpZHRoU2Nyb2xsO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZDtcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBQdXJlQ29tcG9uZW50LCBjcmVhdGVDb250ZXh0LCBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgQWNjb3JkaW9uU3RvcmUgPSBmdW5jdGlvbiBBY2NvcmRpb25TdG9yZShfcmVmKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIF9yZWYkZXhwYW5kZWQgPSBfcmVmLmV4cGFuZGVkLFxuICAgICAgX2V4cGFuZGVkID0gX3JlZiRleHBhbmRlZCA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGV4cGFuZGVkLFxuICAgICAgX3JlZiRhbGxvd011bHRpcGxlRXhwID0gX3JlZi5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd011bHRpcGxlRXhwYW5kZWQgPSBfcmVmJGFsbG93TXVsdGlwbGVFeHAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhbGxvd011bHRpcGxlRXhwLFxuICAgICAgX3JlZiRhbGxvd1plcm9FeHBhbmRlID0gX3JlZi5hbGxvd1plcm9FeHBhbmRlZCxcbiAgICAgIGFsbG93WmVyb0V4cGFuZGVkID0gX3JlZiRhbGxvd1plcm9FeHBhbmRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkYWxsb3daZXJvRXhwYW5kZTtcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWNjb3JkaW9uU3RvcmUpO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImV4cGFuZGVkXCIsIHZvaWQgMCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxsb3dNdWx0aXBsZUV4cGFuZGVkXCIsIHZvaWQgMCk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYWxsb3daZXJvRXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b2dnbGVFeHBhbmRlZFwiLCBmdW5jdGlvbiAodXVpZCkge1xuICAgIGlmIChfdGhpcy5pc0l0ZW1EaXNhYmxlZCh1dWlkKSkge1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBpc0V4cGFuZGVkID0gX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG5cbiAgICBpZiAoIWlzRXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5hdWdtZW50KHtcbiAgICAgICAgZXhwYW5kZWQ6IF90aGlzLmFsbG93TXVsdGlwbGVFeHBhbmRlZCA/IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoX3RoaXMuZXhwYW5kZWQpLCBbdXVpZF0pIDogW3V1aWRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF90aGlzLmF1Z21lbnQoe1xuICAgICAgICBleHBhbmRlZDogX3RoaXMuZXhwYW5kZWQuZmlsdGVyKGZ1bmN0aW9uIChleHBhbmRlZFV1aWQpIHtcbiAgICAgICAgICByZXR1cm4gZXhwYW5kZWRVdWlkICE9PSB1dWlkO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0l0ZW1EaXNhYmxlZFwiLCBmdW5jdGlvbiAodXVpZCkge1xuICAgIHZhciBpc0V4cGFuZGVkID0gX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG5cbiAgICB2YXIgaXNPbmx5T25lRXhwYW5kZWQgPSBfdGhpcy5leHBhbmRlZC5sZW5ndGggPT09IDE7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXNFeHBhbmRlZCAmJiAhX3RoaXMuYWxsb3daZXJvRXhwYW5kZWQgJiYgaXNPbmx5T25lRXhwYW5kZWQpO1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpc0l0ZW1FeHBhbmRlZFwiLCBmdW5jdGlvbiAodXVpZCkge1xuICAgIHJldHVybiBfdGhpcy5leHBhbmRlZC5pbmRleE9mKHV1aWQpICE9PSAtMTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0UGFuZWxBdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvbGU6IF90aGlzLmFsbG93TXVsdGlwbGVFeHBhbmRlZCA/IHVuZGVmaW5lZCA6ICdyZWdpb24nLFxuICAgICAgJ2FyaWEtaGlkZGVuJzogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gIWV4cGFuZGVkIDogdW5kZWZpbmVkLFxuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IF90aGlzLmdldEJ1dHRvbklkKHV1aWQpLFxuICAgICAgaWQ6IF90aGlzLmdldFBhbmVsSWQodXVpZCksXG4gICAgICBoaWRkZW46IGV4cGFuZGVkID8gdW5kZWZpbmVkIDogdHJ1ZVxuICAgIH07XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEhlYWRpbmdBdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZTogJ2hlYWRpbmcnXG4gICAgfTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0QnV0dG9uQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAodXVpZCwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCkge1xuICAgIHZhciBleHBhbmRlZCA9IGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgIT09IG51bGwgJiYgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gdm9pZCAwID8gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCA6IF90aGlzLmlzSXRlbUV4cGFuZGVkKHV1aWQpO1xuXG4gICAgdmFyIGRpc2FibGVkID0gX3RoaXMuaXNJdGVtRGlzYWJsZWQodXVpZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IF90aGlzLmdldEJ1dHRvbklkKHV1aWQpLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAgICdhcmlhLWV4cGFuZGVkJzogZXhwYW5kZWQsXG4gICAgICAnYXJpYS1jb250cm9scyc6IF90aGlzLmdldFBhbmVsSWQodXVpZCksXG4gICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgIHRhYkluZGV4OiAwXG4gICAgfTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0UGFuZWxJZFwiLCBmdW5jdGlvbiAodXVpZCkge1xuICAgIHJldHVybiBcImFjY29yZGlvbl9fcGFuZWwtXCIuY29uY2F0KHV1aWQpO1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25JZFwiLCBmdW5jdGlvbiAodXVpZCkge1xuICAgIHJldHVybiBcImFjY29yZGlvbl9faGVhZGluZy1cIi5jb25jYXQodXVpZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImF1Z21lbnRcIiwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IEFjY29yZGlvblN0b3JlKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIGV4cGFuZGVkOiBfdGhpcy5leHBhbmRlZCxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQ6IF90aGlzLmFsbG93WmVyb0V4cGFuZGVkXG4gICAgfSwgYXJncykpO1xuICB9KTtcblxuICB0aGlzLmV4cGFuZGVkID0gX2V4cGFuZGVkO1xuICB0aGlzLmFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IGFsbG93TXVsdGlwbGVFeHBhbmRlZDtcbiAgdGhpcy5hbGxvd1plcm9FeHBhbmRlZCA9IGFsbG93WmVyb0V4cGFuZGVkO1xufTtcblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcbnZhciBQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFByb3ZpZGVyLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcm92aWRlcik7XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhdGVcIiwgbmV3IEFjY29yZGlvblN0b3JlKHtcbiAgICAgIGV4cGFuZGVkOiBfdGhpcy5wcm9wcy5wcmVFeHBhbmRlZCxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogX3RoaXMucHJvcHMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQ6IF90aGlzLnByb3BzLmFsbG93WmVyb0V4cGFuZGVkXG4gICAgfSkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInRvZ2dsZUV4cGFuZGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUudG9nZ2xlRXhwYW5kZWQoa2V5KTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoX3RoaXMuc3RhdGUuZXhwYW5kZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpc0l0ZW1EaXNhYmxlZFwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuaXNJdGVtRGlzYWJsZWQoa2V5KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpc0l0ZW1FeHBhbmRlZFwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuaXNJdGVtRXhwYW5kZWQoa2V5KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJnZXRQYW5lbEF0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKGtleSwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLmdldFBhbmVsQXR0cmlidXRlcyhrZXksIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldEhlYWRpbmdBdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHV1aWQ6IFVVSURcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5nZXRIZWFkaW5nQXR0cmlidXRlcygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldEJ1dHRvbkF0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKGtleSwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLmdldEJ1dHRvbkF0dHJpYnV0ZXMoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgYWxsb3daZXJvRXhwYW5kZWQgPSBfdGhpcyRzdGF0ZS5hbGxvd1plcm9FeHBhbmRlZCxcbiAgICAgICAgICBhbGxvd011bHRpcGxlRXhwYW5kZWQgPSBfdGhpcyRzdGF0ZS5hbGxvd011bHRpcGxlRXhwYW5kZWQ7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgICAgICAgIGFsbG93WmVyb0V4cGFuZGVkOiBhbGxvd1plcm9FeHBhbmRlZCxcbiAgICAgICAgICB0b2dnbGVFeHBhbmRlZDogdGhpcy50b2dnbGVFeHBhbmRlZCxcbiAgICAgICAgICBpc0l0ZW1EaXNhYmxlZDogdGhpcy5pc0l0ZW1EaXNhYmxlZCxcbiAgICAgICAgICBpc0l0ZW1FeHBhbmRlZDogdGhpcy5pc0l0ZW1FeHBhbmRlZCxcbiAgICAgICAgICBnZXRQYW5lbEF0dHJpYnV0ZXM6IHRoaXMuZ2V0UGFuZWxBdHRyaWJ1dGVzLFxuICAgICAgICAgIGdldEhlYWRpbmdBdHRyaWJ1dGVzOiB0aGlzLmdldEhlYWRpbmdBdHRyaWJ1dGVzLFxuICAgICAgICAgIGdldEJ1dHRvbkF0dHJpYnV0ZXM6IHRoaXMuZ2V0QnV0dG9uQXR0cmlidXRlc1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IG51bGwpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcm92aWRlcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShQcm92aWRlciwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBhbGxvd011bHRpcGxlRXhwYW5kZWQ6IGZhbHNlLFxuICBhbGxvd1plcm9FeHBhbmRlZDogZmFsc2Vcbn0pO1xuXG52YXIgQ29uc3VtZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50Mikge1xuICBfaW5oZXJpdHMoQ29uc3VtZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoQ29uc3VtZXIpO1xuXG4gIGZ1bmN0aW9uIENvbnN1bWVyKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJyZW5kZXJDaGlsZHJlblwiLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyID8gX3RoaXMyLnByb3BzLmNoaWxkcmVuKGNvbnRhaW5lcikgOiBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25zdW1lciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0LkNvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uc3VtZXI7XG59KFB1cmVDb21wb25lbnQpO1xuXG52YXIgQWNjb3JkaW9uID0gZnVuY3Rpb24gQWNjb3JkaW9uKF9yZWYpIHtcbiAgdmFyIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJ2FjY29yZGlvbicgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF9yZWYuYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQgPSBfcmVmLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgcHJlRXhwYW5kZWQgPSBfcmVmLnByZUV4cGFuZGVkLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJhbGxvd011bHRpcGxlRXhwYW5kZWRcIiwgXCJhbGxvd1plcm9FeHBhbmRlZFwiLCBcIm9uQ2hhbmdlXCIsIFwicHJlRXhwYW5kZWRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChQcm92aWRlciwge1xuICAgIHByZUV4cGFuZGVkOiBwcmVFeHBhbmRlZCxcbiAgICBhbGxvd011bHRpcGxlRXhwYW5kZWQ6IGFsbG93TXVsdGlwbGVFeHBhbmRlZCxcbiAgICBhbGxvd1plcm9FeHBhbmRlZDogYWxsb3daZXJvRXhwYW5kZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlXG4gIH0sIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvblwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHJlc3QpKSk7XG59O1xuXG52YXIgRGlzcGxheU5hbWU7XG5cbihmdW5jdGlvbiAoRGlzcGxheU5hbWUpIHtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25cIl0gPSBcIkFjY29yZGlvblwiO1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvbkl0ZW1cIl0gPSBcIkFjY29yZGlvbkl0ZW1cIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtQnV0dG9uXCJdID0gXCJBY2NvcmRpb25JdGVtQnV0dG9uXCI7XG4gIERpc3BsYXlOYW1lW1wiQWNjb3JkaW9uSXRlbUhlYWRpbmdcIl0gPSBcIkFjY29yZGlvbkl0ZW1IZWFkaW5nXCI7XG4gIERpc3BsYXlOYW1lW1wiQWNjb3JkaW9uSXRlbVBhbmVsXCJdID0gXCJBY2NvcmRpb25JdGVtUGFuZWxcIjtcbn0pKERpc3BsYXlOYW1lIHx8IChEaXNwbGF5TmFtZSA9IHt9KSk7XG5cbnZhciBEaXNwbGF5TmFtZSQxID0gRGlzcGxheU5hbWU7XG5cbnZhciBERUZBVUxUID0gMDtcbnZhciBjb3VudGVyID0gREVGQVVMVDtcbmZ1bmN0aW9uIG5leHRVdWlkKCkge1xuICB2YXIgY3VycmVudCA9IGNvdW50ZXI7XG4gIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgcmV0dXJuIFwicmFhLVwiLmNvbmNhdChjdXJyZW50KTtcbn1cbmZ1bmN0aW9uIHJlc2V0TmV4dFV1aWQoKSB7XG4gIGNvdW50ZXIgPSBERUZBVUxUO1xufSAvLyBIVE1MNSBpZHMgYWxsb3cgYWxsIHVuaWNvZGUgY2hhcmFjdGVycywgZXhjZXB0IGZvciBBU0NJSSB3aGl0ZXNwYWNlc1xuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXdoaXRlc3BhY2Vcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5cbnZhciBpZFJlZ2V4ID0gL1tcXHUwMDA5XFx1MDAwYVxcdTAwMGNcXHUwMDBkXFx1MDAyMF0vZztcbmZ1bmN0aW9uIGFzc2VydFZhbGlkSHRtbElkKGh0bWxJZCkge1xuICBpZiAoaHRtbElkID09PSAnJyB8fCBpZFJlZ2V4LnRlc3QoaHRtbElkKSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ1dWlkIG11c3QgYmUgYSB2YWxpZCBIVE1MNSBpZCBidXQgd2FzIGdpdmVuIFxcXCJcIi5jb25jYXQoaHRtbElkLCBcIlxcXCIsIEFTQ0lJIHdoaXRlc3BhY2VzIGFyZSBmb3JiaWRkZW5cIikpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgQ29udGV4dCQxID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQobnVsbCk7XG5cbnZhciBQcm92aWRlciQxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcm92aWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQcm92aWRlcik7XG5cbiAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidG9nZ2xlRXhwYW5kZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucHJvcHMuYWNjb3JkaW9uQ29udGV4dC50b2dnbGVFeHBhbmRlZChfdGhpcy5wcm9wcy51dWlkKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZW5kZXJDaGlsZHJlblwiLCBmdW5jdGlvbiAoYWNjb3JkaW9uQ29udGV4dCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdXVpZCA9IF90aGlzJHByb3BzLnV1aWQsXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCA9IF90aGlzJHByb3BzLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQ7XG4gICAgICB2YXIgZXhwYW5kZWQgPSBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSBudWxsICYmIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgIT09IHZvaWQgMCA/IGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgOiBhY2NvcmRpb25Db250ZXh0LmlzSXRlbUV4cGFuZGVkKHV1aWQpO1xuICAgICAgdmFyIGRpc2FibGVkID0gYWNjb3JkaW9uQ29udGV4dC5pc0l0ZW1EaXNhYmxlZCh1dWlkKTtcbiAgICAgIHZhciBwYW5lbEF0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldFBhbmVsQXR0cmlidXRlcyh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICAgIHZhciBoZWFkaW5nQXR0cmlidXRlcyA9IGFjY29yZGlvbkNvbnRleHQuZ2V0SGVhZGluZ0F0dHJpYnV0ZXModXVpZCk7XG4gICAgICB2YXIgYnV0dG9uQXR0cmlidXRlcyA9IGFjY29yZGlvbkNvbnRleHQuZ2V0QnV0dG9uQXR0cmlidXRlcyh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0JDEuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICB1dWlkOiB1dWlkLFxuICAgICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgdG9nZ2xlRXhwYW5kZWQ6IF90aGlzLnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICAgIHBhbmVsQXR0cmlidXRlczogcGFuZWxBdHRyaWJ1dGVzLFxuICAgICAgICAgIGhlYWRpbmdBdHRyaWJ1dGVzOiBoZWFkaW5nQXR0cmlidXRlcyxcbiAgICAgICAgICBidXR0b25BdHRyaWJ1dGVzOiBidXR0b25BdHRyaWJ1dGVzXG4gICAgICAgIH1cbiAgICAgIH0sIF90aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJDaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG52YXIgUHJvdmlkZXJXcmFwcGVyID0gZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGFjY29yZGlvbkNvbnRleHQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUHJvdmlkZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBhY2NvcmRpb25Db250ZXh0OiBhY2NvcmRpb25Db250ZXh0XG4gICAgfSkpO1xuICB9KTtcbn07XG52YXIgQ29uc3VtZXIkMSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnN1bWVyLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoQ29uc3VtZXIpO1xuXG4gIGZ1bmN0aW9uIENvbnN1bWVyKCkge1xuICAgIHZhciBfdGhpczI7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc3VtZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMyKSwgXCJyZW5kZXJDaGlsZHJlblwiLCBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gY29udGFpbmVyID8gX3RoaXMyLnByb3BzLmNoaWxkcmVuKGNvbnRhaW5lcikgOiBudWxsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb25zdW1lciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0JDEuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25zdW1lcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJ2FjY29yZGlvbl9faXRlbSdcbn07XG5cbnZhciBBY2NvcmRpb25JdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBY2NvcmRpb25JdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFjY29yZGlvbkl0ZW0pO1xuXG4gIGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjY29yZGlvbkl0ZW0pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpbnN0YW5jZVV1aWRcIiwgbmV4dFV1aWQoKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVuZGVyQ2hpbGRyZW5cIiwgZnVuY3Rpb24gKGl0ZW1Db250ZXh0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB1dWlkID0gX3RoaXMkcHJvcHMudXVpZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEV4cGFuZGVkLFxuICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMsIFtcInV1aWRcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVDbGFzc05hbWVcIiwgXCJkYW5nZXJvdXNseVNldEV4cGFuZGVkXCJdKTtcblxuICAgICAgdmFyIGV4cGFuZGVkID0gaXRlbUNvbnRleHQuZXhwYW5kZWQ7XG4gICAgICB2YXIgY3ggPSBleHBhbmRlZCAmJiBhY3RpdmVDbGFzc05hbWUgPyBhY3RpdmVDbGFzc05hbWUgOiBjbGFzc05hbWU7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1cIixcbiAgICAgICAgY2xhc3NOYW1lOiBjeFxuICAgICAgfSwgcmVzdCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFjY29yZGlvbkl0ZW0sIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBfdGhpcyRwcm9wczIkdXVpZCA9IF90aGlzJHByb3BzMi51dWlkLFxuICAgICAgICAgIHV1aWQgPSBfdGhpcyRwcm9wczIkdXVpZCA9PT0gdm9pZCAwID8gdGhpcy5pbnN0YW5jZVV1aWQgOiBfdGhpcyRwcm9wczIkdXVpZCxcbiAgICAgICAgICBkYW5nZXJvdXNseVNldEV4cGFuZGVkID0gX3RoaXMkcHJvcHMyLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczIsIFtcInV1aWRcIiwgXCJkYW5nZXJvdXNseVNldEV4cGFuZGVkXCJdKTtcblxuICAgICAgYXNzZXJ0VmFsaWRIdG1sSWQodXVpZCk7XG5cbiAgICAgIGlmIChyZXN0LmlkKSB7XG4gICAgICAgIGFzc2VydFZhbGlkSHRtbElkKHJlc3QuaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUHJvdmlkZXJXcmFwcGVyLCB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQ6IGRhbmdlcm91c2x5U2V0RXhwYW5kZWRcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIHRoaXMucmVuZGVyQ2hpbGRyZW4pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWNjb3JkaW9uSXRlbTtcbn0oQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KEFjY29yZGlvbkl0ZW0sIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbl9kZWZpbmVQcm9wZXJ0eShBY2NvcmRpb25JdGVtLCBcImRpc3BsYXlOYW1lXCIsIERpc3BsYXlOYW1lJDEuQWNjb3JkaW9uSXRlbSk7XG5cbmZ1bmN0aW9uIGdldENsb3Nlc3RBY2NvcmRpb24oZWwpIHtcbiAgcmV0dXJuIGVsICYmIChlbC5tYXRjaGVzKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uXCJdJykgPyBlbCA6IGdldENsb3Nlc3RBY2NvcmRpb24oZWwucGFyZW50RWxlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkge1xuICB2YXIgcGFyZW50QWNjb3JkaW9uID0gZ2V0Q2xvc2VzdEFjY29yZGlvbihpdGVtKTtcbiAgcmV0dXJuIHBhcmVudEFjY29yZGlvbiAmJiBBcnJheS5mcm9tKHBhcmVudEFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uSXRlbUJ1dHRvblwiXScpKTtcbn1cbmZ1bmN0aW9uIGZvY3VzRmlyc3RTaWJsaW5nT2YoaXRlbSkge1xuICB2YXIgc2libGluZ3MgPSBnZXRTaWJsaW5nQnV0dG9ucyhpdGVtKSB8fCBbXTtcbiAgdmFyIGZpcnN0ID0gc2libGluZ3NbMF07XG5cbiAgaWYgKGZpcnN0KSB7XG4gICAgZmlyc3QuZm9jdXMoKTtcbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNMYXN0U2libGluZ09mKGl0ZW0pIHtcbiAgdmFyIHNpYmxpbmdzID0gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkgfHwgW107XG4gIHZhciBsYXN0ID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBsYXN0LmZvY3VzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvY3VzTmV4dFNpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBuZXh0ID0gc2libGluZ3NbY3VycmVudEluZGV4ICsgMV07XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNQcmV2aW91c1NpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBwcmV2aW91cyA9IHNpYmxpbmdzW2N1cnJlbnRJbmRleCAtIDFdO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG52YXIga2V5Y29kZXMgPSB7XG4gIERPV046ICc0MCcsXG4gIEVORDogJzM1JyxcbiAgRU5URVI6ICcxMycsXG4gIEhPTUU6ICczNicsXG4gIExFRlQ6ICczNycsXG4gIFJJR0hUOiAnMzknLFxuICBTUEFDRTogJzMyJyxcbiAgVVA6ICczOCdcbn07XG5cbnZhciBBY2NvcmRpb25JdGVtQnV0dG9uID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUJ1dHRvbihfcmVmKSB7XG4gIHZhciB0b2dnbGVFeHBhbmRlZCA9IF9yZWYudG9nZ2xlRXhwYW5kZWQsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX2J1dHRvbicgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widG9nZ2xlRXhwYW5kZWRcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBoYW5kbGVLZXlQcmVzcyA9IGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2dCkge1xuICAgIHZhciBrZXlDb2RlID0gZXZ0LndoaWNoLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0ga2V5Y29kZXMuRU5URVIgfHwga2V5Q29kZSA9PT0ga2V5Y29kZXMuU1BBQ0UpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgLyogVGhlIGZvbGxvd2luZyBibG9jayBpcyBpZ25vcmVkIGZyb20gdGVzdCBjb3ZlcmFnZSBiZWNhdXNlIGF0IHRpbWVcbiAgICAgKiB0aW1lIG9mIHdyaXRpbmcgSmVzdC9yZWFjdC10ZXN0aW5nLWxpYnJhcnkgY2FuIG5vdCBhc3NlcnQgJ2ZvY3VzJ1xuICAgICAqIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXG4gICAgaWYgKGV2dC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Y29kZXMuSE9NRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvY3VzRmlyc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5FTkQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c0xhc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLlVQOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9jdXNQcmV2aW91c1NpYmxpbmdPZihldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIGtleWNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLkRPV046XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c05leHRTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChyZXN0LmlkKSB7XG4gICAgYXNzZXJ0VmFsaWRIdG1sSWQocmVzdC5pZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQ2xpY2s6IHRvZ2dsZUV4cGFuZGVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5UHJlc3MsXG4gICAgXCJkYXRhLWFjY29yZGlvbi1jb21wb25lbnRcIjogXCJBY2NvcmRpb25JdGVtQnV0dG9uXCJcbiAgfSkpO1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUJ1dHRvbldyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciB0b2dnbGVFeHBhbmRlZCA9IGl0ZW1Db250ZXh0LnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzID0gaXRlbUNvbnRleHQuYnV0dG9uQXR0cmlidXRlcztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uSXRlbUJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgdG9nZ2xlRXhwYW5kZWQ6IHRvZ2dsZUV4cGFuZGVkXG4gICAgfSwgcHJvcHMsIGJ1dHRvbkF0dHJpYnV0ZXMpKTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzJDEgPSB7XG4gIGNsYXNzTmFtZTogJ2FjY29yZGlvbl9faGVhZGluZycsXG4gICdhcmlhLWxldmVsJzogM1xufTtcbnZhciBTUEVDX0VSUk9SID0gXCJBY2NvcmRpb25JdGVtQnV0dG9uIG1heSBjb250YWluIG9ubHkgb25lIGNoaWxkIGVsZW1lbnQsIHdoaWNoIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgQWNjb3JkaW9uSXRlbUJ1dHRvbi5cXG5cXG5Gcm9tIHRoZSBXQUktQVJJQSBzcGVjIChodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLTEuMS8jYWNjb3JkaW9uKTpcXG5cXG5cXHUyMDFDVGhlIGJ1dHRvbiBlbGVtZW50IGlzIHRoZSBvbmx5IGVsZW1lbnQgaW5zaWRlIHRoZSBoZWFkaW5nIGVsZW1lbnQuIFRoYXQgaXMsIGlmIHRoZXJlIGFyZSBvdGhlciB2aXN1YWxseSBwZXJzaXN0ZW50IGVsZW1lbnRzLCB0aGV5IGFyZSBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBoZWFkaW5nIGVsZW1lbnQuXFx1MjAxRFxcblxcblwiO1xudmFyIEFjY29yZGlvbkl0ZW1IZWFkaW5nID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWNjb3JkaW9uSXRlbUhlYWRpbmcsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKEFjY29yZGlvbkl0ZW1IZWFkaW5nKTtcblxuICBmdW5jdGlvbiBBY2NvcmRpb25JdGVtSGVhZGluZygpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWNjb3JkaW9uSXRlbUhlYWRpbmcpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRSZWZcIiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMucmVmID0gcmVmO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgQWNjb3JkaW9uSXRlbUhlYWRpbmcuVkFMSURBVEUodGhpcy5yZWYpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIEFjY29yZGlvbkl0ZW1IZWFkaW5nLlZBTElEQVRFKHRoaXMucmVmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uSXRlbUhlYWRpbmdcIlxuICAgICAgfSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IHRoaXMuc2V0UmVmXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiVkFMSURBVEVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gVkFMSURBVEUocmVmKSB7XG4gICAgICBpZiAocmVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWYgaXMgdW5kZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHJlZi5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSAmJiByZWYuZmlyc3RFbGVtZW50Q2hpbGQgJiYgcmVmLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1hY2NvcmRpb24tY29tcG9uZW50JykgPT09ICdBY2NvcmRpb25JdGVtQnV0dG9uJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNQRUNfRVJST1IpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY2NvcmRpb25JdGVtSGVhZGluZztcbn0oUHVyZUNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShBY2NvcmRpb25JdGVtSGVhZGluZywgXCJkZWZhdWx0UHJvcHNcIiwgZGVmYXVsdFByb3BzJDEpO1xuXG52YXIgQWNjb3JkaW9uSXRlbUhlYWRpbmdXcmFwcGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUhlYWRpbmdXcmFwcGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCBmdW5jdGlvbiAoaXRlbUNvbnRleHQpIHtcbiAgICB2YXIgaGVhZGluZ0F0dHJpYnV0ZXMgPSBpdGVtQ29udGV4dC5oZWFkaW5nQXR0cmlidXRlcztcblxuICAgIGlmIChwcm9wcy5pZCkge1xuICAgICAgYXNzZXJ0VmFsaWRIdG1sSWQocHJvcHMuaWQpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChBY2NvcmRpb25JdGVtSGVhZGluZywgX2V4dGVuZHMoe30sIHByb3BzLCBoZWFkaW5nQXR0cmlidXRlcykpO1xuICB9KTtcbn07XG5cbkFjY29yZGlvbkl0ZW1IZWFkaW5nV3JhcHBlci5kaXNwbGF5TmFtZSA9IERpc3BsYXlOYW1lJDEuQWNjb3JkaW9uSXRlbUhlYWRpbmc7XG5cbnZhciBBY2NvcmRpb25JdGVtUGFuZWwgPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtUGFuZWwoX3JlZikge1xuICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnYWNjb3JkaW9uX19wYW5lbCcgOiBfcmVmJGNsYXNzTmFtZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3NOYW1lXCIsIFwiaWRcIl0pO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKF9yZWYyKSB7XG4gICAgdmFyIHBhbmVsQXR0cmlidXRlcyA9IF9yZWYyLnBhbmVsQXR0cmlidXRlcztcblxuICAgIGlmIChpZCkge1xuICAgICAgYXNzZXJ0VmFsaWRIdG1sSWQoaWQpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1QYW5lbFwiLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9LCByZXN0LCBwYW5lbEF0dHJpYnV0ZXMpKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29uc3VtZXIkMSwgbnVsbCwgcmVuZGVyQ2hpbGRyZW4pO1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1TdGF0ZSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW1TdGF0ZShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG5cbiAgdmFyIHJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oaXRlbUNvbnRleHQpIHtcbiAgICB2YXIgZXhwYW5kZWQgPSBpdGVtQ29udGV4dC5leHBhbmRlZCxcbiAgICAgICAgZGlzYWJsZWQgPSBpdGVtQ29udGV4dC5kaXNhYmxlZDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGNoaWxkcmVuKHtcbiAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29uc3VtZXIkMSwgbnVsbCwgcmVuZGVyQ2hpbGRyZW4pO1xufTtcblxuZXhwb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25JdGVtLCBBY2NvcmRpb25JdGVtQnV0dG9uV3JhcHBlciBhcyBBY2NvcmRpb25JdGVtQnV0dG9uLCBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIgYXMgQWNjb3JkaW9uSXRlbUhlYWRpbmcsIEFjY29yZGlvbkl0ZW1QYW5lbCwgQWNjb3JkaW9uSXRlbVN0YXRlLCByZXNldE5leHRVdWlkIH07XG4iXSwic291cmNlUm9vdCI6IiJ9