'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
// import { VanillaTilt } from './effects/tilt/vanilla-tilt.js';
// import SimpleParallax from './effects/simpleParallax/index.js';
// import { watcherAnim, watcherToggle, countAnimate } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  // new SimpleParallax(document.querySelectorAll('.parallax-img'), {
  //   delay: 0.6,
  //   orientation: 'down',
  //   scale: 1.4,
  //   overflow: false,
  // });
  // VanillaTilt.init(document.querySelectorAll('.categories__img img'), {
	// 	max: 20,
	// 	speed: 300,
  //   glare: true,
  //   'max-glare': 0.5,
  //   'glare-prerender': true,
	// });
  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
