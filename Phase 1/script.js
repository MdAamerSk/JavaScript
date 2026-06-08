//Console & Basics

//1. Print `"Hello JavaScript"` in the console.

console.log("Hello JavaScript");

//2.Print your name, age, and city using one console.log().

console.log("MD AAMER SK",7,"MUMBAI");

//4.Print a warning message using console.warn().

console.warn("danger");

//5.Print an error message using console.error().

console.error("site not found:404 error");

//6.Use console.table() to display an array of 5 numbers.

console.table([1,2,3,4,5]);

//Variables

//1.Create a variable called studentName and store your name in it.

let studentName = "MD AAMER SK";

//2.Create a variable age and print it.

let age = 7;
console.log(age);

//3.Create two variables and swap their values.

let a= 1;
let b=20;

let temp =a;
    a=b;
    b=temp;

console.log(a,b);

//4.Create a constant variable for PI and print it.

const PI=3.142;
console.log(PI);

//5.Declare a variable without assigning a value and print it.

var product;
console.log(product);

//6.Create a variable score and increase it by 10.

let score=2 ;
score += 10;
console.log(score);

//7.Create three variables for first name, last name, and full name.

let firstName="MD AAMER";
let lastName=" SK";
 console.log(firstName+lastName);

 //Data Types

// 1.Create variables of type string, number, boolean, null, and undefined.

let str = "string";
let num = 9999999999;
let bool = true;
let d= null;
let e;

//2.Check the type of different variables using typeof.

console.log(bool);

//3.Store your mobile number in a variable and check its type.

console.log(num);

//4.Create a variable with value null and check its type.

console.log(d);

//5.Create a bigint number and print it.

let bigNumber = BigInt("1234567890123456789012345678901234567890");

console.log(bigNumber);

//Type Conversion & Coercion

//1.Convert the string "50" into a number.

let num1= Number("50");
console.log(num1)

//2.Convert the number 100 into a string.

let str1 = String(100);
console.log(str1);

//3.Convert "true" into a boolean.

let bool1 = Boolean("true");
console.log(bool1);

/*4. Check the output of: */
 console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

//5.Create a variable with value "123abc" and convert it into a number.

let temp1="123abc";
console.log(parseInt(temp1));

//6.Use parseInt() on "500px".

console.log(parseInt("500px"));

//Operators

//1.Add two numbers and print the result.

console.log(10 +20);

//2.Find the remainder when 25 is divided by 4.

console.log(25%4);

//3.Find the square of a number using exponent operator.

console.log(2**2);

//4.Increment a variable using ++.

a++
console.log(a);

//5.Decrement a variable using --.
a--
console.log(a);

//6.Use += operator to increase a variable by 20.
 
b += 20;
console.log(b);

//7.Compare two numbers using >, <, >=, <=.

console.log(3>4,3<4,3>=4,3<=4);

//8.Check if two values are strictly equal using ===.

console.log(10 === 10);

//9.Compare "10" and 10 using both == and ===.

console.log("10" == 10, "10" === 10);

//10.Create two boolean variables and test &&, ||, and !.

let cup = true;
let cake =false;

console.log(cup && cake);
console.log(cup || cake);
console.log(!cup);

//Strings

//1.Create a string and print its length.

console.log(firstName.length);

//2.Convert a string into uppercase.
let city ="karnataka";
console.log(city.toUpperCase());

//3.Convert a string into lowercase.
console.log(city.toLowerCase());

//4.Check if a string includes the word "JavaScript".

let str2= "hello javascript";
console.log(str2.includes("javascript"));

//5.Extract the word "World" from "Hello World".
let str3="Hello World";
console.log(str3.slice(6,11));

//6.Replace "apple" with "mango" in a sentence.
let str4 ="hey i am apple";
console.log(str4.replace("apple","mongo"));

//7.Split "HTML,CSS,JS" into an array.
let str5 ="HTML,CSS,JS";
console.log(str5.split(","));

//8.Remove extra spaces from a string.
let text = "   Hello World  hmm      ";
console.log(text.trim());

//9.Repeat the word "Hi" 5 times.
console.log("hii ".repeat(5));

