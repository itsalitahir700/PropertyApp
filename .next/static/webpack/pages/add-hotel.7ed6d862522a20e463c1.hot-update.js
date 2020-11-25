webpackHotUpdate_N_E("pages/add-hotel",{

/***/ "./container/AddListing/AddListing.js":
/*!********************************************!*\
  !*** ./container/AddListing/AddListing.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/radio */ "./node_modules/antd/lib/radio/index.js");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);













var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddListing.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement;


var Addlisting = function Addlisting() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(false),
      loading = _useState[0],
      setloading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__["useState"])(""),
      imageUrl = _useState2[0],
      setimageUrl = _useState2[1];

  function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
      return callback(reader.result);
    });
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    var isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.error("You can only upload JPG/PNG file!");
    }

    var isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  }

  var handleChange = function handleChange(info) {
    if (info.file.status === "uploading") {
      setloading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, function (imageUrl) {
        setimageUrl(imageUrl);
        setloading(false);
      });
    }
  };

  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    message: "PROPERTY TYPE AND LOCATION",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Purpose",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Sale"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, "Rent"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Property Type",
    name: "size",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Group, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "Homes"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "plots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "Plots"), __jsx(antd_lib_radio__WEBPACK_IMPORTED_MODULE_9___default.a.Button, {
    value: "commercial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, "Commercial"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Select city",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Islamabad"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, "Rawalpindi"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, "Karachi"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Location",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    message: "PROPERTY DETAILS",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Property Title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Property Details",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "All inclusive Price",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Land Area",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Square feet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "1",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "1"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "2"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "3"))))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Bedrooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "Islamabad"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "1"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, "2"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Bathrooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "demo",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Islamabad"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "1"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, "2"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Expires After",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "6 Months",
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, "6 Months"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option, {
    value: "1 Year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "1 Year"))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    message: "Add Images",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx("center", {
    className: "pt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(antd_lib_upload__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      marginTop: "20px"
    },
    name: "avatar",
    listType: "picture-card",
    className: "avatar-uploader",
    showUploadList: false,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    beforeUpload: beforeUpload,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
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
      lineNumber: 175,
      columnNumber: 15
    }
  }) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: loading ? "loading" : "plus",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "ant-upload-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }, "Upload"))))), __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_10___default.a, {
    message: "CONTACT DETAILS",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      lineNumber: 186,
      columnNumber: 7
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a, {
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
      lineNumber: 196,
      columnNumber: 7
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "User Name ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_8___default.a.Item, {
    label: "Password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  })), __jsx("center", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, "Submit Property"))));
};

_s(Addlisting, "DsFpQkE140qWSsgRNqtzi7psycI=");

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

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
exports.default = EllipsisOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/EllipsisOutlined.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/icons/EllipsisOutlined.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EllipsisOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/PlusOutlined.js":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/icons/PlusOutlined.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _PlusOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/PlusOutlined */ "./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _PlusOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js ***!
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

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EllipsisOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _EllipsisOutlined.default
  }));
};

EllipsisOutlined.displayName = 'EllipsisOutlined';

var _default = /*#__PURE__*/React.forwardRef(EllipsisOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/card/Grid.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Grid.js ***!
  \********************************************/
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

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

var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        _props$hoverable = props.hoverable,
        hoverable = _props$hoverable === void 0 ? true : _props$hoverable,
        others = __rest(props, ["prefixCls", "className", "hoverable"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-grid"), className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-grid-hoverable"), hoverable));
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classString
    }));
  });
};

var _default = Grid;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/card/Meta.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Meta.js ***!
  \********************************************/
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

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

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

var Meta = function Meta(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var customizePrefixCls = props.prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = (0, _classnames["default"])("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description) : null;
    var MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom) : null;
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};

var _default = Meta;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/card/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/card/index.js ***!
  \*********************************************/
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

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _Grid = _interopRequireDefault(__webpack_require__(/*! ./Grid */ "./node_modules/antd/lib/card/Grid.js"));

var _Meta = _interopRequireDefault(__webpack_require__(/*! ./Meta */ "./node_modules/antd/lib/card/Meta.js"));

var _tabs = _interopRequireDefault(__webpack_require__(/*! ../tabs */ "./node_modules/antd/lib/tabs/index.js"));

var _row = _interopRequireDefault(__webpack_require__(/*! ../row */ "./node_modules/antd/lib/row/index.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ../col */ "./node_modules/antd/lib/col/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

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

function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/React.createElement("span", null, action))
    );
  });
  return actionList;
}

var Card = function Card(props) {
  var _extends2, _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(_SizeContext["default"]);

  var onTabChange = function onTabChange(key) {
    if (props.onTabChange) {
      props.onTabChange(key);
    }
  };

  var isContainGrid = function isContainGrid() {
    var containGrid;
    React.Children.forEach(props.children, function (element) {
      if (element && element.type && element.type === _Grid["default"]) {
        containGrid = true;
      }
    });
    return containGrid;
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      extra = props.extra,
      _props$headStyle = props.headStyle,
      headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      title = props.title,
      loading = props.loading,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      customizeSize = props.size,
      type = props.type,
      cover = props.cover,
      actions = props.actions,
      tabList = props.tabList,
      children = props.children,
      activeTabKey = props.activeTabKey,
      defaultActiveTabKey = props.defaultActiveTabKey,
      tabBarExtraContent = props.tabBarExtraContent,
      hoverable = props.hoverable,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      others = __rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);

  var prefixCls = getPrefixCls('card', customizePrefixCls);
  var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? {
    padding: 24
  } : undefined;
  var block = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-block")
  });
  var loadingBlock = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading-content"),
    style: loadingBlockStyle
  }, /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 22
  }, block)), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 8
  }, block), /*#__PURE__*/React.createElement(_col["default"], {
    span: 15
  }, block)), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 6
  }, block), /*#__PURE__*/React.createElement(_col["default"], {
    span: 18
  }, block)), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 13
  }, block), /*#__PURE__*/React.createElement(_col["default"], {
    span: 9
  }, block)), /*#__PURE__*/React.createElement(_row["default"], {
    gutter: 8
  }, /*#__PURE__*/React.createElement(_col["default"], {
    span: 4
  }, block), /*#__PURE__*/React.createElement(_col["default"], {
    span: 3
  }, block), /*#__PURE__*/React.createElement(_col["default"], {
    span: 16
  }, block)));
  var hasActiveTabKey = activeTabKey !== undefined;
  var extraProps = (0, _extends3["default"])((0, _extends3["default"])({}, tabProps), (_extends2 = {}, (0, _defineProperty2["default"])(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0, _defineProperty2["default"])(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));
  var head;
  var tabs = tabList && tabList.length ? /*#__PURE__*/React.createElement(_tabs["default"], (0, _extends3["default"])({
    size: "large"
  }, extraProps, {
    className: "".concat(prefixCls, "-head-tabs"),
    onChange: onTabChange
  }), tabList.map(function (item) {
    return /*#__PURE__*/React.createElement(_tabs["default"].TabPane, {
      tab: item.tab,
      disabled: item.disabled,
      key: item.key
    });
  })) : null;

  if (title || extra || tabs) {
    head = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head"),
      style: headStyle
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head-wrapper")
    }, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-head-title")
    }, title), extra && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), tabs);
  }

  var coverDom = cover ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-cover")
  }, cover) : null;
  var body = /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, loading ? loadingBlock : children);
  var actionDom = actions && actions.length ? /*#__PURE__*/React.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, getAction(actions)) : null;
  var divProps = (0, _omit["default"])(others, ['onTabChange']);
  var mergedSize = customizeSize || size;
  var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), loading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-contain-grid"), isContainGrid()), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/React.createElement("div", (0, _extends3["default"])({}, divProps, {
    className: classString
  }), head, coverDom, body, actionDom);
};

Card.Grid = _Grid["default"];
Card.Meta = _Meta["default"];
var _default = Card;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tabs/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/tabs/index.js ***!
  \*********************************************/
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

var _rcTabs = _interopRequireWildcard(__webpack_require__(/*! rc-tabs */ "./node_modules/rc-tabs/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EllipsisOutlined */ "./node_modules/@ant-design/icons/EllipsisOutlined.js"));

var _PlusOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/PlusOutlined */ "./node_modules/@ant-design/icons/PlusOutlined.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

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

function Tabs(_a) {
  var _classNames;

  var type = _a.type,
      className = _a.className,
      size = _a.size,
      _onEdit = _a.onEdit,
      hideAdd = _a.hideAdd,
      centered = _a.centered,
      addIcon = _a.addIcon,
      props = __rest(_a, ["type", "className", "size", "onEdit", "hideAdd", "centered", "addIcon"]);

  var customizePrefixCls = props.prefixCls;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('tabs', customizePrefixCls);
  var editable;

  if (type === 'editable-card') {
    editable = {
      onEdit: function onEdit(editType, _ref) {
        var key = _ref.key,
            event = _ref.event;
        _onEdit === null || _onEdit === void 0 ? void 0 : _onEdit(editType === 'add' ? event : key, editType);
      },
      removeIcon: /*#__PURE__*/React.createElement(_CloseOutlined["default"], null),
      addIcon: addIcon || /*#__PURE__*/React.createElement(_PlusOutlined["default"], null),
      showAdd: hideAdd !== true
    };
  }

  (0, _devWarning["default"])(!('onPrevClick' in props) && !('onNextClick' in props), 'Tabs', '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.');
  return /*#__PURE__*/React.createElement(_rcTabs["default"], (0, _extends2["default"])({
    direction: direction
  }, props, {
    moreTransitionName: "slide-up",
    className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-card"), ['card', 'editable-card'].includes(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-editable-card"), type === 'editable-card'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-centered"), centered), _classNames), className),
    editable: editable,
    moreIcon: /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null),
    prefixCls: prefixCls
  }));
}

Tabs.TabPane = _rcTabs.TabPane;
var _default = Tabs;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-dropdown/es/Dropdown.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dropdown/es/Dropdown.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-dropdown/es/placements.js");








function Dropdown(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
      transitionName = props.transitionName,
      animation = props.animation,
      align = props.align,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
      _props$placements = props.placements,
      placements = _props$placements === void 0 ? _placements__WEBPACK_IMPORTED_MODULE_6__["default"] : _props$placements,
      getPopupContainer = props.getPopupContainer,
      showAction = props.showAction,
      hideAction = props.hideAction,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      visible = props.visible,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      otherProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      triggerVisible = _React$useState2[0],
      setTriggerVisible = _React$useState2[1];

  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return triggerRef.current;
  });

  var getOverlayElement = function getOverlayElement() {
    var overlay = props.overlay;
    var overlayElement;

    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }

    return overlayElement;
  };

  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    var overlayProps = getOverlayElement().props;
    setTriggerVisible(false);

    if (onOverlayClick) {
      onOverlayClick(e);
    }

    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  var onVisibleChange = function onVisibleChange(visible) {
    var onVisibleChange = props.onVisibleChange;
    setTriggerVisible(visible);

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible);
    }
  };

  var getMenuElement = function getMenuElement() {
    var overlayElement = getOverlayElement();
    var extraOverlayProps = {
      prefixCls: "".concat(prefixCls, "-menu"),
      onClick: onClick
    };

    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, arrow && react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "".concat(prefixCls, "-arrow")
    }), react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](overlayElement, extraOverlayProps));
  };

  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = props.overlay;

    if (typeof overlay === 'function') {
      return getMenuElement;
    }

    return getMenuElement();
  };

  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
        alignPoint = props.alignPoint;

    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;

    if (openClassName !== undefined) {
      return openClassName;
    }

    return "".concat(prefixCls, "-open");
  };

  var renderChildren = function renderChildren() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(childrenProps.className, getOpenClassName());
    return triggerVisible && children ? react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, {
      className: childClassName
    }) : children;
  };

  var triggerHideAction = hideAction;

  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }

  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](rc_trigger__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames__WEBPACK_IMPORTED_MODULE_5___default()(overlayClassName, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    builtinPlacements: placements,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction || [],
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer
  }), renderChildren());
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](Dropdown));

/***/ }),

/***/ "./node_modules/rc-dropdown/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-dropdown/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/rc-dropdown/es/Dropdown.js");

/* harmony default export */ __webpack_exports__["default"] = (_Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-dropdown/es/placements.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-dropdown/es/placements.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContext.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabContext.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/AddButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/AddButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      editable = _ref.editable,
      locale = _ref.locale,
      style = _ref.style;

  if (!editable || editable.showAdd === false) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    ref: ref,
    type: "button",
    className: "".concat(prefixCls, "-nav-add"),
    style: style,
    "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
    onClick: function onClick(event) {
      editable.onEdit('add', {
        event: event
      });
    }
  }, editable.addIcon || '+');
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](AddButton));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/OperationNode.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");
/* harmony import */ var rc_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");










function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      tabs = _ref.tabs,
      locale = _ref.locale,
      mobile = _ref.mobile,
      _ref$moreIcon = _ref.moreIcon,
      moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      style = _ref.style,
      className = _ref.className,
      editable = _ref.editable,
      tabBarGutter = _ref.tabBarGutter,
      rtl = _ref.rtl,
      onTabClick = _ref.onTabClick;

  // ======================== Dropdown ========================
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      selectedKey = _useState4[0],
      setSelectedKey = _useState4[1];

  var popupId = "".concat(id, "-more-popup");
  var dropdownPrefix = "".concat(prefixCls, "-dropdown");
  var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  var menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick(_ref2) {
      var key = _ref2.key,
          domEvent = _ref2.domEvent;
      onTabClick(key, domEvent);
      setOpen(false);
    },
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_menu__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
      key: tab.key,
      id: "".concat(popupId, "-").concat(tab.key),
      role: "option",
      "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
      disabled: tab.disabled
    }, tab.tab);
  }));

  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function (tab) {
      return !tab.disabled;
    });
    var selectedIndex = enabledTabs.findIndex(function (tab) {
      return tab.key === selectedKey;
    }) || 0;
    var len = enabledTabs.length;

    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];

      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }

  function onKeyDown(e) {
    var which = e.which;

    if (!open) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }

      return;
    }

    switch (which) {
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].UP:
        selectOffset(-1);
        e.preventDefault();
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].DOWN:
        selectOffset(1);
        e.preventDefault();
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ESC:
        setOpen(false);
        break;

      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].SPACE:
      case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_4__["default"].ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  } // ========================= Effect =========================


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // We use query element here to avoid React strict warning
    var ele = document.getElementById(selectedItemId);

    if (ele && ele.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedKey]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]); // ========================= Render =========================

  var moreStyle = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rtl ? 'marginLeft' : 'marginRight', tabBarGutter);

  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }

  var overlayClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(dropdownPrefix, "-rtl"), rtl));
  var moreNode = mobile ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    prefixCls: dropdownPrefix,
    overlay: menu,
    trigger: ['hover'],
    visible: open,
    transitionName: moreTransitionName,
    onVisibleChange: setOpen,
    overlayClassName: overlayClassName,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", {
    type: "button",
    className: "".concat(prefixCls, "-nav-more"),
    style: moreStyle,
    tabIndex: -1,
    "aria-hidden": "true",
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: "".concat(id, "-more"),
    "aria-expanded": open,
    onKeyDown: onKeyDown
  }, moreIcon));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-nav-operations"), className),
    style: style,
    ref: ref
  }, moreNode, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_AddButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    prefixCls: prefixCls,
    locale: locale,
    editable: editable
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](OperationNode));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/TabNode.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/TabNode.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");





function TabNode(_ref, ref) {
  var _classNames;

  var prefixCls = _ref.prefixCls,
      id = _ref.id,
      active = _ref.active,
      rtl = _ref.rtl,
      _ref$tab = _ref.tab,
      key = _ref$tab.key,
      tab = _ref$tab.tab,
      disabled = _ref$tab.disabled,
      closeIcon = _ref$tab.closeIcon,
      tabBarGutter = _ref.tabBarGutter,
      tabPosition = _ref.tabPosition,
      closable = _ref.closable,
      renderWrapper = _ref.renderWrapper,
      removeAriaLabel = _ref.removeAriaLabel,
      editable = _ref.editable,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove,
      onFocus = _ref.onFocus;
  var tabPrefix = "".concat(prefixCls, "-tab");
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    return onRemove;
  }, []);
  var nodeStyle = {};

  if (tabPosition === 'top' || tabPosition === 'bottom') {
    nodeStyle[rtl ? 'marginLeft' : 'marginRight'] = tabBarGutter;
  } else {
    nodeStyle.marginBottom = tabBarGutter;
  }

  var removable = editable && closable !== false && !disabled;

  function onInternalClick(e) {
    if (disabled) return;
    onClick(e);
  }

  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key: key,
      event: event
    });
  }

  var node = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    key: key,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(tabPrefix, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-with-remove"), removable), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-active"), active), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
    style: nodeStyle,
    onClick: onInternalClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    role: "tab",
    "aria-selected": active,
    id: id && "".concat(id, "-tab-").concat(key),
    className: "".concat(tabPrefix, "-btn"),
    "aria-controls": id && "".concat(id, "-panel-").concat(key),
    "aria-disabled": disabled,
    tabIndex: disabled ? null : 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown: function onKeyDown(e) {
      if ([rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].SPACE, rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_3__["default"].ENTER].includes(e.which)) {
        e.preventDefault();
        onInternalClick(e);
      }
    },
    onFocus: onFocus
  }, tab), removable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    type: "button",
    "aria-label": removeAriaLabel || 'remove',
    tabIndex: 0,
    className: "".concat(tabPrefix, "-remove"),
    onClick: function onClick(e) {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || '×'));

  if (renderWrapper) {
    node = renderWrapper(node);
  }

  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](TabNode));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabNavList/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabNavList/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var _hooks_useRaf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useRaf */ "./node_modules/rc-tabs/es/hooks/useRaf.js");
/* harmony import */ var _TabNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabNode */ "./node_modules/rc-tabs/es/TabNavList/TabNode.js");
/* harmony import */ var _hooks_useOffsets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useOffsets */ "./node_modules/rc-tabs/es/hooks/useOffsets.js");
/* harmony import */ var _hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../hooks/useVisibleRange */ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js");
/* harmony import */ var _OperationNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./OperationNode */ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");
/* harmony import */ var _hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useTouchMove */ "./node_modules/rc-tabs/es/hooks/useTouchMove.js");
/* harmony import */ var _hooks_useRefs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hooks/useRefs */ "./node_modules/rc-tabs/es/hooks/useRefs.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AddButton */ "./node_modules/rc-tabs/es/TabNavList/AddButton.js");
/* harmony import */ var _hooks_useSyncState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useSyncState */ "./node_modules/rc-tabs/es/hooks/useSyncState.js");




















var ExtraContent = function ExtraContent(_ref) {
  var position = _ref.position,
      prefixCls = _ref.prefixCls,
      extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = extra;

  if (position === 'right') {
    content = assertExtra.right || !assertExtra.left && assertExtra || null;
  }

  if (position === 'left') {
    content = assertExtra.left || null;
  }

  return content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "".concat(prefixCls, "-extra-content")
  }, content) : null;
};

