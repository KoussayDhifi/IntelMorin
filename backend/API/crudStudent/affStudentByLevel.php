<?php

require_once '../../connect/db_connect.php';


$data = json_decode(file_get_contents('php://input'),true);

$niv = $data['id_level']

$req = "SELECT * FROM STUDENT where levels='$niv' ";
$res = $conn->query($req);

if ($res->num_rows > 0) {
    $salles = array();
    while ($row = $res->fetch_assoc()) {
        $salles[] = $row;
    }
    http_response_code(200);
    echo json_encode($salles);
}

$conn->close();