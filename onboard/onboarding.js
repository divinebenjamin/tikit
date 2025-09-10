
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
<button class="skip__button onboard__button">
  <i class="uil uil-angle-double-right"></i>
</button>

<button class="next__button onboard__button">
  <i class="uil uil-angle-right"></i>
</button>
  
<div class="edge__design"></div>`;


const footerNav2 = `
<button class="next__button">
  Get started
</button>`;

let currIndex = 0;

// Elements
const imgEl = document.getElementById('onboardImg');
const titleEl = document.getElementById('onboardTitle');
const descEl = document.getElementById('onboardDesc');
const footerEl = document.getElementById('onboardFooter');

const boxes = document.querySelectorAll('.box');
const skipBtn = document.querySelector('.skip__button');
const nextBtn = document.querySelector('next__button');


imgEl.src = onboardData[currIndex].img;
titleEl.textContent = onboardData[currIndex].title;
descEl.textContent = onboardData[currIndex].desc;
footerEl.innerHTML = footerNav1;
