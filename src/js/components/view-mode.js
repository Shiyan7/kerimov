document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.projects-toggle');
  const section = document.querySelector('.projects')
  let isGridState = false;

  btn.addEventListener('click', e => {

    const self = e.currentTarget;

    const setGrid = () => {
      section.classList.add('list')
      section.classList.remove('grid')
      self.textContent = 'view grid'
      isGridState = false
    }

    const setList = () => {
      section.classList.add('grid')
      section.classList.remove('list')
      self.textContent = 'view list'
      isGridState = true
    }

    isGridState ? setGrid() : setList()
  })
})