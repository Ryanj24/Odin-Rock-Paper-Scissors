// Declare variables
const possible_choices = ["rock", "paper", "scissors"];
const player_choice = prompt("Rock, paper or scissors: ").toLowerCase();
const computer_choice = possible_choices[Math.floor(Math.random() * 3)];
let player_score, computer_score = 0;

