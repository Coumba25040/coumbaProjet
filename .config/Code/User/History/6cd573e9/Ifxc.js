
const capitales = {
    paris: 'Paris',
    italie: 'Rome',
    allemagne: 'Berlin',
    usa: 'Washington',
    CoreeDuSud: 'Séoul'

}

for(id in capitales){
    let reponse = document.getElementById(id)
    reponse.addEventListener("click", (e)=>{
        document.getElementById(id).textContent = capitales[id];
    
    })
}



