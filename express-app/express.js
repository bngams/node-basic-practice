const express = require('express')
const todosCtrl = require('./Todos/todo-controller');
const app = express()
const port = 3000

app.get('/todos', (req, res) => res.send(todosCtrl.getAllTodos()));
app.get('/todos/:id', (req, res) => res.send(todosCtrl.findTodoByIndex(req.params.id)))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))