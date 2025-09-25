
const capitales = {
    âââ: 'Paris',
    Italie: 'Rome',
    Allemagne: 'Berlin',
    Usa: 'Washington',
    CoreeDuSud: 'Séoul'

}

for(id in capitales){
    let reponse = document.getElementById(id)
    reponse.addEventListener("click", (e)=>{
        document.getElementById(id).textContent = capitales[id];
    
    })
}



