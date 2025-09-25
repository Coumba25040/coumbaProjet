// Exercice 1 :
// Ecrire un script js qui demande un nombre entier à l'utilisateur, puis qui calcule et affiche le double de ce nombre

// let nb
// let double

// nb = prompt("Veuillez entrez une nombre entier : ")
// double = parseInt(nb) * 2

// document.write(double)



// Exercice 2 :
// Ecrire un script js qui demande un nombre à l'utilisateur et d'afficher si le nombre est Positif , négatif.

// let nb = prompt("Entrez un nombre")

// if(nb > 0){
//     document.write('positif')
// }else if(nb < 0){
//     document.write('negatif')
// }else{
//     document.write('le nombre est 0')
// }

// Exercice 3 :
// Ecrire un script js qui demande un nombre à l’utilisateur et afficher si le nombre est divisible par 3 ou non.

// let nb = prompt('Entrez un nombre')

// if(nb % 3 === 0){
//     alert('Le nombre est divisible par 3')
// }else{
//     alert("Le nombre n'est pas divisible par 3")
// }

// Exercice 4 :
// Ecrire un script js qui demande la saisie de 2 nombres et affiche le nombre le plus grand.

// let nb1 = parseInt (prompt('Veillez entrez le premier nombre : '))
// let nb2 = parseInt (prompt('Veillez entrez le deuxième  nombre : '))

// if(nb1 > nb2){
//     document.write(nb1, ' est le plus grand')
// }else if(nb2 > nb1){
//     document.write(nb2, ' est le plus grand')
// }else{
//     document.write('Les 2 nombres sont égaux')
// }

// Exercice 5:
// Ecrire un script js qui demande la saisie de 3 nombres et affiche leurs moyennes 

// let nb1 = parseFloat (prompt('Veuillez entrez le premier nombre '))
// let nb2 = parseFloat (prompt('Veuillez entrez le deuxième nombre '))
// let nb3 = parseFloat (prompt('Veuillez entrez le troisième nombre '))

// let moyenne

// moyenne = (nb1 + nb2 + nb3) / 3

// alert('La moyenne des 3 est ' + moyenne.toFixed(2))

// Exercice 6 : 
// De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard. 
// Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : "Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)". 

// let heure = parseInt (prompt('Veuillez saisir une heure'))
// let minutes =  parseInt (prompt('Veuillez saisir une minute'))
// let secondes =  parseInt (prompt('Veuillez saisir une seconde'))

// secondes += 1

// if(secondes >= 60){
//     secondes = 0
//     minutes += 1
//     }if( minutes >= 60){
//         minutes = 0
//         heure += 1 
//         }if(heure >= 24){
//             heure = 0
//         }
// document.write("Dans une seconde, il sera " + heure  + " heure(s) " + minutes +  " minute(s) et " + secondes + " seconde(s)")



// Exercice 7 : 
// Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante 

// let nbCopies = parseInt (prompt('Veuillez entrez le nombre de copies'))
// let facture 

// if(nbCopies > 10){
//     facture = 0,10
// }else if(nbCopies = 20){
//     facture = 0.09
// }else if(nbCopies > 20){
//     facture = 0.08
// }

// document.write('Votre facture est de ' + facture + ' E')

// Exercice 8:
// Les habitants de Zorglub paient l’impôt selon les règles suivantes : 
// •    • les hommes de plus de 20 ans paient l’impôt 
// •    • les femmes paient l’impôt si elles ont entre 18 et 35 ans 
// •    • les autres ne paient pas d’impôt 

// Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.

// let age = parseInt (prompt('Veuillez entrez votre age'))
// let sexe = prompt('Veuillez entrez votre sexe')
// let imposable

// if((sexe == 'homme') && (age > 20)){
//     imposable = 'Vous etes imposable'
// }else if((sexe == 'femme') && (age >= 18 && age <= 35)){
//     imposable = 'Vous etes imposable'
// }else{
//    imposable = "Vous n'etes pas imposable"
// }
// document.write(imposable)


// Exercice supplémentaire : 
// Exercice 9 : 
// Ecrire un script js qui demande l’âge d’un enfant à l’utilisateur. 
// Ensuite, il l’informe de sa catégorie : 
// • "Poussin" de 6 à 7 ans 
// • "Pupille" de 8 à 9 ans 
// • "Minime" de 10 à 11 ans 

// let age = parseInt (prompt('Veuillez entrez votre age'))
// let categorie 

// if((age >= 6) && (age <= 7 )){
//     categorie = 'Poussin'
// }else if((age >= 8) && (age <= 9 )){
//     categorie = 'Pupille'
// }else if((age >= 10) && (age <= 11 )){
//     categorie = 'Minime'
// }else{
//     categorie = "Votre enfant ne fait partie d'aucune catégorie"
// }
// document.write(categorie)
 

// Exercice 10 :
// Ecrire un script qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est négatif ou positif ou null. SANS FAIRE LE CALCUL
// let nb1 = parseInt (prompt('Veuillez entrez un nombre'))
// let nb2 = parseInt (prompt('Veuillez entrez un deuxième nombre'))


// Exercice 11 : 
// Ecrire un programme qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement. 
// (TTC=NA*HT*(1+TVA))
let ht = parseFloat (prompt('Veuillez entrez le prix ht'))
let na = parseFloat (prompt("Veuillez entrez le nombre d'article")) 
let tva = parseFloat (prompt('Veuillez entrez le taux de TVA en %'))
let ttc = na*ht*(1+(tva/100))

document.write('Le prix ht est '+ ht)
document.write(" Le nombre d'article est " + na)
document.write(" La tva est " + tva + ' % ')
document.write("Le nombre prix total est " + ttc + ' €')


// Exercice 12 JS. 

// Crée un script JavaScript permet de demander la saisie d'informations par l'utilisateur et lui affiche le tarifs obtenue. 

// En reprenant l'algorithme vu sur l'exercice de l'assurance.

// Rappel de l'énoncé de l'exercice sur l'assurance en algo : 
// Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge. Le tarif dépend de la situation du conducteur : 

// • un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer. 

// • un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, au tarif rouge pour un accident, sinon il est refusé. 

// • un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà 

// • De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus de cinq ans. Ainsi, s'il satisfait à cette exigence, un client normalement "vert" devient "bleu", un client normalement "orange" devient "vert", et le "rouge" devient orange. 

// Ecrire l'algorithme permettant de saisir les données nécessaires (sans contrôle de saisie) et de traiter ce problème. 
let age = parseInt (prompt('Veuillez entrez votre age'))
let accidentProvoque = parseInt (prompt("Veuillez entrez le nombre d'accidents provoqué"))
let nbAccidents = parseInt (prompt("Veuillez entrez le nombre d'accidents"))
let anneePermis 
let tarif