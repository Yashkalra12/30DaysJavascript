### Error Handling

**1. `try-catch-finally` Block**
- **`try`**: Contains code that might throw an error.
- **`catch`**: Handles the error if it occurs. You can use parameters like `e`, `err`, or `error` to access error details.
- **`finally`**: Executes code regardless of whether an error occurred or not. Useful for cleanup tasks.

```javascript
try {
  let lastName = 'Yetayeh';
  let fullName = fistName + ' ' + lastName; // ReferenceError
} catch (err) {
  console.log('Name of the error:', err.name);
  console.log('Error message:', err.message);
} finally {
  console.log('This will always be executed');
}
```

**2. `throw` Statement**
- Allows you to create and throw custom errors. You can throw strings, numbers, booleans, or objects.

```javascript
throw 'Error message'; // Throws a string
throw 42; // Throws a number
throw true; // Throws a boolean
throw new Error('Custom error message'); // Throws an Error object
```

**Example Function:**

```javascript
const throwErrorExampleFun = () => {
  let x = prompt('Enter a number: ');
  try {
    if (x == '') throw 'empty';
    if (isNaN(x)) throw 'not a number';
    x = Number(x);
    if (x < 5) throw 'too low';
    if (x > 10) throw 'too high';
  } catch (err) {
    console.log(err);
  }
}
throwErrorExampleFun();
```

**3. Error Types**
- **`ReferenceError`**: Occurs when trying to use an undeclared variable.
  ```javascript
  let fullName = firstName + ' ' + lastName; // ReferenceError
  ```
- **`SyntaxError`**: Occurs due to incorrect syntax.
  ```javascript
  let square = 2 x 2; // SyntaxError
  ```
- **`TypeError`**: Occurs when a value is not of the expected type or does not support an operation.
  ```javascript
  let num = 10;
  console.log(num.toLowerCase()); // TypeError
  ```

### Summary
Understanding and handling errors effectively is crucial for writing robust applications. The `try-catch-finally` block, `throw` statements, and knowing common error types can help you manage runtime issues and debug your code efficiently.