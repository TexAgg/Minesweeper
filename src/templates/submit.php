<?php
/**
* The score is displayed here and,
* if it is high enough, 
* saved as a high-score.
*/

require_once __DIR__ . '/../../vendor/autoload.php';
?>

<div>
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