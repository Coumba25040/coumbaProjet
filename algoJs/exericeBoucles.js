// // exercice a faire en js :
// // Exercice 1
// // Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.
let nb;
do {
    nb = parseInt(prompt ("Veuillez ecrire un nombre"))
}
while ((nb < 1) || (nb > 3));
alert ("Bravo")

// // Exercice 2
// // Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.
let nombre1;

do {
  nombre1 = parseInt(prompt("Entrez un nombre compris entre 10 et 20: "));
  if (nombre1 < 10) {
    console.log("Plus grand !");
  } else if (nombre1 > 20) {
    console.log("Plus petit !");
  }
} while (nombre1 < 10 || nombre1 > 20);

console.log("Vous avez entré un nombre compris entre 10 et 20 :" + nombre1);
// // Exercice 3
// // Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
nombre = parseInt(prompt( " Entrez un nombre de départ :"));

for (let i = 1; i<=10; i++) {
    console.log(nombre + i);
}
// // Exercice 4 :
// // Ecrire un algorithme qui demande un nombre de départ et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 4, le programme doit calculer : 1 + 2 + 3 + 4 = 10.
let n = parseInt (prompt("Veuillez entrer un nombre entier"));
let somme = 0;

for (let i = 0; i <= n; i++){
    // somme = somme +i
    somme += i;
}
console.log(somme)

// // Exercice 5
// // Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :

// // Table de 7 :
// // 7 x 1 = 7
// // 7 x 2 = 14
// // 7 x 3 = 21
// // …
// // 7 x 10 = 70
let nbr3 = parseInt(prompt("Entrez un nombre de départ :"));

document.write("Table de " + nbr3 + " :<br>");

for (let i = 1; i <= 10; i++) {
    document.write(nbr3 + " x " + i + " = " + (nbr3 * i) + "<br>");
}

// // Exercice 6 :
// // La ville de Tourcoing a un taux d’accroissement de 0.89 %. Ecrire un algorithme donnant le nombre d'années nécessaire pour atteindre 120 000 habitants. On sait qu’en 2015 la ville de Tourcoing comptait 96 809 habitants.
let nhab = 96809;
let nfin = 120000;
let an = 0;

do {
    nhab = nhab + (nhab*(0.89/100));
    an++;
}
while (nhab < nfin);
console.log("Atteint en " + an + " années");
// Exercice 7 :
// Écrire un programme qui demande la saisi de deux nombres et affiche leur multiplication en se basant sur l'addition seulement (pas d’opération *)
let nb1 = parseInt(prompt("saisir nombre"))
let nb2 = parseInt(prompt("saisir nombre"))

let resultat = 0

for(let i=1; i<nb2; i++){
    resultat += nb1;
}
document.write("le resultat est : " + resultat)

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
let nombre = parseInt(prompt('entrez un nommbre positif'));
if (nombre <= 0) {
  alert("Le nombre doit être strictement positif.");
}
let ligne = "";
for (let i = 1; i <= nombre; i++) {
    // ligne = ligne + "*"
    ligne += "*";
  console.log(ligne);
}
// Exercice 9 :
// Créer un programme qui afficher les nombres de 1 à 100 pour les multiples de 3 le programme doit afficher « Fizz » à la place du nombre, si c’est un multiples de 5 on affichera « Buzz », pour les nombres qui sont des multiples de 3 et de 5 on affichera « FizzBuzz »
let i = 1;

while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    document.write("FizzBuzz");
    document.write("<br>");
  } else if (i % 3 === 0) {
    console.log("Fizz");
    document.write("Fizz");
    document.write("<br>");
  } else if (i % 5 === 0) {
    console.log("Buzz");
    document.write("Buzz");
    document.write("<br>");
  } else {
    console.log(i);
    document.write(i);
    document.write("<br>");
  }
  i++;
}
// Exercice 10 :
// Écrire un programme qui demande la saisie de 2 nombres positifs et affiche tous les nombres pairs entre ces 2 nombres.

let n1;
let n2;

do{
 n1 = parseInt(prompt(" Entrez le premier nombre positif : "));
 n2 = parseInt(prompt(" Entrez le deuxième nombre positif : "));
}while( n1<0 || n2<0)

for (let i=n1; i<=n2; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
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
// let R = parseInt (prompt("Joueur A, choisissez un nombre entier : "));
let R = Math.floor( Math.random() * 100);
let TentativesRestantes = 7;
let V;

do{
    
    V = parseInt (prompt(" Joueur B, proposez un nombre ( il vous reste " + TentativesRestantes + " tentatives) :"))
    TentativesRestantes--;

    if (V > R){ 
        console.log("Plus Petit !")
    }
    else if(V < R){
        console.log("Plus Grand !")
    }
    else{
        console.log("Trouvé ! ")
    }
}while (V !== R && TentativesRestantes > 0);

if (V !== R){
    alert("Vous n'avez pas trouvé le nombre. Le nombre était : " + R)
}

