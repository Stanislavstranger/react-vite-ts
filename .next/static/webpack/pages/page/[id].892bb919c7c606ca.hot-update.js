"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page/[id]",{

/***/ "./src/components/UI/cardList/CardList.tsx":
/*!*************************************************!*\
  !*** ./src/components/UI/cardList/CardList.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/Card */ \"./src/components/UI/card/Card.tsx\");\n/* harmony import */ var _pageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pageNotFound/PageNotFound */ \"./src/components/UI/pageNotFound/PageNotFound.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CardList = (param)=>{\n    let { animals } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleCardClick = (animalId)=>{\n        router.push(\"/animal/\".concat(animalId));\n    };\n    if (!animals) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\cardList\\\\CardList.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, undefined);\n    }\n    console.log(animals);\n    if (animals.length === 0) {\n        return setTimeout(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pageNotFound_PageNotFound__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\cardList\\\\CardList.tsx\",\n                lineNumber: 23,\n                columnNumber: 29\n            }, undefined), 500);\n    }\n    return animals.map((result)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            animal: result,\n            onClick: ()=>handleCardClick(result.name)\n        }, result.uid, false, {\n            fileName: \"D:\\\\RS-School\\\\react-vite-ts\\\\src\\\\components\\\\UI\\\\cardList\\\\CardList.tsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, undefined));\n};\n_s(CardList, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CardList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardList);\nvar _c;\n$RefreshReg$(_c, \"CardList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9jYXJkTGlzdC9DYXJkTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWdDO0FBQ29CO0FBQ1o7QUFFeEMsTUFBTUcsV0FBMEQ7UUFBQyxFQUMvREMsT0FBTyxFQUNSOztJQUNDLE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxrQkFBa0IsQ0FBQ0M7UUFDdkJGLE9BQU9HLElBQUksQ0FBQyxXQUFvQixPQUFURDtJQUN6QjtJQUVBLElBQUksQ0FBQ0gsU0FBUztRQUNaLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2Q7SUFFQUMsUUFBUUMsR0FBRyxDQUFDUDtJQUVaLElBQUlBLFFBQVFRLE1BQU0sS0FBSyxHQUFHO1FBQ3hCLE9BQU9DLFdBQVcsa0JBQU0sOERBQUNaLGtFQUFRQTs7OzsyQkFBSztJQUN4QztJQUVBLE9BQU9HLFFBQVFVLEdBQUcsQ0FBQyxDQUFDQyx1QkFDbEIsOERBQUNmLGtEQUFJQTtZQUNIZ0IsUUFBUUQ7WUFFUkUsU0FBUyxJQUFNWCxnQkFBZ0JTLE9BQU9HLElBQUk7V0FEckNILE9BQU9JLEdBQUc7Ozs7O0FBSXJCO0dBMUJNaEI7O1FBR1dELGtEQUFTQTs7O0tBSHBCQztBQTRCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VSS9jYXJkTGlzdC9DYXJkTGlzdC50c3g/ZGFkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFuaW1hbHMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jYXJkL0NhcmQnO1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vcGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IENhcmRMaXN0OiBGQzxQcm9wc1dpdGhDaGlsZHJlbjx7IGFuaW1hbHM6IEFuaW1hbHNbXSB9Pj4gPSAoe1xyXG4gIGFuaW1hbHMsXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKGFuaW1hbElkOiBzdHJpbmcpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvYW5pbWFsLyR7YW5pbWFsSWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFhbmltYWxzKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coYW5pbWFscyk7XHJcblxyXG4gIGlmIChhbmltYWxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4gPE5vdEZvdW5kIC8+LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFuaW1hbHMubWFwKChyZXN1bHQpID0+IChcclxuICAgIDxDYXJkXHJcbiAgICAgIGFuaW1hbD17cmVzdWx0fVxyXG4gICAgICBrZXk9e3Jlc3VsdC51aWR9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNhcmRDbGljayhyZXN1bHQubmFtZSl9XHJcbiAgICA+PC9DYXJkPlxyXG4gICkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJDYXJkIiwiTm90Rm91bmQiLCJ1c2VSb3V0ZXIiLCJDYXJkTGlzdCIsImFuaW1hbHMiLCJyb3V0ZXIiLCJoYW5kbGVDYXJkQ2xpY2siLCJhbmltYWxJZCIsInB1c2giLCJkaXYiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIm1hcCIsInJlc3VsdCIsImFuaW1hbCIsIm9uQ2xpY2siLCJuYW1lIiwidWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/cardList/CardList.tsx\n"));

/***/ })

});