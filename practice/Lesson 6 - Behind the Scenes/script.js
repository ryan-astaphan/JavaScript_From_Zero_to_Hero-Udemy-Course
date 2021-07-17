// 'use strict';

// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   console.log(firstName); // firstName is a global variable, so we can reference it.

//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const lastName = 'Smith';
//       const str = `${firstName} ${lastName}, you are a millenial.`;
//       console.log(str); // the lastName variable from within this block scope will be called
//       output = 'Variables can be re-assigned from within child scopes.';
//     }
//     console.log(output); // Variables can be re-assigned from within child scopes.
//   }
//   //   console.log(str); // 'str' will not be accessible because it is block-scoped.
//   printAge();
//   return age;
// }

// const firstName = 'Ryan';
// const lastName = 'Asta';
// calcAge(1985);
// // console.log(age); // outside of the function scope we CANNOT access the 'age' variable

// //
// //
// //

// // LECTURE: Variable Environment: Hoisting and the TDZ
// // HOISTING: Hoisting makes some types of variables accessible/useable in the code
// // before they are actually declared. "Variables lifted to the top of their scope"
// // *** Behind the Scenes ***
// // Before execution, the code is scanned for variable declarations, and for each variable,
// // a new property is created in teh variable environement object.
// //
// // TDZ = Temporary Dead Zone
// // ** let and const variables are not hoisted and their inditial values are TDZ
// // *** Example ***
// // Below you will see the const variable 'teacher' is called before it is defined.
// // This will result in a 'ReferenceError: Cannot access 'job' before initialization'
// // This is known as being in the TDZ
// //
// // if (myName === 'Jonas') {
// //     console.log(`Jonas is a ${job}`);
// //     const age = 2021 - 1989;
// //     const job = 'teacher';
// // }
// // ?? Why does the TDZ exist?
// // - It makes it easier to avoid and catch errors:
// // --Accessing variables before declaration is a bad practice and should be avoided.
// // - Makes the const variables actually work
// //
// // ?? Why does Hoisting exist?
// // - Some programming techniques need to call functions before actually declaring them
//
//
//
// LECTURE: Hoisting and TDZ in Practice
// VARIABLES:
//
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Ryan';
// let job = 'student';
// const year = 2021;
//
// FUNCTIONS:
//
//
// console.log(addDeclaration(2, 3)); // function declaration
// console.log(addExpr(2, 3)); // function expression - this will not work
// console.log(addArrow(2, 3)); // arrow expression - this will not work

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// if (!numProducts) deleteShoppingCart();
// // due to hoisting, numProducts can be initialized above because it is a var variable,
// // but numProducts will be of value 'undefined', so all products will get deleted :(
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
//
//
//
// LECTURE: The 'this' Keyword
// - this KEYWORD/VARIABLE: Special variable that is created for every execution
// --context (every function). Takes the value of (points to) the "owner" of the
// --function in which 'this' keyword is used.
// - this is NOT static. It depends on how the function is called, and its
// --value its value is only assigned when the function is actually called.
// * arrow functions DO NOT get the 'this' keyword
//
//
//
// LECTURE: The 'this' Keyword in Practice
// console.log(this); // this references the global 'window' object
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// var firstName = 'Ryan'

// const jonas = {
//     firstName = 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
//     greet: () => console.log(`Hey ${this.firstName}`);
// }

// jonas.greet();
// console.log(this.firstName);

//
//
//

// LECTURE: Primitives vs Objects
// aka primitive types vs reference types
// 1) Primitive types are stored in the call stack
// 2) Reference types are stored in the heap.
// - Their variable exists in the call stack and that variable's value points to
// --a memory address in the heap.
// *Setting one object variable to another object variable will not create a deep copy
// *-So if the values of one variable are changed, the same will old tru for the other
// *--variable because both are pointing to the same memory address.

// primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// reference types
const jessica = {
  f: 'Jess',
  l: 'Will',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.l = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// copying objects
// 1) Shallow copy
// --if the object we are copying has another object within in (such as an array),
// then a copy of the inner object will not be copied. Instead both variables will
// share the same inner object. *The outer layer of the object will be a unique
// copy though.
const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.l = 'Roberts';
console.log('Before marriage:', jessica);
console.log('After marriage:', jessicaCopy);
