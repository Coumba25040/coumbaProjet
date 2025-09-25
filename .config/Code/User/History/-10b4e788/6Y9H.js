let ajoutVoyage = document.getElementById("ajout-voyage")
let formulaire =  document.getElementById("formulaire")
let inputPays = document.getElementById("pays")
let formControl = document.getElementsByClassName("form-control")
let paysError = document.getElementById("pays-error")
let inputVille = document.getElementById("ville")
let villeError = document.getElementById("ville-error")
let inputPrix = document.getElementById("prix")
let prixError = document.getElementById("prix-error")
let inputImage = document.getElementById("image")
let imageError = document.getElementById("image-error")
let btn = document.getElementById("btn")
let recherche = document.getElementById("recherche")
let filtre = document.getElementById("filtre")
let listeDestinations = document.getElementById("liste-destinations")
let destinations = document.getElementById("destinations")

formulaire.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if(inputPays.value === ""){
        paysError.textContent = "Veuillez ajouter un pays"
    }
    if(inputVille.value === ""){
        villeError.textContent = "Veuillez ajouter une ville"
    }
    if(inputPrix.value <= 0){
        prixError.textContent = "Veuillez ajouter un prix"
    }
    if(inputImage.value === ""){
        imageError.textContent = "Veuillez ajouter une image"
    }
})



