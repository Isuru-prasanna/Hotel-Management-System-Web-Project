<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>card</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="./Style.css" />
    <link rel="stylesheet" href="./mobile-style.css">
</head>

<body>
    <header>
        <div class="container-fluid p-0 navbar-light text-white">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand text-white" href="HomeCustomer.php">Aqurnt Family Hotel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mr-auto"></div>
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <!-- <a class="nav-link text-white" href="HomeCustomer.php">HOME
                                <span class="sr-only">(current)</span>
                            </a> -->
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
                            <a class="nav-link text-white" href="index.php">Logout</a>
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
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12  text-white">
                    <h6 class="text-center">Your Order Details</h6>
                    <table class="table">
                        <thead class="thead-dark ">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Order</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">one pis price</th>
                                <!-- <th scope="col">Action</th> -->
                            </tr>
                        </thead>

                        <?php
                        require_once './config.php';
                        //write the query to get data from users table
                        $sql = "SELECT o.id , o.name , o.picks , f.price FROM orders o
                        INNER JOIN food f ON o.name=f.name";
                        //execute the query

                        $result = $dbconn->query($sql);

                        if (mysqli_num_rows($result) > 0) {
                            //output data of each row
                            while ($row = $result->fetch_assoc()) {
                            $SESSION['id'] =  $row['id'];
                        ?>

                                <tbody class="text-white">
                                    <td><?php echo $row['id']; ?></td>
                                    <td><?php echo $row['name']; ?></td>
                                    <td><?php echo $row['picks']; ?></td>
                                    <td><?php echo $row['price'] ?></td>
                                    <!-- <td>
                                <a href="{{ url('cart.php/'.'<?=$row['id'];?>') }}"  name="delete"   onclick="return confirm('Are you sure Delete Account?')" class="btn btn-danger">Delete</a>
                                <a href="submit" name="Update"  onclick="return confirm('Are you sure?')" class="btn btn-warning">Update</a>
                                     </td> -->
                                    </tr>
                                </tbody>

                        <?php
                            }
                        }


                        if (isset($_POST['delete'])) {
                          $cartid = $_SESSION['id'];
                          $sql = "DELETE FROM orders WHERE id='$cartid'";
    
                          if ($dbconn->query($sql) === TRUE) {
                            echo "<script language=\"JavaScript\">\n";
                            echo "alert('Order Delete Sucsessfull');\n";
                            echo "window.location='CustomerAccount.php'";
                            echo "</script>";
                          } else {
                            echo 'Record is not Delete - ' . $dbconn->connect_error;
                          }
                        }
                        ?>
                    </table>
                </div>
            </div>
        </div>
    </header>
    <footer>

    </footer>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="./main.js"></script>

</html>