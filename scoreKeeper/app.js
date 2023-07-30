var player1 = document.querySelector('#p1Button');
var scorePl1 = document.querySelector('#p1Display');
var player2 = document.querySelector('#p2Button');
var scorePl2 = document.querySelector('#p2Display');
var reset = document.querySelector('#reset');
var winningScore = document.querySelector('#playto');

var sum1 = 0;
var sum2 = 0;

let Winscore = 5;


let isGameover = false;
player2.addEventListener('click', () => {
    if (!isGameover) {
        sum2 += 1;
        scorePl2.textContent = sum2;
        if (sum2 === Winscore) {
            isGameover = true;
            scorePl2.classList.add('Winner');
            scorePl1.classList.add('Loser');
        }
    }
})

player1.addEventListener('click', () => {
    if (!isGameover) {
        sum1 += 1;
        scorePl1.textContent = sum1;
        if (sum1 === Winscore) {
            isGameover = true;
            scorePl1.classList.add('Winner');
            scorePl2.classList.add('Loser');
        }
    }
})

function Reset() {
    isGameover = false;
    sum1 = 0;
    sum2 = 0;
    scorePl1.textContent = sum1;
    scorePl2.textContent = sum2;
    scorePl1.classList.remove('Winner');
    scorePl2.classList.remove('Loser');
    scorePl2.classList.remove('Winner');
    scorePl1.classList.remove('Loser');
}
reset.addEventListener('click', Reset);
winningScore.addEventListener('change', () => {
    Winscore = parseInt(winningScore.value);
    Reset();
})