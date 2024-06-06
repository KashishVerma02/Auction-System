<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$conn = @mysql_connect("localhost", "root", "");
mysql_select_db('auctiondb',$conn);
$datafor = $_POST['datafor'];
if($datafor == 'products'){
$sql = "select * from productinfo where Category='Antiques'";
$result = mysql_query($sql,$conn);
while($row = mysql_fetch_assoc($result))
{
    $data[] = $row; 
}
echo json_encode($data);
}
else if($datafor == 'productdetails'){
    $pid = $_POST['pid'];
    $sql = "select * from productinfo where id=$pid";
    $result = mysql_query($sql,$conn);
    while($row = mysql_fetch_assoc($result))
    {
        $data[] = $row; 
    }
    echo json_encode($data);
    }

?>