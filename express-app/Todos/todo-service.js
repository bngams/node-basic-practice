const todos = require('./todo-data');

// /todos/1
function findTodoByIndex(index) {
    return todos[index];
}

// /todos
function getAllTodos() {
    return todos;
}

function createTodo(todo) {
    todos.push(todo);
    return todo;
}

function updateTodo(id, todo) {
    if (!todos[id]) return false;
    todos[id] = todo;
    return todos[id];
}

function deleteTodo(id) {
    if (!todos[id]) return false;
    todos.splice(id, 1);
}

module.exports = {
    findTodoByIndex,
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}

// equivalent to 
// module.exports = {
//     findTodoByIndex: findTodoByIndex,
//     getAllTodos: getAllTodos
// }