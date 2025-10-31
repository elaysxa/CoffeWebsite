const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(" .nav-menu .nav-link");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCurson: true,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    //Responsive
    0: {
      slidesPerView:1,
    },
    700: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});
