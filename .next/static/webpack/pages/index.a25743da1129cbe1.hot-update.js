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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ \"./animation/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var isMobileScreen = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext)();\n    var navElemRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var startUpsElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ideologyElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var methodElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var joinUsElemArrowRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var previousScrollPosition;\n        var handleNavAnimation = function() {\n            if (isMobileScreen.current) {\n                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n                scrollTop > previousScrollPosition ? (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(true, navElemRef) : (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(false, navElemRef);\n                previousScrollPosition = scrollTop;\n            }\n        };\n        console.log(isMobileScreen);\n        handleNavAnimation();\n        window.addEventListener('scroll', handleNavAnimation);\n        return function() {\n            window.removeEventListener('scroll', handleNavAnimation);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"navbar\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-[0] left-0 flex justify-between items-center min-h-[6rem] w-full border-b-4 border-gray-900 navAnimation bg-white dark:bg-black z-50 lg:top-[-5rem] lg:mx-auto\",\n                ref: navElemRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-around items-center w-full px-5 lg:fixed lg:flex-col lg:left-0 lg:top-[35vh] lg:w-[25vw] lg:h-[20vh] lg:items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-center h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4 overflow-hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: startUpsElemArrowRef,\n                                className: \"w-full \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative lg:inline-block my-auto w-1/4 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_startups_arrow))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-3/4 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                        children: \"Startups\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-center h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4 overflow-hidden\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, ideologyElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, ideologyElemArrowRef);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: ideologyElemArrowRef,\n                                className: \"w-full lg:-translate-x-1/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative lg:inline-block my-auto w-1/4 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_ideology_arrow))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-3/4\",\n                                        children: \"Ideology\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-center h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4 overflow-hidden\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, methodElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, methodElemArrowRef);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: methodElemArrowRef,\n                                className: \"w-full lg:-translate-x-1/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative lg:inline-block my-auto w-1/4 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_method_arrow))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-3/4\",\n                                        children: \"Method\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex justify-center h-fit text-sm lg:text-3xl lg:w-40 lg:ml-4 overflow-hidden\",\n                            onMouseEnter: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(true, isMobileScreen.current, startUpsElemArrowRef, joinUsElemArrowRef);\n                            },\n                            onMouseLeave: function() {\n                                return (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navArrowAnimation)(false, isMobileScreen.current, startUpsElemArrowRef, joinUsElemArrowRef);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: joinUsElemArrowRef,\n                                className: \"w-full lg:-translate-x-1/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative lg:inline-block my-auto w-1/4 h-1/2 before:bg-blue-600 dark:before:bg-orange-600 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_join_us_arrow))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-3/4\",\n                                        children: \"Join Us\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Navbar, \"+slbLoYoOipqxE68/7B+pVr4/bA=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UTdELENBQUM7R0F0RUt0QixNQUFNOztRQUNhRiwwREFBb0I7OztLQUR2Q0UsTUFBTTtBQXdFWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcz81YjVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2QW5pbWF0aW9uLCBuYXZBcnJvd0FuaW1hdGlvbiB9IGZyb20gJy4uL2FuaW1hdGlvbidcbmltcG9ydCB7IHVzZVNjcmVlblNpemVDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgICBsZXQgaXNNb2JpbGVTY3JlZW4gPSB1c2VTY3JlZW5TaXplQ29udGV4dCgpO1xuICAgIGxldCBuYXZFbGVtUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGxldCBzdGFydFVwc0VsZW1BcnJvd1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgaWRlb2xvZ3lFbGVtQXJyb3dSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgbGV0IG1ldGhvZEVsZW1BcnJvd1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBsZXQgam9pblVzRWxlbUFycm93UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHByZXZpb3VzU2Nyb2xsUG9zaXRpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVOYXZBbmltYXRpb24gPSAoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihpc01vYmlsZVNjcmVlbi5jdXJyZW50KXtcbiAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wID4gcHJldmlvdXNTY3JvbGxQb3NpdGlvbiA/IG5hdkFuaW1hdGlvbih0cnVlLCBuYXZFbGVtUmVmKSA6IG5hdkFuaW1hdGlvbihmYWxzZSwgbmF2RWxlbVJlZik7XG5cbiAgICAgICAgICAgICAgICBwcmV2aW91c1Njcm9sbFBvc2l0aW9uID0gc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGlzTW9iaWxlU2NyZWVuKTtcbiAgICAgICAgaGFuZGxlTmF2QW5pbWF0aW9uKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLGhhbmRsZU5hdkFuaW1hdGlvbik7XG5cbiAgICAgICAgcmV0dXJuKCk9PntcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLGhhbmRsZU5hdkFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFtdKVxuICByZXR1cm4gKFxuXG4gICAgPD5cbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxuYXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLVswXSBsZWZ0LTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFxuICAgICAgICAgICAgICAgIG1pbi1oLVs2cmVtXSB3LWZ1bGwgYm9yZGVyLWItNCBib3JkZXItZ3JheS05MDAgbmF2QW5pbWF0aW9uIGJnLXdoaXRlIGRhcms6YmctYmxhY2tcbiAgICAgICAgICAgICAgICB6LTUwIGxnOnRvcC1bLTVyZW1dIGxnOm14LWF1dG9cIlxuICAgICAgICAgICAgICAgIHJlZj17bmF2RWxlbVJlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB4LTUgbGc6Zml4ZWQgbGc6ZmxleC1jb2wgbGc6bGVmdC0wIGxnOnRvcC1bMzV2aF0gbGc6dy1bMjV2d11cbiAgICAgICAgICAgICAgICAgICAgbGc6aC1bMjB2aF0gbGc6aXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC1maXQgdGV4dC1zbSBsZzp0ZXh0LTN4bCBsZzp3LTQwIGxnOm1sLTQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e3N0YXJ0VXBzRWxlbUFycm93UmVmfSBjbGFzc05hbWU9XCJ3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcmVsYXRpdmUgbGc6aW5saW5lLWJsb2NrIG15LWF1dG8gdy0xLzQgaC0xLzIgYmVmb3JlOmJnLWJsdWUtNjAwIGRhcms6YmVmb3JlOmJnLW9yYW5nZS02MDAgJHtzdHlsZXMubmF2X3N0YXJ0dXBzX2Fycm93fWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTMvNCAke3N0eWxlcy5zZWxlY3RlZH1gfT5TdGFydHVwczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC1maXQgdGV4dC1zbSBsZzp0ZXh0LTN4bCBsZzp3LTQwIGxnOm1sLTQgb3ZlcmZsb3ctaGlkZGVuXCIgb25Nb3VzZUVudGVyPXsoKT0+bmF2QXJyb3dBbmltYXRpb24odHJ1ZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIGlkZW9sb2d5RWxlbUFycm93UmVmKX0gb25Nb3VzZUxlYXZlPXsoKT0+bmF2QXJyb3dBbmltYXRpb24oZmFsc2UsIGlzTW9iaWxlU2NyZWVuLmN1cnJlbnQsIHN0YXJ0VXBzRWxlbUFycm93UmVmLCBpZGVvbG9neUVsZW1BcnJvd1JlZil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPXtpZGVvbG9neUVsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGxnOi10cmFuc2xhdGUteC0xLzRcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcmVsYXRpdmUgbGc6aW5saW5lLWJsb2NrIG15LWF1dG8gdy0xLzQgaC0xLzIgYmVmb3JlOmJnLWJsdWUtNjAwIGRhcms6YmVmb3JlOmJnLW9yYW5nZS02MDAgJHtzdHlsZXMubmF2X2lkZW9sb2d5X2Fycm93fWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTMvNGB9PklkZW9sb2d5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC1maXQgdGV4dC1zbSBsZzp0ZXh0LTN4bCBsZzp3LTQwIGxnOm1sLTQgb3ZlcmZsb3ctaGlkZGVuXCIgb25Nb3VzZUVudGVyPXsoKT0+bmF2QXJyb3dBbmltYXRpb24odHJ1ZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIG1ldGhvZEVsZW1BcnJvd1JlZil9IG9uTW91c2VMZWF2ZT17KCk9Pm5hdkFycm93QW5pbWF0aW9uKGZhbHNlLCBpc01vYmlsZVNjcmVlbi5jdXJyZW50LCBzdGFydFVwc0VsZW1BcnJvd1JlZiwgbWV0aG9kRWxlbUFycm93UmVmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e21ldGhvZEVsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGxnOi10cmFuc2xhdGUteC0xLzRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBsZzppbmxpbmUtYmxvY2sgbXktYXV0byB3LTEvNCBoLTEvMiBiZWZvcmU6YmctYmx1ZS02MDAgZGFyazpiZWZvcmU6Ymctb3JhbmdlLTYwMCAke3N0eWxlcy5uYXZfbWV0aG9kX2Fycm93fWB9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTMvNGB9Pk1ldGhvZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC1maXQgdGV4dC1zbSBsZzp0ZXh0LTN4bCBsZzp3LTQwIGxnOm1sLTQgb3ZlcmZsb3ctaGlkZGVuXCIgb25Nb3VzZUVudGVyPXsoKT0+bmF2QXJyb3dBbmltYXRpb24odHJ1ZSwgaXNNb2JpbGVTY3JlZW4uY3VycmVudCwgc3RhcnRVcHNFbGVtQXJyb3dSZWYsIGpvaW5Vc0VsZW1BcnJvd1JlZil9IG9uTW91c2VMZWF2ZT17KCk9Pm5hdkFycm93QW5pbWF0aW9uKGZhbHNlLCBpc01vYmlsZVNjcmVlbi5jdXJyZW50LCBzdGFydFVwc0VsZW1BcnJvd1JlZiwgam9pblVzRWxlbUFycm93UmVmKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByZWY9e2pvaW5Vc0VsZW1BcnJvd1JlZn0gY2xhc3NOYW1lPVwidy1mdWxsIGxnOi10cmFuc2xhdGUteC0xLzRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBsZzppbmxpbmUtYmxvY2sgbXktYXV0byB3LTEvNCBoLTEvMiBiZWZvcmU6YmctYmx1ZS02MDAgZGFyazpiZWZvcmU6Ymctb3JhbmdlLTYwMCAke3N0eWxlcy5uYXZfam9pbl91c19hcnJvd31gfT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdy0zLzRgfT5Kb2luIFVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJuYXZBbmltYXRpb24iLCJuYXZBcnJvd0FuaW1hdGlvbiIsInVzZVNjcmVlblNpemVDb250ZXh0Iiwic3R5bGVzIiwiTmF2YmFyIiwiaXNNb2JpbGVTY3JlZW4iLCJuYXZFbGVtUmVmIiwic3RhcnRVcHNFbGVtQXJyb3dSZWYiLCJpZGVvbG9neUVsZW1BcnJvd1JlZiIsIm1ldGhvZEVsZW1BcnJvd1JlZiIsImpvaW5Vc0VsZW1BcnJvd1JlZiIsInByZXZpb3VzU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVOYXZBbmltYXRpb24iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJpZCIsIm5hdiIsImNsYXNzTmFtZSIsInJlZiIsInVsIiwibGkiLCJzcGFuIiwibmF2X3N0YXJ0dXBzX2Fycm93Iiwic2VsZWN0ZWQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJuYXZfaWRlb2xvZ3lfYXJyb3ciLCJuYXZfbWV0aG9kX2Fycm93IiwibmF2X2pvaW5fdXNfYXJyb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});