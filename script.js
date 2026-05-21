function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
    }
    return "scissors"
}

console.log(getComputerChoice())