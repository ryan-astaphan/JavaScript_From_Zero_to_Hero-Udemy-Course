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
