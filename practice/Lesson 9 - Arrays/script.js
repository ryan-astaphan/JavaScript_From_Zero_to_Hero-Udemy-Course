'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // LECTURE: Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE Method
// // * Splice does NOT MUTATE the original array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); // only returns last value
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE Method
// // * Splice DOES MUTATE the original array
// // * The 1st argument of splice is an index
// // * The 2nd argument of splice is the # of values to remove
// // console.log(arr.splice(2));
// arr.splice(1, 3);
// console.log(arr); // the original array is mutated from the SPLICE method

// // REVERSE Method
// // *Reverse DOES MUTATE the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse());

// // CONCAT
// // *Concat does NOT MUTATE the original array
// const arr2 = ['f', 'g', 'h'];
// const letters = arr.concat(arr2);
// console.log(letters);
// // another way to achieve the same result as concat is the SPREAD method
// console.log(...arr, ...arr2);

// // JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE: Looping Arrays: forEach
// **   Continue and Break do NOT work in forEach loops
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, v] of movements.entries()) {
//   if (v > 0) {
//     console.log(`${i + 1}. You deposited ${v} dollars`);
//   } else {
//     console.log(`${i + 1}. You withdrew ${Math.abs(v)} dollars.`);
//   }
// }

// console.log('----------------');
// console.log('----------------');
// console.log('---------forEach loop---------');
// console.log('----------------');
// console.log('----------------');

// // The forEach function takes in 3 parameters:
// //    1) the current element
// //    2) the index
// //    3) the entire array
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`${index + 1}. You deposited ${movement} dollars`);
//   } else {
//     console.log(`${index + 1}. You withdrew ${Math.abs(movement)} dollars.`);
//   }
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE: Data Transformations with MAP, FILTER and REDUCE
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// MAP
// -  Map returns a new array containing the results of
//    applying an operation on all original array elements.
//    ex.  current * 2

// FILTER
// -  Filter returns a new array containing the array
//    elements that passed a specified test condition
//    ex.  current > 2

// REDUCE
// -  Reduce "boils down" (or filters) all array elements
//    into one single value, such as adding all of them together.
//    ex.  sum + current

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURE: The Map Method
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const eurToUsd = 1.1;

// Map Method
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

// Map Method with ARROW function
const movementsUSD2 = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSD2);

const movementsTally = movements.map(
  (mov, i, arr) =>
    `${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )} dollars.`
);
console.log(movementsTally);
