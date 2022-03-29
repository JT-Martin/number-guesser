let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 9);
  }

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}
  
function compareGuesses(humanGuess, computerGuess, targetNumber) {
    if (humanGuess >= 0 && humanGuess <= 9) {
        console.log('valid number');
        let humanOffset = getAbsoluteDistance(humanGuess, targetNumber);
        let computerOffset = getAbsoluteDistance(computerGuess, targetNumber);
        if (humanOffset < computerOffset) {return 'human';}
        else if (computerOffset < humanOffset) {return 'computer';}
        else if (humanOffset === computerOffset) {return 'human';}
        else {return alert('error');}
    } 
    else if (humanGuess > 9 || humanGuess < 0) {
        console.log('Invalid number');
        return 'invalid number';}
    else {return alert('error');}  
  }

function updateScore(winner) {
    if (winner === 'human') {humanScore++;}
    else if (winner === 'computer') {computerScore++;}
    else {return 'error';}
}

function advanceRound() {
    currentRoundNumber++;
}