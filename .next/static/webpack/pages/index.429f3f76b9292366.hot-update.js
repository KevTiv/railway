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

/***/ "./animation/index.js":
/*!****************************!*\
  !*** ./animation/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ \"./node_modules/gsap/dist/CSSRulePlugin.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\nvar arrowAnimation = function(isMouseOver, section) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin((gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default()));\n    var arrowAfterElem, arrowBeforeElem;\n    if (section === 'intro') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\"#intro_arrows:after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\"#intro_arrows:before\");\n    }\n    // if(section === 'share'){\n    //     console.log('share');\n    //     arrowAfterElem = CSSRulePlugin.getRule(\".Home_featured_share_arrows__1F0QZ::after\");\n    //     arrowBeforeElem = CSSRulePlugin.getRule(\".Home_featured_share_arrows__1F0QZ::before\");\n    // }\n    // if(section === 'spoton'){\n    //     console.log('spot on');\n    //     arrowAfterElem = CSSRulePlugin.getRule(\".Home_featured_spoton_arrows__J_kM8::after\");\n    //     arrowBeforeElem = CSSRulePlugin.getRule(\".Home_featured_spoton_arrows__J_kM8::before\");\n    // }\n    // if(section === 'orbit'){\n    //     console.log('orbit');\n    //     arrowAfterElem = CSSRulePlugin.getRule(\".Home_featured_orbit_arrows__KwFqM::after\");\n    //     arrowBeforeElem = CSSRulePlugin.getRule(\".Home_featured_orbit_arrows__KwFqM::before\");\n    // }\n    var arrowsMoveRight = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '+=100%',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '-=100%',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hbmltYXRpb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUI7QUFDNEI7QUFFNUMsR0FBSyxDQUFDRSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxPQUFPLEVBQUVDLE9BQU8sRUFBRyxDQUFDO0lBQzdDLEVBQW1EO0lBQ25ERCxPQUFPLEdBQ0hILCtDQUFPLENBQUNJLE9BQU8sQ0FBQ0UsT0FBTyxFQUFDLENBQUM7UUFDckJDLEdBQUcsRUFBRSxDQUFDO1FBQ05DLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFZO0lBQ3RCLENBQUMsSUFFRFQsK0NBQU8sQ0FBQ0ksT0FBTyxDQUFDRSxPQUFPLEVBQUMsQ0FBQztRQUNyQkMsR0FBRyxFQUFFLENBQVM7UUFDZEMsUUFBUSxFQUFFLEdBQUc7UUFDYkMsSUFBSSxFQUFFLENBQVk7SUFDdEIsQ0FBQztBQUNULENBQUM7QUFFTSxHQUFLLENBQUNDLGNBQWMsR0FBRyxRQUFRLENBQVBDLFdBQVcsRUFBRUMsT0FBTyxFQUFHLENBQUM7SUFDbkRaLDJEQUFtQixDQUFDQyxnRUFBYTtJQUNqQyxHQUFHLENBQUNhLGNBQWMsRUFBQ0MsZUFBZTtJQUdsQyxFQUFFLEVBQUNILE9BQU8sS0FBSyxDQUFPLFFBQUMsQ0FBQztRQUNwQkUsY0FBYyxHQUFHYixzRUFBcUIsQ0FBQyxDQUFxQjtRQUM1RGMsZUFBZSxHQUFHZCxzRUFBcUIsQ0FBQyxDQUFzQjtJQUNsRSxDQUFDO0lBQ0QsRUFBMkI7SUFDM0IsRUFBNEI7SUFDNUIsRUFBMkY7SUFDM0YsRUFBNkY7SUFDN0YsRUFBSTtJQUNKLEVBQTRCO0lBQzVCLEVBQThCO0lBQzlCLEVBQTRGO0lBQzVGLEVBQThGO0lBQzlGLEVBQUk7SUFDSixFQUEyQjtJQUMzQixFQUE0QjtJQUM1QixFQUEyRjtJQUMzRixFQUE2RjtJQUM3RixFQUFJO0lBR0osR0FBSyxDQUFDZ0IsZUFBZSxHQUFHLFFBQzFCLEdBRDhCLENBQUM7UUFDekJqQiwrQ0FBTyxDQUFDLENBQUNlO1lBQUFBLGVBQWU7WUFBRUQsY0FBYztRQUFBLENBQUMsRUFBQyxDQUFDO1lBQ3ZDSSxJQUFJLEVBQUUsQ0FBUTtZQUNkVixRQUFRLEVBQUUsR0FBRztZQUNiQyxJQUFJLEVBQUUsQ0FBUTtRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUNELEdBQUssQ0FBQ1UsY0FBYyxHQUFDLFFBQ3ZCLEdBRDJCLENBQUM7UUFDdEJuQiwrQ0FBTyxDQUFDLENBQUNlO1lBQUFBLGVBQWU7WUFBRUQsY0FBYztRQUFBLENBQUMsRUFBQyxDQUFDO1lBQ3ZDSSxJQUFJLEVBQUUsQ0FBUTtZQUNkVixRQUFRLEVBQUUsR0FBRztZQUNiQyxJQUFJLEVBQUUsQ0FBUTtRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVERSxXQUFXLEdBQUVNLGVBQWUsS0FBS0UsY0FBYztBQUNuRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuaW1hdGlvbi9pbmRleC5qcz9mZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ1NTUnVsZVBsdWdpbiBmcm9tICdnc2FwL2Rpc3QvQ1NTUnVsZVBsdWdpbidcblxuZXhwb3J0IGNvbnN0IG5hdkFuaW1hdGlvbiA9IChzaG93TmF2LCBuYXZFbGVtKT0+e1xuICAgIC8vIElmIHVzZXIgc2Nyb2xsIHVwIHNob3dOYXYgaXMgdHJ1ZSwgbmF2YmFyIGFwcGVhclxuICAgIHNob3dOYXYgPyBcbiAgICAgICAgZ3NhcC50byhuYXZFbGVtLmN1cnJlbnQse1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICB9KVxuICAgIDpcbiAgICAgICAgZ3NhcC50byhuYXZFbGVtLmN1cnJlbnQse1xuICAgICAgICAgICAgdG9wOiAnLTUuNnJlbScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgYXJyb3dBbmltYXRpb24gPSAoaXNNb3VzZU92ZXIsIHNlY3Rpb24pPT57XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NSdWxlUGx1Z2luKTtcbiAgICBsZXQgYXJyb3dBZnRlckVsZW0sYXJyb3dCZWZvcmVFbGVtO1xuXG4gICAgXG4gICAgaWYoc2VjdGlvbiA9PT0gJ2ludHJvJyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiI2ludHJvX2Fycm93czphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiI2ludHJvX2Fycm93czpiZWZvcmVcIik7XG4gICAgfVxuICAgIC8vIGlmKHNlY3Rpb24gPT09ICdzaGFyZScpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2hhcmUnKTtcbiAgICAvLyAgICAgYXJyb3dBZnRlckVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zaGFyZV9hcnJvd3NfXzFGMFFaOjphZnRlclwiKTtcbiAgICAvLyAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc2hhcmVfYXJyb3dzX18xRjBRWjo6YmVmb3JlXCIpO1xuICAgIC8vIH1cbiAgICAvLyBpZihzZWN0aW9uID09PSAnc3BvdG9uJyl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzcG90IG9uJyk7XG4gICAgLy8gICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc3BvdG9uX2Fycm93c19fSl9rTTg6OmFmdGVyXCIpO1xuICAgIC8vICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zcG90b25fYXJyb3dzX19KX2tNODo6YmVmb3JlXCIpO1xuICAgIC8vIH1cbiAgICAvLyBpZihzZWN0aW9uID09PSAnb3JiaXQnKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ29yYml0Jyk7XG4gICAgLy8gICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfb3JiaXRfYXJyb3dzX19Ld0ZxTTo6YWZ0ZXJcIik7XG4gICAgLy8gICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX29yYml0X2Fycm93c19fS3dGcU06OmJlZm9yZVwiKTtcbiAgICAvLyB9XG5cblxuICAgIGNvbnN0IGFycm93c01vdmVSaWdodCA9ICgpPT57XG4gICAgICAgIGdzYXAudG8oW2Fycm93QmVmb3JlRWxlbSwgYXJyb3dBZnRlckVsZW1dLHtcbiAgICAgICAgICAgIGxlZnQ6ICcrPTEwMCUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGFycm93c01vdmVMZWZ0PSgpPT57XG4gICAgICAgIGdzYXAudG8oW2Fycm93QmVmb3JlRWxlbSwgYXJyb3dBZnRlckVsZW1dLHtcbiAgICAgICAgICAgIGxlZnQ6ICctPTEwMCUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzTW91c2VPdmVyPyBhcnJvd3NNb3ZlUmlnaHQoKSA6IGFycm93c01vdmVMZWZ0KCk7XG59Il0sIm5hbWVzIjpbImdzYXAiLCJDU1NSdWxlUGx1Z2luIiwibmF2QW5pbWF0aW9uIiwic2hvd05hdiIsIm5hdkVsZW0iLCJ0byIsImN1cnJlbnQiLCJ0b3AiLCJkdXJhdGlvbiIsImVhc2UiLCJhcnJvd0FuaW1hdGlvbiIsImlzTW91c2VPdmVyIiwic2VjdGlvbiIsInJlZ2lzdGVyUGx1Z2luIiwiYXJyb3dBZnRlckVsZW0iLCJhcnJvd0JlZm9yZUVsZW0iLCJnZXRSdWxlIiwiYXJyb3dzTW92ZVJpZ2h0IiwibGVmdCIsImFycm93c01vdmVMZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});