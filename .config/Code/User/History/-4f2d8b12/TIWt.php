<?php

use LDAP\Result;

$nombre1 = $_GET["nombre1"];
$nombre2 = $_GET["nombre2"];

if($nombre2 != 0){
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
    
    function division($a, $b){
        return $a / $b;
    
    }
    $result4 = division($nombre1, $nombre2);
    echo' Division : '. $nombre1 . ' / ' . $nombre2 . ' = ' .  $result4 . '<br>';

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

function division($a, $b){
    return $a / $b;

}
$result4 = division($nombre1, $nombre2);
echo' Division : '. $nombre1 . ' / ' . $nombre2 . ' = ' .  $result4 . '<br>';


?>