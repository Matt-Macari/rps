//add event listener to each button

const rockBtn = document.querySelector("#rockBtn");

const paperBtn = document.querySelector("#paperBtn");

const scissorBtn = document.querySelector("#scissorBtn");

const game_result = document.getElementById("game_result");

const match_results = document.getElementById("match_results");


rockBtn.addEventListener("click", () => {
    let playerSelection = "rock";
    match_results.textContent = playRound(playerSelection, getComputerChoice());
    compareScore();
});

paperBtn.addEventListener("click", () => {
    let playerSelection = "paper";
    match_results.textContent = playRound(playerSelection, getComputerChoice());
    compareScore();
});

scissorBtn.addEventListener("click", () => {
    let playerSelection = "scissors";
    match_results.textContent = playRound(playerSelection, getComputerChoice());
    compareScore();
});

//add a div for displaying result












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

function compareScore() {
    let scoreMessage;
    if (playerScore === 5) {
        scoreMessage = `Winner. You won ${playerScore} times and the computer won ${compScore} times.`;
        playerScore = 0;
        compScore = 0;
    } else if (compScore === 5) {
        scoreMessage = `Loser. You won ${playerScore} times and the computer won ${compScore} times.`;
        playerScore = 0;
        compScore = 0;
    }

    game_result.textContent = scoreMessage;
};






































//function playGame: expects nothing; and plays rockpaperscissors 5 times; 
//prompting the user for there input each round. 
/*
function playGame() {

    //let playerSelection = prompt("choose rock, paper, scissors").toLowerCase();
    //while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    // playerSelection = prompt('not valid choose again').toLowerCase();

    // console.log(playRound(playerSelection, getComputerChoice()));

    //}

    while (playerScore == 5 || compScore == 5) {
        if (playerScore > compScore) {
            let score = `Winner. you won ${playerScore} times and the computer won ${compScore} times`;

        }
        else if (playerScore < compScore) {
            let score = `Loser. you won ${playerScore} times and the computer won ${compScore} times`;

        }
        else {
            let score = `Tie. you won ${playerScore} times and the computer won ${compScore} times`;

        }
    };
}; */

//reference to game_result for overall score






