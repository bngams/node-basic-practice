var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(method, url, success, error) {
    // require XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // nothing happened - request definition
    xhr.open(method, url);
    // configure listeners
    xhr.onreadystatechange = () => {
        // si terminée et si status ok
        if (xhr.readyState === 4 && xhr.status === 200) {
            // traitement
            success(xhr.responseText);
        } else if (xhr.readyState === 4) {
            // error            
            error({ msg: xhr.responseText });
        }
    }
    // execute request
    xhr.send();
}

module.exports = httpGet;