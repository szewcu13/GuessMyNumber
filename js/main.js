'use strict';



// document.querySelector('.guess').value = 20;


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess) {
        document.querySelector('.message').textContent = 'Podaj liczbę!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Dobrze!';
    } else if( guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Za dużo!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Przegrałeś!';
            document.querySelector('.score').textContent = 0;
        }
        
    } else if( guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'Za mało!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Przegrałeś!';
            document.querySelector('.score').textContent = 0;
        }
    }
})