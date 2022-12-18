<?php
 $fname = $_POST['fname'];
 $lname = $_POST['lname'];
 $username = $_POST['username'];
 $email = $_POST['email'];
 $nomer = $_POST['nomer'];
 $password = $_POST['password'];

 $conn = new mysqli('localhost','root','','test');

 // Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }else{
    $stmt = $conn->prepare("insert into registration(fname, lname, username, email, nomer, password)
    values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssis",$fname, $lname, $username, $email, $nomer, $password);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
  }
?>