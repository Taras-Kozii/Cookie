http://michalsnik.github.io/aos/

### Add styles

   <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

### Add scripts

  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>

========================================================================================

#### Examples:

  <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
  </div>

  <div
    data-aos="fade-zoom-in"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    data-aos-duration="600"
  >

  <div
    data-aos="flip-left"
    data-aos-delay="100"
    data-aos-anchor=".example-selector"
  >

  <div
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
  >

=============================================================================================================

### 👻 Animations

- Fade animations:

  - fade
  - fade-up
  - fade-down
  - fade-left
  - fade-right
  - fade-up-right
  - fade-up-left
  - fade-down-right
  - fade-down-left

- Flip animations:

  - flip-up
  - flip-down
  - flip-left
  - flip-right

- Slide animations:

  - slide-up
  - slide-down
  - slide-left
  - slide-right

- Zoom animations:
  - zoom-in
  - zoom-in-up
  - zoom-in-down
  - zoom-in-left
  - zoom-in-right
  - zoom-out
  - zoom-out-up
  - zoom-out-down
  - zoom-out-left
  - zoom-out-right

### Anchor placement:

- top-bottom
- top-center
- top-top
- center-bottom
- center-center
- center-top
- bottom-bottom
- bottom-center
- bottom-top

### Easing functions:

Можете вибрати одну з цих функцій синхронізації, щоб гарно анімувати елементи:

- linear
- ease
- ease-in
- ease-out
- ease-in-out
- ease-in-back
- ease-out-back
- ease-in-out-back
- ease-in-sine
- ease-out-sine
- ease-in-out-sine
- ease-in-quad
- ease-out-quad
- ease-in-out-quad
- ease-in-cubic
- ease-out-cubic
- ease-in-out-cubic
- ease-in-quart
- ease-out-quart
- # ease-in-out-quart

### Global settings

Якщо ви не хочете змінювати налаштування для кожного елемента окремо, ви можете змінити їх глобально.

Для цього передайте об'єкт options функції `init()`, ось так:

```javascript
  <script>
    AOS.init();


AOS.init({
  // глобальні налаштування:
  disable: false, // приймає такі значення: 'phone', 'tablet', 'mobile', boolean, умову або функцію
  startEvent: 'DOMContentLoaded', // назва події, що відправляється в документі, для якої AOS має ініціалізуватися
  initClassName: 'aos-init', // class застосовується після ініціалізації
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Налаштування, які можна змінити для кожного елемента окремо, `data-aos-*` attributes:
  offset: 120, // зміщення (у пікселях) від початкової точки спрацьовування
  delay: 0, // значення з 0 to 3000, with step 50ms
  duration: 400, // значення з 0 to 3000, with step 50ms
  easing: 'ease', // стандартне полегшення для анімацій AOS
  once: false, // чи має анімація відбуватися лише один раз — під час прокручування вниз
  mirror: false, // чи повинні елементи анімуватися під час прокручування повз них
  anchorPlacement: 'top-bottom', // визначає, яка позиція елемента відносно вікна має запускати анімацію

});
  </script>
```

=======================================================================================================

#### API

Об'єкт AOS надається як глобальна змінна, наразі доступні три методи:

- `init` - initialize AOS
- `refresh` - recalculate all offsets and positions of elements (called on window resize)
- `refreshHard` - reinit array with AOS elements and trigger `refresh` (called on DOM changes that are related to `aos` elements)

Example execution:

```javascript
AOS.refresh();
```

За замовчуванням AOS стежить за змінами DOM, і якщо асинхронно завантажуються нові елементи або щось видаляється з DOM, він автоматично викликає `refreshHard`. У браузерах, які не підтримують `MutationObserver`, таких як IE, вам може знадобитися самостійно викликати `AOS.refreshHard()`.

Метод `refresh` викликається під час зміни розміру вікна тощо, оскільки він не вимагає створення нового сховища з елементами AOS і має бути максимально легким.

============================================================================================================

##### Disabling AOS

Якщо ви хочете вимкнути AOS на певному пристрої або в будь-якому операторі, ви можете встановити опцію `disable`. Ось так:

```javascript
  <script>
    AOS.init({
      disable: 'mobile'
    });
  </script>
```

Існує кілька варіантів, які ви можете використовувати, щоб ідеально вписати AOS у свій проект. Ви можете передати один із трьох типів пристроїв:
`mobile` (телефони та планшети),`phone` або`tablet`. Це вимкне AOS на цих певних пристроях.
Але якщо ви хочете створити власну умову, просто введіть свій оператор замість назви типу пристрою:

```javascript
disable: window.innerWidth < 1024;
```

Також існує можливість передати `функцію`, яка в кінці повинна повертати `true` або `false`:

```javascript
  disable: function () {
    var maxWidth = 1024;
    return window.innerWidth < maxWidth;
  }
```

========================================================================================================

##### Start event

Якщо ви не хочете ініціалізувати AOS для події `DOMContentLoaded`, ви можете передати власну назву події та запускати її, коли забажаєте. AOS прослуховує цю подію в елементі `document`.

```javascript
  <script>
    AOS.init({
      startEvent: 'someCoolEvent'
    });
  </script>
```

**Важливе зауваження:** Якщо встановити `startEvent: 'load'`, слухач подій буде додано до `window` замість `document`.
