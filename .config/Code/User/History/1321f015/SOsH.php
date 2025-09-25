<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="userName" class="userName">
        <input type="password" name="password" class="password">
        <button type="submit" id="submit">Inscription</button>
    </form>
</body>
</html>

<?php
session_start();

$_SESSION['user'] = ['userName' => $_POST[''], 'password' => 'password']
?>