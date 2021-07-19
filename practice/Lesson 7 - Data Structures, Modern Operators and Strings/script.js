'use strict';

// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// //
// //
// LESSON: Destructuring Arrays
// Data needed for first part of the section
const restaurant = {
  nameRest: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    console.log(
      `Ordered received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} \
will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with the following 3 ingredients 
${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza: function (mainIng, ...otherIngredients) {
    console.log(mainIng);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring arrays
// const [x, y, z] = arr;
// console.log(x, y, z);

// // destructuring arrays
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// // switching variables with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested array
// const nested = [2, 4, [5, 6]];
// const [e, , f] = nested; // here 'f' will return the nested array as a whole
// console.log(e, f);
// // destructuring within destructuing
// const [i, , [j, k]] = nested; // here 'j' and 'k' will return the individual values within the nested array
// console.log(i, j, k);

// // Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // this will return 8, 9, undefined
// // ^ because we are assigning 3 variables to an array that only has 2 values
// const [s = 1, t = 1, u = 1] = [8, 9]; // default values set to 1
// console.log(s, t, u); // with default values set, u will = 1

//
//
//

// // LESSON: Destructuring Objects
// // destructuring an object
// const { nameRest, openingHours, categories } = restaurant;
// console.log(nameRest, openingHours, categories);

// // re-naming the variables within the object
// const {
//   nameRest: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // setting default values (plus changing one variable name)
// const {
//   menu = ['Pepperoni', 'Meatball and Mushroom'],
//   starterMenu: starters = [],
// } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // by wrapping the entire line of code in parentheses,
// // ^^ it allows us to mutate the variables. Without the parentheses this wouldn't work.
// console.log(a, b);

// // Nested objects
// let { fri } = openingHours;
// console.log(fri);
// ({
//   fri: { open, close }, // ^^ this line destructures the nested object
// } = openingHours);
// console.log(open, close);

// // ---
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//
//
//

// // LECTURE: The Spread Operator (expanding an array)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Mozarella Sticks'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu]; // this is a shallow-copy

// // Join 2 arrays or more
// const combinedMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(combinedMenu);

// // The SPREAD operator works on all ITERABLES
// // Iterables: arrays, strings, maps and sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // Real-world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { ...restaurant, founder: 'Ryano', foundedIn: 1998 };
// // as a note, the above will make an actual copy, not just a reference
// console.log(newRestaurant);

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// // LESSON: Rest Pattern and Parameters
// // *the rest parameter builds an array from multiple values

// // example of SPREAD
// // * you can tell it's spread because it is on the RIGHT side of the = equal sign
// const arr = [1, 2, ...[4, 5]];

// // REST, because it is on the LEFT side of the = equal sign
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // notice that skipped elements will not be included

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // REST PARAMETERS on Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(6, 9, 2, 3, 5, 3);

// const x = [23, 5, 7];
// add(...x);

// // Restaurant method example
// restaurant.orderPizza('mushrooms', 'meatballs', 'pepperoni');
// restaurant.orderPizza('olives');

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------

// LESSON: Looping Arrays - the for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// the for-of loop
for (const item of menu) console.log(item);

// How to use the for-of loop with indexes returned
for (const item of menu.entries()) {
  console.log(item);
}

console.log([...menu.entries()]); // taking a look at what the entries object looks like

// Again, returning the indexes within a for-of loop, but while DESTRUCTURING the item
for (const [item, element] of menu.entries()) {
  console.log(`${item + 1}: ${element}`);
}
