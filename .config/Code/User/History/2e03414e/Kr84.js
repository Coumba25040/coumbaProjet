fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(body => console.log(body))

    // .then(r => r.json()) permet d'obtenir la reponse de la promesse que la requete soit bien executé
    // .then(body => console.log(body)) permet de l'afficher 
// .then(r => console.log(r))
// Pour obtenir une reponse de la promesse après le contact auprès du serveur 
