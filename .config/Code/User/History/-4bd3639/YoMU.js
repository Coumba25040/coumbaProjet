const candidatureContainer = document.getElementById('candidature-container')
const entreprise = document.getElementById('entreprise')
const ville = document.getElementById('ville')
const poste = document.getElementById('poste')
const contact = document.getElementById('contact')
const email = document.getElementById('email')
const statut = document.getElementById('statut')
const date = document.getElementById('date')
const description = document.getElementById('description')
let candidature = []
let currentIndex = null



function afficherCard(tabCandidature){
    candidatureContainer.innerHTML = ''
    tabCandidature.sort((a, b) => new Date(b.date) - new Date(a.date))

    tabCandidature.forEach((item, index) => {
       
        let cardCandidature = document.createElement('div')
        cardCandidature.classList.add('card')
        cardCandidature.setAttribute('data-index', index)

        cardCandidature.innerHTML += `
        <span class="material-symbols-outlined delete-icon" data-index=${index}>
                delete
                </span>
            <div class="cardBody">
                <div class="cardTitle">
                    <h3>${item.poste}</h3>
                    <p>${item.date}</p>
                </div>
                <p>${item.entreprise}</p>
                <p>${item.ville}</p>
                <p>${item.statut}</p>
                <button class="btn-modifier" data-index="${index}">Modifier</button>
            </div>`
        candidatureContainer.appendChild(cardCandidature)

        const btnModifier = document.querySelectorAll('.btn-modifier')
        btnModifier.forEach(btnM => {
            btnM.addEventListener('click', (e) => {
                e.stopPropagation()
                const index = e.target.getAttribute('data-index')
                const item = candidature[index]

                entreprise.value = item.entreprise
                ville.value = item.ville
                poste.value = item.poste
                contact.value = item.contact
                email.value = item.email
                date.value = item.date 
                statut.value = item.statut
                description.value = item.description

                currentIndex = index 
                form.scrollIntoView({behavior: "smooth"})
            })
        })

        cardCandidature.addEventListener('click', () => {
            afficherPopup(item)
        }) 
        
    });


    const deleteIcon = document.querySelectorAll('.delete-icon')
    deleteIcon.forEach(icon =>{
        icon.addEventListener('click', (e) => {
            e.stopPropagation()
            const index = e.target.getAttribute('data-index')
            candidature.splice(index, 1)
            afficherCard(candidature)
        })
    })
}

let form = document.getElementById('form')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    


    const newCandidature = {

        entreprise: entreprise.value,
        ville: ville.value,
        poste: poste.value,
        contact: contact.value,
        email: email.value,
        date: date.value,
        statut: statut.value,
        description: description.value

    }


    if(currentIndex !== null){
        candidature[currentIndex] = newCandidature 
        currentIndex = null
    }else{
        candidature.push(newCandidature)
    }

    entreprise.value = ''
    ville.value = ''
    poste.value = ''
    contact.value = ''
    email.value = ''
    date.value = ''
    statut.value = ''
    description.value = ''
    
    afficherCard(candidature)
})

function afficherPopup(item){
let popupOverlay = document.getElementById('popup-overlay')
let popupContent = document.getElementById('popup-content')
        popupContent.innerHTML = `
            <div class="popup-coordonne">
                <h1 class="popup-emp">${item.poste}</h1>
                <h2 class="popup-ste">${item.entreprise} ${item.ville}</h2>
                <p class="popup-date-statut">${item.date} ${item.statut}</p>
                <p class="popup-contact">Contact : ${item.contact}</p>
                <p class="popup-email">Email : ${item.email}</p>
            </div>
            <div class="popup-description">
                <h2>Déscription du poste</h2>
                <p>${item.description}</p>
                <a href="javascript:void(0)" class="popup-exit">Fermer</a>
        </div>`
        
    popupOverlay.classList.add('open')

    const popupExit = document.querySelector('.popup-exit')

    popupExit.addEventListener('click', () => {
        popupOverlay.classList.remove('open')
    })

}

let trier = document.getElementById('trier')

trier.addEventListener('change', (e) => {
    const filtre = e.target.value
    let resultats = [...candidature]

    if(filtre === "recent"){
        resultats.sort((a, b) => new Date(b.date) - new Date(a.date))

    }else if(filtre === "moinsRecent"){
        resultats.sort((a, b) => new Date(a.date) - new Date(b.date))
       
    }else if (["Accepté", "Refusé", "En Attente", "Entretien"].includes(filtre)) {
        resultats = resultats.filter(c => c.statut === filtre)
        
    }
    
    afficherCard(resultats)
    
})

const recherche = document.getElementById('recherche')

recherche.addEventListener("keyup", (e) => {
    const input = recherche.value

    const result = candidature.filter(item => 
        item.entreprise.toLowerCase().includes(input.toLowerCase()) ||
        item.poste.toLowerCase().includes(input.toLowerCase()))

    if(result.length === 0){
        candidatureContainer.innerHTML = `<p>Aucune Candidature</p>`
    }else{
        afficherCard(result)
    }
})






