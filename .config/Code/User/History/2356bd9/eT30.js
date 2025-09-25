// let input = document.querySelector("input")
// let p = document.getElementById("reponse")


// input.addEventListener("change", erreur)

// function erreur(event){
//     if(event.target.value != "je certifie avoir lu les conditions de vente"){
//         p.textContent = "incorrect : je certifie avoir lu les conditions de vente"
//     }else{
//         p.textContent = ''
//     }
    
// }

let dollarsInput = document.getElementById('dollars')
let euros = document.getElementById('euros')
let convertEuros = document.getElementById('convertEuro')
let convertDollars = document.getElementById('convertDollars')

dollarsInput.addEventListener('change', euroDollars)



function euroDollars () {
    convertEuros = dollars * 1.08

}
