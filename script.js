const gameBoard = document.getElementById('game-board');
const turnIndicator = document.getElementById('turn-indicator');
let currentPlayer = 1;
let boxes = [];
let lines = [];

// Initialize the game board
function initializeGame() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.dataset.row = row;
            dot.dataset.col = col;
            gameBoard.appendChild(dot);
        }
    }

    // Add event listeners for drawing lines
    gameBoard.addEventListener('click', handleClick);
}

// Handle click events
function handleClick(event) {
    const dot = event.target;
    if (dot.classList.contains('dot')) {
        const row = parseInt(dot.dataset.row);
        const col = parseInt(dot.dataset.col);

        // Check if the click is on a dot and draw a line
        drawLine(row, col);
    }
}

// Draw a line between dots
function drawLine(row, col) {
    const lineType = determineLineType(row, col);
    if (lineType) {
        const line = document.createElement('div');
        line.classList.add('line', lineType);
        line.dataset.row = row;
        line.dataset.col = col;
        line.dataset.player = currentPlayer;
        gameBoard.appendChild(line);
        lines.push(line);

        // Check if a box is formed
        checkForBox(row, col);

        // Switch players
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// Determine the type of line to draw
function determineLineType(row, col) {
    const lineKey = `${row}-${col}`;
    if (!lines.some(line => line.dataset.row == row && line.dataset.col == col)) {
        return (row % 2 === 0) ? 'horizontal' : 'vertical';
    }
    return null;
}

// Check if a box is formed
function checkForBox(row, col) {
    const boxKey = `${row}-${col}`;
    if (!boxes.includes(boxKey)) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.dataset.row = row;
        box.dataset.col = col;
        box.dataset.player = currentPlayer;
        gameBoard.appendChild(box);
        boxes.push(boxKey);
    }
}

// Start the game
initializeGame();
