'use strict';

// FUNCTIONS
//
// // LESSON: Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH763', 2, 800);
// createBooking('LH763', 3);

// //
// //
// //

// // LESSON: How Passing Arguments Works - Value vs. Reference
// // ** in JavaScript you can only pass values to functions, not reference.
// // *** a value can reference an object, but it is not considered as passing a reference.
// const flight = 'LH123';
// const ryan = {
//   name: 'Ryan A',
//   passport: 505777933,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 505777933) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, ryan);
// console.log(flight);
// console.log(ryan);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000);
// };

// newPassport(ryan);
// checkIn(flight, ryan);

//
//
//

// LESSON: First-Class and Higher-Order Functions

// First-Class Functions
// * JavaScript treats functions as FIRST-CLASS citizens
// * This means that functions are simply VALUES
// * Functions are just another "type" of object
// ***
// *** Because functions are treated as values, we can:
// 1) Store functions in variables or properties
// 2) Pass functions as arguments to OTHER functions
// 3) Return functions FROM other functions
// 4) Call methods on functions

// Higher-Order Functions
// * A higher order function is:
// ***1) A function that RECEIVES another function as an argument, or
// ***2) A function that RETURNS a new function, or
// ***3) Both
// * (This is only possible because of first-class functions)
// ***
// 1 Example of a Higher-Order Function:
// ***
// 1) addEventListener - a function that receives another function
// const greet = () => console.log('Hey Dude');
// btnClose.addEventListener('click', greet);

//
//
//

// LESSON: Functions Accepting Callback Functions
// *  Callback functions are very important because they allow for ABSTRACTION
// ** Abstraction basically lets us create very specialized functions, instead
//    of really complex functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// another example of a call-back function
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

// My own higher-order example
const strLength = function (name) {
  return name.length;
};
// console.log(strLength('ryan'));

const names = ['Ryan', 'Ahm', 'Ei', 'Brahim'];

const longestName = function (arr, fn) {
  const lengths = [];
  for (const n of names) {
    lengths.push(fn(n));
  }
  const highest = Math.max(...lengths);
  const findIndex = lengths.indexOf(highest);
  return `${arr[findIndex]} has the longest name in the family, with his \
name being ${highest} letters long.`;
};

console.log(longestName(names, strLength));
