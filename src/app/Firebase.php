<?php
/**
* @author Matt Gaikema
*/

namespace App;
use \Httpful\Request;

require __DIR__ . '/../../vendor/autoload.php';

class Firebase 
{
	
	/**
	* @var string The base url of the Firebase database.
	*/
	private $baseUrl;
	
	/**
	* @var string The secret for the Firebase database.
	*/
	private $secret;

	/**
	* @param string $url The url for a Firebase database.
	* @param string $secret The secret for a Firebase database.
	*/
	public function __construct($url, $secret) 
	{
		$this->baseUrl = $url;
		$this->secret = $secret;
	}

	/**
	* GET JSON data from Firebase.
	* See the Firebase documentation here:
	* https://firebase.google.com/docs/reference/rest/database/#section-get
	*
	* @param string $path The path to read data from.
	* @return object A php object containing a JSON response.
	*/
	public function get_data($path)
	{

		$url = $this->baseUrl . $path . ".json?auth=" . $this->secret; 
		//var_dump($url);

		$response = Request::get($url)
			->expectsJson()
			->send();

		//var_dump($response);
		return $response->body;

	}

	/**
	* PUT JSON data to a Firebase path.
	*
	* @param string $path The path to PUT the data to.
	* @param string $json A json_encoded object to put.
	* @return Httpful\Response The HTTP response.
	*/
	public function put_data($path, $json)
	{
		$url = $this->baseUrl . $path . ".json?auth=" . $this->secret;

		$response = Request::put($url)
			->sendsJson()
			->body($json)
			->send();
		//var_dump($response);
		return $response;	
	}

}