<?php
header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
// header('Content-Type: application/json');
include("config.php");
// echo json_encode("123456");
// print_r($conn);
if($_GET['method'] == 'save'){
$userid = $_POST['user_id'];
$username = $_POST['username'];
$picture = $_POST['picture'];
  $sql2 = "SELECT * FROM users WHERE user_id = '".$userid."'";

  $result = $conn->query($sql2);
  if ($result === TRUE) {
  echo "New record created successfully";
} else {
  echo $conn->error;
}
  if ($result->num_rows > 0) {
    echo  "have";
  }else{
    $sql_insert = "INSERT INTO users (user_id,username,picture) VALUES ('".$userid."','".$username."','".$picture."')";
    if ($conn->query($sql_insert) === TRUE) {
    echo "New record created succes";

}else {
  echo $conn->error;
}
}
}

if($_GET['method'] == "getProduct"){
  $sql = "SELECT * FROM products";
  $result = $conn->query($sql);
  $array  = array();
  if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

      array_push($array,$row);
    }
    echo json_encode($array);
  } else {
    echo "0 results";
  }
  $conn->close();
}
if($_GET['method'] == "getProductByid"){
  $sql = "SELECT * FROM products where product_id =".$_GET['id'];
  // echo $sql;
  // exit();
  $result = $conn->query($sql);
  $array  = array();
  if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {

      array_push($array,$row);
    }
    echo json_encode($array);
  } else {
    echo json_encode("0 results");
  }
  $conn->close();
}

?>
