"use.strict";

const player0EL = document.querySelector(".player--0");

const player1EL = document.querySelector(".player--1");

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

//btn

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score, currentScore, activePlayer, playing;

const initalization = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};
initalization();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

//rolling function

btnRoll.addEventListener("click", function () {
  if (playing) {
    //randon number
    console.log("click");
    const dice = Math.trunc(Math.random() * 6) + 1;
    //dice
    diceEL.classList.remove("hidden");
    diceEL.src = `./Images/dice-${dice}.png`;

    //conditon
    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0EL.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    console.log(score[activePlayer]);
    console.log("clicked me properly");

    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 10) {
      playing = false;
      diceEL.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", initalization);
