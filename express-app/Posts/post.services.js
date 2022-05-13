const todos = require('./post.data');

// /todos/1
function findPostByIndex(index) {
    return todos[index];
}

// /todos
function getAllPosts() {
    return todos;
}

function createPost(todo) {
    todos.push(todo);
    return todo;
}

function updatePost(id, todo) {
    if (!todos[id]) return false;
    todos[id] = todo;
    return todos[id];
}

function deletePost(id) {
    if (!todos[id]) return false;
    todos.splice(id, 1);
}

module.exports = {
    findPostByIndex,
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}

// equivalent to 
// module.exports = {
//     findTodoByIndex: findTodoByIndex,
//     getAllTodos: getAllTodos
// }