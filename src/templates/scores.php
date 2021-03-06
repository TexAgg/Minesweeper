<?php
/**
* Get the high scores and display them.
*/

require_once __DIR__ . '/../../vendor/autoload.php';

$params = App\Utils::get_db_params();
$db = new App\Firebase($params->url, $params->secret);

$scores = $db->get_data('scores');
// Sort from lowest to highest.
usort($scores, 'App\Utils::score_compare');
//var_dump($scores);
?>

<div id='scores-wrapper'>
	<h3>High Scores</h3>
	<table>
		<tr>
			<th>Rank</th>
			<th>Name</th>
			<th>Score</th>
		</tr>
		<?php
		for($i = 0; $i < count($scores); $i++)
		{
			echo '<tr>';

			echo '<td>' . ($i+1) . '</td>';
			echo '<td>' . $scores[$i]->name . '</td>';
			echo '<td>' . $scores[$i]->score . '</td>';

			echo '</tr>';
		}
		?>
	</table>
</div>