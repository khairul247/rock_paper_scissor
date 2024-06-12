// this script assumes there are no spelling errors and they are case-insensitive

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
            computerScore++;
            return "You Lose!"
        }
        else {
            humanScore++;
            return "You Win!"
        }
    }
    else if (humanChoice === "paper"){
        if (compChoice === "scissors"){
            computerScore++;
            return "You Lose!"
        }
        else {
            humanScore++;
            return "You Win!"
        }
    }
    else 
        if (compChoice === "rock"){
            computerScore++;
            return "You Lose!"
        }
        else {
            humanScore++;
            return "You Win!"
        }
}

function playGame(){
    humanScore=0;
    computerScore=0;
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    console.log(humanSelection);
    console.log(computerSelection);
    playRound(humanSelection,computerSelection);
    alert("Human Score = " + humanScore +"|" + "Computer Score = " + computerScore) ;
    if (humanScore === computerScore){
        return "No Winner :("
    } else if (humanScore>computerScore){
        return "You are the Winner :)"
    } else
        return "Computer Beats Your Ass Big L!"

}

alert(playGame());





    

