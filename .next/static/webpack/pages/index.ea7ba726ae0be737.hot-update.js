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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ \"./animation/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var isMobileScreen = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext)();\n    var navElemRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startUpsElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ideologyElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var methodElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var joinUsElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var previousScrollPosition;\n        var handleNavAnimation = function() {\n            if (isMobileScreen.current) {\n                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n                scrollTop > previousScrollPosition ? (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(true, navElemRef) : (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(false, navElemRef);\n                previousScrollPosition = scrollTop;\n            }\n        };\n        console.log(isMobileScreen);\n        handleNavAnimation();\n        window.addEventListener('scroll', handleNavAnimation);\n        return function() {\n            window.removeEventListener('scroll', handleNavAnimation);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"navbar\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-[0] left-0 flex justify-between items-center min-h-[6rem] w-full border-b-4 border-gray-900 navAnimation bg-white dark:bg-black z-50 lg:top-[-5rem] lg:mx-auto\",\n                ref: navElemRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-around items-center w-full px-5 lg:fixed lg:flex-col lg:left-0 lg:top-[35vh] lg:w-[25vw] lg:h-[20vh] lg:items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: startUpsElemArrowRef,\n                                    className: \"relative inline-block my-auto w-1/4 h-1/2 translate-x-1/4 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_startups_arrow))\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-3/4 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                    children: \"Startups\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, ideologyElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, ideologyElemArrowRef);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: ideologyElemArrowRef,\n                                    className: \"relative inline-block my-auto w-1/4 h-1/2 translate-x-1/4 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_ideology_arrow))\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-3/4\",\n                                    children: \"Ideology\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, methodElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, methodElemArrowRef);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: methodElemArrowRef,\n                                    className: \"relative inline-block my-auto w-1/4 h-1/2 translate-x-1/4 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_method_arrow))\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-3/4\",\n                                    children: \"Method\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, joinUsElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, joinUsElemArrowRef);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    ref: joinUsElemArrowRef,\n                                    className: \"relative inline-block my-auto w-1/4 h-1/2 translate-x-1/4 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_join_us_arrow))\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"w-3/4\",\n                                    children: \"Join Us\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Navbar, \"+slbLoYoOipqxE68/7B+pVr4/bA=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxJQUFJLEVBQUVJLGNBQWMsQ0FBQ1EsT0FBTyxFQUFFTixvQkFBb0IsRUFBRUUsa0JBQWtCOzs0QkFBR3lCLFlBQVksRUFBRSxRQUFRO2dDQUFKakMsTUFBTSxDQUFOQSw2REFBaUIsQ0FBQyxLQUFLLEVBQUVJLGNBQWMsQ0FBQ1EsT0FBTyxFQUFFTixvQkFBb0IsRUFBRUUsa0JBQWtCOzs7NEdBQ2xScUIsQ0FBSTtvQ0FBQ0gsR0FBRyxFQUFFbEIsa0JBQWtCO29DQUFFaUIsU0FBUyxFQUFHLENBQXVHLHlHQUEwQixPQUF4QnZCLGtGQUF1Qjs7Ozs7OzRHQUMxSzJCLENBQUk7b0NBQUNKLFNBQVMsRUFBRyxDQUFLOzhDQUFHLENBQU07Ozs7Ozs7Ozs7OztvR0FFbkNHLENBQUU7NEJBQUNILFNBQVMsRUFBQyxDQUFnRDs0QkFBQ08sWUFBWSxFQUFFLFFBQVE7Z0NBQUpoQyxNQUFNLENBQU5BLDZEQUFpQixDQUFDLElBQUksRUFBRUksY0FBYyxDQUFDUSxPQUFPLEVBQUVOLG9CQUFvQixFQUFFRyxrQkFBa0I7OzRCQUFHd0IsWUFBWSxFQUFFLFFBQVE7Z0NBQUpqQyxNQUFNLENBQU5BLDZEQUFpQixDQUFDLEtBQUssRUFBRUksY0FBYyxDQUFDUSxPQUFPLEVBQUVOLG9CQUFvQixFQUFFRyxrQkFBa0I7Ozs0R0FDbFJvQixDQUFJO29DQUFDSCxHQUFHLEVBQUVqQixrQkFBa0I7b0NBQUVnQixTQUFTLEVBQUcsQ0FBdUcseUdBQTJCLE9BQXpCdkIsbUZBQXdCOzs7Ozs7NEdBQzNLMkIsQ0FBSTtvQ0FBQ0osU0FBUyxFQUFHLENBQUs7OENBQUcsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekQsQ0FBQztHQTdES3RCLE1BQU07O1FBQ2FGLDBEQUFvQjs7O0tBRHZDRSxNQUFNO0FBK0RaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZBbmltYXRpb24sIG5hdkFycm93QW5pbWF0aW9uIH0gZnJvbSAnLi4vYW5pbWF0aW9uJ1xuaW1wb3J0IHsgdXNlU2NyZWVuU2l6ZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICAgIGxldCBpc01vYmlsZVNjcmVlbiA9IHVzZVNjcmVlblNpemVDb250ZXh0KCk7XG4gICAgbGV0IG5hdkVsZW1SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgbGV0IHN0YXJ0VXBzRWxlbUFycm93UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGxldCBpZGVvbG9neUVsZW1BcnJvd1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgbWV0aG9kRWxlbUFycm93UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGxldCBqb2luVXNFbGVtQXJyb3dSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgcHJldmlvdXNTY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZU5hdkFuaW1hdGlvbiA9ICgpPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGlzTW9iaWxlU2NyZWVuLmN1cnJlbnQpe1xuICAgICAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPiBwcmV2aW91c1Njcm9sbFBvc2l0aW9uID8gbmF2QW5pbWF0aW9uKHRydWUsIG5hdkVsZW1SZWYpIDogbmF2QW5pbWF0aW9uKGZhbHNlLCBuYXZFbGVtUmVmKTtcblxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coaXNNb2JpbGVTY3JlZW4pO1xuICAgICAgICBoYW5kbGVOYXZBbmltYXRpb24oKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsaGFuZGxlTmF2QW5pbWF0aW9uKTtcblxuICAgICAgICByZXR1cm4oKT0+e1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsaGFuZGxlTmF2QW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0sW10pXG4gIHJldHVybiAoXG5cbiAgICA8PlxuICAgICAgICA8c2VjdGlvbiBpZD1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPG5hdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtWzBdIGxlZnQtMCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXG4gICAgICAgICAgICAgICAgbWluLWgtWzZyZW1dIHctZnVsbCBib3JkZXItYi00IGJvcmRlci1ncmF5LTkwMCBuYXZBbmltYXRpb24gYmctd2hpdGUgZGFyazpiZy1ibGFja1xuICAgICAgICAgICAgICAgIHotNTAgbGc6dG9wLVstNXJlbV0gbGc6bXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgcmVmPXtuYXZFbGVtUmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtNSBsZzpmaXhlZCBsZzpmbGV4LWNvbCBsZzpsZWZ0LTAgbGc6dG9wLVszNXZoXSBsZzp3LVsyNXZ3XVxuICAgICAgICAgICAgICAgICAgICBsZzpoLVsyMHZoXSBsZzppdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBoLWZpdCB0ZXh0LXNtIGxnOnRleHQtM3hsIGxnOnctNDAgbGc6bWwtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXtzdGFydFVwc0VsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPXtgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG15LWF1dG8gdy0xLzQgaC0xLzIgdHJhbnNsYXRlLXgtMS80IGJlZm9yZTpiZy1ibHVlLTYwMCBkYXJrOmJlZm9yZTpiZy1vcmFuZ2UtNjAwICR7c3R5bGVzLm5hdl9zdGFydHVwc19hcnJvd31gfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTMvNCAke3N0eWxlcy5zZWxlY3RlZH1gfT5TdGFydHVwczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggaC1maXQgdGV4dC1zbSBsZzp0ZXh0LTN4bCBsZzp3LTQwIGxnOm1sLTRcIiBvbk1vdXNlRW50ZXI9eygpPT5uYXZBcnJvd0FuaW1hdGlvbih0cnVlLCBpc01vYmlsZVNjcmVlbi5jdXJyZW50LCBzdGFydFVwc0VsZW1BcnJvd1JlZiwgaWRlb2xvZ3lFbGVtQXJyb3dSZWYpfSBvbk1vdXNlTGVhdmU9eygpPT5uYXZBcnJvd0FuaW1hdGlvbihmYWxzZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIGlkZW9sb2d5RWxlbUFycm93UmVmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2lkZW9sb2d5RWxlbUFycm93UmVmfSBjbGFzc05hbWU9e2ByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgbXktYXV0byB3LTEvNCBoLTEvMiB0cmFuc2xhdGUteC0xLzQgYmVmb3JlOmJnLWJsdWUtNjAwIGRhcms6YmVmb3JlOmJnLW9yYW5nZS02MDAgJHtzdHlsZXMubmF2X2lkZW9sb2d5X2Fycm93fWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHctMy80YH0+SWRlb2xvZ3k8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGgtZml0IHRleHQtc20gbGc6dGV4dC0zeGwgbGc6dy00MCBsZzptbC00XCIgb25Nb3VzZUVudGVyPXsoKT0+bmF2QXJyb3dBbmltYXRpb24odHJ1ZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIG1ldGhvZEVsZW1BcnJvd1JlZil9IG9uTW91c2VMZWF2ZT17KCk9Pm5hdkFycm93QW5pbWF0aW9uKGZhbHNlLCBpc01vYmlsZVNjcmVlbi5jdXJyZW50LCBzdGFydFVwc0VsZW1BcnJvd1JlZiwgbWV0aG9kRWxlbUFycm93UmVmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e21ldGhvZEVsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPXtgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG15LWF1dG8gdy0xLzQgaC0xLzIgdHJhbnNsYXRlLXgtMS80IGJlZm9yZTpiZy1ibHVlLTYwMCBkYXJrOmJlZm9yZTpiZy1vcmFuZ2UtNjAwICR7c3R5bGVzLm5hdl9tZXRob2RfYXJyb3d9YH0+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdy0zLzRgfT5NZXRob2Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGgtZml0IHRleHQtc20gbGc6dGV4dC0zeGwgbGc6dy00MCBsZzptbC00XCIgb25Nb3VzZUVudGVyPXsoKT0+bmF2QXJyb3dBbmltYXRpb24odHJ1ZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIGpvaW5Vc0VsZW1BcnJvd1JlZil9IG9uTW91c2VMZWF2ZT17KCk9Pm5hdkFycm93QW5pbWF0aW9uKGZhbHNlLCBpc01vYmlsZVNjcmVlbi5jdXJyZW50LCBzdGFydFVwc0VsZW1BcnJvd1JlZiwgam9pblVzRWxlbUFycm93UmVmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2pvaW5Vc0VsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPXtgcmVsYXRpdmUgaW5saW5lLWJsb2NrIG15LWF1dG8gdy0xLzQgaC0xLzIgdHJhbnNsYXRlLXgtMS80IGJlZm9yZTpiZy1ibHVlLTYwMCBkYXJrOmJlZm9yZTpiZy1vcmFuZ2UtNjAwICR7c3R5bGVzLm5hdl9qb2luX3VzX2Fycm93fWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHctMy80YH0+Sm9pbiBVczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRWZmZWN0IiwibmF2QW5pbWF0aW9uIiwibmF2QXJyb3dBbmltYXRpb24iLCJ1c2VTY3JlZW5TaXplQ29udGV4dCIsInN0eWxlcyIsIk5hdmJhciIsImlzTW9iaWxlU2NyZWVuIiwibmF2RWxlbVJlZiIsInN0YXJ0VXBzRWxlbUFycm93UmVmIiwiaWRlb2xvZ3lFbGVtQXJyb3dSZWYiLCJtZXRob2RFbGVtQXJyb3dSZWYiLCJqb2luVXNFbGVtQXJyb3dSZWYiLCJwcmV2aW91c1Njcm9sbFBvc2l0aW9uIiwiaGFuZGxlTmF2QW5pbWF0aW9uIiwiY3VycmVudCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiaWQiLCJuYXYiLCJjbGFzc05hbWUiLCJyZWYiLCJ1bCIsImxpIiwic3BhbiIsIm5hdl9zdGFydHVwc19hcnJvdyIsInNlbGVjdGVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwibmF2X2lkZW9sb2d5X2Fycm93IiwibmF2X21ldGhvZF9hcnJvdyIsIm5hdl9qb2luX3VzX2Fycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});