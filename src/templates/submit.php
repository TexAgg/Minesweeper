<?php
/**
* The score is displayed here and,
* if it is high enough, 
* saved as a high-score.
*/

require_once __DIR__ . '/../../vendor/autoload.php';
?>

<div id='submit-wrapper'>
	<div>
		<h2>Congratulations!</h2>
		<p>
		<?php 
		$time = $_SESSION['time'];
		echo $time . ' seconds!';
		?>
		</p>
	</div>
</div>

<?php
/*
	Check the high scores.
	If this score is a high score,
	ask the users names and submit the name and the score to the db.
*/
$params = App\Utils::get_db_params();
$db = new App\Firebase($params->url, $params->secret);

$scores = $db->get_data('scores');

// http://stackoverflow.com/questions/14395631/php-create-object-without-class
$new_score = new stdClass();
$new_score->score = $time;
// Get the actual name with a form.
$new_score->name = 'na';

array_push($scores, $new_score);
App\Utils::trim_scores($scores);

// For debugging.
//var_dump($scores);
$db->put_data('scores', json_encode($scores));
?>