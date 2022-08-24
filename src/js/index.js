import '../sass/styles.scss';
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

// ------------------------ Slick Slider ------------------------------


$(document).ready(function(){
  $('.clients__slider').slick({
    centerMode: true,
    // adaptiveHeight: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: false,
    arrows: true,
    prevArrow:'<button class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow:'<button class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});