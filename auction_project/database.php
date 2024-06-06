<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$country = $_POST['country'];
$mobile = $_POST['mobile'];
$uname = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$pfp=$_POST['pfp'];





// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}
echo "Connected successfully";

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

$sql ="INSERT INTO usersignin (fname,lname,country,mobile,uname,email,password,cpassword,pfp,role)  VALUES ('$fname','$lname','$country','$mobile','$uname','$email','$password','$cpassword','$pfp','$role') ";

if(mysql_query($sql,$conn))
	{
		header('location:http://localhost:3000/');
	}
	else{
		echo mysql_error($conn);
        echo "Error: ";
	}
?>