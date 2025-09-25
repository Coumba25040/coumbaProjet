
const capitales = {
    Paris: 'Paris',
    Rome: 'Rome',
    Berlin: 'Berlin',
    Washington: 'Washington',
    CoreeDuSud: 'Séoul'

}

for(id in capitales){
    let reponse = document.getElementById(id)
    reponse.addEventListener("click", (e)=>{
        document.getElementById(id).textContent = capitales[id];
    
    })
}



