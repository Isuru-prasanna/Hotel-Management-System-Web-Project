
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
    <title>Document</title>
</head>

<body>
    
    <?php
    
    require_once './config.php';

    if (!isset($_SESSION)) {
        session_start();
    }
    if (!isset($_SESSION['employee_email'])) {
        $_SESSION['employee_email'] = null;
    } else if (isset($_SESSION['employee_email'])) {
        $_SESSION['employee_email'] = $_SESSION['employee_email'];
    }
    if (!isset($_SESSION['user_email'])) {
        $_SESSION['user_email'] = null;
    } else if (isset($_SESSION['user_email'])) {
        $_SESSION['user_email'] = $_SESSION['user_email'];
    }
    if (!isset($_SESSION['admin_email'])) {
        $_SESSION['admin_email'] = null;
    } else if (isset($_SESSION['admin_email'])) {
        $_SESSION['admin_email'] = $_SESSION['admin_email'];
    }

    $empmail = $_SESSION['employee_email'];
    $cusmail =  $_SESSION['user_email'];
    $admail = $_SESSION['admin_email'];

    //get email and search by its true and display relevented nav bar.
    if ($empmail == true) {
    ?>
        <div class="container-fluid p-0 navbar-light">
        <form action="session_destroy.php" method="post">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand text-white" href="Employee_Home.php">Aqurnt Family Hotel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href="Employee_Home.php">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <div class="dropdown">
                                <a class="text-white" href="Employee_AccountView.php" class="nav-link">Account</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <div class="dropdown">
                                <a href="#" class="nav-link text-white">item view</a>
                                <div class="dropdown-content">
                                    <a href="category_food_Custom.php">Food</a>
                                    <a href="category_Room.php">Rooms</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                        <button type="submit" style="background-color:#553443; border:none;" class="text-white">Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </form>
        </div>
    <?php
    }
    if ($cusmail == true) {
    ?>
        <div class="container-fluid p-0 navbar-light text-white">
            <form action="session_destroy.php" method="post">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand text-white" href="HomeCustomer.php">Aqurnt Family Hotel</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="mr-auto"></div>
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="HomeCustomer.php">HOME
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                    <a href="#" class="nav-link text-white">Order</a>
                                    <div class="dropdown-content">
                                        <a href="category_food_Custom.php">Food</a>
                                        <a href="category_Room.php">Rooms</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="CustomerAccount.php">ACCOUNT</a>
                            </li>
                            <li class="nav-item">
                                <button type="submit"  style="background-color:#553443;  border:none;"  class="nav-link text-white">Log Out</button>
                            </li>
                            <div class="nav-item">
                                <i class="fa-solid fa-cart-shopping"></i>

                                <a href="card.php" title="Buy now" class="nav-link text-white">Card</a>
                            </div>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="Abouth.php">ABOUT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </form>
        </div>
    <?php
    }
    if ($admail == true) {
    ?>
        <div class="container-fluid p-0 navbar-light">
            <form action="session_destroy.php" method="post">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand text-white" href="Admin_Page.php">Aqurnt Family Hotel</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="Admin_Page.php">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <a href="#" class="nav-link text-white">Item Add</a>
                                    <div class="dropdown-content">
                                        <a href="Admin_Customer_Food.php">Food</a>
                                        <a href="Admin_Customer_Room.php">Room</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                    <a href="#" class="nav-link text-white">item view</a>
                                    <div class="dropdown-content">
                                        <a href="category_food_Custom.php">Food</a>
                                        <a href="category_Room.php">Rooms</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="EmployeeRegistration.php">Employee registration</a>
                            </li>
                            <li class="nav-item">
                                <button type="submit"  style="background-color:#553443; border:none;"  class="nav-link text-white">Log Out</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </form>
        </div>
    <?php
    } 

    ?>

</body>

</html>