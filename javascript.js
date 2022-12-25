//Board Object

const board = (function() {
    let array = ["leave this blank", null, null, null, null, null, null, null, null, null];
    //not sure why these variables are globally scoped
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

    const refreshDisplay = () => {
        //not sure why I can't just call array without calling board object (here or in the event listeners). Same issue with gameOver in game Object
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
        if (board.array[1] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[1] = player.symbol;
            game.processTurn();
        }
    });

    two.addEventListener('click', () => {
        if (board.array[2] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[2] = player.symbol;
            game.processTurn();
        }
    });

    three.addEventListener('click', () => {
        if (board.array[3] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[3] = player.symbol;
            game.processTurn();
        }
    });

    four.addEventListener('click', () => {
        if (board.array[4] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[4] = player.symbol;
            game.processTurn();
        }
    });

    five.addEventListener('click', () => {
        if (board.array[5] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[5] = player.symbol;
            game.processTurn();
        }
    });

    six.addEventListener('click', () => {
        if (board.array[6] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[6] = player.symbol;
            game.processTurn();
        }
    });

    seven.addEventListener('click', () => {
        if (board.array[7] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[7] = player.symbol;
            game.processTurn();
        }
    });

    eight.addEventListener('click', () => {
        if (board.array[8] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[8] = player.symbol;
            game.processTurn();
        }
    });

    nine.addEventListener('click', () => {
        if (board.array[9] || computer.turn || game.gameOver) {
            return;
        } else {
            board.array[9] = player.symbol;
            game.processTurn();
        }
    });

    return { refreshDisplay, array };

})();

//Game Object

const game = (function() {

    const narrator = document.querySelector('.narrator');
    const playerWinTally = document.querySelector('#player-wins');
    const computerWinTally = document.querySelector('#computer-wins');

    const x = "x";
    const o = "o";

    let gameOver = true;

    const xButton = document.querySelector('#x-button');
    xButton.addEventListener('click', () => {
        player.symbol = x;
        computer.symbol = o;
        game.gameOver = false;
        narrator.textContent = "Player's Turn!";
        player.turn = true;
        computer.turn = false;
        adjustButtonDisplay();
    });

    const oButton = document.querySelector('#o-button');
    oButton.addEventListener('click', () => {
        player.symbol = o;
        computer.symbol = x;
        game.gameOver = false;
        player.turn = false;
        computer.turn = true;
        adjustButtonDisplay();
        delayedTurn();
    });

    const adjustButtonDisplay = function() {
        xButton.style.display = 'none';
        oButton.style.display = 'none';
        reset.style.display = 'inline';
    };

    const nextRound = document.querySelector('.new-game');
    nextRound.addEventListener('click', () => {
        board.array = ["leave this blank", null, null, null, null, null, null, null, null, null];
        board.refreshDisplay();
        game.gameOver = false;
        nextRound.style.display = 'none';
        if (player.symbol == x) {
            player.turn = true;
            computer.turn = false;
            narrator.textContent = "Player's Turn!";
        } else {
            player.turn = false;
            computer.turn = true;
            delayedTurn();       
        }
    });

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        board.array = ["leave this blank", null, null, null, null, null, null, null, null, null];
        player.wins = 0;
        computer.wins = 0;
        player.turn = false;
        computer.turn = false;
        player.symbol = null;
        computer.symbol = null;
        board.refreshDisplay();
        playerWinTally.textContent = player.wins;
        computerWinTally.textContent = computer.wins;
        narrator.textContent = "Pick X or O!";
        xButton.style.display = 'inline';
        oButton.style.display = 'inline';
        reset.style.display = 'none';
        nextRound.style.display = 'none';
    });

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const delayedTurn = async () => {
        narrator.textContent = "Computer's Turn!";
        await delay(750);
        computerTakesTurn();
    };

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

    const processTurn = function () {
        board.refreshDisplay();
    
        function playerWinsRound() {
            game.gameOver = true;
            narrator.textContent = "Player Wins!";
            player.wins += 1;
            playerWinTally.textContent = player.wins;
            nextRound.style.display = 'inline';
        };
    
        function computerWinsRound() {
            game.gameOver = true;
            narrator.textContent = "Computer Wins!";
            computer.wins += 1;
            computerWinTally.textContent = computer.wins;
            nextRound.style.display = 'inline';
        };
    
        if (board.array[1] == board.array[2] && board.array[1] == board.array[3] && board.array[1]){
            if (board.array[1] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[4] == board.array[5] && board.array[4] == board.array[6] && board.array[4]) {
            if (board.array[4] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[7] == board.array[8] && board.array[7] == board.array[9] && board.array[7]) {
            if (board.array[7] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[1] == board.array[4] && board.array[1] == board.array[7] && board.array[1]) {
            if (board.array[1] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[2] == board.array[5] && board.array[2] == board.array[8] && board.array[2]) {
            if (board.array[2] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[3] == board.array[6] && board.array[3] == board.array[9] && board.array[3]) {
            if (board.array[3] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[1] == board.array[5] && board.array[1] == board.array[9] && board.array[1]) {
            if (board.array[1] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[7] == board.array[5] && board.array[7] == board.array[3] && board.array[7]) {
            if (board.array[7] == player.symbol) {
                playerWinsRound();
            } else {
                computerWinsRound();
            }
            return;
        };
    
        if (board.array[1] && board.array[2] && board.array[3] && board.array[4] && board.array[5] && board.array[6] && board.array[7] && board.array[8] && board.array[9]) {
            game.gameOver = true;
            narrator.textContent = "It's a Tie!";
            nextRound.style.display = 'inline';
            return;
        };
        
        if (player.turn) {
            player.turn = false;
            computer.turn = true;
            delayedTurn();
        } else {
            player.turn = true;
            computer.turn = false;
            narrator.textContent = "Player's Turn!";
        };
    };

    const initialize = function() {
        narrator.textContent = "Pick X or O!";
        reset.style.display = 'none';
        nextRound.style.display = 'none';
    };

    return { processTurn, initialize, gameOver};

})();

//Player Factory

const playerFactory = (id) => {
    let name = id;
    let turn = false;
    let wins = false;
    let symbol = null;
    return { name, turn, wins, symbol};
}

//Initialization
const player = playerFactory('player');
const computer = playerFactory('computer');
game.initialize();