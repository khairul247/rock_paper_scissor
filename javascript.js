// this script assumes there are no spelling errors and they are case-insensitive

function getComputerChoice(){
    compChoice=Math.round(Math.random()*2);

    if (compChoice === 0){
        compChoice = "rock";
        console.log(compChoice);
        return compChoice;

    } else if (compChoice === 1){
        compChoice = "paper";
        console.log(compChoice);
        return compChoice;

    } else
        compChoice = "scissors"
        console.log(compChoice);
        return compChoice;

}

function playRound (humanChoice,compChoice){
    if (humanChoice === compChoice){
        return "Tie"
    }  
    else if (humanChoice === "rock"){
        if (compChoice === "paper"){
            computerScore++;
        }
        else {
            humanScore++;
        }
    }
    else if (humanChoice === "paper"){
        if (compChoice === "scissors"){
            computerScore++;
        }
        else {
            humanScore++;
        }
    }
    else 
        if (compChoice === "rock"){
            computerScore++;
        }
        else {
            humanScore++;
        }
}

const buttons =document.querySelectorAll("button");
const scoreboard = document.querySelector("div");
const scores = document.createElement('div');
let humanScore = 0;
let computerScore = 0;

buttons.forEach((button)=> {
    button.addEventListener('click', (event) =>{
        const buttonId = event.target.id;
        let humanChoice = buttonId;
        console.log(humanChoice);
        playRound (humanChoice,getComputerChoice());
        scores.textContent = " Your Score : " + humanScore + " | " 
        + "Computer Score : " + computerScore;
        scoreboard.appendChild(scores);

        if (humanScore === 5 || computerScore === 5){
            if (humanScore>computerScore){
                humanScore = computerScore = 0;
                return alert('You Win!')

            } else if (humanScore < computerScore){
                humanScore = computerScore = 0;
                return alert('Computer Wins!')
            }
            else{
                humanScore = computerScore = 0;
                return "No one wins ;("
            }

        }

    })
})




    

