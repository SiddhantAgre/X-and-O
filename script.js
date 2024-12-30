buttons = document.querySelectorAll("button:not(.reset)");
reset = document.querySelector(".reset");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

nextChance = "X";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.innerText = nextChance;
    nextChance = nextChance === "X" ? "O" : "X";
    checkWinner();
  });
});

function checkWinner() {
  for (pattern of winPatterns) {
    val1 = buttons[pattern[0]].innerText;
    val2 = buttons[pattern[1]].innerText;
    val3 = buttons[pattern[2]].innerText;

    if ((val1 != "", val2 != "", val3 != "")) {
      if (val1 === val2 && val2 === val3) {
        document.querySelector("body").innerHTML = "";
        const winnerDiv = document.createElement("div");
        winnerDiv.classList.add("winner");
        winnerDiv.innerText = `🎉 ${val1} is the Winner! 🎉`;
        document.querySelector("body").append(winnerDiv);
        const resetButton = document.createElement("button");
        resetButton.classList.add("reset")
        resetButton.innerText = "Play Again!";
        resetButton.addEventListener('click', () => {
          location.reload();
        })
        document.body.append(resetButton)
      }
    }
  }
}

reset.addEventListener("click", () => {
  buttons.forEach(button => {
    button.innerText = "";
    nextChance = "X";
  })
});
