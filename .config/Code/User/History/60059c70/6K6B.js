// // Exercice 1 : Variables et opérateurs
// // Énoncé :
// // Crée trois variables nbr1, nbr2 et nbr3 contenant respectivement les valeurs 5, 10 et 15. Calcule :
// // 1. La somme des trois nombres.
// // 2. Le produit des trois nombres.
// // 3. La moyenne des trois nombres.
// // Affiche les résultats avec document.write.

// let nbr1 = 5
// let nbr2 = 10
// let nbr3 = 15
// let somme
// let produit
// let moyenne

// somme = nbr1 + nbr2 + nbr3
// document.write(somme, '<br>')

// produit = nbr1 * nbr2 * nbr3
// document.write(produit, '<br>')

// moyenne = nbr1 + nbr2 + nbr3 / 3
// document.write(moyenne, '<br>')


// // // Exercice 2 : Conditions (if/else)
// // // Énoncé :
// // // Crée une variable age contenant un âge (valeur au choix). Écris un script qui affiche :
// // // "Mineur" si l'âge est inférieur à 18.
// // // "Majeur" si l'âge est supérieur ou égal à 18.
// // // Utilise document.write pour afficher le résultat.

// let age = parseInt(prompt('Entrez un age'))

// if(age < 18){
//     document.write('Mineur')
// }else if(age >= 18){
//     document.write('Majeur')
// }


// // // Exercice 3 : Boucles
// // // Énoncé :
// // // Écris une boucle qui affiche les nombres de 1 à 10 dans la console. Utilise document.write pour afficher
// // // chaque nombre.

// for(let i = 1; i <= 10; i++){
//     document.write('<br>',i)
// }


// document.write('<br>Exercice 4 : Tableaux</br>')
// // // Énoncé :
// // // Crée un tableau contenant les nombres suivants : [2, 4, 6, 8, 10]. Affiche chaque élément du tableau
// // // avec document.write à l'aide d'une boucle.

// const tabl = [2, 4, 6, 8, 10]

// for(const tab of tabl){
//     document.write('<br>',tab)
// }

// document.write('<br>Exercice 5 : Fonctions</br>')
// // // Énoncé :
// // // Écris une fonction appelée addition qui prend deux arguments et retourne leur somme. Teste la fonction
// // // avec différents nombres et affiche les résultats avec document.write.

// function addition(nb1, nb2){
//    let calculeAddition = nb1 + nb2
//    return calculeAddition
// }
// let resultatAddition = addition(1,2)

// document.write('<br>',resultatAddition, '</br>')


// // Exercice 6 : Boucles et calculs
// // Énoncé :
// // Écris une boucle qui calcule la somme des nombres pairs entre 1 et 20. Affiche le résultat avec
// // document.write.

// let somme2

// for(let i = 1; i <= 20; i++){
//     somme += i
//     if(i % 2 == 0){
//     document.write(i, ' ')
// }
// }

// // // Exercice 7 : Fonctions avec conditions
// // // Énoncé :
// // // Écris une fonction isEven qui prend un nombre en argument et retourne true si le nombre est pair, ou
// // // false s'il est impair. Affiche le résultat avec document.write.

// let nb

// function isEven(nb){
//     if(nb % 2 == 0){
//         document.write('pair')
//         return true
        
//     }else{
//         document.write('impair')
//         return false
        
//     }

// }

// isEven(2)


// // // Exercice 8 : Tableaux et filtres
// // // Énoncé :
// // // Crée un tableau contenant les nombres suivants : [3, 5, 8, 12, 17, 21]. Écris un script pour créer un
// // // nouveau tableau contenant uniquement les nombres pairs. Affiche les deux tableaux avec document.write.

// let numbers = [3, 5, 8, 12, 17, 21]
// let evenNumbers = numbers.filter((number) => number % 2 === 0)
// document.write('<br>',evenNumbers)

// // // Exercice 9 : Multiples
// // // Énoncé :
// // // Écris une boucle qui affiche les multiples de 3 entre 1 et 30 avec document.write.

// for(let i = 1; i <= 30; i++){
//     if(i % 3 == 0){
//         document.write('<br>',i, ' ')
//     }
// }

// // // Exercice 10 : Nombre maximum
// // // Énoncé :
// // // Crée une fonction maxNumber qui prend un tableau de nombres en argument et retourne le plus grand
// // // nombre du tableau. Affiche le résultat avec document.write.

// let tab = [3,6,2,5,8]
// let max =  Math.max(...tab)
// document.write('<br>',max)


// // Exercice 11 : Factorielle
// // Énoncé :
// // Écris une fonction factorial qui prend un nombre en argument et retourne sa factorielle. La factorielle de n
// // est le produit de tous les nombres entiers de 1 à n. Par exemple, pour n = 4, le résultat est 1 * 2 * 3 * 4 =
// // 24. Affiche le résultat avec document.write.
// let n
// let somme3

// function factorial(n) {
//     for(let i = 1; i <= n; i++){
//         somme3 += i * n
//     }
// }

// let result = factorial(4)
// document.write(result)

document.write("<br>-----------------------------------EXO 12--------------------------------------- <br>")

// Exercice 12 : Somme des chiffres
// Énoncé :
// Écris une fonction qui prend un nombre entier positif et retourne la somme de ses chiffres. Par exemple, pour
// 123, le résultat est 1 + 2 + 3 = 6. Affiche le résultat avec document.write.

// let nbr = parseInt(prompt('entrez un nombre'))
// let somme4 = 0

// function som (somme4, nbr){
//    while(nbr <= 0 ){
//         nbr = parseInt(prompt('Veuillez entrez un nombre positif'))
//     }
//         for(let i = 1; i <= nbr; i++){
//             somme4 += i

