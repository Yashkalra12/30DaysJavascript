## Day 4: Conditionals

Conditional statements are used to make decisions based on different conditions. By default, statements in JavaScript are executed sequentially from top to bottom. However, the sequential flow of execution can be altered in two ways:

1. **Conditional execution**: A block of one or more statements will be executed if a certain expression is true.
2. **Repetitive execution**: A block of one or more statements will be repetitively executed as long as a certain expression is true.

In this section, we will cover `if`, `else`, and `else if` statements. The comparison and logical operators we learned in the previous sections will be useful here.

### Conditional Statements

#### if
The `if` statement is used to check if a condition is true and execute a block of code if it is.

// Syntax
```javascript
if (condition) {
  // This part of the code runs for a truthy condition
}
```

**Example:**
```javascript
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}
// Output: 3 is a positive number
```

If the condition is false, the block of code will not be executed.

```javascript
let isRaining = true;
if (isRaining) {
  console.log('Remember to take your rain coat.');
}
```

#### if else
If the condition is true, the first block of code will be executed; otherwise, the `else` block will be executed.

// Syntax
```javascript
if (condition) {
  // This part of the code runs for a truthy condition
} else {
  // This part of the code runs for a false condition
}
```

**Example:**
```javascript
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
// Output: 3 is a positive number

num = -3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
// Output: -3 is a negative number

let isRaining = true;
if (isRaining) {
  console.log('You need a rain coat.');
} else {
  console.log('No need for a rain coat.');
}
// Output: You need a rain coat.

isRaining = false;
if (isRaining) {
  console.log('You need a rain coat.');
} else {
  console.log('No need for a rain coat.');
}
// Output: No need for a rain coat.
```

#### if else if else
Use `else if` when there are multiple conditions to be checked.

// Syntax
```javascript
if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}
```

**Example:**
```javascript
let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}
// Output: 0 is zero

let weather = 'sunny';
if (weather === 'rainy') {
  console.log('You need a rain coat.');
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.');
} else if (weather === 'sunny') {
  console.log('Go out freely.');
} else {
  console.log('No need for a rain coat.');
}
// Output: Go out freely.
```

### switch
The `switch` statement is an alternative for `if else if else`. It starts with the `switch` keyword followed by a parenthesis and a code block containing different cases. The `break` statement terminates execution to prevent code execution from continuing into the next case.

```javascript
switch (caseValue) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  case 3:
    // code
    break;
  default:
    // code
}
```

**Example:**
```javascript
let weather = 'cloudy';
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.');
    break;
  case 'cloudy':
    console.log('It might be cold, you need a jacket.');
    break;
  case 'sunny':
    console.log('Go out freely.');
    break;
  default:
    console.log('No need for a rain coat.');
}
// Output: It might be cold, you need a jacket.
```

### Ternary Operators
Another way to write conditionals is by using the ternary operator.

```javascript
let isRaining = true;
isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.');
```

🌕 You are extraordinary and have remarkable potential. You have just completed day 4 challenges and are four steps ahead on your way to greatness. Now, do some exercises for your brain and muscles.
