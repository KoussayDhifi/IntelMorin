<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$prof = $data['id_tut'];

$req = 'SELECT * FROM GROUPE WHERE ID_TUT='$prof';';
$res = $conn->query($req);

if ($res->num_rows>0) {
    $groupes = array();
    while ($row = $res->fetch_assoc()) {
        $groupes[] = $row;
    }
    http_response_code(200);
    echo json_encode($groupes);
}

$conn->close();