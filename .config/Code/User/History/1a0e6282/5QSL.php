<php?
$fichier = "message.txt";

$tabMessage = [];
if(file_exists($fichier)){
    $tabMessage = file($fichier, FILE_IGNORE_NEW_LINES);
}

?>

<?