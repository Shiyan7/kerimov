import {Darken} from '../vendor/darken'

document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeBtns = document.querySelectorAll('.toggle-theme');

  const darken =  new Darken({
    toggle: ".toggle-theme",
    class: 'dark-mode',
    usePrefersColorScheme: false,
    timestamps: {
      dark: "20:00",
      light: "6:00",
    }
  });

  const check = () => {

    toggleThemeBtns.forEach(el => {
      darken.dark ? el.textContent = 'Light mode' : el.textContent = 'Dark mode'
    })
  }

  check()

  toggleThemeBtns.forEach(el => el.addEventListener('click', () => check()))
})