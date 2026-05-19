const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
const it = emp.filter(e => e.department === "IT");
const net = emp.map(e => ({...e,netSalary: e.salary + e.salary * 0.1
}));
const tot = emp.reduce((s, e) => s + e.salary, 0);
const f = emp.find(e => e.salary === 30000);
const i = emp.findIndex(e => e.name === "Neha");
console.log(it)
console.log(net)
console.log(tot)
console.log(f)
console.log(i)