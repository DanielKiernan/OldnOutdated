function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function lame() {
	
	var name = (prompt("What is your name?")).toLowerCase();
	
	switch ( name ) {
		case "dylan":
			alert("ur gay");
			break;
			
		case "daniel":
			alert("You are awesome");
			break;
			
		case "brianna":
			alert("You are a hamster killer");
			var pic;
			pic = "http://i1131.photobucket.com/albums/m545/the_chief_69/Instagram%20Myers%20pics/1.jpg"
			document.getElementById('path').src = pic;
			break;
			
		case "brooklynn":
			alert("You are a baby");
			break;
			
		case "mitch":
			alert("You are a pedophile");
			break;
			
		case "debra":
			alert("You are a child abuser");
			break;
			
		case "shrek":
			alert("No it is not");
			break;
			
		default:
			alert("Your name is " + capitalizeFirstLetter(name));
	}
}
