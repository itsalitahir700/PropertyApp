webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddListing.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddListing.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProperty */ "./container/AddListing/AddProperty.js");
/* harmony import */ var _AddFeature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddFeature */ "./container/AddListing/AddFeature.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddListing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function AddListing() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_AddProperty__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_AddFeature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

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

/***/ "./container/AddListing/AddProperty.js":
/*!*********************************************!*\
  !*** ./container/AddListing/AddProperty.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../settings/service */ "./settings/service.js");














var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddProperty.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var AddProperty = function AddProperty() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      loading = _useState[0],
      setloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      imageUrl = _useState2[0],
      setimageUrl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      purpose = _useState3[0],
      setpurpose = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      country = _useState4[0],
      setCountry = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      city = _useState5[0],
      setCity = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      location = _useState6[0],
      setLocation = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      title = _useState7[0],
      setTitle = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      details = _useState8[0],
      setDetails = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      price = _useState9[0],
      setPrice = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      pricecurrency = _useState10[0],
      setCurrency = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      localArea = _useState11[0],
      setLocalArea = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      areaUnit = _useState12[0],
      setareaUnit = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      bedrooms = _useState13[0],
      setBedrooms = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      bathrooms = _useState14[0],
      setBathrooms = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      expireAfter = _useState15[0],
      setExpireAfter = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      phone = _useState16[0],
      setPhone = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      email = _useState17[0],
      setEmail = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      files = _useState18[0],
      setFiles = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      propdeveloper = _useState19[0],
      setPropdeveloper = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(""),
      constructionStatus = _useState20[0],
      setConstructionStatus = _useState20[1]; // API RESULTS


  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      proptypedata = _useState21[0],
      setproptypedata = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      citieslist = _useState22[0],
      setciteslist = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      countieslist = _useState23[0],
      setcountrieslist = _useState23[1];

  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      locationslist = _useState24[0],
      setlocationslist = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      currencylist = _useState25[0],
      setcurrencylist = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      proptypevalue = _useState26[0],
      setproptypevalue = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      propsubtypedata = _useState27[0],
      setpropsubtypedata = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      propsubtypedataall = _useState28[0],
      setpropsubtypedataall = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])([]),
      arealist = _useState29[0],
      setarealist = _useState29[1];

  var propType = "";
  var propsubType = "";
  var cities = "";
  var counties = "";
  var locations = "";
  var currency = "";
  var area = "";
  var Dragger = antd_lib_upload__WEBPACK_IMPORTED_MODULE_12___default.a.Dragger;
  var props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      var status = info.file.status;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.success("".concat(info.file.name, " file uploaded successfully."));
      } else if (status === "error") {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.error("".concat(info.file.name, " file upload failed."));
      }
    }

  };
  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    functproptype();
    functcities();
    functcountries();
    functcurrency();
    funcpropsbtype();
    functarea();
  }, []);

  function functproptype() {
    return _functproptype.apply(this, arguments);
  }

  function _functproptype() {
    _functproptype = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getPropType"])();

            case 2:
              propType = _context.sent;
              setproptypedata(propType.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _functproptype.apply(this, arguments);
  }

  function functcountries() {
    return _functcountries.apply(this, arguments);
  }

  function _functcountries() {
    _functcountries = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getCountries"])();

            case 2:
              setcountrieslist(counties.data);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _functcountries.apply(this, arguments);
  }

  function functcities() {
    return _functcities.apply(this, arguments);
  }

  function _functcities() {
    _functcities = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getCities"])();

            case 2:
              cities = _context3.sent;
              setciteslist(cities.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _functcities.apply(this, arguments);
  }

  function functlocation(_x) {
    return _functlocation.apply(this, arguments);
  }

  function _functlocation() {
    _functlocation = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(cityId) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getLocations"])(cityId);

            case 2:
              locations = _context4.sent;
              setlocationslist(locations.data);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _functlocation.apply(this, arguments);
  }

  function functcurrency() {
    return _functcurrency.apply(this, arguments);
  }

  function _functcurrency() {
    _functcurrency = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getCurrency"])();

            case 2:
              currency = _context5.sent;
              setcurrencylist(currency.data);

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _functcurrency.apply(this, arguments);
  }

  function funcpropsbtype() {
    return _funcpropsbtype.apply(this, arguments);
  }

  function _funcpropsbtype() {
    _funcpropsbtype = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getPropSubType"])();

            case 2:
              propsubType = _context6.sent;
              setpropsubtypedataall(propsubType.data);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _funcpropsbtype.apply(this, arguments);
  }

  function functarea() {
    return _functarea.apply(this, arguments);
  }

  function _functarea() {
    _functarea = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Object(_settings_service__WEBPACK_IMPORTED_MODULE_16__["getArea"])();

            case 2:
              area = _context7.sent;
              setarealist(area.data);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _functarea.apply(this, arguments);
  }

  var handleSetProperty = function handleSetProperty(e) {
    var main_property_cat = e.target.value;
    setproptypevalue(e.target.value);
    var filtered_sub_cat = propsubtypedataall.filter(function (a) {
      return a.ptypeCat == main_property_cat;
    });
    setpropsubtypedata(filtered_sub_cat);
  };

  var handleimage = function handleimage(event) {
    console.log("images", event.target.files);
    setFiles(Array.from(event.target.files));
  };

  var submitHandler = function submitHandler(e) {
    var formData = new FormData(); //formdata object

    var data = "{  \"postPurpose\": \"".concat(purpose, "\", \n    \"propType\": ").concat(proptypevalue, ",\n    \"postTitle\": \"").concat(title, "\",\n    \"postDescription\": \"").concat(details, "\",\n    \"postLocation\": \"").concat(location, "\",\n    \"postCity\": ").concat(city, ",\n    \"postCountry\": \"").concat(country, "\", \n    \"postTel\": ").concat(phone, ", \n    \"postPrice\": ").concat(price, ", \n    \"postPriceCurrency\": \"").concat(pricecurrency, "\", \n    \"postPropArea\": ").concat(localArea, ",\n    \"postPropAreaUnit\":\"").concat(areaUnit, "\",\n    \"postConstructionStatus\": \"").concat(constructionStatus, "\",\n    \"postPropDeveloper\": \"").concat(propdeveloper, "\"}");
    formData.append("newPost", data);
    formData.append("files", files);

    var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        console.log("yai data", key[0] + ", " + key[1]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    axios__WEBPACK_IMPORTED_MODULE_15___default()({
      method: "post",
      url: "http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/posts",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
      }
    }).then(function (response) {
      //handle success
      console.log(response);
    }).catch(function (response) {
      //handle error
      console.log(response);
    });
  };

  var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a.TextArea;
  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      paddingLeft: "10rem",
      paddingRight: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
    message: "PROPERTY TYPE AND LOCATION",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      lineNumber: 191,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Purpose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Button, {
    onClick: function onClick(e) {
      return setpurpose(e.target.value);
    },
    value: "B",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, "Buy"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Button, {
    onClick: function onClick(e) {
      return setpurpose(e.target.value);
    },
    value: "R",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 13
    }
  }, "Rent"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Button, {
    onClick: function onClick(e) {
      return setpurpose(e.target.value);
    },
    value: "P",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, "Project"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Property Type",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 11
    }
  }, proptypedata && proptypedata.length !== 0 ? proptypedata.map(function (item) {
    return __jsx("span", {
      key: item.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Button, {
      value: item.code,
      onClick: handleSetProperty,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 23
      }
    }, item.name));
  }) : "No Records Found"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Group, {
    style: {
      marginTop: "5px",
      marginLeft: "20px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, propsubtypedata && propsubtypedata.length !== 0 ? propsubtypedata.map(function (item, index) {
    return __jsx("span", {
      key: item.index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 21
      }
    }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_7___default.a.Button, {
      value: item.ptypeName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, item.ptypeName));
  }) : "No Records Found")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Select country",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: country,
    onChange: function onChange(e) {
      setCountry(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }, countieslist && countieslist.length !== 0 ? countieslist.map(function (item, index) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
      value: item.countryCode,
      key: item.countryCode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 21
      }
    }, item.countryName);
  }) : "No Records Found")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Select city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: city,
    onChange: function onChange(e) {
      setCity(e);
      functlocation(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 11
    }
  }, citieslist && citieslist.length !== 0 ? citieslist.map(function (item, index) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
      value: item.cityId,
      key: item.cityId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 21
      }
    }, item.cityName);
  }) : "No Records Found")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Select Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: location,
    onChange: function onChange(e) {
      return setLocation(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 11
    }
  }, locationslist && locationslist.length !== 0 ? locationslist.map(function (item, index) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
      value: item.plName,
      key: item.plName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 21
      }
    }, item.plName);
  }) : "No Records Found"))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
    message: "PROPERTY DETAILS",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      lineNumber: 302,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Property Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Property Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 9
    }
  }, __jsx(TextArea, {
    value: details,
    onChange: function onChange(e) {
      return setDetails(e.target.value);
    },
    rows: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Property Developer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: propdeveloper,
    onChange: function onChange(e) {
      return setPropdeveloper(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Construction Status",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: constructionStatus,
    onChange: function onChange(e) {
      return setConstructionStatus(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
    value: "C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }, "Completed"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
    value: "U",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }
  }, "UNDERCONSTRUCTION"))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 9
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "All inclusive Price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 15
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Select Currency",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: pricecurrency,
    onChange: function onChange(e) {
      return setCurrency(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 15
    }
  }, currencylist && currencylist.length !== 0 ? currencylist.map(function (item, index) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
      value: item.currencyCode,
      key: item.currencyCode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, item.currencyCode);
  }) : "No Records Found")))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 9
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Land Area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: localArea,
    onChange: function onChange(e) {
      return setLocalArea(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 15
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Area Unit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 13
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: areaUnit,
    onChange: function onChange(e) {
      return setareaUnit(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 15
    }
  }, arealist && arealist.length !== 0 ? arealist.map(function (item, index) {
    return __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option, {
      value: item.areaUnitCode,
      key: item.areaUnitCode,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 25
      }
    }, item.areaUnitName);
  }) : "No Records Found")))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
    message: "Add Images",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "file",
    multiple: true,
    onChange: handleimage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 9
    }
  })), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_8___default.a, {
    message: "CONTACT DETAILS",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      lineNumber: 430,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      lineNumber: 440,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Phone ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
    label: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 11
    }
  })), __jsx("center", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "primary",
    size: "large",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 11
    }
  }, "Submit Property"))));
};

_s(AddProperty, "TgCcB3CRQojBYHYvB2z4+Rr4KSg=");

_c = AddProperty;
/* harmony default export */ __webpack_exports__["default"] = (AddProperty);

var _c;

$RefreshReg$(_c, "AddProperty");

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

/***/ "./node_modules/@ant-design/css-animation/es/Event.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/es/Event.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TransitionEvents);

/***/ }),

/***/ "./node_modules/@ant-design/css-animation/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/es/index.js ***!
  \************************************************************/
/*! exports provided: isCssAnimationSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return isCssAnimationSupported; });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./node_modules/@ant-design/css-animation/es/Event.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var isCssAnimationSupported = _Event__WEBPACK_IMPORTED_MODULE_0__["default"].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    node.classList.remove(className);
    node.classList.remove(activeClassName);

    _Event__WEBPACK_IMPORTED_MODULE_0__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_0__["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  node.classList.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    node.classList.add(activeClassName);
    if (active) {
      active();
    }
    fixBrowserByTimeout(node);
  }, 0);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event__WEBPACK_IMPORTED_MODULE_0__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_0__["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["default"] = (cssAnimation);

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/DeleteOutlined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/DeleteOutlined.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
exports.default = DeleteOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/DownloadOutlined.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/DownloadOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var DownloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
exports.default = DownloadOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/FileTwoTone.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/FileTwoTone.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var FileTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z", "fill": primaryColor } }] }; }, "name": "file", "theme": "twotone" };
exports.default = FileTwoTone;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/PaperClipOutlined.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/PaperClipOutlined.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var PaperClipOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z" } }] }, "name": "paper-clip", "theme": "outlined" };
exports.default = PaperClipOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/PictureTwoTone.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/PictureTwoTone.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var PictureTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z", "fill": primaryColor } }] }; }, "name": "picture", "theme": "twotone" };
exports.default = PictureTwoTone;


/***/ }),

/***/ "./node_modules/@ant-design/icons/DeleteOutlined.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ant-design/icons/DeleteOutlined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _DeleteOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/DeleteOutlined */ "./node_modules/@ant-design/icons/lib/icons/DeleteOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DeleteOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/DownloadOutlined.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/icons/DownloadOutlined.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _DownloadOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/DownloadOutlined */ "./node_modules/@ant-design/icons/lib/icons/DownloadOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _DownloadOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/FileTwoTone.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ant-design/icons/FileTwoTone.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _FileTwoTone = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/FileTwoTone */ "./node_modules/@ant-design/icons/lib/icons/FileTwoTone.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _FileTwoTone;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/PaperClipOutlined.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/icons/PaperClipOutlined.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _PaperClipOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/PaperClipOutlined */ "./node_modules/@ant-design/icons/lib/icons/PaperClipOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _PaperClipOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/PictureTwoTone.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ant-design/icons/PictureTwoTone.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _PictureTwoTone = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/PictureTwoTone */ "./node_modules/@ant-design/icons/lib/icons/PictureTwoTone.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _PictureTwoTone;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/DeleteOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/DeleteOutlined.js ***!
  \********************************************************************/
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

var _DeleteOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/DeleteOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/DeleteOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _DeleteOutlined.default
  }));
};

DeleteOutlined.displayName = 'DeleteOutlined';

var _default = /*#__PURE__*/React.forwardRef(DeleteOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/DownloadOutlined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/DownloadOutlined.js ***!
  \**********************************************************************/
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

var _DownloadOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/DownloadOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/DownloadOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var DownloadOutlined = function DownloadOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _DownloadOutlined.default
  }));
};

DownloadOutlined.displayName = 'DownloadOutlined';

var _default = /*#__PURE__*/React.forwardRef(DownloadOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/FileTwoTone.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/FileTwoTone.js ***!
  \*****************************************************************/
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

var _FileTwoTone = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/FileTwoTone */ "./node_modules/@ant-design/icons-svg/lib/asn/FileTwoTone.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var FileTwoTone = function FileTwoTone(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _FileTwoTone.default
  }));
};

FileTwoTone.displayName = 'FileTwoTone';

var _default = /*#__PURE__*/React.forwardRef(FileTwoTone);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/PaperClipOutlined.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/PaperClipOutlined.js ***!
  \***********************************************************************/
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

var _PaperClipOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/PaperClipOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/PaperClipOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var PaperClipOutlined = function PaperClipOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _PaperClipOutlined.default
  }));
};

PaperClipOutlined.displayName = 'PaperClipOutlined';

var _default = /*#__PURE__*/React.forwardRef(PaperClipOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/PictureTwoTone.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/PictureTwoTone.js ***!
  \********************************************************************/
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

var _PictureTwoTone = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/PictureTwoTone */ "./node_modules/@ant-design/icons-svg/lib/asn/PictureTwoTone.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var PictureTwoTone = function PictureTwoTone(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _PictureTwoTone.default
  }));
};

PictureTwoTone.displayName = 'PictureTwoTone';

var _default = /*#__PURE__*/React.forwardRef(PictureTwoTone);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/progress/Circle.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/progress/Circle.js ***!
  \**************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcProgress = __webpack_require__(/*! rc-progress */ "./node_modules/rc-progress/es/index.js");

var _colors = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/progress/utils.js");

function getPercentage(_ref) {
  var percent = _ref.percent,
      success = _ref.success,
      successPercent = _ref.successPercent;
  var ptg = (0, _utils.validProgress)(percent);
  var realSuccessPercent = (0, _utils.getSuccessPercent)({
    success: success,
    successPercent: successPercent
  });

  if (!realSuccessPercent) {
    return ptg;
  }

  return [(0, _utils.validProgress)(realSuccessPercent), (0, _utils.validProgress)(ptg - (0, _utils.validProgress)(realSuccessPercent))];
}

function getStrokeColor(_ref2) {
  var success = _ref2.success,
      strokeColor = _ref2.strokeColor,
      successPercent = _ref2.successPercent;
  var color = strokeColor || null;
  var realSuccessPercent = (0, _utils.getSuccessPercent)({
    success: success,
    successPercent: successPercent
  });

  if (!realSuccessPercent) {
    return color;
  }

  return [_colors.presetPrimaryColors.green, color];
}

var Circle = function Circle(props) {
  var prefixCls = props.prefixCls,
      width = props.width,
      strokeWidth = props.strokeWidth,
      trailColor = props.trailColor,
      strokeLinecap = props.strokeLinecap,
      gapPosition = props.gapPosition,
      gapDegree = props.gapDegree,
      type = props.type,
      children = props.children;
  var circleSize = width || 120;
  var circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6
  };
  var circleWidth = strokeWidth || 6;
  var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';

  var getGapDegree = function getGapDegree() {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }

    if (type === 'dashboard') {
      return 75;
    }

    return undefined;
  }; // using className to style stroke color


  var strokeColor = getStrokeColor(props);
  var isGradient = Object.prototype.toString.call(strokeColor) === '[object Object]';
  var wrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-inner"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-circle-gradient"), isGradient));
  return /*#__PURE__*/React.createElement("div", {
    className: wrapperClassName,
    style: circleStyle
  }, /*#__PURE__*/React.createElement(_rcProgress.Circle, {
    percent: getPercentage(props),
    strokeWidth: circleWidth,
    trailWidth: circleWidth,
    strokeColor: strokeColor,
    strokeLinecap: strokeLinecap,
    trailColor: trailColor,
    prefixCls: prefixCls,
    gapDegree: getGapDegree(),
    gapPosition: gapPos
  }), children);
};

var _default = Circle;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/progress/Line.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/progress/Line.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.handleGradient = exports.sortGradient = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _colors = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/dist/index.esm.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/progress/utils.js");

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

/**
 * {
 *   '0%': '#afc163',
 *   '75%': '#009900',
 *   '50%': 'green',     ====>     '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *   '25%': '#66FF00',
 *   '100%': '#ffffff'
 * }
 */
var sortGradient = function sortGradient(gradients) {
  var tempArr = [];
  Object.keys(gradients).forEach(function (key) {
    var formattedKey = parseFloat(key.replace(/%/g, ''));

    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort(function (a, b) {
    return a.key - b.key;
  });
  return tempArr.map(function (_ref) {
    var key = _ref.key,
        value = _ref.value;
    return "".concat(value, " ").concat(key, "%");
  }).join(', ');
};
/**
 * {
 *   '0%': '#afc163',
 *   '25%': '#66FF00',
 *   '50%': '#00CC00',     ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *   '75%': '#009900',              #00CC00 50%, #009900 75%, #ffffff 100%)
 *   '100%': '#ffffff'
 * }
 *
 * Then this man came to realize the truth:
 * Besides six pence, there is the moon.
 * Besides bread and butter, there is the bug.
 * And...
 * Besides women, there is the code.
 */


exports.sortGradient = sortGradient;

var handleGradient = function handleGradient(strokeColor, directionConfig) {
  var _strokeColor$from = strokeColor.from,
      from = _strokeColor$from === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$from,
      _strokeColor$to = strokeColor.to,
      to = _strokeColor$to === void 0 ? _colors.presetPrimaryColors.blue : _strokeColor$to,
      _strokeColor$directio = strokeColor.direction,
      direction = _strokeColor$directio === void 0 ? directionConfig === 'rtl' ? 'to left' : 'to right' : _strokeColor$directio,
      rest = __rest(strokeColor, ["from", "to", "direction"]);

  if (Object.keys(rest).length !== 0) {
    var sortedGradients = sortGradient(rest);
    return {
      backgroundImage: "linear-gradient(".concat(direction, ", ").concat(sortedGradients, ")")
    };
  }

  return {
    backgroundImage: "linear-gradient(".concat(direction, ", ").concat(from, ", ").concat(to, ")")
  };
};

exports.handleGradient = handleGradient;

var Line = function Line(props) {
  var prefixCls = props.prefixCls,
      directionConfig = props.direction,
      percent = props.percent,
      strokeWidth = props.strokeWidth,
      size = props.size,
      strokeColor = props.strokeColor,
      strokeLinecap = props.strokeLinecap,
      children = props.children,
      trailColor = props.trailColor,
      success = props.success;
  var backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    background: strokeColor
  };
  var trailStyle = trailColor ? {
    backgroundColor: trailColor
  } : undefined;
  var percentStyle = (0, _extends2["default"])({
    width: "".concat((0, _utils.validProgress)(percent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : ''
  }, backgroundProps);
  var successPercent = (0, _utils.getSuccessPercent)(props);
  var successPercentStyle = {
    width: "".concat((0, _utils.validProgress)(successPercent), "%"),
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius: strokeLinecap === 'square' ? 0 : '',
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  var successSegment = successPercent !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-success-bg"),
    style: successPercentStyle
  }) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-outer")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    style: trailStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-bg"),
    style: percentStyle
  }), successSegment)), children);
};

var _default = Line;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/progress/Steps.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/progress/Steps.js ***!
  \*************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Steps = function Steps(props) {
  var size = props.size,
      steps = props.steps,
      _props$percent = props.percent,
      percent = _props$percent === void 0 ? 0 : _props$percent,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? 8 : _props$strokeWidth,
      strokeColor = props.strokeColor,
      trailColor = props.trailColor,
      prefixCls = props.prefixCls,
      children = props.children;
  var current = Math.floor(steps * (percent / 100));
  var stepWidth = size === 'small' ? 2 : 14;
  var styledSteps = [];

  for (var i = 0; i < steps; i += 1) {
    styledSteps.push( /*#__PURE__*/React.createElement("div", {
      key: i,
      className: (0, _classnames["default"])("".concat(prefixCls, "-steps-item"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-steps-item-active"), i <= current - 1)),
      style: {
        backgroundColor: i <= current - 1 ? strokeColor : trailColor,
        width: stepWidth,
        height: strokeWidth
      }
    }));
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-steps-outer")
  }, styledSteps, children);
};

var _default = Steps;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/progress/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/progress/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _progress = _interopRequireDefault(__webpack_require__(/*! ./progress */ "./node_modules/antd/lib/progress/progress.js"));

var _default = _progress["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/progress/progress.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/progress/progress.js ***!
  \****************************************************/
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _CheckOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckOutlined */ "./node_modules/@ant-design/icons/CheckOutlined.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Line = _interopRequireDefault(__webpack_require__(/*! ./Line */ "./node_modules/antd/lib/progress/Line.js"));

var _Circle = _interopRequireDefault(__webpack_require__(/*! ./Circle */ "./node_modules/antd/lib/progress/Circle.js"));

var _Steps = _interopRequireDefault(__webpack_require__(/*! ./Steps */ "./node_modules/antd/lib/progress/Steps.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/progress/utils.js");

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

var ProgressTypes = (0, _type.tuple)('line', 'circle', 'dashboard');
var ProgressStatuses = (0, _type.tuple)('normal', 'exception', 'active', 'success');

var Progress = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Progress, _React$Component);

  var _super = (0, _createSuper2["default"])(Progress);

  function Progress() {
    var _this;

    (0, _classCallCheck2["default"])(this, Progress);
    _this = _super.apply(this, arguments);

    _this.renderProgress = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          size = props.size,
          type = props.type,
          steps = props.steps,
          showInfo = props.showInfo,
          strokeColor = props.strokeColor,
          restProps = __rest(props, ["prefixCls", "className", "size", "type", "steps", "showInfo", "strokeColor"]);

      var prefixCls = getPrefixCls('progress', customizePrefixCls);

      var progressStatus = _this.getProgressStatus();

      var progressInfo = _this.renderProcessInfo(prefixCls, progressStatus);

      (0, _devWarning["default"])(!('successPercent' in props), 'Progress', '`successPercent` is deprecated. Please use `success.percent` instead.');
      var progress; // Render progress shape

      if (type === 'line') {
        progress = steps ? /*#__PURE__*/React.createElement(_Steps["default"], (0, _extends2["default"])({}, _this.props, {
          strokeColor: typeof strokeColor === 'string' ? strokeColor : undefined,
          prefixCls: prefixCls,
          steps: steps
        }), progressInfo) : /*#__PURE__*/React.createElement(_Line["default"], (0, _extends2["default"])({}, _this.props, {
          prefixCls: prefixCls,
          direction: direction
        }), progressInfo);
      } else if (type === 'circle' || type === 'dashboard') {
        progress = /*#__PURE__*/React.createElement(_Circle["default"], (0, _extends2["default"])({}, _this.props, {
          prefixCls: prefixCls,
          progressStatus: progressStatus
        }), progressInfo);
      }

      var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type === 'dashboard' && 'circle' || steps && 'steps' || type), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-status-").concat(progressStatus), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-show-info"), showInfo), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, (0, _omit["default"])(restProps, ['status', 'format', 'trailColor', 'strokeWidth', 'width', 'gapDegree', 'gapPosition', 'strokeColor', 'strokeLinecap', 'percent', 'steps', 'success', 'successPercent']), {
        className: classString
      }), progress);
    };

    return _this;
  }

  (0, _createClass2["default"])(Progress, [{
    key: "getPercentNumber",
    value: function getPercentNumber() {
      var _this$props$percent = this.props.percent,
          percent = _this$props$percent === void 0 ? 0 : _this$props$percent;
      var successPercent = (0, _utils.getSuccessPercent)(this.props);
      return parseInt(successPercent !== undefined ? successPercent.toString() : percent.toString(), 10);
    }
  }, {
    key: "getProgressStatus",
    value: function getProgressStatus() {
      var status = this.props.status;

      if (ProgressStatuses.indexOf(status) < 0 && this.getPercentNumber() >= 100) {
        return 'success';
      }

      return status || 'normal';
    }
  }, {
    key: "renderProcessInfo",
    value: function renderProcessInfo(prefixCls, progressStatus) {
      var _this$props = this.props,
          showInfo = _this$props.showInfo,
          format = _this$props.format,
          type = _this$props.type,
          percent = _this$props.percent;
      var successPercent = (0, _utils.getSuccessPercent)(this.props);
      if (!showInfo) return null;
      var text;

      var textFormatter = format || function (percentNumber) {
        return "".concat(percentNumber, "%");
      };

      var isLineType = type === 'line';

      if (format || progressStatus !== 'exception' && progressStatus !== 'success') {
        text = textFormatter((0, _utils.validProgress)(percent), (0, _utils.validProgress)(successPercent));
      } else if (progressStatus === 'exception') {
        text = isLineType ? /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CloseOutlined["default"], null);
      } else if (progressStatus === 'success') {
        text = isLineType ? /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], null) : /*#__PURE__*/React.createElement(_CheckOutlined["default"], null);
      }

      return /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-text"),
        title: typeof text === 'string' ? text : undefined
      }, text);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderProgress);
    }
  }]);
  return Progress;
}(React.Component);

exports["default"] = Progress;
Progress.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  // null for different theme definition
  trailColor: null,
  size: 'default',
  gapDegree: undefined,
  strokeLinecap: 'round'
};

/***/ }),

/***/ "./node_modules/antd/lib/progress/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/progress/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validProgress = validProgress;
exports.getSuccessPercent = getSuccessPercent;

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

function validProgress(progress) {
  if (!progress || progress < 0) {
    return 0;
  }

  if (progress > 100) {
    return 100;
  }

  return progress;
}

function getSuccessPercent(_ref) {
  var success = _ref.success,
      successPercent = _ref.successPercent;
  var percent = successPercent;
  /** @deprecated Use `percent` instead */

  if (success && 'progress' in success) {
    (0, _devWarning["default"])(false, 'Progress', '`success.progress` is deprecated. Please use `success.percent` instead.');
    percent = success.progress;
  }

  if (success && 'percent' in success) {
    percent = success.percent;
  }

  return percent;
}

/***/ }),

/***/ "./node_modules/antd/lib/radio/context.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/radio/context.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioGroupContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var RadioGroupContext = /*#__PURE__*/React.createContext(null);
var RadioGroupContextProvider = RadioGroupContext.Provider;
exports.RadioGroupContextProvider = RadioGroupContextProvider;
var _default = RadioGroupContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/group.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/group.js ***!
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _useMergedState3 = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMergedState */ "./node_modules/rc-util/lib/hooks/useMergedState.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js");

var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(_SizeContext["default"]);

  var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;

    if (!('value' in props)) {
      setValue(val);
    }

    var onChange = props.onChange;

    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };

  var renderGroup = function renderGroup() {
    var _classNames;

    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className,
        options = props.options,
        optionType = props.optionType,
        buttonStyle = props.buttonStyle,
        disabled = props.disabled,
        children = props.children,
        customizeSize = props.size,
        style = props.style,
        id = props.id,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var childrenToRender = children; // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls, "-button") : prefixCls;
      childrenToRender = options.map(function (option) {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return /*#__PURE__*/React.createElement(_radio["default"], {
            key: option,
            prefixCls: optionsPrefixCls,
            disabled: disabled,
            value: option,
            checked: value === option
          }, option);
        } // 此处类型自动推导为 { label: string value: string }


        return /*#__PURE__*/React.createElement(_radio["default"], {
          key: "radio-group-value-options-".concat(option.value),
          prefixCls: optionsPrefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          style: option.style
        }, option.label);
      });
    }

    var mergedSize = customizeSize || size;
    var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      id: id,
      ref: ref
    }, childrenToRender);
  };

  return /*#__PURE__*/React.createElement(_context.RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name
    }
  }, renderGroup());
});
RadioGroup.defaultProps = {
  buttonStyle: 'outline'
};

var _default = /*#__PURE__*/React.memo(RadioGroup);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _group["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _radioButton["default"];
  }
});
exports["default"] = void 0;

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _group = _interopRequireDefault(__webpack_require__(/*! ./group */ "./node_modules/antd/lib/radio/group.js"));

var _radioButton = _interopRequireDefault(__webpack_require__(/*! ./radioButton */ "./node_modules/antd/lib/radio/radioButton.js"));

var Radio = _radio["default"];
Radio.Button = _radioButton["default"];
Radio.Group = _group["default"];
var _default = Radio;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/radio.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/radio.js ***!
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

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcCheckbox = _interopRequireDefault(__webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js"));

var _ref = __webpack_require__(/*! ../_util/ref */ "./node_modules/antd/lib/_util/ref.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

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

var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;

  var context = React.useContext(_context["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var innerRef = React.useRef();
  var mergedRef = (0, _ref.composeRef)(ref, innerRef);
  React.useEffect(function () {
    (0, _devWarning["default"])(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);

  var onChange = function onChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }

    if (context === null || context === void 0 ? void 0 : context.onChange) {
      context.onChange(e);
    }
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  var radioProps = (0, _extends2["default"])({}, restProps);

  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }

  var wrapperClassString = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), _classNames), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, radioProps, {
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
  );
};

var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
Radio.displayName = 'Radio';
Radio.defaultProps = {
  type: 'radio'
};
var _default = Radio;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/radioButton.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/radio/radioButton.js ***!
  \****************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js"));

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

var RadioButton = function RadioButton(props, ref) {
  var radioGroupContext = React.useContext(_context["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      radioProps = __rest(props, ["prefixCls"]);

  var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

  if (radioGroupContext) {
    radioProps.checked = props.value === radioGroupContext.value;
    radioProps.disabled = props.disabled || radioGroupContext.disabled;
  }

  return /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  }));
};

var _default = /*#__PURE__*/React.forwardRef(RadioButton);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/upload/Dragger.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/upload/Dragger.js ***!
  \*************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Upload = _interopRequireDefault(__webpack_require__(/*! ./Upload */ "./node_modules/antd/lib/upload/Upload.js"));

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

var InternalDragger = function InternalDragger(_a, ref) {
  var style = _a.style,
      height = _a.height,
      restProps = __rest(_a, ["style", "height"]);

  return /*#__PURE__*/React.createElement(_Upload["default"], (0, _extends2["default"])({
    ref: ref
  }, restProps, {
    type: "drag",
    style: (0, _extends2["default"])((0, _extends2["default"])({}, style), {
      height: height
    })
  }));
};

