// // let js = 'amazing';
// // console.log(40 + 8 + 23 - 10);

// let firstName = 'Ryan'
// // console.log(firstName);

// // let jsNamingConventions = "In this video the instructor went over \n
// // camelCase and other rules and conventions";

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // viewing data types with 'typeof'
// // console.log(typeof true);
// // console.log(typeof firstName);
// // console.log(typeof 23);
// // console.log(typeof 'true');
// console.log(typeof javascriptIsFun);

// // when RE-ASSIGNING a VALUE we do not use "let"
// javascriptIsFun = 'Yes it is'
// console.log(typeof javascriptIsFun);

// // data type 'undefined'
// let year;
// console.log(year);
// console.log(typeof year);

// // re-assigning once agian
// year = 1985;
// console.log(typeof year);

// // NULL - the typeof bug that never got fixed for legacy purposes
// console.log(typeof null);

// let, const & var
// 1) let is good for assigning a blank variable or for when you plan 
// to reassign the variable
// 2) const variables cannot change and cannot be assigned to blank values
// - const stands for constant
// - good practice is to use const by default and then let when you're sure
// - the variable will later be re-assigned
// 3) var (variable) is the old way to define variables
// - var should no longer be used, but we learn it for legacy purposes
// 4) in JS variables can be assigned values without properly declaring them
// with let, const or var. However this is a bad practice and we will later learn why

//  String concatenation
// const firstName = 'Ryan';
// const lastName = 'Astaphan';
// console.log(firstName + ' ' + lastName);

// Assignment operators
// let x = 2 + 3;
// x += 5;
// x *= 5;
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// Comparison operators: >, <, >=, <=
// console.log(5 > 3);
// console.log(5 < 3);
// console.log(37 - 15 < 99 - 10);

// Operator precedence 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// Strings and template literals
// const firstName = 'Ryan';
// const job = 'programmer';
// const birthYear = 1985;
// const currentYear = 2021;

// const ryan = "I'm " + firstName + ', a ' + (currentYear -
//     birthYear) + ' years old ' + job + '!';
// console.log('string concatenation')
// console.log(ryan);

// const ryanTemplateLiteral = `I'm ${firstName}, a ${currentYear -
//     birthYear} years old ${job}!`;
// console.log('template literal');
// console.log(ryanTemplateLiteral);
// With template literals new lines can simply be returned,
// they don't need special characters.
// Also, all strings can be written with the backtick charcacter,
// instead of single or double quotes.

// if else statements
// const age = 15;

// if (age >= 16) {
//     console.log('You are old enough to start driving.');
// } else {
//     const yearsLeft = 16 - age;
//     console.log(`You are too young to drive. You need to wait ${yearsLeft} years.`);
// };

// const birthYear = 1985;
// let century; // variables must be defined outside of code-blocks

// if (birthYear <= 2000) {
//     century = 'You were born in the 20th century.';
// } else {
//     century = 'You were born in the 21st century.';
// }
// console.log(century)

// Type Conversion and Coercion
// Type conversions
// const yearOfBirth = '1985'
// console.log(Number(yearOfBirth) + 18); // here the Number function is just outputting our string
// // to a number type. It is not reassigning a number value to our value, as seen below
// console.log(yearOfBirth + 18);  // the output here will be the original string value '1985'


// console.log(Number('Ryan')); // this will log as 'NaN'
// console.log(typeof Nan); // the type for NaN is undefined

// console.log(String(23), 23); // the first 23 will return as a string, the 2nd as a number

// // type coercions 
// console.log('I am ' + 36 + ' years old.'); //This is type coersion, 36 is converted to a string due to the plus symbol
// console.log('23' - '10' - 3); // Output is the number 10. The minus sign converts the strings to numbers
// console.log('22' * '2'); // Output is 44. The multiplication sign converts the strings to numbers
// console.log('22' / '2'); // Output is a number, 11
// console.log('22' > '2'); // Output is true, the comparison operator converts the strings to numbers

// let n = '1' + 1; // Output is the string '11' because the plus sign converts numbers to strings for concatenation
// n = n - 1 // ('11' - 1) ... Minus sign converts strings to numbers
// console.log(n); // Output will be the number 10.

// console.log(2 + 3 + 4 + '5'); //Output will be '95'... 2+3+4 = 9 ... 9 + '5' = string concatenation


// TRUTHY and FALSY Values
// 5 falsy values: 0, '', undefined, null, NaN
// everything else is truthy 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.log(Boolean('Hi'));

// const money = 0;
// if (money) {
//     console.log("Don't spend all your money!");
// } else {
//     console.log("You have no money.");
// }

// let thingToSay;
// if (thingToSay) {
//     console.log('I am never lost for words!');
// } else {
//     console.log('I am lost for words.');
// }


// EQUALITY OPERATORS: == vs === 
// LOOSE equality vs STRICT equality
// The difference between == and === is that: == converts the variable values 
// to the same type before performing comparison. This is called type coercion. 
// === does not do any type conversion (coercion) and returns true only 
// if both values and types are identical for the two variables being compared.

console.log('18' == 18); // outputs as true due to type coercion
console.log('18' === 18); // outputs to false

// As a rule of thumb, always use the strict equality operator ===
// Don't use loose equality. Even if you need type coercion, just do
// manual type conversion

const favNumber = Number(prompt("What's your favorite number?"));

if (favNumber === 13) {
    console.log("That's not a very lucky number, is it?");
} else if (favNumber === 7) {
    console.log("Now that's a lucky number!");
} else if (favNumber === 0) {
    console.log("Really?!");
} else {
    console.log("Ok. Nice number.");
}

// LOOSE and STRICT INEQUALITY Operators: != and !==
// Best practice is to use the strict version.