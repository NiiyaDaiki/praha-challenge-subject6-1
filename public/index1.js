//  simple request(GET)
const getButton = document.getElementById('get');
getButton.addEventListener('click', event => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://67ef05605188.ngrok.io', true);
    xhr.withCredentials = true;
    xhr.send(null);
})

// simple request(POST)
const postButton = document.getElementById('post');
postButton.addEventListener('click', event => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://67ef05605188.ngrok.io/simple', true);
    xhr.withCredentials = true;
    xhr.send(null);
})



// preflight request(POST)
const preFlightPostButton = document.getElementById('preflight');
preFlightPostButton.addEventListener('click', event => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://67ef05605188.ngrok.io/preflight', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    xhr.send();

})

// async/awaitを利用した書き方
// getButton.addEventListener('click', event => {
//     (async () => {
//         try {
//             const response = await fetch('http://localhost:8081');
//             console.log(response.status);
//         } catch (e) {
//             console.log(e);
//         }
//     })()
// });