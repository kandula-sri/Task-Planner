// Select the New Task Form
const newTaskForm = document.querySelector('Task Form');

// Add an 'onsubmit' event listener
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newTaskNameInput = document.querySelector('#TaskName');
     const newTaskPriority = document.querySelector('#TaskPriority');
    const newTaskDescription = document.querySelector('#TaskDesc');
    const newTaskAssignedTo = document.querySelector('#TaskAssignedto');
     const newTaskStatus = document.querySelector('#TaskStatus');
    const newTaskDueDate = document.querySelector('#TaskDueDate');
    const errorMessage = document.querySelector('#alertMessage');
   
    
    
    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const description = newTaskDesc.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;
    if(!validFormFieldInput(name)){
        errorMessage.innerHTML = "Invalid name input";
        errorMessage.style.display = "block"
    }else{
        errorMessage.style.display = "none"
    }

});

function validFormFieldInput(data){
    return data !== null && data !== '';
}