// Récupération de l'élément avec l'ID "choice" dans une variable
let form = document.getElementById("my-form"); // Récupère l'élément HTML ayant l'ID "my-form"
let choice = document.querySelector("#choice"); // Récupère l'élément avec l'ID "choice" via querySelector
console.log(choice); // Affiche l'élément "choice" dans la console

// Récupération de tous les éléments avec la classe "test"
let p = document.querySelectorAll(".test"); // Récupère tous les éléments avec la classe "test"
console.log(p); // Affiche la liste des éléments dans la console
document.write(p); // Écrit directement le contenu de la liste sur la page (non recommandé pour le DOM moderne)

// Récupération des éléments avec l'attribut name="check"
let check = document.getElementsByName("check"); // Récupère tous les éléments ayant l'attribut "name" égal à "check"
console.log(check); // Affiche la liste des éléments récupérés dans la console

// Récupération de l'élément ayant l'ID "container"
let container = document.querySelector("#container");

// Modification du contenu de "container"
// Ajout d'une ligne HTML dans l'élément
container.innerHTML += "<p> Injecter depuis le js </p>";
// Ajout de texte brut dans l'élément (n'interprète pas comme du HTML)
container.textContent += "<p> texte injecter depuis le js </p>";

// Manipulation des classes sur un élément ayant la classe "remove"
let pRemove = document.querySelector("p.remove"); // Récupère le premier élément <p> avec la classe "remove"

pRemove.classList.add("add"); // Ajoute une nouvelle classe "add"
pRemove.classList.remove("remove"); // Supprime la classe "remove"
pRemove.classList.toggle("test"); // Si "test" existe, elle est supprimée ; sinon, elle est ajoutée

// Modification du style de l'élément "container"
container.style.width = "50px"; // Définit une largeur de 50 pixels
container.style.backgroundColor = "Chartreuse"; // Change la couleur de fond à vert Chartreuse
container.style.color = "#FFFFFF"; // Change la couleur du texte à blanc

// Création d'un nouvel élément <div>
let myDiv = document.createElement("div"); // Crée un nouvel élément <div>
myDiv.textContent = "Rajout d'une div via le js ! "; // Ajoute un texte au nouvel élément
myDiv.style.backgroundColor = "red"; // Change la couleur de fond de la <div> en rouge
container.appendChild(myDiv); // Ajoute le <div> créé comme enfant de "container"

// Ajout d'un événement "click" sur un bouton
let btn = document.querySelector("button"); // Récupère le premier bouton de la page

btn.addEventListener("click", 
    (e) => { // Définit une fonction à exécuter lors d'un clic sur le bouton
        document.querySelector("#alert").textContent = "MERCI DE NE PAS CLIQUER !"; 
        // Change le texte de l'élément avec l'ID "alert"
    }
);

// ----------------Events -------------------------

let monBouton = document.querySelector("button");

function changerTexteH1(){
    document.querySelector("h1").textContent = "Bravo tu sais cliquez sur un bouton!"
}


// monBouton.addEventListener("click", changerTexteH1 )

// monBouton.addEventListener("click", function () {
//      document.querySelector("h1").textContent = "Bravo tu sais cliquez sur un bouton!"
// } )


// monBouton.addEventListener("click",  () => {
//      document.querySelector("h1").textContent = "Bravo tu sais cliquez sur un bouton!"
// } )
