'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setDisplayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    if (!guess) {
        setDisplayMessage('No Number');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        setDisplayMessage('Correct Number!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== secretNumber){
        setDisplayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
        if (score > 1){
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            setDisplayMessage("You lost the game!!");
            document.querySelector('.score') = 0;
        }

    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    setDisplayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    //document.querySelector('.guess').placeHolder = '';
});
