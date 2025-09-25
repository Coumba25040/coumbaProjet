let input = document.querySelector("input")
let p = document.getElementById("reponse")



input.addEventListener("change", erreur)

function erreur(input){

    if(input.target.value != "Je certifie avoir lu les conditions de vente"){
        p.textContent = 'erreur'
    }else{
        p.textContent = ''
    }
    
}
