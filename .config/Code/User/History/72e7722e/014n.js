const p = new Promise((resolve, reject) => {
    resolve(4)
})

// p

//     .then((n)=>{
//         console.log('Le nombre', n)
//     })
//     .then((n) => console.log('Le nombre 2', n))
//     .catch((e) =>{
//         console.log('erreur', e)
//         return 2
//     })
//     .then(n => console.log(2))
//     .finally(()=> console.log('aaa'))
    // finally retourne qui qu'il arrive aaa que la promesse soit résolue ou non
    // then renvoie la Promesse lorsqu elle est resolu
    // catch renvoie lorsque la promesse est rejetee

// p.then((n)=>{
//     console.log('Le nombre', n)
//     return 5
// })
// p.then((n)=>{
//     console.log('Le nombre 2', n)
// })
// .catch((e) =>{
//     console.log('erreur', e)
// })

function wait(duration){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(duration)
        }, duration)
    })
}

function waitAndFail(duration){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            reject(duration)
        }, duration)
    })
}

wait(2000)
    .then(()=>{
        console.log('Attente 2s')
        return 1000 //  pour le 2ème then
    })
    .then(()=>{
        console.log('Attente 1s')
    })
    // Le 2ème then sera appelé 1 seconde après 2secondes du premiers then  


    // waitAndFail(2000)
    // .then(()=>{
    //     console.log('Attente 1s')
    //     return waitAndFail(1000)
    // })
    // .catch(() => null)

    // renvoie null du avec le catch quand la promesse echoue  

    // ----------------------------------------------------------------------------------------------------------------

    // Syntax plus facile avec la fonction async

    async function main() {
        await wait(2000)
        console.log('Bonjour apres 2 seconde avec la méthode async await')
        await wait(1000)
        console.log('Hello on peut enchainer')
    }

    main()

// Méthode avec le catch 
    async function main2() {
       try{
            await waitAndFail(2000)
            console.log('Bonjour apres 2 seconde avec la méthode async await')
        }catch(e){
            console.log('Error')
        }
    }

    main2()


// Pour voir le resultat de la durée après 2 seconde 

async function main3() {
    console.log(await wait(2000))
    // On peut aussi mettre une variable 
    // const duration = await wait(3000)
    // console.log(`duree ${duration}`)

 }

 main3()

// Permet de d'utiliser toutes les promesses en une fois sous format tableau
// si une promesse échoue tout echoue (waitAndFaill)

 Promise.all([wait(1000), wait(2000)])
 .then(console.log)
 .catch(console.log)
// 

 Promise.allSettled([wait(1000), wait(2000)])
 .then(console.log)
 .catch(console.log)




