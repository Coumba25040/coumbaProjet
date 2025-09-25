let input = document.querySelector("input")
let p = document.getElementById("reponse")



input.addEventListener("change", erreur)

if(input.target.value != '')

function erreur(e){
    p.textContent = e.target.value
}
