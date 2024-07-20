
### Console Object Methods

#### console.log()
- Used to show output on the browser console.
- **Example:**
  ```javascript
  console.log('Yash Kalra is learning JavaScript'); // Output: Yash Kalra is learning JavaScript
  ```

- **Substitution:**
  ```javascript
  console.log('%d %s is learning JavaScript', 30, 'Days'); // Output: 30 Days is learning JavaScript
  ```

- **CSS Styling:**
  ```javascript
  console.log('%cYash Kalra', 'color:green'); // Output: Yash Kalra (in green color)
  ```

#### console.warn()
- Used to give warnings on the browser console.
- **Example:**
  ```javascript
  console.warn('This is a warning from Yash Kalra');
  ```

#### console.error()
- Used to show error messages on the browser console.
- **Example:**
  ```javascript
  console.error('This is an error message from Yash Kalra');
  ```

#### console.table()
- Displays data as a table on the console.
- **Example with Array:**
  ```javascript
  const names = ['Yash', 'Kalra', 'David', 'John'];
  console.table(names);
  ```

- **Example with Object:**
  ```javascript
  const user = { name: 'Yash Kalra', title: 'Developer', country: 'India', city: 'Chandigarh', age: 25 };
  console.table(user);
  ```

#### console.time() and console.timeEnd()
- Measures the time taken by a block of code.
- **Example:**
  ```javascript
  console.time('Regular for loop');
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  console.timeEnd('Regular for loop');
  ```

#### console.info()
- Displays informational messages on the browser console.
- **Example:**
  ```javascript
  console.info('Yash Kalra is completing the 30 Days of JavaScript challenge');
  ```

#### console.assert()
- Writes an error message to the console if the assertion is false.
- **Example:**
  ```javascript
  console.assert(4 > 5, '4 is not greater than 5');
  ```

#### console.group() and console.groupEnd()
- Groups console messages.
- **Example:**
  ```javascript
  console.group('User Details');
  console.log('Name: Yash Kalra');
  console.log('Title: Developer');
  console.groupEnd();
  ```

#### console.count()
- Counts the number of times the console.count() is called.
- **Example:**
  ```javascript
  function greet() {
    console.count('Greet function called');
  }
  greet();
  greet();
  ```

#### console.clear()
- Clears the console.
- **Example:**
  ```javascript
  console.clear();
  ```

