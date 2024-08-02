### Document Object Model (DOM) - Day 21

#### Overview
The HTML document is structured as a JavaScript object, and every HTML element has different properties that allow manipulation through JavaScript. You can get, create, append, or remove HTML elements using JavaScript. Selecting HTML elements with JavaScript is similar to CSS selection using tag names, IDs, class names, or other attributes.

#### Getting Elements
To access already created elements, use various JavaScript methods.

**Example HTML:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class='title' id='first-title'>First Title</h1>
    <h1 class='title' id='second-title'>Second Title</h1>
    <h1 class='title' id='third-title'>Third Title</h1>
    <h1></h1>
  </body>
</html>
```

##### By Tag Name
- `getElementsByTagName('tagname')` returns an HTMLCollection object.
```javascript
const allTitles = document.getElementsByTagName('h1');
console.log(allTitles); // HTMLCollection
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}
```

##### By Class Name
- `getElementsByClassName('classname')` returns an HTMLCollection object.
```javascript
const allTitles = document.getElementsByClassName('title');
console.log(allTitles); // HTMLCollection
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}
```

##### By ID
- `getElementById('id')` targets a single HTML element.
```javascript
let firstTitle = document.getElementById('first-title');
console.log(firstTitle); // <h1>First Title</h1>
```

##### By Query Selector Methods
- `querySelector(selector)` selects the first element that matches the CSS selector.
```javascript
let firstTitle = document.querySelector('h1');
firstTitle = document.querySelector('#first-title');
firstTitle = document.querySelector('.title');
```
- `querySelectorAll(selector)` selects all elements that match the CSS selector, returning a NodeList.
```javascript
const allTitles = document.querySelectorAll('h1');
console.log(allTitles.length); // 4

allTitles.forEach(title => console.log(title));
```

#### Adding Attributes
Attributes add additional information to HTML elements.

##### Using `setAttribute`
```javascript
const titles = document.querySelectorAll('h1');
titles[3].setAttribute('class', 'title');
titles[3].setAttribute('id', 'fourth-title');
```

##### Without `setAttribute`
```javascript
titles[3].className = 'title';
titles[3].id = 'fourth-title';
```

##### Using `classList`
```javascript
titles[3].classList.add('title', 'header-title');
titles[3].classList.remove('title', 'header-title');
```

#### Adding Text to HTML Elements
Text can be added using `textContent` or `innerHTML`.

##### Using `textContent`
```javascript
const titles = document.querySelectorAll('h1');
titles[3].textContent = 'Fourth Title';
```

##### Using `innerHTML`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone: DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
      const lists = `
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Ongoing</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>`;
      const ul = document.querySelector('ul');
      ul.innerHTML = lists;
    </script>
  </body>
</html>
```

#### Adding Style
CSS properties in JavaScript are written in camelCase.

##### Example: Adding Font Size and Colors
```javascript
const titles = document.querySelectorAll('h1');
titles.forEach((title, i) => {
  title.style.fontSize = '24px'; // All titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green';
  } else {
    title.style.color = 'red';
  }
});
```

##### Example: Adding Background Colors
```javascript
titles.forEach((title, i) => {
  title.style.backgroundColor = i % 2 === 0 ? 'green' : 'red';
});
```

##### Example: Adding Different Font Sizes
```javascript
titles.forEach((title, i) => {
  title.style.fontSize = i % 2 === 0 ? '20px' : '30px';
});
```

### Exercises
#### Exercise: Level 1
1. Create an `index.html` file and add four `p` elements.
2. Get the first paragraph using `document.querySelector('p')`.
3. Get each paragraph by their IDs using `document.querySelector('#id')`.
4. Get all `p` elements as a NodeList using `document.querySelectorAll('p')`.
5. Loop through the NodeList and get the text content of each paragraph.
6. Set text content for the fourth paragraph.
7. Set `id` and `class` attributes for all paragraphs using different methods.

#### Exercise: Level 2
1. Change the style of each paragraph using JavaScript (e.g., color, background, border, font-size, font-family).
2. Loop through each paragraph and set the first and third paragraphs to green, and the second and fourth to red.
3. Set text content, `id`, and `class` for each paragraph.

#### Exercise: Level 3 - Mini Project
1. Develop an application with the following requirements:
   - The year color changes every second.
   - The date and time background color changes every second.
   - Completed challenges have a green background.
   - Ongoing challenges have a yellow background.
   - Upcoming challenges have a red background.