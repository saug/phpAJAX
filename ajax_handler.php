<?php
require "functions.php";

$action = $_POST['action'];
$data = $_POST['dataToSend'];

$fetch_data = get_all_users( 'users' );
$toreturn = "";
if( !empty( $fetch_data ) ){
    while($row = mysqli_fetch_assoc($fetch_data)) {
        $toreturn .= "<tr>";
        $toreturn .= "<th scope='row'>{$row['id']}</th>";
        $toreturn .= "<td>{$row['firstname']}</td>";
        $toreturn .= "<td>{$row['lastname']}</td>";
        $toreturn .= "<td>{$row['username']}</td>";
        $toreturn .= "<td>{$row['email']}</td>";
        $toreturn .= "</tr>";
    }
}else{
    $toreturn .= "<tr>";
    $toreturn .= "<td row='5'>No data found</td>";
    $toreturn .= "</tr>";
}

// echo $toreturn;
echo json_encode( 
    array(
        'status' => '202',
        'html'   => $toreturn,
    )
); 