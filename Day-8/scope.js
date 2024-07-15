
// Exercises: Level 1
// 1. Create an empty object called dog
const dog = {};

// 2. Print the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age, and bark properties for the dog object
// The bark property is a method which returns "woof woof"
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'brown';
dog.age = 5;
dog.bark = function() {
    return 'woof woof';
};

// 4. Get name, legs, color, age, and bark value from the dog object
console.log(dog.name); // Buddy
console.log(dog.legs); // 4
console.log(dog.color); // brown
console.log(dog.age); // 5
console.log(dog.bark()); // woof woof

// 5. Set new properties for the dog object: breed, getDogInfo
dog.breed = 'Labrador';
dog.getDogInfo = function() {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
};

console.log(dog.getDogInfo());

// Exercises: Level 2
const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: "asab@asab.com",
        skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: "paul@paul.com",
        skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

// 1. Find the person who has many skills in the users object.
let mostSkilledUser = '';
let maxSkills = 0;
for (const user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        mostSkilledUser = user;
    }
}
console.log(mostSkilledUser); // Asab

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let loggedInUsersCount = 0;
let usersWithHighPoints = 0;
for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInUsersCount++;
    }
    if (users[user].points >= 50) {
        usersWithHighPoints++;
    }
}
console.log(loggedInUsersCount); // 2
console.log(usersWithHighPoints); // 3

// 3. Find people who are MERN stack developer from the users object
const mernStackDevelopers = [];
for (const user in users) {
    const skills = users[user].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        mernStackDevelopers.push(user);
    }
}
console.log(mernStackDevelopers); // ['Asab', 'Paul']

// 4. Set your name in the users object without modifying the original users object
const updatedUsers = { ...users, Yash: { email: "yash@yash.com", skills: ["JavaScript", "React"], age: 23, isLoggedIn: true, points: 60 } };
console.log(updatedUsers);

// 5. Get all keys or properties of users object
console.log(Object.keys(users));

// 6. Get all the values of users object
console.log(Object.values(users));

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Finland: {
        capital: 'Helsinki',
        population: 5527573,
        languages: ['Finnish', 'Swedish']
    },
    India: {
        capital: 'New Delhi',
        population: 1393409038,
        languages: ['Hindi', 'English']
    }
};

for (const country in countries) {
    const countryInfo = countries[country];
    console.log(`Country: ${country}, Capital: ${countryInfo.capital}, Population: ${countryInfo.population}, Languages: ${countryInfo.languages.join(', ')}`);
}

// Exercises: Level 3
const personAccount = {
    firstName: 'Yash',
    lastName: 'Kalra',
    incomes: [],
    expenses: [],
    totalIncome: function() {
        return this.incomes.reduce((acc, income) => acc + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
    },
    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
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

// Test personAccount
personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Freelance', 2000);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 500);
console.log(personAccount.accountInfo()); // Total Income: 7000, Total Expense: 1500
console.log(`Account Balance: ${personAccount.accountBalance()}`); // Account Balance: 5500

const usersArray = [
    { _id: 'ab12ex', username: 'Alex', email: 'alex@alex.com', password: '123123', createdAt: '08/01/2020 9:00 AM', isLoggedIn: false },
    { _id: 'fg12cy', username: 'Asab', email: 'asab@asab.com', password: '123456', createdAt: '08/01/2020 9:30 AM', isLoggedIn: true },
    { _id: 'zwf8md', username: 'Brook', email: 'brook@brook.com', password: '123111', createdAt: '08/01/2020 9:45 AM', isLoggedIn: true },
    { _id: 'eefamr', username: 'Martha', email: 'martha@martha.com', password: '123222', createdAt: '08/01/2020 9:50 AM', isLoggedIn: false },
    { _id: 'ghderc', username: 'Thomas', email: 'thomas@thomas.com', password: '123333', createdAt: '08/01/2020 10:00 AM', isLoggedIn: false }
];

const products = [
    { _id: 'eedfcf', name: 'mobile phone', description: 'Huawei Honor', price: 200, ratings: [{ userId: 'fg12cy', rate: 5 }, { userId: 'zwf8md', rate: 4.5 }], likes: [] },
    { _id: 'aegfal', name: 'Laptop', description: 'MacPro: System Darwin', price: 2500, ratings: [], likes: ['fg12cy'] },
    { _id: 'hedfcg', name: 'TV', description: 'Smart TV:Procaster', price: 400, ratings: [{ userId: 'fg12cy', rate: 5 }], likes: ['fg12cy'] }
];

// 2. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(newUser) {
    const userExists = usersArray.some(user => user.email === newUser.email);
    if (userExists) {
        console.log('User already has an account.');
    } else {
        usersArray.push(newUser);
        console.log('User added successfully.');
    }
}
