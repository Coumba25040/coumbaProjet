<?php
session_start();
if($_SERVER['REQUEST_METHOD'] === 'POST')
if(isset($_POST['ok'])){
    var_dump($_POST);
    $nom =  htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['password']); 

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