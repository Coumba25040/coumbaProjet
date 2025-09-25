<?php
echo 'Bonjour PHP ';
$a = 1;
$b = 1.2;
$c = true;
$d = 'Hello';
echo '<br>' . $a . '<br>' . $b . '<br>' . $c . '<br>' . $d ;

echo'<br>-----------------------------------------------EXO 4 ---------------------------------------------<br>';
echo'Conditions : Vérifie si un nombre est pair ou impair. Vérifie si une personne est majeure en fonction de son âge.<br>';



function isPair($nombre){
    if($nombre % 2 === 0){
       return $nombre . ' est pair ';
    }else{
        return $nombre . ' est impair';
    }
}
$result = isPair(3);
echo $result;

function isMajeur($age){
    if($age >= 18){
        return 'Majeur';
    }else{
        return 'Mineur';
    }
}
echo '<br>' . isMajeur(23) . '<br>';

echo'<br>-----------------------------------------------EXO 5 ---------------------------------------------<br>';
echo'Boucles : Affiche les nombres de 1 à 10. Créer une table de multiplication (par exemple pour le 7).';


for($i = 1; $i < 10; $i++){
    echo '<br>' . $i . '<br>';
}


$table = 7;

for($i = 1; $i <= 10; $i++){
     $somme =  $i  *  $table;
     echo $i .' x ' . $table . ' = ' . $somme .'<br>';
}

echo'<br>-----------------------------------------------EXO 6 ---------------------------------------------<br>';
echo'Tableaux : Stocke les noms de 5 fruits dans un tableau et affiche-les en liste HTML.';

$fruits = ['pomme', 'banane', 'kiwi'];

foreach ($fruits as $value) {
    echo '<ul> <li>' . $value .'</li> </ul>';
}

echo'<br>-----------------------------------------------EXO 7 ---------------------------------------------<br>';
echo'Tableaux associatifs : Crée un tableau associatif représentant un étudiant (nom, age, note) et affiche les infos. <br>';

$etudiant = ['nom' => 'Lala', 'age' => 23, 'note' => 18 ];

echo '<h2> Nom : ' . $etudiant['nom'] . '</h2>
<h3> Age : ' . $etudiant['age'] . '</h3>
<h2> Note : ' . $etudiant['note'] . '</h2>';

    echo '<ul>';
foreach ($etudiant as $key => $value) {
    echo '<li>'. $value .'</li>';
}
    echo '</ul>';

echo'<br>-----------------------------------------------EXO 8 ---------------------------------------------<br>';
echo'Fonctions : Écris une fonction qui calcule la factorielle d’un nombre.
  Écris une fonction qui prend une chaîne de caractères et la renvoie inversée.<br>';


  function factorielle($nombre){ 
    $result = 1;

    for($i = 1; $i < $result; $i++){
        $result * $i;
    }

  }
  echo factorielle(3);


echo strrev('hello');

echo'<br>-----------------------------------------------EXO 9 ---------------------------------------------<br>';
echo'Crée un formulaire qui demande le prénom et l’âge d’un utilisateur, puis affiche un message personnalisé.
 Crée une mini-calculatrice (addition, soustraction, multiplication, division)<br>';

?>

<form action="" method="get">
    <input type="text" name="nom" id="age">
    <input type="number" name="age" id="age">
    <button>Envoyer</button>
   </form>

<?php
$nom = $_GET['nom'] ?? null;
$age = $_GET['age'] ?? null;

if(empty($nom) && empty($age)){
    echo 'Veuillez entrer les informations';
}else{
    echo 'Nom : ' . $nom . '<br> Age : ' . $age . ' ans';
}


echo'<br>-----------------------------------------------EXO 10 ---------------------------------------------<br>';
echo'Manipulation de chaînes : Vérifie si une chaîne est un palindrome.
  Compte le nombre de mots dans une phrase.<br>';

  
  function isPalindrome($word){

    if($word === strrev($word)){
        return $word . ' est un palindrome <br>';
    }else{
        return $word . ' est pas un palindrome <br>';
    }
  }
 echo isPalindrome(' Coumba ');


 function nombreMots($string){
    $string;
    return 'Il y a ' . str_word_count($string) . ' mots <br>';
 }
echo nombreMots('comment ça va');


echo'<br>-----------------------------------------------EXO 11 ---------------------------------------------<br>';
echo'Dates et heures : Affiche la date et l’heure actuelles.
Calcule le nombre de jours restants avant le Nouvel An.<br>';

// $today = date('d-m-Y');
// $message = 'La date actuelle est ' . $today;
// echo $message;


$today = date('d-m-Y');
$nextY = date('01-01-2025');
// $message = 'La date actuelle est ' . $today;

$nbJ = 0;
while ($today <= $nextY) {
    $nbJ ++;
}
echo $nbJ;


?>
