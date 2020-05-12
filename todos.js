const Todo = require('./todo');
console.log(Todo);

// todos array
const todos = [
    new Todo(1, 1, "Task1", false),
    new Todo(1, 2, "Task2", true),
    new Todo(2, 3, "Task3", false),
];

// use filter to display
console.log(todos.filter(todo => !todo.completed));