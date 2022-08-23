import Swiper, {Navigation} from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.awards-slider__wrapper', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      prevEl: '.awards-slider__btn--prev',
      nextEl: '.awards-slider__btn--next',
    },
    breakpoints: {
      577: {
        spaceBetween: 50,
      }
    }
  })
})