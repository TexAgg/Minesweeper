<?php
require_once __DIR__ . '/../../vendor/autoload.php';
?>

<div>
	<div>
		<h2>Congratulations!</h2>
		<p>
		<?php 
		$time = $_POST['time'];
		echo $time . ' seconds!';
		?>
		</p>
	</div>
</div>

<?
$_POST = array();
?>