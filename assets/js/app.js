/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//= scripts.js\r\n//= slider-range.js\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/scripts.js":
/*!**********************************!*\
  !*** ./src/assets/js/scripts.js ***!
  \**********************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\n\r\nmodalBtn.forEach((item) => {\r\n  item.addEventListener('click', (event) => {\r\n    let $this = event.currentTarget;\r\n    let modalId = $this.getAttribute('data-modal');\r\n    let modal = document.getElementById(modalId);\r\n\r\n    modal.classList.add('modal--active');\r\n  });\r\n});\r\n\r\nmodalClose.forEach((item) => {\r\n  item.addEventListener('click', (event) => {\r\n    let currentModal = event.currentTarget.closest('.modal');\r\n\r\n    closeModal(currentModal);\r\n  });\r\n});\r\n\r\nconst closeModal = (currentModal) => {\r\n  currentModal.classList.remove('modal--active');\r\n};\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scripts.js?");

/***/ }),

/***/ "./src/assets/js/slider-range.js":
/*!***************************************!*\
  !*** ./src/assets/js/slider-range.js ***!
  \***************************************/
/***/ (function() {

eval("window.onload = () => {\r\n  slOne();\r\n  slTwo();\r\n};\r\n\r\nlet sliderOne = document.getElementById('slider_1');\r\nlet sliderTwo = document.getElementById('slider_2');\r\nlet displayValOne = document.getElementById('outValue_1');\r\nlet displayValTwo = document.getElementById('outValue_2');\r\nlet minGap = 5;\r\nlet sliderTrack = document.querySelector('.range__track');\r\nlet sliderMaxValue = document.getElementById('slider_1').max;\r\n\r\n\r\nsliderOne.addEventListener('input', () => {\r\n  slOne();\r\n})\r\n\r\nsliderTwo.addEventListener('input', () => {\r\n  slTwo();\r\n});\r\n\r\nconst slOne = () => {\r\n  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\r\n    sliderOne.value = parseInt(sliderTwo.value) - minGap;\r\n  }\r\n  displayValOne.value = sliderOne.value;\r\n  fillColor();\r\n}\r\n\r\nconst slTwo = () => {\r\n  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {\r\n    sliderTwo.value = parseInt(sliderOne.value) + minGap;\r\n  }\r\n  displayValTwo.value = sliderTwo.value;\r\n  fillColor();\r\n}\r\nconst fillColor = () => {\r\n  percent1 = (sliderOne.value / sliderMaxValue) * 100;\r\n  percent2 = (sliderTwo.value / sliderMaxValue) * 100;\r\n  sliderTrack.style.background = `linear-gradient(to right, #dbdbdb ${percent1}% , #91c92f ${percent1}% , #91c92f ${percent2}%, #dbdbdb ${percent2}%)`;\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider-range.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/scripts.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider-range.js"]();
/******/ 	
/******/ })()
;