const getButton = document.getElementById('get');

getButton.addEventListener('click', event => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8081/', true);
    // xhr.withCredentials = true; 
    xhr.send(null);
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