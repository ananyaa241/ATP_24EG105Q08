  // TODO: Import validator functions
                    import {validateTitle, validatePriority, validateDueDate } from './validator.js';
                    
                    let tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      if(!validateDueDate() || !validatePriority() || !validateTitle()){
                       return "Invalid Task"
                      }
                        tasks.push({title,priority,dueDate})

                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                       return tasks;
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(index) {

                    // Check if index is valid
                    if (index >= 0 && index < tasks.length) {

                    // Mark the existing task as completed
                    tasks[index].completed = true;

                     return "Task marked as complete.";
                        } else {
                        return "Task not found.";
        }
}
                      
                    

                  // Export functions
                    export { addTask, getAllTasks, completeTask };