//10.Print the first character of a string.
console.log("consistency".charAt(1));

//11.Use template literals to print:"My name is Aman and I am 20 years old"

let first = "Aman";
let second = 20;

console.log(`My name is ${first} and I am ${second} years old`);

//Numbers & Math

//1.Round 4.7 using Math.round().

let num2 = 4.7;
console.log(Math.round(num2));

//2.Find the square root of 81.

console.log(Math.sqrt(81));

//3.Find the maximum number from 10, 20, 5, 99.

console.log(Math.max(10,20,5,99));

//4.Generate a random number between 1 and 10.

console.log(Math.floor(Math.random() *10+1));

//5.Convert "99.99" into an integer.

console.log(Math.floor(Number("99.99")));

//Check whether 25 is an integer or not.

console.log(Number.isInteger(25));

//7.Use toFixed(2) on 3.141592. [toFixed() returns a string, not a number:]

console.log(3.141592.toFixed(2));

//Conditionals

//1.Check whether a number is positive or negative.
let num3 = 18;

if (num3 > 0) {
    console.log("Positive");
} else if (num3 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//2.Check whether a number is even or odd.

if(num3 %2 === 0){
    console.log("even");
}
else{
    console.log("odd");
}

//3.Check whether a person is eligible to vote.
if(age>18){
    console.log("eligible to vote");
}
else if(age<18){
    console.log("not eligible");
}
else{
    console.log("not a valid num");
}

//4.Find the largest among two numbers.

if (a > b) {
    console.log(a + " is larger");
} else {
    console.log(b + " is larger");
}

//5.Find the largest among three numbers.

console.log(a,b,num3);

if (a > b && a >num3) {
    console.log(a + " is larger");
} else if(b > a && b >num3){
    console.log(b + " is larger");
}else {
    console.log(num3 + " is larger");
}

//6.Check whether a year is a leap year.
let year = 2028;

if((year % 4 === 0 && year % 100 !== 0) || (year %400 === 0)){
    console.log("leap year");
}else{
    console.log("not a leap year");
}

//7.Check whether a number is divisible by both 3 and 5.


if((a %3 == 0) && (a %  5 == 0)){
    console.log("a is divisible by both");
}
else{
console.log("not divisible");
}

/*8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail*/
let marks =95;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}

//11.Check whether a character is a vowel or consonant.
let ch ="E";
ch = ch.toLowerCase();
if("aeiou".includes(ch)){
    console.log("vowel");
}
else{
    console.log("constant");
}

//12.Create a calculator using switch statement.
console.log(num1,num2);
let operator = "/"; 

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}

//13.Print the day name based on a number (1–7).
let day =7;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;
}

//14.Check whether a username is "admin" and password is "1234".

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

//Truthy & Falsy

//1.Check whether an empty string is truthy or falsy.

console.log(Boolean(""));

//2.Check whether 0 is truthy or falsy.

console.log(Boolean(0));

//3.Check whether [] is truthy or falsy.

console.log(Boolean([]));

//4.Create a variable and print "Valid" if it has a value otherwise print "Invalid".

let name = "Aamer";

if (name) {
    console.log("Valid");
} else {
    console.log("Invalid");
}

//Ternary Operator

//1.Check whether a number is even or odd using ternary operator.

console.log((2 % 2 === 0) ? "even" : "odd");

//2.Check whether age is above 18 using ternary operator.

console.log((age>18) ? "greater" : "lesser");

//3.Find the greater number between two values using ternary operator.

console.log((a>b) ? a : b);

//Mixed Practice Questions

//1.Create a mini biodata program using variables and template literals.

console.log(`Hey I am ${firstName} my age is ${age}, I live in ${city}`);

//2.Calculate the area of a rectangle.

console.log(`area of a rectange ${a*b}`);

//3.Calculate the simple interest.
let p=100000,r=10,t=2;
console.log(`simple interest ${(p*r*t)/100}`);

//4.Convert temperature from Celsius to Fahrenheit.
let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`Temperature in Fahrenheit is ${fahrenheit}`);

//5.Convert kilometers into meters.