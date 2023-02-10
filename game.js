// Need to change the points back to number as localstorage converts to string
const pointsToWin = parseInt(localStorage.getItem("points"));

// Select points to play to element from DOM
const pointsNumber = document.querySelector("#points-total");

// Add the points to play defined in the setup page to the game page
pointsNumber.textContent = pointsToWin;


// Define variables
let playerScore = document.querySelector("#player-score-value");
let computerScore = document.querySelector("#computer-score-value");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const roundWinner = document.querySelector("#round-winner-text");
let playerChoice = "";

const btns = document.querySelectorAll(".btn");

// Array of possible choices that computer can choose from 
possibleChoices = ["rock", "paper", "scissors"];

// Initialise the score counters
let playerScoreCounter = 0;
let computerScoreCounter = 0;

// Add event listeners for each button
btns.forEach((button) => {
    button.addEventListener("click", () => {

        // When a button is clicked, store its corresponding value in the playerChoice variable and get a choice from the computer
        playerChoice = button.value;
        const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];

        // Play a round of rock, paper, scissors with the round winner stored in the round variable
        const round = playRound(playerChoice, computerChoice);

        // Outcomes depending on who won the round
        if (round === "player") {
            // If player won then add 1 to their score and reflect their running score in the DOM
            playerScoreCounter++;
            playerScore.textContent = playerScoreCounter;

            // Text at the bottom of the screen to let the user know if they won, lost or tied that round
            roundWinner.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else if (round === "computer") {
            // If computer won then add 1 to the computer score and reflect its running score in the DOM
            computerScoreCounter++;
            computerScore.textContent = computerScoreCounter;
            roundWinner.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            roundWinner.textContent = `Tie! ${playerChoice} draws with ${computerChoice}`;
        }

        // Check to see if either the player or computer has reached the necessary points to win the game
        if (playerScoreCounter == pointsToWin || computerScoreCounter == pointsToWin) {
            // If one has reached the necessary points total then store the scores at that point
            const finalPlayerScore = playerScoreCounter;
            const finalComputerScore = computerScoreCounter;

            // Store the scores in the local browser memory to be retreived in the end page
            localStorage.setItem("final-user-score", finalPlayerScore);
            localStorage.setItem("final-comp-score", finalComputerScore);

            // Relocate the user to the end game page
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
