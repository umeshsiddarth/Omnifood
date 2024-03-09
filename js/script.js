"use strict";

// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

// console.log(currentYear);

const hamMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

hamMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  console.log("Clicked");
});
