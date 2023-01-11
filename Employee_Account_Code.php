<?php
require_once './config.php';


$name = $_POST["Name"];
$phone = $_POST["Phone"];
$email = $_POST["Email"];
$password = $_POST["Password"];
$address = $_POST["Address"];

$sql = "UPDATE `employee` SET `name` = '$name', `email` = '$email',
 `password` = '$password', `address` = '$address' WHERE `employee`.`email` = '$email'";
if ($dbconn->query($sql) === TRUE) {
    echo "<script>alert('Record is  Updated');</script>";

} else {
    echo "<script>alert('Check your sql query. Record is not update');</script>"; 
    $dbconn->connect_error;
}
?>