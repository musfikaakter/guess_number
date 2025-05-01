const submitBtn = document.querySelector(".btn");
const userInput = document.querySelector("#input");
const showChance = document.querySelector("#chance");
const winnerMsg = document.querySelector("#winner_msg");
const showScore = document.querySelector("#score");
let score = 0;
let chance = 10;
let userInputs = [];
let comInput;

/// play game
submitBtn.addEventListener("click", () => {
  comInput = Math.floor(Math.random() * 10 + 1);
  const userVal = parseInt(userInput.value.trim());

  // check if the input is empty
  if (isNaN(userVal)) {
      winnerMsg.textContent = "Enter a number";
      return;
    }

  // userInputs.push(userVal);
  userInputs.push(userVal);
  chance--;
  showChance.textContent = chance;

  // compare user and comp
  if (comInput === userVal) {
      winnerMsg.textContent = "You win";
      score++;
      showScore.textContent = score;
  }
  else {
      winnerMsg.textContent = "";
  }

  // check user chance
  if (userInputs.length === 10) {
      modal.classList.add("show");
      console.log("no more chance");
  }

});

/// reset game
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
  userInput.value = "";
});

/// play again
const modal = document.querySelector(".modal_box");

document.querySelector(".play_again").addEventListener("click", () => {
  modal.classList.remove("show");
  location.reload();
  userInput.value = "";
});

/// see previous guesses
const previousGuess = document.querySelector("#previous_guess");
previousGuess.addEventListener("click", () => {
  console.log(userInputs);
  previousGuess.textContent = userInputs.join(", ");
});

/// show range
const showRange = document.querySelector(".game_range-box");

window.addEventListener("load", () => {
    showRange.classList.add("show");
    userInput.value = "";
});

document.querySelector(".choose_range").addEventListener("click", () => {
    showRange.classList.add("show");
});

/// choose range
const rangeBtn = document.querySelectorAll(".range");
const topMsg = document.querySelector("#range_show");

rangeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
    showRange.classList.remove("show");
        let range = parseInt(btn.textContent);
        comInput = Math.floor(Math.random() * range + 1);
        topMsg.textContent = `1 to ${range}`;
    })
});