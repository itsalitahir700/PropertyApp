exports.ids = [0];
exports.modules = {

/***/ "./components/Map/MapAutoComplete.js":
/*!*******************************************!*\
  !*** ./components/Map/MapAutoComplete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "react-google-maps/lib/components/places/StandaloneSearchBox");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\components\\Map\\MapAutoComplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(props => {
  const {
    getinputvalue
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchedLocation: '',
    searchedPlaceAPIData: []
  });

  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});

  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
    getinputvalue(locationInput);
  };

  return __jsx("div", {
    className: "map_autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MapAutoComplete);

/***/ }),

/***/ "./components/Map/mapDataHelper.js":
/*!*****************************************!*\
  !*** ./components/Map/mapDataHelper.js ***!
  \*****************************************/
/*! exports provided: mapDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDataHelper", function() { return mapDataHelper; });
function mapDataHelper(infoValue) {
  const tempMapObj = {};
  const tempMapArray = [];

  if (infoValue && infoValue.length !== 0) {
    infoValue.map(({
      place_id,
      address_components,
      formatted_address,
      geometry: {
        location
      }
    }) => {
      let id = '';
      let lat = '';
      let lng = '';
      let formattedAddress = '';
      let city = '';
      let state_long = '';
      let state_short = '';
      let zipcode = '';
      let country_long = '';
      let country_short = '';
      id = place_id;
      lat = location.lat();
      lng = location.lng();
      formattedAddress = formatted_address;

      if (address_components) {
        for (let i = 0; i < address_components.length; i++) {
          if (address_components[i].types.length) {
            switch (address_components[i].types[0]) {
              case 'locality':
                city = address_components[i].long_name;
                break;

              case 'administrative_area_level_1':
                state_long = address_components[i].long_name;
                state_short = address_components[i].short_name;
                break;

              case 'country':
                country_long = address_components[i].long_name;
                country_short = address_components[i].short_name;
                break;

              case 'postal_code':
                zipcode = address_components[i].long_name;
                break;

              default:
                break;
            }
          }
        }
      }

      tempMapObj.id = id;
      tempMapObj.lat = lat;
      tempMapObj.lng = lng;
      tempMapObj.formattedAddress = formattedAddress;
      tempMapObj.city = city;
      tempMapObj.state_short = state_short;
      tempMapObj.state_long = state_long;
      tempMapObj.zipcode = zipcode;
      tempMapObj.country_short = country_short;
      tempMapObj.country_long = country_long;
      tempMapArray.push(tempMapObj);
      return tempMapArray;
    });
  }

  return tempMapArray;
}

/***/ }),

/***/ "./container/Layout/Header/NavbarSearch.js":
/*!*************************************************!*\
  !*** ./container/Layout/Header/NavbarSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Map/MapAutoComplete */ "./components/Map/MapAutoComplete.js");
/* harmony import */ var components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Map/mapDataHelper */ "./components/Map/mapDataHelper.js");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.style */ "./container/Layout/Header/Header.style.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
var _jsxFileName = "C:\\wamp64\\www\\Reactapps\\my-app\\Apnaghar-frontend\\TripFinder\\packages\\hotel-next\\container\\Layout\\Header\\NavbarSearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const NavbarSearch = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_7__["SearchContext"]);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0
  };

  const updatevalueFunc = value => {
    const {
      searchedPlaceAPIData
    } = value;
    let tempLocation = [];
    const mapData = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(searchedPlaceAPIData) ? Object(components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_5__["mapDataHelper"])(searchedPlaceAPIData) : [];

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(mapData) && mapData.length !== 0) {
      mapData.forEach(singleMapData => tempLocation.push({
        location_lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
        location_lng: singleMapData ? singleMapData.lng.toFixed(3) : null
      }));
    }

    const searchLocation = tempLocation ? tempLocation[0] : {};

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(searchLocation)) {
      const query = {
        location_lat: parseFloat(searchLocation.location_lat),
        location_lng: parseFloat(searchLocation.location_lng)
      };
      const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_8__["setStateToUrl"])(query);
      dispatch({
        type: 'UPDATE',
        payload: _objectSpread(_objectSpread({}, initialState), query)
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push({
        pathname: '/listing',
        query: params
      });
    }
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_6__["NavbarSearchWrapper"], {
    className: "navbar_search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    updatevalue: value => updatevalueFunc(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiSearch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavbarSearch));

/***/ }),

