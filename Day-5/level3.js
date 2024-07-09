const countries = require('./countries');

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Min Age: ${minAge}, Max Age: ${maxAge}`);

// Find the median age
const medianAge = ages.length % 2 === 0
  ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
  : ages[Math.floor(ages.length / 2)];
console.log(`Median Age: ${medianAge}`);

// Find the average age
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average Age: ${averageAge}`);

// Find the range of the ages
const range = maxAge - minAge;
console.log(`Range: ${range}`);

// Compare the value of (min - average) and (max - average)
const compareMinAverage = Math.abs(minAge - averageAge);
const compareMaxAverage = Math.abs(maxAge - averageAge);
console.log(`Min - Average: ${compareMinAverage}, Max - Average: ${compareMaxAverage}`);

// Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);
console.log(`First Ten Countries: ${firstTenCountries}`);

// Find the middle country(ies) in the countries array
const middleCountryIndex = Math.floor(countries.length / 2);
const middleCountries = countries.length % 2 === 0
  ? countries.slice(middleCountryIndex - 1, middleCountryIndex + 1)
  : countries.slice(middleCountryIndex, middleCountryIndex + 1);
console.log(`Middle Country(ies): ${middleCountries}`);

// Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2));
console.log(`First Half: ${firstHalf}`);
console.log(`Second Half: ${secondHalf}`);
