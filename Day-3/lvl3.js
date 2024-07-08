let now = new Date();

let year = now.getFullYear();
let month = (now.getMonth() + 1).toString().padStart(2, '0');
let date = now.getDate().toString().padStart(2, '0');
let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');

let formattedTime = `${year}-${month}-${date} ${hours}:${minutes}`;
console.log(formattedTime);
