### README

# Weight Calculator on Different Planets

This project is a simple web application that calculates the weight of an object on different planets. It allows users to enter their weight on Earth and select a planet from a dropdown menu to see how much they would weigh on that planet.

## Features

- User-friendly interface to input weight and select a planet.
- Calculation of weight on selected planets based on Earth's weight.
- Real-time display of the calculated weight on the selected planet.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/weight-calculator-planets.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weight-calculator-planets
    ```
3. Open the `index.html` file in your web browser.

## Usage

1. Enter your weight on Earth (in kilograms) into the input field.
2. Select a planet from the dropdown menu.
3. Click the "Calculate" button.
4. The application will display your weight on the selected planet.

## Project Structure

- `index.html`: Contains the structure of the web page.
- `script.js`: Contains the JavaScript logic for the weight calculation.
- `styles.css`: Contains the CSS for styling the application.

## Code Explanation

### HTML (`index.html`)

The HTML file contains the structure of the web page, including:
- An input field for entering weight on Earth.
- A dropdown menu for selecting a planet.
- A button to trigger the weight calculation.
- A div to display the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weight Calculator on Different Planets</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        #calculator-container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        input, select, button {
            margin: 10px 0;
            padding: 10px;
            font-size: 1rem;
        }
        .result {
            margin-top: 20px;
            font-size: 1.2rem;
            color: #333;
        }
    </style>
</head>
<body>
    <div id="calculator-container">
        <h1>Weight Calculator on Different Planets</h1>
        <input type="number" id="weight" placeholder="Enter your weight on Earth (kg)" />
        <select id="planet">
            <option value="" disabled selected>Select a planet</option>
            <option value="0.38">Mercury</option>
            <option value="0.91">Venus</option>
            <option value="0.38">Mars</option>
            <option value="2.34">Jupiter</option>
            <option value="1.06">Saturn</option>
            <option value="0.92">Uranus</option>
            <option value="1.19">Neptune</option>
        </select>
        <button onclick="calculateWeight()">Calculate</button>
        <div class="result" id="result"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### JavaScript (`script.js`)

The JavaScript file contains the logic for the weight calculation. The `calculateWeight` function retrieves the input weight and selected planet's gravity factor, performs the calculation, and displays the result.

```javascript
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
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- The project idea and basic structure were inspired by various online coding challenges and tutorials.
- Thanks to all contributors and open-source projects that provided valuable resources.

---

