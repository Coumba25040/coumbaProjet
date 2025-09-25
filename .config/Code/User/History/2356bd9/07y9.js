let input = document.querySelector("input")
let p = document.getElementById("reponse")



input.addEventListener("change", erreur)

function erreur(e){
    p.textContent = e.target.value
}