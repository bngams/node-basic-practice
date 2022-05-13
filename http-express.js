const express = require('express');

// similar to http create server
const app = express();
const port = 8282;

app.get('/', (req, res) => {
    res.write('<h1>Hello world!</h1>');
    res.end();
});

app.get('/contact', (req, res) => {
    res.write('<h1>Contact me!</h1>');
    res.end();
});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})