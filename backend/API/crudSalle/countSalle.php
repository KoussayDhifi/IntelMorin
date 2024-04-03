<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT count(*) FROM CLASSROOM';
$res = $conn->query($req);

if ($res->num_rows > 0) {
    $CLASSROOM = array();
    while ($row = $res->fetch_assoc()) {
        $CLASSROOM[] = $row;
    }
    http_response_code(200);
    echo json_encode($CLASSROOM);
}

$conn->close();