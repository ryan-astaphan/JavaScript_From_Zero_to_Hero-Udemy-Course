'use strict';

// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//     const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//     return countryInfo;
// }

// const thailand = describeCountry('Thailand', 69, 'Bangkok');
// const stKitts = describeCountry('St. Kitts', 1, 'Basseterre');
// const colombia = describeCountry('Colombia', 50, 'Bogota');

// console.log(thailand);
// console.log(stKitts);
// console.log(colombia);


// LECTURE: Function Declarations vs Expressions

// #1 Function declaration
// function percentageOfWorldPopulation(population) {
//     return (population / 7900) * 100;
// }

// const thailand = percentageOfWorldPopulation(79);
// console.log(thailand);

// const usa = percentageOfWorldPopulation(328);
// console.log(usa);

// const indonesia = percentageOfWorldPopulation(270);
// console.log(indonesia);

// // #2 Function expression
// const population2 = function (population) {
//     return (population / 7900) * 100;
// }
// const thailand2 = population2(79);
// console.log(thailand2);

// const usa2 = population2(328);
// console.log(usa2);

// const indonesia2 = population2(270);
// console.log(indonesia2);



// LECTURE: Arrow Functions
// const percentWorldPopulation = (population) => (population / 7900) * 100;

// const thaiPop = percentWorldPopulation(79);
// const usaPop = percentWorldPopulation(328);
// const indoPop = percentWorldPopulation(270);
// console.log(thaiPop);
// console.log(usaPop);
// console.log(indoPop);



// LECTURE: Functions Calling Other Functions
// function describePopulation(country, population) {
//     const countrysPercentOfWorldPopulation = percentageOfWorldPopulation(population);

//     console.log(`${country} has ${population} million people, which is about \
//     ${countrysPercentOfWorldPopulation}% of the world population.`);
// }

// const thailand = describePopulation('Thailand', 69);
// const usa = describePopulation('America', 328);
// const indonesia = describePopulation('Indonesia', 270);



// CODING CHALLENGE #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// problem #1
// const dolphinsAvg = calcAverage(44, 23, 71);
// const koalasAvg = calcAverage(65, 54, 49);

// function checkWinner(dolphins, koalas) {
//     if (dolphins > koalas * 2) {
//         console.log(`The Dolphins win with a score of\
//         ${dolphins} to ${koalas}.`);
//     } else if (koalas > dolphins * 2) {
//         console.log(`The Koalas win with a score of\
//         ${koalas} to ${dolphins}.`);
//     } else {
//         console.log(`Today's match leaves us without a winner.`);
//     }
// }

// console.log(checkWinner(dolphinsAvg, koalasAvg));

// problem #2
// const dolphinsAvg2 = calcAverage(85, 54, 41);
// const koalasAvg2 = calcAverage(23, 34, 27);

// function checkWinner(dolphins, koalas) {
//     if (dolphins > koalas * 2) {
//         console.log(`The Dolphins win with a score of ${dolphins} to ${koalas}.`);
//     } else if (koalas > dolphins * 2) {
//         console.log(`The Koalas win with a score of ${koalas} to ${dolphins}.`);
//     } else {
//         console.log(`Today's match leaves us without a winner.`);
//     }
// }

// console.log(checkWinner(dolphinsAvg2, koalasAvg2));



// LECTURE: Introduction to Arrays
// const populations = [37, 99, 23, 55];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorldPopulation(populations[0]), percentageOfWorldPopulation(populations[1]), percentageOfWorldPopulation(populations[2]), percentageOfWorldPopulation(populations[3])];

// console.log(percentages);



// LECTURE: Basic Array Operations (Methods)
const neighbors = ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'];
neighbors.push('Utopia');
console.log(neighbors)
const byeByeUtopia = neighbors.pop();
console.log(byeByeUtopia);
if (neighbors.includes('Germany')) {
    console.log('Germany shares a border with your country.');
} else {
    console.log(`Your country probably isn't in central Europe`);
}
neighbors[neighbors.length - 1] = 'New Malaysia';
console.log(neighbors);