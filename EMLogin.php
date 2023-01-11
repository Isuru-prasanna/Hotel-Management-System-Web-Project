<?php
session_start();
require_once './config.php';

$imail = $_POST["Email"];
$ipassword = $_POST["Password"];

$sql = mysqli_query($dbconn, "SELECT * FROM employee WHERE email='$imail' and password = '$ipassword'");
while ($row = mysqli_fetch_array($sql)) {
    $mail = $row["email"];
    $password = $row["password"];
    $_SESSION['employee_email']=$mail;
}
if ($imail === $mail && $ipassword === $password) {
    header("Location:Employee_Home.php");
    
} else {
    $sql = mysqli_query($dbconn, "SELECT * FROM admin WHERE email='$imail' and password = '$ipassword'");
    while ($row = mysqli_fetch_array($sql)) {
    $mail = $row["email"];
    $password = $row["password"];
    $_SESSION['admin_email']=$mail;
}
if ($imail === $mail && $ipassword === $password) {
    header("Location:Admin_Page.php");
}else{
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Access Denied!!!');\n";
    echo "window.location='Employee.php'";
    echo "</script>";
 }
}
?>