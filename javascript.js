console.log("Hello World");

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

console.log(getComputerChoice());
console.log(getHumanChoice());