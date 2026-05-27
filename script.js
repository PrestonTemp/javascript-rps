let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
    return null;
}

function getHumanChoice(){
    let ans = prompt("Rock, paper, or scissors?");

    return ans.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        console.log("You win!");
        humanScore++;
    }
    else if(humanChoice == computerChoice){
        console.log("You Tied!");
        humanScore += 0.5;
        computerScore += 0.5;
    }
    else{
        console.log("You lost!");
        computerScore++;
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log("You are the winner!");
    }
    else if(humanScore < computerScore){
        console.log("You are the loser!");
    }
    else{
    console.log("You tied!");
    }
}

// overall scoreboard
const scoreboard = document.createElement("div");
scoreboard.classList.add("scoreboard");
scoreboard.style.display = `flex`;
scoreboard.style.justifyContent = `space-between`;
scoreboard.style.padding = `15px 50px`;
scoreboard.style.backgroundColor = "RGB(152,127,36)"
scoreboard.style.color = `RGB(102,112,0)`

const humanScoreboard = document.createElement("h1");
humanScoreboard.textContent = `Human: ${humanScore}`

const computerScoreboard = document.createElement("h1");
computerScoreboard.textContent = `Computer: ${computerScore}`

scoreboard.appendChild(humanScoreboard);
scoreboard.appendChild(computerScoreboard);

document.body.appendChild(scoreboard);

// plays
const rounds = document.createElement("div");

