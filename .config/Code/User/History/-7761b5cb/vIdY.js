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

btnValider.addEventListener('click', function () {

    let valeur = inputNombre.value
    if (tentatives > 0) {
        tentatives--
        console.log(valeur)
        if (valeur > random) {
            p.textContent = "Trop Grand ! Attention il vous reste " + tentatives + " tentatives !"
        } else if (valeur < random) {
            p.textContent = "Trop Petit ! Attention il vous reste " + tentatives + " tentatives !"
        } else if (valeur == random) {
            p.textContent = "Bravo, vous avez trouvé le juste prix !"
        }
        if (tentatives == 0 && valeur != random) {
            p.textContent = 'Perdu ! Le nombre était ' + random + ' cliquez sur rejouer !'
            btnValider.disabled = true
        }
    }
})

btnRejouer.addEventListener('click', function () {
    
    tentatives = 10
    random = Math.floor(Math.random() * (max - min) + min)
    console.log("Nouveaux nombre " + random)
    valeur = " "
    p.textContent = " "
    btnValider.disabled = false
})




