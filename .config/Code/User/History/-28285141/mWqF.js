// Exercice 1
// Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.


// let nb

// do {
//     nb = parseInt(prompt('Veuillez entrez un nombre compris entre 1 et 3'))
// }while (nb < 1 || nb > 3) 
//     alert('Bravo')




// Exercice 2
// Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne.
// En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » 
// si le nombre est inférieur à 10.


// let nb 

// do {
//     nb = parseInt(prompt('Veuillez entrez un nombre compris entre 10 et 20'))
//     if(nb < 10){
//         alert('plus grand')
//     }else if(nb > 20){
//         alert('plus petit')
//     }
// }while (nb < 10 || nb > 20) 
//     alert('Bravo')
	


// Exercice 3
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
// Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

// let nb = parseInt(prompt('Veuillez entrez un nombre'))

// for (let i = 1; i <= 10; i++){
  
//     console.log(nb + i)
// } 


// Exercice 4 :
// Ecrire un algorithme qui demande un nombre de départ et qui calcule la somme des entiers jusqu’à ce nombre. 
// Par exemple, si l’on entre 4, le programme doit calculer : 1 + 2 + 3 + 4 = 10.

// let nb = parseInt(prompt('Veuillez entrez un nombre'))
// let somme = 0

// for(let i = 1; i <= nb; i++){
//     somme += i
//     console.log(somme)
// }


// Exercice 5
// Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre, 
// présentée comme suit (cas où l'utilisateur entre le nombre 7) :
// Table de 7 :
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// …
// 7 x 10 = 70

// let nb = parseInt(prompt('Veuillez entrez un nombre'))
// let table

// for(let i = 1; i <= 10; i++){
//     table = i * nb
   
//     document.write(i, ' x ', nb, ' = ', table, '<br>') 
// }




// Exercice 6 :
// La ville de Tourcoing a un taux d’accroissement de 0.89 %. Ecrire un algorithme donnant le nombre
// d'années nécessaire pour atteindre 120 000 habitants. On sait qu’en 2015 la ville de Tourcoing
// comptait 96 809 habitants.


// Variable : nhab, nfin, an : entier
// Debut
//     nhab <- 96 809
//     nfin <- 120 000
//     an <- 0                             
//     Repeter      
//             nhab = nhab + (nhab*0,0089)
//         an = an + 1
//     Jusqu'a (nfin <= nhab)                           
//         Afficher ("Atteint en" + an + "années")
// Fin

// let nhab = 96809
// let nfin = 120000
// let an = 0

// do{
//    nhab += (nhab*0.0089)
//    an ++ 
// }while(nhab < nfin)
//     console.log("Atteint en", an, "années")




// Exercice 7 : 
// Écrire un programme qui demande la saisi de deux nombres et affiche leur multiplication en se basant sur l'addition seulement (pas d’opération *) 

// let nb1 = parseInt(prompt('Veuillez entrez un nombre'))
// let nb2 = parseInt(prompt('Veuillez entrez un deuxième nombre'))
// let multiplication = nb1 * nb2 

// console.log(multiplication)

// Exercice 8: 
// Écrire un programme qui saisit un nombre strictement positif et affiche un triangle de cette façon : 
// Si saisie = 1 
// Affiche : 
// * 
// Si saisie = 2 
// Affiche : 
// * 
// ** 
// Si saisie = 3 
// Affiche : 
// * 
// ** 
// *** 

// let nb = parseInt(prompt('Veuillez entrez un nombre'))
// let somme = ''
// if(nb < 0){
//     alert('le nombre doit être supérieur à 0')
// }

// for(let i = 1; i <= nb; i++){
//     somme += '*'
//     console.log(somme)
// }




// Exercice 9 : 
// Créer un programme qui afficher les nombres de 1 à 100 pour les multiples de 3 le programme doit afficher « Fizz » à la place du nombre, si c’est un multiples de 5 on affichera « Buzz », pour les nombres qui sont des multiples de 3 et de 5 on affichera « FizzBuzz »
// let nb = 1

// while(nb < 100){
//     if(nb % 3 == 0 && nb % 5 == 0){
//         document.write('FizzBuzz')
//         console.log('FizzBuzz')
//         document.write(' <br> ')
//     }else if(nb % 3 == 0){
//         document.write(' Fizz ')
//         document.write(' <br> ')
//         console.log('Fizz')
//     }else if(nb % 5 == 0){
//         document.write(' Buzz ')
//         document.write(' <br> ')
//         console.log('Buzz')
//     }else{
//         console.log(nb)
//         document.write(nb)
//         document.write(' <br> ')

//     }

//     nb++
    
// }


// Exercice 10 : 
// Écrire un programme qui demande la saisie de 2 nombres positifs et affiche tous les nombres pairs entre ces 2 nombres. 

let nb1 = parseInt(prompt('Veuillez entrez un nombre positif'))
let nb2 = parseInt(prompt('Veuillez entrez un deuxième nombre positif'))

do(nb1 < 0 || nb2 < 0){
    
}


// Exercice 11
// Le juste prix : 
// V1 : 
// - le jeux se passe entre un joueur A et joueur B. 
// - le programme demande au joueur de faire une saisie A dans R. 
// - le programme demande au joueur B de saisir une valeur V. 
// Si V est supérieure à R le programme affiche "plus petit", et le joueur B refait une saisie. 
// Si V est inférieure à R le programme affiche "plus grand", et le joueur B refait une saisie. 
// Sinon le programme affiche "trouvé". 
// V2 : 
// Le joueur n'a que 7 tentatives. 













