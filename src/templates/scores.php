<?php
/**
* Get the high scores and display them.
*/

require_once __DIR__ . '/../../vendor/autoload.php';

//phpinfo();
//echo $_SERVER['SERVER_NAME'];

$params = App\Utils::get_db_params();
$db = new App\Firebase($params->url, $params->secret);

$scores = $db->get_data('scores');
?>

<div>
	<h3>High Scores</h3>
	<table>
		<tr>
			<th>Name</th>
			<th>Score</th>
		</tr>
		<?php
		for($i = 0; $i < count($scores); $i++)
		{
			echo '<tr>';

			echo '<td>' . $scores[$i]->name . '</td>';
			echo '<td>' . $scores[$i]->score . '</td>';

			echo '</tr>';
		}
		?>
	</table>
</div>