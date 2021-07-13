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
const calcAge = function (birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} has ${retirement} years left until retirement.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired! 🥳`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1985, 'Ryan'));
console.log(yearsUntilRetirement(1950, 'Betty'));