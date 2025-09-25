// function isPalindrome (word) {
//     const reversedWord = word
//         .split('')
//         .reverse()
//         .join('')
//     return word.toUpperCase() === reversedWord.toUpperCase()
// }

// let words = {
//     sos: true,
//     lol: true,
//     lili: false,
//     toto: true
// }

// for (let word in words){
//     if(isPalindrom(word) !== words[word]){
//         console.log('first')
//     }
// } 

// const students = [
//     {
//         name: 'John',
//         notes: [1, 20, 18, 19, 12]
//     },
//     {
//         name: 'Jane',
//         notes: [17, 18, 20, 13, 15]
//     },
//     {
//         name: 'Sophie',
//         notes: [17, 12, 14, 15, 13]
//     },
//     {
//         name: 'Marc',
//         notes: [2, 3, 5, 8, 9]
//     },
//     {
//         name: 'Manon',
//         notes: [18, 17, 18, 19, 12]
//     }
// ]


// students.forEach(({notes})=>{
    
//     let sum = 0
//     for(i = 0; i < notes.length; i++){
//         sum += notes[i]
        
//     }
//     const moyenne =  sum / notes.length
//     console.log(averrage)
// })

// const moyenne = (notes) => {
//     let sum = 0
//     for(let note of notes){
//         sum = sum + note
      
//     }
// }
// moyenne(notes)
// console.log( averrage(notes))


// function moyenne(students){
//     students.forEach(({notes})=>{
    
//     let sum = 0
//     for(let i = 0; i < notes.length; i++){
//         sum += notes[i]
        
//     }
//     return sum / notes.length

// })
// }

// console.log(moyenne(students))

// split(): cette méthode divisera la chaîne en un tableau de caractères.
// reverse(): cette méthode inverse tous les éléments d’un tableau.
// join(): Cette méthode joint tous les éléments du tableau pour créer une chaîne de caractères.
 // reconstruit une chaîne de caractères à partir du tableau inversé
// function inverser(str){
//   let string =  str.split('').reverse().join('')

//   return string
 
// }


// console.log(inverser('Chat'))



// function countLetters(str) {
//   const letters = str.split('')
//    return letters.length
// }

// console.log(countLetters('Lala'))


// function palindrom(str){
//  let mot = str.split('').reverse().join('')
//  return mot

// }

// function isPalindrom(string){
//   const original = string.toLowerCase()
//   const reverse = palindrom(string).toLowerCase()

//   if(original === reverse){
//     return true
//   }else{
//     return false
//   }
// }


// console.log(isPalindrom('Sos'))




//  function isPalindrome (str) {
//             const reverseStr = str.split('').reverse().join()
//             return reverseStr.toU

//             console.log(letters)
//         }
// const words = {
//             kayak: true,
//             SOS: true,
//             Kayak: true,
//             Bonjour: false,
//         }
// for(let word in words) {
//             if (isPalindrome(word) !== words[word]) {
//                 console.error(`isPalindrome(${word}) aurait dû renvoyer ${words[word]}`);
//         }
//     }

const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

const moyennes = []

for(const student of students){
  
  const notes = student.notes
  let sum = 0
  
  for( let i = 0; i < notes.length; i++){
     sum += notes[i] 
     
  }
   const moyenne =  sum / notes.length
    moyennes.push(moyenne)
      
}


function classement(students){
  moyennes.sort((a, b) => a - b)
      
  console.log(moyennes)
}



// function moyenne(notes){
//   let som = 0
//   for( let i = 0; i < notes.length; i++){
//         sum += notes[i]
//   }
//   console.log(sum)
// }

const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`


function frequence(phrase){
  let string = phrase.split(' ')
  console.log(string)
}

