//Part 3 — Arrays Basics (36–55)

//Beginner

//1.Create an array of 5 fruits.

let fruits = ["apple","mango","kivi","avacardo","lichi"];
console.log(fruits);

//2.Print first and last element of array.

console.log(fruits[0],fruits[fruits.length-1]);

//3.Find length of array.

console.log(fruits.length);

//4.Add element at end using push.

fruits.push("orange");
console.log(fruits);

//5.Remove last element using pop.

console.log(fruits.pop());

//6.Add element at beginning using unshift.

fruits.unshift("orange");
console.log(fruits);

//7.Remove first element using shift.

console.log(fruits.shift());
console.log(fruits);

//8.Reverse an array.

fruits.reverse();
console.log(fruits);

//9.Sort numbers ascending.

let num = [1,5,3,10,7,0]

num.sort((a,b)=>a-b);

console.log(num);

//10.Sort numbers descending.

num.sort((a,b)=>b-a);

console.log(num);

//Intermediate

//1.Use splice to remove elements.

fruits.splice(2,1);
console.log(fruits);

//2.Use splice to insert element.

fruits.splice(fruits.length,1,"banana");
console.log(fruits);

//3.Use slice to copy array.

let caopyfruits = fruits.slice();

console.log(caopyfruits);

//4.Find index of an element.

console.log(fruits.indexOf("mango"));

//5.Check if array contains a value.

console.log(fruits.includes("apple"));

//6.Join array elements with .

let joined = fruits.join(" ,");
console.log(joined);

//7.Merge two arrays using spread operator.

let merged = [...fruits,...num];

console.log(merged);

//8.Copy array using spread operator.

 let copyspread = [...num];
 console.log(copyspread);

 //9.Find maximum value using Math.max.

 console.log(Math.max(...copyspread));

//10.Swap two variables using destructuring.

 let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

