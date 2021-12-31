'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Function for MESSAGE (""displayMessage"")
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Function for SCORE (""displayScore"")
const displayScore = function (number) {
  document.querySelector('.score').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no any guess
  if (!guess) {
    displayMessage('Please, choose a number!');
  } else if (score === 1) {
    //If the score is 0
    displayMessage('You lost the game!');
    displayScore(0);
    //If the score is greater than 0
  } else if (score > 0) {
    //When guess and secret number are equal
    if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct number!!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').setAttribute('disabled', 'true');
      ///////Setting the high score value
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      //When guess is too high
    } else if (guess > secretNumber) {
      displayMessage('Too high!!');
      score--;
      displayScore(score);

      //When guess is too low
    } else if (guess < secretNumber) {
      displayMessage('Too low!');
      score--;
      displayScore(score);
    }
  }
});

////////////////////////////////
//FUNCTIONALITY OF AGAIN BUTTON
const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').removeAttribute('disabled');
});
