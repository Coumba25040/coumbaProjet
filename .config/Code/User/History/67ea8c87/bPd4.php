<?php 

$fichier = "message.txt";

$message = $_POST['message'];
if($_SERVER['REQUEST_METHOD'] === $_POST){ 
if(!empty($message)){
    $message = htmlspecialchars($message);

    file_put_contents($fichier, $message . PHP_EOL)
}else{
echo htmlspecialchars($message) . '<p>' . $message . '</p>';
}}

?>