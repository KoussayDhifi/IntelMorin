<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$id = $data['id'];



$quer = "DELETE FROM STUDENT WHERE ID_STUDENT='$id'";




if ($conn->query($quer) == TRUE) {
    $query2 = "DELETE FROM STUDENTTUTOR WHERE STUDI='$id';";
    if ($conn->query($query2) == TRUE) {
        http_response_code(200);
        echo json_encode(array('msg'=>'Supprimer avec succes!'));
    }
    
}else {
    http_response_code(400);
    echo json_encode(array('msg'=>'repeter une autre fois'));
}


$conn->close();