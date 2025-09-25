// Sélectionner les élments html
const response = document.getElementById("response");
const btnResponse = document.getElementById("btn-response");
const message = document.getElementById("message");

let tentatives = 0;

let justePrix = Math.floor(Math.random()*1000);
console.log(justePrix);

// Ajout de l'évenement "click" au bouton réponse
btnResponse.addEventListener("click", ()=> {
    

    if(response.value < justePrix){
        message.textContent = 'c\'est plus';
        tentatives++;
    } else if (response.value > justePrix){
        message.textContent = "c'est moins";
        tentatives++;
    }else{
        message.textContent = "bravo";
    }

    console.log("tentatives :", tentatives);

    const btnRestart = document.createElement("button");
    btnRestart.textContent = "Recommencer";

    btnRestart.addEventListener("click",()=>{
        justePrix = Math.floor(Math.random()*1000);
        response.value = "";
        btnResponse.disabled = false;
        tentatives = 0;
        console.log(justePrix);
    })

    // vous avez perdu
    if(tentatives == 10){
        btnResponse.disabled = true;
        message.textContent = "Perdu, la response était : " + justePrix;
        message.appendChild(btnRestart);
    }

    // vous avez gagné
    if(message.textContent == "bravo"){
        btnResponse.disabled = true;
        message.textContent = "Gagné, vous avez trouvé le Juste Prix : " + justePrix;
        message.appendChild(btnRestart);
    }

    response.value = "";
})