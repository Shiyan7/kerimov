import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.slide-slider', {
    modules: [Pagination, Autoplay, EffectFade, Navigation],
    slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.slide-slider__pag',
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: '.slide-slider__btn--prev',
      nextEl: '.slide-slider__btn--next',
    }
  })
})