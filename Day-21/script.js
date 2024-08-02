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
  
  // Initialize functions
  changeYearColor();
  changeDateTimeBackgroundColor();
  setDateTime();
  setChallengeStatusColors();
  