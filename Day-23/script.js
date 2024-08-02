// script.js
document.addEventListener('DOMContentLoaded', () => {
    const numberContainer = document.getElementById('number-container');
    const keyCodeDiv = document.querySelector('.key-code');

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    for (let i = 0; i <= 100; i++) {
        const numberBox = document.createElement('div');
        numberBox.classList.add('number-box');
        numberBox.textContent = i;

        if (isPrime(i)) {
            numberBox.classList.add('prime');
        } else if (i % 2 === 0) {
            numberBox.classList.add('even');
        } else {
            numberBox.classList.add('odd');
        }

        numberContainer.appendChild(numberBox);
    }

    document.addEventListener('keydown', (e) => {
        keyCodeDiv.textContent = `Key: ${e.key} | Code: ${e.keyCode}`;
    });
});
