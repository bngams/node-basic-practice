const todos = require('./todo-data');

// /todos/1
function findTodoByIndex(index) {
    return todos[index];
}

// /todos
function getAllTodos() {
    return todos;
}

module.exports = {
    findTodoByIndex,
    getAllTodos
}

// equivalent to 
// module.exports = {
//     findTodoByIndex: findTodoByIndex,
//     getAllTodos: getAllTodos
// }