'use strict';

const message = document.querySelector('.message');

const yourScore = document.querySelector('.score');

const number = document.querySelector('.number');

const guessInput = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guessInput.value);
    console.log(guess, typeof guess);
    
    if(!guess) {
        message.textContent = 'Podaj liczbę!';
    } else if (guess === secretNumber) {
        message.textContent = 'Dobrze!';
        number.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.width = '30rem'
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(guess !== secretNumber) {
        if(score > 1) {
            message.textContent = guess > secretNumber ? 'Za dużo!' : 'Za mało!';
            score--;
            yourScore.textContent = score;
        } else {
            message.textContent = 'Przegrałeś!';
            yourScore.textContent = 0;
        }

    } 
})


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Zacznij zgadywać!';
    yourScore.textContent = score;
    number.textContent = '?';
    guessInput.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})