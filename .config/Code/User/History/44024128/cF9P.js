// const uElement = document.getElementById('ul')

// function ajoutTitre(){
//     fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//         .then(r => {
//             if(!r.ok){
//                 throw new Error('error')
//             }

//             return r.json()
//         })
//         .then((posts) =>{
            
//             uElement.innerHTML = ''

//             for(const post of posts){
//                 const liElement =  document.createElement('li') 
//                 liElement.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>` 
//                 uElement.appendChild(liElement)
//             }
//         })
//         .catch(error => {
//             console.error(`Error ${error}`)
//         })
// }


// const btn = document.getElementById('btn')
//     btn.addEventListener('click', (e) => {
//         ajoutTitre()
//     })


// function afficher(title, body, userId){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             title: title,
//             body: body,
//             userId: userId,
//         })
//     })
//         .then(r => {
//             if(!r.ok){

//                 throw new Error('Erreur de réseau')
//             }
//             return r.json()
//         })
//         .then(posts =>{
//             console.log('afficher', posts)
//         })
//         .catch(error => {
//             console.error('Erreur: ', error)
//         })
// }
// afficher('Ceci est mon titre', 'Voici mon test', 1)

// function fakeApi(){
//     fetch('https://jsonplaceholder.typicode.com/invalidurl')
//         .then(r => {
//             if(!r.ok){
//                 throw new Error('Erreur de réseau')
//             }
//             return r.json()
//         })
//         .then(posts => {
//             console.log(posts)
//         })
//         .catch(error => {
//             console.log('Erreur ça ne fonctionne pas', error)
//         })
// }
// fakeApi()

// function rStatus(){
//     fetch('https://jsonplaceholder.typicode.com/invalidurl')
//     .then(response => {
//         if(response.status === 200){
//             console.log('Status - ', response.status, ' ok ')
//         } else{
//             console.log('Status - ', response.status, ' not Found ')
//         }
//     })
//     .catch(error =>{
//         console.error('Erreur de réseau', error)
//     })
// }


// rStatus()


function afficherPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto'){
        .then(r => {
            r.json
        })
    }
}