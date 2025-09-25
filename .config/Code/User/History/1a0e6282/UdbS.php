<php?
$fichier = "message.txt";

if(file_exists($fichier)){
    $tabMessage = file($fichier, FILE_IGNORE_NEW_LINES);

    foreach($tabMessage as $ligne){
        echo '<p>' . htmlspecialchars($ligne) . '</p>';
    }
}else{
    '<p>Aucun message enregistré</p>';
}

?>

<?