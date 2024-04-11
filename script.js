const choices = ["rock", "paper", "scissors"]
let winners = [];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#resetBtn");
const roundMessage = document.querySelector("#round");
const gameMessage = document.querySelector("#game");
const resetMessage = document.querySelector("#reset");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");


rockBtn.addEventListener("click", clickListener);
paperBtn.addEventListener("click", clickListener);
scissorsBtn.addEventListener("click", clickListener);
resetBtn.addEventListener("click", reset);

function clickListener(event) {
    let input = event.target.id;
    if (checkScores() === true) {
        resetMessage.style.display = "flex";
        return
    }
    playRound(input);
    checkScores();
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(input) {
    const playerSelection = input
    const computerSelection = getComputerChoice()
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
    roundMessage.textContent = winner
    roundMessage.style.display = "flex";
    return winner
}   

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return `Tie, ${choiceP} equals ${choiceC}.`
    }
    else if ((choiceP === "rock" && choiceC === "scissors") || (choiceP === "scissors" && choiceC === "paper") || (choiceP === "paper" && choiceC === "rock")) {
        return `You Win, ${choiceP} beats ${choiceC}.`
    }
    return `You Lose, ${choiceP} loses to ${choiceC}.`
}

function checkScores() {
    let playerWins = winners.filter((item) => item.includes("Win") == true).length;
    let computerWins = winners.filter((item) => item.includes("Lose") == true).length;
    playerScore.textContent = `Player Score: ${playerWins}`;
    computerScore.textContent = `Computer Score: ${computerWins}`;
    if (playerWins >= 5) {
        gameMessage.textContent = "You Win! You reached 5 points!"
        gameMessage.style.backgroundColor = "rgb(99, 251, 97)";
        gameMessage.style.display = "flex";
        return true
    }
    else if (computerWins >= 5) {
        gameMessage.textContent = "You Lose. The computer reached 5 points."
        gameMessage.style.backgroundColor = "rgb(248, 97, 97)";
        gameMessage.style.display = "flex";
        return true
    }
    return false
}

function reset() {
    playerScore.textContent = `Player Score: 0`;
    computerScore.textContent = `Computer Score: 0`;
    roundMessage.style.display= "none";
    roundMessage.textContent = "";
    gameMessage.style.display= "none";
    gameMessage.textContent = "";
    resetMessage.style.display= "none";
    winners = []
}