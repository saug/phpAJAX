<?php 

/**
 * Function that connccts to the database
 */
function db_connect(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ajax_db";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if( $conn ){
        return $conn;
    }else{
        die("Sorry! Something went wrong with the database connection.");
    }
}

/**
 * Function that closes the database connection
 */
function db_close( $conn ){
    mysqli_close( $conn );
}

/**
 * Function that queries all user data
 */
function get_all_users( $table_name = "" ){
    $sql = "SELECT * FROM {$table_name}";
    
    $conn = db_connect();
    $result = mysqli_query($conn, $sql);
    db_close( $conn );

    if (mysqli_num_rows($result) > 0) {
        return $result;
    }
}