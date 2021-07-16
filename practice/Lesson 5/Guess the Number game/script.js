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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   When there is no input
  if (!guess) {
    displayMessage('⛔ Enter a number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 CORRECT!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `🥇 Highscore: ${highScore}`;
    }

    // When guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? '📈 You guessed too high!'
          : '📉 You guessed too low!';
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  }
});
// ------------
// ------------
// ------------
// CODING CHALLENGE #1 - Implementing the Play Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
