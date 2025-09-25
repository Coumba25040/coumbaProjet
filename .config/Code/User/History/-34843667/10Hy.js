// const r = fetch('https://jsonplaceholder.typicode.com/users')
// console.log(r)

// let i = 0

// const t = setInterval(()=>{
//     i++
//     console.log('first')
//     if(i >= 5){
//         clearInterval(t)
//     }
// }, 1000)



function decompte(n) {
    setTimeout(()=>{
        decompte(n--)
    }, 1000)
}
decompte(5)