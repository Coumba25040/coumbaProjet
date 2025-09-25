const paysError = document.getElementById("pays-error")
const pays = document.getElementById("pays")
const villeError = document.getElementById("ville-error")
const ville = document.getElementById("ville")
const prixError = document.getElementById("prix-error")
const prix = document.getElementById("prix")
const imageError = document.getElementById("image-error")
const image = document.getElementById("image")
const destinationsContainer = document.getElementById("destinations")
const formulaire = document.getElementById("formulaire")
// creer un tableau destination pour stoker les destinations et push 
let destinations = []
// ajouter le tableau tabDestination dans les paramètres pour plus de flexibilité c'est pour utiliser à la place du tableau destination
function afficherCarte(tabDestination, index){
    
    destinationsContainer.innerHTML = ''
// re utiliser la tabDestination ici à la place du tableau destination pour la flexibilité 
    tabDestination.forEach((destination) => {
    let cardDestination = document.createElement('div') 
    cardDestination.classList.add("col-md-4");

    cardDestination.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${destination.image}" alt="Card image cap">
         <div class="card-body">
         <h5 class="card-title">${destination.pays} ${destination.ville}</h5>
        <p class="card-text">${destination.prix}</p>
    <a href="#" class="btn btn-primary oneclick" data-index="${index}">Supprimer</a>
  </div>
</div>`
destinationsContainer.appendChild(cardDestination)
    });
    
}
function supprimerCard(index){
    destinations.splice(index, 1)
    afficherCarte(destinations)
}

// afficher le tableau des destinations 

formulaire.addEventListener('submit', (e) =>{
    e.preventDefault()

    let valide = true
    if(pays.value === ""){
        paysError.textContent = 'Entrez un pays'
        valide = false 
    }
    if(ville.value === ""){
        villeError.textContent = 'Entrez une ville'
        valide = false 
    }
    if(prix.value === ""){
        prixError.textContent = 'Entrez un prix'
        valide = false 
    }
    if(image.value === ""){
        imageError.textContent = 'Entrez une image'
        valide = false 
    }

   if(valide){
    paysError.textContent = " "
    villeError.textContent = " "
    prixError.textContent = " "
    imageError.textContent = " "

        destinations.push({
            pays: pays.value,
            ville: ville.value,
            prix: prix.value,
            image: image.value
        })
    }

    afficherCarte(destinations)    
})


const filtre = document.getElementById("filtre")

filtre.addEventListener('keyup', (e) =>{
    const input = filtre.value
    
    const result = destinations.filter(item => item.pays.toLowerCase().includes(input.toLowerCase()))
    if(result.length === 0){
        destinationsContainer.textContent = "Aucun voyage"
    }else{
        afficherCarte(result)
    }
})

const trierPrix = document.getElementById("prixSens")

trierPrix.addEventListener('change', (e) =>{
    const tri = e.target.value
    let destinationTri = [...destinations]

    if(tri === "asc"){
        destinationTri.sort((a, b) => a.prix - b.prix)
    }else if(tri === "dsc"){
        destinationTri.sort((a, b) => b.prix - a.prix)
    }
    afficherCarte(destinationTri)
})




