// SET VIEW HEIGHT
function setVH() {
 const vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);


// LOAD PAGE FUNCTION
function loadScreen(screen, callback) {
  fetch(`screens/${screen}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById('app').innerHTML = html;
    if(callback) callback();
  });
}


setTimeout(() => {
  document.body.style.backgroundColor = '#fff';
  loadScreen('onboarding')
}, 0);

