// payment.js
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(m) {
  return ['card', 'upi', 'cod'].includes(m);
}

export function processPayment(method, code = null) {
  if (!validatePaymentMethod(method)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const items = getCartItems();
  const sub = getCartTotal();

  let dis = 0;
  let total = sub;

  if (code) {
    const r = applyDiscount(sub, code, items);
    dis = r.discount;
    total = r.finalTotal;
  }

  items.forEach(i => reduceStock(i.id, i.qty));
  clearCart();

  return {
    orderId: 'ORD' + Date.now(),
    items,
    subtotal: sub,
    discount: dis,
    total,
    paymentMethod: method,
    status: 'success',
    message: 'Order placed'
  };
}