var express = require('express');
var router = express.Router();
const todosService = require('./todo-service');

// GET /todos/
router.get('/', (req, res) => res.send(todosService.getAllTodos()));

// GET /todos/1
router.get('/:id', (req, res) => res.send(todosService.findTodoByIndex(req.params.id)))

// POST /todos
router.post('/', (req, res) => {
    const todo = todosService.createTodo(req.body);
    if (!todo) res.status(500).send();
    res.status(201).json(todo);
});

// PUT /todos
router.put('/:id', (req, res) => {
    const todo = todosService.updateTodo(req.params.id, req.body);
    if (!todo) res.status(404).send();
    res.status(200).send(todo);
});

// DELETE /todos/1
router.delete('/:id', (req, res) => {
    const todo = todosService.deleteTodo(req.params.id);
    if (!todo) res.status(404).send();
    res.status(200).send();
});

module.exports = router;