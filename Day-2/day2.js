let challenege="30 Days Of JavaScript"
console.log(challenege);
console.log(challenege.length);
console.log(challenege.toUpperCase());
console.log(challenege.toLowerCase());
console.log(challenege.substring(0,2));

console.log(challenege.slice(3));

console.log(challenege.includes("Script"));
console.log(challenege.split(' '));

let companies="Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companies.split(","));
let newstr=challenege.replace("JavaScript","Python");
console.log(newstr);

console.log(challenege.charAt(15));
console.log(challenege.charCodeAt("J"));

// indexOf and lastIndexOf example
let string1 = "30 Days Of JavaScript";

// Use indexOf to determine the position of the first occurrence of 'a'
let firstIndexOfA = string1.indexOf('a');
console.log(firstIndexOfA); // Outputs: 4

// Use lastIndexOf to determine the position of the last occurrence of 'a'
let lastIndexOfA = string1.lastIndexOf('a');
console.log(lastIndexOfA); // Outputs: 14

// Sentence example
let sentence = "You cannot end a sentence with because because because is a conjunction";

// Use indexOf to find the position of the first occurrence of the word 'because'
let firstIndexOfBecause = sentence.indexOf('because');
console.log(firstIndexOfBecause); // Outputs: 31

// Use lastIndexOf to find the position of the last occurrence of the word 'because'
let lastIndexOfBecause = sentence.lastIndexOf('because');
console.log(lastIndexOfBecause); // Outputs: 47

// Use search to find the position of the first occurrence of the word 'because'
let searchIndexOfBecause = sentence.search('because');
console.log(searchIndexOfBecause); // Outputs: 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string
let stringWithSpaces = " 30 Days Of JavaScript ";
let trimmedString = stringWithSpaces.trim();
console.log(trimmedString); // Outputs: "30 Days Of JavaScript"

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let startsWith30 = string1.startsWith("30");
console.log(startsWith30); // Outputs: true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let endsWithJavaScript = string1.endsWith("JavaScript");
console.log(endsWithJavaScript); // Outputs: true

// Use match() method to find all the 'a’s in 30 Days Of JavaScript
let allAs = string1.match(/a/g);
console.log(allAs); // Outputs: [ 'a', 'a', 'a' ]

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let part1 = "30 Days Of";
let part2 = " JavaScript";
let fullString = part1.concat(part2);
console.log(fullString); // Outputs: "30 Days Of JavaScript"

// Use repeat() method to print 30 Days Of JavaScript 2 times
let repeatedString = string1.repeat(2);
console.log(repeatedString); // Outputs: "30 Days Of JavaScript30 Days Of JavaScript"




