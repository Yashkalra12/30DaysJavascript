## JavaScript Classes

JavaScript is an object-oriented programming language where everything is an object with its properties and methods. We use classes to create objects, acting as blueprints for object construction. Classes define attributes and behavior, and objects represent instances of these classes.

### Defining a Class

To define a class in JavaScript, use the `class` keyword followed by the class name in CamelCase and a block of code enclosed in curly brackets.

```javascript
// syntax
class ClassName {
    // code goes here
}

// Example
class Person {
  // code goes here
}
```

### Class Instantiation

Instantiating a class means creating an object from it using the `new` keyword.

```javascript
class Person {
  // code goes here
}

const person = new Person();
console.log(person); // Person {}
```

### Class Constructor

The constructor is a built-in function for creating a blueprint for objects. It uses the `constructor` keyword followed by parentheses to pass object properties as parameters, using `this` to attach them to the class.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person('Yash', 'Kalra');
console.log(person1); // Person {firstName: "Yash", lastName: "Kalra"}
```

### Default Values with Constructor

Constructor properties can have default values.

```javascript
class Person {
  constructor(
    firstName = 'Yash',
    lastName = 'Kalra',
    age = 30,
    country = 'India',
    city = 'Delhi'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person();
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(person1); // Person {firstName: "Yash", lastName: "Kalra", age: 30, country: "India", city: "Delhi"}
console.log(person2); // Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### Class Methods

Methods are functions inside the class.

```javascript
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person1 = new Person('Yash', 'Kalra', 30, 'India', 'Delhi');
console.log(person1.getFullName()); // Yash Kalra
```

### Properties with Initial Value

Properties can have initial values.

```javascript
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const person1 = new Person('Yash', 'Kalra', 30, 'India', 'Delhi');
console.log(person1.score); // 0
console.log(person1.skills); // []
```

### Getter and Setter Methods

Getters and setters allow us to access and modify object properties.

```javascript
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkill(skill) {
    this.skills.push(skill);
  }
}

const person1 = new Person('Yash', 'Kalra', 30, 'India', 'Delhi');
person1.setScore = 1;
person1.setSkill = 'JavaScript';

console.log(person1.getScore); // 1
console.log(person1.getSkills); // ["JavaScript"]
```

### Adding Regular Methods

Regular methods perform actions or calculations.

```javascript
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills = this.skills.length > 0 ? `He knows ${this.skills.join(', ')}` : '';
    let info = `${fullName} is ${this.age}. He lives in ${this.city}, ${this.country}. ${skills}`;
    return info;
  }
}

const person1 = new Person('Yash', 'Kalra', 30, 'India', 'Delhi');
person1.setSkill = 'JavaScript';
console.log(person1.getPersonInfo()); // Yash Kalra is 30. He lives in Delhi, India. He knows JavaScript
```

### Static Methods

Static methods are called on the class itself, not on instances of the class.

```javascript
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return `${date}.${month}.${year} ${hours}:${minutes}`;
  }
}

console.log(Person.favoriteSkill()); // e.g., 'JavaScript'
console.log(Person.showDateTime()); // e.g., '26.7.2024 10:30'
```

### Inheritance

Inheritance allows a class to access all properties and methods of another class.

```javascript
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class');
  }
}

const s1 = new Student('Yash', 'Kalra', 30, 'India', 'Delhi');
console.log(s1);
s1.saySomething(); // I am a child of the person class
console.log(s1.getFullName()); // Yash Kalra
console.log(s1.getPersonInfo()); // Yash Kalra is 30. He lives in Delhi, India.
```

### Overriding Methods

Child classes can override parent class methods to customize behavior.

```javascript
class Student extends Person {
  constructor(firstName, lastName, age, country, city, course) {
    super(firstName, lastName, age, country, city);
    this.course = course;
  }

  getPersonInfo() {
    let info = super.getPersonInfo();
    return `${info} He studies ${this.course}.`;
  }
}

const s1 = new Student('Yash', 'Kalra', 30, 'India', 'Delhi', 'Computer Science');
console.log(s1.getPersonInfo()); // Yash Kalra is 30. He lives in Delhi, India. He studies Computer Science.
```