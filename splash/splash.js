
// SPLASH SCREEN VARIABLES ASSIGNMENT
let wrapper = document.querySelector('.splash__wrapper');
let logo = document.querySelector('.splash__logo');
let text = document.querySelector('.splash__text');

// getuser from DB
const defaultUser = {
  name: null,
  email: null,
  password: null,
  registered: false,
  logged: false
};

// Helper Function
function getUser(){
  try{
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : { ...defaultUser };
  } catch(error){
    console.error('Local storage', error);
    return { ...defaultUser };
  }
}

const user = getUser();

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

// OPEN ONBOARD / SPACE SCREEN
setTimeout(() => {
  if(user.registered && user.logged){
    window.location.assign('app/app.html');
  } else if(user.registered){
    window.location.assign('auth/auth.html');
  } else {
    window.location.assign('onboard/onboarding.html');
  }
}, 3000);