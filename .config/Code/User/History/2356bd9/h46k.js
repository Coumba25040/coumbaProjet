let input = document.querySelector("input")
let p = document.getElementById("reponse")

if(e.target.value != "Je certifie avoir lu les conditions de vente"){
    
}

input.addEventListener("change", erreur)

function erreur(e){
    p.textContent = e.target.value
}
