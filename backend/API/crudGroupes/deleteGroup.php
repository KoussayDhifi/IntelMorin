<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);


$group_id = $data['group_id'];


$req = "DELETE FROM GROUP WHERE ID_GROUP = '$group_id' ";


if ($conn->query($req) == TRUE) {
    http_response_code(200);
    echo json_encode(array("msg" => "Groupe Supprimer avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois SVP"));
}

$conn->close();