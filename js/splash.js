
// SPLASH SCREEN VARIABLES ASSIGNMENT
let wrapper = document.querySelector('.splash__wrapper');
let logo = document.querySelector('.splash__logo');
let text = document.querySelector('.splash__text');

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

// OPEN ONBOARD SCREEN
setTimeout(() => {
  window.location.assign('onboard/onboarding.html');
}, 3000);