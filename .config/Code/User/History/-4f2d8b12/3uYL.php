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
$result2 = addition($nombre1, $nombre2);
echo'Addition : ' .  $result2;
echo addition('Addition : ' .  $nombre1, $nombre2);

function soustraction($a, $b){
    return $a - $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);

function division($a, $b){
    return $a / $b;

}
echo addition('Addition : ' .  $nombre1, $nombre2);


?>