import Swiper, {Navigation} from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.recognition-slider__inner');

  sliders.forEach(el => {
    const parent = el.closest('.recognition-slider__wrapper')
    const prevEl = parent?.querySelector('.recognition-slider__btn--prev')
    const nextEl = parent?.querySelector('.recognition-slider__btn--next')

    new Swiper(el, {
      slidesPerView: 'auto',
      modules: [Navigation],
      navigation: {prevEl, nextEl},
    })
  })
})