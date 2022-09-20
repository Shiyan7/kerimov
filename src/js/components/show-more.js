import $ from 'jquery'
import Fullpage from 'fullpage.js'

document.addEventListener('DOMContentLoaded', () => {
  const showMoreWrappers = document.querySelectorAll('[data-show-more]');

  const fullpage = new Fullpage('#fullpage')

  showMoreWrappers?.forEach(el => {
    const btn = el.querySelector('[data-show-button]');
    const content = el.querySelector('[data-show-content]')
    const wrapper = $('.about-text__wrapper')
    const title = el.querySelector('[data-show-title]')

    btn?.addEventListener('click', () => {

      title?.classList.toggle('active')
      content?.classList.toggle('active')
      btn?.classList.toggle('active')

      if(content.classList.contains('active')) {
        wrapper.slideDown(300);
        fullpage.reBuild()
      } else {
        wrapper.slideUp(300)
        fullpage.reBuild()
      }
    })
  })
})