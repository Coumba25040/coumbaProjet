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

// function decompte(nbr){
//     nbr = 5
//     let i = 0
//     const t = setInterval(()=>{
//         i--
//     console.log('hello')
//     if(i <= nbr){
//         clearInterval(t)
//     }
//     }, 1000)
// }

// console.log(decompte())

let nbr = 5
let i = 0
const t = setInterval(()=>{
    i++
console.log('hello')
if(i <= nbr){
    clearInterval(t)
}
}, 1000)

