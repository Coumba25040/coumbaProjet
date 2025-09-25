<?php
$servername = 'localhost';
$username = 'coumbadev';
$password = 'pbjvcb12';
$dbname = 'utilisateurs';


try{
  $pdo = new PDO("mysql:host=$servername;dbname=utilisateurs", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


  $statement = $pdo->prepare($req);


  $statement->execute();
  echo'Utilisateur ajouté avec succès !';

}
catch(PDOException $e){
  echo "Erreur à la base de données:".$e->getMessage();

}
?>