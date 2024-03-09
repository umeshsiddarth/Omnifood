"use strict";

// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

// console.log(currentYear);

const hamMenu = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");

hamMenu.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  console.log("Clicked");
});

// Smooth Scrolling

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll Back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to Other Links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Menu
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});
