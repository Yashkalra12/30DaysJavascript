
// Exercise: Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

// 1. Declare an empty array
const emptyArray = [];

// 2. Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6];

// 3. Find the length of your array
console.log(numbers.length); // Output: 6

// 4. Get the first item, the middle item and the last item of the array
const firstItem = numbers[0];
const middleItem = numbers[Math.floor(numbers.length / 2)];
const lastItem = numbers[numbers.length - 1];
console.log(firstItem); // Output: 1
console.log(middleItem); // Output: 4
console.log(lastItem); // Output: 6

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'Hello', true, null, { name: 'John' }, [1, 2, 3]];
console.log(mixedDataTypes.length); // Output: 6

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length); // Output: 7

// 9. Print the first company, middle and last company
console.log(itCompanies[0]); // Output: Facebook
console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // Output: Apple
console.log(itCompanies[itCompanies.length - 1]); // Output: Amazon

// 10. Print out each company
itCompanies.forEach(company => console.log(company));

// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies.join(', ')} are big IT companies.`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const checkCompany = (company) => {
  return itCompanies.includes(company) ? company : 'Company not found';
};
console.log(checkCompany('Google')); // Output: Google
console.log(checkCompany('Twitter')); // Output: Company not found

// 14. Filter out companies which have more than one 'o' without the filter method
const companiesWithTwoOs = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let char of itCompanies[i]) {
    if (char.toLowerCase() === 'o') {
      count++;
    }
  }
  if (count > 1) {
    companiesWithTwoOs.push(itCompanies[i]);
  }
}
console.log(companiesWithTwoOs); // Output: [Google, Facebook]

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));

// 19. Slice out the middle IT company or companies from the array
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompanies = itCompanies.length % 2 === 0 
  ? itCompanies.slice(middleIndex - 1, middleIndex + 1) 
  : itCompanies.slice(middleIndex, middleIndex + 1);
console.log(middleCompanies);

// 20. Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
const middleIndexRemove = Math.floor(itCompanies.length / 2);
itCompanies.length % 2 === 0 
  ? itCompanies.splice(middleIndexRemove - 1, 2) 
  : itCompanies.splice(middleIndexRemove, 1);
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies); // Output: []


