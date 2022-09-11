const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener("click", function () {
  header.classList.toggle("active");
});
