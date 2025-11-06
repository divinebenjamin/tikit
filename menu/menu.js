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
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : { ...defaultUser };
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


// ELEMENTS
const backBtn = document.getElementById('menuBackBtn');
const nameEl = document.getElementById('profileName');
const mailEl = document.getElementById('profileMail');
const taskEl = document.getElementById('statusTask');
const xpEl = document.getElementById('statusXp');
const logoutBtn = document.getElementById('logoutBtn');

renderMenu();

function renderMenu(){
  const badgeLevel = getBadgeLevel()
  
  nameEl.innerHTML = `${user.name}`;
  mailEl.innerHTML = `${user.email}`;
  renderBadge(badgeLevel);
  taskEl.innerHTML = `${user.task} task`;
  xpEl.innerHTML = `${user.xp} XP`;
};

backBtn.addEventListener('click', () => {
  window.location.assign('../app/app.html');
});

function renderBadge(level){
  const imgEl = document.getElementById('badgeIcon');
  imgEl.src = `../assets/badges/${level}.svg`
}

function getBadgeLevel(){
  if (user.xp < 100){
    return 'starter'
  } else if (user.xp < 300){
    return 'doer'
  } else if (user.xp < 700){
    return 'archiever'
  } else if (user.xp < 1500){
    return 'planner'
  } else if (user.xp < 3000){
    return 'master'
  } else {
    return 'legend'
  }
}

logoutBtn.addEventListener('click', () => {
  user.logged = false;
  saveUser(user);
  window.location.assign('../auth/auth.html');
});