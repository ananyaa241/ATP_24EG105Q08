const { addTask, getAllTasks, completeTask } = require('./task');

addTask("Hi","low","2026-08-10");
addTask("study","high","2026-10-30");
addTask("sleep","high","2026-07-11");
addTask("write","low","2026-10-14");
addTask("read","high","2026-09-10");

console.log(getAllTasks());
console.log(completeTask(1));
console.log(getAllTasks());