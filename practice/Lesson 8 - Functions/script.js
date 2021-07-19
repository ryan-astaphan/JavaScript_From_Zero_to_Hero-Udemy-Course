'use strict';

// FUNCTIONS
//
// LESSON: Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH763', 2, 800);
createBooking('LH763', 3);

//
//
//

// LESSON: How Passing Arguments Works - Value vs. Reference
// ** in JavaScript you can only pass values to functions, not reference.
// *** a value can reference an object, but it is not considered as passing a reference.
const flight = 'LH123';
const ryan = {
  name: 'Ryan A',
  passport: 505777933,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 505777933) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, ryan);
console.log(flight);
console.log(ryan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(ryan);
checkIn(flight, ryan);
