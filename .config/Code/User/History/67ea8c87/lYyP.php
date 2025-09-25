<?php 

$fichier = "message.txt";

$message = $_POST['message'];
if($_SERVER['REQUEST_METHOD'] === $_POST){ 
if(empty($message)){
    echo 'Veuillez entrer un message';
}else{
echo htmlspecialchars($message) . '<p>' . $message . '</p>';
}}

?>