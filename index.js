/** to dos:
 */

// grab needed elements
const my_name = document.getElementById("my-name");
const word_programmer = document.getElementById("word-programmer");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar .menu");
const hamburger = document.querySelector(".navbar .hamburger");

// hamburger on-click
let burger_active = false;
hamburger.addEventListener("click", (event) => {
   burger_active = !burger_active;
   navbar.classList.add("darken");
   navbarMenu.classList.toggle("dropdown");
   document.querySelector(".navbar .hamburger i").className = burger_active
      ? "fas fa-times"
      : "fas fa-bars";
});

// on scroll
const navbarOnScroll = () => {
   if (window.scrollY > 40 || burger_active) {
      navbar.classList.add("darken");
   } else {
      navbar.classList.remove("darken");
   }
};
window.onscroll = navbarOnScroll;    

// "Patrick Hu" on mouse over
my_name.onclick = (event) => {
   my_name.style.opacity = 1;
};

// "programmer" on mouse click
word_programmer.onclick = (event) => {
   word_programmer.style.opacity = 1;
};
