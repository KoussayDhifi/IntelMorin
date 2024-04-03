<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT count(*) FROM STUDENT';
$res = $conn->query($req);

if ($res->num_rows > 0) {
    $students = array();
    while ($row = $res->fetch_assoc()) {
        $students[] = $row;
    }
    http_response_code(200);
    echo json_encode($students);
}

$conn->close();
