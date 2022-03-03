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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; },\n/* harmony export */   \"navArrowAnimation\": function() { return /* binding */ navArrowAnimation; },\n/* harmony export */   \"zoomFeaturedProject\": function() { return /* binding */ zoomFeaturedProject; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/CSSRulePlugin */ \"./node_modules/gsap/dist/CSSRulePlugin.js\");\n/* harmony import */ var gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// animation of mobile navbar\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\n//animation of featured project arrows and intro arrows\nvar arrowAnimation = function(isMouseOver, section) {\n    gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin((gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default()));\n    var arrowAfterElem, arrowBeforeElem;\n    if (section === 'intro') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_intro_arrows__g3KCF::before\");\n    }\n    if (section === 'share') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_share_arrows__1F0QZ::before\");\n    }\n    if (section === 'spoton') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_spoton_arrows__J_kM8::before\");\n    }\n    if (section === 'orbit') {\n        arrowAfterElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::after\");\n        arrowBeforeElem = gsap_dist_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1___default().getRule(\".Home_featured_orbit_arrows__KwFqM::before\");\n    }\n    var arrowsMoveRight = function() {\n        var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline();\n        tl// gsap.to([arrowAfterElem, arrowBeforeElem],{\n        //     // left: `+= ${arrowAfterElem.clientWidth + arrowBeforeElem.clientWidth}`,\n        //     left: '+=110',\n        //     duration: 0.25,\n        //     ease: 'linear'\n        // })\n        .to(arrowAfterElem, {\n            left: '+=110',\n            duration: 0.25,\n            ease: 'linear'\n        }).to(arrowBeforeElem, {\n            left: 0,\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to([\n            arrowBeforeElem,\n            arrowAfterElem\n        ], {\n            // left: `-= ${arrowAfterElem.clientWidth + arrowBeforeElem.clientWidth}`,\n            left: '-=110',\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\n// animation of nav elem\nvar navArrowAnimation = function(isMouseOver, isMobileScreen, navStartupsElemRef, navElemRef) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            duration: 0.6,\n            ease: 'power2.out'\n        }\n    });\n    if (!isMobileScreen) {\n        isMouseOver ? tl.to(navStartupsElemRef.current, {\n            x: \"-\".concat(navStartupsElemRef.current.clientWidth * 0.25)\n        }).to(navElemRef.current, {\n            x: 0\n        }, '-=0.6') : tl.to(navElemRef.current, {\n            x: \"-\".concat(navElemRef.current.clientWidth * 0.25)\n        }).to(navStartupsElemRef.current, {\n            x: 0\n        }, '-=0.6');\n    }\n};\n//Zoom in and out of featured project img \nvar zoomFeaturedProject = function(isMouseOver, elem) {\n    isMouseOver ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1.05,\n        duration: 0.6,\n        ease: 'power2inOut'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1,\n        duration: 0.6,\n        ease: 'power2inOut'\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUM4QixJQUFJLENBQUN4QixPQUFPLENBQUN5QixhQUFhLENBQUMsQ0FBVSxZQUFFLENBQUM7UUFDNUNDLEtBQUssRUFBRSxDQUFDO1FBQ1J4QixRQUFRLEVBQUUsR0FBRztRQUNiQyxJQUFJLEVBQUUsQ0FBYTtJQUN2QixDQUFDO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hbmltYXRpb24vaW5kZXguanM/ZmRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xuaW1wb3J0IENTU1J1bGVQbHVnaW4gZnJvbSAnZ3NhcC9kaXN0L0NTU1J1bGVQbHVnaW4nXG5cbi8vIGFuaW1hdGlvbiBvZiBtb2JpbGUgbmF2YmFyXG5leHBvcnQgY29uc3QgbmF2QW5pbWF0aW9uID0gKHNob3dOYXYsIG5hdkVsZW0pPT57XG4gICAgLy8gSWYgdXNlciBzY3JvbGwgdXAgc2hvd05hdiBpcyB0cnVlLCBuYXZiYXIgYXBwZWFyXG4gICAgc2hvd05hdiA/IFxuICAgICAgICBnc2FwLnRvKG5hdkVsZW0uY3VycmVudCx7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH0pXG4gICAgOlxuICAgICAgICBnc2FwLnRvKG5hdkVsZW0uY3VycmVudCx7XG4gICAgICAgICAgICB0b3A6ICctNS42cmVtJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfSk7XG59O1xuXG4vL2FuaW1hdGlvbiBvZiBmZWF0dXJlZCBwcm9qZWN0IGFycm93cyBhbmQgaW50cm8gYXJyb3dzXG5leHBvcnQgY29uc3QgYXJyb3dBbmltYXRpb24gPSAoaXNNb3VzZU92ZXIsIHNlY3Rpb24pPT57XG4gICAgZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NSdWxlUGx1Z2luKTtcbiAgICBsZXQgYXJyb3dBZnRlckVsZW0sYXJyb3dCZWZvcmVFbGVtO1xuXG4gICAgaWYoc2VjdGlvbiA9PT0gJ2ludHJvJyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfaW50cm9fYXJyb3dzX19nM0tDRjo6YWZ0ZXJcIik7XG4gICAgICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ludHJvX2Fycm93c19fZzNLQ0Y6OmJlZm9yZVwiKTtcbiAgICB9XG4gICAgaWYoc2VjdGlvbiA9PT0gJ3NoYXJlJyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc2hhcmVfYXJyb3dzX18xRjBRWjo6YWZ0ZXJcIik7XG4gICAgICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX3NoYXJlX2Fycm93c19fMUYwUVo6OmJlZm9yZVwiKTtcbiAgICB9XG4gICAgaWYoc2VjdGlvbiA9PT0gJ3Nwb3Rvbicpe1xuICAgICAgICBhcnJvd0FmdGVyRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX3Nwb3Rvbl9hcnJvd3NfX0pfa004OjphZnRlclwiKTtcbiAgICAgICAgYXJyb3dCZWZvcmVFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfc3BvdG9uX2Fycm93c19fSl9rTTg6OmJlZm9yZVwiKTtcbiAgICB9XG4gICAgaWYoc2VjdGlvbiA9PT0gJ29yYml0Jyl7XG4gICAgICAgIGFycm93QWZ0ZXJFbGVtID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLkhvbWVfZmVhdHVyZWRfb3JiaXRfYXJyb3dzX19Ld0ZxTTo6YWZ0ZXJcIik7XG4gICAgICAgIGFycm93QmVmb3JlRWxlbSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi5Ib21lX2ZlYXR1cmVkX29yYml0X2Fycm93c19fS3dGcU06OmJlZm9yZVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcnJvd3NNb3ZlUmlnaHQgPSAoKT0+e1xuICAgICAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbiAgICAgICAgdGxcbiAgICAgICAgLy8gZ3NhcC50byhbYXJyb3dBZnRlckVsZW0sIGFycm93QmVmb3JlRWxlbV0se1xuICAgICAgICAvLyAgICAgLy8gbGVmdDogYCs9ICR7YXJyb3dBZnRlckVsZW0uY2xpZW50V2lkdGggKyBhcnJvd0JlZm9yZUVsZW0uY2xpZW50V2lkdGh9YCxcbiAgICAgICAgLy8gICAgIGxlZnQ6ICcrPTExMCcsXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgLy8gICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIC8vIH0pXG4gICAgICAgIC50byhhcnJvd0FmdGVyRWxlbSx7XG4gICAgICAgICAgICBsZWZ0OiAnKz0xMTAnLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMjUsXG4gICAgICAgICAgICBlYXNlOiAnbGluZWFyJ1xuICAgICAgICB9KVxuICAgICAgICAudG8oYXJyb3dCZWZvcmVFbGVtLHtcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgICAgIGVhc2U6ICdsaW5lYXInXG4gICAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zdCBhcnJvd3NNb3ZlTGVmdD0oKT0+e1xuICAgICAgICBnc2FwLnRvKFthcnJvd0JlZm9yZUVsZW0sIGFycm93QWZ0ZXJFbGVtXSx7XG4gICAgICAgICAgICAvLyBsZWZ0OiBgLT0gJHthcnJvd0FmdGVyRWxlbS5jbGllbnRXaWR0aCArIGFycm93QmVmb3JlRWxlbS5jbGllbnRXaWR0aH1gLFxuICAgICAgICAgICAgbGVmdDogJy09MTEwJyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1LFxuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcidcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBpc01vdXNlT3Zlcj8gYXJyb3dzTW92ZVJpZ2h0KCkgOiBhcnJvd3NNb3ZlTGVmdCgpO1xufTtcblxuLy8gYW5pbWF0aW9uIG9mIG5hdiBlbGVtXG5leHBvcnQgY29uc3QgbmF2QXJyb3dBbmltYXRpb24gPShpc01vdXNlT3ZlciwgaXNNb2JpbGVTY3JlZW4sIG5hdlN0YXJ0dXBzRWxlbVJlZiwgbmF2RWxlbVJlZik9PntcbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBkZWZhdWx0czp7XG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMi5vdXQnXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZighaXNNb2JpbGVTY3JlZW4pe1xuICAgICAgICBpc01vdXNlT3Zlcj9cbiAgICAgICAgICAgIHRsXG4gICAgICAgICAgICAgICAgLnRvKG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICAgICAgeDogYC0keyBuYXZTdGFydHVwc0VsZW1SZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuMjV9YCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhuYXZFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LCctPTAuNicpXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICB0bFxuICAgICAgICAgICAgICAgIC50byhuYXZFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgICAgICB4OiBgLSR7IG5hdkVsZW1SZWYuY3VycmVudC5jbGllbnRXaWR0aCAqIDAuMjV9YCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50byhuYXZTdGFydHVwc0VsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgICAgIHg6IDBcbiAgICAgICAgICAgICAgICB9LCctPTAuNicpXG4gICAgfVxufTtcblxuLy9ab29tIGluIGFuZCBvdXQgb2YgZmVhdHVyZWQgcHJvamVjdCBpbWcgXG5leHBvcnQgY29uc3Qgem9vbUZlYXR1cmVkUHJvamVjdCA9KGlzTW91c2VPdmVyLCBlbGVtKT0+e1xuICAgIGlzTW91c2VPdmVyID9cbiAgICAgICAgZ3NhcC50byhlbGVtLmN1cnJlbnQucXVlcnlTZWxlY3Rvcignc3BhbiBpbWcnKSx7XG4gICAgICAgICAgICBzY2FsZTogMS4wNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyaW5PdXQnXG4gICAgICAgIH0pXG4gICAgOlxuICAgICAgICBnc2FwLnRvKGVsZW0uY3VycmVudC5xdWVyeVNlbGVjdG9yKCdzcGFuIGltZycpLHtcbiAgICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjJpbk91dCdcbiAgICAgICAgfSlcbn0iXSwibmFtZXMiOlsiZ3NhcCIsIkNTU1J1bGVQbHVnaW4iLCJuYXZBbmltYXRpb24iLCJzaG93TmF2IiwibmF2RWxlbSIsInRvIiwiY3VycmVudCIsInRvcCIsImR1cmF0aW9uIiwiZWFzZSIsImFycm93QW5pbWF0aW9uIiwiaXNNb3VzZU92ZXIiLCJzZWN0aW9uIiwicmVnaXN0ZXJQbHVnaW4iLCJhcnJvd0FmdGVyRWxlbSIsImFycm93QmVmb3JlRWxlbSIsImdldFJ1bGUiLCJhcnJvd3NNb3ZlUmlnaHQiLCJ0bCIsInRpbWVsaW5lIiwibGVmdCIsImFycm93c01vdmVMZWZ0IiwibmF2QXJyb3dBbmltYXRpb24iLCJpc01vYmlsZVNjcmVlbiIsIm5hdlN0YXJ0dXBzRWxlbVJlZiIsIm5hdkVsZW1SZWYiLCJkZWZhdWx0cyIsIngiLCJjbGllbnRXaWR0aCIsInpvb21GZWF0dXJlZFByb2plY3QiLCJlbGVtIiwicXVlcnlTZWxlY3RvciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});