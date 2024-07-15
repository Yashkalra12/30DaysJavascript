
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Difference between forEach, map, filter, and reduce
/*
- forEach: Iterates over array elements and performs a function on each element. It doesn't return a new array.
- map: Iterates over array elements, transforms them, and returns a new array.
- filter: Iterates over array elements and returns a new array of elements that satisfy a condition.
- reduce: Reduces an array to a single value by accumulating a result.
*/

// Define a callback function
const callback = (item) => console.log(item);

// forEach
countries.forEach(callback);
names.forEach(callback);
numbers.forEach(callback);

// map
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);

const countriesLength = countries.map(country => country.length);
console.log(countriesLength);

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

const productPrices = products.map(product => product.price);
console.log(productPrices);

// filter
const countriesContainingLand = countries.filter(country => country.includes('land'));
console.log(countriesContainingLand);

const countriesWithSixChars = countries.filter(country => country.length === 6);
console.log(countriesWithSixChars);

const countriesWithSixOrMoreChars = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreChars);

const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

const validPrices = products.filter(product => typeof product.price === 'number' && product.price !== '');
console.log(validPrices);

// Function to return an array of string items
const getStringLists = (arr) => arr.filter(item => typeof item === 'string');
console.log(getStringLists(['a', 1, 'b', true, 'c'])); // ['a', 'b', 'c']

// reduce
const sumOfNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNumbers);

const concatenatedCountries = countries.reduce((acc, cur, index) => {
  if (index === countries.length - 1) {
    return `${acc}, and ${cur} are north European countries.`;
  } else {
    return `${acc}, ${cur}`;
  }
});
console.log(concatenatedCountries);

// some and every
/*
- some: Checks if at least one element in the array satisfies the condition.
- every: Checks if all elements in the array satisfy the condition.
*/
const someNamesLongerThanSeven = names.some(name => name.length > 7);
console.log(someNamesLongerThanSeven);

const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);

// find and findIndex
/*
- find: Returns the first element that satisfies the condition.
- findIndex: Returns the index of the first element that satisfies the condition.
*/
const firstCountryWithSixLetters = countries.find(country => country.length === 6);
console.log(firstCountryWithSixLetters);

const indexOfFirstCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexOfFirstCountryWithSixLetters);

const indexOfNorway = countries.findIndex(country => country === 'Norway');
console.log(indexOfNorway);

const indexOfRussia = countries.findIndex(country => country === 'Russia');
console.log(indexOfRussia);

// Level 2

// Total price of products
const totalPrice = products
  .map(product => product.price)
  .filter(price => typeof price === 'number')
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalPrice);

// Sum of prices using reduce
const sumOfPrices = products.reduce((acc, cur) => {
  const price = typeof cur.price === 'number' ? cur.price : 0;
  return acc + price;
}, 0);
console.log(sumOfPrices);

// Categorize countries
const categorizeCountries = (pattern) => countries.filter(country => country.includes(pattern));
console.log(categorizeCountries('land'));

// Function to count the initial letter of country names
const countInitialLetters = () => {
  return countries.reduce((acc, country) => {
    const initial = country[0];
    if (acc[initial]) {
      acc[initial]++;
    } else {
      acc[initial] = 1;
    }
    return acc;
  }, {});
};
console.log(countInitialLetters());

// Get first ten countries
const getFirstTenCountries = (arr) => arr.slice(0, 10);
console.log(getFirstTenCountries(countries));

// Get last ten countries
const getLastTenCountries = (arr) => arr.slice(-10);
console.log(getLastTenCountries(countries));

// Find the most frequent initial letter
const mostFrequentInitialLetter = () => {
  const letterCounts = countInitialLetters();
  return Object.keys(letterCounts).reduce((a, b) => letterCounts[a] > letterCounts[b] ? a : b);
};
console.log(mostFrequentInitialLetter());

// Level 3

// Sort countries by name, capital, population
// Assuming countries_data.js has been imported as countriesData
const countriesData = [
  // Add sample data from countries_data.js
];

const sortByName = countriesData.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(sortByName);

const sortByCapital = countriesData.slice().sort((a, b) => a.capital.localeCompare(b.capital));
console.log(sortByCapital);

const sortByPopulation = countriesData.slice().sort((a, b) => b.population - a.population);
console.log(sortByPopulation);

// Most spoken languages
const mostSpokenLanguages = (countries, count) => {
  const languageCounts = countries.reduce((acc, country) => {
    country.languages.forEach(language => {
      if (acc[language]) {
        acc[language]++;
      } else {
        acc[language] = 1;
      }
    });
    return acc;
  }, {});

  return Object.keys(languageCounts)
    .map(language => ({ country: language, count: languageCounts[language] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, count);
};
console.log(mostSpokenLanguages(countriesData, 10));
console.log(mostSpokenLanguages(countriesData, 3));

// Most populated countries
const mostPopulatedCountries = (countries, count) => {
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, count)
    .map(country => ({ country: country.name, population: country.population }));
};
console.log(mostPopulatedCountries(countriesData, 10));
console.log(mostPopulatedCountries(countriesData, 3));

// Statistical calculations
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

const statistics = {
  count: function () {
    return ages.length;
  },
  sum: function () {
    return ages.reduce((acc, cur) => acc + cur, 0);
  },
  min: function () {
    return Math.min(...ages);
  },
  max: function () {
    return Math.max(...ages);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return this.sum() / this.count();
  },
  median: function () {
    const sorted = ages.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  },
  mode: function () {
    const frequency = ages.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    const maxCount = Math.max(...Object.values(frequency));
    const mode = Object.keys(frequency).filter(key => frequency[key] === maxCount);
    return { mode: mode[0], count: maxCount };
  },
  var: function () {
    const mean = this.mean();
    return ages.reduce((acc, cur) => acc + (cur - mean) ** 2, 0) / this.count();
  },
  std: function () {
    return Math.sqrt(this.var());
  },
  freqDist: function () {
    const frequency = ages.reduce((acc, cur) => {
      acc[cur] = (

acc[cur] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(frequency).map(key => [(frequency[key] / this.count()) * 100, Number(key)]);
  },
  describe: function () {
    return `
      Count: ${this.count()}
      Sum: ${this.sum()}
      Min: ${this.min()}
      Max: ${this.max()}
      Range: ${this.range()}
      Mean: ${this.mean()}
      Median: ${this.median()}
      Mode: (${this.mode().mode}, ${this.mode().count})
      Variance: ${this.var()}
      Standard Deviation: ${this.std()}
      Frequency Distribution: ${JSON.stringify(this.freqDist())}
    `;
  }
};

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log(statistics.describe());
