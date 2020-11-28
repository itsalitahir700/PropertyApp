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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/alert */ "./node_modules/antd/lib/alert/index.js");
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../settings/service */ "./settings/service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);








var _this = undefined,
    _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\AddListing\\AddFeature.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var AddFeature = function AddFeature(_ref) {
  _s();

  var postsno = _ref.postsno,
      postdate = _ref.postdate;
  console.log(postsno, postdate, "propspassed"); //Main Features

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      builtyear = _useState[0],
      setbuiltyear = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      view = _useState2[0],
      setview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      parkingspace = _useState3[0],
      setparkingspace = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      doublegazedwindows = _useState4[0],
      setdoublegazedwindows = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      centralair = _useState5[0],
      setcentralair = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      centralheat = _useState6[0],
      setcentralheat = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      flooring = _useState7[0],
      setflooring = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      electricitybackup = _useState8[0],
      setelectricitybackup = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      waste = _useState9[0],
      setwaste = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      floors = _useState10[0],
      setfloors = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      othermainfeatures = _useState11[0],
      setothermainfeatures = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      furnished = _useState12[0],
      setfurnished = _useState12[1]; //Business


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      broadband = _useState13[0],
      setbroadband = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      cable = _useState14[0],
      setcable = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      intercom = _useState15[0],
      setintercom = _useState15[1];

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      otherbusiness = _useState16[0],
      setotherbusiness = _useState16[1]; //Nearby Locations


  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      schools = _useState17[0],
      setschools = _useState17[1];

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      hospitals = _useState18[0],
      sethospitals = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      shoppingmalls = _useState19[0],
      setshoppingmalls = _useState19[1];

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      resturants = _useState20[0],
      setresturants = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      airportdistance = _useState21[0],
      setairportdistance = _useState21[1];

  var _useState22 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      publictransport = _useState22[0],
      setpublictransport = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      othernearbyplaces = _useState23[0],
      setothernearbyplaces = _useState23[1]; //Rooms


  var _useState24 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      bedrooms = _useState24[0],
      setbedrooms = _useState24[1];

  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      bathrooms = _useState25[0],
      setbathrooms = _useState25[1];

  var _useState26 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      servantquarter = _useState26[0],
      setservantquarter = _useState26[1];

  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      drawingroom = _useState27[0],
      setdrawingroom = _useState27[1];

  var _useState28 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      dinningroom = _useState28[0],
      setdinningroom = _useState28[1];

  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      kitchen = _useState29[0],
      setkitchen = _useState29[1];

  var _useState30 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      studyroom = _useState30[0],
      setstudyroom = _useState30[1];

  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      powderroom = _useState31[0],
      setpowderroom = _useState31[1];

  var _useState32 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      gymroom = _useState32[0],
      setgymroom = _useState32[1];

  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      prayerroom = _useState33[0],
      setprayerroom = _useState33[1];

  var _useState34 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      storerooms = _useState34[0],
      setstorerooms = _useState34[1];

  var _useState35 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      steamroon = _useState35[0],
      setsteamroon = _useState35[1];

  var _useState36 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      sittingroom = _useState36[0],
      setsittingroom = _useState36[1];

  var _useState37 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      laundryroom = _useState37[0],
      setlaundryroom = _useState37[1];

  var _useState38 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      otherroom = _useState38[0],
      setotherroom = _useState38[1]; //Healthcare


  var _useState39 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      lawn = _useState39[0],
      setlawn = _useState39[1];

  var _useState40 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      swimmingpool = _useState40[0],
      setswimmingpool = _useState40[1];

  var _useState41 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      suana = _useState41[0],
      setsuana = _useState41[1];

  var _useState42 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      jacuzzi = _useState42[0],
      setjacuzzi = _useState42[1];

  var _useState43 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      otherhealth = _useState43[0],
      setotherhealth = _useState43[1]; //Other Facilities


  var _useState44 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      maintenance = _useState44[0],
      setmaintenance = _useState44[1];

  var _useState45 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      security = _useState45[0],
      setsecurity = _useState45[1];

  var _useState46 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      facilities = _useState46[0],
      setfacilities = _useState46[1];

  var _useState47 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      otherfacilities = _useState47[0],
      setotherfacilities = _useState47[1];

  var submitHandler = function submitHandler(e) {
    var data = "{\n        \"pfPostDate\": \"".concat(postdate, "\",\n        \"pfPostSno\": \"").concat(postsno, "\",\n        \"pfBuildinYear\": \"").concat(builtyear, "\",\n        \"pfBedrooms\": \"").concat(bedrooms, "\",\n        \"pfBathrooms\": \"").concat(bathrooms, "\",\n        \"pfElectriccityBackup\": \"").concat(electricitybackup, "\",\n        \"pfWasteDisposal\": \"").concat(waste, "\",\n        \"pfFloors\": \"").concat(floors, "\",\n        \"pfView\": \"").concat(view, "\",\n        \"pfFlooring\": \"").concat(flooring, "\",\n        \"pfParkingSpaces\": ").concat(parkingspace, ",\n        \"pfCentralAirconditioning\": \"").concat(centralair, "\",\n        \"pfCentralHeating\": \"").concat(centralheat, "\",\n        \"pfIsfurnished\": \"").concat(furnished, "\",\n        \"pfCabletv\": \"").concat(cable, "\",\n        \"pfIntercom\": \"").concat(intercom, "\",\n        \"pfBroadbandInternet\": \"").concat(broadband, "\",\n        \"pfNearbySchool\": \"").concat(schools, "\",\n        \"pfNearbyShoppingMall\": \"").concat(shoppingmalls, "\",\n        \"pfNearbyRestaurants\": \"").concat(resturants, "\",\n        \"pfDistanceAirport\": ").concat(airportdistance, ",\n        \"pfNearbyTransServ\": \"").concat(publictransport, "\",\n        \"pfServantQuarters\": ").concat(servantquarter, ",\n        \"pfDrawingRoom\": \"").concat(drawingroom, "\",\n        \"pfDiningRoom\": \"").concat(dinningroom, "\",\n        \"pfKitchens\": ").concat(kitchen, ",\n        \"pfStudyRoom\": \"").concat(studyroom, "\",\n        \"pfPrayerRoom\": \"").concat(prayerroom, "\",\n        \"pfPowderRoom\": \"").concat(powderroom, "\",\n        \"pfGym\": \"").concat(gymroom, "\",\n        \"pfStoreRooms\": \"").concat(storerooms, "\",\n        \"pfLoungeSetting\": \"").concat(sittingroom, "\",\n        \"pfLawnGarden\": \"").concat(laundryroom, "\",\n        \"pfSwimmingPool\": \"").concat(swimmingpool, "\",\n        \"pfSauna\": \"").concat(suana, "\",\n        \"pfJacuazzi\": \"").concat(jacuzzi, "\",\n        \"pfOtherFacility\": \"").concat(otherfacilities, "\",\n        \"pfMaintenanceStaff\": \"").concat(maintenance, "\",\n        \"pfSecurityStaff\": \"").concat(security, "\",\n        \"pfFacilityDisabled\": \"").concat(facilities, "\"\n      }");
    console.log("data", data);
    Object(_settings_service__WEBPACK_IMPORTED_MODULE_9__["postAddFeatures"])(data);
  };

  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      paddingLeft: "10rem",
      paddingRight: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a, {
    labelCol: {
      span: 6
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
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx(antd_lib_alert__WEBPACK_IMPORTED_MODULE_6___default.a, {
    message: "PROPERTY FEATURES",
    type: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "Main Features"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Built in year",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: builtyear,
    onChange: function onChange(e) {
      return setbuiltyear(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "View",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: view,
    onChange: function onChange(e) {
      return setview(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Parking Spaces",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: parkingspace,
    onChange: function onChange(e) {
      return setparkingspace(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setdoublegazedwindows("Y") : setdoublegazedwindows("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "Double Glazed Windows")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setcentralair("Y") : setcentralair("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, "Central Air Conditioning")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setcentralheat("Y") : setcentralheat("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "Central Heating")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Flooring",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: flooring,
    onChange: function onChange(e) {
      return setflooring(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Tiles",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, "Tiles"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Marble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, "Marble"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Wooden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, "Wooden"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Chip",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, "Chip"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Cement",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, "Cement"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Other",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, "Other"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Electricity Backup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    value: electricitybackup,
    onChange: function onChange(e) {
      return setelectricitybackup(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "None",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, "None"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Generator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  }, "Generator"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "UPS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, "UPS"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Solar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, "Solar"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option, {
    value: "Other",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, "Other"))), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setwaste("Y") : setwaste("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, "Waste Disposal")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Floors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: floors,
    onChange: function onChange(e) {
      return setfloors(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Main Features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: othermainfeatures,
    onChange: function onChange(e) {
      return setothermainfeatures(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setfurnished("Y") : setfurnished("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, "Furnished")), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }
  }, "Bussiness and Communications"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setbroadband("Y") : setbroadband("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, "Broadband Internet Access")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setcable("Y") : setcable("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, "Satellite or Cable TV Ready")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setintercom("Y") : setintercom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, "Intercom")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Business and Communication Facilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: otherbusiness,
    onChange: function onChange(e) {
      return setotherbusiness(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 11
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, "Nearby Locations and Other Facilities"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Nearby Schools",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: schools,
    onChange: function onChange(e) {
      return setschools(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Nearby Hospitals",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: hospitals,
    onChange: function onChange(e) {
      return sethospitals(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Nearby Shopping Malls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: shoppingmalls,
    onChange: function onChange(e) {
      return setshoppingmalls(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Nearby Restaurants",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: resturants,
    onChange: function onChange(e) {
      return setresturants(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Distance From Airport (kms)",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: airportdistance,
    onChange: function onChange(e) {
      return setairportdistance(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Nearby Public Transport Service",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: publictransport,
    onChange: function onChange(e) {
      return setpublictransport(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Nearby Places",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: othernearbyplaces,
    onChange: function onChange(e) {
      return setothernearbyplaces(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 11
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 9
    }
  }, "Rooms"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Bedrooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: bedrooms,
    onChange: function onChange(e) {
      return setbedrooms(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Bathrooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: bathrooms,
    onChange: function onChange(e) {
      return setbathrooms(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Servant Quarters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: servantquarter,
    onChange: function onChange(e) {
      return setservantquarter(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setdrawingroom("Y") : setdrawingroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }, "Drawing Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setdinningroom("Y") : setdinningroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 11
    }
  }, "Dinning Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Kitchens",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: kitchen,
    onChange: function onChange(e) {
      return setkitchen(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setstudyroom("Y") : setstudyroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, "Study Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setpowderroom("Y") : setpowderroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 11
    }
  }, "Powder Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setgymroom("Y") : setgymroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 11
    }
  }, "Gym Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setprayerroom("Y") : setprayerroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 11
    }
  }, "Prayer Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Store Rooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: storerooms,
    onChange: function onChange(e) {
      return setstorerooms(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 11
    }
  })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setsittingroom("Y") : setsittingroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 11
    }
  }, "Lounge or Sitting Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setlaundryroom("Y") : setlaundryroom("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 11
    }
  }, "Laundry Room")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Rooms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: otherroom,
    onChange: function onChange(e) {
      return setotherroom(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 11
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 9
    }
  }, "Health Care"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setlawn("Y") : setlawn("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 11
    }
  }, "Lawn or Garden")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setswimmingpool("Y") : setswimmingpool("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 11
    }
  }, "Swimming Pool")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setsuana("Y") : setsuana("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 11
    }
  }, "Suana")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setjacuzzi("Y") : setjacuzzi("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 11
    }
  }, "Jacuzzi")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Healthcare and Recreation Facilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: otherbusiness,
    onChange: function onChange(e) {
      return setotherhealth(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 11
    }
  })), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 9
    }
  }), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 9
    }
  }, "Other Facilities"), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setmaintenance("Y") : setmaintenance("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 11
    }
  }, "Maintenance Staff")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setsecurity("Y") : setsecurity("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 11
    }
  }, "Security Staff")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 9
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onChange: function onChange(e) {
      return e.target.checked === true ? setfacilities("Y") : setjacuzzi("N");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 11
    }
  }, "Facilities for Disabled")), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    label: "Other Facilities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 9
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: otherfacilities,
    onChange: function onChange(e) {
      return setotherfacilities(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 11
    }
  })), __jsx("center", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 9
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    size: "large",
    onClick: submitHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 11
    }
  }, "Add Features"))));
};

