
const capitales = {
    Paris: 'Paris',
    Rome: 'Rome',
    Berlin: 'Berlinj',
    Washington: 'Washingtonn',
    Seoul: 'Séoul'

}

for(id in capitales){
    let reponse = document.getElementById(id)
    if(reponse){ 
    reponse.addEventListener("click", (e)=>{
        document.getElementById(id).textContent = capitales[id];
    
    })
}}



