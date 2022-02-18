'use strict'

let gameboard = document.querySelector('.gameboard');

gameboard.addEventListener('click', function(event) {
    console.log(event.target.id);
});