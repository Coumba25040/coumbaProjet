// Alert permet d'afficher une boite de dialogue, mais stop l'execution du programme
alert("Bonjour depuis le js");

// console.log() permet d'afficher du texte ou une variable dans le console du navigateur
console.log("Bonjour depuis la console");

//Document.getElementById( "IdElement") permet de récupérer un element html par son id
//innerText permet d'accèder au texte contenu par l'élément.
document.getElementById("titre").innerText = " Cours js";

// ------------------- Les Variables ---------------------
// on utilise let pour déclarer une variable
let prenom;
//affectation d'une valeur a la variable prenom
prenom = "Leesha";

console.log(prenom);
//On déclare une variable metier et on lui affecte la valeur "Developpeuse web";
let metier = "Developpeuse web";
//document.write()permet d'ecrire a la suite du document html
//prenom + " a comme metier " permet de faire une concaténation  entre le contenu de la
//variable prenom et le texte.
document.write(prenom + " a comme metier " + metier + ".<br>");

// Deuxieme possibilité pour faire de la concaténation
document.write(`${prenom} a comme metier ${metier}. `);

//définition d'une constante , un espace de stokage qui ne change pas.
const jourParSemaine = 7;

// Impossible de changer ça valeur après l'avoir définie
// jourParSemaine = 4

// typeof nous permet de connaitre le type d'une variable
console.log("Le type de la variable prenom est : " + typeof prenom);

// ------------ Opérateur arithmétiques ---------------

// % est le modulo , qui permet de renvoyer le 'reste' d'une division.
// c'est souvent utiliser pour savoir si un nombre est divisible par une autre.
// Si le reste est égal à 0 c'est divisible

let reste = 9 % 4;
document.write(" <br> le reste de 9 / 4 est de : " + reste);

let nombre = 0;

// ++ permet d'incrémenter la valeur d'une variable
// nombre ++ revient a fair nombre = nombre + 1
nombre++;

console.log(nombre);

// -- permet de décrementer la valeur d'une variable
// nombre -- revient a faire nombre = nombre -1;
nombre--;

console.log(nombre);

// += permet d'ajouter la valeur au contenu de la variable
// nombre = nombre + 2
nombre += 2;
console.log(nombre);

// nombre = nombre - 3
nombre -= 3;

console.log(nombre);

// --------- Les structures conditionelles ---------

let nb = prompt("Veuillez saisir un nombre");

// if (nb < 5) {
//   document.write("<br> Vous avez saisie un nombre inférieur a 5 ");
// } else {
//   document.write("<br> Vous avez saisie un nombre supérieur ou égal a 5 ");
// }
if (nb < 5) {
  document.write("<br> Vous avez saisie un nombre inférieur a 5 ");
} else if( nb > 5) {
  document.write("<br> Vous avez saisie un nombre supérieur a 5 ");
}else{
    document.write("<br> Vous avez saisie 5 ");
}

// -------- les boucles ---------

let nombre1 = 6;

// Tant que nbombre1 est inférieur a 5 on execute le code
while (nombre1 < 5) {

  document.write("<br> la valeur de Nombre1 est : " + nombre1);
  nombre1++;

}

// la boucle do while est similaire a la boucle while mais on passe une fois dans la boucle
do{
  nombre1 = prompt("Veuillez saisir 1");
  document.write("<br> la valeur que vous avez saisie est : " + nombre1);
}while(nombre1 != "1");

// La boucle for est une boucle qui permet de répéter un code un nombre de fois défini
for( let i = 0; i <= 10; i = i+2){
    document.write("<br> la valeur de i est : " + i);
}
 

// ------------ Les fonctions -------------

//On déclare une fonction avec le mot clé function
//le mot clé function de créer une fonction
//direBonjour est le nom de la fonction
//tout cela correspond a la signature de la méthode.
//Les accolades {} permettent de définir le code qui sera exécuté par la fonction
//On appelle cela le corps de la fonction
function direBonjour(){
    document.write("<br> Bonjour tout le monde");
}

//Pour appeler une fonction on écrit son nom suivi de ()
direBonjour();

//On peut définir des paramètres pour une fonction
//Les paramètres sont des variables qui permettent de passer des valeurs a une fonction
function direBonjourPrenom(prenom){
    document.write("<br> Bonjour " + prenom);
}

//On appelle la fonction en passant une valeur en paramètre
direBonjourPrenom("Leesha");


//Les fonctions peuvent retourner des valeurs avec le mot clé return
function calculerSomme(nombre1 ,nombre2){
    return nombre1 + nombre2;
}

//On peut stocker le resultat de la fonction dans une variable
let resultat = calculerSomme(10,1);
document.write("<br> Le resultat de la somme est : " + resultat);

// les fonctions fléchées, une autre manière de définir des fonctions
// on utilise le symbole => pour définir une fonction fléchée
let direBonjourFleche = () => {

    document.write("<br> Bonjour tout le monde");

}

direBonjourFleche();

// quelques fonction intégrées a javascript 
// parsInt() permet de convertir une chaine de caractère en nombre
let chaine = "10";
let nombre2 = parseInt(chaine);
document.write("<br> le type de la variable nombre2 est : " + typeof nombre2);

let chaine2 = "10.5";

//Si la chaine 2 est un nombre alors on va convertir la chaine en nombre flottant
//Pour cela on va utiliser le isNaN() qui permet de savoir si une chaine est un nombre
if(isNaN(chaine2) == false){

// le ParseFloat permet de convertir une chaine de caractère en nombre a virgule
let nombre3 = parseFloat(chaine2);
document.write("<br> le type de la variable nombre3 est : " +" la valeur :  " + 
    nombre3 + " le type : " + typeof nombre3);
}

//----------------- le foreach -------------------

//Le foreach est une méthode qui permet de parcourir un tableau
let fruits = ["pomme","banane","fraise","kiwi"];

//Pour chaque element du tableau on execute le code suivant
fruits.forEach( (fruit) => {
    //On affiche le fruit dans la console si il est egale a fraise
    if(fruit == "fraise"){
        console.log("le fruit est une fraise");
    }
    //On affiche le fruit dans le document dans tout les cas
    document.write("<br> le fruit est : " + fruit);
} )


// ----------------- Les objets -------------------
let personne = {
    nom : "Dupont",
    prenom : "Jean",
}

//On accède a la propriété nom de l'objet personne par un .
document.write("<br> Le nom de la personne est : " + personne.nom);