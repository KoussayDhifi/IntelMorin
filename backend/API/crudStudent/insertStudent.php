<?php

require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);

$nom = $data['nom'];
$prenom = $data['prenom'];
$date = $data['date'];
$tel = $data['tel'];
$telp = $data['telp'];
$lycee = $data['lycee'];
$level = $data['niveaux'];
$tutors = $data['tutors'];


$quer = "SELECT * FROM STUDENT WHERE TELS='$tel'";
$res = $conn->query($quer);

if ($res->num_rows > 0) {
    http_response_code(409);
    echo json_encode(array('msg'=>'L\'eleve existe deja'));
}else{

$dateMySQLFormat = date('Y-m-d', strtotime(str_replace('/', '-', $date)));
$query = "INSERT INTO STUDENT (F_NAMES,L_NAMES,BIRTHDATES,TELS,TELPARENT,LEVELS,SCHOOLS) VALUES ('$nom','$prenom','$dateMySQLFormat','$tel','$telp','$level','$lycee');";


if ($conn->query($query) == TRUE) {
    $id = $conn->insert_id;

    try {
    for ($i = 0; $i<count($tutors); $i++) {
        $prof = $tutors[$i]['prof'];
        $fee = $tutors[$i]['fee'];
        $mois = $tutors[$i]['mois'];
        $groupe = $tutors[$i]['groupe'];

    
    $prof = $conn->real_escape_string($prof);
    $fee = intval($fee); 
    $mois = $conn->real_escape_string($mois);
    $groupe = $conn->real_escape_string($groupe);

    $query2 = "INSERT INTO STUDENTTUTOR (STUDI, TUTI, FEE, moisIns,ID_GROUP) VALUES ('$id', '$prof', $fee, '$mois','$groupe')";
    $conn->query($query2);

    }
    http_response_code(201);
    echo json_encode(array("msg" => "Eleve ajoute avec succees"));
    }catch (Exception $e){
        http_response_code(400);
        echo json_encode(array("msg" => "Eleve ajoute mais non assignees au prof"));
    }
}else {
    http_response_code(400);
    echo json_encode(array('msg'=>'repeter une autre fois'));
}
}

$conn->close();