
let playerScore = 0;
let computerScore = 0; 


function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    let rand = options[(Math.floor(Math.random() * options.length))];
    return rand;
}



         
function oneRound(computerSelection, playerSelection){
    computerSelection = computerPlay();
    playerSelection =  prompt("Enter rock, paper, or scissors");
    result = '';
  
   

    
        if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock'))
    {
       playerScore +=1;
        result = alert("You won this round becase " + playerSelection + " beats " + computerSelection + " your score is " + playerScore)
       
       

           
    }
    else if (
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper') ||
        (computerSelection == 'paper' && playerSelection == 'rock'))
        {
            computerScore+=1
            result = alert("You lost this round because " + computerSelection + " beats " + playerSelection + " the computer's score  " + computerScore + 
            " your score " + playerScore);
        
        }

   if(playerSelection === computerSelection){
            result =  alert("It is a tie because " + playerSelection + " is the same as " + computerSelection + "  your score is " + 
            playerScore );
             }

             if(computerScore == 5){
                result = console.log("Computer wins")
            }
        
        
            if(playerScore == 5){
                result =  console.log("Player wins");
             }
               
        if(computerScore == 5){
            result = alert("Computer wins")
        }
        
        
        if(playerScore == 5){
            result =  alert("Player wins");
         }
           
         return result;
        
        }
        
        function countingScore(){
            let scoreTrackUser = playerScore;
            let scoreTrackComputer = computerScore
        }
        
        
        function game(){
 
    for(let i = 0; i < 5; i++){
    oneRound();
    
            }

            
    if(playerScore > computerScore){
        alert("You won and your score " + playerScore  + " points" )
    }
    else if (computerScore > playerScore){
        alert("You lost and your score was " + playerScore + " points" )
    }

    else{
        alert("The game is a tie your score is " + playerScore + " and the computer's is " + computerScore)
}
 
    
    return result;


   
   
   // result = alert("You won this round because " + playerSelection + " beats " + computerSelection + " your score " + playerScore + 
    // "  computer's score " + computerScore);


    
    
    
    
    //return result;


}