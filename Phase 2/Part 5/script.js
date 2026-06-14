//Part 5 — Objects Basics (76–90)

// 1. Create object for a student.
let student = {
    name: "Aamer",
    age: 20,
    course: "BSc IT",

    // 7. Create object method.
    greet: function () {
        // 8. Use `this` keyword inside method.
        console.log(`Hello, my name is ${this.name}`);
    }
};


// 2. Access properties using dot notation.
console.log(student.name);

// 3. Access properties using bracket notation.
console.log(student["age"]);


// 4. Add new property dynamically.
student.city = "Mumbai";


// 5. Update existing property.
student.age = 21;


// 6. Delete a property.
delete student.course;


// Call method
student.greet();


// 9. Create nested object.
student.address = {
    state: "Maharashtra",
    country: "India",
    location: {
        area: "Andheri"
    }
};


// 10. Access deeply nested property.
console.log(student.address.location.area);


// 11. Destructure object properties.
const { name, age } = student;
console.log(name, age);


// 12. Rename variables while destructuring.
const { city: studentCity } = student;
console.log(studentCity);


// 13. Add default values during destructuring.
const { gender = "Male" } = student;
console.log(gender);


// 14. Copy object using spread operator.
const studentCopy = { ...student };
console.log(studentCopy);


// 15. Merge two objects.
const marks = {
    math: 90,
    science: 85
};

const mergedObject = {
    ...student,
    ...marks
};

console.log(mergedObject);

