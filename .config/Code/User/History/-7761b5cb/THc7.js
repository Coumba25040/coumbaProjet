let inputNombre = document.querySelector("input")
let btnValider = document.getElementById("valider")
let btnRejouer = document.getElementById("rejouer")
let p = document.querySelector("p")

console.log(inputNombre)

let min = 1
let max = 1000
let random = Math.floor(Math.random() * (max - min) + min)
console.log(random)
let tentatives = 10

btnValider.addEventListener('click', function(){
    if(tentatives > 0){
        tentatives--
    console.log(inputNombre.value)
    if(inputNombre.value > random){
        p.textContent = "Trop Grand attention il vous reste " + tentatives
    }else if(inputNombre.value < random){
        p.textContent = "Trop Petit attention il vous reste " + tentatives
    }else if(inputNombre.value == random){
        p.textContent= "Bravo"
    }
    if(tentatives == 0 && inputNombre.value != random){
        p.textContent = 'Perdu le nombre étais ' + random + 'cliquez sur rejouer'
        btnValider

    }
}
})

btnRejouer.addEventListener('click', function(){
    if(tentatives > 10){
        
    }
})