var Dragger = /*#__PURE__*/React.forwardRef(InternalDragger);
Dragger.displayName = 'Dragger';
var _default = Dragger;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/upload/Upload.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/upload/Upload.js ***!
  \************************************************/
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

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcUpload = _interopRequireDefault(__webpack_require__(/*! rc-upload */ "./node_modules/rc-upload/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Dragger = _interopRequireDefault(__webpack_require__(/*! ./Dragger */ "./node_modules/antd/lib/upload/Dragger.js"));

var _UploadList = _interopRequireDefault(__webpack_require__(/*! ./UploadList */ "./node_modules/antd/lib/upload/UploadList.js"));

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/upload/utils.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__(/*! ../_util/hooks/useForceUpdate */ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js"));

var _useFreshState3 = _interopRequireDefault(__webpack_require__(/*! ./useFreshState */ "./node_modules/antd/lib/upload/useFreshState.js"));

var InternalUpload = function InternalUpload(props, ref) {
  var _classNames2;

  var fileListProp = props.fileList,
      defaultFileList = props.defaultFileList,
      onRemove = props.onRemove,
      showUploadList = props.showUploadList,
      listType = props.listType,
      onPreview = props.onPreview,
      onDownload = props.onDownload,
      previewFile = props.previewFile,
      disabled = props.disabled,
      propLocale = props.locale,
      iconRender = props.iconRender,
      isImageUrl = props.isImageUrl,
      progress = props.progress,
      customizePrefixCls = props.prefixCls,
      className = props.className,
      type = props.type,
      children = props.children,
      style = props.style,
      itemRender = props.itemRender;

  var _React$useState = React.useState('drop'),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      dragState = _React$useState2[0],
      setDragState = _React$useState2[1];

  var forceUpdate = (0, _useForceUpdate["default"])(); // Refresh always use fresh data

  var _useFreshState = (0, _useFreshState3["default"])(fileListProp || defaultFileList || [], fileListProp),
      _useFreshState2 = (0, _slicedToArray2["default"])(_useFreshState, 2),
      getFileList = _useFreshState2[0],
      setFileList = _useFreshState2[1];

  var upload = React.useRef();
  React.useEffect(function () {
    (0, _devWarning["default"])('fileList' in props || !('value' in props), 'Upload', '`value` is not a valid prop, do you mean `fileList`?');
  }, []);

  var onChange = function onChange(info) {
    setFileList(info.fileList);
    var onChangeProp = props.onChange;

    if (onChangeProp) {
      onChangeProp((0, _extends2["default"])((0, _extends2["default"])({}, info), {
        fileList: (0, _toConsumableArray2["default"])(info.fileList)
      }));
    }
  };

  var onStart = function onStart(file) {
    var targetItem = (0, _utils.fileToObject)(file);
    targetItem.status = 'uploading';
    var nextFileList = getFileList().concat();
    var fileIndex = nextFileList.findIndex(function (_ref) {
      var uid = _ref.uid;
      return uid === targetItem.uid;
    });

    if (fileIndex === -1) {
      nextFileList.push(targetItem);
    } else {
      nextFileList[fileIndex] = targetItem;
    }

    onChange({
      file: targetItem,
      fileList: nextFileList
    });
  };

  var onSuccess = function onSuccess(response, file, xhr) {
    try {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
    } catch (e) {
      /* do nothing */
    }

    var targetItem = (0, _utils.getFileItem)(file, getFileList()); // removed

    if (!targetItem) {
      return;
    }

    targetItem.status = 'done';
    targetItem.response = response;
    targetItem.xhr = xhr;
    onChange({
      file: (0, _extends2["default"])({}, targetItem),
      fileList: getFileList().concat()
    });
  };

  var onProgress = function onProgress(e, file) {
    var targetItem = (0, _utils.getFileItem)(file, getFileList()); // removed

    if (!targetItem) {
      return;
    }

    targetItem.percent = e.percent;
    onChange({
      event: e,
      file: (0, _extends2["default"])({}, targetItem),
      fileList: getFileList().concat()
    });
  };

  var onError = function onError(error, response, file) {
    var targetItem = (0, _utils.getFileItem)(file, getFileList()); // removed

    if (!targetItem) {
      return;
    }

    targetItem.error = error;
    targetItem.response = response;
    targetItem.status = 'error';
    onChange({
      file: (0, _extends2["default"])({}, targetItem),
      fileList: getFileList().concat()
    });
  };

  var handleRemove = function handleRemove(file) {
    Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
      // Prevent removing file
      if (ret === false) {
        return;
      }

      var removedFileList = (0, _utils.removeFileItem)(file, getFileList());

      if (removedFileList) {
        file.status = 'removed';

        if (upload.current) {
          upload.current.abort(file);
        }

        onChange({
          file: file,
          fileList: removedFileList
        });
      }
    });
  };

  var onFileDrop = function onFileDrop(e) {
    setDragState(e.type);
  };

  var beforeUpload = function beforeUpload(file, fileListArgs) {
    var beforeUploadProp = props.beforeUpload;

    if (!beforeUploadProp) {
      return true;
    }

    var result = beforeUploadProp(file, fileListArgs);

    if (result === false) {
      // Get unique file list
      var uniqueList = [];
      getFileList().concat(fileListArgs.map(_utils.fileToObject)).forEach(function (f) {
        if (uniqueList.every(function (uf) {
          return uf.uid !== f.uid;
        })) {
          uniqueList.push(f);
        }
      });
      onChange({
        file: file,
        fileList: uniqueList
      });
      return false;
    }

    if (result && result.then) {
      return result;
    }

    return true;
  }; // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      onStart: onStart,
      onSuccess: onSuccess,
      onProgress: onProgress,
      onError: onError,
      fileList: getFileList(),
      upload: upload.current,
      forceUpdate: forceUpdate
    };
  });

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var rcUploadProps = (0, _extends2["default"])((0, _extends2["default"])({
    onStart: onStart,
    onError: onError,
    onProgress: onProgress,
    onSuccess: onSuccess
  }, props), {
    prefixCls: prefixCls,
    beforeUpload: beforeUpload
  });
  delete rcUploadProps.className;
  delete rcUploadProps.style; // Remove id to avoid open by label when trigger is hidden
  // !children: https://github.com/ant-design/ant-design/issues/14298
  // disabled: https://github.com/ant-design/ant-design/issues/16478
  //           https://github.com/ant-design/ant-design/issues/24197

  if (!children || disabled) {
    delete rcUploadProps.id;
  }

  var renderUploadList = function renderUploadList(button) {
    return showUploadList ? /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
      componentName: "Upload",
      defaultLocale: _default2["default"].Upload
    }, function (locale) {
      var _ref2 = typeof showUploadList === 'boolean' ? {} : showUploadList,
          showRemoveIcon = _ref2.showRemoveIcon,
          showPreviewIcon = _ref2.showPreviewIcon,
          showDownloadIcon = _ref2.showDownloadIcon,
          removeIcon = _ref2.removeIcon,
          downloadIcon = _ref2.downloadIcon;

      return /*#__PURE__*/React.createElement(_UploadList["default"], {
        listType: listType,
        items: getFileList(true),
        previewFile: previewFile,
        onPreview: onPreview,
        onDownload: onDownload,
        onRemove: handleRemove,
        showRemoveIcon: !disabled && showRemoveIcon,
        showPreviewIcon: showPreviewIcon,
        showDownloadIcon: showDownloadIcon,
        removeIcon: removeIcon,
        downloadIcon: downloadIcon,
        iconRender: iconRender,
        locale: (0, _extends2["default"])((0, _extends2["default"])({}, locale), propLocale),
        isImageUrl: isImageUrl,
        progress: progress,
        appendAction: button,
        itemRender: itemRender
      });
    }) : button;
  };

  if (type === 'drag') {
    var _classNames;

    var dragCls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-drag"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-drag-uploading"), getFileList().some(function (file) {
      return file.status === 'uploading';
    })), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-drag-hover"), dragState === 'dragover'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("div", {
      className: dragCls,
      onDrop: onFileDrop,
      onDragOver: onFileDrop,
      onDragLeave: onFileDrop,
      style: style
    }, /*#__PURE__*/React.createElement(_rcUpload["default"], (0, _extends2["default"])({}, rcUploadProps, {
      ref: upload,
      className: "".concat(prefixCls, "-btn")
    }), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-drag-container")
    }, children))), renderUploadList());
  }

  var uploadButtonCls = (0, _classnames["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-select"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-select-").concat(listType), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames2));
  var uploadButton = /*#__PURE__*/React.createElement("div", {
    className: uploadButtonCls,
    style: children ? undefined : {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(_rcUpload["default"], (0, _extends2["default"])({}, rcUploadProps, {
    ref: upload
  })));

  if (listType === 'picture-card') {
    return /*#__PURE__*/React.createElement("span", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-picture-card-wrapper"), className)
    }, renderUploadList(uploadButton));
  }

  return /*#__PURE__*/React.createElement("span", {
    className: className
  }, uploadButton, renderUploadList());
};

var Upload = /*#__PURE__*/React.forwardRef(InternalUpload);
Upload.Dragger = _Dragger["default"];
Upload.displayName = 'Upload';
Upload.defaultProps = {
  type: 'select',
  multiple: false,
  action: '',
  data: {},
  accept: '',
  beforeUpload: _utils.T,
  showUploadList: true,
  listType: 'text',
  className: '',
  disabled: false,
  supportServerRender: true
};
var _default = Upload;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/upload/UploadList.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/upload/UploadList.js ***!
  \****************************************************/
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

var _rcAnimate = _interopRequireDefault(__webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var _PaperClipOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/PaperClipOutlined */ "./node_modules/@ant-design/icons/PaperClipOutlined.js"));

var _PictureTwoTone = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/PictureTwoTone */ "./node_modules/@ant-design/icons/PictureTwoTone.js"));

var _FileTwoTone = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/FileTwoTone */ "./node_modules/@ant-design/icons/FileTwoTone.js"));

var _EyeOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EyeOutlined */ "./node_modules/@ant-design/icons/EyeOutlined.js"));

var _DeleteOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DeleteOutlined */ "./node_modules/@ant-design/icons/DeleteOutlined.js"));

var _DownloadOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownloadOutlined */ "./node_modules/@ant-design/icons/DownloadOutlined.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/antd/lib/upload/utils.js");

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _progress = _interopRequireDefault(__webpack_require__(/*! ../progress */ "./node_modules/antd/lib/progress/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__(/*! ../_util/hooks/useForceUpdate */ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js"));

var InternalUploadList = function InternalUploadList(_ref, ref) {
  var _classNames6;

  var listType = _ref.listType,
      previewFile = _ref.previewFile,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onRemove = _ref.onRemove,
      locale = _ref.locale,
      iconRender = _ref.iconRender,
      isImgUrl = _ref.isImageUrl,
      customizePrefixCls = _ref.prefixCls,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      customRemoveIcon = _ref.removeIcon,
      customDownloadIcon = _ref.downloadIcon,
      progressProps = _ref.progress,
      appendAction = _ref.appendAction,
      itemRender = _ref.itemRender;
  var forceUpdate = (0, _useForceUpdate["default"])();
  React.useEffect(function () {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return;
    }

    (items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
        return;
      }

      file.thumbUrl = '';

      if (previewFile) {
        previewFile(file.originFileObj).then(function (previewDataUrl) {
          // Need append '' to avoid dead loop
          file.thumbUrl = previewDataUrl || '';
          forceUpdate();
        });
      }
    });
  }, [listType, items, previewFile]);

  var handlePreview = function handlePreview(file, e) {
    if (!onPreview) {
      return;
    }

    e.preventDefault();
    return onPreview(file);
  };

  var handleDownload = function handleDownload(file) {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  var handleClose = function handleClose(file) {
    if (onRemove) {
      onRemove(file);
    }
  };

  var handleIconRender = function handleIconRender(file) {
    if (iconRender) {
      return iconRender(file, listType);
    }

    var isLoading = file.status === 'uploading';
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(_PictureTwoTone["default"], null) : /*#__PURE__*/React.createElement(_FileTwoTone["default"], null);
    var icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : /*#__PURE__*/React.createElement(_PaperClipOutlined["default"], null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : fileIcon;
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon;
    }

    return icon;
  };

  var handleActionIconRender = function handleActionIconRender(customIcon, callback, prefixCls, title) {
    var btnProps = {
      type: 'text',
      size: 'small',
      title: title,
      onClick: function onClick(e) {
        callback();

        if ((0, _reactNode.isValidElement)(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if ((0, _reactNode.isValidElement)(customIcon)) {
      var btnIcon = (0, _reactNode.cloneElement)(customIcon, (0, _extends2["default"])((0, _extends2["default"])({}, customIcon.props), {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, btnProps, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/React.createElement(_button["default"], btnProps, /*#__PURE__*/React.createElement("span", null, customIcon));
  }; // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      handlePreview: handlePreview,
      handleDownload: handleDownload
    };
  });

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var list = items.map(function (file) {
    var _classNames3, _classNames4;

    var progress;
    var iconNode = handleIconRender(file);
    var icon = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-text-icon")
    }, iconNode);

    if (listType === 'picture' || listType === 'picture-card') {
      if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
        var _classNames;

        var uploadingClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _classNames));
        icon = /*#__PURE__*/React.createElement("div", {
          className: uploadingClassName
        }, iconNode);
      } else {
        var _classNames2;

        var thumbnail = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement("img", {
          src: file.thumbUrl || file.url,
          alt: file.name,
          className: "".concat(prefixCls, "-list-item-image")
        }) : iconNode;
        var aClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _classNames2));
        icon = /*#__PURE__*/React.createElement("a", {
          className: aClassName,
          onClick: function onClick(e) {
            return handlePreview(file, e);
          },
          href: file.url || file.thumbUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, thumbnail);
      }
    }

    if (file.status === 'uploading') {
      // show loading icon if upload progress listener is disabled
      var loadingProgress = 'percent' in file ? /*#__PURE__*/React.createElement(_progress["default"], (0, _extends2["default"])({}, progressProps, {
        type: "line",
        percent: file.percent
      })) : null;
      progress = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-list-item-progress"),
        key: "progress"
      }, loadingProgress);
    }

    var infoUploadingClass = (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item"), true), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames3));
    var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    var removeIcon = showRemoveIcon ? handleActionIconRender((typeof customRemoveIcon === 'function' ? customRemoveIcon(file) : customRemoveIcon) || /*#__PURE__*/React.createElement(_DeleteOutlined["default"], null), function () {
      return handleClose(file);
    }, prefixCls, locale.removeFile) : null;
    var downloadIcon = showDownloadIcon && file.status === 'done' ? handleActionIconRender((typeof customDownloadIcon === 'function' ? customDownloadIcon(file) : customDownloadIcon) || /*#__PURE__*/React.createElement(_DownloadOutlined["default"], null), function () {
      return handleDownload(file);
    }, prefixCls, locale.downloadFile) : null;
    var downloadOrDelete = listType !== 'picture-card' && /*#__PURE__*/React.createElement("span", {
      key: "download-delete",
      className: "".concat(prefixCls, "-list-item-card-actions ").concat(listType === 'picture' ? 'picture' : '')
    }, downloadIcon, removeIcon);
    var listItemNameClass = (0, _classnames["default"])((_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-list-item-name"), true), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-list-item-name-icon-count-").concat([downloadIcon, removeIcon].filter(function (x) {
      return x;
    }).length), true), _classNames4));
    var preview = file.url ? [/*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
      key: "view",
      target: "_blank",
      rel: "noopener noreferrer",
      className: listItemNameClass,
      title: file.name
    }, linkProps, {
      href: file.url,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      }
    }), file.name), downloadOrDelete] : [/*#__PURE__*/React.createElement("span", {
      key: "view",
      className: listItemNameClass,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      },
      title: file.name
    }, file.name), downloadOrDelete];
    var style = {
      pointerEvents: 'none',
      opacity: 0.5
    };
    var previewIcon = showPreviewIcon ? /*#__PURE__*/React.createElement("a", {
      href: file.url || file.thumbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      style: file.url || file.thumbUrl ? undefined : style,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      },
      title: locale.previewFile
    }, /*#__PURE__*/React.createElement(_EyeOutlined["default"], null)) : null;
    var actions = listType === 'picture-card' && file.status !== 'uploading' && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-list-item-actions")
    }, previewIcon, file.status === 'done' && downloadIcon, removeIcon);
    var message;

    if (file.response && typeof file.response === 'string') {
      message = file.response;
    } else {
      message = file.error && file.error.statusText || locale.uploadError;
    }

    var iconAndPreview = /*#__PURE__*/React.createElement("span", null, icon, preview);
    var dom = /*#__PURE__*/React.createElement("div", {
      className: infoUploadingClass
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-list-item-info")
    }, iconAndPreview), actions, /*#__PURE__*/React.createElement(_rcAnimate["default"], {
      transitionName: "fade",
      component: ""
    }, progress));
    var listContainerNameClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-list-picture-card-container"), listType === 'picture-card'));
    var item = file.status === 'error' ? /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: message,
      getPopupContainer: function getPopupContainer(node) {
        return node.parentNode;
      }
    }, dom) : /*#__PURE__*/React.createElement("span", null, dom);
    return /*#__PURE__*/React.createElement("div", {
      key: file.uid,
      className: listContainerNameClass
    }, itemRender ? itemRender(item, file, items) : item);
  });
  var listClassNames = (0, _classnames["default"])((_classNames6 = {}, (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list"), true), (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list-").concat(listType), true), (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames6));
  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
  var transitionName = list.length === 0 ? '' : "".concat(prefixCls, "-").concat(animationDirection);
  return /*#__PURE__*/React.createElement(_rcAnimate["default"], {
    transitionName: transitionName,
    component: "div",
    className: listClassNames
  }, list, /*#__PURE__*/React.isValidElement(appendAction) ? /*#__PURE__*/React.cloneElement(appendAction, {
    key: 'appendAction'
  }) : appendAction);
};

var UploadList = /*#__PURE__*/React.forwardRef(InternalUploadList);
UploadList.displayName = 'UploadList';
UploadList.defaultProps = {
  listType: 'text',
  progress: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  previewFile: _utils.previewImage,
  isImageUrl: _utils.isImageUrl
};
var _default = UploadList;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Upload = _interopRequireDefault(__webpack_require__(/*! ./Upload */ "./node_modules/antd/lib/upload/Upload.js"));

var _Dragger = _interopRequireDefault(__webpack_require__(/*! ./Dragger */ "./node_modules/antd/lib/upload/Dragger.js"));

_Upload["default"].Dragger = _Dragger["default"];
var _default = _Upload["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/upload/useFreshState.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/upload/useFreshState.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFreshState;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _raf = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/raf */ "./node_modules/rc-util/lib/raf.js"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__(/*! ../_util/hooks/useForceUpdate */ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js"));

// Note. Only for upload usage. Do not export to global util hooks
function useFreshState(defaultValue, propValue) {
  var valueRef = (0, _react.useRef)(defaultValue);
  var forceUpdate = (0, _useForceUpdate["default"])();
  var rafRef = (0, _react.useRef)(); // Set value

  function setValue(newValue) {
    valueRef.current = newValue;
    forceUpdate();
  }

  function cleanUp() {
    _raf["default"].cancel(rafRef.current);
  }

  function rafSyncValue(newValue) {
    cleanUp();
    rafRef.current = (0, _raf["default"])(function () {
      setValue(newValue);
    });
  } // Get value


  function getValue() {
    var displayValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (displayValue) {
      return propValue || valueRef.current;
    }

    return valueRef.current;
  } // Effect will always update in a next frame to avoid sync state overwrite current processing state


  (0, _react.useEffect)(function () {
    if (propValue) {
      rafSyncValue(propValue);
    }
  }, [propValue]); // Clean up

  (0, _react.useEffect)(function () {
    return function () {
      cleanUp();
    };
  }, []);
  return [getValue, setValue];
}

/***/ }),

/***/ "./node_modules/antd/lib/upload/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/upload/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.T = T;
exports.fileToObject = fileToObject;
exports.getFileItem = getFileItem;
exports.removeFileItem = removeFileItem;
exports.previewImage = previewImage;
exports.isImageUrl = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

function T() {
  return true;
} // Fix IE file.status problem
// via coping a new Object


function fileToObject(file) {
  return (0, _extends2["default"])((0, _extends2["default"])({}, file), {
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file
  });
}

function getFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter(function (item) {
    return item[matchKey] === file[matchKey];
  })[0];
}

function removeFileItem(file, fileList) {
  var matchKey = file.uid !== undefined ? 'uid' : 'name';
  var removed = fileList.filter(function (item) {
    return item[matchKey] !== file[matchKey];
  });

  if (removed.length === fileList.length) {
    return null;
  }

  return removed;
} // ==================== Default Image Preview ====================


var extname = function extname() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var temp = url.split('/');
  var filename = temp[temp.length - 1];
  var filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

var isImageFileType = function isImageFileType(type) {
  return type.indexOf('image/') === 0;
};

var isImageUrl = function isImageUrl(file) {
  if (file.type && !file.thumbUrl) {
    return isImageFileType(file.type);
  }

  var url = file.thumbUrl || file.url;
  var extension = extname(url);

  if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }

  if (/^data:/.test(url)) {
    // other file types of base64
    return false;
  }

  if (extension) {
    // other file types which have extension
    return false;
  }

  return true;
};

exports.isImageUrl = isImageUrl;
var MEASURE_SIZE = 200;

function previewImage(file) {
  return new Promise(function (resolve) {
    if (!file.type || !isImageFileType(file.type)) {
      resolve('');
      return;
    }

    var canvas = document.createElement('canvas');
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = "position: fixed; left: 0; top: 0; width: ".concat(MEASURE_SIZE, "px; height: ").concat(MEASURE_SIZE, "px; z-index: 9999; display: none;");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.onload = function () {
      var width = img.width,
          height = img.height;
      var drawWidth = MEASURE_SIZE;
      var drawHeight = MEASURE_SIZE;
      var offsetX = 0;
      var offsetY = 0;

      if (width > height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      var dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);
      resolve(dataURL);
    };

    img.src = window.URL.createObjectURL(file);
  });
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/rc-animate/es/Animate.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-animate/es/Animate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/unsafeLifecyclesPolyfill */ "./node_modules/rc-animate/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js");
/* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChildrenUtils */ "./node_modules/rc-animate/es/ChildrenUtils.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/prop-types: 0 */






var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children)) {
    if (!children.key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  } // eslint-disable-line

  _createClass(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["mergeChildren"])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
      }
      return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _AnimateChild__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = _extends({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Animate.isAnimate = true;
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_1__["default"])(Animate));

/***/ }),

/***/ "./node_modules/rc-animate/es/AnimateChild.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/AnimateChild.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/css-animation */ "./node_modules/@ant-design/css-animation/es/index.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/prop-types: 0 */





var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((_ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(_ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimateChild);

/***/ }),

/***/ "./node_modules/rc-animate/es/ChildrenUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-animate/es/ChildrenUtils.js ***!
  \*****************************************************/
/*! exports provided: toArrayChildren, findChildInChildrenByKey, findShownChildInChildrenByKey, findHiddenChildInChildrenByKey, isSameChildren, mergeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayChildren", function() { return toArrayChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildInChildrenByKey", function() { return findChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findShownChildInChildrenByKey", function() { return findShownChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findHiddenChildInChildrenByKey", function() { return findHiddenChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameChildren", function() { return isSameChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildren", function() { return mergeChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArrayChildren(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ "./node_modules/rc-animate/es/util/animate.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/util/animate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./node_modules/rc-animate/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/rc-animate/node_modules/rc-util/es/unsafeLifecyclesPolyfill.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var unsafeLifecyclesPolyfill = function unsafeLifecyclesPolyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  } // only handle componentWillReceiveProps


  if (typeof prototype.componentWillReceiveProps !== 'function') {
    return Component;
  } // In React 16.9, React.Profiler was introduced together with UNSAFE_componentWillReceiveProps
  // https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#performance-measurements-with-reactprofiler


  if (!react__WEBPACK_IMPORTED_MODULE_0___default.a.Profiler) {
    return Component;
  } // Here polyfill get started


  prototype.UNSAFE_componentWillReceiveProps = prototype.componentWillReceiveProps;
  delete prototype.componentWillReceiveProps;
  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (unsafeLifecyclesPolyfill);

/***/ }),

/***/ "./node_modules/rc-progress/es/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/Circle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./node_modules/rc-progress/es/common.js");





var gradientSeed = 0;

function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}

function toArray(symArray) {
  return Array.isArray(symArray) ? symArray : [symArray];
}

function getPathStyles(offset, percent, strokeColor, strokeWidth) {
  var gapDegree = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var gapPosition = arguments.length > 5 ? arguments[5] : undefined;
  var radius = 50 - strokeWidth / 2;
  var beginPositionX = 0;
  var beginPositionY = -radius;
  var endPositionX = 0;
  var endPositionY = -2 * radius;

  switch (gapPosition) {
    case 'left':
      beginPositionX = -radius;
      beginPositionY = 0;
      endPositionX = 2 * radius;
      endPositionY = 0;
      break;

    case 'right':
      beginPositionX = radius;
      beginPositionY = 0;
      endPositionX = -2 * radius;
      endPositionY = 0;
      break;

    case 'bottom':
      beginPositionY = radius;
      endPositionY = 2 * radius;
      break;

    default:
  }

  var pathString = "M 50,50 m ".concat(beginPositionX, ",").concat(beginPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(endPositionX, ",").concat(-endPositionY, "\n   a ").concat(radius, ",").concat(radius, " 0 1 1 ").concat(-endPositionX, ",").concat(endPositionY);
  var len = Math.PI * 2 * radius;
  var pathStyle = {
    stroke: strokeColor,
    strokeDasharray: "".concat(percent / 100 * (len - gapDegree), "px ").concat(len, "px"),
    strokeDashoffset: "-".concat(gapDegree / 2 + offset / 100 * (len - gapDegree), "px"),
    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
  };
  return {
    pathString: pathString,
    pathStyle: pathStyle
  };
}

var Circle = function Circle(_ref) {
  var prefixCls = _ref.prefixCls,
      strokeWidth = _ref.strokeWidth,
      trailWidth = _ref.trailWidth,
      gapDegree = _ref.gapDegree,
      gapPosition = _ref.gapPosition,
      trailColor = _ref.trailColor,
      strokeLinecap = _ref.strokeLinecap,
      style = _ref.style,
      className = _ref.className,
      strokeColor = _ref.strokeColor,
      percent = _ref.percent,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["prefixCls", "strokeWidth", "trailWidth", "gapDegree", "gapPosition", "trailColor", "strokeLinecap", "style", "className", "strokeColor", "percent"]);

  var gradientId = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    gradientSeed += 1;
    return gradientSeed;
  }, []);

  var _getPathStyles = getPathStyles(0, 100, trailColor, strokeWidth, gapDegree, gapPosition),
      pathString = _getPathStyles.pathString,
      pathStyle = _getPathStyles.pathStyle;

  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function (color) {
    return Object.prototype.toString.call(color) === '[object Object]';
  });

  var _useTransitionDuratio = Object(_common__WEBPACK_IMPORTED_MODULE_4__["useTransitionDuration"])(percentList),
      _useTransitionDuratio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var getStokeList = function getStokeList() {
    var stackPtg = 0;
    return percentList.map(function (ptg, index) {
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      var stroke = Object.prototype.toString.call(color) === '[object Object]' ? "url(#".concat(prefixCls, "-gradient-").concat(gradientId, ")") : '';
      var pathStyles = getPathStyles(stackPtg, ptg, color, strokeWidth, gapDegree, gapPosition);
      stackPtg += ptg;
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
        key: index,
        className: "".concat(prefixCls, "-circle-path"),
        d: pathStyles.pathString,
        stroke: stroke,
        strokeLinecap: strokeLinecap,
        strokeWidth: strokeWidth,
        opacity: ptg === 0 ? 0 : 1,
        fillOpacity: "0",
        style: pathStyles.pathStyle,
        ref: paths[index]
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("svg", Object.assign({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-circle"), className),
    viewBox: "0 0 100 100",
    style: style
  }, restProps), gradient && react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("defs", null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("linearGradient", {
    id: "".concat(prefixCls, "-gradient-").concat(gradientId),
    x1: "100%",
    y1: "0%",
    x2: "0%",
    y2: "0%"
  }, Object.keys(gradient).sort(function (a, b) {
    return stripPercentToNumber(a) - stripPercentToNumber(b);
  }).map(function (key, index) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("stop", {
      key: index,
      offset: key,
      stopColor: gradient[key]
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
    className: "".concat(prefixCls, "-circle-trail"),
    d: pathString,
    stroke: trailColor,
    strokeLinecap: strokeLinecap,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0",
    style: pathStyle
  }), getStokeList().reverse());
};

Circle.defaultProps = _common__WEBPACK_IMPORTED_MODULE_4__["defaultProps"];
Circle.displayName = 'Circle';
/* harmony default export */ __webpack_exports__["default"] = (Circle);

/***/ }),

/***/ "./node_modules/rc-progress/es/Line.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-progress/es/Line.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./node_modules/rc-progress/es/common.js");






var Line = function Line(_ref) {
  var className = _ref.className,
      percent = _ref.percent,
      prefixCls = _ref.prefixCls,
      strokeColor = _ref.strokeColor,
      strokeLinecap = _ref.strokeLinecap,
      strokeWidth = _ref.strokeWidth,
      style = _ref.style,
      trailColor = _ref.trailColor,
      trailWidth = _ref.trailWidth,
      transition = _ref.transition,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "percent", "prefixCls", "strokeColor", "strokeLinecap", "strokeWidth", "style", "trailColor", "trailWidth", "transition"]);

  // eslint-disable-next-line no-param-reassign
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];

  var _useTransitionDuratio = Object(_common__WEBPACK_IMPORTED_MODULE_4__["useTransitionDuration"])(percentList),
      _useTransitionDuratio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useTransitionDuratio, 1),
      paths = _useTransitionDuratio2[0];

  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = "M ".concat(strokeLinecap === 'round' ? center : 0, ",").concat(center, "\n         L ").concat(strokeLinecap === 'round' ? right : 100, ",").concat(center);
  var viewBoxString = "0 0 100 ".concat(strokeWidth);
  var stackPtg = 0;
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("svg", Object.assign({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-line"), className),
    viewBox: viewBoxString,
    preserveAspectRatio: "none",
    style: style
  }, restProps), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
    className: "".concat(prefixCls, "-line-trail"),
    d: pathString,
    strokeLinecap: strokeLinecap,
    stroke: trailColor,
    strokeWidth: trailWidth || strokeWidth,
    fillOpacity: "0"
  }), percentList.map(function (ptg, index) {
    var pathStyle = {
      strokeDasharray: "".concat(ptg, "px, 100px"),
      strokeDashoffset: "-".concat(stackPtg, "px"),
      transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
    };
    var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
    stackPtg += ptg;
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("path", {
      key: index,
      className: "".concat(prefixCls, "-line-path"),
      d: pathString,
      strokeLinecap: strokeLinecap,
      stroke: color,
      strokeWidth: strokeWidth,
      fillOpacity: "0",
      ref: paths[index],
      style: pathStyle
    });
  }));
};

Line.defaultProps = _common__WEBPACK_IMPORTED_MODULE_4__["defaultProps"];
Line.displayName = 'Line';
/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./node_modules/rc-progress/es/common.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-progress/es/common.js ***!
  \***********************************************/
/*! exports provided: defaultProps, useTransitionDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransitionDuration", function() { return useTransitionDuration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};
var useTransitionDuration = function useTransitionDuration(percentList) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var paths = percentList.map(function () {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  });
  var prevTimeStamp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var now = Date.now();
    var updated = false;
    Object.keys(paths).forEach(function (key) {
      var path = paths[key].current;

      if (!path) {
        return;
      }

      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });

    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return [paths];
};

/***/ }),

/***/ "./node_modules/rc-progress/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-progress/es/index.js ***!
  \**********************************************/
/*! exports provided: Line, Circle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "./node_modules/rc-progress/es/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "./node_modules/rc-progress/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/rc-upload/es/AjaxUploader.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-upload/es/AjaxUploader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/pickAttrs */ "./node_modules/rc-util/es/pickAttrs.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request */ "./node_modules/rc-upload/es/request.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./uid */ "./node_modules/rc-upload/es/uid.js");
/* harmony import */ var _attr_accept__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./attr-accept */ "./node_modules/rc-upload/es/attr-accept.js");
/* harmony import */ var _traverseFileTree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./traverseFileTree */ "./node_modules/rc-upload/es/traverseFileTree.js");








/* eslint react/no-is-mounted:0,react/sort-comp:0,react/prop-types:0 */








