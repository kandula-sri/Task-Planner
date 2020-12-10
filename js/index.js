
// Select the Task Form
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
    const TaskDueDate = document.querySelector('#TaskDueDate');
    
    let errorMessage = document.querySelector('#alertMesg');
           
     
     /*  Validation code for input fields*/
    alert("name:"+TaskNameInput.value);
    if(!validFormFieldInput(TaskNameInput.value)){
        
        errorMessage.innerHTML = "Please Enter a Valid Task Name";
        errorMessage.style.display = "block";
        }
    else{
           if(!validFormFieldInput(TaskDescription.value)){
               
                errorMessage.innerHTML = "Please Enter a Valid Task Description";
        
                errorMessage.style.display = "block";
            }
            else{
        
                if(!validFormFieldInput(TaskAssignedTo.value)){
                errorMessage.innerHTML = "Please Enter a Valid Task Assignee";
                errorMessage.style.display = "block";
                }
                else{
                    errorMessage.style.display = "none";
                }
             }
     
         } 
    

});

function validFormFieldInput(data){

        return data !== null && data !== '';

    return data !== null && data !== ''
}