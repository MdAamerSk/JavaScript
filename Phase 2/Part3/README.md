# JavaScript Arrays Practice 🚀

![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-green)
![Practice](https://img.shields.io/badge/Type-Practice%20Project-orange)

---

## About This Project 📚

This is a structured JavaScript learning project focused on mastering **arrays from basics to intermediate concepts**. It's not theory—it's hands-on practice building real logic and understanding how to manipulate arrays effectively.

The project is divided into two levels:
- **Beginner Level**: Core array fundamentals and basic operations
- **Intermediate Level**: Advanced concepts like splicing, slicing, and destructuring

Each concept is implemented with working code examples to reinforce learning through practice.

---

## Concepts Practiced 🎯

- ✅ Creating arrays
- ✅ Accessing array elements by index
- ✅ Array length property
- ✅ Push and pop methods (add/remove from end)
- ✅ Unshift and shift methods (add/remove from beginning)
- ✅ Reversing arrays
- ✅ Sorting arrays (ascending and descending)
- ✅ Splice method (remove and insert elements)
- ✅ Slice method (copy arrays)
- ✅ indexOf method (find element position)
- ✅ includes method (check if element exists)
- ✅ join method (convert array to string)
- ✅ Spread operator (`...`) for merging and copying
- ✅ Math.max with spread operator
- ✅ Destructuring assignment (swap variables)

---

## Part 3 — Arrays Basics

Master the fundamentals of working with arrays and manipulating collections of data.

### Beginner Level (1-10)

| Operation | Purpose |
|-----------|---------|
| Create array | Initialize a collection of elements |
| Access elements | Retrieve first and last items |
| Array length | Determine number of elements |
| Push | Add element at end |
| Pop | Remove last element |
| Unshift | Add element at beginning |
| Shift | Remove first element |
| Reverse | Flip array order |
| Sort ascending | Order numbers low to high |
| Sort descending | Order numbers high to low |

**Key Learnings**: Understanding how arrays store data and basic methods to add/remove elements.

---

### 1. Create an Array

Store multiple values in a single variable.

```javascript
let fruits = ["apple", "mango", "kivi", "avacardo", "lichi"];
console.log(fruits);
```

---

### 2. Access First and Last Elements

Retrieve specific elements using index notation.

```javascript
console.log(fruits[0], fruits[fruits.length - 1]); // apple lichi
```

---

### 3. Array Length

Get the total count of elements.

```javascript
console.log(fruits.length); // 5
```

---

### 4. Push Method

Add an element to the end of the array.

```javascript
fruits.push("orange");
console.log(fruits); // [..., "orange"]
```

---

### 5. Pop Method

Remove and return the last element.

```javascript
console.log(fruits.pop()); // "orange"
```

---

### 6. Unshift Method

Add an element to the beginning of the array.

```javascript
fruits.unshift("orange");
console.log(fruits); // ["orange", ...]
```

---

### 7. Shift Method

Remove and return the first element.

```javascript
console.log(fruits.shift()); // "orange"
console.log(fruits);
```

---

### 8. Reverse Array

Reverse the order of elements.

```javascript
fruits.reverse();
console.log(fruits); // Reversed order
```

---

### 9. Sort Numbers Ascending

Sort array in ascending order using a comparator function.

```javascript
let num = [1, 5, 3, 10, 7, 0];
num.sort((a, b) => a - b);
console.log(num); // [0, 1, 3, 5, 7, 10]
```

---

### 10. Sort Numbers Descending

Sort array in descending order.

```javascript
num.sort((a, b) => b - a);
console.log(num); // [10, 7, 5, 3, 1, 0]
```

---

## Intermediate Level (1-10)

| Operation | Purpose |
|-----------|---------|
| Splice (remove) | Remove elements from specific position |
| Splice (insert) | Insert elements at specific position |
| Slice | Copy portion of array |
| indexOf | Find position of element |
| includes | Check if element exists |
| join | Convert array to string |
| Spread operator merge | Combine multiple arrays |
| Spread operator copy | Create independent array copy |
| Math.max with spread | Find maximum value |
| Destructuring swap | Exchange variable values |

**Key Learnings**: Advanced manipulation techniques and modern JavaScript syntax for working with arrays.

---

### 1. Splice to Remove Elements

Remove elements starting at a specific index.

```javascript
fruits.splice(2, 1); // Remove 1 element starting at index 2
console.log(fruits);
```

---

### 2. Splice to Insert Elements

Insert elements at a specific position.

```javascript
fruits.splice(fruits.length, 1, "banana"); // Insert "banana"
console.log(fruits);
```

---

### 3. Slice to Copy Array

Create a shallow copy of the array without modifying the original.

```javascript
let copyFruits = fruits.slice();
console.log(copyFruits);
```

---

### 4. Find Index of Element

Get the position of an element in the array.

```javascript
console.log(fruits.indexOf("mango")); // Returns index or -1
```

---

### 5. Check if Array Contains Value

Verify whether an element exists in the array.

```javascript
console.log(fruits.includes("apple")); // true or false
```

---

### 6. Join Array Elements

Convert array elements into a string with a separator.

```javascript
let joined = fruits.join(" ,");
console.log(joined); // "apple ,mango ,kivi ,..."
```

---

### 7. Merge Arrays Using Spread Operator

Combine multiple arrays into one.

```javascript
let merged = [...fruits, ...num];
console.log(merged); // Combined array
```

**Why it matters**: The spread operator is cleaner and more readable than the old `concat()` method.

---

### 8. Copy Array Using Spread Operator

Create an independent copy of an array.

```javascript
let copySpread = [...num];
console.log(copySpread);
```

**Benefit**: Spread operator creates a shallow copy, useful for avoiding reference issues.

---

### 9. Find Maximum Value

Extract the largest number from an array using Math.max and spread.

```javascript
console.log(Math.max(...copySpread)); // Largest number
```

**Key insight**: Spread operator unpacks array elements as function arguments.

---

### 10. Swap Variables Using Destructuring

Exchange values between two variables elegantly.

```javascript
let a = 10;
let b = 20;

[a, b] = [b, a]; // Destructuring assignment

console.log(a); // 20
console.log(b); // 10
```

**Why it matters**: Destructuring is modern JavaScript syntax that makes code more concise and readable.

---

## Key Learnings 💡

✨ **Array Operations**: Understanding how to create, access, and modify arrays effectively.

✨ **Mutating vs Non-Mutating**: Learning which methods change the original array and which create new ones.

✨ **Method Selection**: Knowing when to use push/pop vs splice, or slice vs spread operator.

✨ **Sorting Logic**: Understanding how comparator functions work with sort for custom ordering.

✨ **Spread Operator**: Mastering this powerful syntax for merging, copying, and unpacking arrays.

✨ **Destructuring**: Using modern JavaScript features for cleaner, more readable code.

✨ **Array Methods**: Solidifying knowledge of essential array methods like indexOf, includes, and join.

---

## Conclusion 🎓

This practice project represents focused effort on mastering JavaScript arrays—a fundamental data structure used in almost every program. By implementing 20 array operations across beginner and intermediate levels, I've gained a deep understanding of how arrays work and when to use specific methods.

Arrays are everywhere in programming. This project solidified my understanding of their behavior, methods, and best practices for manipulating collections of data.

---

## Author 👨‍💻

A personal practice project created while learning JavaScript fundamentals and improving logical thinking.

**Last Updated**: Phase 2 - Part 3 Complete ✅
