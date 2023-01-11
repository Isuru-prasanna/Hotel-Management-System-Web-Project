<?php
require_once './config.php';


$name = $_POST["Name"];
$phone = $_POST["Phone"];
$email = $_POST["Email"];
$password = $_POST["Password"];
$address = $_POST["Address"];


$login = mysqli_query($dbconn, "SELECT * FROM Registration WHERE Email='$email' and Password = '$password'");
while ($row = mysqli_fetch_array($login)) {
    $mail = $row["Email"];
    $ipassword = $row["Password"];
  
}
if ($mail === $email && $ipassword === $password) {

$sql = "UPDATE `registration` SET `Name` = '$name', `Email` = '$email',
 `Password` = '$password', `Address` = '$address' WHERE `registration`.`Email` = '$email'";
if ($dbconn->query($sql) === TRUE) {
    echo "<script language=\"JavaScript\">\n";
    echo "alert('Record is  Updated');\n";
    echo "window.location='HomeCustomer.php'";
    echo "</script>";

} else {
    echo "<script>alert('Check your sql query. Record is not update');</script>"; 
    $dbconn->connect_error;
}
}else{
    echo "<script language=\"JavaScript\">\n";
        echo "alert('Access Denied!!!');\n";
        echo "window.location='CustomerAccount.php'";
        echo "</script>";
}
?>