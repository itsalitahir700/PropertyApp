webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddListing.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddListing.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/steps */ "./node_modules/antd/lib/steps/index.js");
/* harmony import */ var antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_steps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddProperty */ "./container/AddListing/AddProperty.js");
/* harmony import */ var _AddFeature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddFeature */ "./container/AddListing/AddFeature.js");



var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddListing.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Step = antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default.a.Step;
var steps = [{
  title: "First",
  content: "First-content"
}, {
  title: "Second",
  content: "Second-content"
}, {
  title: "Last",
  content: "Last-content"
}];

function AddListing() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  var next = function next() {
    setCurrent(current + 1);
  };

  var prev = function prev() {
    setCurrent(current - 1);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default.a, {
    current: current,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, steps.map(function (item) {
    return __jsx(Step, {
      key: item.title,
      title: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    });
  })), __jsx(_AddProperty__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_AddFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }));
}

_s(AddListing, "8+O75ArtRNvpQgzeZSk5wKohTHI=");

_c = AddListing;
/* harmony default export */ __webpack_exports__["default"] = (AddListing);

var _c;

$RefreshReg$(_c, "AddListing");

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

/***/ "./node_modules/antd/lib/steps/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/steps/index.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _rcSteps = _interopRequireDefault(__webpack_require__(/*! rc-steps */ "./node_modules/rc-steps/es/index.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _progress = _interopRequireDefault(__webpack_require__(/*! ../progress */ "./node_modules/antd/lib/progress/index.js"));

var _useBreakpoint2 = _interopRequireDefault(__webpack_require__(/*! ../grid/hooks/useBreakpoint */ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js"));

var Steps = function Steps(props) {
  var _classNames;

  var percent = props.percent,
      size = props.size,
      className = props.className,
      direction = props.direction;

  var _useBreakpoint = (0, _useBreakpoint2["default"])(),
      xs = _useBreakpoint.xs;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      rtlDirection = _React$useContext.direction;

  var getDirection = React.useCallback(function () {
    return xs ? 'vertical' : direction;
  }, [xs, direction]);
  var prefixCls = getPrefixCls('steps', props.prefixCls);
  var iconPrefix = getPrefixCls('', props.iconPrefix);
  var stepsClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtlDirection === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-progress"), percent !== undefined), _classNames), className);
  var icons = {
    finish: /*#__PURE__*/React.createElement(_CheckOutlined["default"], {
      className: "".concat(prefixCls, "-finish-icon")
    }),
    error: /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
      className: "".concat(prefixCls, "-error-icon")
    })
  };

  var stepIconRender = function stepIconRender(_ref) {
    var node = _ref.node,
        status = _ref.status;

    if (status === 'process' && percent !== undefined) {
      // currently it's hard-coded, since we can't easily read the actually width of icon
      var progressWidth = size === 'small' ? 32 : 40;
      var iconWithProgress = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-progress-icon")
      }, /*#__PURE__*/React.createElement(_progress["default"], {
        type: "circle",
        percent: percent,
        width: progressWidth,
        strokeWidth: 4,
        format: function format() {
          return null;
        }
      }), node);
      return iconWithProgress;
    }

    return node;
  };

  return /*#__PURE__*/React.createElement(_rcSteps["default"], (0, _extends2["default"])({
    icons: icons
  }, (0, _omit["default"])(props, ['percent']), {
    direction: getDirection(),
    stepIcon: stepIconRender,
    prefixCls: prefixCls,
    iconPrefix: iconPrefix,
    className: stepsClassName
  }));
};

Steps.Step = _rcSteps["default"].Step;
Steps.defaultProps = {
  current: 0
};
var _default = Steps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-steps/es/Step.js":
/*!******************************************!*\
  !*** ./node_modules/rc-steps/es/Step.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Step; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);








/* eslint react/prop-types: 0 */



function isString(str) {
  return typeof str === 'string';
}

