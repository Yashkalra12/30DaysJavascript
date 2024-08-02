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
  