# DOM (Document Object Model) - Day 3

## Event Listeners

### Common HTML Events:
- `onclick`
- `onchange`
- `onmouseover`
- `onmouseout`
- `onkeydown`
- `onkeyup`
- `onload`

### Adding Event Listeners
Use `addEventListener()` to attach event listeners to any DOM element.

```javascript
selectedElement.addEventListener('event', function(e) {
  // Callback function logic
});

// or using arrow function
selectedElement.addEventListener('event', e => {
  // Callback function logic
});
```

### Examples

#### Click Event
Attaching a click event to a button:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model</title>
</head>
<body>
  <button>Click Me</button>
  <script>
    const button = document.querySelector('button');
    button.addEventListener('click', e => {
      console.log('Event object:', e);
      console.log('Selected element:', e.target);
      console.log('Element content:', e.target.textContent);
    });
  </script>
</body>
</html>
```

#### Inline `onclick` Event
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model</title>
</head>
<body>
  <button onclick="clickMe()">Click Me</button>
  <script>
    const clickMe = () => {
      alert('We can attach event on HTML element');
    };
  </script>
</body>
</html>
```

#### Double Click Event
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model</title>
</head>
<body>
  <button>Click Me</button>
  <script>
    const button = document.querySelector('button');
    button.addEventListener('dblclick', e => {
      console.log('Event object:', e);
      console.log('Selected element:', e.target);
      console.log('Element content:', e.target.textContent);
    });
  </script>
</body>
</html>
```

#### Mouse Enter Event
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model</title>
</head>
<body>
  <button>Click Me</button>
  <script>
    const button = document.querySelector('button');
    button.addEventListener('mouseenter', e => {
      console.log('Event object:', e);
      console.log('Selected element:', e.target);
      console.log('Element content:', e.target.textContent);
    });
  </script>
</body>
</html>
```

### List of Events:
- `click`
- `dblclick`
- `mouseenter`
- `mouseleave`
- `mousemove`
- `mouseover`
- `mouseout`
- `input`
- `change`
- `blur`
- `keydown`
- `keyup`
- `keypress`
- `onload`

### Getting Value from an Input Element
Build a simple BMI calculator:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model: 30 Days Of JavaScript</title>
</head>
<body>
  <h1>Body Mass Index Calculator</h1>
  <input type="text" id="mass" placeholder="Mass in Kilogram" />
  <input type="text" id="height" placeholder="Height in meters" />
  <button>Calculate BMI</button>
  <script>
    const mass = document.querySelector('#mass');
    const height = document.querySelector('#height');
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      const bmi = mass.value / (height.value ** 2);
      alert(`Your BMI is ${bmi.toFixed(2)}`);
      console.log(bmi);
    });
  </script>
</body>
</html>
```

### Input Event and Change
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model: 30 Days Of JavaScript</title>
</head>
<body>
  <h1>Data Binding using input or change event</h1>
  <input type="text" placeholder="say something" />
  <p></p>
  <script>
    const input = document.querySelector('input');
    const p = document.querySelector('p');
    input.addEventListener('input', e => {
      p.textContent = e.target.value;
    });
  </script>
</body>
</html>
```

### Blur Event
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model: 30 Days Of JavaScript</title>
</head>
<body>
  <h1>Giving feedback using blur event</h1>
  <input type="text" placeholder="say something" />
  <p></p>
  <script>
    const input = document.querySelector('input');
    const p = document.querySelector('p');
    input.addEventListener('blur', e => {
      p.textContent = 'Field is required';
      p.style.color = 'red';
    });
  </script>
</body>
</html>
```

### Keypress, Keydown, and Keyup Events
```html
<!DOCTYPE html>
<html>
<head>
  <title>Document Object Model: 30 Days Of JavaScript</title>
</head>
<body>
  <h1>Key events: Press any key</h1>
  <script>
    document.body.addEventListener('keypress', e => {
      alert(e.keyCode);
    });
  </script>
</body>
</html>
```

