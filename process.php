<?php
    // Fetching Data From Input Forms Using AJAX.

    // 1. '$dbConnect': connects to a database called 'ajax_test'.
    $dbConnect = mysqli_connect('localhost', 'root', 'root', 'ajax_test');
    
    echo 'Processing...';
    // 2. 'GET': checks for '$_GET'.
    if(isset($_GET['inputName'])) {
        echo 'GET: Your name is ' . htmlspecialchars($_GET['inputName']);
    }
    
    // 3. 'POST': checks for '$_POST'.
    if(isset($_POST['inputName'])) {
        $user_name = mysqli_real_escape_string($dbConnect, $_POST['inputName']);
        echo 'POST: Your name is ' . htmlspecialchars($_POST['inputName']);
        $sqlQuery = "INSERT INTO users(user_name)
                    VALUES('$user_name')";
        if(mysqli_query($dbConnect, $sqlQuery)) {
            echo ' Good work! User added.';
        }
        else {
            echo 'ERROR (shouting).' . mysqli_error($dbConnect);
        }
    }
?>