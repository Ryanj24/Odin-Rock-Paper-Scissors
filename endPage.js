const userScore = parseInt(localStorage.getItem("final-user-score"));
const computerScore = parseInt(localStorage.getItem("final-comp-score"));

const finalPlayerScore = document.querySelector("#finalPlayerValue");
const finalComputerScore = document.querySelector("#finalComputerValue");

const winLoseText = document.querySelector("#win-lose");

if (userScore > computerScore) {
    winLoseText.textContent = "You Win!";
} else {
    winLoseText.textContent = "You Lose!"
}

finalPlayerScore.textContent = userScore;
finalComputerScore.textContent = computerScore;