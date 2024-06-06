<?php
include 'C:/react/react-bootstrap/src/Components/messages.json';
header('Access-Control-Allow-Origin : http://localhost:3000');
if (isset($_POST['btn'])){
    $new_message = array(
        "pname" => $_POST['pname'],
        "start_price" => $_POST['start_price'],
        "Category" => $_POST['Category'],
        "delivery_time" => $_POST['delivery_time'],
        "shipping" => $_POST['shipping'],
        "sdate" => $_POST['sdate'],
        "edate" => $_POST['edate'],
        "prodimg" => $_POST['prodimg']
        
    );
    if(filesize("messages.json")==0){
        $first_record=array($new_message);
        $data_to_save=$first_record;
    }
    else{
        $old_records=json_decode(file_get_contents("messages.json"));
        array_push($old_records,$new_message);
        $data_to_save=$old_records;
    }
    if(!file_put_contents("messages.json",json_encode($data_to_save,
    JSON_PRETTY_PRINT),LOCK_EX)){
        echo "error storing messages, please try again";
    }
    else{
        header('location:http://localhost:3000/');
    }
}
?>