/***/ "./library/helpers/url_handler.js":
/*!****************************************!*\
  !*** ./library/helpers/url_handler.js ***!
  \****************************************/
/*! exports provided: createUrl, setStateToUrl, setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl", function() { return setStateToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION", function() { return setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION; });
function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (urlData[key] && urlData[key] !== null && urlData[key] !== '' && urlData[key] !== ',' && urlData[key] !== undefined && urlData[key].length !== 0) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  }); // return search;

  return search.substring(0, search.length - 1);
}
function setStateToUrl(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}
function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9NYXBBdXRvQ29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvbWFwRGF0YUhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGF5b3V0L0hlYWRlci9OYXZiYXJTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyLmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwiY29tcG9zZSIsIndpdGhQcm9wcyIsImdvb2dsZU1hcFVSTCIsInByb2Nlc3MiLCJsb2FkaW5nRWxlbWVudCIsImhlaWdodCIsImNvbnRhaW5lckVsZW1lbnQiLCJ3aXRoU2NyaXB0anMiLCJwcm9wcyIsImdldGlucHV0dmFsdWUiLCJsb2NhdGlvbklucHV0Iiwic2V0TG9jYXRpb25JbnB1dCIsInVzZVN0YXRlIiwic2VhcmNoZWRMb2NhdGlvbiIsInNlYXJjaGVkUGxhY2VBUElEYXRhIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZnMiLCJ1c2VSZWYiLCJvblBsYWNlc0NoYW5nZWQiLCJwbGFjZXMiLCJjdXJyZW50IiwiZ2V0UGxhY2VzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJoYW5kbGVPblByZXNzRW50ZXIiLCJNYXBBdXRvQ29tcGxldGUiLCJ1cGRhdGV2YWx1ZSIsIm1hcERhdGFIZWxwZXIiLCJpbmZvVmFsdWUiLCJ0ZW1wTWFwT2JqIiwidGVtcE1hcEFycmF5IiwibGVuZ3RoIiwibWFwIiwicGxhY2VfaWQiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiaWQiLCJsYXQiLCJsbmciLCJmb3JtYXR0ZWRBZGRyZXNzIiwiY2l0eSIsInN0YXRlX2xvbmciLCJzdGF0ZV9zaG9ydCIsInppcGNvZGUiLCJjb3VudHJ5X2xvbmciLCJjb3VudHJ5X3Nob3J0IiwiaSIsInR5cGVzIiwibG9uZ19uYW1lIiwic2hvcnRfbmFtZSIsInB1c2giLCJOYXZiYXJTZWFyY2giLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJhbWVuaXRpZXMiLCJwcm9wZXJ0eSIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJtaW5QcmljZSIsInBhcnNlSW50IiwibWF4UHJpY2UiLCJsb2NhdGlvbl9sYXQiLCJsb2NhdGlvbl9sbmciLCJyb29tIiwiZ3Vlc3QiLCJ1cGRhdGV2YWx1ZUZ1bmMiLCJ0ZW1wTG9jYXRpb24iLCJtYXBEYXRhIiwiaXNFbXB0eSIsImZvckVhY2giLCJzaW5nbGVNYXBEYXRhIiwidG9GaXhlZCIsInNlYXJjaExvY2F0aW9uIiwicXVlcnkiLCJwYXJzZUZsb2F0IiwicGFyYW1zIiwic2V0U3RhdGVUb1VybCIsInR5cGUiLCJwYXlsb2FkIiwiUm91dGVyIiwicGF0aG5hbWUiLCJ3aXRoUm91dGVyIiwiY3JlYXRlVXJsIiwidXJsRGF0YSIsImtleXMiLCJPYmplY3QiLCJzZWFyY2giLCJrZXkiLCJ1bmRlZmluZWQiLCJzdWJzdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImpvaW4iLCJzZXRTdGF0ZVRvVXJsX09OX05FWFRfSlNfUk9VVEVSX1BVU0hfVkVSU0lPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsV0FBVyxHQUFHQyx5REFBTyxDQUN6QkMsMkRBQVMsQ0FBQztBQUNSQyxjQUFZLEVBQUVDLCtHQUROO0FBRVJDLGdCQUFjLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRlI7QUFHUkMsa0JBQWdCLEVBQUU7QUFBSyxTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFHO0FB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UCxHQUFldEMsS0FBSyxDQUFDc0MsR0FBRCxDQUFwQjtBQUNBO0FBN0RKO0FBK0REO0FBQ0Y7O0FBQ0QsU0FBT0wsU0FBUyxDQUFDQyxPQUFELENBQWhCO0FBQ0QsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XHJcbmltcG9ydCB7IHdpdGhTY3JpcHRqcyB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcclxuaW1wb3J0IFN0YW5kYWxvbmVTZWFyY2hCb3ggZnJvbSAncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3gnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgU2VhcmNoSW5wdXQgPSBjb21wb3NlKFxyXG4gIHdpdGhQcm9wcyh7XHJcbiAgICBnb29nbGVNYXBVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HT09HTEVfTUFQX0FQSV9LRVksXHJcbiAgICBsb2FkaW5nRWxlbWVudDogPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSAvPixcclxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNDAwcHhgIH19IC8+LFxyXG4gIH0pLFxyXG4gIHdpdGhTY3JpcHRqc1xyXG4pKChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2V0aW5wdXR2YWx1ZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2xvY2F0aW9uSW5wdXQsIHNldExvY2F0aW9uSW5wdXRdID0gdXNlU3RhdGUoe1xyXG4gICAgc2VhcmNoZWRMb2NhdGlvbjogJycsXHJcbiAgICBzZWFyY2hlZFBsYWNlQVBJRGF0YTogW10sXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC53aGljaCA9PT0gJzEzJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldExvY2F0aW9uSW5wdXQoe1xyXG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZnMgPSB1c2VSZWYoe30pO1xyXG4gIGNvbnN0IG9uUGxhY2VzQ2hhbmdlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYWNlcyA9IHJlZnMuY3VycmVudC5nZXRQbGFjZXMoKTtcclxuICAgIHNldExvY2F0aW9uSW5wdXQoe1xyXG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBwbGFjZXMgJiYgcGxhY2VzWzBdICYmIHBsYWNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgc2VhcmNoZWRQbGFjZUFQSURhdGE6IHBsYWNlcyA/IHBsYWNlcyA6IFtdLFxyXG4gICAgfSk7XHJcbiAgICBnZXRpbnB1dHZhbHVlKHtcclxuICAgICAgc2VhcmNoZWRMb2NhdGlvbjogcGxhY2VzICYmIHBsYWNlc1swXSAmJiBwbGFjZXNbMF0uZm9ybWF0dGVkX2FkZHJlc3MsXHJcbiAgICAgIHNlYXJjaGVkUGxhY2VBUElEYXRhOiBwbGFjZXMgPyBwbGFjZXMgOiBbXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uUHJlc3NFbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSAnMTMnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9jYXRpb25JbnB1dCh7IHNlYXJjaGVkTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGdldGlucHV0dmFsdWUobG9jYXRpb25JbnB1dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwX2F1dG9jb21wbGV0ZVwiPlxyXG4gICAgICA8U3RhbmRhbG9uZVNlYXJjaEJveCByZWY9e3JlZnN9IG9uUGxhY2VzQ2hhbmdlZD17b25QbGFjZXNDaGFuZ2VkfT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICB2YWx1ZT17bG9jYXRpb25JbnB1dC5zZWFyY2hlZExvY2F0aW9uIHx8ICcnfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2gg4oCcVGhhaWxhbmQsIEFzaWHigJ1cIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgIG9uUHJlc3NFbnRlcj17aGFuZGxlT25QcmVzc0VudGVyfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvU3RhbmRhbG9uZVNlYXJjaEJveD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgTWFwQXV0b0NvbXBsZXRlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB1cGRhdGV2YWx1ZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxTZWFyY2hJbnB1dCBnZXRpbnB1dHZhbHVlPXt1cGRhdGV2YWx1ZX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBBdXRvQ29tcGxldGU7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBtYXBEYXRhSGVscGVyKGluZm9WYWx1ZSkge1xyXG4gIGNvbnN0IHRlbXBNYXBPYmogPSB7fTtcclxuICBjb25zdCB0ZW1wTWFwQXJyYXkgPSBbXTtcclxuXHJcbiAgaWYgKGluZm9WYWx1ZSAmJiBpbmZvVmFsdWUubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBpbmZvVmFsdWUubWFwKFxyXG4gICAgICAoe1xyXG4gICAgICAgIHBsYWNlX2lkLFxyXG4gICAgICAgIGFkZHJlc3NfY29tcG9uZW50cyxcclxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICBnZW9tZXRyeTogeyBsb2NhdGlvbiB9LFxyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgbGV0IGlkID0gJyc7XHJcbiAgICAgICAgbGV0IGxhdCA9ICcnO1xyXG4gICAgICAgIGxldCBsbmcgPSAnJztcclxuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9ICcnO1xyXG4gICAgICAgIGxldCBjaXR5ID0gJyc7XHJcbiAgICAgICAgbGV0IHN0YXRlX2xvbmcgPSAnJztcclxuICAgICAgICBsZXQgc3RhdGVfc2hvcnQgPSAnJztcclxuICAgICAgICBsZXQgemlwY29kZSA9ICcnO1xyXG4gICAgICAgIGxldCBjb3VudHJ5X2xvbmcgPSAnJztcclxuICAgICAgICBsZXQgY291bnRyeV9zaG9ydCA9ICcnO1xyXG5cclxuICAgICAgICBpZCA9IHBsYWNlX2lkO1xyXG4gICAgICAgIGxhdCA9IGxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIGxuZyA9IGxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgIGZvcm1hdHRlZEFkZHJlc3MgPSBmb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICBpZiAoYWRkcmVzc19jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHJlc3NfY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAoYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsb2NhbGl0eSc6XHJcbiAgICAgICAgICAgICAgICAgIGNpdHkgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMSc6XHJcbiAgICAgICAgICAgICAgICAgIHN0YXRlX2xvbmcgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICBzdGF0ZV9zaG9ydCA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvdW50cnknOlxyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X2xvbmcgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X3Nob3J0ID0gYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncG9zdGFsX2NvZGUnOlxyXG4gICAgICAgICAgICAgICAgICB6aXBjb2RlID0gYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRlbXBNYXBPYmouaWQgPSBpZDtcclxuICAgICAgICB0ZW1wTWFwT2JqLmxhdCA9IGxhdDtcclxuICAgICAgICB0ZW1wTWFwT2JqLmxuZyA9IGxuZztcclxuICAgICAgICB0ZW1wTWFwT2JqLmZvcm1hdHRlZEFkZHJlc3MgPSBmb3JtYXR0ZWRBZGRyZXNzO1xyXG4gICAgICAgIHRlbXBNYXBPYmouY2l0eSA9IGNpdHk7XHJcbiAgICAgICAgdGVtcE1hcE9iai5zdGF0ZV9zaG9ydCA9IHN0YXRlX3Nob3J0O1xyXG4gICAgICAgIHRlbXBNYXBPYmouc3RhdGVfbG9uZyA9IHN0YXRlX2xvbmc7XHJcbiAgICAgICAgdGVtcE1hcE9iai56aXBjb2RlID0gemlwY29kZTtcclxuICAgICAgICB0ZW1wTWFwT2JqLmNvdW50cnlfc2hvcnQgPSBjb3VudHJ5X3Nob3J0O1xyXG4gICAgICAgIHRlbXBNYXBPYmouY291bnRyeV9sb25nID0gY291bnRyeV9sb25nO1xyXG4gICAgICAgIHRlbXBNYXBBcnJheS5wdXNoKHRlbXBNYXBPYmopO1xyXG4gICAgICAgIHJldHVybiB0ZW1wTWFwQXJyYXk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGVtcE1hcEFycmF5O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcclxuaW1wb3J0IHsgRmlTZWFyY2ggfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCBNYXBBdXRvQ29tcGxldGUgZnJvbSAnY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlJztcclxuaW1wb3J0IHsgbWFwRGF0YUhlbHBlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXInO1xyXG5pbXBvcnQgeyBOYXZiYXJTZWFyY2hXcmFwcGVyIH0gZnJvbSAnLi9IZWFkZXIuc3R5bGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnY29udGV4dC9TZWFyY2hQcm92aWRlcic7XHJcbmltcG9ydCB7IHNldFN0YXRlVG9VcmwgfSBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvdXJsX2hhbmRsZXInO1xyXG5cclxuY29uc3QgTmF2YmFyU2VhcmNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGFtZW5pdGllczogc3RhdGUuYW1lbml0aWVzIHx8IFtdLFxyXG4gICAgcHJvcGVydHk6IHN0YXRlLnByb3BlcnR5IHx8IFtdLFxyXG4gICAgc2V0U3RhcnREYXRlOiBzdGF0ZS5zZXRTdGFydERhdGUgfHwgbnVsbCxcclxuICAgIHNldEVuZERhdGU6IHN0YXRlLnNldEVuZERhdGUgfHwgbnVsbCxcclxuICAgIG1pblByaWNlOiBwYXJzZUludChzdGF0ZS5taW5QcmljZSkgfHwgMCxcclxuICAgIG1heFByaWNlOiBwYXJzZUludChzdGF0ZS5tYXhQcmljZSkgfHwgMTAwLFxyXG4gICAgbG9jYXRpb25fbGF0OiBzdGF0ZS5sb2NhdGlvbl9sYXQgfHwgbnVsbCxcclxuICAgIGxvY2F0aW9uX2xuZzogc3RhdGUubG9jYXRpb25fbG5nIHx8IG51bGwsXHJcbiAgICByb29tOiBwYXJzZUludChzdGF0ZS5yb29tKSB8fCAwLFxyXG4gICAgZ3Vlc3Q6IHBhcnNlSW50KHN0YXRlLmd1ZXN0KSB8fCAwLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZXZhbHVlRnVuYyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgeyBzZWFyY2hlZFBsYWNlQVBJRGF0YSB9ID0gdmFsdWU7XHJcbiAgICBsZXQgdGVtcExvY2F0aW9uID0gW107XHJcbiAgICBjb25zdCBtYXBEYXRhID0gIWlzRW1wdHkoc2VhcmNoZWRQbGFjZUFQSURhdGEpXHJcbiAgICAgID8gbWFwRGF0YUhlbHBlcihzZWFyY2hlZFBsYWNlQVBJRGF0YSlcclxuICAgICAgOiBbXTtcclxuICAgIGlmICghaXNFbXB0eShtYXBEYXRhKSAmJiBtYXBEYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBtYXBEYXRhLmZvckVhY2goKHNpbmdsZU1hcERhdGEpID0+XHJcbiAgICAgICAgdGVtcExvY2F0aW9uLnB1c2goe1xyXG4gICAgICAgICAgbG9jYXRpb25fbGF0OiBzaW5nbGVNYXBEYXRhID8gc2luZ2xlTWFwRGF0YS5sYXQudG9GaXhlZCgzKSA6IG51bGwsXHJcbiAgICAgICAgICBsb2NhdGlvbl9sbmc6IHNpbmdsZU1hcERhdGEgPyBzaW5nbGVNYXBEYXRhLmxuZy50b0ZpeGVkKDMpIDogbnVsbCxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gdGVtcExvY2F0aW9uID8gdGVtcExvY2F0aW9uWzBdIDoge307XHJcbiAgICBpZiAoIWlzRW1wdHkoc2VhcmNoTG9jYXRpb24pKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgIGxvY2F0aW9uX2xhdDogcGFyc2VGbG9hdChzZWFyY2hMb2NhdGlvbi5sb2NhdGlvbl9sYXQpLFxyXG4gICAgICAgIGxvY2F0aW9uX2xuZzogcGFyc2VGbG9hdChzZWFyY2hMb2NhdGlvbi5sb2NhdGlvbl9sbmcpLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKHF1ZXJ5KTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdVUERBVEUnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgICAgIC4uLnF1ZXJ5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6ICcvbGlzdGluZycsXHJcbiAgICAgICAgcXVlcnk6IHBhcmFtcyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZiYXJTZWFyY2hXcmFwcGVyIGNsYXNzTmFtZT1cIm5hdmJhcl9zZWFyY2hcIj5cclxuICAgICAgPE1hcEF1dG9Db21wbGV0ZSB1cGRhdGV2YWx1ZT17KHZhbHVlKSA9PiB1cGRhdGV2YWx1ZUZ1bmModmFsdWUpfSAvPlxyXG4gICAgICA8RmlTZWFyY2ggLz5cclxuICAgIDwvTmF2YmFyU2VhcmNoV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXJTZWFyY2gpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHVybERhdGEpIHtcclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModXJsRGF0YSk7XHJcbiAgbGV0IHNlYXJjaCA9ICcnO1xyXG4gIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB1cmxEYXRhW2tleV0gJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSBudWxsICYmXHJcbiAgICAgIHVybERhdGFba2V5XSAhPT0gJycgJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSAnLCcgJiZcclxuICAgICAgdXJsRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgdXJsRGF0YVtrZXldLmxlbmd0aCAhPT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIHNlYXJjaFtrZXldID0gdXJsRGF0YVtrZXldO1xyXG4gICAgICBzZWFyY2ggKz0gYCR7a2V5fT0ke3VybERhdGFba2V5XX0mYDtcclxuICAgIH1cclxuICB9KTtcclxuICAvLyByZXR1cm4gc2VhcmNoO1xyXG4gIHJldHVybiBzZWFyY2guc3Vic3RyaW5nKDAsIHNlYXJjaC5sZW5ndGggLSAxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlVG9Vcmwoc3RhdGUpIHtcclxuICBsZXQgdXJsRGF0YSA9IHt9O1xyXG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XHJcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2UgJ3NldFN0YXJ0RGF0ZSc6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2V0RW5kRGF0ZSc6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6ICcnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWluUHJpY2UnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA+IDApIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWF4UHJpY2UnOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA8IDEwMCkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdhbWVuaXRpZXMnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cclxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXHJcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncm9vbSc6XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2d1ZXN0JzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncHJvcGVydHknOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cclxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcclxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXHJcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbG9jYXRpb24nOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQpIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xhdGBdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZykge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2Ake2tleX1fbG5nYF0gPSBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcclxuICAgICAgICAgIHVybERhdGEgPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGNyZWF0ZVVybCh1cmxEYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0YXRlVG9VcmxfT05fTkVYVF9KU19ST1VURVJfUFVTSF9WRVJTSU9OKHN0YXRlKSB7XHJcbiAgbGV0IHVybERhdGEgPSB7fTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBzdGF0ZSkge1xyXG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlICdzZXRTdGFydERhdGUnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3NldEVuZERhdGUnOlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21pblByaWNlJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPiAwKSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21heFByaWNlJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPCAxMDApIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnYW1lbml0aWVzJzpcclxuICAgICAgICAgIHVybERhdGFba2V5XSA9XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxyXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Jvb20nOlxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAwO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdndWVzdCc6XHJcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldID8gc3RhdGVba2V5XSA6IDA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3Byb3BlcnR5JzpcclxuICAgICAgICAgIHVybERhdGFba2V5XSA9XHJcbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxyXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2xvY2F0aW9uJzpcclxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0ubG9jYXRpb25fbGF0KSB7XHJcbiAgICAgICAgICAgIHVybERhdGFbYCR7a2V5fV9sYXRgXSA9IHN0YXRlW2tleV0ubG9jYXRpb25fbGF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sbmcpIHtcclxuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xuZ2BdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZXNldCc6XHJcbiAgICAgICAgICB1cmxEYXRhID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBjcmVhdGVVcmwodXJsRGF0YSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==