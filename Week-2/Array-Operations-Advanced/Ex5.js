const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

const c = t.filter(x => x.type === "credit");
const a = t.map(x => x.amount);
const bal = t.reduce((s, x) => {
  return x.type === "credit" ? s + x.amount : s - x.amount;
}, 0);
const d = t.find(x => x.type === "debit");
const i = t.findIndex(x => x.amount === 10000);
console.log(c);
console.log(a);
console.log(bal);
console.log(d);
console.log(i);