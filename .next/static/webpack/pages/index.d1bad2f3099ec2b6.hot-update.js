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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; },\n/* harmony export */   \"navArrowAnimation\": function() { return /* binding */ navArrowAnimation; },\n/* harmony export */   \"zoomFeaturedProject\": function() { return /* binding */ zoomFeaturedProject; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ \"./node_modules/gsap/dist/CSSRulePlugin.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// animation of mobile navbar\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\n//animation of featured project arrows and intro arrows\nvar arrowAnimation = function(isMouseOver, section) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin((gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default()));\n    var arrowAfterElem, arrowBeforeElem, arrowContainer;\n    if (section === 'intro') {\n        arrowContainer = document.querySelector('.Home_intro_arrows__g3KCF');\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::before\");\n        console.log(arrowContainer);\n    }\n    ;\n    if (section === 'share') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::before\");\n    }\n    ;\n    if (section === 'spoton') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::before\");\n    }\n    ;\n    if (section === 'orbit') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::before\");\n    }\n    ;\n    var arrowsMoveRight = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '+=100%',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            left: '-=100',\n            duration: 0.4,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\n// animation of nav elem\nvar navArrowAnimation = function(isMouseOver, navStartupsElemRef, navElemRef) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            duration: 0.6,\n            ease: 'power2.out'\n        }\n    });\n    isMouseOver ? tl.to(navStartupsElemRef.current, {\n        width: 0\n    }).to(navElemRef.current, {\n        width: '16.666667%'\n    }, '-=0.6') : tl.to(navElemRef.current, {\n        width: 0\n    }).to(navStartupsElemRef.current, {\n        width: '16.666667%'\n    }, '-=0.6');\n};\n//Zoom in and out of featured project img \nvar zoomFeaturedProject = function(isMouseOver, elem) {\n    console.log('here');\n    isMouseOver ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1.05,\n        duration: 0.6,\n        ease: 'power2inOut'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1,\n        duration: 0.6,\n        ease: 'power2inOut'\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0wsQ0FBQztJQUVERSxXQUFXLEdBQ1BpQixFQUFFLENBQ0d2QixFQUFFLENBQUNxQixrQkFBa0IsQ0FBQ3BCLE9BQU8sRUFBQyxDQUFDO1FBQzVCeUIsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQ0ExQixFQUFFLENBQUNzQixVQUFVLENBQUNyQixPQUFPLEVBQUMsQ0FBQztRQUNwQnlCLEtBQUssRUFBRSxDQUFZO0lBQ3ZCLENBQUMsRUFBQyxDQUFPLFVBRWJILEVBQUUsQ0FDR3ZCLEVBQUUsQ0FBQ3NCLFVBQVUsQ0FBQ3JCLE9BQU8sRUFBQyxDQUFDO1FBQ3BCeUIsS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQ0ExQixFQUFFLENBQUNxQixrQkFBa0IsQ0FBQ3BCLE9BQU8sRUFBQyxDQUFDO1FBQzVCeUIsS0FBSyxFQUFFLENBQVk7SUFDdkIsQ0FBQyxFQUFDLENBQU87QUFDckIsQ0FBQztBQUNELEVBQTBDO0FBQ25DLEdBQUssQ0FBQ0MsbUJBQW1CLEdBQUUsUUFBUSxDQUFQckIsV0FBVyxFQUFFc0IsSUFBSSxFQUFHLENBQUM7SUFDcERiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU07SUFDbEJWLFdBQVcsR0FDUFgsK0NBQU8sQ0FBQ2lDLElBQUksQ0FBQzNCLE9BQU8sQ0FBQ1ksYUFBYSxDQUFDLENBQVUsWUFBRSxDQUFDO1FBQzVDZ0IsS0FBSyxFQUFFLElBQUk7UUFDWDFCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUMsSUFFRFQsK0NBQU8sQ0FBQ2lDLElBQUksQ0FBQzNCLE9BQU8sQ0FBQ1ksYUFBYSxDQUFDLENBQVUsWUFBRSxDQUFDO1FBQzVDZ0IsS0FBSyxFQUFFLENBQUM7UUFDUjFCLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuaW1hdGlvbi9pbmRleC5qcz9mZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ1NTUnVsZVBsdWdpbiBmcm9tICdnc2FwL2Rpc3QvQ1NTUnVsZVBsdWdpbidcblxuLy8gYW5pbWF0aW9uIG9mIG1vYmlsZSBuYXZiYXJcbmV4cG9ydCBjb25zdCBuYXZBbmltYXRpb24gPSAoc2hvd05hdiwgbmF2RWxlbSk9PntcbiAgICAvLyBJZiB1c2VyIHNjcm9sbCB1cCBzaG93TmF2IGlzIHRydWUsIG5hdmJhciBhcHBlYXJcbiAgICBzaG93TmF2ID8gXG4gICAgICAgIGdzYXAudG8obmF2RWxlbS5jdXJyZW50LHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfSlcbiAgICA6XG4gICAgICAgIGdzYXAudG8obmF2RWxlbS5jdXJyZW50LHtcbiAgICAgICAgICAgIHRvcDogJy01LjZyZW0nLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICB9KTtcbn07XG5cbi8vYW5pbWF0aW9uIG9mIGZlYXR1cmVkIHByb2plY3QgYXJyb3dzIGFuZCBpbnRybyBhcnJvd3NcbmV4cG9ydCBjb25zdCBhcnJvd0FuaW1hdGlvbiA9IChpc01vdXNlT3Zlciwgc2VjdGlvbik9PntcbiAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1J1bGVQbHVnaW4pO1xuICAgIGxldCBhcnJvd0FmdGVyRWxlbSxhcnJvd0JlZm9yZUVsZW0sYXJyb3dDb250YWluZXI7XG5cbiAgICBpZihzZWN0aW9uID09PSAnaW50cm8nKXtcbiAgICAgICAgYXJyb3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuSG9tZV9pbnRyb19hcnJvd3NfX2czS0NGJylcbiAgICAgICAgYXJyb3dBZnRlckVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9pbnRyb19hcnJvd3NfX2czS0NGOjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfaW50cm9fYXJyb3dzX19nM0tDRjo6YmVmb3JlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcnJvd0NvbnRhaW5lcik7XG4gICAgfTtcbiAgICBpZihzZWN0aW9uID09PSAnc2hhcmUnKXtcbiAgICAgICAgYXJyb3dBZnRlckVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9zaGFyZV9hcnJvd3NfXzFGMFFaOjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc2hhcmVfYXJyb3dzX18xRjBRWjo6YmVmb3JlXCIpO1xuICAgIH07XG4gICAgaWYoc2VjdGlvbiA9PT0gJ3Nwb3Rvbicpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX3Nwb3Rvbl9hcnJvd3NfX0pfa004OjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc3BvdG9uX2Fycm93c19fSl9rTTg6OmJlZm9yZVwiKTtcbiAgICB9O1xuICAgIGlmKHNlY3Rpb24gPT09ICdvcmJpdCcpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX29yYml0X2Fycm93c19fS3dGcU06OmFmdGVyXCIpO1xuICAgICAgICBhcnJvd0JlZm9yZUVsZW0gPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuSG9tZV9mZWF0dXJlZF9vcmJpdF9hcnJvd3NfX0t3RnFNOjpiZWZvcmVcIik7XG4gICAgfTtcblxuICAgIGNvbnN0IGFycm93c01vdmVSaWdodCA9ICgpPT57XG4gICAgICAgIGdzYXAudG8oW2Fycm93QmVmb3JlRWxlbSwgYXJyb3dBZnRlckVsZW1dLHtcbiAgICAgICAgICAgIGxlZnQ6ICcrPTEwMCUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zdCBhcnJvd3NNb3ZlTGVmdD0oKT0+e1xuICAgICAgICBnc2FwLnRvKFthcnJvd0JlZm9yZUVsZW0sIGFycm93QWZ0ZXJFbGVtXSx7XG4gICAgICAgICAgICBsZWZ0OiAnLT0xMDAnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgaXNNb3VzZU92ZXI/IGFycm93c01vdmVSaWdodCgpIDogYXJyb3dzTW92ZUxlZnQoKTtcbn07XG5cbi8vIGFuaW1hdGlvbiBvZiBuYXYgZWxlbVxuZXhwb3J0IGNvbnN0IG5hdkFycm93QW5pbWF0aW9uID0oaXNNb3VzZU92ZXIsIG5hdlN0YXJ0dXBzRWxlbVJlZiwgbmF2RWxlbVJlZik9PntcbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czp7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlzTW91c2VPdmVyID9cbiAgICAgICAgdGxcbiAgICAgICAgICAgIC50byhuYXZTdGFydHVwc0VsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKG5hdkVsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxNi42NjY2NjclJyxcbiAgICAgICAgICAgIH0sJy09MC42JylcbiAgICAgICAgOlxuICAgICAgICB0bFxuICAgICAgICAgICAgLnRvKG5hdkVsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzE2LjY2NjY2NyUnLFxuICAgICAgICAgICAgfSwnLT0wLjYnKVxufTtcbi8vWm9vbSBpbiBhbmQgb3V0IG9mIGZlYXR1cmVkIHByb2plY3QgaW1nIFxuZXhwb3J0IGNvbnN0IHpvb21GZWF0dXJlZFByb2plY3QgPShpc01vdXNlT3ZlciwgZWxlbSk9PntcbiAgICBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgIGlzTW91c2VPdmVyID9cbiAgICAgICAgZ3NhcC50byhlbGVtLmN1cnJlbnQucXVlcnlTZWxlY3Rvcignc3BhbiBpbWcnKSx7XG4gICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyaW5PdXQnXG4gICAgICAgIH0pXG4gICAgOlxuICAgICAgICBnc2FwLnRvKGVsZW0uY3VycmVudC5xdWVyeVNlbGVjdG9yKCdzcGFuIGltZycpLHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjJpbk91dCdcbiAgICAgICAgfSlcbn0iXSwibmFtZXMiOlsiZ3NhcCIsIkNTU1J1bGVQbHVnaW4iLCJuYXZBbmltYXRpb24iLCJzaG93TmF2IiwibmF2RWxlbSIsInRvIiwiY3VycmVudCIsInRvcCIsImR1cmF0aW9uIiwiZWFzZSIsImFycm93QW5pbWF0aW9uIiwiaXNNb3VzZU92ZXIiLCJzZWN0aW9uIiwicmVnaXN0ZXJQbHVnaW4iLCJhcnJvd0FmdGVyRWxlbSIsImFycm93QmVmb3JlRWxlbSIsImFycm93Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0UnVsZSIsImNvbnNvbGUiLCJsb2ciLCJhcnJvd3NNb3ZlUmlnaHQiLCJsZWZ0IiwiYXJyb3dzTW92ZUxlZnQiLCJuYXZBcnJvd0FuaW1hdGlvbiIsIm5hdlN0YXJ0dXBzRWxlbVJlZiIsIm5hdkVsZW1SZWYiLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJ3aWR0aCIsInpvb21GZWF0dXJlZFByb2plY3QiLCJlbGVtIiwic2NhbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});