

## Day 10: Sets and Maps in JavaScript

### Sets
- **Definition**: A `Set` is a collection of unique elements.
- **Creating an Empty Set**:
  ```javascript
  const companies = new Set();
  console.log(companies); // Set(0) {}
  ```
- **Creating a Set from an Array**:
  ```javascript
  const languages = ['English', 'Finnish', 'English', 'French', 'Spanish', 'English', 'French'];
  const setOfLanguages = new Set(languages);
  console.log(setOfLanguages); // Set(4) {"English", "Finnish", "French", "Spanish"}
  ```
- **Iterating Through a Set**:
  ```javascript
  for (const language of setOfLanguages) {
    console.log(language);
  }
  ```
- **Adding Elements to a Set**:
  ```javascript
  const companies = new Set();
  companies.add('Google').add('Facebook').add('Amazon');
  console.log(companies); // Set(3) {"Google", "Facebook", "Amazon"}
  ```
- **Deleting an Element**:
  ```javascript
  console.log(companies.delete('Google')); // true
  console.log(companies.size); // 2
  ```
- **Checking for Existence**:
  ```javascript
  console.log(companies.has('Facebook')); // true
  console.log(companies.has('Apple')); // false
  ```
- **Clearing a Set**:
  ```javascript
  companies.clear();
  console.log(companies); // Set(0) {}
  ```
- **Example**:
  ```javascript
  const languages = ['English', 'Finnish', 'English', 'French', 'Spanish'];
  const langSet = new Set(languages);
  console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
  ```

### Map
- **Creating an Empty Map**:
  ```javascript
  const map = new Map();
  console.log(map); // Map(0) {}
  ```
- **Creating a Map from an Array**:
  ```javascript
  const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
  const map = new Map(countries);
  console.log(map); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
  ```
- **Adding Values to a Map**:
  ```javascript
  const countriesMap = new Map();
  countriesMap.set('Finland', 'Helsinki').set('Sweden', 'Stockholm');
  console.log(countriesMap.size); // 2
  ```
- **Getting a Value from a Map**:
  ```javascript
  console.log(countriesMap.get('Finland')); // Helsinki
  ```
- **Checking Key Existence**:
  ```javascript
  console.log(countriesMap.has('Sweden')); // true
  ```
- **Iterating Through a Map**:
  ```javascript
  for (const [country, city] of countriesMap) {
    console.log(country, city);
  }
  ```

---
