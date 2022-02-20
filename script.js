'use strict'

const player1 = new Player(1,'Bob');
const player2 = new Player(2, 'André');

const emptyBoard = [['','',''], ['','',''], ['','','']];
let symbolTurn = 'X';

function changeName(event){
    const newName = prompt('Please enter your name : ');
    switch(event.target.id){
        case 'changeName1':
            player1.name = newName;
            player1.displayName();
            break;
        case 'changeName2':
            player2.name = newName;
            player2.displayName();
            break;
        default:
            break;
    }
};

function drawBoard() {
    const gameboardContainer = document.querySelector('.gameboard');
    while(gameboardContainer.hasChildNodes()){
        gameboardContainer.removeChild(gameboardContainer.firstChild);
    }
    let cellCounter = 1;
    for(let i=0; i<emptyBoard.length; i++){
        for(let j=0; j<emptyBoard[i].length; j++){
            const newCell = document.createElement('div');
            newCell.id = cellCounter;
            newCell.className = 'cell ' + 'cell-' + cellCounter;
            newCell.innerText = emptyBoard[i][j];
            gameboardContainer.appendChild(newCell);
            cellCounter++;
        }
    }
}

function play(){
    const playCell = document.querySelectorAll('.cell');
    for(let i=0; i<playCell.length; i++){
        playCell[i].addEventListener('click', function(event){
            switch(event.target.id){
                case '1':
                    if(emptyBoard[0][0]=== '' && symbolTurn === 'X'){
                        emptyBoard[0][0] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[0][0]=== '' && symbolTurn === 'O'){
                        emptyBoard[0][0] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '2':
                    if(emptyBoard[0][1]=== '' && symbolTurn === 'X'){
                        emptyBoard[0][1] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[0][1]=== '' && symbolTurn === 'O'){
                        emptyBoard[0][1] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '3':
                    if(emptyBoard[0][2]=== '' && symbolTurn === 'X'){
                        emptyBoard[0][2] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[0][2]=== '' && symbolTurn === 'O'){
                        emptyBoard[0][2] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '4':
                    if(emptyBoard[1][0]=== '' && symbolTurn === 'X'){
                        emptyBoard[1][0] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[1][0]=== '' && symbolTurn === 'O'){
                        emptyBoard[1][0] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '5':
                    if(emptyBoard[1][1]=== '' && symbolTurn === 'X'){
                        emptyBoard[1][1] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[1][1]=== '' && symbolTurn === 'O'){
                        emptyBoard[1][1] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '6':
                    if(emptyBoard[1][2]=== '' && symbolTurn === 'X'){
                        emptyBoard[1][2] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[1][2]=== '' && symbolTurn === 'O'){
                        emptyBoard[1][2] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '7':
                    if(emptyBoard[2][0]=== '' && symbolTurn === 'X'){
                        emptyBoard[2][0] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[2][0]=== '' && symbolTurn === 'O'){
                        emptyBoard[2][0] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '8':
                    if(emptyBoard[2][1]=== '' && symbolTurn === 'X'){
                        emptyBoard[2][1] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[2][1]=== '' && symbolTurn === 'O'){
                        emptyBoard[2][1] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                case '9':
                    if(emptyBoard[2][2]=== '' && symbolTurn === 'X'){
                        emptyBoard[2][2] = symbolTurn;
                        symbolTurn = 'O';
                    }
                    else if(emptyBoard[2][2]=== '' && symbolTurn === 'O'){
                        emptyBoard[2][2] = symbolTurn;
                        symbolTurn = 'X';
                    }
                    break;
                default:
                    break;
            }
            drawBoard();
            play();
        });
    }
};

player1.displayName();
player2.displayName();

function Player(playerId, defaultName){
    this.playerId = playerId;
    this.name = defaultName;
    this.displayName = function() {
        const playerNameDiv = document.querySelector(`.player-${this.playerId}-name`);
        playerNameDiv.innerHTML = this.name;
    };
};

drawBoard();
play();

const buttonChangeName = document.querySelectorAll('.changeName');
for(let i=0; i<buttonChangeName.length; i++){
    buttonChangeName[i].addEventListener('click', changeName);
}
