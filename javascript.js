let x = "x";
let o = "o"

let gameBoard = {
    //make into module
    board: [null, x, x, x, o, o, o, x, o, x]
}

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

function populateGameBoard () {
    one.textContent = gameBoard.board[1];
    two.textContent = gameBoard.board[2];
    three.textContent = gameBoard.board[3];
    four.textContent = gameBoard.board[4];
    five.textContent = gameBoard.board[5];
    six.textContent = gameBoard.board[6];
    seven.textContent = gameBoard.board[7];
    eight.textContent = gameBoard.board[8];
    nine.textContent = gameBoard.board[9];

}

populateGameBoard();


let displayController = {
     //make into module   
}

let playerFactory = {
    //make into factory
    //construct players here
}

let game = {
    //make into module
    //game data goes here
}