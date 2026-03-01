// cart.js
import { getProductById, checkStock } from './product.js';

let cart = [];

export function addToCart(id, qty) {
  const p = getProductById(id);
  if (!p) return 'Product not found';

  if (!checkStock(id, qty)) return 'Stock not available';

  const c = cart.find(x => x.id === id);

  if (c) {
    c.qty += qty;
  } else {
    cart.push({ id, qty });
  }

  return 'Added to cart';
}

export function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  return 'Removed from cart';
}

export function updateQuantity(id, qty) {
  if (!checkStock(id, qty)) return 'Stock not available';

  const c = cart.find(x => x.id === id);
  if (c) {
    c.qty = qty;
    return 'Quantity updated';
  }
  return 'Item not in cart';
}

export function getCartItems() {
  return cart.map(x => {
    const p = getProductById(x.id);
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      qty: x.qty,
      total: p.price * x.qty
    };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((s, x) => s + x.total, 0);
}

export function clearCart() {
  cart = [];
}