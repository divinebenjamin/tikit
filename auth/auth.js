
// DATA
const authData = [
  {
    title: `Create an <br> account`,
    desc: `Simple. Fun. Yours. Ready to begin?`,
    input: `
          <div class="input__box">
            <input id="authName" type="text" placeholder="" required>
            <label for="authName">Name</label>
          </div>
          
          <div class="input__box">
            <input id="authMail" type="email" placeholder="" required>
            <label for="authMail">Email</label>
          </div>

          <div class="input__box">
            <input id="authPass" type="password" placeholder="" required>
            <label for="authPass">Password</label>
          </div>`,
    button: `Create account`,
    option: `<p>Already have an account? <span>Log in</span></p>`
  },
  {
    title: `Welcome <br> back`,
    desc: `Get things done, your way`,
    input: `
          <div class="input__box">
            <input id="authMail" type="email" placeholder="" required>
            <label for="authMail">Email</label>
          </div>

          <div class="input__box">
            <input id="authPass" type="password" placeholder="" required>
            <label for="authPass">Password</label>
          </div>`,
    button: `Login in`,
    option: `<p>Don't have an account? <span>Sign up</span></p>`
  }
]

const user = JSON.parse(localStorage.getItem("user")) ?? {
  name: null,
  email: null,
  password: null,
  registered: false
};

// Elements
const titleEl = document.getElementById('authTitle');
const descEl = document.getElementById('authDesc');
const formEl = document.getElementById('authForm');
const inputEl = document.getElementById('authInput');
const hintEl = document.getElementById('authHint');
const optionEl = document.getElementById('authOption');
const submitBtn = document.getElementById('authSubmit');

let currIndex;

// Page Load
if(user.registered){
  currIndex = 1;
} else {
  currIndex = 0;
}

// Render HTML code
function renderAuth(index){
  titleEl.innerHTML = authData[index].title;
  descEl.innerHTML = authData[index].desc;
  inputEl.innerHTML = authData[index].input;
  optionEl.innerHTML = authData[index].option;
  submitBtn.innerHTML = authData[index].button;
}

renderAuth(currIndex);

// Form Handling
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  if(currIndex === 0){
    handleSignup();
  } else {
    handleLogin();
  }
})
  

// Signup Handling
function handleSignup(){
  if(currIndex === 0){
    user.name = document.getElementById('authName').value;
    user.email = document.getElementById('authMail').value;
    user.password = document.getElementById('authPass').value;
    let privacy = (document.getElementById('authConsentBox').checked) ? true : false;

}
}



