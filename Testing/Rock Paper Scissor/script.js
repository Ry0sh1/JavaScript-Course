let userInput = 0;
let computer = 0;

function newGame(){
    userInput = 0;
    computer = Math.floor((Math.random() * 3) + 1);
}

function setUserInput(n){
    userInput = n;
    giveComputerAnswer();
    getWinner();
}
function giveComputerAnswer(){
    switch (computer){
        case 1: console.log("Computer picked Rock");break;
        case 2: console.log("Computer picked Paper");break;
        case 3: console.log("Computer picked Scissors");break;
    }
}
function getWinner(){
    if (userInput === computer){
        tie();
    }
    switch (userInput) {
        case 1: switch (computer){
            case 2:userLost();break;
            case 3:userWon();break;
        }break;
        case 2: switch (computer){
            case 1:userWon();break;
            case 3:userLost();break;
        }break;
        case 3: switch (computer){
            case 1:userLost();break;
            case 2:userWon();break;
        }break;
    }
    newGame();
}

function tie(){
    console.log("Tie");
}

function userWon(){
    console.log("You won");
}

function userLost(){
    console.log("You lost");
}