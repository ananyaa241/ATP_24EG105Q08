const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
//insert a new emp at second pos
employees.splice(1, 0, {eno:106,name:"Ravi",marks:[56,85,70]})
//delete emp kiran
const index=employees.findIndex(emp=>emp.name==="Kiran");
if(index!==-1){
    employees.splice(index,1);
}   
//Change the last mark 95 to 75 of emp  "Sneha"
const index2=employees.findIndex(emp=>emp.name==="Sneha");
if(index2!==-1){
    employees[index2].marks[2]=75;
}
console.log(employees);

