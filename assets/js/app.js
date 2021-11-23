var swiper = new Swiper(".testimonial-slider", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".brand-slider", {
  slidesPerView: 4,
  spaceBetween: 30,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".our-slider", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  spaceBetween: 30,
});

const toggle = document.querySelector(".header-bar");
const menu = document.querySelector(".header-navbar-menu");
const activeClass = "is-show";

toggle.addEventListener("click", function () {
  menu.classList.toggle(activeClass);
});

window.addEventListener("scroll", function () {
  var header = this.document.querySelector(".header");
  header.classList.toggle("header-sticky", window.scrollY > 0);
});
