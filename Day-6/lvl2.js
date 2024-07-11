
// Generates a random ID of a given length
function generateRandomId(length) {
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

// Generates a random hexadecimal number
function generateRandomHex() {
  let hex = '#';
  let chars = '0123456789abcdef';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length)];
  }
  return hex;
}

// Generates a random rgb color number
function generateRandomRgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const countries = [
  'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland',
  'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'
];

const webTechs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// Creates an array of uppercase country names
const upperCaseCountries = countries.map(country => country.toUpperCase());

// Creates an array of country name lengths
const countryNameLengths = countries.map(country => country.length);

// Creates an array of arrays with country details
const countryDetails = countries.map(country => [
  country,
  country.slice(0, 3).toUpperCase(),
  country.length
]);

// Finds countries containing the word 'land'
const countriesWithLand = countries.filter(country => country.includes('land'));
const landMessage = countriesWithLand.length > 0 ? countriesWithLand : 'All these countries are without land';

// Finds countries ending with 'ia'
const countriesEndingWithIa = countries.filter(country => country.endsWith('ia'));
const iaMessage = countriesEndingWithIa.length > 0 ? countriesEndingWithIa : 'These are countries ends without ia';

// Finds the country with the biggest number of characters
const longestCountry = countries.reduce((longest, country) => longest.length >= country.length ? longest : country, '');

// Finds countries containing only 5 characters
const countriesWithFiveChars = countries.filter(country => country.length === 5);

// Finds the longest word in the webTechs array
const longestWebTech = webTechs.reduce((longest, tech) => longest.length >= tech.length ? longest : tech, '');

// Creates an array of arrays with web tech details
const webTechDetails = webTechs.map(tech => [tech, tech.length]);

// Creates the acronym MERN
const mernAcronym = mernStack.map(tech => tech[0]).join('');

// Iterates through an array and prints each item
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (let tech of techs) {
  console.log(tech);
}

// Reverses the order of a fruit array without using reverse method
const fruits = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
console.log(reversedFruits);

// Prints all elements of a nested array
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
for (let stack of fullStack) {
  for (let tech of stack) {
    console.log(tech.toUpperCase());
  }
}

// Example usage
console.log(generateRandomId(12)); // Example output: fe3jo1gl124g
console.log(generateRandomId(24)); // Example output: xkqci4utda1lmbelpkm03rba
console.log(generateRandomHex()); // Example output: '#ee33df'
console.log(generateRandomRgb()); // Example output: rgb(240,180,80)
console.log(upperCaseCountries);
console.log(countryNameLengths);
console.log(countryDetails);
console.log(landMessage);
console.log(iaMessage);
console.log(longestCountry);
console.log(countriesWithFiveChars);
console.log(longestWebTech);
console.log(webTechDetails);
console.log(mernAcronym);
