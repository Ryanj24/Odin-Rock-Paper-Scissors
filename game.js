// Play a single round of rock, paper, scissors passing both the user and computer choices 
// to the function
function playRound(playerChoice, computerChoice) {

    // Define variable to store round winner
    let winner = "";

    // All different possible outcomes from the round
    if (playerChoice === "rock" && computerChoice === "rock") {
        winner = `Tie! ${playerChoice} doesn't beat ${computerChoice}`;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        winner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        winner = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        winner = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        winner = `Tie! ${playerChoice} doesn't beat ${computerChoice}`;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        winner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        winner = `You Lose! ${computerChoice} beats ${playerChoice}`;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        winner = `You Win! ${playerChoice} beats ${computerChoice}`;
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        winner = `Tie! ${playerChoice} doesn't beat ${computerChoice}`;
    }

    // Return the round winner
    return winner;
}

function game() {
    // Possible choices for the user and computer to select from
    possibleChoices = ["rock", "paper", "scissors"];

    // Initialise variables to keep track of scores
    let playerScore = 0, computerScore = 0;
    let overallWinner = "";

    // Loop for 5 rounds of rock, paper, scissors
    for (i = 0; i < 5; i++) {
        // Player and Computer choices
        let playerChoice = prompt("Rock, paper or sicssors?").toLowerCase();
        const computerChoice = possibleChoices[Math.floor(Math.random() * 3)];

        // Check to ensure user inputs a valid choice
        while (!possibleChoices.includes(playerChoice)) {
            playerChoice = prompt("Rock, paper or sicssors?").toLowerCase();
        }

        // Simulate the round, storing the result in roundWinner variable
        const roundWinner = playRound(playerChoice, computerChoice);

        // Updating the scores depending on who won the round
        if (roundWinner === `You Win! ${playerChoice} beats ${computerChoice}`) {
            playerScore++;
        } else if (roundWinner === `You Lose! ${computerChoice} beats ${playerChoice}`) {
            computerScore++;
        }
    }

    // Checks for the final scores to determine the overall winner
    if (playerScore === computerScore) {
        overallWinner = `Tie! \n Player Score: ${playerScore} \n Computer Score: ${computerScore}`;
    } else if (playerScore > computerScore) {
        overallWinner = `You Win! \n Player Score: ${playerScore} \n Computer Score: ${computerScore}`;
    } else {
        overallWinner = `You Lose! \n Player Score: ${playerScore} \n Computer Score: ${computerScore}`;
    }

    // Return the overall winner of the game
    return overallWinner;
}

console.log(game());