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
        playerWin=0;
    }
    else if(playerSelection=="paper" && computerSelection=="rock"){
        playerWin=1;
        computerWin=0;
    }

    else if(playerSelection=="paper" && computerSelection=="scissor"){
        computerWin=1;
        playerWin=0;
    }
    else if(playerSelection=="scissor" && computerSelection=="paper"){
        playerWin=1;
        computerWin=0;
    }

    else if(playerSelection=="rock" && computerSelection=="scissor"){
        playerWin=1;
        computerWin=0;
    }
    else if(playerSelection=="scissor" && computerSelection=="rock"){
        computerWin=1;
        playerWin=0;
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

function elementChild(){
    let div = document.querySelector('.result');
    let elm = div.firstElementChild;
    return elm;
}

function result(playerSelection, computerSelection){
    const div = document.querySelector('.result');

    let check = elementChild();

    if(check == null){
        let rslt = document.createElement('div');
        rslt.classList.add('newDiv');
        rslt.textContent = playRound(playerSelection, computerSelection);
        div.appendChild(rslt);
    }
    else{
        let oldResult = div.firstElementChild;
        div.removeChild(oldResult);

        let rslt = document.createElement('div');
        rslt.classList.add('newDiv');
        rslt.textContent = playRound(playerSelection, computerSelection);
        div.appendChild(rslt);
    }
}

let computerScore = 0;
let playerScore = 0;
let rounds=0;

function scoreListner(playerSelection, computerSelection){
    let score=keepScore(playerSelection, computerSelection);
    
    rounds= rounds+1;
    console.log(score[0]);
    console.log(score[1]);
    
    if (score[0]==1 && score[1]==0){
        playerScore = playerScore+1;
    }
    if (score[0]==0 && score[1]==1){
        computerScore = computerScore+1;
    }

    if (rounds == 5){
        const div = document.querySelector('.result');
        let oldResult = div.firstElementChild;
        div.removeChild(oldResult);

        let finalRslt = document.createElement('div');
        finalRslt.classList.add('newDiv');
        finalRslt.textContent = "Your Score is:" + playerScore + "\n" + "Computer Score is:" + computerScore;
        div.appendChild(finalRslt);
        
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
    }
}

let rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = computerPlay();  
    result(playerSelection, computerSelection);
    scoreListner(playerSelection, computerSelection);
});

let paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () => {
    playerSelection = "paper";
    computerSelection = computerPlay();
    result(playerSelection, computerSelection);
    scoreListner(playerSelection, computerSelection);
});

let scissorBtn = document.querySelector('#scissor');
    scissorBtn.addEventListener('click', () => {
    playerSelection = "scissor";
    computerSelection = computerPlay();
    result(playerSelection, computerSelection);
    scoreListner(playerSelection, computerSelection);
});