var AjaxUploader = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AjaxUploader, _Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(AjaxUploader);

  function AjaxUploader() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AjaxUploader);

    _this = _super.apply(this, arguments);
    _this.state = {
      uid: Object(_uid__WEBPACK_IMPORTED_MODULE_11__["default"])()
    };
    _this.reqs = {};

    _this.onChange = function (e) {
      var files = e.target.files;

      _this.uploadFiles(files);

      _this.reset();
    };

    _this.onClick = function (e) {
      var el = _this.fileInput;

      if (!el) {
        return;
      }

      var _this$props = _this.props,
          children = _this$props.children,
          onClick = _this$props.onClick;

      if (children && children.type === 'button') {
        var parent = el.parentNode;
        parent.focus();
        parent.querySelector('button').blur();
      }

      el.click();

      if (onClick) {
        onClick(e);
      }
    };

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick(e);
      }
    };

    _this.onFileDrop = function (e) {
      var multiple = _this.props.multiple;
      e.preventDefault();

      if (e.type === 'dragover') {
        return;
      }

      if (_this.props.directory) {
        Object(_traverseFileTree__WEBPACK_IMPORTED_MODULE_13__["default"])(Array.prototype.slice.call(e.dataTransfer.items), _this.uploadFiles, function (_file) {
          return Object(_attr_accept__WEBPACK_IMPORTED_MODULE_12__["default"])(_file, _this.props.accept);
        });
      } else {
        var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) {
          return Object(_attr_accept__WEBPACK_IMPORTED_MODULE_12__["default"])(file, _this.props.accept);
        });

        if (multiple === false) {
          files = files.slice(0, 1);
        }

        _this.uploadFiles(files);
      }
    };

    _this.uploadFiles = function (files) {
      var postFiles = Array.prototype.slice.call(files);
      postFiles.map(function (file) {
        // eslint-disable-next-line no-param-reassign
        file.uid = Object(_uid__WEBPACK_IMPORTED_MODULE_11__["default"])();
        return file;
      }).forEach(function (file) {
        _this.upload(file, postFiles);
      });
    };

    _this.saveFileInput = function (node) {
      _this.fileInput = node;
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AjaxUploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: "upload",
    value: function upload(file, fileList) {
      var _this2 = this;

      var props = this.props;

      if (!props.beforeUpload) {
        // always async in case use react state to keep fileList
        Promise.resolve().then(function () {
          _this2.post(file);
        });
        return;
      }

      var before = props.beforeUpload(file, fileList);

      if (before && typeof before !== 'boolean' && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);

          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            _this2.post(processedFile);

            return;
          }

          _this2.post(file);
        }).catch(function (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        });
      } else if (before !== false) {
        Promise.resolve().then(function () {
          _this2.post(file);
        });
      }
    }
  }, {
    key: "post",
    value: function post(file) {
      var _this3 = this;

      if (!this._isMounted) {
        return;
      }

      var props = this.props;
      var onStart = props.onStart,
          onProgress = props.onProgress,
          _props$transformFile = props.transformFile,
          transformFile = _props$transformFile === void 0 ? function (originFile) {
        return originFile;
      } : _props$transformFile;
      new Promise(function (resolve) {
        var action = props.action;

        if (typeof action === 'function') {
          action = action(file);
        }

        return resolve(action);
      }).then(function (action) {
        var uid = file.uid;
        var request = props.customRequest || _request__WEBPACK_IMPORTED_MODULE_10__["default"];
        var transform = Promise.resolve(transformFile(file)).then(function (transformedFile) {
          var data = props.data;

          if (typeof data === 'function') {
            data = data(transformedFile);
          }

          return Promise.all([transformedFile, data]);
        }).catch(function (e) {
          console.error(e); // eslint-disable-line no-console
        });
        transform.then(function (_ref) {
          var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
              transformedFile = _ref2[0],
              data = _ref2[1];

          var requestOption = {
            action: action,
            filename: props.name,
            data: data,
            file: transformedFile,
            headers: props.headers,
            withCredentials: props.withCredentials,
            method: props.method || 'post',
            onProgress: onProgress ? function (e) {
              onProgress(e, file);
            } : null,
            onSuccess: function onSuccess(ret, xhr) {
              delete _this3.reqs[uid];
              props.onSuccess(ret, file, xhr);
            },
            onError: function onError(err, ret) {
              delete _this3.reqs[uid];
              props.onError(err, ret, file);
            }
          };
          onStart(file);
          _this3.reqs[uid] = request(requestOption);
        });
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        uid: Object(_uid__WEBPACK_IMPORTED_MODULE_11__["default"])()
      });
    }
  }, {
    key: "abort",
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file.uid ? file.uid : file;

        if (reqs[uid] && reqs[uid].abort) {
          reqs[uid].abort();
        }

        delete reqs[uid];
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid] && reqs[uid].abort) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          Tag = _this$props2.component,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          id = _this$props2.id,
          style = _this$props2.style,
          multiple = _this$props2.multiple,
          accept = _this$props2.accept,
          children = _this$props2.children,
          directory = _this$props2.directory,
          openFileDialogOnClick = _this$props2.openFileDialogOnClick,
          onMouseEnter = _this$props2.onMouseEnter,
          onMouseLeave = _this$props2.onMouseLeave,
          otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["component", "prefixCls", "className", "disabled", "id", "style", "multiple", "accept", "children", "directory", "openFileDialogOnClick", "onMouseEnter", "onMouseLeave"]);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, prefixCls, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className), _classNames)); // because input don't have directory/webkitdirectory type declaration

      var dirProps = directory ? {
        directory: 'directory',
        webkitdirectory: 'webkitdirectory'
      } : {};
      var events = disabled ? {} : {
        onClick: openFileDialogOnClick ? this.onClick : function () {},
        onKeyDown: openFileDialogOnClick ? this.onKeyDown : function () {},
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Tag, Object.assign({}, events, {
        className: cls,
        role: "button",
        style: style
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", Object.assign({}, Object(rc_util_es_pickAttrs__WEBPACK_IMPORTED_MODULE_9__["default"])(otherProps, {
        aria: true,
        data: true
      }), {
        id: id,
        type: "file",
        ref: this.saveFileInput,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        key: this.state.uid,
        style: {
          display: 'none'
        },
        accept: accept
      }, dirProps, {
        multiple: multiple,
        onChange: this.onChange
      })), children);
    }
  }]);

  return AjaxUploader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AjaxUploader);

/***/ }),

/***/ "./node_modules/rc-upload/es/Upload.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-upload/es/Upload.js ***!
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
/* harmony import */ var _AjaxUploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AjaxUploader */ "./node_modules/rc-upload/es/AjaxUploader.js");





/* eslint react/prop-types:0 */



function empty() {}

var Upload = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Upload, _Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Upload);

  function Upload() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Upload);

    _this = _super.apply(this, arguments);

    _this.saveUploader = function (node) {
      _this.uploader = node;
    };

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Upload, [{
    key: "abort",
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AjaxUploader__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.props, {
        ref: this.saveUploader
      }));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false,
  openFileDialogOnClick: true
};
/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "./node_modules/rc-upload/es/attr-accept.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-upload/es/attr-accept.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

/* harmony default export */ __webpack_exports__["default"] = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');
    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();

      if (validType.charAt(0) === '.') {
        return endsWith(fileName.toLowerCase(), validType.toLowerCase());
      }

      if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }

      return mimeType === validType;
    });
  }

  return true;
});

/***/ }),

/***/ "./node_modules/rc-upload/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-upload/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ "./node_modules/rc-upload/es/Upload.js");

/* harmony default export */ __webpack_exports__["default"] = (_Upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-upload/es/request.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-upload/es/request.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return upload; });
function getError(option, xhr) {
  var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = option.method;
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;

  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  // eslint-disable-next-line no-undef
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }

      option.onProgress(e);
    };
  } // eslint-disable-next-line no-undef


  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      var value = option.data[key]; // support key-value array data

      if (Array.isArray(value)) {
        value.forEach(function (item) {
          // { list: [ 11, 22 ] }
          // formData.append('list[]', 11);
          formData.append("".concat(key, "[]"), item);
        });
        return;
      }

      formData.append(key, option.data[key]);
    });
  } // eslint-disable-next-line no-undef


  if (option.file instanceof Blob) {
    formData.append(option.filename, option.file, option.file.name);
  } else {
    formData.append(option.filename, option.file);
  }

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    return option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open(option.method, option.action, true); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {}; // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  Object.keys(headers).forEach(function (h) {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  });
  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

/***/ }),

/***/ "./node_modules/rc-upload/es/traverseFileTree.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-upload/es/traverseFileTree.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function loopFiles(item, callback) {
  var dirReader = item.createReader();
  var fileList = [];

  function sequence() {
    dirReader.readEntries(function (entries) {
      var entryList = Array.prototype.slice.apply(entries);
      fileList = fileList.concat(entryList); // Check if all the file has been viewed

      var isFinished = !entryList.length;

      if (isFinished) {
        callback(fileList);
      } else {
        sequence();
      }
    });
  }

  sequence();
}

var traverseFileTree = function traverseFileTree(files, callback, isAccepted) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var _traverseFileTree = function _traverseFileTree(item, path) {
    // eslint-disable-next-line no-param-reassign
    item.path = path || '';

    if (item.isFile) {
      item.file(function (file) {
        if (isAccepted(file)) {
          // https://github.com/ant-design/ant-design/issues/16426
          if (item.fullPath && !file.webkitRelativePath) {
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: true
              }
            }); // eslint-disable-next-line no-param-reassign

            file.webkitRelativePath = item.fullPath.replace(/^\//, '');
            Object.defineProperties(file, {
              webkitRelativePath: {
                writable: false
              }
            });
          }

          callback([file]);
        }
      });
    } else if (item.isDirectory) {
      loopFiles(item, function (entries) {
        entries.forEach(function (entryItem) {
          _traverseFileTree(entryItem, "".concat(path).concat(item.name, "/"));
        });
      });
    }
  };

  files.forEach(function (file) {
    _traverseFileTree(file.webkitGetAsEntry());
  });
};

/* harmony default export */ __webpack_exports__["default"] = (traverseFileTree);

/***/ }),

/***/ "./node_modules/rc-upload/es/uid.js":
/*!******************************************!*\
  !*** ./node_modules/rc-upload/es/uid.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uid; });
var now = +new Date();
var index = 0;
function uid() {
  // eslint-disable-next-line no-plusplus
  return "rc-upload-".concat(now, "-").concat(++index);
}

/***/ }),

/***/ "./node_modules/rc-util/lib/hooks/useMergedState.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/hooks/useMergedState.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControlledState;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = React.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = React.useRef(true);
  React.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),

/***/ "./node_modules/rc-util/lib/raf.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-util/lib/raf.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapperRaf;

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

function wrapperRaf(callback) {
  return raf(callback);
}

wrapperRaf.cancel = caf;

/***/ }),

/***/ "./settings/service.js":
/*!*****************************!*\
  !*** ./settings/service.js ***!
  \*****************************/
