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

  current?.addEventListener('click', e => {
    const self = e.currentTarget;

    self.classList.toggle('active');

    tabs.classList.toggle('active')
  })
})