_s(AddFeature, "NiZDG8SP8HJMTFExZ7kqLICIxgw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL0FkZExpc3RpbmcvQWRkRmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJBZGRGZWF0dXJlIiwicG9zdHNubyIsInBvc3RkYXRlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiYnVpbHR5ZWFyIiwic2V0YnVpbHR5ZWFyIiwidmlldyIsInNldHZpZXciLCJwYXJraW5nc3BhY2UiLCJzZXRwYXJraW5nc3BhY2UiLCJkb3VibGVnYXplZHdpbmRvd3MiLCJzZXRkb3VibGVnYXplZHdpbmRvd3MiLCJjZW50cmFsYWlyIiwic2V0Y2VudHJhbGFpciIsImNlbnRyYWxoZWF0Iiwic2V0Y2VudHJhbGhlYXQiLCJmbG9vcmluZyIsInNldGZsb29yaW5nIiwiZWxlY3RyaWNpdHliYWNrdXAiLCJzZXRlbGVjdHJpY2l0eWJhY2t1cCIsIndhc3RlIiwic2V0d2FzdGUiLCJmbG9vcnMiLCJzZXRmbG9vcnMiLCJvdGhlcm1haW5mZWF0dXJlcyIsInNldG90aGVybWFpbmZlYXR1cmVzIiwiZnVybmlzaGVkIiwic2V0ZnVybmlzaGVkIiwiYnJvYWRiYW5kIiwic2V0YnJvYWRiYW5kIiwiY2FibGUiLCJzZXRjYWJsZSIsImludGVyY29tIiwic2V0aW50ZXJjb20iLCJvdGhlcmJ1c2luZXNzIiwic2V0b3RoZXJidXNpbmVzcyIsInNjaG9vbHMiLCJzZXRzY2hvb2xzIiwiaG9zcGl0YWxzIiwic2V0aG9zcGl0YWxzIiwic2hvcHBpbmdtYWxscyIsInNldHNob3BwaW5nbWFsbHMiLCJyZXN0dXJhbnRzIiwic2V0cmVzdHVyYW50cyIsImFpcnBvcnRkaXN0YW5jZSIsInNldGFpcnBvcnRkaXN0YW5jZSIsInB1YmxpY3RyYW5zcG9ydCIsInNldHB1YmxpY3RyYW5zcG9ydCIsIm90aGVybmVhcmJ5cGxhY2VzIiwic2V0b3RoZXJuZWFyYnlwbGFjZXMiLCJiZWRyb29tcyIsInNldGJlZHJvb21zIiwiYmF0aHJvb21zIiwic2V0YmF0aHJvb21zIiwic2VydmFudHF1YXJ0ZXIiLCJzZXRzZXJ2YW50cXVhcnRlciIsImRyYXdpbmdyb29tIiwic2V0ZHJhd2luZ3Jvb20iLCJkaW5uaW5ncm9vbSIsInNldGRpbm5pbmdyb29tIiwia2l0Y2hlbiIsInNldGtpdGNoZW4iLCJzdHVkeXJvb20iLCJzZXRzdHVkeXJvb20iLCJwb3dkZXJyb29tIiwic2V0cG93ZGVycm9vbSIsImd5bXJvb20iLCJzZXRneW1yb29tIiwicHJheWVycm9vbSIsInNldHByYXllcnJvb20iLCJzdG9yZXJvb21zIiwic2V0c3RvcmVyb29tcyIsInN0ZWFtcm9vbiIsInNldHN0ZWFtcm9vbiIsInNpdHRpbmdyb29tIiwic2V0c2l0dGluZ3Jvb20iLCJsYXVuZHJ5cm9vbSIsInNldGxhdW5kcnlyb29tIiwib3RoZXJyb29tIiwic2V0b3RoZXJyb29tIiwibGF3biIsInNldGxhd24iLCJzd2ltbWluZ3Bvb2wiLCJzZXRzd2ltbWluZ3Bvb2wiLCJzdWFuYSIsInNldHN1YW5hIiwiamFjdXp6aSIsInNldGphY3V6emkiLCJvdGhlcmhlYWx0aCIsInNldG90aGVyaGVhbHRoIiwibWFpbnRlbmFuY2UiLCJzZXRtYWludGVuYW5jZSIsInNlY3VyaXR5Iiwic2V0c2VjdXJpdHkiLCJmYWNpbGl0aWVzIiwic2V0ZmFjaWxpdGllcyIsIm90aGVyZmFjaWxpdGllcyIsInNldG90aGVyZmFjaWxpdGllcyIsInN1Ym1pdEhhbmRsZXIiLCJlIiwiZGF0YSIsInBvc3RBZGRGZWF0dXJlcyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0Iiwic3BhbiIsIm1hcmdpblRvcCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXFCQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FB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QUFJLEVBQUMsT0FBNUI7QUFBb0MsV0FBTyxFQUFFVCxhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBN1lGLENBREYsQ0FERjtBQXVaRCxDQW5nQkQ7O0dBQU1wRyxVOztLQUFBQSxVO0FBcWdCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLWhvdGVsLjA3Y2I1ZTk3NGVhZjMwNWQzOWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgSW5wdXQsXHJcbiAgQnV0dG9uLFxyXG4gIFJhZGlvLFxyXG4gIFNlbGVjdCxcclxuICBDYXNjYWRlcixcclxuICBEYXRlUGlja2VyLFxyXG4gIElucHV0TnVtYmVyLFxyXG4gIFRyZWVTZWxlY3QsXHJcbiAgU3dpdGNoLFxyXG4gIEFsZXJ0LFxyXG4gIFJvdyxcclxuICBDb2wsXHJcbiAgVXBsb2FkLFxyXG4gIEljb24sXHJcbiAgbWVzc2FnZSxcclxuICBDYXJkLFxyXG4gIENoZWNrYm94LFxyXG59IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHBhZGRpbmcgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBwb3N0QWRkRmVhdHVyZXMgfSBmcm9tIFwiLi4vLi4vc2V0dGluZ3Mvc2VydmljZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBZGRGZWF0dXJlID0gKHsgcG9zdHNubywgcG9zdGRhdGUgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHBvc3Rzbm8sIHBvc3RkYXRlLCBcInByb3BzcGFzc2VkXCIpO1xyXG4gIC8vTWFpbiBGZWF0dXJlc1xyXG4gIGNvbnN0IFtidWlsdHllYXIsIHNldGJ1aWx0eWVhcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdmlldywgc2V0dmlld10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFya2luZ3NwYWNlLCBzZXRwYXJraW5nc3BhY2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RvdWJsZWdhemVkd2luZG93cywgc2V0ZG91YmxlZ2F6ZWR3aW5kb3dzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZW50cmFsYWlyLCBzZXRjZW50cmFsYWlyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZW50cmFsaGVhdCwgc2V0Y2VudHJhbGhlYXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Zsb29yaW5nLCBzZXRmbG9vcmluZ10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZWxlY3RyaWNpdHliYWNrdXAsIHNldGVsZWN0cmljaXR5YmFja3VwXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3YXN0ZSwgc2V0d2FzdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Zsb29ycywgc2V0Zmxvb3JzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvdGhlcm1haW5mZWF0dXJlcywgc2V0b3RoZXJtYWluZmVhdHVyZXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1cm5pc2hlZCwgc2V0ZnVybmlzaGVkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAvL0J1c2luZXNzXHJcbiAgY29uc3QgW2Jyb2FkYmFuZCwgc2V0YnJvYWRiYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYWJsZSwgc2V0Y2FibGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ludGVyY29tLCBzZXRpbnRlcmNvbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3RoZXJidXNpbmVzcywgc2V0b3RoZXJidXNpbmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9OZWFyYnkgTG9jYXRpb25zXHJcbiAgY29uc3QgW3NjaG9vbHMsIHNldHNjaG9vbHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2hvc3BpdGFscywgc2V0aG9zcGl0YWxzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG9wcGluZ21hbGxzLCBzZXRzaG9wcGluZ21hbGxzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZXN0dXJhbnRzLCBzZXRyZXN0dXJhbnRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthaXJwb3J0ZGlzdGFuY2UsIHNldGFpcnBvcnRkaXN0YW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHVibGljdHJhbnNwb3J0LCBzZXRwdWJsaWN0cmFuc3BvcnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW290aGVybmVhcmJ5cGxhY2VzLCBzZXRvdGhlcm5lYXJieXBsYWNlc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9Sb29tc1xyXG4gIGNvbnN0IFtiZWRyb29tcywgc2V0YmVkcm9vbXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JhdGhyb29tcywgc2V0YmF0aHJvb21zXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZXJ2YW50cXVhcnRlciwgc2V0c2VydmFudHF1YXJ0ZXJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RyYXdpbmdyb29tLCBzZXRkcmF3aW5ncm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGlubmluZ3Jvb20sIHNldGRpbm5pbmdyb29tXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtraXRjaGVuLCBzZXRraXRjaGVuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdHVkeXJvb20sIHNldHN0dWR5cm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcG93ZGVycm9vbSwgc2V0cG93ZGVycm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZ3ltcm9vbSwgc2V0Z3ltcm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJheWVycm9vbSwgc2V0cHJheWVycm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RvcmVyb29tcywgc2V0c3RvcmVyb29tc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RlYW1yb29uLCBzZXRzdGVhbXJvb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NpdHRpbmdyb29tLCBzZXRzaXR0aW5ncm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGF1bmRyeXJvb20sIHNldGxhdW5kcnlyb29tXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvdGhlcnJvb20sIHNldG90aGVycm9vbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9IZWFsdGhjYXJlXHJcbiAgY29uc3QgW2xhd24sIHNldGxhd25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N3aW1taW5ncG9vbCwgc2V0c3dpbW1pbmdwb29sXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdWFuYSwgc2V0c3VhbmFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2phY3V6emksIHNldGphY3V6emldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW290aGVyaGVhbHRoLCBzZXRvdGhlcmhlYWx0aF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9PdGhlciBGYWNpbGl0aWVzXHJcbiAgY29uc3QgW21haW50ZW5hbmNlLCBzZXRtYWludGVuYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VjdXJpdHksIHNldHNlY3VyaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmYWNpbGl0aWVzLCBzZXRmYWNpbGl0aWVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvdGhlcmZhY2lsaXRpZXMsIHNldG90aGVyZmFjaWxpdGllc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYHtcclxuICAgICAgICBcInBmUG9zdERhdGVcIjogXCIke3Bvc3RkYXRlfVwiLFxyXG4gICAgICAgIFwicGZQb3N0U25vXCI6IFwiJHtwb3N0c25vfVwiLFxyXG4gICAgICAgIFwicGZCdWlsZGluWWVhclwiOiBcIiR7YnVpbHR5ZWFyfVwiLFxyXG4gICAgICAgIFwicGZCZWRyb29tc1wiOiBcIiR7YmVkcm9vbXN9XCIsXHJcbiAgICAgICAgXCJwZkJhdGhyb29tc1wiOiBcIiR7YmF0aHJvb21zfVwiLFxyXG4gICAgICAgIFwicGZFbGVjdHJpY2NpdHlCYWNrdXBcIjogXCIke2VsZWN0cmljaXR5YmFja3VwfVwiLFxyXG4gICAgICAgIFwicGZXYXN0ZURpc3Bvc2FsXCI6IFwiJHt3YXN0ZX1cIixcclxuICAgICAgICBcInBmRmxvb3JzXCI6IFwiJHtmbG9vcnN9XCIsXHJcbiAgICAgICAgXCJwZlZpZXdcIjogXCIke3ZpZXd9XCIsXHJcbiAgICAgICAgXCJwZkZsb29yaW5nXCI6IFwiJHtmbG9vcmluZ31cIixcclxuICAgICAgICBcInBmUGFya2luZ1NwYWNlc1wiOiAke3BhcmtpbmdzcGFjZX0sXHJcbiAgICAgICAgXCJwZkNlbnRyYWxBaXJjb25kaXRpb25pbmdcIjogXCIke2NlbnRyYWxhaXJ9XCIsXHJcbiAgICAgICAgXCJwZkNlbnRyYWxIZWF0aW5nXCI6IFwiJHtjZW50cmFsaGVhdH1cIixcclxuICAgICAgICBcInBmSXNmdXJuaXNoZWRcIjogXCIke2Z1cm5pc2hlZH1cIixcclxuICAgICAgICBcInBmQ2FibGV0dlwiOiBcIiR7Y2FibGV9XCIsXHJcbiAgICAgICAgXCJwZkludGVyY29tXCI6IFwiJHtpbnRlcmNvbX1cIixcclxuICAgICAgICBcInBmQnJvYWRiYW5kSW50ZXJuZXRcIjogXCIke2Jyb2FkYmFuZH1cIixcclxuICAgICAgICBcInBmTmVhcmJ5U2Nob29sXCI6IFwiJHtzY2hvb2xzfVwiLFxyXG4gICAgICAgIFwicGZOZWFyYnlTaG9wcGluZ01hbGxcIjogXCIke3Nob3BwaW5nbWFsbHN9XCIsXHJcbiAgICAgICAgXCJwZk5lYXJieVJlc3RhdXJhbnRzXCI6IFwiJHtyZXN0dXJhbnRzfVwiLFxyXG4gICAgICAgIFwicGZEaXN0YW5jZUFpcnBvcnRcIjogJHthaXJwb3J0ZGlzdGFuY2V9LFxyXG4gICAgICAgIFwicGZOZWFyYnlUcmFuc1NlcnZcIjogXCIke3B1YmxpY3RyYW5zcG9ydH1cIixcclxuICAgICAgICBcInBmU2VydmFudFF1YXJ0ZXJzXCI6ICR7c2VydmFudHF1YXJ0ZXJ9LFxyXG4gICAgICAgIFwicGZEcmF3aW5nUm9vbVwiOiBcIiR7ZHJhd2luZ3Jvb219XCIsXHJcbiAgICAgICAgXCJwZkRpbmluZ1Jvb21cIjogXCIke2Rpbm5pbmdyb29tfVwiLFxyXG4gICAgICAgIFwicGZLaXRjaGVuc1wiOiAke2tpdGNoZW59LFxyXG4gICAgICAgIFwicGZTdHVkeVJvb21cIjogXCIke3N0dWR5cm9vbX1cIixcclxuICAgICAgICBcInBmUHJheWVyUm9vbVwiOiBcIiR7cHJheWVycm9vbX1cIixcclxuICAgICAgICBcInBmUG93ZGVyUm9vbVwiOiBcIiR7cG93ZGVycm9vbX1cIixcclxuICAgICAgICBcInBmR3ltXCI6IFwiJHtneW1yb29tfVwiLFxyXG4gICAgICAgIFwicGZTdG9yZVJvb21zXCI6IFwiJHtzdG9yZXJvb21zfVwiLFxyXG4gICAgICAgIFwicGZMb3VuZ2VTZXR0aW5nXCI6IFwiJHtzaXR0aW5ncm9vbX1cIixcclxuICAgICAgICBcInBmTGF3bkdhcmRlblwiOiBcIiR7bGF1bmRyeXJvb219XCIsXHJcbiAgICAgICAgXCJwZlN3aW1taW5nUG9vbFwiOiBcIiR7c3dpbW1pbmdwb29sfVwiLFxyXG4gICAgICAgIFwicGZTYXVuYVwiOiBcIiR7c3VhbmF9XCIsXHJcbiAgICAgICAgXCJwZkphY3VhenppXCI6IFwiJHtqYWN1enppfVwiLFxyXG4gICAgICAgIFwicGZPdGhlckZhY2lsaXR5XCI6IFwiJHtvdGhlcmZhY2lsaXRpZXN9XCIsXHJcbiAgICAgICAgXCJwZk1haW50ZW5hbmNlU3RhZmZcIjogXCIke21haW50ZW5hbmNlfVwiLFxyXG4gICAgICAgIFwicGZTZWN1cml0eVN0YWZmXCI6IFwiJHtzZWN1cml0eX1cIixcclxuICAgICAgICBcInBmRmFjaWxpdHlEaXNhYmxlZFwiOiBcIiR7ZmFjaWxpdGllc31cIlxyXG4gICAgICB9YDtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcclxuICAgIHBvc3RBZGRGZWF0dXJlcyhkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTByZW1cIiwgcGFkZGluZ1JpZ2h0OiBcIjEwcmVtXCIgfX0+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGFiZWxDb2w9e3tcclxuICAgICAgICAgIHNwYW46IDYsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB3cmFwcGVyQ29sPXt7XHJcbiAgICAgICAgICBzcGFuOiAxNCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBbGVydCBtZXNzYWdlPVwiUFJPUEVSVFkgRkVBVFVSRVNcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcbiAgICAgICAgPGgzPk1haW4gRmVhdHVyZXM8L2gzPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJCdWlsdCBpbiB5ZWFyXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2J1aWx0eWVhcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRidWlsdHllYXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVmlld1wiPlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPXt2aWV3fSBvbkNoYW5nZT17KGUpID0+IHNldHZpZXcoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJQYXJraW5nIFNwYWNlc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXJraW5nc3BhY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0cGFya2luZ3NwYWNlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IHNldGRvdWJsZWdhemVkd2luZG93cyhcIllcIilcclxuICAgICAgICAgICAgICAgIDogc2V0ZG91YmxlZ2F6ZWR3aW5kb3dzKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERvdWJsZSBHbGF6ZWQgV2luZG93c1xyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gc2V0Y2VudHJhbGFpcihcIllcIilcclxuICAgICAgICAgICAgICAgIDogc2V0Y2VudHJhbGFpcihcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDZW50cmFsIEFpciBDb25kaXRpb25pbmdcclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IHNldGNlbnRyYWxoZWF0KFwiWVwiKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRjZW50cmFsaGVhdChcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDZW50cmFsIEhlYXRpbmdcclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJGbG9vcmluZ1wiPlxyXG4gICAgICAgICAgPFNlbGVjdCB2YWx1ZT17Zmxvb3Jpbmd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Zmxvb3JpbmcoZSl9PlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIlRpbGVzXCI+VGlsZXM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiTWFyYmxlXCI+TWFyYmxlPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIldvb2RlblwiPldvb2RlbjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJDaGlwXCI+Q2hpcDwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJDZW1lbnRcIj5DZW1lbnQ8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiT3RoZXJcIj5PdGhlcjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJFbGVjdHJpY2l0eSBCYWNrdXBcIj5cclxuICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2VsZWN0cmljaXR5YmFja3VwfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGVsZWN0cmljaXR5YmFja3VwKGUpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIkdlbmVyYXRvclwiPkdlbmVyYXRvcjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJVUFNcIj5VUFM8L1NlbGVjdC5PcHRpb24+XHJcbiAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIHZhbHVlPVwiU29sYXJcIj5Tb2xhcjwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJPdGhlclwiPk90aGVyPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlID8gc2V0d2FzdGUoXCJZXCIpIDogc2V0d2FzdGUoXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgV2FzdGUgRGlzcG9zYWxcclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkZsb29yc1wiPlxyXG4gICAgICAgICAgPElucHV0IHZhbHVlPXtmbG9vcnN9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Zmxvb3JzKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3RoZXIgTWFpbiBGZWF0dXJlc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtvdGhlcm1haW5mZWF0dXJlc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRvdGhlcm1haW5mZWF0dXJlcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJcIj5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IHNldGZ1cm5pc2hlZChcIllcIikgOiBzZXRmdXJuaXNoZWQoXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRnVybmlzaGVkXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxoMz5CdXNzaW5lc3MgYW5kIENvbW11bmljYXRpb25zPC9oMz5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRicm9hZGJhbmQoXCJZXCIpIDogc2V0YnJvYWRiYW5kKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJyb2FkYmFuZCBJbnRlcm5ldCBBY2Nlc3NcclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlID8gc2V0Y2FibGUoXCJZXCIpIDogc2V0Y2FibGUoXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2F0ZWxsaXRlIG9yIENhYmxlIFRWIFJlYWR5XHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJcIj5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IHNldGludGVyY29tKFwiWVwiKSA6IHNldGludGVyY29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEludGVyY29tXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJPdGhlciBCdXNpbmVzcyBhbmQgQ29tbXVuaWNhdGlvbiBGYWNpbGl0aWVzXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e290aGVyYnVzaW5lc3N9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0b3RoZXJidXNpbmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxoMz5OZWFyYnkgTG9jYXRpb25zIGFuZCBPdGhlciBGYWNpbGl0aWVzPC9oMz5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTmVhcmJ5IFNjaG9vbHNcIj5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17c2Nob29sc30gb25DaGFuZ2U9eyhlKSA9PiBzZXRzY2hvb2xzKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTmVhcmJ5IEhvc3BpdGFsc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtob3NwaXRhbHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0aG9zcGl0YWxzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk5lYXJieSBTaG9wcGluZyBNYWxsc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtzaG9wcGluZ21hbGxzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHNob3BwaW5nbWFsbHMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiTmVhcmJ5IFJlc3RhdXJhbnRzXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3Jlc3R1cmFudHN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0cmVzdHVyYW50cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJEaXN0YW5jZSBGcm9tIEFpcnBvcnQgKGttcylcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17YWlycG9ydGRpc3RhbmNlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGFpcnBvcnRkaXN0YW5jZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJOZWFyYnkgUHVibGljIFRyYW5zcG9ydCBTZXJ2aWNlXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3B1YmxpY3RyYW5zcG9ydH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRwdWJsaWN0cmFuc3BvcnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3RoZXIgTmVhcmJ5IFBsYWNlc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtvdGhlcm5lYXJieXBsYWNlc31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRvdGhlcm5lYXJieXBsYWNlcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxoMz5Sb29tczwvaDM+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJlZHJvb21zXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2JlZHJvb21zfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldGJlZHJvb21zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkJhdGhyb29tc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtiYXRocm9vbXN9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0YmF0aHJvb21zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlNlcnZhbnQgUXVhcnRlcnNcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17c2VydmFudHF1YXJ0ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0c2VydmFudHF1YXJ0ZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gc2V0ZHJhd2luZ3Jvb20oXCJZXCIpXHJcbiAgICAgICAgICAgICAgICA6IHNldGRyYXdpbmdyb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERyYXdpbmcgUm9vbVxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gc2V0ZGlubmluZ3Jvb20oXCJZXCIpXHJcbiAgICAgICAgICAgICAgICA6IHNldGRpbm5pbmdyb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERpbm5pbmcgUm9vbVxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiS2l0Y2hlbnNcIj5cclxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17a2l0Y2hlbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRraXRjaGVuKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRzdHVkeXJvb20oXCJZXCIpIDogc2V0c3R1ZHlyb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0dWR5IFJvb21cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IHNldHBvd2RlcnJvb20oXCJZXCIpXHJcbiAgICAgICAgICAgICAgICA6IHNldHBvd2RlcnJvb20oXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUG93ZGVyIFJvb21cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlID8gc2V0Z3ltcm9vbShcIllcIikgOiBzZXRneW1yb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEd5bSBSb29tXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJcIj5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgPyBzZXRwcmF5ZXJyb29tKFwiWVwiKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRwcmF5ZXJyb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFByYXllciBSb29tXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJTdG9yZSBSb29tc1wiPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtzdG9yZXJvb21zfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldHN0b3Jlcm9vbXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICB7LyogPEZvcm0uSXRlbSBsYWJlbD0nJz5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IHNldHN0ZWFtcm9vbSgnWScpIDogc2V0c3RlYW1yb29tKCdOJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGVhbSBSb29tXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPiAqL31cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gc2V0c2l0dGluZ3Jvb20oXCJZXCIpXHJcbiAgICAgICAgICAgICAgICA6IHNldHNpdHRpbmdyb29tKFwiTlwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIExvdW5nZSBvciBTaXR0aW5nIFJvb21cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IHNldGxhdW5kcnlyb29tKFwiWVwiKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRsYXVuZHJ5cm9vbShcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMYXVuZHJ5IFJvb21cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk90aGVyIFJvb21zXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e290aGVycm9vbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRvdGhlcnJvb20oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICA8aDM+SGVhbHRoIENhcmU8L2gzPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJcIj5cclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSA/IHNldGxhd24oXCJZXCIpIDogc2V0bGF3bihcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMYXduIG9yIEdhcmRlblxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWVcclxuICAgICAgICAgICAgICAgID8gc2V0c3dpbW1pbmdwb29sKFwiWVwiKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRzd2ltbWluZ3Bvb2woXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpbW1pbmcgUG9vbFxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRzdWFuYShcIllcIikgOiBzZXRzdWFuYShcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWFuYVxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRqYWN1enppKFwiWVwiKSA6IHNldGphY3V6emkoXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSmFjdXp6aVxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3RoZXIgSGVhbHRoY2FyZSBhbmQgUmVjcmVhdGlvbiBGYWNpbGl0aWVzXCI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e290aGVyYnVzaW5lc3N9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0b3RoZXJoZWFsdGgoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICA8aDM+T3RoZXIgRmFjaWxpdGllczwvaDM+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlwiPlxyXG4gICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICA/IHNldG1haW50ZW5hbmNlKFwiWVwiKVxyXG4gICAgICAgICAgICAgICAgOiBzZXRtYWludGVuYW5jZShcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNYWludGVuYW5jZSBTdGFmZlxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRzZWN1cml0eShcIllcIikgOiBzZXRzZWN1cml0eShcIk5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTZWN1cml0eSBTdGFmZlxyXG4gICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiXCI+XHJcbiAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUgPyBzZXRmYWNpbGl0aWVzKFwiWVwiKSA6IHNldGphY3V6emkoXCJOXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmFjaWxpdGllcyBmb3IgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIk90aGVyIEZhY2lsaXRpZXNcIj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17b3RoZXJmYWNpbGl0aWVzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldG90aGVyZmFjaWxpdGllcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgb25DbGljaz17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgICAgIEFkZCBGZWF0dXJlc1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRmVhdHVyZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==