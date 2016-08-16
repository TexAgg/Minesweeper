<?php

namespace App;

class Utils
{
	public static function get_db_params()
	{
		$filename = '/../../config/config.xml';
		$xml = \simplexml_load_file(__DIR__ . $filename);

		return $xml;
	}
}

?>