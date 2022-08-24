document.addEventListener('DOMContentLoaded', () => {
  const showMoreWrappers = document.querySelectorAll('[data-show-more]');

  showMoreWrappers?.forEach(el => {
    const btn = el.querySelector('[data-show-button]');
    const content = el.querySelector('[data-show-content]')
    const title = el.querySelector('[data-show-title]')

    btn?.addEventListener('click', () => {
      title?.classList.toggle('active')
      content?.classList.toggle('active')
      btn?.classList.toggle('active')
    })
  })
})