

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Iterate 0 to 10 using for loop, while, and do while loop
console.log("For loop 0 to 10:");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("While loop 0 to 10:");
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

console.log("Do while loop 0 to 10:");
i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Iterate 10 to 0 using for loop, while, and do while loop
console.log("For loop 10 to 0:");
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

console.log("While loop 10 to 0:");
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

console.log("Do while loop 10 to 0:");
i = 10;
do {
  console.log(i);
  i--;
} while (i >= 0);

// Iterate 0 to n using for loop
const n = 15;
console.log(`For loop 0 to ${n}:`);
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():
console.log("Pattern:");
let pattern = "";
for (let i = 1; i <= 7; i++) {
  pattern += "#";
  console.log(pattern);
}

// Use loop to print the following pattern:
console.log("Multiplication pattern:");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

// Using loop print the following pattern
console.log("Exponent pattern:");
console.log("i    i^2   i^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}    ${i ** 2}     ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
console.log("Even numbers:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("Odd numbers:");
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("Prime numbers:");
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}.`);
console.log([sumEvens, sumOdds]);

// Develop a small script which generates array of 5 random numbers
const randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}
console.log("Random numbers:", randomNumbers);

// Develop a small script which generates array of 5 unique random numbers
const uniqueRandomNumbers = new Set();
while (uniqueRandomNumbers.size < 5) {
  uniqueRandomNumbers.add(Math.floor(Math.random() * 100));
}
console.log("Unique random numbers:", Array.from(uniqueRandomNumbers));

// Develop a small script which generates a six characters random id
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 6; i++) {
  randomId += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log("Random ID:", randomId);


