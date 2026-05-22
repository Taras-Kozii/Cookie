'use strict';

export function countAnimate(count) {
  let startTimestamp = null;

  const duraction = parseFloat(count.dataset.counter)
    ? parseInt(count.dataset.counter)
        : 1000;
    const startValue = parseFloat(count.innerHTML);
    const startPosition = 0;

  const step = (timestamp) => {
    if(!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duraction, 1);
      count.innerHTML = Math.floor(progress * (startPosition + startValue));

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
