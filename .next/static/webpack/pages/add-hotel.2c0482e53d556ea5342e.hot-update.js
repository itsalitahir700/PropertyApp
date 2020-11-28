webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddFeature.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddFeature.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../settings/service */ "./settings/service.js");







var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddFeature.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var AddFeature = function AddFeature() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      loading = _useState[0],
      setloading = _useState[1];

  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      paddingLeft: "10rem",
      paddingRight: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 14
    },
    layout: "horizontal",
    style: {
      marginTop: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_5___default.a, {
    message: "PROPERTY FEATURES",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Main Features"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "Built in year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "View",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "Parking Spaces",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Double Glazed Windows")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Central Air Conditioning")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Central Heating")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    label: "Select Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  })))));
};

_s(AddFeature, "PfjcYjxEQ2MVeY8/jvKX7eEZyyc=");

_c = AddFeature;
/* harmony default export */ __webpack_exports__["default"] = (AddFeature);

var _c;

$RefreshReg$(_c, "AddFeature");

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

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
exports.default = DownOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/DownOutlined.js":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/DownOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/DownOutlined */ "./node_modules/@ant-design/icons/lib/icons/DownOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DownOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/DownOutlined.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/DownOutlined.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/DownOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DownOutlined = function DownOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _DownOutlined.default
  }));
};

DownOutlined.displayName = 'DownOutlined';

var _default = /*#__PURE__*/React.forwardRef(DownOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/antd/lib/select/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/select/index.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcSelect = _interopRequireWildcard(__webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _iconUtil = _interopRequireDefault(__webpack_require__(/*! ./utils/iconUtil */ "./node_modules/antd/lib/select/utils/iconUtil.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

// TODO: 4.0 - codemod should help to change `filterOption` to support node props.
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

var SECRET_COMBOBOX_MODE_DO_NOT_USE = 'SECRET_COMBOBOX_MODE_DO_NOT_USE';

var InternalSelect = function InternalSelect(_a, ref) {
  var _classNames2;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      className = _a.className,
      getPopupContainer = _a.getPopupContainer,
      dropdownClassName = _a.dropdownClassName,
      _a$listHeight = _a.listHeight,
      listHeight = _a$listHeight === void 0 ? 256 : _a$listHeight,
      _a$listItemHeight = _a.listItemHeight,
      listItemHeight = _a$listItemHeight === void 0 ? 24 : _a$listItemHeight,
      customizeSize = _a.size,
      notFoundContent = _a.notFoundContent,
      _a$transitionName = _a.transitionName,
      transitionName = _a$transitionName === void 0 ? 'slide-up' : _a$transitionName,
      props = __rest(_a, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent", "transitionName"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      renderEmpty = _React$useContext.renderEmpty,
      direction = _React$useContext.direction,
      virtual = _React$useContext.virtual,
      dropdownMatchSelectWidth = _React$useContext.dropdownMatchSelectWidth;

  var size = React.useContext(_SizeContext["default"]);
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var mode = React.useMemo(function () {
    var m = props.mode;

    if (m === 'combobox') {
      return undefined;
    }

    if (m === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
      return 'combobox';
    }

    return m;
  }, [props.mode]);
  var isMultiple = mode === 'multiple' || mode === 'tags'; // ===================== Empty =====================

  var mergedNotFound;

  if (notFoundContent !== undefined) {
    mergedNotFound = notFoundContent;
  } else if (mode === 'combobox') {
    mergedNotFound = null;
  } else {
    mergedNotFound = renderEmpty('Select');
  } // ===================== Icons =====================


  var _getIcons = (0, _iconUtil["default"])((0, _extends2["default"])((0, _extends2["default"])({}, props), {
    multiple: isMultiple,
    prefixCls: prefixCls
  })),
      suffixIcon = _getIcons.suffixIcon,
      itemIcon = _getIcons.itemIcon,
      removeIcon = _getIcons.removeIcon,
      clearIcon = _getIcons.clearIcon;

  var selectProps = (0, _omit["default"])(props, ['suffixIcon', 'itemIcon']);
  var rcSelectRtlDropDownClassName = (0, _classnames["default"])(dropdownClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-dropdown-").concat(direction), direction === 'rtl'));
  var mergedSize = customizeSize || size;
  var mergedClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-lg"), mergedSize === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-sm"), mergedSize === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-borderless"), !bordered), _classNames2), className);
  return /*#__PURE__*/React.createElement(_rcSelect["default"], (0, _extends2["default"])({
    ref: ref,
    virtual: virtual,
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }, selectProps, {
    transitionName: transitionName,
    listHeight: listHeight,
    listItemHeight: listItemHeight,
    mode: mode,
    prefixCls: prefixCls,
    direction: direction,
    inputIcon: suffixIcon,
    menuItemSelectedIcon: itemIcon,
    removeIcon: removeIcon,
    clearIcon: clearIcon,
    notFoundContent: mergedNotFound,
    className: mergedClassName,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    dropdownClassName: rcSelectRtlDropDownClassName
  }));
};

var SelectRef = /*#__PURE__*/React.forwardRef(InternalSelect);
var Select = SelectRef;
Select.SECRET_COMBOBOX_MODE_DO_NOT_USE = SECRET_COMBOBOX_MODE_DO_NOT_USE;
Select.Option = _rcSelect.Option;
Select.OptGroup = _rcSelect.OptGroup;
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/select/utils/iconUtil.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/select/utils/iconUtil.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getIcons;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/@ant-design/icons/DownOutlined.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SearchOutlined */ "./node_modules/@ant-design/icons/SearchOutlined.js"));

function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
      clearIcon = _ref.clearIcon,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      removeIcon = _ref.removeIcon,
      loading = _ref.loading,
      multiple = _ref.multiple,
      prefixCls = _ref.prefixCls;
  // Clear Icon
  var mergedClearIcon = clearIcon;

  if (!clearIcon) {
    mergedClearIcon = /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null);
  } // Arrow item icon


  var mergedSuffixIcon = null;

  if (suffixIcon !== undefined) {
    mergedSuffixIcon = suffixIcon;
  } else if (loading) {
    mergedSuffixIcon = /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      spin: true
    });
  } else {
    var iconCls = "".concat(prefixCls, "-suffix");

    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
          showSearch = _ref2.showSearch;

      if (open && showSearch) {
        return /*#__PURE__*/React.createElement(_SearchOutlined["default"], {
          className: iconCls
        });
      }

      return /*#__PURE__*/React.createElement(_DownOutlined["default"], {
        className: iconCls
      });
    };
  } // Checked item icon


  var mergedItemIcon = null;

  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
  } else {
    mergedItemIcon = null;
  }

  var mergedRemoveIcon = null;

  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}

/***/ }),

/***/ "./node_modules/rc-select/es/OptGroup.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/OptGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** This is a placeholder, not real render in dom */
var OptGroup = function OptGroup() {
  return null;
};

OptGroup.isSelectOptGroup = true;
/* harmony default export */ __webpack_exports__["default"] = (OptGroup);

/***/ }),

/***/ "./node_modules/rc-select/es/Option.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Option.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** This is a placeholder, not real render in dom */
var Option = function Option() {
  return null;
};

Option.isSelectOption = true;
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./node_modules/rc-select/es/OptionList.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-select/es/OptionList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/hooks/useMemo */ "./node_modules/rc-util/es/hooks/useMemo.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_virtual_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-virtual-list */ "./node_modules/rc-virtual-list/es/index.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TransBtn */ "./node_modules/rc-select/es/TransBtn.js");










/**
 * Using virtual list of option display.
 * Will fallback to dom if use customize render.
 */

var OptionList = function OptionList(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      flattenOptions = _ref.flattenOptions,
      childrenAsData = _ref.childrenAsData,
      values = _ref.values,
      searchValue = _ref.searchValue,
      multiple = _ref.multiple,
      defaultActiveFirstOption = _ref.defaultActiveFirstOption,
      height = _ref.height,
      itemHeight = _ref.itemHeight,
      notFoundContent = _ref.notFoundContent,
      open = _ref.open,
      menuItemSelectedIcon = _ref.menuItemSelectedIcon,
      virtual = _ref.virtual,
      onSelect = _ref.onSelect,
      onToggleOpen = _ref.onToggleOpen,
      onActiveValue = _ref.onActiveValue,
      onScroll = _ref.onScroll,
      onMouseEnter = _ref.onMouseEnter;
  var itemPrefixCls = "".concat(prefixCls, "-item");
  var memoFlattenOptions = Object(rc_util_es_hooks_useMemo__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    return flattenOptions;
  }, [open, flattenOptions], function (prev, next) {
    return next[0] && prev[1] !== next[1];
  }); // =========================== List ===========================

  var listRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var onListMouseDown = function onListMouseDown(event) {
    event.preventDefault();
  };

  var scrollIntoView = function scrollIntoView(index) {
    if (listRef.current) {
      listRef.current.scrollTo({
        index: index
      });
    }
  }; // ========================== Active ==========================


  var getEnabledActiveIndex = function getEnabledActiveIndex(index) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var len = memoFlattenOptions.length;

    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
          group = _memoFlattenOptions$c.group,
          data = _memoFlattenOptions$c.data;

      if (!group && !data.disabled) {
        return current;
      }
    }

    return -1;
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](function () {
    return getEnabledActiveIndex(0);
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      activeIndex = _React$useState2[0],
      setActiveIndex = _React$useState2[1];

  var setActive = function setActive(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    }; // Trigger active event

    var flattenItem = memoFlattenOptions[index];

    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }

    onActiveValue(flattenItem.data.value, index, info);
  }; // Auto active first item when list length or searchValue changed


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
  }, [memoFlattenOptions.length, searchValue]); // Auto scroll to item position in single mode

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    /**
     * React will skip `onChange` when component update.
     * `setActive` function will call root accessibility state update which makes re-render.
     * So we need to delay to let Input component trigger onChange first.
     */
    var timeoutId = setTimeout(function () {
      if (!multiple && open && values.size === 1) {
        var value = Array.from(values)[0];
        var index = memoFlattenOptions.findIndex(function (_ref2) {
          var data = _ref2.data;
          return data.value === value;
        });
        setActive(index);
        scrollIntoView(index);
      }
    }); // Force trigger scrollbar visible when open

    if (open) {
      var _listRef$current;

      (_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.scrollTo(undefined);
    }

    return function () {
      return clearTimeout(timeoutId);
    };
  }, [open]); // ========================== Values ==========================

  var onSelectValue = function onSelectValue(value) {
    if (value !== undefined) {
      onSelect(value, {
        selected: !values.has(value)
      });
    } // Single mode should always close by select


    if (!multiple) {
      onToggleOpen(false);
    }
  }; // ========================= Keyboard =========================


  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which;

        switch (which) {
          // >>> Arrow keys
          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].UP:
          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN:
            {
              var offset = 0;

              if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].UP) {
                offset = -1;
              } else if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN) {
                offset = 1;
              }

              if (offset !== 0) {
                var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
                scrollIntoView(nextActiveIndex);
                setActive(nextActiveIndex, true);
              }

              break;
            }
          // >>> Select

          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ENTER:
            {
              // value
              var item = memoFlattenOptions[activeIndex];

              if (item && !item.data.disabled) {
                onSelectValue(item.data.value);
              } else {
                onSelectValue(undefined);
              }

              if (open) {
                event.preventDefault();
              }

              break;
            }
          // >>> Close

          case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ESC:
            {
              onToggleOpen(false);
            }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  }); // ========================== Render ==========================

  if (memoFlattenOptions.length === 0) {
    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      role: "listbox",
      id: "".concat(id, "_list"),
      className: "".concat(itemPrefixCls, "-empty"),
      onMouseDown: onListMouseDown
    }, notFoundContent);
  }

  function renderItem(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value,
        label = itemData.label,
        children = itemData.children;
    var attrs = Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_5__["default"])(itemData, true);
    var mergedLabel = childrenAsData ? children : label;
    return item ? react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object.assign({
      "aria-label": typeof mergedLabel === 'string' ? mergedLabel : null
    }, attrs, {
      key: index,
      role: "option",
      id: "".concat(id, "_list_").concat(index),
      "aria-selected": values.has(value)
    }), value) : null;
  }

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    role: "listbox",
    id: "".concat(id, "_list"),
    style: {
      height: 0,
      width: 0,
      overflow: 'hidden'
    }
  }, renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_virtual_list__WEBPACK_IMPORTED_MODULE_8__["default"], {
    itemKey: "key",
    ref: listRef,
    data: memoFlattenOptions,
    height: height,
    itemHeight: itemHeight,
    fullHeight: false,
    onMouseDown: onListMouseDown,
    onScroll: onScroll,
    virtual: virtual,
    onMouseEnter: onMouseEnter
  }, function (_ref3, itemIndex) {
    var _classNames;

    var group = _ref3.group,
        groupOption = _ref3.groupOption,
        data = _ref3.data;
    var label = data.label,
        key = data.key; // Group

    if (group) {
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(itemPrefixCls, "".concat(itemPrefixCls, "-group"))
      }, label !== undefined ? label : key);
    }

    var disabled = data.disabled,
        value = data.value,
        title = data.title,
        children = data.children,
        style = data.style,
        className = data.className,
        otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(data, ["disabled", "value", "title", "children", "style", "className"]); // Option


    var selected = values.has(value);
    var optionPrefixCls = "".concat(itemPrefixCls, "-option");
    var optionClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(itemPrefixCls, optionPrefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-grouped"), groupOption), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-active"), activeIndex === itemIndex && !disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(optionPrefixCls, "-selected"), selected), _classNames));
    var mergedLabel = childrenAsData ? children : label;
    var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
    var content = mergedLabel || value; // https://github.com/ant-design/ant-design/issues/26717

    var optionTitle = typeof content === 'string' || typeof content === 'number' ? content.toString() : undefined;

    if (title !== undefined) {
      optionTitle = title;
    }

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object.assign({}, otherProps, {
      "aria-selected": selected,
      className: optionClassName,
      title: optionTitle,
      onMouseMove: function onMouseMove() {
        if (activeIndex === itemIndex || disabled) {
          return;
        }

        setActive(itemIndex);
      },
      onClick: function onClick() {
        if (!disabled) {
          onSelectValue(value);
        }
      },
      style: style
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "".concat(optionPrefixCls, "-content")
    }, content), react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](menuItemSelectedIcon) || selected, iconVisible && react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "".concat(itemPrefixCls, "-option-state"),
      customizeIcon: menuItemSelectedIcon,
      customizeIconProps: {
        isSelected: selected
      }
    }, selected ? '✓' : null));
  }));
};

var RefOptionList = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](OptionList);
RefOptionList.displayName = 'OptionList';
/* harmony default export */ __webpack_exports__["default"] = (RefOptionList);

/***/ }),

/***/ "./node_modules/rc-select/es/Select.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-select/es/Select.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OptionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OptionList */ "./node_modules/rc-select/es/OptionList.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OptGroup */ "./node_modules/rc-select/es/OptGroup.js");
/* harmony import */ var _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/legacyUtil */ "./node_modules/rc-select/es/utils/legacyUtil.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-select/es/utils/valueUtil.js");
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generate */ "./node_modules/rc-select/es/generate.js");
/* harmony import */ var _utils_warningPropsUtil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/warningPropsUtil */ "./node_modules/rc-select/es/utils/warningPropsUtil.js");





/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */








var RefSelect = Object(_generate__WEBPACK_IMPORTED_MODULE_10__["default"])({
  prefixCls: 'rc-select',
  components: {
    optionList: _OptionList__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  convertChildrenToData: _utils_legacyUtil__WEBPACK_IMPORTED_MODULE_8__["convertChildrenToData"],
  flattenOptions: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["flattenOptions"],
  getLabeledValue: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["getLabeledValue"],
  filterOptions: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["filterOptions"],
  isValueDisabled: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["isValueDisabled"],
  findValueOption: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["findValueOption"],
  warningProps: _utils_warningPropsUtil__WEBPACK_IMPORTED_MODULE_11__["default"],
  fillOptionsWithMissingValue: _utils_valueUtil__WEBPACK_IMPORTED_MODULE_9__["fillOptionsWithMissingValue"]
});
/**
 * Typescript not support generic with function component,
 * we have to wrap an class component to handle this.
 */

var Select = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Select, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Select);

  function Select() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Select);

    _this = _super.apply(this, arguments);
    _this.selectRef = react__WEBPACK_IMPORTED_MODULE_4__["createRef"]();

    _this.focus = function () {
      _this.selectRef.current.focus();
    };

    _this.blur = function () {
      _this.selectRef.current.blur();
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Select, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](RefSelect, Object.assign({
        ref: this.selectRef
      }, this.props));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Select.Option = _Option__WEBPACK_IMPORTED_MODULE_6__["default"];
Select.OptGroup = _OptGroup__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./node_modules/rc-select/es/SelectTrigger.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-select/es/SelectTrigger.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
  // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
  var adjustX = typeof dropdownMatchSelectWidth !== 'number' ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX: adjustX,
        adjustY: 1
      }
    }
  };
};

var SelectTrigger = function SelectTrigger(props, ref) {
  var prefixCls = props.prefixCls,
      disabled = props.disabled,
      visible = props.visible,
      children = props.children,
      popupElement = props.popupElement,
      containerWidth = props.containerWidth,
      animation = props.animation,
      transitionName = props.transitionName,
      dropdownStyle = props.dropdownStyle,
      dropdownClassName = props.dropdownClassName,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'ltr' : _props$direction,
      _props$dropdownMatchS = props.dropdownMatchSelectWidth,
      dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
      dropdownRender = props.dropdownRender,
      dropdownAlign = props.dropdownAlign,
      getPopupContainer = props.getPopupContainer,
      empty = props.empty,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode"]);

  var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
  var popupNode = popupElement;

  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }

  var builtInPlacements = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    return getBuiltInPlacements(dropdownMatchSelectWidth);
  }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

  var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

  var popupRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });

  var popupStyle = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    minWidth: containerWidth
  }, dropdownStyle);

  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, restProps, {
    showAction: [],
    hideAction: [],
    popupPlacement: direction === 'rtl' ? 'bottomRight' : 'bottomLeft',
    builtinPlacements: builtInPlacements,
    prefixCls: dropdownPrefixCls,
    popupTransitionName: mergedTransitionName,
    popup: react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      ref: popupRef
    }, popupNode),
    popupAlign: dropdownAlign,
    popupVisible: visible,
    getPopupContainer: getPopupContainer,
    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_5___default()(dropdownClassName, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
    popupStyle: popupStyle,
    getTriggerDOMNode: getTriggerDOMNode
  }), children);
};

var RefSelectTrigger = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
/* harmony default export */ __webpack_exports__["default"] = (RefSelectTrigger);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/Input.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/Input.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/rc-util/es/ref.js");




var Input = function Input(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      inputElement = _ref.inputElement,
      disabled = _ref.disabled,
      tabIndex = _ref.tabIndex,
      autoFocus = _ref.autoFocus,
      autoComplete = _ref.autoComplete,
      editable = _ref.editable,
      accessibilityIndex = _ref.accessibilityIndex,
      value = _ref.value,
      _onKeyDown = _ref.onKeyDown,
      _onMouseDown = _ref.onMouseDown,
      _onChange = _ref.onChange,
      onPaste = _ref.onPaste,
      _onCompositionStart = _ref.onCompositionStart,
      _onCompositionEnd = _ref.onCompositionEnd,
      open = _ref.open,
      attrs = _ref.attrs;
  var inputNode = inputElement || react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", null);
  var _inputNode = inputNode,
      originRef = _inputNode.ref,
      _inputNode$props = _inputNode.props,
      onOriginKeyDown = _inputNode$props.onKeyDown,
      onOriginChange = _inputNode$props.onChange,
      onOriginMouseDown = _inputNode$props.onMouseDown,
      onOriginCompositionStart = _inputNode$props.onCompositionStart,
      onOriginCompositionEnd = _inputNode$props.onCompositionEnd,
      style = _inputNode$props.style;
  inputNode = react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](inputNode, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: id,
    ref: Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_2__["composeRef"])(ref, originRef),
    disabled: disabled,
    tabIndex: tabIndex,
    autoComplete: autoComplete || 'off',
    type: 'search',
    autoFocus: autoFocus,
    className: "".concat(prefixCls, "-selection-search-input"),
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style), {}, {
      opacity: editable ? null : 0
    }),
    role: 'combobox',
    'aria-expanded': open,
    'aria-haspopup': 'listbox',
    'aria-owns': "".concat(id, "_list"),
    'aria-autocomplete': 'list',
    'aria-controls': "".concat(id, "_list"),
    'aria-activedescendant': "".concat(id, "_list_").concat(accessibilityIndex)
  }, attrs), {}, {
    value: editable ? value : '',
    readOnly: !editable,
    unselectable: !editable ? 'on' : null,
    onKeyDown: function onKeyDown(event) {
      _onKeyDown(event);

      if (onOriginKeyDown) {
        onOriginKeyDown(event);
      }
    },
    onMouseDown: function onMouseDown(event) {
      _onMouseDown(event);

      if (onOriginMouseDown) {
        onOriginMouseDown(event);
      }
    },
    onChange: function onChange(event) {
      _onChange(event);

      if (onOriginChange) {
        onOriginChange(event);
      }
    },
    onCompositionStart: function onCompositionStart(event) {
      _onCompositionStart(event);

      if (onOriginCompositionStart) {
        onOriginCompositionStart(event);
      }
    },
    onCompositionEnd: function onCompositionEnd(event) {
      _onCompositionEnd(event);

      if (onOriginCompositionEnd) {
        onOriginCompositionEnd(event);
      }
    },
    onPaste: onPaste
  }));
  return inputNode;
};

var RefInput = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](Input);
RefInput.displayName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (RefInput);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/MultipleSelector.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/MultipleSelector.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var rc_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TransBtn */ "./node_modules/rc-select/es/TransBtn.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input */ "./node_modules/rc-select/es/Selector/Input.js");
/* harmony import */ var _hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useLayoutEffect */ "./node_modules/rc-select/es/hooks/useLayoutEffect.js");











var REST_TAG_KEY = '__RC_SELECT_MAX_REST_COUNT__';

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      choiceTransitionName = props.choiceTransitionName,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onSelect = props.onSelect,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1];

  var measureRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__["useState"](0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      inputWidth = _React$useState4[0],
      setInputWidth = _React$useState4[1]; // ===================== Motion ======================


  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    setMotionAppear(true);
  }, []); // ===================== Search ======================

  var inputValue = open || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || open && showSearch; // We measure width and set to the input immediately

  Object(_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_10__["default"])(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ==================== Selection ====================

  var displayValues = values; // Cut by `maxTagCount`

  var restCount;

  if (typeof maxTagCount === 'number') {
    restCount = values.length - maxTagCount;
    displayValues = values.slice(0, maxTagCount);
  } // Update by `maxTagTextLength`


  if (typeof maxTagTextLength === 'number') {
    displayValues = displayValues.map(function (_ref) {
      var label = _ref.label,
          rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["label"]);

      var displayLabel = label;

      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }

      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, rest), {}, {
        label: displayLabel
      });
    });
  } // Fill rest


  if (restCount > 0) {
    displayValues.push({
      key: REST_TAG_KEY,
      label: typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(values.slice(maxTagCount)) : maxTagPlaceholder
    });
  }

  var selectionNode = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_motion__WEBPACK_IMPORTED_MODULE_7__["CSSMotionList"], {
    component: false,
    keys: displayValues,
    motionName: choiceTransitionName,
    motionAppear: motionAppear
  }, function (_ref2) {
    var key = _ref2.key,
        label = _ref2.label,
        value = _ref2.value,
        itemDisabled = _ref2.disabled,
        className = _ref2.className,
        style = _ref2.style;
    var mergedKey = key || value;
    var closable = !disabled && key !== REST_TAG_KEY && !itemDisabled;

    var onMouseDown = function onMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
    };

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onSelect(value, {
        selected: false
      });
    };

    return typeof tagRender === 'function' ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      key: mergedKey,
      onMouseDown: onMouseDown,
      className: className,
      style: style
    }, tagRender({
      label: label,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    })) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      key: mergedKey,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "".concat(prefixCls, "-selection-item"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-selection-item-disabled"), itemDisabled)),
      style: style
    }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
      className: "".concat(prefixCls, "-selection-item-content")
    }, label), closable && react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "".concat(prefixCls, "-selection-item-remove"),
      onMouseDown: onMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  });
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, selectionNode, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-search"),
    style: {
      width: inputWidth
    }
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_6__["default"])(props, true)
  }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    ref: measureRef,
    className: "".concat(prefixCls, "-selection-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")), !values.length && !inputValue && react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/SingleSelector.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/SingleSelector.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./node_modules/rc-select/es/Selector/Input.js");





var SingleSelector = function SingleSelector(props) {
  var inputElement = props.inputElement,
      prefixCls = props.prefixCls,
      id = props.id,
      inputRef = props.inputRef,
      disabled = props.disabled,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      mode = props.mode,
      open = props.open,
      values = props.values,
      placeholder = props.placeholder,
      tabIndex = props.tabIndex,
      showSearch = props.showSearch,
      searchValue = props.searchValue,
      activeValue = props.activeValue,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      inputChanged = _React$useState2[0],
      setInputChanged = _React$useState2[1];

  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';

  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (combobox) {
      setInputChanged(false);
    }
  }, [combobox, activeValue]); // Not show text when closed expect combobox mode

  var hasTextInput = mode !== 'combobox' && !open ? false : !!inputValue;
  var title = item && (typeof item.label === 'string' || typeof item.label === 'number') ? item.label.toString() : undefined;
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-search")
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    prefixCls: prefixCls,
    id: id,
    open: open,
    inputElement: inputElement,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: function onChange(e) {
      setInputChanged(true);
      onInputChange(e);
    },
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_2__["default"])(props, true)
  })), !combobox && item && !hasTextInput && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-item"),
    title: title
  }, item.label), !item && !hasTextInput && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/Selector/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-select/es/Selector/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _MultipleSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultipleSelector */ "./node_modules/rc-select/es/Selector/MultipleSelector.js");
/* harmony import */ var _SingleSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleSelector */ "./node_modules/rc-select/es/Selector/SingleSelector.js");
/* harmony import */ var _hooks_useLock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLock */ "./node_modules/rc-select/es/hooks/useLock.js");


/**
 * Cursor rule:
 * 1. Only `showSearch` enabled
 * 2. Only `open` is `true`
 * 3. When typing, set `open` to `true` which hit rule of 2
 *
 * Accessibility:
 * - https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
 */







var Selector = function Selector(props, ref) {
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var compositionStatusRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var prefixCls = props.prefixCls,
      multiple = props.multiple,
      open = props.open,
      mode = props.mode,
      showSearch = props.showSearch,
      tokenWithEnter = props.tokenWithEnter,
      onSearch = props.onSearch,
      onSearchSubmit = props.onSearchSubmit,
      onToggleOpen = props.onToggleOpen,
      onInputKeyDown = props.onInputKeyDown,
      domRef = props.domRef; // ======================= Ref =======================

  react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"](ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  }); // ====================== Input ======================

  var _useLock = Object(_hooks_useLock__WEBPACK_IMPORTED_MODULE_5__["default"])(0),
      _useLock2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLock, 2),
      getInputMouseDown = _useLock2[0],
      setInputMouseDown = _useLock2[1];

  var onInternalInputKeyDown = function onInternalInputKeyDown(event) {
    var which = event.which;

    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP || which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN) {
      event.preventDefault();
    }

    if (onInputKeyDown) {
      onInputKeyDown(event);
    }

    if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      // When menu isn't open, OptionList won't trigger a value change
      // So when enter is pressed, the tag's input value should be emitted here to let selector know
      onSearchSubmit(event.target.value);
    }

    if (![rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].SHIFT, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].TAB, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].BACKSPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ESC].includes(which)) {
      onToggleOpen(true);
    }
  };
  /**
   * We can not use `findDOMNode` sine it will get warning,
   * have to use timer to check if is input element.
   */


  var onInternalInputMouseDown = function onInternalInputMouseDown() {
    setInputMouseDown(true);
  }; // When paste come, ignore next onChange


  var pastedTextRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var triggerOnSearch = function triggerOnSearch(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };

  var onInputCompositionStart = function onInputCompositionStart() {
    compositionStatusRef.current = true;
  };

  var onInputCompositionEnd = function onInputCompositionEnd() {
    compositionStatusRef.current = false;
  };

  var onInputChange = function onInputChange(event) {
    var value = event.target.value; // Pasted text should replace back to origin content

    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      // CRLF will be treated as a single space for input element
      var replacedText = pastedTextRef.current.replace(/\r\n/g, ' ').replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }

    pastedTextRef.current = null;
    triggerOnSearch(value);
  };

  var onInputPaste = function onInputPaste(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };

  var onClick = function onClick(_ref) {
    var target = _ref.target;

    if (target !== inputRef.current) {
      // Should focus input if click the selector
      var isIE = document.body.style.msTouchAction !== undefined;

      if (isIE) {
        setTimeout(function () {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };

  var onMouseDown = function onMouseDown(event) {
    var inputMouseDown = getInputMouseDown();

    if (event.target !== inputRef.current && !inputMouseDown) {
      event.preventDefault();
    }

    if (mode !== 'combobox' && (!showSearch || !inputMouseDown) || !open) {
      if (open) {
        onSearch('', true, false);
      }

      onToggleOpen();
    }
  }; // ================= Inner Selector ==================


  var sharedProps = {
    inputRef: inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange: onInputChange,
    onInputPaste: onInputPaste,
    onInputCompositionStart: onInputCompositionStart,
    onInputCompositionEnd: onInputCompositionEnd
  };
  var selectNode = multiple ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_MultipleSelector__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({}, props, sharedProps)) : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_SingleSelector__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, sharedProps));
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    ref: domRef,
    className: "".concat(prefixCls, "-selector"),
    onClick: onClick,
    onMouseDown: onMouseDown
  }, selectNode);
};

var ForwardSelector = react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](Selector);
ForwardSelector.displayName = 'Selector';
/* harmony default export */ __webpack_exports__["default"] = (ForwardSelector);

/***/ }),

/***/ "./node_modules/rc-select/es/TransBtn.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/TransBtn.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var TransBtn = function TransBtn(_ref) {
  var className = _ref.className,
      customizeIcon = _ref.customizeIcon,
      customizeIconProps = _ref.customizeIconProps,
      _onMouseDown = _ref.onMouseDown,
      onClick = _ref.onClick,
      children = _ref.children;
  var icon;

  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: className,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (_onMouseDown) {
        _onMouseDown(event);
      }
    },
    style: {
      userSelect: 'none',
      WebkitUserSelect: 'none'
    },
    unselectable: "on",
    onClick: onClick,
    "aria-hidden": true
  }, icon !== undefined ? icon : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className.split(/\s+/).map(function (cls) {
      return "".concat(cls, "-icon");
    }))
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (TransBtn);

/***/ }),

/***/ "./node_modules/rc-select/es/generate.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-select/es/generate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateSelector; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Selector */ "./node_modules/rc-select/es/Selector/index.js");
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SelectTrigger */ "./node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var _interface_generator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interface/generator */ "./node_modules/rc-select/es/interface/generator.js");
/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");
/* harmony import */ var _TransBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TransBtn */ "./node_modules/rc-select/es/TransBtn.js");
/* harmony import */ var _hooks_useLock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks/useLock */ "./node_modules/rc-select/es/hooks/useLock.js");
/* harmony import */ var _hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hooks/useDelayReset */ "./node_modules/rc-select/es/hooks/useDelayReset.js");
/* harmony import */ var _hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useLayoutEffect */ "./node_modules/rc-select/es/hooks/useLayoutEffect.js");
/* harmony import */ var _utils_valueUtil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/valueUtil */ "./node_modules/rc-select/es/utils/valueUtil.js");
/* harmony import */ var _hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hooks/useSelectTriggerControl */ "./node_modules/rc-select/es/hooks/useSelectTriggerControl.js");
/* harmony import */ var _hooks_useCacheDisplayValue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hooks/useCacheDisplayValue */ "./node_modules/rc-select/es/hooks/useCacheDisplayValue.js");
/* harmony import */ var _hooks_useCacheOptions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hooks/useCacheOptions */ "./node_modules/rc-select/es/hooks/useCacheOptions.js");






/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 */

















var DEFAULT_OMIT_PROPS = ['removeIcon', 'placeholder', 'autoFocus', 'maxTagCount', 'maxTagTextLength', 'maxTagPlaceholder', 'choiceTransitionName', 'onInputKeyDown'];
/**
 * This function is in internal usage.
 * Do not use it in your prod env since we may refactor this.
 */

function generateSelector(config) {
  var defaultPrefixCls = config.prefixCls,
      OptionList = config.components.optionList,
      convertChildrenToData = config.convertChildrenToData,
      flattenOptions = config.flattenOptions,
      getLabeledValue = config.getLabeledValue,
      filterOptions = config.filterOptions,
      isValueDisabled = config.isValueDisabled,
      findValueOption = config.findValueOption,
      warningProps = config.warningProps,
      fillOptionsWithMissingValue = config.fillOptionsWithMissingValue,
      omitDOMProps = config.omitDOMProps; // Use raw define since `React.FC` not support generic

  function Select(props, ref) {
    var _classNames2;

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? defaultPrefixCls : _props$prefixCls,
        className = props.className,
        id = props.id,
        open = props.open,
        defaultOpen = props.defaultOpen,
        options = props.options,
        children = props.children,
        mode = props.mode,
        value = props.value,
        defaultValue = props.defaultValue,
        labelInValue = props.labelInValue,
        showSearch = props.showSearch,
        inputValue = props.inputValue,
        searchValue = props.searchValue,
        filterOption = props.filterOption,
        _props$optionFilterPr = props.optionFilterProp,
        optionFilterProp = _props$optionFilterPr === void 0 ? 'value' : _props$optionFilterPr,
        _props$autoClearSearc = props.autoClearSearchValue,
        autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
        onSearch = props.onSearch,
        allowClear = props.allowClear,
        clearIcon = props.clearIcon,
        showArrow = props.showArrow,
        inputIcon = props.inputIcon,
        menuItemSelectedIcon = props.menuItemSelectedIcon,
        disabled = props.disabled,
        loading = props.loading,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        _props$notFoundConten = props.notFoundContent,
        notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
        optionLabelProp = props.optionLabelProp,
        backfill = props.backfill,
        getInputElement = props.getInputElement,
        getPopupContainer = props.getPopupContainer,
        _props$listHeight = props.listHeight,
        listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
        _props$listItemHeight = props.listItemHeight,
        listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
        animation = props.animation,
        transitionName = props.transitionName,
        virtual = props.virtual,
        dropdownStyle = props.dropdownStyle,
        dropdownClassName = props.dropdownClassName,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
        dropdownRender = props.dropdownRender,
        dropdownAlign = props.dropdownAlign,
        _props$showAction = props.showAction,
        showAction = _props$showAction === void 0 ? [] : _props$showAction,
        direction = props.direction,
        tokenSeparators = props.tokenSeparators,
        tagRender = props.tagRender,
        onPopupScroll = props.onPopupScroll,
        onDropdownVisibleChange = props.onDropdownVisibleChange,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        onKeyUp = props.onKeyUp,
        onKeyDown = props.onKeyDown,
        onMouseDown = props.onMouseDown,
        onChange = props.onChange,
        onSelect = props.onSelect,
        onDeselect = props.onDeselect,
        onClear = props.onClear,
        _props$internalProps = props.internalProps,
        internalProps = _props$internalProps === void 0 ? {} : _props$internalProps,
        restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__["default"])(props, ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "optionFilterProp", "autoClearSearchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "getInputElement", "getPopupContainer", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]);

    var useInternalProps = internalProps.mark === _interface_generator__WEBPACK_IMPORTED_MODULE_11__["INTERNAL_PROPS_MARK"];
    var domProps = omitDOMProps ? omitDOMProps(restProps) : restProps;
    DEFAULT_OMIT_PROPS.forEach(function (prop) {
      delete domProps[prop];
    });
    var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var triggerRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var selectorRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var listRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var tokenWithEnter = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return (tokenSeparators || []).some(function (tokenSeparator) {
        return ['\n', '\r\n'].includes(tokenSeparator);
      });
    }, [tokenSeparators]);
    /** Used for component focused management */

    var _useDelayReset = Object(_hooks_useDelayReset__WEBPACK_IMPORTED_MODULE_15__["default"])(),
        _useDelayReset2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useDelayReset, 3),
        mockFocused = _useDelayReset2[0],
        setMockFocused = _useDelayReset2[1],
        cancelSetMockFocused = _useDelayReset2[2]; // Inner id for accessibility usage. Only work in client side


    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
        _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
        innerId = _useState2[0],
        setInnerId = _useState2[1];

    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      setInnerId("rc_select_".concat(Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_12__["getUUID"])()));
    }, []);
    var mergedId = id || innerId; // optionLabelProp

    var mergedOptionLabelProp = optionLabelProp;

    if (mergedOptionLabelProp === undefined) {
      mergedOptionLabelProp = options ? 'label' : 'children';
    } // labelInValue


    var mergedLabelInValue = mode === 'combobox' ? false : labelInValue;
    var isMultiple = mode === 'tags' || mode === 'multiple';
    var mergedShowSearch = showSearch !== undefined ? showSearch : isMultiple || mode === 'combobox'; // ============================== Ref ===============================

    var selectorDomRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    react__WEBPACK_IMPORTED_MODULE_5__["useImperativeHandle"](ref, function () {
      return {
        focus: selectorRef.current.focus,
        blur: selectorRef.current.blur
      };
    }); // ============================= Value ==============================

    var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_8__["default"])(defaultValue, {
      value: value
    }),
        _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMergedState, 2),
        mergedValue = _useMergedState2[0],
        setMergedValue = _useMergedState2[1];
    /** Unique raw values */


    var mergedRawValue = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_12__["toInnerValue"])(mergedValue, {
        labelInValue: mergedLabelInValue,
        combobox: mode === 'combobox'
      });
    }, [mergedValue, mergedLabelInValue]);
    /** We cache a set of raw values to speed up check */

    var rawValues = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return new Set(mergedRawValue);
    }, [mergedRawValue]); // ============================= Option =============================
    // Set by option list active, it will merge into search input when mode is `combobox`

    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
        _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
        activeValue = _useState4[0],
        setActiveValue = _useState4[1];

    var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
        _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
        innerSearchValue = _useState6[0],
        setInnerSearchValue = _useState6[1];

    var mergedSearchValue = innerSearchValue;

    if (mode === 'combobox' && mergedValue !== undefined) {
      mergedSearchValue = mergedValue;
    } else if (searchValue !== undefined) {
      mergedSearchValue = searchValue;
    } else if (inputValue) {
      mergedSearchValue = inputValue;
    }

    var mergedOptions = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      var newOptions = options;

      if (newOptions === undefined) {
        newOptions = convertChildrenToData(children);
      }
      /**
       * `tags` should fill un-list item.
       * This is not cool here since TreeSelect do not need this
       */


      if (mode === 'tags' && fillOptionsWithMissingValue) {
        newOptions = fillOptionsWithMissingValue(newOptions, mergedValue, mergedOptionLabelProp, labelInValue);
      }

      return newOptions || [];
    }, [options, children, mode, mergedValue]);
    var mergedFlattenOptions = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return flattenOptions(mergedOptions, props);
    }, [mergedOptions]);
    var getValueOption = Object(_hooks_useCacheOptions__WEBPACK_IMPORTED_MODULE_20__["default"])(mergedRawValue, mergedFlattenOptions); // Display options for OptionList

    var displayOptions = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      if (!mergedSearchValue || !mergedShowSearch) {
        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mergedOptions);
      }

      var filteredOptions = filterOptions(mergedSearchValue, mergedOptions, {
        optionFilterProp: optionFilterProp,
        filterOption: mode === 'combobox' && filterOption === undefined ? function () {
          return true;
        } : filterOption
      });

      if (mode === 'tags' && filteredOptions.every(function (opt) {
        return opt[optionFilterProp] !== mergedSearchValue;
      })) {
        filteredOptions.unshift({
          value: mergedSearchValue,
          label: mergedSearchValue,
          key: '__RC_SELECT_TAG_PLACEHOLDER__'
        });
      }

      return filteredOptions;
    }, [mergedOptions, mergedSearchValue, mode, mergedShowSearch]);
    var displayFlattenOptions = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      return flattenOptions(displayOptions, props);
    }, [displayOptions]);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      if (listRef.current && listRef.current.scrollTo) {
        listRef.current.scrollTo(0);
      }
    }, [mergedSearchValue]); // ============================ Selector ============================

    var displayValues = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
      var tmpValues = mergedRawValue.map(function (val) {
        var valueOptions = getValueOption([val]);
        var displayValue = getLabeledValue(val, {
          options: valueOptions,
          prevValue: mergedValue,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        });
        return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, displayValue), {}, {
          disabled: isValueDisabled(val, valueOptions)
        });
      });

      if (!mode && tmpValues.length === 1 && tmpValues[0].value === null && tmpValues[0].label === null) {
        return [];
      }

      return tmpValues;
    }, [mergedValue, mergedOptions, mode]); // Polyfill with cache label

    displayValues = Object(_hooks_useCacheDisplayValue__WEBPACK_IMPORTED_MODULE_19__["default"])(displayValues);

    var triggerSelect = function triggerSelect(newValue, isSelect, source) {
      var newValueOption = getValueOption([newValue]);
      var outOption = findValueOption([newValue], newValueOption)[0];

      if (!internalProps.skipTriggerSelect) {
        // Skip trigger `onSelect` or `onDeselect` if configured
        var selectValue = mergedLabelInValue ? getLabeledValue(newValue, {
          options: newValueOption,
          prevValue: mergedValue,
          labelInValue: mergedLabelInValue,
          optionLabelProp: mergedOptionLabelProp
        }) : newValue;

        if (isSelect && onSelect) {
          onSelect(selectValue, outOption);
        } else if (!isSelect && onDeselect) {
          onDeselect(selectValue, outOption);
        }
      } // Trigger internal event


      if (useInternalProps) {
        if (isSelect && internalProps.onRawSelect) {
          internalProps.onRawSelect(newValue, outOption, source);
        } else if (!isSelect && internalProps.onRawDeselect) {
          internalProps.onRawDeselect(newValue, outOption, source);
        }
      }
    }; // We need cache options here in case user update the option list


    var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
        _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
        prevValueOptions = _useState8[0],
        setPrevValueOptions = _useState8[1];

    var triggerChange = function triggerChange(newRawValues) {
      if (useInternalProps && internalProps.skipTriggerChange) {
        return;
      }

      var newRawValuesOptions = getValueOption(newRawValues);
      var outValues = Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_12__["toOuterValues"])(Array.from(newRawValues), {
        labelInValue: mergedLabelInValue,
        options: newRawValuesOptions,
        getLabeledValue: getLabeledValue,
        prevValue: mergedValue,
        optionLabelProp: mergedOptionLabelProp
      });
      var outValue = isMultiple ? outValues : outValues[0]; // Skip trigger if prev & current value is both empty

      if (onChange && (mergedRawValue.length !== 0 || outValues.length !== 0)) {
        var outOptions = findValueOption(newRawValues, newRawValuesOptions, {
          prevValueOptions: prevValueOptions
        }); // We will cache option in case it removed by ajax

        setPrevValueOptions(outOptions.map(function (option, index) {
          var clone = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, option);

          Object.defineProperty(clone, '_INTERNAL_OPTION_VALUE_', {
            get: function get() {
              return newRawValues[index];
            }
          });
          return clone;
        }));
        onChange(outValue, isMultiple ? outOptions : outOptions[0]);
      }

      setMergedValue(outValue);
    };

    var onInternalSelect = function onInternalSelect(newValue, _ref) {
      var selected = _ref.selected,
          source = _ref.source;

      if (disabled) {
        return;
      }

      var newRawValue;

      if (isMultiple) {
        newRawValue = new Set(mergedRawValue);

        if (selected) {
          newRawValue.add(newValue);
        } else {
          newRawValue.delete(newValue);
        }
      } else {
        newRawValue = new Set();
        newRawValue.add(newValue);
      } // Multiple always trigger change and single should change if value changed


      if (isMultiple || !isMultiple && Array.from(mergedRawValue)[0] !== newValue) {
        triggerChange(Array.from(newRawValue));
      } // Trigger `onSelect`. Single mode always trigger select


      triggerSelect(newValue, !isMultiple || selected, source); // Clean search value if single or configured

      if (mode === 'combobox') {
        setInnerSearchValue(String(newValue));
        setActiveValue('');
      } else if (!isMultiple || autoClearSearchValue) {
        setInnerSearchValue('');
        setActiveValue('');
      }
    };

    var onInternalOptionSelect = function onInternalOptionSelect(newValue, info) {
      onInternalSelect(newValue, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, info), {}, {
        source: 'option'
      }));
    };

    var onInternalSelectionSelect = function onInternalSelectionSelect(newValue, info) {
      onInternalSelect(newValue, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, info), {}, {
        source: 'selection'
      }));
    }; // ============================= Input ==============================
    // Only works in `combobox`


    var customizeInputElement = mode === 'combobox' && getInputElement && getInputElement() || null; // ============================== Open ==============================

    var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_8__["default"])(undefined, {
      defaultValue: defaultOpen,
      value: open
    }),
        _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMergedState3, 2),
        innerOpen = _useMergedState4[0],
        setInnerOpen = _useMergedState4[1];

    var mergedOpen = innerOpen; // Not trigger `open` in `combobox` when `notFoundContent` is empty

    var emptyListContent = !notFoundContent && !displayOptions.length;

    if (disabled || emptyListContent && mergedOpen && mode === 'combobox') {
      mergedOpen = false;
    }

    var triggerOpen = emptyListContent ? false : mergedOpen;

    var onToggleOpen = function onToggleOpen(newOpen) {
      var nextOpen = newOpen !== undefined ? newOpen : !mergedOpen;

      if (innerOpen !== nextOpen && !disabled) {
        setInnerOpen(nextOpen);

        if (onDropdownVisibleChange) {
          onDropdownVisibleChange(nextOpen);
        }
      }
    };

    Object(_hooks_useSelectTriggerControl__WEBPACK_IMPORTED_MODULE_18__["default"])([containerRef.current, triggerRef.current && triggerRef.current.getPopupElement()], triggerOpen, onToggleOpen); // ============================= Search =============================

    var triggerSearch = function triggerSearch(searchText, fromTyping, isCompositing) {
      var ret = true;
      var newSearchText = searchText;
      setActiveValue(null); // Check if match the `tokenSeparators`

      var patchLabels = isCompositing ? null : Object(_utils_valueUtil__WEBPACK_IMPORTED_MODULE_17__["getSeparatedContent"])(searchText, tokenSeparators);
      var patchRawValues = patchLabels;

      if (mode === 'combobox') {
        // Only typing will trigger onChange
        if (fromTyping) {
          triggerChange([newSearchText]);
        }
      } else if (patchLabels) {
        newSearchText = '';

        if (mode !== 'tags') {
          patchRawValues = patchLabels.map(function (label) {
            var item = mergedFlattenOptions.find(function (_ref2) {
              var data = _ref2.data;
              return data[mergedOptionLabelProp] === label;
            });
            return item ? item.data.value : null;
          }).filter(function (val) {
            return val !== null;
          });
        }

        var newRawValues = Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mergedRawValue), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(patchRawValues))));
        triggerChange(newRawValues);
        newRawValues.forEach(function (newRawValue) {
          triggerSelect(newRawValue, true, 'input');
        }); // Should close when paste finish

        onToggleOpen(false); // Tell Selector that break next actions

        ret = false;
      }

      setInnerSearchValue(newSearchText);

      if (onSearch && mergedSearchValue !== newSearchText) {
        onSearch(newSearchText);
      }

      return ret;
    }; // Only triggered when menu is closed & mode is tags
    // If menu is open, OptionList will take charge
    // If mode isn't tags, press enter is not meaningful when you can't see any option


    var onSearchSubmit = function onSearchSubmit(searchText) {
      var newRawValues = Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mergedRawValue), [searchText])));
      triggerChange(newRawValues);
      newRawValues.forEach(function (newRawValue) {
        triggerSelect(newRawValue, true, 'input');
      });
      setInnerSearchValue('');
    }; // Close dropdown when disabled change


    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      if (innerOpen && !!disabled) {
        setInnerOpen(false);
      }
    }, [disabled]); // Close will clean up single mode search text

    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      if (!mergedOpen && !isMultiple && mode !== 'combobox') {
        triggerSearch('', false, false);
      }
    }, [mergedOpen]); // ============================ Keyboard ============================

    /**
     * We record input value here to check if can press to clean up by backspace
     * - null: Key is not down, this is reset by key up
     * - true: Search text is empty when first time backspace down
     * - false: Search text is not empty when first time backspace down
     */

    var _useLock = Object(_hooks_useLock__WEBPACK_IMPORTED_MODULE_14__["default"])(),
        _useLock2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useLock, 2),
        getClearLock = _useLock2[0],
        setClearLock = _useLock2[1]; // KeyDown


    var onInternalKeyDown = function onInternalKeyDown(event) {
      var clearLock = getClearLock();
      var which = event.which; // We only manage open state here, close logic should handle by list component

      if (!mergedOpen && which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ENTER) {
        onToggleOpen(true);
      }

      setClearLock(!!mergedSearchValue); // Remove value by `backspace`

      if (which === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].BACKSPACE && !clearLock && isMultiple && !mergedSearchValue && mergedRawValue.length) {
        var removeInfo = Object(_utils_commonUtil__WEBPACK_IMPORTED_MODULE_12__["removeLastEnabledValue"])(displayValues, mergedRawValue);

        if (removeInfo.removedValue !== null) {
          triggerChange(removeInfo.values);
          triggerSelect(removeInfo.removedValue, false, 'input');
        }
      }

      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current;

        (_listRef$current = listRef.current).onKeyDown.apply(_listRef$current, [event].concat(rest));
      }

      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    }; // KeyUp


    var onInternalKeyUp = function onInternalKeyUp(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (mergedOpen && listRef.current) {
        var _listRef$current2;

        (_listRef$current2 = listRef.current).onKeyUp.apply(_listRef$current2, [event].concat(rest));
      }

      if (onKeyUp) {
        onKeyUp.apply(void 0, [event].concat(rest));
      }
    }; // ========================== Focus / Blur ==========================

    /** Record real focus status */


    var focusRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);

    var onContainerFocus = function onContainerFocus() {
      setMockFocused(true);

      if (!disabled) {
        if (onFocus && !focusRef.current) {
          onFocus.apply(void 0, arguments);
        } // `showAction` should handle `focus` if set


        if (showAction.includes('focus')) {
          onToggleOpen(true);
        }
      }

      focusRef.current = true;
    };

    var onContainerBlur = function onContainerBlur() {
      setMockFocused(false, function () {
        focusRef.current = false;
        onToggleOpen(false);
      });

      if (disabled) {
        return;
      }

      if (mergedSearchValue) {
        // `tags` mode should move `searchValue` into values
        if (mode === 'tags') {
          triggerSearch('', false, false);
          triggerChange(Array.from(new Set([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(mergedRawValue), [mergedSearchValue]))));
        } else if (mode === 'multiple') {
          // `multiple` mode only clean the search value but not trigger event
          setInnerSearchValue('');
        }
      }

      if (onBlur) {
        onBlur.apply(void 0, arguments);
      }
    };

    var activeTimeoutIds = [];
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      return function () {
        activeTimeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
        activeTimeoutIds.splice(0, activeTimeoutIds.length);
      };
    }, []);

    var onInternalMouseDown = function onInternalMouseDown(event) {
      var target = event.target;
      var popupElement = triggerRef.current && triggerRef.current.getPopupElement(); // We should give focus back to selector if clicked item is not focusable

      if (popupElement && popupElement.contains(target)) {
        var timeoutId = setTimeout(function () {
          var index = activeTimeoutIds.indexOf(timeoutId);

          if (index !== -1) {
            activeTimeoutIds.splice(index, 1);
          }

          cancelSetMockFocused();

          if (!popupElement.contains(document.activeElement)) {
            selectorRef.current.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }

      if (onMouseDown) {
        for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          restArgs[_key3 - 1] = arguments[_key3];
        }

        onMouseDown.apply(void 0, [event].concat(restArgs));
      }
    }; // ========================= Accessibility ==========================


    var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
        _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
        accessibilityIndex = _useState10[0],
        setAccessibilityIndex = _useState10[1];

    var mergedDefaultActiveFirstOption = defaultActiveFirstOption !== undefined ? defaultActiveFirstOption : mode !== 'combobox';

    var onActiveValue = function onActiveValue(active, index) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$source = _ref3.source,
          source = _ref3$source === void 0 ? 'keyboard' : _ref3$source;

      setAccessibilityIndex(index);

      if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
        setActiveValue(String(active));
      }
    }; // ============================= Popup ==============================


    var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
        _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
        containerWidth = _useState12[0],
        setContainerWidth = _useState12[1];

    var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({}),
        _useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
        forceUpdate = _useState14[1]; // We need force update here since popup dom is render async


    function onPopupMouseEnter() {
      forceUpdate({});
    }

    Object(_hooks_useLayoutEffect__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
      if (triggerOpen) {
        var newWidth = Math.ceil(containerRef.current.offsetWidth);

        if (containerWidth !== newWidth) {
          setContainerWidth(newWidth);
        }
      }
    }, [triggerOpen]);
    var popupNode = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](OptionList, {
      ref: listRef,
      prefixCls: prefixCls,
      id: mergedId,
      open: mergedOpen,
      childrenAsData: !options,
      options: displayOptions,
      flattenOptions: displayFlattenOptions,
      multiple: isMultiple,
      values: rawValues,
      height: listHeight,
      itemHeight: listItemHeight,
      onSelect: onInternalOptionSelect,
      onToggleOpen: onToggleOpen,
      onActiveValue: onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      notFoundContent: notFoundContent,
      onScroll: onPopupScroll,
      searchValue: mergedSearchValue,
      menuItemSelectedIcon: menuItemSelectedIcon,
      virtual: virtual !== false && dropdownMatchSelectWidth !== false,
      onMouseEnter: onPopupMouseEnter
    }); // ============================= Clear ==============================

    var clearNode;

    var onClearMouseDown = function onClearMouseDown() {
      // Trigger internal `onClear` event
      if (useInternalProps && internalProps.onClear) {
        internalProps.onClear();
      }

      if (onClear) {
        onClear();
      }

      triggerChange([]);
      triggerSearch('', false, false);
    };

    if (!disabled && allowClear && (mergedRawValue.length || mergedSearchValue)) {
      clearNode = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "".concat(prefixCls, "-clear"),
        onMouseDown: onClearMouseDown,
        customizeIcon: clearIcon
      }, "\xD7");
    } // ============================= Arrow ==============================


    var mergedShowArrow = showArrow !== undefined ? showArrow : loading || !isMultiple && mode !== 'combobox';
    var arrowNode;

    if (mergedShowArrow) {
      arrowNode = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TransBtn__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("".concat(prefixCls, "-arrow"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-arrow-loading"), loading)),
        customizeIcon: inputIcon,
        customizeIconProps: {
          loading: loading,
          searchValue: mergedSearchValue,
          open: mergedOpen,
          focused: mockFocused,
          showSearch: mergedShowSearch
        }
      });
    } // ============================ Warning =============================


    if ( true && warningProps) {
      warningProps(props);
    } // ============================= Render =============================


    var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, className, (_classNames2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-focused"), mockFocused), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-multiple"), isMultiple), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-single"), !isMultiple), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-allow-clear"), allowClear), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-show-arrow"), mergedShowArrow), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-loading"), loading), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-open"), mergedOpen), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-customize-input"), customizeInputElement), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, "".concat(prefixCls, "-show-search"), mergedShowSearch), _classNames2));
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object.assign({
      className: mergedClassName
    }, domProps, {
      ref: containerRef,
      onMouseDown: onInternalMouseDown,
      onKeyDown: onInternalKeyDown,
      onKeyUp: onInternalKeyUp,
      onFocus: onContainerFocus,
      onBlur: onContainerBlur
    }), mockFocused && !mergedOpen && react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
      style: {
        width: 0,
        height: 0,
        display: 'flex',
        overflow: 'hidden',
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(mergedRawValue.join(', '))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_SelectTrigger__WEBPACK_IMPORTED_MODULE_10__["default"], {
      ref: triggerRef,
      disabled: disabled,
      prefixCls: prefixCls,
      visible: triggerOpen,
      popupElement: popupNode,
      containerWidth: containerWidth,
      animation: animation,
      transitionName: transitionName,
      dropdownStyle: dropdownStyle,
      dropdownClassName: dropdownClassName,
      direction: direction,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth,
      dropdownRender: dropdownRender,
      dropdownAlign: dropdownAlign,
      getPopupContainer: getPopupContainer,
      empty: !mergedOptions.length,
      getTriggerDOMNode: function getTriggerDOMNode() {
        return selectorDomRef.current;
      }
    }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Selector__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, props, {
      domRef: selectorDomRef,
      prefixCls: prefixCls,
      inputElement: customizeInputElement,
      ref: selectorRef,
      id: mergedId,
      showSearch: mergedShowSearch,
      mode: mode,
      accessibilityIndex: accessibilityIndex,
      multiple: isMultiple,
      tagRender: tagRender,
      values: displayValues,
      open: mergedOpen,
      onToggleOpen: onToggleOpen,
      searchValue: mergedSearchValue,
      activeValue: activeValue,
      onSearch: triggerSearch,
      onSearchSubmit: onSearchSubmit,
      onSelect: onInternalSelectionSelect,
      tokenWithEnter: tokenWithEnter
    }))), arrowNode, clearNode);
  }

  var RefSelect = react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](Select);
  return RefSelect;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useCacheDisplayValue.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useCacheDisplayValue.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCacheDisplayValue; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCacheDisplayValue(values) {
  var prevValuesRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](values);
  var mergedValues = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    // Create value - label map
    var valueLabels = new Map();
    prevValuesRef.current.forEach(function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (value !== label) {
        valueLabels.set(value, label);
      }
    });
    var resultValues = values.map(function (item) {
      var cacheLabel = valueLabels.get(item.value);

      if (item.value === item.label && cacheLabel) {
        return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
          label: cacheLabel
        });
      }

      return item;
    });
    prevValuesRef.current = resultValues;
    return resultValues;
  }, [values]);
  return mergedValues;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useCacheOptions.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useCacheOptions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCacheOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useCacheOptions(values, options) {
  var prevOptionMapRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var optionMap = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var map = new Map();
    options.forEach(function (item) {
      var value = item.data.value;
      map.set(value, item);
    });
    return map;
  }, [values, options]);
  prevOptionMapRef.current = optionMap;

  var getValueOption = function getValueOption(vals) {
    return vals.map(function (value) {
      return prevOptionMapRef.current.get(value);
    }).filter(Boolean);
  };

  return getValueOption;
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useDelayReset.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useDelayReset.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDelayReset; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Similar with `useLock`, but this hook will always execute last value.
 * When set to `true`, it will keep `true` for a short time even if `false` is set.
 */

function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      bool = _React$useState2[0],
      setBool = _React$useState2[1];

  var delayRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  var cancelLatest = function cancelLatest() {
    window.clearTimeout(delayRef.current);
  };

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return cancelLatest;
  }, []);

  var delaySetBool = function delaySetBool(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function () {
      setBool(value);

      if (callback) {
        callback();
      }
    }, timeout);
  };

  return [bool, delaySetBool, cancelLatest];
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useLayoutEffect.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useLayoutEffect.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayoutEffect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");
/* eslint-disable react-hooks/rules-of-hooks */


/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */

function useLayoutEffect(effect, deps) {
  // Never happen in test env
  if (_utils_commonUtil__WEBPACK_IMPORTED_MODULE_1__["isBrowserClient"]) {
    /* istanbul ignore next */
    react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](effect, deps);
  } else {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](effect, deps);
  }
}
/* eslint-enable */

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useLock.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useLock.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Locker return cached mark.
 * If set to `true`, will return `true` in a short time even if set `false`.
 * If set to `false` and then set to `true`, will change to `true`.
 * And after time duration, it will back to `null` automatically.
 */

function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
  var lockRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var timeoutRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null); // Clean up

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    return function () {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function () {
      lockRef.current = null;
    }, duration);
  }

  return [function () {
    return lockRef.current;
  }, doLock];
}

/***/ }),

/***/ "./node_modules/rc-select/es/hooks/useSelectTriggerControl.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-select/es/hooks/useSelectTriggerControl.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSelectTriggerControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useSelectTriggerControl(elements, open, triggerOpen) {
  var propsRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  propsRef.current = {
    elements: elements.filter(function (e) {
      return e;
    }),
    open: open,
    triggerOpen: triggerOpen
  };
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    function onGlobalMouseDown(event) {
      var target = event.target;

      if (propsRef.current.open && propsRef.current.elements.every(function (element) {
        return !element.contains(target) && element !== target;
      })) {
        // Should trigger close
        propsRef.current.triggerOpen(false);
      }
    }

    window.addEventListener('mousedown', onGlobalMouseDown);
    return function () {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/rc-select/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-select/es/index.js ***!
  \********************************************/
/*! exports provided: Option, OptGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/rc-select/es/Select.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "./node_modules/rc-select/es/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptGroup */ "./node_modules/rc-select/es/OptGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _OptGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Select__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-select/es/interface/generator.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-select/es/interface/generator.js ***!
  \**********************************************************/
/*! exports provided: INTERNAL_PROPS_MARK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERNAL_PROPS_MARK", function() { return INTERNAL_PROPS_MARK; });
var INTERNAL_PROPS_MARK = 'RC_SELECT_INTERNAL_PROPS_MARK';

/***/ }),

/***/ "./node_modules/rc-select/es/utils/commonUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/commonUtil.js ***!
  \*******************************************************/
/*! exports provided: toArray, toInnerValue, toOuterValues, removeLastEnabledValue, isClient, isBrowserClient, getUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInnerValue", function() { return toInnerValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toOuterValues", function() { return toOuterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLastEnabledValue", function() { return removeLastEnabledValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserClient", function() { return isBrowserClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUUID", function() { return getUUID; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  return value !== undefined ? [value] : [];
}
/**
 * Convert outer props value into internal value
 */

function toInnerValue(value, _ref) {
  var labelInValue = _ref.labelInValue,
      combobox = _ref.combobox;

  if (value === undefined || value === '' && combobox) {
    return [];
  }

  var values = Array.isArray(value) ? value : [value];

  if (labelInValue) {
    return values.map(function (_ref2) {
      var key = _ref2.key,
          val = _ref2.value;
      return val !== undefined ? val : key;
    });
  }

  return values;
}
/**
 * Convert internal value into out event value
 */

function toOuterValues(valueList, _ref3) {
  var optionLabelProp = _ref3.optionLabelProp,
      labelInValue = _ref3.labelInValue,
      prevValue = _ref3.prevValue,
      options = _ref3.options,
      getLabeledValue = _ref3.getLabeledValue;
  var values = valueList;

  if (labelInValue) {
    values = values.map(function (val) {
      return getLabeledValue(val, {
        options: options,
        prevValue: prevValue,
        labelInValue: labelInValue,
        optionLabelProp: optionLabelProp
      });
    });
  }

  return values;
}
function removeLastEnabledValue(measureValues, values) {
  var newValues = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(values);

  var removeIndex;

  for (removeIndex = measureValues.length - 1; removeIndex >= 0; removeIndex -= 1) {
    if (!measureValues[removeIndex].disabled) {
      break;
    }
  }

  var removedValue = null;

  if (removeIndex !== -1) {
    removedValue = newValues[removeIndex];
    newValues.splice(removeIndex, 1);
  }

  return {
    values: newValues,
    removedValue: removedValue
  };
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
/** Is client side and not jsdom */

var isBrowserClient =  true && isClient;
var uuid = 0;
/** Get unique id for accessibility usage */

function getUUID() {
  var retId; // Test never reach

  /* istanbul ignore if */

  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }

  return retId;
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/legacyUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/legacyUtil.js ***!
  \*******************************************************/
/*! exports provided: convertChildrenToData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertChildrenToData", function() { return convertChildrenToData; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");





function convertNodeToOption(node) {
  var key = node.key,
      _node$props = node.props,
      children = _node$props.children,
      value = _node$props.value,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_node$props, ["children", "value"]);

  return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: key,
    value: value !== undefined ? value : key,
    children: children
  }, restProps);
}

function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(nodes).map(function (node, index) {
    if (!react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](node) || !node.type) {
      return null;
    }

    var isSelectOptGroup = node.type.isSelectOptGroup,
        key = node.key,
        _node$props2 = node.props,
        children = _node$props2.children,
        restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_node$props2, ["children"]);

    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }

    return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
      label: key
    }, restProps), {}, {
      options: convertChildrenToData(children)
    });
  }).filter(function (data) {
    return data;
  });
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/valueUtil.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-select/es/utils/valueUtil.js ***!
  \******************************************************/
/*! exports provided: flattenOptions, findValueOption, getLabeledValue, filterOptions, getSeparatedContent, isValueDisabled, fillOptionsWithMissingValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenOptions", function() { return flattenOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findValueOption", function() { return findValueOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabeledValue", function() { return getLabeledValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterOptions", function() { return filterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeparatedContent", function() { return getSeparatedContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueDisabled", function() { return isValueDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillOptionsWithMissingValue", function() { return fillOptionsWithMissingValue; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var _commonUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");








function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */


function flattenOptions(options) {
  var flattenList = [];

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      if (isGroupOption || !('options' in data)) {
        // Option
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data
        });
      } else {
        // Option Group
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data
        });
        dig(data.options, true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */

function injectPropsWithOption(option) {
  var newOption = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}

function findValueOption(values, options) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$prevValueOptions = _ref.prevValueOptions,
      prevValueOptions = _ref$prevValueOptions === void 0 ? [] : _ref$prevValueOptions;

  var optionMap = new Map();
  options.forEach(function (flattenItem) {
    if (!flattenItem.group) {
      var data = flattenItem.data; // Check if match

      optionMap.set(data.value, data);
    }
  });
  return values.map(function (val) {
    var option = optionMap.get(val); // Fallback to try to find prev options

    if (!option) {
      option = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, prevValueOptions.find(function (opt) {
        return opt._INTERNAL_OPTION_VALUE_ === val;
      }));
    }

    return injectPropsWithOption(option);
  });
}
var getLabeledValue = function getLabeledValue(value, _ref2) {
  var options = _ref2.options,
      prevValue = _ref2.prevValue,
      labelInValue = _ref2.labelInValue,
      optionLabelProp = _ref2.optionLabelProp;
  var item = findValueOption([value], options)[0];
  var result = {
    value: value
  };
  var prevValItem;
  var prevValues = Object(_commonUtil__WEBPACK_IMPORTED_MODULE_6__["toArray"])(prevValue);

  if (labelInValue) {
    prevValItem = prevValues.find(function (prevItem) {
      if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(prevItem) === 'object' && 'value' in prevItem) {
        return prevItem.value === value;
      } // [Legacy] Support `key` as `value`


      return prevItem.key === value;
    });
  }

  if (prevValItem && Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(prevValItem) === 'object' && 'label' in prevValItem) {
    result.label = prevValItem.label;

    if (item && typeof prevValItem.label === 'string' && typeof item[optionLabelProp] === 'string' && prevValItem.label.trim() !== item[optionLabelProp].trim()) {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(false, '`label` of `value` is not same as `label` in Select options.');
    }
  } else if (item && optionLabelProp in item) {
    result.label = item[optionLabelProp];
  } else {
    result.label = value;
  } // Used for motion control


  result.key = result.value;
  return result;
};

function toRawString(content) {
  return Object(_commonUtil__WEBPACK_IMPORTED_MODULE_6__["toArray"])(content).join('');
}
/** Filter single option if match the search text */


function getFilterFunction(optionFilterProp) {
  return function (searchValue, option) {
    var lowerSearchText = searchValue.toLowerCase(); // Group label search

    if ('options' in option) {
      return toRawString(option.label).toLowerCase().includes(lowerSearchText);
    } // Option value search


    var rawValue = option[optionFilterProp];
    var value = toRawString(rawValue).toLowerCase();
    return value.includes(lowerSearchText);
  };
}
/** Filter options and return a new options by the search text */


function filterOptions(searchValue, options, _ref3) {
  var optionFilterProp = _ref3.optionFilterProp,
      filterOption = _ref3.filterOption;
  var filteredOptions = [];
  var filterFunc;

  if (filterOption === false) {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options);
  }

  if (typeof filterOption === 'function') {
    filterFunc = filterOption;
  } else {
    filterFunc = getFilterFunction(optionFilterProp);
  }

  options.forEach(function (item) {
    // Group should check child options
    if ('options' in item) {
      // Check group first
      var matchGroup = filterFunc(searchValue, item);

      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        // Check option
        var subOptions = item.options.filter(function (subItem) {
          return filterFunc(searchValue, subItem);
        });

        if (subOptions.length) {
          filteredOptions.push(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, item), {}, {
            options: subOptions
          }));
        }
      }

      return;
    }

    if (filterFunc(searchValue, injectPropsWithOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref4) {
    var _ref5 = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4),
        token = _ref5[0],
        restTokens = _ref5.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevList), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}
function isValueDisabled(value, options) {
  var option = findValueOption([value], options)[0];
  return option.disabled;
}
/**
 * `tags` mode should fill un-list item into the option list
 */

function fillOptionsWithMissingValue(options, value, optionLabelProp, labelInValue) {
  var values = Object(_commonUtil__WEBPACK_IMPORTED_MODULE_6__["toArray"])(value).slice().sort();

  var cloneOptions = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options); // Convert options value to set


  var optionValues = new Set();
  options.forEach(function (opt) {
    if (opt.options) {
      opt.options.forEach(function (subOpt) {
        optionValues.add(subOpt.value);
      });
    } else {
      optionValues.add(opt.value);
    }
  }); // Fill missing value

  values.forEach(function (item) {
    var val = labelInValue ? item.value : item;

    if (!optionValues.has(val)) {
      var _ref6;

      cloneOptions.push(labelInValue ? (_ref6 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, optionLabelProp, item.label), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, "value", val), _ref6) : {
        value: val
      });
    }
  });
  return cloneOptions;
}

/***/ }),

/***/ "./node_modules/rc-select/es/utils/warningPropsUtil.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-select/es/utils/warningPropsUtil.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/warning */ "./node_modules/rc-util/es/warning.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var _legacyUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./legacyUtil */ "./node_modules/rc-select/es/utils/legacyUtil.js");
/* harmony import */ var _commonUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commonUtil */ "./node_modules/rc-select/es/utils/commonUtil.js");







function warningProps(props) {
  var mode = props.mode,
      options = props.options,
      children = props.children,
      backfill = props.backfill,
      allowClear = props.allowClear,
      placeholder = props.placeholder,
      getInputElement = props.getInputElement,
      showSearch = props.showSearch,
      onSearch = props.onSearch,
      defaultOpen = props.defaultOpen,
      autoFocus = props.autoFocus,
      labelInValue = props.labelInValue,
      value = props.value,
      inputValue = props.inputValue,
      optionLabelProp = props.optionLabelProp;
  var multiple = mode === 'multiple' || mode === 'tags';
  var mergedShowSearch = showSearch !== undefined ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || Object(_legacyUtil__WEBPACK_IMPORTED_MODULE_4__["convertChildrenToData"])(children); // `tags` should not set option as disabled

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode !== 'tags' || mergedOptions.every(function (opt) {
    return !opt.disabled;
  }), 'Please avoid setting option to disabled in tags mode since user can always type text as tag.'); // `combobox` & `tags` should option be `string` type

  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function (item) {
      if (item.options) {
        return item.options.some(function (opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }

      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  } // `combobox` should not use `optionLabelProp`


  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode !== 'combobox' || !optionLabelProp, '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'); // Only `combobox` support `backfill`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.'); // Only `combobox` support `getInputElement`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.'); // Customize `getInputElement` should not use `allowClear` & `placeholder`

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["noteOnce"])(mode !== 'combobox' || !getInputElement || !allowClear || !placeholder, 'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'); // `onSearch` should use in `combobox` or `showSearch`

  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }

  Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["noteOnce"])(!defaultOpen || autoFocus, '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.');

  if (value !== undefined && value !== null) {
    var values = Object(_commonUtil__WEBPACK_IMPORTED_MODULE_5__["toArray"])(value);
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!labelInValue || values.every(function (val) {
      return Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) === 'object' && ('key' in val || 'value' in val);
    }), '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`');
    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  } // Syntactic sugar should use correct children type


  if (children) {
    var invalidateChildType = null;
    Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(children).some(function (node) {
      if (!react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](node) || !node.type) {
        return false;
      }

      var type = node.type;

      if (type.isSelectOption) {
        return false;
      }

      if (type.isSelectOptGroup) {
        var allChildrenValid = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_3__["default"])(node.props.children).every(function (subNode) {
          if (!react__WEBPACK_IMPORTED_MODULE_1__["isValidElement"](subNode) || !node.type || subNode.type.isSelectOption) {
            return true;
          }

          invalidateChildType = subNode.type;
          return false;
        });

        if (allChildrenValid) {
          return false;
        }

        return true;
      }

      invalidateChildType = type;
      return true;
    });

    if (invalidateChildType) {
      Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(invalidateChildType.displayName || invalidateChildType.name || invalidateChildType, "`."));
    }

    Object(rc_util_es_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue === undefined, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warningProps);

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMemo.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/hooks/useMemo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMemo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/Filler.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/Filler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Fill component to provided the scroll content real height.
 */

var Filler = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (_ref, ref) {
  var height = _ref.height,
      offset = _ref.offset,
      children = _ref.children,
      prefixCls = _ref.prefixCls,
      onInnerResize = _ref.onInnerResize;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  if (offset !== undefined) {
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread(_objectSpread({}, innerStyle), {}, {
      transform: "translateY(".concat(offset, "px)"),
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: outerStyle
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;

      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: innerStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_defineProperty({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, children)));
});
Filler.displayName = 'Filler';
/* harmony default export */ __webpack_exports__["default"] = (Filler);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/Item.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/Item.js ***!
  \*************************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Item(_ref) {
  var children = _ref.children,
      setRef = _ref.setRef;
  var refFunc = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (node) {
    setRef(node);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
    ref: refFunc
  });
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/List.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/List.js ***!
  \*************************************************/
/*! exports provided: RawList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawList", function() { return RawList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Filler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filler */ "./node_modules/rc-virtual-list/es/Filler.js");
/* harmony import */ var _ScrollBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScrollBar */ "./node_modules/rc-virtual-list/es/ScrollBar.js");
/* harmony import */ var _hooks_useChildren__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useChildren */ "./node_modules/rc-virtual-list/es/hooks/useChildren.js");
/* harmony import */ var _hooks_useHeights__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useHeights */ "./node_modules/rc-virtual-list/es/hooks/useHeights.js");
/* harmony import */ var _hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useScrollTo */ "./node_modules/rc-virtual-list/es/hooks/useScrollTo.js");
/* harmony import */ var _hooks_useDiffItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/useDiffItem */ "./node_modules/rc-virtual-list/es/hooks/useDiffItem.js");
/* harmony import */ var _hooks_useFrameWheel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks/useFrameWheel */ "./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js");
/* harmony import */ var _hooks_useMobileTouchMove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useMobileTouchMove */ "./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js");
/* harmony import */ var _hooks_useOriginScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useOriginScroll */ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
      className = props.className,
      height = props.height,
      itemHeight = props.itemHeight,
      _props$fullHeight = props.fullHeight,
      fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
      style = props.style,
      data = props.data,
      children = props.children,
      itemKey = props.itemKey,
      virtual = props.virtual,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      onScroll = props.onScroll,
      restProps = _objectWithoutProperties(props, ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll"]); // ================================= MISC =================================


  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      scrollMoving = _useState4[0],
      setScrollMoving = _useState4[1];

  var mergedClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var fillerInnerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var scrollBarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Hack on scrollbar to enable flash call
  // =============================== Item Key ===============================

  var getKey = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return item[itemKey];
  }, [itemKey]);
  var sharedConfig = {
    getKey: getKey
  }; // ================================ Scroll ================================

  function syncScrollTop(newTop) {
    setScrollTop(function (origin) {
      var value;

      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }

      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  } // ================================ Legacy ================================
  // Put ref here since the range is generate by follow


  var rangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useDiffItem = Object(_hooks_useDiffItem__WEBPACK_IMPORTED_MODULE_7__["default"])(mergedData, getKey),
      _useDiffItem2 = _slicedToArray(_useDiffItem, 1),
      diffItem = _useDiffItem2[0];

  diffItemRef.current = diffItem; // ================================ Height ================================

  var _useHeights = Object(_hooks_useHeights__WEBPACK_IMPORTED_MODULE_5__["default"])(getKey, null, null),
      _useHeights2 = _slicedToArray(_useHeights, 4),
      setInstanceRef = _useHeights2[0],
      collectHeight = _useHeights2[1],
      heights = _useHeights2[2],
      heightUpdatedMark = _useHeights2[3]; // ========================== Visible Calculation =========================


  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    if (!useVirtual) {
      return {
        scrollHeight: undefined,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    } // Always use virtual scroll bar in avoid shaking


    if (!inVirtual) {
      var _fillerInnerRef$curre;

      return {
        scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
        start: 0,
        end: mergedData.length - 1,
        offset: undefined
      };
    }

    var itemTop = 0;
    var startIndex;
    var startOffset;
    var endIndex;
    var dataLen = mergedData.length;

    for (var i = 0; i < dataLen; i += 1) {
      var item = mergedData[i];
      var key = getKey(item);
      var cacheHeight = heights.get(key);
      var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight); // Check item top in the range

      if (currentItemBottom >= scrollTop && startIndex === undefined) {
        startIndex = i;
        startOffset = itemTop;
      } // Check item bottom in the range. We will render additional one item for motion usage


      if (currentItemBottom > scrollTop + height && endIndex === undefined) {
        endIndex = i;
      }

      itemTop = currentItemBottom;
    } // Fallback to normal if not match. This code should never reach

    /* istanbul ignore next */


    if (startIndex === undefined) {
      startIndex = 0;
      startOffset = 0;
    }

    if (endIndex === undefined) {
      endIndex = mergedData.length - 1;
    } // Give cache to improve scroll experience


    endIndex = Math.min(endIndex + 1, mergedData.length);
    return {
      scrollHeight: itemTop,
      start: startIndex,
      end: endIndex,
      offset: startOffset
    };
  }, [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]),
      scrollHeight = _React$useMemo.scrollHeight,
      start = _React$useMemo.start,
      end = _React$useMemo.end,
      offset = _React$useMemo.offset;

  rangeRef.current.start = start;
  rangeRef.current.end = end; // =============================== In Range ===============================

  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;

  function keepInRange(newScrollTop) {
    var newTop = Math.max(newScrollTop, 0);

    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }

    return newTop;
  }

  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = Object(_hooks_useOriginScroll__WEBPACK_IMPORTED_MODULE_10__["default"])(isScrollAtTop, isScrollAtBottom); // ================================ Scroll ================================

  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  } // This code may only trigger in test case.
  // But we still need a sync if some special escape


  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;

    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    } // Trigger origin onScroll


    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  } // Since this added in global,should use ref to keep update


  var _useFrameWheel = Object(_hooks_useFrameWheel__WEBPACK_IMPORTED_MODULE_8__["default"])(useVirtual, isScrollAtTop, isScrollAtBottom, function (offsetY) {
    syncScrollTop(function (top) {
      var newTop = top + offsetY;
      return newTop;
    });
  }),
      _useFrameWheel2 = _slicedToArray(_useFrameWheel, 2),
      onRawWheel = _useFrameWheel2[0],
      onFireFoxScroll = _useFrameWheel2[1]; // Mobile touch move


  Object(_hooks_useMobileTouchMove__WEBPACK_IMPORTED_MODULE_9__["default"])(useVirtual, componentRef, function (deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }

    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY: deltaY
    });
    return true;
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      if (useVirtual) {
        e.preventDefault();
      }
    }

    componentRef.current.addEventListener('wheel', onRawWheel);
    componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
    componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    return function () {
      componentRef.current.removeEventListener('wheel', onRawWheel);
      componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual]); // ================================= Ref ==================================

  var scrollTo = Object(_hooks_useScrollTo__WEBPACK_IMPORTED_MODULE_6__["default"])(componentRef, mergedData, heights, itemHeight, getKey, collectHeight, syncScrollTop, function () {
    var _scrollBarRef$current;

    (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0 ? void 0 : _scrollBarRef$current.delayHidden();
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"](ref, function () {
    return {
      scrollTo: scrollTo
    };
  }); // ================================ Render ================================

  var listChildren = Object(_hooks_useChildren__WEBPACK_IMPORTED_MODULE_4__["default"])(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;

  if (height) {
    componentStyle = _objectSpread(_defineProperty({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);

    if (useVirtual) {
      componentStyle.overflowY = 'hidden';

      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({
    style: _objectSpread(_objectSpread({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, restProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Filler__WEBPACK_IMPORTED_MODULE_2__["default"], {
    prefixCls: prefixCls,
    height: scrollHeight,
    offset: offset,
    onInnerResize: collectHeight,
    ref: fillerInnerRef
  }, listChildren)), useVirtual && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ScrollBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: scrollBarRef,
    prefixCls: prefixCls,
    scrollTop: scrollTop,
    height: height,
    scrollHeight: scrollHeight,
    count: mergedData.length,
    onScroll: onScrollBar,
    onStartMove: function onStartMove() {
      setScrollMoving(true);
    },
    onStopMove: function onStopMove() {
      setScrollMoving(false);
    }
  }));
}
var List = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](RawList);
List.displayName = 'List';
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/ScrollBar.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/ScrollBar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




var MIN_SIZE = 20;

function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}

var ScrollBar = /*#__PURE__*/function (_React$Component) {
  _inherits(ScrollBar, _React$Component);

  var _super = _createSuper(ScrollBar);

  function ScrollBar() {
    var _this;

    _classCallCheck(this, ScrollBar);

    _this = _super.apply(this, arguments);
    _this.moveRaf = null;
    _this.scrollbarRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.thumbRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };

    _this.delayHidden = function () {
      clearTimeout(_this.visibleTimeout);

      _this.setState({
        visible: true
      });

      _this.visibleTimeout = setTimeout(function () {
        _this.setState({
          visible: false
        });
      }, 2000);
    };

    _this.onScrollbarTouchStart = function (e) {
      e.preventDefault();
    };

    _this.onContainerMouseDown = function (e) {
      e.stopPropagation();
      e.preventDefault();
    }; // ======================= Clean =======================


    _this.patchEvents = function () {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);

      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };

    _this.removeEvents = function () {
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);

      _this.scrollbarRef.current.removeEventListener('touchstart', _this.onScrollbarTouchStart);

      _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);

      _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);

      _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);

      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(_this.moveRaf);
    }; // ======================= Thumb =======================


    _this.onMouseDown = function (e) {
      var onStartMove = _this.props.onStartMove;

      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });

      onStartMove();

      _this.patchEvents();

      e.stopPropagation();
      e.preventDefault();
    };

    _this.onMouseMove = function (e) {
      var _this$state = _this.state,
          dragging = _this$state.dragging,
          pageY = _this$state.pageY,
          startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"].cancel(_this.moveRaf);

      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;

        var enableScrollRange = _this.getEnableScrollRange();

        var enableHeightRange = _this.getEnableHeightRange();

        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
          onScroll(newScrollTop);
        });
      }
    };

    _this.onMouseUp = function () {
      var onStopMove = _this.props.onStopMove;

      _this.setState({
        dragging: false
      });

      onStopMove();

      _this.removeEvents();
    }; // ===================== Calculate =====================


    _this.getSpinHeight = function () {
      var _this$props = _this.props,
          height = _this$props.height,
          count = _this$props.count;
      var baseHeight = height / count * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };

    _this.getEnableScrollRange = function () {
      var _this$props2 = _this.props,
          scrollHeight = _this$props2.scrollHeight,
          height = _this$props2.height;
      return scrollHeight - height || 0;
    };

    _this.getEnableHeightRange = function () {
      var height = _this.props.height;

      var spinHeight = _this.getSpinHeight();

      return height - spinHeight || 0;
    };

    _this.getTop = function () {
      var scrollTop = _this.props.scrollTop;

      var enableScrollRange = _this.getEnableScrollRange();

      var enableHeightRange = _this.getEnableHeightRange();

      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }

      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    }; // Not show scrollbar when height is large thane scrollHeight


    _this.getVisible = function () {
      var visible = _this.state.visible;
      var _this$props3 = _this.props,
          height = _this$props3.height,
          scrollHeight = _this$props3.scrollHeight;

      if (height >= scrollHeight) {
        return false;
      }

      return visible;
    };

    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
      this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scrollTop !== this.props.scrollTop) {
        this.delayHidden();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
      clearTimeout(this.visibleTimeout);
    } // ====================== Render =======================

  }, {
    key: "render",
    value: function render() {
      var dragging = this.state.dragging;
      var prefixCls = this.props.prefixCls;
      var spinHeight = this.getSpinHeight();
      var top = this.getTop();
      var visible = this.getVisible();
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.scrollbarRef,
        className: "".concat(prefixCls, "-scrollbar"),
        style: {
          width: 8,
          top: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: visible ? null : 'none'
        },
        onMouseDown: this.onContainerMouseDown,
        onMouseMove: this.delayHidden
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: this.thumbRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("".concat(prefixCls, "-scrollbar-thumb"), _defineProperty({}, "".concat(prefixCls, "-scrollbar-thumb-moving"), dragging)),
        style: {
          width: '100%',
          height: spinHeight,
          top: top,
          left: 0,
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 99,
          cursor: 'pointer',
          userSelect: 'none'
        },
        onMouseDown: this.onMouseDown
      }));
    }
  }]);

  return ScrollBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useChildren.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useChildren.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item */ "./node_modules/rc-virtual-list/es/Item.js");


function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {// style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    var key = getKey(item);
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Item__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useDiffItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDiffItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_algorithmUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/algorithmUtil */ "./node_modules/rc-virtual-list/es/utils/algorithmUtil.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](data),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      prevData = _React$useState2[0],
      setPrevData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      diffItem = _React$useState4[0],
      setDiffItem = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var diff = Object(_utils_algorithmUtil__WEBPACK_IMPORTED_MODULE_1__["findListDiffIndex"])(prevData || [], data || [], getKey);

    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }

    setPrevData(data);
  }, [data]);
  return [diffItem];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFrameWheel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var _utils_isFirefox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isFirefox */ "./node_modules/rc-virtual-list/es/utils/isFirefox.js");
/* harmony import */ var _useOriginScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOriginScroll */ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js");




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var nextFrameRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // Firefox patch

  var wheelValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var isMouseScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false); // Scroll status sync

  var originScroll = Object(_useOriginScroll__WEBPACK_IMPORTED_MODULE_3__["default"])(isScrollAtTop, isScrollAtBottom);

  function onWheel(event) {
    if (!inVirtual) return;
    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY; // Do nothing when scroll at the edge, Skip check when is in scroll

    if (originScroll(deltaY)) return; // Proxy of scroll events

    if (!_utils_isFirefox__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      event.preventDefault();
    }

    nextFrameRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  } // A patch for firefox


  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }

  return [onWheel, onFireFoxScroll];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useHeights.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useHeights.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHeights; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ "./node_modules/rc-util/es/Dom/findDOMNode.js");
/* harmony import */ var _utils_CacheMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CacheMap */ "./node_modules/rc-virtual-list/es/utils/CacheMap.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      updatedMark = _React$useState2[0],
      setUpdatedMark = _React$useState2[1];

  var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());
  var heightsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new _utils_CacheMap__WEBPACK_IMPORTED_MODULE_2__["default"]());
  var heightUpdateIdRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);

  function collectHeight() {
    heightUpdateIdRef.current += 1;
    var currentId = heightUpdateIdRef.current;
    Promise.resolve().then(function () {
      // Only collect when it's latest call
      if (currentId !== heightUpdateIdRef.current) return;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var htmlElement = Object(rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
          var offsetHeight = htmlElement.offsetHeight;

          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      }); // Always trigger update mark to tell parent that should re-calculate heights when resized

      setUpdatedMark(function (c) {
        return c + 1;
      });
    });
  }

  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);

    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    } // Instance changed


    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }

  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMobileTouchMove; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var touchYRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // Smooth scroll

  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var cleanUpEvents;

  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;

      if (callback(offsetY)) {
        e.preventDefault();
      } // Smooth interval


      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function () {
        offsetY *= SMOOTH_PTG;

        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };

  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };

  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();

    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };

  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"](function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart);
    }

    return function () {
      listRef.current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (isScrollAtTop, isScrollAtBottom) {
  // Do lock for a wheel when scrolling
  var lockRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
  var lockTimeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  } // Pass to ref since global add is in closure


  var scrollPingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function (deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var originScroll = // Pass origin wheel when on the top
    deltaY < 0 && scrollPingRef.current.top || // Pass origin wheel when on the bottom
    deltaY > 0 && scrollPingRef.current.bottom;

    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }

    return !lockRef.current && originScroll;
  };
});

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/hooks/useScrollTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useScrollTo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/raf */ "./node_modules/rc-util/es/raf.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-param-reassign */


function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    } // Normal scroll logic


    rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"].cancel(scrollRef.current);

    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === 'object') {
      var index;
      var align = arg.align;

      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }

      var _arg$offset = arg.offset,
          offset = _arg$offset === void 0 ? 0 : _arg$offset; // We will retry 3 times in case dynamic height shaking

      var syncScroll = function syncScroll(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign; // Go to next frame if height not exist

        if (height) {
          var mergedAlign = targetAlign || align; // Get top & bottom

          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;

          for (var i = 0; i <= index; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
            stackTop = itemBottom;

            if (i === index && cacheHeight === undefined) {
              needCollectHeight = true;
            }
          } // Scroll to


          var targetTop = null;

          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;

            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;

            default:
              {
                var scrollTop = containerRef.current.scrollTop;
                var scrollBottom = scrollTop + height;

                if (itemTop < scrollTop) {
                  newTargetAlign = 'top';
                } else if (itemBottom > scrollBottom) {
                  newTargetAlign = 'bottom';
                }
              }
          }

          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        } // We will retry since element may not sync height as it described


        scrollRef.current = Object(rc_util_es_raf__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
          if (needCollectHeight) {
            collectHeight();
          }

          syncScroll(times - 1, newTargetAlign);
        });
      };

      syncScroll(3);
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/rc-virtual-list/es/List.js");

/* harmony default export */ __webpack_exports__["default"] = (_List__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/CacheMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/CacheMap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    _classCallCheck(this, CacheMap);

    this.maps = {};
    this.maps.prototype = null;
  }

  _createClass(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      this.maps[key] = value;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }
  }]);

  return CacheMap;
}();

/* harmony default export */ __webpack_exports__["default"] = (CacheMap);

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/algorithmUtil.js":
/*!****************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js ***!
  \****************************************************************/
/*! exports provided: getIndexByStartLoc, findListDiffIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexByStartLoc", function() { return getIndexByStartLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findListDiffIndex", function() { return findListDiffIndex; });
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2; // Balance

  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);

    if (index % 2) {
      return start + stepIndex + 1;
    }

    return start - stepIndex;
  } // One is out of range


  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }

  return start + (index - beforeCount);
}
/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */

function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;

  if (originLen === 0 && targetLen === 0) {
    return null;
  }

  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }

  var notExistKey = {
    __EMPTY_ITEM__: true
  };

  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }

    return notExistKey;
  } // Loop to find diff one


  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;

  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);

    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }

  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}

/***/ }),

/***/ "./node_modules/rc-virtual-list/es/utils/isFirefox.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-virtual-list/es/utils/isFirefox.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isFF = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ __webpack_exports__["default"] = (isFF);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkRmVhdHVyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Rvd25PdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0Rvd25PdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Eb3duT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc2VsZWN0L3V0aWxzL2ljb25VdGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdEdyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9PcHRpb25MaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9TZWxlY3RUcmlnZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL1NlbGVjdG9yL0lucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL1NlbGVjdG9yL011bHRpcGxlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0b3IvU2luZ2xlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvVHJhbnNCdG4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvZ2VuZXJhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlQ2FjaGVEaXNwbGF5VmFsdWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlQ2FjaGVPcHRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL2hvb2tzL3VzZURlbGF5UmVzZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlTGF5b3V0RWZmZWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL2hvb2tzL3VzZUxvY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaG9va3MvdXNlU2VsZWN0VHJpZ2dlckNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaW50ZXJmYWNlL2dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy91dGlscy9jb21tb25VdGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL3V0aWxzL2xlZ2FjeVV0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvdXRpbHMvdmFsdWVVdGlsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL3V0aWxzL3dhcm5pbmdQcm9wc1V0aWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2hvb2tzL3VzZU1lbW8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvRmlsbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL0l0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9TY3JvbGxCYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaG9va3MvdXNlQ2hpbGRyZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaG9va3MvdXNlRGlmZkl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaG9va3MvdXNlRnJhbWVXaGVlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VIZWlnaHRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdmlydHVhbC1saXN0L2VzL2hvb2tzL3VzZU1vYmlsZVRvdWNoTW92ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy9ob29rcy91c2VPcmlnaW5TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaG9va3MvdXNlU2Nyb2xsVG8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvdXRpbHMvQ2FjaGVNYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy12aXJ0dWFsLWxpc3QvZXMvdXRpbHMvYWxnb3JpdGhtVXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXZpcnR1YWwtbGlzdC9lcy91dGlscy9pc0ZpcmVmb3guanMiXSwibmFtZXMiOlsiQWRkRmVhdHVyZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNwYW4iLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7QUFDQTtBQUNBOztBQVNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUNoQkMsT0FEZ0I7QUFBQSxNQUNQQyxVQURPOztBQUd2QixTQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQUUsT0FBZjtBQUF3QkMsa0JBQVksRUFBRTtBQUF0QyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFlBQVEsRUFBRTtBQUNSQyxVQUFJLEVBQUU7QUFERSxLQURaO0FBSUUsY0FBVSxFQUFFO0FBQ1ZBLFVBQUksRUFBRTtBQURJLEtBSmQ7QUFPRSxVQUFNLEVBQUMsWUFQVDtBQVFFLFNBQUssRUFBRTtBQUFFQyxl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TyxrQ0FBa0MsOEhBQThILEdBQUcsRUFBRSxxQkFBcUI7O0FBRXhYO0FBQ2UsbUVBQUksRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGQtaG90ZWwuMmMwNDgyZTUzZDU1NmVhNTM0MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgUmFkaW8sXHJcbiAgU2VsZWN0LFxyXG4gIENhc2NhZGVyLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgVHJlZVNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgQWxlcnQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBVcGxvYWQsXHJcbiAgSWNvbixcclxuICBtZXNzYWdlLFxyXG4gIENhcmQsXHJcbiAgQ2hlY2tib3gsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgcGFkZGluZyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9wVHlwZSxcclxuICBnZXRQcm9wU3ViVHlwZSxcclxuICBnZXRDaXRpZXMsXHJcbiAgZ2V0TG9jYXRpb25zLFxyXG4gIGdldEN1cnJlbmN5LFxyXG4gIGdldEFyZWEsXHJcbn0gZnJvbSBcIi4uLy4uL3NldHRpbmdzL3NlcnZpY2VcIjtcclxuXHJcbmNvbnN0IEFkZEZlYXR1cmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTByZW1cIiwgcGFkZGluZ1JpZ2h0OiBcIjEwcmVtXCIgfX0+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBbGVydCBtZXNzYWdlPVwiUFJPUEVSVFkgRkVBVFVSRVNcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgICAgPGgzPk1haW4gRmVhdHVyZXM8L2gzPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJCdWlsdCBpbiB5ZWFyXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVmlld1wiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlBhcmtpbmcgU3BhY2VzXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3g+RG91YmxlIEdsYXplZCBXaW5kb3dzPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3g+Q2VudHJhbCBBaXIgQ29uZGl0aW9uaW5nPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3g+Q2VudHJhbCBIZWF0aW5nPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0IExvY2F0aW9uXCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbj48L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRGZWF0dXJlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERvd25PdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiZG93blwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRG93bk91dGxpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9Eb3duT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoJy4vbGliL2ljb25zL0Rvd25PdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9Eb3duT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Eb3duT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9Eb3duT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRG93bk91dGxpbmVkID0gZnVuY3Rpb24gRG93bk91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9Eb3duT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5Eb3duT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnRG93bk91dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRG93bk91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0FycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjU2VsZWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLXNlbGVjdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2ljb25VdGlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9pY29uVXRpbFwiKSk7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG4vLyBUT0RPOiA0LjAgLSBjb2RlbW9kIHNob3VsZCBoZWxwIHRvIGNoYW5nZSBgZmlsdGVyT3B0aW9uYCB0byBzdXBwb3J0IG5vZGUgcHJvcHMuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UgPSAnU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRSc7XG5cbnZhciBJbnRlcm5hbFNlbGVjdCA9IGZ1bmN0aW9uIEludGVybmFsU2VsZWN0KF9hLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzMjtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgX2EkYm9yZGVyZWQgPSBfYS5ib3JkZXJlZCxcbiAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRib3JkZXJlZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX2EuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IF9hLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgX2EkbGlzdEhlaWdodCA9IF9hLmxpc3RIZWlnaHQsXG4gICAgICBsaXN0SGVpZ2h0ID0gX2EkbGlzdEhlaWdodCA9PT0gdm9pZCAwID8gMjU2IDogX2EkbGlzdEhlaWdodCxcbiAgICAgIF9hJGxpc3RJdGVtSGVpZ2h0ID0gX2EubGlzdEl0ZW1IZWlnaHQsXG4gICAgICBsaXN0SXRlbUhlaWdodCA9IF9hJGxpc3RJdGVtSGVpZ2h0ID09PSB2b2lkIDAgPyAyNCA6IF9hJGxpc3RJdGVtSGVpZ2h0LFxuICAgICAgY3VzdG9taXplU2l6ZSA9IF9hLnNpemUsXG4gICAgICBub3RGb3VuZENvbnRlbnQgPSBfYS5ub3RGb3VuZENvbnRlbnQsXG4gICAgICBfYSR0cmFuc2l0aW9uTmFtZSA9IF9hLnRyYW5zaXRpb25OYW1lLFxuICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfYSR0cmFuc2l0aW9uTmFtZSA9PT0gdm9pZCAwID8gJ3NsaWRlLXVwJyA6IF9hJHRyYW5zaXRpb25OYW1lLFxuICAgICAgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImJvcmRlcmVkXCIsIFwiY2xhc3NOYW1lXCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIiwgXCJkcm9wZG93bkNsYXNzTmFtZVwiLCBcImxpc3RIZWlnaHRcIiwgXCJsaXN0SXRlbUhlaWdodFwiLCBcInNpemVcIiwgXCJub3RGb3VuZENvbnRlbnRcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIHJlbmRlckVtcHR5ID0gX1JlYWN0JHVzZUNvbnRleHQucmVuZGVyRW1wdHksXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb24sXG4gICAgICB2aXJ0dWFsID0gX1JlYWN0JHVzZUNvbnRleHQudmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IF9SZWFjdCR1c2VDb250ZXh0LmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NlbGVjdCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBtb2RlID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG0gPSBwcm9wcy5tb2RlO1xuXG4gICAgaWYgKG0gPT09ICdjb21ib2JveCcpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKG0gPT09IFNFQ1JFVF9DT01CT0JPWF9NT0RFX0RPX05PVF9VU0UpIHtcbiAgICAgIHJldHVybiAnY29tYm9ib3gnO1xuICAgIH1cblxuICAgIHJldHVybiBtO1xuICB9LCBbcHJvcHMubW9kZV0pO1xuICB2YXIgaXNNdWx0aXBsZSA9IG1vZGUgPT09ICdtdWx0aXBsZScgfHwgbW9kZSA9PT0gJ3RhZ3MnOyAvLyA9PT09PT09PT09PT09PT09PT09PT0gRW1wdHkgPT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1lcmdlZE5vdEZvdW5kO1xuXG4gIGlmIChub3RGb3VuZENvbnRlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZE5vdEZvdW5kID0gbm90Rm91bmRDb250ZW50O1xuICB9IGVsc2UgaWYgKG1vZGUgPT09ICdjb21ib2JveCcpIHtcbiAgICBtZXJnZWROb3RGb3VuZCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgbWVyZ2VkTm90Rm91bmQgPSByZW5kZXJFbXB0eSgnU2VsZWN0Jyk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09IEljb25zID09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF9nZXRJY29ucyA9ICgwLCBfaWNvblV0aWxbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcyksIHtcbiAgICBtdWx0aXBsZTogaXNNdWx0aXBsZSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9KSksXG4gICAgICBzdWZmaXhJY29uID0gX2dldEljb25zLnN1ZmZpeEljb24sXG4gICAgICBpdGVtSWNvbiA9IF9nZXRJY29ucy5pdGVtSWNvbixcbiAgICAgIHJlbW92ZUljb24gPSBfZ2V0SWNvbnMucmVtb3ZlSWNvbixcbiAgICAgIGNsZWFySWNvbiA9IF9nZXRJY29ucy5jbGVhckljb247XG5cbiAgdmFyIHNlbGVjdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocHJvcHMsIFsnc3VmZml4SWNvbicsICdpdGVtSWNvbiddKTtcbiAgdmFyIHJjU2VsZWN0UnRsRHJvcERvd25DbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShkcm9wZG93bkNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcm9wZG93bi1cIikuY29uY2F0KGRpcmVjdGlvbiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgdmFyIG1lcmdlZFNpemUgPSBjdXN0b21pemVTaXplIHx8IHNpemU7XG4gIHZhciBtZXJnZWRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBtZXJnZWRTaXplID09PSAnbGFyZ2UnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIG1lcmdlZFNpemUgPT09ICdzbWFsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJsZXNzXCIpLCAhYm9yZGVyZWQpLCBfY2xhc3NOYW1lczIpLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjU2VsZWN0W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICByZWY6IHJlZixcbiAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gIH0sIHNlbGVjdFByb3BzLCB7XG4gICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIGxpc3RIZWlnaHQ6IGxpc3RIZWlnaHQsXG4gICAgbGlzdEl0ZW1IZWlnaHQ6IGxpc3RJdGVtSGVpZ2h0LFxuICAgIG1vZGU6IG1vZGUsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgaW5wdXRJY29uOiBzdWZmaXhJY29uLFxuICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uOiBpdGVtSWNvbixcbiAgICByZW1vdmVJY29uOiByZW1vdmVJY29uLFxuICAgIGNsZWFySWNvbjogY2xlYXJJY29uLFxuICAgIG5vdEZvdW5kQ29udGVudDogbWVyZ2VkTm90Rm91bmQsXG4gICAgY2xhc3NOYW1lOiBtZXJnZWRDbGFzc05hbWUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICBkcm9wZG93bkNsYXNzTmFtZTogcmNTZWxlY3RSdGxEcm9wRG93bkNsYXNzTmFtZVxuICB9KSk7XG59O1xuXG52YXIgU2VsZWN0UmVmID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxTZWxlY3QpO1xudmFyIFNlbGVjdCA9IFNlbGVjdFJlZjtcblNlbGVjdC5TRUNSRVRfQ09NQk9CT1hfTU9ERV9ET19OT1RfVVNFID0gU0VDUkVUX0NPTUJPQk9YX01PREVfRE9fTk9UX1VTRTtcblNlbGVjdC5PcHRpb24gPSBfcmNTZWxlY3QuT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gX3JjU2VsZWN0Lk9wdEdyb3VwO1xudmFyIF9kZWZhdWx0ID0gU2VsZWN0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldEljb25zO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Rvd25PdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Rvd25PdXRsaW5lZFwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9DaGVja091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX1NlYXJjaE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvU2VhcmNoT3V0bGluZWRcIikpO1xuXG5mdW5jdGlvbiBnZXRJY29ucyhfcmVmKSB7XG4gIHZhciBzdWZmaXhJY29uID0gX3JlZi5zdWZmaXhJY29uLFxuICAgICAgY2xlYXJJY29uID0gX3JlZi5jbGVhckljb24sXG4gICAgICBtZW51SXRlbVNlbGVjdGVkSWNvbiA9IF9yZWYubWVudUl0ZW1TZWxlY3RlZEljb24sXG4gICAgICByZW1vdmVJY29uID0gX3JlZi5yZW1vdmVJY29uLFxuICAgICAgbG9hZGluZyA9IF9yZWYubG9hZGluZyxcbiAgICAgIG11bHRpcGxlID0gX3JlZi5tdWx0aXBsZSxcbiAgICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzO1xuICAvLyBDbGVhciBJY29uXG4gIHZhciBtZXJnZWRDbGVhckljb24gPSBjbGVhckljb247XG5cbiAgaWYgKCFjbGVhckljb24pIHtcbiAgICBtZXJnZWRDbGVhckljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgfSAvLyBBcnJvdyBpdGVtIGljb25cblxuXG4gIHZhciBtZXJnZWRTdWZmaXhJY29uID0gbnVsbDtcblxuICBpZiAoc3VmZml4SWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VkU3VmZml4SWNvbiA9IHN1ZmZpeEljb247XG4gIH0gZWxzZSBpZiAobG9hZGluZykge1xuICAgIG1lcmdlZFN1ZmZpeEljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXSwge1xuICAgICAgc3BpbjogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBpY29uQ2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdWZmaXhcIik7XG5cbiAgICBtZXJnZWRTdWZmaXhJY29uID0gZnVuY3Rpb24gbWVyZ2VkU3VmZml4SWNvbihfcmVmMikge1xuICAgICAgdmFyIG9wZW4gPSBfcmVmMi5vcGVuLFxuICAgICAgICAgIHNob3dTZWFyY2ggPSBfcmVmMi5zaG93U2VhcmNoO1xuXG4gICAgICBpZiAob3BlbiAmJiBzaG93U2VhcmNoKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2VhcmNoT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Rvd25PdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiBpY29uQ2xzXG4gICAgICB9KTtcbiAgICB9O1xuICB9IC8vIENoZWNrZWQgaXRlbSBpY29uXG5cblxuICB2YXIgbWVyZ2VkSXRlbUljb24gPSBudWxsO1xuXG4gIGlmIChtZW51SXRlbVNlbGVjdGVkSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVyZ2VkSXRlbUljb24gPSBtZW51SXRlbVNlbGVjdGVkSWNvbjtcbiAgfSBlbHNlIGlmIChtdWx0aXBsZSkge1xuICAgIG1lcmdlZEl0ZW1JY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgfSBlbHNlIHtcbiAgICBtZXJnZWRJdGVtSWNvbiA9IG51bGw7XG4gIH1cblxuICB2YXIgbWVyZ2VkUmVtb3ZlSWNvbiA9IG51bGw7XG5cbiAgaWYgKHJlbW92ZUljb24gIT09IHVuZGVmaW5lZCkge1xuICAgIG1lcmdlZFJlbW92ZUljb24gPSByZW1vdmVJY29uO1xuICB9IGVsc2Uge1xuICAgIG1lcmdlZFJlbW92ZUljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhckljb246IG1lcmdlZENsZWFySWNvbixcbiAgICBzdWZmaXhJY29uOiBtZXJnZWRTdWZmaXhJY29uLFxuICAgIGl0ZW1JY29uOiBtZXJnZWRJdGVtSWNvbixcbiAgICByZW1vdmVJY29uOiBtZXJnZWRSZW1vdmVJY29uXG4gIH07XG59IiwiLyoqIFRoaXMgaXMgYSBwbGFjZWhvbGRlciwgbm90IHJlYWwgcmVuZGVyIGluIGRvbSAqL1xudmFyIE9wdEdyb3VwID0gZnVuY3Rpb24gT3B0R3JvdXAoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxuT3B0R3JvdXAuaXNTZWxlY3RPcHRHcm91cCA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBPcHRHcm91cDsiLCIvKiogVGhpcyBpcyBhIHBsYWNlaG9sZGVyLCBub3QgcmVhbCByZW5kZXIgaW4gZG9tICovXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKCkge1xuICByZXR1cm4gbnVsbDtcbn07XG5cbk9wdGlvbi5pc1NlbGVjdE9wdGlvbiA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBPcHRpb247IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCBwaWNrQXR0cnMgZnJvbSBcInJjLXV0aWwvZXMvcGlja0F0dHJzXCI7XG5pbXBvcnQgdXNlTWVtbyBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZW1vXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaXN0IGZyb20gJ3JjLXZpcnR1YWwtbGlzdCc7XG5pbXBvcnQgVHJhbnNCdG4gZnJvbSAnLi9UcmFuc0J0bic7XG4vKipcbiAqIFVzaW5nIHZpcnR1YWwgbGlzdCBvZiBvcHRpb24gZGlzcGxheS5cbiAqIFdpbGwgZmFsbGJhY2sgdG8gZG9tIGlmIHVzZSBjdXN0b21pemUgcmVuZGVyLlxuICovXG5cbnZhciBPcHRpb25MaXN0ID0gZnVuY3Rpb24gT3B0aW9uTGlzdChfcmVmLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgZmxhdHRlbk9wdGlvbnMgPSBfcmVmLmZsYXR0ZW5PcHRpb25zLFxuICAgICAgY2hpbGRyZW5Bc0RhdGEgPSBfcmVmLmNoaWxkcmVuQXNEYXRhLFxuICAgICAgdmFsdWVzID0gX3JlZi52YWx1ZXMsXG4gICAgICBzZWFyY2hWYWx1ZSA9IF9yZWYuc2VhcmNoVmFsdWUsXG4gICAgICBtdWx0aXBsZSA9IF9yZWYubXVsdGlwbGUsXG4gICAgICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPSBfcmVmLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgaXRlbUhlaWdodCA9IF9yZWYuaXRlbUhlaWdodCxcbiAgICAgIG5vdEZvdW5kQ29udGVudCA9IF9yZWYubm90Rm91bmRDb250ZW50LFxuICAgICAgb3BlbiA9IF9yZWYub3BlbixcbiAgICAgIG1lbnVJdGVtU2VsZWN0ZWRJY29uID0gX3JlZi5tZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgIHZpcnR1YWwgPSBfcmVmLnZpcnR1YWwsXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBvblRvZ2dsZU9wZW4gPSBfcmVmLm9uVG9nZ2xlT3BlbixcbiAgICAgIG9uQWN0aXZlVmFsdWUgPSBfcmVmLm9uQWN0aXZlVmFsdWUsXG4gICAgICBvblNjcm9sbCA9IF9yZWYub25TY3JvbGwsXG4gICAgICBvbk1vdXNlRW50ZXIgPSBfcmVmLm9uTW91c2VFbnRlcjtcbiAgdmFyIGl0ZW1QcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWl0ZW1cIik7XG4gIHZhciBtZW1vRmxhdHRlbk9wdGlvbnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmxhdHRlbk9wdGlvbnM7XG4gIH0sIFtvcGVuLCBmbGF0dGVuT3B0aW9uc10sIGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIG5leHRbMF0gJiYgcHJldlsxXSAhPT0gbmV4dFsxXTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBMaXN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBsaXN0UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBvbkxpc3RNb3VzZURvd24gPSBmdW5jdGlvbiBvbkxpc3RNb3VzZURvd24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHZhciBzY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgaWYgKGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgbGlzdFJlZi5jdXJyZW50LnNjcm9sbFRvKHtcbiAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICB9KTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IEFjdGl2ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIGdldEVuYWJsZWRBY3RpdmVJbmRleCA9IGZ1bmN0aW9uIGdldEVuYWJsZWRBY3RpdmVJbmRleChpbmRleCkge1xuICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE7XG4gICAgdmFyIGxlbiA9IG1lbW9GbGF0dGVuT3B0aW9ucy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgY3VycmVudCA9IChpbmRleCArIGkgKiBvZmZzZXQgKyBsZW4pICUgbGVuO1xuICAgICAgdmFyIF9tZW1vRmxhdHRlbk9wdGlvbnMkYyA9IG1lbW9GbGF0dGVuT3B0aW9uc1tjdXJyZW50XSxcbiAgICAgICAgICBncm91cCA9IF9tZW1vRmxhdHRlbk9wdGlvbnMkYy5ncm91cCxcbiAgICAgICAgICBkYXRhID0gX21lbW9GbGF0dGVuT3B0aW9ucyRjLmRhdGE7XG5cbiAgICAgIGlmICghZ3JvdXAgJiYgIWRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldEVuYWJsZWRBY3RpdmVJbmRleCgwKTtcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGFjdGl2ZUluZGV4ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEFjdGl2ZUluZGV4ID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgc2V0QWN0aXZlID0gZnVuY3Rpb24gc2V0QWN0aXZlKGluZGV4KSB7XG4gICAgdmFyIGZyb21LZXlib2FyZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgc2V0QWN0aXZlSW5kZXgoaW5kZXgpO1xuICAgIHZhciBpbmZvID0ge1xuICAgICAgc291cmNlOiBmcm9tS2V5Ym9hcmQgPyAna2V5Ym9hcmQnIDogJ21vdXNlJ1xuICAgIH07IC8vIFRyaWdnZXIgYWN0aXZlIGV2ZW50XG5cbiAgICB2YXIgZmxhdHRlbkl0ZW0gPSBtZW1vRmxhdHRlbk9wdGlvbnNbaW5kZXhdO1xuXG4gICAgaWYgKCFmbGF0dGVuSXRlbSkge1xuICAgICAgb25BY3RpdmVWYWx1ZShudWxsLCAtMSwgaW5mbyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb25BY3RpdmVWYWx1ZShmbGF0dGVuSXRlbS5kYXRhLnZhbHVlLCBpbmRleCwgaW5mbyk7XG4gIH07IC8vIEF1dG8gYWN0aXZlIGZpcnN0IGl0ZW0gd2hlbiBsaXN0IGxlbmd0aCBvciBzZWFyY2hWYWx1ZSBjaGFuZ2VkXG5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldEFjdGl2ZShkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gIT09IGZhbHNlID8gZ2V0RW5hYmxlZEFjdGl2ZUluZGV4KDApIDogLTEpO1xuICB9LCBbbWVtb0ZsYXR0ZW5PcHRpb25zLmxlbmd0aCwgc2VhcmNoVmFsdWVdKTsgLy8gQXV0byBzY3JvbGwgdG8gaXRlbSBwb3NpdGlvbiBpbiBzaW5nbGUgbW9kZVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogUmVhY3Qgd2lsbCBza2lwIGBvbkNoYW5nZWAgd2hlbiBjb21wb25lbnQgdXBkYXRlLlxuICAgICAqIGBzZXRBY3RpdmVgIGZ1bmN0aW9uIHdpbGwgY2FsbCByb290IGFjY2Vzc2liaWxpdHkgc3RhdGUgdXBkYXRlIHdoaWNoIG1ha2VzIHJlLXJlbmRlci5cbiAgICAgKiBTbyB3ZSBuZWVkIHRvIGRlbGF5IHRvIGxldCBJbnB1dCBjb21wb25lbnQgdHJpZ2dlciBvbkNoYW5nZSBmaXJzdC5cbiAgICAgKi9cbiAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIW11bHRpcGxlICYmIG9wZW4gJiYgdmFsdWVzLnNpemUgPT09IDEpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gQXJyYXkuZnJvbSh2YWx1ZXMpWzBdO1xuICAgICAgICB2YXIgaW5kZXggPSBtZW1vRmxhdHRlbk9wdGlvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcbiAgICAgICAgICByZXR1cm4gZGF0YS52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRBY3RpdmUoaW5kZXgpO1xuICAgICAgICBzY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICB9XG4gICAgfSk7IC8vIEZvcmNlIHRyaWdnZXIgc2Nyb2xsYmFyIHZpc2libGUgd2hlbiBvcGVuXG5cbiAgICBpZiAob3Blbikge1xuICAgICAgdmFyIF9saXN0UmVmJGN1cnJlbnQ7XG5cbiAgICAgIChfbGlzdFJlZiRjdXJyZW50ID0gbGlzdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfbGlzdFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbGlzdFJlZiRjdXJyZW50LnNjcm9sbFRvKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9O1xuICB9LCBbb3Blbl0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBWYWx1ZXMgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb25TZWxlY3RWYWx1ZSA9IGZ1bmN0aW9uIG9uU2VsZWN0VmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgb25TZWxlY3QodmFsdWUsIHtcbiAgICAgICAgc2VsZWN0ZWQ6ICF2YWx1ZXMuaGFzKHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSAvLyBTaW5nbGUgbW9kZSBzaG91bGQgYWx3YXlzIGNsb3NlIGJ5IHNlbGVjdFxuXG5cbiAgICBpZiAoIW11bHRpcGxlKSB7XG4gICAgICBvblRvZ2dsZU9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBLZXlib2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaDtcblxuICAgICAgICBzd2l0Y2ggKHdoaWNoKSB7XG4gICAgICAgICAgLy8gPj4+IEFycm93IGtleXNcbiAgICAgICAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgICAgICAgY2FzZSBLZXlDb2RlLkRPV046XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gS2V5Q29kZS5VUCkge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IC0xO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHdoaWNoID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSAxO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXh0QWN0aXZlSW5kZXggPSBnZXRFbmFibGVkQWN0aXZlSW5kZXgoYWN0aXZlSW5kZXggKyBvZmZzZXQsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsSW50b1ZpZXcobmV4dEFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmUobmV4dEFjdGl2ZUluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vID4+PiBTZWxlY3RcblxuICAgICAgICAgIGNhc2UgS2V5Q29kZS5FTlRFUjpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gdmFsdWVcbiAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtZW1vRmxhdHRlbk9wdGlvbnNbYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgICAgIGlmIChpdGVtICYmICFpdGVtLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdFZhbHVlKGl0ZW0uZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb25TZWxlY3RWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gPj4+IENsb3NlXG5cbiAgICAgICAgICBjYXNlIEtleUNvZGUuRVNDOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvblRvZ2dsZU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcCgpIHt9LFxuICAgICAgc2Nyb2xsVG86IGZ1bmN0aW9uIHNjcm9sbFRvKGluZGV4KSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3KGluZGV4KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgaWYgKG1lbW9GbGF0dGVuT3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCJfbGlzdFwiKSxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoaXRlbVByZWZpeENscywgXCItZW1wdHlcIiksXG4gICAgICBvbk1vdXNlRG93bjogb25MaXN0TW91c2VEb3duXG4gICAgfSwgbm90Rm91bmRDb250ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckl0ZW0oaW5kZXgpIHtcbiAgICB2YXIgaXRlbSA9IG1lbW9GbGF0dGVuT3B0aW9uc1tpbmRleF07XG4gICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaXRlbURhdGEgPSBpdGVtLmRhdGEgfHwge307XG4gICAgdmFyIHZhbHVlID0gaXRlbURhdGEudmFsdWUsXG4gICAgICAgIGxhYmVsID0gaXRlbURhdGEubGFiZWwsXG4gICAgICAgIGNoaWxkcmVuID0gaXRlbURhdGEuY2hpbGRyZW47XG4gICAgdmFyIGF0dHJzID0gcGlja0F0dHJzKGl0ZW1EYXRhLCB0cnVlKTtcbiAgICB2YXIgbWVyZ2VkTGFiZWwgPSBjaGlsZHJlbkFzRGF0YSA/IGNoaWxkcmVuIDogbGFiZWw7XG4gICAgcmV0dXJuIGl0ZW0gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgXCJhcmlhLWxhYmVsXCI6IHR5cGVvZiBtZXJnZWRMYWJlbCA9PT0gJ3N0cmluZycgPyBtZXJnZWRMYWJlbCA6IG51bGxcbiAgICB9LCBhdHRycywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIHJvbGU6IFwib3B0aW9uXCIsXG4gICAgICBpZDogXCJcIi5jb25jYXQoaWQsIFwiX2xpc3RfXCIpLmNvbmNhdChpbmRleCksXG4gICAgICBcImFyaWEtc2VsZWN0ZWRcIjogdmFsdWVzLmhhcyh2YWx1ZSlcbiAgICB9KSwgdmFsdWUpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICBpZDogXCJcIi5jb25jYXQoaWQsIFwiX2xpc3RcIiksXG4gICAgc3R5bGU6IHtcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfVxuICB9LCByZW5kZXJJdGVtKGFjdGl2ZUluZGV4IC0gMSksIHJlbmRlckl0ZW0oYWN0aXZlSW5kZXgpLCByZW5kZXJJdGVtKGFjdGl2ZUluZGV4ICsgMSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KExpc3QsIHtcbiAgICBpdGVtS2V5OiBcImtleVwiLFxuICAgIHJlZjogbGlzdFJlZixcbiAgICBkYXRhOiBtZW1vRmxhdHRlbk9wdGlvbnMsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaXRlbUhlaWdodDogaXRlbUhlaWdodCxcbiAgICBmdWxsSGVpZ2h0OiBmYWxzZSxcbiAgICBvbk1vdXNlRG93bjogb25MaXN0TW91c2VEb3duLFxuICAgIG9uU2Nyb2xsOiBvblNjcm9sbCxcbiAgICB2aXJ0dWFsOiB2aXJ0dWFsLFxuICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyXG4gIH0sIGZ1bmN0aW9uIChfcmVmMywgaXRlbUluZGV4KSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIGdyb3VwID0gX3JlZjMuZ3JvdXAsXG4gICAgICAgIGdyb3VwT3B0aW9uID0gX3JlZjMuZ3JvdXBPcHRpb24sXG4gICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhO1xuICAgIHZhciBsYWJlbCA9IGRhdGEubGFiZWwsXG4gICAgICAgIGtleSA9IGRhdGEua2V5OyAvLyBHcm91cFxuXG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhpdGVtUHJlZml4Q2xzLCBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1ncm91cFwiKSlcbiAgICAgIH0sIGxhYmVsICE9PSB1bmRlZmluZWQgPyBsYWJlbCA6IGtleSk7XG4gICAgfVxuXG4gICAgdmFyIGRpc2FibGVkID0gZGF0YS5kaXNhYmxlZCxcbiAgICAgICAgdmFsdWUgPSBkYXRhLnZhbHVlLFxuICAgICAgICB0aXRsZSA9IGRhdGEudGl0bGUsXG4gICAgICAgIGNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbixcbiAgICAgICAgc3R5bGUgPSBkYXRhLnN0eWxlLFxuICAgICAgICBjbGFzc05hbWUgPSBkYXRhLmNsYXNzTmFtZSxcbiAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhkYXRhLCBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCIsIFwidGl0bGVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCJdKTsgLy8gT3B0aW9uXG5cblxuICAgIHZhciBzZWxlY3RlZCA9IHZhbHVlcy5oYXModmFsdWUpO1xuICAgIHZhciBvcHRpb25QcmVmaXhDbHMgPSBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1vcHRpb25cIik7XG4gICAgdmFyIG9wdGlvbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoaXRlbVByZWZpeENscywgb3B0aW9uUHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItZ3JvdXBlZFwiKSwgZ3JvdXBPcHRpb24pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItYWN0aXZlXCIpLCBhY3RpdmVJbmRleCA9PT0gaXRlbUluZGV4ICYmICFkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQob3B0aW9uUHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KG9wdGlvblByZWZpeENscywgXCItc2VsZWN0ZWRcIiksIHNlbGVjdGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICB2YXIgbWVyZ2VkTGFiZWwgPSBjaGlsZHJlbkFzRGF0YSA/IGNoaWxkcmVuIDogbGFiZWw7XG4gICAgdmFyIGljb25WaXNpYmxlID0gIW1lbnVJdGVtU2VsZWN0ZWRJY29uIHx8IHR5cGVvZiBtZW51SXRlbVNlbGVjdGVkSWNvbiA9PT0gJ2Z1bmN0aW9uJyB8fCBzZWxlY3RlZDtcbiAgICB2YXIgY29udGVudCA9IG1lcmdlZExhYmVsIHx8IHZhbHVlOyAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yNjcxN1xuXG4gICAgdmFyIG9wdGlvblRpdGxlID0gdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb250ZW50ID09PSAnbnVtYmVyJyA/IGNvbnRlbnQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvcHRpb25UaXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHtcbiAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBzZWxlY3RlZCxcbiAgICAgIGNsYXNzTmFtZTogb3B0aW9uQ2xhc3NOYW1lLFxuICAgICAgdGl0bGU6IG9wdGlvblRpdGxlLFxuICAgICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCkge1xuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGl0ZW1JbmRleCB8fCBkaXNhYmxlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEFjdGl2ZShpdGVtSW5kZXgpO1xuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICBvblNlbGVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQob3B0aW9uUHJlZml4Q2xzLCBcIi1jb250ZW50XCIpXG4gICAgfSwgY29udGVudCksIFJlYWN0LmlzVmFsaWRFbGVtZW50KG1lbnVJdGVtU2VsZWN0ZWRJY29uKSB8fCBzZWxlY3RlZCwgaWNvblZpc2libGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc0J0biwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChpdGVtUHJlZml4Q2xzLCBcIi1vcHRpb24tc3RhdGVcIiksXG4gICAgICBjdXN0b21pemVJY29uOiBtZW51SXRlbVNlbGVjdGVkSWNvbixcbiAgICAgIGN1c3RvbWl6ZUljb25Qcm9wczoge1xuICAgICAgICBpc1NlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgfVxuICAgIH0sIHNlbGVjdGVkID8gJ+KckycgOiBudWxsKSk7XG4gIH0pKTtcbn07XG5cbnZhciBSZWZPcHRpb25MaXN0ID0gUmVhY3QuZm9yd2FyZFJlZihPcHRpb25MaXN0KTtcblJlZk9wdGlvbkxpc3QuZGlzcGxheU5hbWUgPSAnT3B0aW9uTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBSZWZPcHRpb25MaXN0OyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5cbi8qKlxuICogVG8gbWF0Y2ggYWNjZXNzaWJpbGl0eSByZXF1aXJlbWVudCwgd2UgYWx3YXlzIHByb3ZpZGUgYW4gaW5wdXQgaW4gdGhlIGNvbXBvbmVudC5cbiAqIE90aGVyIGVsZW1lbnQgd2lsbCBub3Qgc2V0IGB0YWJJbmRleGAgdG8gYXZvaWQgYG9uQmx1cmAgc2VxdWVuY2UgcHJvYmxlbS5cbiAqIEZvciBmb2N1c2VkIHNlbGVjdCwgd2Ugc2V0IGBhcmlhLWxpdmU9XCJwb2xpdGVcImAgdG8gdXBkYXRlIHRoZSBhY2Nlc3NpYmlsaXR5IGNvbnRlbnQuXG4gKlxuICogcmVmOlxuICogLSBrZXlib2FyZDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL1JvbGVzL2xpc3Rib3hfcm9sZSNLZXlib2FyZF9pbnRlcmFjdGlvbnNcbiAqXG4gKiBOZXcgYXBpOlxuICogLSBsaXN0SGVpZ2h0XG4gKiAtIGxpc3RJdGVtSGVpZ2h0XG4gKiAtIGNvbXBvbmVudFxuICpcbiAqIFJlbW92ZSBkZXByZWNhdGVkIGFwaTpcbiAqIC0gbXVsdGlwbGVcbiAqIC0gdGFnc1xuICogLSBjb21ib2JveFxuICogLSBmaXJzdEFjdGl2ZVZhbHVlXG4gKiAtIGRyb3Bkb3duTWVudVN0eWxlXG4gKiAtIG9wZW5DbGFzc05hbWUgKE5vdCBsaXN0IGluIGFwaSlcbiAqXG4gKiBVcGRhdGU6XG4gKiAtIGBiYWNrZmlsbGAgb25seSBzdXBwb3J0IGBjb21ib2JveGAgbW9kZVxuICogLSBgY29tYm9ib3hgIG1vZGUgbm90IHN1cHBvcnQgYGxhYmVsSW5WYWx1ZWAgc2luY2UgaXQncyBtZWFuaW5nbGVzc1xuICogLSBgZ2V0SW5wdXRFbGVtZW50YCBvbmx5IHN1cHBvcnQgYGNvbWJvYm94YCBtb2RlXG4gKiAtIGBvbkNoYW5nZWAgcmV0dXJuIE9wdGlvbkRhdGEgaW5zdGVhZCBvZiBSZWFjdE5vZGVcbiAqIC0gYGZpbHRlck9wdGlvbmAgYG9uQ2hhbmdlYCBgb25TZWxlY3RgIGFjY2VwdCBPcHRpb25EYXRhIGluc3RlYWQgb2YgUmVhY3ROb2RlXG4gKiAtIGBjb21ib2JveGAgbW9kZSB0cmlnZ2VyIGBvbkNoYW5nZWAgd2lsbCBnZXQgYHVuZGVmaW5lZGAgaWYgbm8gYHZhbHVlYCBtYXRjaCBpbiBPcHRpb25cbiAqIC0gYGNvbWJvYm94YCBtb2RlIG5vdCBzdXBwb3J0IGBvcHRpb25MYWJlbFByb3BgXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3RPcHRpb25MaXN0IGZyb20gJy4vT3B0aW9uTGlzdCc7XG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJztcbmltcG9ydCBPcHRHcm91cCBmcm9tICcuL09wdEdyb3VwJztcbmltcG9ydCB7IGNvbnZlcnRDaGlsZHJlblRvRGF0YSBhcyBjb252ZXJ0U2VsZWN0Q2hpbGRyZW5Ub0RhdGEgfSBmcm9tICcuL3V0aWxzL2xlZ2FjeVV0aWwnO1xuaW1wb3J0IHsgZ2V0TGFiZWxlZFZhbHVlIGFzIGdldFNlbGVjdExhYmVsZWRWYWx1ZSwgZmlsdGVyT3B0aW9ucyBhcyBzZWxlY3REZWZhdWx0RmlsdGVyT3B0aW9ucywgaXNWYWx1ZURpc2FibGVkIGFzIGlzU2VsZWN0VmFsdWVEaXNhYmxlZCwgZmluZFZhbHVlT3B0aW9uIGFzIGZpbmRTZWxlY3RWYWx1ZU9wdGlvbiwgZmxhdHRlbk9wdGlvbnMsIGZpbGxPcHRpb25zV2l0aE1pc3NpbmdWYWx1ZSB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcbmltcG9ydCBnZW5lcmF0ZVNlbGVjdG9yIGZyb20gJy4vZ2VuZXJhdGUnO1xuaW1wb3J0IHdhcm5pbmdQcm9wcyBmcm9tICcuL3V0aWxzL3dhcm5pbmdQcm9wc1V0aWwnO1xudmFyIFJlZlNlbGVjdCA9IGdlbmVyYXRlU2VsZWN0b3Ioe1xuICBwcmVmaXhDbHM6ICdyYy1zZWxlY3QnLFxuICBjb21wb25lbnRzOiB7XG4gICAgb3B0aW9uTGlzdDogU2VsZWN0T3B0aW9uTGlzdFxuICB9LFxuICBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGE6IGNvbnZlcnRTZWxlY3RDaGlsZHJlblRvRGF0YSxcbiAgZmxhdHRlbk9wdGlvbnM6IGZsYXR0ZW5PcHRpb25zLFxuICBnZXRMYWJlbGVkVmFsdWU6IGdldFNlbGVjdExhYmVsZWRWYWx1ZSxcbiAgZmlsdGVyT3B0aW9uczogc2VsZWN0RGVmYXVsdEZpbHRlck9wdGlvbnMsXG4gIGlzVmFsdWVEaXNhYmxlZDogaXNTZWxlY3RWYWx1ZURpc2FibGVkLFxuICBmaW5kVmFsdWVPcHRpb246IGZpbmRTZWxlY3RWYWx1ZU9wdGlvbixcbiAgd2FybmluZ1Byb3BzOiB3YXJuaW5nUHJvcHMsXG4gIGZpbGxPcHRpb25zV2l0aE1pc3NpbmdWYWx1ZTogZmlsbE9wdGlvbnNXaXRoTWlzc2luZ1ZhbHVlXG59KTtcbi8qKlxuICogVHlwZXNjcmlwdCBub3Qgc3VwcG9ydCBnZW5lcmljIHdpdGggZnVuY3Rpb24gY29tcG9uZW50LFxuICogd2UgaGF2ZSB0byB3cmFwIGFuIGNsYXNzIGNvbXBvbmVudCB0byBoYW5kbGUgdGhpcy5cbiAqL1xuXG52YXIgU2VsZWN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTZWxlY3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2VsZWN0KTtcblxuICBmdW5jdGlvbiBTZWxlY3QoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnNlbGVjdFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZWxlY3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH07XG5cbiAgICBfdGhpcy5ibHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2VsZWN0UmVmLmN1cnJlbnQuYmx1cigpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVmU2VsZWN0LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgcmVmOiB0aGlzLnNlbGVjdFJlZlxuICAgICAgfSwgdGhpcy5wcm9wcykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblNlbGVjdC5PcHRpb24gPSBPcHRpb247XG5TZWxlY3QuT3B0R3JvdXAgPSBPcHRHcm91cDtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgZ2V0QnVpbHRJblBsYWNlbWVudHMgPSBmdW5jdGlvbiBnZXRCdWlsdEluUGxhY2VtZW50cyhkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgLy8gRW5hYmxlIGhvcml6b250YWwgb3ZlcmZsb3cgYXV0by1hZGp1c3RtZW50IHdoZW4gYSBjdXN0b20gZHJvcGRvd24gd2lkdGggaXMgcHJvdmlkZWRcbiAgdmFyIGFkanVzdFggPSB0eXBlb2YgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoICE9PSAnbnVtYmVyJyA/IDAgOiAxO1xuICByZXR1cm4ge1xuICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgICBvdmVyZmxvdzoge1xuICAgICAgICBhZGp1c3RYOiBhZGp1c3RYLFxuICAgICAgICBhZGp1c3RZOiAxXG4gICAgICB9XG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICAgIG92ZXJmbG93OiB7XG4gICAgICAgIGFkanVzdFg6IGFkanVzdFgsXG4gICAgICAgIGFkanVzdFk6IDFcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvcExlZnQ6IHtcbiAgICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgICAgb3ZlcmZsb3c6IHtcbiAgICAgICAgYWRqdXN0WDogYWRqdXN0WCxcbiAgICAgICAgYWRqdXN0WTogMVxuICAgICAgfVxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgICAgb3ZlcmZsb3c6IHtcbiAgICAgICAgYWRqdXN0WDogYWRqdXN0WCxcbiAgICAgICAgYWRqdXN0WTogMVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBTZWxlY3RUcmlnZ2VyID0gZnVuY3Rpb24gU2VsZWN0VHJpZ2dlcihwcm9wcywgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgcG9wdXBFbGVtZW50ID0gcHJvcHMucG9wdXBFbGVtZW50LFxuICAgICAgY29udGFpbmVyV2lkdGggPSBwcm9wcy5jb250YWluZXJXaWR0aCxcbiAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICBkcm9wZG93blN0eWxlID0gcHJvcHMuZHJvcGRvd25TdHlsZSxcbiAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lID0gcHJvcHMuZHJvcGRvd25DbGFzc05hbWUsXG4gICAgICBfcHJvcHMkZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3Byb3BzJGRpcmVjdGlvbiA9PT0gdm9pZCAwID8gJ2x0cicgOiBfcHJvcHMkZGlyZWN0aW9uLFxuICAgICAgX3Byb3BzJGRyb3Bkb3duTWF0Y2hTID0gcHJvcHMuZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoLFxuICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoID0gX3Byb3BzJGRyb3Bkb3duTWF0Y2hTID09PSB2b2lkIDAgPyB0cnVlIDogX3Byb3BzJGRyb3Bkb3duTWF0Y2hTLFxuICAgICAgZHJvcGRvd25SZW5kZXIgPSBwcm9wcy5kcm9wZG93blJlbmRlcixcbiAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGVtcHR5ID0gcHJvcHMuZW1wdHksXG4gICAgICBnZXRUcmlnZ2VyRE9NTm9kZSA9IHByb3BzLmdldFRyaWdnZXJET01Ob2RlLFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJkaXNhYmxlZFwiLCBcInZpc2libGVcIiwgXCJjaGlsZHJlblwiLCBcInBvcHVwRWxlbWVudFwiLCBcImNvbnRhaW5lcldpZHRoXCIsIFwiYW5pbWF0aW9uXCIsIFwidHJhbnNpdGlvbk5hbWVcIiwgXCJkcm9wZG93blN0eWxlXCIsIFwiZHJvcGRvd25DbGFzc05hbWVcIiwgXCJkaXJlY3Rpb25cIiwgXCJkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGhcIiwgXCJkcm9wZG93blJlbmRlclwiLCBcImRyb3Bkb3duQWxpZ25cIiwgXCJnZXRQb3B1cENvbnRhaW5lclwiLCBcImVtcHR5XCIsIFwiZ2V0VHJpZ2dlckRPTU5vZGVcIl0pO1xuXG4gIHZhciBkcm9wZG93blByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJvcGRvd25cIik7XG4gIHZhciBwb3B1cE5vZGUgPSBwb3B1cEVsZW1lbnQ7XG5cbiAgaWYgKGRyb3Bkb3duUmVuZGVyKSB7XG4gICAgcG9wdXBOb2RlID0gZHJvcGRvd25SZW5kZXIocG9wdXBFbGVtZW50KTtcbiAgfVxuXG4gIHZhciBidWlsdEluUGxhY2VtZW50cyA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRCdWlsdEluUGxhY2VtZW50cyhkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpO1xuICB9LCBbZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBNb3Rpb24gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBtZXJnZWRUcmFuc2l0aW9uTmFtZSA9IGFuaW1hdGlvbiA/IFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFuaW1hdGlvbikgOiB0cmFuc2l0aW9uTmFtZTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gUmVmID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIHBvcHVwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRQb3B1cEVsZW1lbnQ6IGZ1bmN0aW9uIGdldFBvcHVwRWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHBvcHVwUmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIHBvcHVwU3R5bGUgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICBtaW5XaWR0aDogY29udGFpbmVyV2lkdGhcbiAgfSwgZHJvcGRvd25TdHlsZSk7XG5cbiAgaWYgKHR5cGVvZiBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgcG9wdXBTdHlsZS53aWR0aCA9IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcbiAgfSBlbHNlIGlmIChkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICBwb3B1cFN0eWxlLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUcmlnZ2VyLCBPYmplY3QuYXNzaWduKHt9LCByZXN0UHJvcHMsIHtcbiAgICBzaG93QWN0aW9uOiBbXSxcbiAgICBoaWRlQWN0aW9uOiBbXSxcbiAgICBwb3B1cFBsYWNlbWVudDogZGlyZWN0aW9uID09PSAncnRsJyA/ICdib3R0b21SaWdodCcgOiAnYm90dG9tTGVmdCcsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IGJ1aWx0SW5QbGFjZW1lbnRzLFxuICAgIHByZWZpeENsczogZHJvcGRvd25QcmVmaXhDbHMsXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogbWVyZ2VkVHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgcmVmOiBwb3B1cFJlZlxuICAgIH0sIHBvcHVwTm9kZSksXG4gICAgcG9wdXBBbGlnbjogZHJvcGRvd25BbGlnbixcbiAgICBwb3B1cFZpc2libGU6IHZpc2libGUsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLFxuICAgIHBvcHVwQ2xhc3NOYW1lOiBjbGFzc05hbWVzKGRyb3Bkb3duQ2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KGRyb3Bkb3duUHJlZml4Q2xzLCBcIi1lbXB0eVwiKSwgZW1wdHkpKSxcbiAgICBwb3B1cFN0eWxlOiBwb3B1cFN0eWxlLFxuICAgIGdldFRyaWdnZXJET01Ob2RlOiBnZXRUcmlnZ2VyRE9NTm9kZVxuICB9KSwgY2hpbGRyZW4pO1xufTtcblxudmFyIFJlZlNlbGVjdFRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmKFNlbGVjdFRyaWdnZXIpO1xuUmVmU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9ICdTZWxlY3RUcmlnZ2VyJztcbmV4cG9ydCBkZWZhdWx0IFJlZlNlbGVjdFRyaWdnZXI7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2VSZWYgfSBmcm9tIFwicmMtdXRpbC9lcy9yZWZcIjtcblxudmFyIElucHV0ID0gZnVuY3Rpb24gSW5wdXQoX3JlZiwgcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGlucHV0RWxlbWVudCA9IF9yZWYuaW5wdXRFbGVtZW50LFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgdGFiSW5kZXggPSBfcmVmLnRhYkluZGV4LFxuICAgICAgYXV0b0ZvY3VzID0gX3JlZi5hdXRvRm9jdXMsXG4gICAgICBhdXRvQ29tcGxldGUgPSBfcmVmLmF1dG9Db21wbGV0ZSxcbiAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlJbmRleCA9IF9yZWYuYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgX29uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgX29uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bixcbiAgICAgIF9vbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBvblBhc3RlID0gX3JlZi5vblBhc3RlLFxuICAgICAgX29uQ29tcG9zaXRpb25TdGFydCA9IF9yZWYub25Db21wb3NpdGlvblN0YXJ0LFxuICAgICAgX29uQ29tcG9zaXRpb25FbmQgPSBfcmVmLm9uQ29tcG9zaXRpb25FbmQsXG4gICAgICBvcGVuID0gX3JlZi5vcGVuLFxuICAgICAgYXR0cnMgPSBfcmVmLmF0dHJzO1xuICB2YXIgaW5wdXROb2RlID0gaW5wdXRFbGVtZW50IHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBudWxsKTtcbiAgdmFyIF9pbnB1dE5vZGUgPSBpbnB1dE5vZGUsXG4gICAgICBvcmlnaW5SZWYgPSBfaW5wdXROb2RlLnJlZixcbiAgICAgIF9pbnB1dE5vZGUkcHJvcHMgPSBfaW5wdXROb2RlLnByb3BzLFxuICAgICAgb25PcmlnaW5LZXlEb3duID0gX2lucHV0Tm9kZSRwcm9wcy5vbktleURvd24sXG4gICAgICBvbk9yaWdpbkNoYW5nZSA9IF9pbnB1dE5vZGUkcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbk9yaWdpbk1vdXNlRG93biA9IF9pbnB1dE5vZGUkcHJvcHMub25Nb3VzZURvd24sXG4gICAgICBvbk9yaWdpbkNvbXBvc2l0aW9uU3RhcnQgPSBfaW5wdXROb2RlJHByb3BzLm9uQ29tcG9zaXRpb25TdGFydCxcbiAgICAgIG9uT3JpZ2luQ29tcG9zaXRpb25FbmQgPSBfaW5wdXROb2RlJHByb3BzLm9uQ29tcG9zaXRpb25FbmQsXG4gICAgICBzdHlsZSA9IF9pbnB1dE5vZGUkcHJvcHMuc3R5bGU7XG4gIGlucHV0Tm9kZSA9IFJlYWN0LmNsb25lRWxlbWVudChpbnB1dE5vZGUsIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgaWQ6IGlkLFxuICAgIHJlZjogY29tcG9zZVJlZihyZWYsIG9yaWdpblJlZiksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSB8fCAnb2ZmJyxcbiAgICB0eXBlOiAnc2VhcmNoJyxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLXNlYXJjaC1pbnB1dFwiKSxcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICBvcGFjaXR5OiBlZGl0YWJsZSA/IG51bGwgOiAwXG4gICAgfSksXG4gICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAnYXJpYS1leHBhbmRlZCc6IG9wZW4sXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAnbGlzdGJveCcsXG4gICAgJ2FyaWEtb3ducyc6IFwiXCIuY29uY2F0KGlkLCBcIl9saXN0XCIpLFxuICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAnYXJpYS1jb250cm9scyc6IFwiXCIuY29uY2F0KGlkLCBcIl9saXN0XCIpLFxuICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBcIlwiLmNvbmNhdChpZCwgXCJfbGlzdF9cIikuY29uY2F0KGFjY2Vzc2liaWxpdHlJbmRleClcbiAgfSwgYXR0cnMpLCB7fSwge1xuICAgIHZhbHVlOiBlZGl0YWJsZSA/IHZhbHVlIDogJycsXG4gICAgcmVhZE9ubHk6ICFlZGl0YWJsZSxcbiAgICB1bnNlbGVjdGFibGU6ICFlZGl0YWJsZSA/ICdvbicgOiBudWxsLFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICBfb25LZXlEb3duKGV2ZW50KTtcblxuICAgICAgaWYgKG9uT3JpZ2luS2V5RG93bikge1xuICAgICAgICBvbk9yaWdpbktleURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICBfb25Nb3VzZURvd24oZXZlbnQpO1xuXG4gICAgICBpZiAob25PcmlnaW5Nb3VzZURvd24pIHtcbiAgICAgICAgb25PcmlnaW5Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBfb25DaGFuZ2UoZXZlbnQpO1xuXG4gICAgICBpZiAob25PcmlnaW5DaGFuZ2UpIHtcbiAgICAgICAgb25PcmlnaW5DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Db21wb3NpdGlvblN0YXJ0OiBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uU3RhcnQoZXZlbnQpIHtcbiAgICAgIF9vbkNvbXBvc2l0aW9uU3RhcnQoZXZlbnQpO1xuXG4gICAgICBpZiAob25PcmlnaW5Db21wb3NpdGlvblN0YXJ0KSB7XG4gICAgICAgIG9uT3JpZ2luQ29tcG9zaXRpb25TdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNvbXBvc2l0aW9uRW5kOiBmdW5jdGlvbiBvbkNvbXBvc2l0aW9uRW5kKGV2ZW50KSB7XG4gICAgICBfb25Db21wb3NpdGlvbkVuZChldmVudCk7XG5cbiAgICAgIGlmIChvbk9yaWdpbkNvbXBvc2l0aW9uRW5kKSB7XG4gICAgICAgIG9uT3JpZ2luQ29tcG9zaXRpb25FbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25QYXN0ZTogb25QYXN0ZVxuICB9KSk7XG4gIHJldHVybiBpbnB1dE5vZGU7XG59O1xuXG52YXIgUmVmSW5wdXQgPSBSZWFjdC5mb3J3YXJkUmVmKElucHV0KTtcblJlZklucHV0LmRpc3BsYXlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IFJlZklucHV0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgcGlja0F0dHJzIGZyb20gXCJyYy11dGlsL2VzL3BpY2tBdHRyc1wiO1xuaW1wb3J0IHsgQ1NTTW90aW9uTGlzdCB9IGZyb20gJ3JjLW1vdGlvbic7XG5pbXBvcnQgVHJhbnNCdG4gZnJvbSAnLi4vVHJhbnNCdG4nO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHVzZUxheW91dEVmZmVjdCBmcm9tICcuLi9ob29rcy91c2VMYXlvdXRFZmZlY3QnO1xudmFyIFJFU1RfVEFHX0tFWSA9ICdfX1JDX1NFTEVDVF9NQVhfUkVTVF9DT1VOVF9fJztcblxudmFyIFNlbGVjdFNlbGVjdG9yID0gZnVuY3Rpb24gU2VsZWN0U2VsZWN0b3IocHJvcHMpIHtcbiAgdmFyIGlkID0gcHJvcHMuaWQsXG4gICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXMsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIHNlYXJjaFZhbHVlID0gcHJvcHMuc2VhcmNoVmFsdWUsXG4gICAgICBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgIHNob3dTZWFyY2ggPSBwcm9wcy5zaG93U2VhcmNoLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYWNjZXNzaWJpbGl0eUluZGV4ID0gcHJvcHMuYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgICAgdGFiSW5kZXggPSBwcm9wcy50YWJJbmRleCxcbiAgICAgIHJlbW92ZUljb24gPSBwcm9wcy5yZW1vdmVJY29uLFxuICAgICAgY2hvaWNlVHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5jaG9pY2VUcmFuc2l0aW9uTmFtZSxcbiAgICAgIG1heFRhZ0NvdW50ID0gcHJvcHMubWF4VGFnQ291bnQsXG4gICAgICBtYXhUYWdUZXh0TGVuZ3RoID0gcHJvcHMubWF4VGFnVGV4dExlbmd0aCxcbiAgICAgIF9wcm9wcyRtYXhUYWdQbGFjZWhvbCA9IHByb3BzLm1heFRhZ1BsYWNlaG9sZGVyLFxuICAgICAgbWF4VGFnUGxhY2Vob2xkZXIgPSBfcHJvcHMkbWF4VGFnUGxhY2Vob2wgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvbWl0dGVkVmFsdWVzKSB7XG4gICAgcmV0dXJuIFwiKyBcIi5jb25jYXQob21pdHRlZFZhbHVlcy5sZW5ndGgsIFwiIC4uLlwiKTtcbiAgfSA6IF9wcm9wcyRtYXhUYWdQbGFjZWhvbCxcbiAgICAgIHRhZ1JlbmRlciA9IHByb3BzLnRhZ1JlbmRlcixcbiAgICAgIG9uU2VsZWN0ID0gcHJvcHMub25TZWxlY3QsXG4gICAgICBvbklucHV0Q2hhbmdlID0gcHJvcHMub25JbnB1dENoYW5nZSxcbiAgICAgIG9uSW5wdXRQYXN0ZSA9IHByb3BzLm9uSW5wdXRQYXN0ZSxcbiAgICAgIG9uSW5wdXRLZXlEb3duID0gcHJvcHMub25JbnB1dEtleURvd24sXG4gICAgICBvbklucHV0TW91c2VEb3duID0gcHJvcHMub25JbnB1dE1vdXNlRG93bixcbiAgICAgIG9uSW5wdXRDb21wb3NpdGlvblN0YXJ0ID0gcHJvcHMub25JbnB1dENvbXBvc2l0aW9uU3RhcnQsXG4gICAgICBvbklucHV0Q29tcG9zaXRpb25FbmQgPSBwcm9wcy5vbklucHV0Q29tcG9zaXRpb25FbmQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgbW90aW9uQXBwZWFyID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldE1vdGlvbkFwcGVhciA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1lYXN1cmVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZSgwKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUzLCAyKSxcbiAgICAgIGlucHV0V2lkdGggPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0SW5wdXRXaWR0aCA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07IC8vID09PT09PT09PT09PT09PT09PT09PSBNb3Rpb24gPT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzZXRNb3Rpb25BcHBlYXIodHJ1ZSk7XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09IFNlYXJjaCA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGlucHV0VmFsdWUgPSBvcGVuIHx8IG1vZGUgPT09ICd0YWdzJyA/IHNlYXJjaFZhbHVlIDogJyc7XG4gIHZhciBpbnB1dEVkaXRhYmxlID0gbW9kZSA9PT0gJ3RhZ3MnIHx8IG9wZW4gJiYgc2hvd1NlYXJjaDsgLy8gV2UgbWVhc3VyZSB3aWR0aCBhbmQgc2V0IHRvIHRoZSBpbnB1dCBpbW1lZGlhdGVseVxuXG4gIHVzZUxheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW5wdXRXaWR0aChtZWFzdXJlUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGgpO1xuICB9LCBbaW5wdXRWYWx1ZV0pOyAvLyA9PT09PT09PT09PT09PT09PT09PSBTZWxlY3Rpb24gPT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgZGlzcGxheVZhbHVlcyA9IHZhbHVlczsgLy8gQ3V0IGJ5IGBtYXhUYWdDb3VudGBcblxuICB2YXIgcmVzdENvdW50O1xuXG4gIGlmICh0eXBlb2YgbWF4VGFnQ291bnQgPT09ICdudW1iZXInKSB7XG4gICAgcmVzdENvdW50ID0gdmFsdWVzLmxlbmd0aCAtIG1heFRhZ0NvdW50O1xuICAgIGRpc3BsYXlWYWx1ZXMgPSB2YWx1ZXMuc2xpY2UoMCwgbWF4VGFnQ291bnQpO1xuICB9IC8vIFVwZGF0ZSBieSBgbWF4VGFnVGV4dExlbmd0aGBcblxuXG4gIGlmICh0eXBlb2YgbWF4VGFnVGV4dExlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICBkaXNwbGF5VmFsdWVzID0gZGlzcGxheVZhbHVlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJsYWJlbFwiXSk7XG5cbiAgICAgIHZhciBkaXNwbGF5TGFiZWwgPSBsYWJlbDtcblxuICAgICAgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGxhYmVsID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YXIgc3RyTGFiZWwgPSBTdHJpbmcoZGlzcGxheUxhYmVsKTtcblxuICAgICAgICBpZiAoc3RyTGFiZWwubGVuZ3RoID4gbWF4VGFnVGV4dExlbmd0aCkge1xuICAgICAgICAgIGRpc3BsYXlMYWJlbCA9IFwiXCIuY29uY2F0KHN0ckxhYmVsLnNsaWNlKDAsIG1heFRhZ1RleHRMZW5ndGgpLCBcIi4uLlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCByZXN0KSwge30sIHtcbiAgICAgICAgbGFiZWw6IGRpc3BsYXlMYWJlbFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0gLy8gRmlsbCByZXN0XG5cblxuICBpZiAocmVzdENvdW50ID4gMCkge1xuICAgIGRpc3BsYXlWYWx1ZXMucHVzaCh7XG4gICAgICBrZXk6IFJFU1RfVEFHX0tFWSxcbiAgICAgIGxhYmVsOiB0eXBlb2YgbWF4VGFnUGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgPyBtYXhUYWdQbGFjZWhvbGRlcih2YWx1ZXMuc2xpY2UobWF4VGFnQ291bnQpKSA6IG1heFRhZ1BsYWNlaG9sZGVyXG4gICAgfSk7XG4gIH1cblxuICB2YXIgc2VsZWN0aW9uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ1NTTW90aW9uTGlzdCwge1xuICAgIGNvbXBvbmVudDogZmFsc2UsXG4gICAga2V5czogZGlzcGxheVZhbHVlcyxcbiAgICBtb3Rpb25OYW1lOiBjaG9pY2VUcmFuc2l0aW9uTmFtZSxcbiAgICBtb3Rpb25BcHBlYXI6IG1vdGlvbkFwcGVhclxuICB9LCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxuICAgICAgICBsYWJlbCA9IF9yZWYyLmxhYmVsLFxuICAgICAgICB2YWx1ZSA9IF9yZWYyLnZhbHVlLFxuICAgICAgICBpdGVtRGlzYWJsZWQgPSBfcmVmMi5kaXNhYmxlZCxcbiAgICAgICAgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZSA9IF9yZWYyLnN0eWxlO1xuICAgIHZhciBtZXJnZWRLZXkgPSBrZXkgfHwgdmFsdWU7XG4gICAgdmFyIGNsb3NhYmxlID0gIWRpc2FibGVkICYmIGtleSAhPT0gUkVTVF9UQUdfS0VZICYmICFpdGVtRGlzYWJsZWQ7XG5cbiAgICB2YXIgb25Nb3VzZURvd24gPSBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICB2YXIgb25DbG9zZSA9IGZ1bmN0aW9uIG9uQ2xvc2UoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdCh2YWx1ZSwge1xuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdHlwZW9mIHRhZ1JlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogbWVyZ2VkS2V5LFxuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9LCB0YWdSZW5kZXIoe1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZGlzYWJsZWQ6IGl0ZW1EaXNhYmxlZCxcbiAgICAgIGNsb3NhYmxlOiBjbG9zYWJsZSxcbiAgICAgIG9uQ2xvc2U6IG9uQ2xvc2VcbiAgICB9KSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBrZXk6IG1lcmdlZEtleSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWl0ZW1cIiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24taXRlbS1kaXNhYmxlZFwiKSwgaXRlbURpc2FibGVkKSksXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWl0ZW0tY29udGVudFwiKVxuICAgIH0sIGxhYmVsKSwgY2xvc2FibGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc0J0biwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1pdGVtLXJlbW92ZVwiKSxcbiAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICAgIG9uQ2xpY2s6IG9uQ2xvc2UsXG4gICAgICBjdXN0b21pemVJY29uOiByZW1vdmVJY29uXG4gICAgfSwgXCJcXHhEN1wiKSk7XG4gIH0pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgc2VsZWN0aW9uTm9kZSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24tc2VhcmNoXCIpLFxuICAgIHN0eWxlOiB7XG4gICAgICB3aWR0aDogaW5wdXRXaWR0aFxuICAgIH1cbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgIHJlZjogaW5wdXRSZWYsXG4gICAgb3Blbjogb3BlbixcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBpZDogaWQsXG4gICAgaW5wdXRFbGVtZW50OiBudWxsLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICBlZGl0YWJsZTogaW5wdXRFZGl0YWJsZSxcbiAgICBhY2Nlc3NpYmlsaXR5SW5kZXg6IGFjY2Vzc2liaWxpdHlJbmRleCxcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcbiAgICBvbktleURvd246IG9uSW5wdXRLZXlEb3duLFxuICAgIG9uTW91c2VEb3duOiBvbklucHV0TW91c2VEb3duLFxuICAgIG9uQ2hhbmdlOiBvbklucHV0Q2hhbmdlLFxuICAgIG9uUGFzdGU6IG9uSW5wdXRQYXN0ZSxcbiAgICBvbkNvbXBvc2l0aW9uU3RhcnQ6IG9uSW5wdXRDb21wb3NpdGlvblN0YXJ0LFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IG9uSW5wdXRDb21wb3NpdGlvbkVuZCxcbiAgICB0YWJJbmRleDogdGFiSW5kZXgsXG4gICAgYXR0cnM6IHBpY2tBdHRycyhwcm9wcywgdHJ1ZSlcbiAgfSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICByZWY6IG1lYXN1cmVSZWYsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1zZWFyY2gtbWlycm9yXCIpLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZVxuICB9LCBpbnB1dFZhbHVlLCBcIlxceEEwXCIpKSwgIXZhbHVlcy5sZW5ndGggJiYgIWlucHV0VmFsdWUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3Rpb24tcGxhY2Vob2xkZXJcIilcbiAgfSwgcGxhY2Vob2xkZXIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFNlbGVjdG9yOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBpY2tBdHRycyBmcm9tIFwicmMtdXRpbC9lcy9waWNrQXR0cnNcIjtcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcblxudmFyIFNpbmdsZVNlbGVjdG9yID0gZnVuY3Rpb24gU2luZ2xlU2VsZWN0b3IocHJvcHMpIHtcbiAgdmFyIGlucHV0RWxlbWVudCA9IHByb3BzLmlucHV0RWxlbWVudCxcbiAgICAgIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSxcbiAgICAgIGFjY2Vzc2liaWxpdHlJbmRleCA9IHByb3BzLmFjY2Vzc2liaWxpdHlJbmRleCxcbiAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXMsXG4gICAgICBwbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXggPSBwcm9wcy50YWJJbmRleCxcbiAgICAgIHNob3dTZWFyY2ggPSBwcm9wcy5zaG93U2VhcmNoLFxuICAgICAgc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgIGFjdGl2ZVZhbHVlID0gcHJvcHMuYWN0aXZlVmFsdWUsXG4gICAgICBvbklucHV0S2V5RG93biA9IHByb3BzLm9uSW5wdXRLZXlEb3duLFxuICAgICAgb25JbnB1dE1vdXNlRG93biA9IHByb3BzLm9uSW5wdXRNb3VzZURvd24sXG4gICAgICBvbklucHV0Q2hhbmdlID0gcHJvcHMub25JbnB1dENoYW5nZSxcbiAgICAgIG9uSW5wdXRQYXN0ZSA9IHByb3BzLm9uSW5wdXRQYXN0ZSxcbiAgICAgIG9uSW5wdXRDb21wb3NpdGlvblN0YXJ0ID0gcHJvcHMub25JbnB1dENvbXBvc2l0aW9uU3RhcnQsXG4gICAgICBvbklucHV0Q29tcG9zaXRpb25FbmQgPSBwcm9wcy5vbklucHV0Q29tcG9zaXRpb25FbmQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgaW5wdXRDaGFuZ2VkID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldElucHV0Q2hhbmdlZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGNvbWJvYm94ID0gbW9kZSA9PT0gJ2NvbWJvYm94JztcbiAgdmFyIGlucHV0RWRpdGFibGUgPSBjb21ib2JveCB8fCBzaG93U2VhcmNoO1xuICB2YXIgaXRlbSA9IHZhbHVlc1swXTtcbiAgdmFyIGlucHV0VmFsdWUgPSBzZWFyY2hWYWx1ZSB8fCAnJztcblxuICBpZiAoY29tYm9ib3ggJiYgYWN0aXZlVmFsdWUgJiYgIWlucHV0Q2hhbmdlZCkge1xuICAgIGlucHV0VmFsdWUgPSBhY3RpdmVWYWx1ZTtcbiAgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNvbWJvYm94KSB7XG4gICAgICBzZXRJbnB1dENoYW5nZWQoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2NvbWJvYm94LCBhY3RpdmVWYWx1ZV0pOyAvLyBOb3Qgc2hvdyB0ZXh0IHdoZW4gY2xvc2VkIGV4cGVjdCBjb21ib2JveCBtb2RlXG5cbiAgdmFyIGhhc1RleHRJbnB1dCA9IG1vZGUgIT09ICdjb21ib2JveCcgJiYgIW9wZW4gPyBmYWxzZSA6ICEhaW5wdXRWYWx1ZTtcbiAgdmFyIHRpdGxlID0gaXRlbSAmJiAodHlwZW9mIGl0ZW0ubGFiZWwgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBpdGVtLmxhYmVsID09PSAnbnVtYmVyJykgPyBpdGVtLmxhYmVsLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1zZWFyY2hcIilcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgIHJlZjogaW5wdXRSZWYsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgaWQ6IGlkLFxuICAgIG9wZW46IG9wZW4sXG4gICAgaW5wdXRFbGVtZW50OiBpbnB1dEVsZW1lbnQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGF1dG9Db21wbGV0ZTogYXV0b0NvbXBsZXRlLFxuICAgIGVkaXRhYmxlOiBpbnB1dEVkaXRhYmxlLFxuICAgIGFjY2Vzc2liaWxpdHlJbmRleDogYWNjZXNzaWJpbGl0eUluZGV4LFxuICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgIG9uS2V5RG93bjogb25JbnB1dEtleURvd24sXG4gICAgb25Nb3VzZURvd246IG9uSW5wdXRNb3VzZURvd24sXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHNldElucHV0Q2hhbmdlZCh0cnVlKTtcbiAgICAgIG9uSW5wdXRDaGFuZ2UoZSk7XG4gICAgfSxcbiAgICBvblBhc3RlOiBvbklucHV0UGFzdGUsXG4gICAgb25Db21wb3NpdGlvblN0YXJ0OiBvbklucHV0Q29tcG9zaXRpb25TdGFydCxcbiAgICBvbkNvbXBvc2l0aW9uRW5kOiBvbklucHV0Q29tcG9zaXRpb25FbmQsXG4gICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgIGF0dHJzOiBwaWNrQXR0cnMocHJvcHMsIHRydWUpXG4gIH0pKSwgIWNvbWJvYm94ICYmIGl0ZW0gJiYgIWhhc1RleHRJbnB1dCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1pdGVtXCIpLFxuICAgIHRpdGxlOiB0aXRsZVxuICB9LCBpdGVtLmxhYmVsKSwgIWl0ZW0gJiYgIWhhc1RleHRJbnB1dCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvbi1wbGFjZWhvbGRlclwiKVxuICB9LCBwbGFjZWhvbGRlcikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlU2VsZWN0b3I7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5cbi8qKlxuICogQ3Vyc29yIHJ1bGU6XG4gKiAxLiBPbmx5IGBzaG93U2VhcmNoYCBlbmFibGVkXG4gKiAyLiBPbmx5IGBvcGVuYCBpcyBgdHJ1ZWBcbiAqIDMuIFdoZW4gdHlwaW5nLCBzZXQgYG9wZW5gIHRvIGB0cnVlYCB3aGljaCBoaXQgcnVsZSBvZiAyXG4gKlxuICogQWNjZXNzaWJpbGl0eTpcbiAqIC0gaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy9leGFtcGxlcy9jb21ib2JveC9hcmlhMS4xcGF0dGVybi9saXN0Ym94LWNvbWJvLmh0bWxcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IE11bHRpcGxlU2VsZWN0b3IgZnJvbSAnLi9NdWx0aXBsZVNlbGVjdG9yJztcbmltcG9ydCBTaW5nbGVTZWxlY3RvciBmcm9tICcuL1NpbmdsZVNlbGVjdG9yJztcbmltcG9ydCB1c2VMb2NrIGZyb20gJy4uL2hvb2tzL3VzZUxvY2snO1xuXG52YXIgU2VsZWN0b3IgPSBmdW5jdGlvbiBTZWxlY3Rvcihwcm9wcywgcmVmKSB7XG4gIHZhciBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGNvbXBvc2l0aW9uU3RhdHVzUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG1vZGUgPSBwcm9wcy5tb2RlLFxuICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICB0b2tlbldpdGhFbnRlciA9IHByb3BzLnRva2VuV2l0aEVudGVyLFxuICAgICAgb25TZWFyY2ggPSBwcm9wcy5vblNlYXJjaCxcbiAgICAgIG9uU2VhcmNoU3VibWl0ID0gcHJvcHMub25TZWFyY2hTdWJtaXQsXG4gICAgICBvblRvZ2dsZU9wZW4gPSBwcm9wcy5vblRvZ2dsZU9wZW4sXG4gICAgICBvbklucHV0S2V5RG93biA9IHByb3BzLm9uSW5wdXRLZXlEb3duLFxuICAgICAgZG9tUmVmID0gcHJvcHMuZG9tUmVmOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb2N1czogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIH0sXG4gICAgICBibHVyOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PSBJbnB1dCA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIF91c2VMb2NrID0gdXNlTG9jaygwKSxcbiAgICAgIF91c2VMb2NrMiA9IF9zbGljZWRUb0FycmF5KF91c2VMb2NrLCAyKSxcbiAgICAgIGdldElucHV0TW91c2VEb3duID0gX3VzZUxvY2syWzBdLFxuICAgICAgc2V0SW5wdXRNb3VzZURvd24gPSBfdXNlTG9jazJbMV07XG5cbiAgdmFyIG9uSW50ZXJuYWxJbnB1dEtleURvd24gPSBmdW5jdGlvbiBvbkludGVybmFsSW5wdXRLZXlEb3duKGV2ZW50KSB7XG4gICAgdmFyIHdoaWNoID0gZXZlbnQud2hpY2g7XG5cbiAgICBpZiAod2hpY2ggPT09IEtleUNvZGUuVVAgfHwgd2hpY2ggPT09IEtleUNvZGUuRE9XTikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAob25JbnB1dEtleURvd24pIHtcbiAgICAgIG9uSW5wdXRLZXlEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAod2hpY2ggPT09IEtleUNvZGUuRU5URVIgJiYgbW9kZSA9PT0gJ3RhZ3MnICYmICFjb21wb3NpdGlvblN0YXR1c1JlZi5jdXJyZW50ICYmICFvcGVuKSB7XG4gICAgICAvLyBXaGVuIG1lbnUgaXNuJ3Qgb3BlbiwgT3B0aW9uTGlzdCB3b24ndCB0cmlnZ2VyIGEgdmFsdWUgY2hhbmdlXG4gICAgICAvLyBTbyB3aGVuIGVudGVyIGlzIHByZXNzZWQsIHRoZSB0YWcncyBpbnB1dCB2YWx1ZSBzaG91bGQgYmUgZW1pdHRlZCBoZXJlIHRvIGxldCBzZWxlY3RvciBrbm93XG4gICAgICBvblNlYXJjaFN1Ym1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghW0tleUNvZGUuU0hJRlQsIEtleUNvZGUuVEFCLCBLZXlDb2RlLkJBQ0tTUEFDRSwgS2V5Q29kZS5FU0NdLmluY2x1ZGVzKHdoaWNoKSkge1xuICAgICAgb25Ub2dnbGVPcGVuKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIFdlIGNhbiBub3QgdXNlIGBmaW5kRE9NTm9kZWAgc2luZSBpdCB3aWxsIGdldCB3YXJuaW5nLFxuICAgKiBoYXZlIHRvIHVzZSB0aW1lciB0byBjaGVjayBpZiBpcyBpbnB1dCBlbGVtZW50LlxuICAgKi9cblxuXG4gIHZhciBvbkludGVybmFsSW5wdXRNb3VzZURvd24gPSBmdW5jdGlvbiBvbkludGVybmFsSW5wdXRNb3VzZURvd24oKSB7XG4gICAgc2V0SW5wdXRNb3VzZURvd24odHJ1ZSk7XG4gIH07IC8vIFdoZW4gcGFzdGUgY29tZSwgaWdub3JlIG5leHQgb25DaGFuZ2VcblxuXG4gIHZhciBwYXN0ZWRUZXh0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciB0cmlnZ2VyT25TZWFyY2ggPSBmdW5jdGlvbiB0cmlnZ2VyT25TZWFyY2godmFsdWUpIHtcbiAgICBpZiAob25TZWFyY2godmFsdWUsIHRydWUsIGNvbXBvc2l0aW9uU3RhdHVzUmVmLmN1cnJlbnQpICE9PSBmYWxzZSkge1xuICAgICAgb25Ub2dnbGVPcGVuKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25JbnB1dENvbXBvc2l0aW9uU3RhcnQgPSBmdW5jdGlvbiBvbklucHV0Q29tcG9zaXRpb25TdGFydCgpIHtcbiAgICBjb21wb3NpdGlvblN0YXR1c1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfTtcblxuICB2YXIgb25JbnB1dENvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gb25JbnB1dENvbXBvc2l0aW9uRW5kKCkge1xuICAgIGNvbXBvc2l0aW9uU3RhdHVzUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfTtcblxuICB2YXIgb25JbnB1dENoYW5nZSA9IGZ1bmN0aW9uIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7IC8vIFBhc3RlZCB0ZXh0IHNob3VsZCByZXBsYWNlIGJhY2sgdG8gb3JpZ2luIGNvbnRlbnRcblxuICAgIGlmICh0b2tlbldpdGhFbnRlciAmJiBwYXN0ZWRUZXh0UmVmLmN1cnJlbnQgJiYgL1tcXHJcXG5dLy50ZXN0KHBhc3RlZFRleHRSZWYuY3VycmVudCkpIHtcbiAgICAgIC8vIENSTEYgd2lsbCBiZSB0cmVhdGVkIGFzIGEgc2luZ2xlIHNwYWNlIGZvciBpbnB1dCBlbGVtZW50XG4gICAgICB2YXIgcmVwbGFjZWRUZXh0ID0gcGFzdGVkVGV4dFJlZi5jdXJyZW50LnJlcGxhY2UoL1xcclxcbi9nLCAnICcpLnJlcGxhY2UoL1tcXHJcXG5dL2csICcgJyk7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVwbGFjZWRUZXh0LCBwYXN0ZWRUZXh0UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIHBhc3RlZFRleHRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgdHJpZ2dlck9uU2VhcmNoKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgb25JbnB1dFBhc3RlID0gZnVuY3Rpb24gb25JbnB1dFBhc3RlKGUpIHtcbiAgICB2YXIgY2xpcGJvYXJkRGF0YSA9IGUuY2xpcGJvYXJkRGF0YTtcbiAgICB2YXIgdmFsdWUgPSBjbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQnKTtcbiAgICBwYXN0ZWRUZXh0UmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfTtcblxuICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soX3JlZikge1xuICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcblxuICAgIGlmICh0YXJnZXQgIT09IGlucHV0UmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIFNob3VsZCBmb2N1cyBpbnB1dCBpZiBjbGljayB0aGUgc2VsZWN0b3JcbiAgICAgIHZhciBpc0lFID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBvbk1vdXNlRG93biA9IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdmFyIGlucHV0TW91c2VEb3duID0gZ2V0SW5wdXRNb3VzZURvd24oKTtcblxuICAgIGlmIChldmVudC50YXJnZXQgIT09IGlucHV0UmVmLmN1cnJlbnQgJiYgIWlucHV0TW91c2VEb3duKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChtb2RlICE9PSAnY29tYm9ib3gnICYmICghc2hvd1NlYXJjaCB8fCAhaW5wdXRNb3VzZURvd24pIHx8ICFvcGVuKSB7XG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBvblNlYXJjaCgnJywgdHJ1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBvblRvZ2dsZU9wZW4oKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09IElubmVyIFNlbGVjdG9yID09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIHNoYXJlZFByb3BzID0ge1xuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvbklucHV0S2V5RG93bjogb25JbnRlcm5hbElucHV0S2V5RG93bixcbiAgICBvbklucHV0TW91c2VEb3duOiBvbkludGVybmFsSW5wdXRNb3VzZURvd24sXG4gICAgb25JbnB1dENoYW5nZTogb25JbnB1dENoYW5nZSxcbiAgICBvbklucHV0UGFzdGU6IG9uSW5wdXRQYXN0ZSxcbiAgICBvbklucHV0Q29tcG9zaXRpb25TdGFydDogb25JbnB1dENvbXBvc2l0aW9uU3RhcnQsXG4gICAgb25JbnB1dENvbXBvc2l0aW9uRW5kOiBvbklucHV0Q29tcG9zaXRpb25FbmRcbiAgfTtcbiAgdmFyIHNlbGVjdE5vZGUgPSBtdWx0aXBsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlwbGVTZWxlY3RvciwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHNoYXJlZFByb3BzKSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFNpbmdsZVNlbGVjdG9yLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywgc2hhcmVkUHJvcHMpKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogZG9tUmVmLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3RvclwiKSxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93blxuICB9LCBzZWxlY3ROb2RlKTtcbn07XG5cbnZhciBGb3J3YXJkU2VsZWN0b3IgPSBSZWFjdC5mb3J3YXJkUmVmKFNlbGVjdG9yKTtcbkZvcndhcmRTZWxlY3Rvci5kaXNwbGF5TmFtZSA9ICdTZWxlY3Rvcic7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkU2VsZWN0b3I7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBUcmFuc0J0biA9IGZ1bmN0aW9uIFRyYW5zQnRuKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY3VzdG9taXplSWNvbiA9IF9yZWYuY3VzdG9taXplSWNvbixcbiAgICAgIGN1c3RvbWl6ZUljb25Qcm9wcyA9IF9yZWYuY3VzdG9taXplSWNvblByb3BzLFxuICAgICAgX29uTW91c2VEb3duID0gX3JlZi5vbk1vdXNlRG93bixcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBpY29uO1xuXG4gIGlmICh0eXBlb2YgY3VzdG9taXplSWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGljb24gPSBjdXN0b21pemVJY29uKGN1c3RvbWl6ZUljb25Qcm9wcyk7XG4gIH0gZWxzZSB7XG4gICAgaWNvbiA9IGN1c3RvbWl6ZUljb247XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKF9vbk1vdXNlRG93bikge1xuICAgICAgICBfb25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3R5bGU6IHtcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIFdlYmtpdFVzZXJTZWxlY3Q6ICdub25lJ1xuICAgIH0sXG4gICAgdW5zZWxlY3RhYmxlOiBcIm9uXCIsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWVcbiAgfSwgaWNvbiAhPT0gdW5kZWZpbmVkID8gaWNvbiA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChjbHMsIFwiLWljb25cIik7XG4gICAgfSkpXG4gIH0sIGNoaWxkcmVuKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc0J0bjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5cbi8qKlxuICogVG8gbWF0Y2ggYWNjZXNzaWJpbGl0eSByZXF1aXJlbWVudCwgd2UgYWx3YXlzIHByb3ZpZGUgYW4gaW5wdXQgaW4gdGhlIGNvbXBvbmVudC5cbiAqIE90aGVyIGVsZW1lbnQgd2lsbCBub3Qgc2V0IGB0YWJJbmRleGAgdG8gYXZvaWQgYG9uQmx1cmAgc2VxdWVuY2UgcHJvYmxlbS5cbiAqIEZvciBmb2N1c2VkIHNlbGVjdCwgd2Ugc2V0IGBhcmlhLWxpdmU9XCJwb2xpdGVcImAgdG8gdXBkYXRlIHRoZSBhY2Nlc3NpYmlsaXR5IGNvbnRlbnQuXG4gKlxuICogcmVmOlxuICogLSBrZXlib2FyZDogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL1JvbGVzL2xpc3Rib3hfcm9sZSNLZXlib2FyZF9pbnRlcmFjdGlvbnNcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdXNlTWVyZ2VkU3RhdGUgZnJvbSBcInJjLXV0aWwvZXMvaG9va3MvdXNlTWVyZ2VkU3RhdGVcIjtcbmltcG9ydCBTZWxlY3RvciBmcm9tICcuL1NlbGVjdG9yJztcbmltcG9ydCBTZWxlY3RUcmlnZ2VyIGZyb20gJy4vU2VsZWN0VHJpZ2dlcic7XG5pbXBvcnQgeyBJTlRFUk5BTF9QUk9QU19NQVJLIH0gZnJvbSAnLi9pbnRlcmZhY2UvZ2VuZXJhdG9yJztcbmltcG9ydCB7IHRvSW5uZXJWYWx1ZSwgdG9PdXRlclZhbHVlcywgcmVtb3ZlTGFzdEVuYWJsZWRWYWx1ZSwgZ2V0VVVJRCB9IGZyb20gJy4vdXRpbHMvY29tbW9uVXRpbCc7XG5pbXBvcnQgVHJhbnNCdG4gZnJvbSAnLi9UcmFuc0J0bic7XG5pbXBvcnQgdXNlTG9jayBmcm9tICcuL2hvb2tzL3VzZUxvY2snO1xuaW1wb3J0IHVzZURlbGF5UmVzZXQgZnJvbSAnLi9ob29rcy91c2VEZWxheVJlc2V0JztcbmltcG9ydCB1c2VMYXlvdXRFZmZlY3QgZnJvbSAnLi9ob29rcy91c2VMYXlvdXRFZmZlY3QnO1xuaW1wb3J0IHsgZ2V0U2VwYXJhdGVkQ29udGVudCB9IGZyb20gJy4vdXRpbHMvdmFsdWVVdGlsJztcbmltcG9ydCB1c2VTZWxlY3RUcmlnZ2VyQ29udHJvbCBmcm9tICcuL2hvb2tzL3VzZVNlbGVjdFRyaWdnZXJDb250cm9sJztcbmltcG9ydCB1c2VDYWNoZURpc3BsYXlWYWx1ZSBmcm9tICcuL2hvb2tzL3VzZUNhY2hlRGlzcGxheVZhbHVlJztcbmltcG9ydCB1c2VDYWNoZU9wdGlvbnMgZnJvbSAnLi9ob29rcy91c2VDYWNoZU9wdGlvbnMnO1xudmFyIERFRkFVTFRfT01JVF9QUk9QUyA9IFsncmVtb3ZlSWNvbicsICdwbGFjZWhvbGRlcicsICdhdXRvRm9jdXMnLCAnbWF4VGFnQ291bnQnLCAnbWF4VGFnVGV4dExlbmd0aCcsICdtYXhUYWdQbGFjZWhvbGRlcicsICdjaG9pY2VUcmFuc2l0aW9uTmFtZScsICdvbklucHV0S2V5RG93biddO1xuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGluIGludGVybmFsIHVzYWdlLlxuICogRG8gbm90IHVzZSBpdCBpbiB5b3VyIHByb2QgZW52IHNpbmNlIHdlIG1heSByZWZhY3RvciB0aGlzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3IoY29uZmlnKSB7XG4gIHZhciBkZWZhdWx0UHJlZml4Q2xzID0gY29uZmlnLnByZWZpeENscyxcbiAgICAgIE9wdGlvbkxpc3QgPSBjb25maWcuY29tcG9uZW50cy5vcHRpb25MaXN0LFxuICAgICAgY29udmVydENoaWxkcmVuVG9EYXRhID0gY29uZmlnLmNvbnZlcnRDaGlsZHJlblRvRGF0YSxcbiAgICAgIGZsYXR0ZW5PcHRpb25zID0gY29uZmlnLmZsYXR0ZW5PcHRpb25zLFxuICAgICAgZ2V0TGFiZWxlZFZhbHVlID0gY29uZmlnLmdldExhYmVsZWRWYWx1ZSxcbiAgICAgIGZpbHRlck9wdGlvbnMgPSBjb25maWcuZmlsdGVyT3B0aW9ucyxcbiAgICAgIGlzVmFsdWVEaXNhYmxlZCA9IGNvbmZpZy5pc1ZhbHVlRGlzYWJsZWQsXG4gICAgICBmaW5kVmFsdWVPcHRpb24gPSBjb25maWcuZmluZFZhbHVlT3B0aW9uLFxuICAgICAgd2FybmluZ1Byb3BzID0gY29uZmlnLndhcm5pbmdQcm9wcyxcbiAgICAgIGZpbGxPcHRpb25zV2l0aE1pc3NpbmdWYWx1ZSA9IGNvbmZpZy5maWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUsXG4gICAgICBvbWl0RE9NUHJvcHMgPSBjb25maWcub21pdERPTVByb3BzOyAvLyBVc2UgcmF3IGRlZmluZSBzaW5jZSBgUmVhY3QuRkNgIG5vdCBzdXBwb3J0IGdlbmVyaWNcblxuICBmdW5jdGlvbiBTZWxlY3QocHJvcHMsIHJlZikge1xuICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gZGVmYXVsdFByZWZpeENscyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICAgIGRlZmF1bHRPcGVuID0gcHJvcHMuZGVmYXVsdE9wZW4sXG4gICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBsYWJlbEluVmFsdWUgPSBwcm9wcy5sYWJlbEluVmFsdWUsXG4gICAgICAgIHNob3dTZWFyY2ggPSBwcm9wcy5zaG93U2VhcmNoLFxuICAgICAgICBpbnB1dFZhbHVlID0gcHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgICAgc2VhcmNoVmFsdWUgPSBwcm9wcy5zZWFyY2hWYWx1ZSxcbiAgICAgICAgZmlsdGVyT3B0aW9uID0gcHJvcHMuZmlsdGVyT3B0aW9uLFxuICAgICAgICBfcHJvcHMkb3B0aW9uRmlsdGVyUHIgPSBwcm9wcy5vcHRpb25GaWx0ZXJQcm9wLFxuICAgICAgICBvcHRpb25GaWx0ZXJQcm9wID0gX3Byb3BzJG9wdGlvbkZpbHRlclByID09PSB2b2lkIDAgPyAndmFsdWUnIDogX3Byb3BzJG9wdGlvbkZpbHRlclByLFxuICAgICAgICBfcHJvcHMkYXV0b0NsZWFyU2VhcmMgPSBwcm9wcy5hdXRvQ2xlYXJTZWFyY2hWYWx1ZSxcbiAgICAgICAgYXV0b0NsZWFyU2VhcmNoVmFsdWUgPSBfcHJvcHMkYXV0b0NsZWFyU2VhcmMgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkYXV0b0NsZWFyU2VhcmMsXG4gICAgICAgIG9uU2VhcmNoID0gcHJvcHMub25TZWFyY2gsXG4gICAgICAgIGFsbG93Q2xlYXIgPSBwcm9wcy5hbGxvd0NsZWFyLFxuICAgICAgICBjbGVhckljb24gPSBwcm9wcy5jbGVhckljb24sXG4gICAgICAgIHNob3dBcnJvdyA9IHByb3BzLnNob3dBcnJvdyxcbiAgICAgICAgaW5wdXRJY29uID0gcHJvcHMuaW5wdXRJY29uLFxuICAgICAgICBtZW51SXRlbVNlbGVjdGVkSWNvbiA9IHByb3BzLm1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBsb2FkaW5nID0gcHJvcHMubG9hZGluZyxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLFxuICAgICAgICBfcHJvcHMkbm90Rm91bmRDb250ZW4gPSBwcm9wcy5ub3RGb3VuZENvbnRlbnQsXG4gICAgICAgIG5vdEZvdW5kQ29udGVudCA9IF9wcm9wcyRub3RGb3VuZENvbnRlbiA9PT0gdm9pZCAwID8gJ05vdCBGb3VuZCcgOiBfcHJvcHMkbm90Rm91bmRDb250ZW4sXG4gICAgICAgIG9wdGlvbkxhYmVsUHJvcCA9IHByb3BzLm9wdGlvbkxhYmVsUHJvcCxcbiAgICAgICAgYmFja2ZpbGwgPSBwcm9wcy5iYWNrZmlsbCxcbiAgICAgICAgZ2V0SW5wdXRFbGVtZW50ID0gcHJvcHMuZ2V0SW5wdXRFbGVtZW50LFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICBfcHJvcHMkbGlzdEhlaWdodCA9IHByb3BzLmxpc3RIZWlnaHQsXG4gICAgICAgIGxpc3RIZWlnaHQgPSBfcHJvcHMkbGlzdEhlaWdodCA9PT0gdm9pZCAwID8gMjAwIDogX3Byb3BzJGxpc3RIZWlnaHQsXG4gICAgICAgIF9wcm9wcyRsaXN0SXRlbUhlaWdodCA9IHByb3BzLmxpc3RJdGVtSGVpZ2h0LFxuICAgICAgICBsaXN0SXRlbUhlaWdodCA9IF9wcm9wcyRsaXN0SXRlbUhlaWdodCA9PT0gdm9pZCAwID8gMjAgOiBfcHJvcHMkbGlzdEl0ZW1IZWlnaHQsXG4gICAgICAgIGFuaW1hdGlvbiA9IHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgdmlydHVhbCA9IHByb3BzLnZpcnR1YWwsXG4gICAgICAgIGRyb3Bkb3duU3R5bGUgPSBwcm9wcy5kcm9wZG93blN0eWxlLFxuICAgICAgICBkcm9wZG93bkNsYXNzTmFtZSA9IHByb3BzLmRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICAgIGRyb3Bkb3duUmVuZGVyID0gcHJvcHMuZHJvcGRvd25SZW5kZXIsXG4gICAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgICBfcHJvcHMkc2hvd0FjdGlvbiA9IHByb3BzLnNob3dBY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMkc2hvd0FjdGlvbiA9PT0gdm9pZCAwID8gW10gOiBfcHJvcHMkc2hvd0FjdGlvbixcbiAgICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICB0b2tlblNlcGFyYXRvcnMgPSBwcm9wcy50b2tlblNlcGFyYXRvcnMsXG4gICAgICAgIHRhZ1JlbmRlciA9IHByb3BzLnRhZ1JlbmRlcixcbiAgICAgICAgb25Qb3B1cFNjcm9sbCA9IHByb3BzLm9uUG9wdXBTY3JvbGwsXG4gICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICAgIG9uTW91c2VEb3duID0gcHJvcHMub25Nb3VzZURvd24sXG4gICAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICAgIG9uU2VsZWN0ID0gcHJvcHMub25TZWxlY3QsXG4gICAgICAgIG9uRGVzZWxlY3QgPSBwcm9wcy5vbkRlc2VsZWN0LFxuICAgICAgICBvbkNsZWFyID0gcHJvcHMub25DbGVhcixcbiAgICAgICAgX3Byb3BzJGludGVybmFsUHJvcHMgPSBwcm9wcy5pbnRlcm5hbFByb3BzLFxuICAgICAgICBpbnRlcm5hbFByb3BzID0gX3Byb3BzJGludGVybmFsUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJGludGVybmFsUHJvcHMsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiaWRcIiwgXCJvcGVuXCIsIFwiZGVmYXVsdE9wZW5cIiwgXCJvcHRpb25zXCIsIFwiY2hpbGRyZW5cIiwgXCJtb2RlXCIsIFwidmFsdWVcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJsYWJlbEluVmFsdWVcIiwgXCJzaG93U2VhcmNoXCIsIFwiaW5wdXRWYWx1ZVwiLCBcInNlYXJjaFZhbHVlXCIsIFwiZmlsdGVyT3B0aW9uXCIsIFwib3B0aW9uRmlsdGVyUHJvcFwiLCBcImF1dG9DbGVhclNlYXJjaFZhbHVlXCIsIFwib25TZWFyY2hcIiwgXCJhbGxvd0NsZWFyXCIsIFwiY2xlYXJJY29uXCIsIFwic2hvd0Fycm93XCIsIFwiaW5wdXRJY29uXCIsIFwibWVudUl0ZW1TZWxlY3RlZEljb25cIiwgXCJkaXNhYmxlZFwiLCBcImxvYWRpbmdcIiwgXCJkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIiwgXCJub3RGb3VuZENvbnRlbnRcIiwgXCJvcHRpb25MYWJlbFByb3BcIiwgXCJiYWNrZmlsbFwiLCBcImdldElucHV0RWxlbWVudFwiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwibGlzdEhlaWdodFwiLCBcImxpc3RJdGVtSGVpZ2h0XCIsIFwiYW5pbWF0aW9uXCIsIFwidHJhbnNpdGlvbk5hbWVcIiwgXCJ2aXJ0dWFsXCIsIFwiZHJvcGRvd25TdHlsZVwiLCBcImRyb3Bkb3duQ2xhc3NOYW1lXCIsIFwiZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXCIsIFwiZHJvcGRvd25SZW5kZXJcIiwgXCJkcm9wZG93bkFsaWduXCIsIFwic2hvd0FjdGlvblwiLCBcImRpcmVjdGlvblwiLCBcInRva2VuU2VwYXJhdG9yc1wiLCBcInRhZ1JlbmRlclwiLCBcIm9uUG9wdXBTY3JvbGxcIiwgXCJvbkRyb3Bkb3duVmlzaWJsZUNoYW5nZVwiLCBcIm9uRm9jdXNcIiwgXCJvbkJsdXJcIiwgXCJvbktleVVwXCIsIFwib25LZXlEb3duXCIsIFwib25Nb3VzZURvd25cIiwgXCJvbkNoYW5nZVwiLCBcIm9uU2VsZWN0XCIsIFwib25EZXNlbGVjdFwiLCBcIm9uQ2xlYXJcIiwgXCJpbnRlcm5hbFByb3BzXCJdKTtcblxuICAgIHZhciB1c2VJbnRlcm5hbFByb3BzID0gaW50ZXJuYWxQcm9wcy5tYXJrID09PSBJTlRFUk5BTF9QUk9QU19NQVJLO1xuICAgIHZhciBkb21Qcm9wcyA9IG9taXRET01Qcm9wcyA/IG9taXRET01Qcm9wcyhyZXN0UHJvcHMpIDogcmVzdFByb3BzO1xuICAgIERFRkFVTFRfT01JVF9QUk9QUy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBkZWxldGUgZG9tUHJvcHNbcHJvcF07XG4gICAgfSk7XG4gICAgdmFyIGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgdHJpZ2dlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgc2VsZWN0b3JSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIGxpc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRva2VuV2l0aEVudGVyID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHRva2VuU2VwYXJhdG9ycyB8fCBbXSkuc29tZShmdW5jdGlvbiAodG9rZW5TZXBhcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIFsnXFxuJywgJ1xcclxcbiddLmluY2x1ZGVzKHRva2VuU2VwYXJhdG9yKTtcbiAgICAgIH0pO1xuICAgIH0sIFt0b2tlblNlcGFyYXRvcnNdKTtcbiAgICAvKiogVXNlZCBmb3IgY29tcG9uZW50IGZvY3VzZWQgbWFuYWdlbWVudCAqL1xuXG4gICAgdmFyIF91c2VEZWxheVJlc2V0ID0gdXNlRGVsYXlSZXNldCgpLFxuICAgICAgICBfdXNlRGVsYXlSZXNldDIgPSBfc2xpY2VkVG9BcnJheShfdXNlRGVsYXlSZXNldCwgMyksXG4gICAgICAgIG1vY2tGb2N1c2VkID0gX3VzZURlbGF5UmVzZXQyWzBdLFxuICAgICAgICBzZXRNb2NrRm9jdXNlZCA9IF91c2VEZWxheVJlc2V0MlsxXSxcbiAgICAgICAgY2FuY2VsU2V0TW9ja0ZvY3VzZWQgPSBfdXNlRGVsYXlSZXNldDJbMl07IC8vIElubmVyIGlkIGZvciBhY2Nlc3NpYmlsaXR5IHVzYWdlLiBPbmx5IHdvcmsgaW4gY2xpZW50IHNpZGVcblxuXG4gICAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgICBpbm5lcklkID0gX3VzZVN0YXRlMlswXSxcbiAgICAgICAgc2V0SW5uZXJJZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SW5uZXJJZChcInJjX3NlbGVjdF9cIi5jb25jYXQoZ2V0VVVJRCgpKSk7XG4gICAgfSwgW10pO1xuICAgIHZhciBtZXJnZWRJZCA9IGlkIHx8IGlubmVySWQ7IC8vIG9wdGlvbkxhYmVsUHJvcFxuXG4gICAgdmFyIG1lcmdlZE9wdGlvbkxhYmVsUHJvcCA9IG9wdGlvbkxhYmVsUHJvcDtcblxuICAgIGlmIChtZXJnZWRPcHRpb25MYWJlbFByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVyZ2VkT3B0aW9uTGFiZWxQcm9wID0gb3B0aW9ucyA/ICdsYWJlbCcgOiAnY2hpbGRyZW4nO1xuICAgIH0gLy8gbGFiZWxJblZhbHVlXG5cblxuICAgIHZhciBtZXJnZWRMYWJlbEluVmFsdWUgPSBtb2RlID09PSAnY29tYm9ib3gnID8gZmFsc2UgOiBsYWJlbEluVmFsdWU7XG4gICAgdmFyIGlzTXVsdGlwbGUgPSBtb2RlID09PSAndGFncycgfHwgbW9kZSA9PT0gJ211bHRpcGxlJztcbiAgICB2YXIgbWVyZ2VkU2hvd1NlYXJjaCA9IHNob3dTZWFyY2ggIT09IHVuZGVmaW5lZCA/IHNob3dTZWFyY2ggOiBpc011bHRpcGxlIHx8IG1vZGUgPT09ICdjb21ib2JveCc7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdmFyIHNlbGVjdG9yRG9tUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb2N1czogc2VsZWN0b3JSZWYuY3VycmVudC5mb2N1cyxcbiAgICAgICAgYmx1cjogc2VsZWN0b3JSZWYuY3VycmVudC5ibHVyXG4gICAgICB9O1xuICAgIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBWYWx1ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSB1c2VNZXJnZWRTdGF0ZShkZWZhdWx0VmFsdWUsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pLFxuICAgICAgICBfdXNlTWVyZ2VkU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgICAgbWVyZ2VkVmFsdWUgPSBfdXNlTWVyZ2VkU3RhdGUyWzBdLFxuICAgICAgICBzZXRNZXJnZWRWYWx1ZSA9IF91c2VNZXJnZWRTdGF0ZTJbMV07XG4gICAgLyoqIFVuaXF1ZSByYXcgdmFsdWVzICovXG5cblxuICAgIHZhciBtZXJnZWRSYXdWYWx1ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRvSW5uZXJWYWx1ZShtZXJnZWRWYWx1ZSwge1xuICAgICAgICBsYWJlbEluVmFsdWU6IG1lcmdlZExhYmVsSW5WYWx1ZSxcbiAgICAgICAgY29tYm9ib3g6IG1vZGUgPT09ICdjb21ib2JveCdcbiAgICAgIH0pO1xuICAgIH0sIFttZXJnZWRWYWx1ZSwgbWVyZ2VkTGFiZWxJblZhbHVlXSk7XG4gICAgLyoqIFdlIGNhY2hlIGEgc2V0IG9mIHJhdyB2YWx1ZXMgdG8gc3BlZWQgdXAgY2hlY2sgKi9cblxuICAgIHZhciByYXdWYWx1ZXMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgU2V0KG1lcmdlZFJhd1ZhbHVlKTtcbiAgICB9LCBbbWVyZ2VkUmF3VmFsdWVdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gT3B0aW9uID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gU2V0IGJ5IG9wdGlvbiBsaXN0IGFjdGl2ZSwgaXQgd2lsbCBtZXJnZSBpbnRvIHNlYXJjaCBpbnB1dCB3aGVuIG1vZGUgaXMgYGNvbWJvYm94YFxuXG4gICAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgICBhY3RpdmVWYWx1ZSA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICAgIHNldEFjdGl2ZVZhbHVlID0gX3VzZVN0YXRlNFsxXTtcblxuICAgIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoJycpLFxuICAgICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICAgIGlubmVyU2VhcmNoVmFsdWUgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgICBzZXRJbm5lclNlYXJjaFZhbHVlID0gX3VzZVN0YXRlNlsxXTtcblxuICAgIHZhciBtZXJnZWRTZWFyY2hWYWx1ZSA9IGlubmVyU2VhcmNoVmFsdWU7XG5cbiAgICBpZiAobW9kZSA9PT0gJ2NvbWJvYm94JyAmJiBtZXJnZWRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZXJnZWRTZWFyY2hWYWx1ZSA9IG1lcmdlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAoc2VhcmNoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbWVyZ2VkU2VhcmNoVmFsdWUgPSBzZWFyY2hWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgIG1lcmdlZFNlYXJjaFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VkT3B0aW9ucyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5ld09wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICBpZiAobmV3T3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld09wdGlvbnMgPSBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBgdGFnc2Agc2hvdWxkIGZpbGwgdW4tbGlzdCBpdGVtLlxuICAgICAgICogVGhpcyBpcyBub3QgY29vbCBoZXJlIHNpbmNlIFRyZWVTZWxlY3QgZG8gbm90IG5lZWQgdGhpc1xuICAgICAgICovXG5cblxuICAgICAgaWYgKG1vZGUgPT09ICd0YWdzJyAmJiBmaWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUpIHtcbiAgICAgICAgbmV3T3B0aW9ucyA9IGZpbGxPcHRpb25zV2l0aE1pc3NpbmdWYWx1ZShuZXdPcHRpb25zLCBtZXJnZWRWYWx1ZSwgbWVyZ2VkT3B0aW9uTGFiZWxQcm9wLCBsYWJlbEluVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3T3B0aW9ucyB8fCBbXTtcbiAgICB9LCBbb3B0aW9ucywgY2hpbGRyZW4sIG1vZGUsIG1lcmdlZFZhbHVlXSk7XG4gICAgdmFyIG1lcmdlZEZsYXR0ZW5PcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZmxhdHRlbk9wdGlvbnMobWVyZ2VkT3B0aW9ucywgcHJvcHMpO1xuICAgIH0sIFttZXJnZWRPcHRpb25zXSk7XG4gICAgdmFyIGdldFZhbHVlT3B0aW9uID0gdXNlQ2FjaGVPcHRpb25zKG1lcmdlZFJhd1ZhbHVlLCBtZXJnZWRGbGF0dGVuT3B0aW9ucyk7IC8vIERpc3BsYXkgb3B0aW9ucyBmb3IgT3B0aW9uTGlzdFxuXG4gICAgdmFyIGRpc3BsYXlPcHRpb25zID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIW1lcmdlZFNlYXJjaFZhbHVlIHx8ICFtZXJnZWRTaG93U2VhcmNoKSB7XG4gICAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkobWVyZ2VkT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zKG1lcmdlZFNlYXJjaFZhbHVlLCBtZXJnZWRPcHRpb25zLCB7XG4gICAgICAgIG9wdGlvbkZpbHRlclByb3A6IG9wdGlvbkZpbHRlclByb3AsXG4gICAgICAgIGZpbHRlck9wdGlvbjogbW9kZSA9PT0gJ2NvbWJvYm94JyAmJiBmaWx0ZXJPcHRpb24gPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSA6IGZpbHRlck9wdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtb2RlID09PSAndGFncycgJiYgZmlsdGVyZWRPcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgcmV0dXJuIG9wdFtvcHRpb25GaWx0ZXJQcm9wXSAhPT0gbWVyZ2VkU2VhcmNoVmFsdWU7XG4gICAgICB9KSkge1xuICAgICAgICBmaWx0ZXJlZE9wdGlvbnMudW5zaGlmdCh7XG4gICAgICAgICAgdmFsdWU6IG1lcmdlZFNlYXJjaFZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBtZXJnZWRTZWFyY2hWYWx1ZSxcbiAgICAgICAgICBrZXk6ICdfX1JDX1NFTEVDVF9UQUdfUExBQ0VIT0xERVJfXydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgfSwgW21lcmdlZE9wdGlvbnMsIG1lcmdlZFNlYXJjaFZhbHVlLCBtb2RlLCBtZXJnZWRTaG93U2VhcmNoXSk7XG4gICAgdmFyIGRpc3BsYXlGbGF0dGVuT3B0aW9ucyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZsYXR0ZW5PcHRpb25zKGRpc3BsYXlPcHRpb25zLCBwcm9wcyk7XG4gICAgfSwgW2Rpc3BsYXlPcHRpb25zXSk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChsaXN0UmVmLmN1cnJlbnQgJiYgbGlzdFJlZi5jdXJyZW50LnNjcm9sbFRvKSB7XG4gICAgICAgIGxpc3RSZWYuY3VycmVudC5zY3JvbGxUbygwKTtcbiAgICAgIH1cbiAgICB9LCBbbWVyZ2VkU2VhcmNoVmFsdWVdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTZWxlY3RvciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgZGlzcGxheVZhbHVlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRtcFZhbHVlcyA9IG1lcmdlZFJhd1ZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZhciB2YWx1ZU9wdGlvbnMgPSBnZXRWYWx1ZU9wdGlvbihbdmFsXSk7XG4gICAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSBnZXRMYWJlbGVkVmFsdWUodmFsLCB7XG4gICAgICAgICAgb3B0aW9uczogdmFsdWVPcHRpb25zLFxuICAgICAgICAgIHByZXZWYWx1ZTogbWVyZ2VkVmFsdWUsXG4gICAgICAgICAgbGFiZWxJblZhbHVlOiBtZXJnZWRMYWJlbEluVmFsdWUsXG4gICAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBtZXJnZWRPcHRpb25MYWJlbFByb3BcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGRpc3BsYXlWYWx1ZSksIHt9LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGlzVmFsdWVEaXNhYmxlZCh2YWwsIHZhbHVlT3B0aW9ucylcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFtb2RlICYmIHRtcFZhbHVlcy5sZW5ndGggPT09IDEgJiYgdG1wVmFsdWVzWzBdLnZhbHVlID09PSBudWxsICYmIHRtcFZhbHVlc1swXS5sYWJlbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0bXBWYWx1ZXM7XG4gICAgfSwgW21lcmdlZFZhbHVlLCBtZXJnZWRPcHRpb25zLCBtb2RlXSk7IC8vIFBvbHlmaWxsIHdpdGggY2FjaGUgbGFiZWxcblxuICAgIGRpc3BsYXlWYWx1ZXMgPSB1c2VDYWNoZURpc3BsYXlWYWx1ZShkaXNwbGF5VmFsdWVzKTtcblxuICAgIHZhciB0cmlnZ2VyU2VsZWN0ID0gZnVuY3Rpb24gdHJpZ2dlclNlbGVjdChuZXdWYWx1ZSwgaXNTZWxlY3QsIHNvdXJjZSkge1xuICAgICAgdmFyIG5ld1ZhbHVlT3B0aW9uID0gZ2V0VmFsdWVPcHRpb24oW25ld1ZhbHVlXSk7XG4gICAgICB2YXIgb3V0T3B0aW9uID0gZmluZFZhbHVlT3B0aW9uKFtuZXdWYWx1ZV0sIG5ld1ZhbHVlT3B0aW9uKVswXTtcblxuICAgICAgaWYgKCFpbnRlcm5hbFByb3BzLnNraXBUcmlnZ2VyU2VsZWN0KSB7XG4gICAgICAgIC8vIFNraXAgdHJpZ2dlciBgb25TZWxlY3RgIG9yIGBvbkRlc2VsZWN0YCBpZiBjb25maWd1cmVkXG4gICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IG1lcmdlZExhYmVsSW5WYWx1ZSA/IGdldExhYmVsZWRWYWx1ZShuZXdWYWx1ZSwge1xuICAgICAgICAgIG9wdGlvbnM6IG5ld1ZhbHVlT3B0aW9uLFxuICAgICAgICAgIHByZXZWYWx1ZTogbWVyZ2VkVmFsdWUsXG4gICAgICAgICAgbGFiZWxJblZhbHVlOiBtZXJnZWRMYWJlbEluVmFsdWUsXG4gICAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBtZXJnZWRPcHRpb25MYWJlbFByb3BcbiAgICAgICAgfSkgOiBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAoaXNTZWxlY3QgJiYgb25TZWxlY3QpIHtcbiAgICAgICAgICBvblNlbGVjdChzZWxlY3RWYWx1ZSwgb3V0T3B0aW9uKTtcbiAgICAgICAgfSBlbHNlIGlmICghaXNTZWxlY3QgJiYgb25EZXNlbGVjdCkge1xuICAgICAgICAgIG9uRGVzZWxlY3Qoc2VsZWN0VmFsdWUsIG91dE9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gVHJpZ2dlciBpbnRlcm5hbCBldmVudFxuXG5cbiAgICAgIGlmICh1c2VJbnRlcm5hbFByb3BzKSB7XG4gICAgICAgIGlmIChpc1NlbGVjdCAmJiBpbnRlcm5hbFByb3BzLm9uUmF3U2VsZWN0KSB7XG4gICAgICAgICAgaW50ZXJuYWxQcm9wcy5vblJhd1NlbGVjdChuZXdWYWx1ZSwgb3V0T3B0aW9uLCBzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc1NlbGVjdCAmJiBpbnRlcm5hbFByb3BzLm9uUmF3RGVzZWxlY3QpIHtcbiAgICAgICAgICBpbnRlcm5hbFByb3BzLm9uUmF3RGVzZWxlY3QobmV3VmFsdWUsIG91dE9wdGlvbiwgc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07IC8vIFdlIG5lZWQgY2FjaGUgb3B0aW9ucyBoZXJlIGluIGNhc2UgdXNlciB1cGRhdGUgdGhlIG9wdGlvbiBsaXN0XG5cblxuICAgIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoW10pLFxuICAgICAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgICAgIHByZXZWYWx1ZU9wdGlvbnMgPSBfdXNlU3RhdGU4WzBdLFxuICAgICAgICBzZXRQcmV2VmFsdWVPcHRpb25zID0gX3VzZVN0YXRlOFsxXTtcblxuICAgIHZhciB0cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gdHJpZ2dlckNoYW5nZShuZXdSYXdWYWx1ZXMpIHtcbiAgICAgIGlmICh1c2VJbnRlcm5hbFByb3BzICYmIGludGVybmFsUHJvcHMuc2tpcFRyaWdnZXJDaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3UmF3VmFsdWVzT3B0aW9ucyA9IGdldFZhbHVlT3B0aW9uKG5ld1Jhd1ZhbHVlcyk7XG4gICAgICB2YXIgb3V0VmFsdWVzID0gdG9PdXRlclZhbHVlcyhBcnJheS5mcm9tKG5ld1Jhd1ZhbHVlcyksIHtcbiAgICAgICAgbGFiZWxJblZhbHVlOiBtZXJnZWRMYWJlbEluVmFsdWUsXG4gICAgICAgIG9wdGlvbnM6IG5ld1Jhd1ZhbHVlc09wdGlvbnMsXG4gICAgICAgIGdldExhYmVsZWRWYWx1ZTogZ2V0TGFiZWxlZFZhbHVlLFxuICAgICAgICBwcmV2VmFsdWU6IG1lcmdlZFZhbHVlLFxuICAgICAgICBvcHRpb25MYWJlbFByb3A6IG1lcmdlZE9wdGlvbkxhYmVsUHJvcFxuICAgICAgfSk7XG4gICAgICB2YXIgb3V0VmFsdWUgPSBpc011bHRpcGxlID8gb3V0VmFsdWVzIDogb3V0VmFsdWVzWzBdOyAvLyBTa2lwIHRyaWdnZXIgaWYgcHJldiAmIGN1cnJlbnQgdmFsdWUgaXMgYm90aCBlbXB0eVxuXG4gICAgICBpZiAob25DaGFuZ2UgJiYgKG1lcmdlZFJhd1ZhbHVlLmxlbmd0aCAhPT0gMCB8fCBvdXRWYWx1ZXMubGVuZ3RoICE9PSAwKSkge1xuICAgICAgICB2YXIgb3V0T3B0aW9ucyA9IGZpbmRWYWx1ZU9wdGlvbihuZXdSYXdWYWx1ZXMsIG5ld1Jhd1ZhbHVlc09wdGlvbnMsIHtcbiAgICAgICAgICBwcmV2VmFsdWVPcHRpb25zOiBwcmV2VmFsdWVPcHRpb25zXG4gICAgICAgIH0pOyAvLyBXZSB3aWxsIGNhY2hlIG9wdGlvbiBpbiBjYXNlIGl0IHJlbW92ZWQgYnkgYWpheFxuXG4gICAgICAgIHNldFByZXZWYWx1ZU9wdGlvbnMob3V0T3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgY2xvbmUgPSBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb24pO1xuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNsb25lLCAnX0lOVEVSTkFMX09QVElPTl9WQUxVRV8nLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ld1Jhd1ZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICB9KSk7XG4gICAgICAgIG9uQ2hhbmdlKG91dFZhbHVlLCBpc011bHRpcGxlID8gb3V0T3B0aW9ucyA6IG91dE9wdGlvbnNbMF0pO1xuICAgICAgfVxuXG4gICAgICBzZXRNZXJnZWRWYWx1ZShvdXRWYWx1ZSk7XG4gICAgfTtcblxuICAgIHZhciBvbkludGVybmFsU2VsZWN0ID0gZnVuY3Rpb24gb25JbnRlcm5hbFNlbGVjdChuZXdWYWx1ZSwgX3JlZikge1xuICAgICAgdmFyIHNlbGVjdGVkID0gX3JlZi5zZWxlY3RlZCxcbiAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZTtcblxuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1Jhd1ZhbHVlO1xuXG4gICAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICBuZXdSYXdWYWx1ZSA9IG5ldyBTZXQobWVyZ2VkUmF3VmFsdWUpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgIG5ld1Jhd1ZhbHVlLmFkZChuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3UmF3VmFsdWUuZGVsZXRlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UmF3VmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgICAgIG5ld1Jhd1ZhbHVlLmFkZChuZXdWYWx1ZSk7XG4gICAgICB9IC8vIE11bHRpcGxlIGFsd2F5cyB0cmlnZ2VyIGNoYW5nZSBhbmQgc2luZ2xlIHNob3VsZCBjaGFuZ2UgaWYgdmFsdWUgY2hhbmdlZFxuXG5cbiAgICAgIGlmIChpc011bHRpcGxlIHx8ICFpc011bHRpcGxlICYmIEFycmF5LmZyb20obWVyZ2VkUmF3VmFsdWUpWzBdICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0cmlnZ2VyQ2hhbmdlKEFycmF5LmZyb20obmV3UmF3VmFsdWUpKTtcbiAgICAgIH0gLy8gVHJpZ2dlciBgb25TZWxlY3RgLiBTaW5nbGUgbW9kZSBhbHdheXMgdHJpZ2dlciBzZWxlY3RcblxuXG4gICAgICB0cmlnZ2VyU2VsZWN0KG5ld1ZhbHVlLCAhaXNNdWx0aXBsZSB8fCBzZWxlY3RlZCwgc291cmNlKTsgLy8gQ2xlYW4gc2VhcmNoIHZhbHVlIGlmIHNpbmdsZSBvciBjb25maWd1cmVkXG5cbiAgICAgIGlmIChtb2RlID09PSAnY29tYm9ib3gnKSB7XG4gICAgICAgIHNldElubmVyU2VhcmNoVmFsdWUoU3RyaW5nKG5ld1ZhbHVlKSk7XG4gICAgICAgIHNldEFjdGl2ZVZhbHVlKCcnKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzTXVsdGlwbGUgfHwgYXV0b0NsZWFyU2VhcmNoVmFsdWUpIHtcbiAgICAgICAgc2V0SW5uZXJTZWFyY2hWYWx1ZSgnJyk7XG4gICAgICAgIHNldEFjdGl2ZVZhbHVlKCcnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG9uSW50ZXJuYWxPcHRpb25TZWxlY3QgPSBmdW5jdGlvbiBvbkludGVybmFsT3B0aW9uU2VsZWN0KG5ld1ZhbHVlLCBpbmZvKSB7XG4gICAgICBvbkludGVybmFsU2VsZWN0KG5ld1ZhbHVlLCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGluZm8pLCB7fSwge1xuICAgICAgICBzb3VyY2U6ICdvcHRpb24nXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHZhciBvbkludGVybmFsU2VsZWN0aW9uU2VsZWN0ID0gZnVuY3Rpb24gb25JbnRlcm5hbFNlbGVjdGlvblNlbGVjdChuZXdWYWx1ZSwgaW5mbykge1xuICAgICAgb25JbnRlcm5hbFNlbGVjdChuZXdWYWx1ZSwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbmZvKSwge30sIHtcbiAgICAgICAgc291cmNlOiAnc2VsZWN0aW9uJ1xuICAgICAgfSkpO1xuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IElucHV0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIE9ubHkgd29ya3MgaW4gYGNvbWJvYm94YFxuXG5cbiAgICB2YXIgY3VzdG9taXplSW5wdXRFbGVtZW50ID0gbW9kZSA9PT0gJ2NvbWJvYm94JyAmJiBnZXRJbnB1dEVsZW1lbnQgJiYgZ2V0SW5wdXRFbGVtZW50KCkgfHwgbnVsbDsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE9wZW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgX3VzZU1lcmdlZFN0YXRlMyA9IHVzZU1lcmdlZFN0YXRlKHVuZGVmaW5lZCwge1xuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0T3BlbixcbiAgICAgIHZhbHVlOiBvcGVuXG4gICAgfSksXG4gICAgICAgIF91c2VNZXJnZWRTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlTWVyZ2VkU3RhdGUzLCAyKSxcbiAgICAgICAgaW5uZXJPcGVuID0gX3VzZU1lcmdlZFN0YXRlNFswXSxcbiAgICAgICAgc2V0SW5uZXJPcGVuID0gX3VzZU1lcmdlZFN0YXRlNFsxXTtcblxuICAgIHZhciBtZXJnZWRPcGVuID0gaW5uZXJPcGVuOyAvLyBOb3QgdHJpZ2dlciBgb3BlbmAgaW4gYGNvbWJvYm94YCB3aGVuIGBub3RGb3VuZENvbnRlbnRgIGlzIGVtcHR5XG5cbiAgICB2YXIgZW1wdHlMaXN0Q29udGVudCA9ICFub3RGb3VuZENvbnRlbnQgJiYgIWRpc3BsYXlPcHRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkaXNhYmxlZCB8fCBlbXB0eUxpc3RDb250ZW50ICYmIG1lcmdlZE9wZW4gJiYgbW9kZSA9PT0gJ2NvbWJvYm94Jykge1xuICAgICAgbWVyZ2VkT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB0cmlnZ2VyT3BlbiA9IGVtcHR5TGlzdENvbnRlbnQgPyBmYWxzZSA6IG1lcmdlZE9wZW47XG5cbiAgICB2YXIgb25Ub2dnbGVPcGVuID0gZnVuY3Rpb24gb25Ub2dnbGVPcGVuKG5ld09wZW4pIHtcbiAgICAgIHZhciBuZXh0T3BlbiA9IG5ld09wZW4gIT09IHVuZGVmaW5lZCA/IG5ld09wZW4gOiAhbWVyZ2VkT3BlbjtcblxuICAgICAgaWYgKGlubmVyT3BlbiAhPT0gbmV4dE9wZW4gJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIHNldElubmVyT3BlbihuZXh0T3Blbik7XG5cbiAgICAgICAgaWYgKG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgb25Ecm9wZG93blZpc2libGVDaGFuZ2UobmV4dE9wZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHVzZVNlbGVjdFRyaWdnZXJDb250cm9sKFtjb250YWluZXJSZWYuY3VycmVudCwgdHJpZ2dlclJlZi5jdXJyZW50ICYmIHRyaWdnZXJSZWYuY3VycmVudC5nZXRQb3B1cEVsZW1lbnQoKV0sIHRyaWdnZXJPcGVuLCBvblRvZ2dsZU9wZW4pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTZWFyY2ggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciB0cmlnZ2VyU2VhcmNoID0gZnVuY3Rpb24gdHJpZ2dlclNlYXJjaChzZWFyY2hUZXh0LCBmcm9tVHlwaW5nLCBpc0NvbXBvc2l0aW5nKSB7XG4gICAgICB2YXIgcmV0ID0gdHJ1ZTtcbiAgICAgIHZhciBuZXdTZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgICAgIHNldEFjdGl2ZVZhbHVlKG51bGwpOyAvLyBDaGVjayBpZiBtYXRjaCB0aGUgYHRva2VuU2VwYXJhdG9yc2BcblxuICAgICAgdmFyIHBhdGNoTGFiZWxzID0gaXNDb21wb3NpdGluZyA/IG51bGwgOiBnZXRTZXBhcmF0ZWRDb250ZW50KHNlYXJjaFRleHQsIHRva2VuU2VwYXJhdG9ycyk7XG4gICAgICB2YXIgcGF0Y2hSYXdWYWx1ZXMgPSBwYXRjaExhYmVscztcblxuICAgICAgaWYgKG1vZGUgPT09ICdjb21ib2JveCcpIHtcbiAgICAgICAgLy8gT25seSB0eXBpbmcgd2lsbCB0cmlnZ2VyIG9uQ2hhbmdlXG4gICAgICAgIGlmIChmcm9tVHlwaW5nKSB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZShbbmV3U2VhcmNoVGV4dF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGNoTGFiZWxzKSB7XG4gICAgICAgIG5ld1NlYXJjaFRleHQgPSAnJztcblxuICAgICAgICBpZiAobW9kZSAhPT0gJ3RhZ3MnKSB7XG4gICAgICAgICAgcGF0Y2hSYXdWYWx1ZXMgPSBwYXRjaExhYmVscy5tYXAoZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IG1lcmdlZEZsYXR0ZW5PcHRpb25zLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbbWVyZ2VkT3B0aW9uTGFiZWxQcm9wXSA9PT0gbGFiZWw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID8gaXRlbS5kYXRhLnZhbHVlIDogbnVsbDtcbiAgICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCAhPT0gbnVsbDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdSYXdWYWx1ZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShtZXJnZWRSYXdWYWx1ZSksIF90b0NvbnN1bWFibGVBcnJheShwYXRjaFJhd1ZhbHVlcykpKSk7XG4gICAgICAgIHRyaWdnZXJDaGFuZ2UobmV3UmF3VmFsdWVzKTtcbiAgICAgICAgbmV3UmF3VmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKG5ld1Jhd1ZhbHVlKSB7XG4gICAgICAgICAgdHJpZ2dlclNlbGVjdChuZXdSYXdWYWx1ZSwgdHJ1ZSwgJ2lucHV0Jyk7XG4gICAgICAgIH0pOyAvLyBTaG91bGQgY2xvc2Ugd2hlbiBwYXN0ZSBmaW5pc2hcblxuICAgICAgICBvblRvZ2dsZU9wZW4oZmFsc2UpOyAvLyBUZWxsIFNlbGVjdG9yIHRoYXQgYnJlYWsgbmV4dCBhY3Rpb25zXG5cbiAgICAgICAgcmV0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNldElubmVyU2VhcmNoVmFsdWUobmV3U2VhcmNoVGV4dCk7XG5cbiAgICAgIGlmIChvblNlYXJjaCAmJiBtZXJnZWRTZWFyY2hWYWx1ZSAhPT0gbmV3U2VhcmNoVGV4dCkge1xuICAgICAgICBvblNlYXJjaChuZXdTZWFyY2hUZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9OyAvLyBPbmx5IHRyaWdnZXJlZCB3aGVuIG1lbnUgaXMgY2xvc2VkICYgbW9kZSBpcyB0YWdzXG4gICAgLy8gSWYgbWVudSBpcyBvcGVuLCBPcHRpb25MaXN0IHdpbGwgdGFrZSBjaGFyZ2VcbiAgICAvLyBJZiBtb2RlIGlzbid0IHRhZ3MsIHByZXNzIGVudGVyIGlzIG5vdCBtZWFuaW5nZnVsIHdoZW4geW91IGNhbid0IHNlZSBhbnkgb3B0aW9uXG5cblxuICAgIHZhciBvblNlYXJjaFN1Ym1pdCA9IGZ1bmN0aW9uIG9uU2VhcmNoU3VibWl0KHNlYXJjaFRleHQpIHtcbiAgICAgIHZhciBuZXdSYXdWYWx1ZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShtZXJnZWRSYXdWYWx1ZSksIFtzZWFyY2hUZXh0XSkpKTtcbiAgICAgIHRyaWdnZXJDaGFuZ2UobmV3UmF3VmFsdWVzKTtcbiAgICAgIG5ld1Jhd1ZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChuZXdSYXdWYWx1ZSkge1xuICAgICAgICB0cmlnZ2VyU2VsZWN0KG5ld1Jhd1ZhbHVlLCB0cnVlLCAnaW5wdXQnKTtcbiAgICAgIH0pO1xuICAgICAgc2V0SW5uZXJTZWFyY2hWYWx1ZSgnJyk7XG4gICAgfTsgLy8gQ2xvc2UgZHJvcGRvd24gd2hlbiBkaXNhYmxlZCBjaGFuZ2VcblxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbm5lck9wZW4gJiYgISFkaXNhYmxlZCkge1xuICAgICAgICBzZXRJbm5lck9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIFtkaXNhYmxlZF0pOyAvLyBDbG9zZSB3aWxsIGNsZWFuIHVwIHNpbmdsZSBtb2RlIHNlYXJjaCB0ZXh0XG5cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFtZXJnZWRPcGVuICYmICFpc011bHRpcGxlICYmIG1vZGUgIT09ICdjb21ib2JveCcpIHtcbiAgICAgICAgdHJpZ2dlclNlYXJjaCgnJywgZmFsc2UsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBbbWVyZ2VkT3Blbl0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09IEtleWJvYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFdlIHJlY29yZCBpbnB1dCB2YWx1ZSBoZXJlIHRvIGNoZWNrIGlmIGNhbiBwcmVzcyB0byBjbGVhbiB1cCBieSBiYWNrc3BhY2VcbiAgICAgKiAtIG51bGw6IEtleSBpcyBub3QgZG93biwgdGhpcyBpcyByZXNldCBieSBrZXkgdXBcbiAgICAgKiAtIHRydWU6IFNlYXJjaCB0ZXh0IGlzIGVtcHR5IHdoZW4gZmlyc3QgdGltZSBiYWNrc3BhY2UgZG93blxuICAgICAqIC0gZmFsc2U6IFNlYXJjaCB0ZXh0IGlzIG5vdCBlbXB0eSB3aGVuIGZpcnN0IHRpbWUgYmFja3NwYWNlIGRvd25cbiAgICAgKi9cblxuICAgIHZhciBfdXNlTG9jayA9IHVzZUxvY2soKSxcbiAgICAgICAgX3VzZUxvY2syID0gX3NsaWNlZFRvQXJyYXkoX3VzZUxvY2ssIDIpLFxuICAgICAgICBnZXRDbGVhckxvY2sgPSBfdXNlTG9jazJbMF0sXG4gICAgICAgIHNldENsZWFyTG9jayA9IF91c2VMb2NrMlsxXTsgLy8gS2V5RG93blxuXG5cbiAgICB2YXIgb25JbnRlcm5hbEtleURvd24gPSBmdW5jdGlvbiBvbkludGVybmFsS2V5RG93bihldmVudCkge1xuICAgICAgdmFyIGNsZWFyTG9jayA9IGdldENsZWFyTG9jaygpO1xuICAgICAgdmFyIHdoaWNoID0gZXZlbnQud2hpY2g7IC8vIFdlIG9ubHkgbWFuYWdlIG9wZW4gc3RhdGUgaGVyZSwgY2xvc2UgbG9naWMgc2hvdWxkIGhhbmRsZSBieSBsaXN0IGNvbXBvbmVudFxuXG4gICAgICBpZiAoIW1lcmdlZE9wZW4gJiYgd2hpY2ggPT09IEtleUNvZGUuRU5URVIpIHtcbiAgICAgICAgb25Ub2dnbGVPcGVuKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBzZXRDbGVhckxvY2soISFtZXJnZWRTZWFyY2hWYWx1ZSk7IC8vIFJlbW92ZSB2YWx1ZSBieSBgYmFja3NwYWNlYFxuXG4gICAgICBpZiAod2hpY2ggPT09IEtleUNvZGUuQkFDS1NQQUNFICYmICFjbGVhckxvY2sgJiYgaXNNdWx0aXBsZSAmJiAhbWVyZ2VkU2VhcmNoVmFsdWUgJiYgbWVyZ2VkUmF3VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciByZW1vdmVJbmZvID0gcmVtb3ZlTGFzdEVuYWJsZWRWYWx1ZShkaXNwbGF5VmFsdWVzLCBtZXJnZWRSYXdWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUluZm8ucmVtb3ZlZFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZShyZW1vdmVJbmZvLnZhbHVlcyk7XG4gICAgICAgICAgdHJpZ2dlclNlbGVjdChyZW1vdmVJbmZvLnJlbW92ZWRWYWx1ZSwgZmFsc2UsICdpbnB1dCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgcmVzdFtfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXJnZWRPcGVuICYmIGxpc3RSZWYuY3VycmVudCkge1xuICAgICAgICB2YXIgX2xpc3RSZWYkY3VycmVudDtcblxuICAgICAgICAoX2xpc3RSZWYkY3VycmVudCA9IGxpc3RSZWYuY3VycmVudCkub25LZXlEb3duLmFwcGx5KF9saXN0UmVmJGN1cnJlbnQsIFtldmVudF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgICBvbktleURvd24uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChyZXN0KSk7XG4gICAgICB9XG4gICAgfTsgLy8gS2V5VXBcblxuXG4gICAgdmFyIG9uSW50ZXJuYWxLZXlVcCA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxLZXlVcChldmVudCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgcmVzdFtfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lcmdlZE9wZW4gJiYgbGlzdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBfbGlzdFJlZiRjdXJyZW50MjtcblxuICAgICAgICAoX2xpc3RSZWYkY3VycmVudDIgPSBsaXN0UmVmLmN1cnJlbnQpLm9uS2V5VXAuYXBwbHkoX2xpc3RSZWYkY3VycmVudDIsIFtldmVudF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uS2V5VXApIHtcbiAgICAgICAgb25LZXlVcC5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KHJlc3QpKTtcbiAgICAgIH1cbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBGb2N1cyAvIEJsdXIgPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKiBSZWNvcmQgcmVhbCBmb2N1cyBzdGF0dXMgKi9cblxuXG4gICAgdmFyIGZvY3VzUmVmID0gdXNlUmVmKGZhbHNlKTtcblxuICAgIHZhciBvbkNvbnRhaW5lckZvY3VzID0gZnVuY3Rpb24gb25Db250YWluZXJGb2N1cygpIHtcbiAgICAgIHNldE1vY2tGb2N1c2VkKHRydWUpO1xuXG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgIGlmIChvbkZvY3VzICYmICFmb2N1c1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgb25Gb2N1cy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0gLy8gYHNob3dBY3Rpb25gIHNob3VsZCBoYW5kbGUgYGZvY3VzYCBpZiBzZXRcblxuXG4gICAgICAgIGlmIChzaG93QWN0aW9uLmluY2x1ZGVzKCdmb2N1cycpKSB7XG4gICAgICAgICAgb25Ub2dnbGVPcGVuKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvY3VzUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIH07XG5cbiAgICB2YXIgb25Db250YWluZXJCbHVyID0gZnVuY3Rpb24gb25Db250YWluZXJCbHVyKCkge1xuICAgICAgc2V0TW9ja0ZvY3VzZWQoZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9jdXNSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICBvblRvZ2dsZU9wZW4oZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXJnZWRTZWFyY2hWYWx1ZSkge1xuICAgICAgICAvLyBgdGFnc2AgbW9kZSBzaG91bGQgbW92ZSBgc2VhcmNoVmFsdWVgIGludG8gdmFsdWVzXG4gICAgICAgIGlmIChtb2RlID09PSAndGFncycpIHtcbiAgICAgICAgICB0cmlnZ2VyU2VhcmNoKCcnLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoQXJyYXkuZnJvbShuZXcgU2V0KFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobWVyZ2VkUmF3VmFsdWUpLCBbbWVyZ2VkU2VhcmNoVmFsdWVdKSkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgLy8gYG11bHRpcGxlYCBtb2RlIG9ubHkgY2xlYW4gdGhlIHNlYXJjaCB2YWx1ZSBidXQgbm90IHRyaWdnZXIgZXZlbnRcbiAgICAgICAgICBzZXRJbm5lclNlYXJjaFZhbHVlKCcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob25CbHVyKSB7XG4gICAgICAgIG9uQmx1ci5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBhY3RpdmVUaW1lb3V0SWRzID0gW107XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFjdGl2ZVRpbWVvdXRJZHMuZm9yRWFjaChmdW5jdGlvbiAodGltZW91dElkKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWN0aXZlVGltZW91dElkcy5zcGxpY2UoMCwgYWN0aXZlVGltZW91dElkcy5sZW5ndGgpO1xuICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICB2YXIgb25JbnRlcm5hbE1vdXNlRG93biA9IGZ1bmN0aW9uIG9uSW50ZXJuYWxNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICB2YXIgcG9wdXBFbGVtZW50ID0gdHJpZ2dlclJlZi5jdXJyZW50ICYmIHRyaWdnZXJSZWYuY3VycmVudC5nZXRQb3B1cEVsZW1lbnQoKTsgLy8gV2Ugc2hvdWxkIGdpdmUgZm9jdXMgYmFjayB0byBzZWxlY3RvciBpZiBjbGlja2VkIGl0ZW0gaXMgbm90IGZvY3VzYWJsZVxuXG4gICAgICBpZiAocG9wdXBFbGVtZW50ICYmIHBvcHVwRWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBhY3RpdmVUaW1lb3V0SWRzLmluZGV4T2YodGltZW91dElkKTtcblxuICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRpbWVvdXRJZHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYW5jZWxTZXRNb2NrRm9jdXNlZCgpO1xuXG4gICAgICAgICAgaWYgKCFwb3B1cEVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBhY3RpdmVUaW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uTW91c2VEb3duKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdEFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICAgIHJlc3RBcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgICAgICB9XG5cbiAgICAgICAgb25Nb3VzZURvd24uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChyZXN0QXJncykpO1xuICAgICAgfVxuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gQWNjZXNzaWJpbGl0eSA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICB2YXIgX3VzZVN0YXRlOSA9IHVzZVN0YXRlKDApLFxuICAgICAgICBfdXNlU3RhdGUxMCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTksIDIpLFxuICAgICAgICBhY2Nlc3NpYmlsaXR5SW5kZXggPSBfdXNlU3RhdGUxMFswXSxcbiAgICAgICAgc2V0QWNjZXNzaWJpbGl0eUluZGV4ID0gX3VzZVN0YXRlMTBbMV07XG5cbiAgICB2YXIgbWVyZ2VkRGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uICE9PSB1bmRlZmluZWQgPyBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gOiBtb2RlICE9PSAnY29tYm9ib3gnO1xuXG4gICAgdmFyIG9uQWN0aXZlVmFsdWUgPSBmdW5jdGlvbiBvbkFjdGl2ZVZhbHVlKGFjdGl2ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBfcmVmMyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICAgICAgX3JlZjMkc291cmNlID0gX3JlZjMuc291cmNlLFxuICAgICAgICAgIHNvdXJjZSA9IF9yZWYzJHNvdXJjZSA9PT0gdm9pZCAwID8gJ2tleWJvYXJkJyA6IF9yZWYzJHNvdXJjZTtcblxuICAgICAgc2V0QWNjZXNzaWJpbGl0eUluZGV4KGluZGV4KTtcblxuICAgICAgaWYgKGJhY2tmaWxsICYmIG1vZGUgPT09ICdjb21ib2JveCcgJiYgYWN0aXZlICE9PSBudWxsICYmIHNvdXJjZSA9PT0gJ2tleWJvYXJkJykge1xuICAgICAgICBzZXRBY3RpdmVWYWx1ZShTdHJpbmcoYWN0aXZlKSk7XG4gICAgICB9XG4gICAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUG9wdXAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgIHZhciBfdXNlU3RhdGUxMSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgICBfdXNlU3RhdGUxMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTExLCAyKSxcbiAgICAgICAgY29udGFpbmVyV2lkdGggPSBfdXNlU3RhdGUxMlswXSxcbiAgICAgICAgc2V0Q29udGFpbmVyV2lkdGggPSBfdXNlU3RhdGUxMlsxXTtcblxuICAgIHZhciBfdXNlU3RhdGUxMyA9IHVzZVN0YXRlKHt9KSxcbiAgICAgICAgX3VzZVN0YXRlMTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxMywgMiksXG4gICAgICAgIGZvcmNlVXBkYXRlID0gX3VzZVN0YXRlMTRbMV07IC8vIFdlIG5lZWQgZm9yY2UgdXBkYXRlIGhlcmUgc2luY2UgcG9wdXAgZG9tIGlzIHJlbmRlciBhc3luY1xuXG5cbiAgICBmdW5jdGlvbiBvblBvcHVwTW91c2VFbnRlcigpIHtcbiAgICAgIGZvcmNlVXBkYXRlKHt9KTtcbiAgICB9XG5cbiAgICB1c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRyaWdnZXJPcGVuKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IE1hdGguY2VpbChjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aCk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcldpZHRoICE9PSBuZXdXaWR0aCkge1xuICAgICAgICAgIHNldENvbnRhaW5lcldpZHRoKG5ld1dpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFt0cmlnZ2VyT3Blbl0pO1xuICAgIHZhciBwb3B1cE5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KE9wdGlvbkxpc3QsIHtcbiAgICAgIHJlZjogbGlzdFJlZixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaWQ6IG1lcmdlZElkLFxuICAgICAgb3BlbjogbWVyZ2VkT3BlbixcbiAgICAgIGNoaWxkcmVuQXNEYXRhOiAhb3B0aW9ucyxcbiAgICAgIG9wdGlvbnM6IGRpc3BsYXlPcHRpb25zLFxuICAgICAgZmxhdHRlbk9wdGlvbnM6IGRpc3BsYXlGbGF0dGVuT3B0aW9ucyxcbiAgICAgIG11bHRpcGxlOiBpc011bHRpcGxlLFxuICAgICAgdmFsdWVzOiByYXdWYWx1ZXMsXG4gICAgICBoZWlnaHQ6IGxpc3RIZWlnaHQsXG4gICAgICBpdGVtSGVpZ2h0OiBsaXN0SXRlbUhlaWdodCxcbiAgICAgIG9uU2VsZWN0OiBvbkludGVybmFsT3B0aW9uU2VsZWN0LFxuICAgICAgb25Ub2dnbGVPcGVuOiBvblRvZ2dsZU9wZW4sXG4gICAgICBvbkFjdGl2ZVZhbHVlOiBvbkFjdGl2ZVZhbHVlLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBtZXJnZWREZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IG5vdEZvdW5kQ29udGVudCxcbiAgICAgIG9uU2Nyb2xsOiBvblBvcHVwU2Nyb2xsLFxuICAgICAgc2VhcmNoVmFsdWU6IG1lcmdlZFNlYXJjaFZhbHVlLFxuICAgICAgbWVudUl0ZW1TZWxlY3RlZEljb246IG1lbnVJdGVtU2VsZWN0ZWRJY29uLFxuICAgICAgdmlydHVhbDogdmlydHVhbCAhPT0gZmFsc2UgJiYgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoICE9PSBmYWxzZSxcbiAgICAgIG9uTW91c2VFbnRlcjogb25Qb3B1cE1vdXNlRW50ZXJcbiAgICB9KTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2xlYXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB2YXIgY2xlYXJOb2RlO1xuXG4gICAgdmFyIG9uQ2xlYXJNb3VzZURvd24gPSBmdW5jdGlvbiBvbkNsZWFyTW91c2VEb3duKCkge1xuICAgICAgLy8gVHJpZ2dlciBpbnRlcm5hbCBgb25DbGVhcmAgZXZlbnRcbiAgICAgIGlmICh1c2VJbnRlcm5hbFByb3BzICYmIGludGVybmFsUHJvcHMub25DbGVhcikge1xuICAgICAgICBpbnRlcm5hbFByb3BzLm9uQ2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uQ2xlYXIpIHtcbiAgICAgICAgb25DbGVhcigpO1xuICAgICAgfVxuXG4gICAgICB0cmlnZ2VyQ2hhbmdlKFtdKTtcbiAgICAgIHRyaWdnZXJTZWFyY2goJycsIGZhbHNlLCBmYWxzZSk7XG4gICAgfTtcblxuICAgIGlmICghZGlzYWJsZWQgJiYgYWxsb3dDbGVhciAmJiAobWVyZ2VkUmF3VmFsdWUubGVuZ3RoIHx8IG1lcmdlZFNlYXJjaFZhbHVlKSkge1xuICAgICAgY2xlYXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc0J0biwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXJcIiksXG4gICAgICAgIG9uTW91c2VEb3duOiBvbkNsZWFyTW91c2VEb3duLFxuICAgICAgICBjdXN0b21pemVJY29uOiBjbGVhckljb25cbiAgICAgIH0sIFwiXFx4RDdcIik7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBBcnJvdyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgdmFyIG1lcmdlZFNob3dBcnJvdyA9IHNob3dBcnJvdyAhPT0gdW5kZWZpbmVkID8gc2hvd0Fycm93IDogbG9hZGluZyB8fCAhaXNNdWx0aXBsZSAmJiBtb2RlICE9PSAnY29tYm9ib3gnO1xuICAgIHZhciBhcnJvd05vZGU7XG5cbiAgICBpZiAobWVyZ2VkU2hvd0Fycm93KSB7XG4gICAgICBhcnJvd05vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zQnRuLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFycm93XCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3ctbG9hZGluZ1wiKSwgbG9hZGluZykpLFxuICAgICAgICBjdXN0b21pemVJY29uOiBpbnB1dEljb24sXG4gICAgICAgIGN1c3RvbWl6ZUljb25Qcm9wczoge1xuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXG4gICAgICAgICAgc2VhcmNoVmFsdWU6IG1lcmdlZFNlYXJjaFZhbHVlLFxuICAgICAgICAgIG9wZW46IG1lcmdlZE9wZW4sXG4gICAgICAgICAgZm9jdXNlZDogbW9ja0ZvY3VzZWQsXG4gICAgICAgICAgc2hvd1NlYXJjaDogbWVyZ2VkU2hvd1NlYXJjaFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gV2FybmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuaW5nUHJvcHMpIHtcbiAgICAgIHdhcm5pbmdQcm9wcyhwcm9wcyk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgdmFyIG1lcmdlZENsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1mb2N1c2VkXCIpLCBtb2NrRm9jdXNlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbXVsdGlwbGVcIiksIGlzTXVsdGlwbGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNpbmdsZVwiKSwgIWlzTXVsdGlwbGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFsbG93LWNsZWFyXCIpLCBhbGxvd0NsZWFyKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zaG93LWFycm93XCIpLCBtZXJnZWRTaG93QXJyb3cpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZ1wiKSwgbG9hZGluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKSwgbWVyZ2VkT3BlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY3VzdG9taXplLWlucHV0XCIpLCBjdXN0b21pemVJbnB1dEVsZW1lbnQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctc2VhcmNoXCIpLCBtZXJnZWRTaG93U2VhcmNoKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjbGFzc05hbWU6IG1lcmdlZENsYXNzTmFtZVxuICAgIH0sIGRvbVByb3BzLCB7XG4gICAgICByZWY6IGNvbnRhaW5lclJlZixcbiAgICAgIG9uTW91c2VEb3duOiBvbkludGVybmFsTW91c2VEb3duLFxuICAgICAgb25LZXlEb3duOiBvbkludGVybmFsS2V5RG93bixcbiAgICAgIG9uS2V5VXA6IG9uSW50ZXJuYWxLZXlVcCxcbiAgICAgIG9uRm9jdXM6IG9uQ29udGFpbmVyRm9jdXMsXG4gICAgICBvbkJsdXI6IG9uQ29udGFpbmVyQmx1clxuICAgIH0pLCBtb2NrRm9jdXNlZCAmJiAhbWVyZ2VkT3BlbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSxcbiAgICAgIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCJcbiAgICB9LCBcIlwiLmNvbmNhdChtZXJnZWRSYXdWYWx1ZS5qb2luKCcsICcpKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0VHJpZ2dlciwge1xuICAgICAgcmVmOiB0cmlnZ2VyUmVmLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICB2aXNpYmxlOiB0cmlnZ2VyT3BlbixcbiAgICAgIHBvcHVwRWxlbWVudDogcG9wdXBOb2RlLFxuICAgICAgY29udGFpbmVyV2lkdGg6IGNvbnRhaW5lcldpZHRoLFxuICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICBkcm9wZG93blN0eWxlOiBkcm9wZG93blN0eWxlLFxuICAgICAgZHJvcGRvd25DbGFzc05hbWU6IGRyb3Bkb3duQ2xhc3NOYW1lLFxuICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg6IGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCxcbiAgICAgIGRyb3Bkb3duUmVuZGVyOiBkcm9wZG93blJlbmRlcixcbiAgICAgIGRyb3Bkb3duQWxpZ246IGRyb3Bkb3duQWxpZ24sXG4gICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBlbXB0eTogIW1lcmdlZE9wdGlvbnMubGVuZ3RoLFxuICAgICAgZ2V0VHJpZ2dlckRPTU5vZGU6IGZ1bmN0aW9uIGdldFRyaWdnZXJET01Ob2RlKCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3JEb21SZWYuY3VycmVudDtcbiAgICAgIH1cbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdG9yLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgZG9tUmVmOiBzZWxlY3RvckRvbVJlZixcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgaW5wdXRFbGVtZW50OiBjdXN0b21pemVJbnB1dEVsZW1lbnQsXG4gICAgICByZWY6IHNlbGVjdG9yUmVmLFxuICAgICAgaWQ6IG1lcmdlZElkLFxuICAgICAgc2hvd1NlYXJjaDogbWVyZ2VkU2hvd1NlYXJjaCxcbiAgICAgIG1vZGU6IG1vZGUsXG4gICAgICBhY2Nlc3NpYmlsaXR5SW5kZXg6IGFjY2Vzc2liaWxpdHlJbmRleCxcbiAgICAgIG11bHRpcGxlOiBpc011bHRpcGxlLFxuICAgICAgdGFnUmVuZGVyOiB0YWdSZW5kZXIsXG4gICAgICB2YWx1ZXM6IGRpc3BsYXlWYWx1ZXMsXG4gICAgICBvcGVuOiBtZXJnZWRPcGVuLFxuICAgICAgb25Ub2dnbGVPcGVuOiBvblRvZ2dsZU9wZW4sXG4gICAgICBzZWFyY2hWYWx1ZTogbWVyZ2VkU2VhcmNoVmFsdWUsXG4gICAgICBhY3RpdmVWYWx1ZTogYWN0aXZlVmFsdWUsXG4gICAgICBvblNlYXJjaDogdHJpZ2dlclNlYXJjaCxcbiAgICAgIG9uU2VhcmNoU3VibWl0OiBvblNlYXJjaFN1Ym1pdCxcbiAgICAgIG9uU2VsZWN0OiBvbkludGVybmFsU2VsZWN0aW9uU2VsZWN0LFxuICAgICAgdG9rZW5XaXRoRW50ZXI6IHRva2VuV2l0aEVudGVyXG4gICAgfSkpKSwgYXJyb3dOb2RlLCBjbGVhck5vZGUpO1xuICB9XG5cbiAgdmFyIFJlZlNlbGVjdCA9IFJlYWN0LmZvcndhcmRSZWYoU2VsZWN0KTtcbiAgcmV0dXJuIFJlZlNlbGVjdDtcbn0iLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FjaGVEaXNwbGF5VmFsdWUodmFsdWVzKSB7XG4gIHZhciBwcmV2VmFsdWVzUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlcyk7XG4gIHZhciBtZXJnZWRWYWx1ZXMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDcmVhdGUgdmFsdWUgLSBsYWJlbCBtYXBcbiAgICB2YXIgdmFsdWVMYWJlbHMgPSBuZXcgTWFwKCk7XG4gICAgcHJldlZhbHVlc1JlZi5jdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsO1xuXG4gICAgICBpZiAodmFsdWUgIT09IGxhYmVsKSB7XG4gICAgICAgIHZhbHVlTGFiZWxzLnNldCh2YWx1ZSwgbGFiZWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByZXN1bHRWYWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY2FjaGVMYWJlbCA9IHZhbHVlTGFiZWxzLmdldChpdGVtLnZhbHVlKTtcblxuICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IGl0ZW0ubGFiZWwgJiYgY2FjaGVMYWJlbCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtKSwge30sIHtcbiAgICAgICAgICBsYWJlbDogY2FjaGVMYWJlbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfSk7XG4gICAgcHJldlZhbHVlc1JlZi5jdXJyZW50ID0gcmVzdWx0VmFsdWVzO1xuICAgIHJldHVybiByZXN1bHRWYWx1ZXM7XG4gIH0sIFt2YWx1ZXNdKTtcbiAgcmV0dXJuIG1lcmdlZFZhbHVlcztcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYWNoZU9wdGlvbnModmFsdWVzLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2T3B0aW9uTWFwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgb3B0aW9uTWFwID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciB2YWx1ZSA9IGl0ZW0uZGF0YS52YWx1ZTtcbiAgICAgIG1hcC5zZXQodmFsdWUsIGl0ZW0pO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXA7XG4gIH0sIFt2YWx1ZXMsIG9wdGlvbnNdKTtcbiAgcHJldk9wdGlvbk1hcFJlZi5jdXJyZW50ID0gb3B0aW9uTWFwO1xuXG4gIHZhciBnZXRWYWx1ZU9wdGlvbiA9IGZ1bmN0aW9uIGdldFZhbHVlT3B0aW9uKHZhbHMpIHtcbiAgICByZXR1cm4gdmFscy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcHJldk9wdGlvbk1hcFJlZi5jdXJyZW50LmdldCh2YWx1ZSk7XG4gICAgfSkuZmlsdGVyKEJvb2xlYW4pO1xuICB9O1xuXG4gIHJldHVybiBnZXRWYWx1ZU9wdGlvbjtcbn0iLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogU2ltaWxhciB3aXRoIGB1c2VMb2NrYCwgYnV0IHRoaXMgaG9vayB3aWxsIGFsd2F5cyBleGVjdXRlIGxhc3QgdmFsdWUuXG4gKiBXaGVuIHNldCB0byBgdHJ1ZWAsIGl0IHdpbGwga2VlcCBgdHJ1ZWAgZm9yIGEgc2hvcnQgdGltZSBldmVuIGlmIGBmYWxzZWAgaXMgc2V0LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlbGF5UmVzZXQoKSB7XG4gIHZhciB0aW1lb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBib29sID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEJvb2wgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBkZWxheVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgY2FuY2VsTGF0ZXN0ID0gZnVuY3Rpb24gY2FuY2VsTGF0ZXN0KCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZGVsYXlSZWYuY3VycmVudCk7XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FuY2VsTGF0ZXN0O1xuICB9LCBbXSk7XG5cbiAgdmFyIGRlbGF5U2V0Qm9vbCA9IGZ1bmN0aW9uIGRlbGF5U2V0Qm9vbCh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICBjYW5jZWxMYXRlc3QoKTtcbiAgICBkZWxheVJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0Qm9vbCh2YWx1ZSk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIHRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiBbYm9vbCwgZGVsYXlTZXRCb29sLCBjYW5jZWxMYXRlc3RdO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJDbGllbnQgfSBmcm9tICcuLi91dGlscy9jb21tb25VdGlsJztcbi8qKlxuICogV3JhcCBgUmVhY3QudXNlTGF5b3V0RWZmZWN0YCB3aGljaCB3aWxsIG5vdCB0aHJvdyB3YXJuaW5nIG1lc3NhZ2UgaW4gdGVzdCBlbnZcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBkZXBzKSB7XG4gIC8vIE5ldmVyIGhhcHBlbiBpbiB0ZXN0IGVudlxuICBpZiAoaXNCcm93c2VyQ2xpZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZWZmZWN0LCBkZXBzKTtcbiAgfSBlbHNlIHtcbiAgICBSZWFjdC51c2VFZmZlY3QoZWZmZWN0LCBkZXBzKTtcbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSAqLyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogTG9ja2VyIHJldHVybiBjYWNoZWQgbWFyay5cbiAqIElmIHNldCB0byBgdHJ1ZWAsIHdpbGwgcmV0dXJuIGB0cnVlYCBpbiBhIHNob3J0IHRpbWUgZXZlbiBpZiBzZXQgYGZhbHNlYC5cbiAqIElmIHNldCB0byBgZmFsc2VgIGFuZCB0aGVuIHNldCB0byBgdHJ1ZWAsIHdpbGwgY2hhbmdlIHRvIGB0cnVlYC5cbiAqIEFuZCBhZnRlciB0aW1lIGR1cmF0aW9uLCBpdCB3aWxsIGJhY2sgdG8gYG51bGxgIGF1dG9tYXRpY2FsbHkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTG9jaygpIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAyNTA7XG4gIHZhciBsb2NrUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gQ2xlYW4gdXBcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGRvTG9jayhsb2NrZWQpIHtcbiAgICBpZiAobG9ja2VkIHx8IGxvY2tSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgbG9ja1JlZi5jdXJyZW50ID0gbG9ja2VkO1xuICAgIH1cblxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB0aW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBsb2NrUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NrUmVmLmN1cnJlbnQ7XG4gIH0sIGRvTG9ja107XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VsZWN0VHJpZ2dlckNvbnRyb2woZWxlbWVudHMsIG9wZW4sIHRyaWdnZXJPcGVuKSB7XG4gIHZhciBwcm9wc1JlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgcHJvcHNSZWYuY3VycmVudCA9IHtcbiAgICBlbGVtZW50czogZWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIHRyaWdnZXJPcGVuOiB0cmlnZ2VyT3BlblxuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG9uR2xvYmFsTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICBpZiAocHJvcHNSZWYuY3VycmVudC5vcGVuICYmIHByb3BzUmVmLmN1cnJlbnQuZWxlbWVudHMuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkgJiYgZWxlbWVudCAhPT0gdGFyZ2V0O1xuICAgICAgfSkpIHtcbiAgICAgICAgLy8gU2hvdWxkIHRyaWdnZXIgY2xvc2VcbiAgICAgICAgcHJvcHNSZWYuY3VycmVudC50cmlnZ2VyT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uR2xvYmFsTW91c2VEb3duKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkdsb2JhbE1vdXNlRG93bik7XG4gICAgfTtcbiAgfSwgW10pO1xufSIsImltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IE9wdGlvbiBmcm9tICcuL09wdGlvbic7XG5pbXBvcnQgT3B0R3JvdXAgZnJvbSAnLi9PcHRHcm91cCc7XG5leHBvcnQgeyBPcHRpb24sIE9wdEdyb3VwIH07XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7IiwiZXhwb3J0IHZhciBJTlRFUk5BTF9QUk9QU19NQVJLID0gJ1JDX1NFTEVDVF9JTlRFUk5BTF9QUk9QU19NQVJLJzsiLCJpbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyBbdmFsdWVdIDogW107XG59XG4vKipcbiAqIENvbnZlcnQgb3V0ZXIgcHJvcHMgdmFsdWUgaW50byBpbnRlcm5hbCB2YWx1ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b0lubmVyVmFsdWUodmFsdWUsIF9yZWYpIHtcbiAgdmFyIGxhYmVsSW5WYWx1ZSA9IF9yZWYubGFiZWxJblZhbHVlLFxuICAgICAgY29tYm9ib3ggPSBfcmVmLmNvbWJvYm94O1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyAmJiBjb21ib2JveCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcblxuICBpZiAobGFiZWxJblZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxuICAgICAgICAgIHZhbCA9IF9yZWYyLnZhbHVlO1xuICAgICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDoga2V5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbi8qKlxuICogQ29udmVydCBpbnRlcm5hbCB2YWx1ZSBpbnRvIG91dCBldmVudCB2YWx1ZVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b091dGVyVmFsdWVzKHZhbHVlTGlzdCwgX3JlZjMpIHtcbiAgdmFyIG9wdGlvbkxhYmVsUHJvcCA9IF9yZWYzLm9wdGlvbkxhYmVsUHJvcCxcbiAgICAgIGxhYmVsSW5WYWx1ZSA9IF9yZWYzLmxhYmVsSW5WYWx1ZSxcbiAgICAgIHByZXZWYWx1ZSA9IF9yZWYzLnByZXZWYWx1ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgZ2V0TGFiZWxlZFZhbHVlID0gX3JlZjMuZ2V0TGFiZWxlZFZhbHVlO1xuICB2YXIgdmFsdWVzID0gdmFsdWVMaXN0O1xuXG4gIGlmIChsYWJlbEluVmFsdWUpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBnZXRMYWJlbGVkVmFsdWUodmFsLCB7XG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHByZXZWYWx1ZTogcHJldlZhbHVlLFxuICAgICAgICBsYWJlbEluVmFsdWU6IGxhYmVsSW5WYWx1ZSxcbiAgICAgICAgb3B0aW9uTGFiZWxQcm9wOiBvcHRpb25MYWJlbFByb3BcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMYXN0RW5hYmxlZFZhbHVlKG1lYXN1cmVWYWx1ZXMsIHZhbHVlcykge1xuICB2YXIgbmV3VmFsdWVzID0gX3RvQ29uc3VtYWJsZUFycmF5KHZhbHVlcyk7XG5cbiAgdmFyIHJlbW92ZUluZGV4O1xuXG4gIGZvciAocmVtb3ZlSW5kZXggPSBtZWFzdXJlVmFsdWVzLmxlbmd0aCAtIDE7IHJlbW92ZUluZGV4ID49IDA7IHJlbW92ZUluZGV4IC09IDEpIHtcbiAgICBpZiAoIW1lYXN1cmVWYWx1ZXNbcmVtb3ZlSW5kZXhdLmRpc2FibGVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgcmVtb3ZlZFZhbHVlID0gbnVsbDtcblxuICBpZiAocmVtb3ZlSW5kZXggIT09IC0xKSB7XG4gICAgcmVtb3ZlZFZhbHVlID0gbmV3VmFsdWVzW3JlbW92ZUluZGV4XTtcbiAgICBuZXdWYWx1ZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWVzOiBuZXdWYWx1ZXMsXG4gICAgcmVtb3ZlZFZhbHVlOiByZW1vdmVkVmFsdWVcbiAgfTtcbn1cbmV4cG9ydCB2YXIgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbi8qKiBJcyBjbGllbnQgc2lkZSBhbmQgbm90IGpzZG9tICovXG5cbmV4cG9ydCB2YXIgaXNCcm93c2VyQ2xpZW50ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBpc0NsaWVudDtcbnZhciB1dWlkID0gMDtcbi8qKiBHZXQgdW5pcXVlIGlkIGZvciBhY2Nlc3NpYmlsaXR5IHVzYWdlICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVVUlEKCkge1xuICB2YXIgcmV0SWQ7IC8vIFRlc3QgbmV2ZXIgcmVhY2hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICBpZiAoaXNCcm93c2VyQ2xpZW50KSB7XG4gICAgcmV0SWQgPSB1dWlkO1xuICAgIHV1aWQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXRJZCA9ICdURVNUX09SX1NTUic7XG4gIH1cblxuICByZXR1cm4gcmV0SWQ7XG59IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5cbmZ1bmN0aW9uIGNvbnZlcnROb2RlVG9PcHRpb24obm9kZSkge1xuICB2YXIga2V5ID0gbm9kZS5rZXksXG4gICAgICBfbm9kZSRwcm9wcyA9IG5vZGUucHJvcHMsXG4gICAgICBjaGlsZHJlbiA9IF9ub2RlJHByb3BzLmNoaWxkcmVuLFxuICAgICAgdmFsdWUgPSBfbm9kZSRwcm9wcy52YWx1ZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfbm9kZSRwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe1xuICAgIGtleToga2V5LFxuICAgIHZhbHVlOiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBrZXksXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gIH0sIHJlc3RQcm9wcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0Q2hpbGRyZW5Ub0RhdGEobm9kZXMpIHtcbiAgdmFyIG9wdGlvbk9ubHkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICByZXR1cm4gdG9BcnJheShub2RlcykubWFwKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobm9kZSkgfHwgIW5vZGUudHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGlzU2VsZWN0T3B0R3JvdXAgPSBub2RlLnR5cGUuaXNTZWxlY3RPcHRHcm91cCxcbiAgICAgICAga2V5ID0gbm9kZS5rZXksXG4gICAgICAgIF9ub2RlJHByb3BzMiA9IG5vZGUucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX25vZGUkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX25vZGUkcHJvcHMyLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICBpZiAob3B0aW9uT25seSB8fCAhaXNTZWxlY3RPcHRHcm91cCkge1xuICAgICAgcmV0dXJuIGNvbnZlcnROb2RlVG9PcHRpb24obm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICBrZXk6IFwiX19SQ19TRUxFQ1RfR1JQX19cIi5jb25jYXQoa2V5ID09PSBudWxsID8gaW5kZXggOiBrZXksIFwiX19cIiksXG4gICAgICBsYWJlbDoga2V5XG4gICAgfSwgcmVzdFByb3BzKSwge30sIHtcbiAgICAgIG9wdGlvbnM6IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbilcbiAgICB9KTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0pO1xufSIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3RvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHsgdG9BcnJheSB9IGZyb20gJy4vY29tbW9uVXRpbCc7XG5cbmZ1bmN0aW9uIGdldEtleShkYXRhLCBpbmRleCkge1xuICB2YXIga2V5ID0gZGF0YS5rZXk7XG4gIHZhciB2YWx1ZTtcblxuICBpZiAoJ3ZhbHVlJyBpbiBkYXRhKSB7XG4gICAgdmFsdWUgPSBkYXRhLnZhbHVlO1xuICB9XG5cbiAgaWYgKGtleSAhPT0gbnVsbCAmJiBrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBcInJjLWluZGV4LWtleS1cIi5jb25jYXQoaW5kZXgpO1xufVxuLyoqXG4gKiBGbGF0IG9wdGlvbnMgaW50byBmbGF0dGVuIGxpc3QuXG4gKiBXZSB1c2UgYG9wdGlvbk9ubHlgIGhlcmUgaXMgYWltIHRvIGF2b2lkIHVzZXIgdXNlIG5lc3RlZCBvcHRpb24gZ3JvdXAuXG4gKiBIZXJlIGlzIHNpbXBseSBzZXQgYGtleWAgdG8gdGhlIGluZGV4IGlmIG5vdCBwcm92aWRlZC5cbiAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuT3B0aW9ucyhvcHRpb25zKSB7XG4gIHZhciBmbGF0dGVuTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRpZyhsaXN0LCBpc0dyb3VwT3B0aW9uKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBpZiAoaXNHcm91cE9wdGlvbiB8fCAhKCdvcHRpb25zJyBpbiBkYXRhKSkge1xuICAgICAgICAvLyBPcHRpb25cbiAgICAgICAgZmxhdHRlbkxpc3QucHVzaCh7XG4gICAgICAgICAga2V5OiBnZXRLZXkoZGF0YSwgZmxhdHRlbkxpc3QubGVuZ3RoKSxcbiAgICAgICAgICBncm91cE9wdGlvbjogaXNHcm91cE9wdGlvbixcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3B0aW9uIEdyb3VwXG4gICAgICAgIGZsYXR0ZW5MaXN0LnB1c2goe1xuICAgICAgICAgIGtleTogZ2V0S2V5KGRhdGEsIGZsYXR0ZW5MaXN0Lmxlbmd0aCksXG4gICAgICAgICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgZGlnKGRhdGEub3B0aW9ucywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkaWcob3B0aW9ucywgZmFsc2UpO1xuICByZXR1cm4gZmxhdHRlbkxpc3Q7XG59XG4vKipcbiAqIEluamVjdCBgcHJvcHNgIGludG8gYG9wdGlvbmAgZm9yIGxlZ2FjeSB1c2FnZVxuICovXG5cbmZ1bmN0aW9uIGluamVjdFByb3BzV2l0aE9wdGlvbihvcHRpb24pIHtcbiAgdmFyIG5ld09wdGlvbiA9IF9vYmplY3RTcHJlYWQoe30sIG9wdGlvbik7XG5cbiAgaWYgKCEoJ3Byb3BzJyBpbiBuZXdPcHRpb24pKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09wdGlvbiwgJ3Byb3BzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdSZXR1cm4gdHlwZSBpcyBvcHRpb24gaW5zdGVhZCBvZiBPcHRpb24gaW5zdGFuY2UuIFBsZWFzZSByZWFkIHZhbHVlIGRpcmVjdGx5IGluc3RlYWQgb2YgcmVhZGluZyBmcm9tIGBwcm9wc2AuJyk7XG4gICAgICAgIHJldHVybiBuZXdPcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3T3B0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFZhbHVlT3B0aW9uKHZhbHVlcywgb3B0aW9ucykge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge30sXG4gICAgICBfcmVmJHByZXZWYWx1ZU9wdGlvbnMgPSBfcmVmLnByZXZWYWx1ZU9wdGlvbnMsXG4gICAgICBwcmV2VmFsdWVPcHRpb25zID0gX3JlZiRwcmV2VmFsdWVPcHRpb25zID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkcHJldlZhbHVlT3B0aW9ucztcblxuICB2YXIgb3B0aW9uTWFwID0gbmV3IE1hcCgpO1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGZsYXR0ZW5JdGVtKSB7XG4gICAgaWYgKCFmbGF0dGVuSXRlbS5ncm91cCkge1xuICAgICAgdmFyIGRhdGEgPSBmbGF0dGVuSXRlbS5kYXRhOyAvLyBDaGVjayBpZiBtYXRjaFxuXG4gICAgICBvcHRpb25NYXAuc2V0KGRhdGEudmFsdWUsIGRhdGEpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb3B0aW9uID0gb3B0aW9uTWFwLmdldCh2YWwpOyAvLyBGYWxsYmFjayB0byB0cnkgdG8gZmluZCBwcmV2IG9wdGlvbnNcblxuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSBfb2JqZWN0U3ByZWFkKHt9LCBwcmV2VmFsdWVPcHRpb25zLmZpbmQoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gb3B0Ll9JTlRFUk5BTF9PUFRJT05fVkFMVUVfID09PSB2YWw7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluamVjdFByb3BzV2l0aE9wdGlvbihvcHRpb24pO1xuICB9KTtcbn1cbmV4cG9ydCB2YXIgZ2V0TGFiZWxlZFZhbHVlID0gZnVuY3Rpb24gZ2V0TGFiZWxlZFZhbHVlKHZhbHVlLCBfcmVmMikge1xuICB2YXIgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBwcmV2VmFsdWUgPSBfcmVmMi5wcmV2VmFsdWUsXG4gICAgICBsYWJlbEluVmFsdWUgPSBfcmVmMi5sYWJlbEluVmFsdWUsXG4gICAgICBvcHRpb25MYWJlbFByb3AgPSBfcmVmMi5vcHRpb25MYWJlbFByb3A7XG4gIHZhciBpdGVtID0gZmluZFZhbHVlT3B0aW9uKFt2YWx1ZV0sIG9wdGlvbnMpWzBdO1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xuICB2YXIgcHJldlZhbEl0ZW07XG4gIHZhciBwcmV2VmFsdWVzID0gdG9BcnJheShwcmV2VmFsdWUpO1xuXG4gIGlmIChsYWJlbEluVmFsdWUpIHtcbiAgICBwcmV2VmFsSXRlbSA9IHByZXZWYWx1ZXMuZmluZChmdW5jdGlvbiAocHJldkl0ZW0pIHtcbiAgICAgIGlmIChfdHlwZW9mKHByZXZJdGVtKSA9PT0gJ29iamVjdCcgJiYgJ3ZhbHVlJyBpbiBwcmV2SXRlbSkge1xuICAgICAgICByZXR1cm4gcHJldkl0ZW0udmFsdWUgPT09IHZhbHVlO1xuICAgICAgfSAvLyBbTGVnYWN5XSBTdXBwb3J0IGBrZXlgIGFzIGB2YWx1ZWBcblxuXG4gICAgICByZXR1cm4gcHJldkl0ZW0ua2V5ID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwcmV2VmFsSXRlbSAmJiBfdHlwZW9mKHByZXZWYWxJdGVtKSA9PT0gJ29iamVjdCcgJiYgJ2xhYmVsJyBpbiBwcmV2VmFsSXRlbSkge1xuICAgIHJlc3VsdC5sYWJlbCA9IHByZXZWYWxJdGVtLmxhYmVsO1xuXG4gICAgaWYgKGl0ZW0gJiYgdHlwZW9mIHByZXZWYWxJdGVtLmxhYmVsID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgaXRlbVtvcHRpb25MYWJlbFByb3BdID09PSAnc3RyaW5nJyAmJiBwcmV2VmFsSXRlbS5sYWJlbC50cmltKCkgIT09IGl0ZW1bb3B0aW9uTGFiZWxQcm9wXS50cmltKCkpIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsICdgbGFiZWxgIG9mIGB2YWx1ZWAgaXMgbm90IHNhbWUgYXMgYGxhYmVsYCBpbiBTZWxlY3Qgb3B0aW9ucy4nKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXRlbSAmJiBvcHRpb25MYWJlbFByb3AgaW4gaXRlbSkge1xuICAgIHJlc3VsdC5sYWJlbCA9IGl0ZW1bb3B0aW9uTGFiZWxQcm9wXTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQubGFiZWwgPSB2YWx1ZTtcbiAgfSAvLyBVc2VkIGZvciBtb3Rpb24gY29udHJvbFxuXG5cbiAgcmVzdWx0LmtleSA9IHJlc3VsdC52YWx1ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRvUmF3U3RyaW5nKGNvbnRlbnQpIHtcbiAgcmV0dXJuIHRvQXJyYXkoY29udGVudCkuam9pbignJyk7XG59XG4vKiogRmlsdGVyIHNpbmdsZSBvcHRpb24gaWYgbWF0Y2ggdGhlIHNlYXJjaCB0ZXh0ICovXG5cblxuZnVuY3Rpb24gZ2V0RmlsdGVyRnVuY3Rpb24ob3B0aW9uRmlsdGVyUHJvcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHNlYXJjaFZhbHVlLCBvcHRpb24pIHtcbiAgICB2YXIgbG93ZXJTZWFyY2hUZXh0ID0gc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKTsgLy8gR3JvdXAgbGFiZWwgc2VhcmNoXG5cbiAgICBpZiAoJ29wdGlvbnMnIGluIG9wdGlvbikge1xuICAgICAgcmV0dXJuIHRvUmF3U3RyaW5nKG9wdGlvbi5sYWJlbCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaFRleHQpO1xuICAgIH0gLy8gT3B0aW9uIHZhbHVlIHNlYXJjaFxuXG5cbiAgICB2YXIgcmF3VmFsdWUgPSBvcHRpb25bb3B0aW9uRmlsdGVyUHJvcF07XG4gICAgdmFyIHZhbHVlID0gdG9SYXdTdHJpbmcocmF3VmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKGxvd2VyU2VhcmNoVGV4dCk7XG4gIH07XG59XG4vKiogRmlsdGVyIG9wdGlvbnMgYW5kIHJldHVybiBhIG5ldyBvcHRpb25zIGJ5IHRoZSBzZWFyY2ggdGV4dCAqL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPcHRpb25zKHNlYXJjaFZhbHVlLCBvcHRpb25zLCBfcmVmMykge1xuICB2YXIgb3B0aW9uRmlsdGVyUHJvcCA9IF9yZWYzLm9wdGlvbkZpbHRlclByb3AsXG4gICAgICBmaWx0ZXJPcHRpb24gPSBfcmVmMy5maWx0ZXJPcHRpb247XG4gIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBbXTtcbiAgdmFyIGZpbHRlckZ1bmM7XG5cbiAgaWYgKGZpbHRlck9wdGlvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gX3RvQ29uc3VtYWJsZUFycmF5KG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBmaWx0ZXJGdW5jID0gZmlsdGVyT3B0aW9uO1xuICB9IGVsc2Uge1xuICAgIGZpbHRlckZ1bmMgPSBnZXRGaWx0ZXJGdW5jdGlvbihvcHRpb25GaWx0ZXJQcm9wKTtcbiAgfVxuXG4gIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIC8vIEdyb3VwIHNob3VsZCBjaGVjayBjaGlsZCBvcHRpb25zXG4gICAgaWYgKCdvcHRpb25zJyBpbiBpdGVtKSB7XG4gICAgICAvLyBDaGVjayBncm91cCBmaXJzdFxuICAgICAgdmFyIG1hdGNoR3JvdXAgPSBmaWx0ZXJGdW5jKHNlYXJjaFZhbHVlLCBpdGVtKTtcblxuICAgICAgaWYgKG1hdGNoR3JvdXApIHtcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDaGVjayBvcHRpb25cbiAgICAgICAgdmFyIHN1Yk9wdGlvbnMgPSBpdGVtLm9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJJdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbHRlckZ1bmMoc2VhcmNoVmFsdWUsIHN1Ykl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc3ViT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMucHVzaChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW0pLCB7fSwge1xuICAgICAgICAgICAgb3B0aW9uczogc3ViT3B0aW9uc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlckZ1bmMoc2VhcmNoVmFsdWUsIGluamVjdFByb3BzV2l0aE9wdGlvbihpdGVtKSkpIHtcbiAgICAgIGZpbHRlcmVkT3B0aW9ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VwYXJhdGVkQ29udGVudCh0ZXh0LCB0b2tlbnMpIHtcbiAgaWYgKCF0b2tlbnMgfHwgIXRva2Vucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXRjaCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNlcGFyYXRlKHN0ciwgX3JlZjQpIHtcbiAgICB2YXIgX3JlZjUgPSBfdG9BcnJheShfcmVmNCksXG4gICAgICAgIHRva2VuID0gX3JlZjVbMF0sXG4gICAgICAgIHJlc3RUb2tlbnMgPSBfcmVmNS5zbGljZSgxKTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiBbc3RyXTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdCA9IHN0ci5zcGxpdCh0b2tlbik7XG4gICAgbWF0Y2ggPSBtYXRjaCB8fCBsaXN0Lmxlbmd0aCA+IDE7XG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2TGlzdCwgdW5pdFN0cikge1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJldkxpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoc2VwYXJhdGUodW5pdFN0ciwgcmVzdFRva2VucykpKTtcbiAgICB9LCBbXSkuZmlsdGVyKGZ1bmN0aW9uICh1bml0KSB7XG4gICAgICByZXR1cm4gdW5pdDtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBsaXN0ID0gc2VwYXJhdGUodGV4dCwgdG9rZW5zKTtcbiAgcmV0dXJuIG1hdGNoID8gbGlzdCA6IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWx1ZURpc2FibGVkKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBvcHRpb24gPSBmaW5kVmFsdWVPcHRpb24oW3ZhbHVlXSwgb3B0aW9ucylbMF07XG4gIHJldHVybiBvcHRpb24uZGlzYWJsZWQ7XG59XG4vKipcbiAqIGB0YWdzYCBtb2RlIHNob3VsZCBmaWxsIHVuLWxpc3QgaXRlbSBpbnRvIHRoZSBvcHRpb24gbGlzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxsT3B0aW9uc1dpdGhNaXNzaW5nVmFsdWUob3B0aW9ucywgdmFsdWUsIG9wdGlvbkxhYmVsUHJvcCwgbGFiZWxJblZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSB0b0FycmF5KHZhbHVlKS5zbGljZSgpLnNvcnQoKTtcblxuICB2YXIgY2xvbmVPcHRpb25zID0gX3RvQ29uc3VtYWJsZUFycmF5KG9wdGlvbnMpOyAvLyBDb252ZXJ0IG9wdGlvbnMgdmFsdWUgdG8gc2V0XG5cblxuICB2YXIgb3B0aW9uVmFsdWVzID0gbmV3IFNldCgpO1xuICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdCkge1xuICAgIGlmIChvcHQub3B0aW9ucykge1xuICAgICAgb3B0Lm9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViT3B0KSB7XG4gICAgICAgIG9wdGlvblZhbHVlcy5hZGQoc3ViT3B0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25WYWx1ZXMuYWRkKG9wdC52YWx1ZSk7XG4gICAgfVxuICB9KTsgLy8gRmlsbCBtaXNzaW5nIHZhbHVlXG5cbiAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgdmFsID0gbGFiZWxJblZhbHVlID8gaXRlbS52YWx1ZSA6IGl0ZW07XG5cbiAgICBpZiAoIW9wdGlvblZhbHVlcy5oYXModmFsKSkge1xuICAgICAgdmFyIF9yZWY2O1xuXG4gICAgICBjbG9uZU9wdGlvbnMucHVzaChsYWJlbEluVmFsdWUgPyAoX3JlZjYgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9yZWY2LCBvcHRpb25MYWJlbFByb3AsIGl0ZW0ubGFiZWwpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjYsIFwidmFsdWVcIiwgdmFsKSwgX3JlZjYpIDoge1xuICAgICAgICB2YWx1ZTogdmFsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2xvbmVPcHRpb25zO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3YXJuaW5nLCB7IG5vdGVPbmNlIH0gZnJvbSBcInJjLXV0aWwvZXMvd2FybmluZ1wiO1xuaW1wb3J0IHRvTm9kZUFycmF5IGZyb20gXCJyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXlcIjtcbmltcG9ydCB7IGNvbnZlcnRDaGlsZHJlblRvRGF0YSB9IGZyb20gJy4vbGVnYWN5VXRpbCc7XG5pbXBvcnQgeyB0b0FycmF5IH0gZnJvbSAnLi9jb21tb25VdGlsJztcblxuZnVuY3Rpb24gd2FybmluZ1Byb3BzKHByb3BzKSB7XG4gIHZhciBtb2RlID0gcHJvcHMubW9kZSxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGJhY2tmaWxsID0gcHJvcHMuYmFja2ZpbGwsXG4gICAgICBhbGxvd0NsZWFyID0gcHJvcHMuYWxsb3dDbGVhcixcbiAgICAgIHBsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgICBnZXRJbnB1dEVsZW1lbnQgPSBwcm9wcy5nZXRJbnB1dEVsZW1lbnQsXG4gICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgIG9uU2VhcmNoID0gcHJvcHMub25TZWFyY2gsXG4gICAgICBkZWZhdWx0T3BlbiA9IHByb3BzLmRlZmF1bHRPcGVuLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgbGFiZWxJblZhbHVlID0gcHJvcHMubGFiZWxJblZhbHVlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgb3B0aW9uTGFiZWxQcm9wID0gcHJvcHMub3B0aW9uTGFiZWxQcm9wO1xuICB2YXIgbXVsdGlwbGUgPSBtb2RlID09PSAnbXVsdGlwbGUnIHx8IG1vZGUgPT09ICd0YWdzJztcbiAgdmFyIG1lcmdlZFNob3dTZWFyY2ggPSBzaG93U2VhcmNoICE9PSB1bmRlZmluZWQgPyBzaG93U2VhcmNoIDogbXVsdGlwbGUgfHwgbW9kZSA9PT0gJ2NvbWJvYm94JztcbiAgdmFyIG1lcmdlZE9wdGlvbnMgPSBvcHRpb25zIHx8IGNvbnZlcnRDaGlsZHJlblRvRGF0YShjaGlsZHJlbik7IC8vIGB0YWdzYCBzaG91bGQgbm90IHNldCBvcHRpb24gYXMgZGlzYWJsZWRcblxuICB3YXJuaW5nKG1vZGUgIT09ICd0YWdzJyB8fCBtZXJnZWRPcHRpb25zLmV2ZXJ5KGZ1bmN0aW9uIChvcHQpIHtcbiAgICByZXR1cm4gIW9wdC5kaXNhYmxlZDtcbiAgfSksICdQbGVhc2UgYXZvaWQgc2V0dGluZyBvcHRpb24gdG8gZGlzYWJsZWQgaW4gdGFncyBtb2RlIHNpbmNlIHVzZXIgY2FuIGFsd2F5cyB0eXBlIHRleHQgYXMgdGFnLicpOyAvLyBgY29tYm9ib3hgICYgYHRhZ3NgIHNob3VsZCBvcHRpb24gYmUgYHN0cmluZ2AgdHlwZVxuXG4gIGlmIChtb2RlID09PSAndGFncycgfHwgbW9kZSA9PT0gJ2NvbWJvYm94Jykge1xuICAgIHZhciBoYXNOdW1iZXJWYWx1ZSA9IG1lcmdlZE9wdGlvbnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0ub3B0aW9ucykge1xuICAgICAgICByZXR1cm4gaXRlbS5vcHRpb25zLnNvbWUoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgKCd2YWx1ZScgaW4gb3B0ID8gb3B0LnZhbHVlIDogb3B0LmtleSkgPT09ICdudW1iZXInO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHR5cGVvZiAoJ3ZhbHVlJyBpbiBpdGVtID8gaXRlbS52YWx1ZSA6IGl0ZW0ua2V5KSA9PT0gJ251bWJlcic7XG4gICAgfSk7XG4gICAgd2FybmluZyghaGFzTnVtYmVyVmFsdWUsICdgdmFsdWVgIG9mIE9wdGlvbiBzaG91bGQgbm90IHVzZSBudW1iZXIgdHlwZSB3aGVuIGBtb2RlYCBpcyBgdGFnc2Agb3IgYGNvbWJvYm94YC4nKTtcbiAgfSAvLyBgY29tYm9ib3hgIHNob3VsZCBub3QgdXNlIGBvcHRpb25MYWJlbFByb3BgXG5cblxuICB3YXJuaW5nKG1vZGUgIT09ICdjb21ib2JveCcgfHwgIW9wdGlvbkxhYmVsUHJvcCwgJ2Bjb21ib2JveGAgbW9kZSBub3Qgc3VwcG9ydCBgb3B0aW9uTGFiZWxQcm9wYC4gUGxlYXNlIHNldCBgdmFsdWVgIG9uIE9wdGlvbiBkaXJlY3RseS4nKTsgLy8gT25seSBgY29tYm9ib3hgIHN1cHBvcnQgYGJhY2tmaWxsYFxuXG4gIHdhcm5pbmcobW9kZSA9PT0gJ2NvbWJvYm94JyB8fCAhYmFja2ZpbGwsICdgYmFja2ZpbGxgIG9ubHkgd29ya3Mgd2l0aCBgY29tYm9ib3hgIG1vZGUuJyk7IC8vIE9ubHkgYGNvbWJvYm94YCBzdXBwb3J0IGBnZXRJbnB1dEVsZW1lbnRgXG5cbiAgd2FybmluZyhtb2RlID09PSAnY29tYm9ib3gnIHx8ICFnZXRJbnB1dEVsZW1lbnQsICdgZ2V0SW5wdXRFbGVtZW50YCBvbmx5IHdvcmsgd2l0aCBgY29tYm9ib3hgIG1vZGUuJyk7IC8vIEN1c3RvbWl6ZSBgZ2V0SW5wdXRFbGVtZW50YCBzaG91bGQgbm90IHVzZSBgYWxsb3dDbGVhcmAgJiBgcGxhY2Vob2xkZXJgXG5cbiAgbm90ZU9uY2UobW9kZSAhPT0gJ2NvbWJvYm94JyB8fCAhZ2V0SW5wdXRFbGVtZW50IHx8ICFhbGxvd0NsZWFyIHx8ICFwbGFjZWhvbGRlciwgJ0N1c3RvbWl6ZSBgZ2V0SW5wdXRFbGVtZW50YCBzaG91bGQgY3VzdG9taXplIGNsZWFyIGFuZCBwbGFjZWhvbGRlciBsb2dpYyBpbnN0ZWFkIG9mIGNvbmZpZ3VyaW5nIGBhbGxvd0NsZWFyYCBhbmQgYHBsYWNlaG9sZGVyYC4nKTsgLy8gYG9uU2VhcmNoYCBzaG91bGQgdXNlIGluIGBjb21ib2JveGAgb3IgYHNob3dTZWFyY2hgXG5cbiAgaWYgKG9uU2VhcmNoICYmICFtZXJnZWRTaG93U2VhcmNoICYmIG1vZGUgIT09ICdjb21ib2JveCcgJiYgbW9kZSAhPT0gJ3RhZ3MnKSB7XG4gICAgd2FybmluZyhmYWxzZSwgJ2BvblNlYXJjaGAgc2hvdWxkIHdvcmsgd2l0aCBgc2hvd1NlYXJjaGAgaW5zdGVhZCBvZiB1c2UgYWxvbmUuJyk7XG4gIH1cblxuICBub3RlT25jZSghZGVmYXVsdE9wZW4gfHwgYXV0b0ZvY3VzLCAnYGRlZmF1bHRPcGVuYCBtYWtlcyBTZWxlY3Qgb3BlbiB3aXRob3V0IGZvY3VzIHdoaWNoIG1lYW5zIGl0IHdpbGwgbm90IGNsb3NlIGJ5IGNsaWNrIG91dHNpZGUuIFlvdSBjYW4gc2V0IGBhdXRvRm9jdXNgIGlmIG5lZWRlZC4nKTtcblxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHZhciB2YWx1ZXMgPSB0b0FycmF5KHZhbHVlKTtcbiAgICB3YXJuaW5nKCFsYWJlbEluVmFsdWUgfHwgdmFsdWVzLmV2ZXJ5KGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiBfdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmICgna2V5JyBpbiB2YWwgfHwgJ3ZhbHVlJyBpbiB2YWwpO1xuICAgIH0pLCAnYHZhbHVlYCBzaG91bGQgaW4gc2hhcGUgb2YgYHsgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgbGFiZWw/OiBSZWFjdE5vZGUgfWAgd2hlbiB5b3Ugc2V0IGBsYWJlbEluVmFsdWVgIHRvIGB0cnVlYCcpO1xuICAgIHdhcm5pbmcoIW11bHRpcGxlIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpLCAnYHZhbHVlYCBzaG91bGQgYmUgYXJyYXkgd2hlbiBgbW9kZWAgaXMgYG11bHRpcGxlYCBvciBgdGFnc2AnKTtcbiAgfSAvLyBTeW50YWN0aWMgc3VnYXIgc2hvdWxkIHVzZSBjb3JyZWN0IGNoaWxkcmVuIHR5cGVcblxuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHZhciBpbnZhbGlkYXRlQ2hpbGRUeXBlID0gbnVsbDtcbiAgICB0b05vZGVBcnJheShjaGlsZHJlbikuc29tZShmdW5jdGlvbiAobm9kZSkge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChub2RlKSB8fCAhbm9kZS50eXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG5cbiAgICAgIGlmICh0eXBlLmlzU2VsZWN0T3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUuaXNTZWxlY3RPcHRHcm91cCkge1xuICAgICAgICB2YXIgYWxsQ2hpbGRyZW5WYWxpZCA9IHRvTm9kZUFycmF5KG5vZGUucHJvcHMuY2hpbGRyZW4pLmV2ZXJ5KGZ1bmN0aW9uIChzdWJOb2RlKSB7XG4gICAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChzdWJOb2RlKSB8fCAhbm9kZS50eXBlIHx8IHN1Yk5vZGUudHlwZS5pc1NlbGVjdE9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW52YWxpZGF0ZUNoaWxkVHlwZSA9IHN1Yk5vZGUudHlwZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChhbGxDaGlsZHJlblZhbGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGludmFsaWRhdGVDaGlsZFR5cGUgPSB0eXBlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICBpZiAoaW52YWxpZGF0ZUNoaWxkVHlwZSkge1xuICAgICAgd2FybmluZyhmYWxzZSwgXCJgY2hpbGRyZW5gIHNob3VsZCBiZSBgU2VsZWN0Lk9wdGlvbmAgb3IgYFNlbGVjdC5PcHRHcm91cGAgaW5zdGVhZCBvZiBgXCIuY29uY2F0KGludmFsaWRhdGVDaGlsZFR5cGUuZGlzcGxheU5hbWUgfHwgaW52YWxpZGF0ZUNoaWxkVHlwZS5uYW1lIHx8IGludmFsaWRhdGVDaGlsZFR5cGUsIFwiYC5cIikpO1xuICAgIH1cblxuICAgIHdhcm5pbmcoaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkLCAnYGlucHV0VmFsdWVgIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHNlYXJjaFZhbHVlYCBpbnN0ZWFkLicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmdQcm9wczsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZW1vKGdldFZhbHVlLCBjb25kaXRpb24sIHNob3VsZFVwZGF0ZSkge1xuICB2YXIgY2FjaGVSZWYgPSBSZWFjdC51c2VSZWYoe30pO1xuXG4gIGlmICghKCd2YWx1ZScgaW4gY2FjaGVSZWYuY3VycmVudCkgfHwgc2hvdWxkVXBkYXRlKGNhY2hlUmVmLmN1cnJlbnQuY29uZGl0aW9uLCBjb25kaXRpb24pKSB7XG4gICAgY2FjaGVSZWYuY3VycmVudC52YWx1ZSA9IGdldFZhbHVlKCk7XG4gICAgY2FjaGVSZWYuY3VycmVudC5jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICByZXR1cm4gY2FjaGVSZWYuY3VycmVudC52YWx1ZTtcbn0iLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc2l6ZU9ic2VydmVyIGZyb20gJ3JjLXJlc2l6ZS1vYnNlcnZlcic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbi8qKlxuICogRmlsbCBjb21wb25lbnQgdG8gcHJvdmlkZWQgdGhlIHNjcm9sbCBjb250ZW50IHJlYWwgaGVpZ2h0LlxuICovXG5cbnZhciBGaWxsZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgb2Zmc2V0ID0gX3JlZi5vZmZzZXQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIG9uSW5uZXJSZXNpemUgPSBfcmVmLm9uSW5uZXJSZXNpemU7XG4gIHZhciBvdXRlclN0eWxlID0ge307XG4gIHZhciBpbm5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9O1xuXG4gIGlmIChvZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgIG91dGVyU3R5bGUgPSB7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfTtcbiAgICBpbm5lclN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpbm5lclN0eWxlKSwge30sIHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdChvZmZzZXQsIFwicHgpXCIpLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IDBcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogb3V0ZXJTdHlsZVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6ZU9ic2VydmVyLCB7XG4gICAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKF9yZWYyKSB7XG4gICAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gX3JlZjIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAob2Zmc2V0SGVpZ2h0ICYmIG9uSW5uZXJSZXNpemUpIHtcbiAgICAgICAgb25Jbm5lclJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgc3R5bGU6IGlubmVyU3R5bGUsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ob2xkZXItaW5uZXJcIiksIHByZWZpeENscykpLFxuICAgIHJlZjogcmVmXG4gIH0sIGNoaWxkcmVuKSkpO1xufSk7XG5GaWxsZXIuZGlzcGxheU5hbWUgPSAnRmlsbGVyJztcbmV4cG9ydCBkZWZhdWx0IEZpbGxlcjsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gSXRlbShfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBzZXRSZWYgPSBfcmVmLnNldFJlZjtcbiAgdmFyIHJlZkZ1bmMgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHNldFJlZihub2RlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgcmVmOiByZWZGdW5jXG4gIH0pO1xufSIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgRmlsbGVyIGZyb20gJy4vRmlsbGVyJztcbmltcG9ydCBTY3JvbGxCYXIgZnJvbSAnLi9TY3JvbGxCYXInO1xuaW1wb3J0IHVzZUNoaWxkcmVuIGZyb20gJy4vaG9va3MvdXNlQ2hpbGRyZW4nO1xuaW1wb3J0IHVzZUhlaWdodHMgZnJvbSAnLi9ob29rcy91c2VIZWlnaHRzJztcbmltcG9ydCB1c2VTY3JvbGxUbyBmcm9tICcuL2hvb2tzL3VzZVNjcm9sbFRvJztcbmltcG9ydCB1c2VEaWZmSXRlbSBmcm9tICcuL2hvb2tzL3VzZURpZmZJdGVtJztcbmltcG9ydCB1c2VGcmFtZVdoZWVsIGZyb20gJy4vaG9va3MvdXNlRnJhbWVXaGVlbCc7XG5pbXBvcnQgdXNlTW9iaWxlVG91Y2hNb3ZlIGZyb20gJy4vaG9va3MvdXNlTW9iaWxlVG91Y2hNb3ZlJztcbmltcG9ydCB1c2VPcmlnaW5TY3JvbGwgZnJvbSAnLi9ob29rcy91c2VPcmlnaW5TY3JvbGwnO1xudmFyIEVNUFRZX0RBVEEgPSBbXTtcbnZhciBTY3JvbGxTdHlsZSA9IHtcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIG92ZXJmbG93QW5jaG9yOiAnbm9uZSdcbn07XG5leHBvcnQgZnVuY3Rpb24gUmF3TGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLXZpcnR1YWwtbGlzdCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgaXRlbUhlaWdodCA9IHByb3BzLml0ZW1IZWlnaHQsXG4gICAgICBfcHJvcHMkZnVsbEhlaWdodCA9IHByb3BzLmZ1bGxIZWlnaHQsXG4gICAgICBmdWxsSGVpZ2h0ID0gX3Byb3BzJGZ1bGxIZWlnaHQgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkZnVsbEhlaWdodCxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpdGVtS2V5ID0gcHJvcHMuaXRlbUtleSxcbiAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG9uU2Nyb2xsID0gcHJvcHMub25TY3JvbGwsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImhlaWdodFwiLCBcIml0ZW1IZWlnaHRcIiwgXCJmdWxsSGVpZ2h0XCIsIFwic3R5bGVcIiwgXCJkYXRhXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtS2V5XCIsIFwidmlydHVhbFwiLCBcImNvbXBvbmVudFwiLCBcIm9uU2Nyb2xsXCJdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgdXNlVmlydHVhbCA9ICEhKHZpcnR1YWwgIT09IGZhbHNlICYmIGhlaWdodCAmJiBpdGVtSGVpZ2h0KTtcbiAgdmFyIGluVmlydHVhbCA9IHVzZVZpcnR1YWwgJiYgZGF0YSAmJiBpdGVtSGVpZ2h0ICogZGF0YS5sZW5ndGggPiBoZWlnaHQ7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBzY3JvbGxUb3AgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0U2Nyb2xsVG9wID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIHNjcm9sbE1vdmluZyA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRTY3JvbGxNb3ZpbmcgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBtZXJnZWRDbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lKTtcbiAgdmFyIG1lcmdlZERhdGEgPSBkYXRhIHx8IEVNUFRZX0RBVEE7XG4gIHZhciBjb21wb25lbnRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGZpbGxlcklubmVyUmVmID0gdXNlUmVmKCk7XG4gIHZhciBzY3JvbGxCYXJSZWYgPSB1c2VSZWYoKTsgLy8gSGFjayBvbiBzY3JvbGxiYXIgdG8gZW5hYmxlIGZsYXNoIGNhbGxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJdGVtIEtleSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGdldEtleSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtS2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlbUtleShpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVtpdGVtS2V5XTtcbiAgfSwgW2l0ZW1LZXldKTtcbiAgdmFyIHNoYXJlZENvbmZpZyA9IHtcbiAgICBnZXRLZXk6IGdldEtleVxuICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTY3JvbGwgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBzeW5jU2Nyb2xsVG9wKG5ld1RvcCkge1xuICAgIHNldFNjcm9sbFRvcChmdW5jdGlvbiAob3JpZ2luKSB7XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV3VG9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbHVlID0gbmV3VG9wKG9yaWdpbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IG5ld1RvcDtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsaWduZWRUb3AgPSBrZWVwSW5SYW5nZSh2YWx1ZSk7XG4gICAgICBjb21wb25lbnRSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBhbGlnbmVkVG9wO1xuICAgICAgcmV0dXJuIGFsaWduZWRUb3A7XG4gICAgfSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gTGVnYWN5ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFB1dCByZWYgaGVyZSBzaW5jZSB0aGUgcmFuZ2UgaXMgZ2VuZXJhdGUgYnkgZm9sbG93XG5cblxuICB2YXIgcmFuZ2VSZWYgPSB1c2VSZWYoe1xuICAgIHN0YXJ0OiAwLFxuICAgIGVuZDogbWVyZ2VkRGF0YS5sZW5ndGhcbiAgfSk7XG4gIHZhciBkaWZmSXRlbVJlZiA9IHVzZVJlZigpO1xuXG4gIHZhciBfdXNlRGlmZkl0ZW0gPSB1c2VEaWZmSXRlbShtZXJnZWREYXRhLCBnZXRLZXkpLFxuICAgICAgX3VzZURpZmZJdGVtMiA9IF9zbGljZWRUb0FycmF5KF91c2VEaWZmSXRlbSwgMSksXG4gICAgICBkaWZmSXRlbSA9IF91c2VEaWZmSXRlbTJbMF07XG5cbiAgZGlmZkl0ZW1SZWYuY3VycmVudCA9IGRpZmZJdGVtOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBIZWlnaHQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgX3VzZUhlaWdodHMgPSB1c2VIZWlnaHRzKGdldEtleSwgbnVsbCwgbnVsbCksXG4gICAgICBfdXNlSGVpZ2h0czIgPSBfc2xpY2VkVG9BcnJheShfdXNlSGVpZ2h0cywgNCksXG4gICAgICBzZXRJbnN0YW5jZVJlZiA9IF91c2VIZWlnaHRzMlswXSxcbiAgICAgIGNvbGxlY3RIZWlnaHQgPSBfdXNlSGVpZ2h0czJbMV0sXG4gICAgICBoZWlnaHRzID0gX3VzZUhlaWdodHMyWzJdLFxuICAgICAgaGVpZ2h0VXBkYXRlZE1hcmsgPSBfdXNlSGVpZ2h0czJbM107IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFZpc2libGUgQ2FsY3VsYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF1c2VWaXJ0dWFsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzY3JvbGxIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgIGVuZDogbWVyZ2VkRGF0YS5sZW5ndGggLSAxLFxuICAgICAgICBvZmZzZXQ6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9IC8vIEFsd2F5cyB1c2UgdmlydHVhbCBzY3JvbGwgYmFyIGluIGF2b2lkIHNoYWtpbmdcblxuXG4gICAgaWYgKCFpblZpcnR1YWwpIHtcbiAgICAgIHZhciBfZmlsbGVySW5uZXJSZWYkY3VycmU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNjcm9sbEhlaWdodDogKChfZmlsbGVySW5uZXJSZWYkY3VycmUgPSBmaWxsZXJJbm5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZmlsbGVySW5uZXJSZWYkY3VycmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWxsZXJJbm5lclJlZiRjdXJyZS5vZmZzZXRIZWlnaHQpIHx8IDAsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBlbmQ6IG1lcmdlZERhdGEubGVuZ3RoIC0gMSxcbiAgICAgICAgb2Zmc2V0OiB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGl0ZW1Ub3AgPSAwO1xuICAgIHZhciBzdGFydEluZGV4O1xuICAgIHZhciBzdGFydE9mZnNldDtcbiAgICB2YXIgZW5kSW5kZXg7XG4gICAgdmFyIGRhdGFMZW4gPSBtZXJnZWREYXRhLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YUxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgaXRlbSA9IG1lcmdlZERhdGFbaV07XG4gICAgICB2YXIga2V5ID0gZ2V0S2V5KGl0ZW0pO1xuICAgICAgdmFyIGNhY2hlSGVpZ2h0ID0gaGVpZ2h0cy5nZXQoa2V5KTtcbiAgICAgIHZhciBjdXJyZW50SXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyAoY2FjaGVIZWlnaHQgPT09IHVuZGVmaW5lZCA/IGl0ZW1IZWlnaHQgOiBjYWNoZUhlaWdodCk7IC8vIENoZWNrIGl0ZW0gdG9wIGluIHRoZSByYW5nZVxuXG4gICAgICBpZiAoY3VycmVudEl0ZW1Cb3R0b20gPj0gc2Nyb2xsVG9wICYmIHN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGFydEluZGV4ID0gaTtcbiAgICAgICAgc3RhcnRPZmZzZXQgPSBpdGVtVG9wO1xuICAgICAgfSAvLyBDaGVjayBpdGVtIGJvdHRvbSBpbiB0aGUgcmFuZ2UuIFdlIHdpbGwgcmVuZGVyIGFkZGl0aW9uYWwgb25lIGl0ZW0gZm9yIG1vdGlvbiB1c2FnZVxuXG5cbiAgICAgIGlmIChjdXJyZW50SXRlbUJvdHRvbSA+IHNjcm9sbFRvcCArIGhlaWdodCAmJiBlbmRJbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVuZEluZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgaXRlbVRvcCA9IGN1cnJlbnRJdGVtQm90dG9tO1xuICAgIH0gLy8gRmFsbGJhY2sgdG8gbm9ybWFsIGlmIG5vdCBtYXRjaC4gVGhpcyBjb2RlIHNob3VsZCBuZXZlciByZWFjaFxuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgICBzdGFydE9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGVuZEluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVuZEluZGV4ID0gbWVyZ2VkRGF0YS5sZW5ndGggLSAxO1xuICAgIH0gLy8gR2l2ZSBjYWNoZSB0byBpbXByb3ZlIHNjcm9sbCBleHBlcmllbmNlXG5cblxuICAgIGVuZEluZGV4ID0gTWF0aC5taW4oZW5kSW5kZXggKyAxLCBtZXJnZWREYXRhLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbEhlaWdodDogaXRlbVRvcCxcbiAgICAgIHN0YXJ0OiBzdGFydEluZGV4LFxuICAgICAgZW5kOiBlbmRJbmRleCxcbiAgICAgIG9mZnNldDogc3RhcnRPZmZzZXRcbiAgICB9O1xuICB9LCBbaW5WaXJ0dWFsLCB1c2VWaXJ0dWFsLCBzY3JvbGxUb3AsIG1lcmdlZERhdGEsIGhlaWdodFVwZGF0ZWRNYXJrLCBoZWlnaHRdKSxcbiAgICAgIHNjcm9sbEhlaWdodCA9IF9SZWFjdCR1c2VNZW1vLnNjcm9sbEhlaWdodCxcbiAgICAgIHN0YXJ0ID0gX1JlYWN0JHVzZU1lbW8uc3RhcnQsXG4gICAgICBlbmQgPSBfUmVhY3QkdXNlTWVtby5lbmQsXG4gICAgICBvZmZzZXQgPSBfUmVhY3QkdXNlTWVtby5vZmZzZXQ7XG5cbiAgcmFuZ2VSZWYuY3VycmVudC5zdGFydCA9IHN0YXJ0O1xuICByYW5nZVJlZi5jdXJyZW50LmVuZCA9IGVuZDsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBJbiBSYW5nZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIG1heFNjcm9sbEhlaWdodCA9IHNjcm9sbEhlaWdodCAtIGhlaWdodDtcbiAgdmFyIG1heFNjcm9sbEhlaWdodFJlZiA9IHVzZVJlZihtYXhTY3JvbGxIZWlnaHQpO1xuICBtYXhTY3JvbGxIZWlnaHRSZWYuY3VycmVudCA9IG1heFNjcm9sbEhlaWdodDtcblxuICBmdW5jdGlvbiBrZWVwSW5SYW5nZShuZXdTY3JvbGxUb3ApIHtcbiAgICB2YXIgbmV3VG9wID0gTWF0aC5tYXgobmV3U2Nyb2xsVG9wLCAwKTtcblxuICAgIGlmICghTnVtYmVyLmlzTmFOKG1heFNjcm9sbEhlaWdodFJlZi5jdXJyZW50KSkge1xuICAgICAgbmV3VG9wID0gTWF0aC5taW4obmV3VG9wLCBtYXhTY3JvbGxIZWlnaHRSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1RvcDtcbiAgfVxuXG4gIHZhciBpc1Njcm9sbEF0VG9wID0gc2Nyb2xsVG9wIDw9IDA7XG4gIHZhciBpc1Njcm9sbEF0Qm90dG9tID0gc2Nyb2xsVG9wID49IG1heFNjcm9sbEhlaWdodDtcbiAgdmFyIG9yaWdpblNjcm9sbCA9IHVzZU9yaWdpblNjcm9sbChpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gU2Nyb2xsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gb25TY3JvbGxCYXIobmV3U2Nyb2xsVG9wKSB7XG4gICAgdmFyIG5ld1RvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICBzeW5jU2Nyb2xsVG9wKG5ld1RvcCk7XG4gIH0gLy8gVGhpcyBjb2RlIG1heSBvbmx5IHRyaWdnZXIgaW4gdGVzdCBjYXNlLlxuICAvLyBCdXQgd2Ugc3RpbGwgbmVlZCBhIHN5bmMgaWYgc29tZSBzcGVjaWFsIGVzY2FwZVxuXG5cbiAgZnVuY3Rpb24gb25GYWxsYmFja1Njcm9sbChlKSB7XG4gICAgdmFyIG5ld1Njcm9sbFRvcCA9IGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3A7XG5cbiAgICBpZiAobmV3U2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcbiAgICAgIHN5bmNTY3JvbGxUb3AobmV3U2Nyb2xsVG9wKTtcbiAgICB9IC8vIFRyaWdnZXIgb3JpZ2luIG9uU2Nyb2xsXG5cblxuICAgIG9uU2Nyb2xsID09PSBudWxsIHx8IG9uU2Nyb2xsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblNjcm9sbChlKTtcbiAgfSAvLyBTaW5jZSB0aGlzIGFkZGVkIGluIGdsb2JhbCxzaG91bGQgdXNlIHJlZiB0byBrZWVwIHVwZGF0ZVxuXG5cbiAgdmFyIF91c2VGcmFtZVdoZWVsID0gdXNlRnJhbWVXaGVlbCh1c2VWaXJ0dWFsLCBpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tLCBmdW5jdGlvbiAob2Zmc2V0WSkge1xuICAgIHN5bmNTY3JvbGxUb3AoZnVuY3Rpb24gKHRvcCkge1xuICAgICAgdmFyIG5ld1RvcCA9IHRvcCArIG9mZnNldFk7XG4gICAgICByZXR1cm4gbmV3VG9wO1xuICAgIH0pO1xuICB9KSxcbiAgICAgIF91c2VGcmFtZVdoZWVsMiA9IF9zbGljZWRUb0FycmF5KF91c2VGcmFtZVdoZWVsLCAyKSxcbiAgICAgIG9uUmF3V2hlZWwgPSBfdXNlRnJhbWVXaGVlbDJbMF0sXG4gICAgICBvbkZpcmVGb3hTY3JvbGwgPSBfdXNlRnJhbWVXaGVlbDJbMV07IC8vIE1vYmlsZSB0b3VjaCBtb3ZlXG5cblxuICB1c2VNb2JpbGVUb3VjaE1vdmUodXNlVmlydHVhbCwgY29tcG9uZW50UmVmLCBmdW5jdGlvbiAoZGVsdGFZLCBzbW9vdGhPZmZzZXQpIHtcbiAgICBpZiAob3JpZ2luU2Nyb2xsKGRlbHRhWSwgc21vb3RoT2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uUmF3V2hlZWwoe1xuICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge30sXG4gICAgICBkZWx0YVk6IGRlbHRhWVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IG9ubHlcbiAgICBmdW5jdGlvbiBvbk1vek1vdXNlUGl4ZWxTY3JvbGwoZSkge1xuICAgICAgaWYgKHVzZVZpcnR1YWwpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25SYXdXaGVlbCk7XG4gICAgY29tcG9uZW50UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBvbkZpcmVGb3hTY3JvbGwpO1xuICAgIGNvbXBvbmVudFJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBvbk1vek1vdXNlUGl4ZWxTY3JvbGwpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wb25lbnRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uUmF3V2hlZWwpO1xuICAgICAgY29tcG9uZW50UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBvbkZpcmVGb3hTY3JvbGwpO1xuICAgICAgY29tcG9uZW50UmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignTW96TW91c2VQaXhlbFNjcm9sbCcsIG9uTW96TW91c2VQaXhlbFNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3VzZVZpcnR1YWxdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlZiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIHNjcm9sbFRvID0gdXNlU2Nyb2xsVG8oY29tcG9uZW50UmVmLCBtZXJnZWREYXRhLCBoZWlnaHRzLCBpdGVtSGVpZ2h0LCBnZXRLZXksIGNvbGxlY3RIZWlnaHQsIHN5bmNTY3JvbGxUb3AsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Njcm9sbEJhclJlZiRjdXJyZW50O1xuXG4gICAgKF9zY3JvbGxCYXJSZWYkY3VycmVudCA9IHNjcm9sbEJhclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfc2Nyb2xsQmFyUmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zY3JvbGxCYXJSZWYkY3VycmVudC5kZWxheUhpZGRlbigpO1xuICB9KTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2Nyb2xsVG86IHNjcm9sbFRvXG4gICAgfTtcbiAgfSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBsaXN0Q2hpbGRyZW4gPSB1c2VDaGlsZHJlbihtZXJnZWREYXRhLCBzdGFydCwgZW5kLCBzZXRJbnN0YW5jZVJlZiwgY2hpbGRyZW4sIHNoYXJlZENvbmZpZyk7XG4gIHZhciBjb21wb25lbnRTdHlsZSA9IG51bGw7XG5cbiAgaWYgKGhlaWdodCkge1xuICAgIGNvbXBvbmVudFN0eWxlID0gX29iamVjdFNwcmVhZChfZGVmaW5lUHJvcGVydHkoe30sIGZ1bGxIZWlnaHQgPyAnaGVpZ2h0JyA6ICdtYXhIZWlnaHQnLCBoZWlnaHQpLCBTY3JvbGxTdHlsZSk7XG5cbiAgICBpZiAodXNlVmlydHVhbCkge1xuICAgICAgY29tcG9uZW50U3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG5cbiAgICAgIGlmIChzY3JvbGxNb3ZpbmcpIHtcbiAgICAgICAgY29tcG9uZW50U3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBzdHlsZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdHlsZSksIHt9LCB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0pLFxuICAgIGNsYXNzTmFtZTogbWVyZ2VkQ2xhc3NOYW1lXG4gIH0sIHJlc3RQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhvbGRlclwiKSxcbiAgICBzdHlsZTogY29tcG9uZW50U3R5bGUsXG4gICAgcmVmOiBjb21wb25lbnRSZWYsXG4gICAgb25TY3JvbGw6IG9uRmFsbGJhY2tTY3JvbGxcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxsZXIsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBoZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICBvZmZzZXQ6IG9mZnNldCxcbiAgICBvbklubmVyUmVzaXplOiBjb2xsZWN0SGVpZ2h0LFxuICAgIHJlZjogZmlsbGVySW5uZXJSZWZcbiAgfSwgbGlzdENoaWxkcmVuKSksIHVzZVZpcnR1YWwgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxCYXIsIHtcbiAgICByZWY6IHNjcm9sbEJhclJlZixcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICBjb3VudDogbWVyZ2VkRGF0YS5sZW5ndGgsXG4gICAgb25TY3JvbGw6IG9uU2Nyb2xsQmFyLFxuICAgIG9uU3RhcnRNb3ZlOiBmdW5jdGlvbiBvblN0YXJ0TW92ZSgpIHtcbiAgICAgIHNldFNjcm9sbE1vdmluZyh0cnVlKTtcbiAgICB9LFxuICAgIG9uU3RvcE1vdmU6IGZ1bmN0aW9uIG9uU3RvcE1vdmUoKSB7XG4gICAgICBzZXRTY3JvbGxNb3ZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSkpO1xufVxudmFyIExpc3QgPSBSZWFjdC5mb3J3YXJkUmVmKFJhd0xpc3QpO1xuTGlzdC5kaXNwbGF5TmFtZSA9ICdMaXN0JztcbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCByYWYgZnJvbSBcInJjLXV0aWwvZXMvcmFmXCI7XG52YXIgTUlOX1NJWkUgPSAyMDtcblxuZnVuY3Rpb24gZ2V0UGFnZVkoZSkge1xuICByZXR1cm4gJ3RvdWNoZXMnIGluIGUgPyBlLnRvdWNoZXNbMF0ucGFnZVkgOiBlLnBhZ2VZO1xufVxuXG52YXIgU2Nyb2xsQmFyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTY3JvbGxCYXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoU2Nyb2xsQmFyKTtcblxuICBmdW5jdGlvbiBTY3JvbGxCYXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbEJhcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLm1vdmVSYWYgPSBudWxsO1xuICAgIF90aGlzLnNjcm9sbGJhclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLnRodW1iUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgX3RoaXMudmlzaWJsZVRpbWVvdXQgPSBudWxsO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgcGFnZVk6IG51bGwsXG4gICAgICBzdGFydFRvcDogbnVsbCxcbiAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLmRlbGF5SGlkZGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnZpc2libGVUaW1lb3V0KTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudmlzaWJsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uU2Nyb2xsYmFyVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uQ29udGFpbmVyTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gQ2xlYW4gPT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gICAgX3RoaXMucGF0Y2hFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbk1vdXNlVXApO1xuXG4gICAgICBfdGhpcy50aHVtYlJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcblxuICAgICAgX3RoaXMudGh1bWJSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIF90aGlzLm9uTW91c2VVcCk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbW92ZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBfdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uTW91c2VVcCk7XG5cbiAgICAgIF90aGlzLnNjcm9sbGJhclJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBfdGhpcy5vblNjcm9sbGJhclRvdWNoU3RhcnQpO1xuXG4gICAgICBfdGhpcy50aHVtYlJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBfdGhpcy5vbk1vdXNlRG93bik7XG5cbiAgICAgIF90aGlzLnRodW1iUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuXG4gICAgICBfdGhpcy50aHVtYlJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgX3RoaXMub25Nb3VzZVVwKTtcblxuICAgICAgcmFmLmNhbmNlbChfdGhpcy5tb3ZlUmFmKTtcbiAgICB9OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PSBUaHVtYiA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgICBfdGhpcy5vbk1vdXNlRG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25TdGFydE1vdmUgPSBfdGhpcy5wcm9wcy5vblN0YXJ0TW92ZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgcGFnZVk6IGdldFBhZ2VZKGUpLFxuICAgICAgICBzdGFydFRvcDogX3RoaXMuZ2V0VG9wKClcbiAgICAgIH0pO1xuXG4gICAgICBvblN0YXJ0TW92ZSgpO1xuXG4gICAgICBfdGhpcy5wYXRjaEV2ZW50cygpO1xuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBkcmFnZ2luZyA9IF90aGlzJHN0YXRlLmRyYWdnaW5nLFxuICAgICAgICAgIHBhZ2VZID0gX3RoaXMkc3RhdGUucGFnZVksXG4gICAgICAgICAgc3RhcnRUb3AgPSBfdGhpcyRzdGF0ZS5zdGFydFRvcDtcbiAgICAgIHZhciBvblNjcm9sbCA9IF90aGlzLnByb3BzLm9uU2Nyb2xsO1xuICAgICAgcmFmLmNhbmNlbChfdGhpcy5tb3ZlUmFmKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHZhciBvZmZzZXRZID0gZ2V0UGFnZVkoZSkgLSBwYWdlWTtcbiAgICAgICAgdmFyIG5ld1RvcCA9IHN0YXJ0VG9wICsgb2Zmc2V0WTtcblxuICAgICAgICB2YXIgZW5hYmxlU2Nyb2xsUmFuZ2UgPSBfdGhpcy5nZXRFbmFibGVTY3JvbGxSYW5nZSgpO1xuXG4gICAgICAgIHZhciBlbmFibGVIZWlnaHRSYW5nZSA9IF90aGlzLmdldEVuYWJsZUhlaWdodFJhbmdlKCk7XG5cbiAgICAgICAgdmFyIHB0ZyA9IGVuYWJsZUhlaWdodFJhbmdlID8gbmV3VG9wIC8gZW5hYmxlSGVpZ2h0UmFuZ2UgOiAwO1xuICAgICAgICB2YXIgbmV3U2Nyb2xsVG9wID0gTWF0aC5jZWlsKHB0ZyAqIGVuYWJsZVNjcm9sbFJhbmdlKTtcbiAgICAgICAgX3RoaXMubW92ZVJhZiA9IHJhZihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgb25TY3JvbGwobmV3U2Nyb2xsVG9wKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvblN0b3BNb3ZlID0gX3RoaXMucHJvcHMub25TdG9wTW92ZTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnZ2luZzogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBvblN0b3BNb3ZlKCk7XG5cbiAgICAgIF90aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PSBDYWxjdWxhdGUgPT09PT09PT09PT09PT09PT09PT09XG5cblxuICAgIF90aGlzLmdldFNwaW5IZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wcy5oZWlnaHQsXG4gICAgICAgICAgY291bnQgPSBfdGhpcyRwcm9wcy5jb3VudDtcbiAgICAgIHZhciBiYXNlSGVpZ2h0ID0gaGVpZ2h0IC8gY291bnQgKiAxMDtcbiAgICAgIGJhc2VIZWlnaHQgPSBNYXRoLm1heChiYXNlSGVpZ2h0LCBNSU5fU0laRSk7XG4gICAgICBiYXNlSGVpZ2h0ID0gTWF0aC5taW4oYmFzZUhlaWdodCwgaGVpZ2h0IC8gMik7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihiYXNlSGVpZ2h0KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0RW5hYmxlU2Nyb2xsUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3RoaXMkcHJvcHMyLnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0O1xuICAgICAgcmV0dXJuIHNjcm9sbEhlaWdodCAtIGhlaWdodCB8fCAwO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbmFibGVIZWlnaHRSYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBfdGhpcy5wcm9wcy5oZWlnaHQ7XG5cbiAgICAgIHZhciBzcGluSGVpZ2h0ID0gX3RoaXMuZ2V0U3BpbkhlaWdodCgpO1xuXG4gICAgICByZXR1cm4gaGVpZ2h0IC0gc3BpbkhlaWdodCB8fCAwO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRUb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gX3RoaXMucHJvcHMuc2Nyb2xsVG9wO1xuXG4gICAgICB2YXIgZW5hYmxlU2Nyb2xsUmFuZ2UgPSBfdGhpcy5nZXRFbmFibGVTY3JvbGxSYW5nZSgpO1xuXG4gICAgICB2YXIgZW5hYmxlSGVpZ2h0UmFuZ2UgPSBfdGhpcy5nZXRFbmFibGVIZWlnaHRSYW5nZSgpO1xuXG4gICAgICBpZiAoc2Nyb2xsVG9wID09PSAwIHx8IGVuYWJsZVNjcm9sbFJhbmdlID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHRnID0gc2Nyb2xsVG9wIC8gZW5hYmxlU2Nyb2xsUmFuZ2U7XG4gICAgICByZXR1cm4gcHRnICogZW5hYmxlSGVpZ2h0UmFuZ2U7XG4gICAgfTsgLy8gTm90IHNob3cgc2Nyb2xsYmFyIHdoZW4gaGVpZ2h0IGlzIGxhcmdlIHRoYW5lIHNjcm9sbEhlaWdodFxuXG5cbiAgICBfdGhpcy5nZXRWaXNpYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZpc2libGUgPSBfdGhpcy5zdGF0ZS52aXNpYmxlO1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzMy5oZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3RoaXMkcHJvcHMzLnNjcm9sbEhlaWdodDtcblxuICAgICAgaWYgKGhlaWdodCA+PSBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNjcm9sbEJhciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNjcm9sbGJhclJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uU2Nyb2xsYmFyVG91Y2hTdGFydCk7XG4gICAgICB0aGlzLnRodW1iUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Nb3VzZURvd24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHByZXZQcm9wcy5zY3JvbGxUb3AgIT09IHRoaXMucHJvcHMuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHRoaXMuZGVsYXlIaWRkZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50cygpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudmlzaWJsZVRpbWVvdXQpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09PT1cblxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLnN0YXRlLmRyYWdnaW5nO1xuICAgICAgdmFyIHByZWZpeENscyA9IHRoaXMucHJvcHMucHJlZml4Q2xzO1xuICAgICAgdmFyIHNwaW5IZWlnaHQgPSB0aGlzLmdldFNwaW5IZWlnaHQoKTtcbiAgICAgIHZhciB0b3AgPSB0aGlzLmdldFRvcCgpO1xuICAgICAgdmFyIHZpc2libGUgPSB0aGlzLmdldFZpc2libGUoKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiB0aGlzLnNjcm9sbGJhclJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNjcm9sbGJhclwiKSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGRpc3BsYXk6IHZpc2libGUgPyBudWxsIDogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uQ29udGFpbmVyTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlTW92ZTogdGhpcy5kZWxheUhpZGRlblxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHJlZjogdGhpcy50aHVtYlJlZixcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Nyb2xsYmFyLXRodW1iXCIpLCBfZGVmaW5lUHJvcGVydHkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Nyb2xsYmFyLXRodW1iLW1vdmluZ1wiKSwgZHJhZ2dpbmcpKSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogc3BpbkhlaWdodCxcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogOTksXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNjcm9sbEJhcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgU2Nyb2xsQmFyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vSXRlbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDaGlsZHJlbihsaXN0LCBzdGFydEluZGV4LCBlbmRJbmRleCwgc2V0Tm9kZVJlZiwgcmVuZGVyRnVuYywgX3JlZikge1xuICB2YXIgZ2V0S2V5ID0gX3JlZi5nZXRLZXk7XG4gIHJldHVybiBsaXN0LnNsaWNlKHN0YXJ0SW5kZXgsIGVuZEluZGV4ICsgMSkubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHZhciBlbGVJbmRleCA9IHN0YXJ0SW5kZXggKyBpbmRleDtcbiAgICB2YXIgbm9kZSA9IHJlbmRlckZ1bmMoaXRlbSwgZWxlSW5kZXgsIHsvLyBzdHlsZTogc3RhdHVzID09PSAnTUVBU1VSRV9TVEFSVCcgPyB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0gOiB7fSxcbiAgICB9KTtcbiAgICB2YXIga2V5ID0gZ2V0S2V5KGl0ZW0pO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEl0ZW0sIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgc2V0UmVmOiBmdW5jdGlvbiBzZXRSZWYoZWxlKSB7XG4gICAgICAgIHJldHVybiBzZXROb2RlUmVmKGl0ZW0sIGVsZSk7XG4gICAgICB9XG4gICAgfSwgbm9kZSk7XG4gIH0pO1xufSIsImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRMaXN0RGlmZkluZGV4IH0gZnJvbSAnLi4vdXRpbHMvYWxnb3JpdGhtVXRpbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEaWZmSXRlbShkYXRhLCBnZXRLZXksIG9uRGlmZikge1xuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZGF0YSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHByZXZEYXRhID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFByZXZEYXRhID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgZGlmZkl0ZW0gPSBfUmVhY3QkdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0RGlmZkl0ZW0gPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpZmYgPSBmaW5kTGlzdERpZmZJbmRleChwcmV2RGF0YSB8fCBbXSwgZGF0YSB8fCBbXSwgZ2V0S2V5KTtcblxuICAgIGlmICgoZGlmZiA9PT0gbnVsbCB8fCBkaWZmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWZmLmluZGV4KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBvbkRpZmYgPT09IG51bGwgfHwgb25EaWZmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkRpZmYoZGlmZi5pbmRleCk7XG4gICAgICBzZXREaWZmSXRlbShkYXRhW2RpZmYuaW5kZXhdKTtcbiAgICB9XG5cbiAgICBzZXRQcmV2RGF0YShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcbiAgcmV0dXJuIFtkaWZmSXRlbV07XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmltcG9ydCBpc0ZGIGZyb20gJy4uL3V0aWxzL2lzRmlyZWZveCc7XG5pbXBvcnQgdXNlT3JpZ2luU2Nyb2xsIGZyb20gJy4vdXNlT3JpZ2luU2Nyb2xsJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZyYW1lV2hlZWwoaW5WaXJ0dWFsLCBpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tLCBvbldoZWVsRGVsdGEpIHtcbiAgdmFyIG9mZnNldFJlZiA9IHVzZVJlZigwKTtcbiAgdmFyIG5leHRGcmFtZVJlZiA9IHVzZVJlZihudWxsKTsgLy8gRmlyZWZveCBwYXRjaFxuXG4gIHZhciB3aGVlbFZhbHVlUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXNNb3VzZVNjcm9sbFJlZiA9IHVzZVJlZihmYWxzZSk7IC8vIFNjcm9sbCBzdGF0dXMgc3luY1xuXG4gIHZhciBvcmlnaW5TY3JvbGwgPSB1c2VPcmlnaW5TY3JvbGwoaXNTY3JvbGxBdFRvcCwgaXNTY3JvbGxBdEJvdHRvbSk7XG5cbiAgZnVuY3Rpb24gb25XaGVlbChldmVudCkge1xuICAgIGlmICghaW5WaXJ0dWFsKSByZXR1cm47XG4gICAgcmFmLmNhbmNlbChuZXh0RnJhbWVSZWYuY3VycmVudCk7XG4gICAgdmFyIGRlbHRhWSA9IGV2ZW50LmRlbHRhWTtcbiAgICBvZmZzZXRSZWYuY3VycmVudCArPSBkZWx0YVk7XG4gICAgd2hlZWxWYWx1ZVJlZi5jdXJyZW50ID0gZGVsdGFZOyAvLyBEbyBub3RoaW5nIHdoZW4gc2Nyb2xsIGF0IHRoZSBlZGdlLCBTa2lwIGNoZWNrIHdoZW4gaXMgaW4gc2Nyb2xsXG5cbiAgICBpZiAob3JpZ2luU2Nyb2xsKGRlbHRhWSkpIHJldHVybjsgLy8gUHJveHkgb2Ygc2Nyb2xsIGV2ZW50c1xuXG4gICAgaWYgKCFpc0ZGKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG5leHRGcmFtZVJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFBhdGNoIGEgbXVsdGlwbGUgZm9yIEZpcmVmb3ggdG8gZml4IHdoZWVsIG51bWJlciB0b28gc21hbGxcbiAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjYzNzIjaXNzdWVjb21tZW50LTY3OTQ2MDI2NlxuICAgICAgdmFyIHBhdGNoTXVsdGlwbGUgPSBpc01vdXNlU2Nyb2xsUmVmLmN1cnJlbnQgPyAxMCA6IDE7XG4gICAgICBvbldoZWVsRGVsdGEob2Zmc2V0UmVmLmN1cnJlbnQgKiBwYXRjaE11bHRpcGxlKTtcbiAgICAgIG9mZnNldFJlZi5jdXJyZW50ID0gMDtcbiAgICB9KTtcbiAgfSAvLyBBIHBhdGNoIGZvciBmaXJlZm94XG5cblxuICBmdW5jdGlvbiBvbkZpcmVGb3hTY3JvbGwoZXZlbnQpIHtcbiAgICBpZiAoIWluVmlydHVhbCkgcmV0dXJuO1xuICAgIGlzTW91c2VTY3JvbGxSZWYuY3VycmVudCA9IGV2ZW50LmRldGFpbCA9PT0gd2hlZWxWYWx1ZVJlZi5jdXJyZW50O1xuICB9XG5cbiAgcmV0dXJuIFtvbldoZWVsLCBvbkZpcmVGb3hTY3JvbGxdO1xufSIsImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmaW5kRE9NTm9kZSBmcm9tIFwicmMtdXRpbC9lcy9Eb20vZmluZERPTU5vZGVcIjtcbmltcG9ydCBDYWNoZU1hcCBmcm9tICcuLi91dGlscy9DYWNoZU1hcCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIZWlnaHRzKGdldEtleSwgb25JdGVtQWRkLCBvbkl0ZW1SZW1vdmUpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKDApLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICB1cGRhdGVkTWFyayA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRVcGRhdGVkTWFyayA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGluc3RhbmNlUmVmID0gdXNlUmVmKG5ldyBNYXAoKSk7XG4gIHZhciBoZWlnaHRzUmVmID0gdXNlUmVmKG5ldyBDYWNoZU1hcCgpKTtcbiAgdmFyIGhlaWdodFVwZGF0ZUlkUmVmID0gdXNlUmVmKDApO1xuXG4gIGZ1bmN0aW9uIGNvbGxlY3RIZWlnaHQoKSB7XG4gICAgaGVpZ2h0VXBkYXRlSWRSZWYuY3VycmVudCArPSAxO1xuICAgIHZhciBjdXJyZW50SWQgPSBoZWlnaHRVcGRhdGVJZFJlZi5jdXJyZW50O1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT25seSBjb2xsZWN0IHdoZW4gaXQncyBsYXRlc3QgY2FsbFxuICAgICAgaWYgKGN1cnJlbnRJZCAhPT0gaGVpZ2h0VXBkYXRlSWRSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgaW5zdGFuY2VSZWYuY3VycmVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICB2YXIgaHRtbEVsZW1lbnQgPSBmaW5kRE9NTm9kZShlbGVtZW50KTtcbiAgICAgICAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gaHRtbEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKGhlaWdodHNSZWYuY3VycmVudC5nZXQoa2V5KSAhPT0gb2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICBoZWlnaHRzUmVmLmN1cnJlbnQuc2V0KGtleSwgaHRtbEVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pOyAvLyBBbHdheXMgdHJpZ2dlciB1cGRhdGUgbWFyayB0byB0ZWxsIHBhcmVudCB0aGF0IHNob3VsZCByZS1jYWxjdWxhdGUgaGVpZ2h0cyB3aGVuIHJlc2l6ZWRcblxuICAgICAgc2V0VXBkYXRlZE1hcmsoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGMgKyAxO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbnN0YW5jZVJlZihpdGVtLCBpbnN0YW5jZSkge1xuICAgIHZhciBrZXkgPSBnZXRLZXkoaXRlbSk7XG4gICAgdmFyIG9yaWdpbiA9IGluc3RhbmNlUmVmLmN1cnJlbnQuZ2V0KGtleSk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlUmVmLmN1cnJlbnQuc2V0KGtleSwgaW5zdGFuY2UpO1xuICAgICAgY29sbGVjdEhlaWdodCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZVJlZi5jdXJyZW50LmRlbGV0ZShrZXkpO1xuICAgIH0gLy8gSW5zdGFuY2UgY2hhbmdlZFxuXG5cbiAgICBpZiAoIW9yaWdpbiAhPT0gIWluc3RhbmNlKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgb25JdGVtQWRkID09PSBudWxsIHx8IG9uSXRlbUFkZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25JdGVtQWRkKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25JdGVtUmVtb3ZlID09PSBudWxsIHx8IG9uSXRlbVJlbW92ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25JdGVtUmVtb3ZlKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbc2V0SW5zdGFuY2VSZWYsIGNvbGxlY3RIZWlnaHQsIGhlaWdodHNSZWYuY3VycmVudCwgdXBkYXRlZE1hcmtdO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbnZhciBTTU9PVEhfUFRHID0gMTQgLyAxNTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1vYmlsZVRvdWNoTW92ZShpblZpcnR1YWwsIGxpc3RSZWYsIGNhbGxiYWNrKSB7XG4gIHZhciB0b3VjaGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoWVJlZiA9IHVzZVJlZigwKTtcbiAgdmFyIGVsZW1lbnRSZWYgPSB1c2VSZWYobnVsbCk7IC8vIFNtb290aCBzY3JvbGxcblxuICB2YXIgaW50ZXJ2YWxSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBjbGVhblVwRXZlbnRzO1xuXG4gIHZhciBvblRvdWNoTW92ZSA9IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAodG91Y2hlZFJlZi5jdXJyZW50KSB7XG4gICAgICB2YXIgY3VycmVudFkgPSBNYXRoLmNlaWwoZS50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICAgIHZhciBvZmZzZXRZID0gdG91Y2hZUmVmLmN1cnJlbnQgLSBjdXJyZW50WTtcbiAgICAgIHRvdWNoWVJlZi5jdXJyZW50ID0gY3VycmVudFk7XG5cbiAgICAgIGlmIChjYWxsYmFjayhvZmZzZXRZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IC8vIFNtb290aCBpbnRlcnZhbFxuXG5cbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudCk7XG4gICAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBvZmZzZXRZICo9IFNNT09USF9QVEc7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjayhvZmZzZXRZLCB0cnVlKSB8fCBNYXRoLmFicyhvZmZzZXRZKSA8PSAwLjEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICB9LCAxNik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICB0b3VjaGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICBjbGVhblVwRXZlbnRzKCk7XG4gIH07XG5cbiAgdmFyIG9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gICAgY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEgJiYgIXRvdWNoZWRSZWYuY3VycmVudCkge1xuICAgICAgdG91Y2hlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHRvdWNoWVJlZi5jdXJyZW50ID0gTWF0aC5jZWlsKGUudG91Y2hlc1swXS5wYWdlWSk7XG4gICAgICBlbGVtZW50UmVmLmN1cnJlbnQgPSBlLnRhcmdldDtcbiAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICBlbGVtZW50UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICB9XG4gIH07XG5cbiAgY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uIGNsZWFuVXBFdmVudHMoKSB7XG4gICAgaWYgKGVsZW1lbnRSZWYuY3VycmVudCkge1xuICAgICAgZWxlbWVudFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGVsZW1lbnRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgIH1cbiAgfTtcblxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpblZpcnR1YWwpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbGlzdFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICAgICAgY2xlYW5VcEV2ZW50cygpO1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbaW5WaXJ0dWFsXSk7XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChpc1Njcm9sbEF0VG9wLCBpc1Njcm9sbEF0Qm90dG9tKSB7XG4gIC8vIERvIGxvY2sgZm9yIGEgd2hlZWwgd2hlbiBzY3JvbGxpbmdcbiAgdmFyIGxvY2tSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgbG9ja1RpbWVvdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcbiAgICBjbGVhclRpbWVvdXQobG9ja1RpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgbG9ja1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBsb2NrVGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBsb2NrUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LCA1MCk7XG4gIH0gLy8gUGFzcyB0byByZWYgc2luY2UgZ2xvYmFsIGFkZCBpcyBpbiBjbG9zdXJlXG5cblxuICB2YXIgc2Nyb2xsUGluZ1JlZiA9IHVzZVJlZih7XG4gICAgdG9wOiBpc1Njcm9sbEF0VG9wLFxuICAgIGJvdHRvbTogaXNTY3JvbGxBdEJvdHRvbVxuICB9KTtcbiAgc2Nyb2xsUGluZ1JlZi5jdXJyZW50LnRvcCA9IGlzU2Nyb2xsQXRUb3A7XG4gIHNjcm9sbFBpbmdSZWYuY3VycmVudC5ib3R0b20gPSBpc1Njcm9sbEF0Qm90dG9tO1xuICByZXR1cm4gZnVuY3Rpb24gKGRlbHRhWSkge1xuICAgIHZhciBzbW9vdGhPZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciBvcmlnaW5TY3JvbGwgPSAvLyBQYXNzIG9yaWdpbiB3aGVlbCB3aGVuIG9uIHRoZSB0b3BcbiAgICBkZWx0YVkgPCAwICYmIHNjcm9sbFBpbmdSZWYuY3VycmVudC50b3AgfHwgLy8gUGFzcyBvcmlnaW4gd2hlZWwgd2hlbiBvbiB0aGUgYm90dG9tXG4gICAgZGVsdGFZID4gMCAmJiBzY3JvbGxQaW5nUmVmLmN1cnJlbnQuYm90dG9tO1xuXG4gICAgaWYgKHNtb290aE9mZnNldCAmJiBvcmlnaW5TY3JvbGwpIHtcbiAgICAgIC8vIE5vIG5lZWQgbG9jayBhbnltb3JlIHdoZW4gaXQncyBzbW9vdGggb2Zmc2V0IGZyb20gdG91Y2hNb3ZlIGludGVydmFsXG4gICAgICBjbGVhclRpbWVvdXQobG9ja1RpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICBsb2NrUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCFvcmlnaW5TY3JvbGwgfHwgbG9ja1JlZi5jdXJyZW50KSB7XG4gICAgICBsb2NrU2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFsb2NrUmVmLmN1cnJlbnQgJiYgb3JpZ2luU2Nyb2xsO1xuICB9O1xufSk7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tIFwicmMtdXRpbC9lcy9yYWZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNjcm9sbFRvKGNvbnRhaW5lclJlZiwgZGF0YSwgaGVpZ2h0cywgaXRlbUhlaWdodCwgZ2V0S2V5LCBjb2xsZWN0SGVpZ2h0LCBzeW5jU2Nyb2xsVG9wLCB0cmlnZ2VyRmxhc2gpIHtcbiAgdmFyIHNjcm9sbFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIC8vIFdoZW4gbm90IGFyZ3VtZW50IHByb3ZpZGVkLCB3ZSB0aGluayBkZXYgbWF5IHdhbnQgdG8gc2hvdyB0aGUgc2Nyb2xsYmFyXG4gICAgaWYgKGFyZyA9PT0gbnVsbCB8fCBhcmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHJpZ2dlckZsYXNoKCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBOb3JtYWwgc2Nyb2xsIGxvZ2ljXG5cblxuICAgIHJhZi5jYW5jZWwoc2Nyb2xsUmVmLmN1cnJlbnQpO1xuXG4gICAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgICBzeW5jU2Nyb2xsVG9wKGFyZyk7XG4gICAgfSBlbHNlIGlmIChhcmcgJiYgX3R5cGVvZihhcmcpID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgdmFyIGFsaWduID0gYXJnLmFsaWduO1xuXG4gICAgICBpZiAoJ2luZGV4JyBpbiBhcmcpIHtcbiAgICAgICAgaW5kZXggPSBhcmcuaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IGRhdGEuZmluZEluZGV4KGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIGdldEtleShpdGVtKSA9PT0gYXJnLmtleTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBfYXJnJG9mZnNldCA9IGFyZy5vZmZzZXQsXG4gICAgICAgICAgb2Zmc2V0ID0gX2FyZyRvZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfYXJnJG9mZnNldDsgLy8gV2Ugd2lsbCByZXRyeSAzIHRpbWVzIGluIGNhc2UgZHluYW1pYyBoZWlnaHQgc2hha2luZ1xuXG4gICAgICB2YXIgc3luY1Njcm9sbCA9IGZ1bmN0aW9uIHN5bmNTY3JvbGwodGltZXMsIHRhcmdldEFsaWduKSB7XG4gICAgICAgIGlmICh0aW1lcyA8IDAgfHwgIWNvbnRhaW5lclJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgICAgIHZhciBoZWlnaHQgPSBjb250YWluZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHZhciBuZWVkQ29sbGVjdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0QWxpZ24gPSB0YXJnZXRBbGlnbjsgLy8gR28gdG8gbmV4dCBmcmFtZSBpZiBoZWlnaHQgbm90IGV4aXN0XG5cbiAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgIHZhciBtZXJnZWRBbGlnbiA9IHRhcmdldEFsaWduIHx8IGFsaWduOyAvLyBHZXQgdG9wICYgYm90dG9tXG5cbiAgICAgICAgICB2YXIgc3RhY2tUb3AgPSAwO1xuICAgICAgICAgIHZhciBpdGVtVG9wID0gMDtcbiAgICAgICAgICB2YXIgaXRlbUJvdHRvbSA9IDA7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBpbmRleDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZ2V0S2V5KGRhdGFbaV0pO1xuICAgICAgICAgICAgaXRlbVRvcCA9IHN0YWNrVG9wO1xuICAgICAgICAgICAgdmFyIGNhY2hlSGVpZ2h0ID0gaGVpZ2h0cy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgKGNhY2hlSGVpZ2h0ID09PSB1bmRlZmluZWQgPyBpdGVtSGVpZ2h0IDogY2FjaGVIZWlnaHQpO1xuICAgICAgICAgICAgc3RhY2tUb3AgPSBpdGVtQm90dG9tO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5kZXggJiYgY2FjaGVIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBuZWVkQ29sbGVjdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBTY3JvbGwgdG9cblxuXG4gICAgICAgICAgdmFyIHRhcmdldFRvcCA9IG51bGw7XG5cbiAgICAgICAgICBzd2l0Y2ggKG1lcmdlZEFsaWduKSB7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBpdGVtVG9wIC0gb2Zmc2V0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgdGFyZ2V0VG9wID0gaXRlbUJvdHRvbSAtIGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gY29udGFpbmVyUmVmLmN1cnJlbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyBoZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbVRvcCA8IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgICAgbmV3VGFyZ2V0QWxpZ24gPSAndG9wJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1Cb3R0b20gPiBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgIG5ld1RhcmdldEFsaWduID0gJ2JvdHRvbSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRhcmdldFRvcCAhPT0gbnVsbCAmJiB0YXJnZXRUb3AgIT09IGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbFRvcCkge1xuICAgICAgICAgICAgc3luY1Njcm9sbFRvcCh0YXJnZXRUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBXZSB3aWxsIHJldHJ5IHNpbmNlIGVsZW1lbnQgbWF5IG5vdCBzeW5jIGhlaWdodCBhcyBpdCBkZXNjcmliZWRcblxuXG4gICAgICAgIHNjcm9sbFJlZi5jdXJyZW50ID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobmVlZENvbGxlY3RIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbGxlY3RIZWlnaHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzeW5jU2Nyb2xsKHRpbWVzIC0gMSwgbmV3VGFyZ2V0QWxpZ24pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHN5bmNTY3JvbGwoMyk7XG4gICAgfVxuICB9O1xufSIsImltcG9ydCBMaXN0IGZyb20gJy4vTGlzdCc7XG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLy8gRmlyZWZveCBoYXMgbG93IHBlcmZvcm1hbmNlIG9mIG1hcC5cbnZhciBDYWNoZU1hcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENhY2hlTWFwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYWNoZU1hcCk7XG5cbiAgICB0aGlzLm1hcHMgPSB7fTtcbiAgICB0aGlzLm1hcHMucHJvdG90eXBlID0gbnVsbDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWNoZU1hcCwgW3tcbiAgICBrZXk6IFwic2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICB0aGlzLm1hcHNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwc1trZXldO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYWNoZU1hcDtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGVNYXA7IiwiLyoqXG4gKiBHZXQgaW5kZXggd2l0aCBzcGVjaWZpYyBzdGFydCBpbmRleCBvbmUgYnkgb25lLiBlLmcuXG4gKiBtaW46IDMsIG1heDogOSwgc3RhcnQ6IDZcbiAqXG4gKiBSZXR1cm4gaW5kZXggaXM6XG4gKiBbMF06IDZcbiAqIFsxXTogN1xuICogWzJdOiA1XG4gKiBbM106IDhcbiAqIFs0XTogNFxuICogWzVdOiA5XG4gKiBbNl06IDNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluZGV4QnlTdGFydExvYyhtaW4sIG1heCwgc3RhcnQsIGluZGV4KSB7XG4gIHZhciBiZWZvcmVDb3VudCA9IHN0YXJ0IC0gbWluO1xuICB2YXIgYWZ0ZXJDb3VudCA9IG1heCAtIHN0YXJ0O1xuICB2YXIgYmFsYW5jZUNvdW50ID0gTWF0aC5taW4oYmVmb3JlQ291bnQsIGFmdGVyQ291bnQpICogMjsgLy8gQmFsYW5jZVxuXG4gIGlmIChpbmRleCA8PSBiYWxhbmNlQ291bnQpIHtcbiAgICB2YXIgc3RlcEluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDIpO1xuXG4gICAgaWYgKGluZGV4ICUgMikge1xuICAgICAgcmV0dXJuIHN0YXJ0ICsgc3RlcEluZGV4ICsgMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhcnQgLSBzdGVwSW5kZXg7XG4gIH0gLy8gT25lIGlzIG91dCBvZiByYW5nZVxuXG5cbiAgaWYgKGJlZm9yZUNvdW50ID4gYWZ0ZXJDb3VudCkge1xuICAgIHJldHVybiBzdGFydCAtIChpbmRleCAtIGFmdGVyQ291bnQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXJ0ICsgKGluZGV4IC0gYmVmb3JlQ291bnQpO1xufVxuLyoqXG4gKiBXZSBhc3N1bWUgdGhhdCAyIGxpc3QgaGFzIG9ubHkgMSBpdGVtIGRpZmYgYW5kIG90aGVycyBrZWVwaW5nIHRoZSBvcmRlci5cbiAqIFNvIHdlIGNhbiB1c2UgZGljaG90b215IGFsZ29yaXRobSB0byBmaW5kIGNoYW5nZWQgb25lLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGlzdERpZmZJbmRleChvcmlnaW5MaXN0LCB0YXJnZXRMaXN0LCBnZXRLZXkpIHtcbiAgdmFyIG9yaWdpbkxlbiA9IG9yaWdpbkxpc3QubGVuZ3RoO1xuICB2YXIgdGFyZ2V0TGVuID0gdGFyZ2V0TGlzdC5sZW5ndGg7XG4gIHZhciBzaG9ydExpc3Q7XG4gIHZhciBsb25nTGlzdDtcblxuICBpZiAob3JpZ2luTGVuID09PSAwICYmIHRhcmdldExlbiA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKG9yaWdpbkxlbiA8IHRhcmdldExlbikge1xuICAgIHNob3J0TGlzdCA9IG9yaWdpbkxpc3Q7XG4gICAgbG9uZ0xpc3QgPSB0YXJnZXRMaXN0O1xuICB9IGVsc2Uge1xuICAgIHNob3J0TGlzdCA9IHRhcmdldExpc3Q7XG4gICAgbG9uZ0xpc3QgPSBvcmlnaW5MaXN0O1xuICB9XG5cbiAgdmFyIG5vdEV4aXN0S2V5ID0ge1xuICAgIF9fRU1QVFlfSVRFTV9fOiB0cnVlXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0SXRlbUtleShpdGVtKSB7XG4gICAgaWYgKGl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGdldEtleShpdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm90RXhpc3RLZXk7XG4gIH0gLy8gTG9vcCB0byBmaW5kIGRpZmYgb25lXG5cblxuICB2YXIgZGlmZkluZGV4ID0gbnVsbDtcbiAgdmFyIG11bHRpcGxlID0gTWF0aC5hYnMob3JpZ2luTGVuIC0gdGFyZ2V0TGVuKSAhPT0gMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxvbmdMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHNob3J0S2V5ID0gZ2V0SXRlbUtleShzaG9ydExpc3RbaV0pO1xuICAgIHZhciBsb25nS2V5ID0gZ2V0SXRlbUtleShsb25nTGlzdFtpXSk7XG5cbiAgICBpZiAoc2hvcnRLZXkgIT09IGxvbmdLZXkpIHtcbiAgICAgIGRpZmZJbmRleCA9IGk7XG4gICAgICBtdWx0aXBsZSA9IG11bHRpcGxlIHx8IHNob3J0S2V5ICE9PSBnZXRJdGVtS2V5KGxvbmdMaXN0W2kgKyAxXSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlmZkluZGV4ID09PSBudWxsID8gbnVsbCA6IHtcbiAgICBpbmRleDogZGlmZkluZGV4LFxuICAgIG11bHRpcGxlOiBtdWx0aXBsZVxuICB9O1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIGlzRkYgPSAodHlwZW9mIG5hdmlnYXRvciA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG5hdmlnYXRvcikpID09PSAnb2JqZWN0JyAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5leHBvcnQgZGVmYXVsdCBpc0ZGOyJdLCJzb3VyY2VSb290IjoiIn0=