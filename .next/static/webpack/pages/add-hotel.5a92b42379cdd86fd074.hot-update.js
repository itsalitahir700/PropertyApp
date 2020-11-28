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
  title: "Property",
  content: "First-content"
}, {
  title: "Features",
  content: "Second-content"
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
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(antd_lib_steps__WEBPACK_IMPORTED_MODULE_1___default.a, {
    current: current,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, steps.map(function (item) {
    return __jsx(Step, {
      key: item.title,
      title: item.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    });
  })), __jsx(_AddProperty__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx(_AddFeature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyJdLCJuYW1lcyI6WyJTdGVwIiwic3RlcHMiLCJ0aXRsZSIsImNvbnRlbnQiLCJBZGRMaXN0aW5nIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwibmV4dCIsInByZXYiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBR1FBLEkseURBQUFBLEk7QUFFUixJQUFNQyxLQUFLLEdBQUcsQ0FDWjtBQUNFQyxPQUFLLEVBQUUsVUFEVDtBQUVFQyxTQUFPLEVBQUU7QUFGWCxDQURZLEVBS1o7QUFDRUQsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsU0FBTyxFQUFFO0FBRlgsQ0FMWSxDQUFkOztBQVdBLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSx3QkFDVUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEVjtBQUFBO0FBQUEsTUFDYkMsT0FEYTtBQUFBLE1BQ0pDLFVBREk7O0FBR3BCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJELGNBQVUsQ0FBQ0QsT0FBTyxHQUFHLENBQVgsQ0FBVjtBQUNELEdBRkQ7O0FBSUEsTUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkYsY0FBVSxDQUFDRCxPQUFPLEdBQUcsQ0FBWCxDQUFWO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBRUEsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTixLQUFLLENBQUNVLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDVCxNQUFDLElBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ1YsS0FBaEI7QUFBdUIsV0FBSyxFQUFFVSxJQUFJLENBQUNWLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUztBQUFBLEdBQVYsQ0FESCxDQURGLEVBTUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFPRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0Q7O0dBdEJRRSxVOztLQUFBQSxVO0FBd0JNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGQtaG90ZWwuNWE5MmI0MjM3OWNkZDg2ZmQwNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFkZFByb3BlcnR5IGZyb20gXCIuL0FkZFByb3BlcnR5XCI7XHJcbmltcG9ydCBBZGRGZWF0dXJlIGZyb20gXCIuL0FkZEZlYXR1cmVcIjtcclxuaW1wb3J0IHsgU3RlcHMsIEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCB7IFN0ZXAgfSA9IFN0ZXBzO1xyXG5cclxuY29uc3Qgc3RlcHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUHJvcGVydHlcIixcclxuICAgIGNvbnRlbnQ6IFwiRmlyc3QtY29udGVudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRmVhdHVyZXNcIixcclxuICAgIGNvbnRlbnQ6IFwiU2Vjb25kLWNvbnRlbnRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gQWRkTGlzdGluZygpIHtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnQoY3VycmVudCArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGN1cnJlbnQgLSAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFN0ZXBzIGN1cnJlbnQ9e2N1cnJlbnR9PlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxTdGVwIGtleT17aXRlbS50aXRsZX0gdGl0bGU9e2l0ZW0udGl0bGV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3RlcHM+XHJcbiAgICAgIDxBZGRQcm9wZXJ0eT48L0FkZFByb3BlcnR5PlxyXG4gICAgICA8QWRkRmVhdHVyZT48L0FkZEZlYXR1cmU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRMaXN0aW5nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9