document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    const redLight = document.querySelector('.red');
    const yellowLight = document.querySelector('.yellow');
    const greenLight = document.querySelector('.green');
    const message = document.getElementById('message');
    let startTime;

    message.textContent = '';

    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';

    setTimeout(() => {
        redLight.style.backgroundColor = 'red';
        setTimeout(() => {
            yellowLight.style.backgroundColor = 'yellow';
            setTimeout(() => {
                greenLight.style.backgroundColor = 'green';
                startTime = new Date().getTime();
                document.addEventListener('keydown', checkReaction);
            }, Math.random() * 3000 + 1000);
        }, 1000);
    }, 1000);

    function checkReaction(event) {
        if (event.key === ' ') {
            const reactionTime = new Date().getTime() - startTime;
            message.textContent = `Tu tiempo de reacción es: ${reactionTime} ms`;
            document.removeEventListener('keydown', checkReaction);
            greenLight.style.backgroundColor = 'gray';
        }
    }
}
