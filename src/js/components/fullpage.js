import Fullpage from 'fullpage.js'

document.addEventListener('DOMContentLoaded', () => {

  const scrollToTop = document.querySelector('.footer__scroll-top')

  const fullpage = new Fullpage('#fullpage', {
	  slideSelector: '.fullpage-slide',
    normalScrollElements: '.menu',
  })

  scrollToTop?.addEventListener('click', () => {
    fullpage.moveTo()

    console.log(fullpage);
  })
});