//         }
//      return somme4   
// }
// let resultSomme = som(somme4, nbr)

// document.write('la somme de '+ nbr + ' est ' + resultSomme)



// document.write("<br>-----------------------------------EXO 13--------------------------------------- <br>")


// // Exercice 13 : FizzBuzz
// // Énoncé :
// // Écris un script qui affiche les nombres de 1 à 100. Pour les multiples de 3, affiche "Fizz". Pour les multiples de
// // 5, affiche "Buzz". Pour les multiples de 3 et 5, affiche "FizzBuzz". Utilise document.write pour afficher les
// // résultats.


// // for(let i = 1; i <= 100; i++){
// //     if(i % 3 === 0 && i % 5 === 0){
// //         document.write('<br>FizzBuzz')
// //     }else if(i % 3 === 0){
// //         document.write('<br>Fizz')
// //     }else if(i % 5 === 0){
// //         document.write('<br>Buzz')
// //     }else{
// //         document.write('<br>',i)
// //     }
// // }

// document.write("<br>-----------------------------------EXO 14--------------------------------------- <br>")

// // Exercice 14 : Tri d'un tableau
// // Énoncé :
// // Crée une fonction qui prend un tableau de nombres et retourne le tableau trié dans l'ordre croissant. Affiche
// // le tableau trié avec document.write.

// let tab = [5,6,3,8,12]

// tab.sort(function (a, b){
//     return a - b
// })

// document.write(tab)

// document.write("<br>-----------------------------------EXO 15--------------------------------------- <br>")
// // Exercice 15 : Puissance d'un nombre
// // Énoncé :
// // Écris une fonction power qui prend deux arguments base et exponent et retourne la valeur de base élevée à
// // la puissance exponent. Par exemple, pour base = 2 et exponent = 3, le résultat est 2 * 2 * 2 = 8. Affiche
// // le résultat avec document.write.

// let base = parseInt(prompt('Veuillez entrez la base'))
// let exponent = parseInt(prompt('Veuillez entrez l exponent'))
// let total = 1

// function power(base, exponent){
//     for(let i = 0; i < exponent; i++){
//       total *= base  
//     }
//     return total
// }
// let resultPower = power(base, exponent)

// document.write(resultPower)

// document.write("<br>-----------------------------------EXO 17--------------------------------------- <br>")
// // Exercice 17 : Recherche dans un tableau
// // Énoncé :
// // Écris une fonction qui prend un tableau et une valeur, et retourne true si la valeur est présente dans le
// // tableau, ou false sinon. Affiche le résultat avec document.write.

// let table = ['ananas', 'pomme', 'cerise', 'poire']

// function recherche (table){
// table.includes('pomme')
// }

document.write("<br>-----------------------------------EXO 18--------------------------------------- <br>")

// Exercice 18 : Multiplication d'une table
// Énoncé :
// Écris un script qui affiche la table de multiplication d'un nombre donné (par exemple, 7). Affiche les résultats
// sous la forme "7 x 1 = 7", "7 x 2 = 14", etc. jusqu'à 10 avec document.write.

let numb = parseInt(prompt('Veuillez entrez un nombre'))

function multiplication(numb){
    for(let i = 1; i <= 10; i++){
       let produit = i*numb
        document.write(i + ' x ' + numb + ' = ' + produit + '<br>' )
    }
    
 
}
multiplication(numb)




// Faire une fonction qui permet de renvoyer le resultat d'une addition entre 2 nombre  pris en paramètre 
// let nb1 = parseInt(prompt('Veuillez entrez un nombre'))
// let nb2 = parseInt(prompt('Veuillez entrez un nombre'))

// function calculeAddition(nb1, nb2){
//    let addition = nb1 + nb2

//    return addition
// }

// let resultAddition = calculeAddition(nb1, nb2)

// document.write(resultAddition)



// Faire une fonction qui permet de renvoyer le resultat d'une soustraction entre 2 nombre  pris en paramètre

// let nb3 = parseInt(prompt('Veuillez entrez un nombre'))
// let nb4 = parseInt(prompt('Veuillez entrez un nombre'))

// function calculeSoustraction(nb3, nb4){
//    let soustraction = nb3 - nb4

//    return soustraction
// }

// let resultSoustraction = calculeSoustraction(nb3, nb4)

// document.write(resultSoustraction)

// Faire une fonction qui permet de renvoyer le resultat d'une multiplication entre 2 nombre  pris en paramètre 
// let nb1 = parseInt(prompt('Veuillez entrez un nombre'))
// let nb2 = parseInt(prompt('Veuillez entrez un nombre'))

// function calculeMultiplication(nb1, nb2){
//    let multiplication = nb1 * nb2

//    return multiplication
// }

// let resultMultiplication = calculeMultiplication(nb1, nb2)

// document.write(resultMultiplication)


// Faire une fonction qui permet de renvoyer le resultat d'une division entre 2 nombre  pris en paramètre 

let nb1 = parseInt(prompt('Veuillez entrez un nombre'))
let nb2 = parseInt(prompt('Veuillez entrez un nombre'))

function calculeDivision(nb1, nb2){
   let division = nb1 / nb2

   return division
}

let resultDivision = calculeDivision(nb1, nb2)

document.write(resultDivision)

// Fonction calculatrice elle va prendre un paramètre 2 nombre et un opérateur  et  qui appeler et afficher le résultat de la bonne fonction .
let nb1 = parseInt(prompt('Veuillez entrez un nombre'))
let opérateur = (prompt('Veuillez entrez un opérateur'))
let nb2 = parseInt(prompt('Veuillez entrez un nombre'))


