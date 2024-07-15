### Higher Order Functions in JavaScript

#### Definition
- **Higher Order Functions**: Functions that take other functions as parameters or return a function as a value.
- **Callback**: A function passed as a parameter to another function.

#### Examples
- **Callback Function**:
  ```js
  const callback = n => n ** 2;
  function cube(callback, n) {
    return callback(n) * n;
  }
  console.log(cube(callback, 3)); // 27
  ```

- **Returning Function**:
  ```js
  const higherOrder = n => m => t => 2 * n + 3 * m + t;
  console.log(higherOrder(2)(3)(10)); // 23
  ```

#### Usage
- **forEach Method**:
  ```js
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(num => console.log(num)); // 1 2 3 4 5
  ```

#### Time Functions
- **setInterval**: Executes a function repeatedly at a specified interval.
  ```js
  function sayHello() {
    console.log('Hello');
  }
  setInterval(sayHello, 1000); // Prints "Hello" every second
  ```

- **setTimeout**: Executes a function once after a specified delay.
  ```js
  function sayHello() {
    console.log('Hello');
  }
  setTimeout(sayHello, 2000); // Prints "Hello" after 2 seconds
  ```

#### Functional Programming Methods
- **forEach**: Iterates over array elements.
  ```js
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(num => console.log(num)); // 1 2 3 4 5
  ```

- **map**: Transforms array elements and returns a new array.
  ```js
  const numbers = [1, 2, 3, 4, 5];
  const numbersSquare = numbers.map(num => num * num);
  console.log(numbersSquare); // [1, 4, 9, 16, 25]
  ```

- **filter**: Filters array elements based on a condition.
  ```js
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
  const countriesContainingLand = countries.filter(country => country.includes('land'));
  console.log(countriesContainingLand); // ['Finland']
  ```

- **reduce**: Reduces an array to a single value.
  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(sum); // 15
  ```

- **every**: Checks if all elements satisfy a condition.
  ```js
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const areAllStr = names.every(name => typeof name === 'string');
  console.log(areAllStr); // true
  ```

- **find**: Returns the first element that satisfies a condition.
  ```js
  const ages = [24, 22, 25, 32, 35, 18];
  const age = ages.find(age => age < 20);
  console.log(age); // 18
  ```

- **findIndex**: Returns the index of the first element that satisfies a condition.
  ```js
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const result = names.findIndex(name => name.length > 7);
  console.log(result); // 0
  ```

- **some**: Checks if at least one element satisfies a condition.
  ```js
  const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
  const areAllStr = names.some(name => typeof name === 'number');
  console.log(areAllStr); // false
  ```

- **sort**: Sorts array elements.
  ```js
  const numbers = [9.81, 3.14, 100, 37];
  numbers.sort((a, b) => a - b); // Ascending
  console.log(numbers); // [3.14, 9.81, 37, 100]
  numbers.sort((a, b) => b - a); // Descending
  console.log(numbers); // [100, 37, 9.81, 3.14]
  ```