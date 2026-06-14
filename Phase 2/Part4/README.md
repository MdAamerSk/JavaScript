# JavaScript Array Iteration Methods Practice 🚀

![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![Level](https://img.shields.io/badge/Level-Intermediate-green)
![Practice](https://img.shields.io/badge/Type-Practice%20Project-orange)

---

## About This Project 📚

This is a comprehensive JavaScript learning project focused on mastering **array iteration methods** and functional programming concepts. It goes beyond basic array operations to explore powerful built-in methods that transform, filter, and aggregate data.

The project covers 19 advanced array operations that demonstrate:
- Iterating through arrays efficiently
- Transforming data with functional methods
- Filtering and finding elements
- Reducing arrays to single values
- Handling nested structures
- Object-oriented array manipulation

Each concept is implemented with working code examples to reinforce learning through practical, hands-on practice.

---

## Concepts Practiced 🎯

- ✅ forEach - Iterate and execute callback on each element
- ✅ map - Transform array elements to new array
- ✅ filter - Select elements that match condition
- ✅ reduce - Accumulate values into single result
- ✅ find - Locate first element matching condition
- ✅ findIndex - Get index of first matching element
- ✅ some - Check if any element matches condition
- ✅ every - Check if all elements match condition
- ✅ String transformation methods
- ✅ Working with objects in arrays
- ✅ Calculating averages with reduce
- ✅ Counting occurrences using reduce
- ✅ Flattening nested arrays with flat()
- ✅ Removing duplicates with Set
- ✅ Sorting objects by properties
- ✅ Reducing to calculate totals
- ✅ Grouping data by property
- ✅ Chaining multiple methods

---

## Part 4 — Array Iteration Methods (19 Examples)

Master functional programming concepts and transform data efficiently using iteration methods.

### Overview of Methods

| Method | Purpose | Returns |
|--------|---------|---------|
| forEach | Execute function on each element | undefined |
| map | Transform each element to new value | New array |
| filter | Select elements matching condition | New array |
| reduce | Accumulate values to single result | Any value |
| find | Get first element matching condition | First match or undefined |
| findIndex | Get index of first matching element | Index or -1 |
| some | Check if any element matches | Boolean |
| every | Check if all elements match | Boolean |
| flat | Flatten nested arrays | Flattened array |
| sort | Order array elements | Sorted array |

**Key Learnings**: Understanding functional programming patterns and how to combine methods for powerful data transformations.

---

## Detailed Examples

### 1. Use forEach to Print All Numbers Doubled

Loop through array and perform action on each element without returning a new array.

```javascript
let num = [1, 2, 4, 6, 9];

num.forEach((e) => console.log(e * 2));
// Output: 2, 4, 8, 12, 18
```

**When to use**: When you need to perform side effects (logging, updating UI) without transforming the array.

---

### 2. Use map to Square All Numbers

Transform each element and create a new array with the results.

```javascript
const squared = num.map((e) => e ** 2);
console.log(squared);
// Output: [1, 4, 16, 36, 81]
```

**Key insight**: map always returns a new array with the same length as the original.

---

### 3. Use filter to Get Even Numbers

Select only elements that match a specific condition.

```javascript
console.log(num.filter((e) => e % 2 === 0));
// Output: [2, 4, 6]
```

**Why it matters**: Filter helps you extract relevant data from larger datasets.

---

### 4. Use reduce to Calculate Sum

Accumulate values by applying a function cumulatively.

```javascript
const sum = num.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(sum);
// Output: 22
```

**Understanding reduce**: 
- `acc` (accumulator) = running total
- `val` (current value) = current element
- `0` = initial value for accumulator

---

### 5. Use reduce to Find Maximum Number

Use reduce to find the largest value in an array.

```javascript
console.log(num.reduce((acc, value) => acc > value ? acc : value));
// Output: 9
```

**Alternative approach**: Compare values and keep the larger one.

---

### 6. Use find to Get First Even Number

Return the first element that matches the condition.

```javascript
console.log(num.find((e) => {return e % 2 === 0;}));
// Output: 2
```

**Difference from filter**: find returns single element, filter returns array of all matches.

---

### 7. Use findIndex to Locate Number > 50

Get the index position of the first element matching the condition.

```javascript
console.log(squared.findIndex((e) => e > 50));
// Output: 3 (index of 81)
```

**Use case**: When you need the position of an element, not the element itself.

---

### 8. Use some to Check if Any Number is Negative

Check if at least one element satisfies the condition (returns boolean).

```javascript
console.log(num.some((e) => e < 0));
// Output: false
```

**When to use**: For validation checks - "does this array have at least one invalid item?"

---

### 9. Use every to Check if All Numbers are Positive

Verify that all elements satisfy the condition.

```javascript
console.log(squared.every((e) => e > 0));
// Output: true
```

**Real-world example**: Checking if all form fields are valid before submission.

---

### 10. Create Array of Names and Convert All to Uppercase

Transform string array elements to uppercase.

```javascript
let names = ["anil", "sunil", "mukesh", "gukesh"];

console.log(names.map((e) => e.toLocaleUpperCase()));
// Output: ["ANIL", "SUNIL", "MUKESH", "GUKESH"]
```

**Key insight**: map works with any transformation, including string methods.

---

### 11. Filter All Students with Marks > 80

Filter an array of objects based on a property value.

```javascript
const students = [
  { name: "Anil", marks: 85 },
  { name: "Sunil", marks: 75 },
  { name: "Mukesh", marks: 90 },
  { name: "Gukesh", marks: 60 }
];

console.log(students.filter(student => student.marks > 80));
// Output: [
//   { name: "Anil", marks: 85 },
//   { name: "Mukesh", marks: 90 }
// ]
```

**Real-world use**: Filtering results, products, or records based on criteria.

---

### 12. Calculate Average Using reduce

Combine reduce with length to compute average value.

```javascript
const nums = [10, 20, 30, 40, 50];

const average = nums.reduce((acc, val) => acc + val, 0) / nums.length;

console.log(average);
// Output: 30
```

**Pattern**: sum ÷ count = average

---

### 13. Count Occurrences of Numbers in Array

Use reduce to build an object with frequency counts.

```javascript
const arr = [1, 2, 2, 3, 1, 4, 2];

const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: { 1: 2, 2: 3, 3: 1, 4: 1 }
```

**Key technique**: Using logical OR (`||`) to initialize undefined values to 0.

---

### 14. Flatten Nested Arrays Using flat

Simplify deeply nested arrays into a single-level array.

```javascript
const nested = [1, 2, [3, 4], [5, [6, 7]]];

console.log(nested.flat(2));
// Output: [1, 2, 3, 4, 5, 6, 7]
```

**Parameter explanation**: `flat(2)` means flatten 2 levels deep.

---

### 15. Remove Duplicates Using Set

Eliminate duplicate values by converting to Set and back to array.

```javascript
const duplicates = [1, 2, 2, 3, 4, 4, 5];

console.log([...new Set(duplicates)]);
// Output: [1, 2, 3, 4, 5]
```

**Why it works**: Set automatically removes duplicates, spread operator converts back to array.

---

### 16. Sort Array of Objects by Age

Sort an array of objects using a comparator function.

```javascript
const users = [
  { name: "Anil", age: 25 },
  { name: "Sunil", age: 20 },
  { name: "Mukesh", age: 30 }
];

console.log(users.sort((a, b) => a.age - b.age));
// Output (sorted by age):
// [
//   { name: "Sunil", age: 20 },
//   { name: "Anil", age: 25 },
//   { name: "Mukesh", age: 30 }
// ]
```

**Sorting logic**: 
- Negative result = a before b
- Positive result = b before a
- Zero = no change

---

### 17. Find Total Price of Shopping Cart

Calculate sum of object properties using reduce.

```javascript
const cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 },
  { item: "Bag", price: 100 }
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);
// Output: 160
```

**Real-world application**: E-commerce cart total calculation.

---

### 18. Group Users by Age

Use reduce to organize data into groups based on a property.

```javascript
const people = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 },
  { name: "D", age: 25 }
];

const grouped = people.reduce((acc, person) => {
  if (!acc[person.age]) {
    acc[person.age] = [];
  }

  acc[person.age].push(person);

  return acc;
}, {});

console.log(grouped);
// Output:
// {
//   20: [{ name: "A", age: 20 }, { name: "C", age: 20 }],
//   25: [{ name: "B", age: 25 }, { name: "D", age: 25 }]
// }
```

**Pattern**: Check if key exists → create if not → push value.

---

### 19. Chain Filter and Map

Combine multiple array methods for complex transformations.

```javascript
const numbers = [10, 15, 20, 25, 30];

const result = numbers
  .filter(num => num > 15)
  .map(num => num * 2);

console.log(result);
// Output: [40, 50, 60]
```

**Execution order**:
1. Filter: [10, 15, 20, 25, 30] → [20, 25, 30]
2. Map: [20, 25, 30] → [40, 50, 60]

**Why it's powerful**: Chain methods to perform complex transformations in readable code.

---

## Key Learnings 💡

✨ **Functional Programming**: Understanding how to use functions as parameters for elegant data transformations.

✨ **Method Selection**: Knowing when to use forEach, map, filter, or reduce for different tasks.

✨ **Reduce Power**: Learning that reduce can solve almost any accumulation problem.

✨ **Array Methods with Objects**: Using iteration methods effectively with arrays of objects.

✨ **Method Chaining**: Combining multiple methods for complex data transformations.

✨ **Performance Awareness**: Understanding which methods create new arrays vs modify in place.

✨ **Real-world Applications**: Seeing practical use cases like e-commerce, filtering, and grouping.

✨ **Immutability**: Preferring non-mutating methods (map, filter) over mutating ones (sort, splice).

---

## Common Patterns 🔧

| Pattern | Methods Used | Purpose |
|---------|--------------|---------|
| Transform | map | Convert array values |
| Filter | filter | Select matching elements |
| Search | find, findIndex | Locate specific elements |
| Validate | some, every | Check conditions |
| Aggregate | reduce | Combine into single value |
| Count | reduce | Tally occurrences |
| Group | reduce | Organize by property |
| Chain | multiple methods | Complex operations |

---

## Conclusion 🎓

This practice project demonstrates mastery of array iteration methods—the backbone of functional programming in JavaScript. By implementing 19 different operations, you've learned to:

✅ Transform data efficiently
✅ Filter and find elements
✅ Reduce complex operations to simple logic
✅ Solve real-world problems with elegant code
✅ Chain methods for powerful transformations

Array iteration methods are used in nearly every professional JavaScript project. Mastering these patterns will significantly improve your ability to write clean, efficient, and maintainable code.

---

## Author 👨‍💻

A personal practice project created while learning JavaScript array iteration methods and functional programming concepts.

**Last Updated**: Phase 2 - Part 4 Complete ✅
