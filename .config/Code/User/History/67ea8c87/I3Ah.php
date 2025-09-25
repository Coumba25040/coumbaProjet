<?php 

$fichier = "message.txt";

$message = $_POST['message'];
if($_SERVER){ 
if(empty($message)){
    echo 'Veuillez entrer un message';
}else{
echo htmlspecialchars($message) . '<p>' . $message . '</p>';
}}

?>