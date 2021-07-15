'use strict';

// BEGINNING THE GUESS-MY-NUMBER PROJECT
// console.log(document.querySelector('.message').textContent);
// ------------
// ------------
// ------------
// LECTURE: What's the DOM and DOM Manipulation?
// DOM = Document Object Model:
// DOM: a structured representation of an HTML documents.
// The DOM allows JavaScript to access HTML elements and
// styles in order to manipulate them.

// "document" is a special object that is the entry-point
// to the DOM. That's why we use document.querySelector()
// to access an element.
//
// The DOM is not JavaScript
// It's actually part of the WEB APIs that web browsers use.
// ------------
// ------------
// ------------
// LECTURE: Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 \
Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
