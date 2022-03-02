/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"useThemeContext\": () => (/* binding */ useThemeContext),\n/* harmony export */   \"useScreenSizeContext\": () => (/* binding */ useScreenSizeContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ScreenSizeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContextProvider = ({ children  })=>{\n    // let isDarkMode = useRef(null);\n    const { 0: isDarkMode , 1: setDarkMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let isMobileScreen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //Set default theme from browser information at mount time and theme changed\n        window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? setDarkMode(true) : setDarkMode(false);\n        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event)=>{\n            event.matches ? setDarkMode(true) : setDarkMode(false);\n        });\n        return ()=>{\n            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', (event)=>{\n                event.matches ? setDarkMode(true) : setDarkMode(false);\n            });\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //Set default screen size from browser information at mount time and resize\n        const handleScreenSize = ()=>{\n            window.innerWidth && window.innerWidth <= 1024 ? isMobileScreen.current = true : isMobileScreen.current = false;\n        };\n        handleScreenSize();\n        window.addEventListener('resize', handleScreenSize);\n        return ()=>{\n            window.removeEventListener('resize', handleScreenSize);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ScreenSizeContext.Provider, {\n        value: isMobileScreen,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeContext.Provider, {\n            value: isDarkMode,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/context/index.js\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/context/index.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined));\n};\nfunction useThemeContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);\n}\nfunction useScreenSizeContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ScreenSizeContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThFO0FBRTlFLEtBQUssQ0FBQ0ssWUFBWSxpQkFBR0osb0RBQWE7QUFDbEMsS0FBSyxDQUFDSyxpQkFBaUIsaUJBQUdMLG9EQUFhO0FBRWhDLEtBQUssQ0FBQ00sZUFBZSxJQUFJLENBQUNDLENBQUFBLFFBQVEsR0FBQyxHQUFHLENBQUM7SUFDMUMsRUFBaUM7SUFDakMsS0FBSyxNQUFFQyxVQUFVLE1BQUVDLFdBQVcsTUFBSVAsK0NBQVEsQ0FBQyxLQUFLO0lBRWhELEdBQUcsQ0FBQ1EsY0FBYyxHQUFHUCw2Q0FBTSxDQUFDLElBQUk7SUFFaENKLGdEQUFTLEtBQUssQ0FBQztRQUNYLEVBQTRFO1FBQzVFWSxNQUFNLENBQUNDLFVBQVUsQ0FBQyxDQUE4QiwrQkFBRUMsT0FBTyxHQUFHSixXQUFXLENBQUMsSUFBSSxJQUFHQSxXQUFXLENBQUMsS0FBSztRQUVoR0UsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBOEIsK0JBQUVFLGdCQUFnQixDQUFDLENBQVEsVUFBRUMsS0FBSyxHQUFJLENBQUM7WUFDbkZBLEtBQUssQ0FBQ0YsT0FBTyxHQUFHSixXQUFXLENBQUMsSUFBSSxJQUFJQSxXQUFXLENBQUMsS0FBSztRQUN6RCxDQUFDO1FBRUQsTUFBTSxLQUFJLENBQUM7WUFDUEUsTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBOEIsK0JBQUVJLG1CQUFtQixDQUFDLENBQVEsVUFBRUQsS0FBSyxHQUFJLENBQUM7Z0JBQ3RGQSxLQUFLLENBQUNGLE9BQU8sR0FBR0osV0FBVyxDQUFDLElBQUksSUFBSUEsV0FBVyxDQUFDLEtBQUs7WUFDekQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0pWLGdEQUFTLEtBQUssQ0FBQztRQUNYLEVBQTJFO1FBQzNFLEtBQUssQ0FBQ2tCLGdCQUFnQixPQUFNLENBQUM7WUFDekJOLE1BQU0sQ0FBQ08sVUFBVSxJQUFJUCxNQUFNLENBQUNPLFVBQVUsSUFBSSxJQUFJLEdBQUdSLGNBQWMsQ0FBQ1MsT0FBTyxHQUFHLElBQUksR0FBR1QsY0FBYyxDQUFDUyxPQUFPLEdBQUUsS0FBSztRQUNsSCxDQUFDO1FBRURGLGdCQUFnQjtRQUNoQk4sTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVHLGdCQUFnQjtRQUNsRCxNQUFNLEtBQUksQ0FBQztZQUNQTixNQUFNLENBQUNLLG1CQUFtQixDQUFDLENBQVEsU0FBRUMsZ0JBQWdCO1FBQ3pELENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ0osTUFBTSw2RUFDRFosaUJBQWlCLENBQUNlLFFBQVE7UUFBQ0MsS0FBSyxFQUFFWCxjQUFjOzhGQUM1Q04sWUFBWSxDQUFDZ0IsUUFBUTtZQUFDQyxLQUFLLEVBQUViLFVBQVU7c0JBQ25DRCxRQUFROzs7Ozs7Ozs7OztBQUl6QixDQUFDO0FBRU0sU0FBU2UsZUFBZSxHQUFHLENBQUM7SUFDakMsTUFBTSxDQUFDckIsaURBQVUsQ0FBQ0csWUFBWTtBQUNoQyxDQUFDO0FBQ00sU0FBU21CLG9CQUFvQixHQUFHLENBQUM7SUFDdEMsTUFBTSxDQUFDdEIsaURBQVUsQ0FBQ0ksaUJBQWlCO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuY29uc3QgU2NyZWVuU2l6ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSk9PntcbiAgICAvLyBsZXQgaXNEYXJrTW9kZSA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGlzTW9iaWxlU2NyZWVuID0gdXNlUmVmKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIC8vU2V0IGRlZmF1bHQgdGhlbWUgZnJvbSBicm93c2VyIGluZm9ybWF0aW9uIGF0IG1vdW50IHRpbWUgYW5kIHRoZW1lIGNoYW5nZWRcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMgPyBzZXREYXJrTW9kZSh0cnVlKTogc2V0RGFya01vZGUoZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5tYXRjaGVzID8gc2V0RGFya01vZGUodHJ1ZSkgOiBzZXREYXJrTW9kZShmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybigpPT57XG4gICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5tYXRjaGVzID8gc2V0RGFya01vZGUodHJ1ZSkgOiBzZXREYXJrTW9kZShmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sW10pO1xuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICAvL1NldCBkZWZhdWx0IHNjcmVlbiBzaXplIGZyb20gYnJvd3NlciBpbmZvcm1hdGlvbiBhdCBtb3VudCB0aW1lIGFuZCByZXNpemVcbiAgICAgICAgY29uc3QgaGFuZGxlU2NyZWVuU2l6ZSA9KCk9PntcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQgPyBpc01vYmlsZVNjcmVlbi5jdXJyZW50ID0gdHJ1ZSA6IGlzTW9iaWxlU2NyZWVuLmN1cnJlbnQgPWZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFuZGxlU2NyZWVuU2l6ZSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2NyZWVuU2l6ZSk7XG4gICAgICAgIHJldHVybigpPT57XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlU2NyZWVuU2l6ZSk7XG4gICAgICAgIH1cbiAgICB9LFtdKVxuICAgIHJldHVybihcbiAgICAgICAgPFNjcmVlblNpemVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc01vYmlsZVNjcmVlbn0+XG4gICAgICAgICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc0RhcmtNb2RlfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9TY3JlZW5TaXplQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUaGVtZUNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlU2NyZWVuU2l6ZUNvbnRleHQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFNjcmVlblNpemVDb250ZXh0KTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlRoZW1lQ29udGV4dCIsIlNjcmVlblNpemVDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0RhcmtNb2RlIiwic2V0RGFya01vZGUiLCJpc01vYmlsZVNjcmVlbiIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcmVlblNpemUiLCJpbm5lcldpZHRoIiwiY3VycmVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VUaGVtZUNvbnRleHQiLCJ1c2VTY3JlZW5TaXplQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_2__.ContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kevintivert/Documents/Projects/Js/railway/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDVztTQUVqQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSw2RUFDSEgscURBQWU7OEZBQ2JFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xuaW1wb3J0IHtDb250ZXh0UHJvdmlkZXJ9IGZyb20gJy4uL2NvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Db250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();