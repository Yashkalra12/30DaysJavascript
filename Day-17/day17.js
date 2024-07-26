
// ### Exercises: Level 1
// Store your first name, last name, age, country, city in your browser localStorage.

// Storing basic information in localStorage
localStorage.setItem('firstName', 'Yash');
localStorage.setItem('lastName', 'Kalra');
localStorage.setItem('age', '25');
localStorage.setItem('country', 'India');
localStorage.setItem('city', 'Delhi');


// ### Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys, and values for the keys. Store the student object in your browser localStorage.

// Creating and storing the student object in localStorage
const student = {
  firstName: 'Yash',
  lastName: 'Kalra',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
  country: 'India',
  enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));


// ### Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense, and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// Creating the personAccount object
const personAccount = {
  firstName: 'Yash',
  lastName: 'Kalra',
  incomes: [
    { description: 'Salary', amount: 5000 },
    { description: 'Freelancing', amount: 1500 }
  ],
  expenses: [
    { description: 'Rent', amount: 1000 },
    { description: 'Groceries', amount: 500 }
  ],
  totalIncome: function() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpense: function() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountInfo: function() {
    return `${this.firstName} ${this.lastName} has a total income of $${this.totalIncome()} and a total expense of $${this.totalExpense()}.`;
  },
  addIncome: function(description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function(description, amount) {
    this.expenses.push({ description, amount });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

// Storing the personAccount object in localStorage
localStorage.setItem('personAccount', JSON.stringify(personAccount));


