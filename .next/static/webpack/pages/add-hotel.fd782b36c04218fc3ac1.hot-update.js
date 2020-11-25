webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddListing.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddListing.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/switch */ "./node_modules/antd/lib/switch/index.js");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/cascader */ "./node_modules/antd/lib/cascader/index.js");
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tree-select */ "./node_modules/antd/lib/tree-select/index.js");
/* harmony import */ var antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);












var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddListing.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;


var Addlisting = function Addlisting() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__["useState"])("default"),
      componentSize = _useState[0],
      setComponentSize = _useState[1];

  var onFormLayoutChange = function onFormLayoutChange(_ref) {
    var size = _ref.size;
    setComponentSize(size);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    message: "PROPERTY TYPE AND LOCATION",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    layout: "horizontal",
    initialValues: {
      size: componentSize
    },
    onValuesChange: onFormLayoutChange,
    size: componentSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Form Size",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, "Sale"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Rent"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Form Size",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "Homes"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "plots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Plots"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "commercial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Commercial"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Select city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Islamabad"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Rawalpindi"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Karachi"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "TreeSelect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    treeData: [{
      title: "Light",
      value: "light",
      children: [{
        title: "Bamboo",
        value: "bamboo"
      }]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Cascader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    options: [{
      value: "zhejiang",
      label: "Zhejiang",
      children: [{
        value: "hangzhou",
        label: "Hangzhou"
      }]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "DatePicker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "InputNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx(antd_lib_switch__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Button"))));
};

_s(Addlisting, "xIRTPyNQ1OqdacKNaaHyyUgWxJw=");

_c = Addlisting;
/* harmony default export */ __webpack_exports__["default"] = (Addlisting);

var _c;

$RefreshReg$(_c, "Addlisting");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/getDataOrAriaProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/_util/getDataOrAriaProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDataOrAriaProps;

function getDataOrAriaProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if ((key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') && key.substr(0, 7) !== 'data-__') {
      prev[key] = props[key];
    }

    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/antd/lib/alert/ErrorBoundary.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/alert/ErrorBoundary.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! . */ "./node_modules/antd/lib/alert/index.js"));

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ErrorBoundary, _React$Component);

  var _super = (0, _createSuper2["default"])(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    (0, _classCallCheck2["default"])(this, ErrorBoundary);
    _this = _super.apply(this, arguments);
    _this.state = {
      error: undefined,
      info: {
        componentStack: ''
      }
    };
    return _this;
  }

  (0, _createClass2["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      this.setState({
        error: error,
        info: info
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          message = _this$props.message,
          description = _this$props.description,
          children = _this$props.children;
      var _this$state = this.state,
          error = _this$state.error,
          info = _this$state.info;
      var componentStack = info && info.componentStack ? info.componentStack : null;
      var errorMessage = typeof message === 'undefined' ? (error || '').toString() : message;
      var errorDescription = typeof description === 'undefined' ? componentStack : description;

      if (error) {
        return /*#__PURE__*/React.createElement(_["default"], {
          type: "error",
          message: errorMessage,
          description: /*#__PURE__*/React.createElement("pre", null, errorDescription)
        });
      }

      return children;
    }
  }]);
  return ErrorBoundary;
}(React.Component);

exports["default"] = ErrorBoundary;

/***/ }),

