// Get the elements from the html document
const lowerScore = document.querySelector("#decrease");
const increaseScore = document.querySelector("#increase");
const submitBtn = document.querySelector("#btn");
const myForm = document.querySelector(".pointSelection");
let counter = 1;


// Event listeners to change the number displayed on screen

lowerScore.addEventListener("click", function(e) {
    // Given the icons are within a form, we need to prevent the form
    // being submitted so we can take the value and display it
    e.preventDefault();

    // Ensure the counter cannot go below 1, ie. we can't play
    // 0 rounds
    if (counter > 1) {
        counter--;
    }
    
    // Take the value and display it on the DOM
    document.querySelector("#points").textContent = counter; 
    
})

increaseScore.addEventListener("click", function(e) {
    e.preventDefault();

    // Make the maximum number of rounds 10
    if (counter < 10) {
        counter++;
    }
    
    // Take the value and display it on the DOM
    document.querySelector("#points").textContent = counter;
    
})

myForm.addEventListener("submit", function(e) {
    e.preventDefault();


    const scoreNumber = counter;
    //console.log(scoreNumber)
    //console.log(typeof(roundNumber));

    localStorage.setItem("points", scoreNumber);

    window.location.href = "gamePage.html";
})