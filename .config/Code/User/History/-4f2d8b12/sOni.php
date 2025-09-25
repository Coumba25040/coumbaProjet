<?php

use LDAP\Result;

$nombre1 = $_GET["nombre1"];
$nombre2 = $_GET["nombre2"];

function addition($a, $b){
    return $a + $b;

}
$result = 
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
echo addition('Addition : ' .  $nombre1, $nombre2);


?>