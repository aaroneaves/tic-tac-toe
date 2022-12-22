const narrator = document.querySelector('.narrator');
narrator.textContent = "Player's turn!"

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


let playerFactory = {
    //make into factory
    //construct players here    
}

one.addEventListener('click', () => {
    if (gameBoard.board[1] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[1] = x;
        processTurn();
    }
});

two.addEventListener('click', () => {
    if (gameBoard.board[2] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[2] = x;
        processTurn();
    }
});

three.addEventListener('click', () => {
    if (gameBoard.board[3] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[3] = x;
        processTurn();
    }
});

four.addEventListener('click', () => {
    if (gameBoard.board[4] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[4] = x;
        processTurn();
    }
});

five.addEventListener('click', () => {
    if (gameBoard.board[5] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[5] = x;
        processTurn();
    }
});

six.addEventListener('click', () => {
    if (gameBoard.board[6] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[6] = x;
        processTurn();
    }
});

seven.addEventListener('click', () => {
    if (gameBoard.board[7] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[7] = x;
        processTurn();
    }
});

eight.addEventListener('click', () => {
    if (gameBoard.board[8] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[8] = x;
        processTurn();
    }
});

nine.addEventListener('click', () => {
    if (gameBoard.board[9] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[9] = x;
        processTurn();
    }
});

let player = {
    turn: true
}

let computer = {
    turn: false
};

let gameOver = false;

const computerTakesTurn = function() {
    let choice = null;
    function getRandomNumber() {
        const min = Math.ceil(1);
        const max = Math.floor(10);
        choice = Math.floor(Math.random() * (max - min) + min);
    };
    getRandomNumber();
    if (gameBoard.board[choice] == null) {
        gameBoard.board[choice] = o;
        processTurn();
    } else {
        computerTakesTurn();
    }
};

processTurn = function () {
    displayController.populateGameBoard();
    checkForGameOver();
    if (gameOver) {
        narrator.textContent = "Game Over!";
    }
}

checkForGameOver = function () {
    if (gameBoard.board[1] == gameBoard.board[2] && gameBoard.board[1] == gameBoard.board[3] && gameBoard.board[1]) gameOver = true;
    if (gameBoard.board[4] == gameBoard.board[5] && gameBoard.board[4] == gameBoard.board[6] && gameBoard.board[4]) gameOver = true;
    if (gameBoard.board[7] == gameBoard.board[8] && gameBoard.board[7] == gameBoard.board[9] && gameBoard.board[7]) gameOver = true;
    if (gameBoard.board[1] == gameBoard.board[4] && gameBoard.board[1] == gameBoard.board[7] && gameBoard.board[1]) gameOver = true;
    if (gameBoard.board[2] == gameBoard.board[5] && gameBoard.board[2] == gameBoard.board[8] && gameBoard.board[2]) gameOver = true;
    if (gameBoard.board[3] == gameBoard.board[6] && gameBoard.board[3] == gameBoard.board[9] && gameBoard.board[3]) gameOver = true;
    if (gameBoard.board[1] == gameBoard.board[5] && gameBoard.board[1] == gameBoard.board[9] && gameBoard.board[1]) gameOver = true;
    if (gameBoard.board[7] == gameBoard.board[5] && gameBoard.board[7] == gameBoard.board[3] && gameBoard.board[7]) gameOver = true;
    if (gameBoard.board[1] && gameBoard.board[2] && gameBoard.board[3] && gameBoard.board[4] && gameBoard.board[5] && gameBoard.board[6] && gameBoard.board[7] && gameBoard.board[8] && gameBoard.board[9]) gameOver = true;
    
    if (gameOver) return;

    if (player.turn) {
        player.turn = false;
        computer.turn = true;
        narrator.textContent = "Computer's Turn!";
        computerTakesTurn();
    } else {
        player.turn = true;
        computer.turn = false;
        narrator.textContent = "Player's Turn!";
    };
}