var Step = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Step, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Step);

  function Step() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Step);

    _this = _super.apply(this, arguments);

    _this.onClick = function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onStepClick = _this$props.onStepClick,
          stepIndex = _this$props.stepIndex;

      if (onClick) {
        onClick.apply(void 0, arguments);
      }

      onStepClick(stepIndex);
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Step, [{
    key: "renderIconNode",
    value: function renderIconNode() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          stepNumber = _this$props2.stepNumber,
          status = _this$props2.status,
          title = _this$props2.title,
          description = _this$props2.description,
          icon = _this$props2.icon,
          iconPrefix = _this$props2.iconPrefix,
          icons = _this$props2.icons;
      var iconNode;
      var iconClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefixCls, "-icon"), "".concat(iconPrefix, "icon"), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(iconPrefix, "icon-").concat(icon), icon && isString(icon)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(iconPrefix, "icon-check"), !icon && status === 'finish' && (icons && !icons.finish || !icons)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames, "".concat(iconPrefix, "icon-cross"), !icon && status === 'error' && (icons && !icons.error || !icons)), _classNames));
      var iconDot = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "".concat(prefixCls, "-icon-dot")
      }); // `progressDot` enjoy the highest priority

      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, progressDot(iconDot, {
            index: stepNumber - 1,
            status: status,
            title: title,
            description: description
          }));
        } else {
          iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "".concat(prefixCls, "-icon")
          }, iconDot);
        }
      } else if (icon && !isString(icon)) {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icon);
      } else if (icons && icons.finish && status === 'finish') {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.finish);
      } else if (icons && icons.error && status === 'error') {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, icons.error);
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: iconClassName
        });
      } else {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "".concat(prefixCls, "-icon")
        }, stepNumber);
      }

      if (stepIcon) {
        iconNode = stepIcon({
          index: stepNumber - 1,
          status: status,
          title: title,
          description: description,
          node: iconNode
        });
      }

      return iconNode;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          style = _this$props3.style,
          active = _this$props3.active,
          _this$props3$status = _this$props3.status,
          status = _this$props3$status === void 0 ? 'wait' : _this$props3$status,
          iconPrefix = _this$props3.iconPrefix,
          icon = _this$props3.icon,
          wrapperStyle = _this$props3.wrapperStyle,
          stepNumber = _this$props3.stepNumber,
          disabled = _this$props3.disabled,
          description = _this$props3.description,
          title = _this$props3.title,
          subTitle = _this$props3.subTitle,
          progressDot = _this$props3.progressDot,
          stepIcon = _this$props3.stepIcon,
          tailContent = _this$props3.tailContent,
          icons = _this$props3.icons,
          stepIndex = _this$props3.stepIndex,
          onStepClick = _this$props3.onStepClick,
          onClick = _this$props3.onClick,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3, ["className", "prefixCls", "style", "active", "status", "iconPrefix", "icon", "wrapperStyle", "stepNumber", "disabled", "description", "title", "subTitle", "progressDot", "stepIcon", "tailContent", "icons", "stepIndex", "onStepClick", "onClick"]);

      var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()("".concat(prefixCls, "-item"), "".concat(prefixCls, "-item-").concat(status), className, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-item-custom"), icon), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-item-active"), active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled === true), _classNames2));

      var stepItemStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style);

      var accessibilityProps = {};

      if (onStepClick && !disabled) {
        accessibilityProps.role = 'button';
        accessibilityProps.tabIndex = 0;
        accessibilityProps.onClick = this.onClick;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({}, restProps, {
        className: classString,
        style: stepItemStyle
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({
        onClick: onClick
      }, accessibilityProps, {
        className: "".concat(prefixCls, "-item-container")
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(prefixCls, "-item-tail")
      }, tailContent), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(prefixCls, "-item-icon")
      }, this.renderIconNode()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(prefixCls, "-item-content")
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(prefixCls, "-item-title")
      }, title, subTitle && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        title: typeof subTitle === 'string' ? subTitle : undefined,
        className: "".concat(prefixCls, "-item-subtitle")
      }, subTitle)), description && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(prefixCls, "-item-description")
      }, description))));
    }
  }]);

  return Step;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./node_modules/rc-steps/es/Steps.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-steps/es/Steps.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Steps; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Step */ "./node_modules/rc-steps/es/Step.js");








/* eslint react/no-did-mount-set-state: 0, react/prop-types: 0 */





