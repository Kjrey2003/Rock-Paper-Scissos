function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let rand = options[(Math.floor(Math.random() * options.length))];
    return rand;
}

function select(){
    let playerSelection;
          playerSelection = console.log("Enter Rock, Paper, or scissors");
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
       result = console.log("You won this round because " + playerSelection + " beats " + computerSelection);
    }
    else if (computerScore+=1){
       computerScore+=1
        result = console.log("You lost this round because " + computerSelection + " beats " + playerSelection);
    }

    else if(playerScore == 5){
       result =  console.log("Player wins");
    }
    else if(computerScore == 5){
        result = console.log("Computer wins")
    }
     else if(playerScore === computerScore) {

        console.log("The game is a tie")

    }

     else if(playerSelection === computerSelection){
         console.log("It is a tie because " + playerSelection + " is the same as " + computerSelection)
    }


}

function fiveTime(){
    for(i=0; i <=6; i++){
        oneRound();
    }
}