/***/ "./node_modules/antd/lib/alert/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/alert/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/@ant-design/icons/InfoCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _rcMotion = _interopRequireDefault(__webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _getDataOrAriaProps = _interopRequireDefault(__webpack_require__(/*! ../_util/getDataOrAriaProps */ "./node_modules/antd/lib/_util/getDataOrAriaProps.js"));

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(/*! ./ErrorBoundary */ "./node_modules/antd/lib/alert/ErrorBoundary.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

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

var iconMapFilled = {
  success: _CheckCircleFilled["default"],
  info: _InfoCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"]
};
var iconMapOutlined = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

var Alert = function Alert(_a) {
  var _classNames2;

  var description = _a.description,
      customizePrefixCls = _a.prefixCls,
      message = _a.message,
      banner = _a.banner,
      _a$className = _a.className,
      className = _a$className === void 0 ? '' : _a$className,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      onClick = _a.onClick,
      afterClose = _a.afterClose,
      showIcon = _a.showIcon,
      closable = _a.closable,
      closeText = _a.closeText,
      props = __rest(_a, ["description", "prefixCls", "message", "banner", "className", "style", "onMouseEnter", "onMouseLeave", "onClick", "afterClose", "showIcon", "closable", "closeText"]);

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      closed = _React$useState2[0],
      setClosed = _React$useState2[1];

  var ref = React.useRef();

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('alert', customizePrefixCls);

  var handleClose = function handleClose(e) {
    var _a;

    setClosed(true);
    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  var getType = function getType() {
    var type = props.type;

    if (type !== undefined) {
      return type;
    } // banner 模式默认为警告


    return banner ? 'warning' : 'info';
  }; // closeable when closeText is assigned


  var isClosable = closeText ? true : closable;
  var type = getType();

  var renderIconNode = function renderIconNode() {
    var icon = props.icon; // use outline icon in alert with description

    var iconType = (description ? iconMapOutlined : iconMapFilled)[type] || null;

    if (icon) {
      return (0, _reactNode.replaceElement)(icon, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-icon")
      }, icon), function () {
        return {
          className: (0, _classnames["default"])("".concat(prefixCls, "-icon"), (0, _defineProperty2["default"])({}, icon.props.className, icon.props.className))
        };
      });
    }

    return /*#__PURE__*/React.createElement(iconType, {
      className: "".concat(prefixCls, "-icon")
    });
  };

  var renderCloseIcon = function renderCloseIcon() {
    return isClosable ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: handleClose,
      className: "".concat(prefixCls, "-close-icon"),
      tabIndex: 0
    }, closeText ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-close-text")
    }, closeText) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], null)) : null;
  }; // banner 模式默认有 Icon


  var isShowIcon = banner && showIcon === undefined ? true : showIcon;
  var alertCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(type), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-with-description"), !!description), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-no-icon"), !isShowIcon), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-banner"), !!banner), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-closable"), isClosable), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2), className);
  var dataOrAriaProps = (0, _getDataOrAriaProps["default"])(props);
  return /*#__PURE__*/React.createElement(_rcMotion["default"], {
    visible: !closed,
    motionName: "".concat(prefixCls, "-motion"),
    motionAppear: false,
    motionEnter: false,
    onLeaveStart: function onLeaveStart(node) {
      return {
        maxHeight: node.offsetHeight
      };
    },
    onLeaveEnd: afterClose
  }, function (_ref) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
      ref: ref,
      "data-show": !closed,
      className: (0, _classnames["default"])(alertCls, motionClassName),
      style: (0, _extends2["default"])((0, _extends2["default"])({}, style), motionStyle),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      role: "alert"
    }, dataOrAriaProps), isShowIcon ? renderIconNode() : null, /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-message")
    }, message), /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-description")
    }, description), renderCloseIcon());
  });
};

