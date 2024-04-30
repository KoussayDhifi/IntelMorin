<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$email = $data['email'];
$password = $data['password'];


$query = "SELECT * FROM ADMIN WHERE EMAILADMIN='$email';";
$res =$conn->query($query);

if ($res->num_rows>0) {
    http_response_code(202);
    echo json_encode(array("msg"=>"Admin existe deja"));
}else{

$query = "INSERT INTO ADMIN(EMAILADMIN,PASSADMIN) VALUES('$email','$password')";

if($conn->query($query) == TRUE) {
    http_response_code(201);
    echo json_encode(array("msg" => "Admin ajoute avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois"));
}
}
$conn->close();