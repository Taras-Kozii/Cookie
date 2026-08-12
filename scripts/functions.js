'use strict';

import { page, header } from './vars.js';

export function getScrollValue(link) {
  const block = document.querySelector(link.dataset.goto);

  if (!block) return 0;

  return ( block.getBoundingClientRect().top + window.scrollY - header.offsetHeight);
}
export function scrollToBlock(link) {
  const scrollValue = getScrollValue(link);
  window.scrollTo({
    behavior: "smooth",
    top: scrollValue,
  });
}
export function lockPage() {
  const rightPaddingValue = window.innerWidth - document.documentElement.clientWidth + 'px';
  setFixPadding(rightPaddingValue);
  page.classList.toggle('lock');

  function setFixPadding(paddingRight) {
  const fixItems = document.querySelectorAll('.right-fix-padding');

  for (const item of fixItems) {
    item.style.paddingRight = paddingRight;
  }
}
}