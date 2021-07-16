'use strict';

// Player scores
let player1Score = 0;
let player2Score = 0;
// document.querySelector('#score--0').textContent = 69;
// document.querySelector('#score--1').textContent = 13;

// Current tallies
let player1Tally = 0;
let player2Tally = 0;
// document.querySelector('#current--1').textContent = 15;

// TURN and ROLL Logic
let playerOnesTurn = true;
document.querySelector('.btn--roll').addEventListener('click', function () {
  //
  //
  //   ROLLING THE DICE
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(diceRoll); // test to see if diceRoll is working
  document.querySelector('.dice').src = `dice-${diceRoll}.png`; // change the image sprite of the dice corresponding to each roll
  //
  //
  //   PLAYER TURNS - dice roll logic
  //   player 1's turn
  if (playerOnesTurn) {
    if (diceRoll === 1) {
      player1Tally = 0;
      document.querySelector('#current--0').textContent = player1Tally;
      playerOnesTurn = false;
    } else {
      player1Tally += diceRoll;
      console.log('Player 1 tally: ', player1Tally);
      document.querySelector('#current--0').textContent = player1Tally;
    }
  }
  //   player 2's turn
  else {
    if (diceRoll === 1) {
      player2Tally = 0;
      document.querySelector('#current--1').textContent = player1Tally;
      playerOnesTurn = true;
    } else {
      player2Tally += diceRoll;
      console.log('Player 2 tally: ', player2Tally);
      document.querySelector('#current--1').textContent = player1Tally;
    }
  }

  // random roll between 1-6 ... add number to current total ... update image of dice
  // if diceRoll === 1, lose current and switch turns
});