Alert.ErrorBoundary = _ErrorBoundary["default"];
var _default = Alert;
exports["default"] = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL2dldERhdGFPckFyaWFQcm9wcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2FsZXJ0L0Vycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9hbGVydC9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZGRsaXN0aW5nIiwidXNlU3RhdGUiLCJjb21wb25lbnRTaXplIiwic2V0Q29tcG9uZW50U2l6ZSIsIm9uRm9ybUxheW91dENoYW5nZSIsInNpemUiLCJzcGFuIiwidGl0bGUiLCJ2YWx1ZSIsImNoaWxkcmVuIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFlQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ21CQyx1REFBUSxDQUFDLFNBQUQsQ0FEM0I7QUFBQSxNQUNoQkMsYUFEZ0I7QUFBQSxNQUNEQyxnQkFEQzs7QUFHdkIsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixPQUFjO0FBQUEsUUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZDRixvQkFBZ0IsQ0FBQ0UsSUFBRCxDQUFoQjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxvRUFDRTtBQUFPLFdBQU8sRUFBQyw0QkFBZjtBQUE0QyxRQUFJLEVBQUMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFDRSxZQUFRLEVBQUU7QUFDUkMsVUFBSSxFQUFFO0FBREUsS0FEWjtBQUlFLGNBQVUsRUFBRTtBQUNWQSxVQUFJLEVBQUU7QUFESSxLQUpkO0FBT0UsVUFBTSxFQUFDLFlBUFQ7QUFRRSxpQkFBYSxFQUFFO0FBQ2JELFVBQUksRUFBRUg7QUFETyxLQVJqQjtBQVdFLGtCQUFjLEVBQUVFLGtCQVhsQjtBQVlFLFFBQUksRUFBRUYsYUFaUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0UsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxXQUFqQjtBQUE2QixRQUFJLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDREQUFPLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDREQUFPLE1BQVA7QUFBYyxTQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUUsNERBQU8sTUFBUDtBQUFjLFNBQUssRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FERixDQWRGLEVBcUJFLDJEQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsV0FBakI7QUFBNkIsUUFBSSxFQUFDLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSw0REFBTyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSw0REFBTyxNQUFQO0FBQWMsU0FBSyxFQUFDLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLDREQUFPLE1BQVA7QUFBYyxTQUFLLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0UsNERBQU8sTUFBUDtBQUFjLFNBQUssRUFBQyxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLENBREYsQ0FyQkYsRUE0QkUsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDZEQUFRLE1BQVI7QUFBZSxTQUFLLEVBQUMsTUFBckI7QUFBNEIsWUFBUSxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBSUUsNkRBQVEsTUFBUjtBQUFlLFNBQUssRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLEVBS0UsNkRBQVEsTUFBUjtBQUFlLFNBQUssRUFBQyxNQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQTVCRixFQXFDRSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FyQ0YsRUF5Q0UsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxZQUFRLEVBQUUsQ0FDUjtBQUNFSyxXQUFLLEVBQUUsT0FEVDtBQUVFQyxXQUFLLEVBQUUsT0FGVDtBQUdFQyxjQUFRLEVBQUUsQ0FDUjtBQUNFRixhQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFLLEVBQUU7QUFGVCxPQURRO0FBSFosS0FEUSxDQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXpDRixFQXlERSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFdBQU8sRUFBRSxDQUNQO0FBQ0VBLFdBQUssRUFBRSxVQURUO0FBRUVFLFdBQUssRUFBRSxVQUZUO0FBR0VELGNBQVEsRUFBRSxDQUNSO0FBQ0VELGFBQUssRUFBRSxVQURUO0FBRUVFLGFBQUssRUFBRTtBQUZULE9BRFE7QUFIWixLQURPLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBekRGLEVBeUVFLDJEQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXpFRixFQTRFRSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0E1RUYsRUErRUUsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBL0VGLEVBa0ZFLDJEQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQWxGRixDQUZGLENBREY7QUEyRkQsQ0FsR0Q7O0dBQU1WLFU7O0tBQUFBLFU7QUFvR1NBLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQLEM7Ozs7Ozs7Ozs7OztBQ2ZhOztBQUViLDhCQUE4QixtQkFBTyxDQUFDLHNIQUErQzs7QUFFckYsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDhDQUE4QyxtQkFBTyxDQUFDLHNHQUF1Qzs7QUFFN0YsMkNBQTJDLG1CQUFPLENBQUMsZ0dBQW9DOztBQUV2Rix3Q0FBd0MsbUJBQU8sQ0FBQywwRkFBaUM7O0FBRWpGLDJDQUEyQyxtQkFBTyxDQUFDLGdHQUFvQzs7QUFFdkYsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELCtCQUErQixtQkFBTyxDQUFDLGlEQUFHOztBQUUxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVELG1DOzs7Ozs7Ozs7Ozs7QUM5RWE7O0FBRWIsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsdUNBQXVDLG1CQUFPLENBQUMsd0ZBQWdDOztBQUUvRSw4Q0FBOEMsbUJBQU8sQ0FBQyxzR0FBdUM7O0FBRTdGLDZDQUE2QyxtQkFBTyxDQUFDLG9HQUFzQzs7QUFFM0Ysb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLDBGQUFpQzs7QUFFckYsa0RBQWtELG1CQUFPLENBQUMsc0dBQXVDOztBQUVqRyx3REFBd0QsbUJBQU8sQ0FBQyxrSEFBNkM7O0FBRTdHLGlEQUFpRCxtQkFBTyxDQUFDLG9HQUFzQzs7QUFFL0Ysa0RBQWtELG1CQUFPLENBQUMsc0dBQXVDOztBQUVqRyxnREFBZ0QsbUJBQU8sQ0FBQyxrR0FBcUM7O0FBRTdGLHNEQUFzRCxtQkFBTyxDQUFDLDhHQUEyQzs7QUFFekcsK0NBQStDLG1CQUFPLENBQUMsZ0dBQW9DOztBQUUzRixnREFBZ0QsbUJBQU8sQ0FBQyxrR0FBcUM7O0FBRTdGLHVDQUF1QyxtQkFBTyxDQUFDLHVEQUFXOztBQUUxRCx5Q0FBeUMsbUJBQU8sQ0FBQyxzREFBWTs7QUFFN0Qsc0JBQXNCLG1CQUFPLENBQUMsNEVBQW9COztBQUVsRCxpREFBaUQsbUJBQU8sQ0FBQyx3RkFBNkI7O0FBRXRGLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUFpQjs7QUFFckUsaUJBQWlCLG1CQUFPLENBQUMsc0VBQW9COztBQUU3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwySEFBMkgsY0FBYztBQUN6STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsbUhBQW1IO0FBQ25IO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKO0FBQ0Esa0hBQWtIO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZC1ob3RlbC5mZDc4MmIzNmMwNDIxOGZjM2FjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgUmFkaW8sXHJcbiAgU2VsZWN0LFxyXG4gIENhc2NhZGVyLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgVHJlZVNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgQWxlcnQsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEFkZGxpc3RpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbXBvbmVudFNpemUsIHNldENvbXBvbmVudFNpemVdID0gdXNlU3RhdGUoXCJkZWZhdWx0XCIpO1xyXG5cclxuICBjb25zdCBvbkZvcm1MYXlvdXRDaGFuZ2UgPSAoeyBzaXplIH0pID0+IHtcclxuICAgIHNldENvbXBvbmVudFNpemUoc2l6ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBbGVydCBtZXNzYWdlPVwiUFJPUEVSVFkgVFlQRSBBTkQgTE9DQVRJT05cIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIHNpemU6IGNvbXBvbmVudFNpemUsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblZhbHVlc0NoYW5nZT17b25Gb3JtTGF5b3V0Q2hhbmdlfVxyXG4gICAgICAgIHNpemU9e2NvbXBvbmVudFNpemV9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRm9ybSBTaXplXCIgbmFtZT1cInNpemVcIj5cclxuICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cInNtYWxsXCI+U2FsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZGVmYXVsdFwiPlJlbnQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGb3JtIFNpemVcIiBuYW1lPVwic2l6ZVwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiaG9tZVwiPkhvbWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJwbG90c1wiPlBsb3RzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJjb21tZXJjaWFsXCI+Q29tbWVyY2lhbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0IGNpdHlcIj5cclxuICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZGVtb1wiIHNlbGVjdGVkPlxyXG4gICAgICAgICAgICAgIElzbGFtYWJhZFxyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZGVtb1wiPlJhd2FscGluZGk8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiZGVtb1wiPkthcmFjaGk8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTG9jYXRpb25cIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVHJlZVNlbGVjdFwiPlxyXG4gICAgICAgICAgPFRyZWVTZWxlY3RcclxuICAgICAgICAgICAgdHJlZURhdGE9e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwibGlnaHRcIixcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJCYW1ib29cIixcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJiYW1ib29cIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkNhc2NhZGVyXCI+XHJcbiAgICAgICAgICA8Q2FzY2FkZXJcclxuICAgICAgICAgICAgb3B0aW9ucz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcInpoZWppYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJaaGVqaWFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImhhbmd6aG91XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGFuZ3pob3VcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkRhdGVQaWNrZXJcIj5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklucHV0TnVtYmVyXCI+XHJcbiAgICAgICAgICA8SW5wdXROdW1iZXIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3dpdGNoXCI+XHJcbiAgICAgICAgICA8U3dpdGNoIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJ1dHRvblwiPlxyXG4gICAgICAgICAgPEJ1dHRvbj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZGxpc3Rpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBnZXREYXRhT3JBcmlhUHJvcHM7XG5cbmZ1bmN0aW9uIGdldERhdGFPckFyaWFQcm9wcyhwcm9wcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwga2V5KSB7XG4gICAgaWYgKChrZXkuc3Vic3RyKDAsIDUpID09PSAnZGF0YS0nIHx8IGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5ID09PSAncm9sZScpICYmIGtleS5zdWJzdHIoMCwgNykgIT09ICdkYXRhLV9fJykge1xuICAgICAgcHJldltrZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldjtcbiAgfSwge30pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgXyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi5cIikpO1xuXG52YXIgRXJyb3JCb3VuZGFyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKEVycm9yQm91bmRhcnksIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKEVycm9yQm91bmRhcnkpO1xuXG4gIGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBFcnJvckJvdW5kYXJ5KTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgIGluZm86IHtcbiAgICAgICAgY29tcG9uZW50U3RhY2s6ICcnXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKEVycm9yQm91bmRhcnksIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZENhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICBpbmZvOiBpbmZvXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWVzc2FnZSA9IF90aGlzJHByb3BzLm1lc3NhZ2UsXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBlcnJvciA9IF90aGlzJHN0YXRlLmVycm9yLFxuICAgICAgICAgIGluZm8gPSBfdGhpcyRzdGF0ZS5pbmZvO1xuICAgICAgdmFyIGNvbXBvbmVudFN0YWNrID0gaW5mbyAmJiBpbmZvLmNvbXBvbmVudFN0YWNrID8gaW5mby5jb21wb25lbnRTdGFjayA6IG51bGw7XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0gdHlwZW9mIG1lc3NhZ2UgPT09ICd1bmRlZmluZWQnID8gKGVycm9yIHx8ICcnKS50b1N0cmluZygpIDogbWVzc2FnZTtcbiAgICAgIHZhciBlcnJvckRlc2NyaXB0aW9uID0gdHlwZW9mIGRlc2NyaXB0aW9uID09PSAndW5kZWZpbmVkJyA/IGNvbXBvbmVudFN0YWNrIDogZGVzY3JpcHRpb247XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1tcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCIsXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3JNZXNzYWdlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCBudWxsLCBlcnJvckRlc2NyaXB0aW9uKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRXJyb3JCb3VuZGFyeTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFcnJvckJvdW5kYXJ5OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvSW5mb0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2hlY2tDaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FeGNsYW1hdGlvbkNpcmNsZUZpbGxlZFwiKSk7XG5cbnZhciBfSW5mb0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3JjTW90aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbW90aW9uXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2dldERhdGFPckFyaWFQcm9wcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2dldERhdGFPckFyaWFQcm9wc1wiKSk7XG5cbnZhciBfRXJyb3JCb3VuZGFyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRXJyb3JCb3VuZGFyeVwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBpY29uTWFwRmlsbGVkID0ge1xuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBpbmZvOiBfSW5mb0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICB3YXJuaW5nOiBfRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdXG59O1xudmFyIGljb25NYXBPdXRsaW5lZCA9IHtcbiAgc3VjY2VzczogX0NoZWNrQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdLFxuICBpbmZvOiBfSW5mb0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgZXJyb3I6IF9DbG9zZUNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRbXCJkZWZhdWx0XCJdXG59O1xuXG52YXIgQWxlcnQgPSBmdW5jdGlvbiBBbGVydChfYSkge1xuICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gIHZhciBkZXNjcmlwdGlvbiA9IF9hLmRlc2NyaXB0aW9uLFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsXG4gICAgICBiYW5uZXIgPSBfYS5iYW5uZXIsXG4gICAgICBfYSRjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfYSRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICcnIDogX2EkY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgIG9uTW91c2VFbnRlciA9IF9hLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IF9hLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLFxuICAgICAgYWZ0ZXJDbG9zZSA9IF9hLmFmdGVyQ2xvc2UsXG4gICAgICBzaG93SWNvbiA9IF9hLnNob3dJY29uLFxuICAgICAgY2xvc2FibGUgPSBfYS5jbG9zYWJsZSxcbiAgICAgIGNsb3NlVGV4dCA9IF9hLmNsb3NlVGV4dCxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJkZXNjcmlwdGlvblwiLCBcInByZWZpeENsc1wiLCBcIm1lc3NhZ2VcIiwgXCJiYW5uZXJcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcIm9uTW91c2VFbnRlclwiLCBcIm9uTW91c2VMZWF2ZVwiLCBcIm9uQ2xpY2tcIiwgXCJhZnRlckNsb3NlXCIsIFwic2hvd0ljb25cIiwgXCJjbG9zYWJsZVwiLCBcImNsb3NlVGV4dFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGNsb3NlZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRDbG9zZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdhbGVydCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZSkge1xuICAgIHZhciBfYTtcblxuICAgIHNldENsb3NlZCh0cnVlKTtcbiAgICAoX2EgPSBwcm9wcy5vbkNsb3NlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChwcm9wcywgZSk7XG4gIH07XG5cbiAgdmFyIGdldFR5cGUgPSBmdW5jdGlvbiBnZXRUeXBlKCkge1xuICAgIHZhciB0eXBlID0gcHJvcHMudHlwZTtcblxuICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gLy8gYmFubmVyIOaooeW8j+m7mOiupOS4uuitpuWRilxuXG5cbiAgICByZXR1cm4gYmFubmVyID8gJ3dhcm5pbmcnIDogJ2luZm8nO1xuICB9OyAvLyBjbG9zZWFibGUgd2hlbiBjbG9zZVRleHQgaXMgYXNzaWduZWRcblxuXG4gIHZhciBpc0Nsb3NhYmxlID0gY2xvc2VUZXh0ID8gdHJ1ZSA6IGNsb3NhYmxlO1xuICB2YXIgdHlwZSA9IGdldFR5cGUoKTtcblxuICB2YXIgcmVuZGVySWNvbk5vZGUgPSBmdW5jdGlvbiByZW5kZXJJY29uTm9kZSgpIHtcbiAgICB2YXIgaWNvbiA9IHByb3BzLmljb247IC8vIHVzZSBvdXRsaW5lIGljb24gaW4gYWxlcnQgd2l0aCBkZXNjcmlwdGlvblxuXG4gICAgdmFyIGljb25UeXBlID0gKGRlc2NyaXB0aW9uID8gaWNvbk1hcE91dGxpbmVkIDogaWNvbk1hcEZpbGxlZClbdHlwZV0gfHwgbnVsbDtcblxuICAgIGlmIChpY29uKSB7XG4gICAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUucmVwbGFjZUVsZW1lbnQpKGljb24sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgICB9LCBpY29uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBpY29uLnByb3BzLmNsYXNzTmFtZSwgaWNvbi5wcm9wcy5jbGFzc05hbWUpKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KGljb25UeXBlLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZW5kZXJDbG9zZUljb24gPSBmdW5jdGlvbiByZW5kZXJDbG9zZUljb24oKSB7XG4gICAgcmV0dXJuIGlzQ2xvc2FibGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xvc2UsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xvc2UtaWNvblwiKSxcbiAgICAgIHRhYkluZGV4OiAwXG4gICAgfSwgY2xvc2VUZXh0ID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZS10ZXh0XCIpXG4gICAgfSwgY2xvc2VUZXh0KSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkpIDogbnVsbDtcbiAgfTsgLy8gYmFubmVyIOaooeW8j+m7mOiupOaciSBJY29uXG5cblxuICB2YXIgaXNTaG93SWNvbiA9IGJhbm5lciAmJiBzaG93SWNvbiA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNob3dJY29uO1xuICB2YXIgYWxlcnRDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0eXBlKSwgKF9jbGFzc05hbWVzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13aXRoLWRlc2NyaXB0aW9uXCIpLCAhIWRlc2NyaXB0aW9uKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm8taWNvblwiKSwgIWlzU2hvd0ljb24pLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1iYW5uZXJcIiksICEhYmFubmVyKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xvc2FibGVcIiksIGlzQ2xvc2FibGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lczIpLCBjbGFzc05hbWUpO1xuICB2YXIgZGF0YU9yQXJpYVByb3BzID0gKDAsIF9nZXREYXRhT3JBcmlhUHJvcHNbXCJkZWZhdWx0XCJdKShwcm9wcyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNb3Rpb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdmlzaWJsZTogIWNsb3NlZCxcbiAgICBtb3Rpb25OYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1vdGlvblwiKSxcbiAgICBtb3Rpb25BcHBlYXI6IGZhbHNlLFxuICAgIG1vdGlvbkVudGVyOiBmYWxzZSxcbiAgICBvbkxlYXZlU3RhcnQ6IGZ1bmN0aW9uIG9uTGVhdmVTdGFydChub2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXhIZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0XG4gICAgICB9O1xuICAgIH0sXG4gICAgb25MZWF2ZUVuZDogYWZ0ZXJDbG9zZVxuICB9LCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtb3Rpb25DbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgICAgbW90aW9uU3R5bGUgPSBfcmVmLnN0eWxlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgcmVmOiByZWYsXG4gICAgICBcImRhdGEtc2hvd1wiOiAhY2xvc2VkLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShhbGVydENscywgbW90aW9uQ2xhc3NOYW1lKSxcbiAgICAgIHN0eWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBzdHlsZSksIG1vdGlvblN0eWxlKSxcbiAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgICAgcm9sZTogXCJhbGVydFwiXG4gICAgfSwgZGF0YU9yQXJpYVByb3BzKSwgaXNTaG93SWNvbiA/IHJlbmRlckljb25Ob2RlKCkgOiBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2VcIilcbiAgICB9LCBtZXNzYWdlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kZXNjcmlwdGlvblwiKVxuICAgIH0sIGRlc2NyaXB0aW9uKSwgcmVuZGVyQ2xvc2VJY29uKCkpO1xuICB9KTtcbn07XG5cbkFsZXJ0LkVycm9yQm91bmRhcnkgPSBfRXJyb3JCb3VuZGFyeVtcImRlZmF1bHRcIl07XG52YXIgX2RlZmF1bHQgPSBBbGVydDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==