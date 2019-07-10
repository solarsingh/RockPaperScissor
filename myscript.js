function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay(){
    let random=getRandomInt(3);

    switch (random){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;

    }
}

function playerPlay(){
    let playerInput=window.prompt("What is your Play?");
    let playerSelection=playerInput.toLowerCase();

    if (playerSelection!="rock" && playerSelection!="paper" && playerSelection!="scissor"){
        let playerInput=window.prompt("Please Enter a Valid Input");
        let playerSelection=playerInput.toLowerCase();
    }
    return playerSelection;
}


function playRound(playerSelection, computerSelection){

    if(playerSelection=="rock" && computerSelection=="paper"){
        return "You Loose! Paper beats Rock";
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        return "You Win! Paper beats Rock";
    }

    else if(playerSelection=="paper" && computerSelection=="scissor"){
        return "You Loose! Scissor beats Paper";
    }
    else if(playerSelection=="scissor" && computerSelection=="paper"){
        return "You Win! Scissor beats Paper";
    }

    else if(playerSelection=="rock" && computerSelection=="scissor"){
        return "You Win! Rock beats Scissor";
    }
    else if(playerSelection=="scissor" && computerSelection=="rock"){
        return "You Loose! Rock beats Scissor";
    }

    else if(playerSelection=="rock" && computerSelection=="rock"){
        return "This is a draw.";
    }
    else if(playerSelection=="scissor" && computerSelection=="scissor"){
        return "This is a draw.";
    }
    else if(playerSelection=="paper" && computerSelection=="paper"){
        return "This is a draw."
    }

    else {
        return "Invalid Input";
    }
}

function keepScore(playerSelection, computerSelection){
    let playerWin=0;
    let computerWin=0;

    if(playerSelection=="rock" && computerSelection=="paper"){
        computerWin=1;
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        playerWin=1;
    }

    else if(playerSelection=="paper" && computerSelection=="scissor"){
        computerWin=1;
    }
    else if(playerSelection=="scissor" && computerSelection=="paper"){
        playerWin=1;
    }

    else if(playerSelection=="rock" && computerSelection=="scissor"){
        playerWin=1;
    }
    else if(playerSelection=="scissor" && computerSelection=="rock"){
        computerWin=1;
    }

    else if(playerSelection=="rock" && computerSelection=="rock"){
            playerWin=0;
            computerWin=0;
    }
    else if(playerSelection=="scissor" && computerSelection=="scissor"){
            playerWin=0;
            computerWin=0;
    }
    else if(playerSelection=="paper" && computerSelection=="paper"){
            playerWin=0;
            computerWin=0;
    }

    return [playerWin, computerWin];
    
}

function game(){
    let playerScore=0;
    let computerScore=0;

    for(i=1;i<=5;i++){
        computerSelection=computerPlay();
        playerSelection=playerPlay();

        console.log("Computer Selected "+ computerSelection);
        console.log("You selected "+ playerSelection);

        let result=playRound(playerSelection, computerSelection);
        console.log(result);

        let score=keepScore(playerSelection, computerSelection);
        if(score[0]==1){
            playerScore+=1;
        }
        if(score[1]==1){
            computerScore+=1;
        }
    }

    console.log("Your Score is:" + playerScore);
    console.log("Computer's Score is:" + computerScore);
    
}

game();


