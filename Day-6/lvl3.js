const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland',
    'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'South Africa', 'New Zealand'
  ];
  
  const webTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'
  ];
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  
  // Copy countries array (Avoid mutation)
  const countriesCopy = [...countries];
  
  // Sort the copied array and store in a variable sortedCountries
  const sortedCountries = [...countriesCopy].sort();
  
  // Sort the webTechs array and mernStack array
  const sortedWebTechs = [...webTechs].sort();
  const sortedMernStack = [...mernStack].sort();
  
  // Extract all the countries contain the word 'land' from the countries array and print it as array
  const countriesWithLand = countries.filter(country => country.includes('land'));
  
  // Find the country containing the highest number of characters in the countries array
  const longestCountry = countries.reduce((longest, country) => longest.length >= country.length ? longest : country, '');
  
  // Extract all the countries containing only four characters from the countries array and print it as array
  const countriesWithFourChars = countries.filter(country => country.length === 4);
  
  // Extract all the countries containing two or more words from the countries array and print it as array
  const countriesWithTwoOrMoreWords = countries.filter(country => country.split(' ').length >= 2);
  
  // Reverse the countries array and capitalize each country and store it as an array
  const reversedAndCapitalizedCountries = countries.slice().reverse().map(country => country.toUpperCase());
  
  // Example usage
  console.log("Countries Copy:", countriesCopy);
  console.log("Sorted Countries:", sortedCountries);
  console.log("Sorted WebTechs:", sortedWebTechs);
  console.log("Sorted MERN Stack:", sortedMernStack);
  console.log("Countries with 'land':", countriesWithLand);
  console.log("Country with the highest number of characters:", longestCountry);
  console.log("Countries with four characters:", countriesWithFourChars);
  console.log("Countries with two or more words:", countriesWithTwoOrMoreWords);
  console.log("Reversed and Capitalized Countries:", reversedAndCapitalizedCountries);
  