console.log("Hello World");

function getComputerChoice(){
    compChoice=Math.round(Math.random()*2)

    console.log(compChoice)

    if (compChoice === 0){
        compChoice = "rock";
    } else if (compChoice === 1){
        compChoice = "paper";
    } else
        compChoice = "scissors"
    
        return compChoice;
}

console.log(getComputerChoice());