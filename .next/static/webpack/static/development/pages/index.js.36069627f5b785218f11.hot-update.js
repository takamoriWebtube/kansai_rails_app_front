webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/organisms/loginstatus.js":
/*!*********************************************!*\
  !*** ./components/organisms/loginstatus.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginStatus; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/app/components/organisms/loginstatus.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


var LoginStatus =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginStatus, _Component);

  function LoginStatus(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginStatus);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginStatus).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginStatus, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var socket = new WebSocket('wss://rails.local/api/cable');
      console.log(socket);
      /*
      socket.onmessage = function(e) {
          alert(e)
      }
      */

      socket.onopen = function () {
        alert('ok');
      };
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u30E6\u30FC\u30B6\u30FC\u3068\u30ED\u30B0\u30A4\u30F3\u72B6\u6CC1")), __jsx("ul", {
        className: "jsx-1360303110" + " " + "login-status__body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("li", {
        className: "jsx-1360303110" + " " + "login-status__body__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("img", {
        src: "/images/star.jpeg",
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "\u540D\u524D"), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))), __jsx("li", {
        className: "jsx-1360303110" + " " + "login-status__body__item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("img", {
        src: "/images/star.jpeg",
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "\u540D\u524D"), __jsx("div", {
        className: "jsx-1360303110" + " " + "login-status__body__item__status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-1360303110",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1360303110",
        __self: this
      }, ".login-status.jsx-1360303110{width:280px;}.login-status__header.jsx-1360303110{padding:20px;text-align:center;border-bottom:1px solid #ccc;}.login-status__body.jsx-1360303110{padding:20px;}.login-status__body__item.jsx-1360303110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:20px;}.login-status__body__item__image.jsx-1360303110{width:40px;height:40px;padding-right:10px;}.login-status__body__item__image.jsx-1360303110 img.jsx-1360303110{width:100%;height:100%;obect-fit:cover;border-radius:100px;}.login-status__body__item__name.jsx-1360303110{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:170px;}.login-status__body__item__status.jsx-1360303110{width:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.login-status__body__item__status.jsx-1360303110 span.jsx-1360303110{display:block;border:1px solid #ccc;width:10px;height:10px;border-radius:10px;color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvbG9naW5zdGF0dXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0M0QixBQUdpQyxBQUdDLEFBS0EsQUFHQSxBQUlGLEFBS0EsQUFNRSxBQUtGLEFBS0csV0FwQkYsQUFLQSxBQVdDLENBL0JqQixDQUdzQixBQUt0QixDQTRCMEIsU0FwQkgsQUFLSCxRQWpCYSxLQWlDbEIsR0FmUyxHQUx4QixLQXFCZ0IsWUFmaEIsQUFnQnVCLENBbEN2QixjQU11QixBQWVBLElBY1AsT0FSTyxLQVN2QixHQTdCQSwwRUFlZ0IsV0FNaEIsQ0FMQSIsImZpbGUiOiIvYXBwL2NvbXBvbmVudHMvb3JnYW5pc21zL2xvZ2luc3RhdHVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5TdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzczovL3JhaWxzLmxvY2FsL2FwaS9jYWJsZScpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhzb2NrZXQpXG4gICAgICAgIC8qXG4gICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBhbGVydChlKVxuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgc29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYWxlcnQoJ29rJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+44Om44O844K244O844Go44Ot44Kw44Kk44Oz54q25rOBPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX2ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvc3Rhci5qcGVnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9fbmFtZVwiPuWQjeWJjTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX3N0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltYWdlcy9zdGFyLmpwZWcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19uYW1lXCI+5ZCN5YmNPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9fc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1cyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1c19faGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1c19fYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dpbi1zdGF0dXNfX2JvZHlfX2l0ZW1fX2ltYWdlIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9naW4tc3RhdHVzX19ib2R5X19pdGVtX19zdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ2luLXN0YXR1c19fYm9keV9faXRlbV9fc3RhdHVzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuIl19 */\n/*@ sourceURL=/app/components/organisms/loginstatus.js */"));
    }
  }]);

  return LoginStatus;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.36069627f5b785218f11.hot-update.js.map