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

function getHumanChoice(ans){
    return ans.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ){
        humanScore++;
        console.log("You win!");
    }
    else if(humanChoice == computerChoice){
        humanScore += 0.5;
        computerScore += 0.5;
        console.log("You Tied!");
    }
    else{
        computerScore++;
        console.log("You lost!");
    }
}

function updateScoreboard() {
    humanScoreboard.textContent = `Human: ${humanScore}`;
    computerScoreboard.textContent = `Computer: ${computerScore}`;
}

function checkDone(buttons){
    const q = document.querySelector(".options");
    if (humanScore == computerScore){
        return;
    }
    else if (humanScore > computerScore){
        rounds.textContent = "You win!";
        q.remove();
    }
    else if(computerScore > humanScore){
        rounds.textContent = "You lose!";
        q.remove();
    }
}

// Button working + making it around
const buttons = document.querySelectorAll(".options button");
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const h = getHumanChoice(event.target.textContent);
        playRound(h, getComputerChoice());
        updateScoreboard();
        if((humanScore >= 5) || (computerScore >= 5)){
            checkDone(buttons);
        }
    })
})

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

// Display
const rounds = document.createElement("div");
rounds.style.backgroundColor = "red";
rounds.style.color = `darkpink`;
rounds.style.height = `300px`;
rounds.style.display = `flex;`
rounds.style.justifyContent = 'center';
document.body.appendChild(rounds);



