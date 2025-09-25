<?php

$servername = 'localhost';
$username = 'coumbadev';
$password = 'pbjvcb12';
$dbname = 'utilisateurs';


try{
  $pdo = new PDO("mysql:host=$servername;dbname=utilisateurs", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


  $req = "INSERT INTO users (nom, prenom, email, pass) VALUES (:nom, :prenom, :email, :pass)";
  $statement = $pdo->prepare($req);


  $statement->bindValue(':nom', $nom);
  $statement->bindValue(':prenom', $prenom);
  $statement->bindValue(':email', $email);
  $statement->bindValue(':pass', $passHash);

  $statement->execute();
  echo header('Location: index.php');

}
catch(PDOException $e){
  echo "Erreur à la base de données:".$e->getMessage();

}
?>