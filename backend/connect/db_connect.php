<?php
define('DB_HOST', 'localhost:3307');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'intelmorin');

$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set headers to allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
