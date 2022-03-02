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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation */ \"./animation/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    _s();\n    var isMobileScreen = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext)();\n    var navElem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var previousScrollPosition;\n        var handleNavAnimation = function() {\n            if (isMobileScreen.current) {\n                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n                scrollTop > previousScrollPosition ? (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(true, navElem) : (0,_animation__WEBPACK_IMPORTED_MODULE_2__.navAnimation)(false, navElem);\n                previousScrollPosition = scrollTop;\n            }\n        };\n        handleNavAnimation();\n        window.addEventListener('scroll', handleNavAnimation);\n        return function() {\n            window.removeEventListener('scroll', handleNavAnimation);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            id: \"navbar\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed top-[0] left-0 flex justify-between items-center min-h-[6rem] w-full border-b-4 border-gray-900 navAnimation bg-white dark:bg-black z-50 lg:top-[-5rem] lg:mx-auto\",\n                ref: navElem,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex justify-around items-center w-full lg:fixed lg:flex-col lg:left-0 lg:top-[35vh] lg:w-[25vw] lg:h-[20vh] lg:items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm lg:text-3xl lg:w-44 lg:ml-4 \".concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().selected), \" \").concat((_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().nav_startups_arrow)),\n                            children: \"Startups\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm lg:text-3xl lg:w-44 lg:ml-4\",\n                            children: \"Ideology\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm lg:text-3xl lg:w-44 lg:ml-4\",\n                            children: \"Method\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"px-5 w-24 text-sm lg:text-3xl lg:w-44 lg:ml-4\",\n                            children: \"Join Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/components/navbar.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false));\n};\n_s(Navbar, \"XA9XePQ8OuUPjKxgIvtsMhNL0EE=\", false, function() {\n    return [\n        _context__WEBPACK_IMPORTED_MODULE_3__.useScreenSizeContext\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVDO0FBQ0k7QUFDTTtBQUNGOzs7QUFFL0MsR0FBSyxDQUFDSyxNQUFNLEdBQUcsUUFDZixHQURxQixDQUFDOztJQUNsQixHQUFHLENBQUNDLGNBQWMsR0FBR0gsOERBQW9CO0lBQ3pDLEdBQUcsQ0FBQ0ksT0FBTyxHQUFHUCw2Q0FBTSxDQUFDLElBQUk7SUFFekJDLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsR0FBRyxDQUFDTyxzQkFBc0I7UUFFMUIsR0FBSyxDQUFDQyxrQkFBa0IsR0FBRyxRQUNqQyxHQURxQyxDQUFDO1lBRTVCLEVBQUUsRUFBQ0gsY0FBYyxDQUFDSSxPQUFPLEVBQUMsQ0FBQztnQkFDdkIsR0FBRyxDQUFDQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxJQUFJQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0osU0FBUztnQkFDeEVBLFNBQVMsR0FBR0gsc0JBQXNCLEdBQUdOLHdEQUFZLENBQUMsSUFBSSxFQUFFSyxPQUFPLElBQUlMLHdEQUFZLENBQUMsS0FBSyxFQUFFSyxPQUFPO2dCQUU5RkMsc0JBQXNCLEdBQUdHLFNBQVM7WUFDdEMsQ0FBQztRQUNMLENBQUM7UUFFREYsa0JBQWtCO1FBQ2xCRyxNQUFNLENBQUNJLGdCQUFnQixDQUFDLENBQVEsU0FBQ1Asa0JBQWtCO1FBRW5ELE1BQU0sU0FDWixHQURnQixDQUFDO1lBQ1BHLE1BQU0sQ0FBQ0ssbUJBQW1CLENBQUMsQ0FBUSxTQUFDUixrQkFBa0I7UUFDMUQsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixNQUFNOzhGQUdDUyxDQUFPO1lBQUNDLEVBQUUsRUFBQyxDQUFRO2tHQUNmQyxDQUFHO2dCQUNBQyxTQUFTLEVBQUMsQ0FFcUI7Z0JBQy9CQyxHQUFHLEVBQUVmLE9BQU87c0dBRVhnQixDQUFFO29CQUFDRixTQUFTLEVBQUMsQ0FDaUI7O29HQUMxQkcsQ0FBRTs0QkFBQ0gsU0FBUyxFQUFHLENBQThDLGdEQUFxQmpCLE1BQXlCLENBQTVDQSwwRUFBZSxFQUFDLENBQUMsSUFBNEIsT0FBMUJBLG9GQUF5QjtzQ0FBSSxDQUFROzs7Ozs7b0dBQ3ZIb0IsQ0FBRTs0QkFBQ0gsU0FBUyxFQUFHLENBQTZDO3NDQUFHLENBQVE7Ozs7OztvR0FDdkVHLENBQUU7NEJBQUNILFNBQVMsRUFBRyxDQUE2QztzQ0FBRyxDQUFNOzs7Ozs7b0dBQ3JFRyxDQUFFOzRCQUFDSCxTQUFTLEVBQUcsQ0FBNkM7c0NBQUcsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0YsQ0FBQztHQTdDS2hCLE1BQU07O1FBQ2FGLDBEQUFvQjs7O0tBRHZDRSxNQUFNO0FBK0NaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZBbmltYXRpb24gfSBmcm9tICcuLi9hbmltYXRpb24nXG5pbXBvcnQgeyB1c2VTY3JlZW5TaXplQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gICAgbGV0IGlzTW9iaWxlU2NyZWVuID0gdXNlU2NyZWVuU2l6ZUNvbnRleHQoKTtcbiAgICBsZXQgbmF2RWxlbSA9IHVzZVJlZihudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBwcmV2aW91c1Njcm9sbFBvc2l0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlTmF2QW5pbWF0aW9uID0gKCk9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaXNNb2JpbGVTY3JlZW4uY3VycmVudCl7XG4gICAgICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA+IHByZXZpb3VzU2Nyb2xsUG9zaXRpb24gPyBuYXZBbmltYXRpb24odHJ1ZSwgbmF2RWxlbSkgOiBuYXZBbmltYXRpb24oZmFsc2UsIG5hdkVsZW0pO1xuXG4gICAgICAgICAgICAgICAgcHJldmlvdXNTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZU5hdkFuaW1hdGlvbigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxoYW5kbGVOYXZBbmltYXRpb24pO1xuXG4gICAgICAgIHJldHVybigpPT57XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxoYW5kbGVOYXZBbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfSxbXSlcbiAgcmV0dXJuIChcblxuICAgIDw+XG4gICAgICAgIDxzZWN0aW9uIGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bmF2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC1bMF0gbGVmdC0wIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcbiAgICAgICAgICAgICAgICBtaW4taC1bNnJlbV0gdy1mdWxsIGJvcmRlci1iLTQgYm9yZGVyLWdyYXktOTAwIG5hdkFuaW1hdGlvbiBiZy13aGl0ZSBkYXJrOmJnLWJsYWNrXG4gICAgICAgICAgICAgICAgei01MCBsZzp0b3AtWy01cmVtXSBsZzpteC1hdXRvXCJcbiAgICAgICAgICAgICAgICByZWY9e25hdkVsZW19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHctZnVsbCBsZzpmaXhlZCBsZzpmbGV4LWNvbCBsZzpsZWZ0LTAgbGc6dG9wLVszNXZoXSBsZzp3LVsyNXZ3XVxuICAgICAgICAgICAgICAgICAgICBsZzpoLVsyMHZoXSBsZzppdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHgtNSB3LTI0IHRleHQtc20gbGc6dGV4dC0zeGwgbGc6dy00NCBsZzptbC00ICR7c3R5bGVzLnNlbGVjdGVkfSAke3N0eWxlcy5uYXZfc3RhcnR1cHNfYXJyb3d9YH0+U3RhcnR1cHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHgtNSB3LTI0IHRleHQtc20gbGc6dGV4dC0zeGwgbGc6dy00NCBsZzptbC00YH0+SWRlb2xvZ3k8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcHgtNSB3LTI0IHRleHQtc20gbGc6dGV4dC0zeGwgbGc6dy00NCBsZzptbC00YH0+TWV0aG9kPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YHB4LTUgdy0yNCB0ZXh0LXNtIGxnOnRleHQtM3hsIGxnOnctNDQgbGc6bWwtNGB9PkpvaW4gVXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJuYXZBbmltYXRpb24iLCJ1c2VTY3JlZW5TaXplQ29udGV4dCIsInN0eWxlcyIsIk5hdmJhciIsImlzTW9iaWxlU2NyZWVuIiwibmF2RWxlbSIsInByZXZpb3VzU2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVOYXZBbmltYXRpb24iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2VjdGlvbiIsImlkIiwibmF2IiwiY2xhc3NOYW1lIiwicmVmIiwidWwiLCJsaSIsInNlbGVjdGVkIiwibmF2X3N0YXJ0dXBzX2Fycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});