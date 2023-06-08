<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="./Style.css" />
    <link rel="stylesheet" href="./mobile-style.css">
</head>

<body>
<?php 
   if (!isset($_SESSION['admin_email'])) {
    $_SESSION['admin_email'] = null;
} else if (isset($_SESSION['admin_email'])) {
    $_SESSION['admin_email'] = $_SESSION['admin_email'];
}
$admin = $_SESSION['admin_email'];

 if($admin == true){
 ?>
    <header>

       <?php  require_once './nav/nav.php'; ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12  text-white">
                    <h6 class="text-center">Customer Details</h6>
                    <table class="table">
                        <thead class="thead-dark text-left">
                            <tr>
                            <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>

                        <?php
                        require_once './config.php';
                        //write the query to get data from users table
                        $sql = "SELECT * FROM registration ";
                        //execute the query

                        $result = $dbconn->query($sql);

                        if (mysqli_num_rows($result) > 0) {
                            //output data of each row
                            while ($row = $result->fetch_assoc()) {
                        ?>
                                <tbody class="text-white">
                                    <tr>
                                    <td><?php echo $row['id']; ?></td>
                                        <td><?php echo $row['Name']; ?></td>
                                        <td><?php echo $row['Phone']; ?></td>
                                        <td><?php echo $row['Email']; ?></td>
                                        <td><?php echo $row['Address']; ?></td>
                                    </tr>
                                </tbody>
                    
            <?php
                            }
                        }
            ?>
            </table>
            <form method="post">
                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                        <input type="text" id="id" placeholder="Enter Customer ID" name="id"  class="form-control" />
                        <label class="form-label" for="form3Example3c">Customer ID </label>
                        <lable id="n_email"></lable>
                    </div>
                </div>
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name="Cdelete"  class="btn btn-primary btn-lg" value="Submit">Delete</button>
                </div>
            </form>
            <?php
            require_once './config.php';

            if (isset($_POST['Cdelete'])) {
             
               
                    $sql = "DELETE FROM `registration` WHERE `id` =".$_POST['id'];
                if ($dbconn->query($sql) == TRUE) {
                    echo "<script language=\"JavaScript\">\n";
                    echo "alert('Record is  Deleted');\n";
                    echo "window.location='Admin_Page.php'";
                    echo "</script>";
                } else {
                    echo "<script language=\"JavaScript\">\n";
                    echo "alert('Record is not Delete - ');\n";
                    echo "window.location='Admin_Page.php'";
                    echo "</script>" . $dbconn->connect_error;
                }
            }
            ?>
                </div>
            </div>
        </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12  text-white">
                    <h6 class="text-center">Employee Details</h6>

                    <table class="table">
                        <thead class="thead-dark ">
                            <tr>
                            <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Password</th>


                            </tr>
                        </thead>

                        <?php
                        require_once './config.php';
                        //write the query to get data from users table
                        $sql = "SELECT * FROM employee ";
                        //execute the query

                        $result = $dbconn->query($sql);

                        if (mysqli_num_rows($result) > 0) {
                            //output data of each row
                            while ($row = $result->fetch_assoc()) {
                        ?>

                                <tbody class="text-white">
                                    <td><?php echo $row['id']; ?></td>
                                    <td><?php echo $row['name']; ?></td>
                                    <td><?php echo $row['phone']; ?></td>
                                    <td><?php echo $row['email']; ?></td>
                                    <td><?php echo $row['address']; ?></td>
                                    <td><?php echo $row['password']; ?></td>
                                    </tr>
                                </tbody>
                    
            <?php
                            }
                        }

            ?>
            </table>
            <form method="post">
                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                        <input type="text" id="id" placeholder="Enter Employee ID" name="id" class="form-control" />
                        <label class="form-label" for="form3Example3c">Employee ID </label>
                        <lable id="n_email"></lable>
                    </div>
                </div>
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name="Edelete" class="btn btn-primary btn-lg" value="Submit">Delete</button>
                </div>
            </form>
            <?php
            require_once './config.php';

            if (isset($_POST['Edelete'])) {
               
                    $sql = "DELETE FROM `employee` WHERE `id`=".$_POST['id'];
                if ($dbconn->query($sql) == TRUE) {
                    echo "<script language=\"JavaScript\">\n";
                    echo "alert('Record is  Deleted');\n";
                    echo "window.location='Admin_Page.php'";
                    echo "</script>";
                } else {
                    echo "<script language=\"JavaScript\">\n";
                    echo "alert('Record is not Delete - ');\n";
                    echo "window.location='Admin_Page.php'";
                    echo "</script>" . $dbconn->connect_error;
                }
            }
            ?>
                </div>
            </div>
        </div>

    </header>
    <footer>
        <div class="container text-center text-white">
            <div class="col-md-12 col-sm-12">
                <h6>Order Details</h6>
                <table class="table text-white">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"  class="text-left">ID</th>
                            <th scope="col"  class="text-left">Name</th>
                            <th scope="col"  class="text-left">Email</th>
                            <th scope="col"  class="text-left">Picks</th>
                            <th scope="col"  class="text-left">Order Time</th>
                            <th scope="col"  class="text-left">Price</th>
                        </tr>
                    </thead>
                    <?php
                    require_once './config.php';
                    //write the query to get data from users table

                    $sql = "SELECT * FROM orders ";
                    //execute the query

                    $result = $dbconn->query($sql);

                    if (mysqli_num_rows($result) > 0) {
                        //output data of each row
                        while ($row = $result->fetch_assoc()) {
                    ?>
                            <tbody class="text-white">
                                <tr>
                                    <td class="text-left"><?php echo $row['id']; ?></td>
                                    <td class="text-left"><?php echo $row['name']; ?></td>
                                    <td class="text-left"><?php echo $row['email']; ?></td>
                                    <td class="text-left"><?php echo $row['picks']; ?></td>
                                    <td class="text-left"><?php echo $row['time']; ?></td>
                                    <td class="text-right"><?php echo $row['price']; ?></td>
                                </tr>
                            </tbody>
                
        <?php
                        }
                    }
        ?>
        </table>
        <form method="post">
                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                        <input type="text" id="id" name="id" placeholder="Enter Order ID"  class="form-control" />
                        <label class="form-label" for="form3Example3c">Order ID </label>
                        <lable id=""></lable>
                    </div>
                </div>
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" name="odelete" class="btn btn-primary btn-lg" value="Submit">Delete</button>
                </div>
            </form>
        
        <?php
        require_once './config.php';

        if (isset($_POST['odelete'])) {
    
            $sql ="DELETE FROM `orders` WHERE `id`=".$_POST['id'];

             if ($dbconn->query($sql) == TRUE) {
                echo "<script language=\"JavaScript\">\n";
                echo "alert('Record is  Deleted');\n";
                echo "window.location='Admin_Page.php'";
                echo "</script>";
            } else {
                echo "<script language=\"JavaScript\">\n";
                echo "alert('Record is not Delete - ');\n";
                echo "window.location='Admin_Page.php'";
                echo "</script>" . $dbconn->connect_error;
            }
        }

        ?>
            </div>
        </div>
    </footer>
    <?php
 }
    else{
        header("Location:Login.php");
    }
    ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="./main.js"></script>

</html>