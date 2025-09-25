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

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

const card = document.createElement("div")
card.classList.add("card")
card.style.width = "18rem"
destinations.appendChild(card)

let image = document.createElement("img")
card.classList.add("card-img-top")
image.setAttribute("src", image)
card.appendChild(image)

let cardBody = document.createElement("div")
cardBody.classList.add("card-body")
card.appendChild(cardBody)

let cardTitle = document.createElement("h5")
cardTitle.classList.add("card-title")
cardBody.appendChild(cardTitle)

let cardText = document.createElement("p")
cardText.classList.add("card-text")
cardBody.appendChild(cardText)

let button = document.createElement('button')
cardText.classList.add("btn btn-primary")
button.textContent = "supprimer"
cardBody.appendChild(button)








