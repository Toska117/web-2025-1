const gameBoard = document.getElementById('game-board');
const turnIndicator = document.getElementById('turn-indicator');
let currentPlayer = 1;
let boxes = [];
let lines = [];

// Initialize the game board
function initializeGame() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.left = `${col * 60 + 25}px`;
            dot.style.top = `${row * 60 + 25}px`;
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
        const rect = gameBoard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Determine which line to draw
        const line = determineLine(x, y);
        if (line && !isLineDrawn(line)) {
            drawLine(line);
            checkForBox(line);
            switchPlayer();
        }
    }
}

// Determine which line to draw based on click position
function determineLine(x, y) {
    const col = Math.floor(x / 60);
    const row = Math.floor(y / 60);
    const offsetX = x % 60;
    const offsetY = y % 60;

    if (offsetX > 10 && offsetX < 50 && offsetY < 10) {
        return { type: 'horizontal', row, col };
    } else if (offsetY > 10 && offsetY < 50 && offsetX < 10) {
        return { type: 'vertical', row, col };
    }
    return null;
}

// Check if a line is already drawn
function isLineDrawn(line) {
    return lines.some(l => l.type === line.type && l.row === line.row && l.col === line.col);
}

// Draw a line on the board
function drawLine(line) {
    const lineElement = document.createElement('div');
    lineElement.classList.add('line', line.type);
    lineElement.style.left = `${line.col * 60 + (line.type === 'vertical' ? 0 : 25)}px`;
    lineElement.style.top = `${line.row * 60 + (line.type === 'horizontal' ? 0 : 25)}px`;
    gameBoard.appendChild(lineElement);
    lines.push(line);
}

// Check if a box is formed
function checkForBox(line) {
    const boxesToCheck = [];
    if (line.type === 'horizontal') {
        boxesToCheck.push({ row: line.row, col: line.col });
        boxesToCheck.push({ row: line.row - 1, col: line.col });
    } else if (line.type === 'vertical') {
        boxesToCheck.push({ row: line.row, col: line.col });
        boxesToCheck.push({ row: line.row, col: line.col - 1 });
    }

    boxesToCheck.forEach(box => {
        if (box.row >= 0 && box.col >= 0 && isBoxComplete(box)) {
            const boxElement = document.createElement('div');
            boxElement.classList.add('box', 'filled');
            boxElement.style.left = `${box.col * 60 + 25}px`;
            boxElement.style.top = `${box.row * 60 + 25}px`;
            gameBoard.appendChild(boxElement);
            boxes.push(box);
            alert(`Player ${currentPlayer} has completed a box!`);
        }
    });
}

// Check if a box is complete
function isBoxComplete(box) {
    const topLine = lines.some(l => l.type === 'horizontal' && l.row === box.row && l.col === box.col);
    const bottomLine = lines.some(l => l.type === 'horizontal' && l.row === box.row + 1 && l.col === box.col);
    const leftLine = lines.some(l => l.type === 'vertical' && l.row === box.row && l.col === box.col);
    const rightLine = lines.some(l => l.type === 'vertical' && l.row === box.row && l.col === box.col + 1);
    return topLine && bottomLine && leftLine && rightLine;
}

// Switch players
function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
}

// Start the game
initializeGame();
