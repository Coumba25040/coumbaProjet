// let voitures = [{
//     marque: "clio",
//     modele: "4",
//     annee: 2011

// }]

// voitures.forEach(voiture => {
//     document.write(`<p>Marque ${voiture.marque}</p>`)
//     document.write(`<p>Modele ${voiture.modele}</p>`)
//     document.write(`<p>Année ${voiture.annee}</p>`)
    
// });


let trier = document.getElementById("trier")


let voitures = [
    
    {marque: "Clio", modele: "4", annee: 2011},
    {marque: "Peugeot", modele: "208", annee: 2018},
    {marque: "Reunault", modele: "Talisman", annee: 2016}

]


let containerVoiture = document.getElementById("container-voiture")


voitures.forEach(({marque, modele, annee}) => {

    containerVoiture.innerHTML += `
    <div class='voiture'>
        <h2>Marque ${marque}</h2>
        <p>Modele ${modele}</p>
        <p>Année ${annee}</p>
    </div>`
});

trier.addEventListener("change", (event) => {
  const sens = e.target.value
    console.log(sens)
})




