
// DATA
const authData = [
  {
    title: `Create an <br> account`,
    desc: `Simple. Fun. Yours. Ready to begin?`,
    input: `
          <div class="input__box">
            <input id="authName" type="text" placeholder="" >
            <label for="authName">Name</label>
          </div>
          
          <div class="input__box">
            <input id="authMail" type="email" placeholder="" >
            <label for="authMail">Email</label>
          </div>

          <div class="input__box">
            <input id="authPass" type="password" placeholder="" >
            <label for="authPass">Password</label>
          </div>`,
    button: `Create account`,
    option: `<p onclick="authOption('login')">Already have an account? <span>Log in</span></p>`
  },
  {
    title: `Welcome <br> back`,
    desc: `Get things done, your way`,
    input: `
          <div class="input__box">
            <input id="authMail" type="email" placeholder="">
            <label for="authMail">Email</label>
          </div>

          <div class="input__box">
            <input id="authPass" type="password" placeholder="">
            <label for="authPass">Password</label>
          </div>`,
    button: `Login in`,
    option: `<p onclick="authOption('signup')">Don't have an account? <span>Sign up</span></p>`
  }
]

// getuser from DB
const defaultUser = {
  name: null,
  email: null,
  password: null,
  registered: false,
  logged: false,
  task: null,
  xp: null
};

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

// Save user to DB
function saveUser(user){
  localStorage.setItem("user", JSON.stringify(user));
}

// Elements
const titleEl = document.getElementById('authTitle');
const descEl = document.getElementById('authDesc');
const formEl = document.getElementById('authForm');
const inputEl = document.getElementById('authInput');
const hintEl = document.getElementById('authHint');
const optionEl = document.getElementById('authOption');
const submitBtn = document.getElementById('authSubmit');


// Page Load
let currIndex = user.registered ? 1 : 0;

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
  const name = document.getElementById('authName').value.trim();
  const email = document.getElementById('authMail').value.trim();
  const password = document.getElementById('authPass').value;
  
  if(!name || !email || !password){
    showHint('All fields are required');
    return;
  }
  
  if(password.length < 6){
    showHint('Password must be at least 6 characters');
    return;
  }
  
  if(user.registered && (user.email === email)){
    showHint('Email already registered. Please log in.');
    return;
  }

  user.name = name;
  user.email = email;
  user.password = password;
  user.registered = true;
  user.logged = true;

  saveUser(user);
  window.location.assign('../app/app.html');
}

// Login Handling
function handleLogin(){
  const email = document.getElementById('authMail').value.trim();
  const password = document.getElementById('authPass').value;

  if(!email || !password){
    showHint('All fields are required');
    return;
  }
  
  if(!(user.email === email && user.password === password)){
    showHint('Incorrect Email or Password!');
    return;
  }

  user.logged = true;

  saveUser(user);
  window.location.assign('../app/app.html');
}

// login or signuo option toggle
function authOption(index){
  if(index === 'login'){
    currIndex = 1;
    renderAuth(currIndex);
  } else {
    currIndex = 0;
    renderAuth(currIndex);
  }
}
  
// show Hint function
function showHint(message, duration = 3000){
  hintEl.textContent = message;
  hintEl.style.opacity = '1';

  setTimeout(()=>{
    hintEl.style.opacity = '0';
    hintEl.textContent = '';
  }, duration)
}


