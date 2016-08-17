<?php

namespace App;

/**
* Static class of utility functions.
*/
class Utils
{
	/**
	* Get the url and secret for the database.
	*
	* @return simplexml An xml object with the children 
	* 'url' and 'secret'.
	*/
	public static function get_db_params()
	{
		$filename = '/../../config/config.xml';
		$xml = \simplexml_load_file(__DIR__ . $filename);

		return $xml;
	}

	/**
	* Callable function used to sort the scores by score.
	*/
	public static function score_compare($lhs, $rhs)
	{
		return ($lhs->score > $rhs->score);
	}

	/**
	* Sort the scores and remove the largest one, 
	* if there are more than 10.
	*/
	public static function trim_scores(&$scores)
	{
		usort($scores, 'self::score_compare');
		if (count($scores) > 10)
			array_pop($scores);
	}
}

?>