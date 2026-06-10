//Part 1 — Functions Basics (1–20)

//Beginner Level

// 1. Create a function named greet that prints "Hello World"
function greet() {
    console.log("Hello World");
}

// 2. Create a function add(a, b) that returns the sum
function add(a, b) {
    return a + b;
}

// 3. Write a function to calculate the square of a number
function square(num) {
    return num * num;
}

// 4. Create a function that checks whether a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 5. Write a function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 6. Create a function with default parameter "Guest"
function welcome(name = "Guest") {
    return `Welcome, ${name}`;
}

// 7. Write a function that returns the greater of two numbers
function greater(a, b) {
    return a > b ? a : b;
}

// 8. Create a function to calculate area of rectangle
function rectangleArea(length, width) {
    return length * width;
}

// 9. Write a function that returns "Adult" if age ≥ 18 else "Minor"
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}

// 10. Create a function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function Calls
greet();
console.log(add(5, 3));
console.log(square(4));
console.log(checkEvenOdd(7));
console.log(celsiusToFahrenheit(25));
console.log(welcome());
console.log(greater(10, 20));
console.log(rectangleArea(5, 4));
console.log(checkAge(18));
console.log(reverseString("JavaScript"));



//Intermediate Level

//1.Write a function expression for multiplication.

let expression = function multi(a,b){
    return a*b;
}
console.log(expression(3,5));


//2.Convert a normal function into an arrow function.

( ()=>{
    console.log("hello wo");
})();

//3.Create a function that accepts unlimited numbers and returns their sum using rest operator.

function sum(...sum){
let total =0;
for(let num of sum){
    total +=  num;

}
return total;
}
console.log(sum(13,13,25));

//4.Write a function that counts vowels in a string.

function vowel(str){
    let count =0;
    let vowels ="aeiou";
    for (let ch of str.toLowerCase()){
        if(vowels.includes(ch)){
            count++;
        }
    }
    return count;
}
console.log(vowel("hello"));

// 5.Create a function that checks if a string is palindrome.
function isPalindrome(str) {
    str = str.toLowerCase().replace(/ /g, "");

    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Nurses run")); // true

//6.Write a callback function example using setTimeout.

setTimeout(()=>{
console.log("call baack func");
},2000);

//7.Create a higher-order function that executes another function twice.

function runTwice(fn) {
    fn();
    fn();
}

function sayHello() {
    console.log("once");
}

runTwice(sayHello);

//8.Write a function that returns another function.
function mainFunc() {
    return function returnFunc() {
        console.log("hello poojaaa");
    };
}

let fn = mainFunc(); 
fn(); 

//9.create pure func for sub

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10, 5)); 


//10.Create an impure function using global variable modification.

let count =0 ;
function setCount(){
    count++;
    return count;
}
console.log(setCount());
