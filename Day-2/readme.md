
# Day 2: Data Types in JavaScript

## Overview
In JavaScript, data or values have **data types** that describe their characteristics. Data types are categorized into two main groups:

1. **Primitive Data Types**
2. **Non-Primitive Data Types (Object References)**

## Primitive Data Types
Primitive data types are immutable and compared by their values. They include:

- **Numbers**: Integers and floats
  ```javascript
  let age = 35;
  const gravity = 9.81;
  ```

- **Strings**: Text data enclosed in single quotes, double quotes, or backticks
  ```javascript
  let firstName = 'Asabeneh';
  ```

- **Booleans**: Represents `true` or `false`
  ```javascript
  let lightOn = true;
  let lightOff = false;
  ```

- **Null**: Represents an empty or non-existent value
  ```javascript
  let emptyValue = null;
  ```

- **Undefined**: A declared variable without a value
  ```javascript
  let notAssigned;
  ```

- **Symbol**: A unique and immutable value
  ```javascript
  const uniqueSymbol = Symbol('description');
  ```

### Primitive Data Types Examples
```javascript
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = 'JavaScript';
let py = 'Python';
console.log(js == py); // false

let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff); // false
```

## Non-Primitive Data Types
Non-primitive data types are mutable and compared by reference. They include:

- **Objects**: Collections of properties
  ```javascript
  let user = {
    name: 'Asabeneh',
    role: 'teacher',
    country: 'Finland'
  };
  ```

- **Arrays**: Ordered lists of values
  ```javascript
  let nums = [1, 2, 3];
  nums[0] = 10; // Array is mutable
  ```

### Non-Primitive Data Types Examples
```javascript
let nums = [1, 2, 3];
let numbers = [1, 2, 3];
console.log(nums == numbers); // false

let userOne = { name: 'Asabeneh', role: 'teaching', country: 'Finland' };
let userTwo = { name: 'Asabeneh', role: 'teaching', country: 'Finland' };
console.log(userOne == userTwo); // false

let nums = [1, 2, 3];
let numbers = nums;
console.log(nums == numbers); // true
```

## Numbers
JavaScript handles both integer and floating-point arithmetic.

### Declaring Number Data Types
```javascript
let age = 35;
const gravity = 9.81;
let mass = 72;
const PI = 3.14;
```

### Math Object Methods
```javascript
console.log(Math.round(PI)); // 3
console.log(Math.floor(PI)); // 3
console.log(Math.ceil(PI)); // 4
console.log(Math.min(-5, 3, 20)); // -5
console.log(Math.max(-5, 3, 20)); // 20
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random() * 11)); // Random number between 0 and 10
console.log(Math.abs(-10)); // 10
console.log(Math.sqrt(100)); // 10
console.log(Math.pow(3, 2)); // 9
console.log(Math.log(2)); // 0.693
console.log(Math.LN2); // 0.693
```

## Strings
Strings are sequences of characters enclosed in quotes.

### String Operations
```javascript
let fullName = firstName + ' ' + lastName;
console.log(fullName); // Asabeneh Yetayeh

const paragraph = `My name is Asabeneh Yetayeh. I live in Finland, Helsinki.
I am a teacher and I love teaching...`;
console.log(paragraph);
```

### String Methods
```javascript
console.log('JavaScript'.toUpperCase()); // JAVASCRIPT
console.log('JavaScript'.toLowerCase()); // javascript
console.log(' 30 Days Of JavaScript '.trim()); // '30 Days Of JavaScript'
console.log('30 Days Of JavaScript'.split(' ')); // ["30", "Days", "Of", "JavaScript"]
console.log('30 Days Of JavaScript'.includes('Days')); // true
console.log('30 Days Of JavaScript'.replace('JavaScript', 'Python')); // '30 Days Of Python'
console.log('30 Days Of JavaScript'.charAt(0)); // '3'
console.log('30 Days Of JavaScript'.charCodeAt(3)); // 68
console.log('30 Days Of JavaScript'.indexOf('Days')); // 3
console.log('30 Days Of JavaScript'.lastIndexOf('JavaScript')); // 11
console.log('30 Days Of JavaScript'.concat(' is fun!')); // '30 Days Of JavaScript is fun!'
console.log('Love is the best'.startsWith('Love')); // true
console.log('Love is the best'.endsWith('best')); // true
console.log('Love is the best'.search('best')); // 15
console.log('Love is the best'.match(/best/)); // ["best"]
console.log('love'.repeat(3)); // 'lovelovelove'
```

## Checking Data Types and Casting

### Checking Data Types
```javascript
console.log(typeof 'Asabeneh'); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

### Changing Data Types (Casting)
```javascript
let numStr = '10';
let numInt = parseInt(numStr);
console.log(numInt); // 10

let floatStr = '9.81';
let floatNum = parseFloat(floatStr);
console.log(floatNum); // 9.81
```

---


