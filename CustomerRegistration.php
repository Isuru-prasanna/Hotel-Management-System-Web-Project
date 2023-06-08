<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/custom/img/favicon.png">

  <title>Title | Registration Page</title>

  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="./assets/theam-default/plugins/fontawesome-free/css/all.min.css">
  <!-- icheck bootstrap -->
  <link rel="stylesheet" href="./assets/theam-default/plugins/icheck-bootstrap/icheck-bootstrap.min.css">

  <link rel="stylesheet" href="./assets/theam-default/plugins/select2/css/select2.min.css">
  <link rel="stylesheet" href="./assets/theam-default/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="./assets/theam-default/dist/css/adminlte.min.css">
  <link rel="stylesheet" href="./assets/theam-default/plugins/toastr/toastr.min.css">
  <link rel="stylesheet" href="./assets/custom/css/custom-style.css">

</head>
<body class="hold-transition register-page">
<div class="register-box">
  <slection class="form my-3 m-5">
    <div class="register-logo signin-logo">
      <a href="/"><img src="./assets/custom/img/logomr.png" alt=""></a>
    </div>

    <div class="card shadow-sm">
      <div class="card-body register-card-body">
        <p class="login-box-msg">Register a new membership</p>

        <form action="./CustomerRegistrationCode.php" method="post" id="signup-form">
          <div class="input-group mb-3">
              <input type="text" class="form-control phone" placeholder="Phone Number" name="phone" id="phone" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-phone-volume"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Full Name" name="name" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Address" name="address" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-map-marker-alt"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="email" class="form-control laxEmail" placeholder="Email" name="email" id="email" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-solid fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="NIC" name="nic" id="nic" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-solid fa-id-card"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control pass" placeholder="Password" id="password" name="password" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Retype password"  id="password_confirmation" name="password_confirmation" required>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="agreeTerms" name="terms" value="agree" required>
                <label for="agreeTerms">
                I agree to the <a href="#">terms</a>
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <a href="./Login.php" class="text-center">I already have a membership</a>
      </div>
      <!-- /.form-box -->
    </div><!-- /.card -->
  </div>
<!-- /.register-box -->
</slection>
</div>
<!-- jQuery -->
<?php if(isset($_GET['msg'])){
    echo "<script>toastr.error(".$_GET['msg'].")</script>";
}?>
<script src="./assets/theam-default/plugins/jquery/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.3/additional-methods.min.js"></script>

<!-- Bootstrap 4 -->
<script src="./assets/theam-default/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE App -->
<script src="./assets/theam-default/dist/js/adminlte.min.js"></script>
<script src="./assets/custom/js/form-validation-init.js"></script>
<script src="./assets/theam-default/plugins/select2/js/select2.full.min.js"></script>
<script src="./assets/theam-default/plugins/toastr/toastr.min.js"></script>

<script>
  // var token = "{{ csrf_token() }}";

  // jQuery(window).on('load', function(){
  //   $('.select2').select2();
  // });


  // $("#phone").focusout(function(){
  //  var phone = $(this).val();
  //  var email = null;
  //   verificationVendorDetails(phone,email);
  //   });
  //   $("#email").focusout(function(){
  //  var phone = null;
  //  var email = $(this).val();
  //   verificationVendorDetails(phone,email);
  //   });
</script>
</body>
</html>

