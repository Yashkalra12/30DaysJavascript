# Day 16: JSON

## JSON Overview
JSON stands for JavaScript Object Notation. It is a lightweight data format for storing and transporting data, primarily used when data is sent from a server to a client. JSON syntax is derived from JavaScript object notation but is text-only.

## Basic JSON Example
```json
{
  "users": [
    {
      "firstName": "Yash",
      "lastName": "Kalra",
      "age": 25,
      "email": "yash@kalra.com"
    },
    {
      "firstName": "Alex",
      "lastName": "James",
      "age": 30,
      "email": "alex@james.com"
    }
  ]
}
```
In JSON:
- Keys must be strings (enclosed in double quotes).
- Values can be strings, numbers, arrays, objects, true, false, or null.

## JSON vs JavaScript Object
JSON keys must be in double quotes, whereas JavaScript object keys do not require quotes.

## Converting JSON to JavaScript Object
Use `JSON.parse()` to convert JSON text to a JavaScript object.
```javascript
const jsonString = '{"firstName": "Yash", "lastName": "Kalra", "age": 25}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);
```

## Using Reviver Function with `JSON.parse()`
A reviver function can be used to modify values during parsing.
```javascript
const jsonString = '{"firstName": "Yash", "lastName": "Kalra", "age": 25}';
const jsonObj = JSON.parse(jsonString, (key, value) => {
  return typeof value === 'string' ? value.toUpperCase() : value;
});
console.log(jsonObj);
```

## Converting JavaScript Object to JSON
Use `JSON.stringify()` to convert a JavaScript object to JSON text.
```javascript
const user = {
  firstName: 'Yash',
  lastName: 'Kalra',
  age: 25,
  email: 'yash@kalra.com'
};
const jsonString = JSON.stringify(user, null, 4);
console.log(jsonString);
```

## Filtering with `JSON.stringify()`
You can filter the keys to be included in the JSON string.
```javascript
const user = {
  firstName: 'Yash',
  lastName: 'Kalra',
  age: 25,
  email: 'yash@kalra.com',
  skills: ['HTML', 'CSS', 'JavaScript']
};
const jsonString = JSON.stringify(user, ['firstName', 'lastName', 'age'], 4);
console.log(jsonString);
```

JSON is a simple, text-based format for data exchange. Understanding JSON is crucial for web development and APIs.