const http = require('http');

// Create an HTTP server
// requestListener f(request, response)
// http.createServer(requestListener)
const server = http.createServer((req, res) => {
    console.log('treating request in handler', req);
    if (req.url.includes('hello')) {
        res.write('<h1>Hello!!</h1>');
        res.end();
    } else {
        res.write('404');
        res.end();
    }
});

server.listen(8282);
console.log('Server listening....')