<?php
require_once './config.php';

$name       = $_POST["name"];
$phone      = $_POST["phone"];
$email      = $_POST["email"];
$password   = $_POST["password"];
$address    = $_POST["address"];
$nic        = $_POST["nic"];

$dupliemail = mysqli_query($dbconn, "SELECT * FROM `registration` WHERE `Email` = '$email'");

if(mysqli_num_rows($dupliemail) == 1 ){
    // echo '<link rel="stylesheet" href="./assets/theam-default/plugins/toastr/toastr.min.css">';
    // echo '<script src="./assets/theam-default/plugins/toastr/toastr.min.js"></script>';
    // echo "<script language=\"JavaScript\">\n";
    // echo "toastr.error('email alerdy taken, Please Try again!')";
    // echo "window.location='CustomerRegistration.php'";
    // echo "</script>";
    header('Location: ./CustomerRegistration.php?msg=email alerdy taken, Please Try again!');
    exit;
}
else{
    $hash = md5($password);
    $cusInsert = "INSERT INTO `registration`(`Name`, `Phone`, `Email`, `Password`, `Address`, `nic`,`status`,`user_type`) VALUES ('$name','$phone','$email','$hash','$address','$nic','active','user')";
if($dbconn->query($cusInsert) === TRUE){
    echo '<script src="./assets/theam-default/plugins/toastr/toastr.min.js"></script>';
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Sucsessfull Registration Login your Account');\n";
    echo "window.location='login.php'";
    echo "</script>";
}else{
    echo '<script src="./assets/theam-default/plugins/toastr/toastr.min.js"></script>';
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Record is not inserted');\n";
    echo "window.location='index.php'";
    echo "</script>";
    $dbconn->connect_error;
}
}
