/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/components/products/ProductContainer.tsx":
/*!******************************************************!*\
  !*** ./src/components/products/ProductContainer.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data/products */ \"(app-pages-browser)/./src/data/products.ts\");\n/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductGrid */ \"(app-pages-browser)/./src/components/products/ProductGrid.tsx\");\n/* harmony import */ var _ProductGrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProductGrid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProductToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductToolbar */ \"(app-pages-browser)/./src/components/products/ProductToolbar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProductContainer() {\n    _s();\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const filteredProducts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        return _data_products__WEBPACK_IMPORTED_MODULE_2__.products.filter((product)=>{\n            const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());\n            const matchesCategory = category === \"All\" || product.category === category;\n            return matchesSearch && matchesCategory;\n        });\n    }, [\n        search,\n        category\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"max-w-7xl mx-auto py-16 px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductToolbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                search: search,\n                setSearch: setSearch,\n                category: category,\n                setCategory: setCategory\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\project\\\\prj\\\\buildon\\\\src\\\\components\\\\products\\\\ProductContainer.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProductGrid__WEBPACK_IMPORTED_MODULE_3___default()), {\n                products: filteredProducts\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\project\\\\prj\\\\buildon\\\\src\\\\components\\\\products\\\\ProductContainer.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-6 text-sm text-gray-500\",\n                children: [\n                    \"Showing \",\n                    filteredProducts.length,\n                    \" of \",\n                    _data_products__WEBPACK_IMPORTED_MODULE_2__.products.length\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\project\\\\prj\\\\buildon\\\\src\\\\components\\\\products\\\\ProductContainer.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\project\\\\prj\\\\buildon\\\\src\\\\components\\\\products\\\\ProductContainer.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductContainer, \"Kyly2F/8lvSfDmKTUGSKmlxtz4I=\");\n_c = ProductContainer;\nvar _c;\n$RefreshReg$(_c, \"ProductContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDRTtBQUNIO0FBQ087QUFFaEMsU0FBU0s7O0lBQ3BCLE1BQU0sQ0FBQ0MsUUFBT0MsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLENBQUNRLFVBQVNDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDeEMsTUFBTVUsbUJBQW1CVCw4Q0FBT0EsQ0FBQztRQUM3QixPQUFPQyxvREFBUUEsQ0FBQ1MsTUFBTSxDQUFDLENBQUNDO1lBQ3BCLE1BQU1DLGdCQUFnQkQsUUFBUUUsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ1YsT0FBT1MsV0FBVyxPQUMxRUgsUUFBUUssV0FBVyxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ1YsT0FBT1MsV0FBVztZQUVoRSxNQUFNRyxrQkFBa0JWLGFBQWEsU0FBU0ksUUFBUUosUUFBUSxLQUFLQTtZQUNuRSxPQUFPSyxpQkFBaUJLO1FBQzVCO0lBQ0osR0FBRTtRQUFDWjtRQUFPRTtLQUFTO0lBRW5CLHFCQUNJLDhEQUFDVztRQUFRQyxXQUFVOzswQkFDZiw4REFBQ2hCLHVEQUFlQTtnQkFDaEJFLFFBQVVBO2dCQUNWQyxXQUFhQTtnQkFDYkMsVUFBWUE7Z0JBQ1pDLGFBQWVBOzs7Ozs7MEJBRWYsOERBQUNOLHFEQUFXQTtnQkFBQ0QsVUFBVVE7Ozs7OzswQkFDdkIsOERBQUNXO2dCQUFFRCxXQUFVOztvQkFBNkI7b0JBQVNWLGlCQUFpQlksTUFBTTtvQkFBQztvQkFBS3BCLG9EQUFRQSxDQUFDb0IsTUFBTTs7Ozs7Ozs7Ozs7OztBQUczRztHQXpCd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q29udGFpbmVyLnRzeD81YzJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIkAvZGF0YS9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgUHJvZHVjdEdyaWQgZnJvbSBcIi4vUHJvZHVjdEdyaWRcIjtcclxuaW1wb3J0IFByb2R1Y3RzVG9vbGJhciBmcm9tIFwiLi9Qcm9kdWN0VG9vbGJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgW3NlYXJjaCxzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnksc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXCJBbGxcIik7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gdXNlTWVtbygoKT0+e1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXNTZWFyY2ggPSBwcm9kdWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgIHx8IHByb2R1Y3QuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzQ2F0ZWdvcnkgPSBjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBwcm9kdWN0LmNhdGVnb3J5ID09PSBjYXRlZ29yeTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNTZWFyY2ggJiYgbWF0Y2hlc0NhdGVnb3J5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxbc2VhcmNoLGNhdGVnb3J5XSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBweS0xNiBweC02XCI+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0c1Rvb2xiYXIgXHJcbiAgICAgICAgICAgIHNlYXJjaCA9IHtzZWFyY2h9XHJcbiAgICAgICAgICAgIHNldFNlYXJjaCA9IHtzZXRTZWFyY2h9XHJcbiAgICAgICAgICAgIGNhdGVnb3J5ID0ge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICBzZXRDYXRlZ29yeSA9IHtzZXRDYXRlZ29yeX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByb2R1Y3RHcmlkIHByb2R1Y3RzPXtmaWx0ZXJlZFByb2R1Y3RzfSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlNob3dpbmcge2ZpbHRlcmVkUHJvZHVjdHMubGVuZ3RofSBvZiB7cHJvZHVjdHMubGVuZ3RofTwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNZW1vIiwicHJvZHVjdHMiLCJQcm9kdWN0R3JpZCIsIlByb2R1Y3RzVG9vbGJhciIsIlByb2R1Y3RDb250YWluZXIiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlciIsInByb2R1Y3QiLCJtYXRjaGVzU2VhcmNoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZGVzY3JpcHRpb24iLCJtYXRjaGVzQ2F0ZWdvcnkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/products/ProductContainer.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/products/ProductGrid.tsx":
/*!*************************************************!*\
  !*** ./src/components/products/ProductGrid.tsx ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});