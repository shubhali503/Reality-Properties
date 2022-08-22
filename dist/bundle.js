/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/styles.scss":
/*!**************************!*\
  !*** ./sass/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ "./sass/styles.scss");

// import bgImg from '../assets/images/background.jpg';

// const img = document.getElementsByTagName('img');

// img.src = bgImg;

const spriteUrl = `${window.origin}/sprite.svg`;

const myHeader = document.querySelector(".header");

const navBtn = document.querySelector('.nav-btn');
const hamburger = document.querySelector('.nav-btn__burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links__item');

const optionMenu = document.querySelector(".hero__search-select");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".select-btn-text");

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 220 || document.documentElement.scrollTop >= 220 ) {
        myHeader.classList.add("header-colored");
        myHeader.classList.remove("header-transparent");
    } 
    else {
        myHeader.classList.add("header-transparent");
        myHeader.classList.remove("header-colored");
    }
};

//-------------- Responsive header ----------------------

let showMenu = false;

navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

  if(!showMenu) {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

// ----------------- Dropdown toggle Function -------------------------

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map