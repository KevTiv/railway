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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navAnimation\": function() { return /* binding */ navAnimation; },\n/* harmony export */   \"arrowAnimation\": function() { return /* binding */ arrowAnimation; },\n/* harmony export */   \"navArrowAnimation\": function() { return /* binding */ navArrowAnimation; },\n/* harmony export */   \"zoomFeaturedProject\": function() { return /* binding */ zoomFeaturedProject; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n// animation of mobile navbar\nvar navAnimation = function(showNav, navElem) {\n    // If user scroll up showNav is true, navbar appear\n    showNav ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: 0,\n        duration: 0.2,\n        ease: 'power2.out'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(navElem.current, {\n        top: '-5.6rem',\n        duration: 0.2,\n        ease: 'power2.out'\n    });\n};\n//animation of featured project arrows and intro arrows\nvar arrowAnimation = function(isMouseOver, arrowContainerRef) {\n    var arrowsMoveRight = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(arrowContainerRef.current, {\n            x: 115,\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    var arrowsMoveLeft = function() {\n        gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(arrowContainerRef.current, {\n            x: 0,\n            duration: 0.25,\n            ease: 'linear'\n        });\n    };\n    isMouseOver ? arrowsMoveRight() : arrowsMoveLeft();\n};\n// animation of nav elem\nvar navArrowAnimation = function(isMouseOver, isMobileScreen, navStartupsElemRef, navElemRef) {\n    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].timeline({\n        defaults: {\n            duration: 0.6,\n            ease: 'power2.out'\n        }\n    });\n    if (!isMobileScreen) {\n        isMouseOver ? tl.to(navStartupsElemRef.current, {\n            x: \"-\".concat(navStartupsElemRef.current.clientWidth * 0.25)\n        }).to(navElemRef.current, {\n            x: 0\n        }, '-=0.6') : tl.to(navElemRef.current, {\n            x: \"-\".concat(navElemRef.current.clientWidth * 0.25)\n        }).to(navStartupsElemRef.current, {\n            x: 0\n        }, '-=0.6');\n    }\n};\n//Zoom in and out of featured project img \nvar zoomFeaturedProject = function(isMouseOver, elem) {\n    isMouseOver ? gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1.05,\n        duration: 0.6,\n        ease: 'power2inOut'\n    }) : gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(elem.current.querySelector('span img'), {\n        scale: 1,\n        duration: 0.6,\n        ease: 'power2inOut'\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUM1Q0MsS0FBSyxFQUFFLElBQUk7UUFDWG5CLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUMsSUFFRFQsK0NBQU8sQ0FBQ3lCLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ29CLGFBQWEsQ0FBQyxDQUFVLFlBQUUsQ0FBQztRQUM1Q0MsS0FBSyxFQUFFLENBQUM7UUFDUm5CLFFBQVEsRUFBRSxHQUFHO1FBQ2JDLElBQUksRUFBRSxDQUFhO0lBQ3ZCLENBQUM7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FuaW1hdGlvbi9pbmRleC5qcz9mZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ1NTUnVsZVBsdWdpbiBmcm9tICdnc2FwL2Rpc3QvQ1NTUnVsZVBsdWdpbidcblxuLy8gYW5pbWF0aW9uIG9mIG1vYmlsZSBuYXZiYXJcbmV4cG9ydCBjb25zdCBuYXZBbmltYXRpb24gPSAoc2hvd05hdiwgbmF2RWxlbSk9PntcbiAgICAvLyBJZiB1c2VyIHNjcm9sbCB1cCBzaG93TmF2IGlzIHRydWUsIG5hdmJhciBhcHBlYXJcbiAgICBzaG93TmF2ID8gXG4gICAgICAgIGdzYXAudG8obmF2RWxlbS5jdXJyZW50LHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfSlcbiAgICA6XG4gICAgICAgIGdzYXAudG8obmF2RWxlbS5jdXJyZW50LHtcbiAgICAgICAgICAgIHRvcDogJy01LjZyZW0nLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjIub3V0J1xuICAgICAgICB9KTtcbn07XG5cbi8vYW5pbWF0aW9uIG9mIGZlYXR1cmVkIHByb2plY3QgYXJyb3dzIGFuZCBpbnRybyBhcnJvd3NcbmV4cG9ydCBjb25zdCBhcnJvd0FuaW1hdGlvbiA9IChpc01vdXNlT3ZlciwgYXJyb3dDb250YWluZXJSZWYpPT57XG4gICAgXG4gICAgY29uc3QgYXJyb3dzTW92ZVJpZ2h0ID0gKCk9PntcbiAgICAgICAgZ3NhcC50byhhcnJvd0NvbnRhaW5lclJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgIHg6IDExNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjI1LFxuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcidcbiAgICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnN0IGFycm93c01vdmVMZWZ0PSgpPT57XG4gICAgICAgIGdzYXAudG8oYXJyb3dDb250YWluZXJSZWYuY3VycmVudCx7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMjUsXG4gICAgICAgICAgICBlYXNlOiAnbGluZWFyJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGlzTW91c2VPdmVyPyBhcnJvd3NNb3ZlUmlnaHQoKSA6IGFycm93c01vdmVMZWZ0KCk7XG59O1xuXG4vLyBhbmltYXRpb24gb2YgbmF2IGVsZW1cbmV4cG9ydCBjb25zdCBuYXZBcnJvd0FuaW1hdGlvbiA9KGlzTW91c2VPdmVyLCBpc01vYmlsZVNjcmVlbiwgbmF2U3RhcnR1cHNFbGVtUmVmLCBuYXZFbGVtUmVmKT0+e1xuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOntcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICBlYXNlOiAncG93ZXIyLm91dCdcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCFpc01vYmlsZVNjcmVlbil7XG4gICAgICAgIGlzTW91c2VPdmVyP1xuICAgICAgICAgICAgdGxcbiAgICAgICAgICAgICAgICAudG8obmF2U3RhcnR1cHNFbGVtUmVmLmN1cnJlbnQse1xuICAgICAgICAgICAgICAgICAgICB4OiBgLSR7IG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogMC4yNX1gLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKG5hdkVsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sJy09MC42JylcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIHRsXG4gICAgICAgICAgICAgICAgLnRvKG5hdkVsZW1SZWYuY3VycmVudCx7XG4gICAgICAgICAgICAgICAgICAgIHg6IGAtJHsgbmF2RWxlbVJlZi5jdXJyZW50LmNsaWVudFdpZHRoICogMC4yNX1gLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRvKG5hdlN0YXJ0dXBzRWxlbVJlZi5jdXJyZW50LHtcbiAgICAgICAgICAgICAgICAgICAgeDogMFxuICAgICAgICAgICAgICAgIH0sJy09MC42JylcbiAgICB9XG59O1xuXG4vL1pvb20gaW4gYW5kIG91dCBvZiBmZWF0dXJlZCBwcm9qZWN0IGltZyBcbmV4cG9ydCBjb25zdCB6b29tRmVhdHVyZWRQcm9qZWN0ID0oaXNNb3VzZU92ZXIsIGVsZW0pPT57XG4gICAgaXNNb3VzZU92ZXIgP1xuICAgICAgICBnc2FwLnRvKGVsZW0uY3VycmVudC5xdWVyeVNlbGVjdG9yKCdzcGFuIGltZycpLHtcbiAgICAgICAgICAgIHNjYWxlOiAxLjA1LFxuICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgIGVhc2U6ICdwb3dlcjJpbk91dCdcbiAgICAgICAgfSlcbiAgICA6XG4gICAgICAgIGdzYXAudG8oZWxlbS5jdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4gaW1nJykse1xuICAgICAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC42LFxuICAgICAgICAgICAgZWFzZTogJ3Bvd2VyMmluT3V0J1xuICAgICAgICB9KVxufSJdLCJuYW1lcyI6WyJnc2FwIiwiQ1NTUnVsZVBsdWdpbiIsIm5hdkFuaW1hdGlvbiIsInNob3dOYXYiLCJuYXZFbGVtIiwidG8iLCJjdXJyZW50IiwidG9wIiwiZHVyYXRpb24iLCJlYXNlIiwiYXJyb3dBbmltYXRpb24iLCJpc01vdXNlT3ZlciIsImFycm93Q29udGFpbmVyUmVmIiwiYXJyb3dzTW92ZVJpZ2h0IiwieCIsImFycm93c01vdmVMZWZ0IiwibmF2QXJyb3dBbmltYXRpb24iLCJpc01vYmlsZVNjcmVlbiIsIm5hdlN0YXJ0dXBzRWxlbVJlZiIsIm5hdkVsZW1SZWYiLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJjbGllbnRXaWR0aCIsInpvb21GZWF0dXJlZFByb2plY3QiLCJlbGVtIiwicXVlcnlTZWxlY3RvciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./animation/index.js\n");

/***/ })

});