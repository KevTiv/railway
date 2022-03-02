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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; },\n/* harmony export */   \"navArrowAnimation\": function() { return /* binding */ navArrowAnimation; },\n/* harmony export */   \"zoomFeaturedProject\": function() { return /* binding */ zoomFeaturedProject; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ \"./node_modules/gsap/dist/CSSRulePlugin.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\nvar arrowAnimation = function(isMouseOver, section) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin((gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default()));\n    var arrowAfterElem, arrowBeforeElem;\n    if (section === 'intro') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::before\");\n    }\n    ;\n    if (section === 'share') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::before\");\n    }\n    ;\n    if (section === 'spoton') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::before\");\n    }\n    ;\n    if (section === 'orbit') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::before\");\n    }\n    ;\n    var arrowsMoveRight = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '+=100%',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '-=100%',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\nvar navArrowAnimation = function(isMouseOver, navStartupsElemRef, navElemRef) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            duration: 0.6,\n            ease: 'power2.out'\n        }\n    });\n    isMouseOver ? tl.to(navStartupsElemRef.current, {\n        width: 0\n    }).to(navElemRef.current, {\n        width: '16.666667%'\n    }, '-=0.6') : tl.to(navElemRef.current, {\n        width: 0\n    }).to(navStartupsElemRef.current, {\n        width: '16.666667%'\n    }, '-=0.6');\n};\nvar zoomFeaturedProject = function(isMouseOver, elem) {\n    console.log('here');\n    isMouseOver ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1.05,\n        duration: 0.6,\n        ease: 'power2inOut'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1,\n        duration: 0.6,\n        ease: 'power2inOut'\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNpQixVQUFVLENBQUNoQixPQUFPLEVBQUMsQ0FBQztRQUNwQm9CLEtBQUssRUFBRSxDQUFZO0lBQ3ZCLENBQUMsRUFBQyxDQUFPLFVBRWJILEVBQUUsQ0FDR2xCLEVBQUUsQ0FBQ2lCLFVBQVUsQ0FBQ2hCLE9BQU8sRUFBQyxDQUFDO1FBQ3BCb0IsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQ0FyQixFQUFFLENBQUNnQixrQkFBa0IsQ0FBQ2YsT0FBTyxFQUFDLENBQUM7UUFDNUJvQixLQUFLLEVBQUUsQ0FBWTtJQUN2QixDQUFDLEVBQUMsQ0FBTztBQUNyQixDQUFDO0FBRU0sR0FBSyxDQUFDQyxtQkFBbUIsR0FBRSxRQUFRLENBQVBoQixXQUFXLEVBQUVpQixJQUFJLEVBQUcsQ0FBQztJQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTTtJQUNsQm5CLFdBQVcsR0FDUFgsK0NBQU8sQ0FBQzRCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3lCLGFBQWEsQ0FBQyxDQUFVLFlBQUUsQ0FBQztRQUM1Q0MsS0FBSyxFQUFFLElBQUk7UUFDWHhCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUMsSUFFRFQsK0NBQU8sQ0FBQzRCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ3lCLGFBQWEsQ0FBQyxDQUFVLFlBQUUsQ0FBQztRQUM1Q0MsS0FBSyxFQUFFLENBQUM7UUFDUnhCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuaW1hdGlvbi9pbmRleC5qcz9mZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ1NTUnVsZVBsdWdpbiBmcm9tICdnc2FwL2Rpc3QvQ1NTUnVsZVBsdWdpbidcblxuZXhwb3J0IGNvbnN0IG5hdkFuaW1hdGlvbiA9IChzaG93TmF2LCBuYXZFbGVtKT0+e1xuICAgIC8vIElmIHVzZXIgc2Nyb2xsIHVwIHNob3dOYXYgaXMgdHJ1ZSwgbmF2YmFyIGFwcGVhclxuICAgIHNob3dOYXYgPyBcbiAgICAgICAgZ3NhcC50byhuYXZFbGVtLmN1cnJlbnQse1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICB9KVxuICAgIDpcbiAgICAgICAgZ3NhcC50byhuYXZFbGVtLmN1cnJlbnQse1xuICAgICAgICAgICAgdG9wOiAnLTUuNnJlbScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFycm93QW5pbWF0aW9uID0gKGlzTW91c2VPdmVyLCBzZWN0aW9uKT0+e1xuICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUnVsZVBsdWdpbik7XG4gICAgbGV0IGFycm93QWZ0ZXJFbGVtLGFycm93QmVmb3JlRWxlbTtcblxuICAgIGlmKHNlY3Rpb24gPT09ICdpbnRybycpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ludHJvX2Fycm93c19fZzNLQ0Y6OmFmdGVyXCIpO1xuICAgICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9pbnRyb19hcnJvd3NfX2czS0NGOjpiZWZvcmVcIik7XG4gICAgfTtcbiAgICBpZihzZWN0aW9uID09PSAnc2hhcmUnKXtcbiAgICAgICAgYXJyb3dBZnRlckVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zaGFyZV9hcnJvd3NfXzFGMFFaOjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc2hhcmVfYXJyb3dzX18xRjBRWjo6YmVmb3JlXCIpO1xuICAgIH07XG4gICAgaWYoc2VjdGlvbiA9PT0gJ3Nwb3Rvbicpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX3Nwb3Rvbl9hcnJvd3NfX0pfa004OjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc3BvdG9uX2Fycm93c19fSl9rTTg6OmJlZm9yZVwiKTtcbiAgICB9O1xuICAgIGlmKHNlY3Rpb24gPT09ICdvcmJpdCcpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX29yYml0X2Fycm93c19fS3dGcU06OmFmdGVyXCIpO1xuICAgICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9vcmJpdF9hcnJvd3NfX0t3RnFNOjpiZWZvcmVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFycm93c01vdmVSaWdodCA9ICgpPT57XG4gICAgICAgIGdzYXAudG8oW2Fycm93QmVmb3JlRWxlbSwgYXJyb3dBZnRlckVsZW1dLHtcbiAgICAgICAgICAgIGxlZnQ6ICcrPTEwMCUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zdCBhcnJvd3NNb3ZlTGVmdD0oKT0+e1xuICAgICAgICBnc2FwLnRvKFthcnJvd0JlZm9yZUVsZW0sIGFycm93QWZ0ZXJFbGVtXSx7XG4gICAgICAgICAgICBsZWZ0OiAnLT0xMDAlJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXG4gICAgICAgICAgICBlYXNlOiAnbGluZWFyJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlzTW91c2VPdmVyPyBhcnJvd3NNb3ZlUmlnaHQoKSA6IGFycm93c01vdmVMZWZ0KCk7XG59O1xuXG5leHBvcnQgY29uc3QgbmF2QXJyb3dBbmltYXRpb24gPShpc01vdXNlT3ZlciwgbmF2U3RhcnR1cHNFbGVtUmVmLCBuYXZFbGVtUmVmKT0+e1xuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOntcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaXNNb3VzZU92ZXIgP1xuICAgICAgICB0bFxuICAgICAgICAgICAgLnRvKG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8obmF2RWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE2LjY2NjY2NyUnLFxuICAgICAgICAgICAgfSwnLT0wLjYnKVxuICAgICAgICA6XG4gICAgICAgIHRsXG4gICAgICAgICAgICAudG8obmF2RWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8obmF2U3RhcnR1cHNFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTYuNjY2NjY3JScsXG4gICAgICAgICAgICB9LCctPTAuNicpXG59O1xuXG5leHBvcnQgY29uc3Qgem9vbUZlYXR1cmVkUHJvamVjdCA9KGlzTW91c2VPdmVyLCBlbGVtKT0+e1xuICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XG4gICAgaXNNb3VzZU92ZXIgP1xuICAgICAgICBnc2FwLnRvKGVsZW0uY3VycmVudC5xdWVyeVNlbGVjdG9yKCdzcGFuIGltZycpLHtcbiAgICAgICAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjJpbk91dCdcbiAgICAgICAgfSlcbiAgICA6XG4gICAgICAgIGdzYXAudG8oZWxlbS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4gaW1nJykse1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMmluT3V0J1xuICAgICAgICB9KVxufSJdLCJuYW1lcyI6WyJnc2FwIiwiQ1NTUnVsZVBsdWdpbiIsIm5hdkFuaW1hdGlvbiIsInNob3dOYXYiLCJuYXZFbGVtIiwidG8iLCJjdXJyZW50IiwidG9wIiwiZHVyYXRpb24iLCJlYXNlIiwiYXJyb3dBbmltYXRpb24iLCJpc01vdXNlT3ZlciIsInNlY3Rpb24iLCJyZWdpc3RlclBsdWdpbiIsImFycm93QWZ0ZXJFbGVtIiwiYXJyb3dCZWZvcmVFbGVtIiwiZ2V0UnVsZSIsImFycm93c01vdmVSaWdodCIsImxlZnQiLCJhcnJvd3NNb3ZlTGVmdCIsIm5hdkFycm93QW5pbWF0aW9uIiwibmF2U3RhcnR1cHNFbGVtUmVmIiwibmF2RWxlbVJlZiIsInRsIiwidGltZWxpbmUiLCJkZWZhdWx0cyIsIndpZHRoIiwiem9vbUZlYXR1cmVkUHJvamVjdCIsImVsZW0iLCJjb25zb2xlIiwibG9nIiwicXVlcnlTZWxlY3RvciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});