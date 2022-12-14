import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

document.addEventListener('DOMContentLoaded', () => {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('g-burger--active');
    menu?.classList.toggle('menu--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });
})