const trafficLight = document.getElementById('traffic-light');
const clickButton = document.getElementById('click-button');
const result = document.getElementById('result');
let startTime;
let timeoutId;

// Function to start the game
function startGame() {
    // Disable the button and reset the result
    clickButton.disabled = true;
    result.textContent = '';

    // Turn on the red light
    trafficLight.querySelector('.red').classList.add('active');
    trafficLight.querySelector('.yellow').classList.remove('active');
    trafficLight.querySelector('.green').classList.remove('active');

    // Wait for a random time (1-3 seconds) before turning on the green light
    const randomTime = Math.floor(Math.random() * 3000) + 1000;
    timeoutId = setTimeout(() => {
        trafficLight.querySelector('.red').classList.remove('active');
        trafficLight.querySelector('.yellow').classList.add('active');

        // Wait for 1 second before turning on the green light
        setTimeout(() => {
            trafficLight.querySelector('.yellow').classList.remove('active');
            trafficLight.querySelector('.green').classList.add('active');
            clickButton.disabled = false;
            startTime = Date.now(); // Record the start time
        }, 1000);
    }, randomTime);
}

// Function to handle the button click
function handleClick() {
    if (clickButton.disabled) return; // Ignore clicks when the button is disabled

    const reactionTime = Date.now() - startTime; // Calculate reaction time
    result.textContent = `Your reaction time: ${reactionTime} ms`;

    // Restart the game after 2 seconds
    setTimeout(startGame, 2000);
}

// Add event listener to the button
clickButton.addEventListener('click', handleClick);

// Start the game when the page loads
startGame();
