<?php
include("templates/header.php");

// http://rudiv.se/Development/Resource/creating-simple-dynamic-website-and-more-with-php
// Set the default name 
$action = 'game'; 
// Specify some disallowed paths 
$disallowed_paths = array('header', 'footer'); 
if (!empty($_GET['action'])) 
{ 
    $tmp_action = basename($_GET['action']); 
    // If it's not a disallowed path, and if the file exists, update $action 
    if (!in_array($tmp_action, $disallowed_paths) && file_exists("templates/{$tmp_action}.php")) 
        $action = $tmp_action; 
} 
// Include $action 
include("templates/$action.php"); 

include("templates/footer.php");
?>