// Exercises: Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Create an empty set
const emptySet = new Set();
console.log(emptySet);

// Create a set containing 0 to 10 using loop
const set0to10 = new Set();
for (let i = 0; i <= 10; i++) {
  set0to10.add(i);
}
console.log(set0to10);

// Remove an element from a set
set0to10.delete(5);
console.log(set0to10);

// Clear a set
set0to10.clear();
console.log(set0to10);

// Create a set of 5 string elements from array
const stringSet = new Set(countries);
console.log(stringSet);

// Create a map of countries and number of characters of a country
const countriesMap = new Map();
for (const country of countries) {
  countriesMap.set(country, country.length);
}
console.log(countriesMap);

// Exercises: Level 2
// Find a union b
const union = new Set([...a, ...b]);
console.log(union);

// Find an intersection b
const intersection = new Set(a.filter(num => b.includes(num)));
console.log(intersection);

// Find a difference b
const difference = new Set(a.filter(num => !b.includes(num)));
console.log(difference);

// Exercises: Level 3
const countriesData = [
  { name: 'Afghanistan', languages: ['Pashto', 'Uzbek', 'Turkmen'] },
  { name: 'Belgium', languages: ['Dutch', 'French', 'German'] },
  { name: 'China', languages: ['Chinese'] },
  { name: 'Finland', languages: ['Finnish', 'Swedish'] },
  { name: 'France', languages: ['French'] },
  { name: 'India', languages: ['Hindi', 'English'] },
  { name: 'Russia', languages: ['Russian'] },
  { name: 'Spain', languages: ['Spanish'] },
  { name: 'United States', languages: ['English'] },
  { name: 'Canada', languages: ['English', 'French'] },
];

// How many languages are there in the countries object file
const allLanguages = new Set();
for (const country of countriesData) {
  for (const language of country.languages) {
    allLanguages.add(language);
  }
}
console.log(allLanguages.size);

// Find the 10 most spoken languages
const languageCounts = {};
for (const country of countriesData) {
  for (const language of country.languages) {
    if (languageCounts[language]) {
      languageCounts[language]++;
    } else {
      languageCounts[language] = 1;
    }
  }
}

function mostSpokenLanguages(countries, num) {
  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, num)
    .map(lang => ({ [lang[0]]: lang[1] }));
  return sortedLanguages;
}

console.log(mostSpokenLanguages(countriesData, 10));
console.log(mostSpokenLanguages(countriesData, 3));
