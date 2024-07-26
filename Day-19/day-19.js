// Level 1: Create a closure with one inner function
function closureLevel1() {
    let count = 0;
    
    function innerFunction() {
        count++;
        return count;
    }

    return innerFunction;
}

const increment = closureLevel1();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// Level 2: Create a closure with three inner functions
function closureLevel2() {
    let count = 0;

    function plusOne() {
        count++;
        return count;
    }

    function minusOne() {
        count--;
        return count;
    }

    function reset() {
        count = 0;
        return count;
    }

    return {
        plusOne,
        minusOne,
        reset
    };
}

const operations = closureLevel2();
console.log(operations.plusOne()); // 1
console.log(operations.minusOne()); // 0
console.log(operations.reset()); // 0
console.log(operations.plusOne()); // 1

// Level 3: Create a personAccount function
function personAccount() {
    let firstname = 'Yash';
    let lastname = 'Kalra';
    let incomes = [];
    let expenses = [];

    function totalIncome() {
        return incomes.reduce((acc, income) => acc + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((acc, expense) => acc + expense.amount, 0);
    }

    function accountInfo() {
        return `${firstname} ${lastname}`;
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}

const myAccount = personAccount();
myAccount.addIncome(1000, 'Salary');
myAccount.addExpense(200, 'Groceries');
myAccount.addExpense(150, 'Utilities');

console.log(myAccount.accountInfo()); // Yash Kalra
console.log(myAccount.totalIncome()); // 1000
console.log(myAccount.totalExpense()); // 350
console.log(myAccount.accountBalance()); // 650
