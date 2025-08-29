
// VARIABLES ASSIGNMENT
let wrapper = document.querySelector('.splash__wrapper');
let logo = document.querySelector('.splash__logo');
let text = document.querySelector('.splash__text');

// BACKGROUND COLOR
document.body.style.backgroundColor = '#040405';

// ANIMATION TIME ORDER
setTimeout(() => {
  logo.classList.add('moveIn')
}, 400)

setTimeout(() => {
  text.classList.add('fadeIn')
}, 1200)

setTimeout(() => {
  wrapper.classList.add('fadeOut')
}, 2700)

