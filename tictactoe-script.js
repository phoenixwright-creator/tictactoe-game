'use strict'

const Player = (playerId, defaultName) => {
    let score = 0;
    const displayName = (name = defaultName) => {
        const playerNameDiv = document.querySelector(`.player-${playerId}-name`);
        playerNameDiv.innerHTML = name;
    }

    const getName = () => {
        const playerNameDiv = document.querySelector(`.player-${playerId}-name`);
        return playerNameDiv.innerHTML;
    }

    const changeName = (event) => {
        const newName = prompt('Please enter your name : ');
        switch(event.target.id){
            case 'changeName1':
                player1.displayName(newName);
                break;
            case 'changeName2':
                player2.displayName(newName);
                break;
            default:
                break;
        }
    };
    return {playerId, defaultName, score, displayName, getName, changeName};
};

const player1 = Player(1,'Bob');
const player2 = Player(2, 'André');
player1.displayName();
player2.displayName();

let GameBoardModule = (function () {
    let emptyBoard = [['','',''], ['','',''], ['','','']];
    let symbolTurn = 'X';
    
    function play(){
        const playCell = document.querySelectorAll('.cell');
        for(let i=0; i<playCell.length; i++){
            playCell[i].addEventListener('click', fillCell);
        }
    }

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

    function restart(){
        emptyBoard = [['','',''], ['','',''], ['','','']];
        symbolTurn = 'X';
        player1.score = 0;
        player2.score = 0;
        const score1 = document.querySelector('#scoreP1');
        const score2 = document.querySelector('#scoreP2');
        score1.innerHTML = `Score : ${player1.score}`;
        score2.innerHTML = `Score : ${player2.score}`;
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
                    winner.innerHTML = `${player1.getName()} has won this round !`;
                    const nextRound = document.createElement('button');
                    nextRound.className = 'nextRound';
                    nextRound.innerHTML = 'Next Round';
                    winner.appendChild(nextRound);
                    winner.style.display = 'flex';
                    nextRound.addEventListener('click', next);
                    player1.score++;
                    const score = document.getElementById('scoreP1');
                    score.innerHTML  = `Score : ${player1.score}`;
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
                        winner.innerHTML = `${player2.getName()} has won this round !`;
                        const nextRound = document.createElement('button');
                        nextRound.className = 'nextRound';
                        nextRound.innerHTML = 'Next Round';
                        winner.appendChild(nextRound);
                        winner.style.display = 'flex';
                        nextRound.addEventListener('click', next);
                        player2.score++;
                        const score = document.getElementById('scoreP2');
                        score.innerHTML  = `Score : ${player2.score}`;
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
            if(player1.score === 3){
                winner.innerHTML = `${player1.getName()} has won the game. Congratulations !!!`;
                winner.style.fontSize = '1.5rem';
                winner.style.fontWeight = 'bold';
            }
            else if(player2.score === 3){
                winner.innerHTML = `${player2.getName()} has won the game. Congratulations !!!`;
                winner.style.fontSize = '1.5rem';
                winner.style.fontWeight = 'bold';
            }
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

    function activateListeners() {
        const changeNameP1 = document.querySelector('#changeName1');
        const changeNameP2 = document.querySelector('#changeName2');
        changeNameP1.addEventListener('click', player1.changeName);
        changeNameP2.addEventListener('click', player2.changeName);
        const restartButton = document.querySelector('.restartBtn');
        restartButton.addEventListener('click', restart);
    }

    return {drawBoard, activateListeners};
})();

GameBoardModule.drawBoard();
GameBoardModule.activateListeners();