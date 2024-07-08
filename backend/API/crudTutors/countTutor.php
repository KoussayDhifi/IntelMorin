<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT count(*) AS tutor_count FROM TUTOR';
$res = $conn->query($req);

if ($res->num_rows > 0) {
    
    while ($row = $res->fetch_assoc()) {
        $tutors_number = $row['tutor_count'];
    }
    http_response_code(200);
    echo json_encode(array('tutor_count'=>$tutors_number));
}

$conn->close();