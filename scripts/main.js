'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import { initForms } from './forms.js';
import { initSpollers } from './spollers.js';
import { watcherToggle } from './effects/animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  initForms();
  initSpollers();
  watcherToggle('.white-section-text.scroll-anim p', 0.2);
  watcherToggle('.footer-menu__list.scroll-anim a', 0.2);
  watcherToggle('.privacy.scroll-anim', 0.2);
  watcherToggle('.socials__list.scroll-anim a', 0.2);
  watcherToggle('.button', 0.2);
  watcherToggle('.how__item.scroll-anim', 0.5);
  watcherToggle('.card-values.scroll-anim', 0.35);
});
