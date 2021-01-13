// Select the Task Form
let taskManager = new TaskManager(0);
// Load task object from local storage 
if(localStorage.getItem('tasks')) {
    taskManager.load();
} else {
  taskManager = new TaskManager(0);  
};

const newTaskForm = document.querySelector('#TaskForm');

// Add an 'onsave' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action of refreshing the screen
    event.preventDefault();
   
      // Select the input fields
    const TaskNameInput = document.querySelector('#TaskName');
    const TaskPriority = document.querySelector('#TaskPriority');
    const TaskDescription = document.querySelector('#TaskDesc');
    const TaskAssignedTo = document.querySelector('#TaskAssignedto');
    const TaskStatus = document.querySelector('#TaskStatus');
    const TaskComment = document.querySelector('#TaskComment');
    const TaskDueDate = document.querySelector('#TaskDate');
    
    let errorMessage = document.querySelector('#alertMesg');
           
    const taskname = TaskNameInput.value;
    const priority = TaskPriority.value;
    const description = TaskDescription.value;
    const assignedto = TaskAssignedTo.value;
    const taskstatus = TaskStatus.value;
    const comment = TaskComment.value;
    const duedate = TaskDueDate.value;
     
     /*  Validation code for input fields*/

    if(!validFormFieldInput(TaskNameInput.value)){
        errorMessage.innerHTML = "Please Enter a Valid Task Name";
        errorMessage.style.display = "block";
        }
    else if(!validFormFieldInput(TaskPriority.value)){
               
            errorMessage.innerHTML = "Please Select a Task Priority";
    
            errorMessage.style.display = "block";
        }    
    else if(!validFormFieldInput(TaskDescription.value)){
               
                errorMessage.innerHTML = "Please Enter a Valid Task Description";
        
                errorMessage.style.display = "block";
            }
    else if(!validFormFieldInput(TaskAssignedTo.value)){
                errorMessage.innerHTML = "Please Enter a Valid Task Assignee";
                errorMessage.style.display = "block";
                }
    else if(!validFormFieldInput(TaskStatus.value)){
               
                    errorMessage.innerHTML = "Please Select a Task Status";
            
                    errorMessage.style.display = "block";
                }
    else if(!validFormFieldInput(TaskDueDate.value)){
                        errorMessage.innerHTML = "Please Enter/Select a Valid Task Due Date"
                        errorMessage.style.display = "block";
                    }
    else{
            errorMessage.style.display = "none";
            //Get the Javascript object new Date, give it the argument duedate, and assign it to a variable
            const taskDate = new Date(TaskDueDate.value);
            // Format date to be dd/mm/yyyy
            const formattedDate = taskDate.getDate() + '/' + (taskDate.getMonth() + 1) + '/' + taskDate.getFullYear();
            taskManager.addTask(taskname,priority,description,assignedto,taskstatus,comment,formattedDate);
            taskManager.save();
            event.target.reset();
        }
   // Render the tasks
   taskManager.render(); 
     
});



function validFormFieldInput(data){
        return data !== null && data !== '';
};

/* Update status */
const taskCard = document.querySelector('#task-card');

// Add an 'onclick' event listener to the Tasks List
taskCard.addEventListener('click', (event) => {
    // Check if a "Mark As done" button was clicked
    if (event.target.classList.contains('done-button')) {
        // Get the parent Task
       const parentTask =event.target.parentElement.parentElement;
        
        // Get the taskId of the parent Task.
       //const taskId = Number(parentTask.dataset.TaskDescription);
       const taskId = Number(parentTask.dataset.taskId);
        
        
       alert("ID:"+ taskId);

        // Get the task from the TaskManager using the taskId
        const task = taskManager.getTaskById(taskId);
  
        // Update the task status to 'DONE'
         task.status = "DONE";
    alert(task.status,task.taskId);
         taskManager.save();

        // Render the tasks
        taskManager.render();
    }

  });

//   const changeToPending = (button, id) =>{
// // Find the task id that matches the parent id
// const task = taskManager.tasks.find(task => task.id === id);
// task.status = 'Done';
// taskManager.save();
// const parentBook = button.parentElement;

// //  If statement to garantee the changes on the UI matches the array of books
//  const badge = parentTask.getElementsByClassName('badge-status');
//    badge[0].classList.remove('badge-danger');
//    badge[0].classList.add('badge-warning');
//    badge[0].innerHTML = `Pending`;
//    button.remove();
// }
