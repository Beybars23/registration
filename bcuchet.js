function Registrate{
	var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var pass1=document.getElementById("password1").value;
    if(user == ""){
		document.getElementById("error").innerHTML="The username can not be empty.";
	}
    if(pass != pass1){
		document.getElementById("error1").innerHTML="Password is not confirmed.";
	}
    else{
    	alert("Successful user registration.");
    }
}

