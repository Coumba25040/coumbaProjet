<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cours Base du php </title>
</head>

<body>

    <?php echo "<h1> Cours sur le base du PHP </h1>";    ?>

    <p>Pour déclarer ou utiliser une variable on utilise Le <b>$</b> </p>

    <?php

    $maVariable = "Toto";

    echo "<p> la valeur de maVariable est $maVariable </p>"
    ?>

    <hr>
    <h3>Les constantes en PHP : </h3>

    <p>Pour déclare des constantes en php on utilise la fonction <b>define()</b> </p>

    <?php

    define("MA_CONSTANTE", 55);
    echo "La valeur de la constante MA_CONSTANTE est " . MA_CONSTANTE;

    ?>

    <hr>
    <h3>Les tableaux en PHP :</h3>
    <p>Pour déclarer des tableaux on va utiliser les <b>[ ]</b></p>

    <?php

    $monTableau = []; // on crée ici un tableau vide
    $monTableau[0] = 4564; // on affecte la valeur 4564 à l'index 0 du tableau 
    // on affecte au prochain index du tableau la valeur 4565, c'est à dire a la fin du tableau 
    $monTableau[] = 4565;

    echo $monTableau[1] . "<br>"; // l'index 1 du tableau contient la valeur 4565

    // var_dump( ) va nous permettre de débuger et d'afficher le contenu d'une variable
    var_dump($monTableau);
    ?>

    <p>Les tableaux à clé valeur , vont nous permettre de ce passer des index</p>

    <?php
    $monTableau2 = [
        "Cle1" => "valeur1",
        "Cle2" => "valeur2"
    ];

    echo  $monTableau2["Cle1"] . "<br>";

    // on utilise unset( ) pour supprimer une case d'un tableau que ce soit par l'index ou par la clé
    unset($monTableau2["Cle2"]);

    var_dump($monTableau2);
    ?>

    <hr>
    <h3>Les structure conditionelles </h3>
    <p>If..else</p>
    <?php

    // date() permet d'avoir la date du seveur "H" permet d'avoir seulement l'heure sans les minutes
    $heure = date("H");

    if ($heure == 10) {
        echo "c'est bientôt la pause";
    } elseif ($heure == 15) {
        echo "c'est bientôt la pause de l'après-midi";
    } else {
        echo " il est $heure h, c'est pas l'heure de la pause, on bosse ! ";
    }
    ?>
    <p>L'opération ternaire : est un if else simplifier</p>

    <?php

    $momentDeLaJournee = ($heure > 12) ? "C'est l'après-midi" : "C'est le matin";
    echo $momentDeLaJournee;

    ?>

    <hr>
    <h3>Les structures itératives </h3>
    <p>La boucle Tantque est représenter par la mot clé while </p>

    <?php
    $compteur = 1;

    while ($compteur <= 5) {
        echo " la valeur du compteur est de  $compteur <br>";
        $compteur++;
    }

    ?>

    <p>La boucle POUR est pareil que en javascript on utlise le mot clé for </p>

    <?php

    for ($i = 0; $i <= 5; $i++) {
        echo "la valeur de i est $i <br>";
    }

    ?>

    <p>La boucle Fair Tantque est pareil qu'en javascript on utlise les mots clés do while,
        la boucle do while fait au minimum un tour de boucle
    </p>
    <?php

    $nb = 7;

    do {
        echo "$nb <br>";
        $nb--;
    } while ($nb > 5);

    ?>

    <p> La boucle pour chaque ( <b>foreach</b> ) est utiliser pour parcourir un tableau, ou un ensemble de valeur</p>

    <?php

    $listCourse = ["Banane", "Croquette", "pain", "fraise"];

    foreach ($listCourse as $element) {
        echo "il faut acheter $element <br>";
    }

    ?>
    <hr>
    <h3>Les fonctions</h3>
    <p> Pour déclarer une fonction en php on utilise le mot clé <b> function </b> </p>

    <?php

    function nombrePremier($nombre)
    {

        for ($i = 2; $i <= sqrt($nombre); $i++) {
            if ($nombre % $i == 0) {
                return false;
            }
        }
        return true;
    }

    if (nombrePremier(7)) {
        echo "<p> le nombre 7 est premier</p>";
    } else {
        echo "<p> le nombre 7 n'est pas premier</p>";
    }

    ?>

    <p>quelque fonction en php : </p>
    <?php
    $string = "bonjour";
    echo " <p> strlen( ) permet de connaitre la longeur d'une chaine de caractères "
        . strlen($string) . "</p>";


    echo "<p> strcmp( ) permet de comparée 2 chaines de caractères donné en arguments "
        . strcmp($string, "bonjour") . "</p>";
    //strcmp nous renvoit 1 si les deux châines de caractères sont différents ou 0 si elles sont égal

    $tab = [1, 2, 3, 4, 5, 6, 7];
    echo "<p> count( ) permet d'avoir le nombre d'élements dans un tableau   "
        . count($tab);


    ?>

    <hr>
    <h3>Les sessions</h3>
    <p>La session en php permet de stocker des informations dans le serveur
        afin d'y acceder sur différentes pages.
    </p>

    <?php
    // session_start() permet de démarrer la session et
    // d'y avoir accès sur le fichier
    session_start();

    $_SESSION["nom"] = " TOTO ";
    ?>

    <a href="testSession.php"> on test la session ! </a>
    <a href="testSession2.php"> la session ! </a>


    <hr>
    <h3>Les formulaire en php</h3>
    <p>
        Pour traiter les formulaires qui possédent le méthode get on pourra l'utiliser la variables magique
        <b>$_GET</b>
    </p>

    <form action="testTraitementGet.php" method="get">
        <label for="prenom"> Prenom : </label>
        <input type="text" name="prenom">
        <input type="submit">
    </form>

</body>

</html>