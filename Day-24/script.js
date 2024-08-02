// script.js
function calculateWeight() {
    const weight = document.getElementById('weight').value;
    const planet = document.getElementById('planet').value;
    const result = document.getElementById('result');

    if (weight === '' || planet === '') {
        result.textContent = 'Please enter your weight and select a planet.';
        return;
    }

    const planetWeight = weight * planet;
    result.textContent = `Your weight on the selected planet is ${planetWeight.toFixed(2)} kg.`;
}
