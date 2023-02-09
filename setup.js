// Get the elements from the html document
const lowerRound = document.querySelector("#decrease");
const increaseRound = document.querySelector("#increase");
const submitBtn = document.querySelector("#btn");
const myForm = document.querySelector(".roundSelection");
let counter = 1;


// Event listeners to change the number displayed on screen

lowerRound.addEventListener("click", function(e) {
    // Given the icons are within a form, we need to prevent the form
    // being submitted so we can take the value and display it
    e.preventDefault();

    // Ensure the counter cannot go below 1, ie. we can't play
    // 0 rounds
    if (counter > 1) {
        counter--;
    }
    
    // Take the value and display it on the DOM
    document.querySelector("#rounds").textContent = counter; 
    
})

increaseRound.addEventListener("click", function(e) {
    e.preventDefault();

    // Make the maximum number of rounds 10
    if (counter < 10) {
        counter++;
    }
    
    // Take the value and display it on the DOM
    document.querySelector("#rounds").textContent = counter;
    
})

myForm.addEventListener("submit", function(e) {
    e.preventDefault();


    const roundNumber = counter;
    //console.log(typeof(roundNumber));

    localStorage.setItem("rounds", roundNumber);

    window.location.href = "gamePage.html";
})