var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {
    return new Promise((resolve, reject) => {
        // require XMLHttpRequest
        let xhr = new XMLHttpRequest();
        // nothing happened - request definition
        xhr.open('get', url);
        // configure listeners
        xhr.onreadystatechange = () => {
            // si terminée et si status ok
            if (xhr.readyState === 4 && xhr.status === 200) {
                // traitement
                resolve(xhr.responseText);
            } else if (xhr.readyState === 4) {
                // error            
                reject({ msg: xhr.responseText });
            }
        }
        // execute request
        xhr.send();
    });
}

module.exports = {
    get: httpGet
};