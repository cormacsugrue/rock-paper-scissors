

// Instantiate playerScore
// Instantiate computerScore

// instantiate currentRoundResult assign Null
let currentRoundScore = null;


// Instantiate and set computerSelection using function getComputerSelection 
// Instantiate STRINGG humanSelection 

// Create function getComputerSelection 
//     CREATE variable rand and assign random integer from 0 to 1
//     SWITCH(rand)
//         rand is 0 return string "Rock"
//         rand is 1 return string "Paper"
//         rand is 2 return string "Scissors"
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

// CREATE funtion getPlayerSelecton
//     prompt user "Play your hand:"

function getPlayerSelecton(){

    let playerSelection = prompt("Play your hand:");
    // Converts all user input to initial letter uppercase and rest of string lowercase
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLocaleLowerCase();

    // console.log(playerSelection);

    return playerSelection
}
console.log(getPlayerSelecton());
// Create function playRound which takes 2 arguments of type string "computer, player"
//     if player equals computer
//         return zero 
//     else if (
//         (player equals rock && computer equals paper) 
//         || (player equals paper && computer equals scissors)
//         || (player equals scissors && computer equals rock)
//         ){    
//             //computerScore++; 
//             return "Player wins"
//         }
//     else {
            
//             //return playerScore++;
//             return "computer wins"
//     }



// WHILE currentRoundScore equals "Draw" or currentRoundScore equals Null

//     ASSIGN currentRoundScore TO playRound(getComputerSelection(), getHumanSelection()) 

//     IF  currentRoundScore equals "Draw"
//         print to console "Draw"
//     Else IF currentRoundScore equals "Player Wins"
//         print to console Player "player wins"
//     Else 
//         print computer wins

//     END



 