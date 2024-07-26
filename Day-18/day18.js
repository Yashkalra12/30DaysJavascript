const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Exercises: Level 1
const fetchCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    countries.forEach(country => {
      console.log(`Name: ${country.name}, Capital: ${country.capital}, Languages: ${country.languages.map(lang => lang.name).join(', ')}, Population: ${country.population}, Area: ${country.area}`);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchCountries();

// Exercises: Level 2
const fetchCats = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catNames = cats.map(cat => cat.name);
    console.log(catNames);
  } catch (error) {
    console.error(error);
  }
};

fetchCats();

// Exercises: Level 3

// Find the average weight of cats in metric units
const fetchCatsWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const totalWeight = cats.reduce((sum, cat) => {
      const weightRange = cat.weight.metric.split(' - ');
      const avgWeight = (parseFloat(weightRange[0]) + parseFloat(weightRange[1])) / 2;
      return sum + avgWeight;
    }, 0);
    const avgWeight = totalWeight / cats.length;
    console.log(`Average weight of cats: ${avgWeight.toFixed(2)} kg`);
  } catch (error) {
    console.error(error);
  }
};

fetchCatsWeight();

// Find the 10 largest countries
const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    const largestCountries = countries.sort((a, b) => b.area - a.area).slice(0, 10);
    largestCountries.forEach(country => {
      console.log(`Name: ${country.name}, Area: ${country.area}`);
    });
  } catch (error) {
    console.error(error);
  }
};

fetchLargestCountries();

// Count total number of languages in the world used as officials
const fetchLanguagesCount = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    const languages = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languages.add(language.name);
      });
    });
    console.log(`Total number of official languages: ${languages.size}`);
  } catch (error) {
    console.error(error);
  }
};

fetchLanguagesCount();
