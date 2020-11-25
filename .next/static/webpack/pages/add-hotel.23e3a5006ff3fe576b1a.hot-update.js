webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddListing.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddListing.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/switch */ "./node_modules/antd/lib/switch/index.js");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input-number */ "./node_modules/antd/lib/input-number/index.js");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/cascader */ "./node_modules/antd/lib/cascader/index.js");
/* harmony import */ var antd_lib_cascader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tree-select */ "./node_modules/antd/lib/tree-select/index.js");
/* harmony import */ var antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
















var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddListing.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;


function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  var isJPG = file.type === "image/jpeg";

  if (!isJPG) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("You can only upload JPG file!");
  }

  var isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_14___default.a.error("Image must smaller than 2MB!");
  }

  return isJPG && isLt2M;
}

var Addlisting = function Addlisting() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])("default"),
      componentSize = _useState[0],
      setComponentSize = _useState[1];

  var onFormLayoutChange = function onFormLayoutChange(_ref) {
    var size = _ref.size;
    setComponentSize(size);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_13___default.a, {
    message: "PROPERTY TYPE AND LOCATION",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a, {
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
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Form Size",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Button, {
    value: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Sale"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Button, {
    value: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Rent"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Form Size",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Button, {
    value: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Homes"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Button, {
    value: "plots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Plots"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_12___default.a.Button, {
    value: "commercial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Commercial"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Select city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "demo",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Islamabad"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Rawalpindi"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Karachi"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "TreeSelect",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(antd_lib_tree_select__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      lineNumber: 91,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Cascader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(antd_lib_cascader__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
      lineNumber: 107,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "DatePicker",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "InputNumber",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx(antd_lib_switch__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Button"))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_13___default.a, {
    message: "PROPERTY DETAILS",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Property Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Property Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "All inclusive Price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Land Area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Square feet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "1",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "1"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "2"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  }, "3"))))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_11___default.a.Item, {
    label: "Expires After",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "6 Months",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, "6 Months"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option, {
    value: "1 Year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, "1 Year"))), __jsx(antd_lib_upload__WEBPACK_IMPORTED_MODULE_0___default.a, {
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    beforeUpload: beforeUpload,
    onChange: _this.handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, imageUrl ? __jsx("img", {
    src: imageUrl,
    alt: "avatar",
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }) : uploadButton));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2Nzcy1hbmltYXRpb24vZXMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9jc3MtYW5pbWF0aW9uL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRGVsZXRlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9Eb3dubG9hZE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRmlsZVR3b1RvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9QYXBlckNsaXBPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL1BpY3R1cmVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvRGVsZXRlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9Eb3dubG9hZE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvRmlsZVR3b1RvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9QYXBlckNsaXBPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL1BpY3R1cmVUd29Ub25lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0RlbGV0ZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0Rvd25sb2FkT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRmlsZVR3b1RvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGFwZXJDbGlwT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGljdHVyZVR3b1RvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wcm9ncmVzcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wcm9ncmVzcy9MaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcHJvZ3Jlc3MvU3RlcHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9wcm9ncmVzcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Byb2dyZXNzL3Byb2dyZXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcHJvZ3Jlc3MvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi91cGxvYWQvRHJhZ2dlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3VwbG9hZC9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi91cGxvYWQvVXBsb2FkTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3VwbG9hZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3VwbG9hZC91c2VGcmVzaFN0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdXBsb2FkL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlQ2hpbGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0NoaWxkcmVuVXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL3V0aWwvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvQ2lyY2xlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvTGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXByb2dyZXNzL2VzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXByb2dyZXNzL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL0FqYXhVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvYXR0ci1hY2NlcHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy90cmF2ZXJzZUZpbGVUcmVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL3VpZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL3JhZi5qcyJdLCJuYW1lcyI6WyJnZXRCYXNlNjQiLCJpbWciLCJjYWxsYmFjayIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImJlZm9yZVVwbG9hZCIsImZpbGUiLCJpc0pQRyIsInR5cGUiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJBZGRsaXN0aW5nIiwidXNlU3RhdGUiLCJjb21wb25lbnRTaXplIiwic2V0Q29tcG9uZW50U2l6ZSIsIm9uRm9ybUxheW91dENoYW5nZSIsInNwYW4iLCJ0aXRsZSIsInZhbHVlIiwiY2hpbGRyZW4iLCJsYWJlbCIsImhhbmRsZUNoYW5nZSIsImltYWdlVXJsIiwid2lkdGgiLCJ1cGxvYWRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFvQkEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQs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QUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSwrRUFBZ0IsRTs7Ozs7Ozs7Ozs7O0FDaEUvQjtBQUFBO0FBQUE7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0xhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLWhvdGVsLjIzZTNhNTAwNmZmM2ZlNTc2YjFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtLFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxuICBSYWRpbyxcclxuICBTZWxlY3QsXHJcbiAgQ2FzY2FkZXIsXHJcbiAgRGF0ZVBpY2tlcixcclxuICBJbnB1dE51bWJlcixcclxuICBUcmVlU2VsZWN0LFxyXG4gIFN3aXRjaCxcclxuICBBbGVydCxcclxuICBSb3csXHJcbiAgQ29sLFxyXG4gIFVwbG9hZCxcclxuICBJY29uLFxyXG4gIG1lc3NhZ2UsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpO1xyXG4gIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJlZm9yZVVwbG9hZChmaWxlKSB7XHJcbiAgY29uc3QgaXNKUEcgPSBmaWxlLnR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiO1xyXG4gIGlmICghaXNKUEcpIHtcclxuICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRyBmaWxlIVwiKTtcclxuICB9XHJcbiAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyO1xyXG4gIGlmICghaXNMdDJNKSB7XHJcbiAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICB9XHJcbiAgcmV0dXJuIGlzSlBHICYmIGlzTHQyTTtcclxufVxyXG5cclxuY29uc3QgQWRkbGlzdGluZyA9ICgpID0+IHtcclxuICBjb25zdCBbY29tcG9uZW50U2l6ZSwgc2V0Q29tcG9uZW50U2l6ZV0gPSB1c2VTdGF0ZShcImRlZmF1bHRcIik7XHJcblxyXG4gIGNvbnN0IG9uRm9ybUxheW91dENoYW5nZSA9ICh7IHNpemUgfSkgPT4ge1xyXG4gICAgc2V0Q29tcG9uZW50U2l6ZShzaXplKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJQUk9QRVJUWSBUWVBFIEFORCBMT0NBVElPTlwiIHR5cGU9XCJzdWNjZXNzXCIgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtvbkZvcm1MYXlvdXRDaGFuZ2V9XHJcbiAgICAgICAgc2l6ZT17Y29tcG9uZW50U2l6ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGb3JtIFNpemVcIiBuYW1lPVwic2l6ZVwiPlxyXG4gICAgICAgICAgPFJhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwic21hbGxcIj5TYWxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJkZWZhdWx0XCI+UmVudDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZvcm0gU2l6ZVwiIG5hbWU9XCJzaXplXCI+XHJcbiAgICAgICAgICA8UmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9XCJob21lXCI+SG9tZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cInBsb3RzXCI+UGxvdHM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImNvbW1lcmNpYWxcIj5Db21tZXJjaWFsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTZWxlY3QgY2l0eVwiPlxyXG4gICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJkZW1vXCIgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgICAgSXNsYW1hYmFkXHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJkZW1vXCI+UmF3YWxwaW5kaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJkZW1vXCI+S2FyYWNoaTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJMb2NhdGlvblwiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJUcmVlU2VsZWN0XCI+XHJcbiAgICAgICAgICA8VHJlZVNlbGVjdFxyXG4gICAgICAgICAgICB0cmVlRGF0YT17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJsaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJhbWJvb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImJhbWJvb1wiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQ2FzY2FkZXJcIj5cclxuICAgICAgICAgIDxDYXNjYWRlclxyXG4gICAgICAgICAgICBvcHRpb25zPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiemhlamlhbmdcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlpoZWppYW5nXCIsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiaGFuZ3pob3VcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5nemhvdVwiLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiRGF0ZVBpY2tlclwiPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiSW5wdXROdW1iZXJcIj5cclxuICAgICAgICAgIDxJbnB1dE51bWJlciAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTd2l0Y2hcIj5cclxuICAgICAgICAgIDxTd2l0Y2ggLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiQnV0dG9uXCI+XHJcbiAgICAgICAgICA8QnV0dG9uPkJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8QWxlcnQgbWVzc2FnZT1cIlBST1BFUlRZIERFVEFJTFNcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBUaXRsZVwiPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBEZXRhaWxzXCI+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkFsbCBpbmNsdXNpdmUgUHJpY2VcIj5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbGc9ezEyfT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJMYW5kIEFyZWFcIj5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiU3F1YXJlIGZlZXRcIj5cclxuICAgICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIyXCI+MjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjJcIj4zPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkV4cGlyZXMgQWZ0ZXJcIj5cclxuICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCI2IE1vbnRoc1wiIHNlbGVjdGVkPlxyXG4gICAgICAgICAgICA2IE1vbnRoc1xyXG4gICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIxIFllYXJcIj4xIFllYXI8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8VXBsb2FkXHJcbiAgICAgICAgbmFtZT1cImF2YXRhclwiXHJcbiAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImF2YXRhci11cGxvYWRlclwiXHJcbiAgICAgICAgc2hvd1VwbG9hZExpc3Q9e2ZhbHNlfVxyXG4gICAgICAgIGFjdGlvbj1cImh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NlwiXHJcbiAgICAgICAgYmVmb3JlVXBsb2FkPXtiZWZvcmVVcGxvYWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2ltYWdlVXJsID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgdXBsb2FkQnV0dG9uXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9VcGxvYWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkbGlzdGluZztcclxuIiwidmFyIFNUQVJUX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uc3RhcnQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbnN0YXJ0JyxcbiAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvblN0YXJ0JyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uU3RhcnQnLFxuICAgIG1zVHJhbnNpdGlvbjogJ01TVHJhbnNpdGlvblN0YXJ0J1xuICB9LFxuXG4gIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25TdGFydCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25TdGFydCcsXG4gICAgbXNBbmltYXRpb246ICdNU0FuaW1hdGlvblN0YXJ0J1xuICB9XG59O1xuXG52YXIgRU5EX0VWRU5UX05BTUVfTUFQID0ge1xuICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBNb3pUcmFuc2l0aW9uOiAnbW96VHJhbnNpdGlvbkVuZCcsXG4gICAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uRW5kJ1xuICB9LFxuXG4gIGFuaW1hdGlvbmVuZDoge1xuICAgIGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICBNb3pBbmltYXRpb246ICdtb3pBbmltYXRpb25FbmQnLFxuICAgIE9BbmltYXRpb246ICdvQW5pbWF0aW9uRW5kJyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uRW5kJ1xuICB9XG59O1xuXG52YXIgc3RhcnRFdmVudHMgPSBbXTtcbnZhciBlbmRFdmVudHMgPSBbXTtcblxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xuICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciBzdHlsZSA9IHRlc3RFbC5zdHlsZTtcblxuICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uO1xuICAgIGRlbGV0ZSBFTkRfRVZFTlRfTkFNRV9NQVAuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbjtcbiAgfVxuXG4gIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcbiAgICBkZWxldGUgU1RBUlRfRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbnN0YXJ0LnRyYW5zaXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzKEVWRU5UX05BTUVfTUFQLCBldmVudHMpIHtcbiAgICBmb3IgKHZhciBiYXNlRXZlbnROYW1lIGluIEVWRU5UX05BTUVfTUFQKSB7XG4gICAgICBpZiAoRVZFTlRfTkFNRV9NQVAuaGFzT3duUHJvcGVydHkoYmFzZUV2ZW50TmFtZSkpIHtcbiAgICAgICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcbiAgICAgICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XG4gICAgICAgICAgICBldmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhTVEFSVF9FVkVOVF9OQU1FX01BUCwgc3RhcnRFdmVudHMpO1xuICBwcm9jZXNzKEVORF9FVkVOVF9OQU1FX01BUCwgZW5kRXZlbnRzKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGV0ZWN0RXZlbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG52YXIgVHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgLy8gU3RhcnQgZXZlbnRzXG4gIHN0YXJ0RXZlbnRzOiBzdGFydEV2ZW50cyxcblxuICBhZGRTdGFydEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKHN0YXJ0RXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZXZlbnRMaXN0ZW5lciwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXJ0RXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHN0YXJ0RXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgc3RhcnRFdmVudCwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfSk7XG4gIH0sXG5cblxuICAvLyBFbmQgZXZlbnRzXG4gIGVuZEV2ZW50czogZW5kRXZlbnRzLFxuXG4gIGFkZEVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIGFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChlbmRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNpdGlvbkV2ZW50czsiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxudmFyIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gRXZlbnQuZW5kRXZlbnRzLmxlbmd0aCAhPT0gMDtcbnZhciBjYXBpdGFsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsXG4vLyBtcyBpcyBzcGVjaWFsIC4uLi4gIVxuJ21zJ107XG52YXIgcHJlZml4ZXMgPSBbJy13ZWJraXQtJywgJy1tb3otJywgJy1vLScsICdtcy0nLCAnJ107XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICAvLyBvbGQgZmYgbmVlZCBudWxsLCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93L2dldENvbXB1dGVkU3R5bGVcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSwgbnVsbCk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHJldCA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJlZml4ZXNbaV0gKyBuYW1lKTtcbiAgICBpZiAocmV0KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZml4QnJvd3NlckJ5VGltZW91dChub2RlKSB7XG4gIGlmIChpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCkge1xuICAgIHZhciB0cmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICd0cmFuc2l0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIGFuaW1hdGlvbkRlbGF5ID0gcGFyc2VGbG9hdChnZXRTdHlsZVByb3BlcnR5KG5vZGUsICdhbmltYXRpb24tZGVsYXknKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kdXJhdGlvbicpKSB8fCAwO1xuICAgIHZhciB0aW1lID0gTWF0aC5tYXgodHJhbnNpdGlvbkR1cmF0aW9uICsgdHJhbnNpdGlvbkRlbGF5LCBhbmltYXRpb25EdXJhdGlvbiArIGFuaW1hdGlvbkRlbGF5KTtcbiAgICAvLyBzb21ldGltZXMsIGJyb3dzZXIgYnVnXG4gICAgbm9kZS5yY0VuZEFuaW1UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgICAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LCB0aW1lICogMTAwMCArIDIwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKSB7XG4gIGlmIChub2RlLnJjRW5kQW5pbVRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQobm9kZS5yY0VuZEFuaW1UaW1lb3V0KTtcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBudWxsO1xuICB9XG59XG5cbnZhciBjc3NBbmltYXRpb24gPSBmdW5jdGlvbiBjc3NBbmltYXRpb24obm9kZSwgdHJhbnNpdGlvbk5hbWUsIGVuZENhbGxiYWNrKSB7XG4gIHZhciBuYW1lSXNPYmogPSAodHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0cmFuc2l0aW9uTmFtZSkpID09PSAnb2JqZWN0JztcbiAgdmFyIGNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLm5hbWUgOiB0cmFuc2l0aW9uTmFtZTtcbiAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IG5hbWVJc09iaiA/IHRyYW5zaXRpb25OYW1lLmFjdGl2ZSA6IHRyYW5zaXRpb25OYW1lICsgJy1hY3RpdmUnO1xuICB2YXIgZW5kID0gZW5kQ2FsbGJhY2s7XG4gIHZhciBzdGFydCA9IHZvaWQgMDtcbiAgdmFyIGFjdGl2ZSA9IHZvaWQgMDtcblxuICBpZiAoZW5kQ2FsbGJhY2sgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVuZENhbGxiYWNrKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBlbmQgPSBlbmRDYWxsYmFjay5lbmQ7XG4gICAgc3RhcnQgPSBlbmRDYWxsYmFjay5zdGFydDtcbiAgICBhY3RpdmUgPSBlbmRDYWxsYmFjay5hY3RpdmU7XG4gIH1cblxuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKTtcblxuICAgIEV2ZW50LnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIgPSBudWxsO1xuXG4gICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGVuZCBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChlbmQpIHtcbiAgICAgIGVuZCgpO1xuICAgIH1cbiAgfTtcblxuICBFdmVudC5hZGRFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG5cbiAgaWYgKHN0YXJ0KSB7XG4gICAgc3RhcnQoKTtcbiAgfVxuICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIG5vZGUuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpO1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFjdGl2ZSgpO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICB9LCAwKTtcblxuICByZXR1cm4ge1xuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmNzc0FuaW1hdGlvbi5zdHlsZSA9IGZ1bmN0aW9uIChub2RlLCBzdHlsZSwgY2FsbGJhY2spIHtcbiAgaWYgKG5vZGUucmNFbmRMaXN0ZW5lcikge1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICB9XG5cbiAgbm9kZS5yY0VuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub2RlLnJjQW5pbVRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dChub2RlLnJjQW5pbVRpbWVvdXQpO1xuICAgICAgbm9kZS5yY0FuaW1UaW1lb3V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgY2FsbGJhY2sgaXMgdXNlZCBmb3IgaW5mb3JtaW5nIGFuIG93bmVyIG9mXG4gICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBub2RlLnJjQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzIGluIHN0eWxlKSB7XG4gICAgICBpZiAoc3R5bGUuaGFzT3duUHJvcGVydHkocykpIHtcbiAgICAgICAgbm9kZS5zdHlsZVtzXSA9IHN0eWxlW3NdO1xuICAgICAgfVxuICAgIH1cbiAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIGZpeEJyb3dzZXJCeVRpbWVvdXQobm9kZSk7XG4gIH0sIDApO1xufTtcblxuY3NzQW5pbWF0aW9uLnNldFRyYW5zaXRpb24gPSBmdW5jdGlvbiAobm9kZSwgcCwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5ID0gcDtcbiAgdmFyIHYgPSB2YWx1ZTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2ID0gcHJvcGVydHk7XG4gICAgcHJvcGVydHkgPSAnJztcbiAgfVxuICBwcm9wZXJ0eSA9IHByb3BlcnR5IHx8ICcnO1xuICBjYXBpdGFsUHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgbm9kZS5zdHlsZVtwcmVmaXggKyAnVHJhbnNpdGlvbicgKyBwcm9wZXJ0eV0gPSB2O1xuICB9KTtcbn07XG5cbmNzc0FuaW1hdGlvbi5pc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCA9IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG5leHBvcnQgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBjc3NBbmltYXRpb247IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBEZWxldGVPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMzYwIDE4NGgtOGM0LjQgMCA4LTMuNiA4LTh2OGgzMDR2LThjMCA0LjQgMy42IDggOCA4aC04djcyaDcydi04MGMwLTM1LjMtMjguNy02NC02NC02NEgzNTJjLTM1LjMgMC02NCAyOC43LTY0IDY0djgwaDcydi03MnptNTA0IDcySDE2MGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzJjMCA0LjQgMy42IDggOCA4aDYwLjRsMjQuNyA1MjNjMS42IDM0LjEgMjkuOCA2MSA2My45IDYxaDQ1NGMzNC4yIDAgNjIuMy0yNi44IDYzLjktNjFsMjQuNy01MjNIODg4YzQuNCAwIDgtMy42IDgtOHYtMzJjMC0xNy43LTE0LjMtMzItMzItMzJ6TTczMS4zIDg0MEgyOTIuN2wtMjQuMi01MTJoNDg3bC0yNC4yIDUxMnpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImRlbGV0ZVwiLCBcInRoZW1lXCI6IFwib3V0bGluZWRcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRGVsZXRlT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIERvd25sb2FkT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUwNS43IDY2MWE4IDggMCAwMDEyLjYgMGwxMTItMTQxLjdjNC4xLTUuMi40LTEyLjktNi4zLTEyLjloLTc0LjFWMTY4YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYzMzguM0g0MDBjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDExMiAxNDEuOHpNODc4IDYyNmgtNjBjLTQuNCAwLTggMy42LTggOHYxNTRIMjE0VjYzNGMwLTQuNC0zLjYtOC04LThoLTYwYy00LjQgMC04IDMuNi04IDh2MTk4YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDY4NGMxNy43IDAgMzItMTQuMyAzMi0zMlY2MzRjMC00LjQtMy42LTgtOC04elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwiZG93bmxvYWRcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IERvd25sb2FkT3V0bGluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZpbGVUd29Ub25lID0geyBcImljb25cIjogZnVuY3Rpb24gcmVuZGVyKHByaW1hcnlDb2xvciwgc2Vjb25kYXJ5Q29sb3IpIHsgcmV0dXJuIHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNTM0IDM1MlYxMzZIMjMydjc1Mmg1NjBWMzk0SDU3NmE0MiA0MiAwIDAxLTQyLTQyelwiLCBcImZpbGxcIjogc2Vjb25kYXJ5Q29sb3IgfSB9LCB7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTg1NC42IDI4OC42TDYzOS40IDczLjRjLTYtNi0xNC4xLTkuNC0yMi42LTkuNEgxOTJjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjgzMmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg2NDBjMTcuNyAwIDMyLTE0LjMgMzItMzJWMzExLjNjMC04LjUtMy40LTE2LjctOS40LTIyLjd6TTYwMiAxMzcuOEw3OTAuMiAzMjZINjAyVjEzNy44ek03OTIgODg4SDIzMlYxMzZoMzAydjIxNmE0MiA0MiAwIDAwNDIgNDJoMjE2djQ5NHpcIiwgXCJmaWxsXCI6IHByaW1hcnlDb2xvciB9IH1dIH07IH0sIFwibmFtZVwiOiBcImZpbGVcIiwgXCJ0aGVtZVwiOiBcInR3b3RvbmVcIiB9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmlsZVR3b1RvbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBhcGVyQ2xpcE91dGxpbmVkID0geyBcImljb25cIjogeyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk03NzkuMyAxOTYuNmMtOTQuMi05NC4yLTI0Ny42LTk0LjItMzQxLjcgMGwtMjYxIDI2MC44Yy0xLjcgMS43LTIuNiA0LTIuNiA2LjRzLjkgNC43IDIuNiA2LjRsMzYuOSAzNi45YTkgOSAwIDAwMTIuNyAwbDI2MS0yNjAuOGMzMi40LTMyLjQgNzUuNS01MC4yIDEyMS4zLTUwLjJzODguOSAxNy44IDEyMS4yIDUwLjJjMzIuNCAzMi40IDUwLjIgNzUuNSA1MC4yIDEyMS4yIDAgNDUuOC0xNy44IDg4LjgtNTAuMiAxMjEuMmwtMjY2IDI2NS45LTQzLjEgNDMuMWMtNDAuMyA0MC4zLTEwNS44IDQwLjMtMTQ2LjEgMC0xOS41LTE5LjUtMzAuMi00NS40LTMwLjItNzNzMTAuNy01My41IDMwLjItNzNsMjYzLjktMjYzLjhjNi43LTYuNiAxNS41LTEwLjMgMjQuOS0xMC4zaC4xYzkuNCAwIDE4LjEgMy43IDI0LjcgMTAuMyA2LjcgNi43IDEwLjMgMTUuNSAxMC4zIDI0LjkgMCA5LjMtMy43IDE4LjEtMTAuMyAyNC43TDM3Mi40IDY1M2MtMS43IDEuNy0yLjYgNC0yLjYgNi40cy45IDQuNyAyLjYgNi40bDM2LjkgMzYuOWE5IDkgMCAwMDEyLjcgMGwyMTUuNi0yMTUuNmMxOS45LTE5LjkgMzAuOC00Ni4zIDMwLjgtNzQuNHMtMTEtNTQuNi0zMC44LTc0LjRjLTQxLjEtNDEuMS0xMDcuOS00MS0xNDkgMEw0NjMgMzY0IDIyNC44IDYwMi4xQTE3Mi4yMiAxNzIuMjIgMCAwMDE3NCA3MjQuOGMwIDQ2LjMgMTguMSA4OS44IDUwLjggMTIyLjUgMzMuOSAzMy44IDc4LjMgNTAuNyAxMjIuNyA1MC43IDQ0LjQgMCA4OC44LTE2LjkgMTIyLjYtNTAuN2wzMDkuMi0zMDlDODI0LjggNDkyLjcgODUwIDQzMiA4NTAgMzY3LjVjLjEtNjQuNi0yNS4xLTEyNS4zLTcwLjctMTcwLjl6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJwYXBlci1jbGlwXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBQYXBlckNsaXBPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgUGljdHVyZVR3b1RvbmUgPSB7IFwiaWNvblwiOiBmdW5jdGlvbiByZW5kZXIocHJpbWFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvcikgeyByZXR1cm4geyBcInRhZ1wiOiBcInN2Z1wiLCBcImF0dHJzXCI6IHsgXCJ2aWV3Qm94XCI6IFwiNjQgNjQgODk2IDg5NlwiLCBcImZvY3VzYWJsZVwiOiBcImZhbHNlXCIgfSwgXCJjaGlsZHJlblwiOiBbeyBcInRhZ1wiOiBcInBhdGhcIiwgXCJhdHRyc1wiOiB7IFwiZFwiOiBcIk05MjggMTYwSDk2Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2NDBjMCAxNy43IDE0LjMgMzIgMzIgMzJoODMyYzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE5MmMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTQwIDYzMkgxMzZ2LTM5LjlsMTM4LjUtMTY0LjMgMTUwLjEgMTc4TDY1OC4xIDQ4OSA4ODggNzYxLjZWNzkyem0wLTEyOS44TDY2NC4yIDM5Ni44Yy0zLjItMy44LTktMy44LTEyLjIgMEw0MjQuNiA2NjYuNGwtMTQ0LTE3MC43Yy0zLjItMy44LTktMy44LTEyLjIgMEwxMzYgNjUyLjdWMjMyaDc1MnY0MzAuMnpcIiwgXCJmaWxsXCI6IHByaW1hcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNNDI0LjYgNzY1LjhsLTE1MC4xLTE3OEwxMzYgNzUyLjFWNzkyaDc1MnYtMzAuNEw2NTguMSA0ODl6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMTM2IDY1Mi43bDEzMi40LTE1N2MzLjItMy44IDktMy44IDEyLjIgMGwxNDQgMTcwLjdMNjUyIDM5Ni44YzMuMi0zLjggOS0zLjggMTIuMiAwTDg4OCA2NjIuMlYyMzJIMTM2djQyMC43ek0zMDQgMjgwYTg4IDg4IDAgMTEwIDE3NiA4OCA4OCAwIDAxMC0xNzZ6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMjc2IDM2OGEyOCAyOCAwIDEwNTYgMCAyOCAyOCAwIDEwLTU2IDB6XCIsIFwiZmlsbFwiOiBzZWNvbmRhcnlDb2xvciB9IH0sIHsgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNMzA0IDQ1NmE4OCA4OCAwIDEwMC0xNzYgODggODggMCAwMDAgMTc2em0wLTExNmMxNS41IDAgMjggMTIuNSAyOCAyOHMtMTIuNSAyOC0yOCAyOC0yOC0xMi41LTI4LTI4IDEyLjUtMjggMjgtMjh6XCIsIFwiZmlsbFwiOiBwcmltYXJ5Q29sb3IgfSB9XSB9OyB9LCBcIm5hbWVcIjogXCJwaWN0dXJlXCIsIFwidGhlbWVcIjogXCJ0d290b25lXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBpY3R1cmVUd29Ub25lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9EZWxldGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvRGVsZXRlT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfRGVsZXRlT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfRG93bmxvYWRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvRG93bmxvYWRPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9Eb3dubG9hZE91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0ZpbGVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9GaWxlVHdvVG9uZScpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9GaWxlVHdvVG9uZTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9QYXBlckNsaXBPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvUGFwZXJDbGlwT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfUGFwZXJDbGlwT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfUGljdHVyZVR3b1RvbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoJy4vbGliL2ljb25zL1BpY3R1cmVUd29Ub25lJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX1BpY3R1cmVUd29Ub25lO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRGVsZXRlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9EZWxldGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfQW50ZEljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb21wb25lbnRzL0FudGRJY29uXCIpKTtcblxuLy8gR0VORVJBVEUgQlkgLi9zY3JpcHRzL2dlbmVyYXRlLnRzXG4vLyBET04gTk9UIEVESVQgSVQgTUFOVUFMTFlcbnZhciBEZWxldGVPdXRsaW5lZCA9IGZ1bmN0aW9uIERlbGV0ZU91dGxpbmVkKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9BbnRkSWNvbi5kZWZhdWx0LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGljb246IF9EZWxldGVPdXRsaW5lZC5kZWZhdWx0XG4gIH0pKTtcbn07XG5cbkRlbGV0ZU91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0RlbGV0ZU91dGxpbmVkJztcblxudmFyIF9kZWZhdWx0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoRGVsZXRlT3V0bGluZWQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRG93bmxvYWRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0Rvd25sb2FkT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRG93bmxvYWRPdXRsaW5lZCA9IGZ1bmN0aW9uIERvd25sb2FkT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0Rvd25sb2FkT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5Eb3dubG9hZE91dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0Rvd25sb2FkT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihEb3dubG9hZE91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0ZpbGVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRmlsZVR3b1RvbmVcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRmlsZVR3b1RvbmUgPSBmdW5jdGlvbiBGaWxlVHdvVG9uZShwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfRmlsZVR3b1RvbmUuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5GaWxlVHdvVG9uZS5kaXNwbGF5TmFtZSA9ICdGaWxlVHdvVG9uZSc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEZpbGVUd29Ub25lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1BhcGVyQ2xpcE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vUGFwZXJDbGlwT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgUGFwZXJDbGlwT3V0bGluZWQgPSBmdW5jdGlvbiBQYXBlckNsaXBPdXRsaW5lZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfUGFwZXJDbGlwT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5QYXBlckNsaXBPdXRsaW5lZC5kaXNwbGF5TmFtZSA9ICdQYXBlckNsaXBPdXRsaW5lZCc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFBhcGVyQ2xpcE91dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1BpY3R1cmVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vUGljdHVyZVR3b1RvbmVcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgUGljdHVyZVR3b1RvbmUgPSBmdW5jdGlvbiBQaWN0dXJlVHdvVG9uZShwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQW50ZEljb24uZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpY29uOiBfUGljdHVyZVR3b1RvbmUuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5QaWN0dXJlVHdvVG9uZS5kaXNwbGF5TmFtZSA9ICdQaWN0dXJlVHdvVG9uZSc7XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFBpY3R1cmVUd29Ub25lKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNQcm9ncmVzcyA9IHJlcXVpcmUoXCJyYy1wcm9ncmVzc1wiKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY29sb3JzXCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5mdW5jdGlvbiBnZXRQZXJjZW50YWdlKF9yZWYpIHtcbiAgdmFyIHBlcmNlbnQgPSBfcmVmLnBlcmNlbnQsXG4gICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgc3VjY2Vzc1BlcmNlbnQgPSBfcmVmLnN1Y2Nlc3NQZXJjZW50O1xuICB2YXIgcHRnID0gKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShwZXJjZW50KTtcbiAgdmFyIHJlYWxTdWNjZXNzUGVyY2VudCA9ICgwLCBfdXRpbHMuZ2V0U3VjY2Vzc1BlcmNlbnQpKHtcbiAgICBzdWNjZXNzOiBzdWNjZXNzLFxuICAgIHN1Y2Nlc3NQZXJjZW50OiBzdWNjZXNzUGVyY2VudFxuICB9KTtcblxuICBpZiAoIXJlYWxTdWNjZXNzUGVyY2VudCkge1xuICAgIHJldHVybiBwdGc7XG4gIH1cblxuICByZXR1cm4gWygwLCBfdXRpbHMudmFsaWRQcm9ncmVzcykocmVhbFN1Y2Nlc3NQZXJjZW50KSwgKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShwdGcgLSAoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHJlYWxTdWNjZXNzUGVyY2VudCkpXTtcbn1cblxuZnVuY3Rpb24gZ2V0U3Ryb2tlQ29sb3IoX3JlZjIpIHtcbiAgdmFyIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxuICAgICAgc3Ryb2tlQ29sb3IgPSBfcmVmMi5zdHJva2VDb2xvcixcbiAgICAgIHN1Y2Nlc3NQZXJjZW50ID0gX3JlZjIuc3VjY2Vzc1BlcmNlbnQ7XG4gIHZhciBjb2xvciA9IHN0cm9rZUNvbG9yIHx8IG51bGw7XG4gIHZhciByZWFsU3VjY2Vzc1BlcmNlbnQgPSAoMCwgX3V0aWxzLmdldFN1Y2Nlc3NQZXJjZW50KSh7XG4gICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICBzdWNjZXNzUGVyY2VudDogc3VjY2Vzc1BlcmNlbnRcbiAgfSk7XG5cbiAgaWYgKCFyZWFsU3VjY2Vzc1BlcmNlbnQpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICByZXR1cm4gW19jb2xvcnMucHJlc2V0UHJpbWFyeUNvbG9ycy5ncmVlbiwgY29sb3JdO1xufVxuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gQ2lyY2xlKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICAgIHRyYWlsQ29sb3IgPSBwcm9wcy50cmFpbENvbG9yLFxuICAgICAgc3Ryb2tlTGluZWNhcCA9IHByb3BzLnN0cm9rZUxpbmVjYXAsXG4gICAgICBnYXBQb3NpdGlvbiA9IHByb3BzLmdhcFBvc2l0aW9uLFxuICAgICAgZ2FwRGVncmVlID0gcHJvcHMuZ2FwRGVncmVlLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICB2YXIgY2lyY2xlU2l6ZSA9IHdpZHRoIHx8IDEyMDtcbiAgdmFyIGNpcmNsZVN0eWxlID0ge1xuICAgIHdpZHRoOiBjaXJjbGVTaXplLFxuICAgIGhlaWdodDogY2lyY2xlU2l6ZSxcbiAgICBmb250U2l6ZTogY2lyY2xlU2l6ZSAqIDAuMTUgKyA2XG4gIH07XG4gIHZhciBjaXJjbGVXaWR0aCA9IHN0cm9rZVdpZHRoIHx8IDY7XG4gIHZhciBnYXBQb3MgPSBnYXBQb3NpdGlvbiB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyAmJiAnYm90dG9tJyB8fCAndG9wJztcblxuICB2YXIgZ2V0R2FwRGVncmVlID0gZnVuY3Rpb24gZ2V0R2FwRGVncmVlKCkge1xuICAgIC8vIFN1cHBvcnQgZ2FwRGVnID0gMCB3aGVuIHR5cGUgPSAnZGFzaGJvYXJkJ1xuICAgIGlmIChnYXBEZWdyZWUgfHwgZ2FwRGVncmVlID09PSAwKSB7XG4gICAgICByZXR1cm4gZ2FwRGVncmVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgcmV0dXJuIDc1O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07IC8vIHVzaW5nIGNsYXNzTmFtZSB0byBzdHlsZSBzdHJva2UgY29sb3JcblxuXG4gIHZhciBzdHJva2VDb2xvciA9IGdldFN0cm9rZUNvbG9yKHByb3BzKTtcbiAgdmFyIGlzR3JhZGllbnQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3Ryb2tlQ29sb3IpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZS1ncmFkaWVudFwiKSwgaXNHcmFkaWVudCkpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICBzdHlsZTogY2lyY2xlU3R5bGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjUHJvZ3Jlc3MuQ2lyY2xlLCB7XG4gICAgcGVyY2VudDogZ2V0UGVyY2VudGFnZShwcm9wcyksXG4gICAgc3Ryb2tlV2lkdGg6IGNpcmNsZVdpZHRoLFxuICAgIHRyYWlsV2lkdGg6IGNpcmNsZVdpZHRoLFxuICAgIHN0cm9rZUNvbG9yOiBzdHJva2VDb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgIHRyYWlsQ29sb3I6IHRyYWlsQ29sb3IsXG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZ2FwRGVncmVlOiBnZXRHYXBEZWdyZWUoKSxcbiAgICBnYXBQb3NpdGlvbjogZ2FwUG9zXG4gIH0pLCBjaGlsZHJlbik7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBDaXJjbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5oYW5kbGVHcmFkaWVudCA9IGV4cG9ydHMuc29ydEdyYWRpZW50ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vY29sb3JzXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG4vKipcbiAqIHtcbiAqICAgJzAlJzogJyNhZmMxNjMnLFxuICogICAnNzUlJzogJyMwMDk5MDAnLFxuICogICAnNTAlJzogJ2dyZWVuJywgICAgID09PT0+ICAgICAnI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsICMwMENDMDAgNTAlLCAjMDA5OTAwIDc1JSwgI2ZmZmZmZiAxMDAlJ1xuICogICAnMjUlJzogJyM2NkZGMDAnLFxuICogICAnMTAwJSc6ICcjZmZmZmZmJ1xuICogfVxuICovXG52YXIgc29ydEdyYWRpZW50ID0gZnVuY3Rpb24gc29ydEdyYWRpZW50KGdyYWRpZW50cykge1xuICB2YXIgdGVtcEFyciA9IFtdO1xuICBPYmplY3Qua2V5cyhncmFkaWVudHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBmb3JtYXR0ZWRLZXkgPSBwYXJzZUZsb2F0KGtleS5yZXBsYWNlKC8lL2csICcnKSk7XG5cbiAgICBpZiAoIWlzTmFOKGZvcm1hdHRlZEtleSkpIHtcbiAgICAgIHRlbXBBcnIucHVzaCh7XG4gICAgICAgIGtleTogZm9ybWF0dGVkS2V5LFxuICAgICAgICB2YWx1ZTogZ3JhZGllbnRzW2tleV1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5rZXkgLSBiLmtleTtcbiAgfSk7XG4gIHJldHVybiB0ZW1wQXJyLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdCh2YWx1ZSwgXCIgXCIpLmNvbmNhdChrZXksIFwiJVwiKTtcbiAgfSkuam9pbignLCAnKTtcbn07XG4vKipcbiAqIHtcbiAqICAgJzAlJzogJyNhZmMxNjMnLFxuICogICAnMjUlJzogJyM2NkZGMDAnLFxuICogICAnNTAlJzogJyMwMENDMDAnLCAgICAgPT09PT4gIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2FmYzE2MyAwJSwgIzY2RkYwMCAyNSUsXG4gKiAgICc3NSUnOiAnIzAwOTkwMCcsICAgICAgICAgICAgICAjMDBDQzAwIDUwJSwgIzAwOTkwMCA3NSUsICNmZmZmZmYgMTAwJSlcbiAqICAgJzEwMCUnOiAnI2ZmZmZmZidcbiAqIH1cbiAqXG4gKiBUaGVuIHRoaXMgbWFuIGNhbWUgdG8gcmVhbGl6ZSB0aGUgdHJ1dGg6XG4gKiBCZXNpZGVzIHNpeCBwZW5jZSwgdGhlcmUgaXMgdGhlIG1vb24uXG4gKiBCZXNpZGVzIGJyZWFkIGFuZCBidXR0ZXIsIHRoZXJlIGlzIHRoZSBidWcuXG4gKiBBbmQuLi5cbiAqIEJlc2lkZXMgd29tZW4sIHRoZXJlIGlzIHRoZSBjb2RlLlxuICovXG5cblxuZXhwb3J0cy5zb3J0R3JhZGllbnQgPSBzb3J0R3JhZGllbnQ7XG5cbnZhciBoYW5kbGVHcmFkaWVudCA9IGZ1bmN0aW9uIGhhbmRsZUdyYWRpZW50KHN0cm9rZUNvbG9yLCBkaXJlY3Rpb25Db25maWcpIHtcbiAgdmFyIF9zdHJva2VDb2xvciRmcm9tID0gc3Ryb2tlQ29sb3IuZnJvbSxcbiAgICAgIGZyb20gPSBfc3Ryb2tlQ29sb3IkZnJvbSA9PT0gdm9pZCAwID8gX2NvbG9ycy5wcmVzZXRQcmltYXJ5Q29sb3JzLmJsdWUgOiBfc3Ryb2tlQ29sb3IkZnJvbSxcbiAgICAgIF9zdHJva2VDb2xvciR0byA9IHN0cm9rZUNvbG9yLnRvLFxuICAgICAgdG8gPSBfc3Ryb2tlQ29sb3IkdG8gPT09IHZvaWQgMCA/IF9jb2xvcnMucHJlc2V0UHJpbWFyeUNvbG9ycy5ibHVlIDogX3N0cm9rZUNvbG9yJHRvLFxuICAgICAgX3N0cm9rZUNvbG9yJGRpcmVjdGlvID0gc3Ryb2tlQ29sb3IuZGlyZWN0aW9uLFxuICAgICAgZGlyZWN0aW9uID0gX3N0cm9rZUNvbG9yJGRpcmVjdGlvID09PSB2b2lkIDAgPyBkaXJlY3Rpb25Db25maWcgPT09ICdydGwnID8gJ3RvIGxlZnQnIDogJ3RvIHJpZ2h0JyA6IF9zdHJva2VDb2xvciRkaXJlY3RpbyxcbiAgICAgIHJlc3QgPSBfX3Jlc3Qoc3Ryb2tlQ29sb3IsIFtcImZyb21cIiwgXCJ0b1wiLCBcImRpcmVjdGlvblwiXSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKHJlc3QpLmxlbmd0aCAhPT0gMCkge1xuICAgIHZhciBzb3J0ZWRHcmFkaWVudHMgPSBzb3J0R3JhZGllbnQocmVzdCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoXCIuY29uY2F0KGRpcmVjdGlvbiwgXCIsIFwiKS5jb25jYXQoc29ydGVkR3JhZGllbnRzLCBcIilcIilcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KFwiLmNvbmNhdChkaXJlY3Rpb24sIFwiLCBcIikuY29uY2F0KGZyb20sIFwiLCBcIikuY29uY2F0KHRvLCBcIilcIilcbiAgfTtcbn07XG5cbmV4cG9ydHMuaGFuZGxlR3JhZGllbnQgPSBoYW5kbGVHcmFkaWVudDtcblxudmFyIExpbmUgPSBmdW5jdGlvbiBMaW5lKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb25Db25maWcgPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICBwZXJjZW50ID0gcHJvcHMucGVyY2VudCxcbiAgICAgIHN0cm9rZVdpZHRoID0gcHJvcHMuc3Ryb2tlV2lkdGgsXG4gICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHN0cm9rZUNvbG9yID0gcHJvcHMuc3Ryb2tlQ29sb3IsXG4gICAgICBzdHJva2VMaW5lY2FwID0gcHJvcHMuc3Ryb2tlTGluZWNhcCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICB0cmFpbENvbG9yID0gcHJvcHMudHJhaWxDb2xvcixcbiAgICAgIHN1Y2Nlc3MgPSBwcm9wcy5zdWNjZXNzO1xuICB2YXIgYmFja2dyb3VuZFByb3BzID0gc3Ryb2tlQ29sb3IgJiYgdHlwZW9mIHN0cm9rZUNvbG9yICE9PSAnc3RyaW5nJyA/IGhhbmRsZUdyYWRpZW50KHN0cm9rZUNvbG9yLCBkaXJlY3Rpb25Db25maWcpIDoge1xuICAgIGJhY2tncm91bmQ6IHN0cm9rZUNvbG9yXG4gIH07XG4gIHZhciB0cmFpbFN0eWxlID0gdHJhaWxDb2xvciA/IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRyYWlsQ29sb3JcbiAgfSA6IHVuZGVmaW5lZDtcbiAgdmFyIHBlcmNlbnRTdHlsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgd2lkdGg6IFwiXCIuY29uY2F0KCgwLCBfdXRpbHMudmFsaWRQcm9ncmVzcykocGVyY2VudCksIFwiJVwiKSxcbiAgICBoZWlnaHQ6IHN0cm9rZVdpZHRoIHx8IChzaXplID09PSAnc21hbGwnID8gNiA6IDgpLFxuICAgIGJvcmRlclJhZGl1czogc3Ryb2tlTGluZWNhcCA9PT0gJ3NxdWFyZScgPyAwIDogJydcbiAgfSwgYmFja2dyb3VuZFByb3BzKTtcbiAgdmFyIHN1Y2Nlc3NQZXJjZW50ID0gKDAsIF91dGlscy5nZXRTdWNjZXNzUGVyY2VudCkocHJvcHMpO1xuICB2YXIgc3VjY2Vzc1BlcmNlbnRTdHlsZSA9IHtcbiAgICB3aWR0aDogXCJcIi5jb25jYXQoKDAsIF91dGlscy52YWxpZFByb2dyZXNzKShzdWNjZXNzUGVyY2VudCksIFwiJVwiKSxcbiAgICBoZWlnaHQ6IHN0cm9rZVdpZHRoIHx8IChzaXplID09PSAnc21hbGwnID8gNiA6IDgpLFxuICAgIGJvcmRlclJhZGl1czogc3Ryb2tlTGluZWNhcCA9PT0gJ3NxdWFyZScgPyAwIDogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzID09PSBudWxsIHx8IHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Y2Nlc3Muc3Ryb2tlQ29sb3JcbiAgfTtcbiAgdmFyIHN1Y2Nlc3NTZWdtZW50ID0gc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3VjY2Vzcy1iZ1wiKSxcbiAgICBzdHlsZTogc3VjY2Vzc1BlcmNlbnRTdHlsZVxuICB9KSA6IG51bGw7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vdXRlclwiKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWlubmVyXCIpLFxuICAgIHN0eWxlOiB0cmFpbFN0eWxlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmdcIiksXG4gICAgc3R5bGU6IHBlcmNlbnRTdHlsZVxuICB9KSwgc3VjY2Vzc1NlZ21lbnQpKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gTGluZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiBTdGVwcyhwcm9wcykge1xuICB2YXIgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzdGVwcyA9IHByb3BzLnN0ZXBzLFxuICAgICAgX3Byb3BzJHBlcmNlbnQgPSBwcm9wcy5wZXJjZW50LFxuICAgICAgcGVyY2VudCA9IF9wcm9wcyRwZXJjZW50ID09PSB2b2lkIDAgPyAwIDogX3Byb3BzJHBlcmNlbnQsXG4gICAgICBfcHJvcHMkc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3Byb3BzJHN0cm9rZVdpZHRoID09PSB2b2lkIDAgPyA4IDogX3Byb3BzJHN0cm9rZVdpZHRoLFxuICAgICAgc3Ryb2tlQ29sb3IgPSBwcm9wcy5zdHJva2VDb2xvcixcbiAgICAgIHRyYWlsQ29sb3IgPSBwcm9wcy50cmFpbENvbG9yLFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIGN1cnJlbnQgPSBNYXRoLmZsb29yKHN0ZXBzICogKHBlcmNlbnQgLyAxMDApKTtcbiAgdmFyIHN0ZXBXaWR0aCA9IHNpemUgPT09ICdzbWFsbCcgPyAyIDogMTQ7XG4gIHZhciBzdHlsZWRTdGVwcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcHM7IGkgKz0gMSkge1xuICAgIHN0eWxlZFN0ZXBzLnB1c2goIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGtleTogaSxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGVwcy1pdGVtXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN0ZXBzLWl0ZW0tYWN0aXZlXCIpLCBpIDw9IGN1cnJlbnQgLSAxKSksXG4gICAgICBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGkgPD0gY3VycmVudCAtIDEgPyBzdHJva2VDb2xvciA6IHRyYWlsQ29sb3IsXG4gICAgICAgIHdpZHRoOiBzdGVwV2lkdGgsXG4gICAgICAgIGhlaWdodDogc3Ryb2tlV2lkdGhcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGVwcy1vdXRlclwiKVxuICB9LCBzdHlsZWRTdGVwcywgY2hpbGRyZW4pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gU3RlcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3Byb2dyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wcm9ncmVzc1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9wcm9ncmVzc1tcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX0NoZWNrT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja091dGxpbmVkXCIpKTtcblxudmFyIF9DaGVja0NpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0NoZWNrQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZUZpbGxlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9MaW5lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9MaW5lXCIpKTtcblxudmFyIF9DaXJjbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NpcmNsZVwiKSk7XG5cbnZhciBfU3RlcHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1N0ZXBzXCIpKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFByb2dyZXNzVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdsaW5lJywgJ2NpcmNsZScsICdkYXNoYm9hcmQnKTtcbnZhciBQcm9ncmVzc1N0YXR1c2VzID0gKDAsIF90eXBlLnR1cGxlKSgnbm9ybWFsJywgJ2V4Y2VwdGlvbicsICdhY3RpdmUnLCAnc3VjY2VzcycpO1xuXG52YXIgUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShQcm9ncmVzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoUHJvZ3Jlc3MpO1xuXG4gIGZ1bmN0aW9uIFByb2dyZXNzKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgUHJvZ3Jlc3MpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBfdGhpcy5yZW5kZXJQcm9ncmVzcyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9ICgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSxcbiAgICAgICAgICBwcm9wcyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5wcm9wcztcblxuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgICAgc3RlcHMgPSBwcm9wcy5zdGVwcyxcbiAgICAgICAgICBzaG93SW5mbyA9IHByb3BzLnNob3dJbmZvLFxuICAgICAgICAgIHN0cm9rZUNvbG9yID0gcHJvcHMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwidHlwZVwiLCBcInN0ZXBzXCIsIFwic2hvd0luZm9cIiwgXCJzdHJva2VDb2xvclwiXSk7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Byb2dyZXNzJywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICAgICAgdmFyIHByb2dyZXNzU3RhdHVzID0gX3RoaXMuZ2V0UHJvZ3Jlc3NTdGF0dXMoKTtcblxuICAgICAgdmFyIHByb2dyZXNzSW5mbyA9IF90aGlzLnJlbmRlclByb2Nlc3NJbmZvKHByZWZpeENscywgcHJvZ3Jlc3NTdGF0dXMpO1xuXG4gICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdzdWNjZXNzUGVyY2VudCcgaW4gcHJvcHMpLCAnUHJvZ3Jlc3MnLCAnYHN1Y2Nlc3NQZXJjZW50YCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBzdWNjZXNzLnBlcmNlbnRgIGluc3RlYWQuJyk7XG4gICAgICB2YXIgcHJvZ3Jlc3M7IC8vIFJlbmRlciBwcm9ncmVzcyBzaGFwZVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RlcHMgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU3RlcHNbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF90aGlzLnByb3BzLCB7XG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IHR5cGVvZiBzdHJva2VDb2xvciA9PT0gJ3N0cmluZycgPyBzdHJva2VDb2xvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBzdGVwczogc3RlcHNcbiAgICAgICAgfSksIHByb2dyZXNzSW5mbykgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTGluZVtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX3RoaXMucHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9KSwgcHJvZ3Jlc3NJbmZvKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NpcmNsZScgfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgICAgcHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2lyY2xlW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHByb2dyZXNzU3RhdHVzOiBwcm9ncmVzc1N0YXR1c1xuICAgICAgICB9KSwgcHJvZ3Jlc3NJbmZvKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdjaXJjbGUnIHx8IHN0ZXBzICYmICdzdGVwcycgfHwgdHlwZSksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXN0YXR1cy1cIikuY29uY2F0KHByb2dyZXNzU3RhdHVzKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2hvdy1pbmZvXCIpLCBzaG93SW5mbyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplKSwgc2l6ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdFByb3BzLCBbJ3N0YXR1cycsICdmb3JtYXQnLCAndHJhaWxDb2xvcicsICdzdHJva2VXaWR0aCcsICd3aWR0aCcsICdnYXBEZWdyZWUnLCAnZ2FwUG9zaXRpb24nLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlTGluZWNhcCcsICdwZXJjZW50JywgJ3N0ZXBzJywgJ3N1Y2Nlc3MnLCAnc3VjY2Vzc1BlcmNlbnQnXSksIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgICAgfSksIHByb2dyZXNzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShQcm9ncmVzcywgW3tcbiAgICBrZXk6IFwiZ2V0UGVyY2VudE51bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQZXJjZW50TnVtYmVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzJHBlcmNlbnQgPSB0aGlzLnByb3BzLnBlcmNlbnQsXG4gICAgICAgICAgcGVyY2VudCA9IF90aGlzJHByb3BzJHBlcmNlbnQgPT09IHZvaWQgMCA/IDAgOiBfdGhpcyRwcm9wcyRwZXJjZW50O1xuICAgICAgdmFyIHN1Y2Nlc3NQZXJjZW50ID0gKDAsIF91dGlscy5nZXRTdWNjZXNzUGVyY2VudCkodGhpcy5wcm9wcyk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCA/IHN1Y2Nlc3NQZXJjZW50LnRvU3RyaW5nKCkgOiBwZXJjZW50LnRvU3RyaW5nKCksIDEwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UHJvZ3Jlc3NTdGF0dXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGF0dXMoKSB7XG4gICAgICB2YXIgc3RhdHVzID0gdGhpcy5wcm9wcy5zdGF0dXM7XG5cbiAgICAgIGlmIChQcm9ncmVzc1N0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA8IDAgJiYgdGhpcy5nZXRQZXJjZW50TnVtYmVyKCkgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0dXMgfHwgJ25vcm1hbCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclByb2Nlc3NJbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclByb2Nlc3NJbmZvKHByZWZpeENscywgcHJvZ3Jlc3NTdGF0dXMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2hvd0luZm8gPSBfdGhpcyRwcm9wcy5zaG93SW5mbyxcbiAgICAgICAgICBmb3JtYXQgPSBfdGhpcyRwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICAgICAgcGVyY2VudCA9IF90aGlzJHByb3BzLnBlcmNlbnQ7XG4gICAgICB2YXIgc3VjY2Vzc1BlcmNlbnQgPSAoMCwgX3V0aWxzLmdldFN1Y2Nlc3NQZXJjZW50KSh0aGlzLnByb3BzKTtcbiAgICAgIGlmICghc2hvd0luZm8pIHJldHVybiBudWxsO1xuICAgICAgdmFyIHRleHQ7XG5cbiAgICAgIHZhciB0ZXh0Rm9ybWF0dGVyID0gZm9ybWF0IHx8IGZ1bmN0aW9uIChwZXJjZW50TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChwZXJjZW50TnVtYmVyLCBcIiVcIik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNMaW5lVHlwZSA9IHR5cGUgPT09ICdsaW5lJztcblxuICAgICAgaWYgKGZvcm1hdCB8fCBwcm9ncmVzc1N0YXR1cyAhPT0gJ2V4Y2VwdGlvbicgJiYgcHJvZ3Jlc3NTdGF0dXMgIT09ICdzdWNjZXNzJykge1xuICAgICAgICB0ZXh0ID0gdGV4dEZvcm1hdHRlcigoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHBlcmNlbnQpLCAoMCwgX3V0aWxzLnZhbGlkUHJvZ3Jlc3MpKHN1Y2Nlc3NQZXJjZW50KSk7XG4gICAgICB9IGVsc2UgaWYgKHByb2dyZXNzU3RhdHVzID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgICB0ZXh0ID0gaXNMaW5lVHlwZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZUNpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3NTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0ZXh0ID0gaXNMaW5lVHlwZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DaGVja0NpcmNsZUZpbGxlZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NoZWNrT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0XCIpLFxuICAgICAgICB0aXRsZTogdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dCA6IHVuZGVmaW5lZFxuICAgICAgfSwgdGV4dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclByb2dyZXNzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFByb2dyZXNzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFByb2dyZXNzO1xuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnbGluZScsXG4gIHBlcmNlbnQ6IDAsXG4gIHNob3dJbmZvOiB0cnVlLFxuICAvLyBudWxsIGZvciBkaWZmZXJlbnQgdGhlbWUgZGVmaW5pdGlvblxuICB0cmFpbENvbG9yOiBudWxsLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIGdhcERlZ3JlZTogdW5kZWZpbmVkLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudmFsaWRQcm9ncmVzcyA9IHZhbGlkUHJvZ3Jlc3M7XG5leHBvcnRzLmdldFN1Y2Nlc3NQZXJjZW50ID0gZ2V0U3VjY2Vzc1BlcmNlbnQ7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiB2YWxpZFByb2dyZXNzKHByb2dyZXNzKSB7XG4gIGlmICghcHJvZ3Jlc3MgfHwgcHJvZ3Jlc3MgPCAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAocHJvZ3Jlc3MgPiAxMDApIHtcbiAgICByZXR1cm4gMTAwO1xuICB9XG5cbiAgcmV0dXJuIHByb2dyZXNzO1xufVxuXG5mdW5jdGlvbiBnZXRTdWNjZXNzUGVyY2VudChfcmVmKSB7XG4gIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxuICAgICAgc3VjY2Vzc1BlcmNlbnQgPSBfcmVmLnN1Y2Nlc3NQZXJjZW50O1xuICB2YXIgcGVyY2VudCA9IHN1Y2Nlc3NQZXJjZW50O1xuICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBwZXJjZW50YCBpbnN0ZWFkICovXG5cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3Byb2dyZXNzJyBpbiBzdWNjZXNzKSB7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoZmFsc2UsICdQcm9ncmVzcycsICdgc3VjY2Vzcy5wcm9ncmVzc2AgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBgc3VjY2Vzcy5wZXJjZW50YCBpbnN0ZWFkLicpO1xuICAgIHBlcmNlbnQgPSBzdWNjZXNzLnByb2dyZXNzO1xuICB9XG5cbiAgaWYgKHN1Y2Nlc3MgJiYgJ3BlcmNlbnQnIGluIHN1Y2Nlc3MpIHtcbiAgICBwZXJjZW50ID0gc3VjY2Vzcy5wZXJjZW50O1xuICB9XG5cbiAgcmV0dXJuIHBlcmNlbnQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1VwbG9hZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVXBsb2FkXCIpKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBJbnRlcm5hbERyYWdnZXIgPSBmdW5jdGlvbiBJbnRlcm5hbERyYWdnZXIoX2EsIHJlZikge1xuICB2YXIgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgIGhlaWdodCA9IF9hLmhlaWdodCxcbiAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wic3R5bGVcIiwgXCJoZWlnaHRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfVXBsb2FkW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICByZWY6IHJlZlxuICB9LCByZXN0UHJvcHMsIHtcbiAgICB0eXBlOiBcImRyYWdcIixcbiAgICBzdHlsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgc3R5bGUpLCB7XG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pXG4gIH0pKTtcbn07XG5cbnZhciBEcmFnZ2VyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxEcmFnZ2VyKTtcbkRyYWdnZXIuZGlzcGxheU5hbWUgPSAnRHJhZ2dlcic7XG52YXIgX2RlZmF1bHQgPSBEcmFnZ2VyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjVXBsb2FkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXBsb2FkXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfRHJhZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRHJhZ2dlclwiKSk7XG5cbnZhciBfVXBsb2FkTGlzdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVXBsb2FkTGlzdFwiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZGVmYXVsdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUvZGVmYXVsdFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF91c2VGb3JjZVVwZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlXCIpKTtcblxudmFyIF91c2VGcmVzaFN0YXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXNlRnJlc2hTdGF0ZVwiKSk7XG5cbnZhciBJbnRlcm5hbFVwbG9hZCA9IGZ1bmN0aW9uIEludGVybmFsVXBsb2FkKHByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzMjtcblxuICB2YXIgZmlsZUxpc3RQcm9wID0gcHJvcHMuZmlsZUxpc3QsXG4gICAgICBkZWZhdWx0RmlsZUxpc3QgPSBwcm9wcy5kZWZhdWx0RmlsZUxpc3QsXG4gICAgICBvblJlbW92ZSA9IHByb3BzLm9uUmVtb3ZlLFxuICAgICAgc2hvd1VwbG9hZExpc3QgPSBwcm9wcy5zaG93VXBsb2FkTGlzdCxcbiAgICAgIGxpc3RUeXBlID0gcHJvcHMubGlzdFR5cGUsXG4gICAgICBvblByZXZpZXcgPSBwcm9wcy5vblByZXZpZXcsXG4gICAgICBvbkRvd25sb2FkID0gcHJvcHMub25Eb3dubG9hZCxcbiAgICAgIHByZXZpZXdGaWxlID0gcHJvcHMucHJldmlld0ZpbGUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgcHJvcExvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgIGljb25SZW5kZXIgPSBwcm9wcy5pY29uUmVuZGVyLFxuICAgICAgaXNJbWFnZVVybCA9IHByb3BzLmlzSW1hZ2VVcmwsXG4gICAgICBwcm9ncmVzcyA9IHByb3BzLnByb2dyZXNzLFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIGl0ZW1SZW5kZXIgPSBwcm9wcy5pdGVtUmVuZGVyO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgnZHJvcCcpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZHJhZ1N0YXRlID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldERyYWdTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGZvcmNlVXBkYXRlID0gKDAsIF91c2VGb3JjZVVwZGF0ZVtcImRlZmF1bHRcIl0pKCk7IC8vIFJlZnJlc2ggYWx3YXlzIHVzZSBmcmVzaCBkYXRhXG5cbiAgdmFyIF91c2VGcmVzaFN0YXRlID0gKDAsIF91c2VGcmVzaFN0YXRlM1tcImRlZmF1bHRcIl0pKGZpbGVMaXN0UHJvcCB8fCBkZWZhdWx0RmlsZUxpc3QgfHwgW10sIGZpbGVMaXN0UHJvcCksXG4gICAgICBfdXNlRnJlc2hTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZUZyZXNoU3RhdGUsIDIpLFxuICAgICAgZ2V0RmlsZUxpc3QgPSBfdXNlRnJlc2hTdGF0ZTJbMF0sXG4gICAgICBzZXRGaWxlTGlzdCA9IF91c2VGcmVzaFN0YXRlMlsxXTtcblxuICB2YXIgdXBsb2FkID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoJ2ZpbGVMaXN0JyBpbiBwcm9wcyB8fCAhKCd2YWx1ZScgaW4gcHJvcHMpLCAnVXBsb2FkJywgJ2B2YWx1ZWAgaXMgbm90IGEgdmFsaWQgcHJvcCwgZG8geW91IG1lYW4gYGZpbGVMaXN0YD8nKTtcbiAgfSwgW10pO1xuXG4gIHZhciBvbkNoYW5nZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlKGluZm8pIHtcbiAgICBzZXRGaWxlTGlzdChpbmZvLmZpbGVMaXN0KTtcbiAgICB2YXIgb25DaGFuZ2VQcm9wID0gcHJvcHMub25DaGFuZ2U7XG5cbiAgICBpZiAob25DaGFuZ2VQcm9wKSB7XG4gICAgICBvbkNoYW5nZVByb3AoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgaW5mbyksIHtcbiAgICAgICAgZmlsZUxpc3Q6ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyW1wiZGVmYXVsdFwiXSkoaW5mby5maWxlTGlzdClcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiBvblN0YXJ0KGZpbGUpIHtcbiAgICB2YXIgdGFyZ2V0SXRlbSA9ICgwLCBfdXRpbHMuZmlsZVRvT2JqZWN0KShmaWxlKTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xuICAgIHZhciBuZXh0RmlsZUxpc3QgPSBnZXRGaWxlTGlzdCgpLmNvbmNhdCgpO1xuICAgIHZhciBmaWxlSW5kZXggPSBuZXh0RmlsZUxpc3QuZmluZEluZGV4KGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdWlkID0gX3JlZi51aWQ7XG4gICAgICByZXR1cm4gdWlkID09PSB0YXJnZXRJdGVtLnVpZDtcbiAgICB9KTtcblxuICAgIGlmIChmaWxlSW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0RmlsZUxpc3QucHVzaCh0YXJnZXRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEZpbGVMaXN0W2ZpbGVJbmRleF0gPSB0YXJnZXRJdGVtO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIGZpbGU6IHRhcmdldEl0ZW0sXG4gICAgICBmaWxlTGlzdDogbmV4dEZpbGVMaXN0XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIG9uU3VjY2VzcyA9IGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXNwb25zZSwgZmlsZSwgeGhyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLyogZG8gbm90aGluZyAqL1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRJdGVtID0gKDAsIF91dGlscy5nZXRGaWxlSXRlbSkoZmlsZSwgZ2V0RmlsZUxpc3QoKSk7IC8vIHJlbW92ZWRcblxuICAgIGlmICghdGFyZ2V0SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xuICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0YXJnZXRJdGVtLnhociA9IHhocjtcbiAgICBvbkNoYW5nZSh7XG4gICAgICBmaWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHRhcmdldEl0ZW0pLFxuICAgICAgZmlsZUxpc3Q6IGdldEZpbGVMaXN0KCkuY29uY2F0KClcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uIG9uUHJvZ3Jlc3MoZSwgZmlsZSkge1xuICAgIHZhciB0YXJnZXRJdGVtID0gKDAsIF91dGlscy5nZXRGaWxlSXRlbSkoZmlsZSwgZ2V0RmlsZUxpc3QoKSk7IC8vIHJlbW92ZWRcblxuICAgIGlmICghdGFyZ2V0SXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldEl0ZW0ucGVyY2VudCA9IGUucGVyY2VudDtcbiAgICBvbkNoYW5nZSh7XG4gICAgICBldmVudDogZSxcbiAgICAgIGZpbGU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdGFyZ2V0SXRlbSksXG4gICAgICBmaWxlTGlzdDogZ2V0RmlsZUxpc3QoKS5jb25jYXQoKVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcihlcnJvciwgcmVzcG9uc2UsIGZpbGUpIHtcbiAgICB2YXIgdGFyZ2V0SXRlbSA9ICgwLCBfdXRpbHMuZ2V0RmlsZUl0ZW0pKGZpbGUsIGdldEZpbGVMaXN0KCkpOyAvLyByZW1vdmVkXG5cbiAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyb3I7XG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2Vycm9yJztcbiAgICBvbkNoYW5nZSh7XG4gICAgICBmaWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHRhcmdldEl0ZW0pLFxuICAgICAgZmlsZUxpc3Q6IGdldEZpbGVMaXN0KCkuY29uY2F0KClcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGZpbGUpIHtcbiAgICBQcm9taXNlLnJlc29sdmUodHlwZW9mIG9uUmVtb3ZlID09PSAnZnVuY3Rpb24nID8gb25SZW1vdmUoZmlsZSkgOiBvblJlbW92ZSkudGhlbihmdW5jdGlvbiAocmV0KSB7XG4gICAgICAvLyBQcmV2ZW50IHJlbW92aW5nIGZpbGVcbiAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbW92ZWRGaWxlTGlzdCA9ICgwLCBfdXRpbHMucmVtb3ZlRmlsZUl0ZW0pKGZpbGUsIGdldEZpbGVMaXN0KCkpO1xuXG4gICAgICBpZiAocmVtb3ZlZEZpbGVMaXN0KSB7XG4gICAgICAgIGZpbGUuc3RhdHVzID0gJ3JlbW92ZWQnO1xuXG4gICAgICAgIGlmICh1cGxvYWQuY3VycmVudCkge1xuICAgICAgICAgIHVwbG9hZC5jdXJyZW50LmFib3J0KGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgZmlsZUxpc3Q6IHJlbW92ZWRGaWxlTGlzdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgb25GaWxlRHJvcCA9IGZ1bmN0aW9uIG9uRmlsZURyb3AoZSkge1xuICAgIHNldERyYWdTdGF0ZShlLnR5cGUpO1xuICB9O1xuXG4gIHZhciBiZWZvcmVVcGxvYWQgPSBmdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3RBcmdzKSB7XG4gICAgdmFyIGJlZm9yZVVwbG9hZFByb3AgPSBwcm9wcy5iZWZvcmVVcGxvYWQ7XG5cbiAgICBpZiAoIWJlZm9yZVVwbG9hZFByb3ApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBiZWZvcmVVcGxvYWRQcm9wKGZpbGUsIGZpbGVMaXN0QXJncyk7XG5cbiAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgLy8gR2V0IHVuaXF1ZSBmaWxlIGxpc3RcbiAgICAgIHZhciB1bmlxdWVMaXN0ID0gW107XG4gICAgICBnZXRGaWxlTGlzdCgpLmNvbmNhdChmaWxlTGlzdEFyZ3MubWFwKF91dGlscy5maWxlVG9PYmplY3QpKS5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgIGlmICh1bmlxdWVMaXN0LmV2ZXJ5KGZ1bmN0aW9uICh1Zikge1xuICAgICAgICAgIHJldHVybiB1Zi51aWQgIT09IGYudWlkO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIHVuaXF1ZUxpc3QucHVzaChmKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGZpbGVMaXN0OiB1bmlxdWVMaXN0XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9OyAvLyBUZXN0IG5lZWRzXG5cblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvblN0YXJ0OiBvblN0YXJ0LFxuICAgICAgb25TdWNjZXNzOiBvblN1Y2Nlc3MsXG4gICAgICBvblByb2dyZXNzOiBvblByb2dyZXNzLFxuICAgICAgb25FcnJvcjogb25FcnJvcixcbiAgICAgIGZpbGVMaXN0OiBnZXRGaWxlTGlzdCgpLFxuICAgICAgdXBsb2FkOiB1cGxvYWQuY3VycmVudCxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3VwbG9hZCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciByY1VwbG9hZFByb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgb25TdGFydDogb25TdGFydCxcbiAgICBvbkVycm9yOiBvbkVycm9yLFxuICAgIG9uUHJvZ3Jlc3M6IG9uUHJvZ3Jlc3MsXG4gICAgb25TdWNjZXNzOiBvblN1Y2Nlc3NcbiAgfSwgcHJvcHMpLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgYmVmb3JlVXBsb2FkOiBiZWZvcmVVcGxvYWRcbiAgfSk7XG4gIGRlbGV0ZSByY1VwbG9hZFByb3BzLmNsYXNzTmFtZTtcbiAgZGVsZXRlIHJjVXBsb2FkUHJvcHMuc3R5bGU7IC8vIFJlbW92ZSBpZCB0byBhdm9pZCBvcGVuIGJ5IGxhYmVsIHdoZW4gdHJpZ2dlciBpcyBoaWRkZW5cbiAgLy8gIWNoaWxkcmVuOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNDI5OFxuICAvLyBkaXNhYmxlZDogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTY0NzhcbiAgLy8gICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzI0MTk3XG5cbiAgaWYgKCFjaGlsZHJlbiB8fCBkaXNhYmxlZCkge1xuICAgIGRlbGV0ZSByY1VwbG9hZFByb3BzLmlkO1xuICB9XG5cbiAgdmFyIHJlbmRlclVwbG9hZExpc3QgPSBmdW5jdGlvbiByZW5kZXJVcGxvYWRMaXN0KGJ1dHRvbikge1xuICAgIHJldHVybiBzaG93VXBsb2FkTGlzdCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNvbXBvbmVudE5hbWU6IFwiVXBsb2FkXCIsXG4gICAgICBkZWZhdWx0TG9jYWxlOiBfZGVmYXVsdDJbXCJkZWZhdWx0XCJdLlVwbG9hZFxuICAgIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfcmVmMiA9IHR5cGVvZiBzaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nID8ge30gOiBzaG93VXBsb2FkTGlzdCxcbiAgICAgICAgICBzaG93UmVtb3ZlSWNvbiA9IF9yZWYyLnNob3dSZW1vdmVJY29uLFxuICAgICAgICAgIHNob3dQcmV2aWV3SWNvbiA9IF9yZWYyLnNob3dQcmV2aWV3SWNvbixcbiAgICAgICAgICBzaG93RG93bmxvYWRJY29uID0gX3JlZjIuc2hvd0Rvd25sb2FkSWNvbixcbiAgICAgICAgICByZW1vdmVJY29uID0gX3JlZjIucmVtb3ZlSWNvbixcbiAgICAgICAgICBkb3dubG9hZEljb24gPSBfcmVmMi5kb3dubG9hZEljb247XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfVXBsb2FkTGlzdFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgbGlzdFR5cGU6IGxpc3RUeXBlLFxuICAgICAgICBpdGVtczogZ2V0RmlsZUxpc3QodHJ1ZSksXG4gICAgICAgIHByZXZpZXdGaWxlOiBwcmV2aWV3RmlsZSxcbiAgICAgICAgb25QcmV2aWV3OiBvblByZXZpZXcsXG4gICAgICAgIG9uRG93bmxvYWQ6IG9uRG93bmxvYWQsXG4gICAgICAgIG9uUmVtb3ZlOiBoYW5kbGVSZW1vdmUsXG4gICAgICAgIHNob3dSZW1vdmVJY29uOiAhZGlzYWJsZWQgJiYgc2hvd1JlbW92ZUljb24sXG4gICAgICAgIHNob3dQcmV2aWV3SWNvbjogc2hvd1ByZXZpZXdJY29uLFxuICAgICAgICBzaG93RG93bmxvYWRJY29uOiBzaG93RG93bmxvYWRJY29uLFxuICAgICAgICByZW1vdmVJY29uOiByZW1vdmVJY29uLFxuICAgICAgICBkb3dubG9hZEljb246IGRvd25sb2FkSWNvbixcbiAgICAgICAgaWNvblJlbmRlcjogaWNvblJlbmRlcixcbiAgICAgICAgbG9jYWxlOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsb2NhbGUpLCBwcm9wTG9jYWxlKSxcbiAgICAgICAgaXNJbWFnZVVybDogaXNJbWFnZVVybCxcbiAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzLFxuICAgICAgICBhcHBlbmRBY3Rpb246IGJ1dHRvbixcbiAgICAgICAgaXRlbVJlbmRlcjogaXRlbVJlbmRlclxuICAgICAgfSk7XG4gICAgfSkgOiBidXR0b247XG4gIH07XG5cbiAgaWYgKHR5cGUgPT09ICdkcmFnJykge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBkcmFnQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcmFnXCIpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcmFnLXVwbG9hZGluZ1wiKSwgZ2V0RmlsZUxpc3QoKS5zb21lKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICByZXR1cm4gZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnO1xuICAgIH0pKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kcmFnLWhvdmVyXCIpLCBkcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBkcmFnQ2xzLFxuICAgICAgb25Ecm9wOiBvbkZpbGVEcm9wLFxuICAgICAgb25EcmFnT3Zlcjogb25GaWxlRHJvcCxcbiAgICAgIG9uRHJhZ0xlYXZlOiBvbkZpbGVEcm9wLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjVXBsb2FkW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByY1VwbG9hZFByb3BzLCB7XG4gICAgICByZWY6IHVwbG9hZCxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idG5cIilcbiAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRyYWctY29udGFpbmVyXCIpXG4gICAgfSwgY2hpbGRyZW4pKSksIHJlbmRlclVwbG9hZExpc3QoKSk7XG4gIH1cblxuICB2YXIgdXBsb2FkQnV0dG9uQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdFwiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdC1cIikuY29uY2F0KGxpc3RUeXBlKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzMikpO1xuICB2YXIgdXBsb2FkQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogdXBsb2FkQnV0dG9uQ2xzLFxuICAgIHN0eWxlOiBjaGlsZHJlbiA/IHVuZGVmaW5lZCA6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjVXBsb2FkW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByY1VwbG9hZFByb3BzLCB7XG4gICAgcmVmOiB1cGxvYWRcbiAgfSkpKTtcblxuICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGljdHVyZS1jYXJkLXdyYXBwZXJcIiksIGNsYXNzTmFtZSlcbiAgICB9LCByZW5kZXJVcGxvYWRMaXN0KHVwbG9hZEJ1dHRvbikpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgdXBsb2FkQnV0dG9uLCByZW5kZXJVcGxvYWRMaXN0KCkpO1xufTtcblxudmFyIFVwbG9hZCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsVXBsb2FkKTtcblVwbG9hZC5EcmFnZ2VyID0gX0RyYWdnZXJbXCJkZWZhdWx0XCJdO1xuVXBsb2FkLmRpc3BsYXlOYW1lID0gJ1VwbG9hZCc7XG5VcGxvYWQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnc2VsZWN0JyxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBhY3Rpb246ICcnLFxuICBkYXRhOiB7fSxcbiAgYWNjZXB0OiAnJyxcbiAgYmVmb3JlVXBsb2FkOiBfdXRpbHMuVCxcbiAgc2hvd1VwbG9hZExpc3Q6IHRydWUsXG4gIGxpc3RUeXBlOiAndGV4dCcsXG4gIGNsYXNzTmFtZTogJycsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc3VwcG9ydFNlcnZlclJlbmRlcjogdHJ1ZVxufTtcbnZhciBfZGVmYXVsdCA9IFVwbG9hZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjQW5pbWF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWFuaW1hdGVcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgX1BhcGVyQ2xpcE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvUGFwZXJDbGlwT3V0bGluZWRcIikpO1xuXG52YXIgX1BpY3R1cmVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvUGljdHVyZVR3b1RvbmVcIikpO1xuXG52YXIgX0ZpbGVUd29Ub25lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRmlsZVR3b1RvbmVcIikpO1xuXG52YXIgX0V5ZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXllT3V0bGluZWRcIikpO1xuXG52YXIgX0RlbGV0ZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRGVsZXRlT3V0bGluZWRcIikpO1xuXG52YXIgX0Rvd25sb2FkT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Eb3dubG9hZE91dGxpbmVkXCIpKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBfdG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2x0aXBcIikpO1xuXG52YXIgX3Byb2dyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcHJvZ3Jlc3NcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX3VzZUZvcmNlVXBkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvaG9va3MvdXNlRm9yY2VVcGRhdGVcIikpO1xuXG52YXIgSW50ZXJuYWxVcGxvYWRMaXN0ID0gZnVuY3Rpb24gSW50ZXJuYWxVcGxvYWRMaXN0KF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM2O1xuXG4gIHZhciBsaXN0VHlwZSA9IF9yZWYubGlzdFR5cGUsXG4gICAgICBwcmV2aWV3RmlsZSA9IF9yZWYucHJldmlld0ZpbGUsXG4gICAgICBvblByZXZpZXcgPSBfcmVmLm9uUHJldmlldyxcbiAgICAgIG9uRG93bmxvYWQgPSBfcmVmLm9uRG93bmxvYWQsXG4gICAgICBvblJlbW92ZSA9IF9yZWYub25SZW1vdmUsXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIGljb25SZW5kZXIgPSBfcmVmLmljb25SZW5kZXIsXG4gICAgICBpc0ltZ1VybCA9IF9yZWYuaXNJbWFnZVVybCxcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgX3JlZiRpdGVtcyA9IF9yZWYuaXRlbXMsXG4gICAgICBpdGVtcyA9IF9yZWYkaXRlbXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpdGVtcyxcbiAgICAgIHNob3dQcmV2aWV3SWNvbiA9IF9yZWYuc2hvd1ByZXZpZXdJY29uLFxuICAgICAgc2hvd1JlbW92ZUljb24gPSBfcmVmLnNob3dSZW1vdmVJY29uLFxuICAgICAgc2hvd0Rvd25sb2FkSWNvbiA9IF9yZWYuc2hvd0Rvd25sb2FkSWNvbixcbiAgICAgIGN1c3RvbVJlbW92ZUljb24gPSBfcmVmLnJlbW92ZUljb24sXG4gICAgICBjdXN0b21Eb3dubG9hZEljb24gPSBfcmVmLmRvd25sb2FkSWNvbixcbiAgICAgIHByb2dyZXNzUHJvcHMgPSBfcmVmLnByb2dyZXNzLFxuICAgICAgYXBwZW5kQWN0aW9uID0gX3JlZi5hcHBlbmRBY3Rpb24sXG4gICAgICBpdGVtUmVuZGVyID0gX3JlZi5pdGVtUmVuZGVyO1xuICB2YXIgZm9yY2VVcGRhdGUgPSAoMCwgX3VzZUZvcmNlVXBkYXRlW1wiZGVmYXVsdFwiXSkoKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGlzdFR5cGUgIT09ICdwaWN0dXJlJyAmJiBsaXN0VHlwZSAhPT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAoaXRlbXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cuRmlsZVJlYWRlciB8fCAhd2luZG93LkZpbGUgfHwgIShmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlIHx8IGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8IGZpbGUudGh1bWJVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcblxuICAgICAgaWYgKHByZXZpZXdGaWxlKSB7XG4gICAgICAgIHByZXZpZXdGaWxlKGZpbGUub3JpZ2luRmlsZU9iaikudGhlbihmdW5jdGlvbiAocHJldmlld0RhdGFVcmwpIHtcbiAgICAgICAgICAvLyBOZWVkIGFwcGVuZCAnJyB0byBhdm9pZCBkZWFkIGxvb3BcbiAgICAgICAgICBmaWxlLnRodW1iVXJsID0gcHJldmlld0RhdGFVcmwgfHwgJyc7XG4gICAgICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtsaXN0VHlwZSwgaXRlbXMsIHByZXZpZXdGaWxlXSk7XG5cbiAgdmFyIGhhbmRsZVByZXZpZXcgPSBmdW5jdGlvbiBoYW5kbGVQcmV2aWV3KGZpbGUsIGUpIHtcbiAgICBpZiAoIW9uUHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gb25QcmV2aWV3KGZpbGUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVEb3dubG9hZCA9IGZ1bmN0aW9uIGhhbmRsZURvd25sb2FkKGZpbGUpIHtcbiAgICBpZiAodHlwZW9mIG9uRG93bmxvYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uRG93bmxvYWQoZmlsZSk7XG4gICAgfSBlbHNlIGlmIChmaWxlLnVybCkge1xuICAgICAgd2luZG93Lm9wZW4oZmlsZS51cmwpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiBoYW5kbGVDbG9zZShmaWxlKSB7XG4gICAgaWYgKG9uUmVtb3ZlKSB7XG4gICAgICBvblJlbW92ZShmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUljb25SZW5kZXIgPSBmdW5jdGlvbiBoYW5kbGVJY29uUmVuZGVyKGZpbGUpIHtcbiAgICBpZiAoaWNvblJlbmRlcikge1xuICAgICAgcmV0dXJuIGljb25SZW5kZXIoZmlsZSwgbGlzdFR5cGUpO1xuICAgIH1cblxuICAgIHZhciBpc0xvYWRpbmcgPSBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZyc7XG4gICAgdmFyIGZpbGVJY29uID0gaXNJbWdVcmwgJiYgaXNJbWdVcmwoZmlsZSkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfUGljdHVyZVR3b1RvbmVbXCJkZWZhdWx0XCJdLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9GaWxlVHdvVG9uZVtcImRlZmF1bHRcIl0sIG51bGwpO1xuICAgIHZhciBpY29uID0gaXNMb2FkaW5nID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1BhcGVyQ2xpcE91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbiAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlJykge1xuICAgICAgaWNvbiA9IGlzTG9hZGluZyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2FkaW5nT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IGZpbGVJY29uO1xuICAgIH0gZWxzZSBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICBpY29uID0gaXNMb2FkaW5nID8gbG9jYWxlLnVwbG9hZGluZyA6IGZpbGVJY29uO1xuICAgIH1cblxuICAgIHJldHVybiBpY29uO1xuICB9O1xuXG4gIHZhciBoYW5kbGVBY3Rpb25JY29uUmVuZGVyID0gZnVuY3Rpb24gaGFuZGxlQWN0aW9uSWNvblJlbmRlcihjdXN0b21JY29uLCBjYWxsYmFjaywgcHJlZml4Q2xzLCB0aXRsZSkge1xuICAgIHZhciBidG5Qcm9wcyA9IHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHNpemU6ICdzbWFsbCcsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICBpZiAoKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGN1c3RvbUljb24pICYmIGN1c3RvbUljb24ucHJvcHMub25DbGljaykge1xuICAgICAgICAgIGN1c3RvbUljb24ucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tY2FyZC1hY3Rpb25zLWJ0blwiKVxuICAgIH07XG5cbiAgICBpZiAoKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGN1c3RvbUljb24pKSB7XG4gICAgICB2YXIgYnRuSWNvbiA9ICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoY3VzdG9tSWNvbiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY3VzdG9tSWNvbi5wcm9wcyksIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYnRuUHJvcHMsIHtcbiAgICAgICAgaWNvbjogYnRuSWNvblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfYnV0dG9uW1wiZGVmYXVsdFwiXSwgYnRuUHJvcHMsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjdXN0b21JY29uKSk7XG4gIH07IC8vIFRlc3QgbmVlZHNcblxuXG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhbmRsZVByZXZpZXc6IGhhbmRsZVByZXZpZXcsXG4gICAgICBoYW5kbGVEb3dubG9hZDogaGFuZGxlRG93bmxvYWRcbiAgICB9O1xuICB9KTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCd1cGxvYWQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgbGlzdCA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoZmlsZSkge1xuICAgIHZhciBfY2xhc3NOYW1lczMsIF9jbGFzc05hbWVzNDtcblxuICAgIHZhciBwcm9ncmVzcztcbiAgICB2YXIgaWNvbk5vZGUgPSBoYW5kbGVJY29uUmVuZGVyKGZpbGUpO1xuICAgIHZhciBpY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRleHQtaWNvblwiKVxuICAgIH0sIGljb25Ob2RlKTtcblxuICAgIGlmIChsaXN0VHlwZSA9PT0gJ3BpY3R1cmUnIHx8IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJyB8fCAhZmlsZS50aHVtYlVybCAmJiAhZmlsZS51cmwpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciB1cGxvYWRpbmdDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKSgoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tdGh1bWJuYWlsXCIpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tZmlsZVwiKSwgZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgaWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHVwbG9hZGluZ0NsYXNzTmFtZVxuICAgICAgICB9LCBpY29uTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgIHZhciB0aHVtYm5haWwgPSBpc0ltZ1VybCAmJiBpc0ltZ1VybChmaWxlKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgICBzcmM6IGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwsXG4gICAgICAgICAgYWx0OiBmaWxlLm5hbWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1pbWFnZVwiKVxuICAgICAgICB9KSA6IGljb25Ob2RlO1xuICAgICAgICB2YXIgYUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lczIgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLXRodW1ibmFpbFwiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtaXRlbS1maWxlXCIpLCBpc0ltZ1VybCAmJiAhaXNJbWdVcmwoZmlsZSkpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgICAgaWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBhQ2xhc3NOYW1lLFxuICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBocmVmOiBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsLFxuICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIH0sIHRodW1ibmFpbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgLy8gc2hvdyBsb2FkaW5nIGljb24gaWYgdXBsb2FkIHByb2dyZXNzIGxpc3RlbmVyIGlzIGRpc2FibGVkXG4gICAgICB2YXIgbG9hZGluZ1Byb2dyZXNzID0gJ3BlcmNlbnQnIGluIGZpbGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcHJvZ3Jlc3NbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHByb2dyZXNzUHJvcHMsIHtcbiAgICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICAgIHBlcmNlbnQ6IGZpbGUucGVyY2VudFxuICAgICAgfSkpIDogbnVsbDtcbiAgICAgIHByb2dyZXNzID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLXByb2dyZXNzXCIpLFxuICAgICAgICBrZXk6IFwicHJvZ3Jlc3NcIlxuICAgICAgfSwgbG9hZGluZ1Byb2dyZXNzKTtcbiAgICB9XG5cbiAgICB2YXIgaW5mb1VwbG9hZGluZ0NsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzMyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW1cIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tXCIpLmNvbmNhdChmaWxlLnN0YXR1cyksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tbGlzdC10eXBlLVwiKS5jb25jYXQobGlzdFR5cGUpLCB0cnVlKSwgX2NsYXNzTmFtZXMzKSk7XG4gICAgdmFyIGxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xuICAgIHZhciByZW1vdmVJY29uID0gc2hvd1JlbW92ZUljb24gPyBoYW5kbGVBY3Rpb25JY29uUmVuZGVyKCh0eXBlb2YgY3VzdG9tUmVtb3ZlSWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbVJlbW92ZUljb24oZmlsZSkgOiBjdXN0b21SZW1vdmVJY29uKSB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRGVsZXRlT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZUNsb3NlKGZpbGUpO1xuICAgIH0sIHByZWZpeENscywgbG9jYWxlLnJlbW92ZUZpbGUpIDogbnVsbDtcbiAgICB2YXIgZG93bmxvYWRJY29uID0gc2hvd0Rvd25sb2FkSWNvbiAmJiBmaWxlLnN0YXR1cyA9PT0gJ2RvbmUnID8gaGFuZGxlQWN0aW9uSWNvblJlbmRlcigodHlwZW9mIGN1c3RvbURvd25sb2FkSWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbURvd25sb2FkSWNvbihmaWxlKSA6IGN1c3RvbURvd25sb2FkSWNvbikgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Rvd25sb2FkT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGhhbmRsZURvd25sb2FkKGZpbGUpO1xuICAgIH0sIHByZWZpeENscywgbG9jYWxlLmRvd25sb2FkRmlsZSkgOiBudWxsO1xuICAgIHZhciBkb3dubG9hZE9yRGVsZXRlID0gbGlzdFR5cGUgIT09ICdwaWN0dXJlLWNhcmQnICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBrZXk6IFwiZG93bmxvYWQtZGVsZXRlXCIsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWNhcmQtYWN0aW9ucyBcIikuY29uY2F0KGxpc3RUeXBlID09PSAncGljdHVyZScgPyAncGljdHVyZScgOiAnJylcbiAgICB9LCBkb3dubG9hZEljb24sIHJlbW92ZUljb24pO1xuICAgIHZhciBsaXN0SXRlbU5hbWVDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lczQgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczQsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLW5hbWVcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tbmFtZS1pY29uLWNvdW50LVwiKS5jb25jYXQoW2Rvd25sb2FkSWNvbiwgcmVtb3ZlSWNvbl0uZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geDtcbiAgICB9KS5sZW5ndGgpLCB0cnVlKSwgX2NsYXNzTmFtZXM0KSk7XG4gICAgdmFyIHByZXZpZXcgPSBmaWxlLnVybCA/IFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgIGtleTogXCJ2aWV3XCIsXG4gICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgY2xhc3NOYW1lOiBsaXN0SXRlbU5hbWVDbGFzcyxcbiAgICAgIHRpdGxlOiBmaWxlLm5hbWVcbiAgICB9LCBsaW5rUHJvcHMsIHtcbiAgICAgIGhyZWY6IGZpbGUudXJsLFxuICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgfVxuICAgIH0pLCBmaWxlLm5hbWUpLCBkb3dubG9hZE9yRGVsZXRlXSA6IFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAga2V5OiBcInZpZXdcIixcbiAgICAgIGNsYXNzTmFtZTogbGlzdEl0ZW1OYW1lQ2xhc3MsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICB9LFxuICAgICAgdGl0bGU6IGZpbGUubmFtZVxuICAgIH0sIGZpbGUubmFtZSksIGRvd25sb2FkT3JEZWxldGVdO1xuICAgIHZhciBzdHlsZSA9IHtcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IDAuNVxuICAgIH07XG4gICAgdmFyIHByZXZpZXdJY29uID0gc2hvd1ByZXZpZXdJY29uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgIGhyZWY6IGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwsXG4gICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgc3R5bGU6IGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwgPyB1bmRlZmluZWQgOiBzdHlsZSxcbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICByZXR1cm4gaGFuZGxlUHJldmlldyhmaWxlLCBlKTtcbiAgICAgIH0sXG4gICAgICB0aXRsZTogbG9jYWxlLnByZXZpZXdGaWxlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0V5ZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkpIDogbnVsbDtcbiAgICB2YXIgYWN0aW9ucyA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyAmJiBmaWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LWl0ZW0tYWN0aW9uc1wiKVxuICAgIH0sIHByZXZpZXdJY29uLCBmaWxlLnN0YXR1cyA9PT0gJ2RvbmUnICYmIGRvd25sb2FkSWNvbiwgcmVtb3ZlSWNvbik7XG4gICAgdmFyIG1lc3NhZ2U7XG5cbiAgICBpZiAoZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1lc3NhZ2UgPSBmaWxlLnJlc3BvbnNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZXNzYWdlID0gZmlsZS5lcnJvciAmJiBmaWxlLmVycm9yLnN0YXR1c1RleHQgfHwgbG9jYWxlLnVwbG9hZEVycm9yO1xuICAgIH1cblxuICAgIHZhciBpY29uQW5kUHJldmlldyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBpY29uLCBwcmV2aWV3KTtcbiAgICB2YXIgZG9tID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBpbmZvVXBsb2FkaW5nQ2xhc3NcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdC1pdGVtLWluZm9cIilcbiAgICB9LCBpY29uQW5kUHJldmlldyksIGFjdGlvbnMsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0FuaW1hdGVbXCJkZWZhdWx0XCJdLCB7XG4gICAgICB0cmFuc2l0aW9uTmFtZTogXCJmYWRlXCIsXG4gICAgICBjb21wb25lbnQ6IFwiXCJcbiAgICB9LCBwcm9ncmVzcykpO1xuICAgIHZhciBsaXN0Q29udGFpbmVyTmFtZUNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LXBpY3R1cmUtY2FyZC1jb250YWluZXJcIiksIGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykpO1xuICAgIHZhciBpdGVtID0gZmlsZS5zdGF0dXMgPT09ICdlcnJvcicgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfdG9vbHRpcFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIHRpdGxlOiBtZXNzYWdlLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGZ1bmN0aW9uIGdldFBvcHVwQ29udGFpbmVyKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9LCBkb20pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGRvbSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGtleTogZmlsZS51aWQsXG4gICAgICBjbGFzc05hbWU6IGxpc3RDb250YWluZXJOYW1lQ2xhc3NcbiAgICB9LCBpdGVtUmVuZGVyID8gaXRlbVJlbmRlcihpdGVtLCBmaWxlLCBpdGVtcykgOiBpdGVtKTtcbiAgfSk7XG4gIHZhciBsaXN0Q2xhc3NOYW1lcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lczYgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczYsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGlzdFwiKSwgdHJ1ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM2LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpc3QtXCIpLmNvbmNhdChsaXN0VHlwZSksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1saXN0LXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzNikpO1xuICB2YXIgYW5pbWF0aW9uRGlyZWN0aW9uID0gbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnID8gJ2FuaW1hdGUtaW5saW5lJyA6ICdhbmltYXRlJztcbiAgdmFyIHRyYW5zaXRpb25OYW1lID0gbGlzdC5sZW5ndGggPT09IDAgPyAnJyA6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChhbmltYXRpb25EaXJlY3Rpb24pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjQW5pbWF0ZVtcImRlZmF1bHRcIl0sIHtcbiAgICB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogbGlzdENsYXNzTmFtZXNcbiAgfSwgbGlzdCwgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGFwcGVuZEFjdGlvbikgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGFwcGVuZEFjdGlvbiwge1xuICAgIGtleTogJ2FwcGVuZEFjdGlvbidcbiAgfSkgOiBhcHBlbmRBY3Rpb24pO1xufTtcblxudmFyIFVwbG9hZExpc3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbFVwbG9hZExpc3QpO1xuVXBsb2FkTGlzdC5kaXNwbGF5TmFtZSA9ICdVcGxvYWRMaXN0JztcblVwbG9hZExpc3QuZGVmYXVsdFByb3BzID0ge1xuICBsaXN0VHlwZTogJ3RleHQnLFxuICBwcm9ncmVzczoge1xuICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgIHNob3dJbmZvOiBmYWxzZVxuICB9LFxuICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcbiAgc2hvd0Rvd25sb2FkSWNvbjogZmFsc2UsXG4gIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcbiAgcHJldmlld0ZpbGU6IF91dGlscy5wcmV2aWV3SW1hZ2UsXG4gIGlzSW1hZ2VVcmw6IF91dGlscy5pc0ltYWdlVXJsXG59O1xudmFyIF9kZWZhdWx0ID0gVXBsb2FkTGlzdDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfVXBsb2FkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9VcGxvYWRcIikpO1xuXG52YXIgX0RyYWdnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0RyYWdnZXJcIikpO1xuXG5fVXBsb2FkW1wiZGVmYXVsdFwiXS5EcmFnZ2VyID0gX0RyYWdnZXJbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gX1VwbG9hZFtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdXNlRnJlc2hTdGF0ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9yYWZcIikpO1xuXG52YXIgX3VzZUZvcmNlVXBkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvaG9va3MvdXNlRm9yY2VVcGRhdGVcIikpO1xuXG4vLyBOb3RlLiBPbmx5IGZvciB1cGxvYWQgdXNhZ2UuIERvIG5vdCBleHBvcnQgdG8gZ2xvYmFsIHV0aWwgaG9va3NcbmZ1bmN0aW9uIHVzZUZyZXNoU3RhdGUoZGVmYXVsdFZhbHVlLCBwcm9wVmFsdWUpIHtcbiAgdmFyIHZhbHVlUmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKGRlZmF1bHRWYWx1ZSk7XG4gIHZhciBmb3JjZVVwZGF0ZSA9ICgwLCBfdXNlRm9yY2VVcGRhdGVbXCJkZWZhdWx0XCJdKSgpO1xuICB2YXIgcmFmUmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKCk7IC8vIFNldCB2YWx1ZVxuXG4gIGZ1bmN0aW9uIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgdmFsdWVSZWYuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChyYWZSZWYuY3VycmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiByYWZTeW5jVmFsdWUobmV3VmFsdWUpIHtcbiAgICBjbGVhblVwKCk7XG4gICAgcmFmUmVmLmN1cnJlbnQgPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9KTtcbiAgfSAvLyBHZXQgdmFsdWVcblxuXG4gIGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgIHZhciBkaXNwbGF5VmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgaWYgKGRpc3BsYXlWYWx1ZSkge1xuICAgICAgcmV0dXJuIHByb3BWYWx1ZSB8fCB2YWx1ZVJlZi5jdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVJlZi5jdXJyZW50O1xuICB9IC8vIEVmZmVjdCB3aWxsIGFsd2F5cyB1cGRhdGUgaW4gYSBuZXh0IGZyYW1lIHRvIGF2b2lkIHN5bmMgc3RhdGUgb3ZlcndyaXRlIGN1cnJlbnQgcHJvY2Vzc2luZyBzdGF0ZVxuXG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvcFZhbHVlKSB7XG4gICAgICByYWZTeW5jVmFsdWUocHJvcFZhbHVlKTtcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKTsgLy8gQ2xlYW4gdXBcblxuICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhblVwKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gW2dldFZhbHVlLCBzZXRWYWx1ZV07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5UID0gVDtcbmV4cG9ydHMuZmlsZVRvT2JqZWN0ID0gZmlsZVRvT2JqZWN0O1xuZXhwb3J0cy5nZXRGaWxlSXRlbSA9IGdldEZpbGVJdGVtO1xuZXhwb3J0cy5yZW1vdmVGaWxlSXRlbSA9IHJlbW92ZUZpbGVJdGVtO1xuZXhwb3J0cy5wcmV2aWV3SW1hZ2UgPSBwcmV2aWV3SW1hZ2U7XG5leHBvcnRzLmlzSW1hZ2VVcmwgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG5mdW5jdGlvbiBUKCkge1xuICByZXR1cm4gdHJ1ZTtcbn0gLy8gRml4IElFIGZpbGUuc3RhdHVzIHByb2JsZW1cbi8vIHZpYSBjb3BpbmcgYSBuZXcgT2JqZWN0XG5cblxuZnVuY3Rpb24gZmlsZVRvT2JqZWN0KGZpbGUpIHtcbiAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGZpbGUpLCB7XG4gICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXG4gICAgbmFtZTogZmlsZS5uYW1lLFxuICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgdWlkOiBmaWxlLnVpZCxcbiAgICBwZXJjZW50OiAwLFxuICAgIG9yaWdpbkZpbGVPYmo6IGZpbGVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KSB7XG4gIHZhciBtYXRjaEtleSA9IGZpbGUudWlkICE9PSB1bmRlZmluZWQgPyAndWlkJyA6ICduYW1lJztcbiAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtW21hdGNoS2V5XSA9PT0gZmlsZVttYXRjaEtleV07XG4gIH0pWzBdO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCkge1xuICB2YXIgbWF0Y2hLZXkgPSBmaWxlLnVpZCAhPT0gdW5kZWZpbmVkID8gJ3VpZCcgOiAnbmFtZSc7XG4gIHZhciByZW1vdmVkID0gZmlsZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW1bbWF0Y2hLZXldICE9PSBmaWxlW21hdGNoS2V5XTtcbiAgfSk7XG5cbiAgaWYgKHJlbW92ZWQubGVuZ3RoID09PSBmaWxlTGlzdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZW1vdmVkO1xufSAvLyA9PT09PT09PT09PT09PT09PT09PSBEZWZhdWx0IEltYWdlIFByZXZpZXcgPT09PT09PT09PT09PT09PT09PT1cblxuXG52YXIgZXh0bmFtZSA9IGZ1bmN0aW9uIGV4dG5hbWUoKSB7XG4gIHZhciB1cmwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICB2YXIgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xuICB2YXIgZmlsZW5hbWUgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gIHZhciBmaWxlbmFtZVdpdGhvdXRTdWZmaXggPSBmaWxlbmFtZS5zcGxpdCgvI3xcXD8vKVswXTtcbiAgcmV0dXJuICgvXFwuW14uL1xcXFxdKiQvLmV4ZWMoZmlsZW5hbWVXaXRob3V0U3VmZml4KSB8fCBbJyddKVswXTtcbn07XG5cbnZhciBpc0ltYWdlRmlsZVR5cGUgPSBmdW5jdGlvbiBpc0ltYWdlRmlsZVR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZS5pbmRleE9mKCdpbWFnZS8nKSA9PT0gMDtcbn07XG5cbnZhciBpc0ltYWdlVXJsID0gZnVuY3Rpb24gaXNJbWFnZVVybChmaWxlKSB7XG4gIGlmIChmaWxlLnR5cGUgJiYgIWZpbGUudGh1bWJVcmwpIHtcbiAgICByZXR1cm4gaXNJbWFnZUZpbGVUeXBlKGZpbGUudHlwZSk7XG4gIH1cblxuICB2YXIgdXJsID0gZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybDtcbiAgdmFyIGV4dGVuc2lvbiA9IGV4dG5hbWUodXJsKTtcblxuICBpZiAoL15kYXRhOmltYWdlXFwvLy50ZXN0KHVybCkgfHwgLyh3ZWJwfHN2Z3xwbmd8Z2lmfGpwZ3xqcGVnfGpmaWZ8Ym1wfGRwZ3xpY28pJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKC9eZGF0YTovLnRlc3QodXJsKSkge1xuICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuaXNJbWFnZVVybCA9IGlzSW1hZ2VVcmw7XG52YXIgTUVBU1VSRV9TSVpFID0gMjAwO1xuXG5mdW5jdGlvbiBwcmV2aWV3SW1hZ2UoZmlsZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICBpZiAoIWZpbGUudHlwZSB8fCAhaXNJbWFnZUZpbGVUeXBlKGZpbGUudHlwZSkpIHtcbiAgICAgIHJlc29sdmUoJycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMud2lkdGggPSBNRUFTVVJFX1NJWkU7XG4gICAgY2FudmFzLmhlaWdodCA9IE1FQVNVUkVfU0laRTtcbiAgICBjYW52YXMuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGZpeGVkOyBsZWZ0OiAwOyB0b3A6IDA7IHdpZHRoOiBcIi5jb25jYXQoTUVBU1VSRV9TSVpFLCBcInB4OyBoZWlnaHQ6IFwiKS5jb25jYXQoTUVBU1VSRV9TSVpFLCBcInB4OyB6LWluZGV4OiA5OTk5OyBkaXNwbGF5OiBub25lO1wiKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgd2lkdGggPSBpbWcud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gaW1nLmhlaWdodDtcbiAgICAgIHZhciBkcmF3V2lkdGggPSBNRUFTVVJFX1NJWkU7XG4gICAgICB2YXIgZHJhd0hlaWdodCA9IE1FQVNVUkVfU0laRTtcbiAgICAgIHZhciBvZmZzZXRYID0gMDtcbiAgICAgIHZhciBvZmZzZXRZID0gMDtcblxuICAgICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICAgIGRyYXdIZWlnaHQgPSBoZWlnaHQgKiAoTUVBU1VSRV9TSVpFIC8gd2lkdGgpO1xuICAgICAgICBvZmZzZXRZID0gLShkcmF3SGVpZ2h0IC0gZHJhd1dpZHRoKSAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmF3V2lkdGggPSB3aWR0aCAqIChNRUFTVVJFX1NJWkUgLyBoZWlnaHQpO1xuICAgICAgICBvZmZzZXRYID0gLShkcmF3V2lkdGggLSBkcmF3SGVpZ2h0KSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBvZmZzZXRYLCBvZmZzZXRZLCBkcmF3V2lkdGgsIGRyYXdIZWlnaHQpO1xuICAgICAgdmFyIGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XG4gICAgICByZXNvbHZlKGRhdGFVUkwpO1xuICAgIH07XG5cbiAgICBpbWcuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gIH0pO1xufSIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsIGZyb20gJ3JjLXV0aWwvZXMvdW5zYWZlTGlmZWN5Y2xlc1BvbHlmaWxsJztcbmltcG9ydCB7IHRvQXJyYXlDaGlsZHJlbiwgbWVyZ2VDaGlsZHJlbiwgZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXksIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSwgaXNTYW1lQ2hpbGRyZW4gfSBmcm9tICcuL0NoaWxkcmVuVXRpbHMnO1xuaW1wb3J0IEFuaW1hdGVDaGlsZCBmcm9tICcuL0FuaW1hdGVDaGlsZCc7XG5pbXBvcnQgYW5pbVV0aWwgZnJvbSAnLi91dGlsL2FuaW1hdGUnO1xuXG52YXIgZGVmYXVsdEtleSA9ICdyY19hbmltYXRlXycgKyBEYXRlLm5vdygpO1xuXG5mdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIGlmICghY2hpbGRyZW4ua2V5KSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGtleTogZGVmYXVsdEtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBBbmltYXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFuaW1hdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgX3RoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHt9O1xuICAgIF90aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgX3RoaXMua2V5c1RvTGVhdmUgPSBbXTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpXG4gICAgfTtcblxuICAgIF90aGlzLmNoaWxkcmVuUmVmcyA9IHt9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gISFjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgX3RoaXMyLnBlcmZvcm1BcHBlYXIoY2hpbGQua2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5uZXh0UHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKG5leHRQcm9wcykpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIC8vIGV4Y2x1c2l2ZSBuZWVkcyBpbW1lZGlhdGUgcmVzcG9uc2VcbiAgICAgIGlmIChwcm9wcy5leGNsdXNpdmUpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBfdGhpczMuc3RvcChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBzaG93UHJvcCA9IHByb3BzLnNob3dQcm9wO1xuICAgICAgdmFyIGN1cnJlbnRseUFuaW1hdGluZ0tleXMgPSB0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXM7XG4gICAgICAvLyBsYXN0IHByb3BzIGNoaWxkcmVuIGlmIGV4Y2x1c2l2ZVxuICAgICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHByb3BzLmV4Y2x1c2l2ZSA/IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpIDogdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgICAgIC8vIGluIGNhc2UgZGVzdHJveSBpbiBzaG93UHJvcCBtb2RlXG4gICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudENoaWxkKSB7XG4gICAgICAgICAgdmFyIG5leHRDaGlsZCA9IGN1cnJlbnRDaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBjdXJyZW50Q2hpbGQua2V5KTtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGQgPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKCghbmV4dENoaWxkIHx8ICFuZXh0Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSAmJiBjdXJyZW50Q2hpbGQucHJvcHNbc2hvd1Byb3BdKSB7XG4gICAgICAgICAgICBuZXdDaGlsZCA9IFJlYWN0LmNsb25lRWxlbWVudChuZXh0Q2hpbGQgfHwgY3VycmVudENoaWxkLCBfZGVmaW5lUHJvcGVydHkoe30sIHNob3dQcm9wLCB0cnVlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gbmV4dENoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobmV3Q2hpbGQpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV3Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG5leHRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChuZXh0Q2hpbGQpIHtcbiAgICAgICAgICBpZiAoIW5leHRDaGlsZCB8fCAhZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2gobmV4dENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3Q2hpbGRyZW4gPSBtZXJnZUNoaWxkcmVuKGN1cnJlbnRDaGlsZHJlbiwgbmV4dENoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgLy8gbmVlZCByZW5kZXIgdG8gYXZvaWQgdXBkYXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2hpbGRyZW46IG5ld0NoaWxkcmVuXG4gICAgICB9KTtcblxuICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBrZXkgPSBjaGlsZCAmJiBjaGlsZC5rZXk7XG4gICAgICAgIGlmIChjaGlsZCAmJiBjdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhhc1ByZXYgPSBjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgICAgICBpZiAoc2hvd1Byb3ApIHtcbiAgICAgICAgICB2YXIgc2hvd0luTmV4dCA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzUHJldikge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5LCBzaG93UHJvcCk7XG4gICAgICAgICAgICBpZiAoIXNob3dJbk5vdyAmJiBzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzaG93SW5OZXh0KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvRW50ZXIucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzUHJldikge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjdXJyZW50Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzTmV4dCA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5Ob3cgPSBjaGlsZC5wcm9wc1tzaG93UHJvcF07XG4gICAgICAgICAgaWYgKGhhc05leHQpIHtcbiAgICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTmV4dCAmJiBzaG93SW5Ob3cpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5vdykge1xuICAgICAgICAgICAgX3RoaXMzLmtleXNUb0xlYXZlLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhhc05leHQpIHtcbiAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB2YXIga2V5c1RvRW50ZXIgPSB0aGlzLmtleXNUb0VudGVyO1xuICAgICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgICAga2V5c1RvRW50ZXIuZm9yRWFjaCh0aGlzLnBlcmZvcm1FbnRlcik7XG4gICAgICB2YXIga2V5c1RvTGVhdmUgPSB0aGlzLmtleXNUb0xlYXZlO1xuICAgICAgdGhpcy5rZXlzVG9MZWF2ZSA9IFtdO1xuICAgICAga2V5c1RvTGVhdmUuZm9yRWFjaCh0aGlzLnBlcmZvcm1MZWF2ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNWYWxpZENoaWxkQnlLZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkge1xuICAgICAgdmFyIHNob3dQcm9wID0gdGhpcy5wcm9wcy5zaG93UHJvcDtcbiAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICByZXR1cm4gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKGtleSkge1xuICAgICAgZGVsZXRlIHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuY2hpbGRyZW5SZWZzW2tleV07XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLm5leHRQcm9wcyA9IHByb3BzO1xuICAgICAgdmFyIHN0YXRlQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgdmFyIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIGlmIChzdGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNoaWxkcmVuID0gc3RhdGVDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjaGlsZC5rZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbXVzdCBzZXQga2V5IGZvciA8cmMtYW5pbWF0ZT4gY2hpbGRyZW4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBBbmltYXRlQ2hpbGQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogY2hpbGQua2V5LFxuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihub2RlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmNoaWxkcmVuUmVmc1tjaGlsZC5rZXldID0gbm9kZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyOiBwcm9wcy50cmFuc2l0aW9uRW50ZXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHByb3BzLnRyYW5zaXRpb25BcHBlYXIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZTogcHJvcHMudHJhbnNpdGlvbkxlYXZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHZhciBDb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHZhciBwYXNzZWRQcm9wcyA9IHByb3BzO1xuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwYXNzZWRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICAgICAgfSwgcHJvcHMuY29tcG9uZW50UHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICBwYXNzZWRQcm9wcyxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuWzBdIHx8IG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFuaW1hdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkFuaW1hdGUuaXNBbmltYXRlID0gdHJ1ZTtcbkFuaW1hdGUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRpb246IHt9LFxuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgY29tcG9uZW50UHJvcHM6IHt9LFxuICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gIHRyYW5zaXRpb25MZWF2ZTogdHJ1ZSxcbiAgdHJhbnNpdGlvbkFwcGVhcjogZmFsc2UsXG4gIG9uRW5kOiBub29wLFxuICBvbkVudGVyOiBub29wLFxuICBvbkxlYXZlOiBub29wLFxuICBvbkFwcGVhcjogbm9vcFxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICB0aGlzLnBlcmZvcm1FbnRlciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbEVudGVyKF90aGlzNS5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM1LCBrZXksICdlbnRlcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5wZXJmb3JtQXBwZWFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxBcHBlYXIoX3RoaXM1LmhhbmRsZURvbmVBZGRpbmcuYmluZChfdGhpczUsIGtleSwgJ2FwcGVhcicpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lQWRkaW5nID0gZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzNS5wcm9wcztcbiAgICBkZWxldGUgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XTtcbiAgICAvLyBpZiB1cGRhdGUgb24gZXhjbHVzaXZlIG1vZGUsIHNraXAgY2hlY2tcbiAgICBpZiAocHJvcHMuZXhjbHVzaXZlICYmIHByb3BzICE9PSBfdGhpczUubmV4dFByb3BzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjdXJyZW50Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKTtcbiAgICBpZiAoIV90aGlzNS5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIC8vIGV4Y2x1c2l2ZSB3aWxsIG5vdCBuZWVkIHRoaXNcbiAgICAgIF90aGlzNS5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhcHBlYXInKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgcHJvcHMub25BcHBlYXIoa2V5KTtcbiAgICAgICAgcHJvcHMub25FbmQoa2V5LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFuaW1VdGlsLmFsbG93RW50ZXJDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgIHByb3BzLm9uRW50ZXIoa2V5KTtcbiAgICAgIHByb3BzLm9uRW5kKGtleSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUxlYXZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIC8vIG1heSBhbHJlYWR5IHJlbW92ZSBieSBleGNsdXNpdmVcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXM1LmhhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXM1LCBrZXkpKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVEb25lTGVhdmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG4gICAgZGVsZXRlIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gX3RoaXM1Lm5leHRQcm9wcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgLy8gaW4gY2FzZSBzdGF0ZSBjaGFuZ2UgaXMgdG9vIGZhc3RcbiAgICBpZiAoX3RoaXM1LmlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSkge1xuICAgICAgX3RoaXM1LnBlcmZvcm1FbnRlcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKCkge1xuICAgICAgICBpZiAoYW5pbVV0aWwuYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSkge1xuICAgICAgICAgIHByb3BzLm9uTGVhdmUoa2V5KTtcbiAgICAgICAgICBwcm9wcy5vbkVuZChrZXksIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICghaXNTYW1lQ2hpbGRyZW4oX3RoaXM1LnN0YXRlLmNoaWxkcmVuLCBjdXJyZW50Q2hpbGRyZW4sIHByb3BzLnNob3dQcm9wKSkge1xuICAgICAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuOiBjdXJyZW50Q2hpbGRyZW5cbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuc2FmZUxpZmVjeWNsZXNQb2x5ZmlsbChBbmltYXRlKTsiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3NzQW5pbWF0ZSwgeyBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2Nzcy1hbmltYXRpb24nO1xuaW1wb3J0IGFuaW1VdGlsIGZyb20gJy4vdXRpbC9hbmltYXRlJztcblxudmFyIHRyYW5zaXRpb25NYXAgPSB7XG4gIGVudGVyOiAndHJhbnNpdGlvbkVudGVyJyxcbiAgYXBwZWFyOiAndHJhbnNpdGlvbkFwcGVhcicsXG4gIGxlYXZlOiAndHJhbnNpdGlvbkxlYXZlJ1xufTtcblxudmFyIEFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBbmltYXRlQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFuaW1hdGVDaGlsZCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQW5pbWF0ZUNoaWxkKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQW5pbWF0ZUNoaWxkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQW5pbWF0ZUNoaWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZUNoaWxkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzRW50ZXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0FwcGVhclN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2FwcGVhcicsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNMZWF2ZVN1cHBvcnRlZCh0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24oJ2xlYXZlJywgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHdheXMgc3luYywgZG8gbm90IGludGVydXB0IHdpdGggcmVhY3QgY29tcG9uZW50IGxpZmUgY3ljbGVcbiAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiAtPiBhbmltYXRlIGhpZGRlbiAtPlxuICAgICAgICAvLyBkaWRVcGRhdGUgLT4gYW5pbWF0ZSBsZWF2ZSAtPiB1bm1vdW50IChpZiBhbmltYXRlIGlzIG5vbmUpXG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0cmFuc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdHJhbnNpdGlvbihhbmltYXRpb25UeXBlLCBmaW5pc2hDYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgbmFtZUlzT2JqID0gdHlwZW9mIHRyYW5zaXRpb25OYW1lID09PSAnb2JqZWN0JztcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgX3RoaXMyLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfTtcbiAgICAgIGlmICgoaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfHwgIXByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXSkgJiYgdHJhbnNpdGlvbk5hbWUgJiYgcHJvcHNbdHJhbnNpdGlvbk1hcFthbmltYXRpb25UeXBlXV0pIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lSXNPYmogPyB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlXSA6IHRyYW5zaXRpb25OYW1lICsgJy0nICsgYW5pbWF0aW9uVHlwZTtcbiAgICAgICAgdmFyIGFjdGl2ZU5hbWUgPSBuYW1lICsgJy1hY3RpdmUnO1xuICAgICAgICBpZiAobmFtZUlzT2JqICYmIHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ10pIHtcbiAgICAgICAgICBhY3RpdmVOYW1lID0gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BwZXIgPSBjc3NBbmltYXRlKG5vZGUsIHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGFjdGl2ZTogYWN0aXZlTmFtZVxuICAgICAgICB9LCBlbmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wcGVyID0gcHJvcHMuYW5pbWF0aW9uW2FuaW1hdGlvblR5cGVdKG5vZGUsIGVuZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB2YXIgc3RvcHBlciA9IHRoaXMuc3RvcHBlcjtcbiAgICAgIGlmIChzdG9wcGVyKSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IG51bGw7XG4gICAgICAgIHN0b3BwZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBbmltYXRlQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVDaGlsZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0LnB1c2goY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5KSB7XG4gIHZhciByZXQgPSBudWxsO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmV0ID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciByZXQgPSBudWxsO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmtleSA9PT0ga2V5ICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0d28gY2hpbGQgd2l0aCBzYW1lIGtleSBmb3IgPHJjLWFuaW1hdGU+IGNoaWxkcmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgZm91bmQgPSAwO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvdW5kID0gY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVDaGlsZHJlbihjMSwgYzIsIHNob3dQcm9wKSB7XG4gIHZhciBzYW1lID0gYzEubGVuZ3RoID09PSBjMi5sZW5ndGg7XG4gIGlmIChzYW1lKSB7XG4gICAgYzEuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGQyID0gYzJbaW5kZXhdO1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkMikge1xuICAgICAgICBpZiAoY2hpbGQgJiYgIWNoaWxkMiB8fCAhY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmtleSAhPT0gY2hpbGQyLmtleSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzaG93UHJvcCAmJiBjaGlsZC5wcm9wc1tzaG93UHJvcF0gIT09IGNoaWxkMi5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2FtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2hpbGRyZW4ocHJldiwgbmV4dCkge1xuICB2YXIgcmV0ID0gW107XG5cbiAgLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG4gIHZhciBuZXh0Q2hpbGRyZW5QZW5kaW5nID0ge307XG4gIHZhciBwZW5kaW5nQ2hpbGRyZW4gPSBbXTtcbiAgcHJldi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dCwgY2hpbGQua2V5KSkge1xuICAgICAgaWYgKHBlbmRpbmdDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgbmV4dENoaWxkcmVuUGVuZGluZ1tjaGlsZC5rZXldID0gcGVuZGluZ0NoaWxkcmVuO1xuICAgICAgICBwZW5kaW5nQ2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV4dC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dENoaWxkcmVuUGVuZGluZywgY2hpbGQua2V5KSkge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdChuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0pO1xuICAgIH1cbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldCA9IHJldC5jb25jYXQocGVuZGluZ0NoaWxkcmVuKTtcblxuICByZXR1cm4gcmV0O1xufSIsInZhciB1dGlsID0ge1xuICBpc0FwcGVhclN1cHBvcnRlZDogZnVuY3Rpb24gaXNBcHBlYXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBpc0VudGVyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0VudGVyU3VwcG9ydGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25OYW1lICYmIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGlzTGVhdmVTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzTGVhdmVTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfSxcbiAgYWxsb3dBcHBlYXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGFsbG93RW50ZXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGFsbG93TGVhdmVDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25MZWF2ZSB8fCBwcm9wcy5hbmltYXRpb24ubGVhdmU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciB1bnNhZmVMaWZlY3ljbGVzUG9seWZpbGwgPSBmdW5jdGlvbiB1bnNhZmVMaWZlY3ljbGVzUG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9IC8vIG9ubHkgaGFuZGxlIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcblxuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9IC8vIEluIFJlYWN0IDE2LjksIFJlYWN0LlByb2ZpbGVyIHdhcyBpbnRyb2R1Y2VkIHRvZ2V0aGVyIHdpdGggVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcbiAgLy8gaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTkvMDgvMDgvcmVhY3QtdjE2LjkuMC5odG1sI3BlcmZvcm1hbmNlLW1lYXN1cmVtZW50cy13aXRoLXJlYWN0cHJvZmlsZXJcblxuXG4gIGlmICghUmVhY3QuUHJvZmlsZXIpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9IC8vIEhlcmUgcG9seWZpbGwgZ2V0IHN0YXJ0ZWRcblxuXG4gIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzO1xuICBkZWxldGUgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHM7XG4gIHJldHVybiBDb21wb25lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bnNhZmVMaWZlY3ljbGVzUG9seWZpbGw7IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uRHVyYXRpb24sIGRlZmF1bHRQcm9wcyB9IGZyb20gJy4vY29tbW9uJztcbnZhciBncmFkaWVudFNlZWQgPSAwO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50KSB7XG4gIHJldHVybiArcGVyY2VudC5yZXBsYWNlKCclJywgJycpO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KHN5bUFycmF5KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHN5bUFycmF5KSA/IHN5bUFycmF5IDogW3N5bUFycmF5XTtcbn1cblxuZnVuY3Rpb24gZ2V0UGF0aFN0eWxlcyhvZmZzZXQsIHBlcmNlbnQsIHN0cm9rZUNvbG9yLCBzdHJva2VXaWR0aCkge1xuICB2YXIgZ2FwRGVncmVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiAwO1xuICB2YXIgZ2FwUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNSA/IGFyZ3VtZW50c1s1XSA6IHVuZGVmaW5lZDtcbiAgdmFyIHJhZGl1cyA9IDUwIC0gc3Ryb2tlV2lkdGggLyAyO1xuICB2YXIgYmVnaW5Qb3NpdGlvblggPSAwO1xuICB2YXIgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICB2YXIgZW5kUG9zaXRpb25YID0gMDtcbiAgdmFyIGVuZFBvc2l0aW9uWSA9IC0yICogcmFkaXVzO1xuXG4gIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgIGVuZFBvc2l0aW9uWCA9IDIgKiByYWRpdXM7XG4gICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgIGVuZFBvc2l0aW9uWCA9IC0yICogcmFkaXVzO1xuICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgZW5kUG9zaXRpb25ZID0gMiAqIHJhZGl1cztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgfVxuXG4gIHZhciBwYXRoU3RyaW5nID0gXCJNIDUwLDUwIG0gXCIuY29uY2F0KGJlZ2luUG9zaXRpb25YLCBcIixcIikuY29uY2F0KGJlZ2luUG9zaXRpb25ZLCBcIlxcbiAgIGEgXCIpLmNvbmNhdChyYWRpdXMsIFwiLFwiKS5jb25jYXQocmFkaXVzLCBcIiAwIDEgMSBcIikuY29uY2F0KGVuZFBvc2l0aW9uWCwgXCIsXCIpLmNvbmNhdCgtZW5kUG9zaXRpb25ZLCBcIlxcbiAgIGEgXCIpLmNvbmNhdChyYWRpdXMsIFwiLFwiKS5jb25jYXQocmFkaXVzLCBcIiAwIDEgMSBcIikuY29uY2F0KC1lbmRQb3NpdGlvblgsIFwiLFwiKS5jb25jYXQoZW5kUG9zaXRpb25ZKTtcbiAgdmFyIGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICB2YXIgcGF0aFN0eWxlID0ge1xuICAgIHN0cm9rZTogc3Ryb2tlQ29sb3IsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiBcIlwiLmNvbmNhdChwZXJjZW50IC8gMTAwICogKGxlbiAtIGdhcERlZ3JlZSksIFwicHggXCIpLmNvbmNhdChsZW4sIFwicHhcIiksXG4gICAgc3Ryb2tlRGFzaG9mZnNldDogXCItXCIuY29uY2F0KGdhcERlZ3JlZSAvIDIgKyBvZmZzZXQgLyAxMDAgKiAobGVuIC0gZ2FwRGVncmVlKSwgXCJweFwiKSxcbiAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJ1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBhdGhTdHJpbmc6IHBhdGhTdHJpbmcsXG4gICAgcGF0aFN0eWxlOiBwYXRoU3R5bGVcbiAgfTtcbn1cblxudmFyIENpcmNsZSA9IGZ1bmN0aW9uIENpcmNsZShfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHN0cm9rZVdpZHRoID0gX3JlZi5zdHJva2VXaWR0aCxcbiAgICAgIHRyYWlsV2lkdGggPSBfcmVmLnRyYWlsV2lkdGgsXG4gICAgICBnYXBEZWdyZWUgPSBfcmVmLmdhcERlZ3JlZSxcbiAgICAgIGdhcFBvc2l0aW9uID0gX3JlZi5nYXBQb3NpdGlvbixcbiAgICAgIHRyYWlsQ29sb3IgPSBfcmVmLnRyYWlsQ29sb3IsXG4gICAgICBzdHJva2VMaW5lY2FwID0gX3JlZi5zdHJva2VMaW5lY2FwLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHJva2VDb2xvciA9IF9yZWYuc3Ryb2tlQ29sb3IsXG4gICAgICBwZXJjZW50ID0gX3JlZi5wZXJjZW50LFxuICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInByZWZpeENsc1wiLCBcInN0cm9rZVdpZHRoXCIsIFwidHJhaWxXaWR0aFwiLCBcImdhcERlZ3JlZVwiLCBcImdhcFBvc2l0aW9uXCIsIFwidHJhaWxDb2xvclwiLCBcInN0cm9rZUxpbmVjYXBcIiwgXCJzdHlsZVwiLCBcImNsYXNzTmFtZVwiLCBcInN0cm9rZUNvbG9yXCIsIFwicGVyY2VudFwiXSk7XG5cbiAgdmFyIGdyYWRpZW50SWQgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICBncmFkaWVudFNlZWQgKz0gMTtcbiAgICByZXR1cm4gZ3JhZGllbnRTZWVkO1xuICB9LCBbXSk7XG5cbiAgdmFyIF9nZXRQYXRoU3R5bGVzID0gZ2V0UGF0aFN0eWxlcygwLCAxMDAsIHRyYWlsQ29sb3IsIHN0cm9rZVdpZHRoLCBnYXBEZWdyZWUsIGdhcFBvc2l0aW9uKSxcbiAgICAgIHBhdGhTdHJpbmcgPSBfZ2V0UGF0aFN0eWxlcy5wYXRoU3RyaW5nLFxuICAgICAgcGF0aFN0eWxlID0gX2dldFBhdGhTdHlsZXMucGF0aFN0eWxlO1xuXG4gIHZhciBwZXJjZW50TGlzdCA9IHRvQXJyYXkocGVyY2VudCk7XG4gIHZhciBzdHJva2VDb2xvckxpc3QgPSB0b0FycmF5KHN0cm9rZUNvbG9yKTtcbiAgdmFyIGdyYWRpZW50ID0gc3Ryb2tlQ29sb3JMaXN0LmZpbmQoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChjb2xvcikgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xuICB9KTtcblxuICB2YXIgX3VzZVRyYW5zaXRpb25EdXJhdGlvID0gdXNlVHJhbnNpdGlvbkR1cmF0aW9uKHBlcmNlbnRMaXN0KSxcbiAgICAgIF91c2VUcmFuc2l0aW9uRHVyYXRpbzIgPSBfc2xpY2VkVG9BcnJheShfdXNlVHJhbnNpdGlvbkR1cmF0aW8sIDEpLFxuICAgICAgcGF0aHMgPSBfdXNlVHJhbnNpdGlvbkR1cmF0aW8yWzBdO1xuXG4gIHZhciBnZXRTdG9rZUxpc3QgPSBmdW5jdGlvbiBnZXRTdG9rZUxpc3QoKSB7XG4gICAgdmFyIHN0YWNrUHRnID0gMDtcbiAgICByZXR1cm4gcGVyY2VudExpc3QubWFwKGZ1bmN0aW9uIChwdGcsIGluZGV4KSB7XG4gICAgICB2YXIgY29sb3IgPSBzdHJva2VDb2xvckxpc3RbaW5kZXhdIHx8IHN0cm9rZUNvbG9yTGlzdFtzdHJva2VDb2xvckxpc3QubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgc3Ryb2tlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbG9yKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyBcInVybCgjXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JhZGllbnQtXCIpLmNvbmNhdChncmFkaWVudElkLCBcIilcIikgOiAnJztcbiAgICAgIHZhciBwYXRoU3R5bGVzID0gZ2V0UGF0aFN0eWxlcyhzdGFja1B0ZywgcHRnLCBjb2xvciwgc3Ryb2tlV2lkdGgsIGdhcERlZ3JlZSwgZ2FwUG9zaXRpb24pO1xuICAgICAgc3RhY2tQdGcgKz0gcHRnO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZS1wYXRoXCIpLFxuICAgICAgICBkOiBwYXRoU3R5bGVzLnBhdGhTdHJpbmcsXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIG9wYWNpdHk6IHB0ZyA9PT0gMCA/IDAgOiAxLFxuICAgICAgICBmaWxsT3BhY2l0eTogXCIwXCIsXG4gICAgICAgIHN0eWxlOiBwYXRoU3R5bGVzLnBhdGhTdHlsZSxcbiAgICAgICAgcmVmOiBwYXRoc1tpbmRleF1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZVwiKSwgY2xhc3NOYW1lKSxcbiAgICB2aWV3Qm94OiBcIjAgMCAxMDAgMTAwXCIsXG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIHJlc3RQcm9wcyksIGdyYWRpZW50ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkZWZzXCIsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5lYXJHcmFkaWVudFwiLCB7XG4gICAgaWQ6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JhZGllbnQtXCIpLmNvbmNhdChncmFkaWVudElkKSxcbiAgICB4MTogXCIxMDAlXCIsXG4gICAgeTE6IFwiMCVcIixcbiAgICB4MjogXCIwJVwiLFxuICAgIHkyOiBcIjAlXCJcbiAgfSwgT2JqZWN0LmtleXMoZ3JhZGllbnQpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gc3RyaXBQZXJjZW50VG9OdW1iZXIoYSkgLSBzdHJpcFBlcmNlbnRUb051bWJlcihiKTtcbiAgfSkubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdG9wXCIsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBvZmZzZXQ6IGtleSxcbiAgICAgIHN0b3BDb2xvcjogZ3JhZGllbnRba2V5XVxuICAgIH0pO1xuICB9KSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNpcmNsZS10cmFpbFwiKSxcbiAgICBkOiBwYXRoU3RyaW5nLFxuICAgIHN0cm9rZTogdHJhaWxDb2xvcixcbiAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgIHN0cm9rZVdpZHRoOiB0cmFpbFdpZHRoIHx8IHN0cm9rZVdpZHRoLFxuICAgIGZpbGxPcGFjaXR5OiBcIjBcIixcbiAgICBzdHlsZTogcGF0aFN0eWxlXG4gIH0pLCBnZXRTdG9rZUxpc3QoKS5yZXZlcnNlKCkpO1xufTtcblxuQ2lyY2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkNpcmNsZS5kaXNwbGF5TmFtZSA9ICdDaXJjbGUnO1xuZXhwb3J0IGRlZmF1bHQgQ2lyY2xlOyIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbkR1cmF0aW9uLCBkZWZhdWx0UHJvcHMgfSBmcm9tICcuL2NvbW1vbic7XG5cbnZhciBMaW5lID0gZnVuY3Rpb24gTGluZShfcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHBlcmNlbnQgPSBfcmVmLnBlcmNlbnQsXG4gICAgICBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIHN0cm9rZUNvbG9yID0gX3JlZi5zdHJva2VDb2xvcixcbiAgICAgIHN0cm9rZUxpbmVjYXAgPSBfcmVmLnN0cm9rZUxpbmVjYXAsXG4gICAgICBzdHJva2VXaWR0aCA9IF9yZWYuc3Ryb2tlV2lkdGgsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICB0cmFpbENvbG9yID0gX3JlZi50cmFpbENvbG9yLFxuICAgICAgdHJhaWxXaWR0aCA9IF9yZWYudHJhaWxXaWR0aCxcbiAgICAgIHRyYW5zaXRpb24gPSBfcmVmLnRyYW5zaXRpb24sXG4gICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wiY2xhc3NOYW1lXCIsIFwicGVyY2VudFwiLCBcInByZWZpeENsc1wiLCBcInN0cm9rZUNvbG9yXCIsIFwic3Ryb2tlTGluZWNhcFwiLCBcInN0cm9rZVdpZHRoXCIsIFwic3R5bGVcIiwgXCJ0cmFpbENvbG9yXCIsIFwidHJhaWxXaWR0aFwiLCBcInRyYW5zaXRpb25cIl0pO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBkZWxldGUgcmVzdFByb3BzLmdhcFBvc2l0aW9uO1xuICB2YXIgcGVyY2VudExpc3QgPSBBcnJheS5pc0FycmF5KHBlcmNlbnQpID8gcGVyY2VudCA6IFtwZXJjZW50XTtcbiAgdmFyIHN0cm9rZUNvbG9yTGlzdCA9IEFycmF5LmlzQXJyYXkoc3Ryb2tlQ29sb3IpID8gc3Ryb2tlQ29sb3IgOiBbc3Ryb2tlQ29sb3JdO1xuXG4gIHZhciBfdXNlVHJhbnNpdGlvbkR1cmF0aW8gPSB1c2VUcmFuc2l0aW9uRHVyYXRpb24ocGVyY2VudExpc3QpLFxuICAgICAgX3VzZVRyYW5zaXRpb25EdXJhdGlvMiA9IF9zbGljZWRUb0FycmF5KF91c2VUcmFuc2l0aW9uRHVyYXRpbywgMSksXG4gICAgICBwYXRocyA9IF91c2VUcmFuc2l0aW9uRHVyYXRpbzJbMF07XG5cbiAgdmFyIGNlbnRlciA9IHN0cm9rZVdpZHRoIC8gMjtcbiAgdmFyIHJpZ2h0ID0gMTAwIC0gc3Ryb2tlV2lkdGggLyAyO1xuICB2YXIgcGF0aFN0cmluZyA9IFwiTSBcIi5jb25jYXQoc3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/IGNlbnRlciA6IDAsIFwiLFwiKS5jb25jYXQoY2VudGVyLCBcIlxcbiAgICAgICAgIEwgXCIpLmNvbmNhdChzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gcmlnaHQgOiAxMDAsIFwiLFwiKS5jb25jYXQoY2VudGVyKTtcbiAgdmFyIHZpZXdCb3hTdHJpbmcgPSBcIjAgMCAxMDAgXCIuY29uY2F0KHN0cm9rZVdpZHRoKTtcbiAgdmFyIHN0YWNrUHRnID0gMDtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGluZVwiKSwgY2xhc3NOYW1lKSxcbiAgICB2aWV3Qm94OiB2aWV3Qm94U3RyaW5nLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwibm9uZVwiLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCByZXN0UHJvcHMpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxpbmUtdHJhaWxcIiksXG4gICAgZDogcGF0aFN0cmluZyxcbiAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgIHN0cm9rZTogdHJhaWxDb2xvcixcbiAgICBzdHJva2VXaWR0aDogdHJhaWxXaWR0aCB8fCBzdHJva2VXaWR0aCxcbiAgICBmaWxsT3BhY2l0eTogXCIwXCJcbiAgfSksIHBlcmNlbnRMaXN0Lm1hcChmdW5jdGlvbiAocHRnLCBpbmRleCkge1xuICAgIHZhciBwYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IFwiXCIuY29uY2F0KHB0ZywgXCJweCwgMTAwcHhcIiksXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBcIi1cIi5jb25jYXQoc3RhY2tQdGcsIFwicHhcIiksXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uIHx8ICdzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAwLjNzIGxpbmVhcidcbiAgICB9O1xuICAgIHZhciBjb2xvciA9IHN0cm9rZUNvbG9yTGlzdFtpbmRleF0gfHwgc3Ryb2tlQ29sb3JMaXN0W3N0cm9rZUNvbG9yTGlzdC5sZW5ndGggLSAxXTtcbiAgICBzdGFja1B0ZyArPSBwdGc7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGluZS1wYXRoXCIpLFxuICAgICAgZDogcGF0aFN0cmluZyxcbiAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgICAgZmlsbE9wYWNpdHk6IFwiMFwiLFxuICAgICAgcmVmOiBwYXRoc1tpbmRleF0sXG4gICAgICBzdHlsZTogcGF0aFN0eWxlXG4gICAgfSk7XG4gIH0pKTtcbn07XG5cbkxpbmUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuTGluZS5kaXNwbGF5TmFtZSA9ICdMaW5lJztcbmV4cG9ydCBkZWZhdWx0IExpbmU7IiwiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgcGVyY2VudDogMCxcbiAgcHJlZml4Q2xzOiAncmMtcHJvZ3Jlc3MnLFxuICBzdHJva2VDb2xvcjogJyMyZGI3ZjUnLFxuICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICBzdHJva2VXaWR0aDogMSxcbiAgc3R5bGU6IHt9LFxuICB0cmFpbENvbG9yOiAnI0Q5RDlEOScsXG4gIHRyYWlsV2lkdGg6IDFcbn07XG5leHBvcnQgdmFyIHVzZVRyYW5zaXRpb25EdXJhdGlvbiA9IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb25EdXJhdGlvbihwZXJjZW50TGlzdCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgdmFyIHBhdGhzID0gcGVyY2VudExpc3QubWFwKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlUmVmKCk7XG4gIH0pO1xuICB2YXIgcHJldlRpbWVTdGFtcCA9IHVzZVJlZihudWxsKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdXBkYXRlZCA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKHBhdGhzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBwYXRoID0gcGF0aHNba2V5XS5jdXJyZW50O1xuXG4gICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgIHZhciBwYXRoU3R5bGUgPSBwYXRoLnN0eWxlO1xuICAgICAgcGF0aFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcuM3MsIC4zcywgLjNzLCAuMDZzJztcblxuICAgICAgaWYgKHByZXZUaW1lU3RhbXAuY3VycmVudCAmJiBub3cgLSBwcmV2VGltZVN0YW1wLmN1cnJlbnQgPCAxMDApIHtcbiAgICAgICAgcGF0aFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcywgMHMnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgIHByZXZUaW1lU3RhbXAuY3VycmVudCA9IERhdGUubm93KCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtwYXRoc107XG59OyIsImltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcbmV4cG9ydCB7IExpbmUsIENpcmNsZSB9O1xuZXhwb3J0IGRlZmF1bHQge1xuICBMaW5lOiBMaW5lLFxuICBDaXJjbGU6IENpcmNsZVxufTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcblxuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCxyZWFjdC9zb3J0LWNvbXA6MCxyZWFjdC9wcm9wLXR5cGVzOjAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBwaWNrQXR0cnMgZnJvbSBcInJjLXV0aWwvZXMvcGlja0F0dHJzXCI7XG5pbXBvcnQgZGVmYXVsdFJlcXVlc3QgZnJvbSAnLi9yZXF1ZXN0JztcbmltcG9ydCBnZXRVaWQgZnJvbSAnLi91aWQnO1xuaW1wb3J0IGF0dHJBY2NlcHQgZnJvbSAnLi9hdHRyLWFjY2VwdCc7XG5pbXBvcnQgdHJhdmVyc2VGaWxlVHJlZSBmcm9tICcuL3RyYXZlcnNlRmlsZVRyZWUnO1xuXG52YXIgQWpheFVwbG9hZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBamF4VXBsb2FkZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoQWpheFVwbG9hZGVyKTtcblxuICBmdW5jdGlvbiBBamF4VXBsb2FkZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFqYXhVcGxvYWRlcik7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdWlkOiBnZXRVaWQoKVxuICAgIH07XG4gICAgX3RoaXMucmVxcyA9IHt9O1xuXG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG5cbiAgICAgIF90aGlzLnVwbG9hZEZpbGVzKGZpbGVzKTtcblxuICAgICAgX3RoaXMucmVzZXQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5maWxlSW5wdXQ7XG5cbiAgICAgIGlmICghZWwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wcy5vbkNsaWNrO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgIHBhcmVudC5mb2N1cygpO1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJykuYmx1cigpO1xuICAgICAgfVxuXG4gICAgICBlbC5jbGljaygpO1xuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIF90aGlzLm9uQ2xpY2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRmlsZURyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG11bHRpcGxlID0gX3RoaXMucHJvcHMubXVsdGlwbGU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChlLnR5cGUgPT09ICdkcmFnb3ZlcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlyZWN0b3J5KSB7XG4gICAgICAgIHRyYXZlcnNlRmlsZVRyZWUoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5kYXRhVHJhbnNmZXIuaXRlbXMpLCBfdGhpcy51cGxvYWRGaWxlcywgZnVuY3Rpb24gKF9maWxlKSB7XG4gICAgICAgICAgcmV0dXJuIGF0dHJBY2NlcHQoX2ZpbGUsIF90aGlzLnByb3BzLmFjY2VwdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGZpbGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5kYXRhVHJhbnNmZXIuZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgIHJldHVybiBhdHRyQWNjZXB0KGZpbGUsIF90aGlzLnByb3BzLmFjY2VwdCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtdWx0aXBsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBmaWxlcyA9IGZpbGVzLnNsaWNlKDAsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGxvYWRGaWxlcyA9IGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgdmFyIHBvc3RGaWxlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZpbGVzKTtcbiAgICAgIHBvc3RGaWxlcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGZpbGUudWlkID0gZ2V0VWlkKCk7XG4gICAgICAgIHJldHVybiBmaWxlO1xuICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBfdGhpcy51cGxvYWQoZmlsZSwgcG9zdEZpbGVzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlRmlsZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmZpbGVJbnB1dCA9IG5vZGU7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBamF4VXBsb2FkZXIsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidXBsb2FkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZChmaWxlLCBmaWxlTGlzdCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICghcHJvcHMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICAgIC8vIGFsd2F5cyBhc3luYyBpbiBjYXNlIHVzZSByZWFjdCBzdGF0ZSB0byBrZWVwIGZpbGVMaXN0XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wb3N0KGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgYmVmb3JlID0gcHJvcHMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcblxuICAgICAgaWYgKGJlZm9yZSAmJiB0eXBlb2YgYmVmb3JlICE9PSAnYm9vbGVhbicgJiYgYmVmb3JlLnRoZW4pIHtcbiAgICAgICAgYmVmb3JlLnRoZW4oZnVuY3Rpb24gKHByb2Nlc3NlZEZpbGUpIHtcbiAgICAgICAgICB2YXIgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEZpbGVdJyB8fCBwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgQmxvYl0nKSB7XG4gICAgICAgICAgICBfdGhpczIucG9zdChwcm9jZXNzZWRGaWxlKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMi5wb3N0KGZpbGUpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wb3N0KGZpbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicG9zdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KGZpbGUpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgb25TdGFydCA9IHByb3BzLm9uU3RhcnQsXG4gICAgICAgICAgb25Qcm9ncmVzcyA9IHByb3BzLm9uUHJvZ3Jlc3MsXG4gICAgICAgICAgX3Byb3BzJHRyYW5zZm9ybUZpbGUgPSBwcm9wcy50cmFuc2Zvcm1GaWxlLFxuICAgICAgICAgIHRyYW5zZm9ybUZpbGUgPSBfcHJvcHMkdHJhbnNmb3JtRmlsZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG9yaWdpbkZpbGUpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbkZpbGU7XG4gICAgICB9IDogX3Byb3BzJHRyYW5zZm9ybUZpbGU7XG4gICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgYWN0aW9uID0gYWN0aW9uKGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoYWN0aW9uKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgdWlkID0gZmlsZS51aWQ7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gcHJvcHMuY3VzdG9tUmVxdWVzdCB8fCBkZWZhdWx0UmVxdWVzdDtcbiAgICAgICAgdmFyIHRyYW5zZm9ybSA9IFByb21pc2UucmVzb2x2ZSh0cmFuc2Zvcm1GaWxlKGZpbGUpKS50aGVuKGZ1bmN0aW9uICh0cmFuc2Zvcm1lZEZpbGUpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHByb3BzLmRhdGE7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhKHRyYW5zZm9ybWVkRmlsZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFt0cmFuc2Zvcm1lZEZpbGUsIGRhdGFdKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgfSk7XG4gICAgICAgIHRyYW5zZm9ybS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIHRyYW5zZm9ybWVkRmlsZSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICBkYXRhID0gX3JlZjJbMV07XG5cbiAgICAgICAgICB2YXIgcmVxdWVzdE9wdGlvbiA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgZmlsZW5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgZmlsZTogdHJhbnNmb3JtZWRGaWxlLFxuICAgICAgICAgICAgaGVhZGVyczogcHJvcHMuaGVhZGVycyxcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogcHJvcHMud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgbWV0aG9kOiBwcm9wcy5tZXRob2QgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgb25Qcm9ncmVzczogb25Qcm9ncmVzcyA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoZSwgZmlsZSk7XG4gICAgICAgICAgICB9IDogbnVsbCxcbiAgICAgICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHJldCwgeGhyKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczMucmVxc1t1aWRdO1xuICAgICAgICAgICAgICBwcm9wcy5vblN1Y2Nlc3MocmV0LCBmaWxlLCB4aHIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyLCByZXQpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMy5yZXFzW3VpZF07XG4gICAgICAgICAgICAgIHByb3BzLm9uRXJyb3IoZXJyLCByZXQsIGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgb25TdGFydChmaWxlKTtcbiAgICAgICAgICBfdGhpczMucmVxc1t1aWRdID0gcmVxdWVzdChyZXF1ZXN0T3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdWlkOiBnZXRVaWQoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFib3J0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICAgIHZhciByZXFzID0gdGhpcy5yZXFzO1xuXG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICB2YXIgdWlkID0gZmlsZS51aWQgPyBmaWxlLnVpZCA6IGZpbGU7XG5cbiAgICAgICAgaWYgKHJlcXNbdWlkXSAmJiByZXFzW3VpZF0uYWJvcnQpIHtcbiAgICAgICAgICByZXFzW3VpZF0uYWJvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhyZXFzKS5mb3JFYWNoKGZ1bmN0aW9uICh1aWQpIHtcbiAgICAgICAgICBpZiAocmVxc1t1aWRdICYmIHJlcXNbdWlkXS5hYm9ydCkge1xuICAgICAgICAgICAgcmVxc1t1aWRdLmFib3J0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVsZXRlIHJlcXNbdWlkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIFRhZyA9IF90aGlzJHByb3BzMi5jb21wb25lbnQsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMyLmlkLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMyLm11bHRpcGxlLFxuICAgICAgICAgIGFjY2VwdCA9IF90aGlzJHByb3BzMi5hY2NlcHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgZGlyZWN0b3J5ID0gX3RoaXMkcHJvcHMyLmRpcmVjdG9yeSxcbiAgICAgICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2sgPSBfdGhpcyRwcm9wczIub3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgICAgICAgIG9uTW91c2VFbnRlciA9IF90aGlzJHByb3BzMi5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlID0gX3RoaXMkcHJvcHMyLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1wiY29tcG9uZW50XCIsIFwicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJpZFwiLCBcInN0eWxlXCIsIFwibXVsdGlwbGVcIiwgXCJhY2NlcHRcIiwgXCJjaGlsZHJlblwiLCBcImRpcmVjdG9yeVwiLCBcIm9wZW5GaWxlRGlhbG9nT25DbGlja1wiLCBcIm9uTW91c2VFbnRlclwiLCBcIm9uTW91c2VMZWF2ZVwiXSk7XG5cbiAgICAgIHZhciBjbHMgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTsgLy8gYmVjYXVzZSBpbnB1dCBkb24ndCBoYXZlIGRpcmVjdG9yeS93ZWJraXRkaXJlY3RvcnkgdHlwZSBkZWNsYXJhdGlvblxuXG4gICAgICB2YXIgZGlyUHJvcHMgPSBkaXJlY3RvcnkgPyB7XG4gICAgICAgIGRpcmVjdG9yeTogJ2RpcmVjdG9yeScsXG4gICAgICAgIHdlYmtpdGRpcmVjdG9yeTogJ3dlYmtpdGRpcmVjdG9yeSdcbiAgICAgIH0gOiB7fTtcbiAgICAgIHZhciBldmVudHMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbkNsaWNrOiBvcGVuRmlsZURpYWxvZ09uQ2xpY2sgPyB0aGlzLm9uQ2xpY2sgOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgb25LZXlEb3duOiBvcGVuRmlsZURpYWxvZ09uQ2xpY2sgPyB0aGlzLm9uS2V5RG93biA6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmUsXG4gICAgICAgIG9uRHJvcDogdGhpcy5vbkZpbGVEcm9wLFxuICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLm9uRmlsZURyb3AsXG4gICAgICAgIHRhYkluZGV4OiAnMCdcbiAgICAgIH07XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWcsIE9iamVjdC5hc3NpZ24oe30sIGV2ZW50cywge1xuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIE9iamVjdC5hc3NpZ24oe30sIHBpY2tBdHRycyhvdGhlclByb3BzLCB7XG4gICAgICAgIGFyaWE6IHRydWUsXG4gICAgICAgIGRhdGE6IHRydWVcbiAgICAgIH0pLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgIHJlZjogdGhpcy5zYXZlRmlsZUlucHV0LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiB0aGlzLnN0YXRlLnVpZCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRcbiAgICAgIH0sIGRpclByb3BzLCB7XG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgIH0pKSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBamF4VXBsb2FkZXI7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFqYXhVcGxvYWRlcjsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuXG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczowICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFqYXhVcGxvYWQgZnJvbSAnLi9BamF4VXBsb2FkZXInO1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbnZhciBVcGxvYWQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFVwbG9hZCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihVcGxvYWQpO1xuXG4gIGZ1bmN0aW9uIFVwbG9hZCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXBsb2FkKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBfdGhpcy5zYXZlVXBsb2FkZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudXBsb2FkZXIgPSBub2RlO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXBsb2FkLCBbe1xuICAgIGtleTogXCJhYm9ydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydChmaWxlKSB7XG4gICAgICB0aGlzLnVwbG9hZGVyLmFib3J0KGZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWpheFVwbG9hZCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IHRoaXMuc2F2ZVVwbG9hZGVyXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFVwbG9hZDtcbn0oQ29tcG9uZW50KTtcblxuVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIHByZWZpeENsczogJ3JjLXVwbG9hZCcsXG4gIGRhdGE6IHt9LFxuICBoZWFkZXJzOiB7fSxcbiAgbmFtZTogJ2ZpbGUnLFxuICBtdWx0aXBhcnQ6IGZhbHNlLFxuICBvblN0YXJ0OiBlbXB0eSxcbiAgb25FcnJvcjogZW1wdHksXG4gIG9uU3VjY2VzczogZW1wdHksXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgYmVmb3JlVXBsb2FkOiBudWxsLFxuICBjdXN0b21SZXF1ZXN0OiBudWxsLFxuICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICBvcGVuRmlsZURpYWxvZ09uQ2xpY2s6IHRydWVcbn07XG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7IiwiZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzdWZmaXgpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChmaWxlLCBhY2NlcHRlZEZpbGVzKSB7XG4gIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICB2YXIgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lIHx8ICcnO1xuICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZSB8fCAnJztcbiAgICB2YXIgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuXG4gICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBlbmRzV2l0aChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLCB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufSk7IiwiaW1wb3J0IFVwbG9hZCBmcm9tICcuL1VwbG9hZCc7XG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7IiwiZnVuY3Rpb24gZ2V0RXJyb3Iob3B0aW9uLCB4aHIpIHtcbiAgdmFyIG1zZyA9IFwiY2Fubm90IFwiLmNvbmNhdChvcHRpb24ubWV0aG9kLCBcIiBcIikuY29uY2F0KG9wdGlvbi5hY3Rpb24sIFwiIFwiKS5jb25jYXQoeGhyLnN0YXR1cywgXCInXCIpO1xuICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZyk7XG4gIGVyci5zdGF0dXMgPSB4aHIuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gb3B0aW9uLm1ldGhvZDtcbiAgZXJyLnVybCA9IG9wdGlvbi5hY3Rpb247XG4gIHJldHVybiBlcnI7XG59XG5cbmZ1bmN0aW9uIGdldEJvZHkoeGhyKSB7XG4gIHZhciB0ZXh0ID0geGhyLnJlc3BvbnNlVGV4dCB8fCB4aHIucmVzcG9uc2U7XG5cbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBsb2FkKG9wdGlvbikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChvcHRpb24ub25Qcm9ncmVzcyAmJiB4aHIudXBsb2FkKSB7XG4gICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3MoZSkge1xuICAgICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uLm9uUHJvZ3Jlc3MoZSk7XG4gICAgfTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblxuXG4gIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gIGlmIChvcHRpb24uZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbi5kYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IG9wdGlvbi5kYXRhW2tleV07IC8vIHN1cHBvcnQga2V5LXZhbHVlIGFycmF5IGRhdGFcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAvLyB7IGxpc3Q6IFsgMTEsIDIyIF0gfVxuICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnbGlzdFtdJywgMTEpO1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlwiLmNvbmNhdChrZXksIFwiW11cIiksIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBvcHRpb24uZGF0YVtrZXldKTtcbiAgICB9KTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblxuXG4gIGlmIChvcHRpb24uZmlsZSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICBmb3JtRGF0YS5hcHBlbmQob3B0aW9uLmZpbGVuYW1lLCBvcHRpb24uZmlsZSwgb3B0aW9uLmZpbGUubmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgZm9ybURhdGEuYXBwZW5kKG9wdGlvbi5maWxlbmFtZSwgb3B0aW9uLmZpbGUpO1xuICB9XG5cbiAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihlKSB7XG4gICAgb3B0aW9uLm9uRXJyb3IoZSk7XG4gIH07XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAvLyBhbGxvdyBzdWNjZXNzIHdoZW4gMnh4IHN0YXR1c1xuICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3VwbG9hZC9pc3N1ZXMvMzRcbiAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCB8fCB4aHIuc3RhdHVzID49IDMwMCkge1xuICAgICAgcmV0dXJuIG9wdGlvbi5vbkVycm9yKGdldEVycm9yKG9wdGlvbiwgeGhyKSwgZ2V0Qm9keSh4aHIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9uLm9uU3VjY2VzcyhnZXRCb2R5KHhociksIHhocik7XG4gIH07XG5cbiAgeGhyLm9wZW4ob3B0aW9uLm1ldGhvZCwgb3B0aW9uLmFjdGlvbiwgdHJ1ZSk7IC8vIEhhcyB0byBiZSBhZnRlciBgLm9wZW4oKWAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZW55by9kcm9wem9uZS9pc3N1ZXMvMTc5XG5cbiAgaWYgKG9wdGlvbi53aXRoQ3JlZGVudGlhbHMgJiYgJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIH1cblxuICB2YXIgaGVhZGVycyA9IG9wdGlvbi5oZWFkZXJzIHx8IHt9OyAvLyB3aGVuIHNldCBoZWFkZXJzWydYLVJlcXVlc3RlZC1XaXRoJ10gPSBudWxsICwgY2FuIGNsb3NlIGRlZmF1bHQgWEhSIGhlYWRlclxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91cGxvYWQvaXNzdWVzLzMzXG5cbiAgaWYgKGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgaWYgKGhlYWRlcnNbaF0gIT09IG51bGwpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGgsIGhlYWRlcnNbaF0pO1xuICAgIH1cbiAgfSk7XG4gIHhoci5zZW5kKGZvcm1EYXRhKTtcbiAgcmV0dXJuIHtcbiAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICB4aHIuYWJvcnQoKTtcbiAgICB9XG4gIH07XG59IiwiZnVuY3Rpb24gbG9vcEZpbGVzKGl0ZW0sIGNhbGxiYWNrKSB7XG4gIHZhciBkaXJSZWFkZXIgPSBpdGVtLmNyZWF0ZVJlYWRlcigpO1xuICB2YXIgZmlsZUxpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBzZXF1ZW5jZSgpIHtcbiAgICBkaXJSZWFkZXIucmVhZEVudHJpZXMoZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgIHZhciBlbnRyeUxpc3QgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW50cmllcyk7XG4gICAgICBmaWxlTGlzdCA9IGZpbGVMaXN0LmNvbmNhdChlbnRyeUxpc3QpOyAvLyBDaGVjayBpZiBhbGwgdGhlIGZpbGUgaGFzIGJlZW4gdmlld2VkXG5cbiAgICAgIHZhciBpc0ZpbmlzaGVkID0gIWVudHJ5TGlzdC5sZW5ndGg7XG5cbiAgICAgIGlmIChpc0ZpbmlzaGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKGZpbGVMaXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlcXVlbmNlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXF1ZW5jZSgpO1xufVxuXG52YXIgdHJhdmVyc2VGaWxlVHJlZSA9IGZ1bmN0aW9uIHRyYXZlcnNlRmlsZVRyZWUoZmlsZXMsIGNhbGxiYWNrLCBpc0FjY2VwdGVkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbmFtaW5nLWNvbnZlbnRpb25cbiAgdmFyIF90cmF2ZXJzZUZpbGVUcmVlID0gZnVuY3Rpb24gX3RyYXZlcnNlRmlsZVRyZWUoaXRlbSwgcGF0aCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGl0ZW0ucGF0aCA9IHBhdGggfHwgJyc7XG5cbiAgICBpZiAoaXRlbS5pc0ZpbGUpIHtcbiAgICAgIGl0ZW0uZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBpZiAoaXNBY2NlcHRlZChmaWxlKSkge1xuICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NDI2XG4gICAgICAgICAgaWYgKGl0ZW0uZnVsbFBhdGggJiYgIWZpbGUud2Via2l0UmVsYXRpdmVQYXRoKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhmaWxlLCB7XG4gICAgICAgICAgICAgIHdlYmtpdFJlbGF0aXZlUGF0aDoge1xuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuICAgICAgICAgICAgZmlsZS53ZWJraXRSZWxhdGl2ZVBhdGggPSBpdGVtLmZ1bGxQYXRoLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhmaWxlLCB7XG4gICAgICAgICAgICAgIHdlYmtpdFJlbGF0aXZlUGF0aDoge1xuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWxsYmFjayhbZmlsZV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uaXNEaXJlY3RvcnkpIHtcbiAgICAgIGxvb3BGaWxlcyhpdGVtLCBmdW5jdGlvbiAoZW50cmllcykge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5SXRlbSkge1xuICAgICAgICAgIF90cmF2ZXJzZUZpbGVUcmVlKGVudHJ5SXRlbSwgXCJcIi5jb25jYXQocGF0aCkuY29uY2F0KGl0ZW0ubmFtZSwgXCIvXCIpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgIF90cmF2ZXJzZUZpbGVUcmVlKGZpbGUud2Via2l0R2V0QXNFbnRyeSgpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0cmF2ZXJzZUZpbGVUcmVlOyIsInZhciBub3cgPSArbmV3IERhdGUoKTtcbnZhciBpbmRleCA9IDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1aWQoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICByZXR1cm4gXCJyYy11cGxvYWQtXCIuY29uY2F0KG5vdywgXCItXCIpLmNvbmNhdCgrK2luZGV4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdyYXBwZXJSYWY7XG5cbnZhciByYWYgPSBmdW5jdGlvbiByYWYoY2FsbGJhY2spIHtcbiAgcmV0dXJuICtzZXRUaW1lb3V0KGNhbGxiYWNrLCAxNik7XG59O1xuXG52YXIgY2FmID0gZnVuY3Rpb24gY2FmKG51bSkge1xuICByZXR1cm4gY2xlYXJUaW1lb3V0KG51bSk7XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlcXVlc3RBbmltYXRpb25GcmFtZScgaW4gd2luZG93KSB7XG4gIHJhZiA9IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcblxuICBjYWYgPSBmdW5jdGlvbiBjYWYoaGFuZGxlKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShoYW5kbGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwcGVyUmFmKGNhbGxiYWNrKSB7XG4gIHJldHVybiByYWYoY2FsbGJhY2spO1xufVxuXG53cmFwcGVyUmFmLmNhbmNlbCA9IGNhZjsiXSwic291cmNlUm9vdCI6IiJ9