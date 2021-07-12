'use strict';

function logger() {
    console.log('My name is Ryan');
}

// calling / running / or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Ingredients: ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const ryansFruitJuice = fruitProcessor(2, 3);
console.log(ryansFruitJuice);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 3);
console.log(orangeJuice)