const sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const loveCount = (sentence1.match(/love/gi) || []).length;
console.log(loveCount);


const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const becauseCount = (sentence2.match(/because/g) || []).length;
console.log(becauseCount);



const text = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Clean the text and split into words
const cleanedText = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ').toLowerCase();
const words = cleanedText.split(' ');

// Count word frequencies
const wordCount = words.reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});

// Find the most frequent word
const mostFrequentWord = Object.keys(wordCount).reduce((a, b) => wordCount[a] > wordCount[b] ? a : b);
console.log(mostFrequentWord); 




const incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const monthlyIncome = incomeText.match(/(\d+) euro from salary per month/)[1];
const annualBonus = incomeText.match(/(\d+) euro annual bonus/)[1];
const onlineCoursesIncome = incomeText.match(/(\d+) euro online courses per month/)[1];
const totalIncome = (Number(monthlyIncome) * 12) + Number(annualBonus) + (Number(onlineCoursesIncome) * 12);
console.log(totalIncome); 


