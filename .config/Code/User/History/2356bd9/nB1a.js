let input = document.querySelector("input")
let p = document.getElementById("reponse")


input.addEventListener("change", erreur)

function erreur(input){
    if(input.target.value != "je certifie avoir lu les conditions de vente"){
        p.textContent = 'incorrect : '
    }else{
        p.textContent = ''
    }
    
}
