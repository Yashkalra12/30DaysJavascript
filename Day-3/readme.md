Here's the README for Day 3 of your 30 Days of JavaScript Challenge:

---

# Day 3: Booleans, Operators, Date Object

## Booleans

A boolean data type represents one of two values: `true` or `false`. Boolean values are crucial when using comparison operators, as any comparison returns a boolean value.

### Example: Boolean Values
```javascript
let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let trueValue = 4 > 3;    // true
let falseValue = 4 < 3;  // false
```
We agreed that boolean values are either `true` or `false`.

## Truthy and Falsy Values

### Truthy Values
- All numbers (positive and negative) except zero
- All strings except an empty string (`''`)
- The boolean `true`

### Falsy Values
- `0`
- `0n`
- `null`
- `undefined`
- `NaN`
- The boolean `false`
- Empty strings (`''`, `""`, ``)

## Undefined

If we declare a variable without assigning a value, its value will be `undefined`. Similarly, if a function does not return a value, it will be `undefined`.

```javascript
let firstName;
console.log(firstName); // undefined, because it is not assigned to a value yet
```

## Null

```javascript
let empty = null;
console.log(empty); // -> null, means no value
```

## Operators

### Assignment Operators

An equal sign in JavaScript is an assignment operator. It assigns a value to a variable.

```javascript
let firstName = 'Asabeneh';
let country = 'Finland';
```

### Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

- Addition (`+`): `a + b`
- Subtraction (`-`): `a - b`
- Multiplication (`*`): `a * b`
- Division (`/`): `a / b`
- Modulus (`%`): `a % b`
- Exponential (`**`): `a ** b`

### Example:
```javascript
let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let powerOf = numOne ** numTwo;

console.log(sum, diff, mult, div, remainder, powerOf); // 7, 1, 12, 1.33, 1, 64
```

### Example: Calculations
```javascript
const PI = 3.14;
let radius = 100; // length in meter

// Calculate the area of a circle
const areaOfCircle = PI * radius * radius;
console.log(areaOfCircle);  // 314 m

const gravity = 9.81; // in m/s2
let mass = 72; // in Kilogram

// Calculate the weight of an object
const weight = mass * gravity;
console.log(weight); // 706.32 N (Newton)

const boilingPoint = 100; // temperature in °C, boiling point of water
const bodyTemp = 37; // body temperature in °C

// Concatenating string with numbers using string interpolation
console.log(`The boiling point of water is ${boilingPoint} °C.\nHuman body temperature is ${bodyTemp} °C.\nThe gravity of earth is ${gravity} m/s².`);
```

### Comparison Operators

Comparison operators are used to compare two values.

```javascript
console.log(3 > 2); // true
console.log(3 >= 2); // true
console.log(3 < 2); // false
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 == 2); // false
console.log(3 != 2); // true
console.log(3 == '3'); // true
console.log(3 === '3'); // false
console.log(3 !== '3'); // true
console.log(3 != 3); // false
console.log(3 !== 3); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 == ''); // true
console.log(0 == ' '); // true
console.log(0 === ''); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log('mango'.length == 'avocado'.length); // false
console.log('mango'.length != 'avocado'.length); // true
console.log('mango'.length < 'avocado'.length); // true
console.log('milk'.length == 'meat'.length); // true
console.log('milk'.length != 'meat'.length); // false
console.log('tomato'.length == 'potato'.length); // true
console.log('python'.length > 'dragon'.length); // false
```

As a rule of thumb, if a value is not true with `==`, it will not be equal with `===`. Using `===` is safer than using `==`.

### Logical Operators

The common logical operators are `&&` (ampersand), `||` (pipe), and `!` (negation).

```javascript
// && operator example
const check1 = 4 > 3 && 10 > 5; // true && true -> true
const check2 = 4 > 3 && 10 < 5; // true && false -> false
const check3 = 4 < 3 && 10 < 5; // false && false -> false

// || operator example
const check4 = 4 > 3 || 10 > 5; // true || true -> true
const check5 = 4 > 3 || 10 < 5; // true || false -> true
const check6 = 4 < 3 || 10 < 5; // false || false -> false

// ! operator example
let check7 = 4 > 3; // true
let check8 = !(4 > 3); // false
let isLightOn = true;
let isLightOff = !isLightOn; // false
let isMarried = !false; // true
```

### Increment and Decrement Operators

#### Increment Operator
The increment operator increases a value stored in a variable.

- Pre-increment
```javascript
let count = 0;
console.log(++count); // 1
console.log(count); // 1
```

- Post-increment
```javascript
let count = 0;
console.log(count++); // 0
console.log(count); // 1
```

#### Decrement Operator
The decrement operator decreases a value stored in a variable.

- Pre-decrement
```javascript
let count = 0;
console.log(--count); // -1
console.log(count); // -1
```

- Post-decrement
```javascript
let count = 0;
console.log(count--); // 0
console.log(count); // -1
```

### Ternary Operator

The ternary operator allows writing conditions succinctly.

```javascript
let isRaining = true;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

isRaining = false;
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.');

let number = 5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

number = -5;
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);
```

### Window Methods

#### alert()

The `alert()` method displays an alert box with a specified message and an OK button.

```javascript
alert('Welcome to 30DaysOfJavaScript');
```

#### prompt()

The `prompt()` method displays a prompt box with an input to take input values, which can be stored in a variable. It takes two arguments, the second one being optional.

```javascript
let number = prompt('Enter number', 'number goes here');
console.log(number);
```

#### confirm()

The `confirm()` method displays a dialog box with a specified message, along with OK and Cancel buttons. Clicking OK yields a true value, while clicking Cancel yields a false value.

```javascript
const agree = confirm('Are you sure you like to delete?');
console.log(agree); // true or false based on user input
```

### Date Object

The JavaScript Date object is used to work with dates and times.

```javascript
const now = new Date();
console.log(now); // Outputs the current date and time
```

#### Getting Date Information

- Full Year
```javascript
const now = new Date();
console.log(now.getFullYear()); // 2024
```

- Month
```javascript
const now = new Date();
console.log(now.getMonth()); // 6 (July, as months are 0-indexed)
```
