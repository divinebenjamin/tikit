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


// Get list from DB
const defaultList = [];

function getList() {
  try{
    const storedList = localStorage.getItem('list');
    return storedList ? JSON.parse(storedList) : [ ...defaultList ];
  } catch(error){
    console.error('Local storage', error);
    return [ ...defaultList ];
  }
}

const taskList = getList();

// Save list to DB
function saveList(list) {
  localStorage.setItem('list', JSON.stringify(list));
}


// ELEMENTS
const appEl = document.getElementById('app');
const titleEl = document.getElementById('headerTitle');
const taskEl = document.getElementById('headerTask');
const avatarEl = document.getElementById('headerImg');
const listEl = document.getElementById('listWrapper');
const taskListEl = document.getElementById('taskWrapperList');
const taskAddEl = document.getElementById('taskWrapperAdd');
const taskAddBtn = document.getElementById('addNavBtn');
const backAddBtn = document.getElementById('addBackBtn');
const hintEl = document.getElementById('authHint');
const formEl = document.getElementById('addForm');
const taskNameEl = document.getElementById('addName');

// DISPLAY THE TASK SCREEN
renderTask();

// DISPLAY THE ADD SCREEN
taskAddBtn.addEventListener('click', renderAdd);


// RENDER THE ENTIRE TASK SCREEN
function renderTask(){
  taskListEl.style.display = 'grid';
  taskAddEl.style.display = 'none';
  titleEl.textContent = `hi, ${user.name ?? 'Guest'}`;
  taskEl.textContent = `${user.task ?? 0} task completed`;
  listEl.innerHTML = renderList();
}

// UPDATE THE HEADER TASK VALUE
function updateTask(){
  taskEl.textContent = `${user.task ?? 0} task completed`;
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
            <input id="checkTask${index}" ${taskList[index]['checked'] ? 'checked' : ''} type="checkbox" onclick="taskProgressUpdate(${index})">
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
  saveList(taskList);
}

// CHECK TASK AND INCREASE PROGRESS
function taskProgressUpdate(index){
  if (!taskList[index]['checked']){
    user.task += 1;
    taskList[index]['checked'] = true
    updateTask();
    updateXP(4)
    saveUser(user);
    saveList(taskList);
    return user.task;
  } else {
    user.task -= 1;
    taskList[index]['checked'] = false
    updateTask();
    updateXP(-4)
    saveUser(user);
    saveList(taskList);
    return user.task;
  }

}

// RENDER THE ENTIRE TASK ADD SCREEN
function renderAdd(){
  taskListEl.style.display = 'none';
  taskAddEl.style.display = 'grid';
  taskNameEl.focus();
}

// BACK TO TASK FROM TASK
backAddBtn.addEventListener('click', renderTask);

// FORM TO ADD TASK TO LIST
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskName = taskNameEl.value.trim();
  const checked = false;

  if(!taskName){
    showHint('Name is invalid');
    return;
  }

  taskList.unshift({
    taskName,
    checked
  });
  
  
  taskNameEl.value = '';
  renderTask();
  saveList(taskList);
})

// SHOW HINT
function showHint(message, duration = 3000){
  hintEl.textContent = message;
  hintEl.style.opacity = '1';

  setTimeout(()=>{
    hintEl.style.opacity = '0';
    hintEl.textContent = '';
  }, duration)
}

// XP CALCULATION
function updateXP(num){
  user.xp += num;
}

avatarEl.addEventListener('click', () => {
  window.location.assign('../menu/menu.html');
});

// TODO: add menu screen
// TODO: make the xp functional
