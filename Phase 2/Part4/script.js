//Part 4 — Array Iteration Methods (56–75)

//1.Use forEach to print all numbers doubled.

let num=[1,2,4,6,9];

num.forEach((e)=>console.log(e*2));

//2.Use map to square all numbers.
const squared = num.map((e) => e ** 2);
console.log(squared);

//3.Use filter to get even numbers.

console.log(num.filter((e) => e % 2 === 0));

//4.Use reduce to calculate sum.
const sum = num.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(sum);

//5.Use reduce to find maximum number.

console.log(num.reduce((acc, value) => acc > value ? acc : value));

//6.Use find to get first even number.

console.log(num.find((e)=>{return e%2===0;;}));

//7.Use findIndex to locate number > 50.

console.log(squared.findIndex((e)=> e> 50));

//8. Use some to check if any number is negative.

console.log(num.some((e) => e < 0));

//9.Use every to check if all numbers are positive.

console.log(squared.every((e)=> e>0));

//10.Create array of names and convert all to uppercase.

let names = ["anil","sunil","mukesh","gukesh"];

console.log(names.map((e)=>e.toLocaleUpperCase()));

// 11. Filter all students with marks > 80

const students = [
  { name: "Anil", marks: 85 },
  { name: "Sunil", marks: 75 },
  { name: "Mukesh", marks: 90 },
  { name: "Gukesh", marks: 60 }
];

console.log(students.filter(student => student.marks > 80));


// 12. Calculate average using reduce

const nums = [10, 20, 30, 40, 50];

const average = nums.reduce((acc, val) => acc + val, 0) / nums.length;

console.log(average);


// 13. Count occurrences of numbers in array

const arr = [1, 2, 2, 3, 1, 4, 2];

const count = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count);


// 14. Flatten nested arrays using flat

const nested = [1, 2, [3, 4], [5, [6, 7]]];

console.log(nested.flat(2));


// 15. Remove duplicates using Set

const duplicates = [1, 2, 2, 3, 4, 4, 5];

console.log([...new Set(duplicates)]);


// 16. Sort array of objects by age

const users = [
  { name: "Anil", age: 25 },
  { name: "Sunil", age: 20 },
  { name: "Mukesh", age: 30 }
];

console.log(users.sort((a, b) => a.age - b.age));


// 17. Find total price of shopping cart

const cart = [
  { item: "Pen", price: 10 },
  { item: "Book", price: 50 },
  { item: "Bag", price: 100 }
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);


// 18. Group users by age

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


// 19. Chain filter and map

const numbers = [10, 15, 20, 25, 30];

const result = numbers
  .filter(num => num > 15)
  .map(num => num * 2);

console.log(result);