webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./settings/service.js":
/*!*****************************!*\
  !*** ./settings/service.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var _require = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"),
    get = _require.get;



function getPropType() {
  return _getPropType.apply(this, arguments);
}

function _getPropType() {
  _getPropType = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/categorys", {
              headers: {
                Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            }).then(function (response) {
              // handle success
              console.log(response);
            }).catch(function (error) {
              // handle error
              console.log(error);
            }).then(function () {// always executed
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPropType.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (getPropType);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2V0dGluZ3Mvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZ2V0IiwiZ2V0UHJvcFR5cGUiLCJheGlvcyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQ29va2llIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZ0JBLG1CQUFPLENBQUMsNERBQUQsQztJQUFmQyxHLFlBQUFBLEc7O0FBQ1I7O1NBQ2VDLFc7Ozs7O2tNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRQyw0Q0FBSyxDQUNSRixHQURHLENBRUYsdUZBRkUsRUFHRjtBQUNFRyxxQkFBTyxFQUFFO0FBQ1BDLDZCQUFhLEVBQUUsZ0NBRFI7QUFFUEMsc0JBQU0sRUFBRTtBQUZEO0FBRFgsYUFIRSxFQVVIQyxJQVZHLENBVUUsVUFBVUMsUUFBVixFQUFvQjtBQUN4QjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDRCxhQWJHLEVBY0hHLEtBZEcsQ0FjRyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RCO0FBQ0FILHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWjtBQUNELGFBakJHLEVBa0JITCxJQWxCRyxDQWtCRSxZQUFZLENBQ2hCO0FBQ0QsYUFwQkcsQ0FEUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBdUJlTCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZGQtaG90ZWwuZTAzN2EwZDhjYWUxMGYxYzcyODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZ2V0IH0gPSByZXF1aXJlKFwianMtY29va2llXCIpO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIGdldFByb3BUeXBlKCkge1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KFxyXG4gICAgICBcImh0dHA6Ly9lYzItMTMtMjI5LTEwOS0yMDQuYXAtc291dGhlYXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwODAvYXBuYS92MS9jYXRlZ29yeXNcIixcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgWVhCdVlUcGhjRzVoWjJoaGNqRXlNelE9XCIsXHJcbiAgICAgICAgICBDb29raWU6IFwiSlNFU1NJT05JRD1FMkE4QkYyNTcxQkE2Qjg3NTgwM0JENTQ1RDQzQkJENlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gYWx3YXlzIGV4ZWN1dGVkXHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBnZXRQcm9wVHlwZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==