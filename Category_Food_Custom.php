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
                        <a href="HomeCustomer.php">Home</a>
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

                    $result_name = $row['name'];

                    $_SESSION["name"] = $result_name;


            ?>
                    <form action="INSER_ORDER.php" method="POST">
                        <div class="food-menu-box Form my-4 m-5">
                            <div class="food-menu-img">
                                <img src="PIC/<?php echo $row['img']; ?>" alt="Chicke Hawain Pizza" class="img-responsive img-curve">
                            </div>
                            <div class="food-menu-desc">
                                <label><?php echo $row["name"]; ?></label>
                                <div class="col-xs-3">
                                    <input type="text" class="form-control" id="name" name="name" value="<?php echo $row["name"]; ?>" style='display:none'>
                                </div>
                                <input type="hidden" name="H_name" value="<?php echo "$result_name" ?>" />
                                <p class="food-price"><?php echo $row['price']; ?></p>
                                <div class="col-xs-3">
                                    <input type="text" class="form-control" id="price" name="price" value="<?php echo $row["price"]; ?>" style='display:none'>
                                </div>
                                <p class="food-detail">
                                    <?php echo $row['details']; ?>
                                </p>
                                <button type="submit" name="submit" class="btn btn-primary btn-lg" value="Submit"><?php echo $row['button']; ?></button>
                            </div>
                        </div>
                    </form>
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