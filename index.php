<!DOCTYPE html>
<html>
	<head>
		
		<link rel="stylesheet" type="text/css" href="mystyle.css">
		<title>Click on the button</title>
		
		<style>
			div.Title {}
			div.Paragraph {}
			div.Box {}
			div.Picture {}
			div.Click {}
			div.Socio {}
		</style>
	</head>
	<body>
	 <?php
	$servername = "localhost";
	$username = "username";
	$password = "password";

	// Create connection
	$conn = new mysqli($servername, $username, $password);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";
	?> 
		<script src = "Name Project.js"></script>
		
		<audio controls autoplay>
			<source src="210.ogg" type="audio/ogg">
  			<source src="210.mp3" type="audio/mp3">
		</audio>

		<div class = "Title">
		<h1>Hello!</h1>
		</div>
		
		<div class = "Paragraph">
			<p id = "paragraph">Click the button below to begin:</p>
			<button type="button" onclick="lame()">Click</button>
		</div>
		
		<div class = "Socio">
			<img id = "path">
		</div>
		
		<!--div class = "Picture">
		<img src = "6f07ba2ca9038c391df6428fb86910e3.jpg" alt = "Brianna the Fire Starter" style = "width: 320; height: 180;">
		</div-->
		
		<div class = "Click">
			
		</div>
		
		<div class = "Box">
			<p>JumboTron</p>
		</div>
		
	</body>
</html>
