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

    //Method to save the task to the local storage
      save() {
    
        //Remove the element if called for deletion
        if(localStorage.getItem('tasks')) {
          localStorage.removeItem('tasks')
          
        }
        const tasksJson = JSON.stringify(this.tasks);
        
        localStorage.setItem('tasks', tasksJson)
      };
    
    //Method to load all the tasks from local storage when the page is loaded

        load() {
       
          const tasksString = localStorage.getItem('tasks');
          const tasksJson = JSON.parse(tasksString);
          
          tasksJson.map(eachtask => {
            const {name, priority, description,assignedto, status, comment, duedate } = eachtask;
            this.addTask(name, priority,description, assignedto, status, comment, duedate);
          });
          if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');
    
            this.currentId = Number(currentId);
          }
    
          this.render();
        };
  
    // method to render the loaded tasks to the page     
    render() {
          const tasksHtmlList = [];
    
          for(let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
                
            const taskHtml = createTaskHtml( task.name, task.priority,task.description, task.assignedto, task.status, task.comment, task.duedate,task.id);
            
            tasksHtmlList.push(taskHtml);
          };
    
            const tasksHtml = tasksHtmlList.join('\n');
    
            const tasksList = document.querySelector('#task-card');
            tasksList.innerHTML = tasksHtml;
            
        };
        
}

// method to create the card for listing tasks dynamically

        const createTaskHtml = (task,priority,description,assignedto,status,comment, duedate,id) => {
          let badgeClass=checkBadgeclass(status);

          return `
                  <li data-task-id=${id} class="list-group-item">
                  <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                  <h6><strong>${task}</strong></h6>
                  <span class="badge ${badgeClass} badge-display">${status}</span>
                  </div>
                  
                  <div class="d-flex w-100 mb-3 justify-content-between">
                  <small><strong>Priority:</strong> ${priority}</small>
                  <small><strong>Description:</strong> ${description}</small>
                  <small><strong>Comments:</strong> ${comment}</small>
                  </div>
                  <div class="d-flex w-100 mt-3 justify-content-between align-items-center">
                  <small><strong>Task Due Date :</strong> ${duedate}</small>
                  <small><strong>Assigned To:</strong> ${assignedto}</small>
                  <button class="card-btn-display-green btn  btn-outline-success done-button ${status === 'Done' ? 'invisible' : 'visible'}">Done</button>

                  <button class="btn  card-btn-display-red btn-outline-danger delete-button">Delete</button>
                  </div>
                  </li>
                `;
        };

    const checkBadgeclass= (taskstatus)=> {
      let badgeClassVal='';
      
      switch(taskstatus) {
        
        case 'Review':
          // code block
          badgeClassVal='badge-pill badge-primary'
          break;
        case 'To Do':
          // code block
          badgeClassVal='badge-pill badge-danger'
          break;
        case 'InProgress':
          badgeClassVal='badge-pill badge-info'
          break;  
        case 'Done':
            badgeClassVal=' badge-pill badge-success'
            break;    
        default:
          // code block
          badgeClassVal='badge-pill badge-success'
          return
      }

  return badgeClassVal;


};    
    
    //For unit testing
    module.exports = TaskManager;
    