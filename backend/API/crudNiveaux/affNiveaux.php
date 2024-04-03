<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT * FROM LEVEL;';
$res = $conn->query($req);

if ($res->num_rows>0) {
    $niveaux = array();
    while ($row = $res->fetch_assoc()) {
        $niveaux[] = $row;
    }
    http_response_code(200);
    echo json_encode($niveaux);
}

$conn->close();
