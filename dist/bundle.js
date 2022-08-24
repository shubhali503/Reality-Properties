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

var spriteUrl = "".concat(window.origin, "/sprite.svg");
var myHeader = document.querySelector(".header");
var navBtn = document.querySelector('.nav-btn');
var hamburger = document.querySelector('.nav-btn__burger');
var navLinks = document.querySelector('.nav-links');
var navItems = document.querySelectorAll('.nav-links__item');
var optionMenu = document.querySelector(".hero__search-select");
var selectBtn = optionMenu.querySelector(".select-btn");
var options = optionMenu.querySelectorAll(".option");
var sBtn_text = optionMenu.querySelector(".select-btn-text");

window.onscroll = function () {
  "use strict";

  if (document.body.scrollTop >= 220 || document.documentElement.scrollTop >= 220) {
    myHeader.classList.add("header-colored");
    myHeader.classList.remove("header-transparent");
  } else {
    myHeader.classList.add("header-transparent");
    myHeader.classList.remove("header-colored");
  }
}; //-------------- Responsive header ----------------------


var showMenu = false;
navBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    navItems.forEach(function (item) {
      return item.classList.add('open');
    });
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navItems.forEach(function (item) {
      return item.classList.remove('open');
    });
    showMenu = false;
  }
} // ----------------- Dropdown toggle Function -------------------------


selectBtn.addEventListener("click", function () {
  return optionMenu.classList.toggle("active");
});
options.forEach(function (option) {
  option.addEventListener("click", function () {
    var selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
}); // ------------------------ Slick Slider ------------------------------

$(document).ready(function () {
  $('.clients__slider').slick({
    centerMode: true,
    // adaptiveHeight: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map