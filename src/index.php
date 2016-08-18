<?php
// Temporary: for debugging.
ini_set('display_errors', 'On');
error_reporting(E_ALL);

session_start();

require_once __DIR__ . '/../vendor/autoload.php';

include("templates/header.php");

// Include the game.
include('templates/game.php');

/*
    Post-Redirect-Get with the game score.
    Get the $_POST variable and set it as a $_SESSION variable (or cookie).
    Then, redirect the page (in this case redirecting it to the same page),
    and read the $_SESSION variable, destroying it once you are done.
    The PRG pattern prevents form resubmission once the page is refreshed.
*/
if (count($_POST) > 0)
{
    // Store the $_POST variable as a $_SESSION variable.
    $_SESSION['time'] = $_POST['time'];
    $_SESSION['name'] = $_POST['name'];

    // Redirect the page.
    header("HTTP/1.1 303 See Other");
    header('Location:index.php');
}
else if (count($_SESSION) > 0)
{    
    // Display the score.
    include('templates/submit.php');

    // End the session after removing all variables.
    session_unset();
    session_destroy();
}

// Include the scores.
include('templates/scores.php');

include("templates/footer.php");
?>