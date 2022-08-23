document.addEventListener('DOMContentLoaded', () => {

  const fullpage = document.querySelector('.fullpage');
  const arrow = document.querySelector('.scroll-down');

  const checkScroll = () => {
    const isScrolled = fullpage.scrollTop >= 1

    isScrolled ? arrow?.classList.add('fade') : arrow?.classList.remove('fade')
  }

  checkScroll()

  fullpage.addEventListener('scroll', checkScroll)
})