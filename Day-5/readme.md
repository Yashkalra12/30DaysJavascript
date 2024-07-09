# Day 5: Arrays

## Overview
An array can store multiple values, each accessible via an index starting from 0. Arrays are mutable and can contain different data types, including duplicates.

## Creating Arrays

### Empty Arrays
```javascript
const arr1 = Array(); // or let arr2 = new Array();
const arr3 = [];
console.log(arr1, arr3); // [], []
```

### Arrays with Values
```javascript
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'];
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'];
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
console.log(numbers, fruits, vegetables, animalProducts, webTechs, countries);
```

## Accessing Array Items
```javascript
const fruits = ['banana', 'orange', 'mango', 'lemon'];
console.log(fruits[0]); // banana
console.log(fruits[fruits.length - 1]); // lemon
```

## Modifying Array Elements
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers); // [10, 20, 3, 4, 5]
```

## Array Methods

### Common Methods
- `Array()`, `Array.fill()`, `Array.concat()`
- `Array.indexOf()`, `Array.lastIndexOf()`, `Array.includes()`
- `Array.isArray()`, `Array.toString()`, `Array.join()`
- `Array.slice()`, `Array.splice()`, `Array.push()`, `Array.pop()`
- `Array.shift()`, `Array.unshift()`, `Array.reverse()`, `Array.sort()`

### Examples
```javascript
const arr = Array(8).fill('X');
console.log(arr); // ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const combinedList = firstList.concat(secondList);
console.log(combinedList); // [1, 2, 3, 4, 5, 6]

const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongoDB'];
webTechs.sort().reverse();
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

## Array of Arrays
```javascript
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
```