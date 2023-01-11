 
 <?php
session_start();
require_once './config.php';

$email = $_POST["CusEmail"];
$password = $_POST["CusPassword"];
$_SESSION['login_typepro']=$email;




$sql = mysqli_query($dbconn, "SELECT * FROM Registration WHERE Email='$email' and Password = '$password'");
while ($row = mysqli_fetch_array($sql)) {
    $mail = $row["Email"];
    $passwordget = $row["Password"];
    $_SESSION['login_typepro'] = $mail;
}
if ($email == $mail && $password == $passwordget) {
    $_SESSION["login"] = true;
    $_SERVER["Email"] = $row["Email"];
    $_SESSION['user_email']=$mail;
    $section = "INSERT INTO `sectionlg`( `password`, `email`) VALUES ('$mail','$passwordget')";
    header("Location:HomeCustomer.php");
    
} else {
echo "<script language=\"JavaScript\">\n";
echo "alert('Access Denied!!!');\n";
echo "window.location='login.php'";
echo "</script>";
}
?>