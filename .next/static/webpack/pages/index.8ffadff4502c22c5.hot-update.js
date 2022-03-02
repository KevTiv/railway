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

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ \"./animation/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var isMobileScreen = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext)();\n    var navElem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var previousScrollPosition;\n        var handleNavAnimation = function() {\n            if (isMobileScreen.current) {\n                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n                scrollTop > previousScrollPosition ? (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(true, navElem) : (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(false, navElem);\n                previousScrollPosition = scrollTop;\n            }\n        };\n        handleNavAnimation();\n        window.addEventListener('scroll', handleNavAnimation);\n        return function() {\n            window.removeEventListener('scroll', handleNavAnimation);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"navbar\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-[0] left-0 flex justify-between items-center min-h-[6rem] w-full border-b-4 border-gray-900 navAnimation bg-white dark:bg-black z-50 lg:top-[-5rem] lg:mx-auto\",\n                ref: navElem,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-around items-center w-full lg:fixed lg:flex-col lg:left-0 lg:top-[15vh] lg:w-[25vw] bg-red-50\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm\",\n                            children: \"Startups\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm\",\n                            children: \"Ideology\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm\",\n                            children: \"Method\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm\",\n                            children: \"Join Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Navbar, \"XA9XePQ8OuUPjKxgIvtsMhNL0EE=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNJO0FBQ007OztBQUVqRCxHQUFLLENBQUNJLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7O0lBQ2xCLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHRiw4REFBb0I7SUFDekMsR0FBRyxDQUFDRyxPQUFPLEdBQUdOLDZDQUFNLENBQUMsSUFBSTtJQUV6QkMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFHLENBQUNNLHNCQUFzQjtRQUUxQixHQUFLLENBQUNDLGtCQUFrQixHQUFHLFFBQ2pDLEdBRHFDLENBQUM7WUFFNUIsRUFBRSxFQUFDSCxjQUFjLENBQUNJLE9BQU8sRUFBQyxDQUFDO2dCQUN2QixHQUFHLENBQUNDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxXQUFXLElBQUlDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDSixTQUFTO2dCQUN4RUEsU0FBUyxHQUFHSCxzQkFBc0IsR0FBR0wsd0RBQVksQ0FBQyxJQUFJLEVBQUVJLE9BQU8sSUFBSUosd0RBQVksQ0FBQyxLQUFLLEVBQUVJLE9BQU87Z0JBRTlGQyxzQkFBc0IsR0FBR0csU0FBUztZQUN0QyxDQUFDO1FBQ0wsQ0FBQztRQUVERixrQkFBa0I7UUFDbEJHLE1BQU0sQ0FBQ0ksZ0JBQWdCLENBQUMsQ0FBUSxTQUFDUCxrQkFBa0I7UUFFbkQsTUFBTSxTQUNaLEdBRGdCLENBQUM7WUFDUEcsTUFBTSxDQUFDSyxtQkFBbUIsQ0FBQyxDQUFRLFNBQUNSLGtCQUFrQjtRQUMxRCxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLE1BQU07OEZBR0NTLENBQU87WUFBQ0MsRUFBRSxFQUFDLENBQVE7a0dBQ2ZDLENBQUc7Z0JBQ0FDLFNBQVMsRUFBQyxDQUVxQjtnQkFDL0JDLEdBQUcsRUFBRWYsT0FBTztzR0FFWGdCLENBQUU7b0JBQUNGLFNBQVMsRUFBQyxDQUE0Rzs7b0dBQ3JIRyxDQUFFOzRCQUFDSCxTQUFTLEVBQUMsQ0FBbUI7c0NBQUMsQ0FBUTs7Ozs7O29HQUN6Q0csQ0FBRTs0QkFBQ0gsU0FBUyxFQUFDLENBQW1CO3NDQUFDLENBQVE7Ozs7OztvR0FDekNHLENBQUU7NEJBQUNILFNBQVMsRUFBQyxDQUFtQjtzQ0FBQyxDQUFNOzs7Ozs7b0dBQ3ZDRyxDQUFFOzRCQUFDSCxTQUFTLEVBQUMsQ0FBbUI7c0NBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0QsQ0FBQztHQTVDS2hCLE1BQU07O1FBQ2FELDBEQUFvQjs7O0tBRHZDQyxNQUFNO0FBOENaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZBbmltYXRpb24gfSBmcm9tICcuLi9hbmltYXRpb24nXG5pbXBvcnQgeyB1c2VTY3JlZW5TaXplQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBsZXQgaXNNb2JpbGVTY3JlZW4gPSB1c2VTY3JlZW5TaXplQ29udGV4dCgpO1xuICAgIGxldCBuYXZFbGVtID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHByZXZpb3VzU2Nyb2xsUG9zaXRpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVOYXZBbmltYXRpb24gPSAoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihpc01vYmlsZVNjcmVlbi5jdXJyZW50KXtcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wID4gcHJldmlvdXNTY3JvbGxQb3NpdGlvbiA/IG5hdkFuaW1hdGlvbih0cnVlLCBuYXZFbGVtKSA6IG5hdkFuaW1hdGlvbihmYWxzZSwgbmF2RWxlbSk7XG5cbiAgICAgICAgICAgICAgICBwcmV2aW91c1Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlTmF2QW5pbWF0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGhhbmRsZU5hdkFuaW1hdGlvbik7XG5cbiAgICAgICAgcmV0dXJuKCk9PntcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLGhhbmRsZU5hdkFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFtdKVxuICByZXR1cm4gKFxuXG4gICAgPD5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxuYXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVswXSBsZWZ0LTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFxuICAgICAgICAgICAgICAgIG1pbi1oLVs2cmVtXSB3LWZ1bGwgYm9yZGVyLWItNCBib3JkZXItZ3JheS05MDAgbmF2QW5pbWF0aW9uIGJnLXdoaXRlIGRhcms6YmctYmxhY2tcbiAgICAgICAgICAgICAgICB6LTUwIGxnOnRvcC1bLTVyZW1dIGxnOm14LWF1dG9cIlxuICAgICAgICAgICAgICAgIHJlZj17bmF2RWxlbX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgdy1mdWxsIGxnOmZpeGVkIGxnOmZsZXgtY29sIGxnOmxlZnQtMCBsZzp0b3AtWzE1dmhdIGxnOnctWzI1dnddIGJnLXJlZC01MFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNSB3LTI0IHRleHQtc21cIj5TdGFydHVwczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC01IHctMjQgdGV4dC1zbVwiPklkZW9sb2d5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTUgdy0yNCB0ZXh0LXNtXCI+TWV0aG9kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTUgdy0yNCB0ZXh0LXNtXCI+Sm9pbiBVczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUVmZmVjdCIsIm5hdkFuaW1hdGlvbiIsInVzZVNjcmVlblNpemVDb250ZXh0IiwiTmF2YmFyIiwiaXNNb2JpbGVTY3JlZW4iLCJuYXZFbGVtIiwicHJldmlvdXNTY3JvbGxQb3NpdGlvbiIsImhhbmRsZU5hdkFuaW1hdGlvbiIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiaWQiLCJuYXYiLCJjbGFzc05hbWUiLCJyZWYiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});