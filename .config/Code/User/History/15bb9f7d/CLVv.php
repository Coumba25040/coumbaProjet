<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
<form action="traitement.php" method="get">
        <input type="number" name="nombre1" id="nombre1">
        <input type="number" name="nombre2" id="nombre2"> 
        <button>Caculer</button>
    </form>
    <?php include("$nombre1 = $_GET["nombre1"];
$nombre2 = $_GET["nombre2"];

function addition($a, $b){
    return $a + $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);

function produit($a, $b){
    return $a * $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);

function soustraction($a, $b){
    return $a - $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);

function division($a, $b){
    return $a / $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);")?>
</body>
</html>