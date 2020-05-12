const http = require('./http-xhr-promise');

function displayResult(result) {
    const arrayOfTodos = JSON.parse(result);
    console.log(result);
}

function displayError(err) {
    console.log(err);
}

http.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(displayResult)
    .catch(displayError);

console.log('request sent, waiting result...');