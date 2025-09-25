
// function afficherPokemon(){
//     fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/10')
//         .then(r => {
//             if(!r.ok){
//                 throw new Error('Erreur de réseau')
//             }
//             return r.json()
//         })
//         .then(posts =>{
//             console.log(posts)
//             const pokemonContainer = document.getElementById('pokemonContainer')

//             pokemonContainer.innerHTML = ''
//             posts.forEach(post => {
//                 const pokemon = document.createElement('div')
//                 pokemon.classList.add('pokemon')
               
//                 pokemon.innerHTML += `<div class="card" style="width: 14rem;">
//                 <img src="${post.image}" class="card-img-top" alt="pokemon">
//                 <div class="card-body">
//                     <h5 class="card-title">${post.name}</h5>
//                     <p class="card-text">Nombre d'attaque : ${post.stats.attack}</p>
//                     <p class="card-text">Défense : ${post.stats.defense}</p>
//                     <p class="card-text">HP : ${post.stats.HP}</p>
//                 </div>
//                 </div>` 

//                 pokemonContainer.appendChild(pokemon)     
//             });
//         })
//         .catch(error => {
//             console.log('Erreur :', error)
//         })
// }
// afficherPokemon()

async function fetchActivite() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/')
    }
}

