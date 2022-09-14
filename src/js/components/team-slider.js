import Swiper, {Navigation, Grid, Pagination} from 'swiper'

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.team-slider__wrapper', {
    modules: [Navigation, Pagination, Grid],
    grid: {
      fill: 'row',
      rows: 2
    },
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      prevEl: '.team-slider__btn--prev',
      nextEl: '.team-slider__btn--next',
    },
    pagination: {
      el: '.team-slider__pag',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      577: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
        }
      },
      1025: {
        slidesPerView: 4,
        spaceBetween: 38,
        grid: {
          rows: 1,
        }
      }
    },
  })
})