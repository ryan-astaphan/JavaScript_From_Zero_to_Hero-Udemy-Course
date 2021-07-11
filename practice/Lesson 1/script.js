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
const age = 15;

if (age >= 16) {
    console.log('You are old enough to start driving.');
} else {
    const yearsLeft = 16 - age;
    console.log(`You are too young to drive. You need to wait ${yearsLeft} years.`);
};

const birthYear = 1985;
let century; // variables must be defined outside of code-blocks

if (birthYear <= 2000) {
    century = 'You were born in the 20th century.';
} else {
    century = 'You were born in the 21st century.';
}
console.log(century)