var Steps = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Steps, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Steps);

  function Steps() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Steps);

    _this = _super.apply(this, arguments);

    _this.onStepClick = function (next) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          current = _this$props.current;

      if (onChange && current !== next) {
        onChange(next);
      }
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Steps, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          _this$props2$style = _this$props2.style,
          style = _this$props2$style === void 0 ? {} : _this$props2$style,
          className = _this$props2.className,
          children = _this$props2.children,
          direction = _this$props2.direction,
          type = _this$props2.type,
          labelPlacement = _this$props2.labelPlacement,
          iconPrefix = _this$props2.iconPrefix,
          status = _this$props2.status,
          size = _this$props2.size,
          current = _this$props2.current,
          progressDot = _this$props2.progressDot,
          stepIcon = _this$props2.stepIcon,
          initial = _this$props2.initial,
          icons = _this$props2.icons,
          onChange = _this$props2.onChange,
          restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["prefixCls", "style", "className", "children", "direction", "type", "labelPlacement", "iconPrefix", "status", "size", "current", "progressDot", "stepIcon", "initial", "icons", "onChange"]);

      var isNav = type === 'navigation';
      var adjustedLabelPlacement = progressDot ? 'vertical' : labelPlacement;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, "".concat(prefixCls, "-").concat(direction), className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-label-").concat(adjustedLabelPlacement), direction === 'horizontal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-dot"), !!progressDot), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-navigation"), isNav), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object.assign({
        className: classString,
        style: style
      }, restProps), Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__["default"])(children).map(function (child, index) {
        var stepNumber = initial + index;

        var childProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
          stepNumber: "".concat(stepNumber + 1),
          stepIndex: stepNumber,
          key: stepNumber,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style,
          progressDot: progressDot,
          stepIcon: stepIcon,
          icons: icons,
          onStepClick: onChange && _this2.onStepClick
        }, child.props); // fix tail color


        if (status === 'error' && index === current - 1) {
          childProps.className = "".concat(prefixCls, "-next-error");
        }

        if (!child.props.status) {
          if (stepNumber === current) {
            childProps.status = status;
          } else if (stepNumber < current) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }

        childProps.active = stepNumber === current;
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(child, childProps);
      }));
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);


Steps.Step = _Step__WEBPACK_IMPORTED_MODULE_10__["default"];
Steps.defaultProps = {
  type: 'default',
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  initial: 0,
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
};

/***/ }),

/***/ "./node_modules/rc-steps/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-steps/es/index.js ***!
  \*******************************************/
