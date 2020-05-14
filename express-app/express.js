const express = require('express');
const bodyParser = require('body-parser');
const todosCtrl = require('./Todos/todo-controller');
const app = express();
const port = 3000;

// use body-parser for express
app.use(bodyParser.json()) // for parsing application/json

// use routes in todoCtrl
app.use('/todos', todosCtrl);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))