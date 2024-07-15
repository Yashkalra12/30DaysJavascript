## Scope in JavaScript

### Introduction
Variables are fundamental in programming, used to store different data types. In JavaScript, we declare variables using `var`, `let`, and `const`. Variables can be declared globally or locally, affecting their scope and accessibility.

### Window Global Object
Variables declared without `var`, `let`, or `const` are automatically added to the global window object.

```javascript
a = 'JavaScript';
b = 10;

function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}

console.log(a, b); // accessible globally
```

### Global Scope
Variables declared globally can be accessed anywhere within the same file.

```javascript
let a = 'JavaScript';
let b = 10;

function letsLearnScope() {
  console.log(a, b);
  if (true) {
    let a = 'Python';
    let b = 100;
    console.log(a, b); // Python 100
  }
  console.log(a, b); // JavaScript 10
}

letsLearnScope();
console.log(a, b); // JavaScript 10
```

### Local Scope
Local variables can only be accessed within the block or function they are declared in.

#### Block Scope
Variables declared inside a block are not accessible outside of it.

```javascript
let a = 'JavaScript';
let b = 10;

function letsLearnScope() {
  let value = false;
  if (true) {
    let a = 'Python';
    let b = 20;
    let c = 30;
    value = !value;
    console.log(a, b, c, value); // Python 20 30 true
  }
  console.log(a, b, value); // JavaScript 10 true
}

letsLearnScope();
console.log(a, b); // JavaScript 10
```

#### Function Scope
Variables declared with `var` are function-scoped, whereas variables declared with `let` or `const` are block-scoped.

```javascript
function letsLearnScope() {
  var gravity = 9.81;
  console.log(gravity);
}

if (true) {
  var gravity = 9.81;
  console.log(gravity); // 9.81
}
console.log(gravity); // 9.81

for (var i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

// Using let or const
function letsLearnScope() {
  const gravity = 9.81;
  console.log(gravity);
}

if (true) {
  const gravity = 9.81;
  console.log(gravity); // 9.81
}

// console.log(gravity); Uncaught ReferenceError: gravity is not defined

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); Uncaught ReferenceError: i is not defined
```

### Conclusion
Variables declared with `let` or `const` are block-scoped, making code cleaner and less error-prone compared to `var`. Use `let` for variables that change and `const` for constants.

## Objects in JavaScript

### Introduction
An object is a key-value pair used to store data. Objects are mutable and can have properties and methods.

### Creating Objects

#### Empty Object
```javascript
const person = {};
```

#### Object with Values
```javascript
const rectangle = {
  length: 20,
  width: 20
};

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
  isMarried: true
};
```

### Accessing Object Properties
```javascript
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
  'phone number': '+3584545454545'
};

console.log(person.firstName); // Dot notation
console.log(person['lastName']); // Bracket notation
console.log(person['phone number']); // Bracket notation for multi-word keys
```

### Object Methods
Objects can have methods to perform actions using their properties.

```javascript
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.getFullName());
```

### Modifying Objects
Objects are mutable, allowing addition or modification of properties.

```javascript
person.nationality = 'Ethiopian';
person.title = 'teacher';
person.skills.push('Meteor', 'SasS');
person.isMarried = true;

person.getPersonInfo = function() {
  let skills = this.skills.join(', ');
  return `${this.getFullName()} is a ${this.title} living in ${this.city}, ${this.country}. He teaches ${skills}.`;
};

console.log(person.getPersonInfo());
```

### Object Methods
Common methods to manipulate objects:

#### Object.assign
```javascript
const copyPerson = Object.assign({}, person);
```

#### Object.keys
```javascript
const keys = Object.keys(person);
```

#### Object.values
```javascript
const values = Object.values(person);
```

#### Object.entries
```javascript
const entries = Object.entries(person);
```

#### hasOwnProperty
```javascript
console.log(person.hasOwnProperty('firstName')); // true
console.log(person.hasOwnProperty('score')); // false
```

### Conclusion
Objects in JavaScript are versatile and powerful, allowing you to store and manipulate complex data efficiently.