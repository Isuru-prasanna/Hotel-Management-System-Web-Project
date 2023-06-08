<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Hotel Category
    </title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <section class="navbar">
        <div class="container">


            <div class="menu text-right">
                <ul>
                    <li>
                        <a href="index.php">Home</a>
                    </li>
                </ul>
            </div>

            <div class="clearfix"></div>
        </div>
    </section>
    <!-- Navbar Section Ends Here -->

    <section class="food-menu">
        <div class="container">
            <h2 class="text-center">Food Menu</h2>
            <?php
            require_once './config.php';
            //write the query to get data from users table

            $sql = "SELECT * FROM food ";
            //execute the query

            $result = $dbconn->query($sql);

            if (mysqli_num_rows($result) > 0) {
                //output data of each row
                while ($row = $result->fetch_assoc()) {


            ?>
             
                    <div class="food-menu-box">
                        <div class="food-menu-img">
                            <img src="PIC/<?php echo $row['img']; ?>" alt="Chicke Hawain Pizza" class="img-responsive img-curve">
                        </div>

                        <div class="food-menu-desc">
                            <h4 name = "name"><?php echo $row['name']; ?></h4>
                            <p class="food-price"><?php echo $row['price']; ?></p>
                            <p class="food-detail">
                            <?php echo $row['details']; ?>
                            </p>
                            <br>

                            <a href="Login.php" class="btn btn-primary"><?php echo $row['button']; ?></a>
                        </div>
                    </div>
            
            <?php
                    $dbconn->connect_error;
                }
            }

            ?>
            <div class="clearfix"></div>



        </div>

    </section>

    <!-- footer Section Starts Here -->
    <section class="footer">
        <div class="container text-center">

        </div>
    </section>
    <!-- footer Section Ends Here -->

</body>

</html>