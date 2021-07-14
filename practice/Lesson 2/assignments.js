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
// const neighbors = ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'];
// neighbors.push('Utopia');
// console.log(neighbors)
// const byeByeUtopia = neighbors.pop();
// console.log(byeByeUtopia);
// if (neighbors.includes('Germany')) {
//     console.log('Germany shares a border with your country.');
// } else {
//     console.log(`Your country probably isn't in central Europe`);
// }
// neighbors[neighbors.length - 1] = 'New Malaysia';
// console.log(neighbors);



// // CODING CHALLENGE #2
// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tip = bill * 0.15;
//         return tip;
//     } else {
//         const tip = bill * 0.20;
//         return tip;
//     }
// }

// // console.log(calcTip(400));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(`The tips for the 3 bills are: ${tips}.`);
// const totals = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
// console.log(`The total for the 3 bills are: ${totals}.`);



// LECTURE: Introduction to Objects
// const myCountry = {
//     country: 'Thailand',
//     capital: 'Bangkok',
//     language: 'Thai',
//     population: 69,
//     neighbors: ['Myanmar', 'Laos', 'Cambodia', 'Malaysia']
// };
// console.log(myCountry); // the object properties will list out alphabetically



// LECTURE: Dot vs Bracket Notation
// console.log(`${myCountry.country} has ${myCountry.population} million \
// ${myCountry.language}-speaking people, ${myCountry.neighbors.length} \
// neighboring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 20;
// console.log(myCountry.population);

// console.log(`${myCountry.country} has ${myCountry.population} million \
// ${myCountry.language}-speaking people, ${myCountry.neighbors.length} \
// neighboring countries and a capital called ${myCountry.capital}.`);



// LECTURE: Object Methods
// const myCountry = {
//     country: 'Thailand',
//     capital: 'Bangkok',
//     language: 'Thai',
//     population: 69,
//     // neighbors: ['Myanmar', 'Laos', 'Cambodia', 'Malaysia'],
//     neighbors: [],
//     describe: function () {
//         console.log(`${this.country} has ${this.population} million \
// ${this.language}-speaking people, ${this.neighbors.length} neighboring \
// countries and a capital city called ${this.capital}.`);
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//     }
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);



// CODING CHALLENGE #3
// const mark = {
//     weight: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// };

// const john = {
//     weight: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.weight / (this.height ** 2);
//         return this.BMI;
//     }
// };

// console.log(john.calcBMI());
// console.log(mark.calcBMI());


// if (mark.BMI > john.BMI) {
//     console.log(`Mark's BMI (${mark.BMI}) is higher than John's BMI (${john.BMI}).`);
// } else if (mark.BMI < john.BMI) {
//     console.log(`Mark's BMI (${mark.BMI}) is lower than John's BMI (${john.BMI}).`);
// } else {
//     console.log(`Mark and John have the same BMI (${mark.BMI}).`);
// };



// LECTURE: Iteration: The For Loop
for (let rep = 1; rep <= 50; rep++) {
    console.log(`Voter #${rep} is currently voting.`);
}