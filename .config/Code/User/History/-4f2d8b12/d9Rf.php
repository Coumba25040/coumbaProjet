<?php

use LDAP\Result;

$nombre1 = $_GET["nombre1"];
$nombre2 = $_GET["nombre2"];

function addition($a, $b){
    return $a + $b;

}
$result = addition($nombre1, $nombre2);
echo'Addition : ' .  $result;

function produit($a, $b){
    return $a * $b;

}
$result2 = produit($nombre1, $nombre2);
echo'Produit : ' .  $result2;


function soustraction($a, $b){
    return $a - $b;

}

$result3 = soustraction($nombre1, $nombre2);
echo'Soustraction : ' .  $result3;

function division($a, $b){
    return $a / $b;

}
$result4 = division($nombre1, $nombre2);
echo'Division : ' .  $result4;


?>