<?php

use LDAP\Result;

$nombre1 = $_GET["nombre1"];
$nombre2 = $_GET["nombre2"];

if(empty($_GET["nombre1"]) || empty($_GET["nombre2"])){
    echo 'Veuillez entrez un nombre';
}


function addition($a, $b){
    return $a + $b;

}
$result = addition($nombre1, $nombre2);
echo'Addition : '. $nombre1 . ' + ' . $nombre2 . ' = ' .  $result . '<br>';

function produit($a, $b){
    return $a * $b;

}
$result2 = produit($nombre1, $nombre2);
echo' Produit : '. $nombre1 . ' x ' . $nombre2 . ' = ' .  $result2 . '<br>';


function soustraction($a, $b){
    return $a - $b;

}

$result3 = soustraction($nombre1, $nombre2);
echo' Soustraction : '. $nombre1 . ' - ' . $nombre2 . ' = ' .  $result3 . '<br>';

if($nombre2 != 0){
    function division($a, $b){
        return $a / $b;
    
    }
    $result4 = division($nombre1, $nombre2);
    echo' Division : '. $nombre1 . ' / ' . $nombre2 . ' = ' .  $result4 . '<br>';
}else{
    echo 'Division impossible on ne peux pas diviser pas 0 <br>';
}




?>