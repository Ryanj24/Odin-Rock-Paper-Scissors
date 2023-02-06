function game() {

    // Initialise possible choices variable for computer to choose from and initialise the player and computer scores to 0
    const possible_choices = ["rock", "paper", "scissors"];
    let player_score = 0, computer_score = 0;


    // Create loop of 5 rounds
    for (i = 0; i < 5; i++) {
        // Get the player choice for the round via input and computer choice via Math.random() applied to the possible choices list
        const player_choice = prompt("Rock, paper or scissors: ").toLowerCase();
        const computer_choice = possible_choices[Math.floor(Math.random() * 3)];

        //console.log(playRound(player_choice, computer_choice));

        if (player_choice === "rock" && computer_choice === "rock") {
            console.log("Draw, no one gets a point");
        } else if (player_choice === "rock" && computer_choice === "paper") {
            computer_score++;
            console.log("You lose! computer gets a point");
        } else if (player_choice === "rock" && computer_choice === "scissors") {
            player_score++;
            console.log("You win! you get a point");
        } else if (player_choice === "paper" && computer_choice === "rock") {
            player_score++;
            console.log("You win! you get a point");
        } else if (player_choice === "paper" && computer_choice === "paper") {
            console.log("Draw, no one gets a point");
        } else if (player_choice === "paper" && computer_choice === "scissors") {
            computer_score++;
            console.log("You lose! computer gets a point");
        } else if (player_choice === "scissors" && computer_choice === "rock") {
            computer_score++;
            console.log("You lose! computer gets a point");
        } else if (player_choice === "scissors" && computer_choice === "paper") {
            player_score++;
            console.log("You win! you get a point");
        } else if (player_choice === "scissors" && computer_choice === "scissors") {
            console.log("Draw, no one gets a point");
        }
        console.log(`Current Scores:
        Player Score: ${player_score}
        Computer Score: ${computer_score}`);
    }

    console.log(`Final Scores:
    Player Score: ${player_score}
    Computer Score: ${computer_score}`)


}

game();