function TabNavList(props, ref) {
  var _classNames;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_TabContext__WEBPACK_IMPORTED_MODULE_13__["default"]),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var className = props.className,
      style = props.style,
      id = props.id,
      animated = props.animated,
      activeKey = props.activeKey,
      rtl = props.rtl,
      extra = props.extra,
      editable = props.editable,
      locale = props.locale,
      tabPosition = props.tabPosition,
      tabBarGutter = props.tabBarGutter,
      children = props.children,
      onTabClick = props.onTabClick,
      onTabScroll = props.onTabScroll;
  var tabsWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var tabListRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var operationsRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var innerAddButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useRefs = Object(_hooks_useRefs__WEBPACK_IMPORTED_MODULE_15__["default"])(),
      _useRefs2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useRefs, 2),
      getBtnRef = _useRefs2[0],
      removeBtnRef = _useRefs2[1];

  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';

  var _useSyncState = Object(_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_17__["default"])(0, function (next, prev) {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'left' : 'right'
      });
    }
  }),
      _useSyncState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useSyncState, 2),
      transformLeft = _useSyncState2[0],
      setTransformLeft = _useSyncState2[1];

  var _useSyncState3 = Object(_hooks_useSyncState__WEBPACK_IMPORTED_MODULE_17__["default"])(0, function (next, prev) {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? 'top' : 'bottom'
      });
    }
  }),
      _useSyncState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useSyncState3, 2),
      transformTop = _useSyncState4[0],
      setTransformTop = _useSyncState4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      wrapperScrollWidth = _useState2[0],
      setWrapperScrollWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      wrapperScrollHeight = _useState4[0],
      setWrapperScrollHeight = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      wrapperContentWidth = _useState6[0],
      setWrapperContentWidth = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      wrapperContentHeight = _useState8[0],
      setWrapperContentHeight = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState9, 2),
      wrapperWidth = _useState10[0],
      setWrapperWidth = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState11, 2),
      wrapperHeight = _useState12[0],
      setWrapperHeight = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState13, 2),
      addWidth = _useState14[0],
      setAddWidth = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState15, 2),
      addHeight = _useState16[0],
      setAddHeight = _useState16[1];

  var _useRafState = Object(_hooks_useRaf__WEBPACK_IMPORTED_MODULE_8__["useRafState"])(new Map()),
      _useRafState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useRafState, 2),
      tabSizes = _useRafState2[0],
      setTabSizes = _useRafState2[1];

  var tabOffsets = Object(_hooks_useOffsets__WEBPACK_IMPORTED_MODULE_10__["default"])(tabs, tabSizes, wrapperScrollWidth); // ========================== Util =========================

  var operationsHiddenClassName = "".concat(prefixCls, "-nav-operations-hidden");
  var transformMin = 0;
  var transformMax = 0;

  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, wrapperHeight - wrapperScrollHeight);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, wrapperScrollWidth - wrapperWidth);
  } else {
    transformMin = Math.min(0, wrapperWidth - wrapperScrollWidth);
    transformMax = 0;
  }

  function alignInRange(value) {
    if (value < transformMin) {
      return [transformMin, false];
    }

    if (value > transformMax) {
      return [transformMax, false];
    }

    return [value, true];
  } // ========================= Mobile ========================


  var touchMovingRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState18 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState17, 2),
      lockAnimation = _useState18[0],
      setLockAnimation = _useState18[1];

  function doLockAnimation() {
    setLockAnimation(Date.now());
  }

  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }

  Object(_hooks_useTouchMove__WEBPACK_IMPORTED_MODULE_14__["default"])(tabsWrapperRef, function (offsetX, offsetY) {
    var preventDefault = false;

    function doMove(setState, offset) {
      setState(function (value) {
        var _alignInRange = alignInRange(value + offset),
            _alignInRange2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_alignInRange, 2),
            newValue = _alignInRange2[0],
            needPrevent = _alignInRange2[1];

        preventDefault = needPrevent;
        return newValue;
      });
    }

    if (tabPositionTopOrBottom) {
      // Skip scroll if place is enough
      if (wrapperWidth >= wrapperScrollWidth) {
        return preventDefault;
      }

      doMove(setTransformLeft, offsetX);
    } else {
      if (wrapperHeight >= wrapperScrollHeight) {
        return preventDefault;
      }

      doMove(setTransformTop, offsetY);
    }

    clearTouchMoving();
    doLockAnimation();
    return preventDefault;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    clearTouchMoving();

    if (lockAnimation) {
      touchMovingRef.current = window.setTimeout(function () {
        setLockAnimation(0);
      }, 100);
    }

    return clearTouchMoving;
  }, [lockAnimation]); // ========================= Scroll ========================

  function scrollToTab() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };

    if (tabPositionTopOrBottom) {
      // ============ Align with top & bottom ============
      var newTransform = transformLeft; // RTL

      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + wrapperWidth) {
          newTransform = tabOffset.right + tabOffset.width - wrapperWidth;
        }
      } // LTR
      else if (tabOffset.left < -transformLeft) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft + wrapperWidth) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth);
        }

      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform)[0]);
    } else {
      // ============ Align with left & right ============
      var _newTransform = transformTop;

      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + wrapperHeight) {
        _newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight);
      }

      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform)[0]);
    }
  } // ========================== Tab ==========================
  // Render tab node & collect tab offset


  var _useVisibleRange = Object(_hooks_useVisibleRange__WEBPACK_IMPORTED_MODULE_11__["default"])(tabOffsets, {
    width: wrapperWidth,
    height: wrapperHeight,
    left: transformLeft,
    top: transformTop
  }, {
    width: wrapperContentWidth,
    height: wrapperContentHeight
  }, {
    width: addWidth,
    height: addHeight
  }, Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props), {}, {
    tabs: tabs
  })),
      _useVisibleRange2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useVisibleRange, 2),
      visibleStart = _useVisibleRange2[0],
      visibleEnd = _useVisibleRange2[1];

  var tabNodes = tabs.map(function (tab) {
    var key = tab.key;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_TabNode__WEBPACK_IMPORTED_MODULE_9__["default"], {
      id: id,
      prefixCls: prefixCls,
      key: key,
      rtl: rtl,
      tab: tab,
      closable: tab.closable,
      editable: editable,
      active: key === activeKey,
      tabPosition: tabPosition,
      tabBarGutter: tabBarGutter,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation(); // Focus element will make scrollLeft change which we should reset back

        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }

        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = Object(_hooks_useRaf__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    var _tabsWrapperRef$curre, _tabsWrapperRef$curre2, _innerAddButtonRef$cu, _innerAddButtonRef$cu2, _operationsRef$curren, _operationsRef$curren2, _tabListRef$current, _tabListRef$current2, _operationsRef$curren3;

    // Update wrapper records
    var offsetWidth = ((_tabsWrapperRef$curre = tabsWrapperRef.current) === null || _tabsWrapperRef$curre === void 0 ? void 0 : _tabsWrapperRef$curre.offsetWidth) || 0;
    var offsetHeight = ((_tabsWrapperRef$curre2 = tabsWrapperRef.current) === null || _tabsWrapperRef$curre2 === void 0 ? void 0 : _tabsWrapperRef$curre2.offsetHeight) || 0;
    var newAddWidth = ((_innerAddButtonRef$cu = innerAddButtonRef.current) === null || _innerAddButtonRef$cu === void 0 ? void 0 : _innerAddButtonRef$cu.offsetWidth) || 0;
    var newAddHeight = ((_innerAddButtonRef$cu2 = innerAddButtonRef.current) === null || _innerAddButtonRef$cu2 === void 0 ? void 0 : _innerAddButtonRef$cu2.offsetHeight) || 0;
    var newOperationWidth = ((_operationsRef$curren = operationsRef.current) === null || _operationsRef$curren === void 0 ? void 0 : _operationsRef$curren.offsetWidth) || 0;
    var newOperationHeight = ((_operationsRef$curren2 = operationsRef.current) === null || _operationsRef$curren2 === void 0 ? void 0 : _operationsRef$curren2.offsetHeight) || 0;
    setWrapperWidth(offsetWidth);
    setWrapperHeight(offsetHeight);
    setAddWidth(newAddWidth);
    setAddHeight(newAddHeight);
    var newWrapperScrollWidth = (((_tabListRef$current = tabListRef.current) === null || _tabListRef$current === void 0 ? void 0 : _tabListRef$current.offsetWidth) || 0) - newAddWidth;
    var newWrapperScrollHeight = (((_tabListRef$current2 = tabListRef.current) === null || _tabListRef$current2 === void 0 ? void 0 : _tabListRef$current2.offsetHeight) || 0) - newAddHeight;
    setWrapperScrollWidth(newWrapperScrollWidth);
    setWrapperScrollHeight(newWrapperScrollHeight);
    var isOperationHidden = (_operationsRef$curren3 = operationsRef.current) === null || _operationsRef$curren3 === void 0 ? void 0 : _operationsRef$curren3.className.includes(operationsHiddenClassName);
    setWrapperContentWidth(newWrapperScrollWidth - (isOperationHidden ? 0 : newOperationWidth));
    setWrapperContentHeight(newWrapperScrollHeight - (isOperationHidden ? 0 : newOperationHeight)); // Update buttons records

    setTabSizes(function () {
      var newSizes = new Map();
      tabs.forEach(function (_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;

        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  }); // ======================== Dropdown =======================

  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(startHiddenTabs), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(endHiddenTabs)); // =================== Link & Operations ===================

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      _useState20 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState19, 2),
      inkStyle = _useState20[0],
      setInkStyle = _useState20[1];

  var activeTabOffset = tabOffsets.get(activeKey); // Delay set ink style to avoid remove tab blink

  var inkBarRafRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();

  function cleanInkBarRaf() {
    raf__WEBPACK_IMPORTED_MODULE_6___default.a.cancel(inkBarRafRef.current);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var newInkStyle = {};

    if (activeTabOffset) {
      if (tabPositionTopOrBottom) {
        if (rtl) {
          newInkStyle.right = activeTabOffset.right;
        } else {
          newInkStyle.left = activeTabOffset.left;
        }

        newInkStyle.width = activeTabOffset.width;
      } else {
        newInkStyle.top = activeTabOffset.top;
        newInkStyle.height = activeTabOffset.height;
      }
    }

    cleanInkBarRaf();
    inkBarRafRef.current = raf__WEBPACK_IMPORTED_MODULE_6___default()(function () {
      setInkStyle(newInkStyle);
    });
    return cleanInkBarRaf;
  }, [activeTabOffset, tabPositionTopOrBottom, rtl]); // ========================= Effect ========================

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    scrollToTab();
  }, [activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom]); // Should recalculate when rtl changed

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    onListHolderResize();
  }, [rtl, tabBarGutter, activeKey, tabs.map(function (tab) {
    return tab.key;
  }).join('_')]); // ========================= Render ========================

  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = "".concat(prefixCls, "-nav-wrap");
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;

  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + wrapperWidth < wrapperScrollWidth;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + wrapperWidth < wrapperScrollWidth;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + wrapperHeight < wrapperScrollHeight;
  }
  /* eslint-disable jsx-a11y/interactive-supports-focus */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    ref: ref,
    role: "tablist",
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-nav"), className),
    style: style,
    onKeyDown: function onKeyDown() {
      // No need animation when use keyboard
      doLockAnimation();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ExtraContent, {
    position: "left",
    extra: extra,
    prefixCls: prefixCls
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(wrapPrefix, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(wrapPrefix, "-ping-left"), pingLeft), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(wrapPrefix, "-ping-right"), pingRight), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(wrapPrefix, "-ping-top"), pingTop), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(wrapPrefix, "-ping-bottom"), pingBottom), _classNames)),
    ref: tabsWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onResize: onListHolderResize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    ref: tabListRef,
    className: "".concat(prefixCls, "-nav-list"),
    style: {
      transform: "translate(".concat(transformLeft, "px, ").concat(transformTop, "px)"),
      transition: lockAnimation ? 'none' : undefined
    }
  }, tabNodes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_AddButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
    ref: innerAddButtonRef,
    prefixCls: prefixCls,
    locale: locale,
    editable: editable,
    style: {
      visibility: hasDropdown ? 'hidden' : null
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("".concat(prefixCls, "-ink-bar"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-ink-bar-animated"), animated.inkBar)),
    style: inkStyle
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_OperationNode__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, props, {
    ref: operationsRef,
    prefixCls: prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ExtraContent, {
    position: "right",
    extra: extra,
    prefixCls: prefixCls
  }));
  /* eslint-enable */
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](TabNavList));

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/TabPane.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPane; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function TabPane(_ref) {
  var prefixCls = _ref.prefixCls,
      forceRender = _ref.forceRender,
      className = _ref.className,
      style = _ref.style,
      id = _ref.id,
      active = _ref.active,
      animated = _ref.animated,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      tabKey = _ref.tabKey,
      children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](forceRender),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      visited = _React$useState2[0],
      setVisited = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (active) {
      setVisited(true);
    } else if (destroyInactiveTabPane) {
      setVisited(false);
    }
  }, [active, destroyInactiveTabPane]);
  var mergedStyle = {};

  if (!active) {
    if (animated) {
      mergedStyle.visibility = 'hidden';
      mergedStyle.height = 0;
      mergedStyle.overflowY = 'hidden';
    } else {
      mergedStyle.display = 'none';
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    id: id && "".concat(id, "-panel-").concat(tabKey),
    role: "tabpanel",
    tabIndex: active ? 0 : -1,
    "aria-labelledby": id && "".concat(id, "-tab-").concat(tabKey),
    "aria-hidden": !active,
    style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mergedStyle), style),
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("".concat(prefixCls, "-tabpane"), active && "".concat(prefixCls, "-tabpane-active"), className)
  }, (active || visited || forceRender) && children);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPanelList/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPanelList/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPanelList; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TabContext */ "./node_modules/rc-tabs/es/TabContext.js");




function TabPanelList(_ref) {
  var id = _ref.id,
      activeKey = _ref.activeKey,
      animated = _ref.animated,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane;

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_TabContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      prefixCls = _React$useContext.prefixCls,
      tabs = _React$useContext.tabs;

  var tabPaneAnimated = animated.tabPane;
  var activeIndex = tabs.findIndex(function (tab) {
    return tab.key === activeKey;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-content-holder"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated)),
    style: activeIndex && tabPaneAnimated ? Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rtl ? 'marginRight' : 'marginLeft', "-".concat(activeIndex, "00%")) : null
  }, tabs.map(function (tab) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](tab.node, {
      key: tab.key,
      prefixCls: prefixCls,
      tabKey: tab.key,
      id: id,
      animated: tabPaneAnimated,
      active: tab.key === activeKey,
      destroyInactiveTabPane: destroyInactiveTabPane
    });
  })));
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/Tabs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/isMobile */ "./node_modules/rc-util/es/isMobile.js");
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _TabNavList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabNavList */ "./node_modules/rc-tabs/es/TabNavList/index.js");
/* harmony import */ var _TabPanelList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TabPanelList */ "./node_modules/rc-tabs/es/TabPanelList/index.js");
/* harmony import */ var _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabPanelList/TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TabContext */ "./node_modules/rc-tabs/es/TabContext.js");





// Accessibility https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role










/**
 * Should added antd:
 * - type
 *
 * Removed:
 * - onNextClick
 * - onPrevClick
 * - keyboard
 */
// Used for accessibility

var uuid = 0;

function parseTabList(children) {
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__["default"])(children).map(function (node) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"](node)) {
      var key = node.key !== undefined ? String(node.key) : undefined;
      return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({
        key: key
      }, node.props), {}, {
        node: node
      });
    }

    return null;
  }).filter(function (tab) {
    return tab;
  });
}

function Tabs(_ref, ref) {
  var _classNames;

  var id = _ref.id,
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      activeKey = _ref.activeKey,
      defaultActiveKey = _ref.defaultActiveKey,
      editable = _ref.editable,
      _ref$animated = _ref.animated,
      animated = _ref$animated === void 0 ? {
    inkBar: true,
    tabPane: false
  } : _ref$animated,
      _ref$tabPosition = _ref.tabPosition,
      tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
      tabBarGutter = _ref.tabBarGutter,
      tabBarStyle = _ref.tabBarStyle,
      tabBarExtraContent = _ref.tabBarExtraContent,
      locale = _ref.locale,
      moreIcon = _ref.moreIcon,
      moreTransitionName = _ref.moreTransitionName,
      destroyInactiveTabPane = _ref.destroyInactiveTabPane,
      renderTabBar = _ref.renderTabBar,
      onChange = _ref.onChange,
      onTabClick = _ref.onTabClick,
      onTabScroll = _ref.onTabScroll,
      restProps = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["id", "prefixCls", "className", "children", "direction", "activeKey", "defaultActiveKey", "editable", "animated", "tabPosition", "tabBarGutter", "tabBarStyle", "tabBarExtraContent", "locale", "moreIcon", "moreTransitionName", "destroyInactiveTabPane", "renderTabBar", "onChange", "onTabClick", "onTabScroll"]);

  var tabs = parseTabList(children);
  var rtl = direction === 'rtl';
  var mergedAnimated;

  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({
      inkBar: true,
      tabPane: false
    }, Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(animated) === 'object' ? animated : {});
  } // ======================== Mobile ========================


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      mobile = _useState2[0],
      setMobile = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // Only update on the client side
    setMobile(Object(rc_util_es_isMobile__WEBPACK_IMPORTED_MODULE_8__["default"])());
  }, []); // ====================== Active Key ======================

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    var _tabs$;

    return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
  }, {
    value: activeKey,
    defaultValue: defaultActiveKey
  }),
      _useMergedState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMergedState, 2),
      mergedActiveKey = _useMergedState2[0],
      setMergedActiveKey = _useMergedState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(function () {
    return tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });
  }),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      activeIndex = _useState4[0],
      setActiveIndex = _useState4[1]; // Reset active key if not exist anymore


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var newActiveIndex = tabs.findIndex(function (tab) {
      return tab.key === mergedActiveKey;
    });

    if (newActiveIndex === -1) {
      var _tabs$newActiveIndex;

      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey((_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0 ? void 0 : _tabs$newActiveIndex.key);
    }

    setActiveIndex(newActiveIndex);
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), mergedActiveKey, activeIndex]); // ===================== Accessibility ====================

  var _useMergedState3 = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_9__["default"])(null, {
    value: id
  }),
      _useMergedState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMergedState3, 2),
      mergedId = _useMergedState4[0],
      setMergedId = _useMergedState4[1];

  var mergedTabPosition = tabPosition;

  if (mobile && !['left', 'right'].includes(tabPosition)) {
    mergedTabPosition = 'top';
  } // Async generate id to avoid ssr mapping failed


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!id) {
      setMergedId("rc-tabs-".concat( false ? undefined : uuid));
      uuid += 1;
    }
  }, []); // ======================== Events ========================

  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    setMergedActiveKey(key);
    onChange === null || onChange === void 0 ? void 0 : onChange(key);
  } // ======================== Render ========================


  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition: mergedTabPosition,
    rtl: rtl,
    mobile: mobile
  };
  var tabNavBar;

  var tabNavBarProps = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, sharedProps), {}, {
    editable: editable,
    locale: locale,
    moreIcon: moreIcon,
    moreTransitionName: moreTransitionName,
    tabBarGutter: tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll: onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    panes: children
  });

  if (renderTabBar) {
    tabNavBar = renderTabBar(tabNavBarProps, _TabNavList__WEBPACK_IMPORTED_MODULE_10__["default"]);
  } else {
    tabNavBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TabNavList__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, tabNavBarProps));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TabContext__WEBPACK_IMPORTED_MODULE_13__["default"].Provider, {
    value: {
      tabs: tabs,
      prefixCls: prefixCls
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object.assign({
    ref: ref,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(prefixCls, "".concat(prefixCls, "-").concat(mergedTabPosition), (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-mobile"), mobile), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-editable"), editable), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl), _classNames), className)
  }, restProps), tabNavBar, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_TabPanelList__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({
    destroyInactiveTabPane: destroyInactiveTabPane
  }, sharedProps, {
    animated: mergedAnimated
  }))));
}

var ForwardTabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](Tabs);
ForwardTabs.TabPane = _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_12__["default"];
/* harmony default export */ __webpack_exports__["default"] = (ForwardTabs);

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useOffsets.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useOffsets.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOffsets; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var _tabs$;

    var map = new Map();
    var lastOffset = tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
    var rightOffset = lastOffset.left + lastOffset.width;

    for (var i = 0; i < tabs.length; i += 1) {
      var key = tabs[i].key;
      var data = tabSizes.get(key); // Reuse last one when not exist yet

      if (!data) {
        var _tabs;

        data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
      }

      var entity = map.get(key) || Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data); // Right


      entity.right = rightOffset - entity.left - entity.width; // Update entity

      map.set(key, entity);
    }

    return map;
  }, [tabs.map(function (tab) {
    return tab.key;
  }).join('_'), tabSizes, holderScrollWidth]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useRaf.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useRaf.js ***!
  \*************************************************/
