// SET VIEW HEIGHT
function setVH() {
 const vh = window.innerHeight * 0.01;
 document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

function checkWidth(){
  const width = window.innerWidth;
  const screen = document.querySelector('body');
  
  if (width > 480){
    const modalWrapper = `
      <div class="modalWrapper">
        <div class="modal">
          <div class="modalImg">
            <img src="../assets/images/404.svg" alt="404 img">
          </div>
          <h5 class="modalTitle">This App is Mobile Only</h5>
          <p class="modalCaption">This experience was designed for smaller screens.<br>
          Please view it on your mobile device.</p>
        </div>
      </div>
    `
    screen.innerHTML = modalWrapper;
  };  
};

checkWidth();
window.addEventListener('resize', checkWidth);