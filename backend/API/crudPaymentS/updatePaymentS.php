<?php
// Include your database configuration
require_once '../../connect/db_connect.php';

$data = json_decode(file_get_contents('php://input'),true);
$tutor_id = $data['tutor'];
$student_id = $data['student'];
$month = $data['month'];
    // Validate input
    if ($student_id <= 0 || $tutor_id <= 0 || $month <= 0) {
        echo json_encode(["error" => "Invalid input values."]);
        exit;
    }

    $req = "UPDATE PaymentS ps
            JOIN studenttutor st ON ps.IDSTUDT = st.IDSTUDT
            SET ps.payedS = 1
            WHERE st.TUTI = '$tutor_id' AND st.STUDI = '$student_id' AND ps.YearS = YEAR(CURDATE()) AND MONTHS = '$month'";

    // Prepare and execute the statement
    $stmt = $conn->prepare($req);
    if ($stmt === false) {
        echo json_encode(["error" => "Prepare failed: " . $conn->error]);
        exit;
    }

    $stmt->bind_param("ii", $student_id, $tutor_id);
    $result = $stmt->execute();

    // Check if the update was successful
    if ($result) {
        http_response_code(200);
        echo json_encode("UPDATED SUCCESSFULLY");
    } else {
        echo json_encode(["error" => "Error updating records: " . $stmt->error]);
    }

    // Close the connection
    $stmt->close();
    $conn->close();
?>
