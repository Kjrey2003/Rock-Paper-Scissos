 function computerPlay() {
     let choices = ['rock', 'paper', 'scissors']
     return choices[Math.floor(Math.random() * choices.length)]



 }


function Rounds(userSelection, computerSelection) {
    computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;
    let result = '';
    let resultOfGame = '';

    userSelection = prompt('Enter rock, paper, or scissors');
    if (
        ((userSelection == 'rock' && computerSelection == 'scissors') ||
            (userSelection == 'paper' && computerSelection == 'rock') ||
            (userSelection == 'scissors' && computerSelection == 'paper'))
    ) {
        playerScore += 1;
        result = alert("You have won this Round");
    }
    if(playerScore == 5){
        alert("You win this game");
    }

    else if(
        (computerSelection == 'rock' && userSelection == 'scissors') ||
        (computerSelection == 'paper' && userSelection == 'rock') ||
        (computerSelection == 'scissors' && userSelection == 'paper'))
    {
           computerScore += 1;
           result = alert("The computer has won this round");
    }
    if(computerScore == 5){
        alert("You have lost this game")
    }


    else if(userSelection == computerSelection){
        result = alert("It's a tie bruv");
    }
}
Rounds();






