const personsSlidetrack = document.querySelector('.persons__slidetrack');
const personsContainer = document.querySelector('.persons__container');
let touchStart;
let delta;
let transformregExp = /([-0-9.]+(?=px))/;

personsSlidetrack.addEventListener('touchstart', (evt) => {
  touchStart = evt.touches[0].clientX;
});

personsSlidetrack.addEventListener('touchend', () => {
  console.log('end');
});

personsSlidetrack.addEventListener('touchmove', (evt) => {
  
  // console.log(touchStart);
  // console.log(evt.touches[0].clientX);
  delta = touchStart - evt.touches[0].clientX;
  // console.log(delta);
  // touchStart = evt.touches[0].clientX;

  if (delta * 5 < 70000) {
    // console.log(delta * 5);
    console.log(personsSlidetrack.getBoundingClientRect().x);
    // console.log(personsContainer.style.objectPosition);
    personsSlidetrack.style.transform += `translateX(-${delta * 5}px)`;
    console.log(personsSlidetrack.style.transform);
  }
});