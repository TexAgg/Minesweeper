<?php
require_once __DIR__ . '/../../vendor/autoload.php';

$params = App\Utils::get_db_params();
$db = new App\Firebase($params->url, $params->secret);
?>

<div>
</div>