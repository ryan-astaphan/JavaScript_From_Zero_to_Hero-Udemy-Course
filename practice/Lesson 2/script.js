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
const ryansAge = calcAge(1985); // it's ok to call the function before defining it
function calcAge(birthYear) {
    return 2021 - birthYear;
}

// this is a function EXPRESSION
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1981);
console.log(ryansAge, age2);