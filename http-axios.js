const axios = require('axios');

function displayResult(result) {
    console.log(result.id);
}

function displayError(err) {
    console.log(err);
}

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(displayResult)
    .catch(displayError);