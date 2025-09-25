fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(body => console.log(body))

    // .then(r => r.json()) permet d'obtenir la reponse de la promesse que la requete soit bien executé
    // .then(body => console.log(body)) permet de l'afficher 
// .then(r => console.log(r))
// Pour obtenir une reponse de la promesse après le contact auprès du serveur 

async function fetchUsers () {
    const r = await fetch('https://jsonplaceholder.typicode.com/usaers')
    // ça veut dire attendre que la promesse soit résolue 
    if(r.ok === true){
        return r.json()
    }
    throw new Error('Impossible de contacter le serveur')
}

fetchUsers().then(users => console.log(users))
// Lorsque je récupere des resultat (users) je l'affiche dans le console


