const VALUE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SYMBOL = ["♥", "♦", "♠", "♣"]; 

let timerId = null;
const INTERVAL_MS = 10000;

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomCard() {
    const value = getRandomElement(VALUE);
    const symbol = getRandomElement(SYMBOL);

    const isRedSymbol = (symbol === "♥" || symbol === "♦");
    const symbolColorClass = isRedSymbol ? "red-symbol" : "black-symbol";

    document.getElementById('value-top').textContent = value;
    document.getElementById('symbol-top').textContent = symbol;

    document.getElementById('value-center').textContent = value;

    document.getElementById('symbol-bottom').textContent = symbol;
    document.getElementById('value-bottom').textContent = value;

    const elementsToColor = [
        document.getElementById('value-top'),
        document.getElementById('symbol-top'),
        document.getElementById('value-center'),
        document.getElementById('symbol-bottom'),
        document.getElementById('value-bottom')
    ];

    elementsToColor.forEach(el => {
        el.classList.remove('red-symbol','black-symbol'); 
        el.classList.add(symbolColorClass);
    });
}

function resizeCard() {
    const widthInput = document.getElementById('card-width');
    const heightInput = document.getElementById('card-height');
    const cardElement = document.getElementById('random-card');

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (width >= 100 && height >= 140) { 
        cardElement.style.width = `${width}px`;
        cardElement.style.height = `${height}px`;

        const newFontSize = Math.max(3, width / 30); 
        const centerRank = document.getElementById('value-center'); 
        centerRank.style.fontSize = `${newFontSize}em`;
    }
}

function toggleTimer() {
    const button = document.getElementById('timer-toggle-button');

    if (timerId) {
        clearInterval(timerId);
        timerId = null;
        button.textContent = 'Iniciar Temporizador (10s)';
        button.classList.remove('active');
    } else {
        generateRandomCard(); 
        
        timerId = setInterval(generateRandomCard, INTERVAL_MS);
        button.textContent = 'Detener Temporizador';
        button.classList.add('active');
    }
}

window.onload = function() {
    resizeCard();
    generateRandomCard(); 

    document.getElementById('generate-button').addEventListener('click', generateRandomCard);

    const widthInput = document.getElementById('card-width');
    const heightInput = document.getElementById('card-height');

    widthInput.addEventListener('input', resizeCard);
    heightInput.addEventListener('input', resizeCard);

    document.getElementById('timer-toggle-button').addEventListener('click', toggleTimer);
};