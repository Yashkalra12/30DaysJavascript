console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")

console.log(typeof('10')==typeof(10));

// Check if parseFloat('9.8') is equal to 10, if not make it exactly equal to 10.
let num = parseFloat('9.8');
if (num !== 10) {
  num = 10;
}
console.log(num);

// Check if 'on' is found in both 'python' and 'jargon'
let isOnInPython = 'python'.includes('on');
let isOnInJargon = 'jargon'.includes('on');
console.log(isOnInPython && isOnInJargon);

// Check if 'jargon' is in the sentence
let sentence = 'I hope this course is not full of jargon.';
let hasJargon = sentence.includes('jargon');
console.log(hasJargon);

// Generate a random number between 0 and 100 inclusively
let random0To100 = Math.floor(Math.random() * 101);
console.log(random0To100);

// Generate a random number between 50 and 100 inclusively
let random50To100 = Math.floor(Math.random() * 51) + 50;
console.log(random50To100);

// Generate a random number between 0 and 255 inclusively
let random0To255 = Math.floor(Math.random() * 256);
console.log(random0To255);

// Access the 'JavaScript' string characters using a random number
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
console.log(str[randomIndex]);


console.log("1 1 1 1 1\n" +
    "2 1 2 4 8\n" +
    "3 1 3 9 27\n" +
    "4 1 4 16 64\n" +
    "5 1 5 25 125");

console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`);

// Slicing out the phrase
let sentenced = 'You cannot end a sentence with because because because is a conjunction';
let phrase = sentenced.substr(31, 23);
console.log(phrase); 
