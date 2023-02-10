// Need to change the points back to number as localstorage converts to string
const pointsToWin = parseInt(localStorage.getItem("points"));
const pointsNumber = document.querySelector("#points-total");

pointsNumber.textContent = pointsToWin;




let playerScore = document.querySelector("#player-score-value");
let computerScore = document.querySelector("#computer-score-value");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundWinner = document.querySelector("#round-winner-text");
let playerChoice = "";

possibleChoices = ["rock", "paper", "scissors"];


let playerScoreCounter = 0;
let computerScoreCounter = 0;

rock.addEventListener("click", () => {
    playerChoice = "rock";


})

paper.addEventListener("click", () => {
    playerChoice = "paper";
    
})

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    
})


// Play a single round of rock, paper, scissors passing both the user and computer choices 
// to the function
function playRound(playerChoice, computerChoice) {

    // Define variable to store round winner
    let winner = "";

    // All different possible outcomes from the round
    if (playerChoice === "rock" && computerChoice === "rock") {
        winner = "tie";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        winner = "computer";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        winner = "player";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        winner = "player";
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        winner = "tie";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        winner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        winner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        winner = "tie";
    }

    // Return the round winner
    return winner;
}



/*
const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    
    const WINNER = playRound(playerChoice, computerChoice);

    if (WINNER === "player") {
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
    } else if (WINNER === "computer") {
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
*/