<?php
if(isset($_POST['GUID']) && isset($_POST['password'])){
	$user = $_POST['GUID'];
	$pass= $_POST['password'];

	echo $GUID;
	echo '<br>';
	echo $password;
}

$url = "http://127.0.0.1:3000/merchant/$user/login?password=$pass&api_code=$apcod";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL, $url);
	$ccc = curl_exec($ch);
	$json = json_decode($ccc, true);
	echo "<pre>";
	var_dump($json);
	echo "</pre>";
?>

<form action="login.php" method="POST">
<input type="text" name="GUID" />
<input type="password" name="password" />
<input type="submit" value="Submit" />
</form>