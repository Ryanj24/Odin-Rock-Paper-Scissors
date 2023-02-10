// Need to change the points back to number as localstorage converts to string
const pointsToWin = parseInt(localStorage.getItem("points"));
const pointsNumber = document.querySelector("#points-total");

pointsNumber.textContent = pointsToWin;



let playerScore = document.querySelector("#player-score-value");
let computerScore = document.querySelector("#computer-score-value");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const roundWinner = document.querySelector("#round-winner-text");
let playerChoice = "";

const btns = document.querySelectorAll(".btn");

possibleChoices = ["rock", "paper", "scissors"];


let playerScoreCounter = 0;
let computerScoreCounter = 0;


btns.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.value;
        const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];

        const round = playRound(playerChoice, computerChoice);

        if (round === "player") {
            playerScoreCounter++;
            playerScore.textContent = playerScoreCounter;
            roundWinner.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else if (round === "computer") {
            computerScoreCounter++;
            computerScore.textContent = computerScoreCounter;
            roundWinner.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            roundWinner.textContent = `Tie! ${playerChoice} draws with ${computerChoice}`;
        }

        if (playerScoreCounter == pointsToWin || computerScoreCounter == pointsToWin) {
            /*const finalPlayerScore = playerScoreCounter;
            const finalComputerScore = computerScoreCounter;

            localStorage.setItem("player-Score", finalPlayerScore);
            localStorage.setItem("computer-Score", finalComputerScore);*/

            window.location.href = "endPage.html";
        }
    })
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
        winner = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        winner = "computer";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winner = "player";
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        winner = "tie";
    }

    // Return the round winner
    return winner;
}
