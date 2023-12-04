let playerScore = 0;
let computerScore = 0; 
let currentRoundResult = null;

// Create function getComputerSelection 
function getComputerSelection(){
    let rand = Math.round(Math.random()*2);
    // console.log(rand);
    switch(rand) {
        case 0:
            return "Rock";
        case 1: 
            return "Paper";
        case 2:
            return "Scissors";
    }
}

// CREATE function getPlayerSelecton
function getPlayerSelection(){
    let playerSelection = prompt("Play your hand:");
    // Converts all user input to initial letter uppercase and rest of string lowercase
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLocaleLowerCase();
    // console.log(playerSelection);
    if((playerSelection != "Rock") && (playerSelection != "Paper") && (playerSelection != "Scissors")){
        alert("invalid input! Please try again.");
        getPlayerSelection();
    }
    else return playerSelection;
}

// Create function playRound which takes 2 arguments of type string "computer, player"
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        alert("Draw, play again!")
        return "Draw";
    } else if ( 
        (playerSelection == "Rock" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Scissors")
        || (playerSelection == "Scissor" && computerSelection == "Rock")
    ) {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    } else {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    
}
// Create a function that loops through 5 rounds of the game
function game(){

    for(let i = 0; i < 5; i++){
        while(currentRoundResult == "Draw" || currentRoundResult == null){
            currentRoundResult = playRound(getPlayerSelection(), getComputerSelection());
            // console.log("here");
             console.log(currentRoundResult);
        }
        currentRoundResult = null;

    }

    if(playerScore > computerScore){
        console.log("Player wins the game " + playerScore + " - " + computerScore);
    } else {
        console.log("Computer wins the game " + computerScore + " - " + playerScore);
    }
}

game();
