// grab needed elements
const html = document.querySelector("html");
const welcomeText = document.querySelector(".home .large-panel-text");
const goodbyeText = document.querySelector(".footer .large-panel-text");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar .menu");
const hamburger = document.querySelector(".navbar .hamburger.fas");
const nav_links = document.querySelectorAll(".navbar .menu li a");

// functions
const atEndOfPage = () => {
   return Math.abs(html.scrollHeight - html.scrollTop - html.clientHeight) <= 3.0;
}
const updateBurgerIcon = () => {
   document.querySelector(".navbar .hamburger.fas").className = burger_active
   ? "hamburger fas fa-times" // 'x' close button
   : "hamburger fas fa-bars"; // triple bar menu button
}

// hamburger on-click
let burger_active = false;
hamburger.addEventListener("click", (event) => {
   burger_active = !burger_active;
   navbar.classList.add("darken");
   navbarMenu.classList.toggle("dropdown");
   updateBurgerIcon();
});

// nav-links on-click when burger is active
for (let i = 0; i < nav_links.length; i++) {
   nav_links[i].addEventListener("click", (event) => {
      if (burger_active) {
         // retract the dropdown menu
         navbarMenu.classList.remove("dropdown");
         burger_active = false;
         updateBurgerIcon();
      }
   })
}

// on scroll
const navbarOnScroll = () => {
   if (atEndOfPage()) {
      navbar.classList.remove("darken");
   } else if (window.scrollY > 40 || burger_active) {
      navbar.classList.add("darken");
   } else {
      navbar.classList.remove("darken");
   }
};
window.onscroll = navbarOnScroll;

// home welcome text on hover
window.onload = (event) => {
   welcomeText.style.opacity = 1;
   goodbyeText.style.opacity = 1;
};