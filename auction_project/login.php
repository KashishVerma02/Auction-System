<?php
header('Access-Control-Allow-Origin : http://localhost:3000'); 

$email = $_POST['eml'];
$password = $_POST['pass'];


// Create connection
$conn = @mysql_connect("localhost", "root", "");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysql_connect_error());
}

mysql_select_db('auctiondb',$conn);
//mysql_query($sql,$conn);

$sql ="select * from  usersignin";
$result = mysql_query($sql,$conn);
while($row = mysql_fetch_row($result)){
if($row[6]==$email && $row[7]==$password)
	{
		$flag=1;
        $data=array("uid"=>$row[0],"uname"=>$row[5],"loginstatus"=>"true","role"=>$row[10]);
        echo json_encode($data);
        break;
	}
	else{
		$flag=0;
	}
}
if($flag==0){
    $data=array("loginstatus"=>"false");
    echo json_encode($data);
}
?>