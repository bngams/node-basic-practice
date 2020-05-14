var express = require('express');
var router = express.Router();
const todosService = require('./todo-service');

router.get('/', (req, res) => res.send(todosService.getAllTodos()));
router.get('/:id', (req, res) => res.send(todosService.findTodoByIndex(req.params.id)))
router.post('/', (req, res) => {
    const todo = todosService.createTodo(req.body);
    if (!todo) res.status(500).send();
    res.status(201).json(todo);
});

router.put('/:id', (req, res) => {
    const todo = todosService.updateTodo(req.params.id, req.body);
    if (!todo) res.status(404).send();
    res.status(200).send(todo);
});

router.delete('/:id', (req, res) => {
    const todo = todosService.deleteTodo(req.params.id);
    if (!todo) res.status(404).send();
    res.status(200).send();
});

module.exports = router;