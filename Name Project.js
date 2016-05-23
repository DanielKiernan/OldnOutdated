alert("Linked");
var name = (prompt("What is your name?")).toLowerCase();
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
switch ( name ) {
	case "dylan":
		alert("You don't have handles kid");
		break;
	case "daniel":
		alert("You are awesome");
		break;
	case "brianna":
		alert("You are a sociopath");
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
	default:
		alert("Your name is " + capitalizeFirstLetter(name));
}
