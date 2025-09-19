
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
    consent: `I agree to the <a href="#"> Terms and Privacy policy</a>`,
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
    consent: `Rememer me`,
    button: `Login in`,
    option: `<p>Don't have an account? <span>Sign up</span></p>`
  }
]


// Elements
const titleEl = document.getElementById('authTitle');
const descEl = document.getElementById('authDesc');
const inputEl = document.getElementById('authInput');
const consentEl = document.getElementById('authConsentText');
const optionEl = document.getElementById('authOption');
const submitBtn = document.getElementById('authSubmit');

let currIndex = 0;

titleEl.innerHTML = authData[currIndex].title;
descEl.innerHTML = authData[currIndex].desc;
inputEl.innerHTML = authData[currIndex].input;
consentEl.innerHTML = authData[currIndex].consent;
optionEl.innerHTML = authData[currIndex].option;
submitBtn.innerHTML = authData[currIndex].button;