/*! exports provided: default, useRafState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRafState", function() { return useRafState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_2__);



function useRaf(callback) {
  var rafRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var removedRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!removedRef.current) {
      raf__WEBPACK_IMPORTED_MODULE_2___default.a.cancel(rafRef.current);
      rafRef.current = raf__WEBPACK_IMPORTED_MODULE_2___default()(function () {
        callback.apply(void 0, args);
      });
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      removedRef.current = true;
      raf__WEBPACK_IMPORTED_MODULE_2___default.a.cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])([]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      forceUpdate = _useState2[1];

  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function () {
    var current = state.current;
    batchRef.current.forEach(function (callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });

  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }

  return [state.current, updater];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useRefs.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useRefs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useRefs() {
  var cacheRefs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Map());

  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());
    }

    return cacheRefs.current.get(key);
  }

  function removeRef(key) {
    cacheRefs.current.delete(key);
  }

  return [getRef, removeRef];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useSyncState.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useSyncState.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSyncState; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useSyncState(defaultState, onChange) {
  var stateRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](defaultState);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      forceUpdate = _React$useState2[1];

  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;

    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }

    stateRef.current = newValue;
    forceUpdate({});
  }

  return [stateRef.current, setState];
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useTouchMove.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useTouchMove.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTouchMove; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL); // ================================= Hook =================================

function useTouchMove(ref, onOffset) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      touchPosition = _useState2[0],
      setTouchPosition = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      lastTimestamp = _useState4[0],
      setLastTimestamp = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      lastTimeDiff = _useState6[0],
      setLastTimeDiff = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      lastOffset = _useState8[0],
      setLastOffset = _useState8[1];

  var motionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // ========================= Events =========================
  // >>> Touch events

  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
        screenX = _e$touches$.screenX,
        screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }

  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
        screenX = _e$touches$2.screenX,
        screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }

  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null); // Swipe if needed

    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY); // Skip swipe if low distance

      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function () {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }

        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  } // >>> Wheel event


  var lastWheelTimestampRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  var lastWheelPreventRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
  var lastWheelDirectionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function onWheel(e) {
    var deltaX = e.deltaX,
        deltaY = e.deltaY; // Convert both to x & y since wheel only happened on PC

    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);

    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    } // Optimize mac touch scroll


    var now = Date.now();

    if (now - lastWheelTimestampRef.current > 100) {
      lastWheelPreventRef.current = false;
    }

    if (onOffset(-mixed, -mixed) || lastWheelPreventRef.current) {
      e.preventDefault();
      lastWheelPreventRef.current = true;
    }

    lastWheelTimestampRef.current = now;
  } // ========================= Effect =========================


  var touchEventsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  touchEventsRef.current = {
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd,
    onWheel: onWheel
  };
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }

    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }

    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }

    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }

    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    }); // No need to clean up since element removed

    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function () {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-tabs/es/hooks/useVisibleRange.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVisibleRange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, containerSize, tabContentNodeSize, addNodeSize, _ref) {
  var tabs = _ref.tabs,
      tabPosition = _ref.tabPosition,
      rtl = _ref.rtl;
  var unit;
  var position;
  var transformSize;

  if (['top', 'bottom'].includes(tabPosition)) {
    unit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(containerSize.left);
  } else {
    unit = 'height';
    position = 'top';
    transformSize = -containerSize.top;
  }

  var basicSize = containerSize[unit];
  var tabContentSize = tabContentNodeSize[unit];
  var addSize = addNodeSize[unit];
  var mergedBasicSize = basicSize;

  if (tabContentSize + addSize > basicSize) {
    mergedBasicSize = basicSize - addSize;
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!tabs.length) {
      return [0, 0];
    }

    var len = tabs.length;
    var endIndex = len;

    for (var i = 0; i < len; i += 1) {
      var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE;

      if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
        endIndex = i - 1;
        break;
      }
    }

    var startIndex = 0;

    for (var _i = len - 1; _i >= 0; _i -= 1) {
      var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE;

      if (_offset[position] < transformSize) {
        startIndex = _i + 1;
        break;
      }
    }

    return [startIndex, endIndex];
  }, [tabOffsets, transformSize, mergedBasicSize, tabPosition, tabs.map(function (tab) {
    return tab.key;
  }).join('_'), rtl]);
}

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/index.js ***!
  \******************************************/
