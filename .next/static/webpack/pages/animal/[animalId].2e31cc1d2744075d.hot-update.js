"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animal/[animalId]",{

/***/ "./src/pages/animal/[animalId].tsx":
/*!*****************************************!*\
  !*** ./src/pages/animal/[animalId].tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/cardDetails/CardDetails.module.css */ \"./src/components/UI/cardDetails/CardDetails.module.css\");\n/* harmony import */ var _components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AnimalDetails = (param)=>{\n    let { animal } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { animalId } = router.query;\n    console.log(animalId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: animalId\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: Object.entries(animal).map((param)=>{\n                    let [key, value] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    key,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            value.toString()\n                        ]\n                    }, key, true, {\n                        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                lineNumber: 17,\n                columnNumber: 8\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimalDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AnimalDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimalDetails);\nvar _c;\n$RefreshReg$(_c, \"AnimalDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFsL1thbmltYWxJZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNxQztBQUk3RSxNQUFNRSxnQkFBNEQ7UUFBQyxFQUNqRUMsTUFBTSxFQUNQOztJQUNDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLFFBQVEsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQ2pDQyxRQUFRQyxHQUFHLENBQUNIO0lBRVoscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBV1QsZ0dBQWE7MEJBQUdJOzs7Ozs7MEJBQzlCLDhEQUFDSTtnQkFBSUMsV0FBV1Qsc0dBQW1COzBCQUNqQ2EsT0FBT0MsT0FBTyxDQUFDWixRQUFRYSxHQUFHLENBQUM7d0JBQUMsQ0FBQ0MsS0FBS0MsTUFBTTt5Q0FDdkMsOERBQUNDOzswQ0FDQyw4REFBQ0M7O29DQUFNSDtvQ0FBSTs7Ozs7Ozs0QkFBUTs0QkFBRUMsTUFBTUcsUUFBUTs7dUJBRDdCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEI7R0FuQk1mOztRQUdXRixrREFBU0E7OztLQUhwQkU7O0FBcUJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hbmltYWwvW2FuaW1hbElkXS50c3g/Y2Y5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9VSS9jYXJkRGV0YWlscy9DYXJkRGV0YWlscy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQW5pbWFscyB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5cclxuY29uc3QgQW5pbWFsRGV0YWlsczogRkM8UHJvcHNXaXRoQ2hpbGRyZW48eyBhbmltYWw6IEFuaW1hbHMgfT4+ID0gKHtcclxuICBhbmltYWwsXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGFuaW1hbElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc29sZS5sb2coYW5pbWFsSWQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGV0YWlsc1wiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57YW5pbWFsSWR9PC9oMz5cclxuICAgICAgezxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoYW5pbWFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxyXG4gICAgICAgICAgPHAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8c3Bhbj57a2V5fTo8L3NwYW4+IHt2YWx1ZS50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWFsRGV0YWlscztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wczx7XHJcbiAgYW5pbWFsOiBBbmltYWxzO1xyXG59PiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgaWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5hbmltYWxJZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcblxyXG4gIGNvbnN0IHsgYW5pbWFsSWQgfSA9IHBhcmFtcztcclxuICBjb25zdCBCQVNFX1VSTCA9ICdodHRwczovL3N0YXBpLmNvL2FwaS92MS9yZXN0L2FuaW1hbC9zZWFyY2gnO1xyXG4gIGNvbnNvbGUubG9nKGFuaW1hbElkKVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9P25hbWU9JHthbmltYWxJZH1gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCB7IGFuaW1hbCB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBhbmltYWwgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiY2xhc3NlcyIsIkFuaW1hbERldGFpbHMiLCJhbmltYWwiLCJyb3V0ZXIiLCJhbmltYWxJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsInAiLCJzcGFuIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/animal/[animalId].tsx\n"));

/***/ })

});