const xhr = require('./http-xhr');

function displayResult(result) {
    // const arrayOfTodos = JSON.parse("[{'id': 1}]");
    console.log(result);
}

function displayError(err) {
    console.log(err);
}

xhr('get',
    'https://jsonplaceholder.typicode.com/todos',
    displayResult,
    displayError);

console.log('request sent, waiting result...');