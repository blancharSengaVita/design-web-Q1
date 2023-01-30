/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar settings = {\n  imageRatio: 1.5\n};\nvar addClassToPotraitImages = {\n  calculate: function calculate(image) {\n    return image.naturalWidth / image.naturalHeight;\n  },\n  init: function init() {\n    this.images = document.getElementsByTagName('img');\n    this.addClasses();\n  },\n  changeBackgroundColor: function changeBackgroundColor(image) {\n    image.addEventListener('mouseenter', function () {\n      document.body.classList.add('black');\n    });\n  },\n  addTransitionEndEvent: function addTransitionEndEvent(image) {\n    image.addEventListener('transitionend', function (e) {\n      document.body.classList.remove('black');\n    });\n  },\n  addClasses: function addClasses() {\n    var _iterator = _createForOfIteratorHelper(this.images),\n      _step;\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var image = _step.value;\n        if (this.calculate(image) < settings.imageRatio) {\n          image.classList.add('portrait');\n        }\n        this.changeBackgroundColor(image);\n        this.addTransitionEndEvent(image);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }\n};\naddClassToPotraitImages.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsIm5hbWVzIjpbInNldHRpbmdzIiwiaW1hZ2VSYXRpbyIsImFkZENsYXNzVG9Qb3RyYWl0SW1hZ2VzIiwiY2FsY3VsYXRlIiwiaW1hZ2UiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiaW5pdCIsImltYWdlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhZGRDbGFzc2VzIiwiY2hhbmdlQmFja2dyb3VuZENvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRUcmFuc2l0aW9uRW5kRXZlbnQiLCJlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNS1nYWxlcmllLy4vc3JjL2pzL21haW4uanM/NTY4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZXR0aW5ncyA9IHtcbiAgaW1hZ2VSYXRpbzogMS41XG59XG5cbmNvbnN0IGFkZENsYXNzVG9Qb3RyYWl0SW1hZ2VzID0ge1xuXG4gIGNhbGN1bGF0ZTogKGltYWdlKSA9PiBpbWFnZS5uYXR1cmFsV2lkdGggLyBpbWFnZS5uYXR1cmFsSGVpZ2h0LFxuXG4gIGluaXQgKCkge1xuICAgIHRoaXMuaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2ltZycpO1xuICAgIHRoaXMuYWRkQ2xhc3NlcygpO1xuICB9LFxuXG4gIGNoYW5nZUJhY2tncm91bmRDb2xvciAoaW1hZ2UpIHtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdibGFjaycpO1xuICAgIH0pXG5cbiAgfSxcbiAgYWRkVHJhbnNpdGlvbkVuZEV2ZW50KGltYWdlKXtcbiAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywoZSk9PntcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYmxhY2snKTtcbiAgICB9KVxuICB9LFxuXG4gIGFkZENsYXNzZXMgKCkge1xuICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgdGhpcy5pbWFnZXMpIHtcbiAgICAgIGlmICh0aGlzLmNhbGN1bGF0ZShpbWFnZSkgPCBzZXR0aW5ncy5pbWFnZVJhdGlvKSB7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLmNoYW5nZUJhY2tncm91bmRDb2xvcihpbWFnZSk7XG4gICAgICB0aGlzLmFkZFRyYW5zaXRpb25FbmRFdmVudChpbWFnZSk7XG4gICAgfVxuICB9XG59XG5cbmFkZENsYXNzVG9Qb3RyYWl0SW1hZ2VzLmluaXQoKVxuXG4iXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU1BLFFBQVEsR0FBRztFQUNmQyxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRUQsSUFBTUMsdUJBQXVCLEdBQUc7RUFFOUJDLFNBQVMsRUFBRSxtQkFBQ0MsS0FBSztJQUFBLE9BQUtBLEtBQUssQ0FBQ0MsWUFBWSxHQUFHRCxLQUFLLENBQUNFLGFBQWE7RUFBQTtFQUU5REMsSUFBSSxrQkFBSTtJQUNOLElBQUksQ0FBQ0MsTUFBTSxHQUFHQyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLEtBQUssQ0FBQztJQUNsRCxJQUFJLENBQUNDLFVBQVUsRUFBRTtFQUNuQixDQUFDO0VBRURDLHFCQUFxQixpQ0FBRVIsS0FBSyxFQUFFO0lBQzVCQSxLQUFLLENBQUNTLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFNO01BQ3pDSixRQUFRLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUMsQ0FBQztFQUVKLENBQUM7RUFDREMscUJBQXFCLGlDQUFDYixLQUFLLEVBQUM7SUFDMUJBLEtBQUssQ0FBQ1MsZ0JBQWdCLENBQUMsZUFBZSxFQUFDLFVBQUNLLENBQUMsRUFBRztNQUMxQ1QsUUFBUSxDQUFDSyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDLENBQUM7RUFDSixDQUFDO0VBRURSLFVBQVUsd0JBQUk7SUFBQSwyQ0FDUSxJQUFJLENBQUNILE1BQU07TUFBQTtJQUFBO01BQS9CLG9EQUFpQztRQUFBLElBQXRCSixLQUFLO1FBQ2QsSUFBSSxJQUFJLENBQUNELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUdKLFFBQVEsQ0FBQ0MsVUFBVSxFQUFFO1VBQy9DRyxLQUFLLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNqQztRQUNBLElBQUksQ0FBQ0oscUJBQXFCLENBQUNSLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUNhLHFCQUFxQixDQUFDYixLQUFLLENBQUM7TUFDbkM7SUFBQztNQUFBO0lBQUE7TUFBQTtJQUFBO0VBQ0g7QUFDRixDQUFDO0FBRURGLHVCQUF1QixDQUFDSyxJQUFJLEVBQUUifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDUtZ2FsZXJpZS8uL3NyYy9zY3NzL21haW4uc2Nzcz9hNzYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_05_galerie"] = self["webpackChunk_05_galerie"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;