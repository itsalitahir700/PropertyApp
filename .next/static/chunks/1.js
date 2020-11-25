(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/hooks/useOnClickOutside */ "./library/hooks/useOnClickOutside.js");
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");


var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\ProfileMenu.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var ProfileMenu = function ProfileMenu(_ref) {
  _s();

  var avatar = _ref.avatar;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]),
      logOut = _useContext.logOut;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      state = _useState[0],
      setState = _useState[1];

  var handleDropdown = function handleDropdown() {
    setState(!state);
  };

  var closeDropdown = function closeDropdown() {
    setState(false);
  };

  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, function () {
    return setState(false);
  });
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, avatar), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "dropdown-menu ".concat(state ? 'active' : 'hide'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "View Profile")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Add Hotel")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Log Out"))));
};

_s(ProfileMenu, "t4Dvi0A244Vd06FFO1Zz9rJI0W0=", false, function () {
  return [library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = ProfileMenu;
/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

var _c;

$RefreshReg$(_c, "ProfileMenu");

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

/***/ }),

/***/ "./library/hooks/useOnClickOutside.js":
/*!********************************************!*\
  !*** ./library/hooks/useOnClickOutside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useOnClickOutside(ref, handler) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

_s(useOnClickOutside, "OD7bBpZva5O2jO+Puf00hKivP7c=");

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0xheW91dC9IZWFkZXIvUHJvZmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnJhcnkvaGVscGVycy9hY3RpdmVMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9saWJyYXJ5L2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVNZW51IiwiYXZhdGFyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwibG9nT3V0IiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFERF9IT1RFTF9QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQWN0aXZlTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIndpdGhSb3V0ZXIiLCJyZWYiLCJoYW5kbGVyIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxvQkFDZkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FESztBQUFBLE1BQzFCQyxNQUQwQixlQUMxQkEsTUFEMEI7O0FBQUEsa0JBRVJDLHNEQUFRLENBQUMsS0FBRCxDQUZB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QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxRQURILENBREY7QUFLRCxDQVhEOztLQUFNRixVO0FBYVMscUVBQUFTLDhEQUFVLENBQUNULFVBQUQsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFQSxTQUFTSixpQkFBVCxDQUEyQmMsR0FBM0IsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQUE7O0FBQ3ZDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxLQUFLLEVBQUk7QUFDeEIsVUFBSSxDQUFDSixHQUFHLENBQUNLLE9BQUwsSUFBZ0JMLEdBQUcsQ0FBQ0ssT0FBSixDQUFZQyxRQUFaLENBQXFCRixLQUFLLENBQUNHLE1BQTNCLENBQXBCLEVBQXdEO0FBQ3REO0FBQ0Q7O0FBQ0ROLGFBQU8sQ0FBQ0csS0FBRCxDQUFQO0FBQ0QsS0FMRDs7QUFPQUksWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q04sUUFBdkM7QUFDQUssWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3Q04sUUFBeEM7QUFFQSxXQUFPLFlBQU07QUFDWEssY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixXQUE3QixFQUEwQ1AsUUFBMUM7QUFDQUssY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixZQUE3QixFQUEyQ1AsUUFBM0M7QUFDRCxLQUhEO0FBSUQsR0FmUSxFQWVOLENBQUNILEdBQUQsRUFBTUMsT0FBTixDQWZNLENBQVQ7QUFnQkQ7O0dBakJRZixpQjs7QUFtQk1BLGdGQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB1c2VPbkNsaWNrT3V0c2lkZSBmcm9tICdsaWJyYXJ5L2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlJztcclxuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnbGlicmFyeS9oZWxwZXJzL2FjdGl2ZUxpbmsnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJ2NvbnRleHQvQXV0aFByb3ZpZGVyJztcclxuaW1wb3J0IHtcclxuICBBR0VOVF9QUk9GSUxFX1BBR0UsXHJcbiAgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFLFxyXG4gIEFERF9IT1RFTF9QQUdFLFxyXG59IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcclxuXHJcbmNvbnN0IFByb2ZpbGVNZW51ID0gKHsgYXZhdGFyIH0pID0+IHtcclxuICBjb25zdCB7IGxvZ091dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoIXN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIHVzZU9uQ2xpY2tPdXRzaWRlKGRyb3Bkb3duUmVmLCAoKSA9PiBzZXRTdGF0ZShmYWxzZSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItZHJvcGRvd25cIiByZWY9e2Ryb3Bkb3duUmVmfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1oYW5kbGVyXCIgb25DbGljaz17aGFuZGxlRHJvcGRvd259PlxyXG4gICAgICAgIHthdmF0YXJ9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1lbnUgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudSAke3N0YXRlID8gJ2FjdGl2ZScgOiAnaGlkZSd9YH0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufSBrZXk9XCIwXCI+XHJcbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9QUk9GSUxFX1BBR0V9PlZpZXcgUHJvZmlsZTwvQWN0aXZlTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjFcIj5cclxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FERF9IT1RFTF9QQUdFfT5BZGQgSG90ZWw8L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufSBrZXk9XCIyXCI+XHJcbiAgICAgICAgICA8QWN0aXZlTGluayBocmVmPXtBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0V9PlxyXG4gICAgICAgICAgICBBY2NvdW50IFNldHRpbmdzXHJcbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+TG9nIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZU1lbnU7XHJcbiIsImltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCByb3V0ZXIsIGhyZWYgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaChocmVmKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdGVuZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtyZWYsIGhhbmRsZXJdKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlT25DbGlja091dHNpZGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=