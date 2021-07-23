// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// THERE ARE 2 WAYS to EXPORT VARIABLES
// 1)
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}s added to cart.`);
};

// 2)
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
