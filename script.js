// Declare variables
const possible_choices = ["rock", "paper", "scissors"];
const player_choice = prompt("Rock, paper or scissors: ").toLowerCase();
const computer_choice = possible_choices[Math.floor(Math.random() * 3)];
let player_score = 0, computer_score = 0;

// playRound function
function playRound(player_choice, computer_choice) {
    if (player_choice === "rock" && computer_choice === "rock") {
        return "Draw, no one gets a point";
    } else if (player_choice === "rock" && computer_choice === "paper") {
        computer_score++;
        return "You lose! computer gets a point";
    } else if (player_choice === "rock" && computer_choice === "scissors") {
        player_score++;
        return "You win! you get a point";
    } else if (player_choice === "paper" && computer_choice === "rock") {
        player_score++;
        return "You win! you get a point";
    } else if (player_choice === "paper" && computer_choice === "paper") {
        return "Draw, no one gets a point";
    } else if (player_choice === "paper" && computer_choice === "scissors") {
        computer_score++;
        return "You lose! computer gets a point";
    } else if (player_choice === "scissors" && computer_choice === "rock") {
        computer_score++;
        return "You lose! computer gets a point";
    } else if (player_choice === "scissors" && computer_choice === "paper") {
        player_score++;
        return "You win! you get a point";
    } else if (player_choice === "scissors" && computer_choice === "scissors") {
        return "Draw, no one gets a point";
    }

}
