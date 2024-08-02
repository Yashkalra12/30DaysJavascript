## README: DOM (Document Object Model) - Day 2

### Creating an Element
To create an HTML element in JavaScript, use the `document.createElement()` method. It takes an HTML tag name as a string parameter.

```js
let title = document.createElement('h1');
title.className = 'title';
title.style.fontSize = '24px';
title.textContent = 'Creating HTML element DOM Day 2';

console.log(title);
```

### Creating Multiple Elements
Use a loop to create multiple elements dynamically. After creating the elements, assign values to their properties.

```js
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1');
  title.className = 'title';
  title.style.fontSize = '24px';
  title.textContent = i;
  console.log(title);
}
```

### Appending Child to a Parent Element
To display a created element in the HTML document, append it to the parent element using the `appendChild()` method.

```js
let title;
for (let i = 0; i < 3; i++) {
  title = document.createElement('h1');
  title.className = 'title';
  title.style.fontSize = '24px';
  title.textContent = i;
  document.body.appendChild(title);
}
```

### Removing a Child Element from a Parent Node
To remove an HTML element, use the `removeChild()` method.

```html
<ul>
  <li>30DaysOfPython Challenge Done</li>
  <li>30DaysOfJavaScript Challenge Done</li>
  <li>30DaysOfReact Challenge Coming</li>
</ul>

<script>
  const ul = document.querySelector('ul');
  const lists = document.querySelectorAll('li');
  for (const list of lists) {
    ul.removeChild(list);
  }
</script>
```

You can also clear all child elements using `innerHTML`:

```html
<ul>
  <li>30DaysOfPython Challenge Done</li>
  <li>30DaysOfJavaScript Challenge Done</li>
  <li>30DaysOfReact Challenge Coming</li>
</ul>

<script>
  const ul = document.querySelector('ul');
  ul.innerHTML = '';
</script>
```

### Exercises
1. Create a `div` container in the HTML document and dynamically create numbers from 1 to 100.
2. Set the background color for:
   - Even numbers: green
   - Odd numbers: yellow
   - Prime numbers: red

### Complete Solution in One JS File

Ensure you have the following HTML structure in your `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone: DOM</title>
    <style>
      .completed {
        background-color: green;
      }
      .ongoing {
        background-color: yellow;
      }
      .upcoming {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>Asabeneh Yetayeh challenges in 2020</h1>
      <h2 id="year">30DaysOfJavaScript Challenge</h2>
      <h3 id="date-time"></h3>
      <ul>
        <li class="completed">30DaysOfPython Challenge Done</li>
        <li class="ongoing">30DaysOfJavaScript Challenge Ongoing</li>
        <li class="upcoming">30DaysOfReact Challenge Coming</li>
        <li class="upcoming">30DaysOfFullStack Challenge Coming</li>
        <li class="upcoming">30DaysOfDataAnalysis Challenge Coming</li>
        <li class="upcoming">30DaysOfReactNative Challenge Coming</li>
        <li class="upcoming">30DaysOfMachineLearning Challenge Coming</li>
      </ul>
      <div id="container"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

Add the following JavaScript code in your `script.js` file:

```javascript
// Function to change the year color every second
function changeYearColor() {
  const year = document.getElementById('year');
  setInterval(() => {
    year.style.color = getRandomColor();
  }, 1000);
}

// Function to change the date and time background color every second
function changeDateTimeBackgroundColor() {
  const dateTime = document.getElementById('date-time');
  setInterval(() => {
    dateTime.style.backgroundColor = getRandomColor();
  }, 1000);
}

// Function to get a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to set the current date and time
function setDateTime() {
  const dateTime = document.getElementById('date-time');
  setInterval(() => {
    const now = new Date();
    dateTime.textContent = now.toLocaleString();
  }, 1000);
}

// Function to set challenge status colors
function setChallengeStatusColors() {
  const challenges = document.querySelectorAll('li');
  challenges.forEach(challenge => {
    if (challenge.textContent.includes('Done')) {
      challenge.classList.add('completed');
    } else if (challenge.textContent.includes('Ongoing')) {
      challenge.classList.add('ongoing');
    } else if (challenge.textContent.includes('Coming')) {
      challenge.classList.add('upcoming');
    }
  });
}

// Function to create numbers from 1 to 100 and append to container
function createNumberElements() {
  const container = document.getElementById('container');
  for (let i = 1; i <= 100; i++) {
    const numberElement = document.createElement('div');
    numberElement.textContent = i;
    numberElement.style.display = 'inline-block';
    numberElement.style.width = '50px';
    numberElement.style.height = '50px';
    numberElement.style.textAlign = 'center';
    numberElement.style.lineHeight = '50px';
    numberElement.style.margin = '5px';

    if (isPrime(i)) {
      numberElement.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
      numberElement.style.backgroundColor = 'green';
    } else {
      numberElement.style.backgroundColor = 'yellow';
    }

    container.appendChild(numberElement);
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Initialize functions
changeYearColor();
changeDateTimeBackgroundColor();
setDateTime();
setChallengeStatusColors();
createNumberElements();
```