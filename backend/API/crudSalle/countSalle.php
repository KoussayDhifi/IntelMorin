<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT count(*) AS classroom_count FROM CLASSROOM';
$res = $conn->query($req);

if ($res->num_rows > 0) {
    
    while ($row = $res->fetch_assoc()) {
        $numberClassroom = $row['classroom_count'];
    }
    http_response_code(200);
    echo json_encode(array('classroom_count'=>$numberClassroom));
}

$conn->close();