<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$conn = @mysql_connect("localhost", "root", "");
mysql_select_db('auctiondb',$conn);
$datafor = $_POST['datafor'];
if($datafor == 'merchants'){
$sql = "select * from usersignin where role='merchant'";
$result = mysql_query($sql,$conn);
while($row = mysql_fetch_assoc($result))
{
    $data[] = $row; 
}
echo json_encode($data);
}
else if($datafor == 'viewdetails'){
    $uid = $_POST['uid'];
    $sql = "select * from usersignin where uid=$uid";
    $result = mysql_query($sql,$conn);
    while($row = mysql_fetch_assoc($result))
    {
        $data[] = $row; 
    }
    echo json_encode($data);
    }

?>