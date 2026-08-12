'use strict';

export function watcherAnim(selector = '.scroll-anim', percent = 0.1, callback = (el) => {}, once = false) {
  const animItems = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        if (once) {
          observerInstance.unobserve(entry.target);
        }
      }
    });
  }, {
    root: null,
    threshold: percent,
  });

  animItems.forEach(el => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
}
export function watcherToggle(selector = '.scroll-anim', percent = 0.1) {
  const animItems = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, {
    root: null,
    threshold: percent,
  });

  animItems.forEach(el => {
    if (el instanceof Element) {
      observer.observe(el);
    }
  });
}

export function scrollAnimProperty(selector, percent, property, scrollValue) {
  const items = document.querySelectorAll(selector);
  for (const elem of [...items]) {
    if (isInView(elem, percent)) {
      elem.style[property] = scrollValue;
    }
  }
  function isInView(elem, persent=0.35) {
  const rect = elem.getBoundingClientRect();
  const elemHeight = elem.offsetHeight;
  const visiblePart = elemHeight * persent;
  
  return rect.bottom > 0 && rect.top < (
    window.innerHeight - visiblePart || document.documentElement.clientHeight - visiblePart);
}
}
