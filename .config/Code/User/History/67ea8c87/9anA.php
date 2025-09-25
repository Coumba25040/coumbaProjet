<?php 

$fichier = "message.txt";

if($_SERVER['REQUEST_METHOD'] === 'POST'){ 
    $message =  trim($_POST['message'] ?? null);
    
if(!empty($message)){
    $message = htmlspecialchars($message);

    file_put_contents($fichier, $message . PHP_EOL, FILE_APPEND);

    echo'<p> Message enregistré</p>';
}else{
    echo '<p> Veuillez entrer un message </p>';
}}

$message = [];
if(file_exists($fichier)){
    $message = file($fichier, FILE_IGNORE_NEW_LINES);
}

?>