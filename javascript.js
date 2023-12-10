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
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    // Check if player input is correct;
    if((playerSelection != "Rock") && (playerSelection != "Paper") && (playerSelection != "Scissors")){
        alert("invalid input! Please try again.");
        playerSelection = getPlayerSelection();
    }
    return playerSelection;
}

// Takes 2 arguments of type string "computer, player" , in the case of a draw the game will be replayed until there is a winner. Returns result string
function playRound(playerSelection, computerSelection){
    
    while(currentRoundResult == "Draw" || currentRoundResult == null){
        if (playerSelection == computerSelection){
            alert("Draw, play again!")
            //player must select again
            playerSelection = getPlayerSelection();
            computerSelection = getComputerSelection();
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
        
    
}
// Loops through 5 rounds of the game and displays results for each round and final winner
function game(){

    for(let i = 0; i < 5; i++){
        currentRoundResult = playRound(getPlayerSelection(), getComputerSelection());
        console.log(currentRoundResult);
        currentRoundResult = null;
    }

    if(playerScore > computerScore){
        console.log("Player wins the game " + playerScore + " - " + computerScore);
    } else {
        console.log("Computer wins the game " + computerScore + " - " + playerScore);
    }
}

// game();