/*! exports provided: getPropType, getPropSubType, getCountries, getCities, getLocations, getCurrency, getArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropType", function() { return getPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropSubType", function() { return getPropSubType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountries", function() { return getCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCities", function() { return getCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocations", function() { return getLocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrency", function() { return getCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArea", function() { return getArea; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./settings/config.js");



var _require = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"),
    get = _require.get;



var getPropType = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/categorys"), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPropType() {
    return _ref.apply(this, arguments);
  };
}();
var getPropSubType = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/proptypes"), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPropSubType() {
    return _ref2.apply(this, arguments);
  };
}();
var getCountries = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/countrys", {
              headers: {
                Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCountries() {
    return _ref3.apply(this, arguments);
  };
}();
var getCities = /*#__PURE__*/function () {
  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/citys"), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getCities() {
    return _ref4.apply(this, arguments);
  };
}();
var getLocations = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(cityid) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/locations/").concat(cityid), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getLocations(_x) {
    return _ref5.apply(this, arguments);
  };
}();
var getCurrency = /*#__PURE__*/function () {
  var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/currencys"), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getCurrency() {
    return _ref6.apply(this, arguments);
  };
}();
var getArea = /*#__PURE__*/function () {
  var _ref7 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["baseURL"], "/areaunits"), {
              headers: {
                Authorization: _config__WEBPACK_IMPORTED_MODULE_3__["basicAuth"],
                Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6"
              }
            });

          case 2:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getArea() {
    return _ref7.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3MtYW5pbWF0aW9uL2VzL0V2ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzLWFuaW1hdGlvbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0RlbGV0ZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRG93bmxvYWRPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0ZpbGVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vUGFwZXJDbGlwT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9QaWN0dXJlVHdvVG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0RlbGV0ZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvRG93bmxvYWRPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL0ZpbGVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvUGFwZXJDbGlwT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9QaWN0dXJlVHdvVG9uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9EZWxldGVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9Eb3dubG9hZE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0ZpbGVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1BhcGVyQ2xpcE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1BpY3R1cmVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcHJvZ3Jlc3MvQ2lyY2xlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcHJvZ3Jlc3MvTGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Byb2dyZXNzL1N0ZXBzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wcm9ncmVzcy9wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Byb2dyZXNzL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcmFkaW8vY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhZGlvL2dyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcmFkaW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9yYWRpby9yYWRpby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhZGlvL3JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdXBsb2FkL0RyYWdnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi91cGxvYWQvVXBsb2FkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdXBsb2FkL1VwbG9hZExpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi91cGxvYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi91cGxvYWQvdXNlRnJlc2hTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3VwbG9hZC91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGVDaGlsZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvQ2hpbGRyZW5VdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvZXMvdXRpbC9hbmltYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy91bnNhZmVMaWZlY3ljbGVzUG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9MaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvY29tbW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvQWpheFVwbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9hdHRyLWFjY2VwdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9yZXF1ZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL3RyYXZlcnNlRmlsZVRyZWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvdWlkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvaG9va3MvdXNlTWVyZ2VkU3RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9yYWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NldHRpbmdzL3NlcnZpY2UuanMiXSwibmFtZXMiOlsiQWRkTGlzdGluZyIsIkFkZFByb3BlcnR5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0bG9hZGluZyIsImltYWdlVXJsIiwic2V0aW1hZ2VVcmwiLCJwdXJwb3NlIiwic2V0cHVycG9zZSIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwiY2l0eSIsInNldENpdHkiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImRldGFpbHMiLCJzZXREZXRhaWxzIiwicHJpY2UiLCJzZXRQcmljZSIsInByaWNlY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsImxvY2FsQXJlYSIsInNldExvY2FsQXJlYSIsImFyZWFVbml0Iiwic2V0YXJlYVVuaXQiLCJiZWRyb29tcyIsInNldEJlZHJvb21zIiwiYmF0aHJvb21zIiwic2V0QmF0aHJvb21zIiwiZXhwaXJlQWZ0ZXIiLCJzZXRFeHBpcmVBZnRlciIsInBob25lIiwic2V0UGhvbmUiLCJlbWFpbCIsInNldEVtYWlsIiwiZmlsZXMiLCJzZXRGaWxlcyIsInByb3BkZXZlbG9wZXIiLCJzZXRQcm9wZGV2ZWxvcGVyIiwiY29uc3RydWN0aW9uU3RhdHVzIiwic2V0Q29uc3RydWN0aW9uU3RhdHVzIiwicHJvcHR5cGVkYXRhIiwic2V0cHJvcHR5cGVkYXRhIiwiY2l0aWVzbGlzdCIsInNldGNpdGVzbGlzdCIsImNvdW50aWVzbGlzdCIsInNldGNvdW50cmllc2xpc3QiLCJsb2NhdGlvbnNsaXN0Iiwic2V0bG9jYXRpb25zbGlzdCIsImN1cnJlbmN5bGlzdCIsInNldGN1cnJlbmN5bGlzdCIsInByb3B0eXBldmFsdWUiLCJzZXRwcm9wdHlwZXZhbHVlIiwicHJvcHN1YnR5cGVkYXRhIiwic2V0cHJvcHN1YnR5cGVkYXRhIiwicHJvcHN1YnR5cGVkYXRhYWxsIiwic2V0cHJvcHN1YnR5cGVkYXRhYWxsIiwiYXJlYWxpc3QiLCJzZXRhcmVhbGlzdCIsInByb3BUeXBlIiwicHJvcHN1YlR5cGUiLCJjaXRpZXMiLCJjb3VudGllcyIsImxvY2F0aW9ucyIsImN1cnJlbmN5IiwiYXJlYSIsIkRyYWdnZXIiLCJwcm9wcyIsIm5hbWUiLCJtdWx0aXBsZSIsImFjdGlvbiIsIm9uQ2hhbmdlIiwiaW5mbyIsInN0YXR1cyIsImZpbGUiLCJjb25zb2xlIiwibG9nIiwiZmlsZUxpc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJmdW5jdHByb3B0eXBlIiwiZnVuY3RjaXRpZXMiLCJmdW5jdGNvdW50cmllcyIsImZ1bmN0Y3VycmVuY3kiLCJmdW5jcHJvcHNidHlwZSIsImZ1bmN0YXJlYSIsImdldFByb3BUeXBlIiwiZGF0YSIsImdldENvdW50cmllcyIsImdldENpdGllcyIsImZ1bmN0bG9jYXRpb24iLCJjaXR5SWQiLCJnZXRMb2NhdGlvbnMiLCJnZXRDdXJyZW5jeSIsImdldFByb3BTdWJUeXBlIiwiZ2V0QXJlYSIsImhhbmRsZVNldFByb3BlcnR5IiwiZSIsIm1haW5fcHJvcGVydHlfY2F0IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZF9zdWJfY2F0IiwiZmlsdGVyIiwiYSIsInB0eXBlQ2F0IiwiaGFuZGxlaW1hZ2UiLCJldmVudCIsIkFycmF5IiwiZnJvbSIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZW50cmllcyIsImtleSIsImF4aW9zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJDb29raWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsIlRleHRBcmVhIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJzcGFuIiwibWFyZ2luVG9wIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNvZGUiLCJtYXJnaW5MZWZ0IiwiaW5kZXgiLCJwdHlwZU5hbWUiLCJjb3VudHJ5Q29kZSIsImNvdW50cnlOYW1lIiwiY2l0eU5hbWUiLCJwbE5hbWUiLCJjdXJyZW5jeUNvZGUiLCJhcmVhVW5pdENvZGUiLCJhcmVhVW5pdE5hbWUiLCJyZXF1aXJlIiwiZ2V0IiwiYmFzZVVSTCIsImJhc2ljQXV0aCIsImNpdHlpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMs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QjtBQVVBLElBQU1DLFdBQVc7QUFBQSwrTEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNGc0IsNENBQUssQ0FBQzZCLEdBQU4sV0FBYUMsK0NBQWIsaUJBQWtDO0FBQ3ZEM0IscUJBQU8sRUFBRTtBQUNQQyw2QkFBYSxFQUFFMkIsaURBRFI7QUFFUDFCLHNCQUFNLEVBQUU7QUFGRDtBQUQ4QyxhQUFsQyxDQURFOztBQUFBO0FBQ25CRSxvQkFEbUI7QUFBQSw4Q0FPbEJBLFFBUGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVg3QixXQUFXO0FBQUE7QUFBQTtBQUFBLEdBQWpCO0FBVUEsSUFBTUUsT0FBTztBQUFBLCtMQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0VvQiw0Q0FBSyxDQUFDNkIsR0FBTixXQUFhQywrQ0FBYixpQkFBa0M7QUFDdkQzQixxQkFBTyxFQUFFO0FBQ1BDLDZCQUFhLEVBQUUyQixpREFEUjtBQUVQMUIsc0JBQU0sRUFBRTtBQUZEO0FBRDhDLGFBQWxDLENBREY7O0FBQUE7QUFDZkUsb0JBRGU7QUFBQSw4Q0FPZEEsUUFQYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFQM0IsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkZC1ob3RlbC45MWVlMTgzNjJkNTE4OWMxNDQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkUHJvcGVydHkgZnJvbSBcIi4vQWRkUHJvcGVydHlcIjtcclxuaW1wb3J0IEFkZEZlYXR1cmUgZnJvbSBcIi4vQWRkRmVhdHVyZVwiO1xyXG5cclxuZnVuY3Rpb24gQWRkTGlzdGluZygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEFkZFByb3BlcnR5PjwvQWRkUHJvcGVydHk+XHJcbiAgICAgIDxBZGRGZWF0dXJlPjwvQWRkRmVhdHVyZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZExpc3Rpbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgUmFkaW8sXHJcbiAgU2VsZWN0LFxyXG4gIENhc2NhZGVyLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgVHJlZVNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgQWxlcnQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBVcGxvYWQsXHJcbiAgSWNvbixcclxuICBtZXNzYWdlLFxyXG4gIENhcmQsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgcGFkZGluZyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9wVHlwZSxcclxuICBnZXRQcm9wU3ViVHlwZSxcclxuICBnZXRDb3VudHJpZXMsXHJcbiAgZ2V0Q2l0aWVzLFxyXG4gIGdldExvY2F0aW9ucyxcclxuICBnZXRDdXJyZW5jeSxcclxuICBnZXRBcmVhLFxyXG59IGZyb20gXCIuLi8uLi9zZXR0aW5ncy9zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBBZGRQcm9wZXJ0eSA9ICgpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0bG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlVXJsLCBzZXRpbWFnZVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVycG9zZSwgc2V0cHVycG9zZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2VjdXJyZW5jeSwgc2V0Q3VycmVuY3ldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvY2FsQXJlYSwgc2V0TG9jYWxBcmVhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthcmVhVW5pdCwgc2V0YXJlYVVuaXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JlZHJvb21zLCBzZXRCZWRyb29tc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmF0aHJvb21zLCBzZXRCYXRocm9vbXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2V4cGlyZUFmdGVyLCBzZXRFeHBpcmVBZnRlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb3BkZXZlbG9wZXIsIHNldFByb3BkZXZlbG9wZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbnN0cnVjdGlvblN0YXR1cywgc2V0Q29uc3RydWN0aW9uU3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvLyBBUEkgUkVTVUxUU1xyXG4gIGNvbnN0IFtwcm9wdHlwZWRhdGEsIHNldHByb3B0eXBlZGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NpdGllc2xpc3QsIHNldGNpdGVzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdW50aWVzbGlzdCwgc2V0Y291bnRyaWVzbGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvY2F0aW9uc2xpc3QsIHNldGxvY2F0aW9uc2xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXJyZW5jeWxpc3QsIHNldGN1cnJlbmN5bGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb3B0eXBldmFsdWUsIHNldHByb3B0eXBldmFsdWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9wc3VidHlwZWRhdGEsIHNldHByb3BzdWJ0eXBlZGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb3BzdWJ0eXBlZGF0YWFsbCwgc2V0cHJvcHN1YnR5cGVkYXRhYWxsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbYXJlYWxpc3QsIHNldGFyZWFsaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgbGV0IHByb3BUeXBlID0gXCJcIjtcclxuICBsZXQgcHJvcHN1YlR5cGUgPSBcIlwiO1xyXG4gIGxldCBjaXRpZXMgPSBcIlwiO1xyXG4gIGxldCBjb3VudGllcyA9IFwiXCI7XHJcbiAgbGV0IGxvY2F0aW9ucyA9IFwiXCI7XHJcbiAgbGV0IGN1cnJlbmN5ID0gXCJcIjtcclxuICBsZXQgYXJlYSA9IFwiXCI7XHJcbiAgY29uc3QgeyBEcmFnZ2VyIH0gPSBVcGxvYWQ7XHJcblxyXG4gIGNvbnN0IHByb3BzID0ge1xyXG4gICAgbmFtZTogXCJmaWxlXCIsXHJcbiAgICBtdWx0aXBsZTogdHJ1ZSxcclxuICAgIGFjdGlvbjogXCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIixcclxuICAgIG9uQ2hhbmdlKGluZm8pIHtcclxuICAgICAgY29uc3QgeyBzdGF0dXMgfSA9IGluZm8uZmlsZTtcclxuICAgICAgaWYgKHN0YXR1cyAhPT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gXCJlcnJvclwiKSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0cHJvcHR5cGUoKTtcclxuICAgIGZ1bmN0Y2l0aWVzKCk7XHJcbiAgICBmdW5jdGNvdW50cmllcygpO1xyXG4gICAgZnVuY3RjdXJyZW5jeSgpO1xyXG4gICAgZnVuY3Byb3BzYnR5cGUoKTtcclxuICAgIGZ1bmN0YXJlYSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZnVuY3Rwcm9wdHlwZSgpIHtcclxuICAgIHByb3BUeXBlID0gYXdhaXQgZ2V0UHJvcFR5cGUoKTtcclxuICAgIHNldHByb3B0eXBlZGF0YShwcm9wVHlwZS5kYXRhKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZnVuY3Rjb3VudHJpZXMoKSB7XHJcbiAgICBhd2FpdCBnZXRDb3VudHJpZXMoKTtcclxuICAgIHNldGNvdW50cmllc2xpc3QoY291bnRpZXMuZGF0YSk7XHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZ1bmN0Y2l0aWVzKCkge1xyXG4gICAgY2l0aWVzID0gYXdhaXQgZ2V0Q2l0aWVzKCk7XHJcbiAgICBzZXRjaXRlc2xpc3QoY2l0aWVzLmRhdGEpO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBmdW5jdGxvY2F0aW9uKGNpdHlJZCkge1xyXG4gICAgbG9jYXRpb25zID0gYXdhaXQgZ2V0TG9jYXRpb25zKGNpdHlJZCk7XHJcbiAgICBzZXRsb2NhdGlvbnNsaXN0KGxvY2F0aW9ucy5kYXRhKTtcclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gZnVuY3RjdXJyZW5jeSgpIHtcclxuICAgIGN1cnJlbmN5ID0gYXdhaXQgZ2V0Q3VycmVuY3koKTtcclxuICAgIHNldGN1cnJlbmN5bGlzdChjdXJyZW5jeS5kYXRhKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGZ1bmNwcm9wc2J0eXBlKCkge1xyXG4gICAgcHJvcHN1YlR5cGUgPSBhd2FpdCBnZXRQcm9wU3ViVHlwZSgpO1xyXG4gICAgc2V0cHJvcHN1YnR5cGVkYXRhYWxsKHByb3BzdWJUeXBlLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZnVuY3RhcmVhKCkge1xyXG4gICAgYXJlYSA9IGF3YWl0IGdldEFyZWEoKTtcclxuICAgIHNldGFyZWFsaXN0KGFyZWEuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZXRQcm9wZXJ0eSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBtYWluX3Byb3BlcnR5X2NhdCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0cHJvcHR5cGV2YWx1ZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBsZXQgZmlsdGVyZWRfc3ViX2NhdCA9IHByb3BzdWJ0eXBlZGF0YWFsbC5maWx0ZXIoKGEpID0+IHtcclxuICAgICAgcmV0dXJuIGEucHR5cGVDYXQgPT0gbWFpbl9wcm9wZXJ0eV9jYXQ7XHJcbiAgICB9KTtcclxuICAgIHNldHByb3BzdWJ0eXBlZGF0YShmaWx0ZXJlZF9zdWJfY2F0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVpbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJpbWFnZXNcIiwgZXZlbnQudGFyZ2V0LmZpbGVzKTtcclxuICAgIHNldEZpbGVzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsgLy9mb3JtZGF0YSBvYmplY3RcclxuICAgIGNvbnN0IGRhdGEgPSBgeyAgXCJwb3N0UHVycG9zZVwiOiBcIiR7cHVycG9zZX1cIiwgXHJcbiAgICBcInByb3BUeXBlXCI6ICR7cHJvcHR5cGV2YWx1ZX0sXHJcbiAgICBcInBvc3RUaXRsZVwiOiBcIiR7dGl0bGV9XCIsXHJcbiAgICBcInBvc3REZXNjcmlwdGlvblwiOiBcIiR7ZGV0YWlsc31cIixcclxuICAgIFwicG9zdExvY2F0aW9uXCI6IFwiJHtsb2NhdGlvbn1cIixcclxuICAgIFwicG9zdENpdHlcIjogJHtjaXR5fSxcclxuICAgIFwicG9zdENvdW50cnlcIjogXCIke2NvdW50cnl9XCIsIFxyXG4gICAgXCJwb3N0VGVsXCI6ICR7cGhvbmV9LCBcclxuICAgIFwicG9zdFByaWNlXCI6ICR7cHJpY2V9LCBcclxuICAgIFwicG9zdFByaWNlQ3VycmVuY3lcIjogXCIke3ByaWNlY3VycmVuY3l9XCIsIFxyXG4gICAgXCJwb3N0UHJvcEFyZWFcIjogJHtsb2NhbEFyZWF9LFxyXG4gICAgXCJwb3N0UHJvcEFyZWFVbml0XCI6XCIke2FyZWFVbml0fVwiLFxyXG4gICAgXCJwb3N0Q29uc3RydWN0aW9uU3RhdHVzXCI6IFwiJHtjb25zdHJ1Y3Rpb25TdGF0dXN9XCIsXHJcbiAgICBcInBvc3RQcm9wRGV2ZWxvcGVyXCI6IFwiJHtwcm9wZGV2ZWxvcGVyfVwifWA7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJuZXdQb3N0XCIsIGRhdGEpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZXNcIiwgZmlsZXMpO1xyXG4gICAgZm9yICh2YXIga2V5IG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInlhaSBkYXRhXCIsIGtleVswXSArIFwiLCBcIiArIGtleVsxXSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICB1cmw6IGBodHRwOi8vZWMyLTEzLTIyOS0xMDktMjA0LmFwLXNvdXRoZWFzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo4MDgwL2FwbmEvdjEvcG9zdHNgLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IFwiQmFzaWMgWVhCdVlUcGhjRzVoWjJoaGNqRXlNelE9XCIsXHJcbiAgICAgICAgQ29va2llOiBcIkpTRVNTSU9OSUQ9RTJBOEJGMjU3MUJBNkI4NzU4MDNCRDU0NUQ0M0JCRDZcIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIC8vaGFuZGxlIHN1Y2Nlc3NcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAvL2hhbmRsZSBlcnJvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjEwcmVtXCIsIHBhZGRpbmdSaWdodDogXCIxMHJlbVwiIH19PlxyXG4gICAgICA8QWxlcnQgbWVzc2FnZT1cIlBST1BFUlRZIFRZUEUgQU5EIExPQ0FUSU9OXCIgdHlwZT1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxhYmVsQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiA0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgc3BhbjogMTQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUHVycG9zZVwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzZXRwdXJwb3NlKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9XCJCXCI+XHJcbiAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBzZXRwdXJwb3NlKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9XCJSXCI+XHJcbiAgICAgICAgICAgICAgUmVudFxyXG4gICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gc2V0cHVycG9zZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPVwiUFwiPlxyXG4gICAgICAgICAgICAgIFByb2plY3RcclxuICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUHJvcGVydHkgVHlwZVwiIG5hbWU9XCJzaXplXCI+XHJcbiAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIHtwcm9wdHlwZWRhdGEgJiYgcHJvcHR5cGVkYXRhLmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICAgICAgID8gcHJvcHR5cGVkYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbS5jb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2V0UHJvcGVydHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIDogXCJObyBSZWNvcmRzIEZvdW5kXCJ9XHJcbiAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8UmFkaW8uR3JvdXAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAge3Byb3BzdWJ0eXBlZGF0YSAmJiBwcm9wc3VidHlwZWRhdGEubGVuZ3RoICE9PSAwXHJcbiAgICAgICAgICAgICAgPyBwcm9wc3VidHlwZWRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbS5pbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXtpdGVtLnB0eXBlTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnB0eXBlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBcIk5vIFJlY29yZHMgRm91bmRcIn1cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlNlbGVjdCBjb3VudHJ5XCI+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRDb3VudHJ5KGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y291bnRpZXNsaXN0ICYmIGNvdW50aWVzbGlzdC5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgICA/IGNvdW50aWVzbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmNvdW50cnlDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmNvdW50cnlDb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50cnlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBcIk5vIFJlY29yZHMgRm91bmRcIn1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgY2l0eVwiPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17Y2l0eX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0Q2l0eShlKTtcclxuICAgICAgICAgICAgICBmdW5jdGxvY2F0aW9uKGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2l0aWVzbGlzdCAmJiBjaXRpZXNsaXN0Lmxlbmd0aCAhPT0gMFxyXG4gICAgICAgICAgICAgID8gY2l0aWVzbGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9e2l0ZW0uY2l0eUlkfSBrZXk9e2l0ZW0uY2l0eUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmNpdHlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBcIk5vIFJlY29yZHMgRm91bmRcIn1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgTG9jYXRpb25cIj5cclxuICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2xvY2F0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldExvY2F0aW9uKGUpfT5cclxuICAgICAgICAgICAge2xvY2F0aW9uc2xpc3QgJiYgbG9jYXRpb25zbGlzdC5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgICA/IGxvY2F0aW9uc2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPXtpdGVtLnBsTmFtZX0ga2V5PXtpdGVtLnBsTmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICA6IFwiTm8gUmVjb3JkcyBGb3VuZFwifVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJQUk9QRVJUWSBERVRBSUxTXCIgdHlwZT1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxhYmVsQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiA0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgc3BhbjogMTQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiUHJvcGVydHkgVGl0bGVcIj5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBEZXRhaWxzXCI+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2RldGFpbHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGV0YWlscyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBEZXZlbG9wZXJcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcGRldmVsb3Blcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9wZGV2ZWxvcGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkNvbnN0cnVjdGlvbiBTdGF0dXNcIj5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2NvbnN0cnVjdGlvblN0YXR1c31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb25zdHJ1Y3Rpb25TdGF0dXMoZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiQ1wiPkNvbXBsZXRlZDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJVXCI+VU5ERVJDT05TVFJVQ1RJT048L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQWxsIGluY2x1c2l2ZSBQcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cHJpY2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU2VsZWN0IEN1cnJlbmN5XCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdCB2YWx1ZT17cHJpY2VjdXJyZW5jeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW5jeShlKX0+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVuY3lsaXN0ICYmIGN1cnJlbmN5bGlzdC5sZW5ndGggIT09IDBcclxuICAgICAgICAgICAgICAgICAgPyBjdXJyZW5jeWxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5jdXJyZW5jeUNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmN1cnJlbmN5Q29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmN1cnJlbmN5Q29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiTm8gUmVjb3JkcyBGb3VuZFwifVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTGFuZCBBcmVhXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYWxBcmVhfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMb2NhbEFyZWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJBcmVhIFVuaXRcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXthcmVhVW5pdH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRhcmVhVW5pdChlKX0+XHJcbiAgICAgICAgICAgICAgICB7YXJlYWxpc3QgJiYgYXJlYWxpc3QubGVuZ3RoICE9PSAwXHJcbiAgICAgICAgICAgICAgICAgID8gYXJlYWxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5hcmVhVW5pdENvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmFyZWFVbml0Q29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmFyZWFVbml0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICA6IFwiTm8gUmVjb3JkcyBGb3VuZFwifVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIHsvKiA8Rm9ybS5JdGVtIGxhYmVsPSdCZWRyb29tcyc+XHJcbiAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtiZWRyb29tc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCZWRyb29tcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPSdkZW1vJyBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICBJc2xhbWFiYWRcclxuICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT0nMSc+MTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9JzInPjI8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPSdCYXRocm9vbXMnPlxyXG4gICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17YmF0aHJvb21zfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhdGhyb29tcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPSdkZW1vJyBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICBJc2xhbWFiYWRcclxuICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT0nMSc+MTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9JzInPjI8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPSdFeHBpcmVzIEFmdGVyJz5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2V4cGlyZUFmdGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEV4cGlyZUFmdGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9JzYgTW9udGhzJyBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICA2IE1vbnRoc1xyXG4gICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPScxIFllYXInPjEgWWVhcjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIkFkZCBJbWFnZXNcIiB0eXBlPVwic3VjY2Vzc1wiPjwvQWxlcnQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbXVsdGlwbGUgb25DaGFuZ2U9e2hhbmRsZWltYWdlfSAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxBbGVydCBtZXNzYWdlPVwiQ09OVEFDVCBERVRBSUxTXCIgdHlwZT1cInN1Y2Nlc3NcIiAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxhYmVsQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiA0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgd3JhcHBlckNvbD17e1xyXG4gICAgICAgICAgc3BhbjogMTQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgID48L0Zvcm0+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQaG9uZSBcIj5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cGhvbmV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGhvbmUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFbWFpbFwiPlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgU3VibWl0IFByb3BlcnR5XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9wZXJ0eTtcclxuIiwidmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkV2ZW50czsiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gRXZlbnQuZW5kRXZlbnRzLmxlbmd0aCAhPT0gMDtcbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvLyBvbGQgZmYgbmVlZCBudWxsLCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2dldENvbXB1dGVkU3R5bGVcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGVuZCBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChlbmQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZSgpO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgbm9kZS5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gIH0sIDApO1xufTtcblxuY3NzQW5pbWF0aW9uLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcCwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5ID0gcDtcbiAgdmFyIHYgPSB2YWx1ZTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2ID0gcHJvcGVydHk7XG4gICAgcHJvcGVydHkgPSAnJztcbiAgfVxuICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICcnO1xuICBjYXBpdGFsUHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgbm9kZS5zdHlsZVtwcmVmaXggKyAnVHJhbnNpdGlvbicgKyBwcm9wZXJ0eV0gPSB2O1xuICB9KTtcbn07XG5cbmNzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG5leHBvcnQgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjc3NBbmltYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEZWxldGVPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMzYwIDE4NGgtOGM0LjQgMCA4LTMuNiA4LTh2OGgzMDR2LThjMCA0LjQgMy42IDggOCA4aC04djcyaDcydi04MGMwLTM1LjMtMjguNy02NC02NC02NEgzNTJjLTM1LjMgMC02NCAyOC43LTY0IDY0djgwaDcydi03MnptNTA0IDcySDE2MGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJjMCA0LjQgMy42IDggOCA4aDYwLjRsMjQuNyA1MjNjMS42IDM0LjEgMjkuOCA2MSA2My45IDYxaDQ1NGMzNC4yIDAgNjIuMy0yNi44IDYzLjktNjFsMjQuNy01MjNIODg4YzQuNCAwIDgtMy42IDgtOHYtMzJjMC0xNy43LTE0LjMtMzItMzItMzJ6TTczMS4zIDg0MEgyOTIuN2wtMjQuMi01MTJoNDg3bC0yNC4yIDUxMnpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImRlbGV0ZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGVsZXRlT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERvd25sb2FkT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUwNS43IDY2MWE4IDggMCAwMDEyLjYgMGwxMTItMTQxLjdjNC4xLTUuMi40LTEyLjktNi4zLTEyLjloLTc0LjFWMTY4YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYzMzguM0g0MDBjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDExMiAxNDEuOHpNODc4IDYyNmgtNjBjLTQuNCAwLTggMy42LTggOHYxNTRIMjE0VjYzNGMwLTQuNC0zLjYtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDh2MTk4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY4NGMxNy43IDAgMzItMTQuMyAzMi0zMlY2MzRjMC00LjQtMy42LTgtOC04elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiZG93bmxvYWRcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IERvd25sb2FkT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZpbGVUd29Ub25lID0geyBcImljb25cIjogZnVuY3Rpb24gcmVuZGVyKHByaW1hcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3IpIHsgcmV0dXJuIHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNTM0IDM1MlYxMzZIMjMydjc1Mmg1NjBWMzk0SDU3NmE0MiA0MiAwIDAxLTQyLTQyelwiLCBcImZpbGxcIjogc2Vjb25kYXJ5Q29sb3IgfSB9LCB7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTg1NC42IDI4OC42TDYzOS40IDczLjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjctOS40LTIyLjd6TTYwMiAxMzcuOEw3OTAuMiAzMjZINjAyVjEzNy44ek03OTIgODg4SDIzMlYxMzZoMzAydjIxNmE0MiA0MiAwIDAwNDIgNDJoMjE2djQ5NHpcIiwgXCJmaWxsXCI6IHByaW1hcnlDb2xvciB9IH1dIH07IH0sIFwibmFtZVwiOiBcImZpbGVcIiwgXCJ0aGVtZVwiOiBcInR3b3RvbmVcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmlsZVR3b1RvbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBhcGVyQ2xpcE91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk03NzkuMyAxOTYuNmMtOTQuMi05NC4yLTI0Ny42LTk0LjItMzQxLjcgMGwtMjYxIDI2MC44Yy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDI2MS0yNjAuOGMzMi40LTMyLjQgNzUuNS01MC4yIDEyMS4zLTUwLjJzODguOSAxNy44IDEyMS4yIDUwLjJjMzIuNCAzMi40IDUwLjIgNzUuNSA1MC4yIDEyMS4yIDAgNDUuOC0xNy44IDg4LjgtNTAuMiAxMjEuMmwtMjY2IDI2NS45LTQzLjEgNDMuMWMtNDAuMyA0MC4zLTEwNS44IDQwLjMtMTQ2LjEgMC0xOS41LTE5LjUtMzAuMi00NS40LTMwLjItNzNzMTAuNy01My41IDMwLjItNzNsMjYzLjktMjYzLjhjNi43LTYuNiAxNS41LTEwLjMgMjQuOS0xMC4zaC4xYzkuNCAwIDE4LjEgMy43IDI0LjcgMTAuMyA2LjcgNi43IDEwLjMgMTUuNSAxMC4zIDI0LjkgMCA5LjMtMy43IDE4LjEtMTAuMyAyNC43TDM3Mi40IDY1M2MtMS43IDEuNy0yLjYgNC0yLjYgNi40cy45IDQuNyAyLjYgNi40bDM2LjkgMzYuOWE5IDkgMCAwMDEyLjcgMGwyMTUuNi0yMTUuNmMxOS45LTE5LjkgMzAuOC00Ni4zIDMwLjgtNzQuNHMtMTEtNTQuNi0zMC44LTc0LjRjLTQxLjEtNDEuMS0xMDcuOS00MS0xNDkgMEw0NjMgMzY0IDIyNC44IDYwMi4xQTE3Mi4yMiAxNzIuMjIgMCAwMDE3NCA3MjQuOGMwIDQ2LjMgMTguMSA4OS44IDUwLjggMTIyLjUgMzMuOSAzMy44IDc4LjMgNTAuNyAxMjIuNyA1MC43IDQ0LjQgMCA4OC44LTE2LjkgMTIyLjYtNTAuN2wzMDkuMi0zMDlDODI0LjggNDkyLjcgODUwIDQzMiA4NTAgMzY3LjVjLjEtNjQuNi0yNS4xLTEyNS4zLTcwLjctMTcwLjl6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJwYXBlci1jbGlwXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBQYXBlckNsaXBPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGljdHVyZVR3b1RvbmUgPSB7IFwiaWNvblwiOiBmdW5jdGlvbiByZW5kZXIocHJpbWFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcikgeyByZXR1cm4geyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk05MjggMTYwSDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NDBjMCAxNy43IDE0LjMgMzIgMzIgMzJoODMyYzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE5MmMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTQwIDYzMkgxMzZ2LTM5LjlsMTM4LjUtMTY0LjMgMTUwLjEgMTc4TDY1OC4xIDQ4OSA4ODggNzYxLjZWNzkyem0wLTEyOS44TDY2NC4yIDM5Ni44Yy0zLjItMy44LTktMy44LTEyLjIgMEw0MjQuNiA2NjYuNGwtMTQ0LTE3MC43Yy0zLjItMy44LTktMy44LTEyLjIgMEwxMzYgNjUyLjdWMjMyaDc1MnY0MzAuMnpcIiwgXCJmaWxsXCI6IHByaW1hcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNDI0LjYgNzY1LjhsLTE1MC4xLTE3OEwxMzYgNzUyLjFWNzkyaDc1MnYtMzAuNEw2NTguMSA0ODl6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMTM2IDY1Mi43bDEzMi40LTE1N2MzLjItMy44IDktMy44IDEyLjIgMGwxNDQgMTcwLjdMNjUyIDM5Ni44YzMuMi0zLjggOS0zLjggMTIuMiAwTDg4OCA2NjIuMlYyMzJIMTM2djQyMC43ek0zMDQgMjgwYTg4IDg4IDAgMTEwIDE3NiA4OCA4OCAwIDAxMC0xNzZ6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMjc2IDM2OGEyOCAyOCAwIDEwNTYgMCAyOCAyOCAwIDEwLTU2IDB6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMzA0IDQ1NmE4OCA4OCAwIDEwMC0xNzYgODggODggMCAwMDAgMTc2em0wLTExNmMxNS41IDAgMjggMTIuNSAyOCAyOHMtMTIuNSAyOC0yOCAyOC0yOC0xMi41LTI4LTI4IDEyLjUtMjggMjgtMjh6XCIsIFwiZmlsbFwiOiBwcmltYXJ5Q29sb3IgfSB9XSB9OyB9LCBcIm5hbWVcIjogXCJwaWN0dXJlXCIsIFwidGhlbWVcIjogXCJ0d290b25lXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBpY3R1cmVUd29Ub25lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9EZWxldGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvRGVsZXRlT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfRGVsZXRlT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfRG93bmxvYWRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvRG93bmxvYWRPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9Eb3dubG9hZE91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0ZpbGVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9GaWxlVHdvVG9uZScpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9GaWxlVHdvVG9uZTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9QYXBlckNsaXBPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvUGFwZXJDbGlwT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfUGFwZXJDbGlwT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfUGljdHVyZVR3b1RvbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoJy4vbGliL2ljb25zL1BpY3R1cmVUd29Ub25lJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX1BpY3R1cmVUd29Ub25lO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRGVsZXRlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9EZWxldGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBEZWxldGVPdXRsaW5lZCA9IGZ1bmN0aW9uIERlbGV0ZU91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9EZWxldGVPdXRsaW5lZC5kZWZhdWx0XG4gIH0pKTtcbn07XG5cbkRlbGV0ZU91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0RlbGV0ZU91dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRGVsZXRlT3V0bGluZWQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRG93bmxvYWRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Rvd25sb2FkT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRG93bmxvYWRPdXRsaW5lZCA9IGZ1bmN0aW9uIERvd25sb2FkT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0Rvd25sb2FkT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5Eb3dubG9hZE91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0Rvd25sb2FkT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihEb3dubG9hZE91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0ZpbGVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRmlsZVR3b1RvbmVcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRmlsZVR3b1RvbmUgPSBmdW5jdGlvbiBGaWxlVHdvVG9uZShwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfRmlsZVR3b1RvbmUuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5GaWxlVHdvVG9uZS5kaXNwbGF5TmFtZSA9ICdGaWxlVHdvVG9uZSc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEZpbGVUd29Ub25lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1BhcGVyQ2xpcE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vUGFwZXJDbGlwT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgUGFwZXJDbGlwT3V0bGluZWQgPSBmdW5jdGlvbiBQYXBlckNsaXBPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfUGFwZXJDbGlwT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5QYXBlckNsaXBPdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdQYXBlckNsaXBPdXRsaW5lZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFBhcGVyQ2xpcE91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1BpY3R1cmVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vUGljdHVyZVR3b1RvbmVcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgUGljdHVyZVR3b1RvbmUgPSBmdW5jdGlvbiBQaWN0dXJlVHdvVG9uZShwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfUGljdHVyZVR3b1RvbmUuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5QaWN0dXJlVHdvVG9uZS5kaXNwbGF5TmFtZSA9ICdQaWN0dXJlVHdvVG9uZSc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFBpY3R1cmVUd29Ub25lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNQcm9ncmVzcyA9IHJlcXVpcmUoXCJyYy1wcm9ncmVzc1wiKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY29sb3JzXCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKF9yZWYpIHtcbiAgdmFyIHBlcmNlbnQgPSBfcmVmLnBlcmNlbnQsXG4gICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgc3VjY2Vzc1BlcmNlbnQgPSBfcmVmLnN1Y2Nlc3NQZXJjZW50O1xuICB2YXIgcHRnID0gKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShwZXJjZW50KTtcbiAgdmFyIHJlYWxTdWNjZXNzUGVyY2VudCA9ICgwLCBfdXRpbHMuZ2V0U3VjY2Vzc1BlcmNlbnQpKHtcbiAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgIHN1Y2Nlc3NQZXJjZW50OiBzdWNjZXNzUGVyY2VudFxuICB9KTtcblxuICBpZiAoIXJlYWxTdWNjZXNzUGVyY2VudCkge1xuICAgIHJldHVybiBwdGc7XG4gIH1cblxuICByZXR1cm4gWygwLCBfdXRpbHMudmFsaWRQcm9ncmVzcykocmVhbFN1Y2Nlc3NQZXJjZW50KSwgKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShwdGcgLSAoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHJlYWxTdWNjZXNzUGVyY2VudCkpXTtcbn1cblxuZnVuY3Rpb24gZ2V0U3Ryb2tlQ29sb3IoX3JlZjIpIHtcbiAgdmFyIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxuICAgICAgc3Ryb2tlQ29sb3IgPSBfcmVmMi5zdHJva2VDb2xvcixcbiAgICAgIHN1Y2Nlc3NQZXJjZW50ID0gX3JlZjIuc3VjY2Vzc1BlcmNlbnQ7XG4gIHZhciBjb2xvciA9IHN0cm9rZUNvbG9yIHx8IG51bGw7XG4gIHZhciByZWFsU3VjY2Vzc1BlcmNlbnQgPSAoMCwgX3V0aWxzLmdldFN1Y2Nlc3NQZXJjZW50KSh7XG4gICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICBzdWNjZXNzUGVyY2VudDogc3VjY2Vzc1BlcmNlbnRcbiAgfSk7XG5cbiAgaWYgKCFyZWFsU3VjY2Vzc1BlcmNlbnQpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICByZXR1cm4gW19jb2xvcnMucHJlc2V0UHJpbWFyeUNvbG9ycy5ncmVlbiwgY29sb3JdO1xufVxuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gQ2lyY2xlKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICAgIHRyYWlsQ29sb3IgPSBwcm9wcy50cmFpbENvbG9yLFxuICAgICAgc3Ryb2tlTGluZWNhcCA9IHByb3BzLnN0cm9rZUxpbmVjYXAsXG4gICAgICBnYXBQb3NpdGlvbiA9IHByb3BzLmdhcFBvc2l0aW9uLFxuICAgICAgZ2FwRGVncmVlID0gcHJvcHMuZ2FwRGVncmVlLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgY2lyY2xlU2l6ZSA9IHdpZHRoIHx8IDEyMDtcbiAgdmFyIGNpcmNsZVN0eWxlID0ge1xuICAgIHdpZHRoOiBjaXJjbGVTaXplLFxuICAgIGhlaWdodDogY2lyY2xlU2l6ZSxcbiAgICBmb250U2l6ZTogY2lyY2xlU2l6ZSAqIDAuMTUgKyA2XG4gIH07XG4gIHZhciBjaXJjbGVXaWR0aCA9IHN0cm9rZVdpZHRoIHx8IDY7XG4gIHZhciBnYXBQb3MgPSBnYXBQb3NpdGlvbiB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyAmJiAnYm90dG9tJyB8fCAndG9wJztcblxuICB2YXIgZ2V0R2FwRGVncmVlID0gZnVuY3Rpb24gZ2V0R2FwRGVncmVlKCkge1xuICAgIC8vIFN1cHBvcnQgZ2FwRGVnID0gMCB3aGVuIHR5cGUgPSAnZGFzaGJvYXJkJ1xuICAgIGlmIChnYXBEZWdyZWUgfHwgZ2FwRGVncmVlID09PSAwKSB7XG4gICAgICByZXR1cm4gZ2FwRGVncmVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgcmV0dXJuIDc1O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07IC8vIHVzaW5nIGNsYXNzTmFtZSB0byBzdHlsZSBzdHJva2UgY29sb3JcblxuXG4gIHZhciBzdHJva2VDb2xvciA9IGdldFN0cm9rZUNvbG9yKHByb3BzKTtcbiAgdmFyIGlzR3JhZGllbnQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3Ryb2tlQ29sb3IpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZS1ncmFkaWVudFwiKSwgaXNHcmFkaWVudCkpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICBzdHlsZTogY2lyY2xlU3R5bGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjUHJvZ3Jlc3MuQ2lyY2xlLCB7XG4gICAgcGVyY2VudDogZ2V0UGVyY2VudGFnZShwcm9wcyksXG4gICAgc3Ryb2tlV2lkdGg6IGNpcmNsZVdpZHRoLFxuICAgIHRyYWlsV2lkdGg6IGNpcmNsZVdpZHRoLFxuICAgIHN0cm9rZUNvbG9yOiBzdHJva2VDb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgIHRyYWlsQ29sb3I6IHRyYWlsQ29sb3IsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZ2FwRGVncmVlOiBnZXRHYXBEZWdyZWUoKSxcbiAgICBnYXBQb3NpdGlvbjogZ2FwUG9zXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBDaXJjbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5oYW5kbGVHcmFkaWVudCA9IGV4cG9ydHMuc29ydEdyYWRpZW50ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY29sb3JzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG4vKipcbiAqIHtcbiAqICAgJzAlJzogJyNhZmMxNjMnLFxuICogICAnNzUlJzogJyMwMDk5MDAnLFxuICogICAnNTAlJzogJ2dyZWVuJywgICAgID09PT0+ICAgICAnI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsICMwMENDMDAgNTAlLCAjMDA5OTAwIDc1JSwgI2ZmZmZmZiAxMDAlJ1xuICogICAnMjUlJzogJyM2NkZGMDAnLFxuICogICAnMTAwJSc6ICcjZmZmZmZmJ1xuICogfVxuICovXG52YXIgc29ydEdyYWRpZW50ID0gZnVuY3Rpb24gc29ydEdyYWRpZW50KGdyYWRpZW50cykge1xuICB2YXIgdGVtcEFyciA9IFtdO1xuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBmb3JtYXR0ZWRLZXkgPSBwYXJzZUZsb2F0KGtleS5yZXBsYWNlKC8lL2csICcnKSk7XG5cbiAgICBpZiAoIWlzTmFOKGZvcm1hdHRlZEtleSkpIHtcbiAgICAgIHRlbXBBcnIucHVzaCh7XG4gICAgICAgIGtleTogZm9ybWF0dGVkS2V5LFxuICAgICAgICB2YWx1ZTogZ3JhZGllbnRzW2tleV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5rZXkgLSBiLmtleTtcbiAgfSk7XG4gIHJldHVybiB0ZW1wQXJyLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdChrZXksIFwiJVwiKTtcbiAgfSkuam9pbignLCAnKTtcbn07XG4vKipcbiAqIHtcbiAqICAgJzAlJzogJyNhZmMxNjMnLFxuICogICAnMjUlJzogJyM2NkZGMDAnLFxuICogICAnNTAlJzogJyMwMENDMDAnLCAgICAgPT09PT4gIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsXG4gKiAgICc3NSUnOiAnIzAwOTkwMCcsICAgICAgICAgICAgICAjMDBDQzAwIDUwJSwgIzAwOTkwMCA3NSUsICNmZmZmZmYgMTAwJSlcbiAqICAgJzEwMCUnOiAnI2ZmZmZmZidcbiAqIH1cbiAqXG4gKiBUaGVuIHRoaXMgbWFuIGNhbWUgdG8gcmVhbGl6ZSB0aGUgdHJ1dGg6XG4gKiBCZXNpZGVzIHNpeCBwZW5jZSwgdGhlcmUgaXMgdGhlIG1vb24uXG4gKiBCZXNpZGVzIGJyZWFkIGFuZCBidXR0ZXIsIHRoZXJlIGlzIHRoZSBidWcuXG4gKiBBbmQuLi5cbiAqIEJlc2lkZXMgd29tZW4sIHRoZXJlIGlzIHRoZSBjb2RlLlxuICovXG5cblxuZXhwb3J0cy5zb3J0R3JhZGllbnQgPSBzb3J0R3JhZGllbnQ7XG5cbnZhciBoYW5kbGVHcmFkaWVudCA9IGZ1bmN0aW9uIGhhbmRsZUdyYWRpZW50KHN0cm9rZUNvbG9yLCBkaXJlY3Rpb25Db25maWcpIHtcbiAgdmFyIF9zdHJva2VDb2xvciRmcm9tID0gc3Ryb2tlQ29sb3IuZnJvbSxcbiAgICAgIGZyb20gPSBfc3Ryb2tlQ29sb3IkZnJvbSA9PT0gdm9pZCAwID8gX2NvbG9ycy5wcmVzZXRQcmltYXJ5Q29sb3JzLmJsdWUgOiBfc3Ryb2tlQ29sb3IkZnJvbSxcbiAgICAgIF9zdHJva2VDb2xvciR0byA9IHN0cm9rZUNvbG9yLnRvLFxuICAgICAgdG8gPSBfc3Ryb2tlQ29sb3IkdG8gPT09IHZvaWQgMCA/IF9jb2xvcnMucHJlc2V0UHJpbWFyeUNvbG9ycy5ibHVlIDogX3N0cm9rZUNvbG9yJHRvLFxuICAgICAgX3N0cm9rZUNvbG9yJGRpcmVjdGlvID0gc3Ryb2tlQ29sb3IuZGlyZWN0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3N0cm9rZUNvbG9yJGRpcmVjdGlvID09PSB2b2lkIDAgPyBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnID8gJ3RvIGxlZnQnIDogJ3RvIHJpZ2h0JyA6IF9zdHJva2VDb2xvciRkaXJlY3RpbyxcbiAgICAgIHJlc3QgPSBfX3Jlc3Qoc3Ryb2tlQ29sb3IsIFtcImZyb21cIiwgXCJ0b1wiLCBcImRpcmVjdGlvblwiXSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHJlc3QpLmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBzb3J0ZWRHcmFkaWVudHMgPSBzb3J0R3JhZGllbnQocmVzdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIsIFwiKS5jb25jYXQoc29ydGVkR3JhZGllbnRzLCBcIilcIilcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KFwiLmNvbmNhdChkaXJlY3Rpb24sIFwiLCBcIikuY29uY2F0KGZyb20sIFwiLCBcIikuY29uY2F0KHRvLCBcIilcIilcbiAgfTtcbn07XG5cbmV4cG9ydHMuaGFuZGxlR3JhZGllbnQgPSBoYW5kbGVHcmFkaWVudDtcblxudmFyIExpbmUgPSBmdW5jdGlvbiBMaW5lKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb25Db25maWcgPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBwZXJjZW50ID0gcHJvcHMucGVyY2VudCxcbiAgICAgIHN0cm9rZVdpZHRoID0gcHJvcHMuc3Ryb2tlV2lkdGgsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHN0cm9rZUNvbG9yID0gcHJvcHMuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VMaW5lY2FwID0gcHJvcHMuc3Ryb2tlTGluZWNhcCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0cmFpbENvbG9yID0gcHJvcHMudHJhaWxDb2xvcixcbiAgICAgIHN1Y2Nlc3MgPSBwcm9wcy5zdWNjZXNzO1xuICB2YXIgYmFja2dyb3VuZFByb3BzID0gc3Ryb2tlQ29sb3IgJiYgdHlwZW9mIHN0cm9rZUNvbG9yICE9PSAnc3RyaW5nJyA/IGhhbmRsZUdyYWRpZW50KHN0cm9rZUNvbG9yLCBkaXJlY3Rpb25Db25maWcpIDoge1xuICAgIGJhY2tncm91bmQ6IHN0cm9rZUNvbG9yXG4gIH07XG4gIHZhciB0cmFpbFN0eWxlID0gdHJhaWxDb2xvciA/IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYWlsQ29sb3JcbiAgfSA6IHVuZGVmaW5lZDtcbiAgdmFyIHBlcmNlbnRTdHlsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgd2lkdGg6IFwiXCIuY29uY2F0KCgwLCBfdXRpbHMudmFsaWRQcm9ncmVzcykocGVyY2VudCksIFwiJVwiKSxcbiAgICBoZWlnaHQ6IHN0cm9rZVdpZHRoIHx8IChzaXplID09PSAnc21hbGwnID8gNiA6IDgpLFxuICAgIGJvcmRlclJhZGl1czogc3Ryb2tlTGluZWNhcCA9PT0gJ3NxdWFyZScgPyAwIDogJydcbiAgfSwgYmFja2dyb3VuZFByb3BzKTtcbiAgdmFyIHN1Y2Nlc3NQZXJjZW50ID0gKDAsIF91dGlscy5nZXRTdWNjZXNzUGVyY2VudCkocHJvcHMpO1xuICB2YXIgc3VjY2Vzc1BlcmNlbnRTdHlsZSA9IHtcbiAgICB3aWR0aDogXCJcIi5jb25jYXQoKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShzdWNjZXNzUGVyY2VudCksIFwiJVwiKSxcbiAgICBoZWlnaHQ6IHN0cm9rZVdpZHRoIHx8IChzaXplID09PSAnc21hbGwnID8gNiA6IDgpLFxuICAgIGJvcmRlclJhZGl1czogc3Ryb2tlTGluZWNhcCA9PT0gJ3NxdWFyZScgPyAwIDogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzID09PSBudWxsIHx8IHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Y2Nlc3Muc3Ryb2tlQ29sb3JcbiAgfTtcbiAgdmFyIHN1Y2Nlc3NTZWdtZW50ID0gc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VjY2Vzcy1iZ1wiKSxcbiAgICBzdHlsZTogc3VjY2Vzc1BlcmNlbnRTdHlsZVxuICB9KSA6IG51bGw7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vdXRlclwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLFxuICAgIHN0eWxlOiB0cmFpbFN0eWxlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmdcIiksXG4gICAgc3R5bGU6IHBlcmNlbnRTdHlsZVxuICB9KSwgc3VjY2Vzc1NlZ21lbnQpKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gTGluZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiBTdGVwcyhwcm9wcykge1xuICB2YXIgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzdGVwcyA9IHByb3BzLnN0ZXBzLFxuICAgICAgX3Byb3BzJHBlcmNlbnQgPSBwcm9wcy5wZXJjZW50LFxuICAgICAgcGVyY2VudCA9IF9wcm9wcyRwZXJjZW50ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHBlcmNlbnQsXG4gICAgICBfcHJvcHMkc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3Byb3BzJHN0cm9rZVdpZHRoID09PSB2b2lkIDAgPyA4IDogX3Byb3BzJHN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlQ29sb3IgPSBwcm9wcy5zdHJva2VDb2xvcixcbiAgICAgIHRyYWlsQ29sb3IgPSBwcm9wcy50cmFpbENvbG9yLFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIGN1cnJlbnQgPSBNYXRoLmZsb29yKHN0ZXBzICogKHBlcmNlbnQgLyAxMDApKTtcbiAgdmFyIHN0ZXBXaWR0aCA9IHNpemUgPT09ICdzbWFsbCcgPyAyIDogMTQ7XG4gIHZhciBzdHlsZWRTdGVwcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcHM7IGkgKz0gMSkge1xuICAgIHN0eWxlZFN0ZXBzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGtleTogaSxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGVwcy1pdGVtXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN0ZXBzLWl0ZW0tYWN0aXZlXCIpLCBpIDw9IGN1cnJlbnQgLSAxKSksXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGkgPD0gY3VycmVudCAtIDEgPyBzdHJva2VDb2xvciA6IHRyYWlsQ29sb3IsXG4gICAgICAgIHdpZHRoOiBzdGVwV2lkdGgsXG4gICAgICAgIGhlaWdodDogc3Ryb2tlV2lkdGhcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGVwcy1vdXRlclwiKVxuICB9LCBzdHlsZWRTdGVwcywgY2hpbGRyZW4pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gU3RlcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3Byb2dyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcm9ncmVzc1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9wcm9ncmVzc1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0NoZWNrT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja091dGxpbmVkXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9MaW5lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9MaW5lXCIpKTtcblxudmFyIF9DaXJjbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NpcmNsZVwiKSk7XG5cbnZhciBfU3RlcHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1N0ZXBzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFByb2dyZXNzVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdsaW5lJywgJ2NpcmNsZScsICdkYXNoYm9hcmQnKTtcbnZhciBQcm9ncmVzc1N0YXR1c2VzID0gKDAsIF90eXBlLnR1cGxlKSgnbm9ybWFsJywgJ2V4Y2VwdGlvbicsICdhY3RpdmUnLCAnc3VjY2VzcycpO1xuXG52YXIgUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShQcm9ncmVzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoUHJvZ3Jlc3MpO1xuXG4gIGZ1bmN0aW9uIFByb2dyZXNzKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgUHJvZ3Jlc3MpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBfdGhpcy5yZW5kZXJQcm9ncmVzcyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9ICgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSxcbiAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgICAgc3RlcHMgPSBwcm9wcy5zdGVwcyxcbiAgICAgICAgICBzaG93SW5mbyA9IHByb3BzLnNob3dJbmZvLFxuICAgICAgICAgIHN0cm9rZUNvbG9yID0gcHJvcHMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwidHlwZVwiLCBcInN0ZXBzXCIsIFwic2hvd0luZm9cIiwgXCJzdHJva2VDb2xvclwiXSk7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Byb2dyZXNzJywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICAgICAgdmFyIHByb2dyZXNzU3RhdHVzID0gX3RoaXMuZ2V0UHJvZ3Jlc3NTdGF0dXMoKTtcblxuICAgICAgdmFyIHByb2dyZXNzSW5mbyA9IF90aGlzLnJlbmRlclByb2Nlc3NJbmZvKHByZWZpeENscywgcHJvZ3Jlc3NTdGF0dXMpO1xuXG4gICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdzdWNjZXNzUGVyY2VudCcgaW4gcHJvcHMpLCAnUHJvZ3Jlc3MnLCAnYHN1Y2Nlc3NQZXJjZW50YCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBzdWNjZXNzLnBlcmNlbnRgIGluc3RlYWQuJyk7XG4gICAgICB2YXIgcHJvZ3Jlc3M7IC8vIFJlbmRlciBwcm9ncmVzcyBzaGFwZVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RlcHMgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU3RlcHNbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF90aGlzLnByb3BzLCB7XG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IHR5cGVvZiBzdHJva2VDb2xvciA9PT0gJ3N0cmluZycgPyBzdHJva2VDb2xvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBzdGVwczogc3RlcHNcbiAgICAgICAgfSksIHByb2dyZXNzSW5mbykgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTGluZVtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9KSwgcHJvZ3Jlc3NJbmZvKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NpcmNsZScgfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2lyY2xlW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHByb2dyZXNzU3RhdHVzOiBwcm9ncmVzc1N0YXR1c1xuICAgICAgICB9KSwgcHJvZ3Jlc3NJbmZvKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdjaXJjbGUnIHx8IHN0ZXBzICYmICdzdGVwcycgfHwgdHlwZSksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN0YXR1cy1cIikuY29uY2F0KHByb2dyZXNzU3RhdHVzKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2hvdy1pbmZvXCIpLCBzaG93SW5mbyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplKSwgc2l6ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdFByb3BzLCBbJ3N0YXR1cycsICdmb3JtYXQnLCAndHJhaWxDb2xvcicsICdzdHJva2VXaWR0aCcsICd3aWR0aCcsICdnYXBEZWdyZWUnLCAnZ2FwUG9zaXRpb24nLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlTGluZWNhcCcsICdwZXJjZW50JywgJ3N0ZXBzJywgJ3N1Y2Nlc3MnLCAnc3VjY2Vzc1BlcmNlbnQnXSksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgICAgfSksIHByb2dyZXNzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShQcm9ncmVzcywgW3tcbiAgICBrZXk6IFwiZ2V0UGVyY2VudE51bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQZXJjZW50TnVtYmVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzJHBlcmNlbnQgPSB0aGlzLnByb3BzLnBlcmNlbnQsXG4gICAgICAgICAgcGVyY2VudCA9IF90aGlzJHByb3BzJHBlcmNlbnQgPT09IHZvaWQgMCA/IDAgOiBfdGhpcyRwcm9wcyRwZXJjZW50O1xuICAgICAgdmFyIHN1Y2Nlc3NQZXJjZW50ID0gKDAsIF91dGlscy5nZXRTdWNjZXNzUGVyY2VudCkodGhpcy5wcm9wcyk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCA/IHN1Y2Nlc3NQZXJjZW50LnRvU3RyaW5nKCkgOiBwZXJjZW50LnRvU3RyaW5nKCksIDEwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHJvZ3Jlc3NTdGF0dXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGF0dXMoKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5wcm9wcy5zdGF0dXM7XG5cbiAgICAgIGlmIChQcm9ncmVzc1N0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA8IDAgJiYgdGhpcy5nZXRQZXJjZW50TnVtYmVyKCkgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0dXMgfHwgJ25vcm1hbCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclByb2Nlc3NJbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclByb2Nlc3NJbmZvKHByZWZpeENscywgcHJvZ3Jlc3NTdGF0dXMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2hvd0luZm8gPSBfdGhpcyRwcm9wcy5zaG93SW5mbyxcbiAgICAgICAgICBmb3JtYXQgPSBfdGhpcyRwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgICAgcGVyY2VudCA9IF90aGlzJHByb3BzLnBlcmNlbnQ7XG4gICAgICB2YXIgc3VjY2Vzc1BlcmNlbnQgPSAoMCwgX3V0aWxzLmdldFN1Y2Nlc3NQZXJjZW50KSh0aGlzLnByb3BzKTtcbiAgICAgIGlmICghc2hvd0luZm8pIHJldHVybiBudWxsO1xuICAgICAgdmFyIHRleHQ7XG5cbiAgICAgIHZhciB0ZXh0Rm9ybWF0dGVyID0gZm9ybWF0IHx8IGZ1bmN0aW9uIChwZXJjZW50TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwZXJjZW50TnVtYmVyLCBcIiVcIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNMaW5lVHlwZSA9IHR5cGUgPT09ICdsaW5lJztcblxuICAgICAgaWYgKGZvcm1hdCB8fCBwcm9ncmVzc1N0YXR1cyAhPT0gJ2V4Y2VwdGlvbicgJiYgcHJvZ3Jlc3NTdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgICB0ZXh0ID0gdGV4dEZvcm1hdHRlcigoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHBlcmNlbnQpLCAoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHN1Y2Nlc3NQZXJjZW50KSk7XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzU3RhdHVzID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgICB0ZXh0ID0gaXNMaW5lVHlwZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3NTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0ZXh0ID0gaXNMaW5lVHlwZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DaGVja0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0XCIpLFxuICAgICAgICB0aXRsZTogdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dCA6IHVuZGVmaW5lZFxuICAgICAgfSwgdGV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclByb2dyZXNzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFByb2dyZXNzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFByb2dyZXNzO1xuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnbGluZScsXG4gIHBlcmNlbnQ6IDAsXG4gIHNob3dJbmZvOiB0cnVlLFxuICAvLyBudWxsIGZvciBkaWZmZXJlbnQgdGhlbWUgZGVmaW5pdGlvblxuICB0cmFpbENvbG9yOiBudWxsLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIGdhcERlZ3JlZTogdW5kZWZpbmVkLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudmFsaWRQcm9ncmVzcyA9IHZhbGlkUHJvZ3Jlc3M7XG5leHBvcnRzLmdldFN1Y2Nlc3NQZXJjZW50ID0gZ2V0U3VjY2Vzc1BlcmNlbnQ7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiB2YWxpZFByb2dyZXNzKHByb2dyZXNzKSB7XG4gIGlmICghcHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyZXNzO1xufVxuXG5mdW5jdGlvbiBnZXRTdWNjZXNzUGVyY2VudChfcmVmKSB7XG4gIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgc3VjY2Vzc1BlcmNlbnQgPSBfcmVmLnN1Y2Nlc3NQZXJjZW50O1xuICB2YXIgcGVyY2VudCA9IHN1Y2Nlc3NQZXJjZW50O1xuICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBwZXJjZW50YCBpbnN0ZWFkICovXG5cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3Byb2dyZXNzJyBpbiBzdWNjZXNzKSB7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoZmFsc2UsICdQcm9ncmVzcycsICdgc3VjY2Vzcy5wcm9ncmVzc2AgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgc3VjY2Vzcy5wZXJjZW50YCBpbnN0ZWFkLicpO1xuICAgIHBlcmNlbnQgPSBzdWNjZXNzLnByb2dyZXNzO1xuICB9XG5cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3BlcmNlbnQnIGluIHN1Y2Nlc3MpIHtcbiAgICBwZXJjZW50ID0gc3VjY2Vzcy5wZXJjZW50O1xuICB9XG5cbiAgcmV0dXJuIHBlcmNlbnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuUmFkaW9Hcm91cENvbnRleHRQcm92aWRlciA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJhZGlvR3JvdXBDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgUmFkaW9Hcm91cENvbnRleHRQcm92aWRlciA9IFJhZGlvR3JvdXBDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0cy5SYWRpb0dyb3VwQ29udGV4dFByb3ZpZGVyID0gUmFkaW9Hcm91cENvbnRleHRQcm92aWRlcjtcbnZhciBfZGVmYXVsdCA9IFJhZGlvR3JvdXBDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3VzZU1lcmdlZFN0YXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCIpKTtcblxudmFyIF9yYWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFkaW9cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dFwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBSYWRpb0dyb3VwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSAoMCwgX3VzZU1lcmdlZFN0YXRlM1tcImRlZmF1bHRcIl0pKHByb3BzLmRlZmF1bHRWYWx1ZSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcblxuICB2YXIgb25SYWRpb0NoYW5nZSA9IGZ1bmN0aW9uIG9uUmFkaW9DaGFuZ2UoZXYpIHtcbiAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdmFyIHZhbCA9IGV2LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICghKCd2YWx1ZScgaW4gcHJvcHMpKSB7XG4gICAgICBzZXRWYWx1ZSh2YWwpO1xuICAgIH1cblxuICAgIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgaWYgKG9uQ2hhbmdlICYmIHZhbCAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICBvbkNoYW5nZShldik7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW5kZXJHcm91cCA9IGZ1bmN0aW9uIHJlbmRlckdyb3VwKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIG9wdGlvblR5cGUgPSBwcm9wcy5vcHRpb25UeXBlLFxuICAgICAgICBidXR0b25TdHlsZSA9IHByb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjdXN0b21pemVTaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmU7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncmFkaW8nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBncm91cFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXBcIik7XG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBjaGlsZHJlbjsgLy8g5aaC5p6c5a2Y5ZyoIG9wdGlvbnMsIOS8mOWFiOS9v+eUqFxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgb3B0aW9uc1ByZWZpeENscyA9IG9wdGlvblR5cGUgPT09ICdidXR0b24nID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idXR0b25cIikgOiBwcmVmaXhDbHM7XG4gICAgICBjaGlsZHJlblRvUmVuZGVyID0gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyDmraTlpITnsbvlnovoh6rliqjmjqjlr7zkuLogc3RyaW5nXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yYWRpb1tcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICAgIGtleTogb3B0aW9uLFxuICAgICAgICAgICAgcHJlZml4Q2xzOiBvcHRpb25zUHJlZml4Q2xzLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgIGNoZWNrZWQ6IHZhbHVlID09PSBvcHRpb25cbiAgICAgICAgICB9LCBvcHRpb24pO1xuICAgICAgICB9IC8vIOatpOWkhOexu+Wei+iHquWKqOaOqOWvvOS4uiB7IGxhYmVsOiBzdHJpbmcgdmFsdWU6IHN0cmluZyB9XG5cblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JhZGlvW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGtleTogXCJyYWRpby1ncm91cC12YWx1ZS1vcHRpb25zLVwiLmNvbmNhdChvcHRpb24udmFsdWUpLFxuICAgICAgICAgIHByZWZpeENsczogb3B0aW9uc1ByZWZpeENscyxcbiAgICAgICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkIHx8IGRpc2FibGVkLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgY2hlY2tlZDogdmFsdWUgPT09IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogb3B0aW9uLnN0eWxlXG4gICAgICAgIH0sIG9wdGlvbi5sYWJlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VkU2l6ZSA9IGN1c3RvbWl6ZVNpemUgfHwgc2l6ZTtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShncm91cFByZWZpeENscywgXCJcIi5jb25jYXQoZ3JvdXBQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYnV0dG9uU3R5bGUpLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQoZ3JvdXBQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQobWVyZ2VkU2l6ZSksIG1lcmdlZFNpemUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChncm91cFByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LlJhZGlvR3JvdXBDb250ZXh0UHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgb25DaGFuZ2U6IG9uUmFkaW9DaGFuZ2UsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfVxuICB9LCByZW5kZXJHcm91cCgpKTtcbn0pO1xuUmFkaW9Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJ1dHRvblN0eWxlOiAnb3V0bGluZSdcbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKFJhZGlvR3JvdXApO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkdyb3VwXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9ncm91cFtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQnV0dG9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yYWRpb0J1dHRvbltcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmFkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JhZGlvXCIpKTtcblxudmFyIF9ncm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ3JvdXBcIikpO1xuXG52YXIgX3JhZGlvQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yYWRpb0J1dHRvblwiKSk7XG5cbnZhciBSYWRpbyA9IF9yYWRpb1tcImRlZmF1bHRcIl07XG5SYWRpby5CdXR0b24gPSBfcmFkaW9CdXR0b25bXCJkZWZhdWx0XCJdO1xuUmFkaW8uR3JvdXAgPSBfZ3JvdXBbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gUmFkaW87XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0NoZWNrYm94ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtY2hlY2tib3hcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBfcmVmID0gcmVxdWlyZShcIi4uL191dGlsL3JlZlwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgSW50ZXJuYWxSYWRpbyA9IGZ1bmN0aW9uIEludGVybmFsUmFkaW8ocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb250ZXh0W1wiZGVmYXVsdFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIGlubmVyUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBtZXJnZWRSZWYgPSAoMCwgX3JlZi5jb21wb3NlUmVmKShyZWYsIGlubmVyUmVmKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdvcHRpb25UeXBlJyBpbiBwcm9wcyksICdSYWRpbycsICdgb3B0aW9uVHlwZWAgaXMgb25seSBzdXBwb3J0IGluIFJhZGlvLkdyb3VwLicpO1xuICB9LCBbXSk7XG5cbiAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5vbkNoYW5nZSkge1xuICAgICAgY29udGV4dC5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyYWRpbycsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciByYWRpb1Byb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmIChjb250ZXh0KSB7XG4gICAgcmFkaW9Qcm9wcy5uYW1lID0gY29udGV4dC5uYW1lO1xuICAgIHJhZGlvUHJvcHMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICByYWRpb1Byb3BzLmNoZWNrZWQgPSBwcm9wcy52YWx1ZSA9PT0gY29udGV4dC52YWx1ZTtcbiAgICByYWRpb1Byb3BzLmRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgY29udGV4dC5kaXNhYmxlZDtcbiAgfVxuXG4gIHZhciB3cmFwcGVyQ2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXJcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXItY2hlY2tlZFwiKSwgcmFkaW9Qcm9wcy5jaGVja2VkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLWRpc2FibGVkXCIpLCByYWRpb1Byb3BzLmRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2xcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwge1xuICAgICAgY2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3NTdHJpbmcsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjQ2hlY2tib3hbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJhZGlvUHJvcHMsIHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgcmVmOiBtZXJnZWRSZWZcbiAgICB9KSksIGNoaWxkcmVuICE9PSB1bmRlZmluZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pIDogbnVsbClcbiAgKTtcbn07XG5cbnZhciBSYWRpbyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsUmFkaW8pO1xuUmFkaW8uZGlzcGxheU5hbWUgPSAnUmFkaW8nO1xuUmFkaW8uZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAncmFkaW8nXG59O1xudmFyIF9kZWZhdWx0ID0gUmFkaW87XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yYWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFkaW9cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBSYWRpb0J1dHRvbiA9IGZ1bmN0aW9uIFJhZGlvQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIHJhZGlvR3JvdXBDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29udGV4dFtcImRlZmF1bHRcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICByYWRpb1Byb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3JhZGlvLWJ1dHRvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgaWYgKHJhZGlvR3JvdXBDb250ZXh0KSB7XG4gICAgcmFkaW9Qcm9wcy5jaGVja2VkID0gcHJvcHMudmFsdWUgPT09IHJhZGlvR3JvdXBDb250ZXh0LnZhbHVlO1xuICAgIHJhZGlvUHJvcHMuZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCB8fCByYWRpb0dyb3VwQ29udGV4dC5kaXNhYmxlZDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmFkaW9bXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gIH0sIHJhZGlvUHJvcHMsIHtcbiAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgcmVmOiByZWZcbiAgfSkpO1xufTtcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoUmFkaW9CdXR0b24pO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9VcGxvYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1VwbG9hZFwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgSW50ZXJuYWxEcmFnZ2VyID0gZnVuY3Rpb24gSW50ZXJuYWxEcmFnZ2VyKF9hLCByZWYpIHtcbiAgdmFyIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICBoZWlnaHQgPSBfYS5oZWlnaHQsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInN0eWxlXCIsIFwiaGVpZ2h0XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1VwbG9hZFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgcmVmOiByZWZcbiAgfSwgcmVzdFByb3BzLCB7XG4gICAgdHlwZTogXCJkcmFnXCIsXG4gICAgc3R5bGU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHN0eWxlKSwge1xuICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICB9KVxuICB9KSk7XG59O1xuXG52YXIgRHJhZ2dlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsRHJhZ2dlcik7XG5EcmFnZ2VyLmRpc3BsYXlOYW1lID0gJ0RyYWdnZXInO1xudmFyIF9kZWZhdWx0ID0gRHJhZ2dlcjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY1VwbG9hZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXVwbG9hZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0RyYWdnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RyYWdnZXJcIikpO1xuXG52YXIgX1VwbG9hZExpc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1VwbG9hZExpc3RcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2RlZmF1bHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfdXNlRm9yY2VVcGRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9ob29rcy91c2VGb3JjZVVwZGF0ZVwiKSk7XG5cbnZhciBfdXNlRnJlc2hTdGF0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VzZUZyZXNoU3RhdGVcIikpO1xuXG52YXIgSW50ZXJuYWxVcGxvYWQgPSBmdW5jdGlvbiBJbnRlcm5hbFVwbG9hZChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgdmFyIGZpbGVMaXN0UHJvcCA9IHByb3BzLmZpbGVMaXN0LFxuICAgICAgZGVmYXVsdEZpbGVMaXN0ID0gcHJvcHMuZGVmYXVsdEZpbGVMaXN0LFxuICAgICAgb25SZW1vdmUgPSBwcm9wcy5vblJlbW92ZSxcbiAgICAgIHNob3dVcGxvYWRMaXN0ID0gcHJvcHMuc2hvd1VwbG9hZExpc3QsXG4gICAgICBsaXN0VHlwZSA9IHByb3BzLmxpc3RUeXBlLFxuICAgICAgb25QcmV2aWV3ID0gcHJvcHMub25QcmV2aWV3LFxuICAgICAgb25Eb3dubG9hZCA9IHByb3BzLm9uRG93bmxvYWQsXG4gICAgICBwcmV2aWV3RmlsZSA9IHByb3BzLnByZXZpZXdGaWxlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIHByb3BMb2NhbGUgPSBwcm9wcy5sb2NhbGUsXG4gICAgICBpY29uUmVuZGVyID0gcHJvcHMuaWNvblJlbmRlcixcbiAgICAgIGlzSW1hZ2VVcmwgPSBwcm9wcy5pc0ltYWdlVXJsLFxuICAgICAgcHJvZ3Jlc3MgPSBwcm9wcy5wcm9ncmVzcyxcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBpdGVtUmVuZGVyID0gcHJvcHMuaXRlbVJlbmRlcjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoJ2Ryb3AnKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGRyYWdTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXREcmFnU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBmb3JjZVVwZGF0ZSA9ICgwLCBfdXNlRm9yY2VVcGRhdGVbXCJkZWZhdWx0XCJdKSgpOyAvLyBSZWZyZXNoIGFsd2F5cyB1c2UgZnJlc2ggZGF0YVxuXG4gIHZhciBfdXNlRnJlc2hTdGF0ZSA9ICgwLCBfdXNlRnJlc2hTdGF0ZTNbXCJkZWZhdWx0XCJdKShmaWxlTGlzdFByb3AgfHwgZGVmYXVsdEZpbGVMaXN0IHx8IFtdLCBmaWxlTGlzdFByb3ApLFxuICAgICAgX3VzZUZyZXNoU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VGcmVzaFN0YXRlLCAyKSxcbiAgICAgIGdldEZpbGVMaXN0ID0gX3VzZUZyZXNoU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsZUxpc3QgPSBfdXNlRnJlc2hTdGF0ZTJbMV07XG5cbiAgdmFyIHVwbG9hZCA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCdmaWxlTGlzdCcgaW4gcHJvcHMgfHwgISgndmFsdWUnIGluIHByb3BzKSwgJ1VwbG9hZCcsICdgdmFsdWVgIGlzIG5vdCBhIHZhbGlkIHByb3AsIGRvIHlvdSBtZWFuIGBmaWxlTGlzdGA/Jyk7XG4gIH0sIFtdKTtcblxuICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZShpbmZvKSB7XG4gICAgc2V0RmlsZUxpc3QoaW5mby5maWxlTGlzdCk7XG4gICAgdmFyIG9uQ2hhbmdlUHJvcCA9IHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgaWYgKG9uQ2hhbmdlUHJvcCkge1xuICAgICAgb25DaGFuZ2VQcm9wKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGluZm8pLCB7XG4gICAgICAgIGZpbGVMaXN0OiAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGluZm8uZmlsZUxpc3QpXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gb25TdGFydChmaWxlKSB7XG4gICAgdmFyIHRhcmdldEl0ZW0gPSAoMCwgX3V0aWxzLmZpbGVUb09iamVjdCkoZmlsZSk7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAndXBsb2FkaW5nJztcbiAgICB2YXIgbmV4dEZpbGVMaXN0ID0gZ2V0RmlsZUxpc3QoKS5jb25jYXQoKTtcbiAgICB2YXIgZmlsZUluZGV4ID0gbmV4dEZpbGVMaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHVpZCA9IF9yZWYudWlkO1xuICAgICAgcmV0dXJuIHVpZCA9PT0gdGFyZ2V0SXRlbS51aWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsZUluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEZpbGVMaXN0LnB1c2godGFyZ2V0SXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRGaWxlTGlzdFtmaWxlSW5kZXhdID0gdGFyZ2V0SXRlbTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh7XG4gICAgICBmaWxlOiB0YXJnZXRJdGVtLFxuICAgICAgZmlsZUxpc3Q6IG5leHRGaWxlTGlzdFxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvblN1Y2Nlc3MgPSBmdW5jdGlvbiBvblN1Y2Nlc3MocmVzcG9uc2UsIGZpbGUsIHhocikge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHJlc3BvbnNlID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGRvIG5vdGhpbmcgKi9cbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0SXRlbSA9ICgwLCBfdXRpbHMuZ2V0RmlsZUl0ZW0pKGZpbGUsIGdldEZpbGVMaXN0KCkpOyAvLyByZW1vdmVkXG5cbiAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcbiAgICB0YXJnZXRJdGVtLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGFyZ2V0SXRlbS54aHIgPSB4aHI7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgZmlsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0YXJnZXRJdGVtKSxcbiAgICAgIGZpbGVMaXN0OiBnZXRGaWxlTGlzdCgpLmNvbmNhdCgpXG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiBvblByb2dyZXNzKGUsIGZpbGUpIHtcbiAgICB2YXIgdGFyZ2V0SXRlbSA9ICgwLCBfdXRpbHMuZ2V0RmlsZUl0ZW0pKGZpbGUsIGdldEZpbGVMaXN0KCkpOyAvLyByZW1vdmVkXG5cbiAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgZXZlbnQ6IGUsXG4gICAgICBmaWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHRhcmdldEl0ZW0pLFxuICAgICAgZmlsZUxpc3Q6IGdldEZpbGVMaXN0KCkuY29uY2F0KClcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmaWxlKSB7XG4gICAgdmFyIHRhcmdldEl0ZW0gPSAoMCwgX3V0aWxzLmdldEZpbGVJdGVtKShmaWxlLCBnZXRGaWxlTGlzdCgpKTsgLy8gcmVtb3ZlZFxuXG4gICAgaWYgKCF0YXJnZXRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycm9yO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgZmlsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0YXJnZXRJdGVtKSxcbiAgICAgIGZpbGVMaXN0OiBnZXRGaWxlTGlzdCgpLmNvbmNhdCgpXG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVJlbW92ZSA9IGZ1bmN0aW9uIGhhbmRsZVJlbW92ZShmaWxlKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHR5cGVvZiBvblJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVtb3ZlKGZpbGUpIDogb25SZW1vdmUpLnRoZW4oZnVuY3Rpb24gKHJldCkge1xuICAgICAgLy8gUHJldmVudCByZW1vdmluZyBmaWxlXG4gICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciByZW1vdmVkRmlsZUxpc3QgPSAoMCwgX3V0aWxzLnJlbW92ZUZpbGVJdGVtKShmaWxlLCBnZXRGaWxlTGlzdCgpKTtcblxuICAgICAgaWYgKHJlbW92ZWRGaWxlTGlzdCkge1xuICAgICAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcblxuICAgICAgICBpZiAodXBsb2FkLmN1cnJlbnQpIHtcbiAgICAgICAgICB1cGxvYWQuY3VycmVudC5hYm9ydChmaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgIGZpbGVMaXN0OiByZW1vdmVkRmlsZUxpc3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uRmlsZURyb3AgPSBmdW5jdGlvbiBvbkZpbGVEcm9wKGUpIHtcbiAgICBzZXREcmFnU3RhdGUoZS50eXBlKTtcbiAgfTtcblxuICB2YXIgYmVmb3JlVXBsb2FkID0gZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0QXJncykge1xuICAgIHZhciBiZWZvcmVVcGxvYWRQcm9wID0gcHJvcHMuYmVmb3JlVXBsb2FkO1xuXG4gICAgaWYgKCFiZWZvcmVVcGxvYWRQcm9wKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gYmVmb3JlVXBsb2FkUHJvcChmaWxlLCBmaWxlTGlzdEFyZ3MpO1xuXG4gICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vIEdldCB1bmlxdWUgZmlsZSBsaXN0XG4gICAgICB2YXIgdW5pcXVlTGlzdCA9IFtdO1xuICAgICAgZ2V0RmlsZUxpc3QoKS5jb25jYXQoZmlsZUxpc3RBcmdzLm1hcChfdXRpbHMuZmlsZVRvT2JqZWN0KSkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgICAgICBpZiAodW5pcXVlTGlzdC5ldmVyeShmdW5jdGlvbiAodWYpIHtcbiAgICAgICAgICByZXR1cm4gdWYudWlkICE9PSBmLnVpZDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICB1bmlxdWVMaXN0LnB1c2goZik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICBmaWxlTGlzdDogdW5pcXVlTGlzdFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTsgLy8gVGVzdCBuZWVkc1xuXG5cbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25TdGFydDogb25TdGFydCxcbiAgICAgIG9uU3VjY2Vzczogb25TdWNjZXNzLFxuICAgICAgb25Qcm9ncmVzczogb25Qcm9ncmVzcyxcbiAgICAgIG9uRXJyb3I6IG9uRXJyb3IsXG4gICAgICBmaWxlTGlzdDogZ2V0RmlsZUxpc3QoKSxcbiAgICAgIHVwbG9hZDogdXBsb2FkLmN1cnJlbnQsXG4gICAgICBmb3JjZVVwZGF0ZTogZm9yY2VVcGRhdGVcbiAgICB9O1xuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCd1cGxvYWQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgcmNVcGxvYWRQcm9wcyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIG9uU3RhcnQ6IG9uU3RhcnQsXG4gICAgb25FcnJvcjogb25FcnJvcixcbiAgICBvblByb2dyZXNzOiBvblByb2dyZXNzLFxuICAgIG9uU3VjY2Vzczogb25TdWNjZXNzXG4gIH0sIHByb3BzKSwge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGJlZm9yZVVwbG9hZDogYmVmb3JlVXBsb2FkXG4gIH0pO1xuICBkZWxldGUgcmNVcGxvYWRQcm9wcy5jbGFzc05hbWU7XG4gIGRlbGV0ZSByY1VwbG9hZFByb3BzLnN0eWxlOyAvLyBSZW1vdmUgaWQgdG8gYXZvaWQgb3BlbiBieSBsYWJlbCB3aGVuIHRyaWdnZXIgaXMgaGlkZGVuXG4gIC8vICFjaGlsZHJlbjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTQyOThcbiAgLy8gZGlzYWJsZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NDc4XG4gIC8vICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yNDE5N1xuXG4gIGlmICghY2hpbGRyZW4gfHwgZGlzYWJsZWQpIHtcbiAgICBkZWxldGUgcmNVcGxvYWRQcm9wcy5pZDtcbiAgfVxuXG4gIHZhciByZW5kZXJVcGxvYWRMaXN0ID0gZnVuY3Rpb24gcmVuZGVyVXBsb2FkTGlzdChidXR0b24pIHtcbiAgICByZXR1cm4gc2hvd1VwbG9hZExpc3QgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjb21wb25lbnROYW1lOiBcIlVwbG9hZFwiLFxuICAgICAgZGVmYXVsdExvY2FsZTogX2RlZmF1bHQyW1wiZGVmYXVsdFwiXS5VcGxvYWRcbiAgICB9LCBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICB2YXIgX3JlZjIgPSB0eXBlb2Ygc2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyA/IHt9IDogc2hvd1VwbG9hZExpc3QsXG4gICAgICAgICAgc2hvd1JlbW92ZUljb24gPSBfcmVmMi5zaG93UmVtb3ZlSWNvbixcbiAgICAgICAgICBzaG93UHJldmlld0ljb24gPSBfcmVmMi5zaG93UHJldmlld0ljb24sXG4gICAgICAgICAgc2hvd0Rvd25sb2FkSWNvbiA9IF9yZWYyLnNob3dEb3dubG9hZEljb24sXG4gICAgICAgICAgcmVtb3ZlSWNvbiA9IF9yZWYyLnJlbW92ZUljb24sXG4gICAgICAgICAgZG93bmxvYWRJY29uID0gX3JlZjIuZG93bmxvYWRJY29uO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1VwbG9hZExpc3RbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIGxpc3RUeXBlOiBsaXN0VHlwZSxcbiAgICAgICAgaXRlbXM6IGdldEZpbGVMaXN0KHRydWUpLFxuICAgICAgICBwcmV2aWV3RmlsZTogcHJldmlld0ZpbGUsXG4gICAgICAgIG9uUHJldmlldzogb25QcmV2aWV3LFxuICAgICAgICBvbkRvd25sb2FkOiBvbkRvd25sb2FkLFxuICAgICAgICBvblJlbW92ZTogaGFuZGxlUmVtb3ZlLFxuICAgICAgICBzaG93UmVtb3ZlSWNvbjogIWRpc2FibGVkICYmIHNob3dSZW1vdmVJY29uLFxuICAgICAgICBzaG93UHJldmlld0ljb246IHNob3dQcmV2aWV3SWNvbixcbiAgICAgICAgc2hvd0Rvd25sb2FkSWNvbjogc2hvd0Rvd25sb2FkSWNvbixcbiAgICAgICAgcmVtb3ZlSWNvbjogcmVtb3ZlSWNvbixcbiAgICAgICAgZG93bmxvYWRJY29uOiBkb3dubG9hZEljb24sXG4gICAgICAgIGljb25SZW5kZXI6IGljb25SZW5kZXIsXG4gICAgICAgIGxvY2FsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgbG9jYWxlKSwgcHJvcExvY2FsZSksXG4gICAgICAgIGlzSW1hZ2VVcmw6IGlzSW1hZ2VVcmwsXG4gICAgICAgIHByb2dyZXNzOiBwcm9ncmVzcyxcbiAgICAgICAgYXBwZW5kQWN0aW9uOiBidXR0b24sXG4gICAgICAgIGl0ZW1SZW5kZXI6IGl0ZW1SZW5kZXJcbiAgICAgIH0pO1xuICAgIH0pIDogYnV0dG9uO1xuICB9O1xuXG4gIGlmICh0eXBlID09PSAnZHJhZycpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgZHJhZ0NscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJhZ1wiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJhZy11cGxvYWRpbmdcIiksIGdldEZpbGVMaXN0KCkuc29tZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgcmV0dXJuIGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJztcbiAgICB9KSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJhZy1ob3ZlclwiKSwgZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSwgY2xhc3NOYW1lKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogZHJhZ0NscyxcbiAgICAgIG9uRHJvcDogb25GaWxlRHJvcCxcbiAgICAgIG9uRHJhZ092ZXI6IG9uRmlsZURyb3AsXG4gICAgICBvbkRyYWdMZWF2ZTogb25GaWxlRHJvcCxcbiAgICAgIHN0eWxlOiBzdHlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1VwbG9hZFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmNVcGxvYWRQcm9wcywge1xuICAgICAgcmVmOiB1cGxvYWQsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYnRuXCIpXG4gICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcmFnLWNvbnRhaW5lclwiKVxuICAgIH0sIGNoaWxkcmVuKSkpLCByZW5kZXJVcGxvYWRMaXN0KCkpO1xuICB9XG5cbiAgdmFyIHVwbG9hZEJ1dHRvbkNscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3RcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zZWxlY3QtXCIpLmNvbmNhdChsaXN0VHlwZSksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lczIpKTtcbiAgdmFyIHVwbG9hZEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IHVwbG9hZEJ1dHRvbkNscyxcbiAgICBzdHlsZTogY2hpbGRyZW4gPyB1bmRlZmluZWQgOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1VwbG9hZFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmNVcGxvYWRQcm9wcywge1xuICAgIHJlZjogdXBsb2FkXG4gIH0pKSk7XG5cbiAgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBpY3R1cmUtY2FyZC13cmFwcGVyXCIpLCBjbGFzc05hbWUpXG4gICAgfSwgcmVuZGVyVXBsb2FkTGlzdCh1cGxvYWRCdXR0b24pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHVwbG9hZEJ1dHRvbiwgcmVuZGVyVXBsb2FkTGlzdCgpKTtcbn07XG5cbnZhciBVcGxvYWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbFVwbG9hZCk7XG5VcGxvYWQuRHJhZ2dlciA9IF9EcmFnZ2VyW1wiZGVmYXVsdFwiXTtcblVwbG9hZC5kaXNwbGF5TmFtZSA9ICdVcGxvYWQnO1xuVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3NlbGVjdCcsXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgYWN0aW9uOiAnJyxcbiAgZGF0YToge30sXG4gIGFjY2VwdDogJycsXG4gIGJlZm9yZVVwbG9hZDogX3V0aWxzLlQsXG4gIHNob3dVcGxvYWRMaXN0OiB0cnVlLFxuICBsaXN0VHlwZTogJ3RleHQnLFxuICBjbGFzc05hbWU6ICcnLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IHRydWVcbn07XG52YXIgX2RlZmF1bHQgPSBVcGxvYWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0FuaW1hdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1hbmltYXRlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIF9QYXBlckNsaXBPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1BhcGVyQ2xpcE91dGxpbmVkXCIpKTtcblxudmFyIF9QaWN0dXJlVHdvVG9uZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1BpY3R1cmVUd29Ub25lXCIpKTtcblxudmFyIF9GaWxlVHdvVG9uZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0ZpbGVUd29Ub25lXCIpKTtcblxudmFyIF9FeWVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V5ZU91dGxpbmVkXCIpKTtcblxudmFyIF9EZWxldGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0RlbGV0ZU91dGxpbmVkXCIpKTtcblxudmFyIF9Eb3dubG9hZE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRG93bmxvYWRPdXRsaW5lZFwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX3Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi90b29sdGlwXCIpKTtcblxudmFyIF9wcm9ncmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Byb2dyZXNzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vYnV0dG9uXCIpKTtcblxudmFyIF91c2VGb3JjZVVwZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlXCIpKTtcblxudmFyIEludGVybmFsVXBsb2FkTGlzdCA9IGZ1bmN0aW9uIEludGVybmFsVXBsb2FkTGlzdChfcmVmLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzNjtcblxuICB2YXIgbGlzdFR5cGUgPSBfcmVmLmxpc3RUeXBlLFxuICAgICAgcHJldmlld0ZpbGUgPSBfcmVmLnByZXZpZXdGaWxlLFxuICAgICAgb25QcmV2aWV3ID0gX3JlZi5vblByZXZpZXcsXG4gICAgICBvbkRvd25sb2FkID0gX3JlZi5vbkRvd25sb2FkLFxuICAgICAgb25SZW1vdmUgPSBfcmVmLm9uUmVtb3ZlLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBpY29uUmVuZGVyID0gX3JlZi5pY29uUmVuZGVyLFxuICAgICAgaXNJbWdVcmwgPSBfcmVmLmlzSW1hZ2VVcmwsXG4gICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIF9yZWYkaXRlbXMgPSBfcmVmLml0ZW1zLFxuICAgICAgaXRlbXMgPSBfcmVmJGl0ZW1zID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaXRlbXMsXG4gICAgICBzaG93UHJldmlld0ljb24gPSBfcmVmLnNob3dQcmV2aWV3SWNvbixcbiAgICAgIHNob3dSZW1vdmVJY29uID0gX3JlZi5zaG93UmVtb3ZlSWNvbixcbiAgICAgIHNob3dEb3dubG9hZEljb24gPSBfcmVmLnNob3dEb3dubG9hZEljb24sXG4gICAgICBjdXN0b21SZW1vdmVJY29uID0gX3JlZi5yZW1vdmVJY29uLFxuICAgICAgY3VzdG9tRG93bmxvYWRJY29uID0gX3JlZi5kb3dubG9hZEljb24sXG4gICAgICBwcm9ncmVzc1Byb3BzID0gX3JlZi5wcm9ncmVzcyxcbiAgICAgIGFwcGVuZEFjdGlvbiA9IF9yZWYuYXBwZW5kQWN0aW9uLFxuICAgICAgaXRlbVJlbmRlciA9IF9yZWYuaXRlbVJlbmRlcjtcbiAgdmFyIGZvcmNlVXBkYXRlID0gKDAsIF91c2VGb3JjZVVwZGF0ZVtcImRlZmF1bHRcIl0pKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpc3RUeXBlICE9PSAncGljdHVyZScgJiYgbGlzdFR5cGUgIT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKGl0ZW1zIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93LkZpbGVSZWFkZXIgfHwgIXdpbmRvdy5GaWxlIHx8ICEoZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSB8fCBmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBCbG9iKSB8fCBmaWxlLnRodW1iVXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaWxlLnRodW1iVXJsID0gJyc7XG5cbiAgICAgIGlmIChwcmV2aWV3RmlsZSkge1xuICAgICAgICBwcmV2aWV3RmlsZShmaWxlLm9yaWdpbkZpbGVPYmopLnRoZW4oZnVuY3Rpb24gKHByZXZpZXdEYXRhVXJsKSB7XG4gICAgICAgICAgLy8gTmVlZCBhcHBlbmQgJycgdG8gYXZvaWQgZGVhZCBsb29wXG4gICAgICAgICAgZmlsZS50aHVtYlVybCA9IHByZXZpZXdEYXRhVXJsIHx8ICcnO1xuICAgICAgICAgIGZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbbGlzdFR5cGUsIGl0ZW1zLCBwcmV2aWV3RmlsZV0pO1xuXG4gIHZhciBoYW5kbGVQcmV2aWV3ID0gZnVuY3Rpb24gaGFuZGxlUHJldmlldyhmaWxlLCBlKSB7XG4gICAgaWYgKCFvblByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIG9uUHJldmlldyhmaWxlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRG93bmxvYWQgPSBmdW5jdGlvbiBoYW5kbGVEb3dubG9hZChmaWxlKSB7XG4gICAgaWYgKHR5cGVvZiBvbkRvd25sb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkRvd25sb2FkKGZpbGUpO1xuICAgIH0gZWxzZSBpZiAoZmlsZS51cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGZpbGUudXJsKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZmlsZSkge1xuICAgIGlmIChvblJlbW92ZSkge1xuICAgICAgb25SZW1vdmUoZmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVJY29uUmVuZGVyID0gZnVuY3Rpb24gaGFuZGxlSWNvblJlbmRlcihmaWxlKSB7XG4gICAgaWYgKGljb25SZW5kZXIpIHtcbiAgICAgIHJldHVybiBpY29uUmVuZGVyKGZpbGUsIGxpc3RUeXBlKTtcbiAgICB9XG5cbiAgICB2YXIgaXNMb2FkaW5nID0gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnO1xuICAgIHZhciBmaWxlSWNvbiA9IGlzSW1nVXJsICYmIGlzSW1nVXJsKGZpbGUpID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1BpY3R1cmVUd29Ub25lW1wiZGVmYXVsdFwiXSwgbnVsbCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRmlsZVR3b1RvbmVbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICB2YXIgaWNvbiA9IGlzTG9hZGluZyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2FkaW5nT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9QYXBlckNsaXBPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuXG4gICAgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZScpIHtcbiAgICAgIGljb24gPSBpc0xvYWRpbmcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkgOiBmaWxlSWNvbjtcbiAgICB9IGVsc2UgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgaWNvbiA9IGlzTG9hZGluZyA/IGxvY2FsZS51cGxvYWRpbmcgOiBmaWxlSWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbjtcbiAgfTtcblxuICB2YXIgaGFuZGxlQWN0aW9uSWNvblJlbmRlciA9IGZ1bmN0aW9uIGhhbmRsZUFjdGlvbkljb25SZW5kZXIoY3VzdG9tSWNvbiwgY2FsbGJhY2ssIHByZWZpeENscywgdGl0bGUpIHtcbiAgICB2YXIgYnRuUHJvcHMgPSB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBzaXplOiAnc21hbGwnLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG5cbiAgICAgICAgaWYgKCgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShjdXN0b21JY29uKSAmJiBjdXN0b21JY29uLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgICBjdXN0b21JY29uLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWNhcmQtYWN0aW9ucy1idG5cIilcbiAgICB9O1xuXG4gICAgaWYgKCgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShjdXN0b21JY29uKSkge1xuICAgICAgdmFyIGJ0bkljb24gPSAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGN1c3RvbUljb24sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGN1c3RvbUljb24ucHJvcHMpLCB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7fVxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGJ0blByb3BzLCB7XG4gICAgICAgIGljb246IGJ0bkljb25cbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIGJ0blByb3BzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY3VzdG9tSWNvbikpO1xuICB9OyAvLyBUZXN0IG5lZWRzXG5cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYW5kbGVQcmV2aWV3OiBoYW5kbGVQcmV2aWV3LFxuICAgICAgaGFuZGxlRG93bmxvYWQ6IGhhbmRsZURvd25sb2FkXG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndXBsb2FkJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgdmFyIGxpc3QgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXMzLCBfY2xhc3NOYW1lczQ7XG5cbiAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgdmFyIGljb25Ob2RlID0gaGFuZGxlSWNvblJlbmRlcihmaWxlKTtcbiAgICB2YXIgaWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0LWljb25cIilcbiAgICB9LCBpY29uTm9kZSk7XG5cbiAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlJyB8fCBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycgfHwgIWZpbGUudGh1bWJVcmwgJiYgIWZpbGUudXJsKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgdXBsb2FkaW5nQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLXRodW1ibmFpbFwiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWZpbGVcIiksIGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJyksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgIGljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB1cGxvYWRpbmdDbGFzc05hbWVcbiAgICAgICAgfSwgaWNvbk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICB2YXIgdGh1bWJuYWlsID0gaXNJbWdVcmwgJiYgaXNJbWdVcmwoZmlsZSkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgICAgc3JjOiBmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsLFxuICAgICAgICAgIGFsdDogZmlsZS5uYW1lLFxuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0taW1hZ2VcIilcbiAgICAgICAgfSkgOiBpY29uTm9kZTtcbiAgICAgICAgdmFyIGFDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS10aHVtYm5haWxcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tZmlsZVwiKSwgaXNJbWdVcmwgJiYgIWlzSW1nVXJsKGZpbGUpKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgIGljb24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogYUNsYXNzTmFtZSxcbiAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaHJlZjogZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybCxcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICB9LCB0aHVtYm5haWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcbiAgICAgIC8vIHNob3cgbG9hZGluZyBpY29uIGlmIHVwbG9hZCBwcm9ncmVzcyBsaXN0ZW5lciBpcyBkaXNhYmxlZFxuICAgICAgdmFyIGxvYWRpbmdQcm9ncmVzcyA9ICdwZXJjZW50JyBpbiBmaWxlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Byb2dyZXNzW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9ncmVzc1Byb3BzLCB7XG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICBwZXJjZW50OiBmaWxlLnBlcmNlbnRcbiAgICAgIH0pKSA6IG51bGw7XG4gICAgICBwcm9ncmVzcyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1wcm9ncmVzc1wiKSxcbiAgICAgICAga2V5OiBcInByb2dyZXNzXCJcbiAgICAgIH0sIGxvYWRpbmdQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgdmFyIGluZm9VcGxvYWRpbmdDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lczMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtXCIpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLVwiKS5jb25jYXQoZmlsZS5zdGF0dXMpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWxpc3QtdHlwZS1cIikuY29uY2F0KGxpc3RUeXBlKSwgdHJ1ZSksIF9jbGFzc05hbWVzMykpO1xuICAgIHZhciBsaW5rUHJvcHMgPSB0eXBlb2YgZmlsZS5saW5rUHJvcHMgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShmaWxlLmxpbmtQcm9wcykgOiBmaWxlLmxpbmtQcm9wcztcbiAgICB2YXIgcmVtb3ZlSWNvbiA9IHNob3dSZW1vdmVJY29uID8gaGFuZGxlQWN0aW9uSWNvblJlbmRlcigodHlwZW9mIGN1c3RvbVJlbW92ZUljb24gPT09ICdmdW5jdGlvbicgPyBjdXN0b21SZW1vdmVJY29uKGZpbGUpIDogY3VzdG9tUmVtb3ZlSWNvbikgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0RlbGV0ZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoYW5kbGVDbG9zZShmaWxlKTtcbiAgICB9LCBwcmVmaXhDbHMsIGxvY2FsZS5yZW1vdmVGaWxlKSA6IG51bGw7XG4gICAgdmFyIGRvd25sb2FkSWNvbiA9IHNob3dEb3dubG9hZEljb24gJiYgZmlsZS5zdGF0dXMgPT09ICdkb25lJyA/IGhhbmRsZUFjdGlvbkljb25SZW5kZXIoKHR5cGVvZiBjdXN0b21Eb3dubG9hZEljb24gPT09ICdmdW5jdGlvbicgPyBjdXN0b21Eb3dubG9hZEljb24oZmlsZSkgOiBjdXN0b21Eb3dubG9hZEljb24pIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Eb3dubG9hZE91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBoYW5kbGVEb3dubG9hZChmaWxlKTtcbiAgICB9LCBwcmVmaXhDbHMsIGxvY2FsZS5kb3dubG9hZEZpbGUpIDogbnVsbDtcbiAgICB2YXIgZG93bmxvYWRPckRlbGV0ZSA9IGxpc3RUeXBlICE9PSAncGljdHVyZS1jYXJkJyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAga2V5OiBcImRvd25sb2FkLWRlbGV0ZVwiLFxuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1jYXJkLWFjdGlvbnMgXCIpLmNvbmNhdChsaXN0VHlwZSA9PT0gJ3BpY3R1cmUnID8gJ3BpY3R1cmUnIDogJycpXG4gICAgfSwgZG93bmxvYWRJY29uLCByZW1vdmVJY29uKTtcbiAgICB2YXIgbGlzdEl0ZW1OYW1lQ2xhc3MgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXM0ID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM0LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1uYW1lXCIpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczQsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLW5hbWUtaWNvbi1jb3VudC1cIikuY29uY2F0KFtkb3dubG9hZEljb24sIHJlbW92ZUljb25dLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHg7XG4gICAgfSkubGVuZ3RoKSwgdHJ1ZSksIF9jbGFzc05hbWVzNCkpO1xuICAgIHZhciBwcmV2aWV3ID0gZmlsZS51cmwgPyBbLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBrZXk6IFwidmlld1wiLFxuICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgIGNsYXNzTmFtZTogbGlzdEl0ZW1OYW1lQ2xhc3MsXG4gICAgICB0aXRsZTogZmlsZS5uYW1lXG4gICAgfSwgbGlua1Byb3BzLCB7XG4gICAgICBocmVmOiBmaWxlLnVybCxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlUHJldmlldyhmaWxlLCBlKTtcbiAgICAgIH1cbiAgICB9KSwgZmlsZS5uYW1lKSwgZG93bmxvYWRPckRlbGV0ZV0gOiBbLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGtleTogXCJ2aWV3XCIsXG4gICAgICBjbGFzc05hbWU6IGxpc3RJdGVtTmFtZUNsYXNzLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiBmaWxlLm5hbWVcbiAgICB9LCBmaWxlLm5hbWUpLCBkb3dubG9hZE9yRGVsZXRlXTtcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBvcGFjaXR5OiAwLjVcbiAgICB9O1xuICAgIHZhciBwcmV2aWV3SWNvbiA9IHNob3dQcmV2aWV3SWNvbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICBocmVmOiBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsLFxuICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgIHN0eWxlOiBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsID8gdW5kZWZpbmVkIDogc3R5bGUsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICB9LFxuICAgICAgdGl0bGU6IGxvY2FsZS5wcmV2aWV3RmlsZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9FeWVPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKSA6IG51bGw7XG4gICAgdmFyIGFjdGlvbnMgPSBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcgJiYgZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWFjdGlvbnNcIilcbiAgICB9LCBwcmV2aWV3SWNvbiwgZmlsZS5zdGF0dXMgPT09ICdkb25lJyAmJiBkb3dubG9hZEljb24sIHJlbW92ZUljb24pO1xuICAgIHZhciBtZXNzYWdlO1xuXG4gICAgaWYgKGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtZXNzYWdlID0gZmlsZS5yZXNwb25zZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWVzc2FnZSA9IGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0IHx8IGxvY2FsZS51cGxvYWRFcnJvcjtcbiAgICB9XG5cbiAgICB2YXIgaWNvbkFuZFByZXZpZXcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgaWNvbiwgcHJldmlldyk7XG4gICAgdmFyIGRvbSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaW5mb1VwbG9hZGluZ0NsYXNzXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1pbmZvXCIpXG4gICAgfSwgaWNvbkFuZFByZXZpZXcpLCBhY3Rpb25zLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNBbmltYXRlW1wiZGVmYXVsdFwiXSwge1xuICAgICAgdHJhbnNpdGlvbk5hbWU6IFwiZmFkZVwiLFxuICAgICAgY29tcG9uZW50OiBcIlwiXG4gICAgfSwgcHJvZ3Jlc3MpKTtcbiAgICB2YXIgbGlzdENvbnRhaW5lck5hbWVDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKCgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1waWN0dXJlLWNhcmQtY29udGFpbmVyXCIpLCBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpKTtcbiAgICB2YXIgaXRlbSA9IGZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Rvb2x0aXBbXCJkZWZhdWx0XCJdLCB7XG4gICAgICB0aXRsZTogbWVzc2FnZSxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBmdW5jdGlvbiBnZXRQb3B1cENvbnRhaW5lcihub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfSwgZG9tKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBkb20pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBrZXk6IGZpbGUudWlkLFxuICAgICAgY2xhc3NOYW1lOiBsaXN0Q29udGFpbmVyTmFtZUNsYXNzXG4gICAgfSwgaXRlbVJlbmRlciA/IGl0ZW1SZW5kZXIoaXRlbSwgZmlsZSwgaXRlbXMpIDogaXRlbSk7XG4gIH0pO1xuICB2YXIgbGlzdENsYXNzTmFtZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXM2ID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM2LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3RcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LVwiKS5jb25jYXQobGlzdFR5cGUpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczYsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lczYpKTtcbiAgdmFyIGFuaW1hdGlvbkRpcmVjdGlvbiA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyA/ICdhbmltYXRlLWlubGluZScgOiAnYW5pbWF0ZSc7XG4gIHZhciB0cmFuc2l0aW9uTmFtZSA9IGxpc3QubGVuZ3RoID09PSAwID8gJycgOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW5pbWF0aW9uRGlyZWN0aW9uKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0FuaW1hdGVbXCJkZWZhdWx0XCJdLCB7XG4gICAgdHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIGNvbXBvbmVudDogXCJkaXZcIixcbiAgICBjbGFzc05hbWU6IGxpc3RDbGFzc05hbWVzXG4gIH0sIGxpc3QsIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChhcHBlbmRBY3Rpb24pID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChhcHBlbmRBY3Rpb24sIHtcbiAgICBrZXk6ICdhcHBlbmRBY3Rpb24nXG4gIH0pIDogYXBwZW5kQWN0aW9uKTtcbn07XG5cbnZhciBVcGxvYWRMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxVcGxvYWRMaXN0KTtcblVwbG9hZExpc3QuZGlzcGxheU5hbWUgPSAnVXBsb2FkTGlzdCc7XG5VcGxvYWRMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdFR5cGU6ICd0ZXh0JyxcbiAgcHJvZ3Jlc3M6IHtcbiAgICBzdHJva2VXaWR0aDogMixcbiAgICBzaG93SW5mbzogZmFsc2VcbiAgfSxcbiAgc2hvd1JlbW92ZUljb246IHRydWUsXG4gIHNob3dEb3dubG9hZEljb246IGZhbHNlLFxuICBzaG93UHJldmlld0ljb246IHRydWUsXG4gIHByZXZpZXdGaWxlOiBfdXRpbHMucHJldmlld0ltYWdlLFxuICBpc0ltYWdlVXJsOiBfdXRpbHMuaXNJbWFnZVVybFxufTtcbnZhciBfZGVmYXVsdCA9IFVwbG9hZExpc3Q7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX1VwbG9hZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVXBsb2FkXCIpKTtcblxudmFyIF9EcmFnZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9EcmFnZ2VyXCIpKTtcblxuX1VwbG9hZFtcImRlZmF1bHRcIl0uRHJhZ2dlciA9IF9EcmFnZ2VyW1wiZGVmYXVsdFwiXTtcbnZhciBfZGVmYXVsdCA9IF9VcGxvYWRbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHVzZUZyZXNoU3RhdGU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmFmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvcmFmXCIpKTtcblxudmFyIF91c2VGb3JjZVVwZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlXCIpKTtcblxuLy8gTm90ZS4gT25seSBmb3IgdXBsb2FkIHVzYWdlLiBEbyBub3QgZXhwb3J0IHRvIGdsb2JhbCB1dGlsIGhvb2tzXG5mdW5jdGlvbiB1c2VGcmVzaFN0YXRlKGRlZmF1bHRWYWx1ZSwgcHJvcFZhbHVlKSB7XG4gIHZhciB2YWx1ZVJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShkZWZhdWx0VmFsdWUpO1xuICB2YXIgZm9yY2VVcGRhdGUgPSAoMCwgX3VzZUZvcmNlVXBkYXRlW1wiZGVmYXVsdFwiXSkoKTtcbiAgdmFyIHJhZlJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKSgpOyAvLyBTZXQgdmFsdWVcblxuICBmdW5jdGlvbiBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICBmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW5VcCgpIHtcbiAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwocmFmUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFmU3luY1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgY2xlYW5VcCgpO1xuICAgIHJhZlJlZi5jdXJyZW50ID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSk7XG4gIH0gLy8gR2V0IHZhbHVlXG5cblxuICBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgZGlzcGxheVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIGlmIChkaXNwbGF5VmFsdWUpIHtcbiAgICAgIHJldHVybiBwcm9wVmFsdWUgfHwgdmFsdWVSZWYuY3VycmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVSZWYuY3VycmVudDtcbiAgfSAvLyBFZmZlY3Qgd2lsbCBhbHdheXMgdXBkYXRlIGluIGEgbmV4dCBmcmFtZSB0byBhdm9pZCBzeW5jIHN0YXRlIG92ZXJ3cml0ZSBjdXJyZW50IHByb2Nlc3Npbmcgc3RhdGVcblxuXG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb3BWYWx1ZSkge1xuICAgICAgcmFmU3luY1ZhbHVlKHByb3BWYWx1ZSk7XG4gICAgfVxuICB9LCBbcHJvcFZhbHVlXSk7IC8vIENsZWFuIHVwXG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYW5VcCgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFtnZXRWYWx1ZSwgc2V0VmFsdWVdO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVCA9IFQ7XG5leHBvcnRzLmZpbGVUb09iamVjdCA9IGZpbGVUb09iamVjdDtcbmV4cG9ydHMuZ2V0RmlsZUl0ZW0gPSBnZXRGaWxlSXRlbTtcbmV4cG9ydHMucmVtb3ZlRmlsZUl0ZW0gPSByZW1vdmVGaWxlSXRlbTtcbmV4cG9ydHMucHJldmlld0ltYWdlID0gcHJldmlld0ltYWdlO1xuZXhwb3J0cy5pc0ltYWdlVXJsID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxuZnVuY3Rpb24gVCgpIHtcbiAgcmV0dXJuIHRydWU7XG59IC8vIEZpeCBJRSBmaWxlLnN0YXR1cyBwcm9ibGVtXG4vLyB2aWEgY29waW5nIGEgbmV3IE9iamVjdFxuXG5cbmZ1bmN0aW9uIGZpbGVUb09iamVjdChmaWxlKSB7XG4gIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBmaWxlKSwge1xuICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgdHlwZTogZmlsZS50eXBlLFxuICAgIHVpZDogZmlsZS51aWQsXG4gICAgcGVyY2VudDogMCxcbiAgICBvcmlnaW5GaWxlT2JqOiBmaWxlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCkge1xuICB2YXIgbWF0Y2hLZXkgPSBmaWxlLnVpZCAhPT0gdW5kZWZpbmVkID8gJ3VpZCcgOiAnbmFtZSc7XG4gIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbVttYXRjaEtleV0gPT09IGZpbGVbbWF0Y2hLZXldO1xuICB9KVswXTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpIHtcbiAgdmFyIG1hdGNoS2V5ID0gZmlsZS51aWQgIT09IHVuZGVmaW5lZCA/ICd1aWQnIDogJ25hbWUnO1xuICB2YXIgcmVtb3ZlZCA9IGZpbGVMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtW21hdGNoS2V5XSAhPT0gZmlsZVttYXRjaEtleV07XG4gIH0pO1xuXG4gIGlmIChyZW1vdmVkLmxlbmd0aCA9PT0gZmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlZDtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT0gRGVmYXVsdCBJbWFnZSBQcmV2aWV3ID09PT09PT09PT09PT09PT09PT09XG5cblxudmFyIGV4dG5hbWUgPSBmdW5jdGlvbiBleHRuYW1lKCkge1xuICB2YXIgdXJsID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgdmFyIHRlbXAgPSB1cmwuc3BsaXQoJy8nKTtcbiAgdmFyIGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xuICB2YXIgZmlsZW5hbWVXaXRob3V0U3VmZml4ID0gZmlsZW5hbWUuc3BsaXQoLyN8XFw/LylbMF07XG4gIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XG59O1xuXG52YXIgaXNJbWFnZUZpbGVUeXBlID0gZnVuY3Rpb24gaXNJbWFnZUZpbGVUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuaW5kZXhPZignaW1hZ2UvJykgPT09IDA7XG59O1xuXG52YXIgaXNJbWFnZVVybCA9IGZ1bmN0aW9uIGlzSW1hZ2VVcmwoZmlsZSkge1xuICBpZiAoZmlsZS50eXBlICYmICFmaWxlLnRodW1iVXJsKSB7XG4gICAgcmV0dXJuIGlzSW1hZ2VGaWxlVHlwZShmaWxlLnR5cGUpO1xuICB9XG5cbiAgdmFyIHVybCA9IGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmw7XG4gIHZhciBleHRlbnNpb24gPSBleHRuYW1lKHVybCk7XG5cbiAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xqZmlmfGJtcHxkcGd8aWNvKSQvaS50ZXN0KGV4dGVuc2lvbikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICgvXmRhdGE6Ly50ZXN0KHVybCkpIHtcbiAgICAvLyBvdGhlciBmaWxlIHR5cGVzIG9mIGJhc2U2NFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChleHRlbnNpb24pIHtcbiAgICAvLyBvdGhlciBmaWxlIHR5cGVzIHdoaWNoIGhhdmUgZXh0ZW5zaW9uXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnRzLmlzSW1hZ2VVcmwgPSBpc0ltYWdlVXJsO1xudmFyIE1FQVNVUkVfU0laRSA9IDIwMDtcblxuZnVuY3Rpb24gcHJldmlld0ltYWdlKGZpbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgaWYgKCFmaWxlLnR5cGUgfHwgIWlzSW1hZ2VGaWxlVHlwZShmaWxlLnR5cGUpKSB7XG4gICAgICByZXNvbHZlKCcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLndpZHRoID0gTUVBU1VSRV9TSVpFO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBNRUFTVVJFX1NJWkU7XG4gICAgY2FudmFzLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBmaXhlZDsgbGVmdDogMDsgdG9wOiAwOyB3aWR0aDogXCIuY29uY2F0KE1FQVNVUkVfU0laRSwgXCJweDsgaGVpZ2h0OiBcIikuY29uY2F0KE1FQVNVUkVfU0laRSwgXCJweDsgei1pbmRleDogOTk5OTsgZGlzcGxheTogbm9uZTtcIik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdpZHRoID0gaW1nLndpZHRoLFxuICAgICAgICAgIGhlaWdodCA9IGltZy5oZWlnaHQ7XG4gICAgICB2YXIgZHJhd1dpZHRoID0gTUVBU1VSRV9TSVpFO1xuICAgICAgdmFyIGRyYXdIZWlnaHQgPSBNRUFTVVJFX1NJWkU7XG4gICAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgICB2YXIgb2Zmc2V0WSA9IDA7XG5cbiAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICBkcmF3SGVpZ2h0ID0gaGVpZ2h0ICogKE1FQVNVUkVfU0laRSAvIHdpZHRoKTtcbiAgICAgICAgb2Zmc2V0WSA9IC0oZHJhd0hlaWdodCAtIGRyYXdXaWR0aCkgLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhd1dpZHRoID0gd2lkdGggKiAoTUVBU1VSRV9TSVpFIC8gaGVpZ2h0KTtcbiAgICAgICAgb2Zmc2V0WCA9IC0oZHJhd1dpZHRoIC0gZHJhd0hlaWdodCkgLyAyO1xuICAgICAgfVxuXG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgb2Zmc2V0WCwgb2Zmc2V0WSwgZHJhd1dpZHRoLCBkcmF3SGVpZ2h0KTtcbiAgICAgIHZhciBkYXRhVVJMID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xuICAgICAgcmVzb2x2ZShkYXRhVVJMKTtcbiAgICB9O1xuXG4gICAgaW1nLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oZnVsbFBhdGgpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhY29uZmlnLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghcmVxdWVzdERhdGEpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzXG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHZhciB2YWx1ZUZyb21Db25maWcyS2V5cyA9IFsndXJsJywgJ21ldGhvZCcsICdkYXRhJ107XG4gIHZhciBtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cyA9IFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5JywgJ3BhcmFtcyddO1xuICB2YXIgZGVmYXVsdFRvQ29uZmlnMktleXMgPSBbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd0aW1lb3V0TWVzc2FnZScsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdkZWNvbXByZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICdtYXhCb2R5TGVuZ3RoJywgJ21heFJlZGlyZWN0cycsICd0cmFuc3BvcnQnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJywgJ3Jlc3BvbnNlRW5jb2RpbmcnXG4gIF07XG4gIHZhciBkaXJlY3RNZXJnZUtleXMgPSBbJ3ZhbGlkYXRlU3RhdHVzJ107XG5cbiAgZnVuY3Rpb24gZ2V0TWVyZ2VkVmFsdWUodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAodXRpbHMuaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmIHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRhcmdldCwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHt9LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gc291cmNlLnNsaWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICB1dGlscy5mb3JFYWNoKHZhbHVlRnJvbUNvbmZpZzJLZXlzLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzJbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cywgbWVyZ2VEZWVwUHJvcGVydGllcyk7XG5cbiAgdXRpbHMuZm9yRWFjaChkZWZhdWx0VG9Db25maWcyS2V5cywgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcxW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goZGlyZWN0TWVyZ2VLZXlzLCBmdW5jdGlvbiBtZXJnZShwcm9wKSB7XG4gICAgaWYgKHByb3AgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmIChwcm9wIGluIGNvbmZpZzEpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYXhpb3NLZXlzID0gdmFsdWVGcm9tQ29uZmlnMktleXNcbiAgICAuY29uY2F0KG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzKVxuICAgIC5jb25jYXQoZGVmYXVsdFRvQ29uZmlnMktleXMpXG4gICAgLmNvbmNhdChkaXJlY3RNZXJnZUtleXMpO1xuXG4gIHZhciBvdGhlcktleXMgPSBPYmplY3RcbiAgICAua2V5cyhjb25maWcxKVxuICAgIC5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpXG4gICAgLmZpbHRlcihmdW5jdGlvbiBmaWx0ZXJBeGlvc0tleXMoa2V5KSB7XG4gICAgICByZXR1cm4gYXhpb3NLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChvdGhlcktleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcbiAgbWF4Qm9keUxlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcilcbiAgICAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gIGlmICh0b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpO1xuICByZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiLyohXG4gKiBKYXZhU2NyaXB0IENvb2tpZSB2Mi4yLjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qcy1jb29raWUvanMtY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTUgS2xhdXMgSGFydGwgJiBGYWduZXIgQnJhY2tcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG5cdHZhciByZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXI7XG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdFx0cmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyID0gdHJ1ZTtcblx0fVxuXHRpZiAoIXJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlcikge1xuXHRcdHZhciBPbGRDb29raWVzID0gd2luZG93LkNvb2tpZXM7XG5cdFx0dmFyIGFwaSA9IHdpbmRvdy5Db29raWVzID0gZmFjdG9yeSgpO1xuXHRcdGFwaS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0d2luZG93LkNvb2tpZXMgPSBPbGRDb29raWVzO1xuXHRcdFx0cmV0dXJuIGFwaTtcblx0XHR9O1xuXHR9XG59KGZ1bmN0aW9uICgpIHtcblx0ZnVuY3Rpb24gZXh0ZW5kICgpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0cmVzdWx0W2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWNvZGUgKHMpIHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC8oJVswLTlBLVpdezJ9KSsvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlcikge1xuXHRcdGZ1bmN0aW9uIGFwaSgpIHt9XG5cblx0XHRmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUsIGF0dHJpYnV0ZXMpIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YXR0cmlidXRlcyA9IGV4dGVuZCh7XG5cdFx0XHRcdHBhdGg6ICcvJ1xuXHRcdFx0fSwgYXBpLmRlZmF1bHRzLCBhdHRyaWJ1dGVzKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhdHRyaWJ1dGVzLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkgKiAxICsgYXR0cmlidXRlcy5leHBpcmVzICogODY0ZSs1KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2UncmUgdXNpbmcgXCJleHBpcmVzXCIgYmVjYXVzZSBcIm1heC1hZ2VcIiBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBhdHRyaWJ1dGVzLmV4cGlyZXMgPyBhdHRyaWJ1dGVzLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXHRcdFx0XHRpZiAoL15bXFx7XFxbXS8udGVzdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cblx0XHRcdHZhbHVlID0gY29udmVydGVyLndyaXRlID9cblx0XHRcdFx0Y29udmVydGVyLndyaXRlKHZhbHVlLCBrZXkpIDpcblx0XHRcdFx0ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8M0F8M0N8M0V8M0R8MkZ8M0Z8NDB8NUJ8NUR8NUV8NjB8N0J8N0R8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cblx0XHRcdGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSlcblx0XHRcdFx0LnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcblx0XHRcdFx0LnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSk7XG5cblx0XHRcdHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcblx0XHRcdGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cdFx0XHRcdGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG5cdFx0XHRcdC8vIC4uLlxuXHRcdFx0XHQvLyAzLiAgSWYgdGhlIHJlbWFpbmluZyB1bnBhcnNlZC1hdHRyaWJ1dGVzIGNvbnRhaW5zIGEgJXgzQiAoXCI7XCIpXG5cdFx0XHRcdC8vICAgICBjaGFyYWN0ZXI6XG5cdFx0XHRcdC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG5cdFx0XHRcdC8vIG5vdCBpbmNsdWRpbmcsIHRoZSBmaXJzdCAleDNCIChcIjtcIikgY2hhcmFjdGVyLlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChkb2N1bWVudC5jb29raWUgPSBrZXkgKyAnPScgKyB2YWx1ZSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0IChrZXksIGpzb24pIHtcblx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGphciA9IHt9O1xuXHRcdFx0Ly8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuXHRcdFx0Ly8gaW4gY2FzZSB0aGVyZSBhcmUgbm8gY29va2llcyBhdCBhbGwuXG5cdFx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuXHRcdFx0dmFyIGkgPSAwO1xuXG5cdFx0XHRmb3IgKDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0XHR2YXIgY29va2llID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG5cdFx0XHRcdGlmICghanNvbiAmJiBjb29raWUuY2hhckF0KDApID09PSAnXCInKSB7XG5cdFx0XHRcdFx0Y29va2llID0gY29va2llLnNsaWNlKDEsIC0xKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFyIG5hbWUgPSBkZWNvZGUocGFydHNbMF0pO1xuXHRcdFx0XHRcdGNvb2tpZSA9IChjb252ZXJ0ZXIucmVhZCB8fCBjb252ZXJ0ZXIpKGNvb2tpZSwgbmFtZSkgfHxcblx0XHRcdFx0XHRcdGRlY29kZShjb29raWUpO1xuXG5cdFx0XHRcdFx0aWYgKGpzb24pIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGNvb2tpZSA9IEpTT04ucGFyc2UoY29va2llKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHt9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0amFyW25hbWVdID0gY29va2llO1xuXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gbmFtZSkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ga2V5ID8gamFyW2tleV0gOiBqYXI7XG5cdFx0fVxuXG5cdFx0YXBpLnNldCA9IHNldDtcblx0XHRhcGkuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIGZhbHNlIC8qIHJlYWQgYXMgcmF3ICovKTtcblx0XHR9O1xuXHRcdGFwaS5nZXRKU09OID0gZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cmV0dXJuIGdldChrZXksIHRydWUgLyogcmVhZCBhcyBqc29uICovKTtcblx0XHR9O1xuXHRcdGFwaS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRzZXQoa2V5LCAnJywgZXh0ZW5kKGF0dHJpYnV0ZXMsIHtcblx0XHRcdFx0ZXhwaXJlczogLTFcblx0XHRcdH0pKTtcblx0XHR9O1xuXG5cdFx0YXBpLmRlZmF1bHRzID0ge307XG5cblx0XHRhcGkud2l0aENvbnZlcnRlciA9IGluaXQ7XG5cblx0XHRyZXR1cm4gYXBpO1xuXHR9XG5cblx0cmV0dXJuIGluaXQoZnVuY3Rpb24gKCkge30pO1xufSkpO1xuIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1bnNhZmVMaWZlY3ljbGVzUG9seWZpbGwgZnJvbSAncmMtdXRpbC9lcy91bnNhZmVMaWZlY3ljbGVzUG9seWZpbGwnO1xuaW1wb3J0IHsgdG9BcnJheUNoaWxkcmVuLCBtZXJnZUNoaWxkcmVuLCBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleSwgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5LCBpc1NhbWVDaGlsZHJlbiB9IGZyb20gJy4vQ2hpbGRyZW5VdGlscyc7XG5pbXBvcnQgQW5pbWF0ZUNoaWxkIGZyb20gJy4vQW5pbWF0ZUNoaWxkJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciBkZWZhdWx0S2V5ID0gJ3JjX2FuaW1hdGVfJyArIERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgaWYgKCFjaGlsZHJlbi5rZXkpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAga2V5OiBkZWZhdWx0S2V5XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIEFuaW1hdGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQW5pbWF0ZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbmltYXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZSkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzID0ge307XG4gICAgX3RoaXMua2V5c1RvRW50ZXIgPSBbXTtcbiAgICBfdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSlcbiAgICB9O1xuXG4gICAgX3RoaXMuY2hpbGRyZW5SZWZzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiAhIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBfdGhpczIucGVyZm9ybUFwcGVhcihjaGlsZC5rZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLm5leHRQcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMobmV4dFByb3BzKSk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgLy8gZXhjbHVzaXZlIG5lZWRzIGltbWVkaWF0ZSByZXNwb25zZVxuICAgICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzMy5zdG9wKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIHNob3dQcm9wID0gcHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cztcbiAgICAgIC8vIGxhc3QgcHJvcHMgY2hpbGRyZW4gaWYgZXhjbHVzaXZlXG4gICAgICB2YXIgY3VycmVudENoaWxkcmVuID0gcHJvcHMuZXhjbHVzaXZlID8gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSkgOiB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgLy8gaW4gY2FzZSBkZXN0cm95IGluIHNob3dQcm9wIG1vZGVcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VycmVudENoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZC5rZXkpO1xuICAgICAgICAgIHZhciBuZXdDaGlsZCA9IHZvaWQgMDtcbiAgICAgICAgICBpZiAoKCFuZXh0Q2hpbGQgfHwgIW5leHRDaGlsZC5wcm9wc1tzaG93UHJvcF0pICYmIGN1cnJlbnRDaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KG5leHRDaGlsZCB8fCBjdXJyZW50Q2hpbGQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2hvd1Byb3AsIHRydWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5leHRDaGlsZCkge1xuICAgICAgICAgIGlmICghbmV4dENoaWxkIHx8ICFmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGQua2V5KSkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDaGlsZHJlbiA9IG1lcmdlQ2hpbGRyZW4oY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHJlbmRlciB0byBhdm9pZCB1cGRhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW5cbiAgICAgIH0pO1xuXG4gICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzUHJldiA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICAgIGlmIChoYXNQcmV2KSB7XG4gICAgICAgICAgICB2YXIgc2hvd0luTm93ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTm93ICYmIHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNQcmV2KSB7XG4gICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5O1xuICAgICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNOZXh0ID0gY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwga2V5KTtcbiAgICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzTmV4dCkge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5leHQgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgICAgICAgaWYgKCFzaG93SW5OZXh0ICYmIHNob3dJbk5vdykge1xuICAgICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTm93KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzTmV4dCkge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICBrZXlzVG9FbnRlci5mb3JFYWNoKHRoaXMucGVyZm9ybUVudGVyKTtcbiAgICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKHRoaXMucGVyZm9ybUxlYXZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbGlkQ2hpbGRCeUtleScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSB7XG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIHJldHVybiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aoa2V5KSB7XG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5jaGlsZHJlblJlZnNba2V5XTtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMubmV4dFByb3BzID0gcHJvcHM7XG4gICAgICB2YXIgc3RhdGVDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgaWYgKHN0YXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4gPSBzdGF0ZUNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNoaWxkLmtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNldCBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEFuaW1hdGVDaGlsZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY2hpbGRyZW5SZWZzW2NoaWxkLmtleV0gPSBub2RlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhbmltYXRpb246IHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogcHJvcHMudHJhbnNpdGlvbkFwcGVhcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBwcm9wcy50cmFuc2l0aW9uTGVhdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIENvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gcHJvcHM7XG4gICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHBhc3NlZFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGVcbiAgICAgICAgICB9LCBwcm9wcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgIHBhc3NlZFByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW5bMF0gfHwgbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQW5pbWF0ZS5pc0FuaW1hdGUgPSB0cnVlO1xuQW5pbWF0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuaW1hdGlvbjoge30sXG4gIGNvbXBvbmVudDogJ3NwYW4nLFxuICBjb21wb25lbnRQcm9wczoge30sXG4gIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcbiAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlLFxuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgb25FbmQ6IG5vb3AsXG4gIG9uRW50ZXI6IG5vb3AsXG4gIG9uTGVhdmU6IG5vb3AsXG4gIG9uQXBwZWFyOiBub29wXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2VudGVyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEFwcGVhcihfdGhpczUuaGFuZGxlRG9uZUFkZGluZy5iaW5kKF90aGlzNSwga2V5LCAnYXBwZWFyJykpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVBZGRpbmcgPSBmdW5jdGlvbiAoa2V5LCB0eXBlKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuICAgIGRlbGV0ZSBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgIC8vIGlmIHVwZGF0ZSBvbiBleGNsdXNpdmUgbW9kZSwgc2tpcCBjaGVja1xuICAgIGlmIChwcm9wcy5leGNsdXNpdmUgJiYgcHJvcHMgIT09IF90aGlzNS5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpO1xuICAgIGlmICghX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgLy8gZXhjbHVzaXZlIHdpbGwgbm90IG5lZWQgdGhpc1xuICAgICAgX3RoaXM1LnBlcmZvcm1MZWF2ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FwcGVhcicpIHtcbiAgICAgIGlmIChhbmltVXRpbC5hbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICBwcm9wcy5vbkFwcGVhcihrZXkpO1xuICAgICAgICBwcm9wcy5vbkVuZChrZXksIHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYW5pbVV0aWwuYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgcHJvcHMub25FbnRlcihrZXkpO1xuICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxMZWF2ZShfdGhpczUuaGFuZGxlRG9uZUxlYXZpbmcuYmluZChfdGhpczUsIGtleSkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICAvLyBpbiBjYXNlIHN0YXRlIGNoYW5nZSBpcyB0b28gZmFzdFxuICAgIGlmIChfdGhpczUuaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpKSB7XG4gICAgICBfdGhpczUucGVyZm9ybUVudGVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIGlmIChhbmltVXRpbC5hbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpKSB7XG4gICAgICAgICAgcHJvcHMub25MZWF2ZShrZXkpO1xuICAgICAgICAgIHByb3BzLm9uRW5kKGtleSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKCFpc1NhbWVDaGlsZHJlbihfdGhpczUuc3RhdGUuY2hpbGRyZW4sIGN1cnJlbnRDaGlsZHJlbiwgcHJvcHMuc2hvd1Byb3ApKSB7XG4gICAgICAgIF90aGlzNS5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW46IGN1cnJlbnRDaGlsZHJlblxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW5kKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsKEFuaW1hdGUpOyIsInZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjc3NBbmltYXRlLCB7IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vY3NzLWFuaW1hdGlvbic7XG5pbXBvcnQgYW5pbVV0aWwgZnJvbSAnLi91dGlsL2FuaW1hdGUnO1xuXG52YXIgdHJhbnNpdGlvbk1hcCA9IHtcbiAgZW50ZXI6ICd0cmFuc2l0aW9uRW50ZXInLFxuICBhcHBlYXI6ICd0cmFuc2l0aW9uQXBwZWFyJyxcbiAgbGVhdmU6ICd0cmFuc2l0aW9uTGVhdmUnXG59O1xuXG52YXIgQW5pbWF0ZUNoaWxkID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFuaW1hdGVDaGlsZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQW5pbWF0ZUNoaWxkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBbmltYXRlQ2hpbGQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbmltYXRlQ2hpbGQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBbmltYXRlQ2hpbGQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBbmltYXRlQ2hpbGQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxFbnRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxFbnRlcihkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNFbnRlclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2VudGVyJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEFwcGVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxBcHBlYXIoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzQXBwZWFyU3VwcG9ydGVkKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbignYXBwZWFyJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbExlYXZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbExlYXZlKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0xlYXZlU3VwcG9ydGVkKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFsd2F5cyBzeW5jLCBkbyBub3QgaW50ZXJ1cHQgd2l0aCByZWFjdCBjb21wb25lbnQgbGlmZSBjeWNsZVxuICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIC0+IGFuaW1hdGUgaGlkZGVuIC0+XG4gICAgICAgIC8vIGRpZFVwZGF0ZSAtPiBhbmltYXRlIGxlYXZlIC0+IHVubW91bnQgKGlmIGFuaW1hdGUgaXMgbm9uZSlcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RyYW5zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFuc2l0aW9uKGFuaW1hdGlvblR5cGUsIGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICAgIHZhciBuYW1lSXNPYmogPSB0eXBlb2YgdHJhbnNpdGlvbk5hbWUgPT09ICdvYmplY3QnO1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBfdGhpczIuc3RvcHBlciA9IG51bGw7XG4gICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICB9O1xuICAgICAgaWYgKChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB8fCAhcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKSAmJiB0cmFuc2l0aW9uTmFtZSAmJiBwcm9wc1t0cmFuc2l0aW9uTWFwW2FuaW1hdGlvblR5cGVdXSkge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGVdIDogdHJhbnNpdGlvbk5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuICAgICAgICB2YXIgYWN0aXZlTmFtZSA9IG5hbWUgKyAnLWFjdGl2ZSc7XG4gICAgICAgIGlmIChuYW1lSXNPYmogJiYgdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSkge1xuICAgICAgICAgIGFjdGl2ZU5hbWUgPSB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IGNzc0FuaW1hdGUobm9kZSwge1xuICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVOYW1lXG4gICAgICAgIH0sIGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3BwZXIgPSBwcm9wcy5hbmltYXRpb25bYW5pbWF0aW9uVHlwZV0obm9kZSwgZW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHZhciBzdG9wcGVyID0gdGhpcy5zdG9wcGVyO1xuICAgICAgaWYgKHN0b3BwZXIpIHtcbiAgICAgICAgdGhpcy5zdG9wcGVyID0gbnVsbDtcbiAgICAgICAgc3RvcHBlci5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hdGVDaGlsZDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZUNoaWxkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXkpIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSkge1xuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApIHtcbiAgdmFyIHJldCA9IG51bGw7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgY2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3R3byBjaGlsZCB3aXRoIHNhbWUga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjaGlsZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEhpZGRlbkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciBmb3VuZCA9IDA7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZm91bmQgPSBjaGlsZCAmJiBjaGlsZC5rZXkgPT09IGtleSAmJiAhY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZUNoaWxkcmVuKGMxLCBjMiwgc2hvd1Byb3ApIHtcbiAgdmFyIHNhbWUgPSBjMS5sZW5ndGggPT09IGMyLmxlbmd0aDtcbiAgaWYgKHNhbWUpIHtcbiAgICBjMS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZDIgPSBjMltpbmRleF07XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgIGlmIChjaGlsZCAmJiAhY2hpbGQyIHx8ICFjaGlsZCAmJiBjaGlsZDIpIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQua2V5ICE9PSBjaGlsZDIua2V5KSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3dQcm9wICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSAhPT0gY2hpbGQyLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihwcmV2LCBuZXh0KSB7XG4gIHZhciByZXQgPSBbXTtcblxuICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcbiAgdmFyIG5leHRDaGlsZHJlblBlbmRpbmcgPSB7fTtcbiAgdmFyIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICBwcmV2LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0LCBjaGlsZC5rZXkpKSB7XG4gICAgICBpZiAocGVuZGluZ0NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0gPSBwZW5kaW5nQ2hpbGRyZW47XG4gICAgICAgIHBlbmRpbmdDaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0LmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0Q2hpbGRyZW5QZW5kaW5nLCBjaGlsZC5rZXkpKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KG5leHRDaGlsZHJlblBlbmRpbmdbY2hpbGQua2V5XSk7XG4gICAgfVxuICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgfSk7XG5cbiAgcmV0ID0gcmV0LmNvbmNhdChwZW5kaW5nQ2hpbGRyZW4pO1xuXG4gIHJldHVybiByZXQ7XG59IiwidmFyIHV0aWwgPSB7XG4gIGlzQXBwZWFyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0FwcGVhclN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGlzRW50ZXJTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzRW50ZXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgaXNMZWF2ZVN1cHBvcnRlZDogZnVuY3Rpb24gaXNMZWF2ZVN1cHBvcnRlZChwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy50cmFuc2l0aW9uTGVhdmUgfHwgcHJvcHMuYW5pbWF0aW9uLmxlYXZlO1xuICB9LFxuICBhbGxvd0FwcGVhckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0FwcGVhckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25BcHBlYXIgfHwgcHJvcHMuYW5pbWF0aW9uLmFwcGVhcjtcbiAgfSxcbiAgYWxsb3dFbnRlckNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0VudGVyQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkVudGVyIHx8IHByb3BzLmFuaW1hdGlvbi5lbnRlcjtcbiAgfSxcbiAgYWxsb3dMZWF2ZUNhbGxiYWNrOiBmdW5jdGlvbiBhbGxvd0xlYXZlQ2FsbGJhY2socHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHV0aWw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIHVuc2FmZUxpZmVjeWNsZXNQb2x5ZmlsbCA9IGZ1bmN0aW9uIHVuc2FmZUxpZmVjeWNsZXNQb2x5ZmlsbChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbiAgaWYgKCFwcm90b3R5cGUgfHwgIXByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSBwb2x5ZmlsbCBjbGFzcyBjb21wb25lbnRzJyk7XG4gIH0gLy8gb25seSBoYW5kbGUgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuXG5cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH0gLy8gSW4gUmVhY3QgMTYuOSwgUmVhY3QuUHJvZmlsZXIgd2FzIGludHJvZHVjZWQgdG9nZXRoZXIgd2l0aCBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuICAvLyBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOS8wOC8wOC9yZWFjdC12MTYuOS4wLmh0bWwjcGVyZm9ybWFuY2UtbWVhc3VyZW1lbnRzLXdpdGgtcmVhY3Rwcm9maWxlclxuXG5cbiAgaWYgKCFSZWFjdC5Qcm9maWxlcikge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH0gLy8gSGVyZSBwb2x5ZmlsbCBnZXQgc3RhcnRlZFxuXG5cbiAgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIGRlbGV0ZSBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuc2FmZUxpZmVjeWNsZXNQb2x5ZmlsbDsiLCJpbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZVRyYW5zaXRpb25EdXJhdGlvbiwgZGVmYXVsdFByb3BzIH0gZnJvbSAnLi9jb21tb24nO1xudmFyIGdyYWRpZW50U2VlZCA9IDA7XG5cbmZ1bmN0aW9uIHN0cmlwUGVyY2VudFRvTnVtYmVyKHBlcmNlbnQpIHtcbiAgcmV0dXJuICtwZXJjZW50LnJlcGxhY2UoJyUnLCAnJyk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoc3ltQXJyYXkpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc3ltQXJyYXkpID8gc3ltQXJyYXkgOiBbc3ltQXJyYXldO1xufVxuXG5mdW5jdGlvbiBnZXRQYXRoU3R5bGVzKG9mZnNldCwgcGVyY2VudCwgc3Ryb2tlQ29sb3IsIHN0cm9rZVdpZHRoKSB7XG4gIHZhciBnYXBEZWdyZWUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IDA7XG4gIHZhciBnYXBQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA1ID8gYXJndW1lbnRzWzVdIDogdW5kZWZpbmVkO1xuICB2YXIgcmFkaXVzID0gNTAgLSBzdHJva2VXaWR0aCAvIDI7XG4gIHZhciBiZWdpblBvc2l0aW9uWCA9IDA7XG4gIHZhciBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gIHZhciBlbmRQb3NpdGlvblggPSAwO1xuICB2YXIgZW5kUG9zaXRpb25ZID0gLTIgKiByYWRpdXM7XG5cbiAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgZW5kUG9zaXRpb25YID0gMiAqIHJhZGl1cztcbiAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgZW5kUG9zaXRpb25YID0gLTIgKiByYWRpdXM7XG4gICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICBlbmRQb3NpdGlvblkgPSAyICogcmFkaXVzO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICB9XG5cbiAgdmFyIHBhdGhTdHJpbmcgPSBcIk0gNTAsNTAgbSBcIi5jb25jYXQoYmVnaW5Qb3NpdGlvblgsIFwiLFwiKS5jb25jYXQoYmVnaW5Qb3NpdGlvblksIFwiXFxuICAgYSBcIikuY29uY2F0KHJhZGl1cywgXCIsXCIpLmNvbmNhdChyYWRpdXMsIFwiIDAgMSAxIFwiKS5jb25jYXQoZW5kUG9zaXRpb25YLCBcIixcIikuY29uY2F0KC1lbmRQb3NpdGlvblksIFwiXFxuICAgYSBcIikuY29uY2F0KHJhZGl1cywgXCIsXCIpLmNvbmNhdChyYWRpdXMsIFwiIDAgMSAxIFwiKS5jb25jYXQoLWVuZFBvc2l0aW9uWCwgXCIsXCIpLmNvbmNhdChlbmRQb3NpdGlvblkpO1xuICB2YXIgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gIHZhciBwYXRoU3R5bGUgPSB7XG4gICAgc3Ryb2tlOiBzdHJva2VDb2xvcixcbiAgICBzdHJva2VEYXNoYXJyYXk6IFwiXCIuY29uY2F0KHBlcmNlbnQgLyAxMDAgKiAobGVuIC0gZ2FwRGVncmVlKSwgXCJweCBcIikuY29uY2F0KGxlbiwgXCJweFwiKSxcbiAgICBzdHJva2VEYXNob2Zmc2V0OiBcIi1cIi5jb25jYXQoZ2FwRGVncmVlIC8gMiArIG9mZnNldCAvIDEwMCAqIChsZW4gLSBnYXBEZWdyZWUpLCBcInB4XCIpLFxuICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnXG4gIH07XG4gIHJldHVybiB7XG4gICAgcGF0aFN0cmluZzogcGF0aFN0cmluZyxcbiAgICBwYXRoU3R5bGU6IHBhdGhTdHlsZVxuICB9O1xufVxuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gQ2lyY2xlKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgc3Ryb2tlV2lkdGggPSBfcmVmLnN0cm9rZVdpZHRoLFxuICAgICAgdHJhaWxXaWR0aCA9IF9yZWYudHJhaWxXaWR0aCxcbiAgICAgIGdhcERlZ3JlZSA9IF9yZWYuZ2FwRGVncmVlLFxuICAgICAgZ2FwUG9zaXRpb24gPSBfcmVmLmdhcFBvc2l0aW9uLFxuICAgICAgdHJhaWxDb2xvciA9IF9yZWYudHJhaWxDb2xvcixcbiAgICAgIHN0cm9rZUxpbmVjYXAgPSBfcmVmLnN0cm9rZUxpbmVjYXAsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0cm9rZUNvbG9yID0gX3JlZi5zdHJva2VDb2xvcixcbiAgICAgIHBlcmNlbnQgPSBfcmVmLnBlcmNlbnQsXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wicHJlZml4Q2xzXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJ0cmFpbFdpZHRoXCIsIFwiZ2FwRGVncmVlXCIsIFwiZ2FwUG9zaXRpb25cIiwgXCJ0cmFpbENvbG9yXCIsIFwic3Ryb2tlTGluZWNhcFwiLCBcInN0eWxlXCIsIFwiY2xhc3NOYW1lXCIsIFwic3Ryb2tlQ29sb3JcIiwgXCJwZXJjZW50XCJdKTtcblxuICB2YXIgZ3JhZGllbnRJZCA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIGdyYWRpZW50U2VlZCArPSAxO1xuICAgIHJldHVybiBncmFkaWVudFNlZWQ7XG4gIH0sIFtdKTtcblxuICB2YXIgX2dldFBhdGhTdHlsZXMgPSBnZXRQYXRoU3R5bGVzKDAsIDEwMCwgdHJhaWxDb2xvciwgc3Ryb2tlV2lkdGgsIGdhcERlZ3JlZSwgZ2FwUG9zaXRpb24pLFxuICAgICAgcGF0aFN0cmluZyA9IF9nZXRQYXRoU3R5bGVzLnBhdGhTdHJpbmcsXG4gICAgICBwYXRoU3R5bGUgPSBfZ2V0UGF0aFN0eWxlcy5wYXRoU3R5bGU7XG5cbiAgdmFyIHBlcmNlbnRMaXN0ID0gdG9BcnJheShwZXJjZW50KTtcbiAgdmFyIHN0cm9rZUNvbG9yTGlzdCA9IHRvQXJyYXkoc3Ryb2tlQ29sb3IpO1xuICB2YXIgZ3JhZGllbnQgPSBzdHJva2VDb2xvckxpc3QuZmluZChmdW5jdGlvbiAoY29sb3IpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbG9yKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIH0pO1xuXG4gIHZhciBfdXNlVHJhbnNpdGlvbkR1cmF0aW8gPSB1c2VUcmFuc2l0aW9uRHVyYXRpb24ocGVyY2VudExpc3QpLFxuICAgICAgX3VzZVRyYW5zaXRpb25EdXJhdGlvMiA9IF9zbGljZWRUb0FycmF5KF91c2VUcmFuc2l0aW9uRHVyYXRpbywgMSksXG4gICAgICBwYXRocyA9IF91c2VUcmFuc2l0aW9uRHVyYXRpbzJbMF07XG5cbiAgdmFyIGdldFN0b2tlTGlzdCA9IGZ1bmN0aW9uIGdldFN0b2tlTGlzdCgpIHtcbiAgICB2YXIgc3RhY2tQdGcgPSAwO1xuICAgIHJldHVybiBwZXJjZW50TGlzdC5tYXAoZnVuY3Rpb24gKHB0ZywgaW5kZXgpIHtcbiAgICAgIHZhciBjb2xvciA9IHN0cm9rZUNvbG9yTGlzdFtpbmRleF0gfHwgc3Ryb2tlQ29sb3JMaXN0W3N0cm9rZUNvbG9yTGlzdC5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBzdHJva2UgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY29sb3IpID09PSAnW29iamVjdCBPYmplY3RdJyA/IFwidXJsKCNcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncmFkaWVudC1cIikuY29uY2F0KGdyYWRpZW50SWQsIFwiKVwiKSA6ICcnO1xuICAgICAgdmFyIHBhdGhTdHlsZXMgPSBnZXRQYXRoU3R5bGVzKHN0YWNrUHRnLCBwdGcsIGNvbG9yLCBzdHJva2VXaWR0aCwgZ2FwRGVncmVlLCBnYXBQb3NpdGlvbik7XG4gICAgICBzdGFja1B0ZyArPSBwdGc7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2lyY2xlLXBhdGhcIiksXG4gICAgICAgIGQ6IHBhdGhTdHlsZXMucGF0aFN0cmluZyxcbiAgICAgICAgc3Ryb2tlOiBzdHJva2UsXG4gICAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICAgICAgb3BhY2l0eTogcHRnID09PSAwID8gMCA6IDEsXG4gICAgICAgIGZpbGxPcGFjaXR5OiBcIjBcIixcbiAgICAgICAgc3R5bGU6IHBhdGhTdHlsZXMucGF0aFN0eWxlLFxuICAgICAgICByZWY6IHBhdGhzW2luZGV4XVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2lyY2xlXCIpLCBjbGFzc05hbWUpLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEwMCAxMDBcIixcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgcmVzdFByb3BzKSwgZ3JhZGllbnQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmVhckdyYWRpZW50XCIsIHtcbiAgICBpZDogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncmFkaWVudC1cIikuY29uY2F0KGdyYWRpZW50SWQpLFxuICAgIHgxOiBcIjEwMCVcIixcbiAgICB5MTogXCIwJVwiLFxuICAgIHgyOiBcIjAlXCIsXG4gICAgeTI6IFwiMCVcIlxuICB9LCBPYmplY3Qua2V5cyhncmFkaWVudCkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBzdHJpcFBlcmNlbnRUb051bWJlcihhKSAtIHN0cmlwUGVyY2VudFRvTnVtYmVyKGIpO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSwgaW5kZXgpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN0b3BcIiwge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIG9mZnNldDoga2V5LFxuICAgICAgc3RvcENvbG9yOiBncmFkaWVudFtrZXldXG4gICAgfSk7XG4gIH0pKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2lyY2xlLXRyYWlsXCIpLFxuICAgIGQ6IHBhdGhTdHJpbmcsXG4gICAgc3Ryb2tlOiB0cmFpbENvbG9yLFxuICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlV2lkdGg6IHRyYWlsV2lkdGggfHwgc3Ryb2tlV2lkdGgsXG4gICAgZmlsbE9wYWNpdHk6IFwiMFwiLFxuICAgIHN0eWxlOiBwYXRoU3R5bGVcbiAgfSksIGdldFN0b2tlTGlzdCgpLnJldmVyc2UoKSk7XG59O1xuXG5DaXJjbGUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQ2lyY2xlLmRpc3BsYXlOYW1lID0gJ0NpcmNsZSc7XG5leHBvcnQgZGVmYXVsdCBDaXJjbGU7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uRHVyYXRpb24sIGRlZmF1bHRQcm9wcyB9IGZyb20gJy4vY29tbW9uJztcblxudmFyIExpbmUgPSBmdW5jdGlvbiBMaW5lKF9yZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgcGVyY2VudCA9IF9yZWYucGVyY2VudCxcbiAgICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgc3Ryb2tlQ29sb3IgPSBfcmVmLnN0cm9rZUNvbG9yLFxuICAgICAgc3Ryb2tlTGluZWNhcCA9IF9yZWYuc3Ryb2tlTGluZWNhcCxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIHRyYWlsQ29sb3IgPSBfcmVmLnRyYWlsQ29sb3IsXG4gICAgICB0cmFpbFdpZHRoID0gX3JlZi50cmFpbFdpZHRoLFxuICAgICAgdHJhbnNpdGlvbiA9IF9yZWYudHJhbnNpdGlvbixcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJwZXJjZW50XCIsIFwicHJlZml4Q2xzXCIsIFwic3Ryb2tlQ29sb3JcIiwgXCJzdHJva2VMaW5lY2FwXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJzdHlsZVwiLCBcInRyYWlsQ29sb3JcIiwgXCJ0cmFpbFdpZHRoXCIsIFwidHJhbnNpdGlvblwiXSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGRlbGV0ZSByZXN0UHJvcHMuZ2FwUG9zaXRpb247XG4gIHZhciBwZXJjZW50TGlzdCA9IEFycmF5LmlzQXJyYXkocGVyY2VudCkgPyBwZXJjZW50IDogW3BlcmNlbnRdO1xuICB2YXIgc3Ryb2tlQ29sb3JMaXN0ID0gQXJyYXkuaXNBcnJheShzdHJva2VDb2xvcikgPyBzdHJva2VDb2xvciA6IFtzdHJva2VDb2xvcl07XG5cbiAgdmFyIF91c2VUcmFuc2l0aW9uRHVyYXRpbyA9IHVzZVRyYW5zaXRpb25EdXJhdGlvbihwZXJjZW50TGlzdCksXG4gICAgICBfdXNlVHJhbnNpdGlvbkR1cmF0aW8yID0gX3NsaWNlZFRvQXJyYXkoX3VzZVRyYW5zaXRpb25EdXJhdGlvLCAxKSxcbiAgICAgIHBhdGhzID0gX3VzZVRyYW5zaXRpb25EdXJhdGlvMlswXTtcblxuICB2YXIgY2VudGVyID0gc3Ryb2tlV2lkdGggLyAyO1xuICB2YXIgcmlnaHQgPSAxMDAgLSBzdHJva2VXaWR0aCAvIDI7XG4gIHZhciBwYXRoU3RyaW5nID0gXCJNIFwiLmNvbmNhdChzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gY2VudGVyIDogMCwgXCIsXCIpLmNvbmNhdChjZW50ZXIsIFwiXFxuICAgICAgICAgTCBcIikuY29uY2F0KHN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyByaWdodCA6IDEwMCwgXCIsXCIpLmNvbmNhdChjZW50ZXIpO1xuICB2YXIgdmlld0JveFN0cmluZyA9IFwiMCAwIDEwMCBcIi5jb25jYXQoc3Ryb2tlV2lkdGgpO1xuICB2YXIgc3RhY2tQdGcgPSAwO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saW5lXCIpLCBjbGFzc05hbWUpLFxuICAgIHZpZXdCb3g6IHZpZXdCb3hTdHJpbmcsXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJub25lXCIsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIHJlc3RQcm9wcyksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGluZS10cmFpbFwiKSxcbiAgICBkOiBwYXRoU3RyaW5nLFxuICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgc3Ryb2tlOiB0cmFpbENvbG9yLFxuICAgIHN0cm9rZVdpZHRoOiB0cmFpbFdpZHRoIHx8IHN0cm9rZVdpZHRoLFxuICAgIGZpbGxPcGFjaXR5OiBcIjBcIlxuICB9KSwgcGVyY2VudExpc3QubWFwKGZ1bmN0aW9uIChwdGcsIGluZGV4KSB7XG4gICAgdmFyIHBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogXCJcIi5jb25jYXQocHRnLCBcInB4LCAxMDBweFwiKSxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IFwiLVwiLmNvbmNhdChzdGFja1B0ZywgXCJweFwiKSxcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24gfHwgJ3N0cm9rZS1kYXNob2Zmc2V0IDAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIDAuM3MgbGluZWFyJ1xuICAgIH07XG4gICAgdmFyIGNvbG9yID0gc3Ryb2tlQ29sb3JMaXN0W2luZGV4XSB8fCBzdHJva2VDb2xvckxpc3Rbc3Ryb2tlQ29sb3JMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIHN0YWNrUHRnICs9IHB0ZztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saW5lLXBhdGhcIiksXG4gICAgICBkOiBwYXRoU3RyaW5nLFxuICAgICAgc3Ryb2tlTGluZWNhcDogc3Ryb2tlTGluZWNhcCxcbiAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICBmaWxsT3BhY2l0eTogXCIwXCIsXG4gICAgICByZWY6IHBhdGhzW2luZGV4XSxcbiAgICAgIHN0eWxlOiBwYXRoU3R5bGVcbiAgICB9KTtcbiAgfSkpO1xufTtcblxuTGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5MaW5lLmRpc3BsYXlOYW1lID0gJ0xpbmUnO1xuZXhwb3J0IGRlZmF1bHQgTGluZTsiLCJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCB2YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBwZXJjZW50OiAwLFxuICBwcmVmaXhDbHM6ICdyYy1wcm9ncmVzcycsXG4gIHN0cm9rZUNvbG9yOiAnIzJkYjdmNScsXG4gIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gIHN0cm9rZVdpZHRoOiAxLFxuICBzdHlsZToge30sXG4gIHRyYWlsQ29sb3I6ICcjRDlEOUQ5JyxcbiAgdHJhaWxXaWR0aDogMVxufTtcbmV4cG9ydCB2YXIgdXNlVHJhbnNpdGlvbkR1cmF0aW9uID0gZnVuY3Rpb24gdXNlVHJhbnNpdGlvbkR1cmF0aW9uKHBlcmNlbnRMaXN0KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICB2YXIgcGF0aHMgPSBwZXJjZW50TGlzdC5tYXAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB1c2VSZWYoKTtcbiAgfSk7XG4gIHZhciBwcmV2VGltZVN0YW1wID0gdXNlUmVmKG51bGwpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMocGF0aHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHBhdGggPSBwYXRoc1trZXldLmN1cnJlbnQ7XG5cbiAgICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgdmFyIHBhdGhTdHlsZSA9IHBhdGguc3R5bGU7XG4gICAgICBwYXRoU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJy4zcywgLjNzLCAuM3MsIC4wNnMnO1xuXG4gICAgICBpZiAocHJldlRpbWVTdGFtcC5jdXJyZW50ICYmIG5vdyAtIHByZXZUaW1lU3RhbXAuY3VycmVudCA8IDEwMCkge1xuICAgICAgICBwYXRoU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzLCAwcyc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodXBkYXRlZCkge1xuICAgICAgcHJldlRpbWVTdGFtcC5jdXJyZW50ID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW3BhdGhzXTtcbn07IiwiaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcbmltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xuZXhwb3J0IHsgTGluZSwgQ2lyY2xlIH07XG5leHBvcnQgZGVmYXVsdCB7XG4gIExpbmU6IExpbmUsXG4gIENpcmNsZTogQ2lyY2xlXG59OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG4vKiBlc2xpbnQgcmVhY3Qvbm8taXMtbW91bnRlZDowLHJlYWN0L3NvcnQtY29tcDowLHJlYWN0L3Byb3AtdHlwZXM6MCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHBpY2tBdHRycyBmcm9tIFwicmMtdXRpbC9lcy9waWNrQXR0cnNcIjtcbmltcG9ydCBkZWZhdWx0UmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IGdldFVpZCBmcm9tICcuL3VpZCc7XG5pbXBvcnQgYXR0ckFjY2VwdCBmcm9tICcuL2F0dHItYWNjZXB0JztcbmltcG9ydCB0cmF2ZXJzZUZpbGVUcmVlIGZyb20gJy4vdHJhdmVyc2VGaWxlVHJlZSc7XG5cbnZhciBBamF4VXBsb2FkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFqYXhVcGxvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBamF4VXBsb2FkZXIpO1xuXG4gIGZ1bmN0aW9uIEFqYXhVcGxvYWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheFVwbG9hZGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB1aWQ6IGdldFVpZCgpXG4gICAgfTtcbiAgICBfdGhpcy5yZXFzID0ge307XG5cbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZmlsZXMgPSBlLnRhcmdldC5maWxlcztcblxuICAgICAgX3RoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuXG4gICAgICBfdGhpcy5yZXNldCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBlbCA9IF90aGlzLmZpbGVJbnB1dDtcblxuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgb25DbGljayA9IF90aGlzJHByb3BzLm9uQ2xpY2s7XG5cbiAgICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LmZvY3VzKCk7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKS5ibHVyKCk7XG4gICAgICB9XG5cbiAgICAgIGVsLmNsaWNrKCk7XG5cbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgX3RoaXMub25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25GaWxlRHJvcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgbXVsdGlwbGUgPSBfdGhpcy5wcm9wcy5tdWx0aXBsZTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXJlY3RvcnkpIHtcbiAgICAgICAgdHJhdmVyc2VGaWxlVHJlZShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmRhdGFUcmFuc2Zlci5pdGVtcyksIF90aGlzLnVwbG9hZEZpbGVzLCBmdW5jdGlvbiAoX2ZpbGUpIHtcbiAgICAgICAgICByZXR1cm4gYXR0ckFjY2VwdChfZmlsZSwgX3RoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZmlsZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmRhdGFUcmFuc2Zlci5maWxlcykuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIGF0dHJBY2NlcHQoZmlsZSwgX3RoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG11bHRpcGxlID09PSBmYWxzZSkge1xuICAgICAgICAgIGZpbGVzID0gZmlsZXMuc2xpY2UoMCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnVwbG9hZEZpbGVzID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICB2YXIgcG9zdEZpbGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZmlsZXMpO1xuICAgICAgcG9zdEZpbGVzLm1hcChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgZmlsZS51aWQgPSBnZXRVaWQoKTtcbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIF90aGlzLnVwbG9hZChmaWxlLCBwb3N0RmlsZXMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVGaWxlSW5wdXQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMuZmlsZUlucHV0ID0gbm9kZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFqYXhVcGxvYWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hYm9ydCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGxvYWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBsb2FkKGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKCFwcm9wcy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgICAgLy8gYWx3YXlzIGFzeW5jIGluIGNhc2UgdXNlIHJlYWN0IHN0YXRlIHRvIGtlZXAgZmlsZUxpc3RcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnBvc3QoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiZWZvcmUgPSBwcm9wcy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xuXG4gICAgICBpZiAoYmVmb3JlICYmIHR5cGVvZiBiZWZvcmUgIT09ICdib29sZWFuJyAmJiBiZWZvcmUudGhlbikge1xuICAgICAgICBiZWZvcmUudGhlbihmdW5jdGlvbiAocHJvY2Vzc2VkRmlsZSkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWRGaWxlVHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzZWRGaWxlKTtcblxuICAgICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICAgIF90aGlzMi5wb3N0KHByb2Nlc3NlZEZpbGUpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyLnBvc3QoZmlsZSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGJlZm9yZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnBvc3QoZmlsZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwb3N0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QoZmlsZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBvblN0YXJ0ID0gcHJvcHMub25TdGFydCxcbiAgICAgICAgICBvblByb2dyZXNzID0gcHJvcHMub25Qcm9ncmVzcyxcbiAgICAgICAgICBfcHJvcHMkdHJhbnNmb3JtRmlsZSA9IHByb3BzLnRyYW5zZm9ybUZpbGUsXG4gICAgICAgICAgdHJhbnNmb3JtRmlsZSA9IF9wcm9wcyR0cmFuc2Zvcm1GaWxlID09PSB2b2lkIDAgPyBmdW5jdGlvbiAob3JpZ2luRmlsZSkge1xuICAgICAgICByZXR1cm4gb3JpZ2luRmlsZTtcbiAgICAgIH0gOiBfcHJvcHMkdHJhbnNmb3JtRmlsZTtcbiAgICAgIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb247XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhY3Rpb24gPSBhY3Rpb24oZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzb2x2ZShhY3Rpb24pO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciB1aWQgPSBmaWxlLnVpZDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBwcm9wcy5jdXN0b21SZXF1ZXN0IHx8IGRlZmF1bHRSZXF1ZXN0O1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gUHJvbWlzZS5yZXNvbHZlKHRyYW5zZm9ybUZpbGUoZmlsZSkpLnRoZW4oZnVuY3Rpb24gKHRyYW5zZm9ybWVkRmlsZSkge1xuICAgICAgICAgIHZhciBkYXRhID0gcHJvcHMuZGF0YTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEodHJhbnNmb3JtZWRGaWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3RyYW5zZm9ybWVkRmlsZSwgZGF0YV0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9KTtcbiAgICAgICAgdHJhbnNmb3JtLnRoZW4oZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtZWRGaWxlID0gX3JlZjJbMF0sXG4gICAgICAgICAgICAgIGRhdGEgPSBfcmVmMlsxXTtcblxuICAgICAgICAgIHZhciByZXF1ZXN0T3B0aW9uID0ge1xuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBmaWxlbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBmaWxlOiB0cmFuc2Zvcm1lZEZpbGUsXG4gICAgICAgICAgICBoZWFkZXJzOiBwcm9wcy5oZWFkZXJzLFxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBwcm9wcy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICBtZXRob2Q6IHByb3BzLm1ldGhvZCB8fCAncG9zdCcsXG4gICAgICAgICAgICBvblByb2dyZXNzOiBvblByb2dyZXNzID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgb25Qcm9ncmVzcyhlLCBmaWxlKTtcbiAgICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiBvblN1Y2Nlc3MocmV0LCB4aHIpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy5yZXFzW3VpZF07XG4gICAgICAgICAgICAgIHByb3BzLm9uU3VjY2VzcyhyZXQsIGZpbGUsIHhocik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlcnIsIHJldCkge1xuICAgICAgICAgICAgICBkZWxldGUgX3RoaXMzLnJlcXNbdWlkXTtcbiAgICAgICAgICAgICAgcHJvcHMub25FcnJvcihlcnIsIHJldCwgZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBvblN0YXJ0KGZpbGUpO1xuICAgICAgICAgIF90aGlzMy5yZXFzW3VpZF0gPSByZXF1ZXN0KHJlcXVlc3RPcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1aWQ6IGdldFVpZCgpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYWJvcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoZmlsZSkge1xuICAgICAgdmFyIHJlcXMgPSB0aGlzLnJlcXM7XG5cbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIHZhciB1aWQgPSBmaWxlLnVpZCA/IGZpbGUudWlkIDogZmlsZTtcblxuICAgICAgICBpZiAocmVxc1t1aWRdICYmIHJlcXNbdWlkXS5hYm9ydCkge1xuICAgICAgICAgIHJlcXNbdWlkXS5hYm9ydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHJlcXNbdWlkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlcXMpLmZvckVhY2goZnVuY3Rpb24gKHVpZCkge1xuICAgICAgICAgIGlmIChyZXFzW3VpZF0gJiYgcmVxc1t1aWRdLmFib3J0KSB7XG4gICAgICAgICAgICByZXFzW3VpZF0uYWJvcnQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWxldGUgcmVxc1t1aWRdO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgVGFnID0gX3RoaXMkcHJvcHMyLmNvbXBvbmVudCxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wczIuaWQsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczIuc3R5bGUsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczIubXVsdGlwbGUsXG4gICAgICAgICAgYWNjZXB0ID0gX3RoaXMkcHJvcHMyLmFjY2VwdCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBkaXJlY3RvcnkgPSBfdGhpcyRwcm9wczIuZGlyZWN0b3J5LFxuICAgICAgICAgIG9wZW5GaWxlRGlhbG9nT25DbGljayA9IF90aGlzJHByb3BzMi5vcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gX3RoaXMkcHJvcHMyLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfdGhpcyRwcm9wczIub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJjb21wb25lbnRcIiwgXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImlkXCIsIFwic3R5bGVcIiwgXCJtdWx0aXBsZVwiLCBcImFjY2VwdFwiLCBcImNoaWxkcmVuXCIsIFwiZGlyZWN0b3J5XCIsIFwib3BlbkZpbGVEaWFsb2dPbkNsaWNrXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCJdKTtcblxuICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBjbGFzc05hbWUpLCBfY2xhc3NOYW1lcykpOyAvLyBiZWNhdXNlIGlucHV0IGRvbid0IGhhdmUgZGlyZWN0b3J5L3dlYmtpdGRpcmVjdG9yeSB0eXBlIGRlY2xhcmF0aW9uXG5cbiAgICAgIHZhciBkaXJQcm9wcyA9IGRpcmVjdG9yeSA/IHtcbiAgICAgICAgZGlyZWN0b3J5OiAnZGlyZWN0b3J5JyxcbiAgICAgICAgd2Via2l0ZGlyZWN0b3J5OiAnd2Via2l0ZGlyZWN0b3J5J1xuICAgICAgfSA6IHt9O1xuICAgICAgdmFyIGV2ZW50cyA9IGRpc2FibGVkID8ge30gOiB7XG4gICAgICAgIG9uQ2xpY2s6IG9wZW5GaWxlRGlhbG9nT25DbGljayA/IHRoaXMub25DbGljayA6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbktleURvd246IG9wZW5GaWxlRGlhbG9nT25DbGljayA/IHRoaXMub25LZXlEb3duIDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uTW91c2VFbnRlcjogb25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IG9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Ecm9wOiB0aGlzLm9uRmlsZURyb3AsXG4gICAgICAgIG9uRHJhZ092ZXI6IHRoaXMub25GaWxlRHJvcCxcbiAgICAgICAgdGFiSW5kZXg6ICcwJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xzLFxuICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgT2JqZWN0LmFzc2lnbih7fSwgcGlja0F0dHJzKG90aGVyUHJvcHMsIHtcbiAgICAgICAgYXJpYTogdHJ1ZSxcbiAgICAgICAgZGF0YTogdHJ1ZVxuICAgICAgfSksIHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVGaWxlSW5wdXQsXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBrZXk6IHRoaXMuc3RhdGUudWlkLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdFxuICAgICAgfSwgZGlyUHJvcHMsIHtcbiAgICAgICAgbXVsdGlwbGU6IG11bHRpcGxlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgfSkpLCBjaGlsZHJlbik7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFqYXhVcGxvYWRlcjtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQWpheFVwbG9hZGVyOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOjAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWpheFVwbG9hZCBmcm9tICcuL0FqYXhVcGxvYWRlcic7XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxudmFyIFVwbG9hZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVXBsb2FkLCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFVwbG9hZCk7XG5cbiAgZnVuY3Rpb24gVXBsb2FkKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVcGxvYWQpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIF90aGlzLnNhdmVVcGxvYWRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy51cGxvYWRlciA9IG5vZGU7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhVcGxvYWQsIFt7XG4gICAga2V5OiBcImFib3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICAgIHRoaXMudXBsb2FkZXIuYWJvcnQoZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBamF4VXBsb2FkLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgIHJlZjogdGhpcy5zYXZlVXBsb2FkZXJcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVXBsb2FkO1xufShDb21wb25lbnQpO1xuXG5VcGxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgcHJlZml4Q2xzOiAncmMtdXBsb2FkJyxcbiAgZGF0YToge30sXG4gIGhlYWRlcnM6IHt9LFxuICBuYW1lOiAnZmlsZScsXG4gIG11bHRpcGFydDogZmFsc2UsXG4gIG9uU3RhcnQ6IGVtcHR5LFxuICBvbkVycm9yOiBlbXB0eSxcbiAgb25TdWNjZXNzOiBlbXB0eSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBiZWZvcmVVcGxvYWQ6IG51bGwsXG4gIGN1c3RvbVJlcXVlc3Q6IG51bGwsXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gIG9wZW5GaWxlRGlhbG9nT25DbGljazogdHJ1ZVxufTtcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiLCJmdW5jdGlvbiBlbmRzV2l0aChzdHIsIHN1ZmZpeCkge1xuICByZXR1cm4gc3RyLmluZGV4T2Yoc3VmZml4LCBzdHIubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGZpbGUsIGFjY2VwdGVkRmlsZXMpIHtcbiAgaWYgKGZpbGUgJiYgYWNjZXB0ZWRGaWxlcykge1xuICAgIHZhciBhY2NlcHRlZEZpbGVzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjY2VwdGVkRmlsZXMpID8gYWNjZXB0ZWRGaWxlcyA6IGFjY2VwdGVkRmlsZXMuc3BsaXQoJywnKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLm5hbWUgfHwgJyc7XG4gICAgdmFyIG1pbWVUeXBlID0gZmlsZS50eXBlIHx8ICcnO1xuICAgIHZhciBiYXNlTWltZVR5cGUgPSBtaW1lVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XG5cbiAgICAgIGlmICh2YWxpZFR5cGUuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGVuZHNXaXRoKGZpbGVOYW1lLnRvTG93ZXJDYXNlKCksIHZhbGlkVHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtaW1lVHlwZSA9PT0gdmFsaWRUeXBlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59KTsiLCJpbXBvcnQgVXBsb2FkIGZyb20gJy4vVXBsb2FkJztcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiLCJmdW5jdGlvbiBnZXRFcnJvcihvcHRpb24sIHhocikge1xuICB2YXIgbXNnID0gXCJjYW5ub3QgXCIuY29uY2F0KG9wdGlvbi5tZXRob2QsIFwiIFwiKS5jb25jYXQob3B0aW9uLmFjdGlvbiwgXCIgXCIpLmNvbmNhdCh4aHIuc3RhdHVzLCBcIidcIik7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBvcHRpb24ubWV0aG9kO1xuICBlcnIudXJsID0gb3B0aW9uLmFjdGlvbjtcbiAgcmV0dXJuIGVycjtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9keSh4aHIpIHtcbiAgdmFyIHRleHQgPSB4aHIucmVzcG9uc2VUZXh0IHx8IHhoci5yZXNwb25zZTtcblxuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGxvYWQob3B0aW9uKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgaWYgKG9wdGlvbi5vblByb2dyZXNzICYmIHhoci51cGxvYWQpIHtcbiAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyhlKSB7XG4gICAgICBpZiAoZS50b3RhbCA+IDApIHtcbiAgICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgICAgfVxuXG4gICAgICBvcHRpb24ub25Qcm9ncmVzcyhlKTtcbiAgICB9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG5cbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9uLmRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uLmRhdGFba2V5XTsgLy8gc3VwcG9ydCBrZXktdmFsdWUgYXJyYXkgZGF0YVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIC8vIHsgbGlzdDogWyAxMSwgMjIgXSB9XG4gICAgICAgICAgLy8gZm9ybURhdGEuYXBwZW5kKCdsaXN0W10nLCAxMSk7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiXCIuY29uY2F0KGtleSwgXCJbXVwiKSwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIG9wdGlvbi5kYXRhW2tleV0pO1xuICAgIH0pO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXG5cbiAgaWYgKG9wdGlvbi5maWxlIGluc3RhbmNlb2YgQmxvYikge1xuICAgIGZvcm1EYXRhLmFwcGVuZChvcHRpb24uZmlsZW5hbWUsIG9wdGlvbi5maWxlLCBvcHRpb24uZmlsZS5uYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JtRGF0YS5hcHBlbmQob3B0aW9uLmZpbGVuYW1lLCBvcHRpb24uZmlsZSk7XG4gIH1cblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIGVycm9yKGUpIHtcbiAgICBvcHRpb24ub25FcnJvcihlKTtcbiAgfTtcblxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgIC8vIGFsbG93IHN1Y2Nlc3Mgd2hlbiAyeHggc3RhdHVzXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXBsb2FkL2lzc3Vlcy8zNFxuICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLm9uRXJyb3IoZ2V0RXJyb3Iob3B0aW9uLCB4aHIpLCBnZXRCb2R5KHhocikpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb24ub25TdWNjZXNzKGdldEJvZHkoeGhyKSwgeGhyKTtcbiAgfTtcblxuICB4aHIub3BlbihvcHRpb24ubWV0aG9kLCBvcHRpb24uYWN0aW9uLCB0cnVlKTsgLy8gSGFzIHRvIGJlIGFmdGVyIGAub3BlbigpYC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnlvL2Ryb3B6b25lL2lzc3Vlcy8xNzlcblxuICBpZiAob3B0aW9uLndpdGhDcmVkZW50aWFscyAmJiAnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBoZWFkZXJzID0gb3B0aW9uLmhlYWRlcnMgfHwge307IC8vIHdoZW4gc2V0IGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IG51bGwgLCBjYW4gY2xvc2UgZGVmYXVsdCBYSFIgaGVhZGVyXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3VwbG9hZC9pc3N1ZXMvMzNcblxuICBpZiAoaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGgpIHtcbiAgICBpZiAoaGVhZGVyc1toXSAhPT0gbnVsbCkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaCwgaGVhZGVyc1toXSk7XG4gICAgfVxuICB9KTtcbiAgeGhyLnNlbmQoZm9ybURhdGEpO1xuICByZXR1cm4ge1xuICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbiAgfTtcbn0iLCJmdW5jdGlvbiBsb29wRmlsZXMoaXRlbSwgY2FsbGJhY2spIHtcbiAgdmFyIGRpclJlYWRlciA9IGl0ZW0uY3JlYXRlUmVhZGVyKCk7XG4gIHZhciBmaWxlTGlzdCA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKCkge1xuICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgdmFyIGVudHJ5TGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbnRyaWVzKTtcbiAgICAgIGZpbGVMaXN0ID0gZmlsZUxpc3QuY29uY2F0KGVudHJ5TGlzdCk7IC8vIENoZWNrIGlmIGFsbCB0aGUgZmlsZSBoYXMgYmVlbiB2aWV3ZWRcblxuICAgICAgdmFyIGlzRmluaXNoZWQgPSAhZW50cnlMaXN0Lmxlbmd0aDtcblxuICAgICAgaWYgKGlzRmluaXNoZWQpIHtcbiAgICAgICAgY2FsbGJhY2soZmlsZUxpc3QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VxdWVuY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlcXVlbmNlKCk7XG59XG5cbnZhciB0cmF2ZXJzZUZpbGVUcmVlID0gZnVuY3Rpb24gdHJhdmVyc2VGaWxlVHJlZShmaWxlcywgY2FsbGJhY2ssIGlzQWNjZXB0ZWQpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuICB2YXIgX3RyYXZlcnNlRmlsZVRyZWUgPSBmdW5jdGlvbiBfdHJhdmVyc2VGaWxlVHJlZShpdGVtLCBwYXRoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgaXRlbS5wYXRoID0gcGF0aCB8fCAnJztcblxuICAgIGlmIChpdGVtLmlzRmlsZSkge1xuICAgICAgaXRlbS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIGlmIChpc0FjY2VwdGVkKGZpbGUpKSB7XG4gICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTY0MjZcbiAgICAgICAgICBpZiAoaXRlbS5mdWxsUGF0aCAmJiAhZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGZpbGUsIHtcbiAgICAgICAgICAgICAgd2Via2l0UmVsYXRpdmVQYXRoOiB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gICAgICAgICAgICBmaWxlLndlYmtpdFJlbGF0aXZlUGF0aCA9IGl0ZW0uZnVsbFBhdGgucmVwbGFjZSgvXlxcLy8sICcnKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGZpbGUsIHtcbiAgICAgICAgICAgICAgd2Via2l0UmVsYXRpdmVQYXRoOiB7XG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGxiYWNrKFtmaWxlXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5pc0RpcmVjdG9yeSkge1xuICAgICAgbG9vcEZpbGVzKGl0ZW0sIGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoZW50cnlJdGVtKSB7XG4gICAgICAgICAgX3RyYXZlcnNlRmlsZVRyZWUoZW50cnlJdGVtLCBcIlwiLmNvbmNhdChwYXRoKS5jb25jYXQoaXRlbS5uYW1lLCBcIi9cIikpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgX3RyYXZlcnNlRmlsZVRyZWUoZmlsZS53ZWJraXRHZXRBc0VudHJ5KCkpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRyYXZlcnNlRmlsZVRyZWU7IiwidmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xudmFyIGluZGV4ID0gMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpZCgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIHJldHVybiBcInJjLXVwbG9hZC1cIi5jb25jYXQobm93LCBcIi1cIikuY29uY2F0KCsraW5kZXgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VDb250cm9sbGVkU3RhdGU7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZWRTdGF0ZShkZWZhdWx0U3RhdGVWYWx1ZSwgb3B0aW9uKSB7XG4gIHZhciBfcmVmID0gb3B0aW9uIHx8IHt9LFxuICAgICAgZGVmYXVsdFZhbHVlID0gX3JlZi5kZWZhdWx0VmFsdWUsXG4gICAgICB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBwb3N0U3RhdGUgPSBfcmVmLnBvc3RTdGF0ZTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFN0YXRlVmFsdWUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0U3RhdGVWYWx1ZSgpIDogZGVmYXVsdFN0YXRlVmFsdWU7XG4gIH0pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBpbm5lclZhbHVlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldElubmVyVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBtZXJnZWRWYWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGlubmVyVmFsdWU7XG5cbiAgaWYgKHBvc3RTdGF0ZSkge1xuICAgIG1lcmdlZFZhbHVlID0gcG9zdFN0YXRlKG1lcmdlZFZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2UobmV3VmFsdWUpIHtcbiAgICBzZXRJbm5lclZhbHVlKG5ld1ZhbHVlKTtcblxuICAgIGlmIChtZXJnZWRWYWx1ZSAhPT0gbmV3VmFsdWUgJiYgb25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBtZXJnZWRWYWx1ZSk7XG4gICAgfVxuICB9IC8vIEVmZmVjdCBvZiByZXNldCB2YWx1ZSB0byBgdW5kZWZpbmVkYFxuXG5cbiAgdmFyIGZpcnN0UmVuZGVyUmVmID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChmaXJzdFJlbmRlclJlZi5jdXJyZW50KSB7XG4gICAgICBmaXJzdFJlbmRlclJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldElubmVyVmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBbbWVyZ2VkVmFsdWUsIHRyaWdnZXJDaGFuZ2VdO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcHBlclJhZjtcblxudmFyIHJhZiA9IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICByZXR1cm4gK3NldFRpbWVvdXQoY2FsbGJhY2ssIDE2KTtcbn07XG5cbnZhciBjYWYgPSBmdW5jdGlvbiBjYWYobnVtKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQobnVtKTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cpIHtcbiAgcmFmID0gZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xuXG4gIGNhZiA9IGZ1bmN0aW9uIGNhZihoYW5kbGUpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgcmV0dXJuIHJhZihjYWxsYmFjayk7XG59XG5cbndyYXBwZXJSYWYuY2FuY2VsID0gY2FmOyIsImNvbnN0IHsgZ2V0IH0gPSByZXF1aXJlKFwianMtY29va2llXCIpO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGJhc2VVUkwsIGJhc2ljQXV0aCB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvcFR5cGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vY2F0ZWdvcnlzYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBiYXNpY0F1dGgsXHJcbiAgICAgIENvb2tpZTogXCJKU0VTU0lPTklEPUUyQThCRjI1NzFCQTZCODc1ODAzQkQ1NDVENDNCQkQ2XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9wU3ViVHlwZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS9wcm9wdHlwZXNgLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGJhc2ljQXV0aCxcclxuICAgICAgQ29va2llOiBcIkpTRVNTSU9OSUQ9RTJBOEJGMjU3MUJBNkI4NzU4MDNCRDU0NUQ0M0JCRDZcIixcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgIFwiaHR0cDovL2VjMi0xMy0yMjktMTA5LTIwNC5hcC1zb3V0aGVhc3QtMS5jb21wdXRlLmFtYXpvbmF3cy5jb206ODA4MC9hcG5hL3YxL2NvdW50cnlzXCIsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJhc2ljIFlYQnVZVHBoY0c1aFoyaGhjakV5TXpRPVwiLFxyXG4gICAgICAgIENvb2tpZTogXCJKU0VTU0lPTklEPUUyQThCRjI1NzFCQTZCODc1ODAzQkQ1NDVENDNCQkQ2XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2NpdHlzYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBiYXNpY0F1dGgsXHJcbiAgICAgIENvb2tpZTogXCJKU0VTU0lPTklEPUUyQThCRjI1NzFCQTZCODc1ODAzQkQ1NDVENDNCQkQ2XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbnMgPSBhc3luYyAoY2l0eWlkKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vbG9jYXRpb25zLyR7Y2l0eWlkfWAsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYmFzaWNBdXRoLFxyXG4gICAgICBDb29raWU6IFwiSlNFU1NJT05JRD1FMkE4QkYyNTcxQkE2Qjg3NTgwM0JENTQ1RDQzQkJENlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVuY3kgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVSTH0vY3VycmVuY3lzYCwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBiYXNpY0F1dGgsXHJcbiAgICAgIENvb2tpZTogXCJKU0VTU0lPTklEPUUyQThCRjI1NzFCQTZCODc1ODAzQkQ1NDVENDNCQkQ2XCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcmVhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVUkx9L2FyZWF1bml0c2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYmFzaWNBdXRoLFxyXG4gICAgICBDb29raWU6IFwiSlNFU1NJT05JRD1FMkE4QkYyNTcxQkE2Qjg3NTgwM0JENTQ1RDQzQkJENlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=