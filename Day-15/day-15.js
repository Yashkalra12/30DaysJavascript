// day15.js

// Level 1: Animal class, Dog and Cat subclasses

class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    sound() {
      return "Animal sound";
    }
  
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`;
    }
  }
  
  class Dog extends Animal {
    sound() {
      return "Woof Woof";
    }
  }
  
  class Cat extends Animal {
    sound() {
      return "Meow";
    }
  }
  
  // Level 2: Override methods in subclasses
  
  let dog = new Dog("Buddy", 3, "Brown", 4);
  let cat = new Cat("Kitty", 2, "White", 4);
  
  console.log(dog.sound()); // Woof Woof
  console.log(cat.sound()); // Meow
  
  // Level 3: Statistics class
  
  class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const middle = Math.floor(this.count() / 2);
      if (this.count() % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      }
      return sorted[middle];
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
      });
      const maxFrequency = Math.max(...Object.values(frequency));
      const modes = Object.keys(frequency).filter(key => frequency[key] === maxFrequency);
      return { mode: parseInt(modes[0]), count: maxFrequency };
    }
  
    variance() {
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
      });
      const result = [];
      for (const [key, value] of Object.entries(frequency)) {
        result.push([((value / this.count()) * 100).toFixed(1), parseInt(key)]);
      }
      return result.sort((a, b) => b[0] - a[0]);
    }
  
    describe() {
      return `
        Count: ${this.count()}
        Sum: ${this.sum()}
        Min: ${this.min()}
        Max: ${this.max()}
        Range: ${this.range()}
        Mean: ${this.mean()}
        Median: ${this.median()}
        Mode: (${this.mode().mode}, ${this.mode().count})
        Variance: ${this.variance()}
        Standard Deviation: ${this.std()}
        Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
    }
  }
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 30
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // { mode: 26, count: 5 }
  console.log('Variance: ', statistics.variance()); // 17.5
  console.log('Standard Deviation: ', statistics.std()); // 4.2
  console.log('Frequency Distribution: ', statistics.freqDist()); // [ ['20.0', 26], ['16.0', 27], ['12.0', 32], ['8.0', 37], ['8.0', 34], ['8.0', 33], ['8.0', 31], ['8.0', 24], ['4.0', 38], ['4.0', 29], ['4.0', 25] ]
  
  console.log(statistics.describe());
  
  // Level 4: PersonAccount class
  
  class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = [];
      this.expenses = [];
    }
  
    totalIncome() {
      return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    }
  
    totalExpense() {
      return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }
  
    accountInfo() {
      return `Name: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
    }
  
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    }
  
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  
  const account = new PersonAccount("Yash", "Kalra");
  account.addIncome("Salary", 3000);
  account.addIncome("Freelance", 1500);
  account.addExpense("Rent", 1000);
  account.addExpense("Groceries", 300);
  
  console.log(account.accountInfo());
  console.log("Account Balance:", account.accountBalance());
  