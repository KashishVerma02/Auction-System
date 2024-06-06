<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$conn = @mysql_connect("localhost", "root", "");
mysql_select_db('auctiondb',$conn);
$datafor = $_POST['datafor'];
if($datafor == 'products'){
$sql = "select DATEDIFF('edate','sdate'),pname,start_price,Category,delivery_time,shipping,img from productinfo";
$result = mysql_query($sql,$conn);
while($row = mysql_fetch_assoc($result))
{
    $date[] = $row; 
}
echo json_encode($date);
}

?>