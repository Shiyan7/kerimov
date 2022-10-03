import $ from 'jquery'
import {fullpage} from './fullpage'

document.addEventListener('DOMContentLoaded', () => {
  const showMoreWrappers = document.querySelectorAll('[data-show-more]');

  showMoreWrappers?.forEach(el => {
    const btn = el.querySelector('[data-show-button]');
    const content = el.querySelector('[data-show-content]')
    const wrapper = $('.about-text__wrapper')
    const title = el.querySelector('[data-show-title]')
    const section = document.querySelector('.about-text')

    btn?.addEventListener('click', () => {

      title?.classList.toggle('active')
      section?.classList.toggle('section--active')
      content?.classList.toggle('active')
      btn?.classList.toggle('active')

      if(content.classList.contains('active')) {
        wrapper.slideDown(300);
        fullpage.reBuild();
      } else {
        wrapper.slideUp(300)
        fullpage.reBuild();
      }
    })
  })
})