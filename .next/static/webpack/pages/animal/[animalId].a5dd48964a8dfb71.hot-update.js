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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UI/cardDetails/CardDetails.module.css */ \"./src/components/UI/cardDetails/CardDetails.module.css\");\n/* harmony import */ var _components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AnimalDetails = (param)=>{\n    let { animal } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { id } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card-details\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: id\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_UI_cardDetails_CardDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: Object.entries(animal).map((param)=>{\n                    let [key, value] = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    key,\n                                    \":\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, undefined),\n                            \" \",\n                            value.toString()\n                        ]\n                    }, key, true, {\n                        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\pages\\\\animal\\\\[animalId].tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AnimalDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AnimalDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimalDetails);\nvar _c;\n$RefreshReg$(_c, \"AnimalDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFsL1thbmltYWxJZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNxQztBQUk3RSxNQUFNRSxnQkFBNEQ7UUFBQyxFQUNqRUMsTUFBTSxFQUNQOztJQUNDLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLEVBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVdQLGdHQUFhOzBCQUFHSTs7Ozs7OzBCQUMvQiw4REFBQ0U7Z0JBQUlDLFdBQVdQLHNHQUFtQjswQkFDaENXLE9BQU9DLE9BQU8sQ0FBQ1YsUUFBUVcsR0FBRyxDQUFDO3dCQUFDLENBQUNDLEtBQUtDLE1BQU07eUNBQ3ZDLDhEQUFDQzs7MENBQ0MsOERBQUNDOztvQ0FBTUg7b0NBQUk7Ozs7Ozs7NEJBQVE7NEJBQUVDLE1BQU1HLFFBQVE7O3VCQUQ3Qko7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xCO0dBbEJNYjs7UUFHV0Ysa0RBQVNBOzs7S0FIcEJFOztBQW9CTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFsL1thbmltYWxJZF0udHN4P2NmOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvY2FyZERldGFpbHMvQ2FyZERldGFpbHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IEFuaW1hbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuXHJcbmNvbnN0IEFuaW1hbERldGFpbHM6IEZDPFByb3BzV2l0aENoaWxkcmVuPHsgYW5pbWFsOiBBbmltYWxzIH0+PiA9ICh7XHJcbiAgYW5pbWFsLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRldGFpbHNcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2lkfTwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMoYW5pbWFsKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxyXG4gICAgICAgICAgPHAga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICA8c3Bhbj57a2V5fTo8L3NwYW4+IHt2YWx1ZS50b1N0cmluZygpfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYWxEZXRhaWxzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzPHtcclxuICBhbmltYWw6IEFuaW1hbHM7XHJcbn0+ID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLmlkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKHBhcmFtcylcclxuXHJcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vc3RhcGkuY28vYXBpL3YxL3Jlc3QvYW5pbWFsL3NlYXJjaCc7XHJcbiAgY29uc29sZS5sb2coaWQpXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0/bmFtZT0ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHsgYW5pbWFsIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFuaW1hbCB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwiQW5pbWFsRGV0YWlscyIsImFuaW1hbCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJwIiwic3BhbiIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animal/[animalId].tsx\n"));

/***/ })

});