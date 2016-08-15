<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL);

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
        <script src="/scripts/bundle/bundle.min.js"></script>
    </form>
</div>

<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        include('templates/submit.php');
    }
?>

<?php
include("templates/footer.php");
?>