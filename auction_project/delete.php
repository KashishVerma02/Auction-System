<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$username = $_POST['uname'];
$password = $_POST['password'];


// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn); 


$sql ="delete from  usersignin where ";

?>