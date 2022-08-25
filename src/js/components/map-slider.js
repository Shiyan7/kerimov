document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', e => {
    if(e.target.closest('.map-point')) {

      const parent = e.target.closest('.map-point')
      const content = parent.querySelector('.map-point__content')

      content.classList.toggle('active')
    } else {
      const content = document.querySelectorAll('.map-point__content.active')

      content?.forEach(el => {
        el?.classList.remove('active')
      })
    }
  })
});