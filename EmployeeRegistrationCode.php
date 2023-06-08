<?php
require_once './config.php';

$name = $_POST["Name"];
$email = $_POST["Email"];
$phone = $_POST["Phone"];
$password = $_POST["Password"];
$address = $_POST["Address"];
$duplicate = mysqli_query($dbconn, "SELECT * FROM employee WHERE email = '$email' OR password = '$password'");
if(mysqli_num_rows($duplicate)> 1 ){
    echo "<script>alert('email or password alredy taken');</script>";
}else{
    $sql = "INSERT INTO `employee`(`name`, `email`, `phone`, `password`, `address`) VALUES ('$name','$email','$phone','$password','$address')";
// $sql = "INSERT INTO employee VALUES('$name','$email','$phone','$password','$address')";
if($dbconn->query($sql) === TRUE){
    header("Location:.\Admin_Page.php");
}else{
    echo "<script>alert('Record is not inserted');</script>";
    $dbconn->connect_error;
}
}
?>