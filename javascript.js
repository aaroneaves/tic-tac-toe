const narrator = document.querySelector('.narrator');
narrator.textContent = "Pick X or O!";

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
        gameBoard.board[1] = player.symbol;
        processTurn();
    }
});

two.addEventListener('click', () => {
    if (gameBoard.board[2] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[2] = player.symbol;
        processTurn();
    }
});

three.addEventListener('click', () => {
    if (gameBoard.board[3] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[3] = player.symbol;
        processTurn();
    }
});

four.addEventListener('click', () => {
    if (gameBoard.board[4] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[4] = player.symbol;
        processTurn();
    }
});

five.addEventListener('click', () => {
    if (gameBoard.board[5] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[5] = player.symbol;
        processTurn();
    }
});

six.addEventListener('click', () => {
    if (gameBoard.board[6] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[6] = player.symbol;
        processTurn();
    }
});

seven.addEventListener('click', () => {
    if (gameBoard.board[7] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[7] = player.symbol;
        processTurn();
    }
});

eight.addEventListener('click', () => {
    if (gameBoard.board[8] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[8] = player.symbol;
        processTurn();
    }
});

nine.addEventListener('click', () => {
    if (gameBoard.board[9] || computer.turn || gameOver) {
        return;
    } else {
        gameBoard.board[9] = player.symbol;
        processTurn();
    }
});

let player = {
    turn: false,
    wins: 0,
    symbol: null
}

let computer = {
    turn: false,
    wins: 0,
    symbol: null
};

const playerWinTally = document.querySelector('#player-wins');
playerWinTally.textContent = player.wins;
const computerWinTally = document.querySelector('#computer-wins');
computerWinTally.textContent = computer.wins;

let gameOver = true;

const computerTakesTurn = function() {
    let choice = null;
    function getRandomNumber() {
        const min = Math.ceil(1);
        const max = Math.floor(10);
        choice = Math.floor(Math.random() * (max - min) + min);
    };
    getRandomNumber();
    if (gameBoard.board[choice] == null) {
        gameBoard.board[choice] = computer.symbol;
        processTurn();
    } else {
        computerTakesTurn();
    }
};

processTurn = function () {
    displayController.populateGameBoard();
    checkForGameOver();
}

checkForGameOver = function () {
    if (gameBoard.board[1] == gameBoard.board[2] && gameBoard.board[1] == gameBoard.board[3] && gameBoard.board[1]){
        gameOver = true;
        if (gameBoard.board[1] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[4] == gameBoard.board[5] && gameBoard.board[4] == gameBoard.board[6] && gameBoard.board[4]) {
        gameOver = true;
        if (gameBoard.board[4] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[7] == gameBoard.board[8] && gameBoard.board[7] == gameBoard.board[9] && gameBoard.board[7]) {
        gameOver = true;
        if (gameBoard.board[7] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[1] == gameBoard.board[4] && gameBoard.board[1] == gameBoard.board[7] && gameBoard.board[1]) {
        gameOver = true;
        if (gameBoard.board[1] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[2] == gameBoard.board[5] && gameBoard.board[2] == gameBoard.board[8] && gameBoard.board[2]) {
        gameOver = true;
        if (gameBoard.board[2] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[3] == gameBoard.board[6] && gameBoard.board[3] == gameBoard.board[9] && gameBoard.board[3]) {
        gameOver = true;
        if (gameBoard.board[3] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[1] == gameBoard.board[5] && gameBoard.board[1] == gameBoard.board[9] && gameBoard.board[1]) {
        gameOver = true;
        if (gameBoard.board[1] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[7] == gameBoard.board[5] && gameBoard.board[7] == gameBoard.board[3] && gameBoard.board[7]) {
        gameOver = true;
        if (gameBoard.board[7] == player.symbol) {
            narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        return;
    };

    if (gameBoard.board[1] && gameBoard.board[2] && gameBoard.board[3] && gameBoard.board[4] && gameBoard.board[5] && gameBoard.board[6] && gameBoard.board[7] && gameBoard.board[8] && gameBoard.board[9]) {
        gameOver = true;
        narrator.textContent = "It's a Tie!";
        return;
    };
    
    const delay = ms => new Promise(res => setTimeout(res, ms));

    if (player.turn) {
        player.turn = false;
        computer.turn = true;
        const delayedTurn = async () => {
            narrator.textContent = "Computer's Turn!";
            await delay(750);
            computerTakesTurn();
        };
        delayedTurn();
    } else {
        player.turn = true;
        computer.turn = false;
        narrator.textContent = "Player's Turn!";
    };
}

const reset = document.querySelector('.reset');
reset.style.display = 'none';
reset.addEventListener('click', () => {
    gameBoard.board = ["leave this blank", null, null, null, null, null, null, null, null, null];
    player.wins = 0;
    computer.wins = 0;
    player.turn = false;
    computer.turn = false;
    player.symbol = null;
    computer.symbol = null;
    displayController.populateGameBoard();
    playerWinTally.textContent = player.wins;
    computerWinTally.textContent = computer.wins;
    narrator.textContent = "Pick X or O!";
    xButton.style.display = 'inline';
    oButton.style.display = 'inline';
    reset.style.display = 'none';
    newGame.style.display = 'none';
});

const newGame = document.querySelector('.new-game');
newGame.style.display = 'none';
newGame.addEventListener('click', () => {
    if (gameOver) {
        gameBoard.board = ["leave this blank", null, null, null, null, null, null, null, null, null];
        displayController.populateGameBoard();
        gameOver = false;
        if (player.symbol == x) {
            player.turn = true;
            computer.turn = false;
            narrator.textContent = "Player's Turn!";
        } else {
            player.turn = false;
            computer.turn = true;
            const delay = ms => new Promise(res => setTimeout(res, ms));
            const delayedTurn = async () => {
                narrator.textContent = "Computer's Turn!";
                await delay(750);
                computerTakesTurn();
            };
            delayedTurn();       
        }
    } else {
        alert("You have to finish this game first!")
    }
});

gameOver = true;

const xButton = document.querySelector('#x-button');
xButton.addEventListener('click', () => {
    player.symbol = x;
    computer.symbol = o;
    narrator.textContent = "Player's Turn!";
    gameOver = false;
    player.turn = true;
    computer.turn = false;
    xButton.style.display = 'none';
    oButton.style.display = 'none';
    reset.style.display = 'inline';
    newGame.style.display = 'inline';
});

const oButton = document.querySelector('#o-button');
oButton.addEventListener('click', () => {
    player.symbol = o;
    computer.symbol = x;
    gameOver = false;
    player.turn = false;
    computer.turn = true;
    xButton.style.display = 'none';
    oButton.style.display = 'none';
    reset.style.display = 'inline';
    newGame.style.display = 'inline';
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const delayedTurn = async () => {
        narrator.textContent = "Computer's Turn!";
        await delay(750);
        computerTakesTurn();
    };
    delayedTurn();
});
