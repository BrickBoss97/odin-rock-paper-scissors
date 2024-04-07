const choices = ["rock", "paper", "scissors"]
const winners = [];

function getPlayerSelection() {
    let input = prompt ("Choose 'Rock', 'Paper', or 'Scissors'.")
    while (input == null) {
        input = prompt ("Choose 'Rock', 'Paper', or 'Scissors'.")
    }
    input = input.toLowerCase()
    let check = validateInput(input);
    while (check == false) {
        input = prompt ("Choose 'Rock', 'Paper', or 'Scissors'. Spelling needs to be exact, but caplitalization doesn't matter.");
        while (input == null) {
            input = prompt ("Choose 'Rock', 'Paper', or 'Scissors'.")
        }
        input = input.toLowerCase()
        check = validateInput(input);
    }
    return input
}

function validateInput(choice) {
    return choices.includes(choice)
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {
    const playerSelection = getPlayerSelection()
    const computerSelection = getComputerChoice()
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner);
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

function playGame() {
    for (let round = 1; round <= 5; round++) {
        playRound()
    }
    logWins()
}

function logWins() {
    let playerWins = winners.filter((item) => item.includes("Win") == true).length;
    let computerWins = winners.filter((item) => item.includes("Lose") == true).length;
    let ties = winners.filter((item) => item.includes("Tie") == true).length;
    console.group("Results:")
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}