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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; },\n/* harmony export */   \"navArrowAnimation\": function() { return /* binding */ navArrowAnimation; },\n/* harmony export */   \"zoomFeaturedProject\": function() { return /* binding */ zoomFeaturedProject; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ \"./node_modules/gsap/dist/CSSRulePlugin.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// animation of mobile navbar\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\n//animation of featured project arrows and intro arrows\nvar arrowAnimation = function(isMouseOver, section) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin((gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default()));\n    var arrowAfterElem, arrowBeforeElem, arrowContainer;\n    if (section === 'intro') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::before\");\n    }\n    ;\n    if (section === 'share') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::before\");\n    }\n    ;\n    if (section === 'spoton') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::before\");\n    }\n    ;\n    if (section === 'orbit') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::before\");\n    }\n    ;\n    var arrowsMoveRight = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowAfterElem,\n            arrowBeforeElem\n        ], {\n            left: '+=110',\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '-=110',\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\n// animation of nav elem\nvar navArrowAnimation = function(isMouseOver, isMobileScreen, navStartupsElemRef, navElemRef) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            duration: 0.6,\n            ease: 'power2.out'\n        }\n    });\n    if (!isMobileScreen) {\n        isMouseOver ? tl.to(navStartupsElemRef.current, {\n            x: \"-=\".concat(navStartupsElemRef.current.clientWidth * 0.25)\n        }).to(navElemRef.current, {\n            x: \"+=\".concat(navElemRef.current.clientWidth * 0.25)\n        }, '-=0.6') : tl.to(navElemRef.current, {\n            x: \"-=\".concat(navElemRef.current.clientWidth * 0.25)\n        }).to(navStartupsElemRef.current, {\n            x: \"+=\".concat(navStartupsElemRef.current.clientWidth * 0.25)\n        }, '-=0.6');\n    }\n};\n//Zoom in and out of featured project img \nvar zoomFeaturedProject = function(isMouseOver, elem) {\n    isMouseOver ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1.05,\n        duration: 0.6,\n        ease: 'power2inOut'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1,\n        duration: 0.6,\n        ease: 'power2inOut'\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO1FBQ1J6QixRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsQ0FBYTtJQUN2QixDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hbmltYXRpb24vaW5kZXguanM/ZmRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IENTU1J1bGVQbHVnaW4gZnJvbSAnZ3NhcC9kaXN0L0NTU1J1bGVQbHVnaW4nXG5cbi8vIGFuaW1hdGlvbiBvZiBtb2JpbGUgbmF2YmFyXG5leHBvcnQgY29uc3QgbmF2QW5pbWF0aW9uID0gKHNob3dOYXYsIG5hdkVsZW0pPT57XG4gICAgLy8gSWYgdXNlciBzY3JvbGwgdXAgc2hvd05hdiBpcyB0cnVlLCBuYXZiYXIgYXBwZWFyXG4gICAgc2hvd05hdiA/IFxuICAgICAgICBnc2FwLnRvKG5hdkVsZW0uY3VycmVudCx7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH0pXG4gICAgOlxuICAgICAgICBnc2FwLnRvKG5hdkVsZW0uY3VycmVudCx7XG4gICAgICAgICAgICB0b3A6ICctNS42cmVtJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfSk7XG59O1xuXG4vL2FuaW1hdGlvbiBvZiBmZWF0dXJlZCBwcm9qZWN0IGFycm93cyBhbmQgaW50cm8gYXJyb3dzXG5leHBvcnQgY29uc3QgYXJyb3dBbmltYXRpb24gPSAoaXNNb3VzZU92ZXIsIHNlY3Rpb24pPT57XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NSdWxlUGx1Z2luKTtcbiAgICBsZXQgYXJyb3dBZnRlckVsZW0sYXJyb3dCZWZvcmVFbGVtLGFycm93Q29udGFpbmVyO1xuXG4gICAgaWYoc2VjdGlvbiA9PT0gJ2ludHJvJyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfaW50cm9fYXJyb3dzX19nM0tDRjo6YWZ0ZXJcIik7XG4gICAgICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ludHJvX2Fycm93c19fZzNLQ0Y6OmJlZm9yZVwiKTtcbiAgICB9O1xuICAgIGlmKHNlY3Rpb24gPT09ICdzaGFyZScpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX3NoYXJlX2Fycm93c19fMUYwUVo6OmFmdGVyXCIpO1xuICAgICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zaGFyZV9hcnJvd3NfXzFGMFFaOjpiZWZvcmVcIik7XG4gICAgfTtcbiAgICBpZihzZWN0aW9uID09PSAnc3BvdG9uJyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc3BvdG9uX2Fycm93c19fSl9rTTg6OmFmdGVyXCIpO1xuICAgICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zcG90b25fYXJyb3dzX19KX2tNODo6YmVmb3JlXCIpO1xuICAgIH07XG4gICAgaWYoc2VjdGlvbiA9PT0gJ29yYml0Jyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfb3JiaXRfYXJyb3dzX19Ld0ZxTTo6YWZ0ZXJcIik7XG4gICAgICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX29yYml0X2Fycm93c19fS3dGcU06OmJlZm9yZVwiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXJyb3dzTW92ZVJpZ2h0ID0gKCk9PntcbiAgICAgICAgZ3NhcC50byhbYXJyb3dBZnRlckVsZW0sIGFycm93QmVmb3JlRWxlbV0se1xuICAgICAgICAgICAgbGVmdDogJys9MTEwJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1LFxuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcidcbiAgICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnN0IGFycm93c01vdmVMZWZ0PSgpPT57XG4gICAgICAgIGdzYXAudG8oW2Fycm93QmVmb3JlRWxlbSwgYXJyb3dBZnRlckVsZW1dLHtcbiAgICAgICAgICAgIGxlZnQ6ICctPTExMCcsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaXNNb3VzZU92ZXI/IGFycm93c01vdmVSaWdodCgpIDogYXJyb3dzTW92ZUxlZnQoKTtcbn07XG5cbi8vIGFuaW1hdGlvbiBvZiBuYXYgZWxlbVxuZXhwb3J0IGNvbnN0IG5hdkFycm93QW5pbWF0aW9uID0oaXNNb3VzZU92ZXIsIGlzTW9iaWxlU2NyZWVuLCBuYXZTdGFydHVwc0VsZW1SZWYsIG5hdkVsZW1SZWYpPT57XG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6e1xuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYoIWlzTW9iaWxlU2NyZWVuKXtcbiAgICAgICAgaXNNb3VzZU92ZXI/XG4gICAgICAgICAgICB0bFxuICAgICAgICAgICAgICAgIC50byhuYXZTdGFydHVwc0VsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgICAgIHg6IGAtPSR7IG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogMC4yNX1gLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKG5hdkVsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgICAgIHg6IGArPSR7IG5hdkVsZW1SZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuMjV9YCxcbiAgICAgICAgICAgICAgICB9LCctPTAuNicpXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICB0bFxuICAgICAgICAgICAgICAgIC50byhuYXZFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgICAgICB4OiBgLT0keyBuYXZFbGVtUmVmLmN1cnJlbnQuY2xpZW50V2lkdGggKiAwLjI1fWAsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudG8obmF2U3RhcnR1cHNFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgICAgICB4OiBgKz0keyBuYXZTdGFydHVwc0VsZW1SZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuMjV9YCxcbiAgICAgICAgICAgICAgICB9LCctPTAuNicpXG4gICAgfVxufTtcbi8vWm9vbSBpbiBhbmQgb3V0IG9mIGZlYXR1cmVkIHByb2plY3QgaW1nIFxuZXhwb3J0IGNvbnN0IHpvb21GZWF0dXJlZFByb2plY3QgPShpc01vdXNlT3ZlciwgZWxlbSk9PntcbiAgICBpc01vdXNlT3ZlciA/XG4gICAgICAgIGdzYXAudG8oZWxlbS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4gaW1nJykse1xuICAgICAgICAgICAgc2NhbGU6IDEuMDUsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMmluT3V0J1xuICAgICAgICB9KVxuICAgIDpcbiAgICAgICAgZ3NhcC50byhlbGVtLmN1cnJlbnQucXVlcnlTZWxlY3Rvcignc3BhbiBpbWcnKSx7XG4gICAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyaW5PdXQnXG4gICAgICAgIH0pXG59Il0sIm5hbWVzIjpbImdzYXAiLCJDU1NSdWxlUGx1Z2luIiwibmF2QW5pbWF0aW9uIiwic2hvd05hdiIsIm5hdkVsZW0iLCJ0byIsImN1cnJlbnQiLCJ0b3AiLCJkdXJhdGlvbiIsImVhc2UiLCJhcnJvd0FuaW1hdGlvbiIsImlzTW91c2VPdmVyIiwic2VjdGlvbiIsInJlZ2lzdGVyUGx1Z2luIiwiYXJyb3dBZnRlckVsZW0iLCJhcnJvd0JlZm9yZUVsZW0iLCJhcnJvd0NvbnRhaW5lciIsImdldFJ1bGUiLCJhcnJvd3NNb3ZlUmlnaHQiLCJsZWZ0IiwiYXJyb3dzTW92ZUxlZnQiLCJuYXZBcnJvd0FuaW1hdGlvbiIsImlzTW9iaWxlU2NyZWVuIiwibmF2U3RhcnR1cHNFbGVtUmVmIiwibmF2RWxlbVJlZiIsInRsIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsIngiLCJjbGllbnRXaWR0aCIsInpvb21GZWF0dXJlZFByb2plY3QiLCJlbGVtIiwicXVlcnlTZWxlY3RvciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});