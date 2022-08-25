import Swiper, {Navigation} from 'swiper'

document.addEventListener('DOMContentLoaded', () => {

  const sliders = document.querySelectorAll('.map-slider');

  sliders?.forEach(el => {

    const prevEl = el.querySelector('.map-slider__btn--prev')
    const nextEl = el.querySelector('.map-slider__btn--next')

    new Swiper(el, {
      modules: [Navigation],
      slidesPerView: 1,
      navigation: {prevEl, nextEl}
    })
  })
})