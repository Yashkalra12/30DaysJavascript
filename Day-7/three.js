// 1. Modified userIdGenerator function
function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  
//   // 2. Function that takes two inputs using prompt() to generate user IDs
//   function userIdGeneratedByUser() {
//     const length = parseInt(prompt('Enter the number of characters for each ID:'));
//     const count = parseInt(prompt('Enter the number of IDs to generate:'));
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
//     let ids = [];
//     for (let j = 0; j < count; j++) {
//       let id = '';
//       for (let i = 0; i < length; i++) {
//         id += chars.charAt(Math.floor(Math.random() * chars.length));
//       }
//       ids.push(id);
//     }
//     return ids.join('\n');
//   }
  
//   console.log(userIdGeneratedByUser());
  
  // 3. Function to generate RGB colors
  function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  
  console.log(rgbColorGenerator());  // Example: rgb(125,244,255)
  
  // 4. Function to return an array of hexadecimal colors
  function arrayOfHexaColors(num) {
    const hexColors = [];
    for (let i = 0; i < num; i++) {
      hexColors.push(`#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`);
    }
    return hexColors;
  }
  
  console.log(arrayOfHexaColors(3));  // Example: ['#a3e12f', '#03ed55', '#eb3d2b']
  
  // 5. Function to return an array of RGB colors
  function arrayOfRgbColors(num) {
    const rgbColors = [];
    for (let i = 0; i < num; i++) {
      rgbColors.push(rgbColorGenerator());
    }
    return rgbColors;
  }
  
  console.log(arrayOfRgbColors(3));  // Example: ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
  
  // 6. Function to convert HEX color to RGB
  function convertHexaToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r},${g},${b})`;
  }
  
  console.log(convertHexaToRgb('#a3e12f'));  // Example: rgb(163,225,47)
  
  // 7. Function to convert RGB color to HEX
  function convertRgbToHexa(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
  
  console.log(convertRgbToHexa('rgb(163,225,47)'));  // Example: #A3E12F
  
  // 8. Function to generate any number of HEX or RGB colors
  function generateColors(type, num) {
    if (type === 'hexa') {
      return arrayOfHexaColors(num);
    } else if (type === 'rgb') {
      return arrayOfRgbColors(num);
    } else {
      throw new Error('Invalid color type. Use "hexa" or "rgb".');
    }
  }
  
  console.log(generateColors('hexa', 3));  // Example: ['#a3e12f', '#03ed55', '#eb3d2b']
  console.log(generateColors('rgb', 1));   // Example: 'rgb(33,79, 176)'
  
  // 9. Function to shuffle an array
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  console.log(shuffleArray([1, 2, 3, 4, 5]));
  
  // 10. Function to calculate factorial of a number
  function factorial(n) {
    if (n < 0) return 'Negative numbers do not have factorials';
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  
  console.log(factorial(5));  // 120
  
  // 11. Function to check if a value is empty
  function isEmpty(value) {
    return value === null || value === undefined || value === '';
  }
  
  console.log(isEmpty(''));  // true
  console.log(isEmpty('Hello'));  // false
  
  // 12. Function to sum any number of arguments
  function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3));  // 6
  console.log(sum(1, 2, 3, 4));  // 10
  
  // 13. Function to sum all items in an array, checking if all items are numbers
  function sumOfArrayItems(arr) {
    if (!arr.every(item => typeof item === 'number')) {
      return 'Array contains non-number items';
    }
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumOfArrayItems([1, 2, 3]));  // 6
  console.log(sumOfArrayItems([1, '2', 3]));  // Array contains non-number items
  
  // 14. Function to calculate the average of items in an array, checking if all items are numbers
  function average(arr) {
    if (!arr.every(item => typeof item === 'number')) {
      return 'Array contains non-number items';
    }
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
  }
  
  console.log(average([1, 2, 3]));  // 2
  console.log(average([1, '2', 3]));  // Array contains non-number items
  
  // 15. Function to modify the fifth item in an array
  function modifyArray(arr) {
    if (arr.length < 5) {
      return 'Item not found';
    }
    arr[4] = arr[4].toUpperCase();
    return arr;
  }
  
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));  // ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot']
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));  // ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
  console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));  // Item not found
  
  // 16. Function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  console.log(isPrime(7));  // true
  console.log(isPrime(4));  // false
  
  // 17. Function to check if all items in an array are unique
  function areItemsUnique(arr) {
    return new Set(arr).size === arr.length;
  }
  
  console.log(areItemsUnique([1, 2, 3]));  // true
  console.log(areItemsUnique([1, 2, 2]));  // false
  
  // 18. Function to check if all items in an array are the same data type
  function areItemsSameType(arr) {
    if (arr.length === 0) return 'Array is empty';
    return arr.every(item => typeof item === typeof arr[0]);
  }
  
  console.log(areItemsSameType([1, 2, 3]));  // true
  console.log(areItemsSameType([1, '2', 3]));  // false
  
  // 19. Function to check if a variable name is valid
  function isValidVariable(name) {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return pattern.test(name);
  }
  
  console.log(isValidVariable('validVariable'));  // true
  console.log(isValidVariable('invalid-variable'));  // false
  
  