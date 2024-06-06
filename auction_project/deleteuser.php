<?php 
header('Access-Control-Allow-Origin : http://localhost:3000');
$conn=@mysql_connect('localhost','root','');
mysql_select_db('auctiondb',$conn);
$email = $_POST['eml'];
$pass = $_POST['pass'];
$sql = " delete from usersignin where email='$email' and password ='$pass' ";
if(mysql_query($sql,$conn)){
echo "Success";
}
else{
echo mysql_error($conn);
}
?>