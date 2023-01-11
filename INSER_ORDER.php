<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" href="./Hotel_Login.css" />
</head>

<?php

require_once './config.php';

$name = $_POST["name"];
$price = $_POST["price"];
$email = $_SESSION['user_email'];
?>

<body>
    <slection class="Form my-4 m-5">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-7 px-5 pt-5">
                    <h1 class="font-weigth-bolt py-3">Conform Order</h1>
                    <form action="food_order_code.php" method="post">
                        <div class="col-md-3 position-relative">
                            <label for="validationTooltip04" class="form-label">
                                <h4><?php echo "$name" ?></h4>
                            </label>
                            <div class="col-xs-3">
                                <input type="text" class="form-control" id="name" name="name" value="<?php echo $name ?>" style='display:none'>
                            </div>

                        </div>
                        <div class="from-row">
                            <div class="col-lg-7">
                                <h4><?php echo $email ?></h4>
                                <input type="email" value=" <?php echo $email ?>" name="Email" id="Email" style="display: none;">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <label class="" for="ginNo"> Quantity : </label>
                            <div class="">
                                <input class="form-control" ref="Quantity" type="number" name="Quantity" id="Quantity" onclick="checkprice(this.value)">
                            </div>
                        </div>
                        <div class="from-row">
                            <div class="col-lg-7">
                                <h3>price one pics</h3>
                                <label><?php echo "$price" ?></label>

                                <div class="col-xs-3">
                                    <input type="text" class="form-control" data-no="<?php echo $price ?>" id="price" name="price" value="<?php echo $price ?>" style='display:none'>
                                </div>
                            </div>
                        </div>

                        <div class="from-row">
                            <div class="col-lg-7">
                                <button type="submit" name="submit" value="submit" class="btn1 mt-3 mb-5">Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </slection>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>