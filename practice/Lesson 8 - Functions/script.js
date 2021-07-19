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
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// // another example of a call-back function
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// // My own higher-order example
// const strLength = function (name) {
//   return name.length;
// };
// // console.log(strLength('ryan'));

// const names = ['Ryan', 'Ahm', 'Ei', 'Brahim'];

// const longestName = function (arr, fn) {
//   const lengths = [];
//   for (const n of names) {
//     lengths.push(fn(n));
//   }
//   const highest = Math.max(...lengths);
//   const findIndex = lengths.indexOf(highest);
//   return `${arr[findIndex]} has the longest name in the family, with his \
// name being ${highest} letters long.`;
// };

// console.log(longestName(names, strLength));

//
//
//

// // LESSON: Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // below we set a variable that is essentially equal to the retured function
// const greetingPhrase = greet('Hey');
// // we can then call that variable with the person's name
// greetingPhrase('Ei');

// // we can even call both functions all in 1 go:
// greet("What's up")('Ahm');

// // The above functions can be re-written as arrow functions
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// greetArrow('Sawatdee khrap')('Wooteepat');

//
//
//

// // LESSON: Closures
// // * A function always has access to the variable environment (VE)
// //   of the execution context in which it was created
// //
// // * CLOSURE: closure is the VE attached to the function,
// //     exactly as it was at the time and place when the function was created.
// //
// // * Closure has the highest-most priority within the scope chain

// // MORE CLOSURE DEFINTIONS:
// // 1) A closure is the closed-over variable environment (VE) of the
// //   execution context (EC)in which a function was created,
// //   even after when the execution gone is gone.
// // 2) A closure gives a function access to all the variables of its
// //   parent function, even after that parent function has returned.
// //   The function keeps a reference to its outer scope, which
// //   preservers the scope chain throughout time.
// // 3) A closure makes sure that a function doesn't lose connection
// //   to the variables that existed at the time & place of the function's birth.
// // 4) A closure is like a backpack that a function carries around wherever
// //  it goes. This backpack has all the variables that were present in
// //  the environment where the function was created.
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// // These instatiations will increase the passengerCount even though
// // that variable doesn't exist in the execution context.
// //   The function is able to do that because it was created within the
// //   variable environment of the secureBooking function, which holds
// //   the passengerCount variable
// booker();
// booker();
// booker();

// console.dir(booker);

//
//
//

// LESSON: More Closure Examples

// Example 1
let f;

// f will be assigned a function within this function
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

// then f will have a new function re-assigned to it after h() is instantiated
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // at this point the VE of 'g' is closed and gone, but due to closure
// the 'f' function still has access to the variable 'a'

h();
f(); // by this point the 'f' function has been re-assigned due to the 'h' function
// and by this point, f will no longer have access to the closure from 'g', such as
// the 'a' variable. You can see that below
console.dir(f);

//
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds.`);
};

// * In the above example 'boardPassengers', the inner function 'setTimeout'
//   shows an example of CLOSURE. Why? setTimeout has a 3 second wait time.
//   By the time the wait is over, the variable environment for the outer
//   function would have closed already, but the inner function still has
//   access to variables and arguments from the outer function.

// * The line belowshows that closure has priority over the scope chain,
//   because the variable on this line will NOT be used, instead
//   the one from within the function's closure will be.
const perGroup = 1000;
boardPassengers(180, 3);
