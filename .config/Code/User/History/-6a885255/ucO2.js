// Exercice 3 :
// Ecrire un script js qui demande un nombre à l’utilisateur et afficher si le nombre est divisible par 3 ou non.
let nombre1 = prompt ("Entrer un nombre :");
let resultat;
if (nombre1 % 3 === 0) {
     alert("Le nombre est divisible par 3");
}else {
 alert("Le nombre n'est pas divisible par 3");
}
OU    
resultat = (nombre1 % 3 === 0) ? "divisble par 3" : 'non divisible' ;
alert(resultat);
// //Exercice 4 :
// // Ecrire un script js qui demande la saisie de 2 nombres et affiche le nombre le plus grand.
let number1 = prompt (" Veuillez entrer le premier nombre :");

number1 = parseInt (number1);


let number2 = parseInt(prompt (" Veuillez entrer le deuxième nombre :"));


if (number1 > number2 ) {
    console.log(number1 + " est le plus grand ");

} else if (number2 > number1) {
    console.log(number2 + " est le plus grand ");

} else {
    console.log("Les deux nombres sont égaux ");
}
// Exercice 5:
// Ecrire un script js qui demande la saisie de 3 nombres et affiche leurs moyennes 
nombre1 = parseFloat(prompt("Veuillez entrer le premier nombre :"));
nombre2 = parseFloat(prompt("Veuillez entrer le deuxième nombre :"));
let nombre3 = parseFloat(prompt("Veuillez entrer le troisième nombre :"));

let moyenne = (nombre1 + nombre2 + nombre3) / 3;
alert("La moyenne des trois nombres est : " + moyenne.toFixed(2));

// Exercice 6 : 
// De même que le précédent, cet algorithme doit demander une heure et en afficher une autre. Mais cette fois, il doit gérer également les secondes, et afficher l'heure qu'il sera une seconde plus tard. 
// Par exemple, si l'utilisateur tape 21, puis 32, puis 8, l'algorithme doit répondre : "Dans une seconde, il sera 21 heure(s), 32 minute(s) et 9 seconde(s)". 
let heures = parseInt(prompt("Entrez l'heure (0 à 23) :"));
let minutes = parseInt(prompt("Entrez les minutes (0 à 59) :"));
let secondes = parseInt(prompt("Entrez les secondes (0 à 59) :"));

// seconde = seconde +1
secondes += 1;

if (secondes === 60) {
    secondes = 0;
    minutes += 1;

    if (minutes === 60) {
        minutes = 0;
        heures += 1;

        if (heures === 24) {
            heures = 0;
        }
    }
}
alert("Dans une seconde, il sera " + heures + " heure(s), " + minutes + " minute(s) et " + secondes + " seconde(s).");
// Exercice 7 : 
// Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà. Ecrivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante 
let nb = prompt("Entrez le nombre de photocopie :")
let facture;

if (nb < 11) {
    facture = (nb*0.10);
}

else if (nb < 31) {
    facture = 1 + (nb-10)*0.09;
}

else {
    facture = 2.80 + (nb-30)*0.08;
}

console.log("La facture est de " + facture + "€")

// Exercice 8:
// Les habitants de Zorglub paient l’impôt selon les règles suivantes : 
// •    • les hommes de plus de 20 ans paient l’impôt 
// •    • les femmes paient l’impôt si elles ont entre 18 et 35 ans 
// •    • les autres ne paient pas d’impôt 

// Le programme demandera donc l’âge et le sexe du Zorglubien, et se prononcera donc ensuite sur le fait que l’habitant est imposable.

let Sexe = prompt("Veuillez entrer votre Sexe : H ou F")
let Age = parseInt (prompt("Veuillez entrer votre âge"))
let Impot = false;

if ((Age > 20) && (Sexe == "H")){
    Impot = true; 
}

else if ((Age >= 18 && Age <= 35 ) && (Sexe == "F")){
    Impot = true; 
}
 
if (Impot){
    console.log("Vous êtes imposable")
}
else{
    console.log("Vous n'êtes pas imposable")
}

// Exercice 9 : 
// Ecrire un script js qui demande l’âge d’un enfant à l’utilisateur. 
// Ensuite, il l’informe de sa catégorie : 
// • "Poussin" de 6 à 7 ans 
// • "Pupille" de 8 à 9 ans 
// • "Minime" de 10 à 11 ans


// initilisation de la variable age  
let age1 = parseInt(prompt("Entrez l'âge de l'enfant : (exo9)"));
let categorie;

if (age1 >= 6 && age1 <= 7) {
    categorie = "Poussin";
} else if (age1 >= 8 && age1 <= 9) {
    categorie = "Pupille";
} else if (age1 >= 10 && age1 <= 11) {
    categorie = "Minime";
} else {
    categorie = "Aucune catégorie définie pour cet âge";
}

document.write("L'enfant est dans la catégorie : " + categorie);

switch(true){

    case (age1 >= 6 && age1 <= 7) :
        categorie = "poussin";
    break;
    case (age1 >= 8 && age1 <= 9):
        categorie = "pupille";
    break;
    case (age1 >= 10 && age1 <= 11) :
        categorie = "minie";
    break;
    default :
     categorie = "aucune";
}

// Exercice 10 :
// Ecrire un script qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit est négatif ou positif ou null. SANS FAIRE LE CALCUL

nombre1 = parseFloat(prompt("Entrez un nombre: "));
let nombre2 = parseFloat(prompt("Entrez un second nombre: "))
if (nombre1 >= 0 && nombre2 >= 0) {
    alert("Le produit est positif")
}
else if (nombre1 < 0 && nombre2 < 0) {
    alert("le produit est positif")
}
else {
    alert("Le produit est négatif")
}
if (nombre1 === nombre2) {
    alert("Le produit est null")
}

// Exercice 11 : 
// Ecrire un programme qui lit le prix HT d’un article, le nombre d’articles et le taux de TVA, et qui fournit le prix total TTC correspondant. Faire en sorte que des libellés apparaissent clairement. 
// (TTC=NA*HT*(1+TVA))
let HT = prompt("Ecrire prix hors taxe");
let NA = prompt("Ecrire le nombre d'article");
let TVA = prompt("Ecrire le taux de TVA en %");
let TTC = NA*HT*(1+(TVA/100));

console.log("Prix HT par article : " + HT);
console.log("Nombre d'articles : " + NA);
console.log("taux de la TVA : " + TVA + "%");
console.log("Prix total TTC :" + TTC + "€");

