var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '51.83.44.56',
    port: '32775',
    user: 'root',
    password: 'azerty5+',
    database: 'db_node_tp'
});

connection.query("SELECT * FROM todos", function (err, result, fields) {
    if (err) throw err;
    for (const res of result) {
        console.log(res.completed);
    }
});

// Requetes sur: https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
// INSERT INTO 
// var sql = "INSERT INTO todos (userId, title, completed) VALUES (1, 'Title', false)";
// var sql = "SELECT * FROM todos"
