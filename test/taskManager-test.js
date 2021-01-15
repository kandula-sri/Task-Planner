
const TaskManager = require('../js/taskManager');
const assert = require('assert');

describe("TaskManager", () => {
  it("should add a task", function () {
    //Setup
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.length;
    //Exercise
    taskManager.addTask();
    //Verify
    assert.ok(len < taskManager.tasks.length);
  });
})
it("should find a task id", function () {
  //Setup
 
  const taskManager = new TaskManager(0);
  const requiredtaskId = 1;
 
  // Exercise
  //Create 2 new tasks
  taskManager.addTask(0);
  taskManager.addTask(1);
  //execute the getTaskById function
  let foundtaskId = taskManager.getTaskById(1);
  // Verify
  assert.ok(foundtaskId,requiredtaskId);
  //assertTrue("found the task id ", taskManager.getTaskById(1)); 
});

it("should delete a task", function () {
  //Setup
  const taskManager = new TaskManager(0);
 const taskid = 0;
  
  //Exercise
  taskManager.addTask();
  let len = taskManager.tasks.length;
  taskManager.deleteTask(taskid);
  //const foundtask=taskManager.getTaskById////(taskid);
  //Verify
  assert.ok(len > taskManager.tasks.length);
  //assert.ok(foundtask!=taskid);
});









