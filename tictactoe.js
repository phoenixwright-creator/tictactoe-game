'use strict'

const player1 = new Player(1,'Bob');
const player2 = new Player(2, 'André');

let emptyBoard = [['','',''], ['','',''], ['','','']];
let symbolTurn = 'X';

let scoreP1 = 0;
let scoreP2 = 0;
let roundWonP1 = 0;
let roundWonP2 = 0;

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
    play();
}

function fillCell(event){
    switch(event.target.id){
        case '1':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '2':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '3':
            if(event.target.innerHTML === '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '4':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '5':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '6':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '7':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '8':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        case '9':
            if(event.target.innerHTML=== '' && symbolTurn === 'X'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'O';
            }
            else if(event.target.innerHTML=== '' && symbolTurn === 'O'){
                event.target.innerHTML = symbolTurn;
                symbolTurn = 'X';
            }
            break;
        default:
            break;
    }
    hasWon();
}

function play(){
    const playCell = document.querySelectorAll('.cell');
    for(let i=0; i<playCell.length; i++){
        playCell[i].addEventListener('click', fillCell);
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

const buttonChangeName = document.querySelectorAll('.changeName');
for(let i=0; i<buttonChangeName.length; i++){
    buttonChangeName[i].addEventListener('click', changeName);
}

function restart(){
    emptyBoard = [['','',''], ['','',''], ['','','']];
    symbolTurn = 'X';
    scoreP1 = 0;
    scoreP2 = 0;
    const winner = document.querySelector('.winner');
    winner.style.display = 'none';
    drawBoard();
}

function next(){
    emptyBoard = [['','',''], ['','',''], ['','','']];
    symbolTurn = 'X';
    const winner = document.querySelector('.winner');
    winner.style.display = 'none';
    drawBoard();
}

const restartButton = document.querySelector('.restartBtn');
restartButton.addEventListener('click', restart);

function hasWon() {
    const cells = document.querySelectorAll('.cell');
    const winner = document.querySelector('.winner');
    let i = 0;
        if((cells[i].innerHTML === 'X' && cells[i+1].innerHTML === 'X' && cells[i+2].innerHTML === 'X') ||
           (cells[i+3].innerHTML === 'X' && cells[i+4].innerHTML === 'X' && cells[i+5].innerHTML === 'X') ||
           (cells[i+6].innerHTML === 'X' && cells[i+7].innerHTML === 'X' && cells[i+8].innerHTML === 'X') ||
           (cells[i].innerHTML === 'X' && cells[i+3].innerHTML === 'X' && cells[i+6].innerHTML === 'X') ||
           (cells[i+1].innerHTML === 'X' && cells[i+4].innerHTML === 'X' && cells[i+7].innerHTML === 'X') ||
           (cells[i+2].innerHTML === 'X' && cells[i+5].innerHTML === 'X' && cells[i+8].innerHTML === 'X') ||
           (cells[i].innerHTML === 'X' && cells[i+4].innerHTML === 'X' && cells[i+8].innerHTML === 'X') ||
           (cells[i+2].innerHTML === 'X' && cells[i+4].innerHTML === 'X' && cells[i+6].innerHTML === 'X')){
                winner.innerHTML = `${player1.name} has won this round !`;
                const nextRound = document.createElement('button');
                nextRound.className = 'nextRound';
                nextRound.innerHTML = 'Next Round';
                winner.appendChild(nextRound);
                winner.style.display = 'flex';
                nextRound.addEventListener('click', next);
                scoreP1++;
                const score = document.getElementById('scoreP1');
                score.innerHTML  = `Score : ${scoreP1}`;
                for(let j=0; j<cells.length; j++){
                    cells[j].removeEventListener('click', fillCell);
                }
        }
        else if((cells[i].innerHTML === 'O' && cells[i+1].innerHTML === 'O' && cells[i+2].innerHTML === 'O') ||
                (cells[i+3].innerHTML === 'O' && cells[i+4].innerHTML === 'O' && cells[i+5].innerHTML === 'O') ||
                (cells[i+6].innerHTML === 'O' && cells[i+7].innerHTML === 'O' && cells[i+8].innerHTML === 'O') ||
                (cells[i].innerHTML === 'O' && cells[i+3].innerHTML === 'O' && cells[i+6].innerHTML === 'O') ||
                (cells[i+1].innerHTML === 'O' && cells[i+4].innerHTML === 'O' && cells[i+7].innerHTML === 'O') ||
                (cells[i+2].innerHTML === 'O' && cells[i+5].innerHTML === 'O' && cells[i+8].innerHTML === 'O') ||
                (cells[i].innerHTML === 'O' && cells[i+4].innerHTML === 'O' && cells[i+8].innerHTML === 'O') ||
                (cells[i+2].innerHTML === 'O' && cells[i+4].innerHTML === 'O' && cells[i+6].innerHTML === 'O')){
                    winner.innerHTML = `${player2.name} has won this round !`;
                    const nextRound = document.createElement('button');
                    nextRound.className = 'nextRound';
                    nextRound.innerHTML = 'Next Round';
                    winner.appendChild(nextRound);
                    winner.style.display = 'flex';
                    nextRound.addEventListener('click', next);
                    scoreP2++;
                    const score = document.getElementById('scoreP2');
                    score.innerHTML  = `Score : ${scoreP2}`;
                    for(let j=0; j<cells.length; j++){
                        cells[j].removeEventListener('click', fillCell);
                    }
        }
        else if((cells[i].innerHTML !== '' && cells[i+1].innerHTML !== '' && cells[i+2].innerHTML !== '') &&
        (cells[i+3].innerHTML !== '' && cells[i+4].innerHTML !== '' && cells[i+5].innerHTML !== '') &&
        (cells[i+6].innerHTML !== '' && cells[i+7].innerHTML !== '' && cells[i+8].innerHTML !== '')){
            winner.innerHTML = `It's a tie !`;
            const nextRound = document.createElement('button');
            nextRound.className = 'nextRound';
            nextRound.innerHTML = 'Next Round';
            winner.appendChild(nextRound);
            winner.style.display = 'flex';
            nextRound.addEventListener('click', next);
            for(let j=0; j<cells.length; j++){
                cells[j].removeEventListener('click', fillCell);
            }
        }
        if(scoreP1 === 3){
            winner.innerHTML = `${player1.name} has won the game. Congratulations !!!`;
            winner.style.fontSize = '1.5rem';
            winner.style.fontWeight = 'bold';
        }
        else if(scoreP2 === 3){
            winner.innerHTML = `${player2.name} has won the game. Congratulations !!!`;
            winner.style.fontSize = '1.5rem';
            winner.style.fontWeight = 'bold';
        }
}