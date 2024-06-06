<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 


$email = $_POST['email'];
$message = $_POST['message'];






// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}
echo "Connected successfully";

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

$sql ="INSERT INTO contact (email,message)  VALUES ('$email','$message') ";

if(mysql_query($sql,$conn))
	{
		header('location:http://localhost:3000/');
	}
	else{
		echo mysql_error($conn);
        echo "Error: ";
	}
?>