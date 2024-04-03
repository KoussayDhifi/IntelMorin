<?php

require_once '../../connect/db_connect.php';

$req = 'SELECT * FROM PACK,LEVEL,SUBJECTPACK,SUBJECT WHERE LEVELPACK = ID_LEVEL AND ID_PACK=PACKI AND SUBJI = ID_SUBJ';
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