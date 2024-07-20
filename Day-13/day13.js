// Exercises: Level 1

// 1. Display the countries array as a table
const countriesArray = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ];
  console.table(countriesArray);
  
  // 2. Display the countries object as a table
  const countriesObject = [
    { country: 'Finland', capital: 'Helsinki' },
    { country: 'Sweden', capital: 'Stockholm' },
    { country: 'Norway', capital: 'Oslo' }
  ];
  console.table(countriesObject);
  
  // 3. Use console.group() to group logs
  console.group('Countries Info');
  console.log('Array Format:');
  console.table(countriesArray);
  console.log('Object Format:');
  console.table(countriesObject);
  console.groupEnd();
  
  // Exercises: Level 2
  
  // 1. 10 > 2 * 10 use console.assert()
  console.assert(10 > 2 * 10, 'Assertion Failed: 10 is not greater than 2 * 10');
  
  // 2. Write a warning message using console.warn()
  console.warn('This is a warning message from Yash Kalra');
  
  // 3. Write an error message using console.error()
  console.error('This is an error message from Yash Kalra');
  
  // Exercises: Level 3
  
  // 1. Check the speed difference among the following loops
  
  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ];
  
  // while loop
  console.time('while loop');
  let i = 0;
  while (i < countries.length) {
    console.log(countries[i][0], countries[i][1]);
    i++;
  }
  console.timeEnd('while loop');
  
  // for loop
  console.time('for loop');
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
  }
  console.timeEnd('for loop');
  
  // for of loop
  console.time('for of loop');
  for (const [country, capital] of countries) {
    console.log(country, capital);
  }
  console.timeEnd('for of loop');
  
  // forEach loop
  console.time('forEach loop');
  countries.forEach(([country, capital]) => {
    console.log(country, capital);
  });
  console.timeEnd('forEach loop');
  