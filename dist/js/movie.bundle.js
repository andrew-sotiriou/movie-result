/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/movie.js":
/*!*************************!*\
  !*** ./src/js/movie.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_movie_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/movie.css */ \"./src/styles/movie.css\");\n/* harmony import */ var _images_image1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/image1.png */ \"./src/images/image1.png\");\n/* harmony import */ var _images_sleepy_scotty_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/sleepy-scotty.jpg */ \"./src/images/sleepy-scotty.jpg\");\nvar _this = undefined;\n\n\n\n\n\nvar processAJAXCalls = function processAJAXCalls(object) {\n  var parentDiv = document.getElementsByClassName('content-columns')[0];\n  var childDiv = document.getElementsByClassName('add-content')[0];\n\n  if (object.Response) {\n    object.Search.forEach(function (num, i, array) {\n      parentDiv.insertBefore(createDiv(object.Search[i]), childDiv);\n    });\n  }\n};\n\nvar createDiv = function createDiv(info) {\n  var contentBox = document.createElement(\"div\");\n  contentBox.setAttribute(\"class\", 'content-box');\n  var infoBoxContainer = document.createElement(\"div\");\n  infoBoxContainer.setAttribute(\"class\", 'content-info-box');\n  infoBoxContainer.appendChild(createParagraph(info.Title, 'movie-title'));\n  infoBoxContainer.appendChild(createParagraph(info.Year, 'movie-year'));\n  contentBox.appendChild(infoBoxContainer);\n  contentBox.appendChild(createImg(info.Poster, 'movie-poster', info.Title, info.Title));\n  return contentBox;\n};\n\nvar createParagraph = function createParagraph(text, className) {\n  var pTag = document.createElement(\"p\");\n  pTag.setAttribute(\"class\", className);\n  var pText = document.createTextNode(text);\n  pTag.appendChild(pText);\n  return pTag;\n};\n\nvar createImg = function createImg(imgURL, className, imgAlt, imgTitle) {\n  var imgTag = document.createElement(\"img\");\n  imgTag.src = imgURL;\n  imgTag.setAttribute(\"class\", className);\n  imgTag.alt = imgAlt ? imgAlt : null;\n  imgTag.title = imgTitle ? imgTitle : null;\n  return imgTag;\n};\n\nvar fetchData = function fetchData(term) {\n  var fetchURL = \"https://www.omdbapi.com/?s=\".concat(term, \"&apikey=a4d98298\");\n  fetch(fetchURL).then(function (response) {\n    return response.json();\n  }, function (networkError) {\n    console.log(networkError.message);\n  }).then(function (data) {\n    processAJAXCalls(data);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  fetchData('coach');\n  var plusCircle = document.getElementsByClassName(\"plus-circle\")[0];\n  plusCircle.addEventListener('click', function (e) {\n    var inputContainer = document.getElementById(\"input-box-container\");\n    var inputBox = document.createElement(\"input\");\n    inputBox.setAttribute(\"class\", \"input-box\");\n    inputContainer.appendChild(inputBox);\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"class\", \"orange-btn\");\n    submitBtn.innerHTML = \"Submit New Movie\";\n    inputContainer.appendChild(submitBtn);\n    var addContentDiv = document.getElementsByClassName('add-content')[0];\n    addContentDiv.className += \" added-box\";\n    inputBox.focus();\n    var orangeSubmit = document.getElementsByClassName(\"orange-btn\")[0];\n    orangeSubmit.addEventListener('click', function () {\n      fetchData(document.getElementsByClassName('input-box')[0].value);\n      inputContainer.innerHTML = '';\n      addContentDiv.className = \"add-content\";\n    });\n  });\n  var hamburger = {\n    navToggle: document.querySelector('.nav-toggle'),\n    nav: document.querySelector('nav'),\n    main: document.querySelector('.main'),\n    doToggle: function doToggle(e) {\n      e.preventDefault();\n      this.navToggle.classList.toggle('expanded');\n      this.nav.classList.toggle('expanded');\n      this.main.classList.toggle('pushIt');\n    }\n  };\n  hamburger.navToggle.addEventListener('click', function (e) {\n    if (e.target.tagName.toLowerCase() !== 'a') {\n      hamburger.doToggle(e);\n    }\n  });\n  var links = document.getElementsByClassName(\"nav-item\");\n\n  for (var i = 0; i < links.length; i++) {\n    var link = links[i];\n\n    link.onclick = function () {\n      var prev = document.getElementsByClassName(\"active\");\n\n      if (prev && prev[0]) {\n        prev[0].className = \"\";\n      }\n\n      _this.className += \" active\";\n    };\n  }\n});\n\n//# sourceURL=webpack://movie-results/./src/js/movie.js?");

/***/ }),

/***/ "./src/styles/movie.css":
/*!******************************!*\
  !*** ./src/styles/movie.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://movie-results/./src/styles/movie.css?");

/***/ }),

/***/ "./src/images/image1.png":
/*!*******************************!*\
  !*** ./src/images/image1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/image1.png\";\n\n//# sourceURL=webpack://movie-results/./src/images/image1.png?");

/***/ }),

/***/ "./src/images/sleepy-scotty.jpg":
/*!**************************************!*\
  !*** ./src/images/sleepy-scotty.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/sleepy-scotty.jpg\";\n\n//# sourceURL=webpack://movie-results/./src/images/sleepy-scotty.jpg?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/movie.js");
/******/ 	
/******/ })()
;