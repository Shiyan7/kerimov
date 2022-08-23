import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.hero-slider', {
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
      el: '.hero-slider__pag',
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: '.hero-slider__btn--prev',
      nextEl: '.hero-slider__btn--next',
    }
  })
})