const xhr = require('./http-xhr');

function displayResult(result) {
    const arrayOfTodos = JSON.parse(result);
    console.log(result);
}

function displayError(err) {
    console.log(err);
}

xhr('get',
    'https://jsonplaceholder.typicode.com/todos/1',
    displayResult,
    displayError);

console.log('request sent, waiting result...');