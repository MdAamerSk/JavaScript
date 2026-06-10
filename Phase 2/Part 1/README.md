# JavaScript Functions Practice 🚀

![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![Level](https://img.shields.io/badge/Level-Beginner%20to%20Intermediate-green)
![Practice](https://img.shields.io/badge/Type-Practice%20Project-orange)

---

## About This Project 📚

This is a structured JavaScript learning project focused on mastering **functions from basics to intermediate concepts**. It's not theory—it's hands-on practice building real logic and understanding how JavaScript functions work under the hood.

The project is divided into two levels:
- **Beginner Level**: Core function fundamentals
- **Intermediate Level**: Advanced concepts like closures, higher-order functions, and pure/impure functions

Each concept is implemented with working code examples to reinforce learning through practice.

---

## Concepts Practiced 🎯

- ✅ Function declarations
- ✅ Function expressions
- ✅ Arrow functions
- ✅ Default parameters
- ✅ String & array manipulation
- ✅ **Rest parameters (`...args`)** - accepting unlimited arguments
- ✅ **IIFE (Immediately Invoked Function Expression)** - self-executing functions
- ✅ Callback functions & asynchronous behavior
- ✅ Higher-order functions (functions accepting/returning functions)
- ✅ Closures and scope understanding
- ✅ Pure vs impure functions
- ✅ setTimeout & basic async patterns

---

## Part 1 — Beginner Level Functions

Building the foundation with essential function concepts.

### Functions Implemented:

| Function | Purpose |
|----------|---------|
| `greet()` | Simple console output |
| `add(a, b)` | Basic arithmetic |
| `square(num)` | Number manipulation |
| `checkEvenOdd(num)` | Conditional logic |
| `celsiusToFahrenheit(celsius)` | Real-world conversion |
| `welcome(name = "Guest")` | Default parameters |
| `greater(a, b)` | Comparison logic |
| `rectangleArea(length, width)` | Mathematical calculations |
| `checkAge(age)` | Ternary operators |
| `reverseString(str)` | String array methods |

These 10 functions solidified understanding of **function syntax, parameters, return values, and basic logic**.

---

## Part 2 — Intermediate Level Functions

Exploring advanced patterns and real-world JavaScript concepts.

### 1. Function Expression

Function stored in a variable instead of declared traditionally.

```javascript
let expression = function multi(a, b) {
    return a * b;
}
console.log(expression(3, 5)); // 15
```

---

### 2. IIFE (Immediately Invoked Function Expression) ⚡

A function that executes itself instantly. Useful for creating isolated scopes and avoiding global variable pollution.

```javascript
(() => {
    console.log("This runs immediately!");
})();
```

**Why it matters**: IIFE prevents variable naming conflicts in larger projects and is a foundation for module patterns.

---

### 3. Rest Parameters (`...args`) 

Accept unlimited arguments and process them as an array. Cleaner than the old `arguments` object.

```javascript
function sum(...nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
console.log(sum(13, 13, 25)); // 51
```

**Why it matters**: Rest parameters make flexible functions that adapt to any number of inputs—essential for real projects.

---

### 4. Vowel Counter

Counts vowels in a string, combining loops and string methods.

```javascript
function vowel(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let ch of str.toLowerCase()) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}
console.log(vowel("hello")); // 2
```

---

### 5. Palindrome Checker

Validates if a string reads the same forwards and backwards.

```javascript
function isPalindrome(str) {
    str = str.toLowerCase().replace(/ /g, "");
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("Nurses run")); // true
```

---

### 6. Callback Function with setTimeout

Demonstrates asynchronous behavior and how callbacks are executed after a delay.

```javascript
setTimeout(() => {
    console.log("Callback executed after 2 seconds!");
}, 2000);
```

**Why it matters**: Understanding callbacks is crucial for working with async operations, promises, and event handlers.

---

### 7. Higher-Order Function

A function that accepts another function as an argument and uses it.

```javascript
function runTwice(fn) {
    fn();
    fn();
}

function sayHello() {
    console.log("Hello!");
}

runTwice(sayHello); // Outputs "Hello!" twice
```

**Key insight**: Functions are first-class objects in JavaScript—they can be passed around like any other value.

---

### 8. Function Returning a Function (Closure)

A function that returns another function, creating a closure.

```javascript
function mainFunc() {
    return function returnFunc() {
        console.log("Function returned from another function!");
    };
}

let fn = mainFunc();
fn(); // Executes the returned function
```

**Why it matters**: This pattern is the foundation for closures, currying, and factory functions.

---

### 9. Pure Function

A function with no side effects—same input always produces same output.

```javascript
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5)); // 5
```

**Benefit**: Pure functions are predictable, testable, and don't cause unexpected bugs.

---

### 10. Impure Function

A function that modifies external state (global variables). Demonstrates what to avoid.

```javascript
let count = 0;

function setCount() {
    count++;
    return count;
}
console.log(setCount()); // 1
```

**Why it matters**: Recognizing impure functions helps write better, more maintainable code.

---

## Key Learnings 💡

✨ **Function Behavior**: Understanding how JavaScript executes functions, manages scope, and handles the call stack.

✨ **Logical Thinking**: Building complex logic step-by-step with small, focused functions.

✨ **Pure vs Impure**: Learned the difference between side-effect-free and stateful functions—critical for debugging and testing.

✨ **Closures & Scope**: How inner functions access outer function variables and why this matters for data privacy.

✨ **Asynchronous Patterns**: Introduction to callbacks and how JavaScript handles time-based operations.

✨ **Rest Parameters & IIFE**: Mastered modern JavaScript syntax for flexible functions and scoped execution.

✨ **Higher-Order Functions**: Realized that functions are first-class citizens, enabling powerful patterns like functional programming.

---

## Conclusion 🎓

This practice project represents my focused effort on mastering JavaScript functions—the backbone of any JavaScript program. By implementing 20 functions across beginner and intermediate levels, I've built strong foundational knowledge that will translate to building real applications, understanding frameworks, and writing efficient code.

Functions are everywhere in programming. This project solidified my understanding of their behavior, scope, and patterns.

---

## Author 👨‍💻

A personal practice project created while learning JavaScript fundamentals and improving logical thinking.

**Last Updated**: Phase 2 - Part 1 Complete ✅
