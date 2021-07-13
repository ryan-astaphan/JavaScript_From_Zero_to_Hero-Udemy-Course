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
function percentageOfWorldPopulation(population) {
    return (population / 7900) * 100;
}

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
function describePopulation(country, population) {
    const countrysPercentOfWorldPopulation = percentageOfWorldPopulation(population);

    console.log(`${country} has ${population} million people, which is about \
    ${countrysPercentOfWorldPopulation}% of the world population.`);
}

const thailand = describePopulation('Thailand', 69);
const usa = describePopulation('America', 328);
const indonesia = describePopulation('Indonesia', 270);