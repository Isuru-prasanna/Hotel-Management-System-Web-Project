<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <script type="text/javascript" src="validation.js"></script>
    <link rel="stylesheet" href=""/>
    <title>Document</title>
</head>

<body>
    <section class="vh-100" style="background-color: #eee;">
        <div class="container h-100">
            <form action="Employee_Account_Code.php" method="post">
                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"></p>
                <form class="mx-1 mx-md-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="d-flex flex-row align-items-center mb-4">
                      
                        <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Your Name </label>
                            <?php
                        require_once './config.php';
                        $sql = "SELECT * FROM AjexData ";
                        //execute the query
            
                        $result = $dbconn->query($sql);
            
                        if (mysqli_num_rows($result) > 0) {
                            //output data of each row
                            while ($row = $result->fetch_assoc()) {
                        ?>
                            <select class="form-control formselect required"id="ajextdataget" name="ajextdataget" onchange="showCustomer(this.value)">
                                <option value="0">Select Name</option>
                              
                                <option value="<?php echo $row['id'];?>"><?php echo $row['name'];?></option>
                               
                            </select>
                            <?php 
                            }
                        }
                            ?>
                        </div>
                    </div>
                    <i class="fa fa-tty" aria-hidden="true"></i>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <input type="text" value="<?php $phone ?>" id="Phone" name="Phone" class="form-control" />
                            <label class="form-label" for="form3Example2c">Your Phone </label>
                            <lable id="n_phone">
                                <lable>
                        </div>
                    </div>

                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                            <input type="email" value="<?php $email ?>" id="Email" name="Email" placeholder="OLD Email Enter" class="form-control" />
                            <label class="form-label" for="form3Example3c">Your Email </label>
                            <lable id="n_email"></lable>
                        </div>
                    </div>
                </form>
            </form>
        </div>
    </section>
    <script>
function showCustomer(str) {
  var xhttp;    
  if (str == "") {
    document.getElementById("Phone").value = "";
    document.getElementById("Email").value = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("Phone").value = this.responseText;
      document.getElementById("Email").value = this.responseText;
    }
  };
  xhttp.open("GET", "q="+str, true);
  xhttp.send();
}
</script>
<?php
 require_once './config.php';
 $data = "SELECT `phone`,`email` FROM `AjexData` WEHRE `id` = $stmt"; 
 $dbconn->query($data);
$stmt = $dbconn->prepare($data);
$stmt->bind_param("s", $_GET['q']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($phone, $email);
$stmt->fetch();
$stmt->close();
?>
</body>

</html>