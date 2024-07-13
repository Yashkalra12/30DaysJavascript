Here are concise notes for your README on JavaScript functions:

---

## Functions in JavaScript

### What is a Function?
A **function** is a reusable block of code designed to perform a specific task. Functions help to make code:

- **Clean and easy to read**
- **Reusable**
- **Easy to test**

### Function Basics

**Declaration Syntax:**
```javascript
function functionName() {
  // code
}
```

**Calling a Function:**
```javascript
functionName(); // Invoke the function
```

### Function Without Parameters

**Example:**
```javascript
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq); // Outputs: 4
}

square();
```

### Function With Return Values

**Example:**
```javascript
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  return numOne + numTwo;
}

console.log(addTwoNumbers()); // Outputs: 30
```

### Function With Parameters

**One Parameter:**
```javascript
function areaOfCircle(r) {
  return Math.PI * r * r;
}

console.log(areaOfCircle(10)); // Outputs: 314.16
```

**Two Parameters:**
```javascript
function sumTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(sumTwoNumbers(10, 20)); // Outputs: 30
```

**Multiple Parameters:**
```javascript
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
```

### Function Types

1. **Function Declaration**
   ```javascript
   function myFunction() {
     // code
   }
   ```

2. **Function Expression**
   ```javascript
   const myFunction = function() {
     // code
   };
   ```

3. **Anonymous Function**
   ```javascript
   const anonFunc = function() {
     console.log('I am an anonymous function');
   };
   ```

4. **Arrow Function**
   ```javascript
   const add = (a, b) => a + b;
   ```

5. **Self-Invoking Function**
   ```javascript
   (function() {
     console.log('Self-invoking');
   })();
   ```

### Function With Default Parameters

**Example:**
```javascript
function greetings(name = 'Peter') {
  return `${name}, welcome!`;
}

console.log(greetings()); // Outputs: Peter, welcome!
console.log(greetings('Asabeneh')); // Outputs: Asabeneh, welcome!
```

### Function With Unlimited Parameters

**Function Declaration:**
```javascript
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
```

**Arrow Function:**
```javascript
const sumAllNums = (...args) => args.reduce((sum, num) => sum + num, 0);
```

### Comparison: Function Declaration vs Arrow Function

**Function Declaration:**
```javascript
function square(n) {
  return n * n;
}
```

**Arrow Function:**
```javascript
const square = n => n * n;
```

### Summary of Function Types and Syntax

| Type               | Syntax                                       | Description                                           |
|--------------------|----------------------------------------------|-------------------------------------------------------|
| Function Declaration | `function name() { /* code */ }`            | Traditional way to define a function.                |
| Function Expression | `const name = function() { /* code */ }`    | Function assigned to a variable.                     |
| Anonymous Function | `const name = function() { /* code */ }`    | Function without a name.                            |
| Arrow Function     | `const name = () => { /* code */ }`         | Shorter syntax for functions.                         |
| Self-Invoking Function | `(function() { /* code */ })()`           | Function that runs immediately.                      |
| Default Parameters | `function name(param = default) { /* code */ }` | Parameters with default values.                      |
| Unlimited Parameters | `function name(...args) { /* code */ }`     | Function accepting any number of arguments.         |

---

These notes provide a structured overview of functions in JavaScript, including basic concepts, different function types, and syntax examples.