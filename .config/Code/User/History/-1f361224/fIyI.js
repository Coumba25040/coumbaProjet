let input = document.getElementById("input")
let containerTâche = document.getElementById("containerTâche")
let btnAjouter = document.getElementById("ajouter")
let liste = document.getElementById("liste")


btnAjouter.addEventListener('click', (e) => {
    containerTâche.innerHTML += `<ul>
    <li><p>${input.value}</p><button>supprimer</button></li>
    </ul>
`

})

function afficherTache() {
    containerTâche.innerHTML += `<ul>
    <li><p>${input.value}</p><button>supprimer</button></li>
    </ul>`
}