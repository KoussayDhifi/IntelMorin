<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$idP = $data['id_prof'];


$query = "DELETE FROM TUTOR WHERE ID_TUTOR='$idP'";

if ($conn->query($query) == TRUE) {
    http_response_code(200);
    echo json_encode(array("msg" => "Prof Supprimer avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois"));
}

$conn->close();