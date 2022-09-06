import fullpage from 'fullpage.js'

document.addEventListener('DOMContentLoaded', () => {
  new fullpage('#fullpage', {
	  slideSelector: '.fullpage-slide',
    normalScrollElements: '.menu'
  })
});