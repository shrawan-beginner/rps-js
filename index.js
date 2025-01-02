
/*
    1. Planning Phase:
    Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
    >>>No, for now only played in console.

    What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    >>>The user will provide an input which is between rock, paper, or scissors.
    And the computer will also select one of them in random

    What’s the desired output?
    >>>Depending on the selected options, and match results, either the user will win or computer will win.

    Given your inputs, what are the steps necessary to return the desired output?
    >>>The steps needed to achieve this game is listed in the pseudocode below:


    2. Pseudocode Writing:

    a. Create a variable to ask the user to enter the option for rock, paper, or scissors and store it.
    b. Create a function to randomly generate any one of the option which will be choice for the computer.
    c. Create some variables to show players scores: humanScore and computerScore.
    d. If computer has rock and player has paper, then player wins, else if computer has rock and player also has rock, then its a draw. Else if computer has rock and player has scissors, then computer wins.
    e. Increment the score for humanScores and computerScores depeding on the condition from step d.
    e. Repeat step d and e for 5 more times to track the scores.
    f. Compare the score and declare a winner.
*/

let humanScore = 0;
let computerScore = 0;

let getHumanChoice = prompt('Enter a choice between: Rock, Paper, and Scissors: ');

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors'];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}
