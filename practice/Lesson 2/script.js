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



// LECTURE: Introduction to Objects
// const ryan = {
//     firstName: 'Ryan',
//     lastName: 'Astaphan',
//     age: 36,
//     nationality: 'American',
//     friends: ['Miguel', 'Jeff']
// };



// LECTURE: Dot vs Bracket Notation
// console.log(ryan.nationality);
// console.log(ryan['nationality']);

// const nameKey = 'Name';
// console.log(ryan['first' + nameKey]);
// console.log(ryan['last' + nameKey]);

// const aboutRyan = prompt('What do you want to know about Ryan? Choose between firstName,\
// lastName, age, nationality, and friends.');

// if (ryan[aboutRyan]) {
//     console.log(ryan[aboutRyan]);
// } else {
//     console.log('We do not have that informaiton about Ryan. Please choose between firstName,\
//  lastName, age, nationality, and friends.');
// }

// ryan.location = 'Thailand';
// ryan['wife'] = 'Ahm';
// console.log(ryan);

// ryan.friends.push('Marco')

// Challenge
// Ryan has 3 friends and his best friend is named Miguel.
// console.log(`${ryan.firstName} has ${ryan.friends.length} friends and \
// his best friend is named ${ryan.friends[0]}.`);



// LECTURE: Object Methods
// const ryan = {
//     firstName: 'Ryan',
//     lastName: 'Astaphan',
//     birthYear: 1985,
//     nationality: 'American',
//     friends: ['Miguel', 'Jeff'],
//     isProfessionalSoccerPlayer: true,

// calcAge: function (birthYear) { // function EXPRESSIONS can exist within objects
//     return 2021 - birthYear; // function Declarations CANNOT 
// }

//     calcAge: function () { // function EXPRESSIONS can exist within objects
//         return 2021 - this.birthYear; // function Declarations CANNOT 
//     }
// };

// calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
// },
// Challenge
// Ryan is a 36-year old American professional soccer player.
// getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.nationality} \
// and he ${this.isProfessionalSoccerPlayer ? 'is' : 'is not'} a professional soccer player.`;
// };

// console.log(ryan.calcAge());
// console.log(ryan['calcAge']());
// console.log(ryan.calcAge(ryan.birthYear));
// console.log(ryan.calcAge());
// console.log(ryan.age);
// console.log(ryan.getSummary());



// LECTURE: Iteration: The For Loop
// initialize the counter; set the condition; increase the counter by 1 on each iteration
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights: rep #${rep}!`);
// }



// LECTURE: Looping Arrays, Breaking and Continuing
// const ryan = [
//     'Ryan',
//     'Astaphan',
//     36,
//     'American',
//     ['Miguel', 'Jeff'],
//     true
// ];

// const types = [];


// for (let i = 0; i < ryan.length; i++) {
//     // Reading from array 'ryan'
//     console.log(ryan[i], typeof ryan[i]);

//     // Filling an array 'types'
//     // types[i] = typeof ryan[i];  // 1 way to do it.
//     types.push(typeof ryan[i]);
// }

// console.log(types);


// const years = [1990, 2005, 1675, 2001];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2021 - years[i]);
// }
// console.log(ages);


// // continue and break
// for (let i = 0; i < ryan.length; i++) {
//     if (typeof ryan[i] !== 'string') continue;
//     console.log(ryan[i]);
// }

// for (let i = 0; i < ryan.length; i++) {
//     if (typeof ryan[i] === 'number') break;
//     console.log(ryan[i]);
// }



// LECTURE: Looping Backwards & Loops in Loops
// Looping Backwards
// const ryan = [
//     'Ryan',
//     'Astaphan',
//     36,
//     'American',
//     ['Miguel', 'Jeff'],
// ];

// const ryanBackwards = [];

// for (let i = ryan.length - 1; i >= 0; i--) {
//     ryanBackwards.push(ryan[i]);
// }
// console.log(ryanBackwards);

// // Loop in a loop
// const exercises = ['Bench Press', 'Squat', 'Deadlift'];

// for (let i = 0; i < exercises.length; i++) {
//     for (let n = 1; n <= 10; n++) {
//         console.log(`${exercises[i]}: Rep #${n} 🏋️‍♂️`);
//     }
// }



// LECTURE: The While Loop
// let rep = 1;
// while (rep <= 100) {
//     console.log(`Lifting weights!!! Rep #${rep}`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) { console.log('The loop is over') };
// }
