//add event listener to each button

const rockBtn = document.querySelector("#rockBtn");

const paperBtn = document.querySelector("#paperBtn");

const scissorBtn = document.querySelector("#scissorBtn");

rockBtn.addEventListener("click", () => {
    let playerSelection = "rock";
    console.log(playRound(playerSelection, getComputerChoice()));
});

paperBtn.addEventListener("click", () => {
    let playerSelection = "paper";
    console.log(playRound(playerSelection, getComputerChoice()));
});

scissorBtn.addEventListener("click", () => {
    let playerSelection = "scissors";
    console.log(playRound(playerSelection, getComputerChoice()));
});







//function getComputerChoice: randomly return either rock, paper, or scissor
// used to make the computers choice. 
//0=rock; 1=paper; 2=scissors

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        return "rock";
    }
    else if (compChoice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//function playRound: expects two parameters; the playerSelection and the
// computer selection and returns a string that declares the outcome. 
let playerScore = 0;
let compScore = 0;
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return `you chose ${playerSelection} and the computer chose ${computerSelection} its a tie.`;
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return `you chose ${playerSelection} and the computer chose ${computerSelection} you win.`;

    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return `you chose ${playerSelection} and the computer chose ${computerSelection} you win.`;

    }

    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return `you chose ${playerSelection} and the computer chose ${computerSelection} you win.`;

    }

    else {
        compScore++;
        return `you chose ${playerSelection} and the computer chose ${computerSelection} you lose.`;

    }
}

//function playGame: expects nothing; and plays rockpaperscissors 5 times; 
//prompting the user for there input each round. 
function playGame() {

    let playerSelection = prompt("choose rock, paper, scissors").toLowerCase();
    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        playerSelection = prompt('not valid choose again').toLowerCase();

        console.log(playRound(playerSelection, getComputerChoice()));

    }
    if (playerScore > compScore) {
        console.log(`Winner. you won ${playerScore} times and the computer won ${compScore} times`);
    }
    else if (playerScore < compScore) {
        console.log(`Loser. you won ${playerScore} times and the computer won ${compScore} times`);
    }
    else {
        console.log(`Tie. you won ${playerScore} times and the computer won ${compScore} times`);
    }

}

//console.log(playGame());