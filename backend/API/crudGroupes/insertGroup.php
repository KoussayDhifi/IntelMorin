<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$prof = $data['id_tut'];
$labelGroup = $data['group'];


$req = 'INSERT INTO GROUPE(ID_TUT,LABELGROUPE) VALUES('$prof','$labelGroup');';


if ($conn->query($req) == TRUE) {
    http_response_code(201);
    echo json_encode(array("msg" => "Groupe ajouter avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois SVP"));
}

$conn->close();