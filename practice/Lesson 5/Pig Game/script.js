'use strict';

// Player scores
let player1Score = 0;
let player2Score = 0;
document.querySelector('#score--0').textContent = 69;
document.querySelector('#score--1').textContent = 13;

// Current tallies
let player1Tally = 0;
let player2Tally = 0;
document.querySelector('#current--0').textContent = 5;
document.querySelector('#current--1').textContent = 15;

// TURN and ROLL Logic
let playerOnesTurn = true;
document.querySelector('.btn--roll').addEventListener('click', function () {
  //   dice roll
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll);
  //   document.querySelector('.dice').; // change img src
  //   if (playerOnesTurn) {
  //     if (diceRoll === 1) {
  //       player1Tally = 0;
  //       playerOnesTurn = false;
  //     }
  //     player1Tally += diceRoll;
  //   } else {
  //     if (diceRoll === 1) {
  //       player2Tally = 0;
  //       playerOnesTurn = true;
  //     }
  //     player2Tally += diceRoll;
  //   }

  // random roll between 1-6 ... add number to current total ... update image of dice
  // if diceRoll === 1, lose current and switch turns
});
