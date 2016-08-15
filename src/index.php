<?php
// Temporary: for debugging.
ini_set('display_errors', 'On');
error_reporting(E_ALL);

require __DIR__ . '/../vendor/autoload.php';

include("templates/header.php");
?>

<div>
    <form id='game_form' action='' method='POST'>
        <div>
            <input type='text' id='timer' name='time'></input>
        </div>
        <div>
            <canvas id="gameCanvas" width="600" height="600"></canvas>
        </div>
        <div>
            <!-- https://www.obkb.com/dcljr/charstxt.html -->
            <label for='remaining_mines'>Remaining mines&#58</label>
            <input type='text' id='remaining_mines' readonly></input>
        </div>
        <script type='text/javascript' src="/scripts/bundle/bundle.min.js"></script>
    </form>
</div>

<?php
    // Check if the game is done.
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        // If the game is done, insert the submission page.
        include('templates/submit.php');
    }
?>

<?php
include("templates/footer.php");
?>