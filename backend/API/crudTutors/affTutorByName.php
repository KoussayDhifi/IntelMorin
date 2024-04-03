<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$nom = $data['nom'];
$prenom = $data['prenom'];

$query = "SELECT * FROM TUTOR WHERE F_NAMET like(%'$nom'%) AND L_NAMET like (%'$prenom'%)";

$res = $conn->query($query);

if ($res->num_rows > 0) {
    $tutors = array();

    while ($row = $res->fetch_assoc()) {
        $tutors[] = $row;
    }

    http_response_code(200);
    echo json_encode(array($tutors));
}