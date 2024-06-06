<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$conn = @mysql_connect("localhost", "root", "");
mysql_select_db('auctiondb',$conn);
$datafor = $_POST['datafor'];
if($datafor == 'products'){
$sql = "select * from productinfo";
$result = mysql_query($sql,$conn);
while($row = mysql_fetch_assoc($result))
{
    $data[] = $row; 
}
echo json_encode($data);
}
else if($datafor == 'productdetails'){
    $pid = $_POST['pid'];
    $sql = "select * from productinfo where pid=$pid";
    $result = mysql_query($sql,$conn);
    while($row = mysql_fetch_assoc($result))
    {
        $data[] = $row; 
    }
    echo json_encode($data);
    }
else if($datafor == 'productbidders'){
    $pid = $_POST['pid'];
    $sql = "select u.uname as uname,b.bidamt as bidamt from bids b inner join usersignin u on b.uid = u.uid where b.pid=$pid";
    $result = mysql_query($sql,$conn);
    while($row = mysql_fetch_assoc($result))
    {
        $data[] = $row; 
    }
    echo json_encode($data);
    }
	else if($datafor == 'winners'){
    $pid = $_POST['pid'];
    $sql = "select u.uname as uname,b.bidamt as bidamt from bids b inner join usersignin u on b.uid = u.uid where b.pid=$pid order by b.bidamt DESC limit 1";
    $result = mysql_query($sql,$conn);
    while($row = mysql_fetch_assoc($result))
    {
        $data[] = $row; 
    }
    echo json_encode($data);
    }

?>