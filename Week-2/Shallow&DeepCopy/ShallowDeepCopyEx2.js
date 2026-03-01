 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
const deepCopy=structuredClone(order);
deepCopy.customer.address.city="Delhi";
deepCopy.items[0].price=30000;
console.log(order);
console.log(deepCopy);