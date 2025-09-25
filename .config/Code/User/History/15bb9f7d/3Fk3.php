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
    <?php include("traitement.php")?>
</body>
</html>