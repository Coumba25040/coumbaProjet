let input = document.querySelector("input")
let p = document.getElementById("reponse")

if(e.target.value != "Je certifie avoir lu les conditions de vente"){
    i.addEventListener("change", (event) =>{
        p.textContent = "erreur"
    })

}
