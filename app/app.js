
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

// ELEMENTS
const appEl = document.getElementById('app');
const titleEl = document.getElementById('headerTitle');
const taskEl = document.getElementById('headerTask');
const listEl = document.getElementById('listWrapper');

const taskList = [
  {taskName: "set up vscode", checked: false},
  {taskName: "push to git", checked: false},
  {taskName: "do choir", checked: false},
  {taskName: "finish homework", checked: false},
  {taskName: "check volume", checked: false},
  {taskName: "organize business", checked: false},
  {taskName: "brief team members", checked: false},
  {taskName: "run ads", checked: false},
  {taskName: "check competitors", checked: false},
  {taskName: "partner with team leader", checked: false},
  {taskName: "read for 5 mins", checked: false},
  {taskName: "finish project", checked: false}
];

taskList.reverse()


// RENDER TASK LIST
function renderTask(){
  titleEl.textContent = `hi, ${user.name ?? 'Guest'}`;
  taskEl.textContent = `${user.task ?? 0} task completed`;
  listEl.innerHTML = renderList();
}

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
}

// CHECK TASK AND INCREASE PROGRESS
function taskProgressUpdate(index){
  const checkEl = document.getElementById("checkTask");
  console.log(taskList[index]['checked']) 

  if (!taskList[index]['checked']){
    user.task += 1;
    taskList[index]['checked'] = true
    updateTask();
    return user.task;
  } else {
    user.task -= 1;
    taskList[index]['checked'] = false
    updateTask();
    return user.task;
  }

}



renderTask();

  



