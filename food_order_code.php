<?php

require_once './config.php';

if (isset($_POST['submit'])) {

    $name = $_POST['name'];
    $email = $_POST['Email'];
    $Quantity = $_POST['Quantity'];
    $time = time();
    $price = $_POST['price'];
    $password = $_POST['password'];

    if ($email == true) {
        $sql = "INSERT INTO `orders` (`name`, `email`, `picks`, `time`,`price`) VALUES ('$name', '$email', '$Quantity', '$time','$price')";
        if ($dbconn->query($sql) === TRUE) {

            echo "<script language=\"JavaScript\">\n";
            echo "alert('You are Order Sucsessfull');\n";
            echo "window.location='HomeCustomer.php'";
            echo "</script>";
        } else {
            echo "<script>alert('Not Add Order');</script>";
            $dbconn->connect_error;
        }
    } else {
        echo "<script language=\"JavaScript\">\n";
        echo "alert('Access Denied!!!');\n";
        echo "window.location='HomeCustomer.php'";
        echo "</script>";
    }
}
