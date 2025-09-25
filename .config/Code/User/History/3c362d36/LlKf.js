let utilisateursContainer = document.getElementById("utilisateurs-container")
let trierAge = document.getElementById("trierAge")
let renitialiser = document.getElementById("renitialiser")


let utilisateurs = [
    
    {nom: "BA", prenom: "Coumba", age: 23},
    {nom: "LILI", prenom: "Lala", age: 45},
    {nom: "NONO", prenom: "Nana", age: 28},
    {nom: "LALA", prenom: "LOLI", age: 100}
]


function afficherUtilisateurs (liste = utilisateurs){
    utilisateursContainer.innerHTML = ''

    liste.forEach(({nom, prenom, age}) => {
        utilisateursContainer.innerHTML += `
        <div class="utilisateur">
            <h2>${nom} ${prenom}</h2>
            <p>${age} ans</p>
        </div>`
    })

}
afficherUtilisateurs()



trierAge.addEventListener("change", (e) => {
    let utilisateurTri = [...utilisateurs]
    const tri = e.target.value
    
    if(tri === "asc"){
        utilisateurTri.sort((a, b) => a.age - b.age)
        afficherUtilisateurs(utilisateurTri)

    }else if(tri === "desc"){
        utilisateurTri.sort((a, b) => b.age - a.age)
        afficherUtilisateurs(utilisateurTri)

    }else if (tri === "30ans"){
      let age30 =  utilisateurs.filter(function(utilisateur){
            return utilisateur.age < 30
        })
        afficherUtilisateurs(age30)
    }

})


renitialiser.addEventListener("click", (e) => {
        trierAge.value = ''
        
        afficherUtilisateurs()
    
})


let recherche = document.getElementById("recherche")





