let input = document.getElementById("input")
let containerTâche = document.getElementById("containerTâche")
let btnAjouter = document.getElementById("ajouter")
let liste = document.getElementById("liste")



btnAjouter.addEventListener('click', (e) => {
    
afficherTache()

})

function afficherTache() {
   
     const li =  document.createElement('li')
     const p = document.createElement('p')
     p.textContent =  input.value

     const btnSupprimer = document.createElement(')
}