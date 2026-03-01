
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
const pro= cart.filter(item => item.inStock);
console.log("In Stock Products:", pro);

const total = pro.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

console.log("Total:", total);
const grandTotal = pro.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);
console.log("Grand Total Cart Value:", grandTotal);

const mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Mouse Details:", mouseDetails);
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

