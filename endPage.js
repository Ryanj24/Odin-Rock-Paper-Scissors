// Get the user and computer scores from browser storage
const userScore = parseInt(localStorage.getItem("final-user-score"));
const computerScore = parseInt(localStorage.getItem("final-comp-score"));

// Select elements from DOM that we'll display final scores through
const finalPlayerScore = document.querySelector("#finalPlayerValue");
const finalComputerScore = document.querySelector("#finalComputerValue");

// Select element that will display if the player won or lost
const winLoseText = document.querySelector("#win-lose");

// Check to see who won the game of rock, paper, scissors
if (userScore > computerScore) {
    // If player won, display "You Win!" on the DOM
    winLoseText.textContent = "You Win!";
} else {
    // If computer won, display "You Lose!" to the player on the DOM
    winLoseText.textContent = "You Lose!"
}

// Display the final results
finalPlayerScore.textContent = userScore;
finalComputerScore.textContent = computerScore;