<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$labelSalle = $data['salle'];

$query = "DELETE FROM CLASSROOM WHERE ID_CLASSROOM='$labelSalle'";


if ($conn->query($query) == TRUE) {
    http_response_code(200);
    echo json_encode(array('msg'=>'Supprimer avec succes !!'));
}else {
    http_response_code(400);
    echo json_encode(array('msg'=>'Repeter une autre fois'));
}