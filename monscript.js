// alert("Bonjour depuis mon code JS ! ");
console.log("Bonjour depuis la console ! ");

// déclaration de la variable prenom
let prenom;

// affectation de la valeur Toto  a variable prenom
prenom = "Toto";

// déclaration et affection 
let nom = "Durand";

console.log(prenom , nom)
// déclare une constante et on lui affect sa valeur
const minuteParHeur = 60 ;

console.log(minuteParHeur);
// créer une erreur car il impossible de changer la valeur d'une constante ! 
// minuteParHeur = 75;

let unNombre = 5;

// ++ on fait une incrémentation de +1 à la variable unNombre , unNombre = unNombre + 1
unNombre++;
console.log(unNombre);

// -- on fait une décrementation de -1 à la variable unNombre, unNombre = unNombre -1
unNombre--;
console.log(unNombre);


console.log("Pour connaitre le type de " + 
    "donnée d'une variable on utilise typeof " + typeof unNombre)


// création d'une varibale boolean 

let monBooleen = true;

console.log(typeof monBooleen)

let tab = [];

tab[0] = 15;

console.log(tab[0]);

let tab2 = [45,78,10];

console.log( tab2[1] );

tab2[1] = " La valeur 78";

console.log(tab2)

let fruits = [ "fraise", "banane", "pomme" ] ;

// on ajoute un élement a la fin de notre tableau
fruits.push("Poire" , "Cerise") ;
console.log(fruits) ;

// on supprimer le dernier element du tableau
fruits.pop();
console.log(fruits);

// length permet de connaitre le nombre d'elements du tableau
console.log(fruits.length) ;

// permet de rajouter un element au début du tableau
fruits.unshift("Tomate");

console.log(fruits);
// supprime le premier element du tableau 
fruits.shift() ;
console.log(fruits);

let heure = 11;
let minute = "12";

// === permet de  comparé le type de donnée et la valeur
if (heure === minute) {
    console.log("l'heure est égale au minutes");
// == permet de comparé la valeur 
} else if ( heure == minute){
    console.log("la valeur de l'heure est égal a la valeur de minute");
}else{
    console.log(" Minute est heure sont différents ");
}

if ( (heure > 1) && (heure < 24) ) {
    console.log("l'heure est correct")
}

// on peut comparé des chaines qui contient que des caractères numérique avec des nombres
console.log( (minute > 1) );

// prompt( "le message afficher" ) permet de demander une saisie a l'utilisateur
heure =  prompt(" Veuillez rentrer une heure : ") ;

// parseInt(une variable) permet de convertir la variable en nombre
heure = parseInt(heure)

console.log(  heure+1)