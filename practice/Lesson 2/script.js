'use strict';

// LECTURE: Functions
// function logger() {
//     console.log('My name is Ryan');
// }

// // calling / running / or invoking the function
// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Ingredients: ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const ryansFruitJuice = fruitProcessor(2, 3);
// console.log(ryansFruitJuice);

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 3);
// console.log(orangeJuice)



// LECTURE: Function declarations vs expressions
// 1) one major difference between declarations and expressions
// is that DECLARATIONS can be called before they are defined

// this is a function DECLARATION
// const ryansAge = calcAge(1985); // it's ok to call the function before defining it
// function calcAge(birthYear) {
//     return 2021 - birthYear;
// }

// // this is a function EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }
// const age2 = calcAge2(1981);
// console.log(ryansAge, age2);



// LECTURE: Arrow Functions
// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1985);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} has ${retirement} years left until retirement.`;
// }

// console.log(yearsUntilRetirement(1985, 'Ryan'));
// console.log(yearsUntilRetirement(1981, 'David'));



// LECTURE: Functions Calling Other Functions
// function cutFruitPiece(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPiece(apples);
//     const orangePieces = cutFruitPiece(oranges);

//     const juice = `Ingredients: ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));



// LECTURE: Reviewing Functions
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} has ${retirement} years left until retirement.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired! 🥳`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1985, 'Ryan'));
// console.log(yearsUntilRetirement(1950, 'Betty'));



// LECTURE: Arrays
// const friends = ['Miguel', 'Jeff', 'Jose'];
// console.log(friends);
// console.log(friends[0]); // array indexing

// const years = new Array(1991, 1994, 1997, 2001);
// console.log(years);
// console.log(years.length); // array length method
// console.log(years[years.length - 1]); // negative index using length method

// years[0] = 1992 // replacing values at a specific index is allowed
// console.log(years);

// const firstName = 'Ryan';
// const ryan = [firstName, 'Asta', 2021 - 1985];
// console.log(ryan);

// function calcAge(birthYear) {
//     return 2021 - birthYear;
// }
// const years2 = [1990, 1969, 1975, 1989];
// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
// console.log(ages);



// LECTURE: Basic Array Operations (Methods)
// const friends = ['Miguel', 'Jeff', 'Jose'];
// Adds elements
// const newLength = friends.push('Marco'); // adds element to the end of the array
// console.log(newLength);
// console.log(friends);

// friends.unshift('Ei'); // adds an element to the front of the array
// console.log(friends);

// Removes elements
// const popped = friends.pop(); // removes last element
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift(); // removes first element
// console.log(shifted);
// console.log(friends);

// // Searches for inclusion of element in array
// console.log(friends.includes('Miguel'));
// console.log(friends.includes('Jay'));

// if (friends.includes('Miguel')) {
//     console.log('You have a friend named Miguel');
// }