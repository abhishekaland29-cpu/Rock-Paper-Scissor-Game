
// Algoritm
// const choice = ["Rock", "Paper", "Scissors"];

// const randomIndex = Math.floor(Math.random() * choice.length);

// const computerChoice = choice[randomIndex];

// let userSelect = prompt("Select your choice (Rock, Paper, or Scissors)");

// const userChoice = userSelect;

// if (userChoice === computerChoice) {
//     console.log("Your choice was", userChoice);
//     console.log("Computer choice is", computerChoice);
//     console.log("Draw");

// } else if (
//     (userChoice === "Rock" && computerChoice === "Scissors") ||
//     (userChoice === "Scissors" && computerChoice === "Paper") ||
//     (userChoice === "Paper" && computerChoice === "Rock")
// ) {
//     console.log("Your choice was", userChoice);
//     console.log("Computer choice is", computerChoice);
//     console.log("Win");

// } else {
//     console.log("Your choice was", userChoice);
//     console.log("Computer choice is", computerChoice);
//     console.log("Lose");
// }

// 1. Initialize Scores
let wins = 0;
let losses = 0;
let draws = 0;

const choices = ["Rock", "Paper", "Scissors"];

// 2. Select HTML Elements
const winDisplay = document.getElementById("wins");
const lossDisplay = document.getElementById("losses");
const drawDisplay = document.getElementById("draws");
const msgDisplay = document.getElementById("main-message");
const resetBtn = document.getElementById("reset-btn");

// 3. Game Logic Function
function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
        draws++;
        drawDisplay.innerText = draws;
        msgDisplay.innerText = `It's a Draw! Both chose ${computerChoice}`;
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        wins++;
        winDisplay.innerText = wins;
        msgDisplay.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
        losses++;
        lossDisplay.innerText = losses;
        msgDisplay.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
    }
}

// 4. Reset Logic
resetBtn.addEventListener("click", () => {
    wins = 0;
    losses = 0;
    draws = 0;
    winDisplay.innerText = "0";
    lossDisplay.innerText = "0";
    drawDisplay.innerText = "0";
    msgDisplay.innerText = "Welcome to Rock Paper Scissors!";
});

// 5. Connect Buttons to Game
document.getElementById("Rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("Paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("Scissors").addEventListener("click", () => playGame("Scissors"));