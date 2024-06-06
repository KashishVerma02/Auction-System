<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 





$uname = $_POST['uname'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$email = $_POST['email'];






// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}
echo "Connected successfully";

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

$sql ="INSERT INTO auctionuser (uname,password,cpassword,email)  VALUES ('$uname','$password','$cpassword','$email') ";

if(mysql_query($sql,$conn))
	{
		header('location:http://localhost:3000/');
	}
	else{
		echo mysql_error($conn);
        echo "Error: ";
	}
?>