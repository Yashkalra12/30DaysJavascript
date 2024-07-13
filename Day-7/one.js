// 1. Declare a function fullName and it prints out your full name.
function fullName() {
    console.log("Yash Kalra");
  }
  
  fullName();  // Outputs: Yash Kalra
  
  // 2. Declare a function fullName that takes firstName, lastName as parameters and returns your full name.
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  console.log(fullName("Yash", "Kalra"));  // Outputs: Yash Kalra
  
  // 3. Declare a function addNumbers that takes two parameters and returns the sum.
  function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  console.log(addNumbers(5, 7));  // Outputs: 12
  
  // 4. Write a function which calculates areaOfRectangle.
  function areaOfRectangle(length, width) {
    return length * width;
  }
  
  console.log(areaOfRectangle(5, 10));  // Outputs: 50
  
  // 5. Write a function which calculates perimeterOfRectangle.
  function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
  }
  
  console.log(perimeterOfRectangle(5, 10));  // Outputs: 30
  
  // 6. Write a function which calculates volumeOfRectPrism.
  function volumeOfRectPrism(length, width, height) {
    return length * width * height;
  }
  
  console.log(volumeOfRectPrism(5, 10, 2));  // Outputs: 100
  
  // 7. Write a function which calculates areaOfCircle.
  function areaOfCircle(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log(areaOfCircle(7));  // Outputs: 153.93804002589985
  
  // 8. Write a function which calculates circumOfCircle.
  function circumOfCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(circumOfCircle(7));  // Outputs: 43.982297150257104
  
  // 9. Write a function which calculates density.
  function density(mass, volume) {
    return mass / volume;
  }
  
  console.log(density(10, 5));  // Outputs: 2
  
  // 10. Write a function which calculates speed.
  function speed(distance, time) {
    return distance / time;
  }
  
  console.log(speed(100, 2));  // Outputs: 50
  
  // 11. Write a function which calculates weight.
  function weight(mass, gravity = 9.81) {
    return mass * gravity;
  }
  
  console.log(weight(10));  // Outputs: 98.1
  console.log(weight(10, 1.62));  // Outputs: 16.2 (gravity on the Moon)
  
  // 12. Write a function which converts Celsius to Fahrenheit.
  function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  console.log(convertCelsiusToFahrenheit(0));  // Outputs: 32
  console.log(convertCelsiusToFahrenheit(25));  // Outputs: 77
  
  // 13. Write a function which calculates BMI and categorizes it.
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }
  
  console.log(calculateBMI(60, 1.75));  // Outputs: Normal weight
  
  // 14. Write a function called checkSeason, it takes a month parameter and returns the season.
  function checkSeason(month) {
    const seasons = {
      'December': 'Winter', 'January': 'Winter', 'February': 'Winter',
      'March': 'Spring', 'April': 'Spring', 'May': 'Spring',
      'June': 'Summer', 'July': 'Summer', 'August': 'Summer',
      'September': 'Autumn', 'October': 'Autumn', 'November': 'Autumn'
    };
    return seasons[month] || 'Invalid month';
  }
  
  console.log(checkSeason('March'));  // Outputs: Spring
  console.log(checkSeason('August'));  // Outputs: Summer
  
  // 15. Write a function called findMax that takes three arguments and returns their maximum.
  function findMax(a, b, c) {
    return (a > b ? (a > c ? a : c) : (b > c ? b : c));
  }
  
  console.log(findMax(0, 10, 5));  // Outputs: 10
  console.log(findMax(0, -10, -2));  // Outputs: 0
  