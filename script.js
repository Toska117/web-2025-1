const flags = [
    { country: 'Argentina', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg' },
    { country: 'Bolivia', flag: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg' },
    { country: 'Brasil', flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg' },
    { country: 'Chile', flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg' },
    { country: 'Colombia', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg' },
    { country: 'Ecuador', flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg' },
    { country: 'Paraguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg' },
    { country: 'Perú', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg' },
    { country: 'Uruguay', flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg' },
    { country: 'Venezuela', flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg' }
];

let currentFlagIndex = 0;

document.getElementById('check-button').addEventListener('click', checkGuess);
document.getElementById('next-button').addEventListener('click', showNextFlag);

function showFlag() {
    const flagImg = document.getElementById('flag');
    flagImg.src = flags[currentFlagIndex].flag;
}

function checkGuess() {
    const guess = document.getElementById('guess').value.trim();
    const result = document.getElementById('result');
    if (guess.toLowerCase() === flags[currentFlagIndex].country.toLowerCase()) {
        result.textContent = '¡Correcto!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrecto. La respuesta correcta es ' + flags[currentFlagIndex].country + '.';
        result.style.color = 'red';
    }
    document.getElementById('check-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'block';
}

function showNextFlag() {
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    showFlag();
    document.getElementById('guess').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('check-button').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
}

// Mostrar la primera bandera al cargar la página
showFlag();
