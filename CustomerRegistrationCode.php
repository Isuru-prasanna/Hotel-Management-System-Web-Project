<?php
require_once './config.php';

$name = $_POST["customname"];
$phone = $_POST["customphone"];
$email = $_POST["customemail"];
$password = $_POST["custompassword"];
$address = $_POST["customaddress"];
$dupliemail = mysqli_query($dbconn, "SELECT * FROM `registration` WHERE `Email` = '$email'");
$duplipassword = mysqli_query($dbconn, "SELECT * FROM `registration` WHERE `Password` = '$password'");
if(mysqli_num_rows($dupliemail) == 1 ){
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Email alredy taken');\n";
    echo "window.location='CustomerRegistration.php'";
    echo "</script>";
}elseif(mysqli_num_rows($duplipassword) == 1 ){
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Password alredy taken');\n";
    echo "window.location='CustomerRegistration.php'";
    echo "</script>";
}
else{
    $cusInsert = " INSERT INTO `registration`(`Name`, `Phone`, `Email`, `Password`, `Address`) VALUES ('$name','$phone','$email','$password','$address')";
if($dbconn->query($cusInsert) === TRUE){
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Sucsessfull Registration Login your Account');\n";
    echo "window.location='login.php'";
    echo "</script>";
}else{
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Record is not inserted');\n";
    echo "window.location='index.php'";
    echo "</script>";
    $dbconn->connect_error;
}
}
