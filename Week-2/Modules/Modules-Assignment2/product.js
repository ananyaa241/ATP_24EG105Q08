// product.js

const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id) {
  return products.find(p => p.id === id);
}

export function getAllProducts() {
  return products;
}

export function getProductsByCategory(cat) {
  return products.filter(p => p.category === cat);
}

export function searchProducts(q) {
  return products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );
}

export function checkStock(id, qty) {
  const p = getProductById(id);
  return p && p.stock >= qty;
}

export function reduceStock(id, qty) {
  const p = getProductById(id);
  if (p) {
    p.stock -= qty;
  }
}