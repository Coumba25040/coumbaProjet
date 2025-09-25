<?php

$fichier = "message.txt";

if(file_exists($fichier)){
    $tabMessage = file($fichier, FILE_IGNORE_NEW_LINES);

    foreach(array_reverse($tabMessage) as $ligne){
        echo '<p>' . htmlspecialchars($ligne) . '</p>';
    }
}else{
    echo '<p>Aucun message enregistré</p>';
}

?>

