const parallax = document.querySelector('parallax')

// if (parallax) {
//   const content = document.querySelector('.parallax__container')
//   const bg = document.querySelector('.parallax__item_bg')
//   const icons = document.querySelector('.parallax__item_icons')
//   const vegetables = document.querySelector('.parallax__item_vegetables')

//   // koef
//   const kClouds = 40
//   const kMount = 20
//   const kHuman = 10

//   //animation speed
//   const speed = 0.05

//   // variable declaration
//   let positionX = 0,
//     positionY = 0,
//     coordXprocent = 0,
//     coordYprcent = 0

//   // parallax scrolling
//   let thresholdsets = []
//   for (let i = 0; i <= 1.0; i += 0.005) {
//     thresholdsets.push(i)
//   }
//   const cb = function (entries, observer) {
//     const scrollTopProcent = (window.pageYOffset / parallax.offsetHeight) * 100
//     console.log(scrollTopProcent)
//     setParallaxItemsStyle(scrollTopProcent)
//   }

//   const observer = new IntersectionObserver(cb, { threshold: thresholdsets })
//   observer.observe(document.querySelector('.popular'))
//   function setParallaxItemsStyle(scrollTopProcent) {
//     bg.style.cssText = `transform:translate(0%, -$(scrollTopProcent / 9)%)`
//     icons.parentElement.style.cssText = `transform:translate(0%, -$(scrollTopProcent / 6)%)`
//     vegetables.parentElement.style.cssText = `transform:translate(0%, -$(scrollTopProcent / 3)%)`
//   }
// }
