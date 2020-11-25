exports.ids = [1];
exports.modules = {

/***/ "./container/Layout/Header/ProfileMenu.js":
/*!************************************************!*\
  !*** ./container/Layout/Header/ProfileMenu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! library/hooks/useOnClickOutside */ "./library/hooks/useOnClickOutside.js");
/* harmony import */ var library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! library/helpers/activeLink */ "./library/helpers/activeLink.js");
/* harmony import */ var context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/AuthProvider */ "./context/AuthProvider.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\ProfileMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ProfileMenu = ({
  avatar
}) => {
  const {
    logOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_AuthProvider__WEBPACK_IMPORTED_MODULE_4__["AuthContext"]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleDropdown = () => {
    setState(!state);
  };

  const closeDropdown = () => {
    setState(false);
  };

  const dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(library_hooks_useOnClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"])(dropdownRef, () => setState(false));
  return __jsx("div", {
    className: "avatar-dropdown",
    ref: dropdownRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-handler",
    onClick: handleDropdown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, avatar), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: `dropdown-menu ${state ? 'active' : 'hide'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_PROFILE_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "View Profile")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["ADD_HOTEL_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Add Hotel")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    onClick: closeDropdown,
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(library_helpers_activeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: settings_constant__WEBPACK_IMPORTED_MODULE_5__["AGENT_ACCOUNT_SETTINGS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Account Settings")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
    key: "3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: logOut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Log Out"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMenu);

/***/ }),

/***/ "./library/helpers/activeLink.js":
/*!***************************************!*\
  !*** ./library/helpers/activeLink.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\library\\helpers\\activeLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ActiveLink = ({
  className,
  children,
  router,
  href
}) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    className: className,
    href: href,
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./library/hooks/useOnClickOutside.js":
/*!********************************************!*\
  !*** ./library/hooks/useOnClickOutside.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
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
  }, [ref, handler]);
}

/* harmony default export */ __webpack_exports__["default"] = (useOnClickOutside);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9Qcm9maWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hvb2tzL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIl0sIm5hbWVzIjpbIlByb2ZpbGVNZW51IiwiYXZhdGFyIiwibG9nT3V0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwiaGFuZGxlRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwiZHJvcGRvd25SZWYiLCJ1c2VSZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFERF9IT1RFTF9QQUdFIiwiQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFIiwiQWN0aXZlTGluayIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicm91dGVyIiwiaHJlZiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsIndpdGhSb3V0ZXIiLCJyZWYiLCJoYW5kbGVyIiwidXNlRWZmZWN0IiwibGlzdGVuZXIiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBZ0I7QUFDbEMsUUFBTTtBQUFFQztBQUFGLE1BQWFDLHdEQUFVLENBQUNDLGdFQUFELENBQTdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEtBQUQsQ0FBbEM7O0FBRUEsUUFBTUMsY0FB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QUFKLENBQVlDLFFBQVosQ0FBcUJGLEtBQUssQ0FBQ0csTUFBM0IsQ0FBcEIsRUFBd0Q7QUFDdEQ7QUFDRDs7QUFDRE4sYUFBTyxDQUFDRyxLQUFELENBQVA7QUFDRCxLQUxEOztBQU9BSSxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDTixRQUF2QztBQUNBSyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDTixRQUF4QztBQUVBLFdBQU8sTUFBTTtBQUNYSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDUCxRQUExQztBQUNBSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDUCxRQUEzQztBQUNELEtBSEQ7QUFJRCxHQWZRLEVBZU4sQ0FBQ0gsR0FBRCxFQUFNQyxPQUFOLENBZk0sQ0FBVDtBQWdCRDs7QUFFY2YsZ0ZBQWYsRSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZU9uQ2xpY2tPdXRzaWRlIGZyb20gJ2xpYnJhcnkvaG9va3MvdXNlT25DbGlja091dHNpZGUnO1xyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvYWN0aXZlTGluayc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dC9BdXRoUHJvdmlkZXInO1xyXG5pbXBvcnQge1xyXG4gIEFHRU5UX1BST0ZJTEVfUEFHRSxcclxuICBBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UsXHJcbiAgQUREX0hPVEVMX1BBR0UsXHJcbn0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xyXG5cclxuY29uc3QgUHJvZmlsZU1lbnUgPSAoeyBhdmF0YXIgfSkgPT4ge1xyXG4gIGNvbnN0IHsgbG9nT3V0IH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSghc3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlT25DbGlja091dHNpZGUoZHJvcGRvd25SZWYsICgpID0+IHNldFN0YXRlKGZhbHNlKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1kcm9wZG93blwiIHJlZj17ZHJvcGRvd25SZWZ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWhhbmRsZXJcIiBvbkNsaWNrPXtoYW5kbGVEcm9wZG93bn0+XHJcbiAgICAgICAge2F2YXRhcn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TWVudSBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51ICR7c3RhdGUgPyAnYWN0aXZlJyA6ICdoaWRlJ31gfT5cclxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjBcIj5cclxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FHRU5UX1BST0ZJTEVfUEFHRX0+VmlldyBQcm9maWxlPC9BY3RpdmVMaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gb25DbGljaz17Y2xvc2VEcm9wZG93bn0ga2V5PVwiMVwiPlxyXG4gICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj17QUREX0hPVEVMX1BBR0V9PkFkZCBIb3RlbDwvQWN0aXZlTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259IGtleT1cIjJcIj5cclxuICAgICAgICAgIDxBY3RpdmVMaW5rIGhyZWY9e0FHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRX0+XHJcbiAgICAgICAgICAgIEFjY291bnQgU2V0dGluZ3NcclxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlTWVudTtcclxuIiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3QgQWN0aXZlTGluayA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHJvdXRlciwgaHJlZiB9KSA9PiB7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQWN0aXZlTGluayk7XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgaGFuZGxlcikge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ZW5lciA9IGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCFyZWYuY3VycmVudCB8fCByZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcclxuICAgIH07XHJcbiAgfSwgW3JlZiwgaGFuZGxlcl0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VPbkNsaWNrT3V0c2lkZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==