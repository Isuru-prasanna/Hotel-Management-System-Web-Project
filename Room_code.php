<?php
if (isset($_POST['submit'])) {
	require_once './config.php';

	echo "<pre>";
	print_r($_FILES['my_image']);
	echo "</pre>";

	$img_name = $_FILES['my_image']['name'];
	$img_size = $_FILES['my_image']['size'];
	$tmp_name = $_FILES['my_image']['tmp_name'];
	$error = $_FILES['my_image']['error'];

	
	
	if ($error == 0 ) {
		if ($img_size > 125000) {
			
			$em = "Sorry, your file is too large.";
			header("Location: Admin_Customer_Food.php?error=$em");
		}else{
			
			$img_ex = pathinfo($img_name,PATHINFO_EXTENSION);
			$img_ex_lc = strtolower($img_ex);	
			$allowed_exs = array("jpg", "jpeg", "png");
			if (in_array($img_ex_lc, $allowed_exs)) {
				$new_img_name = uniqid("IMG-", true).'.'.$img_ex_lc;
				$img_upload_path = 'PIC/'.$new_img_name;
				move_uploaded_file($tmp_name, $img_upload_path);
				$name = $_POST["name"];
				$details = $_POST["details"];
				$button = $_POST["button"];
                $bed = $_POST["bed"];
                $air = $_POST["air"];
                $wifi = $_POST["wifi"];
                $bar = $_POST["bar"];
                $bath = $_POST["bath"];
                $tv = $_POST["tv"];
				// Insert into Database
				$sql="INSERT INTO room VALUES ('$new_img_name','$name','$details','$bed','$air','$wifi','$bar','$bath','$tv','$button')";
				if($dbconn->query($sql) === TRUE){
					echo "<script>alert('Updated');</script>";
				header('Location: Admin_Customer_Room.php?');
				}else{
					echo "<script>alert('Record is not inserted');</script>";
					$dbconn->connect_error;
				}
			}else{
				$em="you can't uplode files of this type";
				header('Location: Admin_Customer_Room.php?error=$em');
			}
		}
	}else{
		echo "<script>alert('error 2');</script>";
		$em="unknown error occurred!";
		header('Location: Admin_Customer_Room.php?error=$em');
	}
}else{
	echo "<script>alert('error1');</script>";
	 echo "<script>alert('Record is not  Updated');</script>";
	// header("Location: index.php");
}
?>

