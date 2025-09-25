
let trier = document.getElementById("trier")


let voitures = [
    
    {marque: "Clio", modele: "4", annee: 2011},
    {marque: "Peugeot", modele: "208", annee: 2018},
    {marque: "Reunault", modele: "Talisman", annee: 2016}

]
let containerVoiture = document.getElementById("container-voiture")

function afficherVoiture(){
    containerVoiture.innerHTML = ''

    voitures.forEach(({marque, modele, annee}) => {

        containerVoiture.innerHTML += `
        <div class='voiture'>
            <h2>Marque ${marque}</h2>
            <p>Modele ${modele}</p>
            <p>Année ${annee}</p>
        </div>`
    });
}

afficherVoiture()


trier.addEventListener("change", (e) => {
  const sens = e.target.value

   if(sens === "asc"){
    voitures.sort((a, b) => a.annee - b.annee)
   }else if(sens === "desc"){
    voitures.sort((a, b) => b.annee - a.annee)
   }

   afficherVoiture()
})




