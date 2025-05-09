let dropdown__icon = document.querySelector(".dropdown__icon");
let dropdown__menu = document.querySelector(".dropdown__content");

    dropdown__icon.addEventListener("click", () => {
        dropdown__menu.style.display = dropdown__menu.style.display === "block" ? "none" : "block";
    });


let close__button = document.querySelector(".close-button");
let alert = document.querySelector("#new-visitor-alert");
let header = document.querySelector(".header");

   
    close__button.addEventListener("click", () => 
      {
        alert.style.display = "none";
        header.style.paddingTop = "0";
    });
      

let close__mobile__nav = document.querySelector(".mobile-nav-close");
let nav__container = document.querySelector(".nav-container");
let hamburger = document.querySelector(".hamburger");

if (nav__container && close__mobile__nav && hamburger) {
  close__mobile__nav.addEventListener("click", () => {
    nav__container.style.left = "-100%";
  });

  document.addEventListener("click", (event) => {
    if (!nav__container.contains(event.target) && event.target !== close__mobile__nav && event.target !== hamburger) {
      nav__container.style.left = "-100%";
    }
  });

  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    nav__container.style.left = nav__container.style.left == "0%" ? "-100%" : "0%";
  });
}