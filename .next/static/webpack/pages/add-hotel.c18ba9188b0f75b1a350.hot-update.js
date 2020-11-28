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
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../settings/service */ "./settings/service.js");






var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddFeature.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var AddFeature = function AddFeature() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
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
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, "Main Features"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "Built in year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "View",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "Parking Spaces",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "Double Glazed Windows")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, "Central Air Conditioning")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Central Heating"))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJBZGRGZWF0dXJlIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0bG9hZGluZyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic3BhbiIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ2hCQyxPQURnQjtBQUFBLE1BQ1BDLFVBRE87O0FBR3ZCLFNBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBRSxPQUFmO0FBQXdCQyxrQkFBWSxFQUFFO0FBQXRDLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsWUFBUSxFQUFFO0FBQ1JDLFVBQUksRUFBRTtBQURFLEtBRFo7QUFJRSxjQUFVLEVBQUU7QUFDVkEsVUFBSSxFQUFFO0FBREksS0FKZDtBQU9FLFVBQU0sRUFBQyxZQVBUO0FBUUUsU0FBSyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQU8sV0FBTyxFQUFDLG1CQUFmO0FBQW1DLFFBQUksRUFBQyxTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLEVBWUUsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsRUFlRSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmRixFQWtCRSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLGdCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEJGLEVBcUJFLDJEQUFNLElBQU47QUFBVyxTQUFLLEVBQUMsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FyQkYsRUF3QkUsMkRBQU0sSUFBTjtBQUFXLFNBQUssRUFBQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixDQXhCRixFQTJCRSwyREFBTSxJQUFOO0FBQVcsU0FBSyxFQUFDLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBM0JGLENBREYsQ0FERjtBQW1DRCxDQXRDRDs7R0FBTVAsVTs7S0FBQUEsVTtBQXdDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLWhvdGVsLmMxOGJhOTE4OGIwZjc1YjFhMzUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIFJhZGlvLFxyXG4gIFNlbGVjdCxcclxuICBDYXNjYWRlcixcclxuICBEYXRlUGlja2VyLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIFRyZWVTZWxlY3QsXHJcbiAgU3dpdGNoLFxyXG4gIEFsZXJ0LFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgVXBsb2FkLFxyXG4gIEljb24sXHJcbiAgbWVzc2FnZSxcclxuICBDYXJkLFxyXG4gIENoZWNrYm94LFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHBhZGRpbmcgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvcFR5cGUsXHJcbiAgZ2V0UHJvcFN1YlR5cGUsXHJcbiAgZ2V0Q2l0aWVzLFxyXG4gIGdldExvY2F0aW9ucyxcclxuICBnZXRDdXJyZW5jeSxcclxuICBnZXRBcmVhLFxyXG59IGZyb20gXCIuLi8uLi9zZXR0aW5ncy9zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBBZGRGZWF0dXJlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcmVtXCIsIHBhZGRpbmdSaWdodDogXCIxMHJlbVwiIH19PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxhYmVsQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiA0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgc3BhbjogMTQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIlBST1BFUlRZIEZFQVRVUkVTXCIgdHlwZT1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICAgIDxoMz5NYWluIEZlYXR1cmVzPC9oMz5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQnVpbHQgaW4geWVhclwiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlZpZXdcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXJraW5nIFNwYWNlc1wiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94PkRvdWJsZSBHbGF6ZWQgV2luZG93czwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94PkNlbnRyYWwgQWlyIENvbmRpdGlvbmluZzwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94PkNlbnRyYWwgSGVhdGluZzwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRmVhdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==