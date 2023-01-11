<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Costomer Login</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
    crossorigin="anonymous">
  <link rel="stylesheet" href="./Hotel_Login.css" />
  <link rel="stylesheet" href=".">
</head>
<body>
<form action="LoginCode.php" method="post">
<slection class="Form my-4 m-5">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-lg-5">
                <img src="PIC/photo-1540189549336-e6e99c3679fe.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-lg-7 px-5 pt-5">
                <h1 class="font-weigth-bolt py-3">Login</h1>
                <h4>Sing into your account</h4> 
                <form>
                    <div class="from-row">
                        <div class="col-lg-7">
                            <input type="email" name="CusEmail" id="CusEmail" placeholder="Email-Address" class="form-control my-3 p-4">
                        </div>
                    </div>
                    <div class="from-row">
                        <div class="col-lg-7">
                            <input type="password" name="CusPassword" id="CusPassword" placeholder="*******" class="form-control  my-3 p-4">
                        </div>
                    </div>
                    <div class="from-row">
                        <div class="col-lg-7">
                            <button type="submit" name="Login" value="submit" class="btn1 mt-3 mb-5">Login</button>
                        </div>
                    </div>
                    
                    <p>Don't have an account? <a href="CustomerRegistration.php">Register here</a> </p>
                </form>
            </div>
        </div>
    </div>
</slection>
</form>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>
</html>