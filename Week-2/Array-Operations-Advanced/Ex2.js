const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//filter
 const r1=students.filter(student=> student.marks>=40);
    console.log(r1)
//map
 const r2=students.map(student=> {
    if(student.marks>=90)
        return {...student,grade:'A'}
    if(student.marks>=80 && student.marks<90)
        return {...student,grade:'B'}   
    if(student.marks>=70 && student.marks<80)
        return {...student,grade:'C'}
    return {...student,grade:'D'}
});
console.log(r2)
// reduce
const totalMarks=students.reduce((accumulator,student)=>accumulator+student.marks,0)
const avg=totalMarks/students.length
console.log("Average Marks:", avg)
//find
const r3=students.find(student=>student.marks=92)
console.log(r3)
//findIndex
const r4=students.findIndex(student=>student.name==="Kiran")
console.log(r4)