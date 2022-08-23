import Swiper, {Navigation} from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.related-slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    navigation: {
      prevEl: '.related-slider__btn--prev',
      nextEl: '.related-slider__btn--next'
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 11
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 11
      }
    }
  })
})