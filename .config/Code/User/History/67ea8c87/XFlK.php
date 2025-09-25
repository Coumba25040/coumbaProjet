<?php 

$fichier = "message.txt";

if($_SERVER['REQUEST_METHOD'] === 'POST'){ 
    $message =  trim($_POST['message'] ?? '');
    
if(!empty($message)){
    $message = htmlspecialchars($message);

    file_put_contents($fichier, $message . PHP_EOL, FILE_APPEND);

    echo'<p> Message enregistré</p>';
    header('Location: formMsg.php?success=1');
    exit;

}else{
    echo '<p> Veuillez entrer un message </p>';
}}

$tabMessage = [];
if(file_exists($fichier)){
    $tabMessage = file($fichier, FILE_IGNORE_NEW_LINES);
}

?>