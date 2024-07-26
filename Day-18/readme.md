### Promise
A Promise in JavaScript is used to handle asynchronous operations. It represents an operation that hasn't completed yet but is expected in the future.

**Promise States:**
- **Pending:** Initial state, neither fulfilled nor rejected.
- **Fulfilled:** Operation completed successfully.
- **Rejected:** Operation failed.

**Promise Methods:**
- `then()`: Handles fulfilled promises.
- `catch()`: Handles rejected promises.

**Creating a Promise:**
```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous operation
  setTimeout(() => {
    const success = true; // Example condition
    if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }
  }, 2000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

### Callbacks
Callbacks are functions passed as arguments to other functions to execute once an operation is completed.

**Example of a Callback:**
```javascript
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS'];
    callback(null, skills);
  }, 2000);
};

doSomething((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});
```

### Fetch API
Fetch API provides a way to fetch resources across the network and handles responses and errors using promises.

**Using Fetch with Promises:**
```javascript
const url = 'https://restcountries.com/v2/all';

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Async and Await
`async` and `await` make it easier to work with promises by allowing you to write asynchronous code in a synchronous manner.

**Example of Async and Await:**
```javascript
const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
```

### Summary
- **Promise:** Handles async operations with `then` and `catch`.
- **Callbacks:** Functions executed after an async operation.
- **Fetch API:** Fetches resources and handles responses with promises.
- **Async/Await:** Simplifies working with promises by making async code look synchronous.