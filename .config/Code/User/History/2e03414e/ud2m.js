fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(body => console.log(body))

    // .then(r => r.json()) permet d'obtenir la reponse de la promesse 
    .then(body => console.log(body)) pzrmet de l'afficher 
// .then(r => console.log(r))
// Pour obtenir une reponse de la promesse après le contact auprès du serveur 
