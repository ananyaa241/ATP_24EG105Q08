// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
const courses = ["javascript", "react", "node", "mongodb", "express"];
const fC = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", fC);
const uCC = courses.map(course => course.toUpperCase());
console.log("Course names in uppercase:", uCC);
const csrt = courses.reduce((acc, course) => acc ? `${acc} | ${course.toUpperCase()}` : course.toUpperCase(), '');
console.log("Course String:", csrt);
const findcr = courses.find(course => course.toLowerCase() === "react");
console.log("Found Course:", findcr);
const index1 = courses.findIndex(course => course.toLowerCase() === "node");
console.log("Index of 'node':", index1);