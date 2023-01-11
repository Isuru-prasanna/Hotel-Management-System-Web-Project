<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employee</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <script type="text/javascript" src="validation.js"></script>
  <link rel="stylesheet" href="" />

</head>

<body>

  <section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <!-- <form  method="post">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="d-flex flex-row align-items-center mb-4">
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="Email" name="gmail" placeholder="OLD Email Enter" onblur="emailvalidation()" class="form-control" />
                        <label class="form-label" for="form3Example3c">Your Email</label>
                        <lable id="n_email"></lable>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" name="add" class="btn btn-primary btn-lg" value="Submit">View</button>
                      </div>
                    </div>
                  </form> -->
                  <?php
                  require_once './config.php';
                  //write the query to get data from users table
                  if (isset( $_SESSION['employee_email'])) {
                  $emEmail =  $_SESSION['employee_email'];

                  $sql = "SELECT * FROM employee WHERE email = '$emEmail'";
                  //execute the query

                  $result = $dbconn->query($sql);

                  if (mysqli_num_rows($result) > 0) {
                    //output data of each row
                    while ($row = $result->fetch_assoc()) {
                    

                  ?>

                      <form action="Employee_Account_Code.php" method="post">
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><?php echo $row['name']; ?></p>
                        <form class="mx-1 mx-md-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" value="<?php echo $row['name']; ?>" id="Name" name="Name" onblur="NameValidation()" class="form-control" />
                              <label class="form-label" for="form3Example1c">Your Name </label>
                              <label id="n_Name"></label>
                            </div>
                          </div>
                          <i class="fa fa-tty" aria-hidden="true"></i>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input type="Number" value="<?php echo $row['phone']; ?>" id="Phone" name="Phone" onblur="Phonevalidation()" class="form-control" />
                              <label class="form-label" for="form3Example2c">Your Phone </label>
                              <lable id="n_phone">
                                <lable>
                            </div>
                          </div>
                          
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input type="email" value="<?php echo $row['email']; ?>" id="Email" name="Email" placeholder="OLD Email Enter" onblur="emailvalidation()" class="form-control" />
                              <label class="form-label" for="form3Example3c">Your Email </label>
                              <lable id="n_email"></lable>
                            </div>
                          </div>
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input type="password" value="<?php echo $row['password']; ?>" id="Password" onblur="PasswordValidation()" placeholder="10 character limit" name="Password" class="form-control" />
                              <label class="form-label" for="form3Example4c">Password </label>
                              <lable id="n_password"></lable>
                            </div>
                          </div>
                          <i class="fa fa-address-book" aria-hidden="true"></i>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <div class="form-outline flex-fill mb-0">
                              <input type="text" value="<?php echo $row['address']; ?>" id="Address" name="Address" class="form-control" />
                              <label class="form-label" for="form3Example4cd">Address </label>
                            </div>
                          </div>
                          
                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                         
                            <button type="submit" class="btn btn-primary btn-lg"  onclick="return confirm('Are you sure?')" value="Submit" onclick="ValidationCheck()">Update</button>
                          </div>
                        </form>
                    <?php
                      $dbconn->connect_error;
                    }
                  }
                }
                    ?>
                    <form method="post">
                    <label class="form-label" for="form3Example4cd">Delete Your Account </label>
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                   
                      <button type="submit" name="delete" class="btn btn-primary btn-lg" onclick="return confirm('Are you sure Delete Account?')" value="Submit">Delete</button>
                    </div>
                      </form>
                    <?php
                    require_once './config.php';

                    if (isset($_POST['delete'])) {
                      $empemail = $_SESSION['employee_email'];
                      $sql = "DELETE FROM employee WHERE email='$empemail'";

                      if ($dbconn->query($sql) === TRUE) {
                        echo "<script language=\"JavaScript\">\n";
                        echo "alert('Account Delete Sucsessfull');\n";
                        echo "window.location='index.php'";
                        echo "</script>";
                      } else {
                        echo 'Record is not Delete - ' . $dbconn->connect_error;
                      }
                    }
                    ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  </form>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</body>

</html>