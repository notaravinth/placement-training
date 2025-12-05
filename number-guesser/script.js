let randomNumber = Math.floor(Math.random() * 10) + 1;

const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("resetGame");

submitBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (userGuess === randomNumber) {
        alert("You guessed the number.");
    }
    else if (userGuess < randomNumber) {
        alert("Too low!");
    }
    else if (userGuess > randomNumber) {
        alert("Too high!");
    }
}

function resetGame(){
    randomNumber = Math.floor(Math.random() * 10) + 1;
    guessInput.value = '';
    alert("game has been reset")
}