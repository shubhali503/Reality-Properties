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