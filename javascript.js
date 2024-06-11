// this script assumes there are no spelling errors and they are case-insensitive

humanScore=0;
computerScore=0;

function getComputerChoice(){
    compChoice=Math.round(Math.random()*2);

    if (compChoice === 0){
        compChoice = "rock";
    } else if (compChoice === 1){
        compChoice = "paper";
    } else
        compChoice = "scissors"
    
    return compChoice;
}

function getHumanChoice (){
    let humanChoice = prompt("Choose one. Rock? Paper? Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound (humanChoice,compChoice){
    if (humanChoice === compChoice){
        return "Tie"
    }  
    else if (humanChoice === "rock"){
        if (compChoice === "paper"){
            computerScore = computerScore + 1;
            return "You Lose!"
        }
        else {
            humanScore = humanScore + 1;
            return "You Win!"
        }
    }
    else if (humanChoice === "paper"){
        if (compChoice === "scissors"){
            computerScore = computerScore + 1;
            return "You Lose!"
        }
        else {
            humanScore = humanScore + 1;
            return "You Win!"
        }
    }
    else 
        if (compChoice === "rock"){
            computerScore = computerScore + 1;
            return "You Lose!"
        }
        else {
            humanScore = humanScore + 1;
            return "You Win!"
        }
}

const humanSelection = getHumanChoice();
const compSelection = getComputerChoice();
playRound(humanSelection,compSelection);


    

