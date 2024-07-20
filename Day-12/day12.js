// Exercises: Level 1

// 1. Calculate the total annual income
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let salaryPattern = /\d+/g;
let incomes = text.match(salaryPattern).map(Number);
let totalAnnualIncome = (incomes[0] * 12) + incomes[1] + (incomes[2] * 12);
console.log(totalAnnualIncome); // Output: 124000

// 2. Distance between the two furthest particles
let points = [-1, 2, -4, -3, -1, 0, 4, 8];
points.sort((a, b) => a - b);
let distance = points[points.length - 1] - points[0];
console.log(distance); // Output: 12

// 3. Pattern to identify valid JavaScript variable
function isValidVariable(variable) {
  let validVariablePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
  return validVariablePattern.test(variable);
}

console.log(isValidVariable('first_name')); // True
console.log(isValidVariable('first-name')); // False
console.log(isValidVariable('1first_name')); // False
console.log(isValidVariable('firstname')); // True

// Exercises: Level 2

// 1. Ten most frequent words
function tenMostFrequentWords(text, num = 10) {
  let words = text.match(/\w+/g);
  let wordCounts = words.reduce((acc, word) => {
    word = word.toLowerCase();
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]).slice(0, num);

  return sortedWords.map(([word, count]) => ({ word, count }));
}

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));

// Exercises: Level 3

// 1. Clean text
function cleanText(text) {
  return text.replace(/[^\w\s]/g, '');
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let cleanedText = cleanText(sentence);
console.log(cleanedText);

// 2. Most frequent words after cleaning
function mostFrequentWords(text, num = 3) {
  let words = text.match(/\w+/g);
  let wordCounts = words.reduce((acc, word) => {
    word = word.toLowerCase();
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  let sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]).slice(0, num);

  return sortedWords.map(([word, count]) => ({ word, count }));
}

console.log(mostFrequentWords(cleanedText));
