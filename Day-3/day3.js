let firstName = 'John';
let lastName = 'Doe';
let country = 'USA';
let city = 'New York';
let age = 30;
let isMarried = false;
let year = 2024;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

console.log(3 > 2);
console.log('hello' !== '');
console.log(1);

console.log(0);
console.log('');
console.log(null);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

console.log('python'.length !== 'jargon'.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

console.log(!('dragon'.includes('on') && 'python'.includes('on')));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(Date.now() / 1000));
