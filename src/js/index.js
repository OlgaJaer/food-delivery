'use strict'

window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // slidesPerView: 5,
    // spaceBetween: 40,
    breakpoints: {
      // when window width is >= 1200px
      1200: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      // when window width is >= 960px
      960: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    // centeredSlides: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    // speed: 400,
    // spaceBetween: 40,
    loop: true,

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
