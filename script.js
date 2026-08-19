function getComputerChoice() {
    let choice;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "scissors";
    } else {
        choice = "paper";
    }
    return choice;
    }

function getHumanChoice() {
    let playerInput = prompt("Choose one from 'rock', 'scissors','paper'");
    return playerInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        return "tie";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
     (humanChoice === "scissors" && computerChoice === "paper") ||
     (humanChoice === "paper" && computerChoice === "rock")
    ) {
        return "human";
    } else {
        return "computer";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        let choiceOfHuman = getHumanChoice();
        let choiceOfComputer = getComputerChoice();
        let winner = playRound(choiceOfHuman, choiceOfComputer);

        if (winner === "tie") {
        console.log(`You chose ${choiceOfHuman} and Computer chose ${choiceOfComputer}, It's a Tie!`);
    } else if (winner === "human" ) {
        humanScore++;
        console.log(`Round ${i}: Congratulations! You win  ${choiceOfHuman} beats ${choiceOfComputer}`);
    } else {
        computerScore++;
        console.log(`Round ${i} Computer wins! ${choiceOfComputer} beats ${choiceOfHuman}`);
    }

    }

    if (humanScore === computerScore) {
        console.log("It's a Tie!");
    } else if (humanScore > computerScore) {
        console.log("Congratulations! You win over computer");
    } else {
        console.log("Computer wins!");
    }
}