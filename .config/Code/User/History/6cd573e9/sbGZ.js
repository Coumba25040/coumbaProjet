let france = document.getElementById("paris")
let italie = document.getElementById("rome")
let allemagne = document.getElementById("berlin")
let usa = document.getElementById("washington")
let CoreeDuSud = document.getElementById("seoul")

const capitales = {
    paris: 'Paris',
    italie: 'Rome',
    allemagne: 'Berlin',
    usa: 'Washington D. C.'
    CoreeDuSud: 'Séoul'

}

france.addEventListener("click", (e)=>{
    document.getElementById("paris").textContent = "Paris";

})
italie.addEventListener("click", (e)=>{
    document.getElementById("rome").textContent = "Rome";

})
allemagne.addEventListener("click", (e)=>{
    document.getElementById("berlin").textContent = "Berlin";

})
usa.addEventListener("click", (e)=>{
    document.getElementById("washington").textContent = "Washington D. C.";

})
CoreeDuSud.addEventListener("click", (e)=>{
    document.getElementById("seoul").textContent = "Séoul";

})
    

