<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$email = $_POST['username'];
$password = $_POST['password'];

$conn = new mysqli('localhost','root','','test');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
else{

$sql = "select * from registration where email like '$email' and password like '$password'";

$result = $conn->query($sql);

$count =mysqli_num_rows($result);

if($count > 0) {
    // fetch the first row of the result 
    // fetches only the first result. if you wanna fetch all results then you have to do a loop
      $row=mysqli_fetch_assoc($result);
  
      // create a new property 
      $row['message'] = 'Succeess!!';
  
      // if we want to print only the message 
      print_r($row['message']);
  
      // if we want to print the whole data in the form that we can read in js
      // JSON, y'all
      //$data = json_encode($row);
      // echo $data;
  }else {
      $row['message'] = 'Name or password is incorrect';
      
      print_r($row['message']);
      
     // $data = json_encode($row);
     // echo $data;
  }
}
  
?>