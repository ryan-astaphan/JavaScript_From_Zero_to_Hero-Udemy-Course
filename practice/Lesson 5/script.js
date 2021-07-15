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
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 \
// Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// ------------
// ------------
// ------------
// LECTURE: Handling Click Events
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ Enter a number!';
//   }
// });
// ------------
// ------------
// ------------
// LECTURE: Implementing the Game Logic
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Enter a number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 CORRECT!';
    if (score > highScore) {
      highScore = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈 You guessed too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉 You guessed too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
