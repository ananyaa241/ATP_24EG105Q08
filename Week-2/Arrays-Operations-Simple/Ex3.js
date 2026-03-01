// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 

const marks = [78, 92, 35, 88, 40, 67];
const passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks);
const graceMarks = marks.map(mark => mark + 5);
console.log("Marks after adding grace marks:", graceMarks);
const highestMark = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log("Highest Mark:", highestMark);
const failingMark = marks.find(mark => mark < 40);
console.log("First Mark below 40:",failingMark);
const index2= marks.findIndex(mark => mark === 40);
console.log("Index of Mark 40:", index2);
