//Part 6 — Advanced Objects + Real Logic (91–100)

const student = {
    name: "Harsh",
    age: 20,
    city: "Mumbai"
};

// 1. Object.keys()
console.log(Object.keys(student));

// 2. Object.values()
console.log(Object.values(student));

// 3. Object.entries()
console.log(Object.entries(student));

// 4. Loop through object using for...in
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 5. Freeze an object and test modification
const frozenObj = {
    name: "John",
    age: 25
};

Object.freeze(frozenObj);

frozenObj.age = 30; // Won't change
frozenObj.city = "Delhi"; // Won't add

console.log("Frozen Object:", frozenObj);

// 6. Seal an object and test modification
const sealedObj = {
    name: "Sam",
    age: 22
};

Object.seal(sealedObj);

sealedObj.age = 23; // Allowed
sealedObj.city = "Mumbai"; // Not Allowed
delete sealedObj.name; // Not Allowed

console.log("Sealed Object:", sealedObj);


// 7. Create array of objects for users
const users = [
    { name: "harsh", age: 20 },
    { name: "Ali", age: 25 },
    { name: "Rahul", age: 23 }
];

// 8. Find user with highest age
const oldestUser = users.reduce((oldest, user) => {
    return user.age > oldest.age ? user : oldest;
});

console.log("Oldest User:", oldestUser);


// ==========================================
// 9. Mini TODO App
// ==========================================

const todos = [];

// Add Todo
function addTodo(task) {
    todos.push({
        id: Date.now(),
        task,
        completed: false
    });
}

// Mark Complete
function completeTodo(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = true;
    }
}

// Remove Todo
function removeTodo(id) {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        todos.splice(index, 1);
    }
}

addTodo("Learn JavaScript");
addTodo("Practice Objects");

console.log("Todos:", todos);

completeTodo(todos[0].id);

console.log("After Completion:", todos);

removeTodo(todos[1].id);

console.log("After Removal:", todos);


// ==========================================
// 10. Shopping Cart System
// ==========================================

const cart = [];

// Add Item
function addItem(name, price, quantity = 1) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            name,
            price,
            quantity
        });
    }
}

// Remove Item
function removeItem(name) {
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

// Update Quantity
function updateQuantity(name, quantity) {
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity = quantity;
    }
}

// Calculate Total
function calculateTotal() {
    return cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}


// Testing Shopping Cart
addItem("Laptop", 50000, 1);
addItem("Mouse", 500, 2);
addItem("Keyboard", 1000, 1);

console.log("Cart:", cart);

updateQuantity("Mouse", 3);

console.log("After Quantity Update:", cart);

removeItem("Keyboard");

console.log("After Removal:", cart);

console.log("Total Amount:", calculateTotal());