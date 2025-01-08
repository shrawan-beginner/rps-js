
/*
    1. Planning Phase:
    Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
    >>>Yes, the user will click on buttons to choose their options for rock, paper, or scissors.

    What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    >>>The user will provide an input through button between rock, paper, or scissors.
    And the computer will also select one of them in random

    What’s the desired output?
    >>>Depending on the selected options, player and computer will play some rounds and if one of them reach 5 points, they they will win.

    Given your inputs, what are the steps necessary to return the desired output?
    >>>The steps needed to achieve this game is listed in the pseudocode below:


    2. Pseudocode Writing:

    a. Create three buttons for Rock, Paper, or scissors and reference them to variables.
    b. Create a function to randomly generate any one of the option which will be choice for the computer.
    c. Create some variables to show players scores: humanScore and computerScore.
    d. If computer has rock and player has paper, then player wins, else if computer has rock and player also has rock, then its a draw. Else if computer has rock and player has scissors, then computer wins.
    e. Increment the score for humanScores and computerScores depeding on the condition from step d.
    e. Repeat(Loop through)) step d and e for until one of them reaches 5 points.
    f. If one reaches 5 points, declare the winner.
*/

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector('#container');
const rock = document.querySelector('#rock');
let results = document.querySelector('#results')
let humanOption = document.createElement('p');
let computerOption = document.createElement('p')
let humanChoice = ''
container.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    switch (target.id) {
        case 'rock':
            humanOption.textContent = 'You Selected Rock.'
            humanChoice = 'rock';
            break;
        case 'paper':
            humanOption.textContent = "You Selected Paper."
            humanChoice = 'paper';
            break;
        case 'scissors':
            humanOption.textContent = "You Selected Scissors."
            humanChoice = 'scissors'
            break;
    }
    computerOption.textContent = `Computer Selected ${computerChoice}`
    results.append(humanOption, computerOption);
    playRound(humanChoice, computerChoice);

})



function getHumanChoice(choose) {
    let humanChoice = choose;
    // return humanChose.toLowerCase();
    console.log(humanChoice);
}

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}

function humanChooseRock(compareWithRock) {
    if (compareWithRock === "paper") {
        return 'You Lose!!! Paper beats Rock.';
        computerScore++;
    } else if (compareWithRock === "scissors") {
        return 'You Win!!! Rock beats Scissors.';
        humanScore++;
    } else {
        return 'Both selected Rock. Its a tie';
        humanScore++, computerScore++;
    }
}

function humanChoosePaper(compareWithPaper) {
    if (compareWithPaper === "scissors") {
        return 'You Lose!!! Scissors beats Paper.';
        computerScore++;
    } else if (compareWithPaper === "rock") {
        return 'You Win!!! Paper beats Rock.';
        humanScore++;
    } else {
        return 'Both selected Paper. Its a tie';
        humanScore++, computerScore++;
    }
}

function humanChooseScissors(compareWithScissors) {
    if (compareWithScissors === "rock") {
        return 'You Lose!!! Rock beats Scissors.';
        computerScore++;
    } else if (compareWithScissors === "paper") {
        return 'You Win!!! Scissors beats Paper.';
        humanScore++;
    } else {
        return 'Both selected Scissors. Its a tie';
        humanScore++, computerScore++;
    }
}

function playRound(humanChoice, computerChoice) {
    let winner = document.createElement('p');
    // let win = ''
    // console.log("Your Choice: " + humanChoice);
    // console.log("Computer's Choice: " + computerChoice);
    switch (humanChoice) {
        case "rock":
            winner.textContent = `${humanChooseRock(computerChoice)}`;
            break;
        case "paper":
            win = humanChoosePaper(computerChoice);
            break;
        case "scissors":
            win = humanChooseScissors(computerChoice);
            break;

    }
    // winner.textContent = `${win}`;
    results.appendChild(winner);
}

function playGame() {
    let roundPlayed = 1;
    while (roundPlayed < 6) {
        console.log('Round: ' + roundPlayed);
        playRound(getHumanChoice(), getComputerChoice());
        console.log('');
        console.log("Human's Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
        console.log('')
        roundPlayed++;
    }
    if (humanScore > computerScore) {
        console.log('Congratulations!!!You scored higher than computer.')
    } else if (humanScore < computerScore) {
        console.log('Too bad!!! You scored lower than the computer.')
    } else {
        console.log('Its a tie. You both have same score.')
    }
}

// playGame();
// playRound(getHumanChoice(), getComputerChoice());