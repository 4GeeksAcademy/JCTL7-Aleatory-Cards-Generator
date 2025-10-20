const VALUE = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SYMBOL = ["♥", "♦", "♠", "♣"]; 


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

window.onload = function() {
    generateRandomCard(); 

    document.getElementById('generate-button').addEventListener('click', generateRandomCard);
};
