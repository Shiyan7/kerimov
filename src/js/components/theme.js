import {Darken} from '../vendor/darken'

document.addEventListener('DOMContentLoaded', () => {
  const toggleThemeBtns = document.querySelectorAll('.toggle-theme');

  new Darken({
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
      document.documentElement.classList.contains('dark-mode') ? el.textContent = 'Dark mode' : el.textContent = 'Light mode'
    })
  }

  check()

  toggleThemeBtns.forEach(el => el.addEventListener('click', () => check()))
})