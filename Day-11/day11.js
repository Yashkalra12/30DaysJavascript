
// Day 11: Destructuring and Spread

// Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries;

// Destructure the rectangle object by its properties or keys.
const { width, height, area, perimeter } = rectangle;

// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

// Find the persons who have less than two skills
for (const { name, skills } of users) {
  if (skills.length < 2) {
    console.log(name);
  }
}

// Exercises: Level 3
// Destructure the countries object print name, capital, population and languages of all countries
const countriesData = [
  { name: 'Finland', capital: 'Helsinki', population: 5536146, languages: ['Finnish', 'Swedish'] },
  { name: 'Estonia', capital: 'Tallinn', population: 1328360, languages: ['Estonian'] },
  { name: 'Sweden', capital: 'Stockholm', population: 10327589, languages: ['Swedish'] },
  { name: 'Denmark', capital: 'Copenhagen', population: 5814461, languages: ['Danish'] },
  { name: 'Norway', capital: 'Oslo', population: 5421241, languages: ['Norwegian'] }
];

for (const { name, capital, population, languages } of countriesData) {
  console.log(name, capital, population, languages);
}

// A junior developer structure student name, skills and score in array of arrays which may not easy to read.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObject = (arr) => {
  return arr.map(([name, skills, scores]) => ({ name, skills, scores }));
};

console.log(convertArrayToObject(students));

// Copy the student object to newStudent without mutating the original object. 
// In the new object add the following:
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const studentObj = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [...studentObj.skills.frontEnd, { skill: 'BootStrap', level: 8 }],
    backEnd: [...studentObj.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...studentObj.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...studentObj.skills.dataScience, 'SQL']
  }
};

console.log(newStudent);
