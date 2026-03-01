// app.js
import { getAllProducts, searchProducts } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log('All Products:', getAllProducts());

console.log('Search phone:', searchProducts('phone'));

console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log('Cart:', getCartItems());
console.log('Total:', getCartTotal());

console.log(updateQuantity(1, 2));
console.log(removeFromCart(3));

console.log('Updated Cart:', getCartItems());
console.log('Total:', getCartTotal());

console.log(processPayment('upi', 'WELCOME10'));