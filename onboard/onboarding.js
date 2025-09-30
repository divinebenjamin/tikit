
// DATA
const onboardData = [
  {
    img: '../assets/images/onboard1.svg',
    title: 'Create Your Space',
    desc: 'Create personalized workspaces to stay focused on what matters most.'
  },
  {
    img: '../assets/images/onboard2.svg',
    title: 'Complete & Win',
    desc: 'Complete tasks to collect points and reach new milestones. Productivity has never been this fun!'
  },
  {
    img: '../assets/images/onboard3.svg',
    title: 'Tikit is All Yours',
    desc: 'Simple, playful, and stress-free. Start organizing your world, one task at a time.'
  }
];

const footerNav1 = `
<button class="skip__button onboard__button" onclick="skipBoard()">
  <i class="uil uil-angle-double-right"></i>
</button>

<button class="next__button onboard__button" onclick="nextBoard()">
  <i class="uil uil-angle-right"></i>
</button>
  
<div class="edge__design"></div>`;

const footerNav2 = `
<button class="next__button cta__button" onclick="nextBoard()">
Get started
</button>`;

const user = JSON.parse(localStorage.getItem("user")) ?? {
  name: null,
  email: null,
  password: null,
  remember: false,
  registered: false
};

// Elements
const backBtn = document.getElementById('onboardBack');
const imgEl = document.getElementById('onboardImg');
const titleEl = document.getElementById('onboardTitle');
const descEl = document.getElementById('onboardDesc');
const footerEl = document.getElementById('onboardFooter');
const boxes = document.querySelectorAll('.box');

// current screen indicator
let currIndex = 0;

function renderBoard(index, footer){
  imgEl.src = onboardData[index].img;
  titleEl.textContent = onboardData[index].title;
  descEl.textContent = onboardData[index].desc;
  footerEl.innerHTML = footer;

  if(currIndex != 0){
    backBtn.classList.add('active');
  }

  pagination();
}

renderBoard(currIndex, footerNav1);

// Back Function
function backBoard(){
  if(currIndex == 1){
    currIndex--
    renderBoard(currIndex, footerNav1)
    backBtn.classList.remove('active');
  } else if(currIndex == 2){
    currIndex--
    renderBoard(currIndex, footerNav1)
  }
}

// Next Function
function nextBoard(){
  if(currIndex == 0){
    currIndex++
    renderBoard(currIndex, footerNav1)
  } else if(currIndex == 1){
    currIndex++
    renderBoard(currIndex, footerNav2)
  } else if(currIndex == 2){
    if(user.remember){
      window.location.assign('../auth/auth.html');
    } else {
      window.location.assign('../app/app.html');
    }
  }
}

// Skip Function
function skipBoard(){
  window.location.assign('../auth/auth.html');
}

// Pagination
function pagination(){
  boxes.forEach((box, index) => {
    if(index == currIndex){
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    } 
  });
}