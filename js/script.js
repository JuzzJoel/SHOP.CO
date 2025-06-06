
import { topSellingContent } from "../data/homePageAll/topSelling.js";
import { newArrivalContent } from "../data/homePageAll/newArrivals.js";
import { productDetailContent } from "../data/productDetail.js";
import { casualCategoryContent } from "./category page/casualCategory.js";
import { cart } from "../data/cartDisplay.js";

const newArrivalsSection = document.querySelector('#new__arrivals .products-grid');
if (newArrivalsSection) newArrivalsSection.innerHTML = newArrivalContent;
const topSellingSection = document.querySelector('#top__sales .products-grid');
if (topSellingSection) topSellingSection.innerHTML = topSellingContent; 
const productDetailPage = document.querySelector('#product-detail-page .container');
if (productDetailPage) productDetailPage.innerHTML = productDetailContent;
const cartContainer = document.querySelector('#cart-container');
if (cartContainer) cartContainer.innerHTML += cart;
const casualCategory = document.querySelector('.product-container--casual');
if (casualCategory) casualCategory.innerHTML = casualCategoryContent; // Clear existing content

// This code dynamically generates the HTML content for new arrivals and top selling products and injects it into the page.
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

console.log(casualCategoryContent);