<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php if(isset($_GET['success'])){
   echo '<p>Message enregistré</p>';
}else if(isset($_GET['erro'])){
   echo '<p>Veuillez entrer un message</p>';
}
?>
    <form action="traitementMsg.php" method="post">
        <textarea name="message" id="message" placeholder="Entrez un message"></textarea>
        <button>Envoyer</button>
    </form>
</body>
</html>