document.addEventListener("DOMContentLoaded", () => {
  const tabsBtns = document.querySelectorAll('.projects-tabs__btn');
  const items = document.querySelectorAll('.sort-item');
  const current = document.querySelector('.projects-tabs__current');
  const tabs = document.querySelector('.projects-tabs')

  tabsBtns?.forEach(el => {
    el.addEventListener('click', e => {
      const self = e.currentTarget
      const path = self.getAttribute('id');
      tabsBtns.forEach(el => el.classList.remove('active'))
      items.forEach(el => el.classList.remove('active'))

      self.classList.add('active')

      current.querySelector('span').innerHTML = self.innerHTML

      const content = document.querySelectorAll(`.${path}`)

      content.forEach(el => el.classList.add('active'))

    })
  })

  document.addEventListener('click', e => {
    if(e.target.closest(".projects-tabs__current")) {
      current.classList.toggle('active');

      tabs.classList.toggle('active')
    } else if(e.target.classList.contains('projects-tabs')) {
      current.classList.add('active');

      tabs.classList.add('active')
    } else {
      current.classList.remove('active');

      tabs.classList.remove('active')
    }
  })
})