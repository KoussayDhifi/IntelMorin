<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$nom = $data['nom'];
$prenom = $data['prenom'];

$query = "SELECT ID_TUTOR,F_NAMET,L_NAMET,TEL,SCHOOL,SUBJ,LABELSUBJ FROM TUTOR,SUBJECT WHERE (F_NAMET LIKE '%$nom%' OR L_NAMET LIKE '%$prenom%') AND  SUBJ = ID_SUBJ;";


$res = $conn->query($query);

if ($res->num_rows > 0) {
    $tutors = array();

    while ($row = $res->fetch_assoc()) {
        $tutors[] = $row;
    }

    http_response_code(200);
    echo json_encode(array($tutors));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Prof n'existe pas"));
}