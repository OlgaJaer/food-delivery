'use strict'

window.onload = function () {
  const intViewportHeight = window.innerHeight
  const headerHeight = document.querySelector('.hero').offsetHeight
  const parallaxTop = document.querySelectorAll('.parallax__layer_top')
  const parallaxBottom = document.querySelectorAll('.parallax__layer_bottom')

  window.onscroll = function () {
    var scroll = window.pageYOffset
    var page = window.pageYOffset
    console.log('page', window.pageYOffset)
    console.log('header', headerHeight)

    if (page >= headerHeight) {
      ;[...parallaxTop].forEach((el) => (el.style.width = 0))
      ;[...parallaxBottom].forEach((el) => (el.style.width = '100%'))
    } else {
      ;[...parallaxTop].forEach((el) => (el.style.width = '100%'))
      ;[...parallaxBottom].forEach((el) => (el.style.width = 0))
    }
  }

  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      let blockID = anchor.getAttribute('href').substring(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  const openButton = document.querySelector('.icon')
  const fixedMenu = document.querySelector('.fixed-menu__list')
  const fixedMenuBg = document.querySelector('.fixed-menu')

  openButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (fixedMenu.classList.contains('active')) {
      fixedMenu.classList.remove('active')
    } else {
      fixedMenu.classList.add('active')
    }
  })

  document.addEventListener('click', (e) => {
    if (e.target === fixedMenu) {
      fixedMenu.classList.remove('active')
    }
  })

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
    loop: true,
  })
}
