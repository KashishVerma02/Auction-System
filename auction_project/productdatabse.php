<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$pname = $_POST['pname'];
$start_price = $_POST['start_price'];
$Category = $_POST['Category'];
$delivery_time = $_POST['delivery_time'];
$shipping = $_POST['shipping'];
$sdate = $_POST['sdate'];
$edate = $_POST['edate'];
$prodimg = $_POST['prodimg'];



// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}
echo "Connected successfully";

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

$sql ="INSERT INTO productinfo (pname,start_price,Category,delivery_time,shipping,sdate,edate,prodimg)  VALUES ('$pname','$start_price','$Category','$delivery_time','$shipping','$sdate','$edate','$prodimg') ";

if(mysql_query($sql,$conn))
	{
		header('location:http://localhost:3000/');
	}
	else{
		echo mysql_error($conn);
        echo "Error: ";
	}
?>