// importing module
import * as ShoppingCart from './shoppingCart.js';
// import { addToCart, totalQuantity, totalPrice as price } from './shoppingCart.js';

///////////////////////////////////////
// LESSON: Exporting and Importing Modules in ES6
///////////////////////////////////////

// -Take note that the code from the imported file will run before
//  the line below
console.log('Importing module');

// variables from imported file
// 1) const 'shippingCost' is a variable from the imported file
// it will be a private variable however, and unaccessible from
// within this file
// Ex.
// console.log(shippingCost); // Uncaught ReferenceError
//
// 2) We must export the variable from the imported file for it
// to be accessible here. We must also import the variable at the
// top of this file.

ShoppingCart.addToCart('TV', 5);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

///////////////////////////////////////
// LESSON: Introduction to NPM - Package Manager
///////////////////////////////////////

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { proudct: 'bread', quantity: 5 },
    { proudct: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);
