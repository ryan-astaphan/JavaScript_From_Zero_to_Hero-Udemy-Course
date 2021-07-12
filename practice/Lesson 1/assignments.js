// // LECTURE: Values and Variables
// let country = 'Thailand'
// let continent = 'Asia'
// let population = 70

// // LECTURE: Data Types
// let isIsland = false;
// let language;

// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof language);
// // console.log(typeof country);

// // LECTURE let, const, var
// language = 'Thai';
// const thailandIsIsland = false;

// // LECTURE: Basic operators
// let halfPopulation = population / 2;
// console.log(halfPopulation);
// halfPopulation++;
// console.log(halfPopulation); // population increases by 1 million
// const finlandPopulation = 6;
// console.log(halfPopulation > finlandPopulation);

// let description = 'Portugal is in Europe and its 11 million people speak Portuguese.'

// //  CODING CHALLENGE #1 - data group 1
// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnsWeight = 92;
// const johnsHeight = 1.95;

// const marksBMI = marksWeight / marksHeight ** 2;
// // console.log(marksBMI);
// const johnsBMI = johnsWeight / johnsHeight ** 2;
// // console.log(johnsBMI);
// // const markHigherBMI = marksBMI > johnsBMI;
// // console.log(markHigherBMI);
// // console.log("End of data group 1")

// // //  CODING CHALLENGE #1 - data group 2
// const marksWeight2 = 95;
// const marksHeight2 = 1.88;
// const johnsWeight2 = 85;
// const johnsHeight2 = 1.76;

// const marksBMI2 = marksWeight2 / (marksHeight2 * marksHeight2)
// // console.log(marksBMI2);
// const johnsBMI2 = johnsWeight2 / (johnsHeight2 * johnsHeight2)
// console.log(johnsBMI2);
// const markHigherBMI2 = marksBMI2 > johnsBMI2;
// console.log(markHigherBMI2);


// LECTURE: String and Template Literals
// const myCountry = 'Thailand';
// // const myContinent = 'Asia';
// const countryPopulation = 69;
// const countryLanguage = 'Thai';

// const templateLiteralPractice = `${myCountry} is in ${myContinent}, and its ${countryPopulation} million people speak ${countryLanguage}.`;
// console.log(templateLiteralPractice);


// LECTURE If / Else Statements
// if (countryPopulation > 33) {
// console.log(`${myCountry}'s population is above average.`);
// } else {
// console.log(`${myCountry}'s population is ${33 - countryPopulation} million below average.`);
// }


// // CODING CHALLENGE #2 - If / Else Statemenets
// if (johnsBMI > marksBMI) {
//     console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI}).`);
// } else {
//     console.log(`Mark's BMI(${marksBMI}) is higher than John's (${johnsBMI}).`);
// }

// if (johnsBMI2 > marksBMI2) {
//     console.log(`John's BMI (${johnsBMI2}) is higher than Mark's (${marksBMI2}).`);
// } else {
//     console.log(`Mark's BMI(${marksBMI2}) is higher than John's (${johnsBMI2}).`);
// }


// LECTURE: Typer Conversion and Coercion
// Predictions
// a = '9' - '5'; // minus sign converts strings to numbers, so output should be the # 4
// b = '19' - '13' + '17'; // (6 + '17') ... output should be the string '617'
// c = '19' - '13' + 17; // output should be 23
// d = '123' < 57; // Output will be false
// e = 5 + 6 + '4' + 9 - 4 - 2; // (11 + '4' = '114') .... '114' + 9 - 4 - 2
// // '1149' - 4 - 2 = 1143
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// LECTURE: Equality operators: == vs ===
// const neighboringCountries = Number(prompt("How many nations border your country?"));
// if (neighboringCountries === 1) {
//     console.log("Only 1 bordering country.");
// } else if (neighboringCountries > 1) {
//     console.log("More than 1 bordering country");
// } else {
//     console.log("You must be on an island.");
// }


// LECTURE: Logical Operators
// if (countryLanguage === 'English' && countryPopulation < 50 && !isIsland) {
//     console.log(`Sarah should move to ${myCountry}.`)
// } else {
//     console.log(`${myCountry} is not the right place for Sarah to live.`)
// }


// CODING CHALLENGE #3
// competition #1
console.log('Competition #1');
const dolphinsAvgScore = (96 + 108 + 89) / 3;
const koalasAvgScore = (88 + 91 + 110) / 3

if (dolphinsAvgScore > koalasAvgScore) {
    console.log('The Dolphins have won the championship!');
} else if (koalasAvgScore > dolphinsAvgScore) {
    console.log('The Koalas have won the championship!');
} else {
    console.log('The competition is a draw!');
}
console.log('');

// competition #2
console.log('Competition #2');
const dolphinsAvgScore2 = (97 + 112 + 101) / 3;
const koalasAvgScore2 = (109 + 95 + 123) / 3

if (dolphinsAvgScore2 > koalasAvgScore2 && dolphinsAvgScore2 >= 100) {
    console.log('The Dolphins have won the championship!');
} else if (koalasAvgScore2 > dolphinsAvgScore2 && koalasAvgScore2 >= 100) {
    console.log('The Koalas have won the championship!');
} else {
    console.log('The competition is a draw!');
}
console.log('');

// competition #3
console.log('Competition #3');
const dolphinsAvgScore3 = (97 + 112 + 101) / 3;
const koalasAvgScore3 = (109 + 95 + 106) / 3

if (dolphinsAvgScore3 > koalasAvgScore3 && dolphinsAvgScore3 >= 100) {
    console.log('The Dolphins have won the championship!');
} else if (koalasAvgScore3 > dolphinsAvgScore3 && koalasAvgScore3 >= 100) {
    console.log('The Koalas have won the championship!');
} else if (koalasAvgScore3 === dolphinsAvgScore3 && koalasAvgScore3 >= 100) {
    console.log('The competition is a draw!');
} else {
    console.log('There is no winner!');
}
console.log('');