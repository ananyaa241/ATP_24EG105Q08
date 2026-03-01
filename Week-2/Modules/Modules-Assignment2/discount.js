// discount.js

const coupons = {
  WELCOME10: { type: 'percentage', value: 10, minAmount: 1000 },
  FLAT500: { type: 'flat', value: 500, minAmount: 5000 },
  ELECTRONICS20: { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(code, total, items) {
  const c = coupons[code];
  if (!c) return { valid: false, message: 'Invalid coupon' };

  if (total < c.minAmount)
    return { valid: false, message: 'Minimum amount not met' };

  if (c.category) {
    const ok = items.some(i => i.category === c.category);
    if (!ok) return { valid: false, message: 'Category not eligible' };
  }

  return { valid: true, message: 'Coupon applied' };
}

export function calculateDiscount(code, total) {
  const c = coupons[code];
  if (c.type === 'percentage') {
    return (total * c.value) / 100;
  }
  return c.value;
}

export function applyDiscount(total, code, items) {
  const v = validateCoupon(code, total, items);
  if (!v.valid) {
    return {
      originalTotal: total,
      discount: 0,
      finalTotal: total,
      message: v.message
    };
  }

  const d = calculateDiscount(code, total);
  return {
    originalTotal: total,
    discount: d,
    finalTotal: total - d,
    message: 'Discount applied'
  };
}