// recupérer le élements du doms
const form = document.getElementById("formulaire");
const destinationContainer = document.getElementById("destinations");
const filtreInput = document.getElementById("filtre");
const triInput = document.getElementById("tri");

// création d'un tableau de destinations
let destinations = [];

function afficherDestinations( unTableauDestination ){
    // Vide le conteneur des destinations
    destinationContainer.innerHTML = ""
    // Afficher les destinations 
    unTableauDestination.forEach((destination, index) => {
        console.log(index);
        // Créer un div pour chaque destination 
        let cardDestination = document.createElement("div");
        cardDestination.classList.add("col-md-4");
        // Ajouter le contenu de la carte 
        cardDestination.innerHTML = `
            <div class="card h-100">
                <img src="${destination.image}" class="card-img-top" alt="${destination.ville}">
                <div class="card-body">
                    <h5 class="card-title">${destination.pays} - ${destination.ville}</h5>
                    <p class="card-text"> Prix : ${destination.prix} € </p>
                    <button type="button" class="btn btn-danger btn-sm" onclick="supprimerDestination(${index})"> Supprimer </button>     
                </div>
            </div>
        `;
         
        // Ajouter la carte au conteneur des destinations
        destinationContainer.appendChild(cardDestination);

    } )
}


function supprimerDestination(index){
    // on supprime une destination à partir de l'index inclut
    // splice() l'index permet selectionner une postion dans le tableau
    // le 2eme paramètre ( ici 1) donne le nombre d'element a enlever (Attention l'index est inclut ) 
    destinations.splice(index,1);
    console.log(destinations);
    //Afficher les destinations 
    afficherDestinations(destinations);

}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // récupération des valeurs de tout les champs
  let pays = document.getElementById("pays").value.trim();
  let ville = document.getElementById("ville").value.trim();
  let prix = document.getElementById("prix").value.trim();
  let image = document.getElementById("image").value.trim();

  // récuperation des messages d'erreurs
  let paysError = document.getElementById("pays-error");
  let villeError = document.getElementById("ville-error");
  let prixError = document.getElementById("prix-error");
  let imageError = document.getElementById("image-error");

  let valide = true;

  if (pays == "") {
    paysError.textContent = "Le pays est obligatoire";
    valide = false;
  }
  if (ville == "") {
    villeError.textContent = "La ville est obligatoire";
    valide = false;
  }
  if (prix == "" || prix < 0) {
    prixError.textContent = "Le prix doit être positif";
    valide = false;
  }
  if (image == "") {
    imageError.textContent = "Le pays est obligatoire";
    valide = false;
  }
  if (valide) {
    // Réinitialiser les messages d'erreur
    paysError.textContent = "";
    villeError.textContent = "";
    prixError.textContent = "";
    imageError.textContent = "";

    // Ajouter notre destination dans notre tableau
    destinations.push({
        pays: pays,
        ville : ville,
        prix : prix,
        image: image
    })

    // Afficher les destinations 
    afficherDestinations(destinations);

    // Réinitialiser le formulaire
    form.reset();

  }
});

// Filtrer les destinations par pays 
filtreInput.addEventListener("focusout" , () =>{
    // récupérer la valeur du filtre 
    let filtre = filtreInput.value.trim().toLowerCase();

    let destinationsFiltrees = destinations.filter((destination)=>{
        //Vérifier si le pays de la destination contient le filtre 
        return destination.pays.toLowerCase().includes(filtre);
    })
    // Afficher les distinations filtrés 
    afficherDestinations(destinationsFiltrees);
})

// Trier les destinations par prix apres la selection du tri 
triInput.addEventListener("change", ()=>{
    // récupérer la valeur de l'input de tri
    let tri = triInput.value;

    if( tri == "asc"){

        //a.prix -b.prix retourne un nombre :
        // si le résultat est négatif ( a.prix < b.prix) a vient avant b.
        // si positif ( a.prix > b.prix) , b vient avant a 
        // si c'est 0 , ils restent dans le même ordre.
        destinations.sort((a,b) => a.prix - b.prix)
    } else if ( tri == "desc"){
        destinations.sort((a,b) => b.prix - a.prix)
    }

    // afficher les destinations triées
    afficherDestinations(destinations);
})