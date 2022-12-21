const x = "x";
const o = "o";

let gameBoard = {
    //make into module
    board: ["leave this blank", null, null, null, null, null, null, null, null, null]
}

const displayController = (function() {
    //not entirely sure why these variables are globally scoped
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    const six = document.querySelector('#six');
    const seven = document.querySelector('#seven');
    const eight = document.querySelector('#eight');
    const nine = document.querySelector('#nine');
    //
    const populateGameBoard = () => {
        one.textContent = gameBoard.board[1];
        two.textContent = gameBoard.board[2];
        three.textContent = gameBoard.board[3];
        four.textContent = gameBoard.board[4];
        five.textContent = gameBoard.board[5];
        six.textContent = gameBoard.board[6];
        seven.textContent = gameBoard.board[7];
        eight.textContent = gameBoard.board[8];
        nine.textContent = gameBoard.board[9];
    };
    return { populateGameBoard };
})();

displayController.populateGameBoard();

let playerFactory = {
    //make into factory
    //construct players here    
}

one.addEventListener('click', () => {
    if (gameBoard.board[1]) {
        return;
    } else {
        gameBoard.board[1] = x;
        displayController.populateGameBoard();
    }
});

two.addEventListener('click', () => {
    gameBoard.board[2] = x;
    displayController.populateGameBoard();
});

three.addEventListener('click', () => {
    gameBoard.board[3] = x;
    displayController.populateGameBoard();
});

four.addEventListener('click', () => {
    gameBoard.board[4] = x;
    displayController.populateGameBoard();
});

five.addEventListener('click', () => {
    gameBoard.board[5] = x;
    displayController.populateGameBoard();
});

six.addEventListener('click', () => {
    gameBoard.board[6] = x;
    displayController.populateGameBoard();
});

seven.addEventListener('click', () => {
    gameBoard.board[7] = x;
    displayController.populateGameBoard();
});

eight.addEventListener('click', () => {
    gameBoard.board[8] = x;
    displayController.populateGameBoard();
});

nine.addEventListener('click', () => {
    gameBoard.board[9] = x;
    displayController.populateGameBoard();
});

const narrator = document.querySelector('.narrator');
narrator.textContent = "Player's turn!"

let player;

let computer = {
    turn: false
};


const computerTakesTurn = function() {
    let choice = null;
    computer.turn = true;
    function getRandomNumber() {
        const min = Math.ceil(1);
        const max = Math.floor(10);
        choice = Math.floor(Math.random() * (max - min) + min);
    };

    while (computer.turn) {
        getRandomNumber();
        if (gameBoard.board[choice] == null) {
            gameBoard.board[choice] = o;
            displayController.populateGameBoard();
            computer.turn = false;
        } 
    };
};

computerTakesTurn();

let game = {
    //make into module
    //game data goes here
}