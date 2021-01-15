class TaskManager {
// Create a constructor with a parameter currentid set to 0
  constructor(currentId) {
    // Initialize an empty array to save the tasks added 
    this.tasks= []; 
    // Set the currentId value to currentId
    this.currentId = currentId || 0;
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
      status: status,
      comment: comment,
      duedate: duedate,
    }
    // push the new task into the array 
    this.tasks.push(newTask);
    
  };

  // Create the deleteTask method
  deleteTask(taskId) {
    // Create an empty array and store it in a new variable, newTasks
    const newTasks = [];

    // Loop over the tasks
    for (let i = 0; i < this.tasks.length; i++) {
        // Get the current task in the loop
        const task = this.tasks[i];

        // Check if the task id is not the task id passed in as a parameter
        if (task.id !== taskId) {
            // Push the task to the newTasks array
            newTasks.push(task);
        }
    }

    // Set this.tasks to newTasks
    this.tasks = newTasks;
    
}
   
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

    //Remove the element if called for deletion
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
      if (localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');

        this.currentId = Number(currentId);
      }

      this.render();
    };

render() {
      const tasksHtmlList = [];

      for(let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
            
        const taskHtml = createTaskHtml( task.name, task.description, task.priority,task.assignedto, task.status, task.comment, task.duedate,task.id);
        
        tasksHtmlList.push(taskHtml);
      };

        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#task-card');
        tasksList.innerHTML = tasksHtml;
        
    };
    
  }
    const createTaskHtml = (task,description, priority,assignedto,status,comment, duedate,id) => {

      return `
              <li data-task-id=${id} class="list-group-item">
              <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
              <h6>${task}</h6>
              <span class="badge ${status === 'To Do' ? 'badge-danger' : 'badge-success'}">${status}</span>
              </div>
              
              <div class="d-flex w-100 mb-3 justify-content-between">
              <small>Priority: ${priority}</small>
              <small>Description: ${description}</small>
              <small>Assigned To: ${assignedto}</small>
              <small>Comments: ${comment}</small>
              </div>
              <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
              <small>Task Due Date : ${duedate}</small>
              <button class="btn btn-outline-success done-button ${status === 'Done' ? 'invisible' : 'visible'}">Done</button>
              <button class="btn btn-outline-danger delete-button">Delete Task</button>
              </div>
              </li>
            `;
    }

// original button code
//<button class="btn btn-outline-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Done</button>
module.exports = TaskManager;

  
