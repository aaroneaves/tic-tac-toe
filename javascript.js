const board = (function() {
    const refreshDisplay = () => {
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
        one.textContent = board.array[1];
        two.textContent = board.array[2];
        three.textContent = board.array[3];
        four.textContent = board.array[4];
        five.textContent = board.array[5];
        six.textContent = board.array[6];
        seven.textContent = board.array[7];
        eight.textContent = board.array[8];
        nine.textContent = board.array[9];
    };
    one.addEventListener('click', () => {
        if (board.array[1] || computer.turn || gameOver) {
            return;
        } else {
            board.array[1] = player.symbol;
            processTurn();
        }
    });
    two.addEventListener('click', () => {
        if (board.array[2] || computer.turn || gameOver) {
            return;
        } else {
            board.array[2] = player.symbol;
            processTurn();
        }
    });
    three.addEventListener('click', () => {
        if (board.array[3] || computer.turn || gameOver) {
            return;
        } else {
            board.array[3] = player.symbol;
            processTurn();
        }
    });
    four.addEventListener('click', () => {
        if (board.array[4] || computer.turn || gameOver) {
            return;
        } else {
            board.array[4] = player.symbol;
            processTurn();
        }
    });
    five.addEventListener('click', () => {
        if (board.array[5] || computer.turn || gameOver) {
            return;
        } else {
            board.array[5] = player.symbol;
            processTurn();
        }
    });
    six.addEventListener('click', () => {
        if (board.array[6] || computer.turn || gameOver) {
            return;
        } else {
            board.array[6] = player.symbol;
            processTurn();
        }
    });
    seven.addEventListener('click', () => {
        if (board.array[7] || computer.turn || gameOver) {
            return;
        } else {
            board.array[7] = player.symbol;
            processTurn();
        }
    });
    eight.addEventListener('click', () => {
        if (board.array[8] || computer.turn || gameOver) {
            return;
        } else {
            board.array[8] = player.symbol;
            processTurn();
        }
    });
    nine.addEventListener('click', () => {
        if (board.array[9] || computer.turn || gameOver) {
            return;
        } else {
            board.array[9] = player.symbol;
            processTurn();
        }
    });

    const array = ["leave this blank", null, null, null, null, null, null, null, null, null];
    const narrator = document.querySelector('.narrator');
    const playerWinTally = document.querySelector('#player-wins');
    const computerWinTally = document.querySelector('#computer-wins');

    return { refreshDisplay, array, narrator, playerWinTally, computerWinTally, one, two, three, four, five, six, seven, eight, nine };
})();

//Player stuff here

const x = "x";
const o = "o";

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

//New game initializations here

board.narrator.textContent = "Pick X or O!";
board.playerWinTally.textContent = player.wins;
board.computerWinTally.textContent = computer.wins;
let gameOver = true;

//game object here

const game = (function() {
    const computerTakesTurn = function() {
        let choice = null;
        function getRandomNumber() {
            const min = Math.ceil(1);
            const max = Math.floor(10);
            choice = Math.floor(Math.random() * (max - min) + min);
        };
        getRandomNumber();
        if (board.array[choice] == null) {
            board.array[choice] = computer.symbol;
            processTurn();
        } else {
            computerTakesTurn();
        }
    };

    return { computerTakesTurn };

})();


processTurn = function () {
    board.refreshDisplay();
    checkForGameOver();
}

checkForGameOver = function () {
    if (board.array[1] == board.array[2] && board.array[1] == board.array[3] && board.array[1]){
        gameOver = true;
        if (board.array[1] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[4] == board.array[5] && board.array[4] == board.array[6] && board.array[4]) {
        gameOver = true;
        if (board.array[4] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[7] == board.array[8] && board.array[7] == board.array[9] && board.array[7]) {
        gameOver = true;
        if (board.array[7] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[1] == board.array[4] && board.array[1] == board.array[7] && board.array[1]) {
        gameOver = true;
        if (board.array[1] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[2] == board.array[5] && board.array[2] == board.array[8] && board.array[2]) {
        gameOver = true;
        if (board.array[2] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[3] == board.array[6] && board.array[3] == board.array[9] && board.array[3]) {
        gameOver = true;
        if (board.array[3] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[1] == board.array[5] && board.array[1] == board.array[9] && board.array[1]) {
        gameOver = true;
        if (board.array[1] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[7] == board.array[5] && board.array[7] == board.array[3] && board.array[7]) {
        gameOver = true;
        if (board.array[7] == player.symbol) {
            board.narrator.textContent = "Player Wins!";
            player.wins += 1;
        } else {
            board.narrator.textContent = "Computer Wins!";
            computer.wins += 1;
        }
        board.playerWinTally.textContent = player.wins;
        board.computerWinTally.textContent = computer.wins;
        nextRound.style.display = 'inline';
        return;
    };

    if (board.array[1] && board.array[2] && board.array[3] && board.array[4] && board.array[5] && board.array[6] && board.array[7] && board.array[8] && board.array[9]) {
        gameOver = true;
        board.narrator.textContent = "It's a Tie!";
        nextRound.style.display = 'inline';
        return;
    };
    
    const delay = ms => new Promise(res => setTimeout(res, ms));

    if (player.turn) {
        player.turn = false;
        computer.turn = true;
        const delayedTurn = async () => {
            board.narrator.textContent = "Computer's Turn!";
            await delay(750);
            game.computerTakesTurn();
        };
        delayedTurn();
    } else {
        player.turn = true;
        computer.turn = false;
        board.narrator.textContent = "Player's Turn!";
    };
}

const reset = document.querySelector('.reset');
reset.style.display = 'none';
reset.addEventListener('click', () => {
    board.array = ["leave this blank", null, null, null, null, null, null, null, null, null];
    player.wins = 0;
    computer.wins = 0;
    player.turn = false;
    computer.turn = false;
    player.symbol = null;
    computer.symbol = null;
    board.refreshDisplay();
    board.playerWinTally.textContent = player.wins;
    board.computerWinTally.textContent = computer.wins;
    board.narrator.textContent = "Pick X or O!";
    xButton.style.display = 'inline';
    oButton.style.display = 'inline';
    reset.style.display = 'none';
    nextRound.style.display = 'none';
});

const nextRound = document.querySelector('.new-game');
nextRound.style.display = 'none';
nextRound.addEventListener('click', () => {
    board.array = ["leave this blank", null, null, null, null, null, null, null, null, null];
    board.refreshDisplay();
    gameOver = false;
    nextRound.style.display = 'none';
    if (player.symbol == x) {
        player.turn = true;
        computer.turn = false;
        board.narrator.textContent = "Player's Turn!";
    } else {
        player.turn = false;
        computer.turn = true;
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const delayedTurn = async () => {
            board.narrator.textContent = "Computer's Turn!";
            await delay(750);
            game.computerTakesTurn();
        };
        delayedTurn();       
    }
});

const xButton = document.querySelector('#x-button');
xButton.addEventListener('click', () => {
    player.symbol = x;
    computer.symbol = o;
    board.narrator.textContent = "Player's Turn!";
    gameOver = false;
    player.turn = true;
    computer.turn = false;
    xButton.style.display = 'none';
    oButton.style.display = 'none';
    reset.style.display = 'inline';
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
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const delayedTurn = async () => {
        board.narrator.textContent = "Computer's Turn!";
        await delay(750);
        game.computerTakesTurn();
    };
    delayedTurn();
});
