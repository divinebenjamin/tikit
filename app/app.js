
// getuser from DB
const defaultUser = {
  name: null,
  email: null,
  password: null,
  registered: false,
  logged: false,
  task: 0,
  xp: 0
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

// ELEMENTS
const appEl = document.getElementById('app');

const taskList = [
  {taskName: "set up vscode"},
  {taskName: "push to git"},
  {taskName: "do choir"},
  {taskName: "finish homework"},
  {taskName: "check volume"},
  {taskName: "organize business"},
  {taskName: "brief team members"},
  {taskName: "run ads"},
  {taskName: "check competitors"},
  {taskName: "partner with team leader"},
  {taskName: "read for 5 mins"},
  {taskName: "finish project"}
];

taskList.reverse()


// RENDER TASK LIST
function renderTask(){
  appEl.innerHTML = `
    <section id="taskWrapper" class="task__wrapper">
      <header class="task__header">
        <div class="header__text">
          <h5>hi, ${user.name || 'Guest'}</h5>
          <p>${user.task|| 0} task completed</p>
        </div>
        
        <div class="header__img">
          <img class="img" src="../assets/images/avatar.svg" alt="User avatar">
        </div>
        </header>

      <div class="task__visual">
      <p class="visual__text">Manage <br> Task</p>
        <div class="visual__img">
        <img src="../assets/images/swirl.svg" alt="swirl" class="img">
        </div>
        <div class="visual__img">
          <img src="../assets/images/illustration1.svg" alt="swirl" class="img">
          </div>
      </div>

      <div id="listWrapper" class="list__wrapper hide__scrollbar">
        ${renderList()}
      </div>

      <div class="app__nav">
        <div class="icon__wrapper icon">
          <img class="img" src="../assets/icons/home.svg" alt="task icon" >
          <p class="icon__label">Task</p>
        </div>
 
        <div class="icon__wrapper add">
          <img class="img" src="../assets/icons/plus.svg" alt="task icon" >
        </div>
        
        <div class="icon__wrapper icon">
          <img class="img" src="../assets/icons/menu.svg" alt="task icon" >
          <p class="icon__label">Menu</p>
        </div>

      </div>

    </section>`;
}

// RENDER LIST OF TASK
function renderList(){
  // DISPLAY MESSAGE IF NO TASK
  if (taskList.length === 0){
    return `
      <div class="task__nolist">
        <p class="nolist__head">No Task!</p>
        <p class="nolist__caption">Click on add button to create task</p>
      </div>`;
  } 

  // DISPLAY LIST OF TASK IN ARRAY
  return `
    <div class="task__list">
      ${taskList.map(({taskName}, index) => `
        <div class="task__item">
          <div class="item__label">
            <input type="checkbox">
            <span class="custom__checkbox"></span>
            <p>${taskName}</p>
          </div>
          <div class="item__delete" onclick="removeTask(${index})">
            <img src="../assets/icons/trash.svg" alt="delete" class="img">
          </div>
        </div>`).join('')}
    </div>`;
}

// REMOVE TASK FROM LIST
function removeTask(index){
  taskList.splice(index, 1);
  renderTask();
}

renderTask();



  
// ADD NEW TASK



