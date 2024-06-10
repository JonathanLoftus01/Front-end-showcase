let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');
const output = document.querySelector('.output');
function getComputerChoice() {
    let number = Math.random();
    if (number >= 0 && number <= 0.33) {
        return 'rock';
    } else if (number >= 0.34 && number <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    };
};


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        console.log('Draw!');
    } else if(humanChoice !== computerChoice) {
        console.log('computer choice: ' + computerChoice);
        console.log('your choice: ' + humanChoice);
        if (humanChoice === 'rock' && computerChoice === 'scissors'){
            humanScore++;
            console.log('you win, ' + humanChoice + ' beats ' + computerChoice);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++;
            console.log('you win, ' + humanChoice + ' beats ' + computerChoice);
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            humanScore++;
            console.log('you win, ' + humanChoice + ' beats ' + computerChoice);
        } else {
            computerScore++;
            console.log('you lose, ' + computerChoice + ' beats ' + humanChoice);
        }      
    }
    output.innerText = "computer choice: " + computerChoice + "\n" + ' Your score: ' + humanScore + "\n" + 'Computer score: ' + computerScore;

};

rockButton.addEventListener('click', () => {;
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});
