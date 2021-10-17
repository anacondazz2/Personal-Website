/** to dos:
 */

// grab needed elements
const my_name = document.getElementById("my-name");
const word_programmer = document.getElementById("word-programmer");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar .menu");
const menuBtn = document.querySelector(".navbar .menu-btn");

// "Patrick Hu" on mouse over
my_name.onclick = (event) => {
   my_name.style.opacity = 1;
}

// "programmer" on mouse click
word_programmer.onclick = (event) => {
   word_programmer.style.opacity = 1;
}

// navbar on scroll
const navbarOnScroll = () => {
   if (window.scrollY > 10) {
      navbar.style.padding = "25px 55px";
      navbar.style.backgroundColor = "rgba(66, 66, 66, 0.75)";
   } else {
      navbar.style.padding = "35px 55px";
      navbar.style.backgroundColor = "";
   }
}
window.onscroll = navbarOnScroll;

// navbar button click
let btn_active = false;
menuBtn.addEventListener("click", (event) => {
   btn_active = !btn_active;
   navbarMenu.style.left = btn_active ? 0 : "-100%";
   document.querySelector(".navbar .menu-btn i").className = btn_active
      ? "fas fa-times"
      : "fas fa-bars";
});
