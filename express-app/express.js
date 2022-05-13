const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const todosCtrl = require('./Todos/todo-controller');
const postsCtrl = require('./Posts/post.controller');
const app = express();
const port = 8282;

// use body-parser for express
app.use(bodyParser.json()); // for parsing application/json
app.use(cors());

// use routes in todoCtrl
app.use('/todos', todosCtrl);

app.use('/posts', postsCtrl);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))