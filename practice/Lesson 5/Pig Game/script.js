'use strict';

// Player scores
let player1Score = 0;
let player2Score = 0;
document.querySelector('#score--0').textContent = 0;

// Current tallies
let player1Tally = 0;
let player2Tally = 0;
document.querySelector('#score--1').textContent = 0;

// TURN and ROLL Logic
let playerOnesTurn = true;

// ROLL DICE BUTTON
document.querySelector('.btn--roll').addEventListener('click', function () {
  //
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
    //   if player rolls a 1
    if (diceRoll === 1) {
      player1Tally = 0;
      document.querySelector('#current--0').textContent = player1Tally;
      playerOnesTurn = false;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
    }
    // if player rolls any other #
    else {
      player1Tally += diceRoll;
      console.log('Player 1 rolled a: ', diceRoll);
      document.querySelector('#current--0').textContent = player1Tally;
    }
  }
  //   player 2's turn
  else {
    //   if player rolls a 1
    if (diceRoll === 1) {
      player2Tally = 0;
      document.querySelector('#current--1').textContent = player2Tally;
      playerOnesTurn = true;
      document.querySelector('.player--0').classList.add('player--active');
      document.querySelector('.player--1').classList.remove('player--active');
    }
    // if player rolls any other #
    else {
      player2Tally += diceRoll;
      console.log('Player 2 rolled a: ', diceRoll);
      document.querySelector('#current--1').textContent = player2Tally;
    }
  }
});
//
//
// HOLD BUTTON
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playerOnesTurn) {
    player1Score += player1Tally;
    document.querySelector('#score--0').textContent = player1Score;
    player1Tally = 0;
    document.querySelector('#current--0').textContent = player1Tally;
    playerOnesTurn = false;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  } else {
    player2Score += player2Tally;
    document.querySelector('#score--1').textContent = player2Score;
    player2Tally = 0;
    document.querySelector('#current--1').textContent = player2Tally;
    playerOnesTurn = true;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
});
//
//
// NEW GAME BUTTON
document.querySelector('.btn--new').addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  player1Tally = 0;
  player2Tally = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  playerOnesTurn = true;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});