/*! exports provided: Step, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps */ "./node_modules/rc-steps/es/Steps.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step */ "./node_modules/rc-steps/es/Step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return _Step__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Steps__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3N0ZXBzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc3RlcHMvZXMvU3RlcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXN0ZXBzL2VzL1N0ZXBzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc3RlcHMvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiU3RlcCIsInN0ZXBzIiwidGl0bGUiLCJjb250ZW50IiwiQWRkTGlzdGluZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsIm5leHQiLCJwcmV2IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtJQUdRQSxJLHlEQUFBQSxJO0FBRVIsSUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFLE9BRFQ7QUFFRUMsU0FBTyxFQUFFO0FBRlgsQ0FEWSxFQUtaO0FBQ0VELE9BQUssRUFBRSxRQURUO0FBRUVDLFNBQU8sRUFBRTtBQUZYLENBTFksRUFTWjtBQUNFRCxPQUFLLEVBQUUsTUFEVDtBQUVFQyxTQUFPLEVBQUU7QUFGWCxDQVRZLENBQWQ7O0FBZUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUFBLHdCQUNVQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURWO0FBQUE7QUFBQSxNQUNiQyxPQURhO0FBQUEsTUFDSkMsVUFESTs7QUFHcEIsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkQsY0FBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFWO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxJQUFJLEdBQUcsU0FBUEEs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QUFFQTtBQUNBLGVBQWUsMERBQVk7QUFDM0IsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsQ0FBQyw0Q0FBSzs7QUFFcUI7QUFDNUIsYUFBYSw4Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDRjtBQUNWO0FBQ0QsNkdBQUssRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGQtaG90ZWwuMzcwNjFiMjcyMGZjNjViNzBkZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gXCIuL0FkZFByb3BlcnR5XCI7XHJcbmltcG9ydCBBZGRGZWF0dXJlIGZyb20gXCIuL0FkZEZlYXR1cmVcIjtcclxuaW1wb3J0IHsgU3RlcHMsIEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IFN0ZXAgfSA9IFN0ZXBzO1xyXG5cclxuY29uc3Qgc3RlcHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRmlyc3RcIixcclxuICAgIGNvbnRlbnQ6IFwiRmlyc3QtY29udGVudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU2Vjb25kXCIsXHJcbiAgICBjb250ZW50OiBcIlNlY29uZC1jb250ZW50XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMYXN0XCIsXHJcbiAgICBjb250ZW50OiBcIkxhc3QtY29udGVudFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBBZGRMaXN0aW5nKCkge1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudChjdXJyZW50ICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldiA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnQoY3VycmVudCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U3RlcHMgY3VycmVudD17Y3VycmVudH0+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPFN0ZXAga2V5PXtpdGVtLnRpdGxlfSB0aXRsZT17aXRlbS50aXRsZX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TdGVwcz5cclxuICAgICAgPEFkZFByb3BlcnR5PjwvQWRkUHJvcGVydHk+XHJcbiAgICAgIDxBZGRGZWF0dXJlPjwvQWRkRmVhdHVyZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZExpc3Rpbmc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfcmNTdGVwcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXN0ZXBzXCIpKTtcblxudmFyIF9DaGVja091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcHJvZ3Jlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9wcm9ncmVzc1wiKSk7XG5cbnZhciBfdXNlQnJlYWtwb2ludDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9ncmlkL2hvb2tzL3VzZUJyZWFrcG9pbnRcIikpO1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiBTdGVwcyhwcm9wcykge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIHBlcmNlbnQgPSBwcm9wcy5wZXJjZW50LFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb247XG5cbiAgdmFyIF91c2VCcmVha3BvaW50ID0gKDAsIF91c2VCcmVha3BvaW50MltcImRlZmF1bHRcIl0pKCksXG4gICAgICB4cyA9IF91c2VCcmVha3BvaW50LnhzO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgcnRsRGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBnZXREaXJlY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHhzID8gJ3ZlcnRpY2FsJyA6IGRpcmVjdGlvbjtcbiAgfSwgW3hzLCBkaXJlY3Rpb25dKTtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnc3RlcHMnLCBwcm9wcy5wcmVmaXhDbHMpO1xuICB2YXIgaWNvblByZWZpeCA9IGdldFByZWZpeENscygnJywgcHJvcHMuaWNvblByZWZpeCk7XG4gIHZhciBzdGVwc0NsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsRGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1wcm9ncmVzc1wiKSwgcGVyY2VudCAhPT0gdW5kZWZpbmVkKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICB2YXIgaWNvbnMgPSB7XG4gICAgZmluaXNoOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2hlY2tPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1maW5pc2gtaWNvblwiKVxuICAgIH0pLFxuICAgIGVycm9yOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lcnJvci1pY29uXCIpXG4gICAgfSlcbiAgfTtcblxuICB2YXIgc3RlcEljb25SZW5kZXIgPSBmdW5jdGlvbiBzdGVwSWNvblJlbmRlcihfcmVmKSB7XG4gICAgdmFyIG5vZGUgPSBfcmVmLm5vZGUsXG4gICAgICAgIHN0YXR1cyA9IF9yZWYuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ3Byb2Nlc3MnICYmIHBlcmNlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY3VycmVudGx5IGl0J3MgaGFyZC1jb2RlZCwgc2luY2Ugd2UgY2FuJ3QgZWFzaWx5IHJlYWQgdGhlIGFjdHVhbGx5IHdpZHRoIG9mIGljb25cbiAgICAgIHZhciBwcm9ncmVzc1dpZHRoID0gc2l6ZSA9PT0gJ3NtYWxsJyA/IDMyIDogNDA7XG4gICAgICB2YXIgaWNvbldpdGhQcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXByb2dyZXNzLWljb25cIilcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9wcm9ncmVzc1tcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcbiAgICAgICAgcGVyY2VudDogcGVyY2VudCxcbiAgICAgICAgd2lkdGg6IHByb2dyZXNzV2lkdGgsXG4gICAgICAgIHN0cm9rZVdpZHRoOiA0LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSksIG5vZGUpO1xuICAgICAgcmV0dXJuIGljb25XaXRoUHJvZ3Jlc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1N0ZXBzW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBpY29uczogaWNvbnNcbiAgfSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocHJvcHMsIFsncGVyY2VudCddKSwge1xuICAgIGRpcmVjdGlvbjogZ2V0RGlyZWN0aW9uKCksXG4gICAgc3RlcEljb246IHN0ZXBJY29uUmVuZGVyLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGljb25QcmVmaXg6IGljb25QcmVmaXgsXG4gICAgY2xhc3NOYW1lOiBzdGVwc0NsYXNzTmFtZVxuICB9KSk7XG59O1xuXG5TdGVwcy5TdGVwID0gX3JjU3RlcHNbXCJkZWZhdWx0XCJdLlN0ZXA7XG5TdGVwcy5kZWZhdWx0UHJvcHMgPSB7XG4gIGN1cnJlbnQ6IDBcbn07XG52YXIgX2RlZmF1bHQgPSBTdGVwcztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcblxuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxudmFyIFN0ZXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0ZXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU3RlcCk7XG5cbiAgZnVuY3Rpb24gU3RlcCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RlcCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrLFxuICAgICAgICAgIG9uU3RlcENsaWNrID0gX3RoaXMkcHJvcHMub25TdGVwQ2xpY2ssXG4gICAgICAgICAgc3RlcEluZGV4ID0gX3RoaXMkcHJvcHMuc3RlcEluZGV4O1xuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgb25TdGVwQ2xpY2soc3RlcEluZGV4KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0ZXAsIFt7XG4gICAga2V5OiBcInJlbmRlckljb25Ob2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckljb25Ob2RlKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIHByb2dyZXNzRG90ID0gX3RoaXMkcHJvcHMyLnByb2dyZXNzRG90LFxuICAgICAgICAgIHN0ZXBJY29uID0gX3RoaXMkcHJvcHMyLnN0ZXBJY29uLFxuICAgICAgICAgIHN0ZXBOdW1iZXIgPSBfdGhpcyRwcm9wczIuc3RlcE51bWJlcixcbiAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRwcm9wczIuc3RhdHVzLFxuICAgICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMyLnRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHMyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIGljb24gPSBfdGhpcyRwcm9wczIuaWNvbixcbiAgICAgICAgICBpY29uUHJlZml4ID0gX3RoaXMkcHJvcHMyLmljb25QcmVmaXgsXG4gICAgICAgICAgaWNvbnMgPSBfdGhpcyRwcm9wczIuaWNvbnM7XG4gICAgICB2YXIgaWNvbk5vZGU7XG4gICAgICB2YXIgaWNvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpLCBcIlwiLmNvbmNhdChpY29uUHJlZml4LCBcImljb25cIiksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGljb25QcmVmaXgsIFwiaWNvbi1cIikuY29uY2F0KGljb24pLCBpY29uICYmIGlzU3RyaW5nKGljb24pKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChpY29uUHJlZml4LCBcImljb24tY2hlY2tcIiksICFpY29uICYmIHN0YXR1cyA9PT0gJ2ZpbmlzaCcgJiYgKGljb25zICYmICFpY29ucy5maW5pc2ggfHwgIWljb25zKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoaWNvblByZWZpeCwgXCJpY29uLWNyb3NzXCIpLCAhaWNvbiAmJiBzdGF0dXMgPT09ICdlcnJvcicgJiYgKGljb25zICYmICFpY29ucy5lcnJvciB8fCAhaWNvbnMpKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHZhciBpY29uRG90ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbi1kb3RcIilcbiAgICAgIH0pOyAvLyBgcHJvZ3Jlc3NEb3RgIGVuam95IHRoZSBoaWdoZXN0IHByaW9yaXR5XG5cbiAgICAgIGlmIChwcm9ncmVzc0RvdCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2dyZXNzRG90ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgICAgICAgIH0sIHByb2dyZXNzRG90KGljb25Eb3QsIHtcbiAgICAgICAgICAgIGluZGV4OiBzdGVwTnVtYmVyIC0gMSxcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICAgICAgICB9LCBpY29uRG90KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpY29uICYmICFpc1N0cmluZyhpY29uKSkge1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgICAgICB9LCBpY29uKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvbnMgJiYgaWNvbnMuZmluaXNoICYmIHN0YXR1cyA9PT0gJ2ZpbmlzaCcpIHtcbiAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICAgICAgfSwgaWNvbnMuZmluaXNoKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvbnMgJiYgaWNvbnMuZXJyb3IgJiYgc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIGljb25Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uXCIpXG4gICAgICAgIH0sIGljb25zLmVycm9yKTtcbiAgICAgIH0gZWxzZSBpZiAoaWNvbiB8fCBzdGF0dXMgPT09ICdmaW5pc2gnIHx8IHN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvblwiKVxuICAgICAgICB9LCBzdGVwTnVtYmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXBJY29uKSB7XG4gICAgICAgIGljb25Ob2RlID0gc3RlcEljb24oe1xuICAgICAgICAgIGluZGV4OiBzdGVwTnVtYmVyIC0gMSxcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgIG5vZGU6IGljb25Ob2RlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaWNvbk5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMy5wcmVmaXhDbHMsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGUsXG4gICAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHMzLmFjdGl2ZSxcbiAgICAgICAgICBfdGhpcyRwcm9wczMkc3RhdHVzID0gX3RoaXMkcHJvcHMzLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRwcm9wczMkc3RhdHVzID09PSB2b2lkIDAgPyAnd2FpdCcgOiBfdGhpcyRwcm9wczMkc3RhdHVzLFxuICAgICAgICAgIGljb25QcmVmaXggPSBfdGhpcyRwcm9wczMuaWNvblByZWZpeCxcbiAgICAgICAgICBpY29uID0gX3RoaXMkcHJvcHMzLmljb24sXG4gICAgICAgICAgd3JhcHBlclN0eWxlID0gX3RoaXMkcHJvcHMzLndyYXBwZXJTdHlsZSxcbiAgICAgICAgICBzdGVwTnVtYmVyID0gX3RoaXMkcHJvcHMzLnN0ZXBOdW1iZXIsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczMuZGlzYWJsZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wczMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wczMudGl0bGUsXG4gICAgICAgICAgc3ViVGl0bGUgPSBfdGhpcyRwcm9wczMuc3ViVGl0bGUsXG4gICAgICAgICAgcHJvZ3Jlc3NEb3QgPSBfdGhpcyRwcm9wczMucHJvZ3Jlc3NEb3QsXG4gICAgICAgICAgc3RlcEljb24gPSBfdGhpcyRwcm9wczMuc3RlcEljb24sXG4gICAgICAgICAgdGFpbENvbnRlbnQgPSBfdGhpcyRwcm9wczMudGFpbENvbnRlbnQsXG4gICAgICAgICAgaWNvbnMgPSBfdGhpcyRwcm9wczMuaWNvbnMsXG4gICAgICAgICAgc3RlcEluZGV4ID0gX3RoaXMkcHJvcHMzLnN0ZXBJbmRleCxcbiAgICAgICAgICBvblN0ZXBDbGljayA9IF90aGlzJHByb3BzMy5vblN0ZXBDbGljayxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMzLm9uQ2xpY2ssXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMywgW1wiY2xhc3NOYW1lXCIsIFwicHJlZml4Q2xzXCIsIFwic3R5bGVcIiwgXCJhY3RpdmVcIiwgXCJzdGF0dXNcIiwgXCJpY29uUHJlZml4XCIsIFwiaWNvblwiLCBcIndyYXBwZXJTdHlsZVwiLCBcInN0ZXBOdW1iZXJcIiwgXCJkaXNhYmxlZFwiLCBcImRlc2NyaXB0aW9uXCIsIFwidGl0bGVcIiwgXCJzdWJUaXRsZVwiLCBcInByb2dyZXNzRG90XCIsIFwic3RlcEljb25cIiwgXCJ0YWlsQ29udGVudFwiLCBcImljb25zXCIsIFwic3RlcEluZGV4XCIsIFwib25TdGVwQ2xpY2tcIiwgXCJvbkNsaWNrXCJdKTtcblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW1cIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1cIikuY29uY2F0KHN0YXR1cyksIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY3VzdG9tXCIpLCBpY29uKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWFjdGl2ZVwiKSwgYWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWRpc2FibGVkXCIpLCBkaXNhYmxlZCA9PT0gdHJ1ZSksIF9jbGFzc05hbWVzMikpO1xuXG4gICAgICB2YXIgc3RlcEl0ZW1TdHlsZSA9IF9vYmplY3RTcHJlYWQoe30sIHN0eWxlKTtcblxuICAgICAgdmFyIGFjY2Vzc2liaWxpdHlQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAob25TdGVwQ2xpY2sgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIGFjY2Vzc2liaWxpdHlQcm9wcy5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGFjY2Vzc2liaWxpdHlQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICAgIGFjY2Vzc2liaWxpdHlQcm9wcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICAgICAgc3R5bGU6IHN0ZXBJdGVtU3R5bGVcbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBvbkNsaWNrOiBvbkNsaWNrXG4gICAgICB9LCBhY2Nlc3NpYmlsaXR5UHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tY29udGFpbmVyXCIpXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLXRhaWxcIilcbiAgICAgIH0sIHRhaWxDb250ZW50KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pdGVtLWljb25cIilcbiAgICAgIH0sIHRoaXMucmVuZGVySWNvbk5vZGUoKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1jb250ZW50XCIpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tdGl0bGVcIilcbiAgICAgIH0sIHRpdGxlLCBzdWJUaXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgdGl0bGU6IHR5cGVvZiBzdWJUaXRsZSA9PT0gJ3N0cmluZycgPyBzdWJUaXRsZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW0tc3VidGl0bGVcIilcbiAgICAgIH0sIHN1YlRpdGxlKSksIGRlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaXRlbS1kZXNjcmlwdGlvblwiKVxuICAgICAgfSwgZGVzY3JpcHRpb24pKSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGVwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgeyBTdGVwIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG4vKiBlc2xpbnQgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZTogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0b0FycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwJztcblxudmFyIFN0ZXBzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdGVwcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihTdGVwcyk7XG5cbiAgZnVuY3Rpb24gU3RlcHMoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0ZXBzKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBfdGhpcy5vblN0ZXBDbGljayA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIGN1cnJlbnQgPSBfdGhpcyRwcm9wcy5jdXJyZW50O1xuXG4gICAgICBpZiAob25DaGFuZ2UgJiYgY3VycmVudCAhPT0gbmV4dCkge1xuICAgICAgICBvbkNoYW5nZShuZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0ZXBzLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMyJHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyJHN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzMiRzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzMi5kaXJlY3Rpb24sXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMi50eXBlLFxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50ID0gX3RoaXMkcHJvcHMyLmxhYmVsUGxhY2VtZW50LFxuICAgICAgICAgIGljb25QcmVmaXggPSBfdGhpcyRwcm9wczIuaWNvblByZWZpeCxcbiAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRwcm9wczIuc3RhdHVzLFxuICAgICAgICAgIHNpemUgPSBfdGhpcyRwcm9wczIuc2l6ZSxcbiAgICAgICAgICBjdXJyZW50ID0gX3RoaXMkcHJvcHMyLmN1cnJlbnQsXG4gICAgICAgICAgcHJvZ3Jlc3NEb3QgPSBfdGhpcyRwcm9wczIucHJvZ3Jlc3NEb3QsXG4gICAgICAgICAgc3RlcEljb24gPSBfdGhpcyRwcm9wczIuc3RlcEljb24sXG4gICAgICAgICAgaW5pdGlhbCA9IF90aGlzJHByb3BzMi5pbml0aWFsLFxuICAgICAgICAgIGljb25zID0gX3RoaXMkcHJvcHMyLmljb25zLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczIsIFtcInByZWZpeENsc1wiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaXJlY3Rpb25cIiwgXCJ0eXBlXCIsIFwibGFiZWxQbGFjZW1lbnRcIiwgXCJpY29uUHJlZml4XCIsIFwic3RhdHVzXCIsIFwic2l6ZVwiLCBcImN1cnJlbnRcIiwgXCJwcm9ncmVzc0RvdFwiLCBcInN0ZXBJY29uXCIsIFwiaW5pdGlhbFwiLCBcImljb25zXCIsIFwib25DaGFuZ2VcIl0pO1xuXG4gICAgICB2YXIgaXNOYXYgPSB0eXBlID09PSAnbmF2aWdhdGlvbic7XG4gICAgICB2YXIgYWRqdXN0ZWRMYWJlbFBsYWNlbWVudCA9IHByb2dyZXNzRG90ID8gJ3ZlcnRpY2FsJyA6IGxhYmVsUGxhY2VtZW50O1xuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChkaXJlY3Rpb24pLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplKSwgc2l6ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sYWJlbC1cIikuY29uY2F0KGFkanVzdGVkTGFiZWxQbGFjZW1lbnQpLCBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kb3RcIiksICEhcHJvZ3Jlc3NEb3QpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2aWdhdGlvblwiKSwgaXNOYXYpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgcmVzdFByb3BzKSwgdG9BcnJheShjaGlsZHJlbikubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHN0ZXBOdW1iZXIgPSBpbml0aWFsICsgaW5kZXg7XG5cbiAgICAgICAgdmFyIGNoaWxkUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICBzdGVwTnVtYmVyOiBcIlwiLmNvbmNhdChzdGVwTnVtYmVyICsgMSksXG4gICAgICAgICAgc3RlcEluZGV4OiBzdGVwTnVtYmVyLFxuICAgICAgICAgIGtleTogc3RlcE51bWJlcixcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBpY29uUHJlZml4OiBpY29uUHJlZml4LFxuICAgICAgICAgIHdyYXBwZXJTdHlsZTogc3R5bGUsXG4gICAgICAgICAgcHJvZ3Jlc3NEb3Q6IHByb2dyZXNzRG90LFxuICAgICAgICAgIHN0ZXBJY29uOiBzdGVwSWNvbixcbiAgICAgICAgICBpY29uczogaWNvbnMsXG4gICAgICAgICAgb25TdGVwQ2xpY2s6IG9uQ2hhbmdlICYmIF90aGlzMi5vblN0ZXBDbGlja1xuICAgICAgICB9LCBjaGlsZC5wcm9wcyk7IC8vIGZpeCB0YWlsIGNvbG9yXG5cblxuICAgICAgICBpZiAoc3RhdHVzID09PSAnZXJyb3InICYmIGluZGV4ID09PSBjdXJyZW50IC0gMSkge1xuICAgICAgICAgIGNoaWxkUHJvcHMuY2xhc3NOYW1lID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uZXh0LWVycm9yXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjaGlsZC5wcm9wcy5zdGF0dXMpIHtcbiAgICAgICAgICBpZiAoc3RlcE51bWJlciA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgY2hpbGRQcm9wcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgfSBlbHNlIGlmIChzdGVwTnVtYmVyIDwgY3VycmVudCkge1xuICAgICAgICAgICAgY2hpbGRQcm9wcy5zdGF0dXMgPSAnZmluaXNoJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGRQcm9wcy5zdGF0dXMgPSAnd2FpdCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGRQcm9wcy5hY3RpdmUgPSBzdGVwTnVtYmVyID09PSBjdXJyZW50O1xuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RlcHM7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCB7IFN0ZXBzIGFzIGRlZmF1bHQgfTtcblN0ZXBzLlN0ZXAgPSBTdGVwO1xuU3RlcHMuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnZGVmYXVsdCcsXG4gIHByZWZpeENsczogJ3JjLXN0ZXBzJyxcbiAgaWNvblByZWZpeDogJ3JjJyxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcsXG4gIGluaXRpYWw6IDAsXG4gIGN1cnJlbnQ6IDAsXG4gIHN0YXR1czogJ3Byb2Nlc3MnLFxuICBzaXplOiAnJyxcbiAgcHJvZ3Jlc3NEb3Q6IGZhbHNlXG59OyIsImltcG9ydCBTdGVwcyBmcm9tICcuL1N0ZXBzJztcbmltcG9ydCBTdGVwIGZyb20gJy4vU3RlcCc7XG5leHBvcnQgeyBTdGVwIH07XG5leHBvcnQgZGVmYXVsdCBTdGVwczsiXSwic291cmNlUm9vdCI6IiJ9