### JavaScript Closures
JavaScript allows writing functions inside an outer function. We can write as many inner functions as we want. If the inner function accesses the variables of the outer function, it is called a closure.

Example 1
```javascript

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc()); // 1
console.log(innerFunc()); // 2
console.log(innerFunc()); // 3
Example 2
javascript
Copy code
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    };
}

const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne); // 1
console.log(innerFuncs.minusOne); // 0

```