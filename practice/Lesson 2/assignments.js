'use strict';

function describeCountry(country, population, capitalCity) {
    const countryInfo = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryInfo;
}

const thailand = describeCountry('Thailand', 69, 'Bangkok');
const stKitts = describeCountry('St. Kitts', 1, 'Basseterre');
const colombia = describeCountry('Colombia', 50, 'Bogota');

console.log(thailand);
console.log(stKitts);
console.log(colombia);
