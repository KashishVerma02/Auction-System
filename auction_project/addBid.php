<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$conn = @mysql_connect("localhost", "root", "");
mysql_select_db('auctiondb',$conn);
$bidamt = $_POST['amt'];
$bidder = $_POST['uid'];
$pid = $_POST['pid'];
$sql = "Insert into bids(pid,uid,bidamt) values($pid,$bidder,$bidamt)";
 if(mysql_query($sql,$conn)){
echo "success";
}
else{
	echo mysql_error($conn);
}
?>