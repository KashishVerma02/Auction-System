<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 




// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}
echo "Connected successfully";

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

if(isset($_POST['updsubmit'])){
$sql ="UPDATE productinfo set start_price = '".$_POST['start_price']."',delivery_time = '".$_POST['delivery_time']."',edate= '".$_POST['edate']."' WHERE pname = '".$_POST['pname']."'";

if(mysql_query($sql,$conn))
	{
		header('location:http://localhost:3000/');
	}
	else{
		echo mysql_error($conn);
        echo "Error: ";
	}
}
?>