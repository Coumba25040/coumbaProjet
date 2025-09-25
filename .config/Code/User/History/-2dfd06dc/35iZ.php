<?php
require_once './index.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $email = htmlspecialchars($_POST['email']);
    $pass = htmlspecialchars($_POST['pass']);
    
    if(!empty($email) && !empty($pass)){


  $query = "SELECT*FROM users WHERE email = ? AND pass = :pass";
  $statement = $pdo->prepare($query);
  $statement->execute(["email" => $email, "pass" => $pass]);
  $cpt = $statement->rowCount();

  if($cpt === 1){
    header("Location: index.php");
    exit();
  }else{
    $erreur = 'erreur mail ou mdp';
}
  
}else{
  $erreur = 'Veuillez remplir tous les champs ';
}
 }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>connexion</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body>
    <form method="post" action="">
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" name="password">
        </div>
        <p>
          <?php
          if(isset($erreur)){
            echo $erreur;
          }
          ?>
        </p>
        <button type="submit" class="btn btn-primary" name="ok">Submit</button>
    </form>
</body>
</html>


