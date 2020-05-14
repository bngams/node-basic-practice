const express = require('express');
const bodyParser = require('body-parser');
const todosCtrl = require('./Todos/todo-service');
const app = express();
const port = 3000;

// use body-parser for express
app.use(bodyParser.json()) // for parsing application/json

// handle request here direct with app express
app.get('/', (req, res) => res.send(todosService.getAllTodos()));
app.get('/:id', (req, res) => res.send(todosService.findTodoByIndex(req.params.id)))
app.post('/', (req, res) => {
    const todo = todosService.createTodo(req.body);
    if (!todo) res.status(500).send();
    res.status(201).json(todo);
});

app.put('/:id', (req, res) => {
    const todo = todosService.updateTodo(req.params.id, req.body);
    if (!todo) res.status(404).send();
    res.status(200).send(todo);
});

app.delete('/:id', (req, res) => {
    const todo = todosService.deleteTodo(req.params.id);
    if (!todo) res.status(404).send();
    res.status(200).send();
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))