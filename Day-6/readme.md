## Day 6: Loops

### Introduction
Loops allow us to automate repetitive tasks efficiently. Imagine having to print numbers from 0 to 100 manually—it would be tedious and time-consuming. With loops, such tasks become trivial.

### Commonly Used Loops in JavaScript

#### For Loop
The `for` loop is used for iterating over a sequence (like a range of numbers or an array).

```javascript
// Basic structure
for (initialization; condition; increment/decrement) {
  // code goes here
}

// Examples
for (let i = 0; i <= 5; i++) {
  console.log(i);  // 0 1 2 3 4 5
}

for (let i = 5; i >= 0; i--) {
  console.log(i);  // 5 4 3 2 1 0
}

for (let i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);  // 0 * 0 = 0, 1 * 1 = 1, etc.
}

// Using arrays
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);  // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

#### While Loop
The `while` loop continues as long as a specified condition is true.

```javascript
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}  // 0 1 2 3 4 5
```

#### Do While Loop
The `do...while` loop is similar to the `while` loop, but it executes the code block once before checking the condition.

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);  // 0 1 2 3 4 5
```

#### For...of Loop
The `for...of` loop is useful for iterating over arrays when the index is not needed.

```javascript
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);  // 1 2 3 4 5
}
```

### Control Statements

#### Break
The `break` statement exits the loop immediately.

```javascript
for (let i = 0; i <= 5; i++) {
  if (i == 3) break;
  console.log(i);  // 0 1 2
}
```

#### Continue
The `continue` statement skips the current iteration and proceeds to the next one.

```javascript
for (let i = 0; i <= 5; i++) {
  if (i == 3) continue;
  console.log(i);  // 0 1 2 4 5
}
```

### Conclusion
By mastering loops, you gain the power to automate repetitive and tedious tasks, making your code more efficient and concise. You've completed Day 6 challenges and are now 6 steps closer to greatness. Keep up the good work and don't forget to exercise your brain and muscles! 🌕