<?php
// Temporary: for debugging.
ini_set('display_errors', 'On');
error_reporting(E_ALL);

require_once __DIR__ . '/../vendor/autoload.php';

include("templates/header.php");

// Include the game.
include('templates/game.php');

// Check if the game is done.
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['time']))
{
    // If the game is done, insert the submission page.
    include('templates/submit.php');
}

include('templates/scores.php');

include("templates/footer.php");
?>