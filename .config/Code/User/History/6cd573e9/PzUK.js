let france = document.getElementById("Paris")
let italie = document.getElementById("rome")
let allemagne = document.getElementById("berlin")
let CoreeDuSud = document.getElementById("seoul")


france.addEventListener("click", (e)=>{
    document.getElementById("france").textContent = "Paris";

})
italie.addEventListener("click", (e)=>{
    document.getElementById("rome").textContent = "Rome";

})
allemagne.addEventListener("click", (e)=>{
    document.getElementById("berlin").textContent = "Berlin";

})
usa.addEventListener("click", (e)=>{
    document.getElementById("washington D. C.").textContent = "Washington D. C.";

})
CoreeDuSud.addEventListener("click", (e)=>{
    document.getElementById("seoul").textContent = "Corée du Sud";

})
    

