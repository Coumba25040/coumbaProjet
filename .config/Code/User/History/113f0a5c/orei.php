<?php
require_once './db.php';

session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (
    !empty($_POST['nom']) && !empty($_POST['prenom'])
    && !empty($_POST['email']) && !empty($_POST['password'])) {

    $nom =  htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['password']);
    $passHash = password_hash($pass, PASSWORD_DEFAULT);

    $testMail = $statement

    $query = "INSERT INTO users (nom, prenom, email, pass) VALUES (:nom, :prenom, :email, :pass)";
    $statement = $pdo->prepare($query);

    $statement->execute([
      "nom" => $nom,
      "prenom" => $prenom,
      "email" => $email,
      "pass" => $pass
    ]);
    header("Location: index.php");
    exit();

  } else {
    $erreur = 'Veuillez remplir tous les champs';
  }
}

?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body class="page">
  <form method="post" action="">
    <div class="mb-3">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" name="nom">
    </div>
    <div class="mb-3">
      <label for="prenom" class="form-label">Prénom</label>
      <input type="text" class="form-control" id="prenom" name="prenom">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name="password">
    </div>
    <p>

    </p>
    <button type="submit" class="btn btn-primary" name="ok">Submit</button>
  </form>
</body>

</html>