
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

function capitalizePhrase(phrase) {
    return phrase
      .split(" ")
      .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
      .join(" ");
  }
  
  const result = capitalizePhrase("bonjour tout le monde");
  console.log(result); // "Bonjour Tout Le Monde"
  


// 12 Crée une fonction qui trie un tableau de nombres en ordre croissant.

let array = [1, 4, 2, 6, 8]

array.sort((a, b) => a - b); // Tri croissant

console.log(array)

// 13 Affiche un texte dans une balise <div> avec innerText.

// let container = document.getElementById("container")

// function afficherContainer(){
//     container.innerText += "hello"
// }
// afficherContainer(container)


// 14 Crée un bouton "Clique-moi" qui affiche une alerte "Bravo !".

let btn = document.getElementById("btn")

btn.addEventListener("click", (e) =>{
    alert("bravo")
})

// 14 Fais un champ de formulaire qui affiche ce que tu tapes en direct.

let input = document.getElementById("input")

let tape = input.value 

console.log(tape)

// input.addEventListener("kayup", (e) =>{
//     tape = input.value 
//     console.log(tape)
// })