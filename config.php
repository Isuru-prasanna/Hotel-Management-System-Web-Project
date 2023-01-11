<?php

$serverName = "localhost";
$userName = "root";
$password = "";
$databaseName = "hotel";

//connect database
$dbconn = new mysqli($serverName, $userName, $password, $databaseName);

//Check database connect or not
if ($dbconn->connect_error) {
    die("Conection failed: " . $dbconn->connect_error);
}

