// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    return a * x + b * y + c;
  }
  
  console.log(solveLinEquation(1, 2, 3, 4, 5));  // Example usage: 1*4 + 2*5 + 3 = 19
  
  // 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  function solveQuadEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      return [];
    }
  }
  
  console.log(solveQuadEquation(1, 0, -4));  // [2, -2]
  console.log(solveQuadEquation(1, -1, -2)); // [2, -1]
  
  // 3. Declare a function name printArray. It takes an array as a parameter and it prints out each value of the array.
  function printArray(arr) {
    arr.forEach(value => console.log(value));
  }
  
  printArray([1, 2, 3, 4, 5]);
  
  // 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
  function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    console.log(`${month}/${day}/${year} ${hours}:${minutes}`);
  }
  
  showDateTime();  // Prints the current date and time in the specified format
  
  // 5. Declare a function name swapValues. This function swaps value of x to y.
  function swapValues(x, y) {
    console.log(`x => ${y}, y => ${x}`);
  }
  
  swapValues(3, 4);  // x => 4, y => 3
  swapValues(4, 5);  // x => 5, y => 4
  
  // 6. Declare a function name reverseArray. It takes an array as a parameter and it returns the reverse of the array (don't use method).
  function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
  console.log(reverseArray([1, 2, 3, 4, 5]));  // [5, 4, 3, 2, 1]
  console.log(reverseArray(['A', 'B', 'C']));  // ['C', 'B', 'A']
  
  // 7. Declare a function name capitalizeArray. It takes an array as a parameter and it returns the capitalized array.
  function capitalizeArray(arr) {
    return arr.map(item => item.toUpperCase());
  }
  
  console.log(capitalizeArray(['apple', 'banana', 'cherry']));  // ['APPLE', 'BANANA', 'CHERRY']
  
  // 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
  function addItem(arr, item) {
    arr.push(item);
    return arr;
  }
  
  console.log(addItem([1, 2, 3], 4));  // [1, 2, 3, 4]
  
  // 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
  function removeItem(arr, index) {
    arr.splice(index, 1);
    return arr;
  }
  
  console.log(removeItem([1, 2, 3, 4], 2));  // [1, 2, 4]
  
  // 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
  function sumOfNumbers(n) {
    return n * (n + 1) / 2;
  }
  
  console.log(sumOfNumbers(5));  // 15 (1 + 2 + 3 + 4 + 5)
  
  // 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range.
  function sumOfOdds(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOfOdds(5));  // 9 (1 + 3 + 5)
  
  // 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that range.
  function sumOfEven(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumOfEven(5));  // 6 (2 + 4)
  
  // 13. Declare a function name evensAndOdds. It takes a positive integer as parameter and it counts number of evens and odds in the number.
  function evensAndOdds(num) {
    const evens = Math.floor(num / 2);
    const odds = Math.ceil(num / 2);
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
  }
  
  evensAndOdds(100);  // The number of odds are 50. The number of evens are 51.
  
  // 14. Write a function which takes any number of arguments and returns the sum of the arguments.
  function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3));  // 6
  console.log(sum(1, 2, 3, 4));  // 10
  
  // 15. Write a function which generates a randomUserIp.
  function randomUserIp() {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  }
  
  console.log(randomUserIp());  // Example: 192.168.1.1
  
  // 16. Write a function which generates a randomMacAddress.
  function randomMacAddress() {
    return 'xx:xx:xx:xx:xx:xx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16).padStart(2, '0').toUpperCase());
  }
  
  console.log(randomMacAddress());  // Example: 4F:5A:9B:CE:3D:2A
  
  // 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function returns the hexadecimal number.
  function randomHexaNumberGenerator() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  console.log(randomHexaNumberGenerator());  // Example: #ee33df
  
  // 18. Declare a function name userIdGenerator. When this function is called it generates a seven character id. The function returns the id.
  function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 7; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  
  console.log(userIdGenerator());  // Example: 41XTDbE
  