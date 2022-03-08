'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!! ';
    } else if (guess > secretNumber) {
        if (score > 1){
            score--;
            document.querySelector('.message').textContent = 'Too High!!';
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You lost the game!!";
            document.querySelector('.score') = 0;
        }
        
    } else if (guess < secretNumber) {
        if (score > 1){
            score--;
            document.querySelector('.message').textContent = 'Too Low!!';
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = "You lost the game!!";
            document.querySelector('.score') = 0;
        }
        
    }
});
