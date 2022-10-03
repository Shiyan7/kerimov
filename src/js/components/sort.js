document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.projects-list__btn');

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      const self = e.currentTarget;

      self.classList.toggle('active')
    })
  })
})