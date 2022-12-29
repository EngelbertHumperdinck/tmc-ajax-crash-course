<?php
    // Retrieve Data From a Database Using AJAX.
    
    // 1. '$conn': connects to a database called 'ajax_test'.
    $dbConnect = mysqli_connect('localhost', 'root', 'root', 'ajax_test');
    
    // 2. '$sqlQuery': sets the query string.
    $sqlQuery = "SELECT * FROM users";
    $result = mysqli_query($dbConnect, $sqlQuery);

    // 3. '$fetchData': assigns the data to a variable.
    $fetchedData = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    // 4. '$fetchData': outputs the data as JSON format.
    echo json_encode($fetchedData);

?>