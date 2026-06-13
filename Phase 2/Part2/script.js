//Part 2 — Advanced Functions (21–35)

//1.Write a recursive function for factorial.

function factorial(n){
    if(n === 0 || n ===1){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));

//2.

function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));

//3.Create a function that finds power using recursion.

function recursion(a,b){
  if (b === 0){
    return 1;
  }
  return a* recursion(a,b-1);
}
console.log(recursion(2,3))

//4.Create an IIFE that prints "Executed".

//(()=>{console.log("executed")})(); 

//5.Write a function that memoizes factorial calculation.

let cache = {};

function memFactorial(n) {
    // Check if answer is already stored
    if (cache[n] !== undefined) {
        console.log("From cache");
        return cache[n];
    }

    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }

    // Calculate factorial
    let result = n * memFactorial(n - 1);

    // Store result in cache
    cache[n] = result;

    return result;
}

console.log(memFactorial(5)); // Calculates
console.log(memFactorial(5)); // Uses cache

//6.Create a closure counter function.

function createCounter() {
    let count = 0; // 👈 remembered variable

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2

//7.Write a function currying example for addition.

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(2)(3)(4)); 

//8.Create debounce function logic.

function debounce(func, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer); // cancel previous timer

        timer = setTimeout(() => {
            func.apply(this, args); // execute after delay
        }, delay);
    };
}
function search(query) {
    console.log("Searching:", query);
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");


// ======================================
// 9. Create Throttle Function Logic


function throttle(fn, delay) {
    let canRun = true;

    return function (...args) {
        if (!canRun) return;

        fn(...args);
        canRun = false;

        setTimeout(() => {
            canRun = true;
        }, delay);
    };
}

const throttledFunction = throttle(() => {
    console.log("Throttle Executed");
}, 2000);

// throttledFunction();
// throttledFunction();
// throttledFunction();


// ======================================
// 10. Function That Executes Only Once


function once(fn) {
    let executed = false;

    return function (...args) {
        if (!executed) {
            executed = true;
            return fn(...args);
        }
    };
}

const greet = once(() => {
    console.log("Hello!");
});

// greet();
// greet();
// greet();


// ======================================
// 11. Custom Implementation of map()


Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

let numbers1 = [1, 2, 3, 4];

let doubled = numbers1.myMap((num) => num * 2);

console.log("myMap:", doubled);


// ======================================
// 12. Custom Implementation of filter()


Array.prototype.myFilter = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

let numbers2 = [10, 20, 30, 40, 50];

let greaterThan25 = numbers2.myFilter((num) => num > 25);

console.log("myFilter:", greaterThan25);


// ======================================
// 13. Custom Implementation of reduce()


Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

let numbers3 = [1, 2, 3, 4, 5];

let sum = numbers3.myReduce((acc, curr) => acc + curr, 0);

console.log("myReduce:", sum);


// ======================================
// 14. Custom Implementation of forEach()


Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

let fruits = ["Apple", "Banana", "Mango"];

console.log("myForEach:");

fruits.myForEach((fruit, index) => {
    console.log(index, fruit);
});