<?php
require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);


$id = $data['id'];
$req = "SELECT DISTINCT st.TUTI, ps.MONTHS, ps.YEARS, ps.PAYEDS
        FROM payments ps
        JOIN studenttutor st ON ps.IDSTUDT = st.IDSTUDT
        WHERE st.STUDI = '$id' AND ps.PAYEDS = 1 AND ps.YEARS = YEAR(CURDATE())
        ORDER BY st.TUTI, ps.MONTHS";

$res = $conn->query($req);
if($res->num_rows > 0)
{
    $payments = array();
    while ($row = $res->fetch_assoc()){
        $payments[]=$row;
    }
    http_response_code(200);
    echo json_encode($payments);
}

$conn->close();
?>
