<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$idP = $data['ID_TUTOR'];
$nom = $data['F_NAMET'];
$prenom = $data['L_NAMET'];
$lycee = $data['SCHOOL'];
$tel = $data['TEL'];
$subj = $data['SUBJ'];


$query = "UPDATE TUTOR SET F_NAMET='$nom', L_NAMET='$prenom', TEL='$tel', SCHOOL='$lycee', SUBJ='$subj' WHERE ID_TUTOR='$idP'";


if ($conn->query($query) == TRUE) {
    http_response_code(200);
    echo json_encode(array("msg" => "Prof mis a jour avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois"));
}

$conn->close();