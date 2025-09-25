Fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.text())
    .then(body => console.log(body))


// .then(r => console.log(r))
// Pour obtenir une reponse de la promesse après le contact auprès du serveur 
