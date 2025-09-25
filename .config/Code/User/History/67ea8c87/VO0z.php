<?php 

$fichier = "message.txt";

if($_SERVER['REQUEST_METHOD'] === 'POST'){ 
    $message =  trim($_POST['message'] ?? '');
    
if(!empty($message)){
    $message = htmlspecialchars($message);

    file_put_contents($fichier, $message . PHP_EOL, FILE_APPEND);

  
    header('Location: formMsg.php?success=1');
    exit;

}else{
    
    header('Location: formMsg.php?error=1');
    exit;
}}

if(isset($_ge))
