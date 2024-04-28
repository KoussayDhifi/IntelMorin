<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$nomp = $data['nom'];
$prenomp = $data['prenom'];
$tel = $data['telp'];
$lycee = $data['lycee'];
$mat = $data['mat'];

$query = "SELECT * FROM TUTOR WHERE TEL='$tel'";
$res =$conn->query($query);

if ($res->num_rows>0) {
    http_response_code(202);
    echo json_encode(array("msg"=>"Prof existe deja"));
}else{

$query = "INSERT INTO TUTOR(F_NAMET,L_NAMET,TEL,SCHOOL,SUBJ) VALUES('$nomp','$prenomp','$tel','$lycee','$mat')";

if($conn->query($query) == TRUE) {
    http_response_code(201);
    echo json_encode(array("msg" => "Prof ajoute avec succees"));
}else {
    http_response_code(400);
    echo json_encode(array("msg" => "Repeter une autre fois"));
}
}
$conn->close();