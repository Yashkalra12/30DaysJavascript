const countries = require('./countries');
const webTechs = require('./web_techs');

console.log(countries);
console.log(webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replace(/[^\w\s]/g, '').split(' ');
console.log(words);
console.log(words.length); // Output: 13

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic to honey
const allergicToHoney = true; // change this value if not allergic
if (allergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex > -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex > -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