/*! exports provided: TabPane, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPanelList/TabPane */ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPanelList_TabPane__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkTGlzdGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0VsbGlwc2lzT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9FbGxpcHNpc091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvUGx1c091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0VsbGlwc2lzT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJkL01ldGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2VzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1kcm9wZG93bi9lcy9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L0FkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiTmF2TGlzdC9PcGVyYXRpb25Ob2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJOYXZMaXN0L1RhYk5vZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYk5hdkxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYlBhbmVsTGlzdC9UYWJQYW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJQYW5lbExpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL2hvb2tzL3VzZU9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL2hvb2tzL3VzZVJhZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlUmVmcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaG9va3MvdXNlU3luY1N0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9ob29rcy91c2VUb3VjaE1vdmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL2hvb2tzL3VzZVZpc2libGVSYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaW5kZXguanMiXSwibmFtZXMiOlsiQWRkbGlzdGluZyIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldGxvYWRpbmciLCJpbWFnZVVybCIsInNldGltYWdlVXJsIiwiZ2V0QmFzZTY0IiwiaW1nIiwiY2FsbGJhY2siLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJiZWZvcmVVcGxvYWQiLCJmaWxlIiwiaXNKcGdPclBuZyIsInR5cGUiLCJlcnJvciIsImlzTHQyTSIsInNpemUiLCJoYW5kbGVDaGFuZ2UiLCJpbmZvIiwic3RhdHVzIiwib3JpZ2luRmlsZU9iaiIsInNwYW4iLCJtYXJnaW5Ub3AiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQXFCQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHVEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDaEJDLE9BRGdCO0FBQUEsTUFDUEMsVUFETzs7QUFBQSxtQkFFU0YsdURBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFaEJHLFFBRmdCO0FBQUEsTUFFTkMsV0FGTTs7QUFJdkIsV0FBU0MsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUQsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQztBQUFBLGFBQU1ILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRyxNQUFSLENBQWQ7QUFBQSxLQUFoQztBQUNBSCxVQUFNLENBQUNJLGFBQVAsQ0FBcUJOLEdBQXJCO0FBQ0Q7O0FBRUQsV0FBU08sWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEI7QUFDMUIsUUFBTUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLElBQUwsS0FBYyxZQUFkLElBQThCRixJQUFJLENBQUNFLElBQUwsS0FBYyxXQUEvRDs7QUFDQSxRQUFJLENBQUNELFVBQUwsRUFBaUI7QUFDZiwrREFBUUUsS0FBUixDQUFjLG1DQUFkO0FBQ0Q7O0FBQ0QsUUFBTUMsTUFBTSxH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NjNjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBJbnB1dCxcclxuICBCdXR0b24sXHJcbiAgUmFkaW8sXHJcbiAgU2VsZWN0LFxyXG4gIENhc2NhZGVyLFxyXG4gIERhdGVQaWNrZXIsXHJcbiAgSW5wdXROdW1iZXIsXHJcbiAgVHJlZVNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgQWxlcnQsXHJcbiAgUm93LFxyXG4gIENvbCxcclxuICBVcGxvYWQsXHJcbiAgSWNvbixcclxuICBtZXNzYWdlLFxyXG4gIENhcmQsXHJcbn0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEFkZGxpc3RpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZVVybCwgc2V0aW1hZ2VVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChpbWcsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpKTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiZWZvcmVVcGxvYWQoZmlsZSkge1xyXG4gICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gXCJpbWFnZS9qcGVnXCIgfHwgZmlsZS50eXBlID09PSBcImltYWdlL3BuZ1wiO1xyXG4gICAgaWYgKCFpc0pwZ09yUG5nKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRy9QTkcgZmlsZSFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7XHJcbiAgICBpZiAoIWlzTHQyTSkge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiSW1hZ2UgbXVzdCBzbWFsbGVyIHRoYW4gMk1CIVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0pwZ09yUG5nICYmIGlzTHQyTTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvKSA9PiB7XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJ1cGxvYWRpbmdcIikge1xyXG4gICAgICBzZXRsb2FkaW5nKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcclxuICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC5cclxuICAgICAgZ2V0QmFzZTY0KGluZm8uZmlsZS5vcmlnaW5GaWxlT2JqLCAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBzZXRpbWFnZVVybChpbWFnZVVybCk7XHJcbiAgICAgICAgc2V0bG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJQUk9QRVJUWSBUWVBFIEFORCBMT0NBVElPTlwiIHR5cGU9XCJzdWNjZXNzXCIgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlB1cnBvc2VcIj5cclxuICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cInNtYWxsXCI+U2FsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiZGVmYXVsdFwiPlJlbnQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBUeXBlXCIgbmFtZT1cInNpemVcIj5cclxuICAgICAgICAgIDxSYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT1cImhvbWVcIj5Ib21lczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwicGxvdHNcIj5QbG90czwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPVwiY29tbWVyY2lhbFwiPkNvbW1lcmNpYWw8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlNlbGVjdCBjaXR5XCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIiBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICBJc2xhbWFiYWRcclxuICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIj5SYXdhbHBpbmRpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIj5LYXJhY2hpPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkxvY2F0aW9uXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8QWxlcnQgbWVzc2FnZT1cIlBST1BFUlRZIERFVEFJTFNcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQcm9wZXJ0eSBUaXRsZVwiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlByb3BlcnR5IERldGFpbHNcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJBbGwgaW5jbHVzaXZlIFByaWNlXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgPENvbCBsZz17MTJ9PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTGFuZCBBcmVhXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIGxnPXsxMn0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTcXVhcmUgZmVldFwiPlxyXG4gICAgICAgICAgICAgIDxTZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjFcIiBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIyXCI+MjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiMlwiPjM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJlZHJvb21zXCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImRlbW9cIiBzZWxlY3RlZD5cclxuICAgICAgICAgICAgICBJc2xhbWFiYWRcclxuICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJhdGhyb29tc1wiPlxyXG4gICAgICAgICAgPFNlbGVjdD5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJkZW1vXCIgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgICAgSXNsYW1hYmFkXHJcbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIxXCI+MTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCIyXCI+MjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFeHBpcmVzIEFmdGVyXCI+XHJcbiAgICAgICAgICA8U2VsZWN0PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjYgTW9udGhzXCIgc2VsZWN0ZWQ+XHJcbiAgICAgICAgICAgICAgNiBNb250aHNcclxuICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIjEgWWVhclwiPjEgWWVhcjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxBbGVydCBtZXNzYWdlPVwiQWRkIEltYWdlc1wiIHR5cGU9XCJzdWNjZXNzXCIgLz5cclxuICAgICAgICA8Y2VudGVyIGNsYXNzTmFtZT1cInB0LTJcIj5cclxuICAgICAgICAgIDxVcGxvYWRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICAgICAgICBuYW1lPVwiYXZhdGFyXCJcclxuICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhdmF0YXItdXBsb2FkZXJcIlxyXG4gICAgICAgICAgICBzaG93VXBsb2FkTGlzdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NlwiXHJcbiAgICAgICAgICAgIGJlZm9yZVVwbG9hZD17YmVmb3JlVXBsb2FkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aW1hZ2VVcmwgPyAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9XCJhdmF0YXJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEljb24gdHlwZT17bG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJwbHVzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlVwbG9hZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJDT05UQUNUIERFVEFJTFNcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgPjwvRm9ybT5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYWJlbENvbD17e1xyXG4gICAgICAgICAgc3BhbjogNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHdyYXBwZXJDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDE0LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlVzZXIgTmFtZSBcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXNzd29yZFwiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cclxuICAgICAgICAgICAgU3VibWl0IFByb3BlcnR5XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRsaXN0aW5nO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5LlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVsbGlwc2lzT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTE3NiA1MTFhNTYgNTYgMCAxMDExMiAwIDU2IDU2IDAgMTAtMTEyIDB6bTI4MCAwYTU2IDU2IDAgMTAxMTIgMCA1NiA1NiAwIDEwLTExMiAwem0yODAgMGE1NiA1NiAwIDEwMTEyIDAgNTYgNTYgMCAxMC0xMTIgMHpcIiB9IH1dIH0sIFwibmFtZVwiOiBcImVsbGlwc2lzXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBFbGxpcHNpc091dGxpbmVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9FbGxpcHNpc091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9FbGxpcHNpc091dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0VsbGlwc2lzT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfUGx1c091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9QbHVzT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfUGx1c091dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfRWxsaXBzaXNPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0VsbGlwc2lzT3V0bGluZWRcIikpO1xuXG52YXIgX0FudGRJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29tcG9uZW50cy9BbnRkSWNvblwiKSk7XG5cbi8vIEdFTkVSQVRFIEJZIC4vc2NyaXB0cy9nZW5lcmF0ZS50c1xuLy8gRE9OIE5PVCBFRElUIElUIE1BTlVBTExZXG52YXIgRWxsaXBzaXNPdXRsaW5lZCA9IGZ1bmN0aW9uIEVsbGlwc2lzT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0VsbGlwc2lzT3V0bGluZWQuZGVmYXVsdFxuICB9KSk7XG59O1xuXG5FbGxpcHNpc091dGxpbmVkLmRpc3BsYXlOYW1lID0gJ0VsbGlwc2lzT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihFbGxpcHNpc091dGxpbmVkKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgR3JpZCA9IGZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG5cbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIF9wcm9wcyRob3ZlcmFibGUgPSBwcm9wcy5ob3ZlcmFibGUsXG4gICAgICAgIGhvdmVyYWJsZSA9IF9wcm9wcyRob3ZlcmFibGUgPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcHMkaG92ZXJhYmxlLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImhvdmVyYWJsZVwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjYXJkJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyaWRcIiksIGNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncmlkLWhvdmVyYWJsZVwiKSwgaG92ZXJhYmxlKSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEdyaWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIE1ldGEgPSBmdW5jdGlvbiBNZXRhKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzO1xuXG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBhdmF0YXIgPSBwcm9wcy5hdmF0YXIsXG4gICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIG90aGVycyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiYXZhdGFyXCIsIFwidGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiXSk7XG5cbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjYXJkJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1ldGFcIiksIGNsYXNzTmFtZSk7XG4gICAgdmFyIGF2YXRhckRvbSA9IGF2YXRhciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXRhLWF2YXRhclwiKVxuICAgIH0sIGF2YXRhcikgOiBudWxsO1xuICAgIHZhciB0aXRsZURvbSA9IHRpdGxlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1ldGEtdGl0bGVcIilcbiAgICB9LCB0aXRsZSkgOiBudWxsO1xuICAgIHZhciBkZXNjcmlwdGlvbkRvbSA9IGRlc2NyaXB0aW9uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1ldGEtZGVzY3JpcHRpb25cIilcbiAgICB9LCBkZXNjcmlwdGlvbikgOiBudWxsO1xuICAgIHZhciBNZXRhRGV0YWlsID0gdGl0bGVEb20gfHwgZGVzY3JpcHRpb25Eb20gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWV0YS1kZXRhaWxcIilcbiAgICB9LCB0aXRsZURvbSwgZGVzY3JpcHRpb25Eb20pIDogbnVsbDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvdGhlcnMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmdcbiAgICB9KSwgYXZhdGFyRG9tLCBNZXRhRGV0YWlsKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBNZXRhO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9HcmlkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9HcmlkXCIpKTtcblxudmFyIF9NZXRhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZXRhXCIpKTtcblxudmFyIF90YWJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGFic1wiKSk7XG5cbnZhciBfcm93ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vcm93XCIpKTtcblxudmFyIF9jb2wgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb2xcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dFwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBnZXRBY3Rpb24oYWN0aW9ucykge1xuICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGluZGV4KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qI19fUFVSRV9fKi9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IFwiXCIuY29uY2F0KDEwMCAvIGFjdGlvbnMubGVuZ3RoLCBcIiVcIilcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiBcImFjdGlvbi1cIi5jb25jYXQoaW5kZXgpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgYWN0aW9uKSlcbiAgICApO1xuICB9KTtcbiAgcmV0dXJuIGFjdGlvbkxpc3Q7XG59XG5cbnZhciBDYXJkID0gZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICB2YXIgX2V4dGVuZHMyLCBfY2xhc3NOYW1lcztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG5cbiAgdmFyIG9uVGFiQ2hhbmdlID0gZnVuY3Rpb24gb25UYWJDaGFuZ2Uoa2V5KSB7XG4gICAgaWYgKHByb3BzLm9uVGFiQ2hhbmdlKSB7XG4gICAgICBwcm9wcy5vblRhYkNoYW5nZShrZXkpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNDb250YWluR3JpZCA9IGZ1bmN0aW9uIGlzQ29udGFpbkdyaWQoKSB7XG4gICAgdmFyIGNvbnRhaW5HcmlkO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlID09PSBfR3JpZFtcImRlZmF1bHRcIl0pIHtcbiAgICAgICAgY29udGFpbkdyaWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb250YWluR3JpZDtcbiAgfTtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZXh0cmEgPSBwcm9wcy5leHRyYSxcbiAgICAgIF9wcm9wcyRoZWFkU3R5bGUgPSBwcm9wcy5oZWFkU3R5bGUsXG4gICAgICBoZWFkU3R5bGUgPSBfcHJvcHMkaGVhZFN0eWxlID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRoZWFkU3R5bGUsXG4gICAgICBfcHJvcHMkYm9keVN0eWxlID0gcHJvcHMuYm9keVN0eWxlLFxuICAgICAgYm9keVN0eWxlID0gX3Byb3BzJGJvZHlTdHlsZSA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkYm9keVN0eWxlLFxuICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgIGxvYWRpbmcgPSBwcm9wcy5sb2FkaW5nLFxuICAgICAgX3Byb3BzJGJvcmRlcmVkID0gcHJvcHMuYm9yZGVyZWQsXG4gICAgICBib3JkZXJlZCA9IF9wcm9wcyRib3JkZXJlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9wcm9wcyRib3JkZXJlZCxcbiAgICAgIGN1c3RvbWl6ZVNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICBjb3ZlciA9IHByb3BzLmNvdmVyLFxuICAgICAgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICB0YWJMaXN0ID0gcHJvcHMudGFiTGlzdCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBhY3RpdmVUYWJLZXkgPSBwcm9wcy5hY3RpdmVUYWJLZXksXG4gICAgICBkZWZhdWx0QWN0aXZlVGFiS2V5ID0gcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYktleSxcbiAgICAgIHRhYkJhckV4dHJhQ29udGVudCA9IHByb3BzLnRhYkJhckV4dHJhQ29udGVudCxcbiAgICAgIGhvdmVyYWJsZSA9IHByb3BzLmhvdmVyYWJsZSxcbiAgICAgIF9wcm9wcyR0YWJQcm9wcyA9IHByb3BzLnRhYlByb3BzLFxuICAgICAgdGFiUHJvcHMgPSBfcHJvcHMkdGFiUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJHRhYlByb3BzLFxuICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJleHRyYVwiLCBcImhlYWRTdHlsZVwiLCBcImJvZHlTdHlsZVwiLCBcInRpdGxlXCIsIFwibG9hZGluZ1wiLCBcImJvcmRlcmVkXCIsIFwic2l6ZVwiLCBcInR5cGVcIiwgXCJjb3ZlclwiLCBcImFjdGlvbnNcIiwgXCJ0YWJMaXN0XCIsIFwiY2hpbGRyZW5cIiwgXCJhY3RpdmVUYWJLZXlcIiwgXCJkZWZhdWx0QWN0aXZlVGFiS2V5XCIsIFwidGFiQmFyRXh0cmFDb250ZW50XCIsIFwiaG92ZXJhYmxlXCIsIFwidGFiUHJvcHNcIl0pO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NhcmQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgbG9hZGluZ0Jsb2NrU3R5bGUgPSBib2R5U3R5bGUucGFkZGluZyA9PT0gMCB8fCBib2R5U3R5bGUucGFkZGluZyA9PT0gJzBweCcgPyB7XG4gICAgcGFkZGluZzogMjRcbiAgfSA6IHVuZGVmaW5lZDtcbiAgdmFyIGJsb2NrID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nLWJsb2NrXCIpXG4gIH0pO1xuICB2YXIgbG9hZGluZ0Jsb2NrID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nLWNvbnRlbnRcIiksXG4gICAgc3R5bGU6IGxvYWRpbmdCbG9ja1N0eWxlXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yb3dbXCJkZWZhdWx0XCJdLCB7XG4gICAgZ3V0dGVyOiA4XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb2xbXCJkZWZhdWx0XCJdLCB7XG4gICAgc3BhbjogMjJcbiAgfSwgYmxvY2spKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Jvd1tcImRlZmF1bHRcIl0sIHtcbiAgICBndXR0ZXI6IDhcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIHtcbiAgICBzcGFuOiA4XG4gIH0sIGJsb2NrKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIHtcbiAgICBzcGFuOiAxNVxuICB9LCBibG9jaykpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcm93W1wiZGVmYXVsdFwiXSwge1xuICAgIGd1dHRlcjogOFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29sW1wiZGVmYXVsdFwiXSwge1xuICAgIHNwYW46IDZcbiAgfSwgYmxvY2spLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29sW1wiZGVmYXVsdFwiXSwge1xuICAgIHNwYW46IDE4XG4gIH0sIGJsb2NrKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yb3dbXCJkZWZhdWx0XCJdLCB7XG4gICAgZ3V0dGVyOiA4XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb2xbXCJkZWZhdWx0XCJdLCB7XG4gICAgc3BhbjogMTNcbiAgfSwgYmxvY2spLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29sW1wiZGVmYXVsdFwiXSwge1xuICAgIHNwYW46IDlcbiAgfSwgYmxvY2spKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Jvd1tcImRlZmF1bHRcIl0sIHtcbiAgICBndXR0ZXI6IDhcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIHtcbiAgICBzcGFuOiA0XG4gIH0sIGJsb2NrKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIHtcbiAgICBzcGFuOiAzXG4gIH0sIGJsb2NrKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbFtcImRlZmF1bHRcIl0sIHtcbiAgICBzcGFuOiAxNlxuICB9LCBibG9jaykpKTtcbiAgdmFyIGhhc0FjdGl2ZVRhYktleSA9IGFjdGl2ZVRhYktleSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgZXh0cmFQcm9wcyA9ICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMzW1wiZGVmYXVsdFwiXSkoe30sIHRhYlByb3BzKSwgKF9leHRlbmRzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgaGFzQWN0aXZlVGFiS2V5ID8gJ2FjdGl2ZUtleScgOiAnZGVmYXVsdEFjdGl2ZUtleScsIGhhc0FjdGl2ZVRhYktleSA/IGFjdGl2ZVRhYktleSA6IGRlZmF1bHRBY3RpdmVUYWJLZXkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9leHRlbmRzMiwgXCJ0YWJCYXJFeHRyYUNvbnRlbnRcIiwgdGFiQmFyRXh0cmFDb250ZW50KSwgX2V4dGVuZHMyKSk7XG4gIHZhciBoZWFkO1xuICB2YXIgdGFicyA9IHRhYkxpc3QgJiYgdGFiTGlzdC5sZW5ndGggPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfdGFic1tcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczNbXCJkZWZhdWx0XCJdKSh7XG4gICAgc2l6ZTogXCJsYXJnZVwiXG4gIH0sIGV4dHJhUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZC10YWJzXCIpLFxuICAgIG9uQ2hhbmdlOiBvblRhYkNoYW5nZVxuICB9KSwgdGFiTGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3RhYnNbXCJkZWZhdWx0XCJdLlRhYlBhbmUsIHtcbiAgICAgIHRhYjogaXRlbS50YWIsXG4gICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgIGtleTogaXRlbS5rZXlcbiAgICB9KTtcbiAgfSkpIDogbnVsbDtcblxuICBpZiAodGl0bGUgfHwgZXh0cmEgfHwgdGFicykge1xuICAgIGhlYWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZFwiKSxcbiAgICAgIHN0eWxlOiBoZWFkU3R5bGVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGVhZC13cmFwcGVyXCIpXG4gICAgfSwgdGl0bGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWQtdGl0bGVcIilcbiAgICB9LCB0aXRsZSksIGV4dHJhICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1leHRyYVwiKVxuICAgIH0sIGV4dHJhKSksIHRhYnMpO1xuICB9XG5cbiAgdmFyIGNvdmVyRG9tID0gY292ZXIgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvdmVyXCIpXG4gIH0sIGNvdmVyKSA6IG51bGw7XG4gIHZhciBib2R5ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib2R5XCIpLFxuICAgIHN0eWxlOiBib2R5U3R5bGVcbiAgfSwgbG9hZGluZyA/IGxvYWRpbmdCbG9jayA6IGNoaWxkcmVuKTtcbiAgdmFyIGFjdGlvbkRvbSA9IGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWN0aW9uc1wiKVxuICB9LCBnZXRBY3Rpb24oYWN0aW9ucykpIDogbnVsbDtcbiAgdmFyIGRpdlByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkob3RoZXJzLCBbJ29uVGFiQ2hhbmdlJ10pO1xuICB2YXIgbWVyZ2VkU2l6ZSA9IGN1c3RvbWl6ZVNpemUgfHwgc2l6ZTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1sb2FkaW5nXCIpLCBsb2FkaW5nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJlZFwiKSwgYm9yZGVyZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhvdmVyYWJsZVwiKSwgaG92ZXJhYmxlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250YWluLWdyaWRcIiksIGlzQ29udGFpbkdyaWQoKSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGFpbi10YWJzXCIpLCB0YWJMaXN0ICYmIHRhYkxpc3QubGVuZ3RoKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KG1lcmdlZFNpemUpLCBtZXJnZWRTaXplKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10eXBlLVwiKS5jb25jYXQodHlwZSksICEhdHlwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzM1tcImRlZmF1bHRcIl0pKHt9LCBkaXZQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmdcbiAgfSksIGhlYWQsIGNvdmVyRG9tLCBib2R5LCBhY3Rpb25Eb20pO1xufTtcblxuQ2FyZC5HcmlkID0gX0dyaWRbXCJkZWZhdWx0XCJdO1xuQ2FyZC5NZXRhID0gX01ldGFbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gQ2FyZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjVGFicyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy10YWJzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfRWxsaXBzaXNPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0VsbGlwc2lzT3V0bGluZWRcIikpO1xuXG52YXIgX1BsdXNPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1BsdXNPdXRsaW5lZFwiKSk7XG5cbnZhciBfQ2xvc2VPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0Nsb3NlT3V0bGluZWRcIikpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG5mdW5jdGlvbiBUYWJzKF9hKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgdHlwZSA9IF9hLnR5cGUsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgIF9vbkVkaXQgPSBfYS5vbkVkaXQsXG4gICAgICBoaWRlQWRkID0gX2EuaGlkZUFkZCxcbiAgICAgIGNlbnRlcmVkID0gX2EuY2VudGVyZWQsXG4gICAgICBhZGRJY29uID0gX2EuYWRkSWNvbixcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJ0eXBlXCIsIFwiY2xhc3NOYW1lXCIsIFwic2l6ZVwiLCBcIm9uRWRpdFwiLCBcImhpZGVBZGRcIiwgXCJjZW50ZXJlZFwiLCBcImFkZEljb25cIl0pO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndGFicycsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBlZGl0YWJsZTtcblxuICBpZiAodHlwZSA9PT0gJ2VkaXRhYmxlLWNhcmQnKSB7XG4gICAgZWRpdGFibGUgPSB7XG4gICAgICBvbkVkaXQ6IGZ1bmN0aW9uIG9uRWRpdChlZGl0VHlwZSwgX3JlZikge1xuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXG4gICAgICAgICAgICBldmVudCA9IF9yZWYuZXZlbnQ7XG4gICAgICAgIF9vbkVkaXQgPT09IG51bGwgfHwgX29uRWRpdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29uRWRpdChlZGl0VHlwZSA9PT0gJ2FkZCcgPyBldmVudCA6IGtleSwgZWRpdFR5cGUpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUljb246IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbG9zZU91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCksXG4gICAgICBhZGRJY29uOiBhZGRJY29uIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9QbHVzT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSxcbiAgICAgIHNob3dBZGQ6IGhpZGVBZGQgIT09IHRydWVcbiAgICB9O1xuICB9XG5cbiAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoISgnb25QcmV2Q2xpY2snIGluIHByb3BzKSAmJiAhKCdvbk5leHRDbGljaycgaW4gcHJvcHMpLCAnVGFicycsICdgb25QcmV2Q2xpY2tgIGFuZCBgb25OZXh0Q2xpY2tgIGhhcyBiZWVuIHJlbW92ZWQuIFBsZWFzZSB1c2UgYG9uVGFiU2Nyb2xsYCBpbnN0ZWFkLicpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjVGFic1tcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgfSwgcHJvcHMsIHtcbiAgICBtb3JlVHJhbnNpdGlvbk5hbWU6IFwic2xpZGUtdXBcIixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSksIHNpemUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNhcmRcIiksIFsnY2FyZCcsICdlZGl0YWJsZS1jYXJkJ10uaW5jbHVkZXModHlwZSkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVkaXRhYmxlLWNhcmRcIiksIHR5cGUgPT09ICdlZGl0YWJsZS1jYXJkJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2VudGVyZWRcIiksIGNlbnRlcmVkKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpLFxuICAgIGVkaXRhYmxlOiBlZGl0YWJsZSxcbiAgICBtb3JlSWNvbjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0VsbGlwc2lzT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9KSk7XG59XG5cblRhYnMuVGFiUGFuZSA9IF9yY1RhYnMuVGFiUGFuZTtcbnZhciBfZGVmYXVsdCA9IFRhYnM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX3NsaWNlZFRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFBsYWNlbWVudHMgZnJvbSAnLi9wbGFjZW1lbnRzJztcblxuZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFycm93ID0gcHJvcHMuYXJyb3csXG4gICAgICBhcnJvdyA9IF9wcm9wcyRhcnJvdyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXJyb3csXG4gICAgICBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdm9pZCAwID8gJ3JjLWRyb3Bkb3duJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgYW5pbWF0aW9uID0gcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcHJvcHMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyAnYm90dG9tTGVmdCcgOiBfcHJvcHMkcGxhY2VtZW50LFxuICAgICAgX3Byb3BzJHBsYWNlbWVudHMgPSBwcm9wcy5wbGFjZW1lbnRzLFxuICAgICAgcGxhY2VtZW50cyA9IF9wcm9wcyRwbGFjZW1lbnRzID09PSB2b2lkIDAgPyBQbGFjZW1lbnRzIDogX3Byb3BzJHBsYWNlbWVudHMsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgc2hvd0FjdGlvbiA9IHByb3BzLnNob3dBY3Rpb24sXG4gICAgICBoaWRlQWN0aW9uID0gcHJvcHMuaGlkZUFjdGlvbixcbiAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBwcm9wcy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgb3ZlcmxheVN0eWxlID0gcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICBfcHJvcHMkdHJpZ2dlciA9IHByb3BzLnRyaWdnZXIsXG4gICAgICB0cmlnZ2VyID0gX3Byb3BzJHRyaWdnZXIgPT09IHZvaWQgMCA/IFsnaG92ZXInXSA6IF9wcm9wcyR0cmlnZ2VyLFxuICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXJyb3dcIiwgXCJwcmVmaXhDbHNcIiwgXCJ0cmFuc2l0aW9uTmFtZVwiLCBcImFuaW1hdGlvblwiLCBcImFsaWduXCIsIFwicGxhY2VtZW50XCIsIFwicGxhY2VtZW50c1wiLCBcImdldFBvcHVwQ29udGFpbmVyXCIsIFwic2hvd0FjdGlvblwiLCBcImhpZGVBY3Rpb25cIiwgXCJvdmVybGF5Q2xhc3NOYW1lXCIsIFwib3ZlcmxheVN0eWxlXCIsIFwidmlzaWJsZVwiLCBcInRyaWdnZXJcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSgpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICB0cmlnZ2VyVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRUcmlnZ2VyVmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1lcmdlZFZpc2libGUgPSAndmlzaWJsZScgaW4gcHJvcHMgPyB2aXNpYmxlIDogdHJpZ2dlclZpc2libGU7XG4gIHZhciB0cmlnZ2VyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cmlnZ2VyUmVmLmN1cnJlbnQ7XG4gIH0pO1xuXG4gIHZhciBnZXRPdmVybGF5RWxlbWVudCA9IGZ1bmN0aW9uIGdldE92ZXJsYXlFbGVtZW50KCkge1xuICAgIHZhciBvdmVybGF5ID0gcHJvcHMub3ZlcmxheTtcbiAgICB2YXIgb3ZlcmxheUVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIG92ZXJsYXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG92ZXJsYXlFbGVtZW50ID0gb3ZlcmxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdmVybGF5RWxlbWVudCA9IG92ZXJsYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xuICB9O1xuXG4gIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgdmFyIG9uT3ZlcmxheUNsaWNrID0gcHJvcHMub25PdmVybGF5Q2xpY2s7XG4gICAgdmFyIG92ZXJsYXlQcm9wcyA9IGdldE92ZXJsYXlFbGVtZW50KCkucHJvcHM7XG4gICAgc2V0VHJpZ2dlclZpc2libGUoZmFsc2UpO1xuXG4gICAgaWYgKG9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICBvbk92ZXJsYXlDbGljayhlKTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmxheVByb3BzLm9uQ2xpY2spIHtcbiAgICAgIG92ZXJsYXlQcm9wcy5vbkNsaWNrKGUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gb25WaXNpYmxlQ2hhbmdlKHZpc2libGUpIHtcbiAgICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlO1xuICAgIHNldFRyaWdnZXJWaXNpYmxlKHZpc2libGUpO1xuXG4gICAgaWYgKHR5cGVvZiBvblZpc2libGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSh2aXNpYmxlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldE1lbnVFbGVtZW50ID0gZnVuY3Rpb24gZ2V0TWVudUVsZW1lbnQoKSB7XG4gICAgdmFyIG92ZXJsYXlFbGVtZW50ID0gZ2V0T3ZlcmxheUVsZW1lbnQoKTtcbiAgICB2YXIgZXh0cmFPdmVybGF5UHJvcHMgPSB7XG4gICAgICBwcmVmaXhDbHM6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbWVudVwiKSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBvdmVybGF5RWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgZGVsZXRlIGV4dHJhT3ZlcmxheVByb3BzLnByZWZpeENscztcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgYXJyb3cgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3dcIilcbiAgICB9KSwgUmVhY3QuY2xvbmVFbGVtZW50KG92ZXJsYXlFbGVtZW50LCBleHRyYU92ZXJsYXlQcm9wcykpO1xuICB9O1xuXG4gIHZhciBnZXRNZW51RWxlbWVudE9yTGFtYmRhID0gZnVuY3Rpb24gZ2V0TWVudUVsZW1lbnRPckxhbWJkYSgpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG5cbiAgICBpZiAodHlwZW9mIG92ZXJsYXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBnZXRNZW51RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TWVudUVsZW1lbnQoKTtcbiAgfTtcblxuICB2YXIgZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyID0gZnVuY3Rpb24gZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyKCkge1xuICAgIHZhciBtaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIgPSBwcm9wcy5taW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXIsXG4gICAgICAgIGFsaWduUG9pbnQgPSBwcm9wcy5hbGlnblBvaW50O1xuXG4gICAgaWYgKCdtaW5PdmVybGF5V2lkdGhNYXRjaFRyaWdnZXInIGluIHByb3BzKSB7XG4gICAgICByZXR1cm4gbWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyO1xuICAgIH1cblxuICAgIHJldHVybiAhYWxpZ25Qb2ludDtcbiAgfTtcblxuICB2YXIgZ2V0T3BlbkNsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldE9wZW5DbGFzc05hbWUoKSB7XG4gICAgdmFyIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lO1xuXG4gICAgaWYgKG9wZW5DbGFzc05hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG9wZW5DbGFzc05hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB2YXIgY2hpbGRyZW5Qcm9wcyA9IGNoaWxkcmVuLnByb3BzID8gY2hpbGRyZW4ucHJvcHMgOiB7fTtcbiAgICB2YXIgY2hpbGRDbGFzc05hbWUgPSBjbGFzc05hbWVzKGNoaWxkcmVuUHJvcHMuY2xhc3NOYW1lLCBnZXRPcGVuQ2xhc3NOYW1lKCkpO1xuICAgIHJldHVybiB0cmlnZ2VyVmlzaWJsZSAmJiBjaGlsZHJlbiA/IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgY2xhc3NOYW1lOiBjaGlsZENsYXNzTmFtZVxuICAgIH0pIDogY2hpbGRyZW47XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJIaWRlQWN0aW9uID0gaGlkZUFjdGlvbjtcblxuICBpZiAoIXRyaWdnZXJIaWRlQWN0aW9uICYmIHRyaWdnZXIuaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTEpIHtcbiAgICB0cmlnZ2VySGlkZUFjdGlvbiA9IFsnY2xpY2snXTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIE9iamVjdC5hc3NpZ24oe30sIG90aGVyUHJvcHMsIHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICByZWY6IHRyaWdnZXJSZWYsXG4gICAgcG9wdXBDbGFzc05hbWU6IGNsYXNzTmFtZXMob3ZlcmxheUNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNob3ctYXJyb3dcIiksIGFycm93KSksXG4gICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgIGFjdGlvbjogdHJpZ2dlcixcbiAgICBzaG93QWN0aW9uOiBzaG93QWN0aW9uLFxuICAgIGhpZGVBY3Rpb246IHRyaWdnZXJIaWRlQWN0aW9uIHx8IFtdLFxuICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgcG9wdXBBbmltYXRpb246IGFuaW1hdGlvbixcbiAgICBwb3B1cFZpc2libGU6IG1lcmdlZFZpc2libGUsXG4gICAgc3RyZXRjaDogZ2V0TWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyKCkgPyAnbWluV2lkdGgnIDogJycsXG4gICAgcG9wdXA6IGdldE1lbnVFbGVtZW50T3JMYW1iZGEoKSxcbiAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICB9KSwgcmVuZGVyQ2hpbGRyZW4oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoRHJvcGRvd24pOyIsImltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duJztcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xudmFyIHBsYWNlbWVudHMgPSB7XG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BDZW50ZXI6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUNlbnRlcjoge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEFkZEJ1dHRvbihfcmVmLCByZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgZWRpdGFibGUgPSBfcmVmLmVkaXRhYmxlLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGU7XG5cbiAgaWYgKCFlZGl0YWJsZSB8fCBlZGl0YWJsZS5zaG93QWRkID09PSBmYWxzZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICByZWY6IHJlZixcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtYWRkXCIpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBcImFyaWEtbGFiZWxcIjogKGxvY2FsZSA9PT0gbnVsbCB8fCBsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGxvY2FsZS5hZGRBcmlhTGFiZWwpIHx8ICdBZGQgdGFiJyxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICBlZGl0YWJsZS5vbkVkaXQoJ2FkZCcsIHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGVkaXRhYmxlLmFkZEljb24gfHwgJysnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoQWRkQnV0dG9uKTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tIFwicmMtdXRpbC9lcy9LZXlDb2RlXCI7XG5pbXBvcnQgTWVudSwgeyBNZW51SXRlbSB9IGZyb20gJ3JjLW1lbnUnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JjLWRyb3Bkb3duJztcbmltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi9BZGRCdXR0b24nO1xuXG5mdW5jdGlvbiBPcGVyYXRpb25Ob2RlKF9yZWYsIHJlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICB0YWJzID0gX3JlZi50YWJzLFxuICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICBtb2JpbGUgPSBfcmVmLm1vYmlsZSxcbiAgICAgIF9yZWYkbW9yZUljb24gPSBfcmVmLm1vcmVJY29uLFxuICAgICAgbW9yZUljb24gPSBfcmVmJG1vcmVJY29uID09PSB2b2lkIDAgPyAnTW9yZScgOiBfcmVmJG1vcmVJY29uLFxuICAgICAgbW9yZVRyYW5zaXRpb25OYW1lID0gX3JlZi5tb3JlVHJhbnNpdGlvbk5hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgIHRhYkJhckd1dHRlciA9IF9yZWYudGFiQmFyR3V0dGVyLFxuICAgICAgcnRsID0gX3JlZi5ydGwsXG4gICAgICBvblRhYkNsaWNrID0gX3JlZi5vblRhYkNsaWNrO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PSBEcm9wZG93biA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgb3BlbiA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRPcGVuID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgc2VsZWN0ZWRLZXkgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0U2VsZWN0ZWRLZXkgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBwb3B1cElkID0gXCJcIi5jb25jYXQoaWQsIFwiLW1vcmUtcG9wdXBcIik7XG4gIHZhciBkcm9wZG93blByZWZpeCA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZHJvcGRvd25cIik7XG4gIHZhciBzZWxlY3RlZEl0ZW1JZCA9IHNlbGVjdGVkS2V5ICE9PSBudWxsID8gXCJcIi5jb25jYXQocG9wdXBJZCwgXCItXCIpLmNvbmNhdChzZWxlY3RlZEtleSkgOiBudWxsO1xuICB2YXIgZHJvcGRvd25BcmlhTGFiZWwgPSBsb2NhbGUgPT09IG51bGwgfHwgbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBsb2NhbGUuZHJvcGRvd25BcmlhTGFiZWw7XG4gIHZhciBtZW51ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soX3JlZjIpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXG4gICAgICAgICAgZG9tRXZlbnQgPSBfcmVmMi5kb21FdmVudDtcbiAgICAgIG9uVGFiQ2xpY2soa2V5LCBkb21FdmVudCk7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9LFxuICAgIGlkOiBwb3B1cElkLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICByb2xlOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiBzZWxlY3RlZEl0ZW1JZCxcbiAgICBzZWxlY3RlZEtleXM6IFtzZWxlY3RlZEtleV0sXG4gICAgXCJhcmlhLWxhYmVsXCI6IGRyb3Bkb3duQXJpYUxhYmVsICE9PSB1bmRlZmluZWQgPyBkcm9wZG93bkFyaWFMYWJlbCA6ICdleHBhbmRlZCBkcm9wZG93bidcbiAgfSwgdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwge1xuICAgICAga2V5OiB0YWIua2V5LFxuICAgICAgaWQ6IFwiXCIuY29uY2F0KHBvcHVwSWQsIFwiLVwiKS5jb25jYXQodGFiLmtleSksXG4gICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IGlkICYmIFwiXCIuY29uY2F0KGlkLCBcIi1wYW5lbC1cIikuY29uY2F0KHRhYi5rZXkpLFxuICAgICAgZGlzYWJsZWQ6IHRhYi5kaXNhYmxlZFxuICAgIH0sIHRhYi50YWIpO1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gc2VsZWN0T2Zmc2V0KG9mZnNldCkge1xuICAgIHZhciBlbmFibGVkVGFicyA9IHRhYnMuZmlsdGVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgIHJldHVybiAhdGFiLmRpc2FibGVkO1xuICAgIH0pO1xuICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZW5hYmxlZFRhYnMuZmluZEluZGV4KGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgIHJldHVybiB0YWIua2V5ID09PSBzZWxlY3RlZEtleTtcbiAgICB9KSB8fCAwO1xuICAgIHZhciBsZW4gPSBlbmFibGVkVGFicy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBzZWxlY3RlZEluZGV4ID0gKHNlbGVjdGVkSW5kZXggKyBvZmZzZXQgKyBsZW4pICUgbGVuO1xuICAgICAgdmFyIHRhYiA9IGVuYWJsZWRUYWJzW3NlbGVjdGVkSW5kZXhdO1xuXG4gICAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xuICAgICAgICBzZXRTZWxlY3RlZEtleSh0YWIua2V5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgdmFyIHdoaWNoID0gZS53aGljaDtcblxuICAgIGlmICghb3Blbikge1xuICAgICAgaWYgKFtLZXlDb2RlLkRPV04sIEtleUNvZGUuU1BBQ0UsIEtleUNvZGUuRU5URVJdLmluY2x1ZGVzKHdoaWNoKSkge1xuICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHdoaWNoKSB7XG4gICAgICBjYXNlIEtleUNvZGUuVVA6XG4gICAgICAgIHNlbGVjdE9mZnNldCgtMSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS2V5Q29kZS5ET1dOOlxuICAgICAgICBzZWxlY3RPZmZzZXQoMSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS2V5Q29kZS5FU0M6XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBLZXlDb2RlLlNQQUNFOlxuICAgICAgY2FzZSBLZXlDb2RlLkVOVEVSOlxuICAgICAgICBpZiAoc2VsZWN0ZWRLZXkgIT09IG51bGwpIG9uVGFiQ2xpY2soc2VsZWN0ZWRLZXksIGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBFZmZlY3QgPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSB1c2UgcXVlcnkgZWxlbWVudCBoZXJlIHRvIGF2b2lkIFJlYWN0IHN0cmljdCB3YXJuaW5nXG4gICAgdmFyIGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdGVkSXRlbUlkKTtcblxuICAgIGlmIChlbGUgJiYgZWxlLnNjcm9sbEludG9WaWV3KSB7XG4gICAgICBlbGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkS2V5XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICBzZXRTZWxlY3RlZEtleShudWxsKTtcbiAgICB9XG4gIH0sIFtvcGVuXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgbW9yZVN0eWxlID0gX2RlZmluZVByb3BlcnR5KHt9LCBydGwgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luUmlnaHQnLCB0YWJCYXJHdXR0ZXIpO1xuXG4gIGlmICghdGFicy5sZW5ndGgpIHtcbiAgICBtb3JlU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG1vcmVTdHlsZS5vcmRlciA9IDE7XG4gIH1cblxuICB2YXIgb3ZlcmxheUNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChkcm9wZG93blByZWZpeCwgXCItcnRsXCIpLCBydGwpKTtcbiAgdmFyIG1vcmVOb2RlID0gbW9iaWxlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bkb3duLCB7XG4gICAgcHJlZml4Q2xzOiBkcm9wZG93blByZWZpeCxcbiAgICBvdmVybGF5OiBtZW51LFxuICAgIHRyaWdnZXI6IFsnaG92ZXInXSxcbiAgICB2aXNpYmxlOiBvcGVuLFxuICAgIHRyYW5zaXRpb25OYW1lOiBtb3JlVHJhbnNpdGlvbk5hbWUsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBzZXRPcGVuLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWUsXG4gICAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gICAgbW91c2VMZWF2ZURlbGF5OiAwLjFcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5hdi1tb3JlXCIpLFxuICAgIHN0eWxlOiBtb3JlU3R5bGUsXG4gICAgdGFiSW5kZXg6IC0xLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwibGlzdGJveFwiLFxuICAgIFwiYXJpYS1jb250cm9sc1wiOiBwb3B1cElkLFxuICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItbW9yZVwiKSxcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogb3BlbixcbiAgICBvbktleURvd246IG9uS2V5RG93blxuICB9LCBtb3JlSWNvbikpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5hdi1vcGVyYXRpb25zXCIpLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICByZWY6IHJlZlxuICB9LCBtb3JlTm9kZSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQWRkQnV0dG9uLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgZWRpdGFibGU6IGVkaXRhYmxlXG4gIH0pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoT3BlcmF0aW9uTm9kZSk7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuXG5mdW5jdGlvbiBUYWJOb2RlKF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIF9yZWYkdGFiID0gX3JlZi50YWIsXG4gICAgICBrZXkgPSBfcmVmJHRhYi5rZXksXG4gICAgICB0YWIgPSBfcmVmJHRhYi50YWIsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYkdGFiLmRpc2FibGVkLFxuICAgICAgY2xvc2VJY29uID0gX3JlZiR0YWIuY2xvc2VJY29uLFxuICAgICAgdGFiQmFyR3V0dGVyID0gX3JlZi50YWJCYXJHdXR0ZXIsXG4gICAgICB0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgICBjbG9zYWJsZSA9IF9yZWYuY2xvc2FibGUsXG4gICAgICByZW5kZXJXcmFwcGVyID0gX3JlZi5yZW5kZXJXcmFwcGVyLFxuICAgICAgcmVtb3ZlQXJpYUxhYmVsID0gX3JlZi5yZW1vdmVBcmlhTGFiZWwsXG4gICAgICBlZGl0YWJsZSA9IF9yZWYuZWRpdGFibGUsXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgb25SZW1vdmUgPSBfcmVmLm9uUmVtb3ZlLFxuICAgICAgb25Gb2N1cyA9IF9yZWYub25Gb2N1cztcbiAgdmFyIHRhYlByZWZpeCA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFiXCIpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvblJlbW92ZTtcbiAgfSwgW10pO1xuICB2YXIgbm9kZVN0eWxlID0ge307XG5cbiAgaWYgKHRhYlBvc2l0aW9uID09PSAndG9wJyB8fCB0YWJQb3NpdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICBub2RlU3R5bGVbcnRsID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0J10gPSB0YWJCYXJHdXR0ZXI7XG4gIH0gZWxzZSB7XG4gICAgbm9kZVN0eWxlLm1hcmdpbkJvdHRvbSA9IHRhYkJhckd1dHRlcjtcbiAgfVxuXG4gIHZhciByZW1vdmFibGUgPSBlZGl0YWJsZSAmJiBjbG9zYWJsZSAhPT0gZmFsc2UgJiYgIWRpc2FibGVkO1xuXG4gIGZ1bmN0aW9uIG9uSW50ZXJuYWxDbGljayhlKSB7XG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgb25DbGljayhlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVtb3ZlVGFiKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlZGl0YWJsZS5vbkVkaXQoJ3JlbW92ZScsIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXModGFiUHJlZml4LCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh0YWJQcmVmaXgsIFwiLXdpdGgtcmVtb3ZlXCIpLCByZW1vdmFibGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHRhYlByZWZpeCwgXCItYWN0aXZlXCIpLCBhY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHRhYlByZWZpeCwgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKSxcbiAgICBzdHlsZTogbm9kZVN0eWxlLFxuICAgIG9uQ2xpY2s6IG9uSW50ZXJuYWxDbGlja1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgcm9sZTogXCJ0YWJcIixcbiAgICBcImFyaWEtc2VsZWN0ZWRcIjogYWN0aXZlLFxuICAgIGlkOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItdGFiLVwiKS5jb25jYXQoa2V5KSxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHRhYlByZWZpeCwgXCItYnRuXCIpLFxuICAgIFwiYXJpYS1jb250cm9sc1wiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItcGFuZWwtXCIpLmNvbmNhdChrZXkpLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCxcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyBudWxsIDogMCxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbkludGVybmFsQ2xpY2soZSk7XG4gICAgfSxcbiAgICBvbktleURvd246IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICBpZiAoW0tleUNvZGUuU1BBQ0UsIEtleUNvZGUuRU5URVJdLmluY2x1ZGVzKGUud2hpY2gpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25JbnRlcm5hbENsaWNrKGUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Gb2N1czogb25Gb2N1c1xuICB9LCB0YWIpLCByZW1vdmFibGUgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IHJlbW92ZUFyaWFMYWJlbCB8fCAncmVtb3ZlJyxcbiAgICB0YWJJbmRleDogMCxcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHRhYlByZWZpeCwgXCItcmVtb3ZlXCIpLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uUmVtb3ZlVGFiKGUpO1xuICAgIH1cbiAgfSwgY2xvc2VJY29uIHx8IGVkaXRhYmxlLnJlbW92ZUljb24gfHwgJ8OXJykpO1xuXG4gIGlmIChyZW5kZXJXcmFwcGVyKSB7XG4gICAgbm9kZSA9IHJlbmRlcldyYXBwZXIobm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoVGFiTm9kZSk7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCByYWYgZnJvbSAncmFmJztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyYy1yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IHVzZVJhZiwgeyB1c2VSYWZTdGF0ZSB9IGZyb20gJy4uL2hvb2tzL3VzZVJhZic7XG5pbXBvcnQgVGFiTm9kZSBmcm9tICcuL1RhYk5vZGUnO1xuaW1wb3J0IHVzZU9mZnNldHMgZnJvbSAnLi4vaG9va3MvdXNlT2Zmc2V0cyc7XG5pbXBvcnQgdXNlVmlzaWJsZVJhbmdlIGZyb20gJy4uL2hvb2tzL3VzZVZpc2libGVSYW5nZSc7XG5pbXBvcnQgT3BlcmF0aW9uTm9kZSBmcm9tICcuL09wZXJhdGlvbk5vZGUnO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi4vVGFiQ29udGV4dCc7XG5pbXBvcnQgdXNlVG91Y2hNb3ZlIGZyb20gJy4uL2hvb2tzL3VzZVRvdWNoTW92ZSc7XG5pbXBvcnQgdXNlUmVmcyBmcm9tICcuLi9ob29rcy91c2VSZWZzJztcbmltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi9BZGRCdXR0b24nO1xuaW1wb3J0IHVzZVN5bmNTdGF0ZSBmcm9tICcuLi9ob29rcy91c2VTeW5jU3RhdGUnO1xuXG52YXIgRXh0cmFDb250ZW50ID0gZnVuY3Rpb24gRXh0cmFDb250ZW50KF9yZWYpIHtcbiAgdmFyIHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbixcbiAgICAgIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgZXh0cmEgPSBfcmVmLmV4dHJhO1xuICBpZiAoIWV4dHJhKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNvbnRlbnQ7XG4gIHZhciBhc3NlcnRFeHRyYSA9IGV4dHJhO1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgIGNvbnRlbnQgPSBhc3NlcnRFeHRyYS5yaWdodCB8fCAhYXNzZXJ0RXh0cmEubGVmdCAmJiBhc3NlcnRFeHRyYSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICBjb250ZW50ID0gYXNzZXJ0RXh0cmEubGVmdCB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWV4dHJhLWNvbnRlbnRcIilcbiAgfSwgY29udGVudCkgOiBudWxsO1xufTtcblxuZnVuY3Rpb24gVGFiTmF2TGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFRhYkNvbnRleHQpLFxuICAgICAgcHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQucHJlZml4Q2xzLFxuICAgICAgdGFicyA9IF9SZWFjdCR1c2VDb250ZXh0LnRhYnM7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgYW5pbWF0ZWQgPSBwcm9wcy5hbmltYXRlZCxcbiAgICAgIGFjdGl2ZUtleSA9IHByb3BzLmFjdGl2ZUtleSxcbiAgICAgIHJ0bCA9IHByb3BzLnJ0bCxcbiAgICAgIGV4dHJhID0gcHJvcHMuZXh0cmEsXG4gICAgICBlZGl0YWJsZSA9IHByb3BzLmVkaXRhYmxlLFxuICAgICAgbG9jYWxlID0gcHJvcHMubG9jYWxlLFxuICAgICAgdGFiUG9zaXRpb24gPSBwcm9wcy50YWJQb3NpdGlvbixcbiAgICAgIHRhYkJhckd1dHRlciA9IHByb3BzLnRhYkJhckd1dHRlcixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBvblRhYkNsaWNrID0gcHJvcHMub25UYWJDbGljayxcbiAgICAgIG9uVGFiU2Nyb2xsID0gcHJvcHMub25UYWJTY3JvbGw7XG4gIHZhciB0YWJzV3JhcHBlclJlZiA9IHVzZVJlZigpO1xuICB2YXIgdGFiTGlzdFJlZiA9IHVzZVJlZigpO1xuICB2YXIgb3BlcmF0aW9uc1JlZiA9IHVzZVJlZigpO1xuICB2YXIgaW5uZXJBZGRCdXR0b25SZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZVJlZnMgPSB1c2VSZWZzKCksXG4gICAgICBfdXNlUmVmczIgPSBfc2xpY2VkVG9BcnJheShfdXNlUmVmcywgMiksXG4gICAgICBnZXRCdG5SZWYgPSBfdXNlUmVmczJbMF0sXG4gICAgICByZW1vdmVCdG5SZWYgPSBfdXNlUmVmczJbMV07XG5cbiAgdmFyIHRhYlBvc2l0aW9uVG9wT3JCb3R0b20gPSB0YWJQb3NpdGlvbiA9PT0gJ3RvcCcgfHwgdGFiUG9zaXRpb24gPT09ICdib3R0b20nO1xuXG4gIHZhciBfdXNlU3luY1N0YXRlID0gdXNlU3luY1N0YXRlKDAsIGZ1bmN0aW9uIChuZXh0LCBwcmV2KSB7XG4gICAgaWYgKHRhYlBvc2l0aW9uVG9wT3JCb3R0b20gJiYgb25UYWJTY3JvbGwpIHtcbiAgICAgIG9uVGFiU2Nyb2xsKHtcbiAgICAgICAgZGlyZWN0aW9uOiBuZXh0ID4gcHJldiA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksXG4gICAgICBfdXNlU3luY1N0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTeW5jU3RhdGUsIDIpLFxuICAgICAgdHJhbnNmb3JtTGVmdCA9IF91c2VTeW5jU3RhdGUyWzBdLFxuICAgICAgc2V0VHJhbnNmb3JtTGVmdCA9IF91c2VTeW5jU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3luY1N0YXRlMyA9IHVzZVN5bmNTdGF0ZSgwLCBmdW5jdGlvbiAobmV4dCwgcHJldikge1xuICAgIGlmICghdGFiUG9zaXRpb25Ub3BPckJvdHRvbSAmJiBvblRhYlNjcm9sbCkge1xuICAgICAgb25UYWJTY3JvbGwoe1xuICAgICAgICBkaXJlY3Rpb246IG5leHQgPiBwcmV2ID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgICAgfSk7XG4gICAgfVxuICB9KSxcbiAgICAgIF91c2VTeW5jU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN5bmNTdGF0ZTMsIDIpLFxuICAgICAgdHJhbnNmb3JtVG9wID0gX3VzZVN5bmNTdGF0ZTRbMF0sXG4gICAgICBzZXRUcmFuc2Zvcm1Ub3AgPSBfdXNlU3luY1N0YXRlNFsxXTtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlLCAyKSxcbiAgICAgIHdyYXBwZXJTY3JvbGxXaWR0aCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRXcmFwcGVyU2Nyb2xsV2lkdGggPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICB3cmFwcGVyU2Nyb2xsSGVpZ2h0ID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldFdyYXBwZXJTY3JvbGxIZWlnaHQgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICB3cmFwcGVyQ29udGVudFdpZHRoID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldFdyYXBwZXJDb250ZW50V2lkdGggPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU3ID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgICB3cmFwcGVyQ29udGVudEhlaWdodCA9IF91c2VTdGF0ZThbMF0sXG4gICAgICBzZXRXcmFwcGVyQ29udGVudEhlaWdodCA9IF91c2VTdGF0ZThbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTkgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTEwID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlOSwgMiksXG4gICAgICB3cmFwcGVyV2lkdGggPSBfdXNlU3RhdGUxMFswXSxcbiAgICAgIHNldFdyYXBwZXJXaWR0aCA9IF91c2VTdGF0ZTEwWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUxMSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxMSwgMiksXG4gICAgICB3cmFwcGVySGVpZ2h0ID0gX3VzZVN0YXRlMTJbMF0sXG4gICAgICBzZXRXcmFwcGVySGVpZ2h0ID0gX3VzZVN0YXRlMTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTEzID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGUxNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTEzLCAyKSxcbiAgICAgIGFkZFdpZHRoID0gX3VzZVN0YXRlMTRbMF0sXG4gICAgICBzZXRBZGRXaWR0aCA9IF91c2VTdGF0ZTE0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGUxNSA9IHVzZVN0YXRlKDApLFxuICAgICAgX3VzZVN0YXRlMTYgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxNSwgMiksXG4gICAgICBhZGRIZWlnaHQgPSBfdXNlU3RhdGUxNlswXSxcbiAgICAgIHNldEFkZEhlaWdodCA9IF91c2VTdGF0ZTE2WzFdO1xuXG4gIHZhciBfdXNlUmFmU3RhdGUgPSB1c2VSYWZTdGF0ZShuZXcgTWFwKCkpLFxuICAgICAgX3VzZVJhZlN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VSYWZTdGF0ZSwgMiksXG4gICAgICB0YWJTaXplcyA9IF91c2VSYWZTdGF0ZTJbMF0sXG4gICAgICBzZXRUYWJTaXplcyA9IF91c2VSYWZTdGF0ZTJbMV07XG5cbiAgdmFyIHRhYk9mZnNldHMgPSB1c2VPZmZzZXRzKHRhYnMsIHRhYlNpemVzLCB3cmFwcGVyU2Nyb2xsV2lkdGgpOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PSBVdGlsID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgb3BlcmF0aW9uc0hpZGRlbkNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LW9wZXJhdGlvbnMtaGlkZGVuXCIpO1xuICB2YXIgdHJhbnNmb3JtTWluID0gMDtcbiAgdmFyIHRyYW5zZm9ybU1heCA9IDA7XG5cbiAgaWYgKCF0YWJQb3NpdGlvblRvcE9yQm90dG9tKSB7XG4gICAgdHJhbnNmb3JtTWluID0gTWF0aC5taW4oMCwgd3JhcHBlckhlaWdodCAtIHdyYXBwZXJTY3JvbGxIZWlnaHQpO1xuICAgIHRyYW5zZm9ybU1heCA9IDA7XG4gIH0gZWxzZSBpZiAocnRsKSB7XG4gICAgdHJhbnNmb3JtTWluID0gMDtcbiAgICB0cmFuc2Zvcm1NYXggPSBNYXRoLm1heCgwLCB3cmFwcGVyU2Nyb2xsV2lkdGggLSB3cmFwcGVyV2lkdGgpO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zZm9ybU1pbiA9IE1hdGgubWluKDAsIHdyYXBwZXJXaWR0aCAtIHdyYXBwZXJTY3JvbGxXaWR0aCk7XG4gICAgdHJhbnNmb3JtTWF4ID0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsaWduSW5SYW5nZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA8IHRyYW5zZm9ybU1pbikge1xuICAgICAgcmV0dXJuIFt0cmFuc2Zvcm1NaW4sIGZhbHNlXTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPiB0cmFuc2Zvcm1NYXgpIHtcbiAgICAgIHJldHVybiBbdHJhbnNmb3JtTWF4LCBmYWxzZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIFt2YWx1ZSwgdHJ1ZV07XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBNb2JpbGUgPT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgdG91Y2hNb3ZpbmdSZWYgPSB1c2VSZWYoKTtcblxuICB2YXIgX3VzZVN0YXRlMTcgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMTggPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUxNywgMiksXG4gICAgICBsb2NrQW5pbWF0aW9uID0gX3VzZVN0YXRlMThbMF0sXG4gICAgICBzZXRMb2NrQW5pbWF0aW9uID0gX3VzZVN0YXRlMThbMV07XG5cbiAgZnVuY3Rpb24gZG9Mb2NrQW5pbWF0aW9uKCkge1xuICAgIHNldExvY2tBbmltYXRpb24oRGF0ZS5ub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclRvdWNoTW92aW5nKCkge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG91Y2hNb3ZpbmdSZWYuY3VycmVudCk7XG4gIH1cblxuICB1c2VUb3VjaE1vdmUodGFic1dyYXBwZXJSZWYsIGZ1bmN0aW9uIChvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgdmFyIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBkb01vdmUoc2V0U3RhdGUsIG9mZnNldCkge1xuICAgICAgc2V0U3RhdGUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYWxpZ25JblJhbmdlID0gYWxpZ25JblJhbmdlKHZhbHVlICsgb2Zmc2V0KSxcbiAgICAgICAgICAgIF9hbGlnbkluUmFuZ2UyID0gX3NsaWNlZFRvQXJyYXkoX2FsaWduSW5SYW5nZSwgMiksXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IF9hbGlnbkluUmFuZ2UyWzBdLFxuICAgICAgICAgICAgbmVlZFByZXZlbnQgPSBfYWxpZ25JblJhbmdlMlsxXTtcblxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IG5lZWRQcmV2ZW50O1xuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgICAgLy8gU2tpcCBzY3JvbGwgaWYgcGxhY2UgaXMgZW5vdWdoXG4gICAgICBpZiAod3JhcHBlcldpZHRoID49IHdyYXBwZXJTY3JvbGxXaWR0aCkge1xuICAgICAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIGRvTW92ZShzZXRUcmFuc2Zvcm1MZWZ0LCBvZmZzZXRYKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHdyYXBwZXJIZWlnaHQgPj0gd3JhcHBlclNjcm9sbEhlaWdodCkge1xuICAgICAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIGRvTW92ZShzZXRUcmFuc2Zvcm1Ub3AsIG9mZnNldFkpO1xuICAgIH1cblxuICAgIGNsZWFyVG91Y2hNb3ZpbmcoKTtcbiAgICBkb0xvY2tBbmltYXRpb24oKTtcbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVG91Y2hNb3ZpbmcoKTtcblxuICAgIGlmIChsb2NrQW5pbWF0aW9uKSB7XG4gICAgICB0b3VjaE1vdmluZ1JlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRMb2NrQW5pbWF0aW9uKDApO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xlYXJUb3VjaE1vdmluZztcbiAgfSwgW2xvY2tBbmltYXRpb25dKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBTY3JvbGwgPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG9UYWIoKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogYWN0aXZlS2V5O1xuICAgIHZhciB0YWJPZmZzZXQgPSB0YWJPZmZzZXRzLmdldChrZXkpIHx8IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAwXG4gICAgfTtcblxuICAgIGlmICh0YWJQb3NpdGlvblRvcE9yQm90dG9tKSB7XG4gICAgICAvLyA9PT09PT09PT09PT0gQWxpZ24gd2l0aCB0b3AgJiBib3R0b20gPT09PT09PT09PT09XG4gICAgICB2YXIgbmV3VHJhbnNmb3JtID0gdHJhbnNmb3JtTGVmdDsgLy8gUlRMXG5cbiAgICAgIGlmIChydGwpIHtcbiAgICAgICAgaWYgKHRhYk9mZnNldC5yaWdodCA8IHRyYW5zZm9ybUxlZnQpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSB0YWJPZmZzZXQucmlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiT2Zmc2V0LnJpZ2h0ICsgdGFiT2Zmc2V0LndpZHRoID4gdHJhbnNmb3JtTGVmdCArIHdyYXBwZXJXaWR0aCkge1xuICAgICAgICAgIG5ld1RyYW5zZm9ybSA9IHRhYk9mZnNldC5yaWdodCArIHRhYk9mZnNldC53aWR0aCAtIHdyYXBwZXJXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBMVFJcbiAgICAgIGVsc2UgaWYgKHRhYk9mZnNldC5sZWZ0IDwgLXRyYW5zZm9ybUxlZnQpIHtcbiAgICAgICAgICBuZXdUcmFuc2Zvcm0gPSAtdGFiT2Zmc2V0LmxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiT2Zmc2V0LmxlZnQgKyB0YWJPZmZzZXQud2lkdGggPiAtdHJhbnNmb3JtTGVmdCArIHdyYXBwZXJXaWR0aCkge1xuICAgICAgICAgIG5ld1RyYW5zZm9ybSA9IC0odGFiT2Zmc2V0LmxlZnQgKyB0YWJPZmZzZXQud2lkdGggLSB3cmFwcGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgIHNldFRyYW5zZm9ybVRvcCgwKTtcbiAgICAgIHNldFRyYW5zZm9ybUxlZnQoYWxpZ25JblJhbmdlKG5ld1RyYW5zZm9ybSlbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyA9PT09PT09PT09PT0gQWxpZ24gd2l0aCBsZWZ0ICYgcmlnaHQgPT09PT09PT09PT09XG4gICAgICB2YXIgX25ld1RyYW5zZm9ybSA9IHRyYW5zZm9ybVRvcDtcblxuICAgICAgaWYgKHRhYk9mZnNldC50b3AgPCAtdHJhbnNmb3JtVG9wKSB7XG4gICAgICAgIF9uZXdUcmFuc2Zvcm0gPSAtdGFiT2Zmc2V0LnRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGFiT2Zmc2V0LnRvcCArIHRhYk9mZnNldC5oZWlnaHQgPiAtdHJhbnNmb3JtVG9wICsgd3JhcHBlckhlaWdodCkge1xuICAgICAgICBfbmV3VHJhbnNmb3JtID0gLSh0YWJPZmZzZXQudG9wICsgdGFiT2Zmc2V0LmhlaWdodCAtIHdyYXBwZXJIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBzZXRUcmFuc2Zvcm1MZWZ0KDApO1xuICAgICAgc2V0VHJhbnNmb3JtVG9wKGFsaWduSW5SYW5nZShfbmV3VHJhbnNmb3JtKVswXSk7XG4gICAgfVxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IFRhYiA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBSZW5kZXIgdGFiIG5vZGUgJiBjb2xsZWN0IHRhYiBvZmZzZXRcblxuXG4gIHZhciBfdXNlVmlzaWJsZVJhbmdlID0gdXNlVmlzaWJsZVJhbmdlKHRhYk9mZnNldHMsIHtcbiAgICB3aWR0aDogd3JhcHBlcldpZHRoLFxuICAgIGhlaWdodDogd3JhcHBlckhlaWdodCxcbiAgICBsZWZ0OiB0cmFuc2Zvcm1MZWZ0LFxuICAgIHRvcDogdHJhbnNmb3JtVG9wXG4gIH0sIHtcbiAgICB3aWR0aDogd3JhcHBlckNvbnRlbnRXaWR0aCxcbiAgICBoZWlnaHQ6IHdyYXBwZXJDb250ZW50SGVpZ2h0XG4gIH0sIHtcbiAgICB3aWR0aDogYWRkV2lkdGgsXG4gICAgaGVpZ2h0OiBhZGRIZWlnaHRcbiAgfSwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwcm9wcyksIHt9LCB7XG4gICAgdGFiczogdGFic1xuICB9KSksXG4gICAgICBfdXNlVmlzaWJsZVJhbmdlMiA9IF9zbGljZWRUb0FycmF5KF91c2VWaXNpYmxlUmFuZ2UsIDIpLFxuICAgICAgdmlzaWJsZVN0YXJ0ID0gX3VzZVZpc2libGVSYW5nZTJbMF0sXG4gICAgICB2aXNpYmxlRW5kID0gX3VzZVZpc2libGVSYW5nZTJbMV07XG5cbiAgdmFyIHRhYk5vZGVzID0gdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHZhciBrZXkgPSB0YWIua2V5O1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJOb2RlLCB7XG4gICAgICBpZDogaWQsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIGtleToga2V5LFxuICAgICAgcnRsOiBydGwsXG4gICAgICB0YWI6IHRhYixcbiAgICAgIGNsb3NhYmxlOiB0YWIuY2xvc2FibGUsXG4gICAgICBlZGl0YWJsZTogZWRpdGFibGUsXG4gICAgICBhY3RpdmU6IGtleSA9PT0gYWN0aXZlS2V5LFxuICAgICAgdGFiUG9zaXRpb246IHRhYlBvc2l0aW9uLFxuICAgICAgdGFiQmFyR3V0dGVyOiB0YWJCYXJHdXR0ZXIsXG4gICAgICByZW5kZXJXcmFwcGVyOiBjaGlsZHJlbixcbiAgICAgIHJlbW92ZUFyaWFMYWJlbDogbG9jYWxlID09PSBudWxsIHx8IGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbG9jYWxlLnJlbW92ZUFyaWFMYWJlbCxcbiAgICAgIHJlZjogZ2V0QnRuUmVmKGtleSksXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgb25UYWJDbGljayhrZXksIGUpO1xuICAgICAgfSxcbiAgICAgIG9uUmVtb3ZlOiBmdW5jdGlvbiBvblJlbW92ZSgpIHtcbiAgICAgICAgcmVtb3ZlQnRuUmVmKGtleSk7XG4gICAgICB9LFxuICAgICAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cygpIHtcbiAgICAgICAgc2Nyb2xsVG9UYWIoa2V5KTtcbiAgICAgICAgZG9Mb2NrQW5pbWF0aW9uKCk7IC8vIEZvY3VzIGVsZW1lbnQgd2lsbCBtYWtlIHNjcm9sbExlZnQgY2hhbmdlIHdoaWNoIHdlIHNob3VsZCByZXNldCBiYWNrXG5cbiAgICAgICAgaWYgKCFydGwpIHtcbiAgICAgICAgICB0YWJzV3JhcHBlclJlZi5jdXJyZW50LnNjcm9sbExlZnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFic1dyYXBwZXJSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgdmFyIG9uTGlzdEhvbGRlclJlc2l6ZSA9IHVzZVJhZihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90YWJzV3JhcHBlclJlZiRjdXJyZSwgX3RhYnNXcmFwcGVyUmVmJGN1cnJlMiwgX2lubmVyQWRkQnV0dG9uUmVmJGN1LCBfaW5uZXJBZGRCdXR0b25SZWYkY3UyLCBfb3BlcmF0aW9uc1JlZiRjdXJyZW4sIF9vcGVyYXRpb25zUmVmJGN1cnJlbjIsIF90YWJMaXN0UmVmJGN1cnJlbnQsIF90YWJMaXN0UmVmJGN1cnJlbnQyLCBfb3BlcmF0aW9uc1JlZiRjdXJyZW4zO1xuXG4gICAgLy8gVXBkYXRlIHdyYXBwZXIgcmVjb3Jkc1xuICAgIHZhciBvZmZzZXRXaWR0aCA9ICgoX3RhYnNXcmFwcGVyUmVmJGN1cnJlID0gdGFic1dyYXBwZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3RhYnNXcmFwcGVyUmVmJGN1cnJlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFic1dyYXBwZXJSZWYkY3VycmUub2Zmc2V0V2lkdGgpIHx8IDA7XG4gICAgdmFyIG9mZnNldEhlaWdodCA9ICgoX3RhYnNXcmFwcGVyUmVmJGN1cnJlMiA9IHRhYnNXcmFwcGVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90YWJzV3JhcHBlclJlZiRjdXJyZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJzV3JhcHBlclJlZiRjdXJyZTIub2Zmc2V0SGVpZ2h0KSB8fCAwO1xuICAgIHZhciBuZXdBZGRXaWR0aCA9ICgoX2lubmVyQWRkQnV0dG9uUmVmJGN1ID0gaW5uZXJBZGRCdXR0b25SZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2lubmVyQWRkQnV0dG9uUmVmJGN1ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5uZXJBZGRCdXR0b25SZWYkY3Uub2Zmc2V0V2lkdGgpIHx8IDA7XG4gICAgdmFyIG5ld0FkZEhlaWdodCA9ICgoX2lubmVyQWRkQnV0dG9uUmVmJGN1MiA9IGlubmVyQWRkQnV0dG9uUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9pbm5lckFkZEJ1dHRvblJlZiRjdTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pbm5lckFkZEJ1dHRvblJlZiRjdTIub2Zmc2V0SGVpZ2h0KSB8fCAwO1xuICAgIHZhciBuZXdPcGVyYXRpb25XaWR0aCA9ICgoX29wZXJhdGlvbnNSZWYkY3VycmVuID0gb3BlcmF0aW9uc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfb3BlcmF0aW9uc1JlZiRjdXJyZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcGVyYXRpb25zUmVmJGN1cnJlbi5vZmZzZXRXaWR0aCkgfHwgMDtcbiAgICB2YXIgbmV3T3BlcmF0aW9uSGVpZ2h0ID0gKChfb3BlcmF0aW9uc1JlZiRjdXJyZW4yID0gb3BlcmF0aW9uc1JlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfb3BlcmF0aW9uc1JlZiRjdXJyZW4yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3BlcmF0aW9uc1JlZiRjdXJyZW4yLm9mZnNldEhlaWdodCkgfHwgMDtcbiAgICBzZXRXcmFwcGVyV2lkdGgob2Zmc2V0V2lkdGgpO1xuICAgIHNldFdyYXBwZXJIZWlnaHQob2Zmc2V0SGVpZ2h0KTtcbiAgICBzZXRBZGRXaWR0aChuZXdBZGRXaWR0aCk7XG4gICAgc2V0QWRkSGVpZ2h0KG5ld0FkZEhlaWdodCk7XG4gICAgdmFyIG5ld1dyYXBwZXJTY3JvbGxXaWR0aCA9ICgoKF90YWJMaXN0UmVmJGN1cnJlbnQgPSB0YWJMaXN0UmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF90YWJMaXN0UmVmJGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJMaXN0UmVmJGN1cnJlbnQub2Zmc2V0V2lkdGgpIHx8IDApIC0gbmV3QWRkV2lkdGg7XG4gICAgdmFyIG5ld1dyYXBwZXJTY3JvbGxIZWlnaHQgPSAoKChfdGFiTGlzdFJlZiRjdXJyZW50MiA9IHRhYkxpc3RSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX3RhYkxpc3RSZWYkY3VycmVudDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90YWJMaXN0UmVmJGN1cnJlbnQyLm9mZnNldEhlaWdodCkgfHwgMCkgLSBuZXdBZGRIZWlnaHQ7XG4gICAgc2V0V3JhcHBlclNjcm9sbFdpZHRoKG5ld1dyYXBwZXJTY3JvbGxXaWR0aCk7XG4gICAgc2V0V3JhcHBlclNjcm9sbEhlaWdodChuZXdXcmFwcGVyU2Nyb2xsSGVpZ2h0KTtcbiAgICB2YXIgaXNPcGVyYXRpb25IaWRkZW4gPSAoX29wZXJhdGlvbnNSZWYkY3VycmVuMyA9IG9wZXJhdGlvbnNSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX29wZXJhdGlvbnNSZWYkY3VycmVuMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wZXJhdGlvbnNSZWYkY3VycmVuMy5jbGFzc05hbWUuaW5jbHVkZXMob3BlcmF0aW9uc0hpZGRlbkNsYXNzTmFtZSk7XG4gICAgc2V0V3JhcHBlckNvbnRlbnRXaWR0aChuZXdXcmFwcGVyU2Nyb2xsV2lkdGggLSAoaXNPcGVyYXRpb25IaWRkZW4gPyAwIDogbmV3T3BlcmF0aW9uV2lkdGgpKTtcbiAgICBzZXRXcmFwcGVyQ29udGVudEhlaWdodChuZXdXcmFwcGVyU2Nyb2xsSGVpZ2h0IC0gKGlzT3BlcmF0aW9uSGlkZGVuID8gMCA6IG5ld09wZXJhdGlvbkhlaWdodCkpOyAvLyBVcGRhdGUgYnV0dG9ucyByZWNvcmRzXG5cbiAgICBzZXRUYWJTaXplcyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV3U2l6ZXMgPSBuZXcgTWFwKCk7XG4gICAgICB0YWJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXk7XG4gICAgICAgIHZhciBidG5Ob2RlID0gZ2V0QnRuUmVmKGtleSkuY3VycmVudDtcblxuICAgICAgICBpZiAoYnRuTm9kZSkge1xuICAgICAgICAgIG5ld1NpemVzLnNldChrZXksIHtcbiAgICAgICAgICAgIHdpZHRoOiBidG5Ob2RlLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBidG5Ob2RlLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIGxlZnQ6IGJ0bk5vZGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIHRvcDogYnRuTm9kZS5vZmZzZXRUb3BcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3U2l6ZXM7XG4gICAgfSk7XG4gIH0pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gRHJvcGRvd24gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgc3RhcnRIaWRkZW5UYWJzID0gdGFicy5zbGljZSgwLCB2aXNpYmxlU3RhcnQpO1xuICB2YXIgZW5kSGlkZGVuVGFicyA9IHRhYnMuc2xpY2UodmlzaWJsZUVuZCArIDEpO1xuICB2YXIgaGlkZGVuVGFicyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoc3RhcnRIaWRkZW5UYWJzKSwgX3RvQ29uc3VtYWJsZUFycmF5KGVuZEhpZGRlblRhYnMpKTsgLy8gPT09PT09PT09PT09PT09PT09PSBMaW5rICYgT3BlcmF0aW9ucyA9PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIF91c2VTdGF0ZTE5ID0gdXNlU3RhdGUoKSxcbiAgICAgIF91c2VTdGF0ZTIwID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMTksIDIpLFxuICAgICAgaW5rU3R5bGUgPSBfdXNlU3RhdGUyMFswXSxcbiAgICAgIHNldElua1N0eWxlID0gX3VzZVN0YXRlMjBbMV07XG5cbiAgdmFyIGFjdGl2ZVRhYk9mZnNldCA9IHRhYk9mZnNldHMuZ2V0KGFjdGl2ZUtleSk7IC8vIERlbGF5IHNldCBpbmsgc3R5bGUgdG8gYXZvaWQgcmVtb3ZlIHRhYiBibGlua1xuXG4gIHZhciBpbmtCYXJSYWZSZWYgPSB1c2VSZWYoKTtcblxuICBmdW5jdGlvbiBjbGVhbklua0JhclJhZigpIHtcbiAgICByYWYuY2FuY2VsKGlua0JhclJhZlJlZi5jdXJyZW50KTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld0lua1N0eWxlID0ge307XG5cbiAgICBpZiAoYWN0aXZlVGFiT2Zmc2V0KSB7XG4gICAgICBpZiAodGFiUG9zaXRpb25Ub3BPckJvdHRvbSkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbmV3SW5rU3R5bGUucmlnaHQgPSBhY3RpdmVUYWJPZmZzZXQucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3SW5rU3R5bGUubGVmdCA9IGFjdGl2ZVRhYk9mZnNldC5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3SW5rU3R5bGUud2lkdGggPSBhY3RpdmVUYWJPZmZzZXQud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbmtTdHlsZS50b3AgPSBhY3RpdmVUYWJPZmZzZXQudG9wO1xuICAgICAgICBuZXdJbmtTdHlsZS5oZWlnaHQgPSBhY3RpdmVUYWJPZmZzZXQuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuSW5rQmFyUmFmKCk7XG4gICAgaW5rQmFyUmFmUmVmLmN1cnJlbnQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0SW5rU3R5bGUobmV3SW5rU3R5bGUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGVhbklua0JhclJhZjtcbiAgfSwgW2FjdGl2ZVRhYk9mZnNldCwgdGFiUG9zaXRpb25Ub3BPckJvdHRvbSwgcnRsXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gRWZmZWN0ID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2Nyb2xsVG9UYWIoKTtcbiAgfSwgW2FjdGl2ZUtleSwgYWN0aXZlVGFiT2Zmc2V0LCB0YWJPZmZzZXRzLCB0YWJQb3NpdGlvblRvcE9yQm90dG9tXSk7IC8vIFNob3VsZCByZWNhbGN1bGF0ZSB3aGVuIHJ0bCBjaGFuZ2VkXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBvbkxpc3RIb2xkZXJSZXNpemUoKTtcbiAgfSwgW3J0bCwgdGFiQmFyR3V0dGVyLCBhY3RpdmVLZXksIHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiLmtleTtcbiAgfSkuam9pbignXycpXSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBoYXNEcm9wZG93biA9ICEhaGlkZGVuVGFicy5sZW5ndGg7XG4gIHZhciB3cmFwUHJlZml4ID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uYXYtd3JhcFwiKTtcbiAgdmFyIHBpbmdMZWZ0O1xuICB2YXIgcGluZ1JpZ2h0O1xuICB2YXIgcGluZ1RvcDtcbiAgdmFyIHBpbmdCb3R0b207XG5cbiAgaWYgKHRhYlBvc2l0aW9uVG9wT3JCb3R0b20pIHtcbiAgICBpZiAocnRsKSB7XG4gICAgICBwaW5nUmlnaHQgPSB0cmFuc2Zvcm1MZWZ0ID4gMDtcbiAgICAgIHBpbmdMZWZ0ID0gdHJhbnNmb3JtTGVmdCArIHdyYXBwZXJXaWR0aCA8IHdyYXBwZXJTY3JvbGxXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGluZ0xlZnQgPSB0cmFuc2Zvcm1MZWZ0IDwgMDtcbiAgICAgIHBpbmdSaWdodCA9IC10cmFuc2Zvcm1MZWZ0ICsgd3JhcHBlcldpZHRoIDwgd3JhcHBlclNjcm9sbFdpZHRoO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwaW5nVG9wID0gdHJhbnNmb3JtVG9wIDwgMDtcbiAgICBwaW5nQm90dG9tID0gLXRyYW5zZm9ybVRvcCArIHdyYXBwZXJIZWlnaHQgPCB3cmFwcGVyU2Nyb2xsSGVpZ2h0O1xuICB9XG4gIC8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2ludGVyYWN0aXZlLXN1cHBvcnRzLWZvY3VzICovXG5cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IFwidGFibGlzdFwiLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5hdlwiKSwgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7XG4gICAgICAvLyBObyBuZWVkIGFuaW1hdGlvbiB3aGVuIHVzZSBrZXlib2FyZFxuICAgICAgZG9Mb2NrQW5pbWF0aW9uKCk7XG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFeHRyYUNvbnRlbnQsIHtcbiAgICBwb3NpdGlvbjogXCJsZWZ0XCIsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgIG9uUmVzaXplOiBvbkxpc3RIb2xkZXJSZXNpemVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyh3cmFwUHJlZml4LCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh3cmFwUHJlZml4LCBcIi1waW5nLWxlZnRcIiksIHBpbmdMZWZ0KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh3cmFwUHJlZml4LCBcIi1waW5nLXJpZ2h0XCIpLCBwaW5nUmlnaHQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHdyYXBQcmVmaXgsIFwiLXBpbmctdG9wXCIpLCBwaW5nVG9wKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdCh3cmFwUHJlZml4LCBcIi1waW5nLWJvdHRvbVwiKSwgcGluZ0JvdHRvbSksIF9jbGFzc05hbWVzKSksXG4gICAgcmVmOiB0YWJzV3JhcHBlclJlZlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgIG9uUmVzaXplOiBvbkxpc3RIb2xkZXJSZXNpemVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHJlZjogdGFiTGlzdFJlZixcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbmF2LWxpc3RcIiksXG4gICAgc3R5bGU6IHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybUxlZnQsIFwicHgsIFwiKS5jb25jYXQodHJhbnNmb3JtVG9wLCBcInB4KVwiKSxcbiAgICAgIHRyYW5zaXRpb246IGxvY2tBbmltYXRpb24gPyAnbm9uZScgOiB1bmRlZmluZWRcbiAgICB9XG4gIH0sIHRhYk5vZGVzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBZGRCdXR0b24sIHtcbiAgICByZWY6IGlubmVyQWRkQnV0dG9uUmVmLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIGVkaXRhYmxlOiBlZGl0YWJsZSxcbiAgICBzdHlsZToge1xuICAgICAgdmlzaWJpbGl0eTogaGFzRHJvcGRvd24gPyAnaGlkZGVuJyA6IG51bGxcbiAgICB9XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5rLWJhclwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWluay1iYXItYW5pbWF0ZWRcIiksIGFuaW1hdGVkLmlua0JhcikpLFxuICAgIHN0eWxlOiBpbmtTdHlsZVxuICB9KSkpKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE9wZXJhdGlvbk5vZGUsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiBvcGVyYXRpb25zUmVmLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRhYnM6IGhpZGRlblRhYnMsXG4gICAgY2xhc3NOYW1lOiAhaGFzRHJvcGRvd24gJiYgb3BlcmF0aW9uc0hpZGRlbkNsYXNzTmFtZVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEV4dHJhQ29udGVudCwge1xuICAgIHBvc2l0aW9uOiBcInJpZ2h0XCIsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gIH0pKTtcbiAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihUYWJOYXZMaXN0KTsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYlBhbmUoX3JlZikge1xuICB2YXIgcHJlZml4Q2xzID0gX3JlZi5wcmVmaXhDbHMsXG4gICAgICBmb3JjZVJlbmRlciA9IF9yZWYuZm9yY2VSZW5kZXIsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgYW5pbWF0ZWQgPSBfcmVmLmFuaW1hdGVkLFxuICAgICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IF9yZWYuZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgIHRhYktleSA9IF9yZWYudGFiS2V5LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmb3JjZVJlbmRlciksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHZpc2l0ZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VmlzaXRlZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBzZXRWaXNpdGVkKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZGVzdHJveUluYWN0aXZlVGFiUGFuZSkge1xuICAgICAgc2V0VmlzaXRlZChmYWxzZSk7XG4gICAgfVxuICB9LCBbYWN0aXZlLCBkZXN0cm95SW5hY3RpdmVUYWJQYW5lXSk7XG4gIHZhciBtZXJnZWRTdHlsZSA9IHt9O1xuXG4gIGlmICghYWN0aXZlKSB7XG4gICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICBtZXJnZWRTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBtZXJnZWRTdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgbWVyZ2VkU3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBpZDogaWQgJiYgXCJcIi5jb25jYXQoaWQsIFwiLXBhbmVsLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgdGFiSW5kZXg6IGFjdGl2ZSA/IDAgOiAtMSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBpZCAmJiBcIlwiLmNvbmNhdChpZCwgXCItdGFiLVwiKS5jb25jYXQodGFiS2V5KSxcbiAgICBcImFyaWEtaGlkZGVuXCI6ICFhY3RpdmUsXG4gICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWVyZ2VkU3R5bGUpLCBzdHlsZSksXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFicGFuZVwiKSwgYWN0aXZlICYmIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGFicGFuZS1hY3RpdmVcIiksIGNsYXNzTmFtZSlcbiAgfSwgKGFjdGl2ZSB8fCB2aXNpdGVkIHx8IGZvcmNlUmVuZGVyKSAmJiBjaGlsZHJlbik7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFRhYkNvbnRleHQgZnJvbSAnLi4vVGFiQ29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJQYW5lbExpc3QoX3JlZikge1xuICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICBhbmltYXRlZCA9IF9yZWYuYW5pbWF0ZWQsXG4gICAgICB0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgICBydGwgPSBfcmVmLnJ0bCxcbiAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUgPSBfcmVmLmRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChUYWJDb250ZXh0KSxcbiAgICAgIHByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LnByZWZpeENscyxcbiAgICAgIHRhYnMgPSBfUmVhY3QkdXNlQ29udGV4dC50YWJzO1xuXG4gIHZhciB0YWJQYW5lQW5pbWF0ZWQgPSBhbmltYXRlZC50YWJQYW5lO1xuICB2YXIgYWN0aXZlSW5kZXggPSB0YWJzLmZpbmRJbmRleChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXkgPT09IGFjdGl2ZUtleTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudC1ob2xkZXJcIikpXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50XCIpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRlbnQtXCIpLmNvbmNhdCh0YWJQb3NpdGlvbiksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LWFuaW1hdGVkXCIpLCB0YWJQYW5lQW5pbWF0ZWQpKSxcbiAgICBzdHlsZTogYWN0aXZlSW5kZXggJiYgdGFiUGFuZUFuaW1hdGVkID8gX2RlZmluZVByb3BlcnR5KHt9LCBydGwgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnLCBcIi1cIi5jb25jYXQoYWN0aXZlSW5kZXgsIFwiMDAlXCIpKSA6IG51bGxcbiAgfSwgdGFicy5tYXAoZnVuY3Rpb24gKHRhYikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KHRhYi5ub2RlLCB7XG4gICAgICBrZXk6IHRhYi5rZXksXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHRhYktleTogdGFiLmtleSxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGFuaW1hdGVkOiB0YWJQYW5lQW5pbWF0ZWQsXG4gICAgICBhY3RpdmU6IHRhYi5rZXkgPT09IGFjdGl2ZUtleSxcbiAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU6IGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmVcbiAgICB9KTtcbiAgfSkpKTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbi8vIEFjY2Vzc2liaWxpdHkgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQWNjZXNzaWJpbGl0eS9BUklBL1JvbGVzL1RhYl9Sb2xlXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdG9BcnJheSBmcm9tIFwicmMtdXRpbC9lcy9DaGlsZHJlbi90b0FycmF5XCI7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcInJjLXV0aWwvZXMvaXNNb2JpbGVcIjtcbmltcG9ydCB1c2VNZXJnZWRTdGF0ZSBmcm9tIFwicmMtdXRpbC9lcy9ob29rcy91c2VNZXJnZWRTdGF0ZVwiO1xuaW1wb3J0IFRhYk5hdkxpc3QgZnJvbSAnLi9UYWJOYXZMaXN0JztcbmltcG9ydCBUYWJQYW5lbExpc3QgZnJvbSAnLi9UYWJQYW5lbExpc3QnO1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi9UYWJQYW5lbExpc3QvVGFiUGFuZSc7XG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICcuL1RhYkNvbnRleHQnO1xuLyoqXG4gKiBTaG91bGQgYWRkZWQgYW50ZDpcbiAqIC0gdHlwZVxuICpcbiAqIFJlbW92ZWQ6XG4gKiAtIG9uTmV4dENsaWNrXG4gKiAtIG9uUHJldkNsaWNrXG4gKiAtIGtleWJvYXJkXG4gKi9cbi8vIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHlcblxudmFyIHV1aWQgPSAwO1xuXG5mdW5jdGlvbiBwYXJzZVRhYkxpc3QoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRvQXJyYXkoY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICggLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICB2YXIga2V5ID0gbm9kZS5rZXkgIT09IHVuZGVmaW5lZCA/IFN0cmluZyhub2RlLmtleSkgOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAga2V5OiBrZXlcbiAgICAgIH0sIG5vZGUucHJvcHMpLCB7fSwge1xuICAgICAgICBub2RlOiBub2RlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gVGFicyhfcmVmLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBfcmVmJHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgcHJlZml4Q2xzID0gX3JlZiRwcmVmaXhDbHMgPT09IHZvaWQgMCA/ICdyYy10YWJzJyA6IF9yZWYkcHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbixcbiAgICAgIGFjdGl2ZUtleSA9IF9yZWYuYWN0aXZlS2V5LFxuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IF9yZWYuZGVmYXVsdEFjdGl2ZUtleSxcbiAgICAgIGVkaXRhYmxlID0gX3JlZi5lZGl0YWJsZSxcbiAgICAgIF9yZWYkYW5pbWF0ZWQgPSBfcmVmLmFuaW1hdGVkLFxuICAgICAgYW5pbWF0ZWQgPSBfcmVmJGFuaW1hdGVkID09PSB2b2lkIDAgPyB7XG4gICAgaW5rQmFyOiB0cnVlLFxuICAgIHRhYlBhbmU6IGZhbHNlXG4gIH0gOiBfcmVmJGFuaW1hdGVkLFxuICAgICAgX3JlZiR0YWJQb3NpdGlvbiA9IF9yZWYudGFiUG9zaXRpb24sXG4gICAgICB0YWJQb3NpdGlvbiA9IF9yZWYkdGFiUG9zaXRpb24gPT09IHZvaWQgMCA/ICd0b3AnIDogX3JlZiR0YWJQb3NpdGlvbixcbiAgICAgIHRhYkJhckd1dHRlciA9IF9yZWYudGFiQmFyR3V0dGVyLFxuICAgICAgdGFiQmFyU3R5bGUgPSBfcmVmLnRhYkJhclN0eWxlLFxuICAgICAgdGFiQmFyRXh0cmFDb250ZW50ID0gX3JlZi50YWJCYXJFeHRyYUNvbnRlbnQsXG4gICAgICBsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgIG1vcmVJY29uID0gX3JlZi5tb3JlSWNvbixcbiAgICAgIG1vcmVUcmFuc2l0aW9uTmFtZSA9IF9yZWYubW9yZVRyYW5zaXRpb25OYW1lLFxuICAgICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZSA9IF9yZWYuZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgIHJlbmRlclRhYkJhciA9IF9yZWYucmVuZGVyVGFiQmFyLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgb25UYWJDbGljayA9IF9yZWYub25UYWJDbGljayxcbiAgICAgIG9uVGFiU2Nyb2xsID0gX3JlZi5vblRhYlNjcm9sbCxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpZFwiLCBcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiZGlyZWN0aW9uXCIsIFwiYWN0aXZlS2V5XCIsIFwiZGVmYXVsdEFjdGl2ZUtleVwiLCBcImVkaXRhYmxlXCIsIFwiYW5pbWF0ZWRcIiwgXCJ0YWJQb3NpdGlvblwiLCBcInRhYkJhckd1dHRlclwiLCBcInRhYkJhclN0eWxlXCIsIFwidGFiQmFyRXh0cmFDb250ZW50XCIsIFwibG9jYWxlXCIsIFwibW9yZUljb25cIiwgXCJtb3JlVHJhbnNpdGlvbk5hbWVcIiwgXCJkZXN0cm95SW5hY3RpdmVUYWJQYW5lXCIsIFwicmVuZGVyVGFiQmFyXCIsIFwib25DaGFuZ2VcIiwgXCJvblRhYkNsaWNrXCIsIFwib25UYWJTY3JvbGxcIl0pO1xuXG4gIHZhciB0YWJzID0gcGFyc2VUYWJMaXN0KGNoaWxkcmVuKTtcbiAgdmFyIHJ0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gIHZhciBtZXJnZWRBbmltYXRlZDtcblxuICBpZiAoYW5pbWF0ZWQgPT09IGZhbHNlKSB7XG4gICAgbWVyZ2VkQW5pbWF0ZWQgPSB7XG4gICAgICBpbmtCYXI6IGZhbHNlLFxuICAgICAgdGFiUGFuZTogZmFsc2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKGFuaW1hdGVkID09PSB0cnVlKSB7XG4gICAgbWVyZ2VkQW5pbWF0ZWQgPSB7XG4gICAgICBpbmtCYXI6IHRydWUsXG4gICAgICB0YWJQYW5lOiB0cnVlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtZXJnZWRBbmltYXRlZCA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgaW5rQmFyOiB0cnVlLFxuICAgICAgdGFiUGFuZTogZmFsc2VcbiAgICB9LCBfdHlwZW9mKGFuaW1hdGVkKSA9PT0gJ29iamVjdCcgPyBhbmltYXRlZCA6IHt9KTtcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gTW9iaWxlID09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgbW9iaWxlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldE1vYmlsZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBPbmx5IHVwZGF0ZSBvbiB0aGUgY2xpZW50IHNpZGVcbiAgICBzZXRNb2JpbGUoaXNNb2JpbGUoKSk7XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PSBBY3RpdmUgS2V5ID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgX3VzZU1lcmdlZFN0YXRlID0gdXNlTWVyZ2VkU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGFicyQ7XG5cbiAgICByZXR1cm4gKF90YWJzJCA9IHRhYnNbMF0pID09PSBudWxsIHx8IF90YWJzJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnMkLmtleTtcbiAgfSwge1xuICAgIHZhbHVlOiBhY3RpdmVLZXksXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0QWN0aXZlS2V5XG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZSwgMiksXG4gICAgICBtZXJnZWRBY3RpdmVLZXkgPSBfdXNlTWVyZ2VkU3RhdGUyWzBdLFxuICAgICAgc2V0TWVyZ2VkQWN0aXZlS2V5ID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcblxuICB2YXIgX3VzZVN0YXRlMyA9IHVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGFicy5maW5kSW5kZXgoZnVuY3Rpb24gKHRhYikge1xuICAgICAgcmV0dXJuIHRhYi5rZXkgPT09IG1lcmdlZEFjdGl2ZUtleTtcbiAgICB9KTtcbiAgfSksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBhY3RpdmVJbmRleCA9IF91c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRBY3RpdmVJbmRleCA9IF91c2VTdGF0ZTRbMV07IC8vIFJlc2V0IGFjdGl2ZSBrZXkgaWYgbm90IGV4aXN0IGFueW1vcmVcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gdGFicy5maW5kSW5kZXgoZnVuY3Rpb24gKHRhYikge1xuICAgICAgcmV0dXJuIHRhYi5rZXkgPT09IG1lcmdlZEFjdGl2ZUtleTtcbiAgICB9KTtcblxuICAgIGlmIChuZXdBY3RpdmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIHZhciBfdGFicyRuZXdBY3RpdmVJbmRleDtcblxuICAgICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihhY3RpdmVJbmRleCwgdGFicy5sZW5ndGggLSAxKSk7XG4gICAgICBzZXRNZXJnZWRBY3RpdmVLZXkoKF90YWJzJG5ld0FjdGl2ZUluZGV4ID0gdGFic1tuZXdBY3RpdmVJbmRleF0pID09PSBudWxsIHx8IF90YWJzJG5ld0FjdGl2ZUluZGV4ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFicyRuZXdBY3RpdmVJbmRleC5rZXkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KTtcbiAgfSwgW3RhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHtcbiAgICByZXR1cm4gdGFiLmtleTtcbiAgfSkuam9pbignXycpLCBtZXJnZWRBY3RpdmVLZXksIGFjdGl2ZUluZGV4XSk7IC8vID09PT09PT09PT09PT09PT09PT09PSBBY2Nlc3NpYmlsaXR5ID09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZTMgPSB1c2VNZXJnZWRTdGF0ZShudWxsLCB7XG4gICAgdmFsdWU6IGlkXG4gIH0pLFxuICAgICAgX3VzZU1lcmdlZFN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VNZXJnZWRTdGF0ZTMsIDIpLFxuICAgICAgbWVyZ2VkSWQgPSBfdXNlTWVyZ2VkU3RhdGU0WzBdLFxuICAgICAgc2V0TWVyZ2VkSWQgPSBfdXNlTWVyZ2VkU3RhdGU0WzFdO1xuXG4gIHZhciBtZXJnZWRUYWJQb3NpdGlvbiA9IHRhYlBvc2l0aW9uO1xuXG4gIGlmIChtb2JpbGUgJiYgIVsnbGVmdCcsICdyaWdodCddLmluY2x1ZGVzKHRhYlBvc2l0aW9uKSkge1xuICAgIG1lcmdlZFRhYlBvc2l0aW9uID0gJ3RvcCc7XG4gIH0gLy8gQXN5bmMgZ2VuZXJhdGUgaWQgdG8gYXZvaWQgc3NyIG1hcHBpbmcgZmFpbGVkXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHNldE1lcmdlZElkKFwicmMtdGFicy1cIi5jb25jYXQocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/ICd0ZXN0JyA6IHV1aWQpKTtcbiAgICAgIHV1aWQgKz0gMTtcbiAgICB9XG4gIH0sIFtdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IEV2ZW50cyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBvbkludGVybmFsVGFiQ2xpY2soa2V5LCBlKSB7XG4gICAgb25UYWJDbGljayA9PT0gbnVsbCB8fCBvblRhYkNsaWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblRhYkNsaWNrKGtleSwgZSk7XG4gICAgc2V0TWVyZ2VkQWN0aXZlS2V5KGtleSk7XG4gICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGtleSk7XG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09IFJlbmRlciA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG4gIHZhciBzaGFyZWRQcm9wcyA9IHtcbiAgICBpZDogbWVyZ2VkSWQsXG4gICAgYWN0aXZlS2V5OiBtZXJnZWRBY3RpdmVLZXksXG4gICAgYW5pbWF0ZWQ6IG1lcmdlZEFuaW1hdGVkLFxuICAgIHRhYlBvc2l0aW9uOiBtZXJnZWRUYWJQb3NpdGlvbixcbiAgICBydGw6IHJ0bCxcbiAgICBtb2JpbGU6IG1vYmlsZVxuICB9O1xuICB2YXIgdGFiTmF2QmFyO1xuXG4gIHZhciB0YWJOYXZCYXJQcm9wcyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc2hhcmVkUHJvcHMpLCB7fSwge1xuICAgIGVkaXRhYmxlOiBlZGl0YWJsZSxcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBtb3JlSWNvbjogbW9yZUljb24sXG4gICAgbW9yZVRyYW5zaXRpb25OYW1lOiBtb3JlVHJhbnNpdGlvbk5hbWUsXG4gICAgdGFiQmFyR3V0dGVyOiB0YWJCYXJHdXR0ZXIsXG4gICAgb25UYWJDbGljazogb25JbnRlcm5hbFRhYkNsaWNrLFxuICAgIG9uVGFiU2Nyb2xsOiBvblRhYlNjcm9sbCxcbiAgICBleHRyYTogdGFiQmFyRXh0cmFDb250ZW50LFxuICAgIHN0eWxlOiB0YWJCYXJTdHlsZSxcbiAgICBwYW5lczogY2hpbGRyZW5cbiAgfSk7XG5cbiAgaWYgKHJlbmRlclRhYkJhcikge1xuICAgIHRhYk5hdkJhciA9IHJlbmRlclRhYkJhcih0YWJOYXZCYXJQcm9wcywgVGFiTmF2TGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgdGFiTmF2QmFyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiTmF2TGlzdCwgT2JqZWN0LmFzc2lnbih7fSwgdGFiTmF2QmFyUHJvcHMpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUYWJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHRhYnM6IHRhYnMsXG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWYsXG4gICAgaWQ6IGlkLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwcmVmaXhDbHMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWRUYWJQb3NpdGlvbiksIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbW9iaWxlXCIpLCBtb2JpbGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZWRpdGFibGVcIiksIGVkaXRhYmxlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpXG4gIH0sIHJlc3RQcm9wcyksIHRhYk5hdkJhciwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiUGFuZWxMaXN0LCBPYmplY3QuYXNzaWduKHtcbiAgICBkZXN0cm95SW5hY3RpdmVUYWJQYW5lOiBkZXN0cm95SW5hY3RpdmVUYWJQYW5lXG4gIH0sIHNoYXJlZFByb3BzLCB7XG4gICAgYW5pbWF0ZWQ6IG1lcmdlZEFuaW1hdGVkXG4gIH0pKSkpO1xufVxuXG52YXIgRm9yd2FyZFRhYnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihUYWJzKTtcbkZvcndhcmRUYWJzLlRhYlBhbmUgPSBUYWJQYW5lO1xuZXhwb3J0IGRlZmF1bHQgRm9yd2FyZFRhYnM7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG52YXIgREVGQVVMVF9TSVpFID0ge1xuICB3aWR0aDogMCxcbiAgaGVpZ2h0OiAwLFxuICBsZWZ0OiAwLFxuICB0b3A6IDBcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPZmZzZXRzKHRhYnMsIHRhYlNpemVzLCBob2xkZXJTY3JvbGxXaWR0aCkge1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90YWJzJDtcblxuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGxhc3RPZmZzZXQgPSB0YWJTaXplcy5nZXQoKF90YWJzJCA9IHRhYnNbMF0pID09PSBudWxsIHx8IF90YWJzJCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RhYnMkLmtleSkgfHwgREVGQVVMVF9TSVpFO1xuICAgIHZhciByaWdodE9mZnNldCA9IGxhc3RPZmZzZXQubGVmdCArIGxhc3RPZmZzZXQud2lkdGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBrZXkgPSB0YWJzW2ldLmtleTtcbiAgICAgIHZhciBkYXRhID0gdGFiU2l6ZXMuZ2V0KGtleSk7IC8vIFJldXNlIGxhc3Qgb25lIHdoZW4gbm90IGV4aXN0IHlldFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgdmFyIF90YWJzO1xuXG4gICAgICAgIGRhdGEgPSB0YWJTaXplcy5nZXQoKF90YWJzID0gdGFic1tpIC0gMV0pID09PSBudWxsIHx8IF90YWJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGFicy5rZXkpIHx8IERFRkFVTFRfU0laRTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVudGl0eSA9IG1hcC5nZXQoa2V5KSB8fCBfb2JqZWN0U3ByZWFkKHt9LCBkYXRhKTsgLy8gUmlnaHRcblxuXG4gICAgICBlbnRpdHkucmlnaHQgPSByaWdodE9mZnNldCAtIGVudGl0eS5sZWZ0IC0gZW50aXR5LndpZHRoOyAvLyBVcGRhdGUgZW50aXR5XG5cbiAgICAgIG1hcC5zZXQoa2V5LCBlbnRpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXA7XG4gIH0sIFt0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXk7XG4gIH0pLmpvaW4oJ18nKSwgdGFiU2l6ZXMsIGhvbGRlclNjcm9sbFdpZHRoXSk7XG59IiwiaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmFmIGZyb20gJ3JhZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VSYWYoY2FsbGJhY2spIHtcbiAgdmFyIHJhZlJlZiA9IHVzZVJlZigpO1xuICB2YXIgcmVtb3ZlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJhZi5jYW5jZWwocmFmUmVmLmN1cnJlbnQpO1xuICAgICAgcmFmUmVmLmN1cnJlbnQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjay5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJhZi5jYW5jZWwocmFmUmVmLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHRyaWdnZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlUmFmU3RhdGUoZGVmYXVsdFN0YXRlKSB7XG4gIHZhciBiYXRjaFJlZiA9IHVzZVJlZihbXSk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHt9KSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDIpLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBzdGF0ZSA9IHVzZVJlZih0eXBlb2YgZGVmYXVsdFN0YXRlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFN0YXRlKCkgOiBkZWZhdWx0U3RhdGUpO1xuICB2YXIgZmx1c2hVcGRhdGUgPSB1c2VSYWYoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50ID0gc3RhdGUuY3VycmVudDtcbiAgICBiYXRjaFJlZi5jdXJyZW50LmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBjdXJyZW50ID0gY2FsbGJhY2soY3VycmVudCk7XG4gICAgfSk7XG4gICAgYmF0Y2hSZWYuY3VycmVudCA9IFtdO1xuICAgIHN0YXRlLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgIGZvcmNlVXBkYXRlKHt9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlcihjYWxsYmFjaykge1xuICAgIGJhdGNoUmVmLmN1cnJlbnQucHVzaChjYWxsYmFjayk7XG4gICAgZmx1c2hVcGRhdGUoKTtcbiAgfVxuXG4gIHJldHVybiBbc3RhdGUuY3VycmVudCwgdXBkYXRlcl07XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUmVmcygpIHtcbiAgdmFyIGNhY2hlUmVmcyA9IHVzZVJlZihuZXcgTWFwKCkpO1xuXG4gIGZ1bmN0aW9uIGdldFJlZihrZXkpIHtcbiAgICBpZiAoIWNhY2hlUmVmcy5jdXJyZW50LmhhcyhrZXkpKSB7XG4gICAgICBjYWNoZVJlZnMuY3VycmVudC5zZXQoa2V5LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlUmVmKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVJlZnMuY3VycmVudC5nZXQoa2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVJlZihrZXkpIHtcbiAgICBjYWNoZVJlZnMuY3VycmVudC5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBbZ2V0UmVmLCByZW1vdmVSZWZdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3luY1N0YXRlKGRlZmF1bHRTdGF0ZSwgb25DaGFuZ2UpIHtcbiAgdmFyIHN0YXRlUmVmID0gUmVhY3QudXNlUmVmKGRlZmF1bHRTdGF0ZSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHt9KSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgZm9yY2VVcGRhdGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHVwZGF0ZXIpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSB0eXBlb2YgdXBkYXRlciA9PT0gJ2Z1bmN0aW9uJyA/IHVwZGF0ZXIoc3RhdGVSZWYuY3VycmVudCkgOiB1cGRhdGVyO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSBzdGF0ZVJlZi5jdXJyZW50KSB7XG4gICAgICBvbkNoYW5nZShuZXdWYWx1ZSwgc3RhdGVSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgc3RhdGVSZWYuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgIGZvcmNlVXBkYXRlKHt9KTtcbiAgfVxuXG4gIHJldHVybiBbc3RhdGVSZWYuY3VycmVudCwgc2V0U3RhdGVdO1xufSIsImltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbnZhciBNSU5fU1dJUEVfRElTVEFOQ0UgPSAwLjE7XG52YXIgU1RPUF9TV0lQRV9ESVNUQU5DRSA9IDAuMDE7XG52YXIgUkVGUkVTSF9JTlRFUlZBTCA9IDIwO1xudmFyIFNQRUVEX09GRl9NVUxUSVBMRSA9IE1hdGgucG93KDAuOTk1LCBSRUZSRVNIX0lOVEVSVkFMKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEhvb2sgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRvdWNoTW92ZShyZWYsIG9uT2Zmc2V0KSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZSgpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICB0b3VjaFBvc2l0aW9uID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFRvdWNoUG9zaXRpb24gPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlMywgMiksXG4gICAgICBsYXN0VGltZXN0YW1wID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldExhc3RUaW1lc3RhbXAgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoMCksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBsYXN0VGltZURpZmYgPSBfdXNlU3RhdGU2WzBdLFxuICAgICAgc2V0TGFzdFRpbWVEaWZmID0gX3VzZVN0YXRlNlsxXTtcblxuICB2YXIgX3VzZVN0YXRlNyA9IHVzZVN0YXRlKCksXG4gICAgICBfdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNywgMiksXG4gICAgICBsYXN0T2Zmc2V0ID0gX3VzZVN0YXRlOFswXSxcbiAgICAgIHNldExhc3RPZmZzZXQgPSBfdXNlU3RhdGU4WzFdO1xuXG4gIHZhciBtb3Rpb25SZWYgPSB1c2VSZWYoKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBFdmVudHMgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA+Pj4gVG91Y2ggZXZlbnRzXG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICB2YXIgX2UkdG91Y2hlcyQgPSBlLnRvdWNoZXNbMF0sXG4gICAgICAgIHNjcmVlblggPSBfZSR0b3VjaGVzJC5zY3JlZW5YLFxuICAgICAgICBzY3JlZW5ZID0gX2UkdG91Y2hlcyQuc2NyZWVuWTtcbiAgICBzZXRUb3VjaFBvc2l0aW9uKHtcbiAgICAgIHg6IHNjcmVlblgsXG4gICAgICB5OiBzY3JlZW5ZXG4gICAgfSk7XG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW90aW9uUmVmLmN1cnJlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgIGlmICghdG91Y2hQb3NpdGlvbikgcmV0dXJuO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgX2UkdG91Y2hlcyQyID0gZS50b3VjaGVzWzBdLFxuICAgICAgICBzY3JlZW5YID0gX2UkdG91Y2hlcyQyLnNjcmVlblgsXG4gICAgICAgIHNjcmVlblkgPSBfZSR0b3VjaGVzJDIuc2NyZWVuWTtcbiAgICBzZXRUb3VjaFBvc2l0aW9uKHtcbiAgICAgIHg6IHNjcmVlblgsXG4gICAgICB5OiBzY3JlZW5ZXG4gICAgfSk7XG4gICAgdmFyIG9mZnNldFggPSBzY3JlZW5YIC0gdG91Y2hQb3NpdGlvbi54O1xuICAgIHZhciBvZmZzZXRZID0gc2NyZWVuWSAtIHRvdWNoUG9zaXRpb24ueTtcbiAgICBvbk9mZnNldChvZmZzZXRYLCBvZmZzZXRZKTtcbiAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBzZXRMYXN0VGltZXN0YW1wKG5vdyk7XG4gICAgc2V0TGFzdFRpbWVEaWZmKG5vdyAtIGxhc3RUaW1lc3RhbXApO1xuICAgIHNldExhc3RPZmZzZXQoe1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgaWYgKCF0b3VjaFBvc2l0aW9uKSByZXR1cm47XG4gICAgc2V0VG91Y2hQb3NpdGlvbihudWxsKTtcbiAgICBzZXRMYXN0T2Zmc2V0KG51bGwpOyAvLyBTd2lwZSBpZiBuZWVkZWRcblxuICAgIGlmIChsYXN0T2Zmc2V0KSB7XG4gICAgICB2YXIgZGlzdGFuY2VYID0gbGFzdE9mZnNldC54IC8gbGFzdFRpbWVEaWZmO1xuICAgICAgdmFyIGRpc3RhbmNlWSA9IGxhc3RPZmZzZXQueSAvIGxhc3RUaW1lRGlmZjtcbiAgICAgIHZhciBhYnNYID0gTWF0aC5hYnMoZGlzdGFuY2VYKTtcbiAgICAgIHZhciBhYnNZID0gTWF0aC5hYnMoZGlzdGFuY2VZKTsgLy8gU2tpcCBzd2lwZSBpZiBsb3cgZGlzdGFuY2VcblxuICAgICAgaWYgKE1hdGgubWF4KGFic1gsIGFic1kpIDwgTUlOX1NXSVBFX0RJU1RBTkNFKSByZXR1cm47XG4gICAgICB2YXIgY3VycmVudFggPSBkaXN0YW5jZVg7XG4gICAgICB2YXIgY3VycmVudFkgPSBkaXN0YW5jZVk7XG4gICAgICBtb3Rpb25SZWYuY3VycmVudCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50WCkgPCBTVE9QX1NXSVBFX0RJU1RBTkNFICYmIE1hdGguYWJzKGN1cnJlbnRZKSA8IFNUT1BfU1dJUEVfRElTVEFOQ0UpIHtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChtb3Rpb25SZWYuY3VycmVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFggKj0gU1BFRURfT0ZGX01VTFRJUExFO1xuICAgICAgICBjdXJyZW50WSAqPSBTUEVFRF9PRkZfTVVMVElQTEU7XG4gICAgICAgIG9uT2Zmc2V0KGN1cnJlbnRYICogUkVGUkVTSF9JTlRFUlZBTCwgY3VycmVudFkgKiBSRUZSRVNIX0lOVEVSVkFMKTtcbiAgICAgIH0sIFJFRlJFU0hfSU5URVJWQUwpO1xuICAgIH1cbiAgfSAvLyA+Pj4gV2hlZWwgZXZlbnRcblxuXG4gIHZhciBsYXN0V2hlZWxUaW1lc3RhbXBSZWYgPSB1c2VSZWYoMCk7XG4gIHZhciBsYXN0V2hlZWxQcmV2ZW50UmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGxhc3RXaGVlbERpcmVjdGlvblJlZiA9IHVzZVJlZigpO1xuXG4gIGZ1bmN0aW9uIG9uV2hlZWwoZSkge1xuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWCxcbiAgICAgICAgZGVsdGFZID0gZS5kZWx0YVk7IC8vIENvbnZlcnQgYm90aCB0byB4ICYgeSBzaW5jZSB3aGVlbCBvbmx5IGhhcHBlbmVkIG9uIFBDXG5cbiAgICB2YXIgbWl4ZWQgPSAwO1xuICAgIHZhciBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgICB2YXIgYWJzWSA9IE1hdGguYWJzKGRlbHRhWSk7XG5cbiAgICBpZiAoYWJzWCA9PT0gYWJzWSkge1xuICAgICAgbWl4ZWQgPSBsYXN0V2hlZWxEaXJlY3Rpb25SZWYuY3VycmVudCA9PT0gJ3gnID8gZGVsdGFYIDogZGVsdGFZO1xuICAgIH0gZWxzZSBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIG1peGVkID0gZGVsdGFYO1xuICAgICAgbGFzdFdoZWVsRGlyZWN0aW9uUmVmLmN1cnJlbnQgPSAneCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0gZGVsdGFZO1xuICAgICAgbGFzdFdoZWVsRGlyZWN0aW9uUmVmLmN1cnJlbnQgPSAneSc7XG4gICAgfSAvLyBPcHRpbWl6ZSBtYWMgdG91Y2ggc2Nyb2xsXG5cblxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKG5vdyAtIGxhc3RXaGVlbFRpbWVzdGFtcFJlZi5jdXJyZW50ID4gMTAwKSB7XG4gICAgICBsYXN0V2hlZWxQcmV2ZW50UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAob25PZmZzZXQoLW1peGVkLCAtbWl4ZWQpIHx8IGxhc3RXaGVlbFByZXZlbnRSZWYuY3VycmVudCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGFzdFdoZWVsUHJldmVudFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsYXN0V2hlZWxUaW1lc3RhbXBSZWYuY3VycmVudCA9IG5vdztcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09IEVmZmVjdCA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgdG91Y2hFdmVudHNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHRvdWNoRXZlbnRzUmVmLmN1cnJlbnQgPSB7XG4gICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgb25Ub3VjaE1vdmU6IG9uVG91Y2hNb3ZlLFxuICAgIG9uVG91Y2hFbmQ6IG9uVG91Y2hFbmQsXG4gICAgb25XaGVlbDogb25XaGVlbFxuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG9uUHJveHlUb3VjaFN0YXJ0KGUpIHtcbiAgICAgIHRvdWNoRXZlbnRzUmVmLmN1cnJlbnQub25Ub3VjaFN0YXJ0KGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJveHlUb3VjaE1vdmUoZSkge1xuICAgICAgdG91Y2hFdmVudHNSZWYuY3VycmVudC5vblRvdWNoTW92ZShlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblByb3h5VG91Y2hFbmQoZSkge1xuICAgICAgdG91Y2hFdmVudHNSZWYuY3VycmVudC5vblRvdWNoRW5kKGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUHJveHlXaGVlbChlKSB7XG4gICAgICB0b3VjaEV2ZW50c1JlZi5jdXJyZW50Lm9uV2hlZWwoZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Qcm94eVRvdWNoTW92ZSwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uUHJveHlUb3VjaEVuZCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTsgLy8gTm8gbmVlZCB0byBjbGVhbiB1cCBzaW5jZSBlbGVtZW50IHJlbW92ZWRcblxuICAgIHJlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblByb3h5VG91Y2hTdGFydCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgICByZWYuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uUHJveHlXaGVlbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uUHJveHlUb3VjaE1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblByb3h5VG91Y2hFbmQpO1xuICAgIH07XG4gIH0sIFtdKTtcbn0iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xudmFyIERFRkFVTFRfU0laRSA9IHtcbiAgd2lkdGg6IDAsXG4gIGhlaWdodDogMCxcbiAgbGVmdDogMCxcbiAgdG9wOiAwLFxuICByaWdodDogMFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVZpc2libGVSYW5nZSh0YWJPZmZzZXRzLCBjb250YWluZXJTaXplLCB0YWJDb250ZW50Tm9kZVNpemUsIGFkZE5vZGVTaXplLCBfcmVmKSB7XG4gIHZhciB0YWJzID0gX3JlZi50YWJzLFxuICAgICAgdGFiUG9zaXRpb24gPSBfcmVmLnRhYlBvc2l0aW9uLFxuICAgICAgcnRsID0gX3JlZi5ydGw7XG4gIHZhciB1bml0O1xuICB2YXIgcG9zaXRpb247XG4gIHZhciB0cmFuc2Zvcm1TaXplO1xuXG4gIGlmIChbJ3RvcCcsICdib3R0b20nXS5pbmNsdWRlcyh0YWJQb3NpdGlvbikpIHtcbiAgICB1bml0ID0gJ3dpZHRoJztcbiAgICBwb3NpdGlvbiA9IHJ0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgdHJhbnNmb3JtU2l6ZSA9IE1hdGguYWJzKGNvbnRhaW5lclNpemUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdW5pdCA9ICdoZWlnaHQnO1xuICAgIHBvc2l0aW9uID0gJ3RvcCc7XG4gICAgdHJhbnNmb3JtU2l6ZSA9IC1jb250YWluZXJTaXplLnRvcDtcbiAgfVxuXG4gIHZhciBiYXNpY1NpemUgPSBjb250YWluZXJTaXplW3VuaXRdO1xuICB2YXIgdGFiQ29udGVudFNpemUgPSB0YWJDb250ZW50Tm9kZVNpemVbdW5pdF07XG4gIHZhciBhZGRTaXplID0gYWRkTm9kZVNpemVbdW5pdF07XG4gIHZhciBtZXJnZWRCYXNpY1NpemUgPSBiYXNpY1NpemU7XG5cbiAgaWYgKHRhYkNvbnRlbnRTaXplICsgYWRkU2l6ZSA+IGJhc2ljU2l6ZSkge1xuICAgIG1lcmdlZEJhc2ljU2l6ZSA9IGJhc2ljU2l6ZSAtIGFkZFNpemU7XG4gIH1cblxuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0YWJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG5cbiAgICB2YXIgbGVuID0gdGFicy5sZW5ndGg7XG4gICAgdmFyIGVuZEluZGV4ID0gbGVuO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdmFyIG9mZnNldCA9IHRhYk9mZnNldHMuZ2V0KHRhYnNbaV0ua2V5KSB8fCBERUZBVUxUX1NJWkU7XG5cbiAgICAgIGlmIChvZmZzZXRbcG9zaXRpb25dICsgb2Zmc2V0W3VuaXRdID4gdHJhbnNmb3JtU2l6ZSArIG1lcmdlZEJhc2ljU2l6ZSkge1xuICAgICAgICBlbmRJbmRleCA9IGkgLSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaSA9IGxlbiAtIDE7IF9pID49IDA7IF9pIC09IDEpIHtcbiAgICAgIHZhciBfb2Zmc2V0ID0gdGFiT2Zmc2V0cy5nZXQodGFic1tfaV0ua2V5KSB8fCBERUZBVUxUX1NJWkU7XG5cbiAgICAgIGlmIChfb2Zmc2V0W3Bvc2l0aW9uXSA8IHRyYW5zZm9ybVNpemUpIHtcbiAgICAgICAgc3RhcnRJbmRleCA9IF9pICsgMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtzdGFydEluZGV4LCBlbmRJbmRleF07XG4gIH0sIFt0YWJPZmZzZXRzLCB0cmFuc2Zvcm1TaXplLCBtZXJnZWRCYXNpY1NpemUsIHRhYlBvc2l0aW9uLCB0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7XG4gICAgcmV0dXJuIHRhYi5rZXk7XG4gIH0pLmpvaW4oJ18nKSwgcnRsXSk7XG59IiwiaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJztcbmltcG9ydCBUYWJQYW5lIGZyb20gJy4vVGFiUGFuZWxMaXN0L1RhYlBhbmUnO1xuZXhwb3J0IHsgVGFiUGFuZSB9O1xuZXhwb3J0IGRlZmF1bHQgVGFiczsiXSwic291cmNlUm9vdCI6IiJ9