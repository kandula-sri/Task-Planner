class TaskManager {
// Create a constructor with a parameter currentid set to 0
  constructor(currentId = 0) {
    // Initialize an empty array to save the tasks added 
    this.tasks= []; 
    // Set the currentId value to currentId
    this.currentId = currentId;
  }
  /*Add new tasks */
  // Create a method with an object to add a task
  addTask(name,priority,description, assignedto,status,comment,duedate) {
    const newTask = {
      id: this.currentId++,
      name: name,
      priority : priority,
      description: description,
      assignedto: assignedto,
      status: 'TODO',
      comment: comment,
      duedate: duedate,
    }
    // push the new task into the array 
    this.tasks.push(newTask);
  };
   
   /* const list = document.querySelector('#task-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newTask.name}</td>
    <td>${newTask.description}</td>
    <td>${newTask.priority}</td>
    <td>${newTask.assignedto}</td>
    <td>${newTask.status}</td>
    <td>${newTask.duedate}</td>
    <td>${newTask.comment}</td>`;
    list.appendChild(row);
  */
  /* Update status*/ 
  // Method to get the task id to update status
  getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i < this.tasks.length; i++) {

      const task = this.tasks[i];

      if(task.id === taskId){
        foundTask = task;
      };
    };
    return foundTask;
  };

  save() {
    if(localStorage.getItem('tasks')) {
      localStorage.removeItem('tasks')
    }
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson)
  };

    load() {
   
      const tasksString = localStorage.getItem('tasks');
      const tasksJson = JSON.parse(tasksString);
      
      tasksJson.map(eachtask => {
        const {name,description, priority, assignedto, status, comment, duedate } = eachtask;
        this.addTask(name,description, priority, assignedto, status, comment, duedate);
      });
    };

render() {
      const tasksHtmlList = [];

      for(let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
            
        const taskHtml = createTaskHtml(task.name, task.description, task.priority,task.assignedto, task.status, task.comment, task.duedate);
        
        tasksHtmlList.push(taskHtml);
      };

        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#task-card');
        tasksList.innerHTML = tasksHtml;

    };
    
  }
    const createTaskHtml = (task,description, priority,assignedto,status,comment, duedate) => {

      return `
              <li class="list-group-item mt-2">
              <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
              <h6>${task}</h6>
              <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
              </div>
              <div class="d-flex w-100 mb-3 justify-content-between">
              <small>Priority: ${priority}</small>
              <small>Description: ${description}</small>
              <small>Assigned To: ${assignedto}</small>
              <small>Comments: ${comment}</small>
              </div>
              <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
              <small>Task Due Date : ${duedate}</small>
              <button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Done</button>
              </div>
              </li>
            `;
    }



  
