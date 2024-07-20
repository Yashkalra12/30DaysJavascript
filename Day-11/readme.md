### Day 11: Destructuring and Spread

#### Destructuring
Destructuring is a way to unpack arrays and objects and assign their values to distinct variables.

##### Destructuring Arrays

```javascript
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree); // 1 2 3

const names = ['Asabeneh', 'Brook', 'David', 'John'];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); // Asabeneh Brook David John

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp); // 2.72 3.14 9.81 37 100

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd); // ["HTML", "CSS", "JS", "React"]
console.log(backEnd); // ["Node", "Express", "MongoDB"]
```

To skip values in the array, use additional commas:

```javascript
const numbers = [1, 2, 3];
let [numOne, , numThree] = numbers; // 2 is omitted
console.log(numOne, numThree); // 1 3

const names = ['Asabeneh', 'Brook', 'David', 'John'];
let [, secondPerson, , fourthPerson] = names; // first and third person omitted
console.log(secondPerson, fourthPerson); // Brook John
```

Using default values:

```javascript
const names = [undefined, 'Brook', 'David'];
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); // Asabeneh Brook David John
```

Using the spread operator to get remaining elements as an array:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]
```

##### Destructuring During Iteration

```javascript
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
for (const [country, city] of countries) {
  console.log(country, city);
}
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}
// HTML CSS JS
// Node Express MongoDB
```

##### Destructuring Objects

The variable names should match the keys in the object:

```javascript
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter); // 20 10 200 undefined
```

Renaming variables during destructuring:

```javascript
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};
let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p); // 20 10 200 undefined
```

Providing default values:

```javascript
const rectangle = {
  width: 20,
  height: 10,
  area: 200
};
let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height, area, perimeter); // 20 10 200 60

// Modifying the object
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
};
let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height, area, perimeter); // 30 10 200 80
```

Destructuring keys as function parameters:

```javascript
const rect = {
  width: 20,
  height: 10
};
const calculatePerimeter = ({ width, height }) => 2 * (width + height);
console.log(calculatePerimeter(rect)); // 60
```

Destructuring objects during iteration:

```javascript
const todoList = [
  { task: 'Prepare JS Test', time: '4/1/2020 8:30', completed: true },
  { task: 'Give JS Test', time: '4/1/2020 10:00', completed: false },
  { task: 'Assess Test Result', time: '4/1/2020 1:00', completed: false }
];
for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false
```

#### Spread or Rest Operator

Using the spread operator to get the rest of array elements:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3); // 1 2 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]
```

Using the spread operator to copy arrays:

```javascript
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];
const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];
const wholeNumbers = [...evens, ...odds];
console.log(evenNumbers); // [0, 2, 4, 6, 8, 10]
console.log(oddNumbers); // [1, 3, 5, 7, 9]
console.log(wholeNumbers); // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

const frontEnd = ['HTML', 'CSS', 'JS', 'React'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack); // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

Using the spread operator to copy objects:

```javascript
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
};
const copiedUser = { ...user };
console.log(copiedUser); // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}

const copiedUserWithModifiedTitle = { ...user, title: 'Instructor' };
console.log(copiedUserWithModifiedTitle); // {name: "Asabeneh", title: "Instructor", country: "Finland", city: "Helsinki"}
```

Using the spread operator with arrow functions:

```javascript
const sumAllNums = (...args) => {
  console.log(args);
};
sumAllNums(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5)); // 15
```