<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$labelSub = $data['matiere'];
$quer = "SELECT * FROM SUBJECT WHERE LABELSUBJ='$labelSub'";
$res = $conn->query($quer);

if ($res->num_rows > 0) {
    http_response_code(409);
    echo json_encode(array('msg'=>'La matiere existe deja'));
}else{


$query = "INSERT INTO SUBJECT (LABELSUBJ) VALUES ('$labelSub')";


if ($conn->query($query) == TRUE) {
    http_response_code(201);
    echo json_encode(array('msg'=>'Ajouter avec succes !!'));
}else {
    http_response_code(400);
    echo json_encode(array('msg'=>'Didn\'t work'));
}
}

$conn->close();