"use strict";

const startDemo = () => {
  const demo = document.querySelector('.demo')
  const hero = document.querySelector('.hero')

  demo.style.display = 'none'
  hero.classList.add('show')
}

document.querySelector('#start-demo').addEventListener('click', function () {
  setInterval(startDemo, 5000)
})


const paginationChange = () => {
  const previewsElements = document.querySelectorAll('.preview-item')
  previewsElements.forEach(el => {
    el.classList.remove('active')
  })
  let activeSlide = swiper.activeIndex
  previewsElements[activeSlide].classList.add('active')
}

const swiper = new Swiper(".demo-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


paginationChange()


swiper.on('slideChange', function (e) {
  paginationChange()
});
const previewsElements = document.querySelectorAll('.preview-item')
previewsElements.forEach((el, index) => {
  el.addEventListener('click', e => {
    swiper.slideTo(index)
  })
})

