// const r = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(r)

setTimeout(()=>{
    console.log('Coumba')
    setTimeout(()=>{
        console.log('Comment')

        setTimeout(()=>{
            console.log('ça')

            setTimeout(()=>{
                console.log('va')
                setTimeout(()=>{
                    console.log('?')
                }, 5000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)

function decompte(){
    for(let i = 3; i > 3; i--){
        console.log(i)
    }
}