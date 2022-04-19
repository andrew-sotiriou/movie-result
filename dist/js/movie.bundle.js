/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/movie.js":
/*!*************************!*\
  !*** ./src/js/movie.js ***!
  \*************************/
/***/ (() => {

eval("function processAJAXCalls(object) {\n  var parentDiv = document.getElementsByClassName('content-columns')[0];\n  var childDiv = document.getElementsByClassName('add-content')[0];\n\n  if (object.Response) {\n    object.Search.forEach(function (num, i, array) {\n      parentDiv.insertBefore(createDiv(object.Search[i]), childDiv);\n    });\n  }\n}\n\nfunction createDiv(info) {\n  var contentBox = document.createElement(\"div\");\n  contentBox.setAttribute(\"class\", 'content-box');\n  var infoBoxContainer = document.createElement(\"div\");\n  infoBoxContainer.setAttribute(\"class\", 'content-info-box');\n  infoBoxContainer.appendChild(createParagraph(info.Title, 'movie-title'));\n  infoBoxContainer.appendChild(createParagraph(info.Year, 'movie-year'));\n  contentBox.appendChild(infoBoxContainer);\n  contentBox.appendChild(createImg(info.Poster, 'movie-poster', info.Title, info.Title));\n  return contentBox;\n}\n\nfunction createParagraph(text, className) {\n  var pTag = document.createElement(\"p\");\n  pTag.setAttribute(\"class\", className);\n  var pText = document.createTextNode(text);\n  pTag.appendChild(pText);\n  return pTag;\n}\n\nfunction createImg(imgURL, className, imgAlt, imgTitle) {\n  var imgTag = document.createElement(\"img\");\n  imgTag.src = imgURL;\n  imgTag.setAttribute(\"class\", className);\n  imgTag.alt = imgAlt ? imgAlt : null;\n  imgTag.title = imgTitle ? imgTitle : null;\n  return imgTag;\n}\n\nfunction fetchData(term) {\n  var fetchURL = \"http://www.omdbapi.com/?s=\".concat(term, \"&apikey=a4d98298\");\n  fetch(fetchURL).then(function (response) {\n    return response.json();\n  }, function (networkError) {\n    console.log(networkError.message);\n  }).then(function (data) {\n    processAJAXCalls(data);\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  fetchData('coach');\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var plusCircle = document.getElementsByClassName(\"plus-circle\")[0];\n  plusCircle.addEventListener('click', function (e) {\n    var inputContainer = document.getElementById(\"input-box-container\");\n    var inputBox = document.createElement(\"input\");\n    inputBox.setAttribute(\"class\", \"input-box\");\n    inputContainer.appendChild(inputBox);\n    var submitBtn = document.createElement(\"button\");\n    submitBtn.setAttribute(\"class\", \"orange-btn\");\n    submitBtn.innerHTML = \"Submit New Movie\";\n    inputContainer.appendChild(submitBtn);\n    var addContentDiv = document.getElementsByClassName('add-content')[0];\n    addContentDiv.className += \" added-box\";\n    inputBox.focus();\n    var orangeSubmit = document.getElementsByClassName(\"orange-btn\")[0];\n    orangeSubmit.addEventListener('click', function () {\n      fetchData(document.getElementsByClassName('input-box')[0].value);\n      inputContainer.innerHTML = '';\n      addContentDiv.className = \"add-content\";\n    });\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var hamburger = {\n    navToggle: document.querySelector('.nav-toggle'),\n    nav: document.querySelector('nav'),\n    main: document.querySelector('.main'),\n    doToggle: function doToggle(e) {\n      e.preventDefault();\n      this.navToggle.classList.toggle('expanded');\n      this.nav.classList.toggle('expanded');\n      this.main.classList.toggle('pushIt');\n    }\n  };\n  hamburger.navToggle.addEventListener('click', function (e) {\n    if (e.target.tagName.toLowerCase() !== 'a') {\n      hamburger.doToggle(e);\n    }\n  });\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var links = document.getElementsByClassName(\"nav-item\");\n\n  for (var i = 0; i < links.length; i++) {\n    var link = links[i];\n\n    link.onclick = function () {\n      var prev = document.getElementsByClassName(\"active\");\n\n      if (prev && prev[0]) {\n        prev[0].className = \"\";\n      }\n\n      this.className += \" active\";\n    };\n  }\n});\n\n//# sourceURL=webpack://movie-results/./src/js/movie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/movie.js"]();
/******/ 	
/******/ })()
;