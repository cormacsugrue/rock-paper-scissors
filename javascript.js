let playerScore = 0;
let computerScore = 0; 
let currentRoundResult = null;

// Create function getComputerSelection 
function getComputerSelection(){
    let rand = Math.round(Math.random()*2);
    // console.log(rand);
    switch(rand) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
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
function playRound(event){
    
    const drawAlert = document.querySelector('#drawAlert');
    const winner = document.querySelector('#winner');

    // reset winner 
    winner.textContent = "";

    // set draw alert to empty string
    drawAlert.textContent = '';

    // Get player selection from the event element
    const playerSelection = event.target.id;
    let computerSelection = getComputerSelection();

    const result = document.querySelector('#result');


    if (playerSelection == computerSelection){
        // alert("Draw")
        drawAlert.textContent = `Draw! Both chose ${playerSelection} `
    } else if ( 
        (playerSelection == "rock" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        computerScore++;
        // console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        drawAlert.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        playerScore++;
        drawAlert.textContent = `You Win! ${playerSelection} beats ${computerSelection}`

    }

    
    result.children[0].lastChild.textContent = playerScore;
    result.children[1].lastChild.textContent = computerScore;
    

    // reset round an or game alerts

    // check for winner (first to 5)
    if (playerScore === 5 ) {
        winner.textContent = "Player Wins!"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        winner.textContent = "Computer Wins!"
        playerScore = 0;
        computerScore = 0;
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


const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);