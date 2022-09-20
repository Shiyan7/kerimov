import Fullpage from 'fullpage.js'

const scrollToTop = document.querySelector('.footer__scroll-top')
const header = document.querySelector('.header')

scrollToTop?.addEventListener('click', () => {
  fullpage.moveTo()
})

export const fullpage = new Fullpage('#fullpage', {
  slideSelector: '.fullpage-slide',
  normalScrollElements: '.menu',

  onLeave: function(section, slide, position, direction){
    if(slide.isLast) {
      header.classList.add('header--hidden')
    } else {
      header.classList.remove('header--hidden')
    }
  },
})