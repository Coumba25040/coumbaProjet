<?php
$mysqli = new mysqli("localhost", "coumbadev", "pbjvcb12", "testdb");

if ($mysqli->connect_error) {
    die("Échec de la connexion : " . $mysqli->connect_error);
} else {
    echo "Connexion à MySQL/MariaDB réussie !";
}
?>

