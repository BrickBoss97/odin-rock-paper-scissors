const choices = ["rock", "paper", "scissors"]

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

}