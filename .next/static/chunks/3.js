(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./container/Layout/Header/MobileMenu.js":
/*!***********************************************!*\
  !*** ./container/Layout/Header/MobileMenu.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\MobileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var MobileMenu = function MobileMenu(_ref) {
  _s();

  var className = _ref.className;

  // auth context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["AuthContext"]),
      loggedIn = _useContext.loggedIn,
      logOut = _useContext.logOut;

  return __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Hotels")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["LISTING_POSTS_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Listing")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["PRICING_PLAN_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Pricing")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_4__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Account Settings")), loggedIn && __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Log Out")));
};

_s(MobileMenu, "RO4zPLhn3+7evf/JOYW0HyI0Rec=");

_c = MobileMenu;
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

var _c;

$RefreshReg$(_c, "MobileMenu");

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

/***/ "./library/helpers/activeLink.js":
/*!***************************************!*\
  !*** ./library/helpers/activeLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\library\\helpers\\activeLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ActiveLink = function ActiveLink(_ref) {
  var className = _ref.className,
      children = _ref.children,
      router = _ref.router,
      href = _ref.href;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

_c = ActiveLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

var _c, _c2;

$RefreshReg$(_c, "ActiveLink");
$RefreshReg$(_c2, "%default%");

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0xheW91dC9IZWFkZXIvTW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGlicmFyeS9oZWxwZXJzL2FjdGl2ZUxpbmsuanMiXSwibmFtZXMiOlsiTW9iaWxlTWVudSIsImNsYXNzTmFtZSIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImxvZ2dlZEluIiwibG9nT3V0IiwiSE9NRV9QQUdFIiwiTElTVElOR19QT1NUU19QQUdFIiwiUFJJQ0lOR19QTEFOX1BBR0UiLCJBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UiLCJBY3RpdmVMaW5rIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJocmVmIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1CO0FBQUE7O0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjs7QUFDcEM7QUFEb0Msb0JBRVBDLHdEQUFVLENBQUNDLGdFQUFELENBRkg7QUFBQSxNQUU1QkMsUUFGNEIsZUFFNUJBLFFBRjRCO0FBQUEsTUFFbEJDLE1BRmtCLGVBRWxCQSxNQUZrQjs7QUFJcEMsU0FDRTtBQUFNLGFBQVMsRUFBRUosU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDJEQUFNLElBQU47QUFBVyxPQUFHLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFZLFFBQUksRUFBRUssMkRBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUUsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQVksUUFBSSxFQUFFQyxvRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBSkYsRUFPRSwyREFBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFBWSxRQUFJLEVBQUVDLG1FQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FQRixFQVVHSixRQUFRLElBQ1AsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQVksUUFBSSxFQUFFSyw2RUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQVhKLEVBaUJHTCxRQUFRLElBQ1AsMkRBQU0sSUFBTjtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBbEJKLENBREY7QUF5QkQsQ0E3QkQ7O0dBQU1MLFU7O0tBQUFBLFU7QUErQlNBLHlFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTs7QUFDQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUEyQztBQUFBLE1BQXhDVCxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QlUsUUFBNkIsUUFBN0JBLFFBQTZCO0FBQUEsTUFBbkJDLE1BQW1CLFFBQW5CQSxNQUFtQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDNUQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUosVUFBTSxDQUFDSyxJQUFQLENBQVlKLElBQVo7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBRyxhQUFTLEVBQUVaLFNBQWQ7QUFBeUIsUUFBSSxFQUFFWSxJQUEvQjtBQUFxQyxXQUFPLEVBQUVDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsUUFESCxDQURGO0FBS0QsQ0FYRDs7S0FBTUQsVTtBQWFTLHFFQUFBUSw4REFBVSxDQUFDUixVQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJ2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rJztcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICdjb250ZXh0L0F1dGhQcm92aWRlcic7XHJcbmltcG9ydCB7XHJcbiAgSE9NRV9QQUdFLFxyXG4gIExJU1RJTkdfUE9TVFNfUEFHRSxcclxuICBQUklDSU5HX1BMQU5fUEFHRSxcclxuICBBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UsXHJcbn0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xyXG5cclxuY29uc3QgTW9iaWxlTWVudSA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgLy8gYXV0aCBjb250ZXh0XHJcbiAgY29uc3QgeyBsb2dnZWRJbiwgbG9nT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIwXCI+XHJcbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj17SE9NRV9QQUdFfT5Ib3RlbHM8L0FjdGl2ZUxpbms+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICA8QWN0aXZlTGluayBocmVmPXtMSVNUSU5HX1BPU1RTX1BBR0V9Pkxpc3Rpbmc8L0FjdGl2ZUxpbms+XHJcbiAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cclxuICAgICAgICA8QWN0aXZlTGluayBocmVmPXtQUklDSU5HX1BMQU5fUEFHRX0+UHJpY2luZzwvQWN0aXZlTGluaz5cclxuICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIHtsb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XHJcbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0V9PlxyXG4gICAgICAgICAgICBBY2NvdW50IFNldHRpbmdzXHJcbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICl9XHJcbiAgICAgIHtsb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+TG9nIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51O1xyXG4iLCJpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBBY3RpdmVMaW5rID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcm91dGVyLCBocmVmIH0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcm91dGVyLnB1c2goaHJlZik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBocmVmPXtocmVmfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==