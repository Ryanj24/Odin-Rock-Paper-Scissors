// Get the elements from the html document
const lowerRound = document.querySelector("#decrease");
const increaseRound = document.querySelector("#increase");
const roundNumber = document.querySelector("#rounds").textContent;
const submitBtn = document.querySelector("#btn");
const myForm = document.querySelector(".roundSelection");
let counter = 0;


// Event listeners to change the number displayed on screen

lowerRound.addEventListener("click", function(e) {
    e.preventDefault();

    if (counter > 0) {
        counter--;
    }
    
    console.log(counter);
})

increaseRound.addEventListener("click", function(e) {
    e.preventDefault();

    if (counter < 10) {
        counter++;
    }
    
    console.log(counter);
})