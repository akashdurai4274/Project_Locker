<?php
$hostname = "localhost"; // Replace with your hostname
$username = "your_username"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$database = "your_database"; // Replace with your database name

// Create a connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}

// Close the connection
$conn->close();
?>
