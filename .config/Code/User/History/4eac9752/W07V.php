<?php
session_start();
if(isset($_POST['ok'])){
    var_dump($_POST);
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $pass = $_POST['password']; 
      
    $passHash = password_hash($pass, PASSWORD_DEFAULT);
};


$servername = 'localhost';
$username = 'coumbadev';
$password = 'pbjvcb12';
$dbname = 'utilisateurs';


try{
  $pdo = new PDO("mysql:host=$servername;dbname=utilisateurs", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


  $req = "INSERT INTO users (nom, prenom, email, pass) VALUES (:nom, :prenom, :email, :pass)";
  $statement = $pdo->prepare($req);


  $statement->bindParam(':nom', $nom);
  $statement->bindParam(':prenom', $prenom);
  $statement->bindParam(':email', $email);
  $statement->bindParam(':pass', $passHash);

  $statement->execute();
  echo'Utilisateur ajouté avec succès !';

}
catch(PDOException $e){
  echo "Erreur à la base de données:".$e->getMessage();

}
?>