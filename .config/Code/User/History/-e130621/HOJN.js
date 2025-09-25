
// function capitalize(str) {
//     if(!str){
//         return str
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1)

// }
// console.log(capitalize("hello"))
// console.log(capitalize("bonjour"))
// console.log(capitalize("Javascript"))

function capitalize(str) {
    if(!str){
        return str
    }
    return str.charAt(0) + str.slice(1).toUpperCase()

}
console.log(capitalize("hello"))
console.log(capitalize("bonjour"))
console.log(capitalize("javascript"))


// Écris ta version perso de Array.prototype.map() (appelle-la monMap()).



// const arry = [1, 2, 3, 4]

// const map =  arry.map((i) => i * 2)

// console.log(map)

// const arry1 = ["alice", "bob", "charlie", "diana"]

// const map1 = arry1.map((i) => i.charAt(0).toUpperCase() + i.slice(1))

// console.log(map1)


// const phrase = "bonjour tout le monde";

// const mots = phrase.split(" ")


// const motsCapitalise = mots.map((i) => i.charAt(0).toUpperCase() + i.slice(1))

// const phraseCapitalise = motsCapitalise.join(" ")

// console.log(phraseCapitalise)


// Crée une fonction qui trie un tableau de nombres en ordre croissant.

let array = [1 , 4, 2, 6, 8]

array.sort((a, b) => a.annee - b.annee)

console.log(array)