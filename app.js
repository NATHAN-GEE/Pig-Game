"use strict";

const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
//diceRoll.addeventlistner('click', randomNumber());

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add("hidden"); //you have to set it in the css by creating .Hidden class

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`; //you are putting the returned random number from dice into the src to show the random image corrisponding to the png file.
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      //   currentScore = 0;
      //   activePlayer = activePlayer === 0 ? 1 : 0;
      //   player0.classList.toggle('player--active');
      //   player1.classList.toggle('player--active');

      // //if (activePlayer === 0) {
      //     player1.classList.add('player--active');
      //     player0.classList.remove('player--active');
      //     activePlayer = 1;
      //     current0 = 0;

      // }
      // else {

      //     player0.classList.add('player--active');
      //     player1.classList.remove('player--active');
      //     activePlayer = 0;
      //     current1 = 0;

      // };
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore; //gets the score and store to array location [0],[1]based on active player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    switchPlayer();
  }
});
btnNew.addEventListener("click", function () {
  location.reload();
});
