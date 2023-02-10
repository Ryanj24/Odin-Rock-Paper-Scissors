// Need to change the round back to number as localstorage converts to string
const roundsToPlay = parseInt(localStorage.getItem("rounds"));
//console.log(typeof(rounds));

let roundNumber = document.querySelector("#round-count");
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
    const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    //console.log(playerChoice);
    const WINNER = playRound(playerChoice, computerChoice);

    if (WINNER === "player") {
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
    } else if (WINNER === "computer") {
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
})

paper.addEventListener("click", () => {
    playerChoice = "paper";
    const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    //console.log(playerChoice);
    const WINNER = playRound(playerChoice, computerChoice);

    if (WINNER === "player") {
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
    } else if (WINNER === "computer") {
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
})

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];
    //console.log(playerChoice);
    const WINNER = playRound(playerChoice, computerChoice);

    if (WINNER === "player") {
        playerScoreCounter++;
        playerScore.textContent = playerScoreCounter;
    } else if (WINNER === "computer") {
        computerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
    }
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

function game() {
    // Possible choices for the user and computer to select from
    possibleChoices = ["rock", "paper", "scissors"];


    // Initialise variables to keep track of scores
    let playerScoreCounter = 0;
    let computerScoreCounter = 0;

    // Loop for specified number of rounds of rock, paper, scissors
    for (i = 0; i < roundsToPlay; i++) {
        // Player and Computer choices
        const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];

        // Simulate the round, storing the result in roundWinner variable
        const roundWinner = playRound(playerChoice, computerChoice);

        // Updating the scores depending on who won the round
        if (roundWinner === "player") {
            playerScoreCounter++;
            playerScore.textContent = playerScoreCounter;
            roundWinner.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
        } else if (roundWinner === "computer") {
            computerScoreCounter++;
            computerScore.textContent = computerScoreCounter;
            roundWinner.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
        } else {
            roundWinner.textContent = `Tie! ${playerChoice} draws with ${computerChoice}`;
        }
    }
}

game();*/