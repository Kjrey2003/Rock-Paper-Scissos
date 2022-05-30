function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let rand = options[(Math.floor(Math.random() * options.length))];
    return rand;
}

function oneRound(computerSelection, playerSelection){
    computerSelection = computerPlay();
  let   result = ''
    let playerScore = 0;
    let computerScore = 0;

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
    {
        playerScore +=1;
    }
    if(playerScore == 5){
        alert("Player wins");
    }
    else if(computerScore == 5){
        alert("Computer wins")
    }
    else if(playerScore == computerScore){
        alert("It is a tie")
    }

}


