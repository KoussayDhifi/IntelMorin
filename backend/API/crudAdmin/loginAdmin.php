<?php

require_once '../../connect/db_connect.php';
require_once '../../php-jwt-main/src/JWT.php';

use \Firebase\JWT\JWT;


$data = json_decode(file_get_contents('php://input'),true);

$email = $data['email'];
$password = $data['password'];

if ($email != '' && $password != '') {

$query = "SELECT * FROM ADMIN WHERE EMAILADMIN='$email' and PASSADMIN='$password';";
$res =$conn->query($query);
if ($res) {
    if ($res->num_rows>0) {


    $key = "+1qDokz~!VE7*{o";

    $exp_time = time() + (60 * 60); 


$exp_time = time() + (60 * 60); 

$user = array(
    "email"=>$email,    
    "password"=>$password
);
  
$token = array(
        "iss" => "http://localhost:4200",
        "aud" => "http://localhost:4200",
        "iat" => time(),
        "exp" => $exp_time,
        "data" => $user

    );
    
    $token = array(
            "iss" => "http://localhost:4200",
            "aud" => "http://localhost:4200",
            "iat" => time(),
            "exp" => $exp_time,
            "data" => $user
        );
        
        
    $jwt = JWT::encode($token, $key,'HS256');
        
    http_response_code(200);
    echo json_encode(array("token" => $jwt));

    }else {
        http_response_code(200);
        echo json_encode(array("msg"=>"Email or password is wrong"));
    }
    }else {
        http_response_code(200);
        echo json_encode(array("msg"=>"Email or password is wrong"));
    }
}