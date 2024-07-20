### Day 12: Regular Expressions (RegExp)

#### Overview
- **Regular Expressions (RegExp)**: A mini-language for finding patterns in data.
- **Usage**: Check patterns in strings using either the RegExp constructor or forward slashes with optional flags.

#### RegExp Parameters
1. **Pattern**: The required search pattern.
2. **Flags**: Optional parameters that determine the type of searching:
   - **g**: Global search.
   - **i**: Case-insensitive search.
   - **m**: Multiline search.

#### Creating Patterns
1. **Using RegExp Constructor**:
   ```javascript
   let pattern = 'love';
   let regEx = new RegExp(pattern);
   let regExGlobalCaseInsensitive = new RegExp('love', 'gi');
   ```

2. **Using Forward Slashes**:
   ```javascript
   let regEx = /love/gi;
   ```

#### RegExp Methods
1. **test()**: Tests for a match in a string, returns true or false.
   ```javascript
   const pattern = /love/;
   pattern.test('I love JavaScript'); // true
   ```

2. **match()**: Returns an array containing all matches.
   ```javascript
   const pattern = /love/g;
   'I love JavaScript'.match(pattern); // ["love"]
   ```

3. **search()**: Returns the index of the match or -1 if not found.
   ```javascript
   const pattern = /love/;
   'I love JavaScript'.search(pattern); // 2
   ```

4. **replace()**: Replaces the matched substring with a replacement substring.
   ```javascript
   const txt = 'Python is great. I recommend Python.';
   txt.replace(/Python/g, 'JavaScript'); 
   // "JavaScript is great. I recommend JavaScript."
   ```

#### Special Characters and Patterns
- **[a-c]**: Matches 'a', 'b', or 'c'.
- **[a-z]**: Matches any lowercase letter.
- **[A-Z]**: Matches any uppercase letter.
- **[0-9]**: Matches any digit.
- **\d**: Matches any digit (0-9).
- **\D**: Matches any non-digit.
- **.**: Matches any character except newline.
- **^**: Matches the start of a string.
- **$**: Matches the end of a string.
- **\***: Matches 0 or more occurrences.
- **+**: Matches 1 or more occurrences.
- **?**: Matches 0 or 1 occurrence.
- **\b**: Matches a word boundary.
- **{n}**: Matches exactly n occurrences.
- **{n,}**: Matches n or more occurrences.
- **{n,m}**: Matches between n and m occurrences.
- **|**: Matches either the pattern before or after the symbol.
- **()**: Groups patterns.

#### Examples
1. **Square Brackets**:
   ```javascript
   const pattern = /[Aa]pple/g;
   'Apple and apple'.match(pattern); // ["Apple", "apple"]
   ```

2. **Escape Characters**:
   ```javascript
   const pattern = /\d+/g;
   '2020'.match(pattern); // ["2020"]
   ```

3. **Quantifiers**:
   ```javascript
   const pattern = /\d{4}/g;
   'Year 2020'.match(pattern); // ["2020"]
   ```

4. **Starts With (^)**:
   ```javascript
   const pattern = /^This/;
   'This is a test.'.match(pattern); // ["This"]
   ```

5. **Negation**:
   ```javascript
   const pattern = /[^A-Za-z,. ]+/g;
   'Only numbers 1234'.match(pattern); // ["1234"]
   ```

6. **Exact Match**:
   ```javascript
   const pattern = /^[A-Z][a-z]{3,12}$/;
   pattern.test('Asabeneh'); // true
   ```

#### Summary
- Regular expressions are powerful tools for pattern matching and text processing.
- Practice using RegExp to become proficient in extracting and manipulating text data.
