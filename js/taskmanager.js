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

   
  }
}