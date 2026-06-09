'use strict';

import { burger } from './vars.js';
import { lockPage, scrollToBlock } from './functions.js';

const menu = document.querySelector('.menu__body');
const navLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', e => {
  lockPage();
  burger.classList.toggle('active');
  menu.classList.toggle('open');
})

export function initNavigation() {
  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        if (burger.classList.contains('active')) {
          lockPage();
          burger.classList.remove('active');
          menu.classList.remove('open');
        }
      });
    });
  }
}
