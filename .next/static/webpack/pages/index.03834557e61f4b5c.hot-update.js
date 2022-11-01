"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Business.js":
/*!**************************************!*\
  !*** ./pages/components/Business.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Business; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./pages/constants/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./pages/components/Button.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar FeatureCard = function(param) {\n    var icon = param.icon, title = param.title, content = param.content, index = param.index;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row p-6 rounded-[20px] \".concat(index !== _constants__WEBPACK_IMPORTED_MODULE_2__.features.length - 1 ? \"mb-6\" : \"mb-0\", \" feature-card \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[64px] h-[64px] rounded-4 flex justify-center items-center bg-dimBlue\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: icon,\n                    alt: \"icon\",\n                    className: \"w-[50%] h-[50%] object-containt\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex flex-col ml-3 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 16,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-poppins font-normal text-white text-[16px] mb-1 leading-[23px]\",\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, _this);\n};\n_c = FeatureCard;\nfunction Business() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"features\",\n        className: \"flex md:flex-row flex-col sm:py-16 py-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0\n                },\n                whileInView: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 3.5\n                },\n                className: \"flex-1 flex-col flex justify-center items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full\",\n                        children: [\n                            \"You press a button,\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                                className: \"sm:block hidden\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                                lineNumber: 37,\n                                columnNumber: 28\n                            }, this),\n                            \" we'll do the trading.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-poppins font-normal text-white text-[18px] leading-[30.8px] max-w-[470px] mt-5 \",\n                        children: \"For every market condition, there’s a trading strategy that can profit from it. 3Commas bots happen to be really good at reducing average acquisition costs, directly increasing your profit margins from each trade.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hover:bg-slate-500/10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    x: 200\n                },\n                transition: {\n                    duration: 1.5\n                },\n                whileInView: {\n                    x: 0,\n                    opacity: 1\n                },\n                className: \"flex-1 flex justify-center items-start flex-col md:ml-10 ml-0 md:mt-0 mt-10 relative\",\n                children: _constants__WEBPACK_IMPORTED_MODULE_2__.features.map(function(feature, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeatureCard, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, feature), {\n                        index: index\n                    }), feature.id, false, {\n                        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n                lineNumber: 53,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shaya\\\\di-bot\\\\pages\\\\components\\\\Business.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Business;\nvar _c, _c1;\n$RefreshReg$(_c, \"FeatureCard\");\n$RefreshReg$(_c1, \"Business\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0J1c2luZXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF5QjtBQUNjO0FBQ1Y7QUFDUztBQUl0QyxJQUFNSSxXQUFXLEdBQUc7UUFBR0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsS0FBSyxTQUFMQSxLQUFLO3lCQUNoRCw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUUsbUNBQWtDLENBQy9CLE1BQWMsQ0FEbUJGLEtBQUssS0FBS1AsdURBQWUsR0FBRyxDQUFDLEdBQzlFLE1BQU0sR0FBRyxNQUFNLEVBQUMsZ0JBQWMsQ0FBQzs7MEJBQ2hDLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUVBQXlFOzBCQUN0Riw0RUFBQ0UsS0FBRztvQkFBQ0MsR0FBRyxFQUFFUixJQUFJO29CQUFFUyxHQUFHLEVBQUMsTUFBTTtvQkFDM0JKLFNBQVMsRUFBQyxpQ0FBaUM7Ozs7O3lCQUFFOzs7OztxQkFDeEM7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw0QkFBNEI7O2tDQUN6Qyw4REFBQ0ssSUFBRTt3QkFBQ0wsU0FBUyxFQUFDLHVFQUNNO2tDQUNqQkosS0FBSzs7Ozs7NkJBQ0g7a0NBQ0wsOERBQUNVLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyxxRUFDRTtrQ0FDWkgsT0FBTzs7Ozs7NkJBQ047Ozs7OztxQkFDQTs7Ozs7O2FBQ0Y7Q0FDUDtBQWxCS0gsS0FBQUEsV0FBVztBQW9CRixTQUFTYSxRQUFRLEdBQUc7O0lBQ2pDLHFCQUNFLDhEQUFDQyxTQUFPO1FBQUNDLEVBQUUsRUFBQyxVQUFVO1FBQUNULFNBQVMsRUFBQyx5Q0FBeUM7OzBCQUMxRSw4REFBQ1AscURBQVU7Z0JBQ1ZpQixPQUFPLEVBQUU7b0JBQUVDLE9BQU8sRUFBRSxDQUFDO2lCQUFFO2dCQUN4QkMsV0FBVyxFQUFFO29CQUFDRCxPQUFPLEVBQUUsQ0FBQztpQkFBQztnQkFDekJFLFVBQVUsRUFBRTtvQkFBQ0MsUUFBUSxFQUFFLEdBQUc7aUJBQUM7Z0JBQzNCZCxTQUFTLEVBQUMsaURBQWlEOztrQ0FDekQsOERBQUNlLElBQUU7d0JBQUNmLFNBQVMsRUFBQyw4R0FBOEc7OzRCQUFFLHFCQUN6RzswQ0FBQSw4REFBQ2dCLElBQUU7Z0NBQUNoQixTQUFTLEVBQUMsaUJBQWlCOzs7OztvQ0FBRzs0QkFBQSx3QkFDdkQ7Ozs7Ozs0QkFBSztrQ0FDTCw4REFBQ00sR0FBQzt3QkFDRk4sU0FBUyxFQUFDLHNGQUNVO2tDQUFDLHVOQU1yQjs7Ozs7NEJBQUk7a0NBQ0osOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7a0NBQ3BDLDRFQUFDUiwrQ0FBTTs7OztnQ0FBRzs7Ozs7NEJBQ047Ozs7OztvQkFDSzswQkFFYiw4REFBQ0MscURBQVU7Z0JBQ0hpQixPQUFPLEVBQUU7b0JBQ1RPLENBQUMsRUFBRSxHQUFHO2lCQUNUO2dCQUNESixVQUFVLEVBQUU7b0JBQ1JDLFFBQVEsRUFBRSxHQUFHO2lCQUNoQjtnQkFDREYsV0FBVyxFQUFFO29CQUNUSyxDQUFDLEVBQUUsQ0FBQztvQkFDSk4sT0FBTyxFQUFFLENBQUM7aUJBQ2I7Z0JBQ0xYLFNBQVMsRUFBQyxzRkFBdUY7MEJBQzlGVCxvREFBWSxDQUFDLFNBQUM0QixPQUFPLEVBQUVyQixLQUFLO3lDQUMzQiw4REFBQ0osV0FBVywwS0FBc0J5QixPQUFPO3dCQUFFckIsS0FBSyxFQUFFQSxLQUFLO3dCQUFyQ3FCLE9BQU8sQ0FBQ1YsRUFBRTs7Ozs2QkFBK0I7aUJBQzVELENBQUM7Ozs7O29CQUNTOzs7Ozs7WUFDSCxDQUVYO0FBQ0gsQ0FBQztBQTVDdUJGLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9CdXNpbmVzcy5qcz9mMGFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZmVhdHVyZXMgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcblxyXG5cclxuY29uc3QgRmVhdHVyZUNhcmQgPSAoeyBpY29uLCB0aXRsZSwgY29udGVudCwgaW5kZXh9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IHAtNiByb3VuZGVkLVsyMHB4XSAke2luZGV4ICE9PSBmZWF0dXJlcy5sZW5ndGggLSAxXHJcbiAgID8gXCJtYi02XCIgOiBcIm1iLTBcIn0gZmVhdHVyZS1jYXJkIGB9PiBcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs2NHB4XSBoLVs2NHB4XSByb3VuZGVkLTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctZGltQmx1ZSc+XHJcbiAgICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJpY29uXCIgXHJcbiAgICAgY2xhc3NOYW1lPSd3LVs1MCVdIGgtWzUwJV0gb2JqZWN0LWNvbnRhaW50Jy8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgbWwtMyBcIj5cclxuICAgICAgPGg0IGNsYXNzTmFtZT0nZm9udC1wb3BwaW5zIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSB0ZXh0LVsxOHB4XSBcclxuICAgICAgbWItMSBsZWFkaW5nLVsyM3B4XSc+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8cCBjbGFzc05hbWU9J2ZvbnQtcG9wcGlucyBmb250LW5vcm1hbCB0ZXh0LXdoaXRlIHRleHQtWzE2cHhdIG1iLTFcclxuICAgICAgbGVhZGluZy1bMjNweF0nPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVzaW5lc3MoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPSdmZWF0dXJlcycgY2xhc3NOYW1lPSdmbGV4IG1kOmZsZXgtcm93IGZsZXgtY29sIHNtOnB5LTE2IHB5LTYnPlxyXG4gICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICB3aGlsZUluVmlldz17e29wYWNpdHk6IDF9fVxyXG4gICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAzLjV9fVxyXG4gICAgY2xhc3NOYW1lPSdmbGV4LTEgZmxleC1jb2wgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCc+IFxyXG4gICAgICA8aDIgY2xhc3NOYW1lPSdmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZCB4czp0ZXh0LVs0OHB4XSB0ZXh0LVs0MHB4XSB0ZXh0LXdoaXRlIHhzOmxlYWRpbmctWzc2LjhweF0gbGVhZGluZy1bNjYuOHB4XSB3LWZ1bGwnID5cclxuICAgICAgICBZb3UgcHJlc3MgYSBidXR0b24sPGJyIGNsYXNzTmFtZT0nc206YmxvY2sgaGlkZGVuJyAvPiB3ZSdsbCBkbyB0aGUgdHJhZGluZy5cclxuICAgICAgPC9oMj5cclxuICAgICAgPHAgXHJcbiAgICAgIGNsYXNzTmFtZT0nZm9udC1wb3BwaW5zIGZvbnQtbm9ybWFsIHRleHQtd2hpdGUgdGV4dC1bMThweF0gbGVhZGluZy1bMzAuOHB4XSBcclxuICAgICAgbWF4LXctWzQ3MHB4XSBtdC01ICc+XHJcbiAgICAgICAgRm9yIGV2ZXJ5IG1hcmtldCBjb25kaXRpb24sIHRoZXJl4oCZcyBhIHRyYWRpbmcgc3RyYXRlZ3kgdGhhdCBjYW4gXHJcbiAgICAgICAgcHJvZml0IGZyb20gaXQuIDNDb21tYXMgYm90cyBoYXBwZW4gdG8gYmUgcmVhbGx5IGdvb2QgYXQgcmVkdWNpbmdcclxuICAgICAgICAgYXZlcmFnZSBhY3F1aXNpdGlvbiBjb3N0cywgZGlyZWN0bHkgaW5jcmVhc2luZyB5b3VyIHByb2ZpdCBtYXJnaW5zXHJcbiAgICAgICAgICBmcm9tIGVhY2ggdHJhZGUuXHJcblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdob3ZlcjpiZy1zbGF0ZS01MDAvMTAnPlxyXG4gICAgICAgIDxCdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgeDogMjAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMS41XHJcbiAgICAgICAgfX1cclxuICAgICAgICB3aGlsZUluVmlldz17e1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH19XHJcbiAgICBjbGFzc05hbWU9J2ZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGZsZXgtY29sICBtZDptbC0xMCBtbC0wIG1kOm10LTAgbXQtMTAgcmVsYXRpdmUnPlxyXG4gICAgICB7ZmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxGZWF0dXJlQ2FyZCBrZXk9e2ZlYXR1cmUuaWR9IHsuLi5mZWF0dXJlfSBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmVhdHVyZXMiLCJCdXR0b24iLCJtb3Rpb24iLCJGZWF0dXJlQ2FyZCIsImljb24iLCJ0aXRsZSIsImNvbnRlbnQiLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImltZyIsInNyYyIsImFsdCIsImg0IiwicCIsIkJ1c2luZXNzIiwic2VjdGlvbiIsImlkIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImgyIiwiYnIiLCJ4IiwibWFwIiwiZmVhdHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Business.js\n"));

/***/ })

});