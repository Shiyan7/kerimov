import Fullpage from 'fullpage.js'

document.addEventListener('DOMContentLoaded', () => {

  const scrollToTop = document.querySelector('.footer__scroll-top')
  const header = document.querySelector('.header')

  const fullpage = new Fullpage('#fullpage', {
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

  scrollToTop?.addEventListener('click', () => {
    fullpage.moveTo()
  })
});